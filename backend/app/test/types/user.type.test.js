const assert = require("assert");
const userTypes = require("../../types/user.type");

describe("Test for signin body types", () => {
    it(`Sending {
        username: "varunvishalyt",
        email: "varun.vishal.yt@gmail.com
        }`, () => {
            const body = {
                username: "varunvishalyt",
                email: "varun.vishal.yt@gmail.com"
            }
            assert(userTypes.signinBody, body)
        })
})