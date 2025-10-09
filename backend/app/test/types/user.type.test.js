const { assert } = require("chai");
const userTypes = require("../../types/user.type");
const z = require("zod");

describe("Test for signin body types", () => {
    it(`{
        username: "varunvishalyt",
        email: "varun.vishal.yt@gmail.com,
        password: "somePassword"
        }`, () => {
            
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt@gmail.com",
                password: "somePassword"
            }).success, true)
        })
        
        it(`{
            username: "varunvishalyt",
            email: "varun.vishal.yt,
            password: "somePassword"
        }`, () => {
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt",
                password: "somePassword"
            }).success, false)
        })

        it(`{
            username: "varunvishalyt",
            email: "varun.vishal.yt@gmail.com",
            password: "somePassword",
            token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
        }`, () => {
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt@gmail.com",
                password: "somePassword",
                token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }).success, true);
        })

        it(`{
            username: "varunvishalyt",
            email: "varun.vishal.yt",
            password: "somePassword",
            token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
        }`, () => {
            assert.equal(userTypes.signinBody.safeParse({
                username: "varunvishalyt",
                email: "varun.vishal.yt",
                token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }).success, false);
        })

})

// Write Tests for signup body as well