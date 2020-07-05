rh._.exports({"0":["path_add_point"],"1":["path_add_point"],"2":["path_add_point"],"3":["\n  ","\n  ","\n  ","With this function you can add a point to the specified path and set its speed factor. This point is added onto the end of the path, irrespective of the position of the point, and the factor is equal to the percentage of ","path_speed"," that\n    the following instance actually goes at when it reaches this point in the path. If you wish to place a path point at some other position that is not the end, you should use ","path_insert_point()",".","\n  ","If used on a path from the Asset Browser, note that ","the function will change the actual asset",", and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the\n    game. If this is not what you require, then you should use a function like ","path_duplicate()"," to create a copy of the path first, then call this function on the duplicated asset (don't\n    forget to call ","path_delete()"," on the asset when it is no longer required).","\n  "," ","\n  ","\n  ","path_add_point(index, x, y, speed);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to add the point to.","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the new point.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the new point.","\n      ","\n      ","\n        ","speed","\n        ","The speed factor of the point (default value is 100).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","\n  ","my_path = path_add();"," for (var i = 0; i <= 360; i += 36;)","     {\n    ","     path_add_point(my_path, x + lengthdir_x(50, i), y + lengthdir_y(50, i), 100);","     }\n  ","\n  ","The above code will create a circular path around the x/y position of the instance running the code.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_change_point","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_add_point"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"771"})