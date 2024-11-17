import Express from 'express'

const app = Express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
