const errors = require('./src/errors');
const handle = require('./s');


try{

  errors.standardErr.range();

} catch(err){

  console.log('ha ocurrido un error ' + err)

}