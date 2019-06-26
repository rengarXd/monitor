declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
interface Vue {
  $refs:any
}
// typings.d.ts
declare module "*.json" {
  const value: any;
  export default value;
}