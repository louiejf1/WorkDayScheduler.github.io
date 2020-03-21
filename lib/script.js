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
      hour = moment().format("h");
      //console.log(hour);

      $('.dayTime').text(`${currentDtime} - ${time}`); //set time in HTML DOM header
      let inputTime = $('.input-group-text').html(); // check what time is shown in input
      //console.log(inputTime);


      let info = $('.form-control').val();
      console.log(info);

      // let time = '';
      // let event = '';

      // function addToLocMem(time, event) 
      //       let details = $('.form-control').val();
      //       console.log(details);
      //       localStorage.setItem('time', 'event') 
      // }
      // addToLocMem();


      // function btnClick() {  
      //       $('.b1, .b2, .b3, .b4m .b5, .b6, .b6, .b7, .b8, .b9, .b10, .b11').click(function () {
      //             // time = $(selector).text();

      //       });
      // }



      // $('.input-group').on('click', function () {
      //       let inputText = $(this).find('input:text').focus();
      //       console.log(inputText);
      // });

      // $('.input-group input:text').on('click', function(){
      //       let a1 = $().val('span.form-control').text();
      //       //$(this).val()
      //       var input2 = $(this).siblings('span.form-control').val();
      //       console.log(a1 + ' ' + input2);
      // });

      $(function () {
            $(".form-control").change(function () {
                  let info = $(".form-control").html();
                  let val = $(".input-group-text").html();
                  console.log(val + ' ' + info);
            });
      });





      //$('.myContentDiv').append('<div class="input-group mb-3"><span class="input-group-text " id="basic-addon2">Test AM</span><input type="text" class="form-control" placeholder="..." aria-label="00" aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-outline-secondary b1" type="button" id="button-addon2">ADD</button></div></div>');



}); //JQuery - Document ready end