'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Nav() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6 justify-center">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/record" className="hover:underline">Record</Link></li>
        <li><Link href="/chat" className="hover:underline">Chat</Link></li>
        {isLoggedIn ? (
          <li>
            <button onClick={logout} className="hover:underline">
              Logout
            </button>
          </li>
        ) : (
          <li><Link href="/login" className="hover:underline">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}