const Mock = require('mockjs')
var Random = Mock.Random
let tableData = function (params) {
  let par = (JSON.parse(params.body).params)
  if (par === 0) {
    return [{
      id: Random.integer(),
      date: Random.date('yyyy-MM-dd'),
      name: Random.cname(),
      address: Random.county(true)
    }]
  } else if (par === 1) {
    return [
      {
        id: Random.integer(),
        date: Random.date('yyyy-MM-dd'),
        name: Random.cname(),
        address: Random.county(true)
      },
      {
        id: Random.integer(),
        date: Random.date('yyyy-MM-dd'),
        name: Random.cname(),
        address: Random.county(true)
      },
      {
        id: Random.integer(),
        date: Random.date('yyyy-MM-dd'),
        name: Random.cname(),
        address: Random.county(true)
      }
    ]
  } else {
    return []
  }
}

Mock.mock('/table', tableData)
