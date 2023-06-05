export const capitalize = (str: string) => {
    const wordArr = str.split(' ')

    let newStr = ''

    wordArr.forEach((word, idx) => {
        const letterArr = word.split('')

        letterArr[0] = letterArr[0].toUpperCase()
        
        if (idx > 0) newStr += ' '

        newStr += letterArr.join('')
    })

    return newStr
}