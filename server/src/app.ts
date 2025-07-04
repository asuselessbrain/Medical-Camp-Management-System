import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express();


app.use(express.json());
app.use(cors({origin: ['http://localhost:5173', 'http://localhost:5174']}))

app.get('/', (req: Request, res: Response) => {
  res.send({
    name: "Medical Camp Management System",
    developedBy: {
      name: "Arfan Ahmed",
      designation: "Student, 7th Semester",
      faculty: "Faculty of Computer Science and Engineering (CSE)",
      institution: "Patuakhali Science and Technology University",
      email: "arfan18@cse.pstu.ac.bd",
      github: "https://github.com/asuselessbrain",
      linkedin: "https://linkedin.com/in/arfan-ahmed40"
    },
    startDate: new Date("2025-07-01").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  })
})

export default app
