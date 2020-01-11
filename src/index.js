import readlineSync from 'readline-sync';

export default (query) => readlineSync.question(query);

const rand = () => Math.floor(Math.random() ** 2 * 100);
