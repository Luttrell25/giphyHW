$("#submitBtn").on("click", function(event) {
  event.preventDefault();
  var rootURL =
    "https://api.giphy.com/v1/gifs/search?api_key=Ex0ndIVFjxBqVDSAAVSEN1FuzkY6vDTC&q=";
  var params = "&limit=25&offset=0&rating=G&lang=en";
  var searchQuery = $(".searchBar").val();
  var queryURl = rootURL + searchQuery + params;
  console.log("query: ", queryURl);
  // i got rid of the medthod: get
  $.ajax({ url: queryURl }).done(function(response) {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      var gifSrc = response.data[i].embed_url;
      console.log(gifSrc);
      $('<img id="gif" src=""></img>').appendTo('.gifs');
      $('#gif').attr('src', gifSrc);
      $('#gif').attr('id', [i]);
    }
  });
});
