import mongoose from 'mongoose';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    content: String,
    category: String,
    filename: String,
    number: {
        type: Number
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    dateModified: {
        type: Date,
        default: new Date()
    },
});

export default mongoose.model('News', newsSchema);