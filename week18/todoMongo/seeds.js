const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
    Blog,
    User,
    Todo,
} = require('./model');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await Blog.deleteMany({});
    await User.deleteMany({});
    await Todo.deleteMany({});

    const usersToCreate = [
        { 
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        { 
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        { 
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        { 
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        { 
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
    ];

    const users = await User.insertMany(usersToCreate);

    const todosToCreate = [
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
    ];
    
    const todos = await Todo.insertMany(todosToCreate);

    const blogsToCreate = [
        { 
            text: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        { 
            text: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
    ];

    const blogs = await Blog.insertMany(blogsToCreate);

    process.exit(0);
};

seedDb();