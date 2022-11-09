let btn = document.querySelector('.toggle-menu');
let menu = document.querySelector('.links');

btn.onclick = function(){
this.classList.toggle('menu-active');
menu.classList.toggle('open')
};

document.addEventListener('click',function(e){

    if(e.target !== btn && e.target !== menu ){

     if(menu.classList.contains('open')){
         btn.classList.toggle('menu-active');
         menu.classList.toggle('open')
     }
     }
}) ;
menu.onclick = function(e){
    e.stopPropagation();
    
};

$(document).ready(function(){
    $('a').click(function(){
        $('a').removeClass()
        $(this).addClass('active');
    })
});

//skills 
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHight - windowHeight)){

        let allSkills = document.querySelectorAll('.skills-box .skill-progress span');
        allSkills.forEach(skill =>{
            skill.style.width = skill.dataset.progress;
        })

    }
};
$(window).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 300){
            $('.first-up').fadeIn(1000);
        }else{
            $(".first-up").fadeOut();
        }
    })
});
$(window).ready(function(){
    $(".first-up").on('click', function(){
        $(window).scrollTop(0);
    });
});
