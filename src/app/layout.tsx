'use client';

import React from 'react';
import { Provider } from 'react-redux';

import '../../styles/globals.css';
import { Header } from '@/components/Header';
import { store } from '@/store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="h-screen flex flex-col">
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}
