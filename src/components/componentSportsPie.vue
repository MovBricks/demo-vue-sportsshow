//运动数据展示页面
<template>
  <div class="sportsPieContainer">
    <div class="body">
      <transition name="rotatey" mode="out-in">
        <div class="main" v-show="!settingShow">
          <div class="content">
            <h2 class="tileTitle">
              <span class="tileInfo"></span>
            </h2>
            <div class="goal" v-on:mouseenter="showPercent()" v-on:mouseleave="hidePercent()">
              <div class="meter" id="echarts-canvas"></div>
              <div class="meter-center-icon" v-on:click="expandClick()"></div>
              <div class="meterText">
                <div class="metricContainer absoluteContainer" v-show="!percentShow">
                  <span class="number">{{now}}</span>
                  <span class="unit">{{numberUnit}}</span>
                </div>
                <div class="metricContainer percentContainer" v-show="percentShow">
                  <span class="number">{{getPercent}}%</span>
                  <span class="goalTarget">/&nbsp{{target}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="showControlsDoorBar" v-on:mouseenter="showControls()"></div>
          <div class="controls" v-on:mouseleave="hideControls()">
            <transition name="fade">
              <ul class="controlsList" v-show="controlsShow">
                <li class="control settingsButton leftSide">
                  <a  title="设置" v-on:click="showSettingShow()">
                    <i class="img-settingsButton"></i>
                    <span class="controlsLabel show-settings"></span>
                  </a>
                </li>
                <li class="control expandButton midSide">
                  <a v-on:click="expandClick()" title="快速查看">
                    <i class="img-expandButton"></i>
                    <span class="controlsLabel expand-tile">快速查看</span>
                  </a>
                </li>
                <li class="control moreButton rightSide">
                  <a v-on:click="axiosGetNowCalorie()" title="刷新数据">
                    <span class="controlsLabel arrow-right">刷新数据</span>
                    <span class="img-arrowRightButton">❯</span>
                  </a>
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </transition>
      <transition name="rotatey" mode="out-in">
        <div class="settings" v-show="settingShow">
          <div class="settingsHeader" >
            <div class="settingsTitle">
              <h2 title="卡路里">卡路里</h2>
              <i class="el-icon-delete"></i>
            </div>
            <div class="removeTile removeButton">
              <i class="fitglyph fitglyph-remove size-g"></i>
            </div>
          </div>
          <div class="savable">
            <div class="settingsContainer fancyinputs">
              <div class="goalTitle">每日目标</div>
              <div class="setting">
                <div class="metric">
                  <input type="number" step="100" v-model.number.lazy="temporaryTarget">
                  <span class="unit">卡路里</span>
                </div>
              </div>
              <div class="weeklyGoal">
                <span>每周的目标</span>
                <span class="weeklyGoalMetric">
                  <span class="weeklyGoalNumber">{{weekCalorieTarget}}</span>
                  <span class="weeklyGoalUnit">卡路里</span>
                </span>
              </div>
            </div>
          </div>
          <div class="settingsFooter savable">
            <el-button type="success" v-on:click="doneButtonClick()">完成</el-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
  import echarts from 'echarts'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'pageSportsPie',
    props: {
      initialTarget: {
        type: Number,
        default: 2500
      },
      initialNow: {
        type: Number,
        default: 900
      },
      numberUnit: {
        default: '卡路里'
      }
    },
    data: function () {
      return {
        temporaryTarget: this.initialTarget,
        settingShow: false,
        controlsShow: false,
        percentShow: false,
        chart: null,
        option: {
//          graphic: {
//            type: 'image',
//            left: 'center',
//            top: 'center',
//            style: {
//              width: 32,
//              height: 40
//            },
//            silent: true
//          },
          series: [
            {
              name: '底部100%圆',
              type: 'pie',
              radius: ['75%', '85%'],
              center: ['50%', '50%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 100,
                  itemStyle: {
                    normal: {
                      color: 'rgb(240,240,240)'
                    }
                  }
                }
              ],
              silent: true
            },
            {
              name: '数据展示',
              type: 'pie',
              radius: ['75%', '85%'],
              center: ['50%', '50%'],
              startAngle: 270,
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: this.initialNow,
                  itemStyle: {
                    normal: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                          offset: 0, color: 'rgb(254,215,110)' // 0% 处的颜色
                        }, {
                          offset: 1, color: 'rgb(253,143,73)'// 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                      },
                      borderWidth: 20,
                      borderColor: 'rgb(254,215,110)'
                    }
                  }
                },
                {
                  value: this.initialTarget - this.initialNow,
                  itemStyle: {
                    normal: {
                      opacity: 0
                    }
                  }
                }
              ],
              silent: true
            },
            {
              name: '起始实心圆',
              type: 'pie',
              radius: ['0%', '5%'],
              center: ['48%', '90%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 100,
                  itemStyle: {
                    normal: {
                      color: 'rgb(191,162,82)'
                    }
                  }
                }
              ],
              silent: true
            }
          ]
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
      changePie (target, now) {
        if (this.chart) {
          if (target - now < 0) {
            if (target > 0) {
              target = now
            } else {
              return
            }
          }
          this.option.series[1].data[0].value = now
          this.option.series[1].data[1].value = target - now
          this.chart.setOption(this.option)
        }
      },
      showPercent () {
        this.percentShow = true
      },
      hidePercent () {
        this.percentShow = false
      },
      showControls () {
        if (!this.controlsShow) {
          this.controlsShow = true
        }
//        this.controlsShow = true
      },
      hideControls () {
        this.controlsShow = false
      },
      showSettingShow () {
        this.settingShow = true
      },
      hideSettingShow () {
        this.settingShow = false
      },
      expandClick () {
        this.$emit('expandClick')
      },
      doneButtonClick () {
        this.hideSettingShow()
        this.changeCalorieTarget({targetCalorie: this.temporaryTarget})
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
        this.temporaryTarget = this.target
        this.drawPie('echarts-canvas')
      })
    }
  }
</script>

<style scoped>

  h2{
    margin: 0;
    font-weight: normal;
  }
  a{
    text-decoration: none;
  }
  input{
    -webkit-appearance: none;
  }
  .settings,
  .main{
    width: 275px;
    height: 275px;
    /*margin: 0 auto;*/
    position: absolute;
    left: calc(50% - 137.5px);

  }
  .content{

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
  .tileInfo:hover{
    background-position: left bottom;
  }

  #echarts-canvas {
    width: 175px;
    height: 175px;
  }
  .sportsPieContainer{
    display: flex;
    justify-content: center;
  }
  .body{
    position: relative;
    /*overflow: hidden;*/
    width: 275px;
    height: 275px;
    /*display: flex;*/
    /*flex-direction:column;*/
    /*align-items:center;*/
    /*justify-content: center;*/
  }
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing:border-box;
    border: solid #D01257 1px;
  }

  .main .controls ul{
    list-style: none;
    display: flex;
  }

  .goal{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .meter-center-icon{
    position: absolute;
    top: 67px;
    left: 120px;
    width: 32px;
    height: 40px;
    background:  url(../assets/imgSports/calorie.png) no-repeat;
    background-size: contain;
  }

  .meterText{
    display: flex;
    justify-content: center;
  }
  .metricContainer .number{
    display: inline-block;
    font-size: 48px;
    font-family: 'Proxima Nova Thin', sans-serif;
    color: #585858;
  }

  .metricContainer .unit{
    font-size: 18px;
    font-family: 'Proxima Nova Light', sans-serif;
    color: #aeaeae;
    margin-left: 5px;
  }
  .controls{
    position: absolute;
    z-index: 100;
    top: 274px;
    display: flex;
    justify-content: center;
    width: 275px;
  }
  .controls ul{
    margin: 0;
    padding: 0;

  }
  .controls ul li{
    height: 44px;
    padding: 5px 10px;
    background: #3f4b59;
    display: flex;
  }
  .controls ul li:hover{
    background: #556375;
  }

  .controls ul li span{
    color: #fff;
    font-family: "Proxima Nova Bold", "Arial", sans-serif;
    font-size: 1rem;
  }

  .controls .controlsList a{
    /*height: 44px;*/
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .controls .leftSide{
    border-bottom-left-radius: 4px;
  }
  .controls .rightSide{
    border-bottom-right-radius: 4px;
    padding-right: 10px;
  }
  .controls .controlsList .midSide{
    background: #ff3f85;
  }
  .controls .controlsList .midSide:hover{
    background: #fd78a8;
  }

  .controls .expandButton .img-expandButton{
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  .controls .settingsButton .img-settingsButton{
    display: inline-block;
    width: 25px;
    height: 25px;
  }

  .controls .moreButton .img-arrowRightButton{
    display: inline-block;
    margin-left: 10px;
    font-size: 18px;
    color: #aaa;
  }

  .img-settingsButton{
    background: url('../assets/imgSports/settingsbutton.png') no-repeat;
    background-size: contain;
  }

  .img-expandButton{
    background: url('../assets/imgSports/expendbutton.png') no-repeat;
    background-size: contain;
  }

  .showControlsDoorBar{
    opacity: 0;
    height: 5px;
  }

  .fade-enter-active{
    transition: opacity 1s
  }
  .fade-enter{
    opacity: 0
  }

  .settings{
    box-sizing:border-box;
    padding: 5px 12px;
    border: solid #D01257 1px;
  }

  .settingsTitle{
    margin-bottom: 10px;
    font-family: 'Proxima Nova Light', sans-serif;
    color: #3c3c3c;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .settingsContainer{
    height: 160px;
  }

  .goalTitle{
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
  .metric input{
    -webkit-appearance: textfield;
    overflow: hidden;

    outline:none;
    border: none;
    width: 180px;
    height: 30px;
    font-size: 1.5rem;
  }
  .metric .unit{
    font-size: 1rem;
  }

  .weeklyGoal{
    margin-top: 10px;
    font-size: 0.8rem;
    color: #585858;
  }

  .weeklyGoalUnit{
    font-weight: bold;
  }

  .settingsFooter{
    display: flex;
    justify-content: center;
  }

  .rotatey-leave-active{
    /*transform: translateX(275px);*/
    transform: rotateY(-90deg) scale(.9);
    transition: transform 0.5s ;
  }
  .rotatey-leave{
    /*transform: translateX(0);*/
  }

  .rotatey-enter-active{
    /*transform: translateX(0);*/
    transition: transform 0.5s 0.4s;
  }
  .rotatey-enter{
    /*transform: translateX(-275px);*/
    transform: rotateY(90deg) scale(.9);
  }

  @import './css/normalize.css';
</style>
