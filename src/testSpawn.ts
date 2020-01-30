var spawn = require('child_process').spawn;

let job = spawn('node', [__dirname + '/zip.js', 59, 'troyzarger@libertyfurn.com'], {
  detached: false, //if not detached and your main process dies, the child will be killed too
  stdio: [process.stdin, process.stdout, process.stderr], //those can be file streams for logs or whatever
});

job.on('close', function(code: number) {
  job = null;
  console.log('closed', code);
  //send socket information about the job ending
});
