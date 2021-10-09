const velaBullet = extend(ArtilleryBulletType, {
  despawned(b){
    UnitTypes.vela.spawn(b.team, b.x, b.y);
    Log.info(b.x);
    Log.info(b.y);
  },
  damage: 0, //compensation: this is a ripple bullet
  backColor: Color.valueOf("ffffff")
});

Blocks.ripple.ammoTypes.put(Items.metaglass, velaBullet);

Log.info("vela bullet inited");