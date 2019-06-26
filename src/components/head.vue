<template>
    <div class="row">
      <div class="col-md-3">
        <logo></logo>
      </div>
      <div class="col-md-6">
        <slot></slot>
      </div>
      <div class="col-md-3">
        <timeShow></timeShow>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import timeShow from "@/components/time.vue";
import logo from "@/components/logo.vue";

@Component({
  components:{
    timeShow,
    logo
  }
})
export default class Head extends Vue{}
</script>
<style scoped>
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
