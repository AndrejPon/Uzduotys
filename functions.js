function makeCamelCase(sentenceCase) {
    let output = [];
    let  newSentence = sentenceCase.split(' ');
    for(let i = 0; i < sentenceCase.length; i++){
        output.push(newSentence[i]);
    }
    let camelCase = '';
output.map((word, index)=>{
    if(index === 0){camelCase += word[0].toLowerCase()
    for(let i = 1; i < word.length; i++){
        camelCase += word[i];
    }}
    if (index >= 1){
        camelCase += word[0].toUpperCase();
        for (let i = 1; i < word.length; i++){
            camelCase += word[i];
        }
    }
})
};
console.log(camelCase);

function snakeCase(string){
    let newArray = string.split(' ');
    let newList = [];
    for(let i = 0; i < newArray.length; i++){
        newList.push(newArray[i].toLowerCase);
    } return newList.join('-')
};

function kebabCase(string){
    let newArray = string.split(' ');
    let newList = [];
    for(let i = 0; i < newArray.length; i++){
        newList.push(newArray[i].toLowerCase);
    } return newList.join('-')
};

module.exports = {
    makeCamelCase,
    snakeCase,
    kebabCase
};