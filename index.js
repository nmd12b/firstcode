function calculatetax(total,tax){
    return total * tax;
}

function calculatetotal(consume,itbms){
    return consume + itbms;
}

function calculatetip(consume,overtax,tip){
    if (overtax === true){
        const itbms = calculatetax(consume,0.07);
        const total = calculatetotal(consume,itbms);
        const totaltip = total * tip;
        return total + totaltip; 
    } else if(overtax === false){
        const itbms = calculatetax(consume,0.07);
        const total = calculatetotal(consume,itbms);
        const totaltip = consume * tip;
        return total + totaltip;
    }

}
const impuesto = 0.12;
let Nicole = calculatetip(20, true, 0.10);
let Luis = calculatetip(30, true, 0.15)
let Alessandra = calculatetip(35, false, 0.10);

console.log(Nicole);
console.log(Luis);
console.log(Alessandra);