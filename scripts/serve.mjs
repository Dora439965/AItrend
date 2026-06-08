// @AI_GENERATED
import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// @AI_GENERATED: end
const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number(process.env.PORT || 4175);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const requested = decoded === "/" ? "/index.html" : decoded;
  const fullPath = path.resolve(ROOT, `.${requested}`);
  if (!fullPath.startsWith(ROOT)) return null;
  return fullPath;
}

const server = createServer(async (req, res) => {
  const filePath = safePath(req.url || "/");
  if (!filePath || !existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const fileStat = await stat(filePath);
  if (!fileStat.isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath);
  res.writeHead(200, {
    "Content-Type": TYPES[ext] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(filePath).pipe(res);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use.`);
    console.error(`Run: lsof -nP -iTCP:${PORT} -sTCP:LISTEN`);
    console.error("Then stop that process, or start this server with another port:");
    console.error(`PORT=4176 npm run dev`);
    process.exit(1);
  }
  throw error;
});

server.listen(PORT, HOST, () => {
  console.log(`Local app running at http://${HOST}:${PORT}/`);
  console.log("Keep this terminal window open while previewing the page.");
});
