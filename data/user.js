import { db} from "@/lib/db";

export const getUserByEmail = async (email) => {
    try{
        const user = await db.user.findUnique({
            where: {email}
        })
        return user;
    }
    catch(error){
        return null;
    }
}