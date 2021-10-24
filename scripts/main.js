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

const descArrayRandomizer = () => descArray[Mathf.floor(Mathf.random() * descArray.length)];

function ntsh(){
  Vars.ui.showCustomConfirm(
  "Someone:",
  descArrayRandomizer(),
  "???",
  "Leave",
  () => {
    ntsh();
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
      let test = new BaseDialog("test");
      test.cont.image(Core.atlas.find("/scenes/unforseenScenes/unforseenScene1"));
      test.addCloseButton();
      test.show();
    }
  );
});