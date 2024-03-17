function isAnagram(str1, str2){
    str1 = str1.replace("!", "a").toLowerCase();
    str2 = str2.replace("!", "a").toLowerCase();
    str1 = str1.replace(" ", "");
    str2 = str2.replace(" ", "");
    let ans1 = str1.split("").sort().join("");
    let ans2 = str2.split("").sort().join("");
    if(ans1 == ans2){
      return true;
    }
    else{
      return false;
    }
  }