require("./loadEnvironment.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const { auth, requiresAuth } = require("express-openid-connect");
const conn = require("./db/conn.js");

let userRouter;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("static"));

async function start() {
  console.log("Starting server...");
  await conn.init();
  userRouter = require("./routes/users.js");
  app.use("/users", userRouter);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

app.use(
  session({
    secret: "lobster",
    resave: false,
    saveUninitialized: true,
  })
);

// Swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "Stomach Pain BE API with autogenerated swagger documentation",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_PASSWORD,
  baseURL: "http://localhost:8080",
  clientID: "bU7HXoY2VJiWOMj3FW95D5oylXOakGEu",
  issuerBaseURL: "https://dev-krwoywe0p7brgud1.us.auth0.com",
};
app.use(auth(config));

// Custom middleware
app.use((req, res, next) => {
  console.log("HTTP request", req.method, req.url, req.body);
  next();
});

app.get("/", (req, res) => {
  res.redirect("http://localhost:4200");
});

start();
