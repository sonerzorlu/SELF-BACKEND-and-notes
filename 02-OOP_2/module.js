'use strict'

// require('./modules/index.js')
// require('./modules/index')
require('./modules/')// bask bir js dosyasini import etmenin yolu.

// const test = require('./modules/')
// test() //?baska dosyadan export ettigimiz fonksiyonu burada calistirmis olduk. export edilen dosyadan bu fonksiyonun calismamsi icin export edilen dosyanin altinda module.export yazilmali.

//****************************************************************************/

//? *  require('./modules/') = test * // import edilen js dosyasinda sadece bir adet fonkdiyon varsa bu skilde cagrilabilir ( 1. yontem).
//****************************************************************************/

// require('./modules/')() //! tek bir fonksiyon cagiriliyorsa export yapilan dosyadan bu sekilde kisa yolu var ( 2. yontem).

//****************************************************************************/
//? 1. yontem
// const [test1,test2,test3] = require('./modules/');test1(),test2(),test3() //! imported files: destructure yontemi ile

//? 2. yontem!
// const {test1,test2,test3} = require('./modules/');test1(),test2(),test3() //! object olarak

//? isim degistirme
const {test1:newFunc,test2,test3, variable} = require('./modules/index.js');newFunc(),test2(),test3(),console.log(variable);