function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


  const menuIcon = document.querySelector('.hamburger-menu');
   const navbar =document.querySelector('.navbar1')
  menuIcon.addEventListener('click' , () => {
           navbar.classList.toggle('change'); 
  });



 function handleSubmit(){
  var name=document.getElementById('emailid').value;

   localStorage.setItem("textvalue",name);
 
   

   return false;

 }




  AOS.init({
      duration:1200,
  });

  