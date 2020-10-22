// Elementos del producto
var name = document.getElementById("nombre").value;
var code = document.getElementById("codigo").value;
var desc = document.getElementById("descripcion").value;
var cant = document.getElementById("cantidad").value;
var costo = document.getElementById("costo").value;
var pos = document.getElementById("posicion").value;
// Botones
var btnAdd = document.getElementById("addNew");
var btnDel = document.getElementById("deleteCode");
var btnSearch = document.getElementById("searchCode");
var btnRec = document.getElementById("recuperar");
var btnRec2 = document.getElementById("recuperarInv");

class Producto {
  constructor(nombre, codigo, descripcion, cantidad, costo) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.costo = costo;
  }
}

class Vector {
  constructor() {
    this.arr = [];
  }
}
addNew(Producto);
{
  if (this.arr.length >= 20) {
    return false;
  } else {
    this.arr.push(Producto);
  }
}
