module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,152,65,150,228,40,12,5,47,148,11,3,66,136,179,244,155,251,95,99,20,65,45,58,240,179,137,111,27,40,82,238,127,81,191,184,191,253,253,246,248,237,249,219,235,183,227,183,247,111,231,111,159,223,56,213,255,238,111,212,238,127,125,92,125,124,191,223,200,53,193,2,1,54,72,112,64,129,238,155,65,231,24,157,114,18,144,105,40,169,167,62,192,213,154,96,129,0,157,119,57,186,239,40,193,1,5,120,10,30,227,222,1,38,88,191,25,95,130,3,10,220,198,248,192,0,19,208,111,4,216,191,185,251,233,27,30,37,56,160,64,187,187,159,190,49,192,4,11,112,53,184,186,185,186,185,186,185,218,99,55,51,39,240,40,192,6,9,14,40,208,110,158,15,180,123,250,61,26,30,77,176,64,128,13,18,28,80,160,221,59,10,112,52,63,48,192,4,11,4,216,32,193,249,173,47,18,120,84,224,54,250,233,27,3,76,176,64,128,13,48,54,198,110,99,156,0,27,36,56,192,11,29,53,122,26,27,3,76,208,81,227,114,116,61,194,189,184,23,247,226,246,203,172,245,77,176,64,128,13,18,28,96,151,142,95,61,131,141,142,143,245,1,143,38,88,32,192,6,9,14,40,208,110,4,70,96,4,70,96,4,70,180,193,28,45,230,104,49,71,139,57,90,204,209,98,142,22,115,180,152,163,198,4,237,50,71,139,57,90,204,209,98,142,22,115,180,152,163,197,28,45,230,104,213,247,129,118,11,183,112,139,65,44,6,177,24,196,98,16,139,65,44,6,177,24,196,98,16,139,65,44,6,177,10,163,48,10,163,48,10,163,48,46,70,175,156,24,249,1,143,38,88,32,192,6,9,14,40,112,127,209,127,27,96,128,9,22,8,176,65,130,3,10,180,113,209,110,15,73,99,128,9,22,8,176,65,130,3,216,86,14,70,97,20,70,97,20,70,97,20,70,97,20,70,191,214,174,142,111,12,48,127,57,134,88,32,192,6,9,14,40,112,27,253,103,208,24,128,115,147,115,139,115,139,115,139,148,69,202,34,101,145,178,72,89,164,36,253,146,126,73,191,164,95,210,47,233,151,244,75,251,145,220,99,144,209,15,217,24,96,130,5,2,108,144,224,128,2,109,100,47,229,6,71,189,148,27,3,76,176,64,128,13,18,28,208,6,59,97,178,19,54,18,28,224,133,142,98,223,72,246,141,100,77,38,107,50,89,117,201,170,107,76,224,185,0,27,36,56,160,64,167,176,119,38,123,103,35,192,6,9,14,40,112,127,231,235,228,198,104,244,19,52,56,119,57,119,57,215,41,141,5,2,108,144,224,252,206,236,9,104,44,16,96,131,4,94,45,208,121,172,201,195,154,60,172,186,195,170,59,115,115,110,115,110,147,178,73,217,164,108,82,54,41,189,75,21,59,72,177,101,20,91,70,177,101,20,91,70,99,130,213,152,156,155,156,155,156,155,158,67,235,205,178,145,128,168,73,74,175,161,218,28,109,143,122,53,53,6,152,96,129,0,27,36,56,0,99,97,4,70,96,4,70,96,4,70,96,4,70,96,4,70,96,108,140,141,177,49,54,198,198,216,24,27,131,87,221,27,99,99,36,70,98,36,70,98,36,70,98,36,70,98,36,70,98,28,140,131,113,48,14,198,193,56,24,7,227,96,28,140,162,95,209,175,232,87,244,235,229,120,25,211,203,152,54,2,120,46,193,1,5,110,163,71,252,50,226,151,17,191,140,248,101,196,47,35,126,25,241,203,136,95,70,252,50,226,183,55,124,128,177,48,22,198,194,88,24,11,99,97,44,140,133,17,24,129,17,24,129,17,24,129,17,24,129,17,24,129,177,49,54,198,198,216,24,27,99,99,108,140,141,177,49,54,70,98,36,70,98,36,70,98,36,70,98,36,70,98,36,198,193,232,113,190,193,221,98,123,52,193,2,1,54,72,112,64,129,118,131,187,5,119,11,238,22,220,45,184,91,112,183,224,110,193,221,130,187,5,119,99,71,186,236,72,227,27,253,119,15,151,12,185,101,202,35,75,94,216,127,40,80,119,232,14,221,161,59,116,135,238,208,29,186,67,119,234,78,221,169,59,117,167,238,212,157,186,83,119,234,78,221,165,219,51,221,247,32,121,206,222,52,218,39,109,178,92,224,146,33,223,213,148,71,150,188,48,236,19,246,9,250,36,213,97,115,200,41,73,43,234,214,230,59,14,185,101,202,35,75,146,92,212,175,77,114,248,113,134,38,148,9,101,66,153,80,38,148,9,101,66,153,224,147,148,79,82,62,73,189,39,185,186,190,245,245,93,174,239,114,25,153,230,144,83,46,25,210,254,62,237,245,105,249,189,133,38,28,19,202,4,159,246,250,180,215,167,181,158,158,22,212,211,138,122,90,82,79,107,234,105,81,61,173,170,39,101,117,76,182,63,72,185,192,6,8,61,191,166,92,50,228,150,41,41,27,206,76,249,142,75,146,115,204,57,230,28,115,142,57,199,156,67,142,181,103,88,124,134,213,39,188,144,42,167,217,110,47,147,148,71,150,164,207,156,159,180,79,175,34,184,100,72,242,103,122,156,239,216,156,52,39,205,73,115,142,57,199,156,99,14,181,206,10,143,227,239,56,228,150,41,143,44,73,78,80,254,52,201,201,239,147,239,120,202,37,67,110,153,242,200,146,157,19,31,239,219,60,178,164,231,121,223,230,144,83,46,25,178,127,206,123,2,83,30,89,178,127,250,123,74,63,57,228,148,75,134,196,61,246,180,174,216,22,22,219,202,98,91,90,108,107,139,109,113,177,173,46,182,229,197,182,190,216,22,24,253,35,162,59,116,135,238,208,29,186,67,119,232,14,221,161,59,116,167,238,212,157,186,83,119,234,250,118,53,117,167,238,212,157,186,75,119,233,46,221,165,187,116,151,238,210,93,186,75,119,233,134,110,232,134,110,232,110,251,111,251,111,251,111,251,167,253,211,254,105,255,180,127,122,175,244,94,169,155,186,169,155,186,71,247,232,30,221,163,123,116,143,238,209,61,186,71,247,232,150,110,233,150,110,233,150,110,233,150,110,233,150,110,233,94,221,171,123,117,175,238,213,189,186,174,156,114,229,148,43,167,92,15,215,245,112,93,15,215,245,112,93,15,215,245,112,93,15,215,245,112,93,15,215,245,112,93,15,215,245,112,93,15,215,245,192,142,215,159,204,204,69,242,235,14,75,82,49,243,123,218,228,173,115,91,47,111,11,230,109,197,188,45,153,183,53,243,97,181,52,135,156,114,201,144,91,166,124,253,75,82,76,243,133,7,151,12,185,101,202,35,75,94,11,242,41,151,180,78,207,87,168,91,169,51,203,229,167,69,249,109,81,126,92,148,95,23,229,231,69,249,125,81,126,96,148,95,24,197,174,5,233,201,119,43,28,242,157,89,50,228,150,41,113,253,20,41,191,69,202,143,145,242,107,164,252,28,41,191,71,202,15,146,242,139,228,178,127,194,35,75,122,158,49,188,62,201,245,73,46,251,39,12,185,165,238,212,157,186,83,119,233,46,221,165,187,116,151,238,210,93,186,75,119,233,46,221,208,13,221,208,13,221,208,13,221,126,223,211,175,53,229,146,33,183,124,87,143,44,121,97,207,2,28,82,55,117,83,55,117,83,55,117,83,55,117,143,238,209,61,186,71,247,232,30,221,163,123,116,143,238,209,45,221,210,45,221,210,45,221,210,45,221,210,45,221,210,189,186,87,247,234,94,221,171,123,117,175,238,213,189,186,124,168,5,123,53,28,114,202,37,67,110,153,242,200,146,186,67,119,232,14,221,161,59,116,135,238,208,29,186,67,119,232,78,221,169,59,117,167,238,212,157,186,83,119,234,78,221,169,187,116,151,238,210,93,186,75,119,233,46,221,165,187,116,151,110,232,134,110,232,134,110,232,134,174,43,167,151,190,212,13,221,46,206,187,150,205,62,101,115,109,254,78,238,241,154,249,154,245,154,120,205,126,77,190,230,188,230,165,236,151,146,47,37,95,74,190,148,124,41,249,82,146,74,236,243,191,62,105,214,107,226,53,127,215,242,53,231,53,245,154,107,99,169,246,29,43,203,239,220,151,114,95,202,125,41,247,165,220,151,114,95,202,125,41,215,20,150,139,205,120,205,124,205,122,77,188,102,191,38,95,115,94,83,175,121,41,227,165,140,151,50,94,202,120,41,227,165,140,151,50,94,202,120,41,227,165,140,151,50,95,202,124,41,243,165,204,151,50,95,202,124,41,243,165,204,151,50,95,202,124,41,235,165,88,65,251,159,15,54,235,53,241,154,253,154,124,205,121,77,189,230,218,88,248,251,223,17,54,243,191,255,1,68,2,53,38,43,23,0,0])))