const january = new Date(9e8);
const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
console.log(spanish.format(january))
// 'M01' v12
// 'enero` v13