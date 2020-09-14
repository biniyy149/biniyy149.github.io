function wordLength(s){
    let arr = s.split(" ");
    let tempArray = [];
    for(let i = 0; i < arr.length;i++){
        tempArray.push(arr[i].length);

    }
    return tempArray;
}
function freq(arr,n){
    let frequency = 0;
    let index = 0;
    while(index < arr.length){
        if(arr[index]===n){
            frequency++;
        }
        index++
    }
    return frequency;
}
function wordIndex(s){
    let arr = wordLength(s);
    let temp = [];
    for(let i = 0;i<arr.length;i++){
        temp[i] = 0;
        let frq = freq(arr,arr[i]);
        temp[arr[i]] = frq;
    }
    return temp;
}
let txt = "a ne the d he le howee why halo shal interesti hgw wedfgtryghygt";
let arr = wordIndex(txt);
console.log(arr);