// KPI
document.getElementById("sales").innerText =
"Rp " + (245000000).toLocaleString("id-ID");
document.getElementById("orders").innerText = 428;

// Orders
const orders = [
 {id:"NB-001",name:"Andi",total:450000,status:"success"},
 {id:"NB-002",name:"Sari",total:125000,status:"pending"},
 {id:"NB-003",name:"Budi",total:780000,status:"success"}
];

const table = document.getElementById("orderTable");
orders.forEach(o=>{
    table.innerHTML+=`
    <tr>
        <td>${o.id}</td>
        <td>${o.name}</td>
        <td>Rp ${o.total.toLocaleString("id-ID")}</td>
        <td><span class="status ${o.status}">
        ${o.status}</span></td>
    </tr>`;
});

// Chart (simple canvas)
const canvas=document.getElementById("salesChart");
const ctx=canvas.getContext("2d");
canvas.height=200;

const data=[120,160,140,180,210,260];
ctx.beginPath();
ctx.moveTo(20,180-data[0]);
data.forEach((v,i)=>ctx.lineTo(20+i*60,180-v));
ctx.strokeStyle="#1F3C88";
ctx.lineWidth=3;
ctx.stroke();
