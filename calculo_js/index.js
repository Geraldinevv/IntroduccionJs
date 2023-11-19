var precioInicial = 400000; 
var cantidad = 0;


function incrementarCantidad() {
    let cantidad = parseInt(document.getElementById('cantidad').innerText);
    cantidad++;
    document.getElementById('cantidad').innerText = cantidad;
    actualizarTotal();
}


function decrementarCantidad() {
    let cantidad = parseInt(document.getElementById('cantidad').innerText);
    if (cantidad > 0) {
        cantidad--;
    }
    document.getElementById('cantidad').innerText = cantidad;
    actualizarTotal();
}

function actualizarTotal() {
    let cantidad = parseInt(document.getElementById('cantidad').innerText);
    let precio = parseInt(document.getElementById('precio-inicial').innerText);
    let total = cantidad * precio;
    document.querySelector('.valor-total').innerText = total;
}

actualizarTotal();



