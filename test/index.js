const downImg = require('../src'),
  imgs = require('./index.json');
imgs.forEach(url =>
  downImg(
    {
      url,
    },
    {}
  )
);
