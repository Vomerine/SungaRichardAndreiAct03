import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'mabuX',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
           //customer
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
    ],
    products:[
        {

            name: "Dubu",
            category: "Shirts",
            image: "/images/1.jpg",
            price: 140,
            countInStock: 12,
            brand: "Twice Dahyun",
            rating: 1.5,
            numReviews: 10,
            description: "Goods"
        },
        {

            name: "Beanpole",
            category: "Shirts",
            image: "/images/2.jpg",
            price: 120,
            countInStock: 12,
            brand: "Twice Dahyun",
            rating: 4.5,
            numReviews: 10,
            description: "Goods na Goods"
        },
        {

            name: "Portrait",
            category: "Shirts",
            image: "/images/3.jpg",
            price: 120,
            countInStock: 12,
            brand: "Twice Dahyun",
            rating: 4.5,
            numReviews: 10,
            description: "Goods na Goods na Goods"
        },
        {

            name: "Blep",
            category: "Shirts",
            image: "/images/4.jpg",
            price: 120,
            countInStock: 12,
            brand: "Twice",
            rating: 4.5,
            numReviews: 10,
            description: "Goods na Goods na Goods na Goods"
        },
        {

            name: "Megane",
            category: "Shirts",
            image: "/images/5.jpg",
            price: 120,
            countInStock: 12,
            brand: "Twice Dahyun",
            rating: 4.5,
            numReviews: 10,
            description: "Goods na Goods na Goods na Goods na Goods"
        },
        {

            name: "Pout",
            category: "Shirts",
            image: "/images/6.jpg",
            price: 120,
            countInStock: 12,
            brand: "Twice Dahyun",
            rating: 4.5,
            numReviews: 10,
            description: "Goods na Goods na Goods na Goods na Goods na Goods"
        },
      
    ]
}
export default data;