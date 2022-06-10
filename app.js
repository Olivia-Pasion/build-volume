
// state
function getDefaultVolume() {
    
    const defaultVolume = {
        level: 10,
    };
    return defaultVolume;
    
}

let volume = getDefaultVolume();
let click = false;



//variables
const controlsSection = document.getElementById('controls-section');

const [downButton, upButton] = controlsSection.querySelectorAll('button');
let volumeDisplay = controlsSection.querySelector('span');
console.log(volumeDisplay);

//event listeners

downButton.addEventListener('click', () => {
    
    downLevel();
    levelDisplay();
    volumeDisplay.textContent = volume.value;
    console.log(volume.level);
    
});

upButton.addEventListener('click', () => {
    upLevel();
    levelDisplay();
    volumeDisplay.textContent = volume.value;
    console.log(volume.level);
    
});




function downLevel() {
    click = true;
    volumeDisplay = volume.level;
    if (volume.level > 0) {
        volume.level--;
    } 
    return 0; 
}

function upLevel() {
    click = true;
    volumeDisplay = volume.level;
    if (volume.level < 20) {
        volume.level++;
    }
    return 20;
}





function levelDisplay() {
    
    
    
    
}
    


// component
    // define and grab DOM elements
    // display functions
    // subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components


// page load actions
upLevel();
downLevel();
levelDisplay();