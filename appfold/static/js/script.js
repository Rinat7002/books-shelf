var main_id = document.querySelector("main").id;
var navmenu = document.getElementsByClassName("menu")[0];
var navlist = navmenu.getElementsByTagName("li");
var headtext = document.getElementById("headname");
var menuelem;
var alerttext = "";

//Смена наименования раздела в заголовке H1
switch(main_id) {
	case 'general':
		menuelem = navlist[0];
		break;
	case 'account':
		menuelem = navlist[1];
		break;
	case 'books':
		menuelem = navlist[2];
		break;
	case 'articles':
		menuelem = navlist[3];
		break;
	case 'about-us':
		menuelem = navlist[4];
		break;
	default:
		menuelem = navlist[0];
}



//Смена наименования раздела в заголовке H1
headtext.innerHTML = menuelem.textContent;


//Анимацию главного навигационного меню
$(document).ready(function() {
    $(".menu li").mouseenter(function () {
        $(this).addClass("active");
        $(this).find('a').addClass("active");
    }).mouseleave(function () {
        var pageTitle = menuelem.textContent.replace(/^\s+|\s+$/g, ''); // Получаем название текущей страницы
        var menuItemName = $(this).find('a').text(); // Получаем название элемента меню, соответствующего текущему
		// console.log(pageTitle);
		// console.log(menuItemName);
        if (menuItemName !== pageTitle) {
            $(this).removeClass("active");
            $(this).find('a').removeClass("active");
        }
    });
});

$(document).ready(function() {
	$(".hidebox p").hide();
	// $(".hidebox h3").css("background-color", "#29c5e6");
});
$(".hidebox h3").click(function () {
	$(this).next("p").hide("slow");
	$(this).css("background-color", "#3A006D");
	$(this).css("color", "#fff");

});
$(".hidebox h3").dblclick(function () {
	$(this).next("p").show("slow");
	$(this).css("background-color", "#E4DC23");
	$(this).css("color", "#000000");

});

const images = document.querySelectorAll('.article-base__img, .book-img');
//book-img
images.forEach(function(img) {
    img.addEventListener('mouseover', function() {
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', function() {
        img.style.transform = 'scale(1)';
    });
});
