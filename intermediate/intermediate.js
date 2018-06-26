

function loadSongs(file){
 console.log('running loadSongs');
 //$.get(file,function(x){alert(x);});
 var x=new XMLHttpRequest();
 x.onreadystatechange=function(){showSongs(x.responseText);};
 x.open("GET",file,true);
 x.send();
}

function replaceAll(data,search, replacement) {
    return data.split(search).join(replacement);
}

function showSongs(data){
 var v1=replaceAll(data,"<song>","<div class='col-lg-6 col-md-6'>");
 var v2=replaceAll(v1,"</song>","</div>");
 var v3=replaceAll(v2,"</songtitle>","</songtitle><br/>");
 $("#songs").html(v3);
 console.log('data should be there');
}

console.log('you alive :)');
loadSongs("song.xml");