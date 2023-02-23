import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import bodyParser from "body-parser";
import session from "express-session";

const PORT = process.env.PORT || 8080;

export const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("static"));

app.use(
  session({
    secret: "lobster",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((err, _req, res, next) => {
  res.status(500).send("Something broke!");
  next();
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log("HTTP server on http://localhost:%s", PORT);
});
