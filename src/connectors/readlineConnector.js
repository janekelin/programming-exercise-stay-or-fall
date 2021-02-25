// @ts-check

const readlineSync = require('readline-sync');

function readlineConnector() {
  return {
    inform: str => {
      console.log(str);
    },
    prompt: str => {
      readlineSync.question(str);
    },
  };
}

export default { readlineConnector };
