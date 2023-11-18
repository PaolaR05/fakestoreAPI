const getProductos = async () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const cardproduct = document.getElementById("cardproduct");

            data.forEach(producto => {
                const card = document.createElement("div");
                card.className = "col-12 col-xl-4";

                card.innerHTML = `
                    <div col-md-2>
                        <div class="card">
                        <img src="${producto.image}" class="card-img-top" >
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description}</p>
                            <p class="card-text">Categoría: ${producto.category}</p>
                            <p class ="card-text">Precio: $${producto.price}</p>
                        </div>
                    </div>
                `;
                cardproduct.appendChild(card);
            });
        })
        .catch(error => console.error(error));
};

(() => {
    getProductos()
})()