//运动数据展示页面
<template>
  <div class="sportsPieContainer">
    <div class="body">
        <div class="main">
          <div class="content">
            <div class="waterConsumption">
              <div class="highGoalContainer">
                <span class="consumptionLevel" v-bind:style="{height: getPercent + '%'}"></span>
              </div>
            </div>
            <div class="metric">
              <span class="number">{{needWater}}<span class="unit">毫升</span></span>
            </div>
            <p class="metricHint">要喝的水</p>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'pageSportsWater',
    props: {
    },
    data: function () {
      return {
        needWater: 0,
        targetWater: 1800
      }
    },
    computed: {
      getPercent: function () {
        return Math.round(100 * this.needWater / this.targetWater)
      },
      ...mapGetters({
      })
    },
    methods: {
      ...mapActions([
      ]),
      axiosGetNeedWater () {
        this.axios.get('/needwater').then(response => {
//          console.log('/needwater response:' + JSON.stringify(response.data))
          this.needWater = response.data.needWater > this.targetWater ? this.targetWater : response.data.needWater
        }).catch((err) => {
          console.log('axiosGetNeedWater err:' + err)
        })
      },
      makeTestData: function () {
        var data = []
        var value = Math.random() * (110 - 45) + 45
        for (var i = 0; i < 10; i++) {
          value = value + Math.random() * 20 - 10
          data.push(Math.round(value))
        }
        this.lastWeight = data[data.length - 1]
        return data
      }
    },
    watch: {
      // 如果发生改变，这个函数就会运行
    },
    mounted () {
      this.$nextTick(function () {
//        console.log('makeTestData:' + JSON.stringify(this.makeTestData()))
        this.axiosGetNeedWater()
      })
    }
  }
</script>

<style scoped>

  h2,p{
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
    width: 280px;
    height: 280px;
    /*margin: 0 auto;*/
    position: absolute;
    left: calc(50% - 137.5px);
  }



  .sportsPieContainer {
    display: flex;
    justify-content: center;
    background-color: rgb(255,255,255);
  }

  .body {
    position: relative;
    overflow: hidden;
    width: 280px;
    height: 280px;
    /*display: flex;*/
    /*flex-direction:column;*/
    /*align-items:center;*/
    /*justify-content: center;*/
    box-sizing: border-box;
    border-radius:5px;
    -webkit-box-shadow:0 0 10px rgba(136, 136, 136, .5);
    -moz-box-shadow:0 0 10px rgba(136, 136, 136, .5);
    box-shadow:0 0 10px rgba(136, 136, 136, .5);

  }

  .main .controls ul {
    list-style: none;
    display: flex;
  }


  .number {
    display: inline-block;
    font-size: 48px;
    font-family: 'Proxima Nova Thin', sans-serif;
    color: #585858;
  }

  .unit {
    font-size: 18px;
    font-family: 'Proxima Nova Light', sans-serif;
    color: #aeaeae;
    margin-left: 5px;
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

  .metric {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .metricHint{
    font-size: 1rem;
    font-family: 'Proxima Nova Light', sans-serif;
    color: #585858;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .waterConsumption{
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
  .highGoalContainer{
    position: relative;
    width: 73px;
    height: 150px;
    background: url(../assets/water-bottle-empty.png) no-repeat;
  }
  .consumptionLevel{
    width: 100%;
    position: absolute;
    bottom: 0;
    background: url(../assets/water-bottle-full.png) no-repeat bottom;
  }

  @import './css/normalize.css';
</style>
