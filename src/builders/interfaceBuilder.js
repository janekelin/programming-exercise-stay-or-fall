// @ts-check

function interfaceWrapper() {
  return {
    inform: str => {
      console.log(`informing: ${str}`);
    },
    prompt: str => {
      console.log(`prompting: ${str}`);
    },
  };
}

function buildInterfaceFrom(interfaceProvider) {
  console.log(`interface created from ${interfaceProvider}`);
  return interfaceWrapper();
}

export default { from: buildInterfaceFrom };
