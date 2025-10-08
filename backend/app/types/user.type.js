const z = require("zod");

const signinBody = z.object({
    username: z.string(),
    email: z.email(),
    token: z.string().optional()
})

module.exports = {
    signinBody
}