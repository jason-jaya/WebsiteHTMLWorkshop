$( document ).ready(function() {

    jQuery('.player').on('click', function () {

        if(jQuery(this).hasClass('active')) {
            jQuery(this).find('audio').trigger('pause');
            jQuery(this).removeClass('active');
        } else {
            jQuery(this).find('audio').trigger('play');
            jQuery(this).addClass('active');
        }
    });

});
