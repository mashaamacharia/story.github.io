function toggleMusic() {
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');

    if (music.paused) {
        music.play();
        musicToggle.textContent = 'Mute Music';
    } else {
        music.pause();
        musicToggle.textContent = 'Play Music';
    }
}
function choosePath(choice) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    
    if (choice === 'forest') {
        // Play a sound when entering the forest
        document.getElementById('tree-sound').play();

        storyText.textContent = "You walk deeper into the forest and meet a talking tree. It offers you a riddle!";
        storyImage.src = "tree.jpg";

        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('riddle')">Solve the Riddle</button>
            <button onclick="choosePath('continue')">Keep Walking</button>
        `;
    } else if (choice === 'cloud') {
        // Play a magic sound when riding the cloud
        document.getElementById('spell-sound').play();

        storyText.textContent = "You hop onto the magic cloud and fly over the forest. The view is amazing!";
        storyImage.src = "cloud.jpg";

        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('land')">Land in the Forest</button>
            <button onclick="choosePath('explore-sky')">Explore the Sky</button>
        `;
    }
}
