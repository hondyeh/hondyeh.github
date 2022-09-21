$(document).ready(function(){


//Калькулятор

    function calculate(){
        let sum=parseInt( $("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($('#select3 option:selected').val());
        let days = parseInt( $("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($('#select3 option:selected').attr("days"));
        $(".sroki .nol").text(days);
        $(".stoimost .nol").text(sum);
    }
    $("select").on("change", function(){
       calculate();
    });
    calculate();

//


//Плавные якори
// $('a[href^="#"]').click(function(){
//     let valHref = $(this).attr("href");
//     $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
//     return false;
// });


//Отложенная анимация

    let options = {threshold:[0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });


 function onEntry (entry){
     entry.forEach(change => {
         if (change.isIntersecting){
             change.target.classList.add('show-animation');
         }
     });
 };
//

//Отложенная загрузка картинки

let optionsImg = 
{threshold: [1]};
let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
let elementsImg = $('.kart');

elementsImg.each((i, el) => {
    observerImg.observe(el);
});

    function onEntryImg(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src;
        }
    });
}


// Модальное окно

setTimeout(function(){ 
    modalwin = document.getElementById('modal-content');
    modalwin.style.display="block"; 
    document.getElementById("modal-close").addEventListener("click", function(){
        modalwin.style.display="none";            
    });
}, 10000);


//Бегущие цифры
let optionsStat = {
    threshold: [1]
};
let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
let elementsStat = $('.stat');

elementsStat.each((i, el) => {
    observerStat.observe(el);
});
        function onEntryStat(numb_start){

        var numb_start = $(".row justify-content-center text-center").text(); // Получаем начальное число
         
        $({numberValue: numb_start}).animate({numberValue: 120}, {
        
            duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
            easing: "linear",
            
            step: function(val) {
            
                $("#out-1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                
            }
            
        });
    }
    
    let optionsSta = {
        threshold: [1]
    };
    let observerSta = new IntersectionObserver(onEntrySta, optionsStat);
    let elementsSta = $('.stat2');
    
    elementsSta.each((i, el) => {
        observerSta.observe(el);
    });
    function onEntrySta(numb_start){

            var numb_start = $(".row justify-content-center text-center").text(); // Получаем начальное число
             
            $({numberValue: numb_start}).animate({numberValue: 4600}, {
            
                duration: 3000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                
                step: function(val) {
                
                    $("#out-2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    
                }
                
            });
        }
        let optionsSt = {
            threshold: [1]
        };
        let observerSt = new IntersectionObserver(onEntrySt, optionsSt);
        let elementsSt = $('.stat2');
        
        elementsSt.each((i, el) => {
            observerSt.observe(el);
        });
        function onEntrySt(numb_start){
   
           var numb_start = $(".row justify-content-center text-center").text(); // Получаем начальное число
            
           $({numberValue: numb_start}).animate({numberValue: 340}, {
           
               duration: 2300, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
               easing: "linear",
               
               step: function(val) {
               
                   $("#out-3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                   
               }
               
           });
       }
      let optionsS = {
             threshold: [1]
         };
         let observerS = new IntersectionObserver(onEntryS, optionsS);
         let elementsS = $('.stat2');
         
         elementsS.each((i, el) => {
             observerS.observe(el);
         });
  function onEntryS(numb_start){

          var numb_start = $(".row justify-content-center text-center").text(); // Получаем начальное число
           
          $({numberValue: numb_start}).animate({numberValue: 23}, {
          
              duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
              easing: "linear",
              
              step: function(val) {
              
                  $("#out-4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                  
              }
              
          });
      }
//
//Картинки в модальном окне
$(function() {
    $('.kart').magnificPopup({ type: 'image' });
});

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();


    $('.section').each((i, el) => {

        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $('nav a').each((i, el) => {
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });

            $('nav li:eq(' + i + ')').find('a').addClass('active');
        }

    });
});

    


});


