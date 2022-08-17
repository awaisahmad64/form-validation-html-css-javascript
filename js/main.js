
    let id = (id) => document.getElementById(id);
    let classes = (classes) => document.getElementsByClassName(classes);
    let urserName = id('userName'), 
      email = id('email'),
      password = id('password'),
      form = id('form'),
      errorMsg = classes('error'),
      failureIcon = classes('failure-icon'),
      successIcon = classes('success-icon');
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        engine(urserName, 0, "User Name cannot blank");
        engine(email, 1, "Email cannot blank");
        engine(password, 2, "Password cannot blank");
      });
      let engine = (id, serial, message) => {
        if(id.value.trim()===""){
          errorMsg[serial].innerHTML = message;
          id.style.border = "2px solid red";
          failureIcon[serial].style.opacity = "1";
          successIcon[serial].style.opacity = "0";
        }
        else{
          errorMsg[serial].innerHTML = "";
          id.style.border = "2px solid green";
          failureIcon[serial].style.opacity = "0";
          successIcon[serial].style.opacity = "1";
        }
       }
