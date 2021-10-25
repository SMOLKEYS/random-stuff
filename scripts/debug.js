const events = require("random/events");
//please dont paradox
const menuEvents = require("main");

function createIngameButton(loc, buttonContent, script, sizeX, sizeY, level){
  Vars.ui.hudGroup.find(loc).row();
  Vars.ui.hudGroup.find(loc).button(buttonContent, script).size(sizeX, sizeY).padTop(level)
}

//find code more atrocious than this, i'll wait
Events.on(ClientLoadEvent, h => {
  createIngameButton("minimap/position", "SHEvent", () => {events.starterEvent()}, 120, 40, 290);
  createIngameButton("minimap/position", "SHPopup", () => {
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
  createIngameButton("minimap/position", "MenuPopup", () => {menuEvents.ntsh()}, 160, 40, 15);
  createIngameButton("minimap/position", "SIMP", () => {Groups.unit.each(a => a.apply(Vars.content.getByName(ContentType.effect, "random-stuff-onlySeiSimp"), Number.MAX_VALUE))}, 90, 40, 15);
});