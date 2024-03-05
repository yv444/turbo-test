/** @type {import('jest').Config} */
const sharedConfig = require("@repo/jest-config/jest.config.js");
const config = {
  ...sharedConfig,
};

module.exports = config;
