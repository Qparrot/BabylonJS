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

	// fireRate
	this.fireRate = 5;
	
	// delta de calcul pour savoir quand le tir est à nouveau disponible
	this._deltaFireRate = this.fireRate;
	
	// Variable qui va changer selon le temps
	this.canFire = true;

	// Variable qui changera à l'appel du tir depuis le player
	this.launchBullets = false;

	// _this va nous permettre d'acceder à l'object depuis des fonctions que nous utilisierons plus tard
	var _this = this;

	// Engine va nous être utile pour la cadence de tir
	var engine = Player.game.scene.getEngine();
	
	Player.game.scene.registerBeforeRender(function()
	{
		if (!_this.canFire)
		{
			_this._deltaFireRate -= engine.getDeltaTime();
			if (_this._deltaFireRate <= 0 && _this.Player.isAlive)
			{
				_this.canFire = true;
				_this._deltaFireRate = _this.fireRate;
			}
		}
	});
};

Weapons.prototype =
{
	newWeapon : function (Player)
	{
		var newWeapon;
		newWeapon = BABYLON.Mesh.CreateBox('rocketLauncher', 0.5, Player.game.scene);
		

		//Nous faisons en sorte d'avoir une arme wide more than long.
		newWeapon.scaling = new BABYLON.Vector3(1, 0.7, 7);
		
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
	},

	fire : function (pickInfo)
	{
		this.launchBullets = true;
	},

	stopFire : function (pickInfo)
	{
		this.launchBullets = false;
	},

	launchFire : function() 
	{
		if (this.canFire) 
		{
			console.log('pew !');
			this.canFire = false;
    		} 
		else 
		{
        		// Nothing to do : cannot fire
   		}
	},

};

