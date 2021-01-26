require('dotenv').config();
require('./config/database');

const Yuppie = require('./models/yuppie');

(async function() {

  await Yuppie.deleteMany({});
  const yuppies = await Yuppie.create([
    {name: 'Ross', age: 28, location: 'NYC', occupation: 'paleontologist'},
    {name: 'Rachel', age: 24, location: 'NYC', occupation: 'waitress'},
    {name: 'Chandler', age: 27, location: 'NYC', occupation: 'yuppie'},
    {name: 'Monica', age: 26, location: 'NYC', occupation: 'chef'},
    {name: 'Phoebe', age: 23, location: 'NYC', occupation: 'singer-songwriter'},
    {name: 'Joey', age: 25, location: 'NYC', occupation: 'actor'},
  ]);

  process.exit();

})();

