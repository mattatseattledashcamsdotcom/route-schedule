// Copy this file to config.js and fill in your credentials.
// config.js is gitignored — never commit it to the repo.
//
// Setup steps:
//  1. Go to https://console.cloud.google.com/
//  2. Create a new project (e.g. "Route Schedule")
//  3. Enable the Google Calendar API
//  4. Create OAuth 2.0 credentials → Web application
//     - Add your site URL to "Authorized JavaScript origins"
//     - Add your site URL to "Authorized redirect URIs"
//  5. Create an API Key (restrict it to Calendar API)
//  6. Paste both below and save as config.js

window.GAPI_CONFIG = {
  CLIENT_ID: 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com',
  API_KEY:   'YOUR_API_KEY_HERE'
};
