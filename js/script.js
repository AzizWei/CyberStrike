$(document).ready(function() {

  $("#navbar li a").click(function() {
    $("#navbar li a.navbarActive").removeClass("navbarActive");
    $(this).addClass("navbarActive");
  });



  $('#navNews').click(function(event) {
    event.preventDefault();  // 防止默认链接行为
  
    var targetPosition = 1092;  // 目标滚动位置
  
    $('html, body').animate({
      scrollTop: targetPosition
    }, 800);  // 滚动持续时间，单位为毫秒
  });
  

  $.getJSON("../animal.json", function(data) {
    $(".btn").on("click", function() {
      var index = $(this).parent().index();
      var animalName = data[index].name;
      var animalStory = data[index].des;
      var animalPicUrl = data[index].picUrl;

      $("#animalName").text(animalName);
      $("#animalStory").text(animalStory);
      $("#animalPicUrl").attr("src", animalPicUrl).addClass("animate__fadeInLeft");
      
      setTimeout(function() {
        $("#animalPicUrl").removeClass("animate__fadeInLeft");
      }, 800);

      $(".btn").removeClass("btnActive");
      $(this).addClass("btnActive");
    });
  });




  $("#banner").on("mouseenter", () => {
      $("#bannerFilter").css("display", "block");
      $("#bannerFilter").addClass("animate__fadeInDown");
      $("#bannerBtn").css("animation-name","fadeup");
      $("#banner").css("filter", "grayscale(.9)");
  });
  
  $("#banner").on("mouseleave", () => {
      $("#bannerFilter").css("display", "none");
      $("#bannerBtn").css("opacity","1");
      $("#banner").css("filter", "grayscale(0)");
  });


  $("#bannerBtn").on("click",()=>{
  });


  // contact part

  $(".progress").each(function() {     //選取所有具有.progress類別的元素遍歷每個進度段落
    var progressValue = $(this).find("h3 span").text(); //抓到 h3底下span裡的值
    var progress = parseInt(progressValue.replace("%", ""));//parseInt將字串轉換為以十進位表示的整數 並且把值"%"替代為空白
    var progressBar = $(this).find(".bar span");
    progressBar.css("width", progress + "%");
  });




   $(".btnRow a").click(function(){
      $(".btnRow a.btnRowActive").removeClass("btnRowActive");
      $(this).addClass("btnRowActive");
   });


   let btnRows = document.querySelectorAll(".btnRow a");
   let btnRowsCon= document.querySelectorAll(".historyContent");
   btnRows.forEach(function(btnRow,index){
      btnRow.addEventListener("click",function(){
        // console.log(this.innerText);
           for(let i = 0 ;i<btnRows.length;i++){
              btnRowsCon[i].style.display="none";
           };
           btnRowsCon[index].style.display="block";
      });
   });
   
   
   let loginBox = document.querySelector(".login");
   let loginBtn = document.querySelector("#loginBtn");
   let closeBtn = document.querySelector("#closeBtn");
   loginBtn.addEventListener("click",function(){
      loginBox.style.display="flex";
   });
   closeBtn.addEventListener("click",function(){
      loginBox.style.display="none";
   });




});


/* jQuery  Note:
    parent() 只往上查找一層
    closest() 往上查找 只要找到符合條件的 就停止
    parents() 往上查找 不停止 找出所有符合條件的
*/

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header #navbar a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top< offset +height){
            //active navbar Links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header #navbar a[href*='+id+']').classList.add('active');
            })
        }
    })



    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

}  


// window.addEventListener("scroll", () => {
//   let windowYChange = window.scrollY;
//   console.log(windowYChange);
// });


/*
var progressSections = document.querySelectorAll(".progress");  
progressSections.forEach((section)=>{   
    var progressValue = section.querySelector("h3 span").innerHTML;  
    var progress = parseInt(progressValue.replace("%", ""));   
    var progressBar = section.querySelector(".bar span");   
    progressBar.style.width = progress + "%";
});

*/

//Slide Control

let nextBtn = document.querySelector("#nextBtn");
let preBtn = document.querySelector("#preBtn");
let slide = document.querySelector("#slide");
nextBtn.addEventListener("click",function(){
  let lists = document.querySelectorAll('.card');
  slide.appendChild(lists[0].cloneNode(true));
  slide.removeChild(lists[0]);
});
preBtn.addEventListener("click",function(){
  let lists = document.querySelectorAll('.card');
  slide.appendChild(lists[0].cloneNode(true));
  slide.removeChild(lists[0]);
});

// window.addEventListener("scroll", () => {
//   let windowYChange = window.scrollY;
//   console.log(windowYChange);
// });


