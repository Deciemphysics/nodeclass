var prompt = require('prompt');

prompt.start();
console.log('Give me a number:');
prompt.get(['number'], function (err, result) {
    if (err) { return onErr(err); }
    if(result.number % 2 == 0){
        console.log('2,4,6,8,10,12,14,16,18,20');
    }
    if(result.number % 2 == 1){
        console.log('1,3,5,7,9,11,13,15,17,19');
    }
    });

    function onErr(err) {
    console.log(err);
    return 1;
}

// const userInput = process.argv[2];

// let analyze = () => {
//     switch(userInput){
//         case ('odd'):
//             console.log('1,3,5,7,9,11,13,15,17,19');
//             break;
//         case 'even':
//             console.log('2,4,6,8,10,12,14,16,18,20');
//             break;
//         default:
//             console.log('No valid input found');
//     }
// }

// analyze();