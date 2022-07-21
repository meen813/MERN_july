const express = require("express");
const cors = require("cors")// allows the backend api to share resources with our react application
const app = express();
const port = 8000;



// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors());



//connect to db using the config file
require("./server/config/mongoose.config");

require("./server/routes/product.routes")(app);



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );



