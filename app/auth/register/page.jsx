import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function register() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
        <Card className="text-white bg-slate-900">
            <CardHeader>
                <CardTitle>
                    Login
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className='flex flex-col space-y-1.5 w-[400px]'>
                    <Label labelFor="email">
                        Epost
                    </Label>
                    <Input className="text-black" id="email" placeholder="Epost">
                    </Input>
                </div>
                <div className='flex flex-col space-y-1.5'>
                    <Label labelFor="password">
                        Passord
                    </Label>
                    <Input type="password" className="text-black" id="password" placeholder="Passord">
                    </Input>
                </div>
                <div className="flex gap-3">
                    <Link href="/auth/login">
                        <Button variant="outline" className="w-full text-black">
                            Har du bruker fra før?
                        </Button>
                    </Link>
                    <Button variant="secondary" className="w-full text-black">
                        Registrer
                    </Button>

                </div>
            </CardContent>
        </Card>
    
    </main>
  )
}
