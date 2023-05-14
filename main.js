function encrypt(text) {
let encryptMessage = text.replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');
    return encryptMessage;
}
  
function decrypt(encryptMessage) {
let unencryptMessage = encryptMessage.replace(/ufat/g, 'u')
                        .replace(/ober/g, 'o')
                        .replace(/ai/g, 'a')
                        .replace(/imes/g, 'i')
                        .replace(/enter/g, 'e');
    return unencryptMessage;
}

let message = "hi ezzat how are you doing?";
let encryptMessage = encrypt(message);
console.log(encryptMessage);
let unencryptMessage = decrypt(encryptMessage);
console.log(unencryptMessage);