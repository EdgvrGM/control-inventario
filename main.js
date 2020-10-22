// Elementos del html
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

// Clases
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

  addNew(product) {
    if (this.arr.length >= 20) {
      return false;
    } else {
      this.arr.push(product);
    }
  }

  delete(productCode) {
    for (i = 0; i < this.arr.length; i++) {
      if (productCode == this.arr[i].codigo) {
        this.arr.splice(i, 1);
        return true;
      }
    }
  }

  search(productCode) {
    for (i = 0; i < this.arr.length; i++) {
      if (productCode == this.arr[i].codigo) {
        return true;
      }
    }
  }
  getList() {
    for (i = 0; i < this.arr.length; i++) {
      return this.arr[i].name;
    }
  }
  getInvList() {
    for (i = 0; i < this.arr.length; i++) {
      return this.arr[i].name.reverse();
    }
  }
}
