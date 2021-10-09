//kill me
const sus = require("susEffects")

const whiteLiquid = extend(Liquid, {
  viscosity: 0.7,
  color: Color.valueOf("ffffff"),
  effect: sus.dubious
});

module.exports = {
  whiteLiquid: whiteLiquid
};

Log.info("RandomStuffs: Sus liquids inited");