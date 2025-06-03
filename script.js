const sofaData = {
    // Camp 1
    1: { 
        rooms: { 
            1: [35246, 35269], 
            2: [35270, 35293] 
        } 
    },
    
    // Camp 2
    2: { 
        rooms: { 
            1: [32508, 32559], 
            2: [32560, 32587] 
        } 
    },
    
    // Camp 3
    3: { 
        rooms: { 
            1: [34922, 34975], 
            2: [34976, 35029], 
            3: [35030, 35083],
            4: [35084, 35137],
            5: [35138, 35191],
            6: [35192, 35245]
        } 
    },
    
    // Camp 4
    4: { 
        rooms: { 
            1: [35294, 35347], 
            2: [35348, 35401] 
        } 
    },
    
    // Camp 5
    5: { 
        rooms: { 
            1: [32588, 32637], 
            2: [32638, 32687], 
            3: [32688, 32737] 
        } 
    },
    
    // Camp 6
    6: { 
        rooms: { 
            1: [34674, 34723], 
            2: [34724, 34773], 
            3: [34774, 34823],
            4: [34824, 34873],
            5: [34874, 34897],
            6: [34898, 34921]
        } 
    },
    
    // Camp 7
    7: { 
        rooms: { 
            1: [35946, 35995], 
            2: [35996, 36045], 
            3: [36046, 36095] 
        } 
    },
    
    // Camp 8
    8: { 
        rooms: { 
            1: [33136, 33173], 
            2: [33174, 33211] 
        } 
    },
    
    // Camp 9
    9: { 
        rooms: { 
            1: [34446, 34483], 
            2: [34484, 34521], 
            3: [34522, 34559],
            4: [34560, 34597],
            5: [34598, 34635],
            6: [34636, 34673]
        } 
    },
    
    // Camp 10
    10: { 
        rooms: { 
            1: [36096, 36157], 
            2: [36158, 36219], 
            3: [36220, 36237] 
        } 
    },
    
    // Camp 11
    11: { 
        rooms: { 
            1: [33212, 33241] 
        } 
    },
    
    // Camp 12
    12: { 
        rooms: { 
            1: [34296, 34325], 
            2: [34326, 34355], 
            3: [34356, 34415] 
        } 
    },
    
    // Camp 13
    13: { 
        rooms: { 
            1: [34416, 34445] 
        } 
    },
    
    // Camp 14
    14: { 
        rooms: { 
            1: [36444, 36473] 
        } 
    },
    
    // Camp 15
    15: { 
        rooms: { 
            1: [33392, 33441], 
            2: [33442, 33491] 
        } 
    },
    
    // Camp 16
    16: { 
        rooms: { 
            1: [34122, 34145], 
            2: [34146, 34195], 
            3: [34196, 34245],
            4: [34246, 34295]
        } 
    },
    
    // Camp 17
    17: { 
        rooms: { 
            1: [36756, 36779], 
            2: [36780, 36803], 
            3: [36852, 36875],
            4: [36876, 36899],
            5: [36948, 36971],
            6: [36972, 36995],
            7: [36996, 37019],
            8: [36924, 36947]
        } 
    },
    
    // Camp 18
    18: { 
        rooms: { 
            1: [33726, 33753], 
            2: [33754, 33781] 
        } 
    },
    
    // Camp 19
    19: { 
        rooms: { 
            1: [33954, 33981], 
            2: [33982, 34009], 
            3: [34010, 34037],
            4: [34038, 34065],
            5: [34066, 34093],
            6: [34094, 34121],
            7: [33946, 33953]
        } 
    },
    
    // Camp 20
    20: { 
        rooms: { 
            1: [37020, 37047], 
            2: [37048, 37075], 
            3: [37076, 37103],
            4: [37104, 37131],
            5: [37132, 37159],
            6: [37160, 37187],
            7: [37188, 37215],
            8: [37216, 37267]
        } 
    },
    
    // Camp 21
    21: { 
        rooms: { 
            1: [33908, 33925], 
            2: [33926, 33945] 
        } 
    },
    
    // Camp 22
    22: { 
        rooms: { 
            1: [37268, 37325], 
            2: [37326, 37377], 
            3: [37378, 37421],
            4: [37422, 37457],
            5: [37458, 37511],
            6: [37512, 37556],
            7: [37557, 37596],
            8: [37597, 37630]
        } 
    }
};

const colorMapping = {
    1: { color: 'الأزرق - Blue', class: 'color-blue' },
    2: { color: 'الأخضر - Green', class: 'color-green' },
    3: { color: 'الأزرق - Blue', class: 'color-blue' },
    4: { color: 'الأزرق - Blue', class: 'color-blue' },
    5: { color: 'الأخضر - Green', class: 'color-green' },
    6: { color: 'الأبيض - White', class: 'color-white' },
    7: { color: 'الأبيض - White', class: 'color-white' },
    8: { color: 'الأخضر - Green', class: 'color-green' },
    9: { color: 'الأصفر - Yellow', class: 'color-yellow' },
    10: { color: 'الأصفر - Yellow', class: 'color-yellow' },
    11: { color: 'الأخضر - Green', class: 'color-green' },
    12: { color: 'الأخضر - Green', class: 'color-green' },
    13: { color: 'الأزرق - Blue', class: 'color-blue' },
    14: { color: 'الأحمر - Red', class: 'color-red' },
    15: { color: 'الأزرق - Blue', class: 'color-blue' },
    16: { color: 'الأزرق - Blue', class: 'color-blue' },
    17: { color: 'الأحمر - Red', class: 'color-red' },
    18: { color: 'الأصفر - Yellow', class: 'color-yellow' },
    19: { color: 'الأصفر - Yellow', class: 'color-yellow' },
    20: { color: 'الأحمر - Red', class: 'color-red' },
    21: { color: 'الأصفر - Yellow', class: 'color-yellow' },
    22: { color: 'الأخضر - Green', class: 'color-green' }
};

// Room coordinates for marker placement (percentage based on image dimensions)
// Based on the provided map image, analyzing room positions
const roomCoordinates = {
    1: { 1: [25, 40], 2: [75, 40] },
    2: { 1: [30, 35], 2: [70, 35] },
    3: { 1: [20, 25], 2: [40, 25], 3: [60, 25], 4: [80, 25], 5: [20, 75], 6: [80, 75] },
    4: { 1: [35, 30], 2: [65, 30] },
    5: { 1: [25, 30], 2: [50, 30], 3: [75, 30] },
    6: { 1: [15, 20], 2: [35, 20], 3: [55, 20], 4: [75, 20], 5: [15, 80], 6: [85, 80] },
    7: { 1: [30, 35], 2: [50, 35], 3: [70, 35] },
    8: { 1: [40, 40], 2: [60, 40] },
    9: { 1: [15, 25], 2: [30, 25], 3: [45, 25], 4: [60, 25], 5: [75, 25], 6: [90, 25] },
    10: { 1: [30, 30], 2: [50, 30], 3: [70, 30] },
    11: { 1: [50, 50] },
    12: { 1: [30, 40], 2: [50, 40], 3: [70, 40] },
    13: { 1: [50, 45] },
    14: { 1: [50, 45] },
    15: { 1: [40, 40], 2: [60, 40] },
    16: { 1: [25, 30], 2: [45, 30], 3: [65, 30], 4: [85, 30] },
    17: { 1: [15, 20], 2: [25, 20], 3: [35, 20], 4: [45, 20], 5: [55, 20], 6: [65, 20], 7: [75, 20], 8: [85, 20] },
    18: { 1: [40, 40], 2: [60, 40] },
    19: { 1: [15, 25], 2: [25, 25], 3: [35, 25], 4: [45, 25], 5: [55, 25], 6: [65, 25], 7: [75, 25] },
    20: { 1: [12, 20], 2: [22, 20], 3: [32, 20], 4: [42, 20], 5: [52, 20], 6: [62, 20], 7: [72, 20], 8: [82, 20] },
    21: { 1: [40, 40], 2: [60, 40] },
    22: { 1: [12, 25], 2: [22, 25], 3: [32, 25], 4: [42, 25], 5: [52, 25], 6: [62, 25], 7: [72, 25], 8: [82, 25] }
};

// Room coordinates for marker placement (percentage based on image dimensions)
// Format: { area: { room: [x%, y%] } }
const roomCoordinates = {
    1: { 1: [25, 40], 2: [75, 40] },
    2: { 1: [30, 35], 2: [70, 35] },
    3: { 1: [20, 25], 2: [40, 25], 3: [60, 25], 4: [80, 25], 5: [20, 75], 6: [80, 75] },
    4: { 1: [35, 30], 2: [65, 30] },
    5: { 1: [25, 30], 2: [50, 30], 3: [75, 30] },
    6: { 1: [15, 20], 2: [35, 20], 3: [55, 20], 4: [75, 20], 5: [15, 80], 6: [85, 80] },
    7: { 1: [30, 35], 2: [50, 35], 3: [70, 35] },
    8: { 1: [40, 40], 2: [60, 40] },
    9: { 1: [15, 25], 2: [30, 25], 3: [45, 25], 4: [60, 25], 5: [75, 25], 6: [90, 25] },
    10: { 1: [30, 30], 2: [50, 30], 3: [70, 30] },
    11: { 1: [50, 50] },
    12: { 1: [30, 40], 2: [50, 40], 3: [70, 40] },
    13: { 1: [50, 45] },
    14: { 1: [50, 45] },
    15: { 1: [40, 40], 2: [60, 40] },
    16: { 1: [25, 30], 2: [45, 30], 3: [65, 30], 4: [85, 30] },
    17: { 1: [15, 20], 2: [25, 20], 3: [35, 20], 4: [45, 20], 5: [55, 20], 6: [65, 20], 7: [75, 20], 8: [85, 20] },
    18: { 1: [40, 40], 2: [60, 40] },
    19: { 1: [15, 25], 2: [25, 25], 3: [35, 25], 4: [45, 25], 5: [55, 25], 6: [65, 25], 7: [75, 25] },
    20: { 1: [12, 20], 2: [22, 20], 3: [32, 20], 4: [42, 20], 5: [52, 20], 6: [62, 20], 7: [72, 20], 8: [82, 20] },
    21: { 1: [40, 40], 2: [60, 40] },
    22: { 1: [12, 25], 2: [22, 25], 3: [32, 25], 4: [42, 25], 5: [52, 25], 6: [62, 25], 7: [72, 25], 8: [82, 25] }
};

function searchSofa() {
    const sofaNumber = parseInt(document.getElementById('sofaNumber').value);
    const resultCard = document.getElementById('resultCard');
    const errorCard = document.getElementById('errorCard');
    const mapDisplay = document.getElementById('mapDisplay');

    // Hide previous results
    resultCard.classList.remove('show');
    errorCard.classList.remove('show');
    mapDisplay.classList.remove('show');

    if (!sofaNumber) {
        errorCard.classList.add('show');
        return;
    }

    // Search for the sofa number
    let foundArea = null;
    let foundRoom = null;

    for (const [area, areaData] of Object.entries(sofaData)) {
        for (const [room, range] of Object.entries(areaData.rooms)) {
            if (sofaNumber >= range[0] && sofaNumber <= range[1]) {
                foundArea = parseInt(area);
                foundRoom = parseInt(room);
                break;
            }
        }
        if (foundArea) break;
    }

    if (foundArea && foundRoom) {
        // Display results
        document.getElementById('sofaNumberResult').textContent = sofaNumber;
        document.getElementById('areaResult').textContent = foundArea;
        document.getElementById('roomResult').textContent = foundRoom;
        document.getElementById('colorResult').textContent = colorMapping[foundArea].color;
        
        // Determine gender based on area
        const gender = foundArea > 12 ? 'أنثى - Female' : 'ذكر - Male';
        document.getElementById('genderResult').textContent = gender;
        
        const colorIndicator = document.getElementById('colorIndicator');
        colorIndicator.className = `color-indicator ${colorMapping[foundArea].class}`;
        
        // Display map with room marker
        displayAreaMap(foundArea, foundRoom);
        
        resultCard.classList.add('show');
    } else {
        errorCard.classList.add('show');
    }
}

function displayAreaMap(area, room) {
    const mapDisplay = document.getElementById('mapDisplay');
    const areaMap = document.getElementById('areaMap');
    const roomMarker = document.getElementById('roomMarker');
    const markerLabel = roomMarker.querySelector('.marker-label');
    
    // Set the map image source
    areaMap.src = `area${area}.jpg`;
    areaMap.alt = `Camp ${area} Map`;
    
    // Get room coordinates
    const coordinates = roomCoordinates[area] && roomCoordinates[area][room];
    
    if (coordinates) {
        // Position the marker
        roomMarker.style.left = coordinates[0] + '%';
        roomMarker.style.top = coordinates[1] + '%';
        roomMarker.style.display = 'block';
        
        // Set marker label
        markerLabel.textContent = `Room ${room}`;
    } else {
        // Hide marker if coordinates not found
        roomMarker.style.display = 'none';
    }
    
    // Show the map display
    mapDisplay.classList.add('show');
    
    // Handle image load error
    areaMap.onerror = function() {
        console.log(`Map image area${area}.jpg not found`);
        // You can set a default image or hide the map
        // areaMap.src = 'default-map.jpg';
    };
}

// Allow Enter key to trigger search
document.getElementById('sofaNumber').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchSofa();
    }
});

// Auto-format input to 5 digits max
document.getElementById('sofaNumber').addEventListener('input', function(e) {
    if (e.target.value.length > 5) {
        e.target.value = e.target.value.slice(0, 5);
    }
});
