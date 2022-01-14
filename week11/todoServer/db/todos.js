const uuid = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

const todos = [
    {
        id: uuid(),
        text: 'Call the DMV',
    },
    {
        id: uuid(),
        text: 'Eat Bugs',
    },
    {
        id: uuid(),
        text: 'Moon the moon',
    }
];

module.exports = {
    todos,
    uuid,
}