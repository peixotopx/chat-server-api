"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
require("./websockets/connection");
const PORT = process.env.PORT || 443;
http_1.server.listen(PORT, () => { console.log("🔥 Server Running on port " + PORT); });
