<template>
  <div class="container">
    <Head>
      <volume :AFYP="AFYP_DATA"></volume>
    </Head>
    <div class="row">
      <div class="col-md-3">
        <Rank
          title="个人排行（当日在线AFYP）"
          name="person"
          :option="perRank"
        ></Rank>
        <Pannel title="组别排行（当日在线AFYP）">
          <div
            style="padding:10px"
            v-if="grpRank.length"
          >
            <div
              class="item"
              v-for="item in grpRank"
              :key="item.name"
            >{{item.name}} <span style="float:right;">{{item.Data}}</span></div>
          </div>
          <div
            class="no-data"
            v-else
          >
            暂无数据
          </div>
        </Pannel>
      </div>
      <charts
        :sizeChart="size"
        @AFYP="handleAFYPData"
        class="col-md-6 chart"
      ></charts>
      <div class="col-md-3">
        <Rank
          title="本周销量趋势"
          name="week"
          :option="lineRank"
        ></Rank>
        <Rank
          title="本月产品销售情况"
          name="month"
          :option="pieRank"
        >
          <div class="items">
            <div
              class="item"
              v-for="(item,index) in MonthDealAFYP"
              :key="index"
            >{{item.name}}营销方案 <span style="float:right;">{{item.value}}元</span></div>
          </div>
        </Rank>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import RankDatas from "@/assets/data.json";
import Head from "@/components/head.vue";
import charts from "@/components/charts.vue";
import options from "@/chart/options";
import Rank from "@/components/rank.vue";
import volume from "@/components/volume.vue";
// import timeShow from "@/components/time.vue";
// import logo from "@/components/logo.vue";
import Util from "@/chart/util";
import { renderChart } from "@/api/index";

import Pannel from "@/components/pannel.vue";

@Component({
  components: {
    Head,
    charts,
    Rank,
    volume,
    Pannel
  }
})
export default class Home extends Vue {
  AFYP_DATA: any = {
    DateOnlieAFYP: "31310",
    WeekDealAFYP: "123123123",
    MonthDealAFYP: "12313213"
  };
  protected opt: any = null;
  protected perRank: any = null;
  protected grpRank: any = [];
  protected lineRank: any = null;
  protected pieRank: any = null;
  protected size: number | string = 1;
  protected MonthDealAFYP: any[] = [];
  protected settime: number = 0;
  protected timing: any = null;

  private mounted() {
    // console.log(this.$route.params);
    this.reset();
    // this.timing = setTimeout(() => {
    //   this.getTestData();
    // }, 5000);
    let loginData = sessionStorage.getItem("loginData");
    let req = loginData ? JSON.parse(loginData) : {};
    if (!req) return this.$message.warning("暂无数据");
    req.data.forEach(element => {
      if (typeof element.time === "string" && element.action === "4") {
        this.settime = this.timingFn(element.time);
        this.getData();
      }
    });
  }
  getTestData(): void {
    let res = RankDatas;
    this.bindChartData(res);
    // this.timing = setTimeout(() => {
    //   this.getTestData();
    // }, 3000);
  }
  clearSetTime() {
    // console.log('停止')
    return clearTimeout(this.timing);
  }
  timingFn(time) {
    return Number(time) * 60 * 1000;
  }
  reset(): void {
    this.size = this.$route.params.size;
    this.perRank = options.perRank;
    // this.grpRank = options.perRank;
    this.lineRank = options.lineRank;
    // console.log(this.lineRank);
    this.pieRank = options.pieRank;
  }

  getData(): void {
    let loginData = sessionStorage.getItem("loginData");

    let req = loginData ? JSON.parse(loginData) : {};

    renderChart(req.code, req.data[1].action).then(res => {
      this.bindChartData(res);
      if (this.timing) this.clearSetTime();
      this.timing = setTimeout(() => {
        this.getData();
      }, this.settime);
    });
  }
  bindChartData(res: any) {
    let perRank = options.perRank;
    let lineRank = options.lineRank;
    let pieRank = options.pieRank;

    this.grpRank = res.ORGRank;
    this.MonthDealAFYP = Util.TransValueData(res.MonthDealAFYP);

    perRank.yAxis.data = Util.NameDataTrans(res.PersonalRank).name.reverse();
    perRank.series[0].data = Util.NameDataTrans(
      res.PersonalRank
    ).data.reverse();

    lineRank.series[0].data = res.WeekDealAFYP;
    pieRank.legend.data = Util.NameDataTrans(res.MonthDealAFYP).name;
    pieRank.series[0].data = this.MonthDealAFYP;
    this.perRank = perRank;
    this.lineRank = lineRank;
    this.pieRank = pieRank;
  }
  @Emit("AFYP")
  handleAFYPData(val: Array<any>) {
    if (!val.length) return;
    this.AFYP_DATA = val[0];
  }
}
</script>
<style scoped>
.no-data {
  text-align: center;
  color: #cccccc;
  padding: 50px;
}
.container {
  width: 100%;
  background: #000;
  padding: 10px;
}
.chart {
  margin-top: 10px;
}
@media (min-width: 768px) {
  .col-md-1 {
    background: red;
  }
}
.items {
  padding: 0 20px 10px;
}
.item {
  color: #0adfdf;
}
.row {
  margin-bottom: 10px;
}

.row > div {
  /* margin: 10px; */
  box-sizing: border-box;
}

.row:before,
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media (min-width: 768px) {
  .col-md-1 {
    width: calc(8.333333% - 20px);
  }
  .col-md-2 {
    width: calc(16.6666667% - 20px);
  }
  .col-md-3 {
    width: 20%;
  }
  .col-md-4 {
    width: calc(33.3333333% - 20px);
  }
  .col-md-6 {
    width: 60%;
  }

  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-6 {
    float: left;
  }
}
</style>