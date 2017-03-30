console.log('Staring app');

setTimeout( () => {
    console.log('Inside the callback');
}, 2000);

setTimeout( () => {
    console.log('0 ms')
}, 0);

console.log('Finishing app');

