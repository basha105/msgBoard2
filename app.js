const express = require('express');
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = 2200;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
