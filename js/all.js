$(document).ready(function () {
    $('.arrow').click(function (e) { 
        e.preventDefault();
        $('.modal-content').toggleClass('active');
    });

    //點籍reply紐， 填寫資料打開
    $('.btn-reply').click(function (e) { 
       e.preventDefault();
        $('.tab-content').addClass('active');
   });
   
    //    點擊cancel紐，填寫資料關閉
    $('.btn-cancel').click(function (e) { 
       e.preventDefault();
        $('.tab-content').removeClass('active');
   });

});