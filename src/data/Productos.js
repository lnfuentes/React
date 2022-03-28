export const productos = [
    {
        nombre: 'Making Memories',
        precio: 25,
        img: 'https://cdn.shopify.com/s/files/1/0550/4411/2561/products/royal_4c9569c5-704a-4e46-85a9-739c8917b945_360x.jpg?v=1616733416',
        stock: 7,
        id: 1
    },
    {
        nombre: 'Holiday',
        precio: 25,
        img: 'https://cdn.shopify.com/s/files/1/0550/4411/2561/products/navy_66e84856-7818-4b60-a07e-10f30cf166d9_360x.jpg?v=1616731345',
        stock: 5,
        id: 2
    },
    {
        nombre: 'Roam Free',
        precio: 25,
        img: 'https://cdn.shopify.com/s/files/1/0550/4411/2561/products/maroon_4598eac5-977c-40d2-ae54-db25a3336c20_360x.jpg?v=1616766394',
        stock: 10,
        id: 3
    },
    {
        nombre: 'Sailing Weekend',
        precio: 25,
        img: 'https://cdn.shopify.com/s/files/1/0550/4411/2561/products/grey_with_texture_360x.jpg?v=1616722826',
        stock: 3,
        id: 4
    },
    {
        nombre: 'Skull Surf',
        precio: 25,
        img: 'https://cdn.shopify.com/s/files/1/0550/4411/2561/products/black_0da9c38e-bbf0-4e80-9916-19965ea577cb_360x.jpg?v=1616730526',
        stock: 8,
        id: 5
    },
    {
        nombre: 'Drawstring Hoodie',
        precio: 35,
        img: 'https://cdn.shopify.com/s/files/1/2617/9878/products/avenue-shopify-theme-mens-tops-4_600x.jpg?v=1533830723',
        stock: 9,
        id: 6
    },
    {
        nombre: 'Elbow Patch Hoodie',
        precio: 35,
        img: 'https://cdn.shopify.com/s/files/1/2617/9878/products/avenue-shopify-theme-mens-tops-11_600x.jpg?v=1533830557',
        stock: 4,
        id: 7
    },
    {
        nombre: 'Uptown Sunglasses',
        precio: 10,
        img: 'https://cdn.shopify.com/s/files/1/2617/9878/products/avenue-shopify-theme-mens-accessories-13_600x.jpg?v=1546633156',
        stock: 15,
        id: 8
    },
    {
        nombre: 'Blue Lens Sunglasses',
        precio: 10,
        img: 'https://cdn.shopify.com/s/files/1/2617/9878/products/avenue-shopify-theme-mens-accessories-15_600x.jpg?v=1533752805',
        stock: 7,
        id: 9
    }
]

export const getProductos = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(productos);
    }, 2000)
})