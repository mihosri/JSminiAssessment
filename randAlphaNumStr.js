function alphaNumericString(length)
{
    let str = "";

    for(let i=0; i<length; i++)
    {
        str += Math.floor(Math.random()).toString()
    }

    return str
}

let resultStr = alphaNumericString(5);
console.log(resultStr)