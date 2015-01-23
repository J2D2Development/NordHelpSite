//angular app to control Nord help section nav
(function() {
	var app = angular.module('helpapp', [])

	//section for master controller
	app.controller('MasterController', function MasterController() {
		var master = this;

		//controls switching between tags on individual help page
		(function panelSwitcher() {
			master.tab = 0;
			master.msg = 'General Info';

			master.selectTab = function(setTab, setMsg) {
				master.tab = setTab;
				master.msg = setMsg;
				window.scroll(0,0);
			};

			master.isSelected = function(checkTab) {
				return master.tab === checkTab;
			};
		})();

		//jq function to create 'back to top' button
		(function backToTop() {
			$(window).scroll(function() {
				if($(this).scrollTop() > 200) {
					$('.backToTop').fadeIn();
				} else {
					$('.backToTop').hide();
				}
			});
			$('.backToTop').click(function() {
				$('html, body').animate({scrollTop: 0}, 300);
				return false;
			});
		})();
	});

	//section for ML help section directive
	app.directive('mlPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'ml-panels.html',
			controllerAs: 'mlpanel'
		};
	});

	//section for Pages help section directive
	app.directive('pgPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'pg-panels.html',
			controllerAs: 'pgpanel'
		};
	});

	//section for Documents help section directive
	app.directive('docPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'doc-panels.html',
			controllerAs: 'docpanel'
		};
	});

	//section for General panel help directive
	app.directive('genPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'gen-panels.html',
			controllerAs: 'genpanel'
		};
	});

	//section for User Account help directive
	app.directive('userPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'user-panels.html',
			controllerAs: 'userpanel'
		};
	});

	//section for Images help directive
	app.directive('imgPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'img-panels.html',
			controllerAs: 'imgpanel'
		};
	});

})();

//make sure any reload takes user back to top of screen
window.onbeforeunload = function() {window.scrollTo(0,0);}