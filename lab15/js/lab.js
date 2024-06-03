// index.js - purpose and description here
// Author: Your Name
// Date:

// Using the core $.ajax() method
$('#activate').click(function() {
  $.ajax({
      url: "https://swapi.dev/api/people/1/",
      data: {
          id: 123,
          api_key: "starWars",
      },
      type: "GET",
      dataType: "json",
      success: function(data) {
          // Convert data to a string for display
          var output = JSON.stringify(data, null, 2);
          // Put the output in the div
          $('#output').html('<pre>' + output + '</pre>');
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
          $('#output').html('<p>Error: ' + textStatus + '</p>');
      }
  });
});