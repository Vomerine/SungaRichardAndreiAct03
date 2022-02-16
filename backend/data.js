import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Richard',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
           //customer
          name: 'Andrei',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
    ],
    products:[
        {

            name: "CPU",
            category: "Computer Parts",
            image: "/images/1.jpg",
            price: 140,
            countInStock: 12,
            brand: "Ryzen",
            rating: 1.5,
            numReviews: 10,
            description: "Item model number: SA400S37/240G"
        },
        {

            name: "Keyboard",
            category: "Computer Parts",
            image: "/images/2.jpg",
            price: 120,
            countInStock: 12,
            brand: "Rakk",
            rating: 4.5,
            numReviews: 10,
            description: "Ergonomic design, feel comfortable, reduce hand fatigue."
        },
        {

            name: "Monitor",
            category: "Computer Parts",
            image: "/images/3.jpg",
            price: 120,
            countInStock: 12,
            brand: "Samsung",
            rating: 4.5,
            numReviews: 10,
            description: "Power Voltage: DC 5V"
        },
        {

            name: "Mouse",
            category: "Computer Parts",
            image: "/images/4.jpg",
            price: 120,
            countInStock: 12,
            brand: "Logitech",
            rating: 4.5,
            numReviews: 10,
            description: "Mouse Cable Length: 122cm"
        },
        {

            name: "SSD",
            category: "Computer Parts",
            image: "/images/5.jpg",
            price: 120,
            countInStock: 12,
            brand: "Samsung",
            rating: 4.5,
            numReviews: 10,
            description: "Hard Drive Interface: Serial ATA"
        },
        {

            name: "RAM",
            category: "Computer Parts",
            image: "/images/6.jpg",
            price: 120,
            countInStock: 12,
            brand: "Kingston",
            rating: 4.5,
            numReviews: 10,
            description: "Flash Memory Size: 240 GB"
        },
      
    ]
}
export default data;