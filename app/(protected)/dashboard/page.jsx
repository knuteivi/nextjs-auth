import React from 'react';
import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { getUserByEmail } from '@/data/user';

export default async function Dashboard() {
  const session = await auth();

  const user = await getUserByEmail(session.user.email);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
   
      <div>
        {JSON.stringify(session)}
        <p>Dashboardet mitt som er hemmelig</p>
        <form action={async () => {
          "use server";
          await signOut();
        }}>
        
          <Button>Log out</Button>
        </form>
        <p>dette er fra databasen</p>
        {user.name}
      </div>
    </main>
  )
}
