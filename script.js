// jquery scroll effect

$(document).ready(function () {

    $(window).scroll(function () {

        if (this.scrollY > 20) {

            $('.nav-wrapper').addClass("sticky");
        } else {

            $('.nav-wrapper').removeClass("sticky");

        }
    });

  

});

// JQuery scroll effect end



// var instance = M.Sidenav.getInstance(elem);


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
// //     var instances = M.Sidenav.init(elems, options);
// //   });

//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });