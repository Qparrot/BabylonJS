document.addEventListener('DOMContentLoaded', function(){
	new Game('renderCanvas')
} , false);

Game = function(canvasId){

	// Canvas et engine definit ici
	var canvas = document.getElementById(canvasId);
	var engine = new BABYLON.Engine(canvas,true);
	var _this = this;

	this.scene = this._initScene(engine);

	// Appel du joueur
	var _player = new Player(_this,canvas);

	// Appel de l'arene
	var _arena = new Arena(_this);	

	// Rendu du jeu
	engine.runRenderLoop(function(){
		_this.scene.render();
	});

	// Redimentionnement de la page
	window.addEventListener('resize',function(){
		if (engine) {
			engine.resize();	
		}
	}, false);


};

Game.prototype = {
	// Prototype d'initialisation de las cene
	_initScene : function(engine){
		var scene = new BABYLON.Scene(engine);
		scene.clearColor = new BABYLON.Color3(0.9,0.9,0.9);
		return scene;
	}
};