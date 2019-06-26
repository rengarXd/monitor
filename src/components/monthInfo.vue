<template>
  <div class="content">
    <div class="items">
      <div class="imgs">
        <img
          width="50"
          src="@/assets/mubiao.png"
          alt=""
        >
      </div>
      <div class="item-text">
        <div class="num">14,460.00</div>
        月度净承保标保（万元）
      </div>
    </div>
    <div class="items">
      <div class="imgs">
        <img
          width="50"
          
          src="@/assets/shouru.png"
          alt=""
        >
      </div>
      <div class="item-text">
        <div class="num">14,460.00</div>
        月度净承保标保（万元）
      </div>
    </div>
    <div class="items">
      <div class="imgs">
        <img
          width="50"
          src="@/assets/bili.png"
        >
      </div>
      <div class="item-text">
        <div class="num">14,460.00</div>
        月度净承保标保（万元）
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class MonthInfo extends Vue {}
</script>


<style  scoped>
.content {
  display: flex;
  justify-content: center;
}
.items {
  color: #cccccc;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 15px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  font-style: normal;
  align-items: center;
}
.item-text {
  padding: 0 10px;
}
.num {
  color: #ffffff !important;
  font-size: 36px;

  text-align: left;
}
</style>