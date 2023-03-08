show dbs

use ecommerce

db.users.insertOne({
  name: 'Juan',
  lastname: 'Perez',
  ege: 23,
  email: 'jp@gmail.com',
});

db.users.find();

db.users.insertOne({
  name: 'Pedro',
  lastname: 'Mei',
  ege: 21,
  emails: ['pm@gmail.com', 'pn@gmail.com', 'po@gmail.com'],
});

show collections

db.products.insertMany([
  {
    name: 'TV',
    price: 234.99,
    stock: 32,
  },
  {
    name: 'Nevera',
    price: 564.99,
    stock: 20,
  },
  {
    name: 'Cocina',
    price: 345.99,
    stock: 15,
  }
]);

db.products.find({ name: 'TV' });

db.products.find({ price: 564.99 });

db.products.find({ price: { $gte: 300.00 } });

show collections