Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;

    // Création de notre lumière principale
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 20, 0), scene);
light.diffuse = new BABYLON.Color3(1, 1, 1);
light.specular = new BABYLON.Color3(1, 1, 1);

var light1 = new BABYLON.DirectionalLight("Dir1", new BABYLON.Vector3(0, -1, 0), scene);
light1.diffuse = new BABYLON.Color3(1, 1, 1);
light1.specular = new BABYLON.Color3(1, 1, 1);


var light2 = new BABYLON.DirectionalLight("Dir2", new BABYLON.Vector3(0, 180, 0), scene);
light2.diffuse = new BABYLON.Color3(0.58, 1, 1);
light2.specular = new BABYLON.Color3(0.78, 1, 0.26);




/*var light1 = new BABYLON.PointLight("Omni1", new BABYLON.Vector3(1, 10, 1), scene);
light1.diffuse = new BABYLON.Color3(1, 1, 1);
light1.specular = new BABYLON.Color3(1, 1, 1);*/

/*var light1 = new BABYLON.SpotLight("Spot1", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), 0.8, 2, scene);
light1.diffuse = new BABYLON.Color3(0.25, 0.25, 0.25);
light1.specular = new BABYLON.Color3(1, 1, 1);*/
    // Material pour le sol
    var materialGround = new BABYLON.StandardMaterial("wallTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/alu.jpg", scene);
   materialGround.diffuseTexture.uScale = 8.0;
    materialGround.diffuseTexture.vScale = 8.0;

    // Material pour les objets
    var materialWall = new BABYLON.StandardMaterial("groundTexture", scene);
    materialWall.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene);

	// couleur pour les pilier
	var materialPillier = new BABYLON.StandardMaterial("PillierTexture", scene);
    materialPillier.diffuseTexture = new BABYLON.Texture("assets/images/gris.png", scene);

	var materialLogo = new BABYLON.StandardMaterial("PillierLogo", scene);
    materialLogo.diffuseTexture = new BABYLON.Texture("assets/images/logo.png", scene);
	//materiel sphere
	
	 var materialSphere = new BABYLON.StandardMaterial("SphereTexture", scene);
    materialSphere.diffuseTexture = new BABYLON.Texture("assets/images/etoile.jpg", scene);

	
	//materiel Afpa
	
	 var materialAfpa = new BABYLON.StandardMaterial("SphereAfpa", scene);
    materialAfpa.diffuseTexture = new BABYLON.Texture("assets/images/afpa.jpg", scene);

	//materiel mur
	
	 var materialMur = new BABYLON.StandardMaterial("SphereMur", scene);
    materialMur.diffuseTexture = new BABYLON.Texture("assets/images/mur.jpg", scene);
    materialMur.diffuseTexture.uScale = 4.0;
    materialMur.diffuseTexture.vScale = 4.0;
	
    // Ajoutons un sol pour situer la sphère dans l'espace
    //var ground = BABYLON.Mesh.CreateGround("ground1", {60, 60, 2, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
	var Box = BABYLON.Mesh.CreateBox ("box", 2.5, scene, BABYLON.Mesh.BACKSIDE);
	Box.scaling.y = 0.5;
	Box.scaling.x = 48.3;
	Box.scaling.z = 48.3;
	Box.position = new BABYLON.Vector3(0,((3/-2.6)*Box.scaling.y),0);
    Box.material = materialGround;

    // SUR TOUS LES AXES Y -> On monte les meshes de la moitié de la hauteur du mesh en question.
    var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);
    mainBox.scaling.y = 1;
    mainBox.position = new BABYLON.Vector3(27,((3/2)*mainBox.scaling.y),5);
    // Vu que cet objet sert de clone pour les autres, les deux valeurs ci-dessous sont clonées
    mainBox.rotation.y = (Math.PI*45)/180;
    mainBox.material = materialPillier;

    var mainBox2 = mainBox.clone("box2");
    mainBox2.scaling.y = 2;
    mainBox2.position = new BABYLON.Vector3(10,((3/2)*mainBox2.scaling.y),-5);

    var mainBox3 = mainBox.clone("box3");
    mainBox3.scaling.y = 3;
    mainBox3.position = new BABYLON.Vector3(-27,((3/2)*mainBox3.scaling.y),-5);

	var mainBox4 = mainBox.clone("box4");
    mainBox4.scaling.y = 3.5;
    mainBox4.position = new BABYLON.Vector3(13,((3/2)*mainBox4.scaling.y),-10);
	
	var mainBox5 = mainBox.clone("box5");
    mainBox5.scaling.y = 3.8;
    mainBox5.position = new BABYLON.Vector3(14,((3/2)*mainBox5.scaling.y),-13);
	
	var mainBox6 = mainBox.clone("box6");
    mainBox6.scaling.y = 4.1;
    mainBox6.position = new BABYLON.Vector3(15,((3/2)*mainBox6.scaling.y),-16);
	
	var mainBox7 = mainBox.clone("box7");
    mainBox7.scaling.y = 4.4;
    mainBox7.position = new BABYLON.Vector3(16,((3/2)*mainBox7.scaling.y),-19);
	
	var mainBox8 = mainBox.clone("box8");
    mainBox8.scaling.y = 4.7;
    mainBox8.position = new BABYLON.Vector3(13,((3/2)*mainBox8.scaling.y),-21);
	
	var mainBox9 = mainBox.clone("box9");
    mainBox9.scaling.y = 5;
    mainBox9.position = new BABYLON.Vector3(12,((3/2)*mainBox9.scaling.y),-24);
	
	var mainBox10 = BABYLON.Mesh.CreateBox("box10", 1.5, scene);
    mainBox10.scaling.y = 1;
    mainBox10.position = new BABYLON.Vector3(-27,((19/2)*mainBox10.scaling.y),-5);
	mainBox10.material = materialPillier;

	var mainBox11 = BABYLON.Mesh.CreateBox("box10", 1, scene);
    mainBox11.scaling.y = 1;
    mainBox11.position = new BABYLON.Vector3(-27,((22/2)*mainBox11.scaling.y),-5);
	mainBox11.rotation.y = (Math.PI*45)/180;
    mainBox11.material = materialPillier;
	
var box = BABYLON.Mesh.CreateBox("mur1", 3, scene);
    //box.position = new BABYLON.Vector3(59,0,59);
	box.scaling.y = 10;
	box.scaling.x = 40;
	box.position = new BABYLON.Vector3(0,((3/2)*box.scaling.y),-59);
    box.material = materialMur;

	var box2 = BABYLON.Mesh.CreateBox("mur2", 3, scene);
    //box.position = new BABYLON.Vector3(59,0,59);
	box2.scaling.y = 10;
	box2.scaling.z = 40;
	box2.position = new BABYLON.Vector3(59,((3/2)*box2.scaling.y),0);
	box2.material = materialMur;
	
	var box3 = BABYLON.Mesh.CreateBox("mur3", 3, scene);
    //box.position = new BABYLON.Vector3(59,0,59);
	box3.scaling.y = 10;
	box3.scaling.z = 40;
	box3.position = new BABYLON.Vector3(-59,((3/2)*box3.scaling.y),0);
	box3.material = materialMur;
	 
	 var box4 = BABYLON.Mesh.CreateBox("mur4", 3, scene, BABYLON.Mesh.BACKSIDE);
    //box.position = new BABYLON.Vector3(59,0,59);
	box4.scaling.y = 10;
	box4.scaling.x = 40;
	box4.position = new BABYLON.Vector3(0,((3/2)*box4.scaling.y),59);
	box4.material = materialMur;

var box5 = BABYLON.Mesh.CreateBox("mur5", 3, scene);
    //box.position = new BABYLON.Vector3(59,0,59);
	box5.scaling.y = 10;
	box5.scaling.x = 20;
	box5.position = new BABYLON.Vector3(-29.5,((3/2)*box.scaling.y),-39);
    box5.material = materialMur;
	
	
var box6 = BABYLON.Mesh.CreateBox("mur6", 3, scene);
    //box.position = new BABYLON.Vector3(59,0,59);
	box6.scaling.y = 10;
	box6.scaling.x = 15;
	box6.position = new BABYLON.Vector3(36.5,((3/2)*box.scaling.y),-39);
    box6.material = materialMur;
	
	
	var box7 = BABYLON.Mesh.CreateBox("box7", 3, scene);
    //box.position = new BABYLON.Vector3(59,0,59);
	box7.scaling.y = 5;
	box7.scaling.x = 25;
	

	box7.position = new BABYLON.Vector3(24.5,((1.5/2)*box.scaling.y),-29);
    box7.material = materialMur;
	
	
	var box8 = BABYLON.Mesh.CreateBox("mur8", 3, scene);
    //box.position = new BABYLON.Vector3(59,0,59);
	box8.scaling.y = 10;
	box8.scaling.z = 4;
	box8.position = new BABYLON.Vector3(36.5,((3/2)*box.scaling.y),-53);
    box8.material = materialMur;
	
    var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", 20, 5, 5, 20, 4, scene);
    cylinder.position.y = 20/2;
    cylinder.material = materialWall;

	var sphere = BABYLON.Mesh.CreateSphere("sphere", 30, 2, scene);
	sphere.position = new BABYLON.Vector3(27,((70/2)*sphere.scaling.y),-5);
	sphere.scaling.y = 4;
	sphere.scaling.x = 4;
	sphere.scaling.z = 4;
	sphere.material = materialSphere;
	var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 30, 5, scene);
	
	sphere2.position = new BABYLON.Vector3(-34,((100/2)*sphere2.scaling.y),-15);
	sphere2.material = materialSphere;
	sphere2.scaling.y = 5;
	sphere2.scaling.x = 5;
	sphere2.scaling.z = 5;
	
	var plane = BABYLON.Mesh.CreatePlane("plane", 6, scene);
	plane.position = new BABYLON.Vector4(0, 15, 57.4, 45);
plane.scaling.y = 5;
	plane.scaling.x = 5;
	plane.scaling.z = 10;
	plane.material = materialLogo;
	
	
	



	var plane1 = BABYLON.Mesh.CreatePlane("plane1", 6, scene, BABYLON.Mesh.BACKSIDE);
	plane1.position = new BABYLON.Vector4(57.4, 15, 0, 45 );
	
plane1.scaling.y = 5;
	plane1.scaling.x = 5;
	plane1.scaling.z = 10;
	plane1.material = materialLogo;
	plane1.rotation.y  = (Math.PI*90)/180;
	
	
	var plane2 = BABYLON.Mesh.CreatePlane("plane2", 6, scene, BABYLON.Mesh.BACKSIDE);
	plane2.position = new BABYLON.Vector4(-57.4, 15, 0, 45 );
	
plane2.scaling.y = 5;
	plane2.scaling.x = 5;
	plane2.scaling.z = 10;
	plane2.material = materialAfpa;
	plane2.rotation.y  = (Math.PI*-90)/180;
	
	
};