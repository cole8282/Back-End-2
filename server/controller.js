const houseData = require("./db.json");
let globalId = 4;

module.exports = {
  getHouses: function(req, res) {
    //simply send the response of all the houses
    res.status(200).send(houseData);
  },
  deleteHouse: function(req, res) {
    //find the index to delete based off the given req
    let index = houseData.findIndex(function(elem) {
      return elem.id === +req.params.id
    })
    houseData.splice(index, 1);
    //send the response of the houses not including the deleted one
    res.status(200).send(houseData);
  },
  createHouse: function(req, res) {
    //assign the front end values sent in(req.body) properties to the new obj
    let newHouse = {
      id: globalId,
      address: req.body.address,
      price: Number(req.body.price),
      imageURL: req.body.imageURL
    };
    houseData.push(newHouse);
    res.status(200).send(houseData);
    globalId++;
    // let { address, price, imageURL } = req.body
    // let newHouse = {
    //   id: globalId,
    //   address,
    //   price: +price,
    //   imageURL
    // }
    // houseData.push(newHouse);
    // res.status(200).send(houseData);
    // globalId++;
  },
  updateHouse: function(req, res) {
   let id = req.params.id;
   let type = req.body.type;
   let index = houseData.findIndex(function(elem) {
    return elem.id === +req.params.id
  })
    //adjust the price according to - or + clicks
    if (type === 'plus') {
      houseData[index].price = houseData[index].price + 10000;
      res.status(200).send(houseData);
    } else if (type === 'minus') {
      houseData[index].price = houseData[index].price - 10000;
      res.status(200).send(houseData);
    }
  }
};