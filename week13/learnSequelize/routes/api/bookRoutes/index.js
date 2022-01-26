const router = require('express').Router();

const Book = require('../../../models/Book');

router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (e) {
        res.json(e);
    }
});

router.get('/:bookId', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId);
        res.json(book);
    } catch (e) {
        res.json(e);
    }
});

router.patch('/:bookId', async (req, res) => {
    const {
        title,
        author,
        isbn,
        pages,
        edition,
        isPaperback,
    } = req.body;
    try {
        await Book.update(
            {
                title,
                author,
                isbn,
                pages,
                edition,
                isPaperback, 
            }, 
            {
                where: {
                    id: req.params.bookId
                }
            }
        );
        const updatedBook = await Book.findByPk(req.params.bookId);
        res.json(updatedBook);
    } catch (e) {
        res.json(e);
    }
});

router.post('/', async (req, res) => {
    const { title, author } = req.body;
    try {
        const newBook = await Book.create({
            title,
            author,
            isPaperback: true,
        });
        res.json(newBook);
    } catch (e) {
        console.log('L:12', e);
        res.json(e);
    }
});

router.post('/seed', async (req, res) => {
    const booksToSave = [
        { 
            title: 'Datastructures and Algorithms in JavaScript',
            author: 'Lorraine Granger',
            isbn: '1',
            pages: 100,
            edition: 1,
            isPaperback: true,
        },
        { 
            title: 'You dont know JavaScript',
            author: 'Kyle Simpson',
            isbn: '2',
            pages: 100,
            edition: 1,
            isPaperback: true,
        },
        { 
            title: 'NFT for idiots',
            author: 'Ricky Rice',
            isbn: '3',
            pages: 100,
            edition: 1,
            isPaperback: true,
        },
        { 
            title: 'Wheres Waldo',
            author: 'CJ Sanders',
            isbn: '4',
            pages: 100,
            edition: 1,
            isPaperback: true,
        },
        { 
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            isbn: '5',
            pages: 100,
            edition: 1,
            isPaperback: true,
        },
    ];
    try {
        const result = await Book.bulkCreate(booksToSave);
        res.json(result);
    } catch (e) {
        res.json(e);
    }
});

router.delete('/:bookId', async (req, res) => {
    try {
        const deletedBook = await Book.findByPk(req.params.bookId);
        await Book.destroy({
            where: { 
                id: req.params.bookId,
            }
        });
        res.json(deletedBook);
    } catch (e) {
        res.json(e);
    }
});

module.exports = router;