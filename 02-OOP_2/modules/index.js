'use strict'

// console.log('index.js calistir');

// const test = function () {
//     console.log('index.js calistir');
// }

//?module.exports = test(fonksiyonlarin adi) //! // export edilen dosyadan bu fonksiyonun calismamsi icin export edilen dosyanin altinda module.export yazilmali

// module.exports = test
//! tek fonksiyonlu exportlar icin shortcut. fonksiyonu yukarida yazip asagida ismini vererel export etmek yerine direk fonksiyonu yaziyoruz.

// module.exports = function () {
//     console.log('index.js calistir');
// }


//* birden fazla; fonksiyon, class, data yada objeyi export etme.

const test1 = function () {
    console.log('test1 calistir');
}
const test2 = function () {
    console.log('test2 calistir');
}
const test3 = function () {
    console.log('test3 calistir');
}

//* 1. yontem!

// module.exports = [
    // test1,
    // test2,
    // test3  
// ]

//* 2. yontem!
// module.exports = {
//     test1:test1,
//     test2:test2,
//     test3:test3
//     }

//* 2, yontemin kisa yolu 
//! 2. yontem de ki gibi key: value de isimler ayni ise asagidaki gibi kisa yol kullanilabilir. " test1:test1" de olsugu gibi isimler ayni degilse asagida ki shirthand yol kullanilmaz!!!!!**********************

module.exports = {
    test1,
    test2,
    test3
    }

//* 3. yontem! ayni anda hem fonksiyonu yazdik hem export yapttik


module.exports.test1 = function () {
    console.log('test1 calistir');
}
module.exports.test2 = function () {
    console.log('test2 calistir');
}
module.exports.test3 = function () {
    console.log('test3 calistir');
}
//* string bir ifadeyi export ettik.
module.exports.variable = 'new-value'

//! ************* BEST PRACTICE **************

module.exports = {
    test1 : function(){
        console.log('test1 calisiti');
    },
    test2: function(){
        console.log('test2 calisti');
    },
    test3: function(){
        console.log('test3 calisti');
    },
    variable: 'new-variable'
}