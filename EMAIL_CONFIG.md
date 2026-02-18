# Email Configuration — Whisper Nuance

## Booking notifications

All booking form submissions are configured to notify: **Whissspernuance@gmail.com**

Customer confirmations are sent to the email address they enter on the form and include their **chosen date and time**.

---

## EmailJS setup

1. Log in at [EmailJS](https://www.emailjs.com/).
2. Open **Email Templates**.

### Owner notification (you)

- **Template:** `template_fcvr94b` (or your “new booking” template).
- **To Email:** `Whissspernuance@gmail.com`
- **Subject (example):** `New booking: {{package_name}} — {{booking_date}} at {{booking_time}}`
- **Body:** Include at least:
  - `{{user_name}}`
  - `{{user_email}}`
  - `{{user_phone}}`
  - `{{message}}`
  - `{{booking_date}}`
  - `{{booking_time}}`
  - `{{package_name}}`
  - `{{package_price}}`
  - `{{package_duration}}`

### Customer confirmation

- **Template:** `template_aybycuf` (or your “booking confirmation” template).
- **To:** `{{user_email}}`
- **Subject (example):** `Your Whisper Nuance reading is confirmed — {{booking_date}} at {{booking_time}}`
- **Body:** Include the customer’s chosen **date** and **time** so they have a clear confirmation.

---

## Current EmailJS settings (in code)

- Service ID: `service_6itarzq`
- Public Key: `Kh4L6GyJRqfgckSwt`
- Owner template: `template_fcvr94b` → set **To** to **Whissspernuance@gmail.com**
- Guest template: `template_aybycuf` → sends to `{{user_email}}` with confirmation including chosen date/time

## Website

- **URL:** https://whispernuance.com
