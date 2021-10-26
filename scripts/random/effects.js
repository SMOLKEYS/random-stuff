/*
const ohdear = extend(StatusEffect, {
  //ok so how do i make units with this effect
  //release cryofluid time to time
});
*/

const onlySeiSimp = extend(StatusEffect, "onlySeiSimp", {
  update(unit, time){
    if(time == 60){
      unit.health = Mathf.floor(Mathf.random() * 350)
    }
  },
  damage: 1,
  speedMultiplier: 0.5,
  permanent: true
});