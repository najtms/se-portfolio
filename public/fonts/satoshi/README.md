# Satoshi Font — Self-Hosting Instructions

For production (the Fontshare CDN link in layout.tsx is the development fallback):

1. Download Satoshi from: https://www.fontshare.com/fonts/satoshi
2. Extract the archive and place these files here:
   - Satoshi-Variable.woff2
   - Satoshi-VariableItalic.woff2  (optional)
   - Satoshi-Light.woff2    (300)
   - Satoshi-Regular.woff2  (400)
   - Satoshi-Medium.woff2   (500)
   - Satoshi-Bold.woff2     (700)
   - Satoshi-Black.woff2    (900)

3. In app/layout.tsx, remove the two <link> tags for Fontshare and
   replace with next/font/local:

```tsx
import localFont from 'next/font/local';

const satoshi = localFont({
  src: [
    { path: '../public/fonts/satoshi/Satoshi-Variable.woff2', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});
```

4. Apply the variable in layout:
   <body className={`${satoshi.variable} ${GeistMono.variable} font-sans`}>

5. Update globals.css @theme to use the variable:
   --font-sans: var(--font-satoshi), ui-sans-serif, system-ui, sans-serif;