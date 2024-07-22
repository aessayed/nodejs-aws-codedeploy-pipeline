const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

const version = "3,000,000";

app.get("/", (req, res) => {
  // set response content
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
          }
          .container {
            text-align: center;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #2ba195;
            margin-bottom: 20px;
          }
          p {
            font-size: 18px;
            color: #333;
            margin: 10px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello Amazon</h1>
          <p>Mohmad Mohsen</p>
          <p>Ahmad El Sayed Ahmad</p>
          <p>Mohamad AL Moussawi</p>
        </div>
      </body>
    </html>
  `);

  console.log(
    `[Version ${version}]: New request => http://${hostname}:${port}` + req.url
  );
});

app.listen(port, () => {
  console.log(
    `[Version ${version}]: Server running at http://${hostname}:${port}/`
  );
});
