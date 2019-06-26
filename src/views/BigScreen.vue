<template>
  <div class="container">

    <Head>
      <MonthInfo></MonthInfo>
    </Head>
    <div class="row">
      <div class="col-md-3">
        <Rank
          title="上线人力"
          name="onlineperson"
          :option="piePerson"
          :chartHeight="pieheight"
        >
          <div
            class="percent"
            style="left:11.3%;"
          >
            89%
          </div>
        </Rank>
      </div>
      <div class="col-md-3">
        <Rank
          title="成交人力"
          name="dealperson"
          :option="piePerson"
          :chartHeight="pieheight"
        >
          <div
            class="percent"
            style="left:34.42%;"
          >
            99%
          </div>
        </Rank>
      </div>
      <div
        class="col-md-5"
        style="padding-left:15px;"
      >
        <Rank
          title="日线上达成进度"
          name="dayProgress"
          :option="dayProgress"
          :chartHeight="pieheight"
        ></Rank>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <Pannel title="人均通时">
          <PassTime content="5:43:21"></PassTime>
        </Pannel>
      </div>
      <div class="col-md-3">
        <Pannel title="人均通次">
          <PassTime content="5:43:21"></PassTime>
        </Pannel>
      </div>
      <div
        class="col-md-5"
        style="padding-left:20px;"
      >
        <Rank
          title="月度实收达成进度"
          name="MonthProgress"
          :option="dayProgress"
          :chartHeight="pieheight"
        ></Rank>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import Head from "@/components/head.vue";
import Pannel from "@/components/pannel.vue";
import Rank from "@/components/rank.vue";
import options from "@/chart/options";
import MonthInfo from "@/components/monthInfo.vue";
import PassTime from "@/components/passtimestyle.vue";

@Component({
  components: {
    Head,
    Rank,
    Pannel,
    MonthInfo,
    PassTime
  }
})
export default class BigScreen extends Vue {
  protected piePerson: any = options.piePerson;
  protected dayProgress: any = options.dayProgress;
  protected pieheight: string = window.innerHeight * 0.45 + "px";
  private mounted() {}
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
  margin: 0 10px;
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
    width: 22%;
  }
  .col-md-4 {
    width: calc(33.3333333% - 20px);
  }
  .col-md-5 {
    width: 51%;
  }
  .col-md-6 {
    width: calc(60% - 40px);
  }

  .col-md-auto {
    width: auto;
  }
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-auto {
    float: left;
  }
}
.person-font {
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  padding: 5px 20px;
}
.percent {
  position: absolute;
  top: 41%;
  color: #ffffff;
  font-size: 18px;
  z-index: 99999;
}
</style>