// メニュー
var headerH = $("#header").outerHeight(true);//headerの高さを取得    

//スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
function FixedAnime() {
  //ヘッダーの高さを取得
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//ヘッダーの高さを超えたら
        $('#header').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
  }else{
        $('#header').removeClass('HeightMin');//HeightMinというクラス名を除去
  }    
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
$('.gnavi li a').click(function () {
  var headerVal = $("#header").outerHeight(true); //現在のheaderの高さを取得    

  //ヘッダーが高さの状態を取得してスクロールする範囲を調整する
  var scroll = $(window).scrollTop(); //スクロール
  var adjust = 0            //調整の変数
  if(scroll <= headerVal ){     //スクロールとヘッダーの高さを取得
    adjust = 70;          //スクロール値がヘッダーの高さ以内であれば調整変数に70を入れる
  }
  
  var elmHash = $(this).attr('href'); //hrefを取得
  var pos = $(elmHash).offset().top-headerVal-adjust; //クリックしたheader分の高さと調整分を引いた高さまでスクロール
  
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});

$('.menu-content a[href]').on('click', function(event) {
    $('.menu-btn').trigger('click');
});



//カルーセル
window.addEventListener('load', () => {
    const elem = document.querySelector('.swiper-container');
    if (elem === null) return;
    const swiperParams = {
      loop: true, // ループさせる
      effect: 'fade', // フェードのエフェクト
      autoplay: {
        delay: 4000, // ４秒後に次の画像へ
        disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
      },
      speed: 2000, // ２秒かけながら次の画像へ移動
      allowTouchMove: false, // マウスでのスワイプを禁止
    };
    const swiper = new Swiper('.swiper-container', swiperParams);
});


//ギャラリー　フェード
$(function(){
   $(window).on('load scroll', function() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.8);

      $(".show").each(function() {
         if($(this).offset().top < scrollPos) {
            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
         }
      });
   });
});

//ギャラリー　ソート
if($('.tab_wrap')){
 $('.tab_wrap').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
  });
  //ギャラリー　切り替え
  $('.tab_wrap').on('beforeChange',function(event, slick, currentSlide, nextSlide){
    var nextPanel = $('[data-slick-index=' + nextSlide + ']');
    var target = '#tab_'+$(nextPanel).find('input').attr('id');
    $('#works_box > div > ul.grid').css('display','none');
    $(target).css('display','block');
    console.log(target);
  })
}