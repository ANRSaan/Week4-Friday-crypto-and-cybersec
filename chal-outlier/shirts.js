
const sorter = shirts => {
    s = ''
    m = ''
    l = ''
    for (i = 0; i < shirts.length; i++){
        if (shirts[i] === 's'){
            s += shirts[i]
        }
        else if (shirts[i] === 'm'){
            m += shirts[i]
        }
        else if (shirts[i] === 'l'){
            l += shirts[i]
        }
    }

    return s+m+l
}


// const sorter = shirts => shirts.split('').sort().reverse().join('')

console.log(sorter('smlsmlsmlllmsl'))