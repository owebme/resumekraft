<section-auth class="oScreen zIndex-100 pos-fixed" data-open={ active }>

    <auth-signin></auth-signin>

    <auth-remember></auth-remember>

    <auth-signup></auth-signup>

<script>

    var $ = this;

    $.active = false;

    $.on("mount", function(){
        if (location.href.match(/\?signin/)){
            setTimeout(function(){
                $.open("signin");
            }, 5);
        }
    });

    $.open = function(section){
        $.active = true;
        var modal = $.tags["auth-" + section];
        if (modal && modal.open) modal.open();
        $.update();
    };

    $.close = function(){
        $.active = false;
        $.update();
    };

</script>

</section-auth>
