

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
 var v1=replaceAll(data,"<song>","<div class='col-lg-4 col-md-4 col-sm-12 song'><div>");
 var v2=replaceAll(v1,"</song>","</div></div>");
 var v3=replaceAll(v2,"</songtitle>","</songtitle><br/>");
 var v4=replaceAll(v3,"</artist>","</p>");
 var v5=replaceAll(v4,"</genre>","</p>");
 var v6=replaceAll(v5,"</country>","</p>");
 var v7=replaceAll(v6,"</year>","</p>");
 var v8=replaceAll(v7,"<artist>","<p>");
 var v9=replaceAll(v8,"<genre>","<p>");
 var v10=replaceAll(v9,"<country>","<p>");
 var v11=replaceAll(v10,"<year>","<p>");


 $("#songs").html(v11);
 console.log('data should be there');
}


console.log('you alive :)');
loadSongs("song.xml");