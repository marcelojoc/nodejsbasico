const greet = require ('./src/greet');

greet.emit('shout', 'tuvieja');


greet.emit('call', 'marcelojoc', (name)=>{

  console.log('estamos llamando a --'+ name)
});