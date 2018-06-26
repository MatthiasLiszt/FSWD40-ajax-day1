<?php

define('DBHOST', 'localhost');
define('DBUSER', 'root');
define('DBPASS', '');
define('DBNAME', 'logsystem');

function connectDB()
  {$conn = mysqli_connect(DBHOST,DBUSER,DBPASS,DBNAME);


     if ( !$conn ) {
      die("Connection failed : " . mysqli_error());
     }
    return $conn; 
   }  

 $connect=connectDB();

function showData($connect){
 $sql="select userEmail from users";
 $result=mysqli_query($connect,$sql);
 $obj=array();
 
  if(mysqli_num_rows($result)>0)
   {
    while($row=mysqli_fetch_assoc($result))
     {$e=(object)'';
      $e->email=$row['userEmail'];
      array_push($obj,$e); 
      
     }

   }
  else
   {/*nothing*/}
 
 $json=json_encode($obj);
 echo $json;
 
}

 showData($connect);

?>