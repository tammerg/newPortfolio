$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/tammerg/repos",
    success: function(repos){
      console.log(repos);
    }
    error: function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }

   })
});