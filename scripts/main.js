//vanilla modifications
require("vanillaModif/modifBullets");
require("vanillaModif/vanillaModifs");

//lmao
Events.on(ClientLoadEvent, e => {
  Vars.ui.showCustomConfirm(
    "fear me",
    "UNLIMITED POWER",
    "go away",
    "perhape",
    () => {
      Threads.throwAppException(new Throwable("Deleted most recent custom game save and most recent campaign save."))
    },
    () => {
      print("the j");
    }
  );
});