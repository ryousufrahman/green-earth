const categoriesContainer =document.getElementById('catagory-container');
 const treesContainer =document.getElementById('trees-container')
 const allTreesButton =document.getElementById('all-trees-btn')
 const cart =[];
 const cartContainer =document.getElementById('cartContainer')
 
// this funtion for all the tree button
async function loadCatagories() {
    const res = await fetch('https://openapi.programming-hero.com/api/categories');
    const data = await res.json();
    data.categories.forEach(element => {
        const btn = document.createElement('button')
        btn.className =' btn btn-outline w-full';
        btn.innerText = element.category_name;
        btn.onclick =() => selectCatagory(element.id, btn)
        categoriesContainer.appendChild(btn);
        
        
    });   
}
loadCatagories()


//   select catagory 

 async function selectCatagory(id ,btn){
    console.log(id , btn);
   
   const allButtons = document.querySelectorAll('#catagory-container button, #all-trees-btn');
   allButtons.forEach(btn=>{
    btn.classList.remove('btn-primary')
    btn.classList.add('btn-outline')
   })

    btn.classList.add('btn-primary')
    btn.classList.remove('btn-outline')

    const res =await fetch(
        `https://openapi.programming-hero.com/api/category/${id}
        `)
    
    const data = await res.json();
    console.log(data.plants);
    treesContainer.innerHTML="";
    displayTress(data.plants);
   
 }

 

// all tree loading funtion
async function loadTrees(){
    const res = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await res.json();
    displayTress(data.plants)
    
}

function displayTress(trees) {
    trees.forEach((tree)=>{
        const card =document.createElement('div');
        
        card.className ="card bg-base-100 shadow-sm h-[300px]"
        card.innerHTML =`
        
          
                  <figure>
                     <img
                     class ="h-48 w-full object-cover"
                     src="${tree.image}"/>
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${tree.name}</h2>
                       <p class="line-clamp-1">${tree.description}</p>
                       <div class="badge badge-accent">${tree.category}</div>
                       <div class="flex  justify-between items-center gap-1">
                        <h2 class="font-bold text-xl text-[#15803D]">${tree.price}</h2>
                         <button class="btn btn-primary bg-[#15803D]" onclick="addToCart(${tree.id}, '${tree.name}', ${tree.price})"  >Cart</button>
                       </div>
                  </div>
              
        
        `
        treesContainer.appendChild(card)
    })
    
}
loadTrees()
//  this funion is for toggoling all trees button
allTreesButton.addEventListener('click',function(){
       const allButtons = document.querySelectorAll('#catagory-container button, #all-trees-btn');
   allButtons.forEach(btn=>{
    btn.classList.remove('btn-primary')
    btn.classList.add('btn-outline')
   })

    allTreesButton.classList.add('btn-primary')
    allTreesButton.classList.remove('btn-outline') 

    treesContainer.innerHTML="";
    loadTrees();
 })

//  add to cart 

function addToCart(id , name , price){

 cart.push(
    {
        id,
        name,
        price,
        quantity:1
    });
    updatecart()
    
}

function updatecart() {
    cartContainer.innerHTML=''
    cart.forEach((item)=> {
     const cartItem =document.createElement('div')
     cartItem.className = 'card card-body bg-slate-100'
     cartItem.innerHTML=`
             <div class="flex justify-between items-center">
                                <div>
                                    <h2 class="font-bold">${item.name}</h2>
                                    <p>  ${item.price} x ${item.quantity}</p>
                                </div>
                                <button class="btn btn-ghost">X</button>
                            </div>
                            <p class="text-right font-semibold text-xl">${item.price* item.quantity}</p>
        
     
     `
     cartContainer.appendChild(cartItem);

    })
    
}

