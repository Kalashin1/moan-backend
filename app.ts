import mongoose from 'mongoose';
import express from 'express';
import router from './router';
// import cors from 'cors'

const app = express();

// Middleware
app.use(express.json())
app.use(router)
// app.use(cors)


const url = 'mongodb://localhost:27017/ebuka-backend'

mongoose.connect(url, { })
 .then((_result: any) => 
   	app.listen(process.env.PORT || 3000, () => console.log(`App running on ${process.env.PORT || 3000}`))
  )
 .catch(err => console.log(err))