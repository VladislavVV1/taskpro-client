import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "TaskPro",
  description: "Supercharge your productivity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#BEDBB0] opacity-100 text-white">
             <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      value={{
        light: 'light',
        dark: 'dark',
        violet: 'violet',
      }}
    >
                {children}
            </ThemeProvider>
      </body>
    </html>
  );
}
