rh._.exports({"0":["audio_listener_velocity"],"1":["audio_listener_velocity"],"2":["audio_listener_velocity"],"3":["\n  ","\n  ","\n  ","This function can be used to give the listener ","doppler"," effects and simulate audio motion based on the vector that is resolved from the given relative x, y and z positions. If the listener itself is not ever going to\n    move, or the movement is not a constant motion, you would normally not need to set these values, but, for example, if you are making a scrolling game where the player has a constant bottom to top movement and the enemies a constant top to bottom movement,\n    you would set the listener ","and"," emitter velocities (for emitters you would use ","audio_emitter_velocity()",") to\n    the appropriate vectors to simulate the correct doppler effect as they move past the player instance.","\n  ","NOTE: ","if you have multiple listeners you should use the function ","audio_listener_set_velocity()",".","\n  ","The image below shows how this could be setup for the example game given above:","\n  ","\n  "," ","\n  ","\n  ","audio_listener_velocity(vx, vy, vz);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x velocity component of the listener (default 0).","\n      ","\n      ","\n        ","y","\n        ","The y velocity component of the listener (default 0).","\n      ","\n      ","\n        ","z","\n        ","The z velocity component of the listener (default 0).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if speed > 0","    {\n    ","    audio_listener_velocity(abs(hspeed), abs(vspeed), 0);","    }\n  ","\n  ","The above code checks to see if the player instance speed is over 0 and if it is it then uses the appropriate absolute ","hspeed"," and ","vspeed"," components to set the listener velocity.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Listeners","\n        ","Next: ","audio_listener_orientation","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_listener_velocity"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"715"})