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
});


/* jQuery  Note:
    parent() 只往上查找一層
    closest() 往上查找 只要找到符合條件的 就停止
    parents() 往上查找 不停止 找出所有符合條件的
*/

  

