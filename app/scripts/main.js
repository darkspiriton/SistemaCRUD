//file: app/scripts/main.js
'use strict';

(function() {
  console.log('hola mundo!');
  var b=5;
  if (b>3) {
    console.log('b es mayor')
  } else{
    console.log('b es menor')
  };

  switch(b){
    case 5 : console.log('b es 5'); break;
    default : console.log('b no es 5');break;
  }

})();
