"use server";

import { LoginSchema } from "@/schemas";

export const login = (values) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields){
        return { error: "Invalid fields!"};
    }
    return {success: "Successful login."};
};