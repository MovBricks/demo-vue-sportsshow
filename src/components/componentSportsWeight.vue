//运动数据展示页面
<template>
  <div class="sportsPieContainer">
    <div class="body">
        <div class="main" v-show="!settingShow">
          <div class="content">
            <h2 class="tileTitle" style="display: none;">
              <span class="title">体重</span>
              <span class="afterTitle"></span>
              <span class="tileInfo">?</span>
              <span class="contentInfo">?</span>
            </h2>
            <div class="inner-content" style="display: none;"></div>
            <div class="weightGoal graph">
              <div class="graphContainer">
                <div class="echartsCanvas" id="sports-weight-echarts-canvas"></div>
              </div>
              <ul class="stats">
                <li class="progress" v-show="false">
                  <span class="stat metricLarge metricContainer">
                    <i class="fitglyph fitglyph-weight size-d"></i>
                    <span class="number">0.0</span>
                    <span class="unit">公斤</span>
                  </span>
                  <span class="monthlyChange">自上个月起</span>
                </li>
                <li class="weight">
                  <span class="stat metricLarge metricContainer">
                    <i class="fitglyph fitglyph-weight size-d"></i>
                    <span class="number">50.0</span>
                    <span class="unit">公斤</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
  import echarts from 'echarts'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'pageSportsWeight',
    props: {
    },
    data: function () {
      return {
        temporaryTarget: '',
        settingShow: false,
        controlsShow: false,
        percentShow: false,
        chart: null,
        option: {
          legend: {
            show: false
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0]
              var date = new Date(params.name)
              return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
            },
            axisPointer: {
              type: 'shadow',
              animation: false
            }
          },
          xAxis: {
            show: false,
            type: 'time'
          },
          yAxis: {
            type: 'value',
            scale: true,
            boundaryGap: ['30%', '30%'],
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgb(240,240,240)'
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              inside: true,
              textStyle: {
                baseline: 'top'
              }
            },
            axisTick: {
              show: false
            }
          },
          series: [{
            name: '模拟数据',
            type: 'line',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: 'rgb(77,191,191)'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(77,191,191)',
                borderWidth: 2
              }
            },
            showSymbol: true,
            hoverAnimation: true,
            data: this.makeTestData
          }]
        }
      }
    },
    computed: {
      getPercent: function () {
        return Number(100 * this.now / this.target).toFixed(2)
      },
      weekCalorieTarget: function () {
        return this.target * 7
      },
      ...mapGetters({
        now: 'getCalorieNow',
        target: 'getCalorieTarget'
      })
    },
    methods: {
      ...mapActions([
        'changeCalorieTarget',
        'changeCalorieNow'
      ]),
      drawPie (id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption(this.option)
      },
      makeTestData: function () {
        var data = []
        var now = +new Date(1997, 9, 3)
        var oneDay = 24 * 3600 * 1000
        var value = Math.random() * 1000
        for (var i = 0; i < 10; i++) {
          data.push((function () {
            now = new Date(+now + oneDay)
            value = value + Math.random() * 21 - 10
            return {
              name: now.toString(),
              value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
              ]
            }
          })())
        }
        return data
      },
      expandClick () {
        this.$emit('expandClick')
      },
      axiosGetNowCalorie () {
        this.axios.get('/nowcalorie').then(response => {
          console.log('/nowcalorie response:' + JSON.stringify(response.data))
          this.changeCalorieNow(response.data)
        }).catch((err) => {
          console.log('axiosGetNowCalorie err:' + err)
        })
      }
    },
    watch: {
      // 如果发生改变，这个函数就会运行
      target: function () {
        this.changePie(this.target, this.now)
      },
      now: function () {
        this.changePie(this.target, this.now)
      }
    },
    mounted () {
      this.$nextTick(function () {
//        console.log('makeTestData:' + JSON.stringify(this.makeTestData()))
        this.option.series[0].data = this.makeTestData()
        this.drawPie('sports-weight-echarts-canvas')
      })
    }
  }
</script>

<style scoped>

  h2 {
    margin: 0;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  input {
    -webkit-appearance: none;
  }

  li {
    list-style: none;
  }

  .settings,
  .main {
    width: 275px;
    height: 275px;
    /*margin: 0 auto;*/
    position: absolute;
    left: calc(50% - 137.5px);
  }

  .content {

  }

  .tileInfo {
    margin-left: 5px;
    display: inline-block;
    overflow: hidden;
    width: 24px;
    height: 24px;
    cursor: Default;
    background: url(../assets/imgSports/questionmark.png) no-repeat;
  }

  .tileInfo:hover {
    background-position: left bottom;
  }

  .sportsPieContainer {
    display: flex;
    justify-content: center;
  }

  .body {
    position: relative;
    overflow: hidden;
    width: 275px;
    height: 275px;
    /*display: flex;*/
    /*flex-direction:column;*/
    /*align-items:center;*/
    /*justify-content: center;*/
  }

  .main {
    box-sizing: border-box;
    border: solid #D01257 1px;
  }

  .main .controls ul {
    list-style: none;
    display: flex;
  }

  .echartsCanvas{
    position: absolute;
    top: -50px;
    width: 270px;
    height: 280px;
  }

  .stats{
    position: absolute;
    bottom: 0;
    margin: 0;
  }

  .weightGoal {
    position: relative;
    width: 275px;
    height: 275px;
  }

  .meter-center-icon {
    position: absolute;
    top: 67px;
    left: 120px;
    width: 32px;
    height: 40px;
    background: url(../assets/imgSports/calorie.png) no-repeat;
    background-size: contain;
  }

  .meterText {
    display: flex;
    justify-content: center;
  }

  .metricContainer .number {
    display: inline-block;
    font-size: 48px;
    font-family: 'Proxima Nova Thin', sans-serif;
    color: #585858;
  }

  .metricContainer .unit {
    font-size: 18px;
    font-family: 'Proxima Nova Light', sans-serif;
    color: #aeaeae;
    margin-left: 5px;
  }

  .controls {
    display: flex;
    justify-content: center;
  }

  .controls ul {
    margin: 0;
    padding: 0;

  }

  .controls ul li {
    height: 44px;
    padding: 5px 10px;
    background: #3f4b59;
    display: flex;
  }

  .controls ul li:hover {
    background: #556375;
  }

  .controls ul li span {
    color: #fff;
    font-family: "Proxima Nova Bold", "Arial", sans-serif;
    font-size: 1rem;
  }

  .controls .controlsList a {
    /*height: 44px;*/
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .controls .leftSide {
    border-bottom-left-radius: 4px;
  }

  .controls .rightSide {
    border-bottom-right-radius: 4px;
    padding-right: 10px;
  }

  .controls .controlsList .midSide {
    background: #ff3f85;
  }

  .controls .controlsList .midSide:hover {
    background: #fd78a8;
  }

  .controls .expandButton .img-expandButton {
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  .controls .settingsButton .img-settingsButton {
    display: inline-block;
    width: 25px;
    height: 25px;
  }

  .controls .moreButton .img-arrowRightButton {
    display: inline-block;
    margin-left: 10px;
    font-size: 18px;
    color: #aaa;
  }

  .img-settingsButton {
    background: url('../assets/imgSports/settingsbutton.png') no-repeat;
    background-size: contain;
  }

  .img-expandButton {
    background: url('../assets/imgSports/expendbutton.png') no-repeat;
    background-size: contain;
  }

  .showControlsDoorBar {
    opacity: 0;
    height: 5px;
  }

  .fade-enter-active {
    transition: opacity 1s
  }

  .fade-enter {
    opacity: 0
  }

  .settings {
    box-sizing: border-box;
    padding: 5px 12px;
    border: solid #D01257 1px;
  }

  .settingsTitle {
    margin-bottom: 10px;
    font-family: 'Proxima Nova Light', sans-serif;
    color: #3c3c3c;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .settingsContainer {
    height: 160px;
  }

  .goalTitle {
    font-size: 0.9rem;
    font-family: 'Proxima Nova SemiBold', sans-serif;
    color: #585858;
  }

  .metric {
    border: 4px solid #f0f0f0;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    padding: 2px 10px 2px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .metric input {
    -webkit-appearance: textfield;
    overflow: hidden;

    outline: none;
    border: none;
    width: 150px;
  }

  .metric .unit {
    font-size: 0.8rem;
  }

  .weeklyGoal {
    margin-top: 20px;
    font-size: 0.8rem;
    color: #585858;
  }

  .weeklyGoalUnit {
    font-weight: bold;
  }

  .settingsFooter {
    display: flex;
    justify-content: center;
  }

  .rotatey-leave-active {
    transform: translateX(275px);
    transition: transform 1s;
  }

  .rotatey-leave {
    transform: translateX(0);
  }

  .rotatey-enter-active {
    transform: translateX(0);
    transition: transform 1s 0.3s;
  }

  .rotatey-enter {
    transform: translateX(-275px);
  }

  @import './css/normalize.css';
</style>
