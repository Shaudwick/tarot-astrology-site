# Email Configuration

## EmailJS Setup

All booking form submissions are configured to send to: **c_route@yahoo.com**

### Configuration Steps:

1. **Log in to EmailJS** (https://www.emailjs.com/)
2. **Go to Email Templates**
3. **Update template_fcvr94b** (Astrologist notification template):
   - Set "To Email" field to: `c_route@yahoo.com`
   - Ensure the template includes all form fields:
     - `{{user_name}}`
     - `{{user_email}}`
     - `{{user_phone}}`
     - `{{message}}`
     - `{{preferred_date}}`
     - `{{package_name}}`
     - `{{package_price}}`
     - `{{package_duration}}`

4. **Verify template_aybycuf** (Guest confirmation):
   - This sends a confirmation to the customer
   - Uses `{{user_email}}` as the recipient

### Current EmailJS Settings:
- Service ID: `service_6itarzq`
- Public Key: `Kh4L6GyJRqfgckSwt`
- Astrologist Template: `template_fcvr94b` → **c_route@yahoo.com**
- Guest Template: `template_aybycuf` → Customer's email

### Testing:
After configuration, test the booking form to ensure emails are delivered to c_route@yahoo.com.

