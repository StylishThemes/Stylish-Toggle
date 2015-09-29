// ==UserScript==
// @name         Stylish Toggle Script
// @version      0.0.1-beta
// @description  Companion Script for Stylish themes
// @namespace    https://github.com/StylishThemes
// @include      http*github.com*
// @grant        none
// @updateURL    https://raw.github.com/StylishThemes/Stylish-Toggle/master/stylish-toggle.user.js
// @downloadURL  https://raw.github.com/StylishThemes/Stylish-Toggle/master/stylish-toggle.user.js
// ==/UserScript==

(function(){
'use strict';

	var stylishToggle = stylishToggle = {

		selector : 'style.stylish[id*=stylish]',

		init : function() {
			if ( document.querySelectorAll( this.selector ).length ) {
				this.addToggle();
			}
		},
		toggle : function( event ) {
			var indx,
				stylish = document.querySelectorAll( stylishToggle.selector ),
				len = stylish.length;
			for ( indx = 0; indx < len; indx++ ) {
				stylish[ indx ].disabled = !event.target.checked;
			}
		},
		addToggle : function() {
			// flat toggle button from http://codepen.io/mallendeo/pen/eLIiG/
			var toggle = document.createElement( 'div' ),
				html = '<input class="stylish-toggle stylish-toggle-flat" id="stylish-toggle-checkbox" type="checkbox" checked>' +
				'<label class="stylish-toggle-btn" for="stylish-toggle-checkbox"></label>' +
				// toggle css
				'<style>' +
				'.stylish-toggle-wrap { position: fixed; bottom: 2px; left: 2px; background: rgba(0,0,0,0.2);' +
					'opacity: 0.3; border-radius: 2em; }' +
				'.stylish-toggle-wrap:hover { opacity: 1; }' +
				'.stylish-toggle { display: none; }' +
				'.stylish-toggle, .stylish-toggle:after, .stylish-toggle:before, .stylish-toggle *, .stylish-toggle *:after,' +
					' .stylish-toggle *:before, .stylish-toggle + .stylish-toggle-btn { box-sizing: border-box; }' +
				'.stylish-toggle::-moz-selection, .stylish-toggle:after::-moz-selection, .stylish-toggle:before::-moz-selection,' +
					'.stylish-toggle *::-moz-selection, .stylish-toggle *:after::-moz-selection, .stylish-toggle *:before::-moz-selection,' +
					'.stylish-toggle + .stylish-toggle-btn::-moz-selection { background: none; }' +
				'.stylish-toggle::selection, .stylish-toggle:after::selection, .stylish-toggle:before::selection,' +
					'.stylish-toggle *::selection, .stylish-toggle *:after::selection,.stylish-toggle *:before::selection,' +
					'.stylish-toggle + .stylish-toggle-btn::selection { background: none; }' +
				'.stylish-toggle + .stylish-toggle-btn { outline: 0; display: block; width: 4em; height: 2em; position: relative;' +
					'cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }' +
				'.stylish-toggle + .stylish-toggle-btn:after, .stylish-toggle + .stylish-toggle-btn:before {' +
					'position: relative; display: block; content: ""; width: 50%; height: 100%; }' +
				'.stylish-toggle + .stylish-toggle-btn:after { left: 0; background: #777; }' +
				'.stylish-toggle + .stylish-toggle-btn:before { display: none; }' +
				'.stylish-toggle:checked + .stylish-toggle-btn:after { left: 50%; }' +
				'.stylish-toggle-flat + .stylish-toggle-btn { padding: 2px; -webkit-transition: all .2s ease;' +
					'transition: all .2s ease; background: transparent; border: 4px solid #777; border-radius: 2em; }' +
				'.stylish-toggle-flat + .stylish-toggle-btn:after { -webkit-transition: all .2s ease;' +
					'transition: all .2s ease; content: ""; border-radius: 1em; }' +
				'.stylish-toggle-flat:checked + .stylish-toggle-btn { border: 4px solid #7FC6A6; }' +
				'.stylish-toggle-flat:checked + .stylish-toggle-btn:after { left: 50%; background: #7FC6A6; }' +
				'</style>';

			toggle.classList.add( 'stylish-toggle-wrap' );
			toggle.title = "Toggle Applied Stylish Theme";
			toggle.innerHTML = html;
			document.querySelector( 'body' ).appendChild( toggle );
			toggle.querySelector( 'input' ).addEventListener( 'change', this.toggle );
		}

	};

	stylishToggle.init();

})();
