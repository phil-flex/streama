<!DOCTYPE html>
<html ng-app="streamaApp" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><g:layoutTitle default="Grails"/></title>
	<base href="<g:createLink uri="/streama/" />">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
	<link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
	<link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">

	<asset:stylesheet src="vendor.css"/>
	<asset:stylesheet src="application.css"/>

	<asset:javascript src="vendor.js"/>
	<asset:javascript src="application.js"/>

	<g:layoutHead/>
</head>
<body>

	<header class="main" ng-if="!isCurrentState('player')">
		<div class="pull-left flex">
			<a class="logo" ui-sref="dash">
				<asset:image src="logo.png"></asset:image>
				<div class="version">v1.0.1</div>
				<div class="spinner" ng-show="baseData.loading">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
			</a>

			<div class="browse-genres" ng-if="isCurrentState('dash') && genres.length">
				<button class="btn btn-link toggle-menu" ng-click="toggleGenreMenu()">
					<span ng-if="selectedGenre" ng-bind="selectedGenre.name"></span>
					<span ng-if="!selectedGenre">{{'DASHBOARD.BROWSE_GENRES' | translate}}</span>
					<i class="ion-android-arrow-dropdown"></i>
				</button>

				<div class="toggle-menu-content" ng-show="genreMenuOpen">
					<i class="ion-close-circled pull-right" ng-click="toggleGenreMenu()"></i>
					<ul>
						<li>
							<a ng-click="changeGenre()"><i class="ion-grid"></i> All</a>
						</li>
						<li ng-repeat="genre in ::genres">
							<a ng-click="changeGenre(genre)" ng-bind="::genre.name"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">

			<li ng-if="isCurrentState('dash')">
				<div class="dash-search form-group has-feedback">
					<input type="text" placeholder="Search.." class="form-control input-xs" ng-model="dashSearch"
								 typeahead-append-to-body="true" uib-typeahead="(item.title || item.name) for item in searchMedia($viewValue)"
								 typeahead-on-select="selectFromSearch($item)" typeahead-template-url="/streama/typeahead--media.htm" typeahead-loading="baseData.loading"/>
					<span class="form-control-feedback ion-android-search" aria-hidden="true"></span>
				</div>
			</li>
			<sec:ifLoggedIn>
				<li><a ui-sref="dash">{{'DASHBOARD.TITLE' | translate}}</a></li>
			</sec:ifLoggedIn>

				<sec:ifAnyGranted roles="ROLE_CONTENT_MANAGER">
					<li><a ui-sref="admin.shows">{{'MANAGE_CONTENT' | translate}}</a></li>
				</sec:ifAnyGranted>

				<sec:ifLoggedIn>
					<li><a ui-sref="settings.settings">{{'ADMIN' | translate}}</a></li>
				</sec:ifLoggedIn>

				<sec:ifLoggedIn>
					<li>
						<div class="btn-group" uib-dropdown is-open="status.isopen" style="margin: 4px 0;">
							<button id="single-button" type="button" class="btn btn-primary btn-sm"
											uib-dropdown-toggle ng-disabled="disabled">
								{{$root.currentUser.fullName || $root.currentUser.username}} <span class="caret"></span>
							</button>
							<ul class="dropdown-menu dropdown-menu-right"
									uib-dropdown-menu role="menu" aria-labelledby="single-button">
								<li role="menuitem"><a ui-sref="help">{{'HELP_FAQ' | translate}}</a></li>
								<li role="menuitem"><a ui-sref="userSettings">{{'PROFILE_SETTINGS' | translate}}</a></li>
								<li class="divider"></li>
								<li><g:link uri="/j_spring_security_logout">{{'LOGOUT' | translate}}</g:link></li>
							</ul>
						</div>
					</li>
				</sec:ifLoggedIn>
			</ul>
		</div>

		<i class="ion-navicon navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"></i>
	</header>

<g:layoutBody/>
</body>
</html>
