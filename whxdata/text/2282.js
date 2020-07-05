rh._.exports({"0":["steam_reset_all_stats_achievements"],"1":["steam_reset_all_stats_achievements"],"2":["steam_reset_all_stats_achievements"],"3":["\n  ","\n  ","\n  ","With this function you can reset all the statistics and achievements for you game to their default values (as defined in the Steamworks control panel for your game). It is recommended that you only use this function as a debug tool when developing your\n    game.","\n  "," ","\n  ","\n  ","steam_reset_all_stats_achievements();","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","ini_open(\"Save.ini\");"," if global.Version != ini_read_real(\"Data\", \"Version\", 0)","     {\n    ","     ini_write_real(\"Data\", \"Version\", global.Version);","     steam_reset_all_stats_achievements();\n    ","     }\n    "," ini_close();\n  ","\n  ","The above code checks a stored value in an ini file against that of a global variable and if they are different, it resets the statistics and achievements for the game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Statistics","\n        ","Next: ","steam_set_achievement","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_reset_all_stats_achievements"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2282"})