rh._.exports({"0":["audio_sound_get_track_position"],"1":["audio_sound_get_track_position"],"2":["audio_sound_get_track_position"],"3":["\n  ","\n  ","\n  ","This function will get the position (in seconds) within the sound file for the sound to play from. The sound can only be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the ","audio_play_sound()"," or     ","audio_play_sound_at()"," functions).","\n  "," ","\n  ","\n  ","audio_sound_get_track_position(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sound to get the play position of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if audio_sound_get_track_position(global.Music) != 0","    {\n    ","    audio_sound_set_track_position(global.Music, 0);","    }\n  ","\n  ","The above code checks a track to get it's start position and if it's not 0 seconds it sets it to 0 seconds.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_sound_set_listener_mask","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_sound_get_track_position"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"676"})