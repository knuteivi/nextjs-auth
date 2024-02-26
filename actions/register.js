"use server";

import { RegisterSchema } from "@/schemas";

export const register = (values) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields){
        return { error: "Invalid fields!"};
    }
    return {success: "Successfully registered!"};
};