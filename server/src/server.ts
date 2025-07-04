// getting-started.js
import mongoose from 'mongoose'
import app from './app'
import config from './config'

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(config?.db_url as string)

  try {
    app.listen(config?.port, () => {
      console.log(`Example app listening on port ${config?.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
