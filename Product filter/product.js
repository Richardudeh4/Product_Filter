const data = [
    {
        id:1,
        name: "Invicta Men's Pro Driver",
        img: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 79,
        cat: "Dress",
    },
    {
        id:2,
        name: "Timex Men's Expedition Scout",
        img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 63,
        cat: "Luxury",
    },
    {
        id:3,
        name: "GONDOLO HAUTE JOAILLERIE."
        ,
        img: "https://images.unsplash.com/photo-1629581678313-36cf745a9af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 89,
        cat: "Dress",
    },
    {
        id:4,
        name: "GRAND COMPLICATIONS",
        img: "https://images.unsplash.com/photo-1626624386327-5204714bae9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGF0ZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 30,
        cat: "Luxury",
    },
    {
        id:5,
        name: "Pre-owned Patek Philippe Complications Mechanical Black and Grey Dial Men's Watch 5205G-010",
        img: "https://images.unsplash.com/photo-1612177343582-665b93b34403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdyaXN0JTIwd2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 90,
        cat: "Luxury",
    },
    {
        id:6,
        name: "Patek Philippe Olive Green Sunburst Complications Automatic Men's Rose Gold Watch 5205R-011",
        img: "https://images.unsplash.com/photo-1622312442796-e5ad97616450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d3Jpc3QlMjB3YXRjaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 96,
        cat: "Sport",
    },
    {
        id:7,
        name: "Patek Philippe Complications World Time Automatic Blue Dial Men's Watch 5230P-001",
        img: "https://images.unsplash.com/photo-1617714651073-17a0fcd14f9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9sZXh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 210,
        cat: "Dress",
    },
    {
        id:8,
        name: "Patek Philippe Complications World Time Automatic Blue Dial Men's Watch 5231G-001",
        img: "https://images.unsplash.com/photo-1548359638-e51353ca6d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJvbGV4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 250,
        cat: "Luxury",
    },
    {
        id:9,
        name: "Patek Philippe Complications Annual Calendar Blue Dial 18kt White Gold Diamond Blue Leather Men's Watch 5147G-001",
        img: "https://images.unsplash.com/photo-1526743655626-e3d757b13d61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvbGV4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 300,
        cat: "Dress",
    },
    {
        id:10,
        name: " Patek Philippe Calatrava Textured Charcoal Gray Dial Automatic Men's Watch",
        img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 50,
        cat: "Sport",
    },
    {
        id:11,
        name: "Casio Classic Resin Strap",
        img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 150,
        cat: "Luxury",
    },
    {
        id:12,
        name: "Garmin Venu strap",
        img: "https://images.unsplash.com/photo-1633869699811-cd4f63049b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 115,
        cat: "Luxury",
    }
]
//declear varibles
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts)=>{
    productsContainer.innerHTML = filteredProducts.map((product) =>
        `
        <div class="product">
    <img src=${product.img}
    alt=""
    />
    <span class="name">${product.name}</span>
    <span class="priceText">$${product.price}</span>
    </div>
        `
    ).join("");
};
displayProducts(data);

searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1));
    }
    else
    {
    displayProducts(data);
}
 });

const setCategories = () =>{
    const allCats = data.map((item) => item.cat);

    const categories = [
        "All",
        ...allCats.filter((item, i)=>{
            return allCats.indexOf(item) === i;
        }),
    ];
    categoriesContainer.innerHTML = categories.map(
        (cat) => 
        `
        <span class="cat">${cat}</span>
    `).join("");
    categoriesContainer.addEventListener("click",(e)=>{
        const selectedCat = e.target.textContent;

        selectedCat === "All"
        ? displayProducts(data):
        displayProducts(data.filter((item) => item.cat === selectedCat));
    });
};

const setPrices = ()=>{
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList)
    const maxPrice = Math.max(...priceList)

    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceRange.value = maxPrice
    priceValue.textContent = "$" + maxPrice

    priceRange.addEventListener("input", (e)=>{
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};

setCategories();
setPrices();