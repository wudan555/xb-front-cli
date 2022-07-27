// Of course, you can use my vue project template from github: "https://github.com/wudan555/vue_admin.git"

const URL = "https://github.com/wudan555/vue_admin.git";

function getRepo(url) {
  const vueRepo = `direct:${url}#master`;
  return vueRepo;
}
module.exports = {
  URL,
  getRepo,
};
