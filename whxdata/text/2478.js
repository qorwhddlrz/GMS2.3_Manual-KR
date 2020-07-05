rh._.exports({"0":["xboxlive_user_for_pad"],"1":["xboxlive_user_for_pad"],"2":["xboxlive_user_for_pad"],"3":["\n  ","\n  ","\n  ","This function will return the User ID pointer associated with the given gamepad index value, or ","pointer_null"," if no user is associated with it. Note that this function should only be used with gamepad indices, and ","not"," with ","xboxlive_get_user_count()",".","\n  "," ","\n  ","\n  ","xboxlive_user_for_pad(pad_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","pad_index","\n        ","The index (an integer) of the gamepad slot to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Pointer","\n  "," ","\n  ","\n  ","for(var i = 0; i < 11; ++i;)","     {\n    ","     var u_id = xboxlive_user_for_pad(i);","     if u_id != pointer_null","         {\n    ","         pad_name[i] = xboxlive_gamedisplayname_for_user(u_id);","         }\n    ","     else\n    ","         {\n    ","         pad_name[i] = \"Press Play\";","         }\n    ","     }\n  ","\n  ","The above code loops through all available pad slots and checks to see if there is a user ID pointer associated with it. If there is, an array is set with the user display name, otherwise the array is set to some default text.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_pad_for_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_user_for_pad"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2478"})