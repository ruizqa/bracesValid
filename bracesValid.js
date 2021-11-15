function bracesValid(word){
    let queue =[];
    let braces= {
        40:41,
        91:93,
        123:125
    }

    for(let i=0; i<word.length; i++){
        if (braces.hasOwnProperty(word.charCodeAt(i))){
            queue.push(braces[word.charCodeAt(i)]);
        }
        else if (Object.values(braces).includes(word.charCodeAt(i))){
            if(queue[queue.length - 1]==word.charCodeAt(i)){
                queue.pop()
            }
        }
    }

    if(queue.length ==0){
        return true;
    }
    else{
        return false;
    }

}

console.log(bracesValid("{{()}}[]"));
console.log(bracesValid("{(})"));