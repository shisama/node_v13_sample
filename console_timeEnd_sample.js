const label = 'test';
console.time(label);
setTimeout(() => {
  console.timeEnd(label);
}, 3000);
// 3001.732ms v12
// 3.001s v13