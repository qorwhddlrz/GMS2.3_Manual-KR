rh._.exports({"0":["Close Ini File"],"1":["DnD™ Action - Close Ini File"],"2":["Close Ini File"],"3":["\n  ","\n  ","\n  ","This action will close the currently open Ini file. This action should be called the moment you are finished reading or writing to any open Ini file (Ini files are opened using the action ","Open Ini File","). If you do ","not","    use this action after you have used the ","Write To Ini File"," action, then nothing will be written to disk as the file information is held in memory until this action is called, at which point it is taken from memory\n    and written to the file on disk. Also note that if you try to open an Ini file without having previously closed another one (or the same one) you will get an error.","\n  "," ","\n  ","\n  ","\n  ","\n  ","The above action block code will open an ini file for use, then get the value associated with\n    the \"name\" key under the \"player\" header. If the name returned matches the default name value (ie: the file, section or key does ","not"," exist) then the file has a global variable written to it before being closed (and writing\n    the new data to disk).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Actions","\n        ","Next: ","Write To Ini File","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Close Ini File"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Example:"],"id":"361"})