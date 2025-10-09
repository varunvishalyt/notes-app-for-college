const { assert } = require("chai");
const userTypes = require("../../types/user.type");
const z = require("zod");

describe("Test for signin body types", () => {
    it(`{
        username: "varunvishalyt",
        email: "varun.vishal.yt@gmail.com
        }`, () => {
            
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt@gmail.com"
            }).success, true)
        })
        
        it(`{
            username: "varunvishalyt",
            email: "varun.vishal.yt
        }`, () => {
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt"
            }).success, false)
        })

        it(`{
            username: "varunvishalyt",
            email: "varun.vishal.yt@gmail.com",
            token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
        }`, () => {
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt@gmail.com",
                token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }).success, true);
        })

        it(`{
            username: "varunvishalyt",
            email: "varun.vishal.yt",
            token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
        }`, () => {
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt",
                token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }).success, false);
        })

})