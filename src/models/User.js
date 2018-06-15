import mongoose from 'mongoose';
import 'mongoose-type-email';

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        index: { unique: true },
        minlength: 8,
        required: true,
        maxlength: 18,
    },
    e_mail: {
        type: mongoose.SchemaTypes.Email,
        index: { unique: true },
        trim: true,
        minlength: 8,
        maxlength: 18,
        required: true,
    },
    firstName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 15,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 15,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: new Date(),
    },
    dateModified: {
        type:Date,
        default: new Date(),
    },
});

export default mongoose.model('User', newsSchema);