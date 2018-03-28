(function() {
	Dropzone.options.uploader = false;

	var dropzone = new Dropzone('#uploader', {
		//url: 'https://domain-host:5001/api/v0/add',
		//url: 'https://ipfs.io/ipfs/api/v0/add',
		url: 'http://localhost:5001/api/v0/add',
		uploadMultiple: false,
		parallelUploads: 1,
		dictDefaultMessage: 'Drop video here or click to upload',
		acceptedFiles: 'video/*'
	});

	dropzone.on('error', function() {
		console.log('upload error', arguments);
	});

	dropzone.on('success', function(file, response) {
		//response.Hash
		console.log('upload success', response);
		setTimeout(function() {
			location.assign('./view/player.html?v=' + response.Hash);
		}, 500);
	});
})();
