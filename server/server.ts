const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Handle Parsign Request Body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req:any, res:any) => {
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