const fs = require('fs');
const obj = require('./src/assets/js/polygonData');

const newData = [];
const data = Object.values(obj);
data.forEach((ele) => {
  const temp = [];
  ele.forEach((el, index) => {
    if (index < ele.length - 10) {
      temp.push({
        value: `${el.x} ${el.y} ${ele[index + 1].x} ${ele[index + 1].y} ${ele[index + 2].x} ${ele[index + 2].y} ${ele[index + 3].x} ${ele[index + 3].y} ${ele[index + 4].x} ${ele[index + 4].y}`,
      });
    }
  });
  newData.push(temp);
});

fs.writeFile('public/points/polyPoints.json', JSON.stringify(newData), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok.');
  }
});
