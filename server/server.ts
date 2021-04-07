import mongoose from "mongoose";
import config from "./config.json";
const next = require("next");
import server from "./app";

/*====================*/

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

/*====================*/

app.prepare().then(async () => {
  await app.prepare();
  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log(`Ready on localhost:${3000} - dev ${dev}`);
  });
});

mongoose.connect(
  `mongodb+srv://${config.database.login}:${config.database.password}@cluster0.7zktq.mongodb.net/${config.database.dbname}?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

server.all("*", (req, res) => {
  return handle(req, res);
});
