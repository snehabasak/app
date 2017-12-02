
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


$(document).ready(function() {
     $( function() {
       var icons = {
         header: "ui-icon-circle-arrow-e",
         activeHeader: "ui-icon-circle-arrow-s"
       };
       $( "#accordion" ).accordion({
         icons: icons
       });
       $( "#toggle" ).button().on( "click", function() {
         if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
           $( "#accordion" ).accordion( "option", "icons", null );
         } else {
           $( "#accordion" ).accordion( "option", "icons", icons );
         }
       });
     } );
  }
