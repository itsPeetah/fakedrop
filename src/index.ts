import express from "express"
import routes from "./routes"
import apiRoutes from "./routes/api"

const app = express()
app.use(express.json())
app.use(routes)
app.use("/api", apiRoutes)

app.listen(5000, () => console.log("Server started on port 5000"))