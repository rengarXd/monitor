<template>
  <div>
    <div class="deal">
      今日已在线成交
      <button
        v-for="(item, index) in dateOnline"
        :key="index"
        class="cout font-color"
      >{{item}}</button>
      <!-- <button class="cout font-color">0</button>
      <button class="cout font-color">0</button>
      <button class="cout font-color">0</button>
      <button class="cout font-color">0</button>
      <button class="cout font-color">0</button>
      <button class="cout font-color">0</button>
      <button class="cout font-color">0</button> -->
      元
    </div>
    <div class="total">
      <div class="total-item">
        本周受理总额
        <span class="font-color">{{WeekDealAFYP}}</span>
        元
      </div>
      <div class="total-item">
        本月受理总额
        <span class="font-color">{{MonthDealAFYP}}</span>
        元
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import template from "./volumePage.vue";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Volume extends Vue {
  @Prop({ type: Object })
  AFYP!: any;

  // get AFYPDATA():any {return this.AFYP} ;
  get WeekDealAFYP(): string {
    return this.AFYP.WeekDealAFYP;
  }
  get MonthDealAFYP(): any {
    return this.AFYP.MonthDealAFYP;
  }
  get dateOnline(): Array<object> {
    console.log(this.AFYP.DateOnlieAFYP.split(""));
    let arr = this.AFYP.DateOnlieAFYP.split("");
    if (arr.length < 7) {
      // console.log( 6- arr.length)
      const len = 7 - arr.length;
      for (let i = 0; i < len; i++) {
        arr.splice(0, 0, "0");
      }
    }
    // console.log(arr)
    return arr;
  }
  // 生命周期
  private created(): void {
    // console.log(template);
  }
  private mounted(): void {}
  private updated(): void {}
  private destroyed(): void {}
}
</script>

<style scoped>
.deal {
  font-family: ".萍方-简 细体", ".萍方-简 中黑体", ".萍方-简";
  font-weight: 300;
  font-style: normal;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
}
.cout {
  margin-top: 5px;
  margin-right: 10px;
  padding: 10px 16px;
  background: transparent;
  border: 1px solid #0adfdf;
}
.font-color {
  color: #0adfdf;
}
.total {
  display: flex;
  justify-content: center;
  color: #ffffff;
  margin-top: 10px;
}
.total-item {
  /* text-align: center; */
  margin: 0 auto;
  font-size: 24px;
}
</style>