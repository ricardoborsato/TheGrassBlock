//based on a pen done on codepen by @robinselmer

//change there the server IP. Set the IP and the port here.
//E.g.:
//note use: var url = "https://api.minetools.eu/ping/<server ip>/<server port>";
//E.g.:
//var url = "https://api.minetools.eu/ping/myserver.net/25565";

var url = "https://api.minetools.eu/ping/mc.thegrassblock.org/25565";
$.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('0');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = r.players.sample[players].name;} 
  $('#rest').html(''+r.players.online+pl);
});
