async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  }).then(()=>{
    console.log(1)
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);