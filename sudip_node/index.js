const fs = require("fs");
const path = require("path");
const http = require("http");
const { MongoClient } = require("mongodb");

const MONGO_URI =
  "mongodb+srv://thapa:thapa123@cluster1.5yjzfc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const NODE_PORT = 7294;
const client = new MongoClient(MONGO_URI);

async function getTravelDestinations(client) {
  const cursor = client
    .db("travel_destination")
    .collection("destinationcollection")
    .find({});
  const results = await cursor.toArray();
  return JSON.stringify(results);
}

client
  .connect()
  .then(() => {
    console.log("MongoDB connected successfully");
    http
      .createServer(async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );

        if (req.url === "/") {
          fs.readFile(
            path.join(__dirname, "public", "index.html"),
            "utf-8",
            (err, data) => {
              res.writeHead(200, { "Content-Type": "text/html" });
              if (err) throw err;
              res.end(data);
            }
          );
        } else if (req.url === "/style.css") {
          fs.readFile(
            path.join(__dirname, "public", "style.css"),
            "utf-8",
            (err, data) => {
              res.writeHead(200, { "Content-Type": "text/css" });
              if (err) throw err;
              res.end(data);
            }
          );
        } else if (req.url.startsWith("/images")) {
          const imagePath = path.join(__dirname, "public", req.url);
          fs.readFile(path.join(__dirname, "public", req.url), (err, data) => {
            const ext = path.extname(imagePath);
            const contentType =
              {
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".svg": "image/svg+xml",
                ".png": "image/png",
                ".gif": "image/gif",
              }[ext] || "application/octet-stream";
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
          });
        } else if (req.url === "/api") {
          const destinationData = await getTravelDestinations(client);
          // Reading data from local JSON file
          //   fs.readFile(
          //     path.join(__dirname, "data", "destinations.json"),
          //     "utf-8",
          //     (err, data) => {
          //       res.writeHead(200, { "Content-Type": "application/json" });
          //       if (err) throw err;
          //       res.end(data);
          //     }
          //   );
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(destinationData);
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h5>Oops!! Nothing here</h5>");
        }
      })
      .listen(NODE_PORT, () =>
        console.log("Server Running at port: " + NODE_PORT)
      );
  })
  .catch((error) => {
    console.log("Connection Error");
  });
