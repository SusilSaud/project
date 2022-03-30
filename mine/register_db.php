<?php 


include("connection.php");
if (isset ($_POST['register_btn'])){
    $username=$_POST['userName'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $conPassword=$_POST['cPassword'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];
    $dateOfBirth=$_POST['dateOfBirth'];
    $gender=$_POST['gender'];
if($password===$conPassword){
    //$sql = "insert into.... or you can define any variable like $insertquery it is just variable
    $insertquery="INSERT INTO `registration`(`username`,`email`,`password`,`phone`,`address`,`dateOfBirth`,`gender`)
    VALUES('$username','$email','$password','$phone','$address','$dateOfBirth','$gender')";
    $result=$conn->query($insertquery);
    echo'<script>alert("successful")</script>';
}
else{
    echo"failed";
}
}




?>