import app from './app';
import mongoose from 'mongoose';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI || "");
  console.log('Connected to MongoDB');
}

connectMongo();