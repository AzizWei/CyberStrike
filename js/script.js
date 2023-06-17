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

  

