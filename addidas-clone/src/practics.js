function anagram(a,b){
    let len1=a.length;
    let len2=b.length;
    if(len1!=len2){
        console.log("not anagram")
    }
    let str1=a.split(" ").sort().join("");
    let str2=b.split(" ").sort().join("");
    if(str1==str2){
        console.log("true")
    }else{
        console.log("fasle")
    }

}
anagram("meenu", "umeen")
