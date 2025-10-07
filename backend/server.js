const express = require("express");
const app = express();
// Macros
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        msg: "This is a futuristic message"
    })
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));