import 'jquery';

import './tricks/index.js';
import './navigation/index.js';
import './addFiles/index.js';
import './updateFiles/index.js';
import './dropzone/index.js';
import './datatables/index.js';
import './user/index.js';
import './pagination/index.js';

$(document).ready( function () {
    // Add return on top button
    $('body').append('<div id="returnOnTop" title="Retour en haut"><i class="fas fa-angle-up" style="font-size:30px"></i></div>');
    
    // On button click, let's scroll up to top
    $('#returnOnTop').click( function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
});

$(window).scroll(function() {
    // If on top fade the bouton out, else fade it in
    if ( $(window).scrollTop() == 0 )
        $('#returnOnTop').fadeOut();
    else
        $('#returnOnTop').fadeIn();
});