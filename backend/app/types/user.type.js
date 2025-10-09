const z = require("zod");

const signinBody = z.object({
    username: z.string(),
    password: z.string(),
    email: z.email(),
    token: z.string().optional()
})

const signUpBody = z.object({
    username: z.string(),
    password: z.string(),
    email: z.email()
})

module.exports = {
    signinBody,
    signUpBody
}