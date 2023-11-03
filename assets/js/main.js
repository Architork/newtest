/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);


function selectTab(tabIndex) {
  const tabs = Array.from(document.getElementsByClassName("left-tab"));
  tabs.forEach((tab, index) => {
    if (index === tabIndex) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

function selectSubtab(subtabIndex) {
  const subtabs = Array.from(document.getElementsByClassName("left-subtab"));
  subtabs.forEach((subtab, index) => {
    if (index === subtabIndex) {
      subtab.classList.add("active");
    } else {
      subtab.classList.remove("active");
    }
  });
}

function showTextAndBox(subtabIndex) {
  const textAndBox = document.getElementsByClassName("text-and-box")[subtabIndex];
  textAndBox.style.display = "block";
}

function hideTextAndBox(subtabIndex) {
  const textAndBox = document.getElementsByClassName("text-and-box")[subtabIndex];
  textAndBox.style.display = "none";
}



function updateSubCombo() {
	var mainCombo = document.getElementById("mainCombo");
	var subCombo = document.getElementById("subCombo");
  
	var selectedValue = mainCombo.value;
	subCombo.innerHTML = ""; // Clear existing options
  

	  // Add placeholder option
	  var placeholderOption = document.createElement("option");
	  placeholderOption.value = "";
	  placeholderOption.textContent = "Select an option";
	  placeholderOption.disabled = true;
	  placeholderOption.selected = true;
	  subCombo.appendChild(placeholderOption);


	  
	if (selectedValue === "Environment") {
	  addOption(subCombo, "door", "Doors");
	  addOption(subCombo, "window", "Windows");
	  addOption(subCombo, "floor", "Floor");
	  addOption(subCombo, "ceiling", "Ceiling");
	} else if (selectedValue === "Cabinet-Nessesary") {
	  addOption(subCombo, "cabdoor", "Door Form");
	  addOption(subCombo, "lightstyle", "Lighting Style");
	} else if (selectedValue === "Cabinet") {
	  addOption(subCombo, "category", "Category");
	  addOption(subCombo, "parameters", "Parameters");
	  addOption(subCombo, "butpart", "Bottum-Part");
	  addOption(subCombo, "toppart", "Top-Part");
	  addOption(subCombo, "lighting", "Lighting");
	  addOption(subCombo, "appliance", "Appliance");
	} else if (selectedValue === "Style") {
	  addOption(subCombo, "obligatory-location", "Obligatory-Location");
	  addOption(subCombo, "main-scattering", "Main-Scattering");
	  addOption(subCombo, "remaining-scattering", "Remaining-Scattering");
	  addOption(subCombo, "appliance", "Appliance");
	  addOption(subCombo, "corners", "Corners");
	  addOption(subCombo, "entrance", "Entrances");
	  addOption(subCombo, "molding", "Molding");
	} else if (selectedValue === "Island") {
		addOption(subCombo, "isl-partitions", "Island-Partitions");
		addOption(subCombo, "isl-obligatory-location", "Island-Obligatory-Location");
		addOption(subCombo, "isl-main-scattering", "Island-Main-Scattering");
		addOption(subCombo, "isl-remaining-scattering", "Island-Remaining-Scattering");
		addOption(subCombo, "isl-appliance", "Island-Appliance");
		addOption(subCombo, "isl-corners", "Island-Corners");
		addOption(subCombo, "isl-molding", "Island-Molding");
	}
  }
  
  function addOption(selectElement, value, text) {
	var option = document.createElement("option");
	option.value = value;
	option.textContent = text;
	selectElement.appendChild(option);
  }



  function showTextboxes() {
	var subCombo = document.getElementById("subCombo");
	var textboxesdoor = document.getElementById("textboxesdoor");
	var textboxeswindow = document.getElementById("textboxeswindow");
	var textbox1 = document.getElementById("textbox1");
	var textbox2 = document.getElementById("textbox2");
	var textbox3 = document.getElementById("textbox3");
  
	var textbox4 = document.getElementById("textbox4");
	var textbox5 = document.getElementById("textbox5");
	var textbox6 = document.getElementById("textbox6");
	// Retrieve the selected sub option
	var selectedSubOption = subCombo.value;
  


	textbox1.classList.add("hide");
	textbox2.classList.add("hide");
	textbox3.classList.add("hide");
	textbox4.classList.add("hide");
	textbox5.classList.add("hide");
	textbox6.classList.add("hide");
	textboxesdoor.style.display = "none";
	textboxeswindow.style.display = "none";
	// Show or hide the textboxes based on the selected sub option
	if (selectedSubOption === "door") {
	  textbox1.classList.remove("hide");
	  textbox2.classList.remove("hide");
	  textbox3.classList.remove("hide");
	  textboxesdoor.style.display = "flex";
	} else if (selectedSubOption === "window") {
	  textbox4.classList.remove("hide");
	  textbox5.classList.remove("hide");
	  textbox6.classList.remove("hide");
	  textboxeswindow.style.display = "felx";
	} else {
	  textbox1.classList.add("hide");
	  textbox2.classList.add("hide");
	  textbox3.classList.add("hide");
	  textbox4.classList.add("hide");
	  textbox5.classList.add("hide");
	  textbox6.classList.add("hide");
	  textboxesdoor.style.display = "none";
	  textboxeswindow.style.display = "none";
	}
  }