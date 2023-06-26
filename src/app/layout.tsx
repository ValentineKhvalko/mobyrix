'use client';

import React from 'react';
import { reatomContext } from '@reatom/npm-react';
import { connectLogger, createCtx } from '@reatom/framework';

import '../../styles/globals.css';
import { Header } from '@/components/Header';

const ctx = createCtx();
connectLogger(ctx);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <reatomContext.Provider value={ctx}>
      <html lang="en">
        <body className="h-screen flex flex-col">
          <Header />
          {children}
        </body>
      </html>
    </reatomContext.Provider>
  );
}
