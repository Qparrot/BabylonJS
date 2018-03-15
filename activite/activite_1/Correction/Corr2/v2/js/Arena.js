Arena = function(game){

	// Appel des variables
	this.game = game;
	var scene = game.scene;

	/*============================================*/
	/*==============  LUMIERE  ===================*/
	/*============================================*/

	// Définition des lumières
	
	var light = new BABYLON.PointLight('light', new BABYLON.Vector3(15,25,1), scene);
	light.diffuse = new BABYLON.Color3(.241,.196,.015);
	light.specular = new BABYLON.Color3(.241,.196,.015);
	light.intensity = 2;

	// LUMIERE PONCTUELLE
	var light1 = new BABYLON.PointLight('light1', new BABYLON.Vector3(-15,25,1), scene);
	// Gestion de la lumière
	light1.intensity = 2;
	light1.diffuse = new BABYLON.Color3(.230,.126,.34);
	light1.specular = new BABYLON.Color3(.230,.126,.34);

	

	/*============================================*/
	/*================ TEXTURES ==================*/
	/*============================================*/
	
	// Définition des textures

	// Texture brique
	var materialGround = new BABYLON.StandardMaterial('groundTexture',scene);
	materialGround.diffuseTexture = new BABYLON.Texture('assets/images/brick.jpg',scene);
	materialGround.diffuseTexture.uScale = 4.0;
	materialGround.diffuseTexture.vScale = 4.0;

	// Textures Bois
	var materialWall = new BABYLON.StandardMaterial('wallTexture',scene);	
	materialWall.diffuseTexture = new BABYLON.Texture('assets/images/bois.jpg',scene);
	// Textures Boule Metal
	var materialSphere = new BABYLON.StandardMaterial('sphereTexture',scene);	
	materialSphere.diffuseTexture = new BABYLON.Texture('assets/images/metal.jpg',scene);
	// Textures Boule Plastique
	var materialSphere1 = new BABYLON.StandardMaterial('sphereTexture1',scene);	
	materialSphere1.diffuseTexture = new BABYLON.Texture('assets/images/plastic.jpg',scene);
	// Texture Sol
	var materialFloor = new BABYLON.StandardMaterial('floorTexture',scene);	
	materialFloor.diffuseTexture = new BABYLON.Texture('assets/images/floor.jpg',scene);
	materialFloor.diffuseTexture.uScale = 4.0;
	materialFloor.diffuseTexture.vScale = 4.0;

	/*============================================*/
	/*=============== MATERIAUX ==================*/
	/*============================================*/

	
	/*=================== MUR ET SOL ====================*/

	// Sol
	var ground = new BABYLON.Mesh.CreateGround('ground',20,20,2,scene);
	ground.scaling = new BABYLON.Vector3(2,10,2);
	ground.material = materialFloor;

	// Mur Fond
	var ground1 = new BABYLON.Mesh.CreateGround('ground1',20,15,2,scene);
	ground1.scaling = new BABYLON.Vector3(2,10,2);
	ground1.material = materialGround;
	ground1.rotation.x = (Math.PI*90)/180;
	ground1.position = new BABYLON.Vector3(0,15,-20);

	// Mur Droit
	var ground2 = ground1.clone('ground2');
	ground2.rotation = new BABYLON.Vector3((Math.PI*90)/180,(Math.PI*90)/180,0);
	ground2.position = new BABYLON.Vector3(-20,15,0);

	// Mur Gauche
	var ground3 = ground1.clone('ground3');
	ground3.rotation = new BABYLON.Vector3((Math.PI*90)/180,(Math.PI*-90)/180,0);
	ground3.position = new BABYLON.Vector3(20,15,0);
	
	// Plafond
	var ground4 = new BABYLON.Mesh.CreateGround('ground4',20,20,2,scene);
	ground4.scaling = new BABYLON.Vector3(2,10,2);
	ground4.material = materialGround;
	ground4.rotation.x = (Math.PI*180)/180;
	ground4.position.y = 30;

	/*=================== OBJETS ====================*/

	// Spheres
	var sphere = BABYLON.Mesh.CreateSphere('sphere',16,3,scene);
	sphere.material = materialSphere;
	sphere.position = new BABYLON.Vector3(-5,7.3,-15);

	var sphere1 = BABYLON.Mesh.CreateSphere('sphere1',16,3,scene);
	sphere1.material = materialSphere1;
	sphere1.position = new BABYLON.Vector3(-17,6.5,0);

	// Boxes
	var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);
	mainBox.scaling.x = 2.35;
	mainBox.material = materialWall;
	mainBox.position = new BABYLON.Vector3(0,((3/2)*mainBox.scaling.y),-14);


	var mainBox2 = mainBox.clone("box2");
	mainBox2.scaling = new BABYLON.Vector3(1,2,1);
	mainBox2.position = new BABYLON.Vector3(5,((3/2)*mainBox2.scaling.y),-14);

	var mainBox3 = mainBox.clone("box3");
	mainBox3.scaling = new BABYLON.Vector3(1,2,1);
	mainBox3.position = new BABYLON.Vector3(-5,((3/2)*mainBox3.scaling.y),-14);

	var mainBox4 = mainBox.clone("box4");
	mainBox4.scaling = new BABYLON.Vector3(4,5,1);
	mainBox4.position = new BABYLON.Vector3(0,((3/2)*mainBox4.scaling.y),-17);


	// Table
	var planche = BABYLON.Mesh.CreateBox('planche',1,scene);
	planche.material = materialSphere; 
	planche.position = new BABYLON.Vector3(-15,5,1);
	planche.scaling = new BABYLON.Vector3(7,0.2,20);

	var cylinder = BABYLON.Mesh.CreateCylinder("cyl", 5, .8, .8, 20, 4, scene);
	cylinder.position = new BABYLON.Vector3(-18,2.5,10);
	cylinder.material = materialWall;

	var cylinder1 = cylinder.clone('cyl1');
	cylinder1.position.x = -12;

	var cylinder2 = cylinder.clone('cyl2');
	cylinder2.position.z = -8

	var cylinder3 = cylinder.clone('cyl3');
	cylinder3.position = new BABYLON.Vector3(-12,2.5,-8);


};
