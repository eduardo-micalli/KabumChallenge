const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const sessionsRoutes = require('../routes/sessionsRoutes');
const clientRoutes = require('../routes/clientRoutes');
const addressRoutes = require('../routes/addressRoutes');

app.use(express.json());
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use("/sessions", sessionsRoutes);

app.use("/client", clientRoutes);

app.use("/address", addressRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});