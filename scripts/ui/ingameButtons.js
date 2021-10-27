const events = require("random/events");
const menuEvents = require("main");
const buttons = require("libs/buttonLib")

//find code more atrocious than this, i'll wait
//dunno if ClientLoadEvent is needed, but im keeping it anyways
Events.on(ClientLoadEvent, h => {
  buttons.createTextButton("minimap/position", "SHEvent", () => {
    events.starterEvent()
  }, 120, 40, 55);
  buttons.createTextButton("minimap/position", "SHPopup", () => {
    let rnd = Mathf.floor(Mathf.random() * 3);
    if (rnd == 2) {
      let imageDialog = new BaseDialog("Image");
      imageDialog.cont.image(Core.atlas.find("random-stuff-" + events.imageArrayRandomizer()));
      imageDialog.addCloseButton();
      imageDialog.show();
    } else {
      Vars.ui.showInfo(events.textArrayRandomizer());
    }
  }, 120, 40, 15);
  buttons.createTextButton("minimap/position", "MenuPopup", () => {
    menuEvents.ntsh()
  }, 160, 40, 15);
  buttons.createTextButton("minimap/position", "SIMP", () => {
    Groups.unit.each(a => a.apply(Vars.content.getByName(ContentType.status, "random-stuff-onlySeiSimp"), Number.MAX_VALUE))
  }, 90, 40, 15);
  buttons.createImageButton("minimap/position", Icon.hammer, () => {
    Threads.throwAppException(new Throwable("Ilya246 has banned you from the game."))
  }, 50, 50, 15);
  buttons.createTextButton("minimap/position", "kill", () => {
    let rnd = Mathf.floor(Mathf.random() * 2);
    if(rnd == 0) {
      let deathArrayRandomizer = () => events.deathArray[Mathf.floor(Mathf.random() * events.deathArray.length)]
      Vars.ui.showInfo(events.userArrayRandomizer1() + " kills " + events.userArrayRandomizer2() + " " + events.deathArrayRandomizer())
    };
    if(rnd == 1) {
      Vars.ui.showInfo(events.userArrayRandomizer1() + " tries to kill " + events.userArrayRandomizer2() + " but fails.")
    };
    if(rnd == 2) {
      events.accidentArrayRandomizer();
      events.accidentArray[Math.floor(Math.random() * events.accidentArray.length)];
      Vars.ui.showInfo(events.userArrayRandomizer1() + " " + events.accidentArrayRandomizer())
    }
  }, 90, 40, 20);
  buttons.createTextButton("minimap/position", "*dies*", () => {
    let accidentArrayRandomizer = () => events.accidentArray[Mathf.floor(Mathf.random() * events.accidentArray.length)]
    Vars.ui.showInfo(events.userArrayRandomizer1() + " " + accidentArrayRandomizer())
  }, 90, 40, 15)
});