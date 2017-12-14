
$(document).ready(function(){
  $(".fruits").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$("#accordion").accordion();

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: new google.maps.LatLng(40.0076894, -75.1774686),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'http://www.sneha-mukherjee.com/icons/';
        var icons = {
          dragon: {
            icon: iconBase + 'icon1.png'
          },
        library: {
                    icon: iconBase + 'icon2.png'
                  },
        info: {
                    icon: iconBase + 'icon3.png'
                  },

        farm: {
                  icon: iconBase + 'icon4.png'
                  },
        fruit: {
                  icon: iconBase + 'icon5.png'
                        },

        shop: {
                  icon: iconBase + 'icon6.png'
                      },
        last: {
                  icon: iconBase + '162.png'
                                    },
                      };


        var features = [
          {
            position: new google.maps.LatLng(40.0269761, -75.2374273),
            type: 'dragon'
          }, {
            position: new google.maps.LatLng(40.1042233, -75.2621418),
            type: 'info'
          },{
            position: new google.maps.LatLng(40.1201623, -75.2746683),
            type: 'library'
          },{
            position: new google.maps.LatLng(40.052434, -75.2435839),
            type: 'farm'
          },{
            position: new google.maps.LatLng(39.9109028, -75.1632817),
            type: 'fruit'
          },{
            position: new google.maps.LatLng(40.0659761,-75.2774273),
            type: 'shop'
          },{
            position: new google.maps.LatLng(40.0859761,-75.3774273),
            type: 'last'
          },
];
              // Create markers.
                features.forEach(function(feature) {
                  var marker = new google.maps.Marker({
                    position: feature.position,
                    icon: icons[feature.type].icon,
                    map: map
                  });
                });
              }


  var $star_rating = $('.star-rating .fa');

              var SetRatingStar = function() {
                return $star_rating.each(function() {
                  if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                    return $(this).removeClass('fa-star-o').addClass('fa-star');
                  } else {
                    return $(this).removeClass('fa-star').addClass('fa-star-o');
                  }
                });
              };

              $star_rating.on('click', function() {
                $star_rating.siblings('input.rating-value').val($(this).data('rating'));
                return SetRatingStar();
              });
