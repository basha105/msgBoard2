const express = require('express');
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 2200;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
