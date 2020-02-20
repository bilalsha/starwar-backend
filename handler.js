import express from 'express';
import serverless from 'serverless-http';

export const app = express();

// export const hello = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
//     }),
//   };
// };

// const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
//   setTimeout(() => {
//     resolve(`${rest.copy} (with a delay)`);
//   }, time * 1000)
// );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.send("hello world");
});

export const hello = serverless(app);