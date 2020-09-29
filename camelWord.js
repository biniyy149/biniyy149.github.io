function camelize(str){
    let arr = str.split('-');
    let mapped = arr.map((word,index)=>index===0?word:word[0].toUpperCase()+word.slice(1));
    let camelWord = mapped.join('');
    return camelWord;
}
let str = camelize("my-big-word");
console.log(str);
