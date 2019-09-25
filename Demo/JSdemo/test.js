let exec = require('child_process').exec;
function  execute(){
    var cmd='git --version';
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.log(error);
        }
        else{
            console.log(stdout);
        }
    });
}
execute();
