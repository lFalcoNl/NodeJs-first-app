const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log("Appexoft");
    res.end("Hello Appexoft");
});

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
