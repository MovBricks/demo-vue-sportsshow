//运动数据展示页面
<template>
  <div class="body">
    <div class="main">
      <div class="content">
        <h2 class="tileTitle">
          <span class="tileInfo"></span>
        </h2>
        <div class="goal" v-on:mouseenter="showPercent()" v-on:mouseleave="hidePercent()">
          <div class="meter" id="echarts-canvas"></div>
          <div class="meter-center-icon"></div>
          <div class="meterText">
            <div class="metricContainer absoluteContainer" v-show="!percentShow">
                <span class="number">837</span>
                <span class="unit">卡路里</span>
            </div>
            <div class="metricContainer percentContainer" v-show="percentShow">
              <span class="number">32%</span>
                <span class="goalTarget">/&nbsp2,594</span>
            </div>
          </div>
        </div>
      </div>
      <div class="showControlsDoorBar" v-on:mouseenter="showControls()" v-show="!controlsShow"></div>
      <div class="controls" v-on:mouseleave="hideControls()">
        <ul class="controlsList" v-show="controlsShow">
          <li class="control settingsButton leftSide">
            <a href="#" title="设置">
              <i class="img-settingsButton"></i>
              <span class="controlsLabel show-settings"></span>
            </a>
          </li>
          <li class="control expandButton midSide">
            <a href="#" title="快速查看">
              <i class="img-expandButton"></i>
              <span class="controlsLabel expand-tile">快速查看</span>
            </a>
          </li>
          <li class="control moreButton rightSide">
            <a href="#/activities" title="查看更多">
              <span class="controlsLabel arrow-right">查看更多</span>
              <span class="img-arrowRightButton">❯</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<
<script>
  import echarts from 'echarts'
  let target = 2500
  let now = 1500

  export default {
    name: 'pageSports',
    data: function () {
      return {
        controlsShow: false,
        percentShow: false,
        chart: null,
        opinionBottomPie: [
          {
            value: 100,
            itemStyle: {
              normal: {
                color: 'rgb(240,240,240)'
              }
            }
          }
        ],
        opinionStartPie: [
          {
            value: 100,
            itemStyle: {
              normal: {
                color: 'rgb(191,162,82)'
              }
            }
          }
        ],
        opinionData: [
          {
            value: now,
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
            value: target - now,
            itemStyle: {
              normal: {
                opacity: 0
              }
            }
          }
        ]
      }
    },
    methods: {
      drawPie (id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption({
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
              data: this.opinionBottomPie,
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
              data: this.opinionData,
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
              data: this.opinionStartPie,
              silent: true
            }
          ]
        })
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
          this.chart.setOption({
            series: [{
              data: [{
                value: now
              },
              {
                value: target - now
              }]
            }]
          })
        }
      },
      showPercent () {
        this.percentShow = true
      },
      hidePercent () {
        this.percentShow = false
      },
      showControls () {
        this.controlsShow = true
      },
      hideControls () {
        this.controlsShow = false
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawPie('echarts-canvas')
      })
    }
  }
</script>

<style scoped>
  @import './css/pageSports.css';
  @import './css/normalize.css';
</style>
