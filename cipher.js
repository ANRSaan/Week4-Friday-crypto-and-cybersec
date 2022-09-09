

const cipher = string => {
    ciphered = ''
    for (i = 0; i<string.length; i++){
        code = string.charCodeAt(i) + 900
        ciphered += String.fromCodePoint(code)

    }

    return ciphered
}

console.log(cipher('My name is Brian Williams!'))

const decipher = string => {
    deciphered = ''
    for (i = 0; i<string.length; i++){
        code = string.charCodeAt(i) - 900
        deciphered += String.fromCodePoint(code)
    }
    return deciphered
}

console.log(decipher(cipher('My name is Brian Williams!')))
