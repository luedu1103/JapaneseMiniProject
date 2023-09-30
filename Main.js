// Conjunto de todos los hiragana
const hiraganaSet = new Set();
for (let i = 0x3041; i <= 0x3096; i++) {
    hiraganaSet.add(String.fromCodePoint(i));
}

// Todas las combinaciones en romanji del hiragana
const hiraganaRomanji = [];

// Todas las consonantes que se usan en hiragana
const consonantes = [
    0x006B, // k
    0x0073, // s
    0x0074, // t
    0x006E, // n
    0x0068, // h
    0x006D, // m
    0x0079, // y
    0x0072, // r
    0x0077, // w
];

// Todas las vocales que se usan en hiragana
// a: 0x0061    i: 0x0069    u: 0x0075    e: 0x0065    o: 0x006F
const vocales = ['a', 'i', 'u', 'e', 'o']; 

// Rellenando hiraganaRomanji
vocales.forEach(vocal => {
   hiraganaRomanji.push(vocal); 
});

consonantes.forEach(consonante => {
    vocales.forEach(vocal => {
        if((consonante == 0x0079 && vocal == 'e') || (consonante == 0x0079 && vocal == 'i')){
            return;
        }
        if((consonante == 0x0077 && vocal == 'e') || (consonante == 0x0077 && vocal == 'i') || (consonante == 0x0077 && vocal == 'u')){
            return;
        }
        hiraganaRomanji.push(String.fromCodePoint(consonante) + vocal);
    });
});

// Añadiendo y cambiando excepciones
hiraganaRomanji.push('n');
hiraganaRomanji[11] = 'shi';
hiraganaRomanji[16] = 'chi';
hiraganaRomanji[17] = 'tsu';
hiraganaRomanji[11] = 'shi';
hiraganaRomanji[27] = 'fu';

console.log(hiraganaRomanji);

// Variables del documento html
var input = document.getElementById('name_input');

// Devuelve en hiragana
function mapToRomanji(valor) { 
    const lookupTable = [
        0x3042, 0x3044, 0x3046, 0x3048, 0x304A,  // a, i, u, e, o
        0x304B, 0x304D, 0x304F, 0x3051, 0x3053,  // ka, ki, ku, ke, ko
        0x3055, 0x3057, 0x3059, 0x305B, 0x305D,  // sa, shi, su, se, so
        0x305F, 0x3061, 0x3064, 0x3066, 0x3068,  // ta, chi, tsu, te, to
        0x306A, 0x306B, 0x306C, 0x306D, 0x306E,  // na, ni, nu, ne, no
        0x306F, 0x3072, 0x3075, 0x3078, 0x307B,  // ha, hi, fu, he, ho
        0x307E, 0x307F, 0x3080, 0x3081, 0x3082,  // ma, mi, mu, me, mo
        0x3084, 0x3086, 0x3088,                 // ya, yu, yo
        0x3089, 0x308A, 0x308B, 0x308C, 0x308D,  // ra, ri, ru, re, ro
        0x308F, 0x3092, 0x3093,                 // wa, wo, n
    ];

    if (valor >= 0 && valor <= hiraganaRomanji.length) {
        return String.fromCodePoint(lookupTable[valor]);
    }
    return valor;
}

function romanjiConverter(valor){
    var romanji = valor.toLowerCase();
    if(hiraganaRomanji.includes(romanji)){
        romanji = mapToRomanji(hiraganaRomanji.indexOf(romanji));
        console.log(hiraganaRomanji.indexOf(romanji));
    }
    return romanji
}

input.addEventListener('input', function(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(inputValue, romanjiConverter(inputValue));
    event.target.value = inputValue;
});

// This code is from the useful library, we want to achieve this
// var textInput = document.getElementById('name_input');
//     wanakana.bind(textInput, /* options */); 