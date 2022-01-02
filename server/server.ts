var express = require('express');
const app = express();
var path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const userRouter = require("./routes/userRouter")

// Handle Parsign Request Body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Static folder - exposes a directory or a file to a particular URL so it's contents can be publicily accessed.
app.use("/build", express.static(path.join(__dirname, "../build")));

app.use('/user', userRouter);


app.get('/', (req:any, res:any) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
  });

app.get('/*', (req:any, res:any) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// GLOBAL ERROR Handler
app.use((err:any, req:any, res:any, next:any) => { //if 4 parameters, it's telling express This is global error handler
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error has occured" },
    };
    const errorObj = Object.assign(err, defaultErr);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
  
  module.exports = app;