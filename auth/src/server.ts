import express from "express"

const app = express()

app.use(express.json())

const baseUrl = "/api/v1/"

app.get(`${baseUrl}users/current`, (req, res) => {
  res.send("Sup G!")
})

app.listen(4000, () => {
  console.log("Auth service listening on port 4000!")
})
