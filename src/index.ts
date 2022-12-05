import config from "./config/config";
import router from "./routes";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";

const port = process.env.PORT || config.port || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Pretty print for JSON repsonses
app.set("json spaces", 4);
// CORS middleware
app.use(cors());
// Gzip compression of responses
app.use(compression());

app.use(router);

app.listen(port, () => {
    console.log(`API is listening on http://localhost:${port}`);
});
