# Firebase and Custom Domain Setup

This portfolio is ready for Firebase, but Firebase is not assumed to be configured yet. The contact form writes to the `contactMessages` Firestore collection only after you add your real Firebase values.

Official Firebase references:
- Web app setup: https://firebase.google.com/docs/web/setup
- Firestore setup: https://firebase.google.com/docs/firestore/quickstart
- Firestore security rules: https://firebase.google.com/docs/firestore/security/get-started
- Firebase CLI: https://firebase.google.com/docs/cli
- Hosting quickstart: https://firebase.google.com/docs/hosting/quickstart
- Custom domain setup: https://firebase.google.com/docs/hosting/custom-domain

## 1. Create the Firebase project

1. Open https://console.firebase.google.com/
2. Click **Add project**.
3. Use a project name like `pralad-portfolio`.
4. Google Analytics is optional for this portfolio. You can disable it for a simpler setup.
5. Click **Create project**.

## 2. Register the web app and get config values

1. Inside the Firebase project overview, click the web icon: `</>`.
2. App nickname: `Pralad Portfolio`.
3. Do not enable Hosting in this wizard if you want to follow the CLI steps below.
4. Click **Register app**.
5. Firebase shows a `firebaseConfig` object. Copy these values:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

## 3. Create the Vite `.env` file

Create `portfolio-frontend/.env` by copying `portfolio-frontend/.env.example`.

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_web_app_id
```

The code already reads these values in `src/firebase/firebaseConfig.js`. Vite only exposes browser environment variables that start with `VITE_`.

After editing `.env`, restart the local dev server.

## 4. Enable Firestore

1. In Firebase console, open **Databases & Storage > Firestore**.
2. Click **Create database**.
3. Choose a region close to your expected visitors. A nearby Asia region is usually sensible for Nepal.
4. Choose **Production mode** if available, then publish the rules below. If you choose **Test mode** while experimenting, replace the rules immediately before sharing the site.
5. Click **Create**.

## 5. Publish Firestore rules for the contact form

The repo includes `portfolio-frontend/firestore.rules`. It allows public visitors to create contact messages but blocks public reads, updates, and deletes.

Rules summary:
- Collection: `contactMessages`
- Allowed: create only
- Denied: read, update, delete
- Required fields: `fullName`, `email`, `subject`, `message`, `createdAt`, `source`

To paste manually:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /contactMessages/{messageId} {
      allow read, update, delete: if false;
      allow create: if isValidContactMessage();
    }

    match /{document=**} {
      allow read, write: if false;
    }

    function isValidContactMessage() {
      return request.resource.data.keys().hasOnly([
          'fullName',
          'email',
          'subject',
          'message',
          'createdAt',
          'source'
        ])
        && request.resource.data.fullName is string
        && request.resource.data.fullName.size() >= 1
        && request.resource.data.fullName.size() <= 100
        && request.resource.data.email is string
        && request.resource.data.email.matches('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')
        && request.resource.data.subject is string
        && request.resource.data.subject.size() >= 1
        && request.resource.data.subject.size() <= 140
        && request.resource.data.message is string
        && request.resource.data.message.size() >= 1
        && request.resource.data.message.size() <= 2000
        && request.resource.data.source == 'portfolio-contact-page'
        && request.resource.data.createdAt is timestamp;
    }
  }
}
```

Manual publish path:
1. Firebase console > **Databases & Storage > Firestore > Rules**.
2. Paste the rules.
3. Click **Publish**.

CLI publish path is in step 7.

## 6. Install and log in to Firebase CLI

Firebase CLI requires Node.js 18 or newer.

```bash
npm install -g firebase-tools
firebase login
firebase projects:list
```

`firebase login` opens a browser window. Use the Google account that owns your Firebase project.

## 7. Initialize Firebase in this Vite project

Run these commands from `portfolio-frontend`:

```bash
firebase init hosting firestore
```

Recommended answers:
- Select your new Firebase project.
- Firestore rules file: `firestore.rules`
- Firestore indexes file: press Enter for the default, or skip indexes if prompted.
- Public directory: `dist`
- Configure as a single-page app: `Yes`
- Set up automatic builds/deploys with GitHub: optional
- If asked to overwrite `firebase.json`: choose `No`, because this repo already has the correct hosting config.

If Firebase creates `.firebaserc`, check that it points to your real project ID.

## 8. Build and deploy

```bash
npm run build
firebase deploy --only hosting,firestore
```

After deploy, Firebase prints hosting URLs like:
- `https://your-project-id.web.app`
- `https://your-project-id.firebaseapp.com`

Test the contact form on the deployed URL, then check Firebase console > **Firestore > Data > contactMessages**.

## 9. Connect `praladneupane.com.np`

1. In Firebase console, open **Hosting**.
2. Click **Add custom domain**.
3. Enter `praladneupane.com.np`.
4. If you also want `www.praladneupane.com.np`, add it too or set up a redirect when Firebase asks.
5. Continue until Firebase gives DNS records.

## 10. Where to add DNS records

Add DNS records wherever the domain's nameservers are managed:
- If your `.com.np` domain uses your registrar/DNS provider panel, open that panel and find **DNS Management**, **DNS Zone**, or **Manage DNS**.
- If you moved nameservers to Cloudflare, add the records in **Cloudflare > DNS > Records**.
- If another host controls the nameservers, add the records in that host's DNS panel.

The important rule: add records at the DNS provider named by your domain's current nameservers.

## 11. DNS records Firebase usually gives

Use the exact records shown in Firebase Hosting. They commonly look like this:

For domain verification:

```text
Type: TXT
Host/Name: @ or praladneupane.com.np
Value: firebase-verification-value-shown-in-console
```

For routing the apex domain to Firebase Hosting:

```text
Type: A
Host/Name: @ or praladneupane.com.np
Value: 199.36.158.100
```

For `www`:

```text
Type: A
Host/Name: www
Value: 199.36.158.100
```

Firebase can show slightly different records depending on quick setup vs advanced setup. Always copy the exact Host/Name and Value from the Firebase wizard.

Remove old conflicting records for the same host, especially old `A`, `AAAA`, or `CNAME` records pointing to another hosting provider. If using Cloudflare, keep the record **DNS only** until Firebase verifies and provisions HTTPS.

## 12. Verify HTTPS and custom domain

1. DNS propagation can take a few minutes to 24 hours.
2. In Firebase console > **Hosting**, the domain should move from setup/pending states to **Connected**.
3. Firebase provisions an SSL certificate automatically for the custom domain.
4. Visit `https://praladneupane.com.np`.
5. Confirm the browser shows a valid HTTPS lock.

Optional DNS checks:

```bash
nslookup -type=txt praladneupane.com.np
nslookup praladneupane.com.np
curl -I https://praladneupane.com.np
```

The `A` lookup should eventually point to Firebase Hosting, commonly `199.36.158.100`, and `curl -I` should return a successful HTTPS response after SSL is ready.
