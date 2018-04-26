(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var options = [
  { selector: '.class', offset: 200, callback: customCallbackFunc },
  {
    selector: '.other-class', offset: 200, callback: function () {
      customCallbackFunc();
    }
  },
];
