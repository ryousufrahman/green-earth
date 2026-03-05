const categoriesContainer =document.getElementById('catagory-container');

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

