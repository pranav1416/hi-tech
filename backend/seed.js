db.products.aggregate([
    {
        "$group": {
            _id: {upc: "$upc"},
            dups: { $addToSet: "$_id" } ,
            count: { $sum : 1 }
        }
    },
    {
        "$match": {
            count: { "$gt": 1 }
        }
    }
   ]).forEach(function(doc) {
      doc.dups.shift();
      db.products.remove({
          _id: {$in: doc.dups}
      });
   })