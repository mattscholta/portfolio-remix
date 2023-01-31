# 📱 Progressive Web App (PWA)

Progressive Web Apps (PWAs) are web apps built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device, all with a single codebase.

**Resources:**

- [Installation Prompt](https://web.dev/learn/pwa/installation-prompt)
- [Updating](https://web.dev/learn/pwa/update)
- [Enhancements](https://web.dev/learn/pwa/enhancements)
- [Protocol Handlers](https://developer.chrome.com/articles/url-protocol-handler)
- [Splash Screens](https://medium.com/@applification/progressive-web-app-splash-screens-80340b45d210)
- [App shortcuts](https://web.dev/learn/pwa/enhancements/#app-shortcuts)

## 🤖 Generating the assets

As seen in the Web App Manifest chapter, Android creates splash screens automatically based on the manifest's values. That's not the case for iOS and iPadOS. In these devices, you should define the splash screens in the HTML as static images using `<link>` elements.

**Generators:**

- [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)
- [PWA Icon Generator](https://tools.crawlink.com/tools/pwa-icon-generator)

```bash
npx pwa-asset-generator ./public/branding/logo-large.png ./public/branding/splash/ \
  --background "#ffffff" \
  --manifest ./public/manifest.json \
  --padding "calc(40vh - 5%) calc(40vw - 10%)" \
  --path-override "/branding/splash" \
  --quality 85
```

```bash
npx pwa-asset-generator ./public/branding/shiftsmart/logo-large.png ./public/branding/shiftsmart/splash/ \
  --background "#ffffff" \
  --manifest ./public/manifest.json \
  --padding "calc(40vh - 5%) calc(40vw - 10%)" \
  --path-override "/branding/shiftsmart/splash" \
  --quality 85
```

## Shortcuts

- [App shortcuts](https://web.dev/learn/pwa/enhancements/#app-shortcuts)

```json
"shortcuts": [
  {
    "description": "View your profile",
    "icons": [
      {
        "src": "/branding/icons/icon-192x192.png",
        "sizes": "192x192"
      }
    ],
    "name": "Profile",
    "short_name": "Profile",
    "url": "/profile"
  }
],
```
