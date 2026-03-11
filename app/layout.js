import "./globals.css";
import Script from "next/script";
const systemFontStack =
  'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"';

export const metadata = {
  title: "HVACThermal – Free HVAC Calculators",
  description:
    "Free, professional-grade HVAC calculators for BTU sizing, boiler sizing, and heat pump sizing.",
  verification: {
    google: "vxROZwlviRjOHbJhZRnnfYsRtCkKsSZdR4jpFNfIYGw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: systemFontStack }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-19GTMD7TE3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-19GTMD7TE3');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
