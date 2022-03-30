<!DOCTYPE html>

<head>
  <link rel="stylesheet" href="register.css">
  <script defer src="register.js"></script>
  <title>Registration</title>
</head>

<body>

  <?php

  include "connection.php";

  if (isset($_POST['register_btn'])) {
    $username = mysqli_real_escape_string($con, $_POST['userName']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $conPassword = mysqli_real_escape_string($con, $_POST['cPassword']);
    $phone = mysqli_real_escape_string($con, $_POST['phone']);
    $address = mysqli_real_escape_string($con, $_POST['address']);
    $dateOfBirth = mysqli_real_escape_string($con, $_POST['dateOfBirth']);
    $gender = mysqli_real_escape_string($con, $_POST['gender']);

    // to check email whether exist or not in db
    $emailquery = "select * from registration where email='$email' ";
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
        // $insertquery = "insert into registration( username, email, Password, repassword, phone, gender) values('$username','$email','$password','$repassword','$phone','$gender')";

        $insertquery = "INSERT INTO `registration`(`username`,`email`,`password`,`phone`,`address`,`dateOfBirth`,`gender`)
  VALUES('$username','$email','$password','$phone','$address','$dateOfBirth','$gender')";

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



  <div class="container">
      <div class="title">Registration</div>
            <div class="content">
                <form id="form1" action="" method="post">

                  <div class="user-details">
                    <div class="input-box">
                      <label for="userName" class="details">Username</label>
                      <!-- name="userName" field is for database
                          id="txtUserName" field is for js validation
                          span tag inside id="userName" field is for generating error message with the help of js validation.       
                  -->
                      <input type="text" id="txtUserName" class="form-control" placeholder="Enter your username" name="userName">
                      <span class="formerror hide" id="userName">User name is required</span>
                    </div>
                    <div class="input-box">
                      <label for="email" class="details">Email</label>
                      <input type="email" id="txtEmail" class="form-control" placeholder="Enter your email" name="email">
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
                 
                  <div class="input-box">
                    <label for="phone" class="details">Phone Number</label>
                    <input type="number" id="txtPhone" class="form-control" placeholder="Enter your phone number" name="phone">
                    <span class="formerror hide" id="phone">Phone number is required </span>
                  </div>
                  <div class="input-box">
                    <label for="address" class="details">Address</label>
                    <input type="text" id="txtAddress" class="form-control" placeholder="Enter your address" name="address">
                    <span class="formerror hide" id="address"> Address field is required</span>
                  </div>
                  <div class="input-box">
                    <label for="dateOfBirth" class="details">Date of birth</label>
                    <input type="date" id="txtDateOfBirth" class="form-control" placeholder="mm / dd / yyyy" name="dateOfBirth">
                    <!-- <span class="formerror hide" id="dateOfBirth"> Birth date field is required</span> -->
                  </div>
                  <div class="input-box" id="select">
                    <label for="gender" class="details">Gender</label>
                    <select id="gender" name="gender">
                      <option name="" value="gender">Select gender</option>
                      <option name="male" value="male">Male</option>
                      <option name="female" value="female">Female</option>
                      <option name="other" value="other">Other</option>
                    </select>
                    <!-- <span class="formerror hide" id="gender"> Gender selection field is required</span>  -->
                  </div>
                  </div>
                </form>
           
              <div class="input-box button" >
                <button type="submit" name="register_btn" class="btn btn-primary" id="btn">Sign up</button>
              </div>
              <div class="login-signup">
                <label for="link" class="text">Already registered ?
                  <a href="login.html" class="text signup-link">Login</a>
                </label>
              </div>



            </div>
          
            
  </div>

</body>

</html>