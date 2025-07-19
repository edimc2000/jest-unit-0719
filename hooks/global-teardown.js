const logoResize = require('../post_process/html_maple_logo_resize')
// global-teardown.js
module.exports = async () => {
    console.log('🌍 Global after all tests complete')
    logoResize()
    // Your teardown logic here, like closing DB connections, clearing temp files, etc.
};