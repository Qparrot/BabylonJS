Weapons = function (Player)
{
	// We allow player to go anywhere in Weapons
	this.Player = Player;
	
	// Position if non used weapon
	this.bottomPosition = new BABYLON.Vector3(0.5, -2.5, 1);

	// Change of Y when the weapon is selected
	this.topPositionY = -0.5;

	// Let's create our weapons
	this.rocketLauncher = this.newWeapon(Player);
};

Weapons.prototype =
{
	newWeapon : function (Player)
	{
		var newWeapon;
		newWeapon = BABYLON.Mesh.CreateBox('rocketLauncher', 0.5, Player.game.scene);
		

		//Nous faisons en sorte d'avoir une arme wide more than long.
		newWeapon.scaling = new BABYLON.Vector3(1, 0.7, 107);
		
		// on l'associe à la caméra pour qu'il bouge de la meme facon
		newWeapon.parent = Player.camera;

		// On positionne le mesh apres l'avoir attaché à la caméra
		newWeapon.position = this.bottomPosition.clone();
		newWeapon.position.y = this.topPositionY;

		// Ajoutons un material Rouge pour le rendre plus visible
		var materialWeapon = new BABYLON.StandardMaterial('rocketLauncherMat', Player.game.scene);
		materialWeapon.diffuseColor = new BABYLON.Color3(1, 0, 0);

		newWeapon.material = materialWeapon;
		return (newWeapon);
	}
};

