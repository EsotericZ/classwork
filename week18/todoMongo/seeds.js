const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
    Blog,
    Like,
    User,
    Todo,
} = require('./model');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await Blog.deleteMany({});
    await Like.deleteMany({});
    await User.deleteMany({});
    await Todo.deleteMany({});

    const cj = await User.create({
        firstName: 'CJ',
        lastName: 'Sadness',
        username: 'badass',
        role: 'Admin',
        email: 'cj@cool.com'
    });

    const kirt = await User.create({
        firstName: 'Kirtley',
        lastName: 'Sadness',
        username: 'badass2',
        role: 'Employee',
        email: 'kirt@cool.com'
    });

    const foundCj = await User.findById(cj._id);
    foundCj.toJSON();
    console.log(foundCj)
    const user = await User.find({});
    console.log(user);
    console.log(JSON.parse(JSON.stringify(user)))

    // const usersToCreate = [
    //     { 
    //         username: faker.company.companyName(),
    //         email: faker.internet.email(),
    //         role: 'Admin',
    //     },
    //     { 
    //         username: faker.company.companyName(),
    //         email: faker.internet.email(),
    //         role: 'Admin',
    //     },
    //     { 
    //         username: faker.company.companyName(),
    //         email: faker.internet.email(),
    //         role: 'Employee',
    //     },
    //     { 
    //         username: faker.company.companyName(),
    //         email: faker.internet.email(),
    //         role: 'Employee',
    //     },
    //     { 
    //         username: faker.company.companyName(),
    //         email: faker.internet.email(),
    //         role: 'Employee',
    //     },
    // ];

    // const users = await User.insertMany(usersToCreate);

    // const todosToCreate = [
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         text: faker.random.word(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    // ];
    
    // const todos = await Todo.insertMany(todosToCreate);

    // const blogsToCreate = [
    //     { 
    //         description: faker.lorem.paragraph(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         description: faker.lorem.paragraph(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     { 
    //         description: faker.lorem.paragraph(),
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    // ];

    // const blogs = await Blog.insertMany(blogsToCreate);
    // // const blogs = await Blog.find({}).sort({ description: 0 }).limit(2);

    // const likesToCreate = [
    //     {
    //         userId: users[0]._id,
    //     },
    //     {
    //         userId: users[0]._id,
    //     },
    //     {
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     {
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     {
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     {
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     {
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     {
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    //     {
    //         userId: users[Math.floor(Math.random() * users.length)]._id,
    //     },
    // ];

    // const[like1, like2] = await Like.insertMany(likesToCreate);
    // const firstBlog = blogs[0];

    // // Add a like
    // const updatedBlog = await Blog.findByIdAndUpdate(
    //     firstBlog._id,
    //     {
    //         $addToSet: {
    //             likeIds: [like1, like1]
    //         },
    //     },
    //     {
    //         new: true,
    //     }
    // ).populate({
    //     path: 'likeIds',
    //     populate: 'userId'   
    // });

    // console.log('Add a like', updatedBlog.likeIds)

    // // Remove a like
    // const updatedBlogPartTwo = await Blog.findByIdAndUpdate(
    //     firstBlog._id,
    //     {
    //         $pull: {
    //             likeIds: like1._id,
    //         },
    //     },
    //     {
    //         new: true,
    //     }
    // ).populate({
    //     path: 'likeIds',
    //     populate: 'userId'   
    // });

    // console.log('Remove a like', updatedBlogPartTwo.likeIds)

    // // firstBlog.likeIds.push(like1);
    // // firstBlog.likeIds.push(like2);

    // // await firstBlog.save();

    // // console.log(firstBlog);

    // const employees = await User.findByRole('Employee');
    // employees.forEach(employee => employee.greeting());

    process.exit(0);
};

seedDb();