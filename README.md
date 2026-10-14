# IAN-YUHI

Luxury storefront and order-processing project for IAN YUHI.

## Overview

This repo includes a storefront website, checkout flow, admin management pages, and a Node backend for processing orders, sending confirmation emails, and sending SMS notifications.

## Setup

1. Install Node.js if you do not already have it.
2. Run:

```bash
npm install
```

3. Copy `.env.example` to `.env` and configure your email, Twilio, and Stripe credentials.

```bash
cp .env.example .env
```

4. Start the backend:

```bash
npm start
```

## Email configuration

The backend supports both named email services and custom SMTP:

- `EMAIL_SERVICE` (for example `Gmail`)
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_FROM`

If using custom SMTP, also set:

- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_SECURE`

## SMS configuration

Set the following Twilio env vars:

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER`

The buyer phone number from checkout will be used as the SMS recipient.

## Notes

- The payment flow is still simulated in the browser, but real email and SMS sending are handled by the backend.
- If the backend cannot send email or SMS, it will still complete the order and return status flags in the response.
- Admin sessions are now protected with server-side session checks and hashed credentials.
