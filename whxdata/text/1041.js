rh._.exports({"0":["tilemap_get"],"1":["tilemap_get"],"2":["tilemap_get"],"3":["\n  ","\n  ","\n  ","Using this function you can retrieve the tile data from a cell of the tilemap element. You give the tilemap element ID (which you get when you create a tilemap element using ","layer_tilemap_create()"," or when\n    you use the function ","layer_tilemap_get_id()","), as well as the ","cell"," x and y position and the function will return the tile data \"blob\". This data is essentially a bit mask that contains\n    the tile index, the flip/rotate/mirror booleans and any mask data that has been applied (see ","tilemap_set_mask()"," for details), and the resulting data value can then be used in the ","tile_*"," functions\n    to change a tiles properties. Note that we are using x/y cell positions based on the size of the tilemap grid and ","not"," as a position in the room, so \"cell_x\" is a value from 0 to ","tilemap width",", and\n    \"cell_y\" is a value from 0 to ","tilemap height",". If you need to get the data for a tile at a specific room position then you need to use the function ","tilemap_get_at_pixel()",".","\n  ","IMPORTANT!"," If the tiles in the tilemap have been unchanged (ie: they are not rotated or flipped etc...), then the return value of the tileset data will be exactly equal to the index of the tile on the tileset. So you can create \"collision\n    maps\" of tiles using one tile at index 1 in the tileset - for example - then use this function to check for 1 or 0 (an empty tile) to calculate collisions.","\n  "," ","\n  ","\n  ","tilemap_get(tilemap_element_id, cell_x, cell_y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tilemap element to get the tiledata of","\n      ","\n      ","\n        ","x_cell","\n        ","The cell along the x-axis to get the tile data from","\n      ","\n      ","\n        ","y_cell","\n        ","The cell along the y-axis to get the tile data from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (-1 if there is an error)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_sky\");"," var map_id = layer_tilemap_get_id(lay_id);"," var data = tilemap_get(map_id, 0, 0);"," data = tile_set_flip(data, true);"," tilemap_set(map_id, data, 0, 0);","\n  ","The above code gets the ID for the tilemap on the layer \"Tiles_Sky\" and then uses that to get the data from the tile at cell (0, 0). This tile data is then flipped before being used to set the tile on the tilemap again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_at_pixel","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tilemap_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1041"})