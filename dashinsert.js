function dashInsert(str){
    str = str.split("");
    for(i=0;i<str.length;i++){
        str[i] = parseInt(str[i]);
    }
    for(i=0;i<str.length;i++){
if(str[i]%2===1 && str[i+1]%2===1){
    str.splice(i+1,0,'-');
}
    }
    str = str.join("");
    return str;
}
undefined
str = '1745389';
"1745389"
dashInsert(str);
"1-745-389"
str = '34657323128437 ';
"34657323128437 "
dashInsert(str);
"3465-7-323-12843-7NaN"
str = '34657323128437';
"34657323128437"
dashInsert(str);
"3465-7-323-12843-7"
