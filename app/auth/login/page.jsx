"use client";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, {useState, useTransition} from 'react'
import { login } from '@/actions/login';

import { LoginSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";

export default function Login() {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })

    const onSubmit = (values) => {
        startTransition(() => {
            login(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            }) 
        })
        
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
            <Card className="text-white bg-slate-900">
                <CardHeader>
                    <CardTitle>
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className='flex flex-col space-y-1.5 w-[400px]'>
                                <FormField control={form.control} name="email" render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input 
                                                {...field}
                                                disabled={isPending}
                                                className="text-black"
                                                id="email"
                                                type="email"
                                                placeholder="Epost" 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                
                                )} />

                            </div>

                            <div className='flex flex-col space-y-1.5'>
                                <FormField control={form.control} name="password" render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input 
                                                {...field}
                                                disabled={isPending}
                                                className="text-black"
                                                type="password"
                                                id="password" 
                                                placeholder="Passord" 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                
                                )} />
                                {/*<Label labelFor="password">
                                    Passord
                                </Label>
                                <Input type="password" className="text-black" id="password" placeholder="Passord">
                                </Input>*/}
                            </div>
                            {success && (
                            <p className="p-2 bg-green-900 rounded-lg">{success}</p>
                            )}
                            {error && (
                            <p className="p-2 bg-red-900 rounded-lg">{error}</p>
                            )}
                            <div className="flex gap-3">
                                <Link href="/auth/register">
                                    <Button variant="outline" className="w-full text-black">
                                        Lag ny bruker
                                    </Button>
                                </Link>
                                <Button variant="secondary" className="w-full text-black" disabled={isPending}>
                                    Logg inn
                                </Button>

                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        
        </main>
    )
}
