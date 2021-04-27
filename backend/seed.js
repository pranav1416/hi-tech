db = db.getSiblingDB('hitech')

print(db.getCollectionNames())

var prod = db.prod

// db.products.findAndModify({
//   query: { upc: ids },
//   update: { $set: { categories: dats, imageURLs: imgs } },
//   upsert: false,
// })

// Find and modify categories and imageURLs from string to array

prod.find({}).forEach((doc) => {
  var catg = doc.categories.split(',')
  var imgs = doc.imageURLs.split(',')
  var ids = doc.upc
  db.products.findAndModify({
    query: { upc: ids },
    update: { $set: { categories: catg, imageURLs: imgs } },
    upsert: false,
  })
})

// db.products.updateOne({ upc: '50616008921'}, {
//     $set: { }
// })

// Removing duplicates based on UPC

db.products
  .aggregate([
    {
      $group: {
        _id: { upc: '$upc' },
        dups: { $addToSet: '$_id' },
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
  ])
  .forEach(function (doc) {
    doc.dups.shift()
    db.products.remove({
      _id: { $in: doc.dups },
    })
  })

// Random values for countInStock

db.products.aggregate([
  { $set: { countInStock: { $multiply: [{ $rand: {} }, 10] } } },
  { $set: { countInStock: { $floor: '$countInStock' } } },
])
