const velaBullet = extend(ArtilleryBulletType, {
  despawned(b){
    UnitTypes.vela.spawn(b.team, b.x, b.y);
    Puddles.deposit(Vars.world.tileWorld(b.x, b.y), Liquids.cryofluid, 100);
  },
  damage: 0, //compensation: this is a ripple bullet
  backColor: Color.valueOf("ffffff")
});
/*
const susBullet = extend(LiquidBulletType, {
  despawned(b){
    //if the bullet hits a unit, clone said unit
    //you know where im going with this
  }
});
*/
module.exports = {
  velaBullet: velaBullet
};