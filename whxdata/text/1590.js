rh._.exports({"0":["window_set_size"],"1":["window_set_size"],"2":["window_set_size"],"3":["\n  ","\n  ","\n  ","With this function you can change the size of the game window. If you use this function to change the size of the game window, the contents of the window will be scaled to fit with a 1:1 ratio to the background canvas which will keep the image crisp\n    and clear (although scaled if the window is other than the room or view size). For example, if you have a 200 x 150 pixel window, and the player stretches the window by dragging the borders, the final window size may be 400 x 300 pixels, but the drawing\n    canvas is STILL 200 x 150, which gives a blurred image as the pixel ratio is now 1:2. However, if you use this function to set the window size, the 1:1 ratio is maintained, even though the image is scaled to fit the new window size.","\n  "," ","\n  ","\n  ","window_set_size( w, h );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","w","\n        ","The new width of the window.","\n      ","\n      ","\n        ","h","\n        ","The new height of the window.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if mouse_check_button_pressed(mb_left)","     {\n    ","     global.scale += 1;","     window_set_size(200 * global.scale, 150 * global.scale);","     }\n  ","\n  ","The above code will change the size of the window based on the value of the variable \"global.scale\" when the mouse button is pressed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Game Window","\n        ","Next: ","window_set_rectangle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["window_set_size"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1590"})