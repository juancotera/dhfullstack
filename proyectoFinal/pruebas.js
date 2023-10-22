const productos = [
  { nombre: "Producto 1", disponible: true, precio: 10 },
  { nombre: "Producto 2", disponible: false, precio: 20 },
  { nombre: "Producto 3", disponible: true, precio: 30 },
  { nombre: "Producto 4", disponible: true, precio: 15 },
];

function obtenerPreciosDeProductosDisponibles(productos) {
  const preciosDisponibles = productos
    .filter((producto) => producto.disponible === true)
    .map((producto) => producto.precio);

  return preciosDisponibles;
}

const listaPreciosDisponibles = obtenerPreciosDeProductosDisponibles(productos);
console.log(listaPreciosDisponibles);