const { exec } = require('node:child_process');

module.exports = (cmd) => {
    exec(cmd=cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
};
