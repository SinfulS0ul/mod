var fs = require('fs');
fs.readFile('in.json', (err, string) => {
    if (err) 
        return;
    var deleting = function(str){
        let i = str.length;
        while(i--){
            if(str[i] === str[i-1] || str[i] === '0')
            str.splice(i, 1);
        }
    }
    var str = string .toString()
                        .replace(/\D$/,"")
                        .replace(/\D+/g," ")
                        .split(' ')
                        .filter(number => {return !(number & 1)})
                        .sort((a,b) => {return a - b});
    deleting(str);
    var newString = str.join(',');
    console.log(newString);
    fs.appendFile('out.json', newString, 'utf8', (err) => {if (err) throw err;});
});