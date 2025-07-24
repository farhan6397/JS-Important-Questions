// method-1

function vowelsCount(str){
    let count = 0;
    let vowels = 'aeiouAEIOU'
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
let str = "listen";
console.log(vowelsCount(str));

// method-2

function vowelsCount(str1){
    let matches = str1.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
let str1 = "listen";
console.log(vowelsCount(str1));