rh._.exports({"0":["achievement_post"],"1":["achievement_post"],"2":["achievement_post"],"3":["\n  ","\n  ","\n  ","You can use this function to send your achievements to the chosen leaderboard and achievement service. On Android you will need the the ID of the achievement as a string (this is the unique achievement ID that got assigned when you set up the achievement),\n    while on all other platforms you supply the achievement name as a string, and then you give the percentage that you have completed towards getting the achievement (0 - None, 100 - Completed). The function will trigger a ","Social Asynchronous Event","    where the returned ","async_load"," DS map will have the following key/value pairs:","\n  ","\n    ","\"","type","\" - This is the type of event that has been fired, which will be the string \"","achievement_post_result","\" for this function.","\n    ","\"","id","\" - This is the ID of the event, and, for this function, it will return a GML constant ","GooglePlayServices_EVENT_ID_POST_ACHIEVEMENT",".","\n    ","\"","achievement_id","\" - This is the unique ID of achievement that has been updated.","\n    ","\"","status","\" - This will be 1 if the achievement was updated successfully, or 0 if the request failed","\n  ","\n  "," ","\n  ","\n  ","achievement_post(achievement, percent)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","achievement","\n        ","The name/ID of the achievement.","\n      ","\n      ","\n        ","percent","\n        ","The percentage of the achievement completed.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if achievement_available()","     {","     achievement_post(global.Achievement[0], 100);"," }\n  ","\n  ","The above code checks to see if the chosen leaderboard and achievement service is available and if so it posts an achievement.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Leaderboards","\n        ","Next: ","achievement_post_score","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["achievement_post"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2200"})