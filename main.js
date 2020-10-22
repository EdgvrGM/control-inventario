// Elementos del html
var nameP = document.getElementById("nombre");
var code = document.getElementById("codigo");
var desc = document.getElementById("descripcion");
var cant = document.getElementById("cantidad");
var costo = document.getElementById("costo");
var pos = document.getElementById("posicion");
var delCode = document.getElementById("deleteCode");
var search = document.getElementById("searchCode");

// Botones
var btnAdd = document.getElementById("addNew");
var btnDel = document.getElementById("deleteBtn");
var btnSearch = document.getElementById("searchBtn");
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

  delete(code) {
    for (let i = 0; i < this.arr.length; i++) {
      if (code == this.arr[i].codigo) {
        this.arr.splice(i, 1);
        console.log(this.arr);
        return true;
      }
    }
  }

  search(code) {
    for (let i = 0; i < this.arr.length; i++) {
      if (code == this.arr[i].codigo) {
        console.log(this.arr[i]);
        return true;
      }
    }
  }
  getList() {
    for (let i = 0; i < this.arr.length; i++) {
      return this.arr[i].name;
    }
  }
  getInvList() {
    for (let i = 0; i < this.arr.length; i++) {
      return this.arr[i].name.reverse();
    }
  }
  addNew2(product) {
    if (this.arr.length >= 20) {
      return false;
    } else {
      this.arr[pos.value - 1].push(product);
    }
    console.log(this.arr[pos.value]);
  }
}

// Interaccion con la interfaz

let array = new Vector();
let product = "";
btnAdd.addEventListener("click", () => {
  if (pos > 0 && pos <= 20) {
    product = new Producto(
      nameP.value,
      code.value,
      desc.value,
      cant.value,
      costo.value
    );
    array.addNew2(product);
  } else {
    product = new Producto(
      nameP.value,
      code.value,
      desc.value,
      cant.value,
      costo.value
    );
    array.addNew(product);
  }
});

btnDel.addEventListener("click", () => {
  array.delete(delCode.value);
});

btnSearch.addEventListener("click", () => {
  array.search(search.value);
});
