import express, { Application, Request, Response, NextFunction } from 'express';
import path from "path";

import bodyParser from 'body-parser'

const app: Application = express();
const port: number = 3000

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

//process http body
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

// define a route handler for the default home page
app.get('/', (req: Request, res: Response, next: NextFunction ) => {
    res.status(200).send({data: 'Hello from Ornio AS'});
});

// start the Express server
app.listen(port, () => console.log(`Sserver is listening on port ${port}!`));
