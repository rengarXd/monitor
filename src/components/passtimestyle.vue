<template>
  <div class="pass-time">
    {{content}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PassTime extends Vue {
  @Prop({ default: "" }) protected content!: string;
}
</script>

<style scoped>
.pass-time {
  font-size: 36px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
  text-align: center;
  padding: 35px;
}
</style>