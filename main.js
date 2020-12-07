$(document).ready(function(){
  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      document.getElementById('gir').style.top = '65px';
    }
    else{
      $(".navbar").removeClass("sticky");
      document.getElementById('gir').style.top = '0'; 
    }
  });
  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
  /******** AD. ***********/
  $(".ad").delay(2000).show(100);
  $("#closeBtn").click(function(){
    $(".ad").animate({left: '-100%', opacity: '0'},500).slideUp();
  });
  $(".slide__block").delay(2000).slideDown(400);
  function loop() {
    $('#ad__img').animate({width:'140px', height:'140px',opacity:'1'},800);
    $('#ad__img').animate ({
      width:'120px',
      height:'120px',
      opacity:'0.6'
    }, 800, 'linear', function() {
      loop();
    });
  }
  loop();
  $("#closeBtn_2").click(function(){
    $(".slide__block").slideUp();
    $('#ad__img').stop();
  });
 /* function toggleAutoplay(){
    var vid = document.getElementById('video2');
    if (vid.autoplay == true) {
      vid.autoplay = false;
    } else {
      vid.autoplay = true;
    }
    vid.load();
  };*/
  $(".form_info_block").fadeOut();
  $('#resetBtn').click(function(){
    reset();
    validate();
  });
  function reset() {
    document.getElementById("form").reset();
  }
  const form = document.getElementById('inp_email');
  $(".btn").click(function(){
    const email = document.getElementById('email').value;
    if (email != "" && email != null && email != NaN && form.classList.contains('valid')) {
      $(".form_info_block").delay(200).fadeIn().delay(1500);
      $(".form_info_block").fadeOut().delay(1500);
      reset();
      validate();
    } else {
      reset();
      validate();
    }
  });
  $(document).snowfall({flakeCount: 300, flakeColor: "#66B8F1", image :"img/snow3.png", minSize: 10, maxSize:15});
  function gir() {  
    nums = document.getElementById('nums_1').innerHTML  
    if(nums == 1) {document.getElementById('gir').className='gir_1';document.getElementById('nums_1').innerHTML='2'}  
    if(nums == 2) {document.getElementById('gir').className='gir_2';document.getElementById('nums_1').innerHTML='3'}  
    if(nums == 3) {document.getElementById('gir').className='gir_3';document.getElementById('nums_1').innerHTML='1'}  
  }  
  setInterval(function(){gir()}, 500)
  var audio = document.getElementById('ne_audio');
  audio.volume = 0.2;
});