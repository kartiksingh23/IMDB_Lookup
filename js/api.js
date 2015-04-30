$(document).ready(function(){
  $("#sub").click(function(){
    getimdbinfo($("#title").val());
  })
});

function getimdbinfo(title)
{
  $.ajax({
    url: "http://www.omdbapi.com/?s=" + title,
    dataType:"json",
    success:function(data) {
      console.log(data);
      var str='<table class="table">';
       str += "<thead style='color:#F9D732'><th>Index</th><th>Title</th><th>Type</th><th>Year</th><th>imdbID</th></thead>";
       $.each(data.Search,function(index,element){
        str += "<tr class='info'>";
                    str += "<td>" + index + "</td>";
                    str += "<td>" + element.Title + "</td>";
                    str += "<td>" + element.Type + "</td>";
                    str += "<td>" + element.Year + "</td>";
                    str += "<td>" + element.imdbID + "</td>";
                    str += "</tr>";
                });
       str += '</table>';

                // insert the html
                $("#results").html(str);
       
    }
  })
}
