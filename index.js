const  express = require('express');

const app = express();



app.get("/", (req, res)=>{

  res.send('Estoy en la ruta home')

})

app.get("/app", (req, res)=>{

  res.send('Estoy en la ruta APP')

})

app.get("*", (req, res)=>{

  res.send('Eta ruta no esta definida')

})

app.listen(3000, ()=>{
  console.log('el servidor esta en funcionamiento en el puerto 3000');
})