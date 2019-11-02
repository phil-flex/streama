'use strict';

angular.module('streama').factory('apiService', function ($http, $rootScope, contextPath) {
	return{
		currentUser: function () {
			return $http.get(location.pathname + 'user/current.json');
		},

		tvShow: {
			get: function (id) {
				return $http.get(location.pathname + 'tvShow/show.json', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(location.pathname + 'tvShow/save.json', data);
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'tvShow/delete.json', {params: {id: id}});
			},
			list: function (params) {
				return $http.get(location.pathname + 'tvShow.json', {params: params});
			},
			episodesForTvShow: function (id) {
				return $http.get(location.pathname + 'tvShow/episodesForTvShow.json', {params: {id: id}});
			},
			adminEpisodesForTvShow: function (id) {
				return $http.get(location.pathname + 'tvShow/adminEpisodesForTvShow.json', {params: {id: id}});
			},
			removeSeason: function (showId, season_number) {
				return $http.get(location.pathname + 'tvShow/removeSeason.json', {params: {showId: showId, season_number: season_number}});
			}
		},

		user: {
			save: function (data) {
				return $http.post(location.pathname + 'user/save.json', data);
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'user/delete.json', {params: {id: id}});
			},
			list: function () {
				return $http.get(location.pathname + 'user.json');
			},
			checkAvailability: function (username, isInvite) {
				return $http.get(location.pathname + 'user/checkAvailability.json', {params: {username: username, isInvite: isInvite}});
			},
      saveAndCreateUser: function (user) {
        return $http.post(location.pathname + 'user/saveAndCreateUser.json', user);
      },
			saveAndInviteUser: function (user) {
				return $http.post(location.pathname + 'user/saveAndInviteUser.json', user);
			},
      saveProfile: function (user) {
				return $http.post(location.pathname + 'user/saveProfile.json', user);
			},
      availableRoles: function () {
				return $http.get(location.pathname + 'user/availableRoles.json');
			},
      changePassword: function (data) {
				return $http.post(location.pathname + 'user/changePassword.json', data);
			}
		},
    userActivity: {
      list: function (params) {
        return $http.get(location.pathname + 'userActivity.json', {params: params});
      }
    },

		tag:{
			save: function (data) {
				return $http.post(location.pathname + 'tag/save.json', data);
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'tag/delete.json', {params: {id: id}});
			},
			list: function () {
				return $http.get(location.pathname + 'tag.json');
			}
		},

		video: {
			get: function (id) {
				return $http.get(location.pathname + 'video/show.json', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(location.pathname + 'video/save.json', data);
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'video/delete.json', {params: {id: id}});
			},
			list: function (params) {
				return $http.get(location.pathname + 'video.json', {params: params});
			},
			dash: function () {
				return $http.get(location.pathname + 'video/dash.json');
			},
			removeFile: function (videoId, fileId) {
				return $http.get(location.pathname + 'video/removeFile.json', {params: {videoId: videoId, fileId: fileId}});
			},
			listAllFiles: function (params) {
				return $http.get(location.pathname + 'file.json', {params: params});
			},
			removeFileFromDisk: function (id, path) {
				return $http.delete(location.pathname + 'file/removeFileFromDisk.json', {params: {id: id, path: path}});
			},
      removeMultipleFilesFromDisk: function(bulk) {
        return $http.delete(location.pathname + 'file/removeMultipleFilesFromDisk.json', {params: {id: bulk}});
      },
			cleanUpFiles: function (type) {
				return $http.delete(location.pathname + 'file/cleanUpFiles.json', {params: {type: type}});
			},
			addFile: function (videoId, fileId) {
				return $http.get(location.pathname + 'video/addFile.json', {params: {videoId: videoId, fileId: fileId}});
			},
			refetch: function (videoId) {
				return $http.get(location.pathname + 'video/refetch.json', {params: {videoId: videoId}});
			},
			addExternalUrl: function (params) {
				return $http.get(location.pathname + 'video/addExternalUrl.json', {params: params});
			},
      addLocalFile: function (params) {
        return $http.get(location.pathname + 'video/addLocalFile.json', {params: params});
      }
		},

    report: {
      list: function (params) {
        return $http.get(location.pathname + 'report.json', {params: params});
      },
      reportsById: function (videoId) {
        return $http.get(location.pathname + 'report/reportsById.json', {params: {videoId: videoId}});
      },
      save: function (videoId, errorCode) {
        return $http.put(location.pathname + 'report/save.json', {videoId: videoId, errorCode: errorCode});
      },
      resolve: function (reportId) {
        return $http.post(location.pathname + 'report/resolve.json', {reportId: reportId});
      },
      unresolve: function (reportId) {
        return $http.post(location.pathname + 'report/unresolve.json', {reportId: reportId});
      },
      resolveMultiple: function(bulk) {
        return $http.post(location.pathname + 'report/resolveMultiple.json', {ids: bulk});
      }
    },

    file: {
      localFiles: function(path) {
        return $http.get(location.pathname + 'file/localFiles.json', {params: {path: path}});
      },
			matchMetaDataFromFiles: function (files) {
				return $http.post(location.pathname + 'file/matchMetaDataFromFiles.json', {files: files});
			},
      bulkAddMediaFromFile: function (files) {
				return $http.post(location.pathname + 'file/bulkAddMediaFromFile.json', {files: files});
			},
      save: function(data) {
        return $http.post(location.pathname + 'file/save.json', data);
      },
      getURL: function (id) {
        return $http.get(location.pathname + 'file/getURL.json', {params: {id: id}});
      }
    },

		episode: {
			get: function (id) {
				return $http.get(location.pathname + 'episode/show.json', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(location.pathname + 'episode/save.json', data);
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'episode/delete.json', {params: {id: id}});
			},
			list: function (params) {
				return $http.get(location.pathname + 'episode.json', {params: params});
			}
		},

		movie: {
			get: function (id) {
				return $http.get(location.pathname + 'movie/show.json', {params: {id: id}});
			},
      getsimilar: function (id) {
        return $http.get(location.pathname + 'movie/getsimilar.json', {params: {id: id}});
      },
			save: function (data) {
				return $http.post(location.pathname + 'movie/save.json', data);
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'movie/delete.json', {params: {id: id}});
			},
			list: function (params) {
				return $http.get(location.pathname + 'movie.json', {params: params});
			}
		},

		genericVideo: {
			get: function (id) {
				return $http.get(location.pathname + 'genericVideo/show.json', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(location.pathname + 'genericVideo/save.json', data);
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'genericVideo/delete.json', {params: {id: id}});
			},
			list: function () {
				return $http.get(location.pathname + 'genericVideo.json');
			}
		},

		viewingStatus: {
			save: function (params) {
				return $http.get(location.pathname + 'viewingStatus/save.json', {params: params});
			},
			markCompleted: function (viewingStatus) {
				return $http.get(location.pathname + 'viewingStatus/markCompleted.json', {params: {id: viewingStatus.id}});
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'viewingStatus/delete.json', {params: {id: id}});
			}
		},


		genres: {
			get: function (id) {
				return $http.get(location.pathname + 'genre/show.json', {params: {id: id}});
			},
			list: function () {
				return $http.get(location.pathname + 'genre.json');
			}
		},


    settings: {
			list: function () {
				return $http.get(location.pathname + 'settings.json');
			},
			updateMultiple: function (data) {
				return $http.post(location.pathname + 'settings/updateMultiple.json', data);
			},
      validateSettings: function (data) {
				return $http.post(location.pathname + 'settings/validateSettings.json', data);
			}
		},


		notification: {
			list: function () {
				return $http.get(location.pathname + 'notificationQueue/index.json');
			},
			listNewReleases: function () {
				return $http.get(location.pathname + 'notificationQueue/listNewReleases.json');
			},
			addMovieToCurrentNotification: function (movieId) {
				return $http.get(location.pathname + 'notificationQueue/addMovieToCurrentNotification.json', {params: {id: movieId}});
			},
			highlightOnDashboard: function (newRelease) {
				return $http.post(location.pathname + 'notificationQueue/highlightOnDashboard.json', newRelease);
			},
			addTvShowToCurrentNotification: function (tvShowId, text) {
				return $http.get(location.pathname + 'notificationQueue/addTvShowToCurrentNotification.json', {params: {id: tvShowId, description: text}});
			},
			sendCurrentNotifcation: function () {
				return $http.get(location.pathname + 'notificationQueue/sendCurrentNotifcations.json');
			},
			delete: function (id) {
				return $http.delete(location.pathname + 'notificationQueue/delete.json', {params: {id: id}});
			},
		},


		theMovieDb: {
      hasKey: function (params) {
        return $http.get(location.pathname + 'theMovieDb/hasKey.json');
      },
			search: function (type, name) {
				return $http.get(location.pathname + 'theMovieDb/search.json', {params: {type: type, name: name}});
			},
			seasonNumberForShow: function (params) {
				return $http.get(location.pathname + 'theMovieDb/seasonNumberForShow.json', {params: params});
			},
			seasonForShow: function (params) {
				return $http.get(location.pathname + 'theMovieDb/seasonForShow.json', {params: params});
			},
      availableGenres: function (params) {
				return $http.get(location.pathname + 'theMovieDb/availableGenres.json');
			},
			countNewEpisodesForSeason: function (params) {
				return $http.get(location.pathname + 'theMovieDb/countNewEpisodesForSeason', {params: params});
			},
      imagesForMedia: function (params) {
				return $http.get(location.pathname + 'theMovieDb/imagesForMedia', {params: params});
			}
		},

		dash: {
			searchMedia: function (query) {
				return $http.get(location.pathname + 'dash/searchMedia.json', {params: {query: query}});
			},

			listContinueWatching: function () {
				return $http.get(location.pathname + 'dash/listContinueWatching.json');
			},

			listMovies: function (params) {
				return $http.get(location.pathname + 'dash/listMovies.json', {params: params});
			},

			listShows: function (params) {
				return $http.get(location.pathname + 'dash/listShows.json', {params: params});
			},

			firstEpisodeForShow: function (id) {
				return $http.get(location.pathname + 'dash/firstEpisodeForShow.json', {params: {id: id}});
			},

			listGenres: function () {
				return $http.get(location.pathname + 'dash/listGenres.json');
			},

			listGenericVideos: function (params) {
				return $http.get(location.pathname + 'dash/listGenericVideos.json', {params: params});
			},

			listNewReleases: function () {
				return $http.get(location.pathname + 'dash/listNewReleases.json');
			},

			listRecommendations: function () {
				return $http.get(location.pathname + 'dash/listRecommendations.json');
			}
		},

		websocket: {
			triggerPlayerAction: function (params) {
				return $http.get(location.pathname + 'websocket/triggerPlayerAction.json', {params: params});
			}
		},

    profile: {
		  save: function (params) {
        return $http.post(location.pathname + 'profile/save',  params)
      },
		  update: function (params) {
        return $http.put(location.pathname + 'profile/update.json',  params)
      },
		  delete: function (id) {
        return $http.delete(location.pathname + 'profile/delete.json',  {params: {id: id}})
      },
      getUserProfiles: function () {
        return $http.get(location.pathname + 'profile/getUserProfiles.json')
      }
    }

	};
});
