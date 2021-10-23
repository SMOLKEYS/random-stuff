require("vanillaModif/modifBullets");
require("vanillaModif/vanillaModifs");
require("random/effects");

let c = 0;

const descArray = [
  "Hmm?",
  "Go away!",
  "Stop it!",
  "*anger*"
];

let descArrayOut = () => descArray[Mathf.floor(Mathf.random() * descArray.length)];


const ntsh = () => Vars.ui.showCustomConfirm(
  "Nothing.",
  descArrayOut(),
  "???",
  "Leave",
  () => {
    ntsh();
    let descArrayOut = descArray[Mathf.floor(Mathf.random() * descArray.length)];
    c = c + 1;
  },
  () => {
    print("nothing...");
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