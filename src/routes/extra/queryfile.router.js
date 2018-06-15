import fs from 'fs';
import crypto from 'crypto';
import config from 'config';

const QueryImageFileRouter = (req, res) => {
    let readStream = fs.createReadStream(config.localPath + req.params.filename);
    readStream.on('error', function(err) {
      res.send(err);
    });
     
    readStream.on('close', () => {
      res.send()
    });
    readStream.on('open', function () {
      readStream.pipe(res);
    });
}

export default QueryImageFileRouter;