const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const { dirname } = require("path");

/* 编译ejs */
const compileEJS = (template, data) => {
  const templatePath = path.resolve(__dirname, `../template/${template}`);
  return ejs.renderFile(templatePath, { data }, {});
};
/* 写入文件 */
const writeToFile = (filepath, content) => {
  if (createDir(path.dirname(filepath)))
    return fs.promises.writeFile(filepath, content);
};
/* 创建目录 */
const createDir = (dirpath) => {
  console.log(dirpath);
  // 创建的思路应该是依次从父级目录开始创建，所以一直判断父级目录是否存在  fs.existSync(path.dirname(path))
  if (fs.existsSync(dirpath)) {
    return true;
  } else {
    if (createDir(path.dirname(dirpath))) {
      fs.mkdir(dirpath, () => {});
      return true;
    }
  }
};

/* export */
module.exports = {
  compileEJS,
  writeToFile,
  createDir,
};
