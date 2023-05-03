const productos = [new Producto(1, 'Alaska', 7500, 0), new Producto(2, 'Perú', 1500, 0), new Producto(3, 'Cuba', 3000, 0)]; //expresado en USD

const boton1 = document.getElementById("boton--Alaska");
const boton2 = document.getElementById("boton--Peru");
const boton3 = document.getElementById("boton--Cuba");
const vaciarBtn = document.getElementById('vaciarCarrito--btn');

boton1.addEventListener('click' , () =>  {
  const producto = productos.find((producto)=> {
    return producto.id === +boton1.dataset.id
  });
  producto.cantidad += 1;
  productos.push(producto);
  mostrarArray();
});

boton2.addEventListener('click' , () =>  {
  const producto = productos.find((producto)=> {
    return producto.id === +boton2.dataset.id
  });
  producto.cantidad += 1;
  productos.push(producto);
  mostrarArray();
});

boton3.addEventListener('click' , () =>  {
  const producto = productos.find((producto)=> {
    return producto.id === +boton3.dataset.id
  });
  producto.cantidad += 1;
  productos.push(producto);
  mostrarArray();
});

boton3.addEventListener('click' , () =>  {
  const producto = productos.find((producto)=> {
    return producto.id === +boton3.dataset.id
  });
  producto.cantidad += 1;
  productos.push(producto);
  mostrarArray();
});

function mostrarArray() {
  const tabla = document.getElementById('producto');
  tabla.innerHTML = '';
  let contador = 1;

  productos.forEach((producto) => {
    tabla.innerHTML+= `
      <tr>
        <th>${contador}</th>
        <th>${producto.id}</th>
        <th>${producto.nombre}</th>
        <th>${producto.precio}</th>
        <th>${producto.cantidad}</th>
      </tr>
    `;
    contador++;
  });
  tr = document.createElement('tr');
  tr.innerHTML = `<th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${productos.reduce((total, item) => total + item.precio,0)}</td>
                  `;
    tabla.appendChild(tr);
  }

