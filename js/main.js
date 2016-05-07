
//Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})



//Sliding Searchbox
 $(document).ready(function(){

            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen === false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen === true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });



            function buttonUp(){
                "use strict";
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            };
            
            



//Autocomplete Suggestions

$(document).ready(function(){


// $(function() {
//     var availableTags = [
//       "Channels",
//       "Dimentional Letters",
//       "Sign Cabinets",
//       "Back-Lit",
//       "Front-Lit"
//     ];

//     $( "#tags" ).autocomplete({
//       source: availableTags
//     });
//   });



//   "use strict";
//   $("p:contains(get)").css("text-decoration", "underline");


  var suggestion = [
      "Channels",
      "Dimentional",
      "Gold-Leaf",
      "Cabinets",
      "Carved",
      "Vinyl",
	  "Prints"
    ];


  // loop through suggestions
  // for everything in suggestions, put it into a div
  // show that div underneath the search box
  // when click on item in div, search box value = item


    $("#SearchBar").click(function(){
        //
       // $("#suggestions").removeClass("suggestions");

       $("#suggestions").html("");

        $.each(suggestion, function( i, val ) {
            var newLI = $("<li></li>");
            newLI.html( suggestion[i] );
            $("#suggestions").append( newLI );

            newLI.on('click',function(){

                $("#suggestions").hide();

               $(".filter a:contains('"+val+"')").each( function( i, element ) {
                 var content = $(element).text();
                  content = content.replace( val, '<span style="background-color:red">' + '<span style="color:white">' + val + '</span>' );
                  $(element).html( content );
                });
           });
        });

        $("#suggestions").show();
        $("#suggestions").addClass("suggestions");

    });




// for(i=0; i++){
//   console.log(i);

// var newDiv = document.createElement('div');
// var newli = document.createElement('li');
//  newDiv.appendChild(newli);
//  newDiv.classList.add(arr[i]);

//   document.getElementById("suggestions").appendChild(newDiv);
//   course(newli, arr[i]);

//    }



//This Highlights what is being typed in the SearchBox
$("#SearchBar").change(function highlight(){

  var val = $("#SearchBar").val();
   $(".filter a:contains('"+val+"')").each( function( i, element ) {
     var content = $(element).text();
      content = content.replace( val, '<span style="background-color:red">' + val + '</span>' );
      $(element).html( content );
    });
});



});



    // $("li").click(function(){
    //     $(highlight());
    // });
