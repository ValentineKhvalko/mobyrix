import React from 'react';
import '../../styles/globals.css';
import { reatomContext, setupBatch, withBatching } from '@reatom/npm-react';
import { unstable_batchedUpdates } from 'react-dom';
import { connectLogger, createCtx } from '@reatom/framework';

setupBatch(unstable_batchedUpdates);
const ctx = withBatching(createCtx());
connectLogger(ctx);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <reatomContext.Provider value={ctx}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </reatomContext.Provider>
  );
}
