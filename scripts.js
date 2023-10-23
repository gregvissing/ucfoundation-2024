// Video Play/Pause functionality
function initVimeoVideo() {
	var iframe = $("#player1")[0];
	var player = new Vimeo.Player(iframe);

	// Close using the close icon
	$(".pause").on("click", function () {
		var method = "pause";
		player[method]();
		$(".play, .pause").toggleClass("disabled");
	});

	// Close using the modal
	$(".play").on("click", function () {
		var method = "play";
		player[method]();
		$(".play, .pause").toggleClass("disabled");
	});
}

initVimeoVideo();

// MAIN - margin top amount

var headerHeight = $("header").outerHeight() + "px";

$("main").css("margin-top", headerHeight);

// SEARCH - toggle show/hide
var $searchToggle = $("li.search > a, .fa.fa-times");

$searchToggle.click(function (event) {
	event.preventDefault();	
	$("#search").toggle();
});

// Added chevron to parent links for sub-menu

var $window = $(window),
	$parentNavLink = $("nav > ul > li.parent > a"),
	$searchNavLink = $("nav > ul > li.search > a");

$parentNavLink.append('<span><i class="fa fa-chevron-up" aria-hidden="true"></i></span>');
$searchNavLink.append('<span><i class="fa fa-search" aria-hidden="true"></i></span>');

$parentNavLink.click(function (event) {
	event.preventDefault();	
	
	$(this).parent().toggleClass("open");
});

// ************************
// Mobile functionality
// ************************

// Rotate chevon on click
// const subMenuExpand = document.querySelectorAll("li.parent > a > span");

// for (const subMenu of subMenuExpand) {
//   	subMenu.addEventListener("click", function(event) {
    	
//   	})
// }

var trigger = $(".hamburger"),
	overlay = $(".overlay"),
	nav = $("ul.nav.navbar-nav"),
	expandToggle = $("ul.nav > li > a > span"),
	isClosed = false;

trigger.click(function () {
	hamburger_cross();
});

expandToggle.click(function (event) {
	event.preventDefault();
	$(this).find("i").toggleClass("rotate");
	$(this).parent().toggleClass("open");
	//var parentHeight = $(this).parent().height(),
	//subNavHeight = $(this).parent().next().height();
	//$('nav ul li a:not(:only-child)').click(function(e) {

	$(this).parent("a").next(".nccUlMenuSub1").slideToggle();
	// Close one dropdown when selecting another
	//$('.nccUlMenuSub1').not($(this).parent('a')).hide();
	//e.stopPropagation();
	//});
	//console.log(subNavHeight);
});

// Reduce height of header

// ScrollTrigger.create({
// 	trigger: "body",
// 	start: "40% bottom",
// 	toggleClass: "active"
// });

// Scroll to top
/*
$(".scrollToTop").click(function (e) {
	e.preventDefault();
	$("html, body").animate(
		{
			scrollTop: 0
		},
		300
	);
	return false;
});
*/

/**
 * The link that triggers the
 * back to top behaviour.
 * @type {HTMLElement}
 */
const backToTopButton = document.querySelector(
	'[data-js-hook="back-to-top-button"]'
);

/**
 * A list of all focusable elements
 * on the page.
 * @type {NodeList}
 */
const focusableElements = document.querySelectorAll(
	'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

/**
 * The options used in the native
 * scrollTo method.
 * @type {Object}
 */
const scrollOptions = {
	top: 0,
	left: 0,
	behavior: "smooth"
};

/**
 * Whether the device supports
 * smooth scroll, or not.
 * @type {Boolean}
 */
const supportsNativeSmoothScroll =
	"scrollBehavior" in document.documentElement.style;

/**
 * Handles moving the user back to the
 * top of the document.
 * @param event the event object passed in when
 * clicking on the button / link.
 */
function moveToTop(event) {
	event.preventDefault();

	// Scroll to top.
	supportsNativeSmoothScroll
		? window.scrollTo(scrollOptions)
		: window.scrollTo(scrollOptions.left, scrollOptions.top);

	// Focus the first focusable element.
	focusableElements[0].focus({
		preventScroll: true
	});
}

backToTopButton.addEventListener("click", moveToTop);
// https://jhartshorne.co.uk/posts/back-to-top/

// Gallery - Pinned image 

const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

gsap.set(photos, { yPercent: 101 });

const allPhotos = gsap.utils.toArray(".desktopPhoto");

// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {
	// this setup code only runs when viewport is at least 600px wide
	// console.log("desktop");

	ScrollTrigger.create({
		trigger: ".gallery",
		start: "top top",
		end: "bottom bottom",
		pin: ".right"
	});

	//create scrolltrigger for each details section
	//trigger photo animation when headline of each details section
	//reaches 80% of window height
	details.forEach((detail, index) => {
		let headline = detail.querySelector("h2");
		let animation = gsap
			.timeline()
			.to(photos[index], { yPercent: 0 })
			.set(allPhotos[index], { autoAlpha: 0 });
		ScrollTrigger.create({
			trigger: headline,
			start: "top 80%",
			end: "top 50%",
			animation: animation,
			scrub: true,
			markers: false
		});
	});
	return () => {
		// optional
		// custom cleanup code here (runs when it STOPS matching)
		// console.log("mobile");
	};
});

//  Mobile menu toggle open/collapse

function toggleClass() {
	let menuButton = document.getElementById("menu");
	let navigation = document.querySelector("nav");
	menuButton.classList.toggle("open");
	navigation.classList.toggle("open");
}

/*
WEBSITE INSPIRATION

// UNIVERSITY RELATED

https://www.uc.edu/about/president/communications/goetz.html

https://www.report.uofcincycancercenter.org/

https://www.webaward.org/category/University/best-university-websites.html

https://www.stevenson.edu/ (navigation bar)

https://www.ivytech.edu/

https://www.ciachef.edu/

https://www.mmm.edu/

https://www.upb.pitt.edu/?sfw=pass1695994661

https://www.suffolk.edu/

https://www.ic.edu/

https://www.gc.cuny.edu/

https://www.luther.edu/

// NOT UNIVERSITY RELATED

https://victor.work/


http://www.webaward.org/

https://www.cssdesignawards.com/

https://business.adobe.com/blog/basics/best-website-design-examples

https://winners.webbyawards.com/winners/websites-and-mobile-sites/features-design/best-use-of-animation-or-motion-graphics?years=0

https://www.awwwards.com/websites/animation/

https://www.schoolofmotion.com/blog/10-websites-with-great-animation


*/

/*

EFFECTS I LIKE

https://codepen.io/sndrsmn/pen/mRaRwv?editors=1100

*/
