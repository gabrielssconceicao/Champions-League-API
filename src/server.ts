import { createApp } from './app'

const PORT = process.env.PORT || 3000
createApp().listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})