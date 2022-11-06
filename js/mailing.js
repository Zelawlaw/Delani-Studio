$(document).ready(()=>{
  
  const pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

 $("#submitform").click((e)=>{

  let name = $("#name").val();
  let email= $("#email").val();
  let message = $("#message").val();
  
  
 
  if(!pattern.test(email)){
    alert("Email format is incorrect! Kindly use format abc@def.ghi");
  }
  else{
   alert("Feeback received");
   $("#name").val("");
   $("#email").val("");
   $("#message").val("");
  }
  e.preventDefault();
 });

  
}
);