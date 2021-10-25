const events = require("random/events");

Events.on(ClientLoadEvent, h => {
  Vars.ui.hudGroup.find("minimap/position").row();
  Vars.ui.hudGroup.find("minimap/position").button("Debug", () => {events.starterEvent()}).size(120, 40).padTop(300);
});