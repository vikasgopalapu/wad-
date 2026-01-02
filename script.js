let cart = [];
let total = 0;

function showPage(id){
    let pages = document.getElementsByClassName("section");
    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";

    if(id === "cart") updateCart();
    if(id === "payment") generateQR();
}

function addToCart(book, price){
    cart.push({ book, price });
    alert(book + " added to cart");
}

function updateCart(){
    let list = document.getElementById("cartItems");
    let totalBox = document.getElementById("totalAmount");
    list.innerHTML = "";
    total = 0;

    if(cart.length === 0){
        list.innerHTML = "<li>No items in cart</li>";
        totalBox.innerHTML = "";
        return;
    }

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.book + " - ₹" + item.price;
        list.appendChild(li);
        total += item.price;
    });

    totalBox.innerHTML = "<strong>Total: ₹" + total + "</strong>";
}

function generateQR(){
    const upi = "upi://pay?pa=stsvardhan@ybl&pn=BookStore";

    const canvas = document.getElementById("qrCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    QRCode.toCanvas(
        canvas,
        upi,
        { width: 220 }
    );
}
