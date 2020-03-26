//console.log(moment()); //test moments https://momentjs.com/

//current D&T
let currentDtime;
let time;
let hour;
let workingHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


$(document).ready(function () { //JQuery - Document ready start

      currentDtime = moment().format('MMMM Do YYYY')
      //console.log(currentDtime);
      time = moment().format("h:mm A");
      //console.log(time);
      hour = parseInt(moment().format("h"));
      //console.log(hour);

      $('.dayTime').text(`${currentDtime} - ${time}`); //set time in HTML DOM header


      let info = $('.form-control').val();
      console.log(info);

     
            $('.myBtn').click(function (event) {
                  console.log(event);
                  var inputTxt = ($(this).siblings(".form-control").val());
                  var timeTxt = ($(this).siblings(".input-group-text").text());
                  console.log(inputTxt, timeTxt);
                  localStorage.setItem(timeTxt, inputTxt);
            });

            $("#hour-8").val(localStorage.getItem('8 AM'));

            $('.input-group-text').each(function(){

                  var spanText = parseInt(($(this).text()));
                  console.log(spanText);
                  console.log(hour);


                  if (spanText < hour){
                        console.log("lest then");
                        $(this).addClass("lessThen");
                  }
                  
                  if (spanText === hour) {
                        console.log("equal to");
                  }

                  if (spanText > hour) {
                        console.log("greater then");
                  }

            });


}); //JQuery - Document ready end