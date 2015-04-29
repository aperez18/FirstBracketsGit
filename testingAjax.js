// Experimental JavaScript file for AJAX testing with VB.NET Web Forms technology
var $, console;
$(document).ready(function () {
    'use strict';
    var residentData;
    $('#btnRetrieve').click(function () {
        // Testing jQuery convenience methods ($.GET(), $.getJSON(), etc.)
        /*$.getJSON("data.html", function (data) {
            var items = [];
            $.each(data.photos, function (key, val) {
                items.push(val);
            });
            $.each(items, function(key, val){
                console.log(val.id + " " + val.image_name + " " + val.caption);
            });
        });*/

        // Using jQuery's core $.ajax() function is the perferred method over convenience functions like $.getJSON()
        $.ajax({
            // URL where resource/web service is located
            url: "data.html",
            // Data to send to the server
            data: {
                // No data expected at this point, no apparent effect.
                id: "234"
            },
            // Type of HTTP request (GET, POST, etc)
            type: "GET",
            // Type of response expected to come from server
            dataType: "json",
            // Function to run if request succeeds
            success: function (jsonResponse) {
                console.log("Success!");
                $.each(jsonResponse.photos, function (key, value) {
                    console.log(value.id);
                });
            },
            // Function to run if request fails
            error: function (xhr, status, errorThrown) {
                console.log("Request failed.");
                // xhr stands for the raw request
                // Log xhr, status codes, and error message
                console.log("Raw request: " + xhr);
                console.log("Status code: " + status);
                console.log("Error message: " + errorThrown);
            }
        });
    });
});
