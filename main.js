// Elementos del html
var nameP = document.getElementById("nombre");
var code = document.getElementById("codigo");
var desc = document.getElementById("descripcion");
var cant = document.getElementById("cantidad");
var costo = document.getElementById("costo");
var pos = document.getElementById("posicion");
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
    console.log(this.arr);
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
  addNew2(product) {
    if (this.arr.length >= 20) {
      return false;
    } else {
      this.arr[pos.value].push(product);
    }
    console.log(this.arr[pos]);
  }
}

// Interaccion con la interfaz

let array = new Vector();
btnAdd.addEventListener("click", () => {
  console.log(nameP.value);
  if (pos > 0 && pos <= 20) {
    let product = new Producto(
      nameP.value,
      code.value,
      desc.value,
      cant.value,
      costo.value
    );
    array.addNew2(product);
  } else {
    let product = new Producto(
      nameP.value,
      code.value,
      desc.value,
      cant.value,
      costo.value
    );
    array.addNew(product);
  }
});
