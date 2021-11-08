const express = require("express")
const http = require("http")
const cors = require("cors")
const dotenv = require("dotenv")
var morgan = require("morgan")

dotenv.config()
const app = express()
const port = process.env.PORT || 5000
const userRouter = require("./routes/vehicle-routes")


app.use(cors())
app.use(express.json())
app.use(morgan())
// api routes
app.use("/api/vehicles", userRouter)
const server = http.createServer(app)

server.listen(port, () => {
    console.log("SERVER RUNNING - PORT: ", port)
})
