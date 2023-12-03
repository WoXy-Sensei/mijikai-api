import { Schema,model } from 'mongoose';

const ShortUrlSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    unique: true,
  },
  date: String,
  clicks : {
    required: true,
    default: 0,
    type: Number,
  },
});

export default model('ShortUrl', ShortUrlSchema) ;
