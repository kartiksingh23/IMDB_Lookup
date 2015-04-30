$(document).ready(function(){
  $("#sub").click(function(){
    getimdbinfo($("#title").val());
  })
});

function getimdbinfo(title)
{
  var str;
  $.ajax({
    url: "http://www.omdbapi.com/?s=" + title+"&r="+"json",
    success:function(data)
    {
      
      
      $.each(data.Search,function(index,element){
                                                          i=0;
                                                          str='<table class="table">';
                                                          str += "<thead style='color:#F9D732'><th>Index</th><th>Title</th><th>Type</th><th>Year</th><th>imdbID</th><th>imdbRating</th></thead>";
                                                  $.ajax({
                                                          url: "http://www.omdbapi.com/?t=" + element.Title+"&r="+"json",
                                                          success:function(rate) 
                                                          {
                                                            
                                                            str += "<tr class='info'>";
                                                            str += "<td>" + ++i + "</td>";
                                                            str += "<td>" + rate.Title + "</td>";
                                                            str += "<td>" + rate.Type + "</td>";
                                                            str += "<td>" + rate.Year + "</td>";
                                                            str += "<td>" + rate.imdbID + "</td>";
                                                            str += "<td>" + rate.imdbRating + "</td>";  
                                                            
                                                            str += "</tr>";
                                                             console.log(str);
                                                            $("#results").html(str);
       
                                                          }
                                                        })
                                                });
       
      
  }
  })
}
