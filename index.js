// function loadIssue() {
//   var issue = {
//     state: "closed",
//     number: 5,
//     created_at: "2016-03-31 16:23:13 UTC",
//     body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//   }
 
//   var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   var result = template(issue);
//   document.getElementsByTagName("main")[0].innerHTML += result;
// }

// edited using a for loop for several (any) issues 
// function loadIssue() {
//   var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   for(var i=0;i<issues.length;i++) {
//     var result = template(issues[i]);  // issues is from issues.js
//     document.getElementsByTagName("main")[0].innerHTML += result;
//   }
// }

// do the same as above but utilizing the each helper method provided by Handlebars
function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}