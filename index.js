const app = require("./app");
require("dotenv").config();
const port = process.env.RUNNING_PORT || 8000;
app.listen(port,() =>{
    console.log(`Server is listening on ${port}`);
})