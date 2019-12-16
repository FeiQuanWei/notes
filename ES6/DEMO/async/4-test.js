function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
    console.log(1)
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 5000);