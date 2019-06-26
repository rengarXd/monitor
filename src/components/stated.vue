<template>
  <div class="state-container">
    <div class="item">
      <div class="off">
        {{nums.Ready}}
      </div>
      <div class="label">
        <div class="rect off-bg"></div>
        未通话
      </div>
    </div>
    <div class="item">
      <div class="on">
        {{nums.Calling}}
      </div>
      <div class="label">
        <div class="rect on-bg"></div>
        通话中
      </div>
    </div>
    <div class="item">
      <div class="leave">
        {{nums.Offline}}
      </div>
      <div class="label">
        <span class="rect leave-bg"></span>
        离线
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Stated extends Vue {
  @Prop() nums: any;
}
</script>

<style scoped>
.state-container {
  /* position: absolute;
  bottom: -20px;
  left: 24%; */
  display: flex;
  justify-content: center;
  background: #002032;
}
.item {
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-family: ".萍方-简 细体", ".萍方-简 中黑体", ".萍方-简";
  font-weight: 300;
  font-style: normal;
  font-size: 48px;
}
.label {
  font-size: 24px;
  color: #fff;
}
.off {
  color: #ff0000;
  line-height: 1;
}
.on {
  color: #0adfdf;
  line-height: 1;
}
.leave {
  color: #cccccc;
  line-height: 1;
}
.on-bg {
  background-color: #0adfdf;
}
.off-bg {
  background-color: #ff0000;
}
.leave-bg {
  background-color: #cccccc;
}
.rect {
  width: 20px;
  height: 20px;
  vertical-align: top;
  display: inline-block;
  margin-top: 8px;
  margin-right: 5px;
}
</style>