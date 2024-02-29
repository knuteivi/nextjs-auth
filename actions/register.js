"use server";

import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const register = async (values) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields){
        return { error: "Invalid fields!"};
    }

    const {email, password, name} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await db.user.findUnique({
        where: {
            email,
        },
    });

    if(existingUser){
        return {error: "Email already in use!"};
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    });

    return {success: "Successfully registered!"};
};