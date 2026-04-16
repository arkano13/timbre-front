import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname))

app.get('/{*path}', (req, res) => {
  res.sendFile(join(__dirname, 'TIMBRE-Escolar.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Frontend corriendo en puerto ${PORT}`))