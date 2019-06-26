<template>
  <div class="time">
    <div>
      {{calendar}}
    </div>
    <div class="min">
      {{min}}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import moment from "moment";

@Component
export default class TimeShow extends Vue {
  calendar: string = "";
  min: string = "";
  private mounted() {
    setInterval(() => {
      this.calendar = moment().format("YYYY.MM.DD");
      this.min = moment().format("HH:mm");
    }, 1000);
  }
}
</script>
<style scoped>
.time {
  font-size: 26px;
  font-family: "Microsoft YaHei Light";
  font-weight: 300;
  font-style: normal;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
}
.min {
  font-size: 47px;
  line-height: 1.2;
}
</style>