/*
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

httpGet(graph.facebook.com/me/taggable_friends);
*/
/* make the API call */
FB.api(
    alert("Now inside of the FB.api method");
    "/me/taggable_friends",
    function (response) {
      if (response && !response.error) {
        alert("Loaded your taggable friends");
      }
    }
);
