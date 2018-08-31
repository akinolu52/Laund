$(document).ready(function(){
    $('.getStarted input').on("keypress", function(e) {
        let current = $(this).data('id')
        console.log(current)
        if (e.keyCode == 13) {
            $(`.div-${current}`).css({
                'visibility': 'hidden'
            });
            // toggle autofocus
            $(`.input-${current}`).removeAttr('autofocus');
            $(`.div-${current + 1}`).css({
                'visibility': 'visible',
            })

            $(`.input-${current + 1}`).css({
                'transition': 'all 0.5s cubic-bezier(0.1, 0.45, 0.1, 0.85) 0.4s',
            }).attr('autofocus');
            
            // console.log($(this).data('id'))
        }

    });
});

