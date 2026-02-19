# Stripe Success Page Setup

To show customers a calming confirmation page after payment, configure your Stripe Payment Links to redirect to the success page.

## Steps

1. Log in to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Go to **Product catalog** → **Payment Links**
3. Edit each Payment Link (Daily $11.11, Weekly $33.33, Monthly $55.55)
4. Under **After payment**, set **Success URL** to:
   - `https://whispernuance.com/success.html` (or your domain)
5. Save

After payment, customers will land on the calming success page, receive a confirmation email with their booked date, and can click anywhere to return home.
