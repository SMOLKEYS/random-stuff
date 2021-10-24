const textArray = [
  "How did you get here?",
  "What are you doing here?",
  "There isn't really anything to do here."
];

const imageArray = [
  "antumbra",
  "error",
  "copper",
  "oct",
  "scepter"
];

const textArrayRandomizer = () => textArray[Mathf.floor(Mathf.random() * textArray.length)];

const imageArrayRandomizer = () => imageArray[Mathf.floor(Mathf.random() * imageArray.length)];

function starterEvent(){
Vars.ui.showCustomConfirm(
  "Something happened.",
  "Would you like to see what it is?",
  "Yes",
  "No",
  () => {
    let rnd = Mathf.floor(Mathf.random() * 3);
    if(rnd == 2){
      let imageDialog = new BaseDialog("Image");
      imageDialog.cont.image(Core.atlas.find(imageArrayRandomizer()));
      imageDialog.addCloseButton();
      imageDialog.show();
    } else {
      Vars.ui.showInfo(textArrayRandomizer());
    }
  },
  () => {
    print("No");
  }
);
};

Events.on(WorldLoadEvent, wle => {
  let rnd2 = Mathf.floor(Mathf.random * 5);
  if(rnd2 == 3){
    starterEvent()
  }
});

Events.on(TapEvent, te => {
  let rnd3 = Mathf.floor(Mathf.random() * 30);
  if(rnd3 == 25){
    starterEvent()
  }
});