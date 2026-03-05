const categoriesContainer =document.getElementById('catagory-container');
 const treesContainer =document.getElementById('trees-container')
// this funtion for all the tree button
async function loadCatagories() {
    const res = await fetch('https://openapi.programming-hero.com/api/categories');
    const data = await res.json();
    data.categories.forEach(element => {
        const btn = document.createElement('button')
        btn.className =' btn btn-outline w-full';
        btn.innerText = element.category_name;
        categoriesContainer.appendChild(btn);
        
        
    });   
}
loadCatagories()

// all tree loading funtion
async function loadTrees(){
    const res = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await res.json();
    displayTress(data.plants)
    
}

function displayTress(trees) {
    trees.forEach((tree)=>{
        const card =document.createElement('div');
        card.className ="card bg-base-100 shadow-sm"
        card.innerHTML =`
        
          
                  <figure>
                     <img
                     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Card Title</h2>
                       <p class="line-clamp-1">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                       <div class="badge badge-accent">Accent</div>
                       <div class="flex  justify-between items-center gap-1">
                        <h2 class="font-bold text-xl text-[#15803D]">50000</h2>
                         <button class="btn btn-primary bg-[#15803D]">Buy Now</button>
                       </div>
                  </div>
              
        
        `
        treesContainer.appendChild(card)
    })
    
}
loadTrees()
displayTress()

