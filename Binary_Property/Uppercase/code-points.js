module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,88,75,150,237,56,8,219,208,29,4,243,95,203,59,189,255,109,180,132,106,16,92,21,44,98,201,14,112,243,175,242,87,245,171,254,213,252,106,127,253,253,218,126,253,126,237,191,142,95,231,175,235,215,253,235,249,245,254,230,251,141,253,230,253,198,127,19,191,201,223,212,111,250,55,243,155,253,237,247,179,125,184,28,87,224,74,92,133,171,113,13,174,253,189,239,195,101,184,30,46,199,21,184,18,87,225,106,92,131,11,243,12,243,12,243,12,243,12,243,12,243,12,115,12,115,12,115,12,115,30,230,60,204,121,152,147,240,37,238,23,238,21,254,47,204,7,175,7,86,15,156,30,24,61,240,121,96,243,192,229,129,201,3,143,7,22,15,28,30,24,60,172,255,97,253,15,107,127,88,247,195,154,29,235,117,172,213,177,78,199,26,29,235,115,172,205,177,38,183,196,213,184,246,231,88,135,63,220,123,184,247,112,207,49,199,129,115,224,28,56,7,46,112,47,112,47,112,47,112,47,112,47,113,47,113,47,113,15,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,91,226,216,16,199,118,56,182,193,193,193,193,193,193,193,23,247,176,7,14,30,142,61,112,242,128,246,1,46,1,237,3,186,7,248,4,248,4,52,15,112,10,232,28,224,20,224,20,208,57,160,113,64,223,128,182,1,94,1,94,241,112,15,188,194,17,195,113,15,220,194,113,223,17,195,17,31,252,2,220,2,124,34,113,31,92,162,48,183,48,23,199,44,112,200,2,71,44,112,192,2,199,43,112,184,2,123,17,216,139,192,94,4,246,34,192,35,192,35,192,35,176,23,1,14,129,243,147,88,123,98,31,18,107,79,172,61,177,246,196,186,19,123,145,88,123,226,124,36,214,157,88,119,98,221,137,117,231,195,189,135,123,88,119,98,221,137,253,72,172,57,177,31,137,253,72,172,55,177,31,137,53,39,246,35,177,31,137,253,72,172,63,177,31,137,253,72,112,72,236,71,98,63,18,123,144,88,123,98,237,137,125,72,236,65,98,15,18,235,79,236,67,130,67,130,67,130,67,130,67,130,195,240,141,225,251,130,123,139,245,47,214,190,56,239,251,241,255,249,45,214,191,56,231,11,237,23,28,22,250,47,120,44,206,213,26,253,120,173,192,103,113,190,22,156,22,123,177,224,181,216,143,5,183,197,89,91,240,219,135,121,216,151,5,199,197,222,44,120,46,246,102,193,117,177,63,11,190,139,61,90,104,190,208,124,177,238,197,218,22,235,93,174,13,235,93,172,119,161,249,66,243,197,249,95,190,179,31,132,135,121,52,65,131,247,249,51,254,139,149,194,52,13,231,97,129,48,116,96,137,48,156,252,56,229,17,241,56,239,221,188,133,113,6,117,34,156,8,39,194,137,112,34,156,8,39,194,137,112,34,130,136,32,34,136,8,34,130,136,32,34,136,8,34,130,136,32,34,137,72,34,146,136,36,34,137,72,34,146,136,36,34,137,72,34,138,136,34,162,136,40,34,138,136,34,162,136,40,34,138,136,34,162,137,192,145,48,195,30,193,60,154,160,41,26,204,51,82,53,178,52,18,52,114,51,210,50,50,50,146,49,242,48,82,48,174,222,184,112,227,154,173,206,208,203,135,27,159,107,124,164,53,29,77,71,211,209,116,12,29,67,199,208,49,116,12,29,76,203,151,151,47,41,95,70,190,116,204,92,108,76,196,198,44,108,76,193,198,252,107,76,190,198,204,107,76,187,198,188,107,76,188,198,172,107,76,185,48,78,147,52,116,112,87,31,89,62,178,124,100,249,200,242,145,229,35,203,71,150,143,44,31,89,62,178,124,100,249,184,41,204,223,198,4,110,204,224,198,20,110,204,225,198,36,110,204,226,198,52,110,204,227,198,68,110,204,228,198,84,110,204,229,198,100,110,204,230,198,116,110,204,231,198,132,110,204,232,198,148,110,204,233,198,164,110,204,234,198,180,110,204,235,198,196,110,204,236,198,212,14,67,7,153,59,153,59,185,49,159,195,24,13,189,60,177,204,237,48,73,195,121,60,177,204,243,48,68,144,185,243,196,50,231,195,16,65,13,156,39,150,249,31,134,8,170,225,60,177,172,5,48,68,80,23,231,137,101,93,128,33,130,10,57,79,44,107,4,12,17,212,202,121,98,89,47,96,136,160,106,206,19,203,218,17,20,22,166,105,152,210,1,11,74,12,99,52,76,239,204,207,20,27,134,89,254,96,204,213,148,29,134,136,38,130,121,155,27,0,67,68,19,193,28,206,173,128,33,130,233,252,53,17,76,234,111,136,96,106,127,67,4,19,252,155,171,36,68,12,17,76,246,111,136,96,202,127,75,4,19,255,67,5,235,66,20,152,71,19,52,69,131,86,164,150,142,165,99,233,88,58,176,181,221,216,90,152,71,19,52,236,94,62,58,140,14,163,195,232,48,58,140,142,71,199,163,227,209,241,232,120,116,56,29,78,135,211,225,116,56,29,65,71,208,17,116,4,29,65,71,210,145,116,36,29,73,71,210,81,116,20,29,69,71,209,81,116,176,223,106,182,91,205,110,171,175,217,98,175,213,100,222,100,222,100,222,100,222,100,222,100,222,100,222,100,222,100,222,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,62,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,57,100,201,242,216,172,143,48,116,144,229,144,229,144,229,144,229,144,229,144,229,144,229,146,37,43,105,179,148,54,235,104,179,144,54,43,41,12,29,100,201,34,218,172,160,205,242,217,172,157,205,194,217,172,154,205,146,217,203,253,101,193,108,86,75,168,121,38,105,56,5,47,39,12,231,225,229,236,37,233,197,203,9,193,249,87,221,95,196,226,237,129,33,182,136,37,183,101,195,188,215,50,55,177,100,185,67,4,169,238,16,65,110,187,247,23,177,75,44,89,238,18,123,84,151,13,55,184,193,240,47,16,132,49,154,71,131,22,156,21,118,88,92,135,117,117,88,82,135,165,114,88,42,135,165,114,88,42,135,165,114,88,42,135,165,114,88,42,135,37,11,198,104,30,13,230,177,60,193,208,139,35,0,131,160,44,69,48,244,98,187,97,16,133,165,8,134,222,102,148,102,148,230,60,254,42,48,254,46,96,1,130,65,168,128,116,195,134,16,6,136,40,254,11,253,96,130,134,14,28,149,97,111,56,108,12,97,232,104,58,154,142,102,20,70,102,123,56,236,15,135,13,34,12,163,64,73,24,194,150,222,229,228,189,41,136,199,6,17,198,104,224,96,175,7,147,52,69,115,247,134,134,147,185,210,76,78,38,233,36,105,118,130,48,68,36,17,73,68,18,65,50,236,255,150,13,246,178,195,94,182,216,203,30,27,230,209,56,77,208,36,77,209,52,205,208,16,193,6,48,216,1,178,5,95,246,224,48,68,176,19,100,43,14,67,4,155,193,96,55,200,182,28,134,8,54,132,236,206,77,181,210,152,191,77,37,211,152,193,77,149,211,152,195,77,5,212,158,218,149,235,32,152,199,77,229,212,152,201,77,85,213,152,203,77,197,213,152,205,77,53,214,152,207,77,165,214,152,209,77,21,215,152,211,77,133,215,152,213,77,245,215,152,215,77,101,216,152,217,77,213,216,152,219,77,69,25,246,176,215,149,188,61,236,30,118,247,186,167,107,159,62,59,123,93,212,231,103,175,153,250,242,236,245,84,95,159,85,207,117,88,59,108,201,30,182,14,91,106,196,110,254,41,227,167,137,159,26,126,106,248,169,225,167,134,159,14,126,220,253,184,248,234,239,139,121,44,252,214,239,171,198,238,58,187,91,109,220,58,227,86,24,183,182,184,85,113,179,105,207,107,231,181,243,62,117,133,231,189,78,50,174,149,140,235,37,227,154,201,184,110,50,174,157,140,235,39,67,13,165,58,202,191,150,242,188,106,42,175,171,140,107,43,227,250,202,200,243,230,121,243,188,167,82,156,74,81,234,71,207,123,231,39,238,228,196,157,153,56,125,226,148,137,83,38,238,108,196,157,138,184,243,16,163,102,246,188,167,88,220,110,38,127,125,190,188,246,35,175,245,200,107,59,242,175,83,185,6,229,90,141,188,54,35,175,197,200,86,11,115,222,107,43,242,90,138,188,118,34,175,149,200,81,115,115,222,189,251,123,247,247,90,152,239,26,158,239,154,157,239,26,157,39,123,173,206,187,57,126,115,92,13,209,121,253,188,126,222,56,111,156,55,206,27,215,244,140,172,218,158,107,146,174,121,233,91,67,223,26,250,214,48,247,244,185,167,179,54,211,222,125,83,163,116,94,59,175,157,247,126,129,207,253,6,159,251,21,62,183,230,185,53,207,173,121,110,205,227,106,176,206,123,107,158,91,243,220,154,231,214,60,183,230,185,53,179,136,179,13,59,111,158,55,213,152,157,247,218,196,185,61,154,219,163,185,110,111,174,211,155,235,242,230,246,98,212,226,169,189,83,107,167,182,14,111,71,37,191,144,208,198,217,60,91,103,251,236,156,93,90,112,164,61,20,152,210,30,246,29,246,29,246,29,246,29,246,29,246,29,214,15,235,135,245,195,250,97,253,176,126,88,63,172,31,22,202,84,241,4,210,218,217,119,214,207,198,217,60,91,103,251,172,80,75,219,135,237,195,246,97,251,176,125,216,62,108,31,182,15,219,135,237,195,206,97,231,176,115,216,57,236,28,118,14,59,135,157,195,206,97,231,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,123,239,118,46,245,96,208,127,151,130,48,152,134,167,193,53,132,134,212,160,31,139,252,241,199,65,81,76,81,158,162,60,69,121,138,242,20,229,41,202,83,148,167,40,79,81,158,162,60,69,113,69,113,69,113,69,113,69,41,249,74,190,146,175,254,124,122,66,233,9,165,39,148,158,80,122,66,233,9,173,40,173,40,173,40,173,40,173,40,173,40,173,40,173,40,173,40,173,40,163,40,163,40,163,40,163,40,163,40,87,5,119,165,231,74,207,149,158,107,127,190,210,208,26,70,195,61,97,165,231,74,207,149,158,43,61,87,122,174,244,92,233,185,210,115,165,231,74,207,149,158,43,61,87,122,174,244,92,87,20,87,20,87,20,87,20,233,185,18,114,37,228,74,186,149,88,43,177,182,255,124,122,172,228,89,201,179,210,101,165,203,74,151,253,211,101,20,122,4,215,167,137,101,135,240,190,239,62,49,124,247,57,137,131,190,78,152,124,239,211,96,26,158,6,215,16,26,82,131,162,60,69,121,138,242,20,197,21,197,21,197,21,197,21,197,21,197,21,197,21,197,21,197,21,197,21,37,20,37,20,165,228,43,249,90,55,91,161,91,161,91,161,91,193,90,128,22,96,20,108,132,27,225,70,184,17,110,180,150,17,124,4,255,211,108,5,95,193,239,51,199,103,18,203,36,150,73,37,147,74,38,149,76,42,153,228,49,201,99,146,199,36,143,73,30,147,46,38,9,76,18,152,36,48,73,112,31,176,56,232,65,33,128,36,48,73,96,253,119,83,79,111,61,93,130,152,4,49,9,98,18,196,36,136,73,16,147,32,38,65,248,211,226,6,69,145,46,38,93,76,186,152,116,49,233,98,127,186,172,162,172,162,172,162,172,162,236,69,121,82,73,31,181,48,148,134,63,223,104,184,39,60,137,245,36,150,62,123,97,112,13,138,162,179,164,15,97,24,20,69,66,62,9,169,79,99,24,20,69,66,62,9,169,143,101,24,20,37,20,37,20,37,20,37,20,69,122,62,233,169,239,97,223,147,158,250,48,246,61,233,169,47,100,223,147,158,250,84,246,61,233,169,111,102,223,147,158,250,120,246,61,233,169,175,104,223,147,158,250,156,246,61,233,169,239,106,223,147,158,250,192,246,189,63,61,245,141,241,250,248,247,185,62,54,94,39,143,65,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,207,251,8,199,65,81,82,81,82,81,164,167,75,79,151,158,62,127,62,61,65,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,33,61,67,122,198,223,87,220,207,53,132,134,139,18,210,51,164,103,72,207,240,63,95,105,104,13,163,65,79,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,243,126,134,112,80,148,84,148,84,20,105,22,210,44,164,89,72,179,144,102,33,205,66,154,133,52,11,105,22,210,44,164,89,72,179,148,102,41,205,82,154,165,52,75,105,150,210,44,245,45,60,191,214,48,26,20,197,20,197,20,197,20,69,18,164,36,72,73,144,146,32,37,65,74,130,148,4,41,9,82,18,164,36,72,73,144,146,32,83,81,82,81,74,81,74,81,74,81,74,81,74,81,74,81,74,81,74,81,84,164,82,69,42,239,35,250,87,127,31,252,197,182,196,182,196,182,196,182,196,182,196,182,196,182,196,182,204,53,40,138,41,138,106,120,169,134,151,106,120,169,134,151,202,82,169,44,149,106,120,169,58,149,242,110,41,239,150,242,110,41,239,150,242,68,137,109,137,109,137,109,137,109,137,109,137,109,213,31,64,143,253,99,171,202,92,42,75,165,178,84,42,75,165,178,84,74,163,165,52,90,74,163,165,52,90,122,237,75,175,125,233,181,47,189,246,165,215,190,244,218,151,94,251,22,219,22,219,22,219,22,219,22,219,22,219,126,127,128,214,48,26,238,177,173,172,216,202,138,173,183,184,245,22,183,222,226,214,91,220,122,139,91,111,113,235,45,110,189,197,173,183,184,245,22,183,222,226,214,91,220,122,139,187,231,191,255,1,177,20,176,64,7,32,0,0])))