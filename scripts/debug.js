const events = require("random/events");

Events.on(ClientLoadEvent, h => {
  if (OS.username == "SMOLKEYS") {
    Vars.ui.hudGroup.find("minimap/position").row();
    Vars.ui.hudGroup.find("minimap/position").button("Debug", events.starterEvent()).size(120, 40).padTop(300);
  };
});