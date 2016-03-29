// $(document).ready(function(){
//   $.ajax({
//     type:"GET",
//     url: "https://api.github.com/users/tammerg/repos",
//     success: function(repos){
//       for (i = 0; i < repos.length; i++){
//         var newRepoUrl = buildRepoUrl(repos[i]);
//         $(".list-group").append(newRepoUrl);
//       }
//
//     },
//   });
//
//   function buildRepoUrl (repoData) {
//     var commitsApiUrl = "https://api.github.com/repos/";
//     commitsApiUrl += repoData.owner.login + "/";
//     commitsApiUrl += repoData.name + "/commits";
//
//     var newLink = $("<a>")
//       .attr("href", commitsApiUrl)
//       .addClass("list-group-item")
//       .addClass("repo")
//       .append(repoData.name);
//     return newLink;
//   }
//
// });
