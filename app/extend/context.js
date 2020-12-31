'use strict';

module.exports = {
  params(key) {
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },
  sqlParams() {
    const method = this.request.method;
    let body = this.request.body;
    const params = {};
    if (method === 'GET') {
      body = this.query;
    }
    for (const [ key, value ] of Object.entries(body)) {
      if (value) {
        params[key] = value;
      }
    }
    return params;
  },
  get username() {
    const token = this.request.header.token;
    const tokenCach = token && token !== 'null' ? this.app.jwt.verify(token, this.app.config.jwt.secret, (err, decoded) => {
      if (err) {
        console.log(err);
      }
      return decoded;
    }
    ) : undefined;
    return tokenCach ? tokenCach.username : undefined;
  },
  get userId() {
    const token = this.request.header.token;
    const tokenCache = token ? this.app.jwt.verify(token, this.app.config.jwt.secret) : undefined;
    return tokenCache ? tokenCache.id : undefined;
  },
};
