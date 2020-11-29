// 1. feladat és 2. feladat együtt:
//1.	Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, 
// tetszőlegesen méretű egész számot összead, és visszatér az összeadás végeredményével! 
// A paraméterként kapott értékek egyszerű number típusúak legyenek! Amennyiben bármelyik 
// paraméter értéke, vagy a részeredmény meghaladja a biztonságos tartomány, automatikusan
//  konvertáljad BigIntbe, és természetesen a visszatérési érték is BigInt legyen!


// 2.feladat
// 2.	Módosítsd úgy a függvényed, hogy paraméterként mind number, mind BigInt típusú adatokat is elfogadjon! 
// Amennyiben valamelyik paraméter BigInt, úgy a number-eket is automatikusan konvertálja BigInt-é!
console.log('1+2.feladat')
function safesum2 (a,b) {
    if  (
        Number.MIN_SAFE_INTEGER<=a && a<=Number.MAX_SAFE_INTEGER &&
        Number.MIN_SAFE_INTEGER<=b && b<=Number.MAX_SAFE_INTEGER &&
        Number.MIN_SAFE_INTEGER<=a+b && a+b<=Number.MAX_SAFE_INTEGER
    ) return a + b;
    else return BigInt(a) + BigInt(b);
}

function safesum(a,...b) {
    return b.reduce((prev,curr)=>safesum2(prev,curr),a);
}

console.log(safesum(3,6,Number.MIN_SAFE_INTEGER,-10,Number.MAX_SAFE_INTEGER));


//console.log(Boolean(BigInt(Number.MAX_SAFE_INTEGER+2)<=Number.MAX_SAFE_INTEGER+2));


// 3.feladat
// 3.	Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, 
// nyolcas, és tizenhatos számrendszerbe is! Ezeket az értékeket pedig egy objectbe adja vissza! 
// A property-k neve legyen: binary, octal, hexa.
console.log('3.feladat')
function convertBase(num){
    // let bin = 0b0; // feltöltjük a kettes számrendszerbeli számot
    // let i = 0; // jobbról hányadik kettes számrendszerbeli számjegy
    // while (num>1) {
    //     bin += num%2*i;
    //     num=(num-num%2)/2;
    // } lehetne szórakozni, de inkább nem 
    return {binary: num.toString(2),octal: num.toString(8), hexa: num.toString(16)};
}

console.log(convertBase(15));