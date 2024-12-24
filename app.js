const http = require("http"); // Import Node.js core module
const fs = require("fs"); // Import file module
const path = require("path");

// Set the directory path for the templates folder
const dirPath = path.join(__dirname, "/templates");

// Read the HTML file
let file2Send;
try {
  file2Send = fs.readFileSync(`${dirPath}/page.html`, "utf8");
} catch (error) {
  console.error("Error reading page.html:", error.message);
  process.exit(1);
}

// Creating server
const server = http.createServer(function (req, res) {
  // Log the incoming request method and URL
  console.log(`Received request: ${req.method} ${req.url}`);

  // Write HTTP header
  res.setHeader("Content-Type", "text/html");

  // Write the HTML content to the client
  res.end(file2Send);
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Node.js web server is running at http://localhost:3000");
});
