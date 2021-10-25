const events = require("random/events");
//please dont paradox
const menuEvents = require("main");

Events.on(ClientLoadEvent, h => {
  Vars.ui.hudGroup.find("minimap/position").row();
  Vars.ui.hudGroup.find("minimap/position").button("SHEvent", () => {events.starterEvent()}).size(120, 40).padTop(300);
  Vars.ui.hudGroup.find("minimap/position").row();
  Vars.ui.hudGroup.find("minimap/position").button("SHPopup", () => {
    let rnd = Mathf.floor(Mathf.random() * 3);
    if (rnd == 2) {
      let imageDialog = new BaseDialog("Image");
      imageDialog.cont.image(Core.atlas.find("random-stuff-" + events.imageArrayRandomizer()));
      imageDialog.addCloseButton();
      imageDialog.show();
    } else {
      Vars.ui.showInfo(events.textArrayRandomizer());
    }
  }).size(120, 40).padTop(20);
  Vars.ui.hudGroup.find("minimap/position").row();
  Vars.ui.hudGroup.find("minimap/position").button("MenuPopup", () => {menuEvents.ntsh()}).size(120, 40).padTop(20);
});