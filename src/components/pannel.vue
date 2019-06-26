<template>
  <div class="part-l">
    <div class="left-title">{{title}}</div>
    <slot class="bar"></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class Pannel extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped>
.part-l {
  margin: 10px;
  background: #002032;
}
.left-title {
  text-align: center;
  padding: 6px 10px;
  font-family: ".萍方-简 细体", ".萍方-简 中黑体", ".萍方-简";
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  color: #ffffff;
  background: #012d3d;
}
.bar {
  padding: 10px;
  background: rgba(0, 0, 0, 0);
}
</style>