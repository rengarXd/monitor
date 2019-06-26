const textStyle: any = {
  color: "#fff",
  fontWeight: 400,
  fontSize: 14,
  fontFamily: "Microsoft YaHei"
}
export default {
  perRank: {
    grid: {
      top: "2%",
      left: "21%",
      // right: 10,
      bottom: "8%",
      borderWidth: 1
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: '#E5E6E7',
      textStyle: {
        color: '#3E4041'
      },
    },
    // tooltip:{
    //   show:true,
    //   formatter: '{b}</br></br> {c}元',
    //   backgroundColor:'#E5E6E7'
    // },
    xAxis: {
      type: 'value',
      axisLine: {
        show: true
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        color: '#fff'
      }
    },
    yAxis: {
      type: 'category',
      data: ['山东自建第一营业处一组', '山东自建第一营业处一组', '山东自建第一营业处一组', '山东自建第一营业处一组', '山东自建第一营业处一组'],
      axisLabel: {
        color: '#fff'
      },
      // boundaryGap:true,
      axisTick: {
        show: true,
        alignWithLabel: true
      },
    },
    series: [{
      data: [120, 200, 150, 80, 70],
      type: 'bar',
      barWidth: 20,
      label: {
        show: true,
        formatter: '{c}元'
        // position: 'insideRight'
      }
    }]
  },
  lineRank: {
    grid: {
      top: 0,
      left: "20%",
      right: 10,
      bottom: "10%",
      borderWidth: 1
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: '#E5E6E7',
      textStyle: {
        color: '#3E4041'
      },
    },
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7'],
      axisLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#fff'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#fff'
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      },
    },
    series: [{
      data: [820, 932, 901, 934, 1290],
      type: 'line'
    }]
  },
  pieRank: {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      backgroundColor: '#E5E6E7',
      textStyle: {
        color: '#3E4041'
      },
    },
    legend: {
      type: 'plain',
      bottom: 10,
      left: 'center',
      orient: 'horizontal',
      // width:'100px',
      // height : '60px',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      radius: '45%',
      center: [
        '50%', '30%'
      ],
      data: [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      },
      {
        value: 135,
        name: '视频广告'
      }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  },
  piePerson: {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      textStyle,
      // x: 'bottom',
      bottom:"5%",
      data: ['上线人力（人）：996', '未上线人力：335']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        center:["50%", "35%"],
        radius: ['32%', '55%'],
        avoidLabelOverlap: false,
        itemStyle:{
          borderWidth:1,
          borderColor:'#fff'
        },
        label: {
          show: true,
          // position: 'center',
          formatter: function (params: any) {
            // console.log(params)
            return params.name+"：" + params.percent + "%"
          },
          textStyle:{
            color: "#999",
            fontSize: 12,
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: [
          {
            value: 996, name: '上线人力（人）：996'
          },
          { value: 335, name: '未上线人力：335' }
        ]
      }
    ]
  },
  dayProgress: {
    grid: {
      top: "3%",
      left: "7%",
      // right: 10,
      bottom: "10%",
      borderWidth: 1
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: '#E5E6E7',
      textStyle: {
        color: '#3E4041'
      },
    },
    // tooltip:{
    //   show:true,
    //   formatter: '{b}</br></br> {c}元',
    //   backgroundColor:'#E5E6E7'
    // },
    xAxis: {
      type: 'value',
      min:0,
      max:100,
      axisLine: {
        show: false
      },
      interval:10,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#999'
      }
    },
    yAxis: {
      type: 'category',
      data: ['上海', '广东', '辽宁', '山东', '湖北','四川','深圳','浙江','福建','河南'],
      axisLabel: {
        color: '#999'
      },
      // boundaryGap:true,
      axisTick: {
        show: true,
        // alignWithLabel: true
      },
    },
    series: [{
      data: [40, 37, 36, 35, 34, 22,20,18,18,8],
      type: 'bar',
      barWidth: 20,
      label: {
        show: true,
        formatter: '{c}%'
        // position: 'insideRight'
      }
    }]
  },
}
