'use strict';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const BaseService = require('./base');

class FileService extends BaseService {
  async uploadFile(file) {
    const suffixList = file.filename.split('.');
    const suffix = suffixList[suffixList.length - 1];
    const name = `${Date.now()}_${Math.random()}.${suffix}`;
    console.log(suffixList, suffix, name)
    const filePath = path.join(__dirname, '../../../public/upload');
    await mkdirp(filePath);
    const readStream = fs.createReadStream(file.filepath);
    const writeStream = fs.createWriteStream(filePath + `/${name}`);
    readStream.pipe(writeStream);
    readStream.on('end', () => {
      console.log('上传成功');
    });
    readStream.on('error', err => {
      console.error(err);
      return err;
    });
    return `/upload/${name}`;
  }
}

module.exports = FileService;
