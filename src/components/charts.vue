<template>
  <div>
    <div
      id="main"
      ref="myCharts"
      :style="{height:HEIGHT_SIZE,width:'auto'}"
    ></div>
    <stated :nums="LoginCount"></stated>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import echarts from "echarts";
import stated from "@/components/stated.vue";
import * as common from "@/chart/config.ts";
import { renderChart } from "@/api/index";
import { graphic } from "@/chart/graphic";
import { ILogin } from "@/types/loginP";

@Component({
  components: {
    stated
  }
})
export default class Charts extends Vue {
  @Prop({ default: 1 }) sizeChart!: number;

  protected myChart: any = {};
  protected LoginCount: Object = {
    Offline: "122",
    Calling: "20",
    Ready: "10"
  };
  protected data0: any[] = [];
  protected data1: any[] = [];
  protected data2: any[] = [];
  protected min: number = 0;
  protected max: number = 150;
  protected settime: number = 0;
  protected timing: any = null;
  
  protected isTable: boolean = true;
  protected areaborder: any[] = [];
  protected AFYP: any = {
    DateOnlieAFYP: "1800650",
    WeekDealAFYP: "123654789",
    MonthDealAFYP: "566464646"
  };
  get HEIGHT_SIZE(): string {
    return window.innerHeight * 0.9 + "px";
  }

  get WIDTH_SIZE(): string {
    return window.innerWidth * 0.58 + "px";
  }
  get OPTIONS(): Object {
    let ser = {
      tooltip: {
        show: true,
        // backgroundColor: "#E4E7E9",
        // textStyle: {
        //   color: "#888B8D"
        // },
        backgroundColor: "#E5E6E7",
        textStyle: {
          color: "#3E4041"
        },
        extraCssText: "opacity: 0.9"
      },
      series: [
        {
          name: "未通话",
          layout: "none",
          coordinateSystem: "cartesian2d",
          // symbol: "image://static/img/off_big.png",
          symbol: "rect",
          symbolSize: common.symbolSize * this.sizeChart,
          itemStyle: {
            color: common.colors.NODE_OFF
          },
          data: this.consoleCoods(this.data1),
          type: "scatter",
          tooltip: {
            formatter: function(params:any) {
              console.log(params);
              return `IP：${params.data.IP}</br >工号：${
                params.data.EmployeeCode
              }</br >姓名：${params.data.EmployeeName}</br >组别：${params.data
                .ORGName || ""}`;
            }
          }
        },
        {
          name: "通话中",
          layout: "none",
          coordinateSystem: "cartesian2d",
          // symbol: "image://static/img/on_big.png",
          symbol: "rect",
          symbolSize: common.symbolSize * this.sizeChart,
          itemStyle: {
            color: common.colors.NODE_ON
          },
          data: this.consoleCoods(this.data2),
          type: "scatter",
          tooltip: {
            formatter: function(params) {
              console.log(params);
              return `IP：${params.data.IP}</br >工号：${
                params.data.EmployeeCode
              }</br >姓名：${params.data.EmployeeName}</br >组别：${params.data
                .ORGName || ""}`;
            }
          }
        },
        {
          name: "离线",
          layout: "none",
          coordinateSystem: "cartesian2d",
          // symbol: "image://static/img/unlog_big.png",
          symbol: "rect",
          symbolSize: common.symbolSize * this.sizeChart,
          itemStyle: {
            color: common.colors.NODE_UNLOG
          },
          data: this.consoleCoods(this.data0),
          type: "scatter",
          tooltip: {
            formatter: function(params) {
              console.log(params);
              return `IP：${params.data.IP}</br >工号：${
                params.data.EmployeeCode
              }</br >姓名：${params.data.EmployeeName}</br >组别：${params.data
                .ORGName || ""}`;
            }
          }
          // markArea: {
          //   silent: true,
          //   itemStyle: {
          //     normal: {
          //       color: "transparent",
          //       borderWidth: 1,
          //       borderType: "dashed"
          //     }
          //   },
          //   data: data.markArea
          // }
        }
      ]
    };
    common.verbal.xAxis.min = this.min;
    common.verbal.xAxis.max = this.max;
    common.verbal.yAxis.min = this.min;
    common.verbal.yAxis.max = this.max;
    return Object.assign(common.verbal, ser);
  }
  private mounted() {
    // console.log(this.$route.params);
    let req: ILogin = JSON.parse(sessionStorage.getItem("loginData") || "[]");
    // this.sizeChart = this.$route.params.size ? this.$route.params.size : 1;
    if (!req) return this.$message.warning("暂无数据");
    console.log(req);
    req.data.forEach(element => {
      if (typeof element.time === "string" && element.action === "2") {
        this.settime = this.timingFn(element.time);
        this.timing = setTimeout(this.ready(), this.settime);
      }
    });
  }
  timingFn(time) {
    return Number(time) * 60 * 1000;
  }
  ready(): any {
    let req = JSON.parse(sessionStorage.getItem("loginData") || "[]");
    renderChart(req.code, req.data[0].action)
      .then((res: any) => {
        // for (let x = common.symbolSize / (5 * 1.77); x < 150; x += common.symbolSize / (5 * 1.77)) {
        //   for (let y = common.symbolSize / 5; y < 150; y += common.symbolSize / 5) {
        //     this.data0.push([x, y])
        //   }
        // }
        this.LoginCount = res.LoginCount[0];
        // this.AFYP = res.AFYP[0] || {};
        this.$emit("AFYP", res.AFYP);
        this.areaborder = graphic(res.areaborder);
        this.data0 = []; //离线
        this.data1 = []; //空闲
        this.data2 = []; //通话中
        let arr: any = res.Content;
        let all: any[] = [];
        arr.forEach((item, index) => {
          JSON.parse(item.Coordinates).forEach((it: any) => {
            all.push(it);
          });
          // if (item.LoginStatus === "0") {
          //   this.data0.push(item);
          // }
          // if (item.LoginStatus === "1") {
          //   this.data1.push(item);
          // }
          // if (item.LoginStatus === "2") {
          //   this.data2.push(item);
          // }
          if (item.LoginStatus === "10") {
            this.data0.push(item);
          }
          if (item.LoginStatus === "2") {
            this.data1.push(item);
          }
          if (item.LoginStatus === "4") {
            this.data2.push(item);
          }
        });
        this.myChart = echarts.init(this.$refs.myCharts);
        // console.log(common.symbolSize);
        this.setOptions(this.OPTIONS);
        this.timing = setTimeout(() => {
          this.ready();
        }, this.settime);
      })
      .catch(err => {
        this.$message({
          showClose: true,
          message: "错误信息：" + err.msg,
          duration: 2000,
          type: "error"
        });
      });
  }
  setOptions(OPTIONS: Object): any {
    this.myChart.setOption(OPTIONS, true);
    let that: any = this;
    let textX: any[] = [];
    let textY: any[] = [];
    let textarea: any[] = [];
    let gra: any[] = [];
    if (that.areaborder.length) {
      that.areaborder.forEach(iem => {
        textX.push(iem[0]);
        textY.push(iem[1]);
      });
      textarea = [
        (that.maxFiex(textX) - that.minFix(textX)) / 2 + that.minFix(textX),
        (that.maxFiex(textY) - that.minFix(textY)) / 1.4 + that.minFix(textY)
      ];
      gra = [
        {
          type: "polyline",
          shape: {
            points: that.areaborder.map(item =>
              that.myChart.convertToPixel("grid", item)
            )
          },
          style: {
            fill: null,
            stroke: "#b5b5b5",
            lineWidth: 1
          }
        },
        {
          type: "text",
          // left: 'center',
          // top: 'center',
          bounding: "raw",
          style: {
            x: that.myChart.convertToPixel("grid", textarea)[0],
            y: that.myChart.convertToPixel("grid", textarea)[1],
            text: "公共设施区域",
            font: '1em "STHeiti", sans-serif',
            fill: "#bcbcbc"
          }
          // invisible:true,
        }
      ];
    }
    that.myChart.setOption({
      graphic: gra
    });
  }
  consoleCoods(arr: Array<any>) {
    let data: any = [];
    for (let i = 0; i < arr.length; i++) {
      let res = JSON.parse(arr[i].Coordinates);
      // data.push([res[0], res[1]] || []);
      data.push({
        name: arr[i].IP,
        value: [res[0], res[1]] || [],
        EmployeeCode: arr[i].EmployeeCode,
        EmployeeName: arr[i].EmployeeName,
        ORGName: arr[i].ORGName,
        CTIAccountExt: arr[i].CTIAccountExt,
        CTIAccount: arr[i].CTIAccount,
        LoginTime: arr[i].LoginTime,
        IP: arr[i].IP
      });
    }
    return data;
  }
  minFix(arr: any) {
    var min = arr[0];
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  maxFiex(arr: any) {
    var max = arr[0];
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
}

// //最小值
// Array.prototype.min = function() {
//   var min = this[0];
//   var len = this.length;
//   for (var i = 1; i < len; i++) {
//     if (this[i] < min) {
//       min = this[i];
//     }
//   }
//   return min;
// };
// //最大值
// Array.prototype.max = function() {
//   var max = this[0];
//   var len = this.length;
//   for (var i = 1; i < len; i++) {
//     if (this[i] > max) {
//       max = this[i];
//     }
//   }
//   return max;
// };
</script>
