interface Test {
  name: string;
}

function testFn(test: Test) {
  console.log(test.name);
}
testFn({ name: 'Gustavo' });
