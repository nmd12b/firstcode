const impuesto = 0.12;
let Nicole = 20;
let Luis = 30;
let Alessandra = 35;
let itbms1 = Nicole *impuesto;
let itbms2 = Luis *impuesto;
let itbms3 = Alessandra *impuesto;
let total = Nicole + itbms1 + Luis + itbms2 + Alessandra + itbms3
console.log(total);
let propina1 = 0;
let propina2 = (Luis + itbms2) * 0.15;
let propina3 = Alessandra *0.10;
total = total + propina1 +propina2 +propina3;
console.log(total);