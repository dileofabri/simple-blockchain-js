const Blockchain = require('./blockchain');
const Block = require('./block');

const blockchain = new Blockchain();

for(let i=0; i<50; i++) {
    const newData = 'block'+i;
    blockchain.addBlock({data: newData});
}

console.log(blockchain);
