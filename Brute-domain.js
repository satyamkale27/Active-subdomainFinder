const dns = require("dns");

const promice1 = Promise.resolve(2);
const promice2 = 42;
const promice3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promice1, promice2, promice3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
