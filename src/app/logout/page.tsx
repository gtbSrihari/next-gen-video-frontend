'use client';

import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export default function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return null;
}