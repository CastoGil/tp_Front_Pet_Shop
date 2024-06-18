document.addEventListener("DOMContentLoaded", function() {
    fetchProducts();
});

function fetchProducts() {
    fetch('/api/products/')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('product-table').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear existing table rows
            data.forEach(product => {
                let row = tableBody.insertRow();
                row.setAttribute('data-id', product.id);
                row.innerHTML = `
                    <td><input type="text" value="${product.name}" onchange="editProduct(${product.id}, 'name', this.value)"></td>
                    <td><input type="text" value="${product.description}" onchange="editProduct(${product.id}, 'description', this.value)"></td>
                    <td><input type="number" step="0.01" value="${product.price}" onchange="editProduct(${product.id}, 'price', this.value)"></td>
                    <td><button onclick="deleteProduct(${product.id})">Delete</button></td>
                `;
            });
        });
}

function addProduct() {
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;

    fetch('/api/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, price })
    })
    .then(response => response.json())
    .then(data => {
        fetchProducts();
        document.getElementById('product-name').value = '';
        document.getElementById('product-description').value = '';
        document.getElementById('product-price').value = '';
    });
}

function editProduct(id, field, value) {
    fetch(`/api/products/${id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ [field]: value })
    })
    .then(response => response.json())
    .then(data => {
        fetchProducts();
    });
}

function deleteProduct(id) {
    fetch(`/api/products/${id}/`, {
        method: 'DELETE'
    })
    .then(response => {
        fetchProducts();
    });
}
