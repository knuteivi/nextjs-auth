import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  //const user = await db.user.getUnique()

  return (
  <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div className="flex flex-col items-center gap-y-10 ">
        <h1 className="text-8xl">Autentisering</h1>
          <Link href={"/auth/register"}>
            <Button variant="secondary">Registrer ny bruker</Button>
          </Link>
          <Link href={"auth/login"}>
            <Button variant="secondary">Logg inn</Button>
          </Link>
      </div>
  </main>)
}