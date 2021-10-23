require("vanillaModif/modifBullets");
require("vanillaModif/vanillaModifs");
require("random/effects");

let c = 0;

const ntsh = () => Vars.ui.showCustomConfirm(
  "Nothing.",
  "Nothing.",
  "???",
  "Leave",
  () => {
    if(c == 11) {
      Vars.ui.showErrorMessage("[red]Get out.")
    } else {
      ntsh();
      let c = c + 1;
    }
  },
  () => {
    print("nothing...")
  }
  )

//lmao
Events.on(ClientLoadEvent, e => {
  Vars.ui.showCustomConfirm(
    "fear me",
    "UNLIMITED POWER",
    "???",
    "perhape",
    () => {
      ntsh();
      let c = c + 1;
    },
    () => {
      print("the j");
    }
  );
});