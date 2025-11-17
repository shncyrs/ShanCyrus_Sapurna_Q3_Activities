document.getElementById("btnText").addEventListener("click", function(){
 document.getElementById("Demo").textContent = "Hello JavaScript";
});

 document.getElementById("btnColor").addEventListener("click", function(){
 document.getElementById("myDiv");
 myDiv.style.color = "blue";
 });

document.getElementById("btnHide").addEventListener("click", function(){
 document.getElementById("myDiv")
 .style.display = "none";
 });
 document.getElementById("btnShow").addEventListener("click", function(){
 document.getElementById("myDiv")
 .style.display = "block";
 });

 document.getElementById("btnImage").addEventListener("click" , function(){
    const img = document.getElementById("myImage");
     img.src = img.src.includes("./img/image1.jpg")?
    "./img/image1.jpg" : "./img/image2.jpg";
});

document.getElementById("btnAlert").addEventListener("click" , function (){
    alert("Welcome To JavaScript");
});