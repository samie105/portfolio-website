# Gmail SMTP Setup Guide

## Setting up Gmail SMTP for Contact Form

### 1. Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Turn on 2-Step Verification if not already enabled

### 2. Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Scroll down to "App passwords"
4. Click "Generate app password"
5. Select "Mail" as the app
6. Copy the 16-character password (no spaces)

### 3. Environment Variables
Create a `.env.local` file in your project root with:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

**Important Notes:**
- Use your actual Gmail address for `GMAIL_USER`
- Use the generated App Password (NOT your regular Gmail password) for `GMAIL_APP_PASSWORD`
- The App Password should be 16 characters without spaces
- Never commit the `.env.local` file to version control

### 4. Testing
After setting up the environment variables:
1. Restart your development server
2. Fill out the contact form on your website
3. Check your Gmail inbox for the contact form submission

### 5. Security Tips
- Keep your App Password secure
- Regenerate the App Password if compromised
- Consider using a dedicated Gmail account for your portfolio
- The email will be sent TO yourself FROM your Gmail account

### 6. Troubleshooting
- **"Invalid credentials"**: Double-check your Gmail address and App Password
- **"Authentication failed"**: Ensure 2FA is enabled and you're using an App Password
- **"Connection refused"**: Check your internet connection and Gmail settings
- **"Rate limited"**: Gmail has sending limits, wait a few minutes between tests

Your contact form will now send real emails to your Gmail inbox! 📧
