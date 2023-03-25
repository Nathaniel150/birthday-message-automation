const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const contact = require("./routes/contact");
app.use("/contact", contact);

app.get("/", (req, res) => {
  console.log("Hit the endpoint");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
