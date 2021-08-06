var pictures=["Screenshot (327).png","Dassam_falls2.jpg","hundru falls.jpg","Jonha_falls.jpg","palani falls.jpg","Hirni falls.jpg","bhatinda falls.png","baghmunda falls.jpg","sita falls.jpg"];
var waterfalls=["SOME WATERFALLS OF JHARKHAND","DASSAM FALLS","HUNDRU FALLS","JONHA FALLS","PALANI FALLS","HIRNI WATERFALLS","BHATINDA FALLS","BAGHMUNDA FALLS","SITA FALLS"];
var count=0;
function change(){
    if(count > 8){
        count=0;
    }
    document.getElementById("image").src=pictures[count];
    document.getElementById("names").innerHTML=waterfalls[count];
    count++;
}