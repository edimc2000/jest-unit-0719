const prepReport = require("../post_process/prepReport");

// global-teardown.js
module.exports = async () => {
    prepReport()
};