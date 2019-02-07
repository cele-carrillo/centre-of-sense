/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


$(window).load(function () {
    emailjs.init('user_zrpCVofqoupw5dx1HBxww');
});

// jQuery to keep track of the current section when switching languages
$("ul.nav").on('activate.bs.scrollspy', function () {
   var hash = $(this).find("li.active a").attr("href");

   $("a.lang-choice").each(function() {
      var base = this.href.split("#")[0];
      if (base != null && hash != null){
        this.href = base.concat(hash);
      }
    });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

//Contact form
function onContactSuccess() {
    $('#contact-form')[0].reset();

    $('#success').html("<div class='alert alert-success'>");
    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
    $('#success > .alert-success')
        .append("<strong>Thanks for your message, we'll be in touch soon!</strong>");
    $('#success > .alert-success')
        .append('</div>');
}

function onContactError(error) {
    console.log(error);
    $('#success').html("<div class='alert alert-danger'>");
    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
    $('#success > .alert-danger').append("<strong>Your message could not be sent, try again later or send us an email to <a href='mailto:hello@centreofsense.com'>hello@centreofsense.com</a>.</strong>");
    $('#success > .alert-danger').append('</div>');
}

$('#contact-form').submit(function (e) {
    e.preventDefault();
    emailjs.sendForm('default_service', 'contact_form', this)
        .then(function () {
            onContactSuccess();
        }, function (error) {
            onContactError(error);
        });
});