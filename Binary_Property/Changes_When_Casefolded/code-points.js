module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,152,81,150,221,32,12,67,55,148,143,103,108,131,89,75,79,247,191,141,234,138,126,68,157,198,40,131,48,65,202,252,217,253,237,253,237,243,237,249,246,253,206,239,59,241,157,245,157,252,78,125,167,191,179,191,115,190,51,223,185,223,252,190,137,111,214,55,249,77,125,211,223,236,111,206,55,243,205,253,238,239,11,149,227,46,93,169,171,116,181,174,173,235,232,26,93,247,91,191,159,174,208,181,116,165,174,210,213,186,182,174,163,107,116,105,92,104,92,104,92,104,92,104,92,104,92,104,76,104,76,104,76,104,204,210,152,165,49,75,99,150,198,180,234,173,218,214,253,173,123,91,28,233,91,82,183,164,109,73,217,146,174,37,85,75,154,150,20,45,233,89,82,179,164,101,73,201,146,142,37,13,75,243,95,154,251,210,188,83,115,78,205,55,53,215,212,60,83,115,76,205,47,53,175,140,214,117,116,221,47,53,151,212,60,114,233,222,210,189,165,123,169,113,41,110,138,155,226,166,184,165,123,165,123,165,123,165,123,165,123,173,123,173,123,173,123,210,145,210,145,210,145,210,145,210,145,210,145,210,145,210,145,210,145,210,145,210,145,106,79,170,57,169,181,79,53,38,213,150,148,150,148,150,148,150,188,186,175,126,164,244,164,250,145,232,81,31,74,154,74,125,40,245,160,164,171,164,171,180,254,37,109,165,53,47,105,43,105,43,173,121,105,189,75,107,93,90,231,146,190,146,190,90,186,39,109,149,122,70,234,158,244,85,234,126,234,25,169,231,75,99,73,95,73,83,181,234,173,154,116,149,116,85,171,190,197,219,186,175,45,88,218,128,165,237,87,218,124,165,173,87,218,120,165,254,148,250,83,234,79,169,63,37,77,37,77,37,77,165,254,148,244,148,246,85,73,79,75,75,171,63,45,45,45,45,45,45,45,29,173,30,181,180,180,246,78,75,71,75,71,75,71,75,71,47,221,91,186,39,29,45,29,173,30,181,52,180,122,212,234,81,107,254,173,30,181,52,180,122,212,234,81,171,71,45,61,173,30,181,180,180,180,180,122,212,234,81,171,47,173,249,183,230,223,234,77,171,47,173,190,180,52,180,122,211,210,209,210,209,210,209,210,209,210,49,201,203,163,127,121,167,116,255,74,195,213,252,175,222,135,251,227,255,243,93,105,184,122,15,174,250,113,165,227,170,39,87,90,174,246,220,13,234,122,245,164,233,106,239,93,233,186,234,207,149,182,171,30,93,233,187,218,135,87,26,175,246,226,85,175,174,116,94,245,235,74,235,85,191,174,244,94,205,227,74,243,85,223,174,180,92,173,255,213,222,186,210,112,53,247,171,249,93,205,253,50,71,205,253,106,238,87,61,184,234,193,213,59,114,121,183,127,106,130,96,1,5,108,192,133,43,8,10,210,32,104,224,0,84,53,111,1,213,69,117,193,93,12,89,60,96,49,110,121,28,79,73,126,71,194,72,24,9,35,97,36,140,132,145,48,18,70,194,40,24,5,163,96,20,140,130,81,48,10,70,193,40,24,5,163,97,52,140,134,209,48,26,70,195,104,24,13,163,97,52,140,13,99,195,216,48,54,140,13,99,195,216,48,54,140,13,99,195,56,48,180,91,34,212,58,193,2,10,216,128,198,5,82,3,149,129,192,64,91,32,43,80,20,136,9,116,4,18,130,217,7,19,15,230,28,219,64,149,95,30,252,222,224,87,198,161,112,40,28,10,135,194,80,24,10,67,97,40,12,5,78,116,31,231,62,203,125,144,251,20,231,8,15,206,239,224,240,14,78,238,224,216,14,206,236,224,192,14,78,235,224,184,14,206,235,224,176,14,78,234,224,152,22,52,64,129,174,46,84,46,84,46,84,46,84,46,84,46,84,46,84,46,84,46,84,46,84,46,84,46,154,194,145,31,156,249,193,161,31,156,250,193,177,31,156,251,193,193,31,156,252,193,209,31,156,253,193,225,31,156,254,193,241,31,156,255,129,1,4,14,16,88,64,224,1,129,9,4,46,16,216,64,224,3,129,17,4,78,16,88,65,224,5,129,25,4,110,32,160,128,242,68,57,167,127,112,252,11,2,160,202,142,197,10,4,13,48,142,29,139,45,8,96,160,60,217,177,88,132,0,6,107,144,236,88,236,66,0,131,213,72,118,44,214,33,128,193,186,36,59,22,27,17,192,96,133,146,29,139,165,8,96,176,86,201,142,197,94,4,48,88,181,100,199,98,53,225,179,159,213,21,28,0,11,224,220,102,157,5,1,96,7,156,225,172,184,0,198,134,193,121,206,218,11,96,28,24,156,237,116,65,0,227,192,224,156,167,31,2,24,28,249,235,192,224,224,95,3,131,227,127,13,12,76,96,141,157,7,198,192,192,16,214,192,192,22,214,133,129,57,44,57,222,217,122,138,96,1,5,108,64,81,102,95,10,151,194,165,112,41,168,191,231,168,191,130,5,20,64,250,249,81,8,10,65,33,40,4,133,160,176,40,44,10,139,194,162,176,40,36,133,164,144,20,146,66,82,40,10,69,161,40,20,133,162,208,20,154,66,83,104,10,77,97,83,216,20,54,133,77,97,83,32,175,29,226,218,33,173,29,135,53,178,218,65,249,65,249,65,249,65,249,65,249,65,249,65,249,65,249,65,249,65,249,160,124,80,62,40,31,148,15,202,7,229,131,242,65,249,160,124,80,62,40,31,148,15,202,7,229,131,242,65,239,104,123,11,248,47,122,7,189,131,222,65,239,160,119,208,59,232,29,244,14,122,7,189,131,222,65,239,160,119,208,59,232,29,244,14,122,7,189,131,222,65,47,38,122,112,81,1,5,244,14,122,7,189,131,222,65,239,160,119,208,123,209,139,223,30,12,247,224,182,7,187,61,248,173,128,2,122,177,218,131,207,30,76,246,224,176,7,123,61,120,235,193,88,207,165,211,216,234,193,83,181,174,134,6,24,162,119,85,192,56,189,171,231,34,250,234,93,213,210,243,211,246,79,112,245,30,9,224,110,184,104,195,127,5,112,15,92,84,226,199,7,67,22,192,64,219,189,254,9,238,133,139,202,123,225,90,234,37,186,75,219,224,196,243,147,64,65,0,11,80,152,199,112,7,175,29,108,118,112,216,193,57,7,231,28,156,115,112,206,193,57,7,231,28,156,115,112,206,193,233,6,167,27,156,110,112,186,193,233,6,167,27,156,110,112,58,1,79,57,60,229,192,56,48,14,140,3,227,192,240,71,6,129,232,199,135,198,143,88,244,227,99,227,199,231,198,143,15,142,31,159,28,63,62,58,126,124,118,252,6,6,81,234,119,97,92,24,23,198,133,113,97,92,24,23,198,133,193,106,40,147,0,1,44,32,129,2,26,216,192,1,6,128,193,170,5,171,38,179,5,24,23,140,11,170,139,234,162,186,120,222,226,121,139,113,73,129,229,196,202,5,208,18,26,209,15,63,23,240,0,22,27,239,22,192,109,184,205,96,86,50,88,73,12,92,192,163,88,73,188,91,64,193,223,101,44,19,6,46,128,198,50,5,203,132,149,15,225,121,72,206,130,0,116,143,96,43,104,96,3,7,112,65,15,37,234,10,2,88,64,2,48,152,21,225,87,0,163,97,52,140,67,192,188,78,145,250,137,239,139,203,7,134,96,1,9,20,208,192,6,14,48,0,12,146,110,17,117,249,254,184,124,128,8,96,16,121,249,14,17,192,32,245,22,177,151,111,18,1,12,146,47,159,38,241,220,63,48,163,120,33,32,176,163,120,89,32,48,164,120,145,32,214,11,96,206,68,152,82,188,128,16,216,82,188,156,16,24,83,188,184,16,88,83,188,212,16,152,83,188,240,16,216,83,188,12,17,24,84,188,40,17,88,84,188,68,17,152,84,188,96,17,216,84,188,124,17,24,85,188,152,33,52,215,57,107,93,115,175,185,247,58,15,58,16,254,194,232,92,248,75,163,227,225,175,141,78,137,191,99,124,41,210,220,48,119,63,52,119,155,187,95,180,244,120,175,76,122,77,210,171,145,94,141,244,106,164,87,35,189,14,105,237,105,45,121,223,207,126,166,85,164,231,159,247,69,85,103,85,207,182,60,207,242,12,203,115,43,207,138,102,131,174,134,171,225,234,122,57,215,85,103,227,114,56,46,167,227,114,60,46,231,227,114,64,46,39,228,122,17,249,101,228,255,33,217,213,23,147,157,147,203,65,185,156,148,171,93,109,87,219,85,175,82,121,149,106,191,132,237,170,247,79,121,231,148,247,76,121,125,202,43,83,94,153,242,222,40,239,138,242,126,168,121,241,220,85,175,88,185,155,205,167,247,106,103,169,118,142,106,103,168,118,126,106,103,167,118,110,106,103,166,118,94,234,243,242,152,171,206,72,237,124,212,206,70,237,92,212,243,146,154,171,215,247,175,239,95,231,177,159,211,219,207,201,237,231,212,182,30,58,183,45,143,73,143,201,151,238,92,77,87,211,213,114,181,92,45,87,203,9,110,30,190,12,231,196,231,36,118,60,135,227,57,28,207,97,252,219,199,191,157,160,1,250,126,188,212,231,106,184,26,174,250,207,15,227,63,64,140,255,4,49,158,243,120,206,227,57,143,231,60,249,210,162,171,158,243,120,206,227,57,143,231,60,158,243,120,206,228,16,50,165,171,237,106,191,148,233,170,51,239,184,71,227,30,141,163,235,56,182,142,35,235,184,23,243,242,234,203,170,47,167,190,140,170,183,99,59,69,111,199,232,237,28,189,29,164,183,147,244,118,148,222,206,210,219,129,120,59,17,111,71,226,237,76,188,29,138,119,243,231,38,176,140,109,220,198,99,28,163,71,106,173,192,48,46,163,185,203,220,101,238,50,119,153,187,204,93,230,166,185,105,110,154,155,230,166,185,105,110,154,155,230,106,133,247,102,39,131,97,92,198,52,150,177,141,219,120,140,143,117,193,99,238,49,247,152,123,204,61,230,30,115,143,185,199,220,99,238,49,119,204,29,115,199,220,49,119,204,29,115,199,220,49,119,204,29,115,175,185,215,220,107,238,53,247,154,123,205,189,230,94,115,175,185,247,254,253,7,206,44,227,124,56,21,0,0])))