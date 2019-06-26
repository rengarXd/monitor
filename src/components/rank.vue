<template>
  <div class="part-l">
    <div class="left-title">{{title}}</div>
    <div
      :ref="name"
      class="bar"
      :style="{width:'auto',height: HEIGHT_SIZE}"
    ></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import echarts from "echarts";
import theme from "@/assets/customed.project.json";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
// import {verbal} from "@/types/chart/config";

@Component
export default class Rank extends Vue {
  @Prop({ default: {} }) option!: Object;
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) name!: string;
  @Prop({ default: "" }) chartHeight!: string;

  private myChart: any = null;
  get HEIGHT_SIZE(): string {
    return this.chartHeight || window.innerHeight * 0.4 + "px";
  }

  get WIDTH_SIZE(): string {
    return window.innerWidth * 0.2 + "px";
  }

  @Watch("option", { immediate: true, deep: true })
  onOptionChange(newval: any, oldVal: any) {
    this.$nextTick(function() {
      this.drawRank(this.name, newval);
    });
  }

  private drawRank(id: string, data: any) {
    // console.log(JSON.stringify(data));
    if (!data) return;
    let _this: any = this;
    let chartDom = this.$refs[this.name];
    if (_this.myChart) {
      _this.myChart.clear();
    }

    _this.myChart = echarts.init(chartDom, theme.theme);
    _this.myChart.setOption(data);
    // window.addEventListener("resize", function() {
    //   _this.myChart.resize();
    // });
  }
}

// export default {
//   props: {
//     option: {
//       type: Object,
//       default: {}
//     },
//     title: {
//       type: String,
//       default: ""
//     },
//     name: {
//       type: String,
//       default: "person"
//     }
//   },
//   data() {
//     return {
//       myChart: null
//     };
//   },
//   computed: {
//     HEIGHT_SIZE() {
//       return window.innerHeight * 0.4 + "px";
//     },
//     WIDTH_SIZE() {
//       return window.innerWidth * 0.2 + "px";
//     }
//   },
//   watch: {
//     option: {
//       handler(newval, oldVal) {
//         this.$nextTick(function() {
//           this.drawRank(this.name, newval);
//         });
//       },
//       immediate: true,
//       deep: true
//     }
//   },
//   // mounted() {
//   //   this.init();
//   // },
//   methods: {
//     drawRank(id, data) {
//       console.log(JSON.stringify(data));
//       if (!data) return;
//       let _this: any = this;
//       let chartDom = this.$refs[this.name];
//       if (_this.myChart) {
//         _this.myChart.clear();
//       }

//       _this.myChart = echarts.init(chartDom, theme.theme);
//       _this.myChart.setOption(data);
//       // window.addEventListener("resize", function() {
//       //   _this.myChart.resize();
//       // });
//     }
//   }
//   // beforeDestroy() {
//   //   if (this.myChart) {
//   //     this.myChart.clear();
//   //   }
//   // }
// };
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
}
</style>