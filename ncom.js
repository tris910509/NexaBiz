// Statistik dummy
let totalSales = 125000000;
let orders = 342;

document.getElementById("sales").innerText =
    "Rp " + totalSales.toLocaleString("id-ID");

document.getElementById("orders").innerText = orders;

// Produk
const products = [
    { name: "Kaos Premium", price: 120000, stock: 45 },
    { name: "Headset Bluetooth", price: 350000, stock: 18 },
    { name: "Mainan Edukasi", price: 95000, stock: 60 },
    { name: "Pulsa & Tagihan", price: 0, stock: "Unlimited" }
];

const table = document.getElementById("productTable");

products.forEach(p => {
    const row = `
        <tr>
            <td>${p.name}</td>
            <td>Rp ${p.price.toLocaleString("id-ID")}</td>
            <td>${p.stock}</td>
        </tr>
    `;
    table.innerHTML += row;
});
