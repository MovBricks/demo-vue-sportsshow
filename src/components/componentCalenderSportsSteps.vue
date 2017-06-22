//运动每天详细数据展示页面
<template>
  <div class="sportsStepsContainer">
    <div class="chartContainer" id="calender-sports-steps-echarts-canvas"></div>
    <el-button type="success" v-on:click="axiosGetCalenderSteps()">获取模拟数据</el-button>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'pageSportsSteps',
    props: {
      showRange: {
        type: Array,
        default: function () {
          return ['2017-01-01', '2017-06-30']
        },
        validator: function (arr) {
          return arr.length === 2
        }
      }
    },
    data: function () {
      return {
        sportsStepsCalenderChart: null,
        option: {
          backgroundColor: '#404a59',
          title: {
            top: 30,
            text: '2017年某人每天的步数',
            subtext: '数据纯属虚构',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '30',
            left: '30',
            data: ['步数', 'Top 10'],
            textStyle: {
              color: '#fff'
            }
          },
          calendar: [{
            top: 100,
            left: 40,
//            right: 1,
            height: 145,
            cellSize: 19,
            range: this.showRange,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
              }
            },
            yearLabel: {
              show: false
//              formatter: '{start}  1st',
//              textStyle: {
//                color: '#fff'
//              }
            },
            itemStyle: {
              normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
              }
            }
          }],
          series: [
            {
              name: '步数',
              type: 'scatter',
              coordinateSystem: 'calendar',
              data: this.stepsData,
              symbolSize: function (val) {
                return val[1] / 500
              },
              itemStyle: {
                normal: {
                  color: '#ddb926'
                }
              }
            },
            {
              name: 'Top 10',
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              data: this.stepsDataTop10,
              symbolSize: function (val) {
                return val[1] / 500
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        }
      }
    },
    computed: {
      ...mapGetters({
        stepsObjData: 'getStepsData'
      }),
      stepsData: function () {
//        console.log('数据：' + this.stepsObjData.data)
        return this.stepsObjData.data
      },
      stepsDataTop10: function () {
        var topData = this.stepsData.slice()
        return topData.sort(function (a, b) {
          return b[1] - a[1]
        }).slice(0, 10)
      },
      stepsDataRange: function () {
        return this.stepsObjData.range
      }
    },
    methods: {
      makeTestData: function () {
        var data = []

        let date = +echarts.number.parseDate('2017-01-01')
        let end = +echarts.number.parseDate('2017-12-30')
        let dayTime = 3600 * 24 * 1000

        for (let time = date; time < end; time += dayTime) {
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
          ])
        }
//        console.log('makeTestData:' + data)
        return data
      },
      ...mapActions([
        'changeStepsData'
      ]),
      drawEcharts (id) {
        this.sportsStepsCalenderChart = echarts.init(document.getElementById(id))
        this.sportsStepsCalenderChart.setOption(this.option)
      },
      axiosGetCalenderSteps () {
        this.axios.get('/calendersteps').then(response => {
          var resData = response.data
          resData.stepsData.data = this.makeTestData()
          this.changeStepsData(resData.stepsData)
        }).catch((err) => {
          console.log('axiosGetNowCalorie err:' + err)
        })
      }
    },
    watch: {
      // 如果发生改变，这个函数就会运行
      stepsData: function () {
        this.option.series[0].data = this.stepsData
        this.option.series[1].data = this.stepsDataTop10
        this.drawEcharts('calender-sports-steps-echarts-canvas')
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.option.series[0].data = this.stepsData
        this.option.series[1].data = this.stepsDataTop10
        this.drawEcharts('calender-sports-steps-echarts-canvas')
      })
    }
  }
</script>

<style scoped>
  ul,h3,h2{
    margin: 0px;
    padding: 0px;
    font-weight: normal;
  }

  li{
    list-style: none;
  }

  .sportsStepsContainer{
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/

  }

  .chartContainer{
    width: 560px;
    height: 275px;
    border-radius:5px;
    -webkit-box-shadow:0 0 10px rgba(136, 136, 136, .5);
    -moz-box-shadow:0 0 10px rgba(136, 136, 136, .5);
    box-shadow:0 0 10px rgba(136, 136, 136, .5);
  }


  @import './css/normalize.css';
</style>
