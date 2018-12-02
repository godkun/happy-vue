
// 请按照名称的字典顺序添加以下 component
import HappyHello from './happy-hello';
import HappyDialog from './happy-dialog'


const daoStyleComponents = {
  // 请按照名称的字典顺序添加以下内容
  HappyHello,
  HappyDialog
};

let myPlugin = {}

myPlugin.install = function(Vue) {
  Object.keys(daoStyleComponents).forEach((key) => {
    Vue.component(key, daoStyleComponents[key]);
  });
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default myPlugin
