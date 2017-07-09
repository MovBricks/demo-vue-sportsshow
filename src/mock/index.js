import Mock from 'mockjs'

var mockstart = function () {
  // console.log('mockinit!!')
  Mock.mock('/detailcalorie', {
    'timeCalorie|14': [{
      'timeObj|4': {
        'year|2017': 2017,
        'month|4': 4,
        'mday|+1': 10,
        'wday': '日'
      },
      'value|1000-6000': 1
    }]
  })
  Mock.mock('/nowcalorie', {
    'nowCalorie|1000-6000': 1
  })
  Mock.mock('/streamCardList', {
    'streamCardList|1000-6000': 1
  })
  Mock.mock('/sportsheart', {
    'sportsheart|1000-6000': 1
  })
  Mock.mock('/calendersteps', {
    'stepsData': {
      'range': ['2017-01-01', '2017-06-30'],
      'data': []
    }
  })
  Mock.mock('/needwater', {
    'needWater|500-1800': 1
  })
  Mock.mock('/weightmonth', {
    'weightmonth|5-12': [
      '@natural(60, 120)'
    ]
  })
  Mock.mock('/sendcomment', {
    'weightmonth|5-12': [
      '@natural(60, 120)'
    ]
  })
  Mock.mock('/settargetcalorie', {
  })
}

mockstart()

export default mockstart
