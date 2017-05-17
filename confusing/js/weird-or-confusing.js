function uselessWebButton( button, popup ) {

	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;
	var randomRange = 10;

	var sitesList = [
		['http://amzn.to/29C2pv8'], // Forest Face
		['http://amzn.to/29C2UVZ'], // Banana Slicer
		['http://amzn.to/29ai6wF'], // Confusing horn thing
		['http://amzn.to/29ab86l'], // Ipad holder what?
		['http://amzn.to/29dBj1E'], // Nose aerobics?
		['http://amzn.to/29haaZh'], // Security checkpoint lego -_-
		['http://amzn.to/29dAohT'], // Weird AF dog costume
		['http://amzn.to/29C44AU'], // Pickle
		['http://amzn.to/29ahreM'], // Cat DVD
		['http://amzn.to/29hbzz7'], // Bacon bandages
		['http://amzn.to/29ha83L'], // Book of random numbers
		['http://amzn.to/29hazez'], // Crafting with cat hair
		['http://amzn.to/29C4KGH'], // Hair hat
		['http://amzn.to/29haxmP'], // Just cheese... on amazon
		['http://amzn.to/29hb8oF'], // Gift of nothing
		['http://amzn.to/29C50Wa'], // Nap Sack
		['http://amzn.to/29dBkTh'], // Velcro head game
		['http://amzn.to/29hbc7N'], // Unicorn meat
		['http://amzn.to/29aaIgm'], // Weird lying down glasses
		['http://amzn.to/29fdT89'], // Electric Spin the Bottle
		['http://amzn.to/29aaFkK'], // Goats in tree's (multilingual)
		['http://amzn.to/29haxDn'], // wtf keyboard
		['http://amzn.to/29C2EGL'], // Nick Cage pillowcase
		['http://amzn.to/29ai3kl'], // Dancing with cats
		['http://amzn.to/29haR4W'], // Lions nads
		['http://amzn.to/29ahSpk'], // Weird UFO detector
		['http://amzn.to/29hb0W0'], // Different ways to poop!
		['http://amzn.to/29dAaYa'], // Finger lights
		['http://amzn.to/29ah97K'], // Graphite Pencil thing
		['http://amzn.to/29hc5wS'], // Hand underpants
		['http://amzn.to/29ai9sq'], // Knitting with dog hair
		['http://amzn.to/29C35Ru'], // How to avoid large ships (book)
		['http://amzn.to/29C4ur8'], // fart stopper
		['http://amzn.to/29ffefa'], // Shittens
	];

	var sites = null;

	// Prepares and binds the button
	var init = function() {

		button.onclick = onButtonClick;
		sites = sitesList.slice(0);

		// Check for past data
		if ( localStorage[ 'sites' ] !== undefined ) {
			loadSites();
		}
	};

	// Selects and removes the next website from the list
	var selectWebsite = function() {

		var site, range, index;
		
		range = randomRange > sites.length ? sites.length : randomRange;
		index = Math.floor( Math.random() * range );

		site = sites[index];
		sites.splice( index, 1 );

		return site;
	};

	// Opens the given url in a new window
	var openSite = function( url ) {
		window.open( url );
	};

	var onButtonClick = function() {

		var url = selectWebsite()[0];
    	openSite( url );

    	// User has visited ALL the sites... refresh the list.
    	if ( sites.length == 0 ) {
				sites = sitesList.slice(0);
    	}

    	storeSites();
	};

	// Save the current list of sites for the new user.
	var storeSites = function() {
		localStorage[ 'sites' ] = JSON.stringify( sites );
	}

	// Load the list of sites, so new users see new sites.
	var loadSites = function() {
		sites = JSON.parse( localStorage['sites'] );
	};

	init();
}
