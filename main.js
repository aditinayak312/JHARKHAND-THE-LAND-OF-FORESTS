var pictures=["Screenshot (327).png","Dassam_falls2.jpg","hundru falls.jpg","Jonha_falls.jpg","palani falls.jpg","Hirni falls.jpg","bhatinda falls.png","baghmunda falls.jpg","sita falls.jpg"];
var waterfalls=["SOME WATERFALLS OF JHARKHAND","DASSAM FALLS","HUNDRU FALLS","JONHA FALLS","PALANI FALLS","HIRNI WATERFALLS","BHATINDA FALLS","BAGHMUNDA FALLS","SITA FALLS"];
var count=0;
function change1(){
    if(count > 8){
        count=0;
    }
    document.getElementById("wfimage").src=pictures[count];
    document.getElementById("names").innerHTML=waterfalls[count];
    count++;

}
var cm=["satyameva jayate2.jpg","Babulal.jpg","arjun munda.jpg","sibusoren.jpg","arjun munda.jpg","madhu_koda_.jpg","sibusoren.jpg","arjun munda.jpg","hemantsoren.jpeg","Raghubar-Das-.jpg","hemantsoren.jpeg"];
var cfmname=["Chief ministers of Jharkhand","Babulal Marandi","Arjun Munda","Shibu Soren","Arjun Munda","Madhu Koda","Shibu Soren","Arjun Munda","Hemant Soren","Raghubar Das","Hemant Soren"];
var count=0;
function change(){
    if(count > 10){
        count=0;
    }
    document.getElementById("cm").src=cm[count];
    document.getElementById("cmname").innerHTML=cfmname[count];
    count++;
}