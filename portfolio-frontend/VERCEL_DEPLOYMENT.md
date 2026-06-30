# Vercel Deployment Guide

This portfolio is now prepared for Vercel deployment as a React + Vite single-page app.

Official references:
- Vite on Vercel: https://vercel.com/docs/frameworks/vite
- Project configuration and rewrites: https://vercel.com/docs/project-configuration
- Custom domains on Vercel: https://vercel.com/docs/domains/working-with-domains/add-a-domain

## Local setup

```bash
cd portfolio-frontend
npm install
npm run dev
```

Local URL:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

Vercel settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## React Router refresh support

This project uses React Router, so `vercel.json` includes a rewrite to send direct route requests back to the app entry point:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This protects routes such as:

```text
/projects
/contact
/certifications
/playground
```

## Deploy through Vercel dashboard

1. Push this repository to GitHub.
2. Open https://vercel.com/dashboard.
3. Click **Add New > Project**.
4. Import the GitHub repository.
5. If Vercel asks for the root directory, select `portfolio-frontend`.
6. Confirm:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **Deploy**.

## Deploy through Vercel CLI

```bash
cd portfolio-frontend
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Connect `praladneupane.com.np`

Add both domains in Vercel:

```text
praladneupane.com.np
www.praladneupane.com.np
```

Steps:

1. Open your Vercel project.
2. Go to **Project Settings > Domains**.
3. Add `praladneupane.com.np`.
4. Add `www.praladneupane.com.np`.
5. Choose a canonical version:
   - Recommended: redirect `www.praladneupane.com.np` to `praladneupane.com.np`.
   - Alternative: redirect `praladneupane.com.np` to `www.praladneupane.com.np`.
6. Vercel will show the DNS records required for your domain.
7. Copy those DNS records into the DNS provider panel that manages your `.com.np` domain.

Typical records Vercel may request:

```text
Type: A
Name/Host: @
Value: 76.76.21.21
```

```text
Type: CNAME
Name/Host: www
Value: cname.vercel-dns.com
```

If Vercel gives different records, use the exact records shown in your Vercel dashboard.

## DNS provider panel

Add the records wherever your domain's nameservers are managed. That may be:

- Your `.com.np` domain management panel
- Cloudflare DNS
- Your hosting provider DNS panel
- Another DNS provider you configured as nameserver

After adding records, return to Vercel **Project Settings > Domains** and wait for Vercel to verify the domain and issue HTTPS.

DNS can update in a few minutes, but sometimes takes longer. When complete, Vercel should show the domain as valid and HTTPS-ready.
