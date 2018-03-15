Player = function(game,canvas){
	// La scene du jeu
	this.scene = game.scene;

	// Initialisation de la camera
	this._initCamera(this.scene,canvas);

};

Player.prototype = {
	_initCamera : function(scene,canvas){
		// On crée la camera

		/*=======================*/
		/*======= CAMERA ========*/
		/*=======================*/

		// Camera libre //
		this.camera = new BABYLON.FreeCamera('camera',new BABYLON.Vector3(0,20,50), scene);
		// On demande a la camera de regarder le point Zéro
		this.camera.setTarget(BABYLON.Vector3.Zero());
		// On affecte le mouvement de la camera au canvas
		this.camera.attachControl(canvas,true); 

		// Camera arcRotate //
		// arcRotateCamera(id,horizontal,vertical,radius,target,scene)
		// this.camera = new BABYLON.ArcRotateCamera('ArcRotateCamera',1,0.8,10,new BABYLON.Vector3(0,0,0),scene);	
		// this.camera.attachControl(canvas,true);


	}
};