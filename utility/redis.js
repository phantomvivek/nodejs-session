const ioRedis = require("ioredis");
const logger = require("./logger");
let redis = null;

let connect = callback => {
  redis = new ioRedis({
    host: "127.0.0.1",
    port: "6379"
  });

  redis.connect(() => {
    logger.info({}, "Redis is connected");
    callback();
  });
};

let setMap = (key, obj, callback) => {
  redis.hmset(key, obj, (err, result) => {
    logger.info({ key, obj, err, result }, "Setting object in redis");

    if (err) {
      callback(err);
    } else {
      callback();
    }
  });
};

let getMap = (key, callback) => {
  redis.hgetall(key, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  connect,
  set: setMap,
  get: getMap
};
