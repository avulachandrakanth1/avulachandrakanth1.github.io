 function task4(){
    var arr = new Array();
    arr[0] = "James"
    arr[1] = "Anila"
    arr[2] = "Kalyan"
    arr[3] = "Rithin"
    arr[4] = "Joel"
    arr[5] = "Sujay"
    arr[6] = "Shiva"
    arr[7] = "Gova"
    arr[8] = "CK"
    arr[9] = "Ayush Sing"
    arr[10] = "Ayush"
    arr[11] = "Nandan"
    arr[12] = "james"
    arr[13] = "jane"
    for(var i =0;i<= arr.length-1; i++){
        // console.log(arr[i].charAt(0))
        if(arr[i].charAt(0) === 'J' || arr[i].charAt(0) === "j"){
            console.log("Goodbye "+ arr[i])
        }else{
            console.log("Hello "+ arr[i])
        }
    }
 }
 task4();