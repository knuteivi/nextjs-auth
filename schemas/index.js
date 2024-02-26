import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Passordet er for kort"
    }),
});

export const RegisterSchema = z.object({
    name: z.string().min(1,{
        message: "Du må oppgi et navn!"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Passordet er for kort"
    }),
});