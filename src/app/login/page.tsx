'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoggedIn } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const handleEmailFocus = () => {
    if (!email) {
      setEmail("");
    }
  };

  const handlePasswordFocus = () => {
    if (!password) {
      setPassword("");
    }
  };

  const handleLogin = () => {
    if (email && password) {
      login();
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1>
        <input
          type="email"
          value={email}
          onFocus={handleEmailFocus} // Insert text when focused
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 rounded focus:outline-none text-black"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onFocus={handlePasswordFocus} // Insert text when focused
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded focus:outline-none text-black"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}