const LineSplitStream = require('./LineSplitStream');
const os = require('os');

const lines = new LineSplitStream({
  encoding: 'utf-8',
});

function onData(line) {
  console.log("execute: ",line);
}

lines.on('data', onData);

lines.write(`первая строка${os.EOL}вторая строка${os.EOL}третья строка${os.EOL}третья строка`);

lines.end();
