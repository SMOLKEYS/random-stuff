//create a normal text button
function createTextButton(loc, buttonContent, script, sizeX, sizeY, level) {
    Vars.ui.hudGroup.find(loc).row();
    Vars.ui.hudGroup.find(loc).button(buttonContent, script).size(sizeX, sizeY).padTop(level)
}

//create a normal text button with an image
function createImageTextButton(loc, image, buttonContent, script, sizeX, sizeY, level) {
    Vars.ui.hudGroup.find(loc).row();
    Vars.ui.hudGroup.find(loc).button(image, buttonContent, script).size(sizeX, sizeY).padTop(level)
}

//create a normal image button
function createImageButton(loc, image, script, sizeX, sizeY, level) {
    Vars.ui.hudGroup.find(loc).row();
    Vars.ui.hudGroup.find(loc).button(image, script).size(sizeX, sizeY).padTop(level)
}

module.exports = {
    createTextButton: createTextButton,
    createImageButton: createImageButton,
    createImageTextButton: createImageTextButton
}
