class Producto {
  id;
  nombre;
  precio;
  cantidad;
  

  constructor(id, nombre, precio, cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;

  }

  subTotal = () => {
    return this.precio * this.cantidad;
  };
}
