const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const open = require("open");
const path = require("path");

const { vueRepo } = require("../config/common.js");
const { commandSpawn } = require("../utils/terminal");
const { compileEJS, writeToFile, createDir } = require("../utils/util");
/**
 *
 * @param {} param 项目、文件夹名称
 * @param {*} lastArgs 剩余参数
 */
const createProjectAction = async (param, lastArgs) => {
  try {
    console.log(param, lastArgs);
    // 1.clone项目：使用download-git-repo库
    await download(vueRepo, param, { clone: true });
    // 2.运行npm install（注意windows上执行时使用的底层命令是npm.cmd）
    const command = process.platform === "win32" ? "npm.cmd" : "npm";
    await commandSpawn(command, ["install"], { cwd: `./${param}` });
    // 3.npm run dev （注意：npm run serve默认会开启服务阻塞线程的，所以下面不能使用await）
    commandSpawn(command, ["run", "serve"], { cwd: `./${param}` });
    // 4.打开浏览器（第三方库：open）
    open("http://localhost:8080");
  } catch (error) {
    console.error("拉取创建项目时异常 action.js=>", error);
  }
};
/**
 * 编译需要用到ejs库   npm install ejs
 * @param {string} name 组件名称
 * @param {string} dest 组件存放的路径（可选项）
 */
const addcpnAction = async (name, dest) => {
  dest = dest || "src/components";
  try {
    // 1.创建对应的ejs模板
    // 2.编译对应的模板 result
    const content = await compileEJS("component.vue.ejs", {
      name: name,
      lowerName: name.toLocaleLowerCase(),
    });
    // 3.将result写入到.vue文件中
    const destPath = path.resolve(dest, `${name}.vue`);
    // 4.放到对应的文件夹
    writeToFile(destPath, content);
  } catch (error) {
    console.error("添加组件出错", error);
  }
};

/**
 * @param {string} name 组件名称
 * @param {string} dest 组件存放的路径（可选项）
 */
const addPageAndRoute = async (name, dest) => {
  dest = dest || "src/pages";
  try {
    // 1.创建对应的ejs模板
    // 2.编译对应的模板 result
    const pageContent = await compileEJS("component.vue.ejs", {
      name: name,
      lowerName: name.toLocaleLowerCase(),
    });
    const routeContent = await compileEJS("router.vue.ejs", {
      name: name,
      lowerName: name.toLocaleLowerCase(),
    });
    // 3.将result写入到.vue文件中
    const pagepath = path.resolve(dest, `/${name}/${name}.vue`);
    const routePath = path.resolve(dest, `/${name}/route.js`);
    // 4.放到对应的文件夹
    writeToFile(pagepath, pageContent);
    writeToFile(routePath, routeContent);
  } catch (error) {
    console.error("添加新页面出错", error);
  }
};

module.exports = {
  createProjectAction,
  addcpnAction,
  addPageAndRoute,
};
