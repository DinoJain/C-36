class Player { 
constructor(){}
getCount(){
var playerCountRef = database.ref('playerCount'); 
playerCountRef.on("value",function(data){
playerCount = data.val(); }) }
updateCount(count){ 
database.ref('/').update({
playerCount: count }); }
update(name){ 
 var playerIndex = "player" + playerCount; database.ref(playerIndex).set({ name:name }); } }
var canvas, backgroundImage; 
var gameState = 0; 
var playerCount; 
var database; 
var form, player, game; 
function setup(){
     canvas = createCanvas(400,400);
     database = firebase.database();
      game = new Game(); game.getState(); 
      game.start(); }
       function draw(){ }
