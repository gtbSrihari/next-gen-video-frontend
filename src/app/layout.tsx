import './globals.css';
import { ReactNode } from 'react';
import Nav from './components/Nav';
import { AuthProvider } from './context/AuthContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Nav />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}