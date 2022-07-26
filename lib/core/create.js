/* 创建指令 */
const action = require("./action.js");

const createCommands = (program) => {
  program
    .command("create <project> [others...]")
    .description("clone repository into a floder")
    .action(action.createProjectAction);
  program
    .command("addcpn <name>")
    .description(
      "create vue components, 在src/components目录下新建一个组件 例:xb addcpn HellowWorld [-d src/components]"
    )
    .action((name) => {
      action.addcpnAction(name, program.opts().dest);
    });
  program
    .command("addpage <name>")
    .description(
      "create vue page, 在src/pages 例:xb addcpn HellowWorld [-d src/pages]"
    )
    .action((name) => {
      action.addPageAndRoute(name, program.opts().dest);
    });
};
module.exports = {
  createCommands,
};
