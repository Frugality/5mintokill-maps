# 5mintokill-maps
Maps for https://5mintokill.io

## Getting Started
Download Tiled, an excellent 2d map editor, at http://www.mapeditor.org/.

Open src/main.tmx in tiled.

## Map Layers

The map layers are each used for a specific purpose - each layer defines when its tiles draw, as well as controlling whether a layer can have collision. There are two properties 'collision' (boolean) and 'drawgroup' (terrain | structures | furniture | props | overhead) authored on the layer inside of Tiled. The drawgroup will also dictate whether they're visible in fog-of-war.

### Doors
Place doors using the door proxy in the `Loot` Tileset. Door placement needs to be precise, otherwise you'll be able to see through the edges. Zooming in and using the arrow keys to move the doors can make alignment easier. Doors need to have `type` set to `loot`, as they're spawned by the loot system.

### Loot
Describes loot spawn locations. Each object references a loot table, which randomizes the loot spawned at the given location. Objects need to have a `type` value which is set to `loot`.

### Markup
Used for defining spawn regions. Create any number of spawn rectangles.

## Testing 
To test your map locally, you first need to prepare and export the map

### Exporting
1. Embed Tilesets
   * Open the Tilesets panel
   * Press the "Embed Tileset" button for each of the tilesets in your map
1. Export map
   * Export to a .json format

### Viewing
1. Go to https://5mintokill.io/?viewer=1
   * A new "Viewer" item should appear in the menu bar
1. Drop your .json file onto the area
   * If all goes well, you should be able to run around your map

#### Viewer Caveats
1. No loot
2. No doors
3. No spawn areas

## Publishing
Publish is another area for future improvement -- currently maps are versioned, published, and configured manually.