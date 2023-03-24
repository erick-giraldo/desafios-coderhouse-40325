import {init} from './db/mongodb.js'
import OrderModel from './models/order.js'

await init()

/*const data = [
  {
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: (new Date()).toISOString(),
  },
  {
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: (new Date()).toISOString(),
  },
  {
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: (new Date()).toISOString(),
  },
  {
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: (new Date()).toISOString(),
  },
  {
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: (new Date()).toISOString(),
  },
  {
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: (new Date()).toISOString(),
  },
  {
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: (new Date()).toISOString(),
  },
  {
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: (new Date()).toISOString(),
  },
]

console.log('data', JSON.stringify(data, null, 2))

await OrderModel.insertMany(data)

const result = await OrderModel.find({})

console.log('result', JSON.stringify(result, null, 2))



const body = {
  size: 'small'
}

const result = await OrderModel.aggregate([
  {
    $match: { size: body.size }
  },
  {
    $group: {
      _id: '$name', totalQuantity: { $sum: '$quantity' }
    }
  },
  {
    $sort: { totalQuantity: -1 }
  },
  {
    $group: {
      _id: 1, orders: { $push: '$$ROOT' }
    }
  },
  {
    $project: {
      '_id': 0,
      orders: '$orders'
    }
  },
  {
    $merge: {
      into: 'reports'
    }
  }
])

console.log('result', JSON.stringify(result, null, 2))

*/
