/*
目标:  天勤惠选

变量：捉包https://taokeout.jutuike.com域名 headers里xx-token

格式：export tqhx="token=xxx"  多账号换行隔开

*/

const $ = new Env("天勤惠选");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; V1824A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4343 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/1571 MicroMessenger/8.0.27.2220(0x28001B59) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android' //换成自己的UA



var _0xodU='jsjiami.com.v6',_0xodU_=['‮_0xodU'],_0x4784=[_0xodU,'bcKvwqlkwqM=','woHCt33CnEnCs1w=','w7HDtcKVQMOuwrccw7tCwo3DgMKzB8K+w6oh5qyY5pSJ5omA5Y+7R8K8d2LDlCbCrsK/UwzDh0nCqVDCrQ==','wrLDqMOvY8Oe','wp7Dq8KwwpjDtnF5','w5plDcOmwrjDicOB','wo/DsjHDscKJ','LDJJHcOew77CkQ==','w5IAZMOG','ScOqw40RIQ==','w7xfw413RQ==','cMOxbXjCmw==','5p2t5oqN5YqlGsOkw6Horovpm57orLHoh7rmn5Lor5zmmrA=','LMK8wqgyw6Q=','wqDDicOySsOQ','VUvCp8Kffg==','w5gMwr41eQ==','w6A1wrwDRw==','K8Kcw7I=','6K2w5rCz5aac6LSZ','w4ViBQ==','w6/CqTrDiTk=','w5sAwp8GQ8Kk','TmYQw5fCiw==','w5jCgMKXw7s1','acKvAsO7w5E=','woDDvCI=','5YeK5oq95Ymx','w5lrQ3LDpgdDw73Dik9uB8OMwo41CMONw5DChgLCt8K0wqgmJi7ChlzDqTHDpsK/QA==','NMKDw7kww5s=','KDRDBQ==','WMOwwr9Gw7VlBHArwrpuw5A=','wo/DiMOBUsOt','w58AwpAFUsK+wqg=','f8Khwr98','Jj5JG8OGw7o=','cU8Iw7pW','XUrDhsKow6U=','ZGAxw7Vl','w6jDswlePA==','w6nDryhP','6K+F5rCO5aeB6Lae','PsOXwqg=','wqTDm8O5UMOIdsKOw5JM','fWvCoMKj','woPDgDPDosKs','w59owp3ChgA=','ZloOw6k=','wpzDr8KxwoTDvw==','Ug4NJQ==','w4RNwoAgwrk0w4p7GRIUPw==','6LeK5Y2kHg==','w7TDqytO','w4Ntwpc=','w7TotZLlj4DovZzmnZvmiL7ljKvphIPmoZHlvqPplYborLM=','w4TCn8Khw500','YEXDhMKtw58=','fwAnRQI=','QEMzw6ZWwrYJ','JcO1BsOfwos=','V8OnbX7ChcKuIGQ=','Y8OUw5bClMKOF14=','w6Qaw7tdw4rCpsKC','6Law5Y+iw6A=','w54LwpUETw==','XC3CncOe','w4PDpCFgw5I=','TV/DucKJw7bDsA==','QULDgQ==','w4xqW2Y=','Z8O+w5DDh8OJF2Y=','wqPDnsOjQQ==','YcOVe3MJ','Skw5w5FL','w43CsMK6w6c8wpYC','w4nCusKgw6Iv','w7xoCcO9wqw=','QxUbbkTDqsOfHA==','DMOELGdDBCU=','woDDocKkwrbDtGNSwokTw4syw4M=','6LSs5Y+0Tw==','bcOyKirCkQ==','d8OzVOahneW+oemXhuisoA==','McOTwplzw4nDkMK6','wpfCt8OfLMKtw75/wrkbw4nCi8On','6LeK5Y25wpg=','w7DDuB8Mw4I=','V0Bf5qCH5byd6ZeH6Kya','woHCs0XCiUDCtEwuCcOeH8Oj','w49+w7kODcOdwrJ0w7Fnwp7Dskpg','w6zCtiXDlA==','emcXw794','wqTDjMO6acOw','JsO3BcOuwrA=','QsOxw6A=','M8K7wpErw5BjV35iwrvDjsKHwp3CrsKBwrrCmsKEwqjCsRnCkFlyWkxzwqF5LsOPVMKjwpkPQMKJw5jDnxnCoXIAw4A=','VB0eWMKnDTB8DnfCrcO/IBDDsVJyBsKPwq7Cl3bDtBIAenVZVcOVS8KbfhnDo8O6fTIew7gmwqlUw6tvwrHDlMO5wocowp0wwrA6EgIvwoBHw6zCik0sw483wojCk8K6FMKxwpTCoULCosKmw5J9w6gXYCpHFGtXdVo=','w5hDwpUAwro=','w7h+w7wfBg==','w5BSwr0Qwrw=','ZcOzGg3CpQ==','BDjCjsK6','w5fCrCbCu8Kkc1kCw4ReDcOt','6LaI5Yymwo8=','D+eMiOmEnuS9i+mguMKD','w5/CojXCmw==','w5QOZsOCw5gnHg==','dsKKBMOVw7E=','WMO+wr9gw7VqFA==','XsOkWjHDvw==','LMKcFg5W','c2vCo8KbY8OuwppXwqXDgcK4VQ==','SsOycik=','w5VoVA==','wpfotYPljIbovqbmnKjmi5rljIPphY/mo5Xlv4LplL7orJ8=','NcKWw6U1w47Cohk=','w77CtjLDmQ==','cArCqMOIw5U=','XQgPVcKmQjQ=','YsOQw6TCjA==','WcOwwrVL','TcOKczDDgA==','VMOmcS/Ch8KJJ280wroxUHQ=','RcO4R34=','w73CqSbDiSltBcOCw5vCghDDli3DusOgw5IwTsOEHcKYbxF7woLDhcO/w45uwr7DtcOJw7Apw75Fwp1eNSVAw47CuHB2wp40w63DqgDCgcKEw6NEFsO4wpvCtS1RwqInJsKGw6wRw47DnDzDpsKwDlbCrA/CrMONwqBewrTDk8OZwq/CkQZjw5g=','N8KSw6c4w4I=','dMOQw6vCkMKM','OcO7E8O/wogcXcO6MMKmwo/Djw==','6LaP5Y+6OQ==','bsOew63CkA==','eeavo+aVkuaKteWPs8Kv','Q8Otw6A=','wpDCuVjCkknCrF0=','w7l/w7MfDsOawqg8w5k=','w45mw5AdPg==','w55ZGsK2aQXDnsOhQMKBcsOxwprCjylF6Laa5Y2x5qKv5redNFjCgsOMw6RoP8OgwovCmgA4wqUUSg==','wrzCgcOCHcKN','AcOBGHx9','wpPDg8OkeMOv','acOMw6HCkcKo','w7rDvS0Iw5Y6Dg==','ZmxzenzCusK7WMKKHMOBwqY=','ZemCteeen+WMvO+8tWfim6Hvua3lvoblvbnku63lvJ4h5b2W5p+g5Zq85ZGb','wrvDisOlXsOSeQ==','U8OkUxLDpQ==','w4hsQFXDvg==','w4LCvsKzw7Q3wpMoElFlU3A=','ZUnCgsKKYQ==','wrkNZ8OpK07CmsK4','aWXCqMKzaQ==','w7TDmRICw44=','FxPCpsKrUw==','IjSPsgCjVPiMamiU.KfVcomk.vl6yfk=='];if(function(_0x45748d,_0x3bb431,_0x3ef28b){function _0x49d68(_0x4026a6,_0x286ea6,_0x4f5a81,_0x4ead8d,_0x1a81a1,_0x559de9){_0x286ea6=_0x286ea6>>0x8,_0x1a81a1='po';var _0x5db490='shift',_0x121eb0='push',_0x559de9='‮';if(_0x286ea6<_0x4026a6){while(--_0x4026a6){_0x4ead8d=_0x45748d[_0x5db490]();if(_0x286ea6===_0x4026a6&&_0x559de9==='‮'&&_0x559de9['length']===0x1){_0x286ea6=_0x4ead8d,_0x4f5a81=_0x45748d[_0x1a81a1+'p']();}else if(_0x286ea6&&_0x4f5a81['replace'](/[ISPgCVPMUKfVklyfk=]/g,'')===_0x286ea6){_0x45748d[_0x121eb0](_0x4ead8d);}}_0x45748d[_0x121eb0](_0x45748d[_0x5db490]());}return 0x116c20;};return _0x49d68(++_0x3bb431,_0x3ef28b)>>_0x3bb431^_0x3ef28b;}(_0x4784,0x173,0x17300),_0x4784){_0xodU_=_0x4784['length']^0x173;};function _0x42ee(_0x3bf4b2,_0x2b6e5e){_0x3bf4b2=~~'0x'['concat'](_0x3bf4b2['slice'](0x1));var _0x47d2c8=_0x4784[_0x3bf4b2];if(_0x42ee['tTCYPS']===undefined){(function(){var _0x441d09=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x463254='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x441d09['atob']||(_0x441d09['atob']=function(_0x109687){var _0x304c72=String(_0x109687)['replace'](/=+$/,'');for(var _0xe4ab5e=0x0,_0x99d017,_0x7f7d5,_0x17313a=0x0,_0x173854='';_0x7f7d5=_0x304c72['charAt'](_0x17313a++);~_0x7f7d5&&(_0x99d017=_0xe4ab5e%0x4?_0x99d017*0x40+_0x7f7d5:_0x7f7d5,_0xe4ab5e++%0x4)?_0x173854+=String['fromCharCode'](0xff&_0x99d017>>(-0x2*_0xe4ab5e&0x6)):0x0){_0x7f7d5=_0x463254['indexOf'](_0x7f7d5);}return _0x173854;});}());function _0x2b4930(_0x34bcfe,_0x2b6e5e){var _0x458933=[],_0x50665a=0x0,_0x5d2f3f,_0x59d5e3='',_0x11e5bc='';_0x34bcfe=atob(_0x34bcfe);for(var _0x599e0f=0x0,_0x268219=_0x34bcfe['length'];_0x599e0f<_0x268219;_0x599e0f++){_0x11e5bc+='%'+('00'+_0x34bcfe['charCodeAt'](_0x599e0f)['toString'](0x10))['slice'](-0x2);}_0x34bcfe=decodeURIComponent(_0x11e5bc);for(var _0x33c5d5=0x0;_0x33c5d5<0x100;_0x33c5d5++){_0x458933[_0x33c5d5]=_0x33c5d5;}for(_0x33c5d5=0x0;_0x33c5d5<0x100;_0x33c5d5++){_0x50665a=(_0x50665a+_0x458933[_0x33c5d5]+_0x2b6e5e['charCodeAt'](_0x33c5d5%_0x2b6e5e['length']))%0x100;_0x5d2f3f=_0x458933[_0x33c5d5];_0x458933[_0x33c5d5]=_0x458933[_0x50665a];_0x458933[_0x50665a]=_0x5d2f3f;}_0x33c5d5=0x0;_0x50665a=0x0;for(var _0x5f3d93=0x0;_0x5f3d93<_0x34bcfe['length'];_0x5f3d93++){_0x33c5d5=(_0x33c5d5+0x1)%0x100;_0x50665a=(_0x50665a+_0x458933[_0x33c5d5])%0x100;_0x5d2f3f=_0x458933[_0x33c5d5];_0x458933[_0x33c5d5]=_0x458933[_0x50665a];_0x458933[_0x50665a]=_0x5d2f3f;_0x59d5e3+=String['fromCharCode'](_0x34bcfe['charCodeAt'](_0x5f3d93)^_0x458933[(_0x458933[_0x33c5d5]+_0x458933[_0x50665a])%0x100]);}return _0x59d5e3;}_0x42ee['snjeWy']=_0x2b4930;_0x42ee['CAJnIs']={};_0x42ee['tTCYPS']=!![];}var _0x5c403=_0x42ee['CAJnIs'][_0x3bf4b2];if(_0x5c403===undefined){if(_0x42ee['RCxwdW']===undefined){_0x42ee['RCxwdW']=!![];}_0x47d2c8=_0x42ee['snjeWy'](_0x47d2c8,_0x2b6e5e);_0x42ee['CAJnIs'][_0x3bf4b2]=_0x47d2c8;}else{_0x47d2c8=_0x5c403;}return _0x47d2c8;};let httpResult,httpReq,httpResp;let userCookie=($[_0x42ee('‫0','iFMY')]()?process[_0x42ee('‫1','iFMY')][_0x42ee('‮2','AmfL')]:$[_0x42ee('‫3','ZD@6')](_0x42ee('‮4','(O0N')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;class UserInfo{constructor(_0x4a38fb){var _0x8597d2={'gktWv':_0x42ee('‫5','j%5l'),'Uekly':'xaHSm'};this['index']=++userIdx;this['name']=this[_0x42ee('‮6','lS6Y')];this['valid']=![];this[_0x42ee('‫7','Nff6')]=![];try{if(_0x8597d2[_0x42ee('‫8','Nff6')]!==_0x8597d2[_0x42ee('‮9','N1]E')]){this['param']=$[_0x42ee('‫a','*3(n')](_0x4a38fb);this['ckValid']=!![];}else{this[_0x42ee('‫b','k2]V')]=![];$[_0x42ee('‫c','8$i^')](_0x42ee('‮d','BBv&')+this[_0x42ee('‮e','mrje')]+_0x42ee('‮f',']tMj'));}}catch(_0xe58f2d){this[_0x42ee('‮10','hk0#')]=![];$[_0x42ee('‮11','f6xA')](_0x42ee('‫12','8$i^')+this[_0x42ee('‮13','AkJK')]+_0x42ee('‫14','BBv&'));}}async['myProfit'](){var _0x29c6aa={'BFXsZ':_0x42ee('‫15','oijS'),'xUkWR':_0x42ee('‮16','ABQk'),'gzlQn':function(_0x34ee8b){return _0x34ee8b();},'Pkodf':function(_0x3776c7,_0x32170c){return _0x3776c7!==_0x32170c;},'scqPV':'rrnLa','xpZqk':function(_0xc7d018,_0xfb97b1,_0x2ee3e0,_0x5eabaa){return _0xc7d018(_0xfb97b1,_0x2ee3e0,_0x5eabaa);},'PYOWB':_0x42ee('‮17','2awM'),'aoTBL':function(_0xc99666,_0x5c322d){return _0xc99666==_0x5c322d;},'tTEPQ':function(_0x71d93c,_0x1d8bad){return _0x71d93c===_0x1d8bad;},'Jrobl':_0x42ee('‮18','lS6Y'),'ZSKIl':'sUvlB'};try{if(_0x29c6aa['Pkodf'](_0x29c6aa[_0x42ee('‫19','(O0N')],_0x29c6aa[_0x42ee('‮1a','!9*@')])){console[_0x42ee('‫1b',')IFe')](e);}else{let _0xb00f27=_0x42ee('‮1c',']MMj');let _0x3f125b=_0x42ee('‫1d','*qV1');let _0x44ba41=''+this[_0x42ee('‮1e','DMov')][_0x42ee('‫1f','ABQk')];let _0x359fa1=_0x29c6aa[_0x42ee('‫20','DMov')](populateUrlObject,_0xb00f27,_0x44ba41,_0x3f125b);await httpRequest(_0x29c6aa['PYOWB'],_0x359fa1);let _0x260257=httpResult;if(!_0x260257)return;if(_0x29c6aa[_0x42ee('‫21','mrje')](_0x260257[_0x42ee('‫22','[)G8')],0x1)){$[_0x42ee('‫23','Lv68')](_0x42ee('‫24','Nff6')+this['name']+_0x42ee('‮25','hk0#')+_0x260257[_0x42ee('‫26','Lv68')][_0x42ee('‫27','$DT2')]);this[_0x42ee('‫28','CE8u')]=!![];this[_0x42ee('‫29','2xI6')]=!![];}else{if(_0x29c6aa[_0x42ee('‫2a',']tMj')](_0x42ee('‫2b','vnj]'),_0x29c6aa['Jrobl'])){$[_0x42ee('‫2c','w[@%')]('账号['+this[_0x42ee('‮2d','&[XK')]+']'+_0x260257[_0x42ee('‮2e','AmfL')]+_0x42ee('‫2f','k4Dv'));}else{let _0x5ef1bd=_0xb00f27[_0x42ee('‫30','ay$j')]('//','/')['split']('/')[0x1];let _0x293962={'url':_0xb00f27,'headers':{'Host':_0x5ef1bd,'xx-token':_0x44ba41,'User-Agent':defaultUA},'timeout':0x1388};if(_0x3f125b){_0x293962[_0x42ee('‫31','2awM')]=_0x3f125b;_0x293962['headers'][_0x29c6aa[_0x42ee('‫32','bhSB')]]='application/x-www-form-urlencoded';_0x293962[_0x42ee('‫33','*qV1')][_0x29c6aa['xUkWR']]=_0x293962[_0x42ee('‮34','Hg#t')]?_0x293962[_0x42ee('‮35','2xI6')]['length']:0x0;}return _0x293962;}}}}catch(_0x35c05b){}finally{if('sUvlB'===_0x29c6aa['ZSKIl']){return Promise['resolve'](0x1);}else{_0x29c6aa[_0x42ee('‮36',']tMj')](resolve);}}}async[_0x42ee('‫37','&[XK')](){var _0x355af2={'dYeah':function(_0x29095d,_0x361533,_0x526bc6){return _0x29095d(_0x361533,_0x526bc6);},'IazgV':_0x42ee('‮38','IC0S')};try{let _0x1b58d4='https://taokeout.jutuike.com/punch/punchTheClock';let _0x4a4117=_0x42ee('‮39','2awM');let _0xc4f01f=''+this[_0x42ee('‮3a','ay$j')][_0x42ee('‫3b','Hg#t')];let _0x1cba98=populateUrlObject(_0x1b58d4,_0xc4f01f,_0x4a4117);await _0x355af2['dYeah'](httpRequest,_0x355af2['IazgV'],_0x1cba98);let _0xbdfaea=httpResult;if(!_0xbdfaea)return;$[_0x42ee('‫3c','!9*@')](_0x42ee('‮3d','N1]E')+this[_0x42ee('‮3e','Hg#t')]+_0x42ee('‮3f','iFMY')+_0xbdfaea[_0x42ee('‮40',')IFe')]);}catch(_0x5942a3){}finally{return Promise[_0x42ee('‫41','oijS')](0x1);}}}!(async()=>{var _0x79d57d={'nnbzR':function(_0x5766ee,_0x248ce5){return _0x5766ee!==_0x248ce5;},'DloAI':_0x42ee('‫42','ABQk'),'isadJ':function(_0x594a19){return _0x594a19();},'yTLsK':function(_0x56cf51,_0x47e52e){return _0x56cf51===_0x47e52e;},'pwsKq':_0x42ee('‮43','ABQk'),'zMFPl':_0x42ee('‫44','GQ9L'),'mOikt':function(_0x265744,_0x1a3159){return _0x265744>_0x1a3159;},'COkoi':function(_0x492ec0,_0x2a07c6){return _0x492ec0!==_0x2a07c6;},'pDLtJ':'neqGT','eGdZx':function(_0x5beaa8,_0x1b81e7){return _0x5beaa8===_0x1b81e7;},'tqUqG':_0x42ee('‮45','f6xA')};if(_0x79d57d[_0x42ee('‫46','k2]V')](typeof $request,_0x79d57d[_0x42ee('‮47','(O0N')])){}else{if(!(await _0x79d57d[_0x42ee('‮48','Hg#t')](checkEnv)))return;let _0x59a252=[];let _0x2fe359=userList['filter'](_0x51a85f=>_0x51a85f[_0x42ee('‮49','AkJK')]);$[_0x42ee('‮4a','BBv&')](_0x42ee('‫4b','k2]V'));if(_0x2fe359[_0x42ee('‮4c','(O0N')]>0x0){if(_0x79d57d[_0x42ee('‮4d',']tMj')](_0x79d57d[_0x42ee('‫4e','AmfL')],_0x79d57d['pwsKq'])){$[_0x42ee('‮4f','Nff6')](_0x79d57d[_0x42ee('‫50','w[@%')]);_0x59a252=[];for(let _0x3e3ab3 of _0x2fe359){_0x59a252['push'](_0x3e3ab3[_0x42ee('‮51','GQ9L')]());}await Promise['all'](_0x59a252);_0x2fe359=_0x2fe359['filter'](_0x175c58=>_0x175c58[_0x42ee('‮52','w[@%')]);if(_0x79d57d[_0x42ee('‫53','AkJK')](_0x2fe359['length'],0x0)){if(_0x79d57d['COkoi'](_0x79d57d[_0x42ee('‮54','[)G8')],_0x79d57d['pDLtJ'])){this[_0x42ee('‮55','R!NV')]=$['str2json'](str);this[_0x42ee('‮56','oijS')]=!![];}else{$['logAndNotify'](_0x42ee('‮57','f6xA'));_0x59a252=[];for(let _0x36d40e of _0x2fe359['filter'](_0x19fb19=>_0x19fb19['canRead'])){if(_0x79d57d[_0x42ee('‫58','(O0N')](_0x79d57d['tqUqG'],_0x79d57d['tqUqG'])){_0x59a252['push'](_0x36d40e['punchTheClock']());}else{return Promise[_0x42ee('‮59','8$i^')](0x1);}}await Promise['all'](_0x59a252);}}}else{return Promise['resolve'](0x1);}}await $[_0x42ee('‫5a','N1]E')]();}})()[_0x42ee('‫5b','s*dd')](_0x337bd7=>console['log'](_0x337bd7))[_0x42ee('‮5c','D0[V')](()=>$[_0x42ee('‮5d','$DT2')]());async function checkEnv(){var _0x3272d7={'wsMiG':function(_0x71b187,_0x2d0d32){return _0x71b187===_0x2d0d32;},'wfysv':'JOcEs','wIJGH':function(_0x25abef,_0x469c9c){return _0x25abef===_0x469c9c;},'oiOTN':_0x42ee('‮5e',')IFe'),'tztJx':function(_0x31a97c,_0x2900de){return _0x31a97c>_0x2900de;},'XImVz':_0x42ee('‮5f','ky^d'),'vQCNl':_0x42ee('‮60','IC0S'),'iDjGD':_0x42ee('‮61','ay$j')};if(userCookie){if(_0x3272d7[_0x42ee('‮62',']MMj')](_0x3272d7[_0x42ee('‮63','(O0N')],_0x42ee('‫64','w[@%'))){let _0x3226cf=envSplitor[0x0];for(let _0x5e51af of envSplitor){if(_0x3272d7['wIJGH'](_0x3272d7[_0x42ee('‮65','k4Dv')],_0x42ee('‮66','k4Dv'))){console[_0x42ee('‮67','ay$j')](method+_0x42ee('‫68','OAz)'));console[_0x42ee('‮69','N1]E')](JSON['stringify'](err));}else{if(_0x3272d7['tztJx'](userCookie['indexOf'](_0x5e51af),-0x1)){_0x3226cf=_0x5e51af;break;}}}for(let _0x1f0781 of userCookie[_0x42ee('‫6a','2awM')](_0x3226cf)){if(_0x1f0781)userList['push'](new UserInfo(_0x1f0781));}userCount=userList[_0x42ee('‮6b','k4Dv')];}else{taskall['push'](user['myProfit']());}}else{if(_0x3272d7['wIJGH'](_0x3272d7[_0x42ee('‫6c','J5oU')],_0x3272d7[_0x42ee('‫6d','Nff6')])){httpResult=resp['body'];}else{console['log'](_0x3272d7[_0x42ee('‮6e','CE8u')]);return;}}console[_0x42ee('‫6f','s*dd')](_0x42ee('‮70','Lv68')+userCount+'个账号');return!![];}function populateUrlObject(_0x3e1b14,_0x3b68b2,_0x53ad13=''){var _0x37b22f={'XgJkK':_0x42ee('‫71','AmfL')};let _0x5998d1=_0x3e1b14[_0x42ee('‫30','ay$j')]('//','/')[_0x42ee('‫72','ay$j')]('/')[0x1];let _0x151b07={'url':_0x3e1b14,'headers':{'Host':_0x5998d1,'xx-token':_0x3b68b2,'User-Agent':defaultUA},'timeout':0x1388};if(_0x53ad13){_0x151b07[_0x42ee('‫73','D0[V')]=_0x53ad13;_0x151b07['headers'][_0x42ee('‮74','2xI6')]=_0x37b22f[_0x42ee('‮75','(O0N')];_0x151b07[_0x42ee('‮76','k4Dv')]['Content-Length']=_0x151b07[_0x42ee('‮77','R!NV')]?_0x151b07['body'][_0x42ee('‫78','D0[V')]:0x0;}return _0x151b07;}async function httpRequest(_0x479575,_0x2c9663){var _0x1a7099={'DrTne':_0x42ee('‫79','lS6Y'),'rKIUM':function(_0x35adc1,_0x1a2fce){return _0x35adc1!==_0x1a2fce;},'KCHxd':_0x42ee('‫7a','iFMY'),'ryOuY':_0x42ee('‮7b','lS6Y')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x3aef30=>{var _0x33230a={'oSvpM':function(_0x45778e,_0xd91ad0){return _0x45778e===_0xd91ad0;},'jhedZ':'qvmhs','dbPTk':_0x1a7099['DrTne'],'FRxOs':function(_0x207c6d,_0x31a2f9){return _0x1a7099['rKIUM'](_0x207c6d,_0x31a2f9);},'QPqSW':_0x1a7099['KCHxd'],'AROHX':_0x1a7099[_0x42ee('‫7c','AUUd')],'jNuhm':function(_0x3f4246){return _0x3f4246();}};$[_0x42ee('‫7d','AUUd')](_0x479575,_0x2c9663,async(_0x46598e,_0x24fbbe,_0x429503)=>{var _0x30ad18={'DisKM':'2|3|4|0|1'};try{httpReq=_0x24fbbe;httpResp=_0x429503;if(_0x46598e){console[_0x42ee('‮67','ay$j')](_0x479575+_0x42ee('‮7e','bhSB'));console[_0x42ee('‫7f','hk0#')](JSON[_0x42ee('‫80','(O0N')](_0x46598e));}else{if(_0x429503['body']){if(typeof _0x429503[_0x42ee('‫81','w[@%')]=='object'){if(_0x33230a[_0x42ee('‮82','s*dd')](_0x42ee('‮83','U[z$'),_0x33230a['jhedZ'])){httpResult=_0x429503['body'];}else{taskall[_0x42ee('‮84','J5oU')](user['punchTheClock']());}}else{if('Vokpk'!==_0x33230a['dbPTk']){try{httpResult=JSON[_0x42ee('‫85','8$i^')](_0x429503[_0x42ee('‮86','*3(n')]);}catch(_0x349e6b){httpResult=_0x429503[_0x42ee('‮77','R!NV')];}}else{$[_0x42ee('‮87','DMov')](_0x42ee('‫88','s*dd')+this[_0x42ee('‫89','AUUd')]+']'+result[_0x42ee('‮8a','U[z$')]+_0x42ee('‫8b','GQ9L'));}}}}}catch(_0x323734){console['log'](_0x323734);}finally{if(_0x33230a['FRxOs'](_0x33230a['QPqSW'],_0x33230a['AROHX'])){_0x33230a[_0x42ee('‮8c','Nff6')](_0x3aef30);}else{var _0x406c56=_0x30ad18[_0x42ee('‫8d','iFMY')][_0x42ee('‮8e','vUL%')]('|'),_0x5380e2=0x0;while(!![]){switch(_0x406c56[_0x5380e2++]){case'0':this[_0x42ee('‫8f','lS6Y')]=![];continue;case'1':try{this[_0x42ee('‮90','!9*@')]=$[_0x42ee('‮91','&[XK')](str);this[_0x42ee('‫92','Hg#t')]=!![];}catch(_0x206f5b){this[_0x42ee('‮93','OAz)')]=![];$['logAndNotify'](_0x42ee('‫94','ky^d')+this[_0x42ee('‮95','k4Dv')]+']CK格式错误');}continue;case'2':this['index']=++userIdx;continue;case'3':this[_0x42ee('‮96','bhSB')]=this['index'];continue;case'4':this[_0x42ee('‫97','B3EC')]=![];continue;}break;}}}});});};_0xodU='jsjiami.com.v6';

////////////////////////////////////////////////////////////////////
function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}

function local_hours() {
    let myDate = new Date();
    h = myDate.getHours();
    return h;
}
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
    return Y+M+D;
}

function getNowFormatDate() {
        var date = new Date();
        var separator = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + separator + month + separator + strDate;
        return currentdate;
    }
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：\n`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}