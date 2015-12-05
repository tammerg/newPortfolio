$(document).ready(function(){
  $.ajax({
    type:"GET",
    url: "https://api.github.com/users/tammerg/repos",
    success: function(repos){
      for (i = 0; i < repos.length; i++){
        $(".list-group").append("<p>" + repos[i].name + "</p>")
      }   
    },
  })
});