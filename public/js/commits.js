$(document).ready(function(){
  $(document).on("click", "a", function(e){
    e.preventDefault();

    $.ajax({
      type:"GET",
      url: $(this).attr("href"),
      success: function(commits){
        $("tbody").empty();

        for (var i = 0; i < commits.length; i++) {
          $("tbody").append(buildTableRow(commits[i]));
        }

      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }
    }); 
    function buildTableRow(commitData){
      var shaTd = $("<td>").append(commitData.sha);
      var dateTd = $("<td>").append(commitData.commit.author.date);
      var messageTd= $("<td>").append(commitData.commit.message);

      return $("<tr>").append(shaTd)
        .append(dateTd)
        .append(messageTd);

    }

  });
});