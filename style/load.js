
$(document).ready(function() {
    "use strict";
    $.getJSON( "./data/skills.json", function( data ) {
        data.map(skill =>{
           $("#skills").append(`<li>
                    <span style="margin-left: 0px;">${skill.label}</span> 
                    <span style="width: ${skill.ratio}%;
                    position: absolute;font-size:13px;
                    right: 0;">${skill.ratio} %</span>                                   
                    <div class="progress">
                        <div class="determinate" style="width: ${skill.ratio}%;"><i class="fa fa-circle"></i></div>
                    </div>
            </li>`);   
        })
    });
   
    $('#en').click(function(){ 
        $.getJSON( "./data/en.json", function( data ) {
            console.log('data',data.workExperience);
            $(".skills").html(data.skills)
            $(".work_experience").html(data.workExperience)
            
        });
    })

    $('#vi').click(function(){ 
        console.log('dlldld');
        $.getJSON( "./data/vi.json", function( data ) {
            console.log('data',data);
            $(".skills").html(data.skills)
            $(".work_experience").html(data.workExperience)
        });
    })

})