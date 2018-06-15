import express from 'express';
import multer from 'multer';
import mime from 'mime';
import config from 'config';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype));
        } 
    }
});

const upload = multer({ storage: storage, limits: { fileSize: 1000*1000*5} }).single(config.imageUploadKey);

const UploadImageFileRouter = (req, res, next) => {
    upload(req, res, (error)=> {
        if (error) {
            res.send({
                status: false,
                error: error
            });
        }else{
            res.send({
                status: true,
                message: 'Image succesfull upladed'
            });
        }
    });
}

export default UploadImageFileRouter;