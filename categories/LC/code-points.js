module.exports=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,170,181,186,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,444,445,446,447,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,880,881,882,883,886,887,891,892,893,902,904,905,906,908,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,4256,4257,4258,4259,4260,4261,4262,4263,4264,4265,4266,4267,4268,4269,4270,4271,4272,4273,4274,4275,4276,4277,4278,4279,4280,4281,4282,4283,4284,4285,4286,4287,4288,4289,4290,4291,4292,4293,7424,7425,7426,7427,7428,7429,7430,7431,7432,7433,7434,7435,7436,7437,7438,7439,7440,7441,7442,7443,7444,7445,7446,7447,7448,7449,7450,7451,7452,7453,7454,7455,7456,7457,7458,7459,7460,7461,7462,7463,7464,7465,7466,7467,7522,7523,7524,7525,7526,7527,7528,7529,7530,7531,7532,7533,7534,7535,7536,7537,7538,7539,7540,7541,7542,7543,7545,7546,7547,7548,7549,7550,7551,7552,7553,7554,7555,7556,7557,7558,7559,7560,7561,7562,7563,7564,7565,7566,7567,7568,7569,7570,7571,7572,7573,7574,7575,7576,7577,7578,7680,7681,7682,7683,7684,7685,7686,7687,7688,7689,7690,7691,7692,7693,7694,7695,7696,7697,7698,7699,7700,7701,7702,7703,7704,7705,7706,7707,7708,7709,7710,7711,7712,7713,7714,7715,7716,7717,7718,7719,7720,7721,7722,7723,7724,7725,7726,7727,7728,7729,7730,7731,7732,7733,7734,7735,7736,7737,7738,7739,7740,7741,7742,7743,7744,7745,7746,7747,7748,7749,7750,7751,7752,7753,7754,7755,7756,7757,7758,7759,7760,7761,7762,7763,7764,7765,7766,7767,7768,7769,7770,7771,7772,7773,7774,7775,7776,7777,7778,7779,7780,7781,7782,7783,7784,7785,7786,7787,7788,7789,7790,7791,7792,7793,7794,7795,7796,7797,7798,7799,7800,7801,7802,7803,7804,7805,7806,7807,7808,7809,7810,7811,7812,7813,7814,7815,7816,7817,7818,7819,7820,7821,7822,7823,7824,7825,7826,7827,7828,7829,7830,7831,7832,7833,7834,7835,7836,7837,7838,7839,7840,7841,7842,7843,7844,7845,7846,7847,7848,7849,7850,7851,7852,7853,7854,7855,7856,7857,7858,7859,7860,7861,7862,7863,7864,7865,7866,7867,7868,7869,7870,7871,7872,7873,7874,7875,7876,7877,7878,7879,7880,7881,7882,7883,7884,7885,7886,7887,7888,7889,7890,7891,7892,7893,7894,7895,7896,7897,7898,7899,7900,7901,7902,7903,7904,7905,7906,7907,7908,7909,7910,7911,7912,7913,7914,7915,7916,7917,7918,7919,7920,7921,7922,7923,7924,7925,7926,7927,7928,7929,7930,7931,7932,7933,7934,7935,7936,7937,7938,7939,7940,7941,7942,7943,7944,7945,7946,7947,7948,7949,7950,7951,7952,7953,7954,7955,7956,7957,7960,7961,7962,7963,7964,7965,7968,7969,7970,7971,7972,7973,7974,7975,7976,7977,7978,7979,7980,7981,7982,7983,7984,7985,7986,7987,7988,7989,7990,7991,7992,7993,7994,7995,7996,7997,7998,7999,8000,8001,8002,8003,8004,8005,8008,8009,8010,8011,8012,8013,8016,8017,8018,8019,8020,8021,8022,8023,8025,8027,8029,8031,8032,8033,8034,8035,8036,8037,8038,8039,8040,8041,8042,8043,8044,8045,8046,8047,8048,8049,8050,8051,8052,8053,8054,8055,8056,8057,8058,8059,8060,8061,8064,8065,8066,8067,8068,8069,8070,8071,8072,8073,8074,8075,8076,8077,8078,8079,8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8091,8092,8093,8094,8095,8096,8097,8098,8099,8100,8101,8102,8103,8104,8105,8106,8107,8108,8109,8110,8111,8112,8113,8114,8115,8116,8118,8119,8120,8121,8122,8123,8124,8126,8130,8131,8132,8134,8135,8136,8137,8138,8139,8140,8144,8145,8146,8147,8150,8151,8152,8153,8154,8155,8160,8161,8162,8163,8164,8165,8166,8167,8168,8169,8170,8171,8172,8178,8179,8180,8182,8183,8184,8185,8186,8187,8188,8450,8455,8458,8459,8460,8461,8462,8463,8464,8465,8466,8467,8469,8473,8474,8475,8476,8477,8484,8486,8488,8490,8491,8492,8493,8495,8496,8497,8498,8499,8500,8505,8508,8509,8510,8511,8517,8518,8519,8520,8521,8526,8579,8580,11264,11265,11266,11267,11268,11269,11270,11271,11272,11273,11274,11275,11276,11277,11278,11279,11280,11281,11282,11283,11284,11285,11286,11287,11288,11289,11290,11291,11292,11293,11294,11295,11296,11297,11298,11299,11300,11301,11302,11303,11304,11305,11306,11307,11308,11309,11310,11312,11313,11314,11315,11316,11317,11318,11319,11320,11321,11322,11323,11324,11325,11326,11327,11328,11329,11330,11331,11332,11333,11334,11335,11336,11337,11338,11339,11340,11341,11342,11343,11344,11345,11346,11347,11348,11349,11350,11351,11352,11353,11354,11355,11356,11357,11358,11360,11361,11362,11363,11364,11365,11366,11367,11368,11369,11370,11371,11372,11373,11374,11375,11376,11377,11378,11379,11380,11381,11382,11383,11384,11385,11386,11387,11388,11390,11391,11392,11393,11394,11395,11396,11397,11398,11399,11400,11401,11402,11403,11404,11405,11406,11407,11408,11409,11410,11411,11412,11413,11414,11415,11416,11417,11418,11419,11420,11421,11422,11423,11424,11425,11426,11427,11428,11429,11430,11431,11432,11433,11434,11435,11436,11437,11438,11439,11440,11441,11442,11443,11444,11445,11446,11447,11448,11449,11450,11451,11452,11453,11454,11455,11456,11457,11458,11459,11460,11461,11462,11463,11464,11465,11466,11467,11468,11469,11470,11471,11472,11473,11474,11475,11476,11477,11478,11479,11480,11481,11482,11483,11484,11485,11486,11487,11488,11489,11490,11491,11492,11499,11500,11501,11502,11520,11521,11522,11523,11524,11525,11526,11527,11528,11529,11530,11531,11532,11533,11534,11535,11536,11537,11538,11539,11540,11541,11542,11543,11544,11545,11546,11547,11548,11549,11550,11551,11552,11553,11554,11555,11556,11557,42560,42561,42562,42563,42564,42565,42566,42567,42568,42569,42570,42571,42572,42573,42574,42575,42576,42577,42578,42579,42580,42581,42582,42583,42584,42585,42586,42587,42588,42589,42590,42591,42594,42595,42596,42597,42598,42599,42600,42601,42602,42603,42604,42605,42624,42625,42626,42627,42628,42629,42630,42631,42632,42633,42634,42635,42636,42637,42638,42639,42640,42641,42642,42643,42644,42645,42646,42647,42786,42787,42788,42789,42790,42791,42792,42793,42794,42795,42796,42797,42798,42799,42800,42801,42802,42803,42804,42805,42806,42807,42808,42809,42810,42811,42812,42813,42814,42815,42816,42817,42818,42819,42820,42821,42822,42823,42824,42825,42826,42827,42828,42829,42830,42831,42832,42833,42834,42835,42836,42837,42838,42839,42840,42841,42842,42843,42844,42845,42846,42847,42848,42849,42850,42851,42852,42853,42854,42855,42856,42857,42858,42859,42860,42861,42862,42863,42865,42866,42867,42868,42869,42870,42871,42872,42873,42874,42875,42876,42877,42878,42879,42880,42881,42882,42883,42884,42885,42886,42887,42891,42892,64256,64257,64258,64259,64260,64261,64262,64275,64276,64277,64278,64279,65313,65314,65315,65316,65317,65318,65319,65320,65321,65322,65323,65324,65325,65326,65327,65328,65329,65330,65331,65332,65333,65334,65335,65336,65337,65338,65345,65346,65347,65348,65349,65350,65351,65352,65353,65354,65355,65356,65357,65358,65359,65360,65361,65362,65363,65364,65365,65366,65367,65368,65369,65370,66560,66561,66562,66563,66564,66565,66566,66567,66568,66569,66570,66571,66572,66573,66574,66575,66576,66577,66578,66579,66580,66581,66582,66583,66584,66585,66586,66587,66588,66589,66590,66591,66592,66593,66594,66595,66596,66597,66598,66599,66600,66601,66602,66603,66604,66605,66606,66607,66608,66609,66610,66611,66612,66613,66614,66615,66616,66617,66618,66619,66620,66621,66622,66623,66624,66625,66626,66627,66628,66629,66630,66631,66632,66633,66634,66635,66636,66637,66638,66639,119808,119809,119810,119811,119812,119813,119814,119815,119816,119817,119818,119819,119820,119821,119822,119823,119824,119825,119826,119827,119828,119829,119830,119831,119832,119833,119834,119835,119836,119837,119838,119839,119840,119841,119842,119843,119844,119845,119846,119847,119848,119849,119850,119851,119852,119853,119854,119855,119856,119857,119858,119859,119860,119861,119862,119863,119864,119865,119866,119867,119868,119869,119870,119871,119872,119873,119874,119875,119876,119877,119878,119879,119880,119881,119882,119883,119884,119885,119886,119887,119888,119889,119890,119891,119892,119894,119895,119896,119897,119898,119899,119900,119901,119902,119903,119904,119905,119906,119907,119908,119909,119910,119911,119912,119913,119914,119915,119916,119917,119918,119919,119920,119921,119922,119923,119924,119925,119926,119927,119928,119929,119930,119931,119932,119933,119934,119935,119936,119937,119938,119939,119940,119941,119942,119943,119944,119945,119946,119947,119948,119949,119950,119951,119952,119953,119954,119955,119956,119957,119958,119959,119960,119961,119962,119963,119964,119966,119967,119970,119973,119974,119977,119978,119979,119980,119982,119983,119984,119985,119986,119987,119988,119989,119990,119991,119992,119993,119995,119997,119998,119999,120000,120001,120002,120003,120005,120006,120007,120008,120009,120010,120011,120012,120013,120014,120015,120016,120017,120018,120019,120020,120021,120022,120023,120024,120025,120026,120027,120028,120029,120030,120031,120032,120033,120034,120035,120036,120037,120038,120039,120040,120041,120042,120043,120044,120045,120046,120047,120048,120049,120050,120051,120052,120053,120054,120055,120056,120057,120058,120059,120060,120061,120062,120063,120064,120065,120066,120067,120068,120069,120071,120072,120073,120074,120077,120078,120079,120080,120081,120082,120083,120084,120086,120087,120088,120089,120090,120091,120092,120094,120095,120096,120097,120098,120099,120100,120101,120102,120103,120104,120105,120106,120107,120108,120109,120110,120111,120112,120113,120114,120115,120116,120117,120118,120119,120120,120121,120123,120124,120125,120126,120128,120129,120130,120131,120132,120134,120138,120139,120140,120141,120142,120143,120144,120146,120147,120148,120149,120150,120151,120152,120153,120154,120155,120156,120157,120158,120159,120160,120161,120162,120163,120164,120165,120166,120167,120168,120169,120170,120171,120172,120173,120174,120175,120176,120177,120178,120179,120180,120181,120182,120183,120184,120185,120186,120187,120188,120189,120190,120191,120192,120193,120194,120195,120196,120197,120198,120199,120200,120201,120202,120203,120204,120205,120206,120207,120208,120209,120210,120211,120212,120213,120214,120215,120216,120217,120218,120219,120220,120221,120222,120223,120224,120225,120226,120227,120228,120229,120230,120231,120232,120233,120234,120235,120236,120237,120238,120239,120240,120241,120242,120243,120244,120245,120246,120247,120248,120249,120250,120251,120252,120253,120254,120255,120256,120257,120258,120259,120260,120261,120262,120263,120264,120265,120266,120267,120268,120269,120270,120271,120272,120273,120274,120275,120276,120277,120278,120279,120280,120281,120282,120283,120284,120285,120286,120287,120288,120289,120290,120291,120292,120293,120294,120295,120296,120297,120298,120299,120300,120301,120302,120303,120304,120305,120306,120307,120308,120309,120310,120311,120312,120313,120314,120315,120316,120317,120318,120319,120320,120321,120322,120323,120324,120325,120326,120327,120328,120329,120330,120331,120332,120333,120334,120335,120336,120337,120338,120339,120340,120341,120342,120343,120344,120345,120346,120347,120348,120349,120350,120351,120352,120353,120354,120355,120356,120357,120358,120359,120360,120361,120362,120363,120364,120365,120366,120367,120368,120369,120370,120371,120372,120373,120374,120375,120376,120377,120378,120379,120380,120381,120382,120383,120384,120385,120386,120387,120388,120389,120390,120391,120392,120393,120394,120395,120396,120397,120398,120399,120400,120401,120402,120403,120404,120405,120406,120407,120408,120409,120410,120411,120412,120413,120414,120415,120416,120417,120418,120419,120420,120421,120422,120423,120424,120425,120426,120427,120428,120429,120430,120431,120432,120433,120434,120435,120436,120437,120438,120439,120440,120441,120442,120443,120444,120445,120446,120447,120448,120449,120450,120451,120452,120453,120454,120455,120456,120457,120458,120459,120460,120461,120462,120463,120464,120465,120466,120467,120468,120469,120470,120471,120472,120473,120474,120475,120476,120477,120478,120479,120480,120481,120482,120483,120484,120485,120488,120489,120490,120491,120492,120493,120494,120495,120496,120497,120498,120499,120500,120501,120502,120503,120504,120505,120506,120507,120508,120509,120510,120511,120512,120514,120515,120516,120517,120518,120519,120520,120521,120522,120523,120524,120525,120526,120527,120528,120529,120530,120531,120532,120533,120534,120535,120536,120537,120538,120540,120541,120542,120543,120544,120545,120546,120547,120548,120549,120550,120551,120552,120553,120554,120555,120556,120557,120558,120559,120560,120561,120562,120563,120564,120565,120566,120567,120568,120569,120570,120572,120573,120574,120575,120576,120577,120578,120579,120580,120581,120582,120583,120584,120585,120586,120587,120588,120589,120590,120591,120592,120593,120594,120595,120596,120598,120599,120600,120601,120602,120603,120604,120605,120606,120607,120608,120609,120610,120611,120612,120613,120614,120615,120616,120617,120618,120619,120620,120621,120622,120623,120624,120625,120626,120627,120628,120630,120631,120632,120633,120634,120635,120636,120637,120638,120639,120640,120641,120642,120643,120644,120645,120646,120647,120648,120649,120650,120651,120652,120653,120654,120656,120657,120658,120659,120660,120661,120662,120663,120664,120665,120666,120667,120668,120669,120670,120671,120672,120673,120674,120675,120676,120677,120678,120679,120680,120681,120682,120683,120684,120685,120686,120688,120689,120690,120691,120692,120693,120694,120695,120696,120697,120698,120699,120700,120701,120702,120703,120704,120705,120706,120707,120708,120709,120710,120711,120712,120714,120715,120716,120717,120718,120719,120720,120721,120722,120723,120724,120725,120726,120727,120728,120729,120730,120731,120732,120733,120734,120735,120736,120737,120738,120739,120740,120741,120742,120743,120744,120746,120747,120748,120749,120750,120751,120752,120753,120754,120755,120756,120757,120758,120759,120760,120761,120762,120763,120764,120765,120766,120767,120768,120769,120770,120772,120773,120774,120775,120776,120777,120778,120779]