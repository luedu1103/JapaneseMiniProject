// // Conjunto de todos los hiragana
// const hiraganaSet = new Set();
// for (let i = 0x3041; i <= 0x3096; i++) {
//     hiraganaSet.add(String.fromCodePoint(i));
// }

// Todas las combinaciones en romanji del hiragana
const hiraganaRomanji = [];

// Todas las consonantes que se usan en hiragana
const consonantes = [
    0x006B, // k
    0x0067, // g
    0x0073, // s
    0x007A, // z
    0x0074, // t    
    0x0064, // d
    0x006E, // n
    0x0068, // h
    0x0062, // b
    0x0070, // p
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
            // Special cases for ye yi 
            return;
        }
        if((consonante == 0x0077 && vocal == 'e') || (consonante == 0x0077 && vocal == 'i') || (consonante == 0x0077 && vocal == 'u')){
            // Special cases for wi wu we
            return;
        }
        hiraganaRomanji.push(String.fromCodePoint(consonante) + vocal);
    });
});

// Añadiendo y cambiando excepciones
hiraganaRomanji[16] = 'shi';
hiraganaRomanji[26] = 'chi';
hiraganaRomanji[27] = 'tsu';
hiraganaRomanji[31] = 'ji';
hiraganaRomanji[32] = 'zu';
hiraganaRomanji[42] = 'fu';

//WEIRD CHARS
hiraganaRomanji.push(
    'kya', 'kyu', 'kyo',
    'sha', 'shu', 'sho',
    'cha', 'chu', 'cho',
    'nya', 'nyu', 'nyo',
    'hya', 'hyu', 'hyo',
    'mya', 'myu', 'myo',
    'rya', 'ryu', 'ryo',
    'gya', 'gyu', 'gyo',
    'ja', 'ju', 'jo',
    'bya', 'byu', 'byo',
    'pya', 'pyu', 'pyo',
);

// console.log(hiraganaRomanji); // muestra el hira en romanji

// Devuelve en hiragana
// NOT PROUD OF THIS X2
// ES LA SEGUNDA VEZ QUE ME SIENTO MAL POR HACER ALGO ASÍ
function mapToRomanji(valor) { 
    const lookupTable = [
        0x3042, 0x3044, 0x3046, 0x3048, 0x304A,  // a, i, u, e, o
        0x304B, 0x304D, 0x304F, 0x3051, 0x3053,  // ka, ki, ku, ke, ko
        0x304C, 0x304E, 0x3050, 0x3052, 0x3054,  // ga, gi, gu, ge, go
        0x3055, 0x3057, 0x3059, 0x305B, 0x305D,  // sa, shi, su, se, so
        0x3056, 0x3058, 0x305A, 0x305C, 0x305E,  // za, ji, zu, ze, zo
        0x305F, 0x3061, 0x3064, 0x3066, 0x3068,  // ta, chi, tsu, te, to
        0x3060, 0x3062, 0x3065, 0x3067, 0x3069,  // da, ji, zu, de, do
        0x306A, 0x306B, 0x306C, 0x306D, 0x306E,  // na, ni, nu, ne, no
        0x306F, 0x3072, 0x3075, 0x3078, 0x307B,  // ha, hi, fu, he, ho
        0x3070, 0x3073, 0x3076, 0x3079, 0x307C,  // ba, bi, bu, be, bo
        0x3071, 0x3074, 0x3077, 0x307A, 0x307D,  // pa, pi, pu, pe, po
        0x307E, 0x307F, 0x3080, 0x3081, 0x3082,  // ma, mi, mu, me, mo
        0x3084, 0x3086, 0x3088,                  // ya, yu, yo
        0x3089, 0x308A, 0x308B, 0x308C, 0x308D,  // ra, ri, ru, re, ro
        0x308F, 0x3092, /*0x3093*/               // wa, wo, n
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo   
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with ki
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with shi 
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with chi
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with ni
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with hi
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with mi 
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with ri
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with gi   
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with ji
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with bi
        0x3083, 0x3085, 0x3087,                  // litle ya, yu, yo // with pi
    ];

    if (valor >= 0 && valor <= hiraganaRomanji.length) {
        return String.fromCodePoint(lookupTable[valor]);
    }
    return valor;
}

function romanjiConverter(valor){
    let romanji = valor;
    console.log(romanji)
    if(hiraganaRomanji.includes(romanji)){
        romanji = mapToRomanji(hiraganaRomanji.indexOf(romanji));
        // console.log(romanji); // Devuelve en hiragana
    }
    return romanji
}

const weirdChars = [
    'k', 's', 'c', 'n', 'h', 'm', 'r', 'g', 'j', 'b', 'p'
];

const hiraganaWeirdChars = [
    0x304D, 0x3057, 0x3061, 0x306B, 0x3072, 0x307F, 0x308A, 0x304E, 0x3058, 0x3073, 0x3074
];

function stringDivider(input){
    let newstring = '';
    for(let i = 0; i < input.length; i++){
        if(hiraganaRomanji.includes(input[i]+input[i+1]+input[i+2])){
            let momentaneus = input[i] + input[i+1] + input[i+2];
            if(hiraganaRomanji.indexOf(momentaneus) > 69){
                let weirdChar = '';
                momentaneus = romanjiConverter(input[i] + input[i+1] + input[i+2]);
                // console.log(momentaneus);
                weirdChar = String.fromCodePoint(hiraganaWeirdChars[weirdChars.indexOf(input[i])]); // we can use litle ya yu yo with ja ju jo
                console.log(weirdChar);
                newstring += weirdChar + momentaneus;   
                break;
            }
            
            momentaneus = romanjiConverter(momentaneus);
            newstring += momentaneus;
            break;
            // console.log(newstring)
        }
        else if(hiraganaRomanji.includes(input[i]+input[i+1])){
            let momentaneus = input[i] + input[i+1];
            momentaneus = romanjiConverter(momentaneus);
            newstring += momentaneus;
            break;
            // console.log(newstring)
        }
        else if(hiraganaRomanji.includes(input[i])){
            let momentaneus = input[i];
            momentaneus = romanjiConverter(momentaneus);
            newstring += momentaneus;
            break;
            // console.log(newstring)
        }
        else if(input[i] == 'n' && weirdChars.includes(input[i+1]) != false && consonantes.includes(input.charCodeAt(i+1))){
            let momentaneus = String.fromCodePoint(0x3093);
            newstring += momentaneus;
            break;
        } // Consistencia para que aparezcan na ni nu ne no...
        else if(input[i] == input[i+1] && consonantes.includes(input.charCodeAt(i))){
                let momentaneus = "っ";
                newstring += momentaneus;
                break;
            }   
            else{
                newstring += input[i];
        }
    }
    return newstring;
}

// Variables del documento html
let input = document.getElementById('name_input');
let outputElement = document.getElementById("output");

input.addEventListener('input', function(event) {
    let inputValue = event.target.value;
    // console.log(inputValue);
    let change = '';
    change += inputValue.replace(inputValue, stringDivider(inputValue.toLowerCase()));
    event.target.value = change;
    outputElement.textContent = input.value;
});

// This code is from the useful library, we want to achieve this
// var textInput = document.getElementById('name_input');
//     wanakana.bind(textInput, /* options */); 