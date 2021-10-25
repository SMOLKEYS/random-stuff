const events = require("random/events");
//please dont paradox
const menuEvents = require("main");

function createTextButton(loc, buttonContent, script, sizeX, sizeY, level){
  Vars.ui.hudGroup.find(loc).row();
  Vars.ui.hudGroup.find(loc).button(buttonContent, script).size(sizeX, sizeY).padTop(level)
}

function createImageTextButton(loc, image, buttonContent, script, sizeX, sizeY, level){
  Vars.ui.hudGroup.find(loc).row();
  Vars.ui.hudGroup.find(loc).button(image, buttonContent, script).size(sizeX, sizeY).padTop(level)
}

function createImageButton(loc, image, script, sizeX, sizeY, level) {
  Vars.ui.hudGroup.find(loc).row();
  Vars.ui.hudGroup.find(loc).button(image, script).size(sizeX, sizeY).padTop(level)
}

//find code more atrocious than this, i'll wait
Events.on(ClientLoadEvent, h => {
  createTextButton("minimap/position", "SHEvent", () => {events.starterEvent()}, 120, 40, 290);
  createTextButton("minimap/position", "SHPopup", () => {
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
  createTextButton("minimap/position", "MenuPopup", () => {menuEvents.ntsh()}, 160, 40, 15);
  createTextButton("minimap/position", "SIMP", () => {Groups.unit.each(a => a.apply(Vars.content.getByName(ContentType.status, "random-stuff-onlySeiSimp"), Number.MAX_VALUE))}, 90, 40, 15);
  createImageButton("minimap/position", Icon.star, () => {
    Threads.throwAppException(new Throwable("star"))
  }, 90, 90, 45);
});