const axios = require("axios")
const { assert, expect } = require("chai");

describe("Testing the API endpoints for the /user endpoint" , () => {
    it("Testing the /test endpoint", async () => {
        const { data } = await axios({
            method: "GET",
            url: "http://localhost:3000/user/test",
        });
        assert.deepEqual(data, { msg: 'This is a test message' })
    })
    
})
