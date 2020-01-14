//Based on a pen done on codepen by @robinselmer

//Change there the server IP. Set the IP and the port here.
//E.g.:
//note: use: var url = "https://api.minetools.eu/ping/<server ip>/<server port>";
//E.g.:
//var url = "https://api.minetools.eu/ping/myserver.net/25565";


function servername() {
  document.title = prompt('Modify the title', document.title);
}


var url = "https://api.minetools.eu/ping/mc.thegrassblock.org/25565";
//https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 )
  $('#rest').html(r.players.online+pl);
    
});