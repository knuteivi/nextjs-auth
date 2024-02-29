import React from 'react';
import { auth } from '@/auth';

export default async function Dashboard() {
  const session = await auth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
   
      <div>
        {JSON.stringify(session)}
        <p>Dashboardet mitt som er hemmelig</p>
      </div>
    </main>
  )
}
