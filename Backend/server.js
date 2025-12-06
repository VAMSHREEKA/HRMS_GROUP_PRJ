import http from "http";
import app from "./app.js";
import "./db/db.js";
import { createUserTable } from "./models/user.model.js";
import { createBlacklistTable } from "./models/blacklistedTokens.js";

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Initialize database tables
const initDb = async () => {
    await createUserTable();
    await createBlacklistTable();
};

initDb();

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});