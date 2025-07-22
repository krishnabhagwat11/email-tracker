# Email Tracking Pixel Server

A simple Node.js server that serves a 1x1 transparent tracking pixel for email tracking.

## Features

- Serves a 1x1 transparent GIF pixel
- Logs when emails are opened with timestamps
- Captures IP address and user agent information
- Compatible with email clients (Gmail, Outlook, etc.)

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Generate the pixel file:
   ```
   node create-pixel.js
   ```
4. Start the server:
   ```
   npm start
   ```

For development with auto-reload:
```
npm run dev
```

## Usage

To track email opens, embed the following HTML in your email:
```html
<img src="https://your-server-url/track?email=recipient@example.com" alt="" width="1" height="1" />
```

Replace `your-server-url` with your actual server URL and `recipient@example.com` with the recipient's email address.

## API

- `GET /`: Returns a simple message indicating the server is running
- `GET /track?email=user@example.com`: Returns a tracking pixel and logs the email open event

## Deploying to Render

1. Push your code to a GitHub repository

2. Create a new Web Service in Render:
   - Sign in to [Render](https://render.com)
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Give your service a name
   - Set the Build Command to: `npm install && node create-pixel.js`
   - Set the Start Command to: `npm start`
   - Choose the Free or Standard plan
   - Click "Create Web Service"

3. Environment Variables:
   - No additional environment variables are required, as the server uses `process.env.PORT` which Render sets automatically

4. Access your tracking pixel at:
   ```
   https://your-render-service.onrender.com/track?email=user@example.com
   ```

## License

MIT 