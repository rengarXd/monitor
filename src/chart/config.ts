const verbal: any = {
  backgroundColor: '#002032',
  // legend: {
  //     data: ['未通话', '通话中', '离线'],
  //     left: 'center',
  //     bottom: '6%',
  //     selectedMode: false
  // },
  grid: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    show: true,
    borderWidth: 1,
    borderColor: '#002032',
    containLabel: true
  },
  xAxis: {
    min: 0,
    max: 1000,
    type: 'value',
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    min: 0,
    max: 1000,
    type: 'value',
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },

}

const symbolSize: number = 16

const colors: any = {
  // NODE_ON:'#67c23a',
  // NODE_OFF:'#03a9f4',
  // NODE_UNLOG:'#999999'
  NODE_ON: '#0ADFDF',
  NODE_OFF: '#FF0000',
  NODE_UNLOG: '#cccccc'
}
export {
  verbal,
  symbolSize,
  colors
};