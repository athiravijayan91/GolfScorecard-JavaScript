
function initialize() {

    var myOptions = {
        zoom: 1,
        center: new google.maps.LatLng(40.428747,  -111.902424),
        mapTypeId: 'satellite'
        //google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}



function getweather(thecityname,location,mtype,addr,state,country,zip,website,phonenum,globalrank,localrank) {
    var globalweather;
    var xhttp = new XMLHttpRequest();

    //$('#weather').css('backgroundImage','url('+imageurl+')');
    $('#weather').css('background-size','100% 50%');
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState==4 && xhttp.status ==200){
            globalweather = JSON.parse(xhttp.responseText);
            document.getElementById("golfcoursename").innerHTML =location;
            document.getElementById("membershiptype").innerHTML = "Membership Type:"+mtype;
            document.getElementById("localrank").innerHTML = localrank;
            document.getElementById("conditions").innerHTML = globalweather.weather[0].description;
            //document.getElementById("windbox").innerHTML = globalweather.wind.speed;
            document.getElementById("currenttemp").innerHTML = fullconverter(Number(globalweather.main.temp))+"°";
            document.getElementById("theicon").src= "http://openweathermap.org/img/w/"+ globalweather.weather[0].icon + ".png";


            document.getElementById("addr").innerHTML = addr;
            document.getElementById("cityname").innerHTML = thecityname;
            document.getElementById("state").innerHTML = state;
            document.getElementById("country").innerHTML = country;
            document.getElementById("zip").innerHTML = zip;
            document.getElementById("website").innerHTML = "<a href ='"+website+"'>"+website+"</a>";
            document.getElementById("phonenum").innerHTML = phonenum;
            document.getElementById("globalrank").innerHTML = "Global Rank: "+globalrank;
            document.getElementById("localrank").innerHTML = "Local Rank: "+localrank;
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ thecityname +"&appid=cc8ef8e5c209d938ab3801daa42b5e31", true);
    xhttp.send();
}


function fullconverter(k){
    var toc = +k - 273.15;
    var tof = toc * 9/5 + 32;
    return Math.round(tof);
}



function setHolePins(courseId, holeId, teetype){
    var url = "http://golf-courses-api.herokuapp.com/courses/"+courseId;
    var greenmarkers = {};
    $.getJSON(url, function (data) {
        var course = data.course;
        course.holes.forEach(function (hole) {
            if(parseInt(hole.hole_num) == holeId) {
                var greenlocation = new google.maps.LatLng(hole.green_location.lat, hole.green_location.lng);
                if (gmarker && gmarker.setMap) {
                    gmarker.setMap(null);
                }
                var gmarker = new google.maps.Marker({
                    position: greenlocation,
                    map: map,
                    title: 'Green',
                    icon: 'green.png'
                });
                map.setZoom(16);
                map.panTo(gmarker.position);
                //greenmarkers[holeId] = gmarker;
                var infoWindow = new google.maps.InfoWindow();
                infoWindow.setContent(''+holeId);
                infoWindow.open(map, gmarker);
            }
            var pinmarkers = {};
            hole.tee_boxes.forEach(function (teebox) {
                if((parseInt(hole.hole_num) == holeId) && (teetype == teebox.tee_type)) {
                    var pinlocation = new google.maps.LatLng(teebox.location.lat, teebox.location.lng);
                    if (pmarker && pmarker.setMap) {
                        pmarker.setMap(null);
                    }
                    var pmarker = new google.maps.Marker({
                        position: pinlocation,
                        map: map,
                        title: 'PinColor:'+teebox.tee_color_type,
                        icon: 'pin.png'
                    });
                    map.setZoom(16);
                    map.panTo(pmarker.position);
                    //pinmarkers[holeId] = pmarker;
                    var infoWindow = new google.maps.InfoWindow();
                    infoWindow.setContent(''+holeId+teetype);
                    infoWindow.open(map, pmarker);
                }
            });


        });
    });
}


function getGolfcourseinfo(latitude, longitude) {
    $.ajax({
        type: "POST",
        url: "http://golf-courses-api.herokuapp.com/courses",
        data: JSON.stringify({latitude: latitude,longitude: longitude,radius: 48.28032}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data1) {
            $('#location').find('option').remove();
            var courses = data1.courses;
            $('#location').append('<option value="" selected="selected">-Please Select-</option>');
            courses.forEach(function (course) {
                $('#location').append('<option value="' + course.id + '">' + course.name + '</option>');
                //alert(course.id+":"+course.name);
            });
        },
        error: function (request, status, errorThrown) {
            alert(status);
        }
    });




}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13,
        mapTypeId: 'satellite'
    });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    var types = document.getElementById('type-selector');
    var strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
    var autocomplete = new google.maps.places.Autocomplete(input);
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);
    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });
    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);

            map.setZoom(17);  // Why 17? Because it looks good.
        }

        getGolfcourseinfo(place.geometry.location.lat(), place.geometry.location.lng());
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;
        infowindow.open(map, marker);
    });
    initialize();
}



