rh._.exports({"0":["draw_texture_flush"],"1":["draw_texture_flush"],"2":["draw_texture_flush"],"3":["\n  ","\n  ","\n  ","With this function you can remove all textures from video memory, and they will then be reloaded on first use. This is the only effective way to manage video memory when you have multiple texture pages for a game, and you should flush the texture memory\n    between levels on your game and organise the graphics using the texture group feature to ensure that the minimum number of textures are used.","\n  ","It is worth noting that ","by default"," on all targets, texture pages will only be loaded as they are required and you can use the various prefetch and flush functions for sprites (found ","here",")\n    to manage things as well as this function.","\n  "," ","\n  ","\n  ","draw_texture_flush();","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_texture_flush();","\n  ","The above code flushes the video memory of texture data, and would probably be placed in the create event of the first instance of an object placed in the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","texture_prefetch","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_texture_flush"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1504"})