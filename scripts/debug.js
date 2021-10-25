const events = require("random/events");

if(OS.username == "SMOLKEYS"){
  Vars.ui.hudGroup.find("minimap/position").row();
  Vars.ui.hudGroup.find("minimap/position").button("Debug", events.starterEvent()).size(120, 40).padTop(300);
};