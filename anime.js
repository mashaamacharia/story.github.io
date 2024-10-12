function choosePath(choice) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    
    if (choice === 'forest') {
        // Scene 1: Forest Exploration
        storyText.textContent = "You walk deeper into the forest and meet a talking tree. It offers you a riddle!";
        storyImage.src = "images/riddle.jpeg";
        
        // New Choices
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('riddle')">Solve the Riddle</button>
            <button onclick="choosePath('continue')">Keep Walking</button>
        `;
        
    } 
    else if (choice === 'continue') {
        // Scene after choosing to keep walking
        storyText.textContent = "You continue walking and arrive at a crossroads. Do you enter a cave or cross the river?";
        storyImage.src = "images/cross-road.jpeg"; // Add an appropriate image for this scene
        
        // New Choices: Cave or River
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('cave')">Enter the Cave</button>
            <button onclick="choosePath('river')">Cross the River</button>
        `;
        
    }else if (choice === 'cloud') {
        // Scene 2: Magic Cloud Ride
        storyText.textContent = "You hop onto the magic cloud and fly over the forest. The view is amazing!";
        storyImage.src = "images/cloud.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('land')">Land in the Forest</button>
            <button onclick="choosePath('explore-sky')">Explore the Sky</button>
        `;
        
    } 
    else if (choice === 'land') {
        // Scene after landing from the magic cloud
        storyText.textContent = "You gracefully land in the heart of an enchanted forest. A majestic stag greets you and leads you to an ancient shrine hidden within the trees.";
        storyImage.src = "images/shrine.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('explore-shrine')">Explore the Shrine</button>
            <button onclick="choosePath('follow-stag')">Follow the Stag</button>
        `;
        
    } else if (choice === 'explore-sky') {
        // Extended scene: Exploring the sky
        storyText.textContent = "As you glide higher into the sky, you notice magical islands floating among the clouds. You land on one of the islands where you find an ancient wizard who offers to grant you one wish.";
        storyImage.src = "images/floating-island.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('wish-power')">Wish for Power</button>
            <button onclick="choosePath('wish-knowledge')">Wish for Knowledge</button>
        `;
        
    } else if (choice === 'wish-power') {
        // Story conclusion for wishing for power
        storyText.textContent = "You wish for immense power, and the wizard grants it. However, with great power comes great responsibility, and you must now use your strength wisely to protect the magical realm.";
        storyImage.src = "images/power.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('finish')">Finish the Adventure</button>
        `;
        
    } else if (choice === 'wish-knowledge') {
        // Story conclusion for wishing for knowledge
        storyText.textContent = "You wish for infinite knowledge, and the wizard grants it. You now possess the wisdom of ages, understanding the mysteries of the universe and how to maintain balance in the magical world.";
        storyImage.src = "images/knowledge.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('finish')">Finish the Adventure</button>
        `;
        
    } else if (choice === 'explore-shrine') {
        // Scene: Exploring the shrine
        storyText.textContent = "Inside the ancient shrine, you find a mystical artifact glowing with a soft light. As you touch it, you are filled with a sense of peace and realize you’ve been chosen to protect the forest’s magic.";
        storyImage.src = "images/artifact.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('finish')">Take the Artifact and Finish the Adventure</button>
        `;
        
    } else if (choice === 'follow-stag') {
        // Scene: Following the stag
        storyText.textContent = "You follow the stag deeper into the forest, where it leads you to a hidden waterfall. There, you find a hidden entrance to a magical grove that holds untold treasures.";
        storyImage.src = "images/waterfall.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('finish')">Discover the Treasures and Finish the Adventure</button>
        `;
        
    } else if (choice === 'finish') {
        // Final Scene: The End
        storyText.textContent = "Congratulations! You've completed your adventure and discovered the secrets of the magical world!";
        storyImage.src = "images/treasure.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="location.reload()">Start Again</button>
        `;
    }
    else if (choice === 'riddle') {
        // Scene 3: The Riddle Challenge
        storyText.textContent = "The tree asks: 'What has roots as nobody sees, Is taller than trees, Up, up it goes, And yet never grows?'";
        storyImage.src = "images/question.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('answer-mountain')">Answer: Mountain</button>
            <button onclick="choosePath('answer-tree')">Answer: Tree</button>
        `;
        
    } else if (choice === 'answer-mountain') {
        // Correct answer
        storyText.textContent = "The tree smiles and says: 'Correct! You may pass!' You continue on your adventure!";
        storyImage.src = "images/smile.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('cave')">Enter the Cave</button>
            <button onclick="choosePath('river')">Cross the River</button>
        `;
        
    } else if (choice === 'answer-tree') {
        // Incorrect answer
        storyText.textContent = "The tree shakes its head. 'That is incorrect. Try again.'";
        storyImage.src = "images/angry.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('riddle')">Try the Riddle Again</button>
        `;
        
    } else if (choice === 'cave') {
        // Scene 4: Cave Adventure
        storyText.textContent = "You enter a dark cave and hear a growl... A friendly dragon appears and offers you a ride!";
        storyImage.src = "images/cave.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('ride-dragon')">Ride the Dragon</button>
            <button onclick="choosePath('walk-out')">Walk Out of the Cave</button>
        `;
        
    } else if (choice === 'river') {
        // Scene 5: River Crossing
        storyText.textContent = "You reach a rushing river. A wise owl offers to fly you across. Do you trust the owl?";
        storyImage.src= "images/river.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('fly-with-owl')">Fly with the Owl</button>
            <button onclick="choosePath('build-raft')">Build a Raft</button>
        `;
        
    } else if (choice === 'ride-dragon') {
        // Scene 6: Dragon Ride
        storyText.textContent = "You soar through the sky on the dragon's back. You see a magical tree in the distance!";
        storyImage.src = "images/dragon.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('magic-tree')">Approach the Magic Tree</button>
        `;
        
    } else if (choice === 'walk-out') {
        // Exiting the Cave
        storyText.textContent = "You walk out of the cave, deciding that a peaceful journey is the way forward.";
        storyImage.src = "images/walk-out.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('finish')">Finish the Adventure</button>
        `;
        
    } else if (choice === 'fly-with-owl') {
        // Scene 7: Flying with the Owl
        storyText.textContent = "The wise owl carries you safely across the river. You feel wiser and stronger for trusting it.";
        storyImage.src = "images/owlfly.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('magic-tree')">Head to the Magic Tree</button>
        `;
        
    } else if (choice === 'build-raft') {
        // Scene 8: Building a Raft
        storyText.textContent = "You build a sturdy raft and paddle across the river. You feel accomplished and ready for what's next.";
        storyImage.src = "images/raft.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('magic-tree')">Approach the Magic Tree</button>
        `;
        
    } else if (choice === 'magic-tree') {
        // Scene 9: Reaching the Magic Tree
        storyText.textContent = "You reach the magic tree. Its branches glow, and you find a treasure waiting for you!";
        storyImage.src = "images/magic-tree.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="choosePath('finish')">Take the Treasure and Finish the Adventure</button>
        `;
        
    } else if (choice === 'finish') {
        // Final Scene: The End
        storyText.textContent = "Congratulations! You've completed your adventure and discovered the treasure of the magic forest!";
        storyImage.src = "images/magic-tree.jpeg";
        
        document.querySelector('.choices').innerHTML = `
            <button onclick="location.reload()">Start Again</button>
        `;
    }
}
