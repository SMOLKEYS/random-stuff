//vanilla modifications
require("vanillaModif/modifBullets");
require("vanillaModif/vanillaModifs");

//lmao
Events.on(ClientLoadEvent, e => {
  Vars.ui.showCustomConfirm(
    fear me,
    UNLIMITED POWER,
    go away,
    perhape,
    () => {
      Core.app.exit();
    },
    () => {
      print("the j");
    }
  );
});