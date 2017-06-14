import Mock from 'mockjs'

var mockstart = function () {
  console.log('mockinit!!')
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
  Mock.mock('/calendersteps', {
    'stepsData': {
      'range': ['2017-01-01', '2017-06-30'],
      'data': []
    }
  })
}

export default mockstart
