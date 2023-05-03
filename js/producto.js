class Producto {
  id;
  nombre;
  precio;
  cantidad;
  

constructor(id, nombre, precio){
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;

}

  subTotal = () => {
    return this.precio * this.cantidad;
  };
}
