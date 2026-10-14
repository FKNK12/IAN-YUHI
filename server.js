const fs = require('fs');
const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Twilio = require('twilio');
const Stripe = require('stripe');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const ORDER_STORE_PATH = path.join(__dirname, 'orders.json');
const ADMIN_USERS_PATH = path.join(__dirname, 'admin-users.json');
const CUSTOMERS_PATH = path.join(__dirname, 'customers.json');
const ADMIN_PIN = process.env.ADMIN_PIN || '06012007';

function readJsonFile(filePath, fallbackValue) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed ?? fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function writeJsonFile(filePath, value) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(value, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Failed to save file:', filePath, error.message);
    return false;
  }
}

function loadOrders() {
  try {
    const raw = fs.readFileSync(ORDER_STORE_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveOrders(orders) {
  try {
    fs.writeFileSync(ORDER_STORE_PATH, JSON.stringify(orders, null, 2), 'utf8');
  } catch (error) {
    console.error('Failed to save orders:', error.message);
  }
}

app.use(cors({ origin: true, credentials: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'ian-yuhi-dev-session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 8,
    secure: false
  }
}));

function requireAdminSession(req, res, next) {
  if (!req.session || !req.session.admin) {
    return res.redirect('/admin.html');
  }
  return next();
}

app.get('/admin.html', (req, res, next) => {
  if (req.session && req.session.admin) {
    return res.redirect('/admin-dashboard.html');
  }
  return next();
});

app.get('/admin-dashboard.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-create.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-products.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-catalog.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-users.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-customers.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-payment-processor.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-pending-payments.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-processed-orders.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-orders.html', requireAdminSession, (req, res, next) => next());
app.get('/admin-integrations.html', requireAdminSession, (req, res, next) => next());

app.post('/api/auth/admin/login', express.json(), async (req, res) => {
  const { email, password, pin } = req.body || {};
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPassword = String(password || '').trim();
  const normalizedPin = String(pin || '').trim();

  if (!normalizedEmail || !normalizedPassword) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const users = readJsonFile(ADMIN_USERS_PATH, []);
  const matchingAdmin = users.find(user => String(user.email || '').trim().toLowerCase() === normalizedEmail);

  if (!matchingAdmin) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }

  const validPassword = await bcrypt.compare(normalizedPassword, matchingAdmin.passwordHash || '');
  const validPin = normalizedPin && normalizedPin === ADMIN_PIN;

  if (!validPassword && !validPin) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }

  req.session.admin = {
    id: matchingAdmin.id,
    name: matchingAdmin.name,
    email: matchingAdmin.email,
    permissions: matchingAdmin.permissions || { admin: true, shop: true, checkout: true, view: true }
  };

  return res.json({
    ok: true,
    admin: req.session.admin,
    message: 'Admin login successful.'
  });
});

app.post('/api/auth/admin/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true, message: 'Logged out.' });
  });
});

app.get('/api/auth/admin/me', (req, res) => {
  if (!req.session || !req.session.admin) {
    return res.status(401).json({ authenticated: false });
  }
  return res.json({ authenticated: true, admin: req.session.admin });
});

app.post('/api/auth/customer/signup', express.json(), async (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body || {};
  const normalizedName = String(name || '').trim();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPhone = String(phone || '').trim();
  const normalizedPassword = String(password || '').trim();
  const normalizedConfirm = String(confirmPassword || '').trim();

  if (!normalizedName || !normalizedEmail || !normalizedPhone || !normalizedPassword) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  if (normalizedPassword.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  }

  if (normalizedPassword !== normalizedConfirm && normalizedConfirm) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  const customers = readJsonFile(CUSTOMERS_PATH, []);
  if (customers.some(customer => String(customer.email || '').trim().toLowerCase() === normalizedEmail)) {
    return res.status(409).json({ error: 'An account with this email already exists. Please log in instead.' });
  }

  const newCustomer = {
    id: `customer-${Date.now()}`,
    name: normalizedName,
    email: normalizedEmail,
    phone: normalizedPhone,
    passwordHash: await bcrypt.hash(normalizedPassword, 12),
    createdAt: new Date().toISOString()
  };

  customers.push(newCustomer);
  writeJsonFile(CUSTOMERS_PATH, customers);

  req.session.customer = {
    id: newCustomer.id,
    name: newCustomer.name,
    email: newCustomer.email,
    phone: newCustomer.phone,
    createdAt: newCustomer.createdAt
  };

  return res.status(201).json({ ok: true, customer: req.session.customer, message: 'Account created successfully.' });
});

app.post('/api/auth/customer/login', express.json(), async (req, res) => {
  const { email, password } = req.body || {};
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPassword = String(password || '').trim();

  if (!normalizedEmail || !normalizedPassword) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const customers = readJsonFile(CUSTOMERS_PATH, []);
  const customer = customers.find(item => String(item.email || '').trim().toLowerCase() === normalizedEmail);

  if (!customer) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  const validPassword = await bcrypt.compare(normalizedPassword, customer.passwordHash || '');
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  req.session.customer = {
    id: customer.id,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    createdAt: customer.createdAt
  };

  return res.json({ ok: true, customer: req.session.customer, message: 'Login successful.' });
});

app.post('/api/auth/customer/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true, message: 'Logged out.' });
  });
});

app.get('/api/auth/customer/me', (req, res) => {
  if (!req.session || !req.session.customer) {
    return res.status(401).json({ authenticated: false });
  }
  return res.json({ authenticated: true, customer: req.session.customer });
});

app.post('/api/auth/admin/create', express.json(), async (req, res) => {
  const { name, email, password, pin } = req.body || {};
  const normalizedName = String(name || '').trim();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPassword = String(password || '').trim();
  const normalizedPin = String(pin || '').trim();

  if (!normalizedName || !normalizedEmail || !normalizedPassword) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  if (normalizedPin !== ADMIN_PIN) {
    return res.status(403).json({ error: 'Invalid admin PIN.' });
  }

  const users = readJsonFile(ADMIN_USERS_PATH, []);
  if (users.some(user => String(user.email || '').trim().toLowerCase() === normalizedEmail)) {
    return res.status(409).json({ error: 'An admin with this email already exists.' });
  }

  const newAdmin = {
    id: `admin-${Date.now()}`,
    name: normalizedName,
    email: normalizedEmail,
    passwordHash: await bcrypt.hash(normalizedPassword, 12),
    permissions: { admin: true, shop: true, checkout: true, view: true }
  };

  users.push(newAdmin);
  writeJsonFile(ADMIN_USERS_PATH, users);

  req.session.admin = {
    id: newAdmin.id,
    name: newAdmin.name,
    email: newAdmin.email,
    permissions: newAdmin.permissions
  };

  return res.status(201).json({ ok: true, admin: req.session.admin, message: 'Admin created successfully.' });
});

app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  if (!stripe) {
    return res.status(500).send('Stripe is not configured.');
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret || !sig) {
    return res.status(400).send('Missing webhook signature or webhook secret.');
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Stripe webhook verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object;
      console.log('Payment intent succeeded:', paymentIntent.id);
      const orderId = sanitizeString(paymentIntent.metadata.orderId || '', 64);
      if (orderId) {
        const orders = loadOrders();
        const storedOrder = orders.find(o => String(o.id) === String(orderId));
        if (storedOrder) {
          storedOrder.paymentConfirmed = false;
          storedOrder.paymentStatus = 'Pending Admin Payment Review';
          storedOrder.status = 'Pending Payment';
          storedOrder.paidAt = new Date().toISOString();
          storedOrder.transactionId = paymentIntent.id;
          saveOrders(orders);
        }
      }
      break;
    }
    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object;
      console.warn('Payment intent failed:', paymentIntent.id);
      const orderId = sanitizeString(paymentIntent.metadata.orderId || '', 64);
      if (orderId) {
        const orders = loadOrders();
        const storedOrder = orders.find(o => String(o.id) === String(orderId));
        if (storedOrder) {
          storedOrder.paymentConfirmed = false;
          storedOrder.paymentStatus = 'Failed';
          storedOrder.status = 'Payment Failed';
          saveOrders(orders);
        }
      }
      break;
    }
    default:
      console.log(`Unhandled Stripe event type: ${event.type}`);
  }

  res.json({ received: true });
});

app.use(express.json());

// Serve static frontend files from workspace root
app.use(express.static(path.join(__dirname)));

const emailTransporter = (() => {
  const service = process.env.EMAIL_SERVICE;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT;
  const secure = process.env.EMAIL_SECURE === 'true';

  if (!user || !pass) return null;

  if (service) {
    return nodemailer.createTransport({
      service,
      auth: { user, pass }
    });
  }

  if (host) {
    return nodemailer.createTransport({
      host,
      port: Number(port) || 587,
      secure,
      auth: { user, pass }
    });
  }

  return null;
})();

const twilioClient = (() => {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) return null;
  return Twilio(sid, token);
})();

const stripe = process.env.STRIPE_SECRET_KEY ? Stripe(process.env.STRIPE_SECRET_KEY) : null;

function generateTransactionId() {
  return `TX${Math.random().toString(36).slice(2, 12).toUpperCase()}`;
}

function generateConfirmation() {
  return `CN${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
}

function generateTracking() {
  return `TRK${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()) && email.trim().length <= 254;
}

function sanitizeString(value, maxLength = 255) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function sanitizePhone(value) {
  if (typeof value !== 'string') return '';
  const digits = value.replace(/[^0-9+]/g, '');
  return digits.slice(0, 20);
}

function normalizeCurrency(currency) {
  if (typeof currency !== 'string') return 'usd';
  const normalized = currency.trim().toLowerCase();
  return normalized === 'usd' ? 'usd' : 'usd';
}

async function sendEmail(order) {
  if (!emailTransporter) {
    return { sent: false, warning: 'Email transporter not configured.' };
  }

  const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;
  const subject = `IAN YUHI Order Confirmation ${order.confirmation}`;
  const body = `Hello ${order.name},\n\nThank you for your order. Your confirmation number is ${order.confirmation} and tracking number is ${order.tracking}.\n\nOrder total: $${order.total.toFixed(2)}\n\nWe will notify you once shipment begins.\n\nRegards,\nIAN YUHI`; 

  const message = {
    from,
    to: order.email,
    subject,
    text: body
  };

  await emailTransporter.sendMail(message);
  return { sent: true };
}

async function sendSms(order) {
  if (!twilioClient || !process.env.TWILIO_FROM_NUMBER || !order.phone) {
    return { sent: false, warning: 'SMS not configured or no phone number.' };
  }

  const body = `IAN YUHI order confirmed! CN:${order.confirmation} TRK:${order.tracking}. Thank you!`;
  await twilioClient.messages.create({
    from: process.env.TWILIO_FROM_NUMBER,
    to: order.phone,
    body
  });
  return { sent: true };
}

app.post('/api/create-payment-intent', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: 'Stripe is not configured. Set STRIPE_SECRET_KEY in your environment.' });
  }

  const { amount, currency, metadata } = req.body || {};
  const normalizedCurrency = normalizeCurrency(currency);

  if (!Number.isInteger(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount provided for payment intent.' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: normalizedCurrency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        name: sanitizeString(metadata?.name || ''),
        email: sanitizeString(metadata?.email || ''),
        orderId: sanitizeString(metadata?.orderId || ''),
      }
    });

    return res.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post('/api/process-order', async (req, res) => {
  const order = req.body || {};
  const name = sanitizeString(order.name || '');
  const email = sanitizeString(order.email || '');
  const phone = sanitizePhone(order.phone || '');
  const address = sanitizeString(order.address || '', 500);
  const paymentIntentId = sanitizeString(order.paymentIntentId || '');
  const total = Number(order.total);
  const paymentRequested = Boolean(order.paymentConfirmed);

  if (!name || !isValidEmail(email) || Number.isNaN(total) || total <= 0) {
    return res.status(400).json({ error: 'Order payload is missing required or valid fields.' });
  }

  const confirmation = sanitizeString(order.confirmation || generateConfirmation(), 64);
  const tracking = sanitizeString(order.tracking || generateTracking(), 64);
  let paymentConfirmed = false;
  let paymentStatus = 'Pending admin confirmation';
  let status = sanitizeString(order.status || 'Processing', 64);
  let transactionId = sanitizeString(order.transactionId || '', 64);
  let paidAt = null;

  if (paymentRequested && paymentIntentId && stripe) {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      if (paymentIntent && paymentIntent.status === 'succeeded') {
        paymentConfirmed = true;
        paymentStatus = 'Confirmed';
        status = 'Confirmed';
        paidAt = order.paidAt ? new Date(order.paidAt).toISOString() : new Date().toISOString();
        transactionId = paymentIntent.id;
      } else {
        paymentStatus = 'Pending admin confirmation';
        status = 'Processing';
      }
    } catch (error) {
      paymentStatus = 'Pending admin confirmation';
      status = 'Processing';
    }
  }

  if (!paymentConfirmed && order.paymentConfirmed) {
    paymentStatus = 'Pending admin confirmation';
    status = 'Processing';
  }

  transactionId = transactionId || generateTransactionId();

  const completedOrder = {
    id: sanitizeString(order.id || `${Date.now()}`),
    name,
    email,
    phone,
    address,
    items: Array.isArray(order.items) ? order.items : [],
    total,
    paymentMethod: sanitizeString(order.paymentMethod || 'Unknown', 64),
    confirmation,
    tracking,
    transactionId,
    paymentConfirmed,
    paymentStatus,
    status,
    paidAt,
    createdAt: sanitizeString(order.createdAt || new Date().toISOString(), 64),
  };

  let emailResult = { sent: false, warning: 'Not attempted.' };
  let smsResult = { sent: false, warning: 'Not attempted.' };

  try {
    emailResult = await sendEmail(completedOrder);
  } catch (error) {
    emailResult = { sent: false, error: error.message };
  }

  try {
    smsResult = await sendSms(completedOrder);
  } catch (error) {
    smsResult = { sent: false, error: error.message };
  }

  const orders = loadOrders();
  const existingIndex = orders.findIndex(o => String(o.id) === String(completedOrder.id));
  if (existingIndex >= 0) {
    orders[existingIndex] = completedOrder;
  } else {
    orders.push(completedOrder);
  }
  saveOrders(orders);

  res.json({
    order: completedOrder,
    emailResult,
    smsResult,
    info: 'Order processed. Email and SMS attempted if configured.'
  });
});

app.get('/api/admin/orders', (req, res) => {
  const orders = loadOrders();
  res.json(orders);
});

// Fallback to index.html for non-API GET requests (single-page friendly)
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({ error: 'Not found' });
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Delete an order by id (admin)
app.delete('/api/admin/orders/:id', (req, res) => {
  const id = String(req.params.id || '').trim();
  if (!id) return res.status(400).json({ error: 'Missing order id' });
  const orders = loadOrders();
  const idx = orders.findIndex(o => String(o.id) === id);
  if (idx === -1) return res.status(404).json({ error: 'Order not found' });
  const removed = orders.splice(idx, 1)[0];
  saveOrders(orders);
  res.json({ removed, info: 'Order deleted' });
});

app.listen(port, () => {
  console.log(`IAN YUHI backend running at http://localhost:${port}`);
});
