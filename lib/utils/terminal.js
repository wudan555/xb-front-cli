/* 执行终端命令相关代码 */
const { spawn } = require("child_process");
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args); // 开启进程执行命令，进程中会有很多log,这里主要封装一下打印信息
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stdout);
    childProcess.on("close", () => {
      resolve();
    });
  });
};
module.exports = { commandSpawn };
