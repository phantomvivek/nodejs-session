const bunyan = require("bunyan");

const logger = bunyan.createLogger({
  name: "nodejs-session",
  stream: process.stdout,
  level: "info",
  serializers: bunyan.stdSerializers
});

module.exports = logger;
