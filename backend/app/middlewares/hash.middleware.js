const bcrypt = require("bcrypt");

async function authenticatePassword(password, hashedPassword){
    try{
        const match = await bcrypt.compare(password, hashedPassword);
        return match
    } catch(err){
        console.log("Error comparing passwords");
        console.error(err);
        return false;
    }
}


module.exports = {
    authenticatePassword
}