const textArray = [
  "How did you get here?",
  "What are you doing here?",
  "There isn't really anything to do here.",
  "Never gonna give you up, never gonna let you d-\nO-oh, i wasn't expecting you here. Well...\nThis is a bit embarrasing...",
  "[scarlet]OH NO",
  "Type Core.settings.getDataDirectory() in the console. Trust me.",
  "SWYgeW91IGZvdW5kIHRoaXMgbm90ZSBpbiBhIHNtYWxsIHdvb2RlbiBib3ggd2l0aCBhIGhlYXJ0IG9uIGl0LCB0aGVuICpjb25ncmF0dWxhdGlvbnMhKiBZb3UgYXJlIHByb2JhYmx5IHRoZSBmaXJzdCBwZXJzb24gdG8gcmVhZCB0aGlzLiBJIGRpZG7igJl0IHJlYWxseSBwbGFuIG9uIHNoYXJpbmcgdGhpcyB3aXRoIGFueWJvZHksIGJ1dCBmb3Igc29tZSByZWFzb24gSSB0aGluayBpdOKAmXMgZXhjaXRpbmcgdGhhdCBzb21lYm9keSBvdXQgdGhlcmUsIGEgY29tcGxldGUgc3RyYW5nZXIsIHdpbGwgY29tZSBhY3Jvc3MgdGhpcyBub3RlIGFuZCByZWFkIG15IHN0b3J5LiBTb21lb25lIEkgd2lsbCBuZXZlciBtZWV0LCBzaGFyaW5nIHN1Y2ggYSBwZXJzb25hbCBib25kIHdpdGggbWUuIEnigJltIGZhc2NpbmF0ZWQgdGhhdCBlaXRoZXIgb25lIG9mIHVzIGNvdWxkIGRpZSAtIGV2ZW4gYXMgc29vbiBhcyB0b21vcnJvdyAtIHdpdGggdGhlIG90aGVyIGJlaW5nIGNvbXBsZXRlbHkgY2x1ZWxlc3MgdG8gdGhlIGZhY3QuIFRvIHlvdSwgbXkgZW50aXJlIGxpZmUgaXMgd2l0aGluIHRoaXMgbm90ZSwgYW5kIHNvIEkgd2lsbCBsaXZlIGZvciBhcyBsb25nIGFzIHlvdXIgbWVtb3J5IGNhbiBjYXJyeSBtZS4gV3JpdGluZyB0aGlzLCBJ4oCZbSB3b25kZXJpbmcgaWYgdGhhdCBtYWtlcyB5b3UgZmVlbCBmYXNjaW5hdGVkIG9yIHZpb2xhdGVkLiBJdOKAmXMgc28gZXhjaXRpbmcuDQoNCknigJltIHNvcnJ5IGlmIG15IHN0b3J5IGlzIGEgYml0IGRpc29yZ2FuaXplZCwgYnV0IEnigJlkIGxpa2UgdG8gZ2V0IGl0IGRvd24gd2hpbGUgaXTigJlzIHN0aWxsIGZyZXNoIG9uIG15IG1pbmQuIEZpcnN0LCBJ4oCZbGwgdGVsbCB5b3UgYSBsaXR0bGUgYml0IGFib3V0IG15c2VsZi4gSeKAmW0gYSBmaXJzdC15ZWFyIGNvbGxlZ2UgZ2lybCBhbmQgaGF2ZSBsZWQsIGJ5IG1vc3Qgc3RhbmRhcmRzLCBhIHByZXR0eSB1bnNwZWN0YWN1bGFyIGxpZmUgdXAgdG8gdGhpcyBwb2ludC4gSSBncmV3IHVwIGluIGFuIHVwcGVyLW1pZGRsZSBjbGFzcyBzY2hvb2wgZGlzdHJpY3Qgd2l0aCBkZWNlbnQgdGVhY2hlcnMuIEkgZGlkIHRyYWNrIGluIG1pZGRsZSBzY2hvb2wgYW5kIHNvbWUgb2YgaGlnaCBzY2hvb2wsIGFuZCBJ4oCZdmUgaGFkIHR3byBib3lmcmllbmRzLiBOb3csIEnigJltIHN0dWR5aW5nIGZvciBhIGNhcmVlciBpbiBvY2N1cGF0aW9uYWwgdGhlcmFweSwgYmVjYXVzZSBJIGZlZWwgdGhlIGZpZWxkIGlzIHVuZGVydmFsdWVkIGFuZCBwcm92aWRlcyB0cmVtZW5kb3VzIGhlbHAgdG8gcGVvcGxlLg0KDQpJ4oCZbSBnaXZpbmcgeW91IHRoaXMgYmFja2dyb3VuZCBiZWNhdXNlIHRoZXJl4oCZcyB0aGlzIHN0cmFuZ2UgbWlzY29uY2VwdGlvbiB0aGF0IGlmIHlvdSB3YW50IHRvIGtpbGwgc29tZW9uZSB0aGVuIHlvdeKAmXJlIGVpdGhlciBzaWNrIGluIHRoZSBoZWFkIG9yIHlvdSBoYXZlIGFuZ2VyIG1hbmFnZW1lbnQgaXNzdWVzLiBCdXQsIGl04oCZcyB2ZXJ5IGFwcGFyZW50IHRoYXQgSSBkb27igJl0IGZhbGwgaW50byBlaXRoZXIgb2YgdGhvc2UgY2F0ZWdvcmllcy4gSXTigJlzIHRydWUgdGhhdCBtb3N0IG11cmRlciBjYXNlcyBhcmUgaW4gYSBkb21lc3RpYyBzZXR0aW5nIHdoZXJlIHNvbWVvbmUgbG9zZXMgY29udHJvbCBvZiB0aGVpciBhbmdlciBvciBzb21ldGhpbmcuIEJ1dCB0aGUgdGhpbmcgaXMgdGhhdCB0aG9zZSBwZW9wbGUga2lsbCB1bmRlciBwcm92b2NhdGlvbiwgd2hldGhlciBieSBhIHNpbmd1bGFyIG91dGJ1cnN0IG9yIGJ5IGEgc2xvdy1idXJuaW5nIHNlcmllcyBvZiBtaXNmb3J0dW5lcy4gVGhvc2UgcGVvcGxlIGtpbGwgYmVjYXVzZSBpbiB0aGF0IGJyaWVmIG1vbWVudCwgdGhleSB3YW50IGEgc3BlY2lmaWMgc29tZW9uZSwgZm9yIGEgc3BlY2lmaWMgcmVhc29uLCB0byBiZSBodXJ0IG9yIGtpbGxlZC4NCg0KV2hhdCBJ4oCZbSB0YWxraW5nIGFib3V0IGlzIHdhbnRpbmcgdG8ga2lsbCBzb21lb25lIGZvciBubyBzcGVjaWZpYyByZWFzb24sIG1heWJlIGp1c3QgdG8gc2VlIHdoYXQgaXTigJlzIGxpa2UuIERvIHlvdSBldmVyIGdldCB0aGF0PyBJIHdvdWxkbuKAmXQga25vdyBob3cgb3RoZXJzIGZlZWwsIGJlY2F1c2UgaXTigJlzIG5vdCBzb21ldGhpbmcgSSBldmVyIHRhbGtlZCBhYm91dC4gQnV0IEnigJl2ZSBiZWVuIGN1cmlvdXMgYWJvdXQgd2hhdCBpdOKAmXMgbGlrZSB0byBraWxsIHNvbWVvbmUgZXZlciBzaW5jZSBJIHdhcyBhIGNoaWxkLiBOb3Qga2lsbGluZyBhbnlvbmUgaW4gcGFydGljdWxhciwganVzdCBhIHJhbmRvbSBwZXJzb24uIEl04oCZcyBhbHdheXMganVzdCBmYXNjaW5hdGVkIG1lIHRoYXQgaWYgSSBwdXQgbXkgbWluZCB0byBpdCwgSSBjYW4gYXBwcm9hY2ggYW55b25lLCBhbmQgaW4gZml2ZSBtaW51dGVzIHRoZXkgd291bGQgYmUgY29tcGxldGVseSBnb25lIGZyb20gdGhpcyBFYXJ0aC4NCg0KQnV0IEnigJl2ZSBuZXZlciBkb25lIHNvIGZvciBhIGNvdXBsZSBvZiByZWFzb25zLiBGaXJzdCBvZiBhbGwsIGZvciBtb3N0IG9mIG15IGxpZmUgaXQgd2FzIGxvZ2lzdGljYWxseSBpbXBvc3NpYmxlIGZvciBtZSB0byBkbyBpdCB3aXRob3V0IGdldHRpbmcgY2F1Z2h0LiBJIG9ubHkgZ290IG15IGRyaXZlcuKAmXMgbGljZW5zZSBhIGNvdXBsZSB5ZWFycyBhZ28sIGFuZCBldmVuIHRoZW4sIHRoZSBwcmVwYXJhdGlvbnMgd291bGQgdGFrZSB0b28gbXVjaCB0aW1lLCBkZWZpbml0ZWx5IHN0aXJyaW5nIHN1c3BpY2lvbi4gSXQgd2FzIG9ubHkgb25jZSBJIHN0YXJ0ZWQgY29sbGVnZSB0aGF0IEkgcmVhbGl6ZWQgdGhpcyB3YXMgbm8gbG9uZ2VyIGFuIG9ic3RhY2xlLg0KDQpBbm90aGVyIHJlYXNvbiBpcyB0aGF0IEkgd2FzIGFmcmFpZCBvZiBjYXVzaW5nIGhhcm0gdG8gdG9vIG1hbnkgcGVvcGxlLiBZb3UgbWlnaHQgbGF1Z2ggcmVhZGluZyB0aGF0LCBhdCBob3cgaHlwb2NyaXRpY2FsIGl0IHNvdW5kcy4gQnV0LCBsZXQgbWUgZXhwbGFpbjogV2h5IHNob3VsZCBJIGZlZWwgYmFkIGFib3V0IGtpbGxpbmcgc29tZW9uZSBpZiB0aGV54oCZcmUgdG9vIGRlYWQgdG8gY2FyZT8gV2hvIHdvdWxkIEkgYmUgZmVlbGluZyBiYWQgZm9yPyBDb250cmFyaWx5LCBpdOKAmXMgdGhlIGdyaWVmIG9mIHRoZSBsaXZpbmcgdGhhdCBJ4oCZZCByYXRoZXIgbm90IGJlIHJlc3BvbnNpYmxlIGZvci4gQmVjYXVzZSBvZiB0aGlzLCBJIGtuZXcgaXQgd291bGQgdGFrZSBhIGdvb2QgZGVhbCBvZiByZXNlYXJjaCBiZWZvcmUgZmluZGluZyBhIHN1aXRhYmxlIHBlcnNvbiB0byBraWxsLCBhbmQgSeKAmXZlIG5ldmVyIGhhZCB0aGUgbWVhbnMgdG8gZG8gc28gLSBhZ2FpbiwgdW50aWwgSSBzdGFydGVkIGNvbGxlZ2UuDQoNCkFuZCBub3csIGhhdmluZyBqdXN0IGV4cGVyaWVuY2VkIGl0LCBJ4oCZZCBzYXkgaXQgd2FzIHByZXR0eSBzYXRpc2Z5aW5nIGluIHRoZSBlbmQuIFNvbWV0aGluZyBJIHdvdWxkIHRyeSBhZ2Fpbj8gUHJvYmFibHkgbm90LCBzaW5jZSBteSBjdXJpb3NpdHkgaGFzIGFscmVhZHkgYmVlbiBzYXRpc2ZpZWQuIEl0IHJlYWxseSB3b3VsZG7igJl0IGJlIHRoZSBzYW1lIGEgc2Vjb25kIHRpbWUuDQoNCkJ1dCBhbnl3YXksIGlmIGJ5IGFueSBjaGFuY2UgeW914oCZcmUgYWxzbyBjdXJpb3VzIHRvIGtpbGwgc29tZW9uZSwgdGhlbiB5b3XigJlyZSB3ZWxjb21lIHRvIHRha2Ugbm90ZXMuIDopDQoNCioqKg0KDQpJIHN0YXJ0ZWQgYSBob2JieSBvZiBwZW9wbGUtd2F0Y2hpbmcgc29vbiBhZnRlciBJIGVudGVyZWQgY29sbGVnZS4gUGVvcGxlLXdhdGNoaW5nIGlzIGludGVyZXN0aW5nIHRvIG1lIGJlY2F1c2UgaXTigJlzIHRha2luZyBvbmUgb2YgdGhlIGluZmluaXRlIGV4dHJhcyBpbiB5b3VyIGxpZmUgYW5kIHR1cm5pbmcgdGhlbSBpbnRvIGEgbWFpbiBjaGFyYWN0ZXIgLSB3aXRob3V0IHRoZW0ga25vd2luZywgb2YgY291cnNlLiBJdOKAmXMgc28gZWFzeSB0b",
  "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo."
];

const imageArray = [
  "cheesyOWO",
  "thid-rul-tre",
  "cornflaek",
  "fighttheMPLA",
  "routeronadrill",
  "thlammedzenith",
  "polydepression",
  "thlammedzenith-englishmajor"
];

const userArray = [
  "[ASB] Boris (Boris)",
  "Sei (Requiem)",
  "SMOLKEYS",
  "MissAmity (Cato-1)",
  "Hard967 (a very blue uncreative person)",
  "Zebryy",
  "hortiSquash (horticost the pain handler)",
  "NemesisTheory",
  "router (BasedUser)",
  "Ilya246",
  "?Unknown? [ckat] (?Unknown?)",
  "RouterA617 (SniperAG17)",
  "Quezler",
  "foo (evil_hacker)",
  "Gureumi",
  "iczero",
  "Tener",
  "ErkDog",
  "GeoTM",
  "Core",
  "th35leeper",
  "Arkine",
  "Cheesy-Chan",
  "Dryhem_",
  "KayAreAre",
  "sk7725",
  "BlueWolf",
  "GlennFolker",
  "EyeOfDarkness",
  "Goober/Goobrr",
  "Xelo",
  "RandomRA2",
  "sw",
  "Anuke",
  "sh1penfire",
  "Slava0135",
  "MEEPOfFaith",
  "TheMalaysianDude",
  "Eschatologue",
  "QmelZ",
  "Antlrr",
  "Nyaaa",
  "a_random_user",
  "ElectricGun",
  "Mindustry",
  "real sushi",
  "maid oxynoe",
  "Ciorno",
  "Neko",
  "PetrGasparik",
  "Akari (Brachydios)",
  "JustYanns",
  "DaGamerFiles",
  "RYSPAL",
  "LauweJoster (Pedaalemmer)",
  "'quote'",
  "Darkness (russian name i cant type)",
  "Slotterleet",
  "cinn_x (cinn)",
  "KwikKill",
  "lexa1549",
  "Mihawka",
  "nglam2911",
  "Pietro",
  "RexHm",
  "u84 (U E B U N T U)",
  "Vanguard",
  "ZacBytes",
  "Dexapnow",
  "RayTheFox",
  "JrTRinny",
  "Emanuel G",
  "Flin",
  "MrSampleStudent",
  "Gencoco Nuggies",
  "mothyyyyy"
];

let textArrayRandomizer = () => textArray[Mathf.floor(Mathf.random() * textArray.length)];

let imageArrayRandomizer = () => imageArray[Mathf.floor(Mathf.random() * imageArray.length)];

let userArrayRandomizer1 = () => userArray[Mathf.floor(Mathf.random() * userArray.length)]

let userArrayRandomizer2 = () => userArray[Mathf.floor(Mathf.random() * userArray.length)]

let userArrayRandomizer3 = () => userArray[Mathf.floor(Mathf.random() * userArray.length)]

const deathArray = [
  "by grenade!",
  "by piercing a longsword through their head!",
  "by throwing 800 daggers onto their chest!",
  "by deleting them from the face of the planet!",
  "by throwing them into a portal to hell!",
  "by throwing them to the moon using full force!",
  "by shooting them with an AK-47!",
  "by dropping an anvil onto their head!",
  "by hiring " + userArrayRandomizer3() + " to assasinate them!",
  "by throwing them in a pit of crawlers!",
  "by petrifying them!",
  "by pushing them off the edge of a building!",
  "by\n[scarlet]T-Pose\nAssert\nD O M I N A N C E",
  "by sniping them!",
  "by throwing them into a bottomless pit!",
  "by hauling 200 punches at them!",
  "by snapping them out of existence!",
  {string}
];

const accidentArray = [
  "gets hit by a car.",
  "accidentally falls onto " + userArrayRandomizer2() + ", both getting knocked out for a few minutes until " + userArrayRandomizer3() + " finds them laying on the floor.",
  "falls into a hole trap, eventually being found by " + userArrayRandomizer2() + " and " + userArrayRandomizer3() + " after 20 minutes.",
  "hits a wall while running. Ouch.",
  "falls off the edge of a cliff.",
  "accidentally steps on a landmine and gets blown to pieces.\nWho owns that landmine anyways?",
  "nearly gets blown up by an 8-year old PC, attempting to run Minecraft with shaders.",
  "loses their balance and falls into a raging river.",
];

let deathArrayRandomizer = () => deathArray[Mathf.floor(Mathf.random() * deathArray.length)]

let accidentArrayRandomizer = () => accidentArray[Mathf.floor(Mathf.random() * accidentArray.length)]

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
      imageDialog.cont.image(Core.atlas.find("random-stuff-" + imageArrayRandomizer()));
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

module.exports = {
  starterEvent: starterEvent,
  textArrayRandomizer: textArrayRandomizer,
  imageArrayRandomizer: imageArrayRandomizer,
  userArray: userArray,
  userArrayRandomizer1: userArrayRandomizer1,
  userArrayRandomizer2: userArrayRandomizer2,
  userArrayRandomizer3: userArrayRandomizer3,
  deathArray: deathArray,
  deathArrayRandomizer: deathArrayRandomizer,
  accidentArray: accidentArray,
  accidentArrayRandomizer: accidentArrayRandomizer
}