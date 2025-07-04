import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send({
    name: "Medical Camp Management System",
    developeBy: "Arfan Ahmed",
    date: new Date().toLocaleDateString(),
  })
})

export default app
