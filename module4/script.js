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
    arr[13] = "jane";   
    helloSpeaker(arr);
    byeSpeaker(arr)
 }

 function helloSpeaker(data){
    for(var i =0;i<= data.length-1; i++){
        if(!(data[i].charAt(0) == "J" || data[i].charAt(0) == "j")){
            console.log("Hello "+ data[i])
        }
    }
 }
 function byeSpeaker(data){
    for(var i =0;i<= data.length-1; i++){
        if(data[i].charAt(0) === 'J' || data[i].charAt(0) === "j"){
            console.log("Good Bye "+ data[i])
        }
    }
 }
 task4();
