//builds a fake crash log
//use it to scare the literal hell out of new players
function buildFakeCrash(crashText) {
    Core.settings.getDataDirectory().child("crashes").child("crash_" + System.currentTimeMillis() + ".txt").writeString(CrashSender.createReport(crashText));
    Core.app.exit()
};