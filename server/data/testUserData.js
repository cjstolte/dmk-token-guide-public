const _ = require("lodash");

const testUserData = {
    collection: [
        { name: "Mickey Mouse", status: 7, ready: true },
        { name: "Minnie Mouse", status: 4, ready: false },
        { name: "Pluto", status: 5, ready: false },
        { name: "Goofy", status: 4, ready: true },
        { name: "Daisy Duck", status: 6, ready: true },
        { name: "Donald Duck", status: 2, ready: true },
        { name: "Pete", status: 4, ready: false },
        { name: "Chip", status: 3, ready: false },
        { name: "Dale", status: 6, ready: true },
        { name: "Scrooge McDuck", status: "unob", ready: false },
        { name: "Huey", status: 4, ready: true },
        { name: "Dewey", status: 6, ready: true },
        { name: "Louie", status: 2, ready: false },
        { name: "Woody", status: 7, ready: true },
        { name: "Jessie", status: 6, ready: false },
        { name: "Buzz Lightyear", status: 4, ready: false },
        { name: "Zurg", status: 2, ready: true },
        { name: "Bo Peep", status: 5, ready: true },
        { name: "Hamm", status: 6, ready: false },
        { name: "Sarge", status: 4, ready: false },
        { name: "Rex", status: 3, ready: true },
        { name: "Bullseye", status: 3, ready: true },
        { name: "Toy Alien", status: 2, ready: false },
        { name: "Ducky", status: 6, ready: false },
        { name: "Bunny", status: 5, ready: true },
        { name: "Forky", status: "unob", ready: false },
        { name: "Cinderella", status: 7, ready: true },
        { name: "Prince Charming", status: 8, ready: true },
        { name: "Fairy Godmother", status: 2, ready: false },
        { name: "Anastasia", status: 6, ready: false },
        { name: "Drizella", status: 5, ready: true },
        { name: "Lady Tremaine", status: 6, ready: true },
        { name: "Peter Pan", status: 3, ready: false },
        { name: "Wendy Darling", status: 4, ready: true },
        { name: "Tinkerbell", status: 7, ready: true },
        { name: "Michael Darling", status: 4, ready: false },
        { name: "John Darling", status: 3, ready: false },
        { name: "Captain Hook", status: 6, ready: true },
        { name: "Elizabeth Swann", status: 5, ready: true },
        { name: "Will Turner", status: 6, ready: true },
        { name: "Jack Sparrow", status: 3, ready: true },
        { name: "Captain Barbossa", status: 2, ready: true },
        { name: "Tia Dalma", status: 1, ready: false },
        { name: "Davy Jones", status: 4, ready: false },
        { name: "Mike", status: 7, ready: false },
        { name: "Sulley", status: 6, ready: true },
        { name: "Boo", status: 5, ready: true },
        { name: "Roz", status: 4, ready: true },
        { name: "Celia Mae", status: 3, ready: true },
        { name: "Randall Boggs", status: 2, ready: true },
        { name: "WALL-E", status: 3, ready: false },
        { name: "EVE", status: 7, ready: true },
        { name: "Rapunzel", status: 4, ready: true },
        { name: "Flynn", status: 6, ready: true },
        { name: "Mother Gothel", status: 3, ready: false },
        { name: "Maximus", status: "unob", ready: false },
        { name: "Pascal", status: 2, ready: false },
        { name: "Aurora", status: 10, ready: false },
        { name: "Prince Phillip", status: 10, ready: false },
        { name: "Flora", status: 10, ready: false },
        { name: "Fauna", status: 10, ready: false },
        { name: "Merryweather", status: 10, ready: false },
        { name: "Judy Hopps", status: 10, ready: false },
        { name: "Nick Wilde", status: 10, ready: false },
        { name: "Chief Bogo", status: 10, ready: false },
        { name: "Flash", status: 10, ready: false },
        { name: "Bambi", status: 10, ready: false },
        { name: "Thumper", status: 10, ready: false },
        { name: "Flower", status: "unob", ready: false },
        { name: "Bagheera", status: 10, ready: false },
        { name: "Mowgli", status: 10, ready: false },
        { name: "Baloo", status: 10, ready: false },
        { name: "King Louie", status: 10, ready: false },
        { name: "Shere Khan", status: 10, ready: false },
        { name: "Dumbo", status: 10, ready: false },
        { name: "Timothy Q. Mouse", status: 10, ready: false },
        { name: "The Ringmaster", status: 10, ready: false },
        { name: "Lady", status: "unob", ready: false },
        { name: "Tramp", status: 3, ready: true },
        { name: "Jock", status: 2, ready: false },
        { name: "Trusty", status: 3, ready: false },
        { name: "Tony", status: 2, ready: true },
        { name: "Joe", status: 0, ready: false },
        { name: "Mr. Incredible", status: 10, ready: false },
        { name: "Elastigirl", status: 10, ready: false },
        { name: "Violet", status: 9, ready: true },
        { name: "Dash", status: 9, ready: true },
        { name: "Jack-Jack", status: 9, ready: true },
        { name: "Frozone", status: 10, ready: false },
        { name: "Syndrome", status: 10, ready: false },
        { name: "Zero", status: 10, ready: false },
        { name: "Sally", status: 10, ready: false },
        { name: "Jack Skellington", status: 10, ready: false },
        { name: "Oogie Boogie", status: 10, ready: false },
        { name: "The Mayor", status: 9, ready: true },
        { name: "Anna", status: 10, ready: false },
        { name: "Elsa", status: 10, ready: false },
        { name: "Olaf", status: 10, ready: false },
        { name: "Kristoff", status: 10, ready: false },
        { name: "Sven", status: 10, ready: false },
        { name: "Hans", status: 10, ready: false },
        { name: "Honeymaren", status: 9, ready: true },
        { name: "Ryder", status: 9, ready: true },
        { name: "Fire Spirit", status: 9, ready: true },
        { name: "Mulan", status: 10, ready: false },
        { name: "Li Shang", status: 10, ready: false },
        { name: "Mushu", status: 10, ready: false },
        { name: "Cri-Kee", status: 10, ready: false },
        { name: "Belle", status: 10, ready: false },
        { name: "Beast", status: 10, ready: false },
        { name: "Lumiere", status: 10, ready: false },
        { name: "Cogsworth", status: 10, ready: false },
        { name: "Mrs. Potts", status: 10, ready: false },
        { name: "Chip Potts", status: 10, ready: false },
        { name: "Gaston", status: 9, ready: true },
        { name: "LeFou", status: 9, ready: true },
        { name: "Simba", status: 10, ready: false },
        { name: "Nala", status: 10, ready: false },
        { name: "Zazu", status: 10, ready: false },
        { name: "Rafiki", status: 9, ready: true },
        { name: "Scar", status: 10, ready: false },
        { name: "Timon", status: 10, ready: false },
        { name: "Pumbaa", status: 10, ready: false },
        { name: "Shenzi", status: 9, ready: false },
        { name: "Banzai", status: 9, ready: true },
        { name: "Ed", status: 8, ready: true },
        { name: "Aladdin", status: 10, ready: false },
        { name: "Jasmine", status: 10, ready: false },
        { name: "Abu", status: 10, ready: false },
        { name: "Carpet", status: 10, ready: false },
        { name: "Jafar", status: 9, ready: true },
        { name: "Iago", status: 9, ready: true },
        { name: "Genie", status: 10, ready: false },
        { name: "Rajah", status: 9, ready: true },
        { name: "Sultan", status: 9, ready: false },
        { name: "Alice", status: 10, ready: false },
        { name: "Mad Hatter", status: 10, ready: false },
        { name: "March Hare", status: 10, ready: false },
        { name: "White Rabbit", status: 10, ready: false },
        { name: "Caterpillar", status: 9, ready: true },
        { name: "Queen of Hearts", status: 9, ready: true },
        { name: "Cheshire Cat", status: 9, ready: true },
        { name: "Bashful", status: 10, ready: false },
        { name: "Doc", status: 10, ready: false },
        { name: "Sneezy", status: 10, ready: false },
        { name: "Dopey", status: 10, ready: false },
        { name: "Happy", status: 10, ready: false },
        { name: "Snow White", status: 10, ready: false },
        { name: "The Queen", status: 10, ready: false },
        { name: "Grumpy", status: 10, ready: false },
        { name: "Sleepy", status: 10, ready: false },
        { name: "Snow Prince", status: 9, ready: true },
        { name: "Winnie the Pooh", status: 10, ready: false },
        { name: "Eeyore", status: 10, ready: false },
        { name: "Tigger", status: 10, ready: false },
        { name: "Kanga", status: 10, ready: false },
        { name: "Roo", status: 10, ready: false },
        { name: "Piglet", status: 10, ready: false },
        { name: "Rabbit", status: 10, ready: false },
        { name: "Christopher Robin", status: 10, ready: false },
        { name: "Lilo", status: 10, ready: false },
        { name: "Stitch", status: 9, ready: true },
        { name: "Nani", status: 10, ready: false },
        { name: "Angel", status: 10, ready: false },
        { name: "Pleakley", status: 10, ready: false },
        { name: "Jumba", status: 9, ready: true },
        { name: "Cobra Bubbles", status: 10, ready: false },
        { name: "Hiro", status: 10, ready: false },
        { name: "Baymax", status: 10, ready: false },
        { name: "Yokai", status: 9, ready: true },
        { name: "Fred", status: 9, ready: true },
        { name: "Wasabi", status: 9, ready: true },
        { name: "Honey Lemon", status: 10, ready: false },
        { name: "Go Go", status: 10, ready: false },
        { name: "Sebastian", status: 10, ready: false },
        { name: "Scuttle", status: 10, ready: false },
        { name: "Ariel", status: 10, ready: false },
        { name: "Prince Eric", status: 10, ready: false },
        { name: "King Triton", status: 9, ready: true },
        { name: "Flounder", status: 9, ready: true },
        { name: "Ursula", status: 10, ready: false },
        { name: "Ralph", status: 10, ready: false },
        { name: "Vanellope", status: 10, ready: false },
        { name: "Fix-It Felix Jr.", status: 9, ready: true },
        { name: "Calhoun", status: 10, ready: false },
        { name: "Spamley", status: 10, ready: false },
        { name: "Yesss", status: 9, ready: true },
        { name: "Shank", status: 9, ready: true },
        { name: "Tiana", status: 10, ready: false },
        { name: "Prince Naveen", status: 10, ready: false },
        { name: "Eudora", status: 10, ready: false },
        { name: "Charlotte La Bouff", status: 9, ready: true },
        { name: "Dr. Facilier", status: 9, ready: true },
        { name: "Louis", status: 10, ready: false },
        { name: "Mama Odie", status: 10, ready: false },
        { name: "Sina", status: 10, ready: false },
        { name: "Moana", status: 10, ready: false },
        { name: "Maui", status: 10, ready: false },
        { name: "Hei Hei", status: 10, ready: false },
        { name: "Chief Tui", status: 10, ready: false },
        { name: "Gramma Tala", status: 10, ready: false },
        { name: "Pua", status: 10, ready: false },
        { name: "Nemo", status: 10, ready: false },
        { name: "Marlin", status: 9, ready: true },
        { name: "Dory", status: 9, ready: true },
        { name: "Hank", status: 9, ready: true },
        { name: "Crush", status: 10, ready: false },
        { name: "Squirt", status: 10, ready: false },
        { name: "Bruce", status: 10, ready: false },
        { name: "Miguel", status: 9, ready: true },
        { name: "Abuelita", status: 8, ready: false },
        { name: "Dante", status: 9, ready: true },
        { name: "Mama Imelda", status: 9, ready: true },
        { name: "Hector", status: 9, ready: false },
        { name: "Mama Coco", status: 9, ready: true },
        { name: "Ernesto", status: 9, ready: true },
        { name: "The Bride", status: "unob", ready: false },
        { name: "BB-8", status: 7, ready: false },
        { name: "Poe", status: 8, ready: true },
        { name: "Finn", status: 9, ready: true },
        { name: "Rey", status: 6, ready: true },
        { name: "First Order Stormtrooper", status: 8, ready: false },
        { name: "Kylo Ren", status: 6, ready: false },
        { name: "General Hux", status: 9, ready: false },
        { name: "R2-D2", status: 7, ready: false },
        { name: "C-3PO", status: 7, ready: false }
    ],
    buildings: {
        "Sword in the Stone": 0,
        "Mickey's Fun Wheel": 1,
        "Mickey's House": 0,
        "Mickey's PhilharMagic": 1,
        "Goofy's Playhouse": 1,
        "Minnie's House": 1,
        "Daisy's Diner": 3,
        "Donald's Boat": 0,
        "Pluto's House": 2,
        "Chip 'n' Dale Treehouse": 1,
        "Steamboat Willie": -1,
        "Fantasmic!": 1,
        "The Money Bin": -1,
        "Al's Toy Barn": 0,
        "Pizza Planet": 1,
        "Astro Orbiters": 2,
        "Jessie's Snack Roundup": 0,
        "Buzz Lightyear's Astro Blasters": 0,
        "Toy Soldiers Parachute Drop": 0,
        "RC Racers": 0,
        "Slinky Dog Dash": 3,
        "Star Adventurer": 2,
        "Toy Story Mania": -1,
        "Prince Charming's Regal Carrousel": 0,
        "Fantasy Faire": 1,
        "Princess Fairytale Hall": 0,
        "Pixie Hollow": 0,
        "Peter Pan's Flight": 0,
        "Lost Boys' Hideout": 0,
        "The Jolly Roger": 0,
        "Tortuga Tavern": 0,
        "Pirates of the Caribbean": 0,
        "The Kraken": 0,
        "Sea Serpent Swing": 0,
        "Davy Jones's Organ": -1,
        "Cyclops Sushi": 0,
        "Monsters, Inc. Laugh Floor": 0,
        "Mike and Sulley to the Rescue": 0,
        "Rapunzel's Tower": 0,
        "Snuggly Duckling": 2,
        "Fairy Hut": 0,
        "Aurora's Spinning Wheel": 0,
        "Zootopia P.D.": 0,
        "Little Rodentia": 0,
        "Zootopia Race Track": 0,
        "The Meadow": 0,
        "Forest Ice Rink": 0,
        "Jungle River Drift": 0,
        "Baloo's Oasis": 0,
        "Kaa's Jungle Gym": 0,
        "Dumbo the Flying Elephant": 0,
        "Lady and Tramp's Home": -1,
        "Tony's Restaurant": 0,
        "The Beaver Dam": -1,
        "Space Traders": 0,
        "WALL-E's House": 0,
        "Omnidroid Obstacle Course": 0,
        "The Omnidroid City": 0,
        "The Incredibles House": 0,
        "Syndrome's Zero Point Energy Rings": 0,
        "Jack's House": 0,
        "Finkelstein Tower": 0,
        "Nightmare Candy Shop": 0,
        "Broomstick Graveyard": 0,
        "Hollywood Tower of Terror": 0,
        "Arendelle Courtyard Rink": 0,
        "Elsa's Ice Palace": 0,
        "Wandering Oaken's": 0,
        "Troll Knoll": 0,
        "Stone Giant Waterfall": 0,
        "Enchanted Forest": 2,
        "Water Spirit Wave Ride": 1,
        "Lantern Attraction": 0,
        "Ancestor's Shrine": 0,
        "Training Camp": 0,
        "Reflections of China": -1,
        "Belle's House": 0,
        "Gaston's Tavern": 0,
        "Be Our Guest Restaurant": 0,
        "Beast's Castle": 0,
        "Festival of the Lion King": 0,
        "The Circle of Life": 0,
        "Tree of Life": 0,
        "Streets of Agrabah": 0,
        "Cave of Wonders": 0,
        "The Lotus Fountain": 0,
        "Genie's Lamp Show": 0,
        "Magic Lamp Theater": -1,
        "The Magic Carpets of Aladdin": -1,
        "Alice in Wonderland": 0,
        "The Golden Afternoon": 0,
        "White Rabbit's House": 0,
        "The Tweedle's Wacky Fairway": 1,
        "Mad Tea Party": 0,
        "Seven Dwarfs Mine Train": 0,
        "Snow White's Scary Adventures": 0,
        "Magic Mirror on the Wall": 0,
        "Seven Dwarfs' Cottage": 0,
        "The Many Adventures of Winnie the Pooh": 0,
        "Eeyore's House": 0,
        "Rabbit's House": 0,
        "Pooh's Hunny Hunt": 0,
        "Stitch's Great Escape": 0,
        "Lilo's House": 0,
        "Lahui Beach": 0,
        Ohana: 0,
        "Ito Ishioka Robotics Lab": 0,
        "Frederickson Grounds": 0,
        "San Fransokyo City": 0,
        "Lucky Cat Cafe": 0,
        "Ariel's Grotto": 0,
        Atlantica: 0,
        "Under the Sea": 0,
        "Ursula's Lair": 0,
        Niceland: 0,
        "The Internet": 0,
        BuzzzTube: 0,
        "Slaughter Race": 0,
        "Princess Dressing Room": 2,
        "Tiana's Palace": 0,
        "Dr. Facilier's Voodoo Emporium": 0,
        "Goin' Down the Bayou": 0,
        "Mama Odie's Tree": 0,
        "A Homecoming Celebration": 0,
        "Moana's Boat": 0,
        "Kakamora Boat": 0,
        "Tamatoa's Lair": 0,
        "The Seas with Nemo and Friends": 1,
        "Crush's Coaster": 2,
        "Finding Nemo Submarine Voyage": 1,
        "Land of the Dead": 0,
        "Santa Cecilia Market Shop": 1,
        "Rivera Familia Home": 0,
        "Musical Celebration": 2,
        Cantina: 1,
        "Treadspeeder Base": 1,
        "Resistance Speeders": 1,
        "Resistance X-Wing": 0,
        "Haunted Mansion": 0,
        "Haunted Mansion 2": -1,
        "Enchanted Tiki Room": 0,
        "Jet Packs": 0,
        "Splash Mountain": 0,
        "Fantasia Gardens and Fairways": 0,
        "Western Arcade": -1,
        "Jumpin' Jellyfish": 0,
        "Primeval Whirl": -1,
        "Golden Zephyr": -1,
        "Walt Disney's Carousel of Progress": -1,
        "The Barnstormer": 0,
        "Animation Academy": 0,
        "California Screamin'": 0,
        "Space Mountain": 0,
        "Big Thunder Mountain Railroad": 0,
        "It's a Small World": 0
    },
    floats: {
        "Mickey and Friends": 1,
        DuckTales: 0,
        "Toy Story": 1,
        Cinderella: 1,
        "Peter Pan": 0,
        Pirates: 0,
        Monsters: 0,
        "WALL-E": 1,
        Tangled: 0,
        "Sleeping Beauty": 1,
        Zootopia: 0,
        Bambi: 1,
        "Jungle Book": 0,
        Dumbo: 1,
        "Lady and the Tramp": 0,
        Incredibles: 1,
        Nightmare: 0,
        Frozen: 1,
        Mulan: 1,
        Beauty: 1,
        "Lion King": 1,
        Aladdin: 1,
        Alice: 0,
        "Snow White": 1,
        Pooh: 0,
        "Lilo and Stitch": 1,
        "Big Hero 6": 1,
        "The Little Mermaid": 1,
        "Wreck-It Ralph": 0,
        "Princess and the Frog": 0,
        Moana: 1,
        "Finding Nemo": 1,
        Coco: 1,
        "Star Wars": 0
    },
    costumes: [
        { name: "Pirate", character: "Mickey Mouse", value: 1 },
        { name: "Classic", character: "Mickey Mouse", value: 0 },
        { name: "Sorceror", character: "Mickey Mouse", value: 1 },
        { name: "Spring", character: "Mickey Mouse", value: 0 },
        { name: "Holiday", character: "Mickey Mouse", value: 1 },
        { name: "Lunar", character: "Mickey Mouse", value: 1 },
        { name: "Tuxedo", character: "Mickey Mouse", value: 0 },
        { name: "Halloween", character: "Mickey Mouse", value: 0 },
        {
            name: "Lunar New Year - Hong Kong",
            character: "Mickey Mouse",
            value: 1
        },
        { name: "Pirate", character: "Goofy", value: 1 },
        { name: "Halloween", character: "Goofy", value: 1 },
        { name: "Spring", character: "Goofy", value: 0 },
        { name: "Spring", character: "Pluto", value: 0 },
        { name: "Lunar", character: "Pluto", value: 0 },
        { name: "Halloween", character: "Daisy Duck", value: 1 },
        {
            name: "Lunar New Year - Hong Kong",
            character: "Daisy Duck",
            value: 0
        },
        { name: "Classic", character: "Pete", value: 0 },
        { name: "Halloween", character: "Minnie Mouse", value: 1 },
        { name: "Pirate", character: "Minnie Mouse", value: 1 },
        { name: "Classic", character: "Minnie Mouse", value: 0 },
        { name: "Spring", character: "Minnie Mouse", value: 0 },
        { name: "Holiday", character: "Minnie Mouse", value: 0 },
        { name: "Lunar", character: "Minnie Mouse", value: 0 },
        {
            name: "Lunar New Year - Hong Kong",
            character: "Minnie Mouse",
            value: 0
        },
        { name: "Pirate", character: "Donald Duck", value: 0 },
        { name: "Halloween", character: "Donald Duck", value: 1 },
        {
            name: "Lunar New Year - Hong Kong",
            character: "Donald Duck",
            value: 0
        },
        { name: "Lunar", character: "Chip", value: 1 },
        { name: "Lunar", character: "Dale", value: 1 },
        { name: "Toy Story 4", character: "Bo Peep", value: 1 },
        { name: "Comfy", character: "Cinderella", value: 1 },
        { name: "Captain's Coat", character: "Jack Sparrow", value: 1 },
        { name: "Comfy", character: "Rapunzel", value: 1 },
        { name: "Elastigirl", character: "Elastigirl", value: 1 },
        { name: "Holiday", character: "Anna", value: 1 },
        { name: "Travel", character: "Anna", value: 1 },
        { name: "Queen Anna", character: "Anna", value: 0 },
        { name: "Holiday", character: "Elsa", value: 1 },
        { name: "Travel", character: "Elsa", value: 1 },
        { name: "Snow Queen", character: "Elsa", value: 0 },
        { name: "Holiday", character: "Olaf", value: 1 },
        { name: "Warrior", character: "Mulan", value: 0 },
        { name: "Comfy", character: "Mulan", value: 1 },
        { name: "Formal Dress", character: "Belle", value: 0 },
        { name: "Comfy", character: "Belle", value: 1 },
        { name: "Formal Suit", character: "Beast", value: 1 },
        { name: "Prince Ali", character: "Aladdin", value: 1 },
        { name: "Purple Dress", character: "Jasmine", value: 0 },
        { name: "Comfy", character: "Jasmine", value: 1 },
        { name: "Comfy", character: "Snow White", value: 1 },
        { name: "Armor", character: "Baymax", value: 1 },
        { name: "Honey Day", character: "Winnie the Pooh", value: 1 },
        { name: "Mermaid", character: "Ariel", value: 1 },
        { name: "Comfy", character: "Ariel", value: 1 },
        { name: "Comfy", character: "Tiana", value: 1 },
        { name: "Comfy", character: "Moana", value: 1 }
    ]
};

let buildings = [];
for (let name in testUserData.buildings) {
    const level = testUserData.buildings[name];
    if (level >= 0) {
        buildings.push({ name, level });
    }
}

let floats = [];
for (let name in testUserData.floats) {
    if (testUserData.floats[name] > 0) {
        floats.push({ name });
    }
}

module.exports = {
    characters: _.compact(
        testUserData.collection.map(({ name, status, ready, favorite }) => {
            if (!isNaN(status)) {
                return {
                    name,
                    level: status,
                    ready,
                    favorite: favorite || false
                };
            }
        })
    ),
    buildings,
    costumes: _.compact(
        testUserData.costumes.map(({ name, character, value }) => {
            if (value > 0) {
                return { costumeKey: `${name}-${character}` };
            }
        })
    ),
    floats
};