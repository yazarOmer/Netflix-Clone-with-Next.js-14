import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin."}),
    password: z.string({ message: "Parolanız 4 ila 60 karakter olmalıdır."})
                .min(4, { message: "Parolanız 4 ila 60 karakter olmalıdır."})
                .max(60, { message: "Parolanız 4 ila 60 karakter olmalıdır."})
})