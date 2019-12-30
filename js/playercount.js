//based on a pen done on codepen by @robinselmer

//change there the server IP. Set the IP and the port here.
//E.g.:
//note use: var url = "https://api.minetools.eu/ping/<server ip>/<server port>";
//E.g.:
//var url = "https://api.minetools.eu/ping/myserver.net/25565";

var url = "https://api.minetools.eu/ping/catempo.ggs.gg/25565";
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('The Server is Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = r.players.sample[0].name;} 
  $('#rest').html(''+r.players.online+pl);
});
