const products=[

    {
    id:1,
    name:"Premium Laptop",
    category:"electronics",
    price:850,
    image:"https://picsum.photos/300?1"
    },
    
    {
    id:2,
    name:"Wireless Headphones",
    category:"electronics",
    price:120,
    image:"https://picsum.photos/300?2"
    },
    
    {
    id:3,
    name:"Smart Watch",
    category:"electronics",
    price:200,
    image:"https://picsum.photos/300?3"
    },
    
    {
    id:4,
    name:"Designer Jacket",
    category:"fashion",
    price:150,
    image:"https://picsum.photos/300?4"
    }
    
    ];
    
    
    let cart=[];
    
    
    const productBox=document.getElementById("products");
    
    
    
    function displayProducts(list=products){
    
    productBox.innerHTML="";
    
    
    list.forEach(product=>{
    
    
    let card=document.createElement("div");
    
    card.className="card";
    
    
    card.innerHTML=`
    
    <img src="${product.image}">
    
    <h3>${product.name}</h3>
    
    <p class="price">
    £${product.price}
    </p>
    
    <button onclick="addCart(${product.id})">
    Add To Cart
    </button>
    
    `;
    
    
    productBox.appendChild(card);
    
    
    });
    
    
    }
    
    
    
    function addCart(id){
    
    let item=products.find(p=>p.id==id);
    
    cart.push(item);
    
    updateCart();
    
    }
    
    
    
    
    function updateCart(){
    
    let box=document.getElementById("cart-items");
    
    box.innerHTML="";
    
    
    let total=0;
    
    
    cart.forEach((item,index)=>{
    
    
    total+=item.price;
    
    
    box.innerHTML+=`
    
    <div class="cart-item">
    
    ${item.name}
    
    <button onclick="removeItem(${index})">
    X
    </button>
    
    </div>
    
    `;
    
    
    });
    
    
    document.getElementById("total").innerHTML=total;
    
    document.getElementById("cart-count").innerHTML=cart.length;
    
    
    }
    
    
    
    function removeItem(index){
    
    cart.splice(index,1);
    
    updateCart();
    
    }
    
    
    
    
    document.querySelector(".cart-icon")
    .onclick=()=>{
    
    document.getElementById("cartPanel")
    .classList.toggle("active");
    
    };
    
    
    
    document.getElementById("search")
    .onkeyup=function(){
    
    let value=this.value.toLowerCase();
    
    
    let result=products.filter(p=>
    
    p.name.toLowerCase()
    .includes(value)
    
    );
    
    
    displayProducts(result);
    
    
    };
    
    
    
    displayProducts();