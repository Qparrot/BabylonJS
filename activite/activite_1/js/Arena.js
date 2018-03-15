Arena = function(game)
{
	this.game = game;
	var scene = game.scene;

	var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 20, 0), scene);
	var pointLight = new BABYLON.PointLight("Omni1", new BABYLON.Vector3(4, 10, 20), scene);
	pointLight.diffuse = new BABYLON.Color3(1, 1, 1);
	pointLight.specular = new BABYLON.Color3(1, 1, 1);	
	var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
	materialGround.diffuseTexture = new BABYLON.Texture("assets/images/brick.jpg", scene);
	materialGround.diffuseTexture.uScale = 4.0;
	materialGround.diffuseTexture.vScale = 4.0;

	var materialBox = new BABYLON.StandardMaterial("boxTexture", scene);
	materialBox.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene);

	var materialSky = new BABYLON.StandardMaterial("skyTexture", scene);
	materialSky = new BABYLON.StandardMaterial("assets/images/sky.jpg", scene);

	var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 3, scene);
	ground.scaling = new BABYLON.Vector3(2, 10, 3);
	ground.scaling.z = 2;
	ground.material = materialGround;
	
	var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skybox/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skybox.material = skyboxMaterial;			

	    var skyBox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0},scene);
	var skyBoxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyBoxMaterial.backFaceCulling = false;
	skyBoxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skybox", scene);
	skyBoxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyBoxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyBoxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skyBox.material = skyBoxMaterial;
	
	var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);
	mainBox.scaling.y = 1;
	mainBox.position = new BABYLON.Vector3(-5, (1.5 * mainBox.scaling.y), 5);

	mainBox.rotation.y =(Math.PI*45)/180;
	mainBox.material = materialBox;
	
	var mainBox2 = mainBox.clone("box2");
	mainBox2.scaling.y = 2;
	mainBox2.position = new BABYLON.Vector3(-5, ((3/2) * mainBox2.scaling.y), -5);

	var mainBox3 = mainBox.clone("box2");
	mainBox3.scaling.y = 4;
	mainBox3.position = new BABYLON.Vector3(5, ((3/2) * mainBox3.scaling.y), -5);
	
	var mainBox4 = mainBox.clone("box2");
	mainBox4.scaling.y = 6;
	mainBox4.position = new BABYLON.Vector3(5, ((3/2) * mainBox4.scaling.y), 5);

	var mainCylinder = BABYLON.Mesh.CreateCylinder("Cylinder1", 20, 5, 5, 50, 4, scene);
	mainCylinder.position = new BABYLON.Vector3(-10, (3/2), -5);
	mainCylinder.material = materialBox;

	var mainWall = new BABYLON.Mesh.CreatePlane("Wall", 4, scene);
	mainWall.scaling.x = 10;
	mainWall.position = new BABYLON.Vector3( 0, 2, 20);
	mainWall.material = materialGround;

	var mainWall2 = mainWall.clone("Wall2");
	mainWall2.position = new BABYLON.Vector3( 0, 2, -20);
	mainWall2.rotation.x = (Math.PI*180)/180;
	
	var mainWall3 = mainWall.clone("Wall3");
	mainWall3.position = new BABYLON.Vector3( -20, 2, 0);
	mainWall3.scaling.x = 10;
	mainWall3.rotation.x = (Math.PI*180)/180;
	mainWall3.rotation.y = (Math.PI*90)/180;
	
	var mainWall4 = mainWall.clone("Wall3");
	mainWall4.position = new BABYLON.Vector3( 20, 2, 0);
	mainWall4.scaling.x = 10;
	mainWall4.rotation.x = (Math.PI*180)/180;
	mainWall4.rotation.y = (Math.PI*-90)/180;
	
	var mainSphere = new BABYLON.MeshBuilder.CreateSphere("sphere1", {}, scene);
	mainSphere.position = new BABYLON.Vector3(3, 4, 10);
	mainSphere.material = materialBox;
};
