//运动每天详细数据展示页面
<template>
  <div class="backdrop">
    <div class="overlay" v-on:click="overlayClick()"></div>
    <div class="dialog">
      <div class="largeTileContainer">
        <div class="largeTile calories-burned">
          <div class="main">
            <div class="content">
              <h2>
                <i class="calories-burned-icon"></i>
                <span class="largeTileTitle">消耗卡路里数</span>
              </h2>
              <div class="goalContainer">
                <div class="goalDetail">
                  <div class="data">
                    <div class="total">
                      <span class="weeklyTotal">本周合计消耗</span>
                      <span class="metric"><span class="number">{{weekCalorie}}</span><span class="unit">{{numberUnit}}</span></span>
                    </div>
                    <div class="avg">
                      <span class="dailyTotal">日均</span>
                      <span class="metric"><span class="number">{{averageDailyCalorie}}</span><span class="unit">{{numberUnit}}</span></span>
                    </div>
                  </div>
                  <div class="progressStatus less">
                    <div class="progressMsg">{{weekCalorieProgressPercTipStr}}</div>
                    <div class="progressPerc">{{weekCalorieProgressPercStr}}</div>
                  </div>
                  <div class="meter">
                    <div class="percentage less" v-bind:style="percentageLessStyleObject">
                      <div class="icon"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chart">
                <div class="js_graphHeader graphHeader">
                  <h3 class="graphTitle js_graphTitle">过去 2 周</h3>
                </div>
                <div class="chartContainer" id="sports-detail-echarts-canvas"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <ul class="controlsList">
          <li class="control empty leftSide">
            <a title="empty">
              <span class="controlsLabel"></span>
            </a>
          </li>
          <li class="control more leftSide midSide">
            <a v-on:click="axiosGetDetailCalorie()" title="刷新数据">
              <span class="controlsLabel arrow-right">刷新数据</span>
              <span class="img-arrowRightButton">❯</span>
            </a>
          </li>
          <li class="control close rightSide">
            <a title="close" v-on:click="overlayClick()">
              <i class="img-closeWhiteButton"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import echarts from 'echarts/lib/echarts'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  import 'echarts/lib/chart/bar'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'pageSportsDetail',
    props: {
//      initialTarget: {
//        type: Number,
//        default: 2500
//      },
//      initialNow: {
//        type: Number,
//        default: 900
//      },
      numberUnit: {
        default: '卡路里'
      }
    },
    data: function () {
      return {
        sportsDetailBarChart: null,
        option: {
          color: ['#5CC4C4'],
          tooltip: {
            trigger: 'axis',
            legend: {
              show: false
            },
            axisPointer: {
              type: 'shadow'
            },
            formatter: function (params, ticket, callback) {
            },
            padding: 15
          },
          xAxis: [
            {
              type: 'category',
              name: 'Data',
              max: 14,
              axisLine: {
                lineStyle: {
                  color: 'rgb(192,208,224)',
                  width: 4
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#000000'
                }
              },
              data: ['日', '一', '二', '三', '四', '五', '六', null, '日', '一', '二', '三', '四', '五', '六']
            }
          ],
          yAxis: [
            {
              type: 'value',
//              boundaryGap: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitNumber: 2
            }
          ],
          series: [
            {
              name: '热量',
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: [2, 2, 0, 0]
                }
              },
              barWidth: '50%',
              data: []
            }
          ]

        }
      }
    },
    computed: {
      ...mapGetters({
        TimeCalorieArray: 'getTimeCalorie',
        target: 'getCalorieTarget'
      }),
      timeCalorie: function () {
        var ret = []
        for (let i = 0; i < this.TimeCalorieArray.length; i++) {
          if (i === 7) {
            ret.push(null)
          }
          if (i > 13) {
            break
          }
          ret.push(this.TimeCalorieArray[i].value)
        }
        return ret
      },
      weekCalorie: function () {
        var weekCalorieCount = 0
        for (let i = 7; i < this.TimeCalorieArray.length; i++) {
          weekCalorieCount = weekCalorieCount + this.TimeCalorieArray[i].value
        }
        return weekCalorieCount
      },
      averageDailyCalorie: function () {
        return parseInt(this.weekCalorie / 7)
      },
      weekCalorieTarget: function () {
        return this.target * 7
      },
      weekCalorieProgressPerc: function () {
        var percent = parseInt(this.weekCalorie * 100 / this.weekCalorieTarget)
        percent = percent > 100 ? 100 : percent
        return percent
      },
      weekCalorieProgressPercStr: function () {
        return this.weekCalorieTarget + '的 ' + this.weekCalorieProgressPerc + '%'
      },
      weekCalorieProgressPercTipStr: function () {
        if (this.weekCalorieProgressPerc >= 100) {
          return '您已达标。'
        } else {
          return '您尚未达标。'
        }
      },
      percentageLessStyleObject: function () {
        return {
          width: this.weekCalorieProgressPerc + '%'
        }
      }
    },
    methods: {
      ...mapActions([
        'changeDetailCalorieTime'
      ]),
      drawEcharts (id) {
        this.sportsDetailBarChart = echarts.init(document.getElementById(id))
        this.sportsDetailBarChart.setOption(this.option)
      },
      overlayClick () {
        this.$emit('overlayClick')
      },
      getFormatter (params, ticket, callback) {
        let index = params[0].dataIndex
        if (index === 7) {
          return null
        } else if (index > 7) {
          index--
        }
        let vaqqt = this.TimeCalorieArray[index].timeObj.month + '月' + this.TimeCalorieArray[index].timeObj.mday
        var resStr = vaqqt + '日' + '<br/>' + params[0].value + '卡路里'
        return resStr
      },
      axiosGetDetailCalorie () {
        this.axios.get('/detailcalorie').then(response => {
          console.log('/detailcalorie response:' + JSON.stringify(response.data))
          this.changeDetailCalorieTime(response.data)
        }).catch((err) => {
          console.log('axiosGetDetailCalorie err:' + err)
        })
      }
    },
    watch: {
      // 如果发生改变，这个函数就会运行
      timeCalorie: function () {
        this.option.series[0].data = this.timeCalorie
        this.drawEcharts('sports-detail-echarts-canvas')
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.option.series[0].data = this.timeCalorie
        this.option.tooltip.formatter = this.getFormatter
        this.drawEcharts('sports-detail-echarts-canvas')
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

  .backdrop{
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1000;
  }

  .overlay {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.5;
    background-color: rgb(0, 0, 0);
  }
  .backdrop{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calories-burned-icon {
    width: 32px;
    height: 40px;
    background: url(../assets/imgSports/calorie.png) no-repeat;
    background-size: contain;
    display: inline-block;
  }

  .dialog{
    z-index: 1099;
  }

  .largeTileContainer{
    border: solid 1px ;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: #fff;
    padding: 30px;
    width: 560px;
    box-sizing: border-box;
    z-index: 1100;
  }

  .largeTileTitle{
    padding-left: 10px;
  }

  .goalDetail{
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
  }

  .goalDetail .data{
    display: flex;
    padding-top: 25px;
  }

  .goalDetail .data .avg,
  .goalDetail .data .total{
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    flex:1;
  }

  .goalDetail .data .number{
    font-size: 3rem;
    color: #585858;
  }

  .goalDetail .progressStatus{
    color: #ffd300;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }

  .goalDetail .meter{
    background: #e9e9e9;
    height: 4px;
    overflow: visible;
    border-radius: 2px;
    margin-top: 18px;
    width: 100%;
    position: relative;
  }

  .goalDetail .meter .percentage{
    background: -moz-linear-gradient(right, #fed76e 0%, #fdbf2d 100%);
    background: -o-linear-gradient(right, #fed76e 0%, #fdbf2d 100%);
    background: -ms-linear-gradient(right, #fed76e 0%, #fdbf2d 100%);
    background: linear-gradient(to left, #fed76e 0%, #fdbf2d 100%);

    height: 18px;
    -webkit-border-radius: 9px;
    border-radius: 9px;
    position: absolute;
    top: -7px;
  }

  .goalDetail .meter .percentage .icon{
    position: absolute;
    background-image: url(../assets/imgSports/incompletecircle.png);
    background-repeat: no-repeat;
    background-position: center;
    height: 18px;
    width: 18px;
  }
  .percentage less{
    min-width: 20px;
  }
  .chart{
    padding-top: 30px;
  }
  .graphTitle{
    font-size: 0.8rem;
  }

  .chartContainer{
    width: 500px;
    height: 250px;
  }

  .controls .controlsList{
    display: flex;
    justify-content: flex-end;
  }

  .controls .leftSide{
    border-bottom-left-radius: 4px;
  }
  .controls .rightSide{
    border-bottom-right-radius: 4px;
  }

  .controls ul li{
    height: 44px;
    background: #3f4b59;
    display: flex;
    align-items: center;
  }
  .controls ul li:hover{
    background: #556375;
  }

  .controls .controlsList .midSide{
    width: 90px;
    background: #ff3f85;
  }
  .controls .controlsList .midSide:hover{
    background: #fd78a8;
  }

  .controls .controlsList .more span{
    display: inline-block;
    font-size: 0.75rem;
    color: #fff;
  }

  .controls .controlsList .more .controlsLabel{
    padding-left: 18px;
    margin-right: 5px;
  }

  .controls .controlsList .close{
    width: 44px;
    display: flex;
    justify-content: center;
  }



  .controls .controlsList .close .img-closeWhiteButton{
    display: inline-block;
    width: 13px;
    height: 13px;
  }
  .img-closeWhiteButton{
    background: url('../assets/imgSports/close_white.png') no-repeat;
    background-size: contain;
  }

  @import './css/normalize.css';
</style>
