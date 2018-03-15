Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;

    // Création de notre lumière principale
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 20, 0), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    light.specular = new BABYLON.Color3(1, 1, 1);


    var light2 = new BABYLON.PointLight("Omni1", new BABYLON.Vector3(1, 10, 1), scene);
    light2.diffuse = new BABYLON.Color3(1, 1, 1);
    light2.specular = new BABYLON.Color3(1, 1, 1);


    // Material pour le sol
    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/brick.jpg", scene);
    materialGround.diffuseTexture.uScale = 4.0;
    materialGround.diffuseTexture.vScale = 4.0;

    // Material pour les objets
    var materialWall = new BABYLON.StandardMaterial("wallTexture", scene);
    materialWall.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene);
    var materialWall2 = new BABYLON.StandardMaterial("wallTexture2", scene);
    materialWall2.diffuseTexture = new BABYLON.Texture("assets/images/wood2.jpg", scene);
    var materialWall3 = new BABYLON.StandardMaterial("wallTexture3", scene);
    materialWall3.diffuseTexture = new BABYLON.Texture("assets/images/water_ice_and_snow.jpg", scene);
    


    // SUR TOUS LES AXES Y -> On monte les meshes de la moitié de la hauteur du mesh en question.
    var dimB = 3;
    var mainBox1 = BABYLON.Mesh.CreateBox("box1", dimB, scene);
    mainBox1.scaling.y = 1;
    var heightB1 = mainBox1.scaling.y * dimB;
    mainBox1.position = new BABYLON.Vector3(7, (3/2)*mainBox1.scaling.y, 5);
    // Vu que cet objet sert de clone pour les autres, les deux valeurs ci-dessous sont clonées
    mainBox1.rotation.y = (Math.PI*45)/180;
    mainBox1.material = materialWall;

    var mainBox2 = mainBox1.clone("box2");
    mainBox2.scaling.y = 2;
    var heightB2 = mainBox2.scaling.y * dimB;
    mainBox2.position = new BABYLON.Vector3(7, (3/2)*mainBox2.scaling.y, -6);
    mainBox2.rotation.y = (Math.PI*120)/180;

    var mainBox3 = mainBox1.clone("box3");
    mainBox3.scaling.y = 3;
    var heightB3 = mainBox3.scaling.y * dimB;
    mainBox3.position = new BABYLON.Vector3(-8, (3/2)*mainBox3.scaling.y, -7);
    mainBox3.rotation.y = (Math.PI*60)/180;
    mainBox3.material = materialWall2;

    var mainBox4 = mainBox1.clone("box4");
    mainBox4.scaling.y = 4;
    var heightB4 = mainBox4.scaling.y * dimB;
    mainBox4.position = new BABYLON.Vector3(-5, (3/2)*mainBox4.scaling.y, 5);

    // Créons deux sphères de diamètres 2 et 4
    var diameterS1 = 2;
    var diameterS2 = 4;
    var sphere1 = BABYLON.Mesh.CreateSphere("sphere1", 16, diameterS1, scene);
    var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 16, diameterS2, scene);
    sphere1.material = materialWall3;
    sphere2.material = materialWall2;

    // On positionne la 1ère sphère au sommet du 3ème cube
    sphere1.position.x = mainBox3.position.x;
    sphere1.position.y = heightB3 + diameterS1/2;
    sphere1.position.z = mainBox3.position.z;

    // Cylindre -> 20 de hauteur, 5 de diamètre en haut et en bas, 20 de tesselation et 4 de subdivision
    var diameterC = 5;
    var heightC = 20;
    var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", heightC, diameterC, diameterC, 20, 4, scene);
    cylinder.position.y = heightC/2;
    cylinder.material = materialWall;

    // On positionne la 2ème sphère sur le cylindre
    sphere2.position.x = cylinder.position.x;
    sphere2.position.y = heightC + diameterS2/2;
    sphere2.position.z = cylinder.position.z;

    // Ajoutons un sol pour situer les meshs dans l'espace
    var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, scene);
    ground.scaling = new BABYLON.Vector3(2,10,3);
    ground.scaling.z = 2;
    //ground.position.z = 100;
    ground.material = materialGround;

    // Mur du fond
    var wall1 = BABYLON.Mesh.CreatePlane("wall1", 10, scene);
    wall1.rotation.z = Math.PI / 2;
    wall1.position.y = 10;
    wall1.position.z = 20;
    wall1.scaling.x = 2;
    wall1.scaling.y = 4;
    wall1.material = materialWall3;

    // Mur de gauche
    var wall2 = wall1.clone("wall2");
    wall2.rotation.y = 3 * Math.PI / 2;
    wall2.material = materialWall3;
    wall2.position.x = -20;
    wall2.position.y = 10;
    wall2.position.z = 0;

    // Mur de droite
    var wall3 = wall1.clone("wall3");
    wall3.rotation.y = Math.PI / 2;
    wall3.material = materialWall3;
    wall3.position.x = 20;
    wall3.position.y = 10;
    wall3.position.z = 0;

    // Mur de devant
    var wall4 = wall1.clone("wall4");
    wall4.rotation.y = Math.PI;
    wall4.material = materialWall3;
    wall4.position.x = 0;
    wall4.position.y = 10;
    wall4.position.z = -20;


};