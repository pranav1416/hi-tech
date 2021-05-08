// import products from './allprod.js'
// import { createRequire } from 'module'
// import fs from 'fs'

// const require = createRequire(import.meta.url)
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// const res = []

// const tempFunction = (data) => {
//   //console.log(data)
//   fs.writeFile('dataFinal.json', JSON.stringify(data), (err) => {
//     if (err) {
//       console.error(err)
//     }
//     console.log('File has been created')
//   })
// }

// const findInvalidUrl = (products) => {
//   var count = 0
//   for (var i = 500; i < products.length; i++) {
//     var doc = products[i]
//     const beforeLen = doc.imageURLs.length

//     doc.imageURLs.forEach((imgUrl) => {
//       let http = new XMLHttpRequest()
//       http.open('GET', imgUrl, true)
//       http.send()
//       if (http.status !== 200) {
//         doc.imageURLs.pop(imgUrl)
//         http.abort()
//       }
//       http.abort()
//     })
//     const afterLen = doc.imageURLs.length
//     if (afterLen > 10) {
//       const newImageURLs = doc.imageURLs.slice(0, 10)
//       doc.imageURLs = newImageURLs
//     }
//     const afterAfterLen = doc.imageURLs.length
//     count += 1
//     res.push(doc)
//     console.log(count, ' : ', beforeLen, ' , ', afterLen, ' , ', afterAfterLen)
//   }
//   // .forEach((doc) => {
//   //   const beforeLen = doc.imageURLs.length
//   //   doc.imageURLs.forEach((imgUrl) => {
//   //     let http = new XMLHttpRequest()
//   //     http.open('GET', imgUrl, false)
//   //     http.send()
//   //     if (http.status !== 200) {
//   //       doc.imageURLs.pop(imgUrl)
//   //     }
//   //   })
//   //   const afterLen = doc.imageURLs.length
//   //   count += 1
//   //   console.log(count, ' : ', beforeLen, ' , ', afterLen)
//   // })
//   tempFunction(res)
// }

// findInvalidUrl(products)
