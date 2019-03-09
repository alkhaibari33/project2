/*
  Please add all Javascript code to this file.
*/
(function() {
  var container = document.querySelector('#container')
  var state = {}
  renderLoading(state, container)
  function renderLoading(data, into) {
    // TODO: Add the template
  }
})()
$(document).ready(function newsapi () {
  //get APIkey of news api
  $.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-08&sortBy=publishedAt&apiKey=9e7bee4003b54f93a39b67b849edd35e", function (res) {
    console.log(res);
    res.articles.forEach(element => {
    $(".newsAPI").append(`<li><a href="${element.url}"> ${element.title}</a></li>`)
    })
  })
  $('#loading').hide();
  $('.newsa').click(function(){
    $('#loading').show(".newsAPI");
    console.log("clicked");
    $('#main').replaceWith(" <section id='main' class='newsAPI'> </section>");
    newsapi('https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-08&sortBy=publishedAt&apiKey=9e7bee4003b54f93a39b67b849edd35e');
    })
})
$(document).ready(function newsgardian () {
//get APIkey of the gardian
  $.get("https://content.guardianapis.com/search?api-key=0c41d891-bfad-416b-9196-55eda97fd997", function (result) {
    console.log(result);
    result.response.results.forEach(ele => {
      $(".TheGuardian").append(`<li><a href="${ele.webUrl}">${ele.webTitle}</a></li>`)
    })
  })
  $('#loading').hide();
  $('.newsg').click(function(){
    $('#loading').show(".TheGuardian");
    console.log("clicked");
    $('#main').replaceWith(" <section id='main' class='TheGuardian'> </section>");
    newsgardian('https://content.guardianapis.com/search?api-key=0c41d891-bfad-416b-9196-55eda97fd997');
    })
})