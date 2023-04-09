const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// const cors = require('cors')

// const router = require('./Routes/userRoutes');
// const ngoRouter = require('./Routes/ngoRoutes');
const apiRouter = require("./Routes/apiRoute");

app.use('/assets',express.static('assets'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json())
app.use(express.json())
const port = 1300;

require('./db')

// app.use(cors());


// app.use("/", router);
// app.use("/", ngoRouter);
app.use("/api",apiRouter)




app.listen(port, console.log(`Server started on port no ${port}`))