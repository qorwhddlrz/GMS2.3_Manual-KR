rh._.exports({"0":["shader_set_uniform_matrix_array"],"1":["shader_set_uniform_matrix_array"],"2":["shader_set_uniform_matrix_array"],"3":["\n  ","\n  ","\n  ","With this function you can set a shader constant to hold an array of matrix values. You must previously have gotten the \"handle\" of the constant using the function ","shader_get_uniform()",",\n    and you will have to have previously initialised the array as an array of floating point values, where each successive group of 16 floats is a 4x4 matrix.","\n  ","NOTE",": All uniforms must be set ","after"," calling the function ","shader_set()",", and before calling \n    ","shader_reset()",".","\n  "," ","\n  ","\n  ","shader_set_uniform_matrix_array(handle, array);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","handle","\n        ","The handle of the shader constant to set.","\n      ","\n      ","\n        ","array","\n        ","A previously initialised array of floating point values.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","shader_set(shader_Glass);"," shader_params = shader_get_uniform(shader_tint, \"cMatrixArray\");"," shader_set_uniform_matrix_array(shader_params, matrix_array);"," draw_self();\n    "," shader_reset();\n  ","\n  ","The above code will get the handle of the shader constant \"cMatrixArray\" then set that constant to the given array.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shader_reset","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["shader_set_uniform_matrix_array"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"813"})