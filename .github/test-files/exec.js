const { exec } = require('node:child_process');

module.exports = (cmd) => {
    exec(cmd)
};
