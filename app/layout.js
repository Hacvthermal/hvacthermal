import "./globals.css";
const systemFontStack =
  'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"';

export const metadata = {
  title: "HVACThermal – Free HVAC Calculators",
  description:
    "Free, professional-grade HVAC calculators for BTU sizing, boiler sizing, and heat pump sizing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: systemFontStack }}>
        {children}
      </body>
    </html>
  );
}
