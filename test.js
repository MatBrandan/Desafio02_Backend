const Container = require('./Desafio02.js');
const products = new Container('./products.json');

async function Test() {

  const producto1 = {
    title: "Jabon Ropa",
    price: 450,
    thumbnail: "https://farmacityar.vteximg.com.br/arquivos/ids/220350-1000-1000/220212_jabon-liquido-para-ropa-ala-x-3-l-botella-x-500-ml_imagen-2.jpg"
  }

  const producto2 = {
    title: "Servilleta Papel",
    price: 200,
    thumbnail: "https://papeleraautoservicio.com/wp-content/uploads/2019/04/S3380.jpg"
  }

  const producto3 = {
    title: "Detergente",
    price: 250,
    thumbnail: "https://abastecedoraanasco.com.ar/images/virtuemart/product/DM5%20-%20Detergente%20Magistral.jpg"
  }

  const producto4 = {
    title: "Suavizante",
    price: 500,
    thumbnail: "https://perfugroupar.vtexassets.com/arquivos/ids/165090/7506195143834_2.jpg"
  }

  // await products.save(producto4).then(data => console.log(data));
  // await products.getAll().then(data => console.log(data));
  // await products.getById(2).then(data => console.log(data));
  // await products.deleteById(4);
  // await products.deleteAll();

}

Test();