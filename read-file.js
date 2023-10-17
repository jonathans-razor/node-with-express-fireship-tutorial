const { readFile } = require('fs').promises;

async function hello() {
  const file = await readFile('hello.txt', 'utf8');
  console.log(file.toString());
}

hello();
console.log('\n Start.');
console.log('\nNotice that Start and this line appear first even though it is called second. This is because of the async call.');
