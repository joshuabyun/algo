// <Goals and rules>
// Check if a string ends with the given target string.
// <Given code>
// function confirmEnding(str, target) {
//     return str;
// }
// confirmEnding(“Bastian”, “n”);

function confirmEnding(str,target){
    var wordArr = str.split("").slice((this.length)-target.length);
    var targetWord = target.split("");
    var check = true;
    wordArr.forEach(function(v,i){
        if(v != targetWord[i]){
            check = false;
        }
    });
    console.log(check);
}
// confirmEnding("Bastian", "n");// should return true.
//confirmEnding("Connor", "n");// should return false.
//confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");//should return false.
// confirmEnding("He has to give me a new name", "name"); //should return true.
// confirmEnding("Open sesame", "same"); //should return true.
//confirmEnding("Open sesame", "pen"); //should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //should return false.


// <Goals and rules>
// Repeat a given string ‘num’ of times. Return an empty string if ‘num’ is not a positive number.
// <Given code>
// function repeatStringNumTimes(str, num) {
//     Return str;
// }
// repeatStringNumTimes("abc", 3);
function repeatStringNumTimes(str,num){
    var answer = "";
    if(num < 0) return;
    for(var i = 0; i < num; i++){
        answer += str;
    }
    console.log(answer);
    //string method repeat
}
// repeatStringNumTimes("*", 3);// should return"***".
// repeatStringNumTimes("abc", 3);// should return "abcabcabc".
// repeatStringNumTimes("abc", 4);// should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1);// should return "abc".
// repeatStringNumTimes("*", 8);// should return"********".
// repeatStringNumTimes("abc", -2);// should return "".



// <Goals and rules>
// Truncate a string if it is longer than the given maximum string length. Return the truncated string with a … ending.
// Inserting the three dots to the end will add to the string length. However, if the given maximum string length ‘num’ is less than or equal to 3,
// then the addition of the three dots does not add to the string length in determining the truncated string.
// <Given code>
// function truncateString(str, num) {
//     return str;
// }
function truncateString(str, len){
    var addon = "...";
    if(str.length <= len){
        console.log(str);
        return;
    }else if( len <= 3){
        console.log(str.split("").slice(0,len).join("")+addon);
        return;
    }
    console.log(str.split("").slice(0,len-3).join("")+addon);

}


// <Testing>
// truncateString("A-tisket a-tasket A green and yellow basket", 11);// should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 14);// should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);// should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);// should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1);// should return "A...".
// truncateString("Absolutely Longer", 2);//should return "Ab...".



// <Goals and rules>
// Write a function that splits an array into groups the length of ‘size’ and returns them as a two-dimensional array.
// <Given code>
// function chunkArrayInGroups(arr, size) {
//     return arr;
// }
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

function chunkArrayInGroups(arr,num){
    var answer = [];
    for(var i =0; i < arr.length; i +=num){
        var innerArr = arr.slice(i,i+num);
        answer.push(innerArr);
    }
    console.log(answer);
}

// <Testing>
// chunkArrayInGroups(["a", "b", "c", "d"], 2);//should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);//should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);//should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);//should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);// should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

// <Goals and rules>
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// <Given code>
// function mutation(arr) {
//     return arr;
// }
// mutation(["hello", "hey"]);
function mutation(arr){
    var newArr = arr[0].toLowerCase();
    var secondItem = arr[1].toLowerCase().split("");
    var answer = true;
    secondItem.forEach(function(v){
        if(newArr.indexOf(v) == -1){
           answer = false;
       }
    });
    console.log(answer);
}

// <Testing>
// mutation(["hello", "hey"]);// should return false.
// mutation(["hello", "Hello"]);// should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);// should return true.
// mutation(["Mary", "Army"]);// should return true.
// mutation(["Mary", "Aarmy"]);// should return true.
// mutation(["Alien", "line"]);// should return true.
// mutation(["floor", "for"]);// should return true.
// mutation(["hello", "neo"]);// should return false.
// mutation(["voodoo", "no"]);// should return false.


// <Goals and rules>
// Remove all falsy values from an array. Falsy values in JS are false, null, 0, “”, undefined, and NaN.
// <Given code>
// function bouncer(arr) {
//     return arr;
// }
// bouncer([7, "ate", "", false, 9]);
function bouncer(arr){
    var answer = [];
    arr.forEach(function(v){
        if(v){
            answer.push(v);
        }
    });
    console.log(answer);
}

// <Testing>
// bouncer([7, "ate", "", false, 9]);// should return [7, "ate", 9].
// bouncer(["a", "b", "c"]);// should return["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]);// should return [].
// bouncer([1, null, NaN, 2, undefined]);// should return [1, 2].


// <Goals and rules>
// You will be provided with an initial array, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// <Given code>
// function destroyer(arr) {
//     return arr;
// }
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
function destroyer(arr){
    var arg = [];
    var arrForCheck = arr;
    if(arguments.length > 1){
        for(var i = 1; i < arguments.length; i++){
            arg.push(arguments[i]);
        }
    }
    var answer = arrForCheck.filter(function(v,i){
        var check = true;
        for(var j = 0 ; j < arg.length; j++){
            if(arg[j] == v){
                check = false
            }
        }
        if(check){
            return v;
        }
    });
    console.log(answer);
}

// <Testing>
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);// should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);//should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5);// should return [1].
// destroyer([2, 3, 2, 3], 2, 3);// should return[].
// destroyer(["tree", "hamburger", 53], "tree", 53);// should return ["hamburger"].


// <Goals and rules>
// Return the lowest index at which a value should be inserted into an array once it has been sorted. The returned value should be a number.
// <Given code>
// function getIndexToIns(arr, num) {
//     return num;
// }
// getIndexToIns([40, 60], 50);
function getIndexToIns(arr, num){
    var arr = arr;
    var temp;
    // var hello = 0;
    // var count = 0;
    // for(var i = 0; i < arr.length-1;i++){
    //     for(var j = i+1; j < arr.length; j++){
    //         count++;
    //         if(arr[i] >= arr[j]){
    //             temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    //     hello += count;
    // } //runs lot more than below

    var check = true;
    var count;
    while(check){
        count = 0;
        for(var i=0;i < arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                count++
            }
        }
        if(count == 0) check=false;
    }
    //console.log(arr);
    if(arr.indexOf(num)!=-1){
        console.log(arr.indexOf(num));
        return;
    }
    if(num > arr[arr.length-1]){
        console.log(arr.length);
        return;
    }
    for(var x = 0 ; x < arr.length; x++){
        if(num < arr[x]){
            console.log(x);
            return
        }
    }

}

// <Testing>
// getIndexToIns([10, 20, 30, 40, 50], 35);//should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 30);//should return 2.
// getIndexToIns([40, 60], 50);// should return 1.
// getIndexToIns([3, 10, 5], 3);// should return 0.
// getIndexToIns([5, 3, 20, 3], 5);// should return 2.
// getIndexToIns([2, 20, 10], 19);// should return 2.
// getIndexToIns([2, 5, 10], 15);// should return3.

//getIndexToIns([150,24,677,6,.1,41,1,1,3,0,58,2, 5, 10], 15);


// <Goals and rules>
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus ‘A’ <-> ‘N’, ‘B’ <-> ‘O’ and so on.
// <Given code>
// function rot13(str) {
//     return str;
// }
// rot13("SERR PBQR PNZC");
// var a = "AZ ";
// console.log(a.charCodeAt(0));
// console.log(a.charCodeAt(1));
// console.log(a.charCodeAt(2));
function rot13(str){
    var a = str.split("");
    var answer = [];
    var currentVal;
    var newVal;
    a.forEach(function(v){
        currentVal = v.charCodeAt(0);
        if(currentVal > 64 && currentVal < 91){
            newVal = currentVal + 13;
            if(newVal > 90){
                var temp = newVal - 90;
                newVal = 64+temp;
            }
            answer.push(newVal);
        }else{
            answer.push(currentVal);
        }
    });
    console.log(String.fromCharCode.apply(null,answer));
}

// <Testing>
// rot13("SERR PBQR PNZC");// should decode to"FREE CODE CAMP"
// rot13("SERR CVMMN!");// should decode to"FREE PIZZA!"
// rot13("SERR YBIR?");// should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");// should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(arr){
    var array = arr;
    array.forEach(function(v){
        return v.toString();
    });
    array.unshift("(");
    array.splice(4,0,")"," ");
    array.splice(9,0,"-");
    console.log(array.join(""));
    return array;
}
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);



function titleCase(title, minorWords) {
    var titleList = title.toLowerCase().split(" ");
    var minorWordsList = minorWords.toLowerCase().split(" ");
    
    titleList.forEach(function(v,i){
        if(minorWordsList.length){
            var count = 0;
            minorWordsList.forEach(function(val){
                if(v == val) count++;
            });
            if(!count) titleList[i] = hello(v);
        }else{
            titleList[i] = hello(v);
        }
    });
    titleList[0] = hello(titleList[0]);
    function hello(str){
        var arr = str.split("");
        arr[0] = arr[0].toUpperCase();
       return arr.join(""); 
    }
    console.log(titleList);
    return titleList.join(" ");
}
// titleCase('a clash of KINGS', 'a an the of');
// titleCase('THE WIND IN THE WILLOWS', 'The In');


longestPalindrome=function(s){
    //your code here
    var string = s.split("");
    var answerInLen = [];
    var possiblePalindrome = [];
    
};
function lookForPalindrome(strArr){
    
}
function checkPalindrome(str){
    var firstHalf;
    var secondHalf;
    var temp = [];
    if(str.length%2){
        //odd
        firstHalf = str.slice(0,Math.floor(str.length/2));
        secondHalf = str.slice(Math.ceil(str.length/2));
        secondHalf.split("").forEach(function(v){
            temp.unshift(v);
        });
        secondHalf = temp.join("");
    }else{
        //even
        firstHalf = str.slice(0,str.length/2);
        secondHalf = str.slice(Math.ceil(str.length/2));
        secondHalf.split("").forEach(function(v){
            temp.unshift(v);
        });
        secondHalf = temp.join("");
    }
    if(firstHalf == secondHalf){
        console.log(str);
        return str;
    }
}

