$(document).ready(function(){

    $('#cricket').waypoint(function(direction){
        $('.cric').addClass('animated zoomIn')
    },{
        offset:'50%'
    });
});