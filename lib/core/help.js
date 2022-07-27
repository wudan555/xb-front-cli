/* 创建选项，即实际运行时的参数 */
const helpOptions = (program) => {
  // 使用<>指定命令形参名，使用program.opts() 获取所有参数
  program.option("-t", "a cli option test");
  program.option(
    "-d --dest <dest>",
    "a destination folder, 例如：-d /src/components"
  );
  program.option("-f --framework <framework>", "your framewor, vue/react"); // 使用<>指定命令形参
  program.option(
    "-u --url <url>",
    "your project url, such as 'http://github***.com'"
  ); // 使用<>指定命令形参
};
module.exports = {
  helpOptions,
};
