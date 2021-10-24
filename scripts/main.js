require("vanillaModif/modifBullets");
require("vanillaModif/vanillaModifs");
require("random/effects");
require("random/events");

let c = 0;

const descArray = [
  "Hmm?",
  "Go away!",
  "Stop it!",
  "*anger*",
  "How many times are you gonna tease me!?",
  "Stop teasing me!",
];

function descArrayRandomizer(){
  descArray[Mathf.floor(Mathf.random() * descArray.length)];
};

function ntsh(){
  Vars.ui.showCustomConfirm(
  "Someone:",
  descArrayRandomizer(),
  "???",
  "Leave",
  () => {
    ntsh();
    descArrayRandomizer()
    c = c + 1;
  },
  () => {
    print("nothing...");
  }
)
};

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