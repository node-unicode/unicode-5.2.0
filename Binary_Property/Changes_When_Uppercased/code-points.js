module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,152,81,182,195,56,8,67,55,244,62,138,1,27,214,50,103,246,191,141,209,85,230,35,156,214,160,4,97,23,209,252,179,239,111,231,111,247,47,126,63,93,161,235,232,74,93,165,171,117,93,93,79,215,232,82,92,40,46,20,23,138,11,197,133,226,66,113,161,184,80,92,40,46,20,119,20,119,20,119,20,55,241,119,78,234,42,93,173,235,234,122,186,70,215,254,157,252,233,82,76,30,93,138,75,197,165,226,82,113,169,184,84,92,42,174,20,87,138,43,197,149,226,74,113,165,184,82,92,41,166,20,211,138,105,197,180,98,90,49,173,152,86,76,235,62,45,255,149,239,106,253,106,237,106,237,106,237,105,237,105,237,105,237,105,237,105,141,156,71,107,163,181,209,218,104,109,181,182,90,91,173,169,114,71,117,75,213,44,85,175,84,173,82,117,74,213,40,85,159,84,93,82,53,73,213,35,85,139,84,29,82,252,83,220,243,176,166,56,113,78,241,77,113,77,241,76,113,76,241,75,113,75,241,202,210,154,56,165,248,164,184,164,120,164,120,164,120,164,120,164,120,164,120,164,120,164,120,164,120,164,120,164,120,228,211,51,70,207,29,61,87,60,114,244,108,241,72,241,200,213,218,222,191,210,94,151,242,46,229,92,218,215,82,206,165,61,44,237,95,105,239,74,249,150,242,44,237,75,105,47,74,251,80,202,175,148,91,41,183,82,78,165,250,86,203,215,124,87,236,213,125,174,226,175,214,175,214,175,48,79,107,79,107,79,107,79,107,170,113,169,198,165,26,151,114,43,213,184,148,91,41,183,82,141,75,53,46,213,184,200,81,199,179,84,231,86,157,91,185,182,106,220,202,183,85,227,214,249,107,157,189,86,206,173,156,91,57,183,206,89,235,140,181,206,87,43,247,86,141,91,53,110,213,184,85,227,86,141,91,28,90,53,110,113,104,213,183,85,223,22,151,86,125,91,60,90,60,90,245,109,213,183,149,119,171,158,173,188,91,53,109,229,219,202,183,149,111,43,223,86,190,173,122,182,114,238,45,93,242,41,239,86,222,173,188,175,242,190,58,31,87,191,159,171,156,175,206,196,85,190,87,249,94,229,122,149,235,213,153,184,202,245,42,191,171,51,126,149,219,213,121,190,202,237,234,60,95,229,119,117,158,111,207,223,40,102,84,183,81,30,163,28,70,207,31,61,127,244,252,213,111,114,133,95,241,219,226,179,214,244,27,89,237,215,234,55,178,226,187,186,239,234,190,171,251,174,238,187,186,239,138,251,106,31,87,252,87,123,185,170,193,234,89,171,58,172,246,115,85,139,213,158,174,234,177,218,215,213,153,91,237,237,234,220,173,246,119,117,246,86,123,188,58,127,171,122,173,206,224,106,175,87,53,219,71,135,209,186,206,225,42,231,85,237,118,88,19,70,185,47,121,171,102,75,39,250,250,16,77,200,29,200,237,199,189,199,205,135,238,243,11,183,41,188,52,156,31,157,230,247,104,89,143,181,71,211,122,192,158,219,22,216,7,246,17,55,96,135,219,15,136,1,49,32,6,196,128,24,119,58,16,3,98,65,44,136,5,177,32,22,196,130,88,16,11,98,221,28,221,29,105,143,80,112,35,117,39,117,43,117,47,117,51,117,55,117,59,253,250,233,215,80,65,184,165,186,167,186,169,186,171,186,173,186,175,186,177,194,215,109,53,14,113,135,144,131,247,224,72,28,137,35,113,36,142,196,81,56,202,221,26,71,225,40,28,141,163,113,92,27,55,114,188,23,239,195,75,97,131,154,6,229,12,42,73,67,151,193,65,233,98,220,247,113,80,171,160,76,65,133,130,226,196,90,13,144,2,170,113,40,196,161,6,7,250,7,230,7,210,7,190,7,150,199,218,129,112,160,24,129,92,4,90,17,8,69,160,20,129,76,4,26,17,8,68,160,14,129,52,4,186,16,136,130,12,14,88,162,7,129,24,4,74,16,72,65,160,5,129,24,4,106,16,200,65,160,7,129,32,4,138,16,72,66,160,9,129,40,4,170,16,200,66,160,11,129,48,4,202,16,72,67,160,13,129,56,4,234,16,200,67,160,15,129,64,4,10,17,72,68,160,17,129,72,4,42,33,131,3,230,201,38,231,179,25,12,33,156,216,228,145,180,241,160,143,7,141,92,6,4,39,150,158,46,3,130,52,146,19,155,228,66,147,151,1,193,137,77,178,162,233,203,128,224,196,38,249,21,39,182,72,18,57,144,73,76,97,26,115,49,15,51,24,16,156,216,34,251,226,196,22,20,144,14,153,254,123,93,54,251,247,174,18,151,73,76,99,30,6,199,226,88,28,139,99,113,40,151,247,148,134,76,98,26,243,48,56,2,71,224,224,25,47,112,4,142,131,227,224,56,56,14,142,131,35,113,36,142,196,145,56,18,71,225,40,28,100,250,10,7,233,190,198,209,56,26,71,227,104,28,23,199,197,113,113,92,28,23,199,195,241,112,60,28,15,199,195,1,243,7,243,7,243,7,243,7,243,7,243,7,243,7,243,7,243,7,243,129,249,192,124,96,62,48,31,152,15,204,7,230,3,243,129,249,192,124,96,62,48,31,152,15,204,7,230,163,31,137,12,94,233,182,12,33,154,168,100,136,131,254,64,127,202,95,129,65,127,160,63,208,31,232,15,244,7,250,3,253,129,254,64,127,160,63,208,31,232,15,244,7,250,3,253,129,62,250,244,16,40,25,28,208,31,232,35,86,15,165,146,193,1,253,129,254,66,127,161,191,208,95,232,47,244,23,250,11,253,133,254,66,127,161,191,208,95,232,47,244,23,250,11,253,133,249,66,122,225,187,154,91,100,240,106,122,145,33,68,26,249,16,201,135,74,62,100,242,161,131,15,33,124,40,225,67,10,31,90,248,16,195,135,202,61,100,238,161,115,15,161,123,40,221,67,234,30,90,39,3,98,248,52,254,4,22,230,59,96,161,191,11,22,193,254,233,71,55,40,157,204,193,36,166,48,45,163,166,47,243,48,131,89,153,3,226,128,56,32,14,136,228,83,250,19,216,4,155,96,25,18,126,9,54,193,22,159,138,79,205,93,154,187,52,216,6,219,96,27,108,131,109,176,76,26,191,6,113,65,92,16,151,184,75,220,37,238,18,119,137,187,196,61,226,30,113,143,59,63,238,252,64,60,16,15,196,3,241,64,60,16,3,130,81,6,57,30,228,120,144,227,65,142,7,57,30,228,120,144,227,65,142,7,57,158,159,235,199,196,131,28,15,114,60,200,241,32,199,131,28,15,114,60,200,241,32,199,131,28,15,114,60,200,241,32,199,131,28,15,114,60,200,241,32,199,131,28,15,114,60,200,241,32,199,131,28,15,114,60,200,241,32,199,131,18,15,74,60,146,23,12,107,9,44,129,177,41,193,126,32,194,163,150,137,225,107,249,43,193,197,35,217,10,244,119,130,18,199,245,39,176,151,71,82,108,228,88,6,4,197,14,74,135,254,78,80,186,160,106,136,176,140,28,77,26,205,173,24,93,101,14,38,49,133,105,140,67,30,6,4,251,214,236,91,179,111,76,186,50,32,216,55,134,222,233,97,154,60,140,144,135,25,242,48,68,30,166,200,195,24,169,223,155,126,60,132,36,19,103,122,228,100,230,76,16,9,34,65,36,136,4,145,32,60,162,122,70,245,144,250,77,169,32,60,167,122,80,245,164,234,81,181,190,193,198,255,54,61,27,165,135,35,107,102,164,199,35,75,103,164,7,164,244,132,196,63,46,172,231,161,99,172,231,37,254,129,97,141,61,198,122,122,226,31,25,214,216,52,246,255,89,202,216,111,164,74,99,191,201,42,141,253,6,172,52,214,115,86,150,177,30,183,178,140,245,212,149,101,172,135,175,44,99,61,131,101,25,251,113,108,99,61,145,101,27,219,223,40,103,108,27,219,198,182,177,109,236,117,188,7,183,188,246,94,175,63,223,237,249,62,158,217,60,66,124,19,193,55,13,124,147,192,55,5,124,19,192,167,254,159,242,127,170,255,41,254,167,246,159,210,91,229,177,246,186,218,229,58,151,43,92,174,109,185,170,229,122,86,126,195,167,189,174,94,185,110,245,77,166,223,104,250,205,166,223,112,250,77,167,174,73,185,26,213,223,228,106,175,185,243,79,83,214,220,203,147,107,185,2,229,217,181,60,188,150,167,215,242,248,90,239,27,123,237,117,53,202,35,108,121,134,45,15,177,229,41,182,60,198,150,231,216,246,48,223,30,228,219,39,170,205,180,207,183,146,182,126,255,97,214,237,19,213,230,222,62,81,237,10,180,79,84,231,55,107,27,235,106,180,79,84,187,38,237,19,213,174,76,251,68,181,235,211,62,81,237,42,181,79,84,187,86,237,19,213,174,88,251,68,181,235,214,62,81,253,13,247,62,81,253,205,248,62,81,237,74,182,79,84,187,158,237,19,197,191,94,237,220,13,219,180,109,219,111,157,247,1,52,9,172,189,207,222,103,239,179,119,236,29,123,199,222,177,119,236,93,123,215,235,235,245,101,157,127,199,216,180,197,203,255,97,236,179,117,76,58,38,29,147,246,166,189,105,111,217,91,246,150,189,188,153,56,111,62,75,204,243,211,25,187,176,109,107,175,115,24,63,125,252,116,230,46,172,215,35,108,237,13,123,195,94,191,29,25,191,31,97,254,194,218,235,156,199,57,143,115,30,231,60,206,121,156,243,56,231,113,206,227,156,199,57,143,115,102,14,147,109,123,219,222,182,215,187,195,48,38,235,61,26,239,209,240,62,69,246,218,218,235,93,24,239,194,120,23,198,117,224,13,193,101,35,109,159,237,216,46,246,254,108,195,214,145,218,95,172,227,159,227,159,227,31,111,36,232,99,216,107,251,108,199,214,94,191,177,72,191,179,72,191,181,160,143,97,203,214,216,54,182,141,109,99,219,216,107,236,53,246,26,123,141,189,198,94,99,175,177,215,216,107,236,53,86,29,239,222,251,251,108,216,30,219,180,45,219,182,189,182,207,118,108,23,27,198,134,177,97,108,24,27,198,134,177,97,108,24,27,198,134,177,199,216,99,236,49,246,24,123,140,61,198,30,99,143,177,199,216,99,108,26,155,198,166,177,105,108,26,155,198,166,177,105,108,26,155,251,239,127,158,217,167,208,192,21,0,0])))