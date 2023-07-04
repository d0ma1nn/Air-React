<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","projectdb");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $mobile = $_POST['telephone'];
        $email = $_POST['email'];
        $lastname = $_POST['lastname'];  

        $sql = "INSERT INTO reactusers(name,telephone,email,lastname) VALUES('$name','$telephone','$email', '$lastname');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
        $conn->close();
    }
?>