const obj ={
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}


fetch ('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'aplplication/json'
    },
    body: JSON.stringify(obj),
})
.then(res => res.json())
.then(data => console.log(data))
