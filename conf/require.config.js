require.config({
	paths: {
		text: "../vendor/requirejs/text",
		css: "../vendor/requirejs/css",
		jquery: "../vendor/jquery/jquery-1.11.2",
		bootstrap: '../vendor/bootstrap-3.3.5/js/bootstrap',
		uui: "../vendor/uui/js/u",
		director:"../vendor/director/director"
	},
	shim: {
		'bootstrap': {
			deps: ["jquery"]
		},
	},
	waitSeconds: 0
});
