// Dictionary of Japanese words with hiragana, romanji, and Spanish meanings
const japaneseWords = [
    { hiragana: "こんにちは", romanji: "konnichiwa", meaning: "hola" },
    { hiragana: "ありがとう", romanji: "arigatou", meaning: "gracias" },
    { hiragana: "さようなら", romanji: "sayounara", meaning: "adiós" },
    { hiragana: "おはよう", romanji: "ohayou", meaning: "buenos días" },
    { hiragana: "こんばんは", romanji: "konbanwa", meaning: "buenas noches" },
    { hiragana: "すみません", romanji: "sumimasen", meaning: "disculpe / perdón" },
    { hiragana: "はい", romanji: "hai", meaning: "sí" },
    { hiragana: "いいえ", romanji: "iie", meaning: "no" },
    { hiragana: "わたし", romanji: "watashi", meaning: "yo" },
    { hiragana: "あなた", romanji: "anata", meaning: "tú / usted" },
    { hiragana: "かれ", romanji: "kare", meaning: "él" },
    { hiragana: "かのじょ", romanji: "kanojo", meaning: "ella" },
    { hiragana: "みず", romanji: "mizu", meaning: "agua" },
    { hiragana: "たべもの", romanji: "tabemono", meaning: "comida" },
    { hiragana: "のみもの", romanji: "nomimono", meaning: "bebida" },
    { hiragana: "いえ", romanji: "ie", meaning: "casa" },
    { hiragana: "がっこう", romanji: "gakkou", meaning: "escuela" },
    { hiragana: "しごと", romanji: "shigoto", meaning: "trabajo" },
    { hiragana: "ともだち", romanji: "tomodachi", meaning: "amigo" },
    { hiragana: "かぞく", romanji: "kazoku", meaning: "familia" },
    { hiragana: "おかあさん", romanji: "okaasan", meaning: "madre" },
    { hiragana: "おとうさん", romanji: "otousan", meaning: "padre" },
    { hiragana: "あに", romanji: "ani", meaning: "hermano mayor" },
    { hiragana: "あね", romanji: "ane", meaning: "hermana mayor" },
    { hiragana: "おとうと", romanji: "otouto", meaning: "hermano menor" },
    { hiragana: "いもうと", romanji: "imouto", meaning: "hermana menor" },
    { hiragana: "ねこ", romanji: "neko", meaning: "gato" },
    { hiragana: "いぬ", romanji: "inu", meaning: "perro" },
    { hiragana: "とり", romanji: "tori", meaning: "pájaro" },
    { hiragana: "さかな", romanji: "sakana", meaning: "pez" },
    { hiragana: "ほん", romanji: "hon", meaning: "libro" },
    { hiragana: "えんぴつ", romanji: "enpitsu", meaning: "lápiz" },
    { hiragana: "かみ", romanji: "kami", meaning: "papel" },
    { hiragana: "つくえ", romanji: "tsukue", meaning: "escritorio" },
    { hiragana: "いす", romanji: "isu", meaning: "silla" },
    { hiragana: "まど", romanji: "mado", meaning: "ventana" },
    { hiragana: "ドア", romanji: "doa", meaning: "puerta" },
    { hiragana: "でんわ", romanji: "denwa", meaning: "teléfono" },
    { hiragana: "てれび", romanji: "terebi", meaning: "televisión" },
    { hiragana: "くるま", romanji: "kuruma", meaning: "coche" },
    { hiragana: "でんしゃ", romanji: "densha", meaning: "tren" },
    { hiragana: "ひこうき", romanji: "hikouki", meaning: "avión" },
    { hiragana: "じてんしゃ", romanji: "jitensha", meaning: "bicicleta" },
    { hiragana: "あか", romanji: "aka", meaning: "rojo" },
    { hiragana: "あお", romanji: "ao", meaning: "azul" },
    { hiragana: "きいろ", romanji: "kiiro", meaning: "amarillo" },
    { hiragana: "みどり", romanji: "midori", meaning: "verde" },
    { hiragana: "しろ", romanji: "shiro", meaning: "blanco" },
    { hiragana: "くろ", romanji: "kuro", meaning: "negro" },
    { hiragana: "おおきい", romanji: "ookii", meaning: "grande" },
    { hiragana: "ちいさい", romanji: "chiisai", meaning: "pequeño" },
    { hiragana: "たかい", romanji: "takai", meaning: "alto / caro" },
    { hiragana: "ひくい", romanji: "hikui", meaning: "bajo" },
    { hiragana: "あたらしい", romanji: "atarashii", meaning: "nuevo" },
    { hiragana: "ふるい", romanji: "furui", meaning: "viejo" },
    { hiragana: "きれい", romanji: "kirei", meaning: "hermoso / limpio" },
    { hiragana: "きたない", romanji: "kitanai", meaning: "sucio" },
    { hiragana: "おいしい", romanji: "oishii", meaning: "delicioso" },
    { hiragana: "まずい", romanji: "mazui", meaning: "malo (sabor)" },
    { hiragana: "あつい", romanji: "atsui", meaning: "caliente" },
    { hiragana: "さむい", romanji: "samui", meaning: "frío" },
    { hiragana: "たべる", romanji: "taberu", meaning: "comer" },
    { hiragana: "のむ", romanji: "nomu", meaning: "beber" },
    { hiragana: "みる", romanji: "miru", meaning: "ver / mirar" },
    { hiragana: "きく", romanji: "kiku", meaning: "escuchar / oír" },
    { hiragana: "はなす", romanji: "hanasu", meaning: "hablar" },
    { hiragana: "よむ", romanji: "yomu", meaning: "leer" },
    { hiragana: "かく", romanji: "kaku", meaning: "escribir" },
    { hiragana: "いく", romanji: "iku", meaning: "ir" },
    { hiragana: "くる", romanji: "kuru", meaning: "venir" },
    { hiragana: "かえる", romanji: "kaeru", meaning: "regresar" },
    { hiragana: "ねる", romanji: "neru", meaning: "dormir" },
    { hiragana: "おきる", romanji: "okiru", meaning: "despertarse" },
    { hiragana: "はたらく", romanji: "hataraku", meaning: "trabajar" },
    { hiragana: "べんきょう", romanji: "benkyou", meaning: "estudiar" },
    { hiragana: "あそぶ", romanji: "asobu", meaning: "jugar" }
];

// Function to generate a random Japanese word
function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * japaneseWords.length);
    return japaneseWords[randomIndex];
}

// Function to display the word and meaning
function displayWord() {
    const randomWord = generateRandomWord();
    const altWordElement = document.getElementById('altWord');
    
    altWordElement.innerHTML = `
        <div class="word-container">
            <div class="japanese-word">${randomWord.hiragana}</div>
            <div class="romanji">${randomWord.romanji}</div>
            <div class="meaning">${randomWord.meaning}</div>
        </div>
    `;
}

// Add event listener to the generate button
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generator');
    generateButton.addEventListener('click', displayWord);
    
    // Generate an initial word when the page loads
    displayWord();
});