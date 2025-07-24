function isAnagram(s1, s2){
    return s1.split("").sort().join("") === s2.split("").sort().join("");
}
let s1 = "listen";
let s2 = "silent"
console.log(isAnagram(s1, s2));