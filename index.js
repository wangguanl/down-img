const Ut = require('./ut'),
  imgs = require('./index.json');

imgs.map(async url => await Ut.downImg({ url }));
