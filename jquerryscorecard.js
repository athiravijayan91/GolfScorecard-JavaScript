var numholes = 21;
var numplayer=0;
var playernum = 1;
$(document).ready(function(){

    function handler() { //alert('hello'+this.id);

        var postId = this.id.split('rbtn')[1];
//alert(postId);
        $( "#rbtn"+postId ).remove();
        $( "#PN"+postId ).remove();
        $( "#playernametextbox"+postId ).remove();
        //$( "#textbox"+postId ).remove();
        $('#1').find('#textbox' +postId ).remove();
        $('#2').find('#textbox' +postId ).remove();
        $('#3').find('#textbox' +postId ).remove();
        $('#4').find('#textbox' +postId ).remove();
        $('#5').find('#textbox' +postId ).remove();
        $('#6').find('#textbox' +postId ).remove();
        $('#7').find('#textbox' +postId ).remove();
        $('#8').find('#textbox' +postId ).remove();
        $('#9').find('#textbox' +postId ).remove();
        $('#10').find('#textbox' +postId ).remove();
        $('#11').find('#textbox' +postId ).remove();
        $('#12').find('#textbox' +postId ).remove();
        $('#13').find('#textbox' +postId ).remove();
        $('#14').find('#textbox' +postId ).remove();
        $('#15').find('#textbox' +postId ).remove();
        $('#16').find('#textbox' +postId ).remove();
        $('#17').find('#textbox' +postId ).remove();
        $('#18').find('#textbox' +postId ).remove();
        $('#In').find('#textbox' +postId ).remove();
        $('#Out').find('#textbox' +postId ).remove();
        $('#Total').find('#textbox' +postId ).remove();


    }

    $("#myButton").click( function() {


        $('.HOLE').append(function() {
            return $('<a href="#" class="removebtn" id="rbtn'+ numplayer+ '">X</a>').click(handler);
        });

        $(".HOLE").append('<label class = "label" id="PN'+ numplayer+ '" >Player Name : </label><input type="text" class="playerntextbox" id="playernametextbox'+ numplayer+ '"/>');
        $(".hole").append('<input type="text" class="Textbox" id="textbox' + numplayer+ '"/>');
        numplayer++;




    });

    //playernametextbox1

    $('.HOLE').focusout(function() {
        //alert('hi');
        for (var j = 0; j < numplayer; j++) {
            if(j>=1) {
                if($('#playernametextbox'+j).val() != "" && $('#playernametextbox'+j-1).val() != "")
                    for (var i = 0; i < j; i++) {
                        if ($('#playernametextbox' + i).val() == $('#playernametextbox' + j).val())
                        {
                            alert("Name should be different");
                            return false;
                        }
                    }
            }
        }
    });

    $('#18').focusout(function () {
        for (var i = 0; i < numplayer; i++) {
            if ( (parseInt($('#Total').find('#textbox'+i).val()) - parseInt($("#parTotal").text())) >= 0) {
                //alert((parseInt($('#Total').find('#textbox'+i).val())));
                //$(".scorecardbox").append("<div>Score=" +(parseInt($('#Total').find('#textbox'+i).val()) - parseInt($("#parTotal").text()))+"\nBetter luck next time<br></div>");
                alert("Score Player "+parseInt(i+1)+"("+$('#playernametextbox'+i).val()+")=" +(parseInt($('#Total').find('#textbox'+i).val()) - parseInt($("#parTotal").text()))+"\nBetter luck next time");
                //alert("Better luck next time");
                //return false;
            }
            else{
                //$(".scorecardbox").append("<div>Score=" +(parseInt($('#Total').find('#textbox'+i).val()) - parseInt($("#parTotal").text()))+"\nOn to the PGA!<br></div>");
                alert("Score Player "+parseInt(i+1)+"=" +(parseInt($('#Total').find('#textbox'+i).val()) - parseInt($("#parTotal").text()))+"\nOn to the PGA!");
                //alert("On to the PGA!");
            }
        }

    });

    $('.hole').keyup(function() {
        //alert("value="+numplayer);
        for (var i = 0; i < numplayer; i++) {
            //alert($('#playernametextbox'+i).val());
            $('#Out').find('#textbox'+i).val(
                (parseFloat($('#1').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#2').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#3').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#4').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#5').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#6').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#7').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#8').find('#textbox' + i).val()) || 0 ) +
                (parseFloat($('#9').find('#textbox' + i).val()) || 0 )


            );

            //alert(parseFloat($('#2').find('#textbox' + i).val()));

            if ( ($('#1').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#1').find('#textbox' + i).val()))) ||
                ($('#2').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#2').find('#textbox' + i).val()))) ||
                ($('#3').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#3').find('#textbox' + i).val()))) ||
                ($('#4').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#4').find('#textbox' + i).val()))) ||
                ($('#5').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#5').find('#textbox' + i).val()))) ||
                ($('#6').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#6').find('#textbox' + i).val()))) ||
                ($('#7').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#7').find('#textbox' + i).val()))) ||
                ($('#8').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#8').find('#textbox' + i).val()))) ||
                ($('#9').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#9').find('#textbox' + i).val())))
            )
            {
                alert("Must input a number in all score box");
                return false;
            }






            $('#In').find('#textbox'+i).val(
                (parseFloat($('#10').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#11').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#12').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#13').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#14').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#15').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#16').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#17').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#18').find('#textbox'+i).val()) || 0 )
            );









            if ( ($('#10').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#10').find('#textbox' + i).val()))) ||
                ($('#11').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#11').find('#textbox' + i).val()))) ||
                ($('#12').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#12').find('#textbox' + i).val()))) ||
                ($('#13').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#13').find('#textbox' + i).val()))) ||
                ($('#14').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#14').find('#textbox' + i).val()))) ||
                ($('#15').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#15').find('#textbox' + i).val()))) ||
                ($('#16').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#16').find('#textbox' + i).val()))) ||
                ($('#17').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#17').find('#textbox' + i).val()))) ||
                ($('#18').find('#textbox' + i).val() != "" && isNaN(parseFloat($('#18').find('#textbox' + i).val())))
            )
            {
                alert("Must input a number in all score box");
                return false;
            }


            $('#Total').find('#textbox'+i).val(

                (parseFloat($('#Out').find('#textbox'+i).val()) || 0 )+
                (parseFloat($('#In').find('#textbox'+i).val()) || 0 )
            )





        }






    });

});

function getCourseInfo(courseId){
    var url = "http://golf-courses-api.herokuapp.com/courses/"+courseId;
    $.getJSON(url, function (data) {


        var course = data.course;
        //alert(course.name);
        //alert(course.city);
        //alert(course.location.lat);
        //alert(course.location.lng);
        var location1 = new google.maps.LatLng(course.location.lat,course.location.lng);
        map.setCenter(location1);
        map.setZoom(15);

        var marker = new google.maps.Marker({
            position: location1,
            map: map,
            title: 'Hello World!'
        });
        var infoWindow = new google.maps.InfoWindow();
        //google.maps.event.addListener(marker, "mouseover", function(e) {
        infoWindow.setContent(course.name);
        infoWindow.open(map, marker);
        //});

        getweather(course.city, course.name,course.membership_type,course.addr_1,course.state_or_province,course.country,course.zip_code,course.website,course.phone,course.global_rank,course.local_rank);

        course.holes.forEach(function (hole) {
            $("#selectTeebox").find('option').remove().end();
            $("#selectTeebox").append($('<option>', {
                value: "",
                text: "-Please Select-",
                selected: "selected",
            }));
            hole.tee_boxes.forEach(function (teebox) {
                $("#selectTeebox").append($('<option>', {
                    value: courseId+"_"+teebox.tee_type,
                    text: teebox.tee_type,
                }));
            });
        });
    });
}

function setCourseInfo(courseId_teeboxType) {
    var arr = courseId_teeboxType.split('_');
    var url = "http://golf-courses-api.herokuapp.com/courses/" + arr[0];
    $.getJSON(url, function (data) {
        var course = data.course;
        var parIn = 0;
        var parOut = 0;
        var yardIn = 0;
        var yardOut = 0;
        var hcpIn = 0;
        var hcpOut = 0;
        course.holes.forEach(function (hole) {
            hole.tee_boxes.forEach(function (teebox) {
                if (arr[1] == teebox.tee_type) {
                    //setCourseInfoValue(arr[0]+"_"+arr[1]);
                    if (parseInt(hole.hole_num) > 9) {
                        parIn = parIn + parseInt(teebox.par);
                        yardIn = yardIn + parseInt(teebox.yards);
                        hcpIn = hcpIn + parseInt(teebox.hcp);
                    }
                    else {
                        parOut = parOut + parseInt(teebox.par);
                        yardOut = yardOut + parseInt(teebox.yards);
                        hcpOut = hcpOut + parseInt(teebox.hcp);
                    }
                    $("#holepar" + hole.hole_num).html(teebox.par);
                    $("#hcp" + hole.hole_num).html(teebox.hcp);
                    $("#yard" + hole.hole_num).html(teebox.yards);
                    $("#parIn").html(parIn);
                    $("#parOut").html(parOut);
                    $("#parTotal").html(parseInt(parIn) + parseInt(parOut));

                    $("#yardIn").html(yardIn);
                    $("#yardOut").html(yardOut);
                    $("#yardTotal").html(parseInt(yardIn) + parseInt(yardOut));
                    $("#hcpIn").html(hcpIn);
                    $("#hcpOut").html(hcpOut);
                    $("#hcpTotal").html(parseInt(hcpIn) + parseInt(hcpOut));
                }
            });
        });
    });
}

