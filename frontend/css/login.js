const form=document.querySelector("#login-form");



const hadleSubmit = (event) => {
    event.preventDefault();
    const forData = new FormData(form);
    const sha256Password = sha256(formData.get("password"));
    formData.set("password", sha256Password);
  



        const res = await fetch("/login", {
        method: "post",
        body: formData,
    });
    const data= await res.json();

    console.log("액세스토큰", res.status);
    if(res.status ==="200"){
        alert("로그인에 성공했습니다!");}
        window.location.pathname="/";
      else if(res.statusm===401){
        alert("id 혹은 password가 틀렸습니다.");
      }
    };


};

form.addEventListener("submit", handleSubmit);