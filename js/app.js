let productos = [new Producto(1, 'Alaska', 7500, 0), new Producto(2, 'Perú', 1500, 0), new Producto(3, 'Cuba', 3000, 0)]; //expresado en USD
/* const productosJSON  = [{id: 1, nombre: "Alaska", precio: 7500, cantidad, 0 },
                        {id: 2, nombre: "Peru", precio: 1500, cantidad, 0 },
                        {id: 3, nombre: "Cuba", precio: 3000, cantidad, 0 }] */
  

const boton1 = document.getElementById("boton--Alaska");
const boton2 = document.getElementById("boton--Peru");
const boton3 = document.getElementById("boton--Cuba");
const vaciarBtn = document.getElementById('vaciarCarrito--btn');


boton1.addEventListener('click' , () =>  {
  const producto = productos.find((producto)=> {
    return producto.id === +boton1.dataset.id
  });
  if (producto) {
    producto.cantidad += 1;
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  mostrarArray();
});

boton2.addEventListener('click' , () =>  {
  const producto = productos.find((producto)=> {
    return producto.id === +boton2.dataset.id
  });
  if (producto) {
    producto.cantidad += 1;
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  mostrarArray();
});

boton3.addEventListener('click' , () =>  {
  const producto = productos.find((producto)=> {
    return producto.id === +boton3.dataset.id
  });
  if (producto) {
    producto.cantidad += 1;
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  mostrarArray();
});


vaciarBtn.addEventListener('click', () => {
    productos.forEach((producto) => {
      producto.cantidad = 0;
    });
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarArray();
    }); 


function mostrarArray() {
  const tabla = document.getElementById('producto');
  tabla.innerHTML = '';
  let contador = 1;

  productos.forEach((producto) => {
    if (producto.cantidad > 0) {
    tabla.innerHTML+= `
      <tr>
        <th>${contador}</th>
        <th>${producto.nombre}</th>
        <th>${producto.precio}</th>
        <th>${producto.cantidad}</th>
        <th>${producto.subTotal()}</th>
        <th></th>
      </tr>
    `;
    contador++;
  }
  });
  
  tr = document.createElement('tr');
  tr.innerHTML = `<th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td id="total">${productos.reduce((total, item) => total + item.subTotal(),0)}</td>
                  `;
    tabla.appendChild(tr);
  }



  