$(document).ready(function () {
    $('.storage-action__item-share').mouseover(function (e) {
        $('.storage-action__links').removeClass('display-none').siblings().addClass('display-none');
    });
    $('.storage-action__item-share').mouseout(function (e) {
        $('.storage-action__links').addClass('display-none').siblings().removeClass('display-none');
    });
});

function messageBackUp(){
    alert("BackUp was created successfully!!!");
}