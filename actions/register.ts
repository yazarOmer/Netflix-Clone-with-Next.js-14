"use server"
import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "@/helpers/user"
import {db} from "../lib/index"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: "Invalid fields"}
    }

    const { username, email, password} = validatedFields.data
    const hashedPassword = await bcryptjs.hash(password, 10)

    const existingUser = await getUserByEmail(email)

    if(existingUser) {
        return { error: "Email already in use"}
    }

    await db.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    })
}