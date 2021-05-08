// db = db.getSiblingDB('hitech')

// print(db.getCollectionNames())

// var products = db.products
// // var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// // For checking broken images
// products.find({}).forEach((doc) => {
//   //var images = doc.imageURls
//   var invalidUrls = []
//   doc.imageURLs.forEach((imgUrl) => {
//     var request = new XMLHttpRequest()
//     request.open('GET', imgUrl, true)
//     request.send()
//     request.onload = function () {
//       status = request.status
//       if (request.status !== 200) {
//         invalidUrls.push(imgUrl)
//       }
//     }
//     print(invalidUrls)
//   })
// })

// // var categ = [
// //   'Audio',
// //   'Computers',
// //   'TV',
// //   'Mobile',
// //   'Cameras & Camcorders',
// //   'Car Electronics',
// // ]
// // var x = 0
// // For updating primary Categories of database
// // products.find({}).forEach((doc) => {
// //   var catg = doc.categories.reverse()
// //   var flag = categ.forEach((cat) => {
// //     if (catg.includes(cat)) {
// //       db.products.findAndModify({
// //         query: { _id: doc._id },
// //         update: { $set: { primaryCategories: cat } },
// //         upsert: false,
// //       })
// //       return true
// //     }
// //     print(x + 1, ' : ', flag, '\n')
// //   })
// // })

// // db.products.findAndModify({
// //   query: { upc: ids },
// //   update: { $set: { categories: dats, imageURLs: imgs } },
// //   upsert: false,
// // })

// // Find and modify categories and imageURLs from string to array

// // prod.find({}).forEach((doc) => {
// //   var catg = doc.categories.split(',')
// //   var imgs = doc.imageURLs.split(',')
// //   var ids = doc.upc
// //   db.products.findAndModify({
// //     query: { upc: ids },
// //     update: { $set: { categories: catg, imageURLs: imgs } },
// //     upsert: false,
// //   })
// // })

// // db.products.updateOne({ upc: '50616008921'}, {
// //     $set: { }
// // })

// // Removing duplicates based on UPC

// // db.products
// //   .aggregate([
// //     {
// //       $group: {
// //         _id: { upc: '$upc' },
// //         dups: { $addToSet: '$_id' },
// //         count: { $sum: 1 },
// //       },
// //     },
// //     {
// //       $match: {
// //         count: { $gt: 1 },
// //       },
// //     },
// //   ])
// //   .forEach(function (doc) {
// //     doc.dups.shift()
// //     db.products.remove({
// //       _id: { $in: doc.dups },
// //     })
// //   })

// // // Random values for countInStock

// // db.products.aggregate([
// //   { $set: { countInStock: { $multiply: [{ $rand: {} }, 10] } } },
// //   { $set: { countInStock: { $floor: '$countInStock' } } },
// // ])
