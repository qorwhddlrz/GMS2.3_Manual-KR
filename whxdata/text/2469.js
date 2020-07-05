rh._.exports({"0":["xboxlive_user_is_guest"],"1":["xboxlive_user_is_guest"],"2":["xboxlive_user_is_guest"],"3":["\n  ","\n  ","\n  ","This function will return ","true"," if the given user ID pointer is a guest user and ","false"," if they are not. You can get a User ID pointer with the function ","xboxlive_get_user()",".","\n  "," ","\n  ","\n  ","xboxlive_user_is_guest(user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The ID pointer of the user to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if xboxlive_user_is_guest(user_id[0])","     {\n    ","     global.user_name[0] = \"GUEST\";","     }\n    "," else\n    ","     {\n    ","     global.user_name[0] = xboxlive_gamedisplayname_for_user(user_id[0]);","     }\n  ","\n  ","The above stores the activating user ID pointer in a global variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_user_is_active","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_user_is_guest"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2469"})