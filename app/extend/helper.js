'use strict';
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

module.exports = {
  time() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
  },
  parseTime(time) {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss');
  },
  timestamp(data) {
    return new Date(data).getTime();
  },
  unPick(source, arr) {
    if (Array.isArray(arr)) {
      const obj = {};
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }
  },
  async getFileContent(name) {
    return new Promise((resolve, reject) => {
      const fileName = path.join(__dirname, `../template/${name}`);
      const readStream = fs.createReadStream(fileName);
      let data = '';
      readStream.on('data', chunk => {
        data += chunk;
      });
      readStream.on('end', () => {
        resolve(data);
      });
      readStream.on('error', err => {
        console.log(err);
        reject(data);
      });
    });
  },
  async createFile(name, content) {
    return new Promise((resolve, reject) => {
      const fileName = path.join(__dirname, `../../createTemplate/${name}`);
      fs.writeFile(fileName, content, err => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve();
      });
    });
  },
};
