import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Component from "vue-class-component";
// import * as Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import { Table, TableColumn, Message, MessageBox, Select, Option, Form, FormItem, Input, Button } from "element-ui"

Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);

Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox;

// 不起作用
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate"
]);

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
