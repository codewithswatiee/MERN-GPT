const express = require("express");
const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 59.99,
          image: "https://example.com/images/headphones.jpg"
        },
        {
          id: 2,
          name: "Smartphone",
          price: 699.99,
          image: "https://example.com/images/smartphone.jpg"
        },
        {
          id: 3,
          name: "Gaming Mouse",
          price: 49.99,
          image: "https://example.com/images/mouse.jpg"
        },
        {
          id: 4,
          name: "Bluetooth Speaker",
          price: 39.99,
          image: "https://example.com/images/speaker.jpg"
        },
        {
          id: 5,
          name: "Laptop",
          price: 999.99,
          image: "https://example.com/images/laptop.jpg"
        },
        {
          id: 6,
          name: "Smartwatch",
          price: 199.99,
          image: "https://example.com/images/smartwatch.jpg"
        },
        {
          id: 7,
          name: "4K Monitor",
          price: 299.99,
          image: "https://example.com/images/monitor.jpg"
        },
        {
          id: 8,
          name: "External Hard Drive",
          price: 89.99,
          image: "https://example.com/images/harddrive.jpg"
        },
        {
          id: 9,
          name: "Mechanical Keyboard",
          price: 79.99,
          image: "https://example.com/images/keyboard.jpg"
        },
        {
          id: 10,
          name: "Digital Camera",
          price: 499.99,
          image: "https://example.com/images/camera.jpg"
        }
      ];

      if(req.query.search){
        const filterProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()));
        res.send(filterProducts);
        return;
      }
      
    setTimeout(() => {
        res.send(products)
    }, 3000);
})
const port = 4000;
app.listen(port, () => {
    console.log("Server Open");
})