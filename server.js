const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => res.render("index", { title: "CSE Motors | Home" }));


app.get("/health", (req, res) => res.send("ok"));


const inventoryRoute = require("./routes/inventoryRoute");
app.use("/inv", inventoryRoute);

// Intentional 500 (Task 3)
app.get("/boom", (req, res) => {
  const err = new Error("Intentional server error for testing.");
  err.status = 500;
  throw err;
});

// 404
app.use((req, res) => {
  res.status(404).render("errors/not-found", { title: "404 Not Found" });
});

// Central error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).render("errors/error", {
    title: `${status} Error`,
    status,
    message: status === 500 ? "Something went wrong on our side. Please try again." : err.message,
  });
});

app.listen(PORT, () => console.log(`CSE Motors running on http://localhost:${PORT}`));
