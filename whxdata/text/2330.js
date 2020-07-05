rh._.exports({"0":["steam_ugc_query_set_ranked_by_trend_days"],"1":["steam_ugc_query_set_ranked_by_trend_days"],"2":["steam_ugc_query_set_ranked_by_trend_days"],"3":["\n  ","\n  ","\n  ","This function can be used to further filter any UGC query made using the ","ugc_query_RankedByTrend"," constant, specifically to search over a number of days. The query handle is the value returned when you created the query (using, for example,\n    ","steam_ugc_create_query_user()",") and the second argument is the number of days over which you want the query to run. The function will return ","true"," if the query filter was correctly set,\n    or ","false"," otherwise.","\n  "," ","\n  ","\n  ","steam_ugc_query_set_ranked_by_trend_days(ugc_query_handle , days);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ugc_query_handle","\n        ","The query handle to use.","\n      ","\n      ","\n        ","days","\n        ","The number of days to query.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var query_handle = steam_ugc_create_query_all(ugc_query_RankedByTrend, ugc_match_Items, 1);"," steam_ugc_query_set_ranked_by_trend_days(query_handle, 5);"," steam_ugc_query_set_return_long_description(query_handle, true);"," steam_ugc_query_set_allow_cached_response(query_handle,\n    true);"," query_ID = steam_ugc_send_query(query_handle);","\n  ","The above code creates a query request and stores it's handle in a local variable for future use in the rest of the functions which further define the query request before sending the query.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_ugc_query_add_required_tag","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_query_set_ranked_by_trend_days"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2330"})