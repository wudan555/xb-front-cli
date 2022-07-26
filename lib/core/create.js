/* 创建指令 */
const action = require("./action.js");

const createCommands = (program) => {
  // 拉取项目
  program
    .command("create <project> [others...]")
    .description("clone repository into a floder")
    .action(action.createProjectAction);
  // 创建公共组件
  program
    .command("addcpn <name>")
    .description(
      "create vue components, 在src/components目录下新建一个组件 例:xb addcpn HellowWorld [-d src/components]"
    )
    .action((name) => {
      action.addcpnAction(name, program.opts().dest);
    });
  // 添加路由和页面组件
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
