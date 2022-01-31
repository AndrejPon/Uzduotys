function makeCamelCase(sentenceCase) {
    let output = "";
    sentenceCase.split(" ").forEach(function (el, idx) {
        var add = el.toLowerCase();
        output += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
    });
    return output;
};