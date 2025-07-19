const logoResize = require('../post_process/html_maple_logo_resize')
// global-teardown.js
module.exports = async () => {
    logoResize()
};