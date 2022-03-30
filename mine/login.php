<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="stylesheet" href="flogin.css">
  <script defer src="fvalid.js"></script>
  <title>Login</title>
</head>

<body>


<?php

include "connect.php";

if (isset($_POST['login_btn'])) {

  $email = mysqli_real_escape_string($con, $_POST['email']);
  $password = mysqli_real_escape_string($con, $_POST['password']);
  $conPassword = mysqli_real_escape_string($con, $_POST['cPassword']);

  // to check email whether exist or not in db
  $emailquery = "select * from login where email='$email' ";
  $query = mysqli_query($con, $emailquery);

  $emailcount = mysqli_num_rows($query);
  if ($emailcount > 0) { //$emailcount>0 means even if single same email exist then you will get mssg already exist
    // echo "Email already exists";
?>
    <script>
      alert("Email already exists");
    </script>
    <?php
  } else {

    if ($password === $conPassword) {
     
      $insertquery = "INSERT INTO `login`(`email`,`password`)
VALUES('$email','$password')";

      $iquery = mysqli_query($con, $insertquery);

      if ($iquery) {
    ?>
        <script>
          alert("Inserted successful");
        </script>
      <?php
      } else {
      ?>
        <script>
          alert("Not inserted");
        </script>
      <?php
      }
    } else {
      ?>
      <script>
        alert("Password are not matching");
      </script>
<?php
    }
  }
}
?>


  <div class="wrapper">
    <h2>Login</h2>
    <form id="form1" action="" method="post">
        
        <div class="input-box">
            <label for="email" class="details">Email</label>
            <input type="email" id="txtEmail" class="form-control" placeholder="Enter your email" name="email" >
            <span class="formerror hide" id="email"> Email field is required</span> 
        </div>
      <div class="input-box">
        <label for="password" class="details">Password</label>
        <input type="password" id="txtPassword" class="form-control" placeholder="Enter your password" name="password">
        <span class="formerror hide" id="password">Password is required </span>
    </div>
    <div class="input-box">
            <label for="cPassword" class="details">Confirm Password</label>
            <input type="password" id="txtcPassword" class="form-control" placeholder="Confirm your password" name="cPassword">
            <span class="formerror hide" id="cPassword">Confirm password is required </span>
          </div>

      <div class="input-box button">
        <button type="submit" name="login_btn" class="btn btn-primary">Login</button>
      </div>

    </form>
    
    <div class="login-signup">
      <label for="link" class="text">Not registered?
        <a href="fregister.html" class="text signup-link">Signup now</a>
      </label>
    </div>
  </div>
</body>

</html>