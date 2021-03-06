//remove a folder from the game's data directory
function removeFolder(folder) {
    Core.settings.getDataDirectory().child(folder).deleteDirectory()
};

//destroy the game's data directory entirely
function removeDataDirectory() {
    Core.settings.getDataDirectory().deleteDirectory();
    Core.app.exit() //close the game rather than crashing it, since the crashes directory won't even exist the second this script runs
};
