import { createServer } from 'http';
import { sum } from './lib.js'

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let a = (Math.random() * 100).toFixed(2)
  let b = (Math.random() * 100).toFixed(2)
  const total = sum(a, b);
  res.end(`Hello World! Random sum ${a} + ${b} = ${total}!\n`);
});

export default server;
