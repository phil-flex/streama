'use strict';

angular.module('streama').controller('modalFileCtrl', [
  '$scope', '$uibModalInstance', 'apiService', 'uploadService', 'video', 'localStorageService', '$rootScope',
  function ($scope, $uibModalInstance, apiService, uploadService, video, localStorageService, $rootScope) {
    $scope.loading = false;
    $scope.localFilesEnabled = false;
    $scope.localFiles = [];
    $scope.activeTab = localStorageService.get('activeFileModalTab')|| 'upload';
    $scope.closeOnSelect = localStorageService.get('fileModal.closeOnSelect');
    if($scope.closeOnSelect == null){$scope.closeOnSelect = true;}

    var localFileLastPath = localStorageService.get('localFileLastPath')|| '';
		$scope.localDir = localFileLastPath.split('/') || [];
    $scope.video = video;
    $scope.uploadStatus = {};
    $scope.upload = uploadService.doUpload.bind(uploadService, $scope.uploadStatus, '/video/uploadFile.json?id=' + video.id, onUploadSuccess, function () {});

    $scope.loadLocalFiles = loadLocalFiles;
		$scope.backLocalDirectory = backLocalDirectory;
		$scope.openLocalDirectory = openLocalDirectory;
		$scope.toggleCloseOnSelect = toggleCloseOnSelect;
    $scope.addLocalFile = addLocalFile;
    $scope.cancel = cancel;
    $scope.removeFile = removeFile;
    $scope.saveChanges = saveChanges;
    $scope.getFilesForExtensions = getFilesForExtensions;
    $scope.addExternalUrl = addExternalUrl;
    $scope.toggleEdit = toggleEdit;
    $scope.isEditing = isEditing;

		$scope.loadLocalFiles(localFileLastPath);

		$scope.$watch('activeTab', onTabChange);

    function onTabChange(newVal, oldVal) {
      localStorageService.set('activeFileModalTab', newVal);
    }

		function loadLocalFiles(path) {
      if(!_.get($rootScope.getSetting('Local Video Files'), 'value')){
        return;
      }
			apiService.file.localFiles(path).then(function(response) {
				localStorageService.set('localFileLastPath', path);
				$scope.localFilesEnabled = true;
				$scope.localFiles = response.data;
			}, function(data) {
				if (data.code == 'LocalFilesNotEnabled') {
					$scope.localFilesEnabled = false;
					return;
				}
				alertify.error(data.message);
			});
		}

    function backLocalDirectory() {
      $scope.localFiles = [];
      $scope.localDir.pop();
      $scope.loadLocalFiles($scope.localDir.join('/'));
    }

    function openLocalDirectory(dir) {
      $scope.localFiles = [];
      $scope.localDir.push(dir.name);
      $scope.loadLocalFiles($scope.localDir.join('/'));
    }


    function addExternalUrl(externalUrl) {
      apiService.video.addExternalUrl({id: $scope.video.id, externalUrl: externalUrl}).then(function (response) {
        alertify.success("External URL Added.");
        $scope.video.externalLink = null;

        if(_.find($scope.video.videoFiles, {id: response.data.id})){
          $scope.video.videoFiles[_.indexOf($scope.video.videoFiles, {id: data.id})] = response.data;
        }else{
          $scope.video.videoFiles = $scope.video.videoFiles || [];
          $scope.video.videoFiles.push(data);
          $scope.video.hasFiles = true;
        }
      });
    }

    function addLocalFile(localFile) {
      apiService.video.addLocalFile({id: $scope.video.id, localFile: localFile}).then(function (response) {
        var data = response.data;
        alertify.success("Local File Added.");
        $scope.video.localFile = null;

        if(_.find($scope.video.videoFiles, {id: data.id})){
          $scope.video.videoFiles[_.indexOf($scope.video.videoFiles, {id: data.id})] = data;
        }else{
          $scope.video.videoFiles = $scope.video.videoFiles || [];
          $scope.video.videoFiles.push(data);
          $scope.video.hasFiles = true;
        }
        if($scope.closeOnSelect){
          $uibModalInstance.dismiss('cancel');
        }
      }, function(data) {
        alertify.error(data.message);
      });
    }

    function removeFile(file) {
      alertify.set({ buttonReverse: true, labels: {ok: "Yes", cancel : "Cancel"}});
      alertify.confirm('Are you sure you want to remove the file "'+file.originalFilename+'"?', function (confirmed) {
        if(confirmed){
          apiService.video.removeFile($scope.video.id, file.id).then(function () {
            if(file.extension == '.srt' || file.extension == '.vtt'){
              _.remove($scope.video.subtitles, {id: file.id});
              alertify.success('Subtitles deleted.');
            }else{
              _.remove($scope.video.videoFiles, {id: file.id});
              alertify.success('Video deleted.');
            }
          });
        }
      });
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
    function saveChanges(file) {
      apiService.file.save(file).then(function (data) {
        alertify.success('File successfully saved.');
        toggleEdit(file);
      });
    }

    function onUploadSuccess(data) {
      $scope.uploadStatus.percentage = null;
      if(data.error) return;

      if(data.extension == '.srt' || data.extension == '.vtt'){
        $scope.video.subtitles = $scope.video.subtitles || [];
        $scope.video.subtitles.push(data);
        $scope.video.hasFiles = true;
        alertify.success('Subtitles uploaded successfully.');
      }else{
        $scope.video.videoFiles = $scope.video.videoFiles || [];
        $scope.video.videoFiles.push(data);
        $scope.video.hasFiles = true;
        alertify.success('Video uploaded successfully.');
      }

    }


    function toggleCloseOnSelect() {
      $scope.closeOnSelect = !$scope.closeOnSelect;
      localStorageService.set('fileModal.closeOnSelect', $scope.closeOnSelect);
    }

    function getFilesForExtensions(extensions){
      return _.filter($scope.video.videoFiles, function (file) {
        return (extensions.indexOf(file.extension.toLowerCase()) > -1);
      })
    }

    function toggleEdit(file) {
      file._isEditing = !file._isEditing;
    }

    function isEditing(file) {
      return file._isEditing;
    }

  }]);
