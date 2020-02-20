import express from 'express';
import serverless from 'serverless-http';

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello world");
});


const hello = serverless(app);
export {
  app, 
  hello
};