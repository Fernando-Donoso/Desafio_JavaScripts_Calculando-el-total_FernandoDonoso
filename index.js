let precio = 400000

// Precio base
let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


// Seleccionar cantidad y total
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");

// Calcular total inicial
totalSpan.innerHTML = precio * Number(cantidadSpan.innerText);


