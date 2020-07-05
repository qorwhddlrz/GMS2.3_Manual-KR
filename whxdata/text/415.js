rh._.exports({"0":["Destroy Particle System"],"1":["DnD™ Action - Destroy Particle System"],"2":["Destroy Particle System"],"3":["\n  ","\n  ","\n  ","This action will \"destroy\" the given particle system (ie: free up the memory used by the particle system). You supply the unique ID value for the system to destroy, as returned when you created the system with the action ","Create Particle System",".\n    This action should be called whenever you no longer need a particle system in your game, or whenever you wish to re-create the particle system (for example, just before calling a ","Restart Game","). Note that if the\n    particle system has ","not"," been flagged as ","Persistent"," then you do not need to call this action, as the particle system (and any emitters associated with it) will be automatically cleaned up on room end.","\n  ","IMPORTANT!"," This function will also destroy and remove any emitters that may have been created and associated with the system being destroyed (see ","Create Particle Emitter"," for more information).","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","System","\n        ","The unique ID value for the system to be destroyed","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will check for the \"Space\" key\n    being pressed and if it is detected then it removes the particle system and different particle types defined in the given global variables and then restarts the game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Clear Particle System","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Destroy Particle System"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"415"})