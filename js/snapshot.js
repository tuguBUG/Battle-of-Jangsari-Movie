$(document).ready(function(){

    var $box = `
    <div class="box"></div>
    `;
    var $cont = [];

    for(t=0;t<20;t++){
        $("#snapshots .wrap").append($box);
        if(t > 8){
            $cont.push("cont_"+(t+1));
            
        }else{
            $cont.push("cont_0"+(t+1));
        }
        $("#snapshots .box").eq(t).css("background-image","url(./img/"+$cont[t]+".jpg)");
    };
    $("#snapshots .box").eq(5).nextAll().hide();
    $("#snapshots button").click(function(){
        $(this).hide();
        $("#snapshots .box").eq(5).nextAll().show();
    });

    







});