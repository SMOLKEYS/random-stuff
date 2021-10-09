const velaBullet = extend(ArtilleryBulletType, {
  despawned(b){
    UnitTypes.vela.spawn(b.team, b.x, b.y);
    Puddles.deposit(Vars.world.tileWorld(b.x, b.y), Liquids.cryofluid, 100);
  },
  damage: 0, //compensation: this is a ripple bullet
  backColor: Color.valueOf("ffffff")
});

module.exports = {
  velaBullet: velaBullet
};