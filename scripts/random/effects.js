/*
const ohdear = extend(StatusEffect, {
  //ok so how do i make units with this effect
  //release cryofluid time to time
});
*/

const onlySeiSimp = extend(StatusEffect, "onlySeiSimp", {
  update(unit, time){
    unit.health = Mathf.floor(Mathf.random() * 200)
  },
  damage: 1,
  speedMultiplier: 0.5,
  permanent: true
});