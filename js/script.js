$(document).ready(function() {
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
  })


});


/* jQuery  Note:
    parent() 只往上查找一層
    closest() 往上查找 只要找到符合條件的 就停止
    parents() 往上查找 不停止 找出所有符合條件的
*/

  



// contact part

// 控制進度條  只需調整html裡的span數值 下方bar會跟著變化
var progressSections = document.querySelectorAll(".progress");  //選取所有具有.progress類別的元素

progressSections.forEach((section)=>{    //forEach遍歷每個進度段落
    var progressValue = section.querySelector("h3 span").innerHTML;  //抓到 h3底下span裡的值
    var progress = parseInt(progressValue.replace("%", ""));   //parseInt將字串轉換為以十進位表示的整數 並且把值"%"替代為空白
    var progressBar = section.querySelector(".bar span");   
    progressBar.style.width = progress + "%";
});
//Slide Control

document.getElementById('nextBtn').onclick=()=>{
    let lists = document.querySelectorAll('.card');
    document.getElementById('slide').appendChild(lists[0].cloneNode(true));
    document.getElementById('slide').removeChild(lists[0]);
}

  
document.getElementById('preBtn').onclick =()=>{
    let lists = document.querySelectorAll('.card');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

