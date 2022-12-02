var Producto = {
    precio: 20,
    porcentajeDescuento: 0.2,
    CalcularPrecioDescuento: function (){
       return this.precio * this.porcentajeDescuento;
    
    }
    
}
console.log(Producto.CalcularPrecioDescuento)
