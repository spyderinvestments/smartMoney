const express = require('express'),
  Bill = require('../models/bill');

let router = express.Router();

/* GET users listing. */
router.get('/',  (req, res, next) => {
  Bill.find( (err, data) {
    console.log(data);
    res.send(data);
  });
});

router.delete('/',  (req, res, next) {
  // console.log(Bill.find(req.body));
  Bill.find(req.body).remove( (err, data) => {
    res.send(data);
  });
});

//router.delete('/:billId',  req, res) {
//   Bill.findByIdAndRemove(req.params.billId,  err, deletedBill) => {
//     res.status(err ? 400 : 200).send(err || deletedBill)
//   })
// })

router.post('/',  (req, res, next) => {
  console.log(req.body);
  Bill.create(req.body,  (err, savedAnimal) => {
    res.status(err ? 400 : 200).send(err || savedAnimal);
  });
});

router.put('/:billId',  (req, res) => {
  // Bill.findById(req.params.billId,  err, animal) {
  //   bill.isAvailable = !bill.isAvailable;
  //   bill.save( err, savedAnimal){
  //     res.send(savedAnimal);
  //   });
  // });
});

module.exports = router;
