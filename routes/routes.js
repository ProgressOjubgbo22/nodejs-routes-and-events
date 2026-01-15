const http = require("http");

// Server creation
const server = http.createServer((req, res) => {
    // Uncomment one section at a time based on what you want to test

    // ================= GET routes (static) =================
    /*
    const routes = {
        "/" : (req, res) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("homepage");
        }, 
        "/about" : (req, res) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("aboutpage");
        },
        "/contact" : (req, res) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("contactpage");
        } 
    };

    const handler = routes[req.url];

    if (handler && req.method === "GET") {
        handler(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("not found");
    }
    */

    // ================= GET & POST routes =================
    /*
    const routes = {
        GET: {
            "/": (req, res) => {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Home");
            },
            "/users": (req, res) => {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("userpage");
            }
        },
        POST: {
            "/users": (req, res) => {
                res.writeHead(201, { "Content-Type": "text/plain" });
                res.end("user created");
            }
        }
    };

    const methodRoutes = routes[req.method];
    const handler = methodRoutes?.[req.url];

    if (handler) {
        handler(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("route not found");
    }
    */

    // ================= Dynamic routes =================
    /*
    const urlParts = req.url.split("/");

    if (req.method === "GET" && urlParts[1] === "users" && urlParts[2]) {
        const userId = urlParts[2];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "user found", userId }));
        return;
    }

    res.writeHead(404);
    res.end("route not found");
    */
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
