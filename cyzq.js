/*
微信小程序: 成语闯关赚钱版

变量：捉包https://idiom.ijiaweb.com域名headars里的authorization 多账号换行隔开
格式：export cycg="authorization=Bearer xxxxxx@Bearer xxxxxx"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("词语闯关赚钱版");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x18001729) NetType/WIFI Language/zh_CN' //换成自己的UA


var _0xodC='jsjiami.com.v6',_0xodC_=['‮_0xodC'],_0x5163=[_0xodC,'w67DmsKmEwISwrA=','O2lN','NmpG','QeacluaKruWJpcOZF8Kz6K2F6Zm46K6u6IW45p6l6K2/5pqq','ZcO/VMO/','wowDwofDg8Ku','I3VaemxcHmo/wqE0Pw/Du0bDh8KPwrcWRMKLS0HClGbDlMKbP0cTbC7DtmTCg8OTXl0IT8KgTzY0SsOvw459ZWHDpMKeezHCj1zDvsKmdMOm','YcKxw6h8wqrDpQ==','w7hIwqfDpsKF','woIewrLDp8K1','JcO4w5jCiw==','Ozpd','UsOuwpE=','w5AXDTfDhw==','w5pkwoTDj8KuwqkFKToJV8OZ','5Y6I5a2T6amS6K6p5om15Yu9F+afhuaUpOaeiOiEqg==','IShTNw==','DybDkjbCuw==','fQTCi8Op','ecO3aMK8wpE=','w6V2wrxbFMKdXnrDtwcmCg==','wq0fw5g=','wrfCisK9','GcO9w4TChsKH','w4Ixw4EHw6s=','wo/Cp8KAW8On','wrrorLHliZvlpYblpYnkv5rnla7ColfphaToobDnj5nlopTpgJvmioPorIvogJLnsYbkvZHogYvopazpmqU=','dCBoccOOLmc=','wqTCsVzDiMKg','EcOGw4rDoAk=','d+adqOaLsOWJu8KGJV3orI3pmb7orJDohr3mn4vorKPmmoA=','dQ3CpsO/wpI=','PQNTEmg=','a8KJYsOePg==','T8KVYsOgJw==','F2llwozDvHHCtg==','DsOXw7U=','NOitpeWLo+Wlm+WljeS9reeWucOcwqTphL/oo4bnjaHlooTpgqLmioforL3og4bns57kva/og7ropZXpmLU=','w6nCtsOINTk=','JjxJKw==','KBEwVyrDqw==','K8Krw7o=','wpDCicKcbcOf','5LqS6Lar5Y+n','w4wFwpHDoMOq','PHYlGBsWdHMuMsKPb0LDu8O2wrsoPSxfI8OCwrnCsy40w6zDmsOrcQ7DoMOO','V8O9cjUsfMOlwp7CmsKXbcKpc8Oq','w5PDjHBOwr7DjRk=','IMKOwo7CqMKh','EBDDgy7Crw==','woPCvmjDksKjB20=','JcKrw7ls','V8O9cjUsfMOlwp7CgsKLc8Kr','w6F8wrp+H8KLYw==','w70ZwrnDlA==','UBnCmsOOwpU=','w5wQwp7DhcO8','VSnCisOAwpk=','OCpNAX8=','D8Orw4XDn0c=','w5HDoWNAwrw=','VcO8VMKgwrQ=','PAvDowfCjA==','L0vCiHcb','6K6J5rGF5aSw6LeM','wqMEwpM=','w6nCssOWNSPDgi/Cq1w=','w5XDuFTDsw4=','E2jClzTDnA==','WsONwpltTzc3FhU=','w7ppwrdzDg==','PydeJl0=','FsKJeMOH','M2tFwpLCtQ==','bgrCncOtwrA=','B8OhwoxNwpHCpsOu','NFnCtcK0bcOGUmbCg3jDvcKj','6Lae5Yy5w5Q=','IlLCtDDDog==','BXXCmeajieW8jOmWu+ivsw==','NShUEUBCw74=','NCZeOg==','PMOHw5FJOQ==','YMOhwq/CgcKO','WMKPU8OS','w7jCqcOAJQ==','C8OowrBJwp7Cuw==','w4Mew4Iew7Q=','K8OXw5vDtwI=','wqIDw5tB','6K+j5rOQ5aSt6LWk','aip8','wrMYw41Rw5oDdMKZYw==','IcOww4fCncKM','OlnCtsKM','w4UISHFd','FsKHw5Bwwrc=','DEUYEQs=','HkwiLQo=','bMOETMK/wrA=','w7PmjqfnjLRV','woDDpsKQBwEH','cMO+UQ==','b8Kuw459','e8OASsKowrQuwrQ=','w7AHUk4=','fMOjacOkKMKc','wqUCw4k=','wpU+wpjDiMKc','dVvCumNk','w70RVUw1wrc7w5FnDcKCwo9cwroT','w6sewrjDgw==','EcKGccOHVg==','wqAYwp/DhMKB','VMOmwpPClsKx','VGgow7XCncO+O3o=','Pm0DFR4ccQ==','eMO3VsKLwp4=','wqnCiGvDisKJ','cgTCiMONwrN+wo7DuycKFR0=','6LSg5Y6yQA==','OChXJg==','w5TCocOowofDnMK8QMO1JsKtPik=','6LWl5YyWwoI=','w4cZw6AKw4E=','PsOww4nmoo/lvZ7plL7oraM=','O8KHe8OWSw7CscOSwq17w4PCnUTCqg==','O2Bcazs=','JsKxw6l9wqHCqsK/w5XCuMOfwp9wKw==','wo7DoMKLBDE=','esKUw4dZw4M=','6Lew5Y6Owqg=','YsK2w4B/','AOmHl+W5lF8=','f8OKV8Ki','wrLCtHXDicKqH3zCisKywpEpHcKMLQ==','ZMO9bzU=','BWzCol0g','wpDCrm/DlcKgA2HDncKfwoAuFcKW','dMOqC8KVw5w=','aj9tw4opKcKQ','ZMOeacOqHQ==','P8KEY8ODfw==','w6cqYEZ1','w4cRBDc=','NmpGwrbCo8OcHsKtwojDuMKsJw==','aCR2ew==','JeaKi+mZseS/seWKteaJsOWJmg==','NMKAwrDCjw==','w4ISw7IKw5XClcKjwqU=','D0vCk1g/','VsOiwpLCmMKwZ8KE','QsOZZRAk','FSZUN0BNw67CtUEpw4pLS2U=','wqYWwoDDmQ==','wpXCucKSwoDDsg==','Dn3Cq8Kkbg==','UMO1BcK/w6AIwr7DpcKcwoMiwqs=','6LWe5YyfTg==','e8OxSsOu','woTDsMKtGwQFUg==','w55/wpfDvsKzw7dkaScEWMOPOjNqcMKSIMOVw7l1w6bCpRXCoMKCUsOeFMKDSMOiYcKIwqpYJMK8w7sLwppQ','KFfCoMKUbg==','dcOnaCkmYMO4w4nCt8KGasKhaQ==','X17CnHF/','MmzCtjrDmA==','6LSC5Y2wwro=','w5hqwo7Dqw==','wofDvMK9AwsDWsKq','Q+eMlOaemw==','WMO7FsKf','wpLCtHLDkw==','6YaH5bmIGuePs+acrOS9sOWIgQ==','w77Cp8OQPQ==','BWLCp1k/','V3MtwqLChQ==','wqQNw4tZ','Dmh2wozDtg==','XV/Ct25t','JiZNJlc=','UjFZw54b','ID9DM3A=','wrwfwpXDlGlmw6M9w6PDrA==','wofCunfDlMKr','w6p4wrVIH8KYdA==','OWchFQ==','FmLCuVI=','ecOdXcKkwrQ0wrII','wrjCisK+TQ==','wp/CunbDmA==','cD9/w4EgLcKG','bAtgw4k8','aTZ1RsO4','w4xBwrZ0Dw==','w6ZCwqrDhcKj','wqjCj8KPwrrDrA==','KcOgw4fCi8K5','AsOFw5xhD3EsRU5DwpglwqbDlsKiOsOweW7CryBRwrNjVWcDO8OOACFXwozCpsOMw7zCilQXwqfDk8Krfw==','KmRTwpbCoA==','w4o0w7A8w6A=','HWhlwow=','YcKyw55pw6rDpGM=','w7rDmsKhNQ==','S8OzFsKWw6oewpHDvcKJwoY=','6LWY5Y+wWg==','JlnCoybDuzvDtg==','w7l4wqlpHw==','VHPCtX8=','XMOzXwAi','ClRPwp3DtQ==','DyfDvSTCqRgY','ZcOlVMOj','JMKEwq3CrsKzw5PDsw==','NMKIwq3Ck8Kkw4TDoMOqw64W','G8O+w5zCqsKe','SH0vwrbCoA==','DsOcw6zDligawr/DjA==','w68Zwq7DmQ==','JVfChCTDuA==','wpfCrcK2wqTDqQ==','LMKjW8OKQg==','FMKHcg==','w7cCwqnDncONw6jDkk0RNcKBbjQQw75jw4Z3IcKSwr3CiMO7w6DCnlo1wqfDugFGOhNsV8OPHA8xw6bCgsKsw6XDt8OU','w4M3e3N0','E8OSw7DDkjw=','wq4ewoDDjnJYw68xw6fDtHM/woA=','w4gdwpPDl8Oa','wqbCtWrDvMKF','w5crOCrCjA==','w5vDonTDgQ==','w43DhmdjwrHDijLDmzcBMsKX','eeaNl+eNkcON','W3nConV8R8Or','w6UsKAXCjA==','AMOLw7bDnQ==','MSvDnB/Cpw==','fyfCh8OlwrU=','R8OswrfClsKweMKF','6La15Y6Jag==','azRow4s0','6Lar5Y2MwpM=','esOzcSQ=','GMOUw5t+ED1m','wqPDusK6IxE=','J8KmwrvCrcKa','JAvDrSfCkw==','AATDiAvCpw==','UjnCn8OOwp8=','6La55Y6BwoY=','w6XmjJ7njL/DvMKS8YmOh+aDt+WXjuS+pOWOr+m6geS6iw==','KMOiw4TDiU8=','wqfClcKQwofDmCA=','wrjCjsKMScOxc0g=','C8ODwr1Cwq8=','SMOowobCtsKydcKvw43ChsOnEAc=','MAjDiAzCkw==','w4gFw5Yrw78=','MG4yABo=','PkJDwqHClw==','V2kpwq8=','EmjCpGk+eGc=','6LaQ5Y+8wrg=','DcOFw7/DnQ==','w4fphJfluqV3','w5zDrGTDhQ==','FGHCvA==','N8O4w5nCmsKMw6g=','w5IfDDvCkg==','MCBWN0BR','jsIjEMMiamWiS.corbZm.fVHdryERv6=='];if(function(_0x758a59,_0x4ceb1c,_0x1c65da){function _0x41f58d(_0x55b459,_0x380a6e,_0x4c389d,_0x2c9267,_0x1e2c16,_0x34a13b){_0x380a6e=_0x380a6e>>0x8,_0x1e2c16='po';var _0x503a96='shift',_0x163800='push',_0x34a13b='‮';if(_0x380a6e<_0x55b459){while(--_0x55b459){_0x2c9267=_0x758a59[_0x503a96]();if(_0x380a6e===_0x55b459&&_0x34a13b==='‮'&&_0x34a13b['length']===0x1){_0x380a6e=_0x2c9267,_0x4c389d=_0x758a59[_0x1e2c16+'p']();}else if(_0x380a6e&&_0x4c389d['replace'](/[IEMMWSrbZfVHdryER=]/g,'')===_0x380a6e){_0x758a59[_0x163800](_0x2c9267);}}_0x758a59[_0x163800](_0x758a59[_0x503a96]());}return 0x111c1e;};return _0x41f58d(++_0x4ceb1c,_0x1c65da)>>_0x4ceb1c^_0x1c65da;}(_0x5163,0x172,0x17200),_0x5163){_0xodC_=_0x5163['length']^0x172;};function _0x46b9(_0x196e3f,_0x279bf8){_0x196e3f=~~'0x'['concat'](_0x196e3f['slice'](0x1));var _0x24083f=_0x5163[_0x196e3f];if(_0x46b9['zNyEoJ']===undefined){(function(){var _0x21dcaa=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x48f01f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x21dcaa['atob']||(_0x21dcaa['atob']=function(_0xd10c2d){var _0x3da953=String(_0xd10c2d)['replace'](/=+$/,'');for(var _0x28e72f=0x0,_0x2edfc5,_0x2a7d16,_0x5af257=0x0,_0x57b2c3='';_0x2a7d16=_0x3da953['charAt'](_0x5af257++);~_0x2a7d16&&(_0x2edfc5=_0x28e72f%0x4?_0x2edfc5*0x40+_0x2a7d16:_0x2a7d16,_0x28e72f++%0x4)?_0x57b2c3+=String['fromCharCode'](0xff&_0x2edfc5>>(-0x2*_0x28e72f&0x6)):0x0){_0x2a7d16=_0x48f01f['indexOf'](_0x2a7d16);}return _0x57b2c3;});}());function _0x22eb91(_0x1dbea1,_0x279bf8){var _0x21e140=[],_0xbd30b7=0x0,_0xa45937,_0x25f345='',_0x1dd614='';_0x1dbea1=atob(_0x1dbea1);for(var _0xa68587=0x0,_0x2209b3=_0x1dbea1['length'];_0xa68587<_0x2209b3;_0xa68587++){_0x1dd614+='%'+('00'+_0x1dbea1['charCodeAt'](_0xa68587)['toString'](0x10))['slice'](-0x2);}_0x1dbea1=decodeURIComponent(_0x1dd614);for(var _0x45c3c1=0x0;_0x45c3c1<0x100;_0x45c3c1++){_0x21e140[_0x45c3c1]=_0x45c3c1;}for(_0x45c3c1=0x0;_0x45c3c1<0x100;_0x45c3c1++){_0xbd30b7=(_0xbd30b7+_0x21e140[_0x45c3c1]+_0x279bf8['charCodeAt'](_0x45c3c1%_0x279bf8['length']))%0x100;_0xa45937=_0x21e140[_0x45c3c1];_0x21e140[_0x45c3c1]=_0x21e140[_0xbd30b7];_0x21e140[_0xbd30b7]=_0xa45937;}_0x45c3c1=0x0;_0xbd30b7=0x0;for(var _0x22bfae=0x0;_0x22bfae<_0x1dbea1['length'];_0x22bfae++){_0x45c3c1=(_0x45c3c1+0x1)%0x100;_0xbd30b7=(_0xbd30b7+_0x21e140[_0x45c3c1])%0x100;_0xa45937=_0x21e140[_0x45c3c1];_0x21e140[_0x45c3c1]=_0x21e140[_0xbd30b7];_0x21e140[_0xbd30b7]=_0xa45937;_0x25f345+=String['fromCharCode'](_0x1dbea1['charCodeAt'](_0x22bfae)^_0x21e140[(_0x21e140[_0x45c3c1]+_0x21e140[_0xbd30b7])%0x100]);}return _0x25f345;}_0x46b9['aWzKhM']=_0x22eb91;_0x46b9['LkoXzX']={};_0x46b9['zNyEoJ']=!![];}var _0xd2c769=_0x46b9['LkoXzX'][_0x196e3f];if(_0xd2c769===undefined){if(_0x46b9['RscnxO']===undefined){_0x46b9['RscnxO']=!![];}_0x24083f=_0x46b9['aWzKhM'](_0x24083f,_0x279bf8);_0x46b9['LkoXzX'][_0x196e3f]=_0x24083f;}else{_0x24083f=_0xd2c769;}return _0x24083f;};let httpResult,httpReq,httpResp;let userCookie=($[_0x46b9('‫0','NqnX')]()?process[_0x46b9('‮1','zGCh')][_0x46b9('‫2','WXuq')]:$[_0x46b9('‮3','xJe7')](_0x46b9('‮4','2!*y')))||'';let userCGkey=($[_0x46b9('‮5','zGCh')]()?process[_0x46b9('‮6','SHsg')][_0x46b9('‮7','e3bT')]:$['getdata'](_0x46b9('‮8',']kr*')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x46b9('‮9','2!*y'));machineId()[_0x46b9('‫a','nJ3s')](_0x44318c=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x5c9d21){var _0x5cf568={'XSpwF':'Ofpsc'};this['index']=++userIdx;this['name']=this[_0x46b9('‮b','wZJ*')];this[_0x46b9('‮c','e3bT')]=![];this['canRead']=![];try{this[_0x46b9('‫d','DNV)')]=$[_0x46b9('‮e','7QwU')](_0x5c9d21);this[_0x46b9('‫f','R5yx')]=!![];}catch(_0x38d552){if(_0x46b9('‮10','xJe7')===_0x5cf568[_0x46b9('‮11','G[gp')]){$[_0x46b9('‮12','S$DO')](_0x46b9('‫13','M^g!')+this[_0x46b9('‮14','f^cP')]+']查询账户失败\x20变量不对或已失效');}else{this['ckValid']=![];$[_0x46b9('‮15','RO[L')](_0x46b9('‫16','i#G7')+this[_0x46b9('‮17','VJtn')]+_0x46b9('‮18','v2BN'));}}}async['levelEnd'](){var _0x461ba1={'guUlT':function(_0x2185ae,_0x315979,_0x90c4f2,_0x4e9f54){return _0x2185ae(_0x315979,_0x90c4f2,_0x4e9f54);},'WzKce':_0x46b9('‫19','wZJ*'),'vCjCH':function(_0x13fde0,_0x3ece72){return _0x13fde0==_0x3ece72;}};try{let _0x477ca6='https://idiom.ijiaweb.com/api/User/levelEnd';let _0x1bc97f='';let _0x514ad1=''+this[_0x46b9('‮1a','Iiy7')][_0x46b9('‮1b','#XY$')];let _0x4c0673=_0x461ba1[_0x46b9('‮1c','NqnX')](populateUrlObject,_0x477ca6,_0x514ad1,_0x1bc97f);delete _0x4c0673['headers'][_0x461ba1['WzKce']];await httpRequest('post',_0x4c0673);let _0x534295=httpResult;if(!_0x534295)return;if(_0x461ba1[_0x46b9('‫1d','WXuq')](_0x534295['code'],0x0)){$['logAndNotify'](_0x46b9('‫1e','e3bT')+this[_0x46b9('‮1f','WXuq')]+_0x46b9('‫20','R5yx')+_0x534295['data'][_0x46b9('‮21','xJe7')]);}}catch(_0x3dce2a){}finally{return Promise['resolve'](0x1);}}async['startLevel'](){var _0x4b5dee={'HpikR':function(_0x4786f0,_0x1d6fff,_0x49da9b,_0x5c9f22){return _0x4786f0(_0x1d6fff,_0x49da9b,_0x5c9f22);},'qNNaQ':_0x46b9('‫22','G[gp'),'GlvaQ':_0x46b9('‫23','W]oO'),'tTQom':function(_0x1dbc0f,_0x5bf53e){return _0x1dbc0f==_0x5bf53e;},'iafbn':function(_0x5b2607,_0x465868){return _0x5b2607!==_0x465868;},'zFCdr':'ZJztr'};try{let _0x1ee175='https://idiom.ijiaweb.com/api/User/startLevel';let _0x2e00df='';let _0x4403a6=''+this[_0x46b9('‮24','&0Jt')][_0x46b9('‫25','G[gp')];let _0xadb358=_0x4b5dee[_0x46b9('‮26','49tx')](populateUrlObject,_0x1ee175,_0x4403a6,_0x2e00df);delete _0xadb358[_0x46b9('‮27','ZnUw')][_0x4b5dee[_0x46b9('‫28','zGCh')]];await httpRequest(_0x4b5dee[_0x46b9('‮29','wZJ*')],_0xadb358);let _0x5403b8=httpResult;if(!_0x5403b8)return;if(_0x4b5dee[_0x46b9('‮2a','2!*y')](_0x5403b8[_0x46b9('‫2b','DJ@@')],0x0)){$[_0x46b9('‮2c','z^bH')]('账号['+this[_0x46b9('‮2d','M^g!')]+_0x46b9('‫2e','wZJ*'));await $[_0x46b9('‮2f','i#G7')](0x7530);await this[_0x46b9('‫30','VJtn')]();}}catch(_0x22040b){}finally{if(_0x4b5dee['iafbn'](_0x4b5dee[_0x46b9('‫31','&0Jt')],_0x4b5dee['zFCdr'])){return Promise['resolve'](0x1);}else{return Promise[_0x46b9('‮32','DNV)')](0x1);}}}async['getUser'](){var _0xd7e938={'ebMbw':_0x46b9('‮33','W]oO'),'qNOks':function(_0x4bdb39,_0x3aaaa9,_0x339501,_0x5379ae){return _0x4bdb39(_0x3aaaa9,_0x339501,_0x5379ae);},'iBMwb':_0x46b9('‮34','f^cP'),'VRIss':function(_0x137893,_0x5b8a3f,_0x2a932f){return _0x137893(_0x5b8a3f,_0x2a932f);},'iGFiZ':_0x46b9('‫35','e3bT'),'yPfoB':function(_0x3c6c14,_0x472628){return _0x3c6c14==_0x472628;},'kCfhp':function(_0x570e9f,_0x5e5d31){return _0x570e9f<_0x5e5d31;},'PkUpW':function(_0x113ac6,_0x17cae1){return _0x113ac6!==_0x17cae1;},'vvypU':_0x46b9('‮36','DT]R'),'LETyU':function(_0x41f9b0,_0x2830be){return _0x41f9b0==_0x2830be;}};try{if(_0x46b9('‫37','5mxG')!==_0xd7e938['ebMbw']){$[_0x46b9('‫38','49tx')](_0x46b9('‫39','wZJ*')+this[_0x46b9('‫3a','zGCh')]+']'+result[_0x46b9('‫3b','NqnX')]);}else{let _0x587dea=_0x46b9('‫3c','91bG');let _0x398cb5='';let _0x1c68e1=''+this[_0x46b9('‫3d','5mxG')][_0x46b9('‫3e','W]oO')];let _0x3e4096=_0xd7e938['qNOks'](populateUrlObject,_0x587dea,_0x1c68e1,_0x398cb5);delete _0x3e4096['headers'][_0xd7e938[_0x46b9('‫3f',']kr*')]];await _0xd7e938['VRIss'](httpRequest,_0xd7e938['iGFiZ'],_0x3e4096);let _0x3f8ebc=httpResult;if(!_0x3f8ebc)return;if(_0xd7e938[_0x46b9('‮40','wW$i')](_0x3f8ebc['code'],0x0)){$['logAndNotify'](_0x46b9('‫41','DNV)')+this[_0x46b9('‫42','91bG')]+']'+_0x3f8ebc['data'][_0x46b9('‫43','NqnX')]+_0x46b9('‫44','GEkP')+_0x3f8ebc[_0x46b9('‮45','49tx')][_0x46b9('‮46','G[gp')]+_0x46b9('‫47','f^cP')+_0x3f8ebc[_0x46b9('‫48','YE2V')][_0x46b9('‮49','&0Jt')]);this[_0x46b9('‮4a','7QwU')]=_0x3f8ebc[_0x46b9('‫4b','SHsg')][_0x46b9('‫4c','tdo&')];for(let _0x50a82c=0x0;_0xd7e938[_0x46b9('‮4d',']kr*')](_0x50a82c,''+this[_0x46b9('‮4e','f^cP')]);_0x50a82c++){if(_0xd7e938[_0x46b9('‫4f','ZnUw')](_0xd7e938[_0x46b9('‮50','f^cP')],'yiGWK')){await this[_0x46b9('‫51','whqA')]();}else{if(userCookies)userList['push'](new UserInfo(userCookies));}}this[_0x46b9('‫52','G[gp')]=!![];this[_0x46b9('‫53','fzlU')]=!![];if(_0x3f8ebc[_0x46b9('‮54','R5yx')][_0x46b9('‮55','&0Jt')]>=0xbb8){await $['wait'](0x1388);await this[_0x46b9('‫56','xJe7')]();}}if(_0xd7e938['LETyU'](_0x3f8ebc[_0x46b9('‮57','Yf3$')],0x191)){$[_0x46b9('‮12','S$DO')]('账号['+this[_0x46b9('‮58','G[gp')]+']查询账户失败\x20变量不对或已失效');}}}catch(_0x117b6f){}finally{return Promise[_0x46b9('‫59','ZnUw')](0x1);}}async['exchange'](){var _0x18f10b={'xqreP':function(_0x1154e0){return _0x1154e0();},'EXmnu':function(_0x5265b4,_0x909589){return _0x5265b4===_0x909589;},'issIQ':_0x46b9('‮5a','ZnUw'),'suXPW':'coin=3000','UblHI':function(_0x57b048,_0x38ed08,_0x543cee){return _0x57b048(_0x38ed08,_0x543cee);},'dCtSY':'post','DXSCD':function(_0x31d275,_0x38c3d1){return _0x31d275==_0x38c3d1;},'hmdoA':'LTEkd','bdxBV':_0x46b9('‮5b','M^g!'),'tSNtq':'HaCAk'};try{if(_0x18f10b[_0x46b9('‮5c','fzlU')](_0x46b9('‫5d','91bG'),_0x18f10b[_0x46b9('‮5e','DT]R')])){_0x18f10b[_0x46b9('‫5f','isf2')](resolve);}else{let _0x32c5cc=_0x46b9('‫60','8YFP');let _0x151d30=_0x18f10b['suXPW'];let _0x5ed7b4='9';let _0x5051d8=''+this[_0x46b9('‮61','z^bH')][_0x46b9('‫3e','W]oO')];let _0x3e782e=populateUrlObject(_0x32c5cc,_0x5051d8,_0x5ed7b4,_0x151d30);await _0x18f10b['UblHI'](httpRequest,_0x18f10b[_0x46b9('‮62','VJtn')],_0x3e782e);let _0x5da994=httpResult;if(!_0x5da994)return;if(_0x18f10b['DXSCD'](_0x5da994[_0x46b9('‫63','tdo&')],0x0)){$['logAndNotify']('账号['+this['name']+']'+_0x5da994[_0x46b9('‫64','WXuq')]+'\x20');await $[_0x46b9('‮65','kVN*')](0x1388);await this[_0x46b9('‮66','49tx')]();}else{if(_0x18f10b['hmdoA']!==_0x18f10b['bdxBV']){$[_0x46b9('‫38','49tx')](_0x46b9('‫67','tdo&')+this['name']+']'+_0x5da994[_0x46b9('‫68','wW$i')]);}else{httpResult=JSON[_0x46b9('‮69','fzlU')](resp[_0x46b9('‮6a',']kr*')]);}}}}catch(_0x14a37d){}finally{if(_0x18f10b['EXmnu'](_0x46b9('‫6b','W]oO'),_0x18f10b[_0x46b9('‮6c','tdo&')])){return Promise[_0x46b9('‫6d','ynTL')](0x1);}else{taskall[_0x46b9('‫6e','zGCh')](user[_0x46b9('‮6f','i#G7')]());}}}async[_0x46b9('‫70','i#G7')](){var _0x5234d8={'nkTqb':function(_0x330ec5,_0x26ccec){return _0x330ec5===_0x26ccec;},'VQJWT':_0x46b9('‮71','isf2'),'TKNhl':_0x46b9('‮72','7QwU'),'PIJZl':_0x46b9('‮73','v2BN'),'WkNzd':function(_0x40b6b6,_0x3a20c8,_0x4a9857,_0x3e88b4,_0x5f187f){return _0x40b6b6(_0x3a20c8,_0x4a9857,_0x3e88b4,_0x5f187f);},'tmziR':function(_0x599722,_0x4c7761,_0x18a398){return _0x599722(_0x4c7761,_0x18a398);},'WnqAJ':_0x46b9('‫74','nJ3s'),'sUXxz':function(_0x91c07d,_0x54e67f){return _0x91c07d==_0x54e67f;},'ARHWz':function(_0x134f60,_0x45ae05){return _0x134f60==_0x45ae05;},'Plgsx':'aLhih'};try{if(_0x5234d8[_0x46b9('‫75','wW$i')](_0x5234d8[_0x46b9('‮76','DT]R')],_0x5234d8[_0x46b9('‮77','wZJ*')])){console[_0x46b9('‫78','wZJ*')](e);}else{let _0x2d3e77=_0x46b9('‮79','nJ3s');let _0x47df78=_0x5234d8[_0x46b9('‫7a','2!*y')];let _0x565c05='8';let _0x16c32e=''+this[_0x46b9('‫7b','v2BN')][_0x46b9('‫7c','whqA')];let _0x5e35e0=_0x5234d8[_0x46b9('‮7d','nJ3s')](populateUrlObject,_0x2d3e77,_0x16c32e,_0x565c05,_0x47df78);await _0x5234d8['tmziR'](httpRequest,_0x5234d8[_0x46b9('‮7e','G[gp')],_0x5e35e0);let _0x229304=httpResult;if(!_0x229304)return;if(_0x5234d8[_0x46b9('‮7f','DJ@@')](_0x229304[_0x46b9('‮80','6sRA')],0x0)){$[_0x46b9('‫81','IVnb')]('账号['+this['name']+_0x46b9('‮82','DNV)')+_0x229304[_0x46b9('‮83',']kr*')]+'\x20');}if(_0x5234d8[_0x46b9('‮84','DJ@@')](_0x229304[_0x46b9('‫85','GEkP')],0x190)){if(_0x5234d8[_0x46b9('‫86','F58d')]!==_0x46b9('‫87','S$DO')){this[_0x46b9('‮88','DNV)')]=![];$['logAndNotify'](_0x46b9('‮89','2!*y')+this[_0x46b9('‫8a','ZnUw')]+']CK格式错误');}else{$['logAndNotify'](_0x46b9('‮8b','kVN*')+this[_0x46b9('‮8c','W]oO')]+']提现:\x20🎉恭喜你号黑了');}}}}catch(_0x4e645f){}finally{return Promise[_0x46b9('‮8d','8YFP')](0x1);}}}!(async()=>{var _0x3cba60={'ELVKL':function(_0x1446b8,_0x176f9f){return _0x1446b8!==_0x176f9f;},'frRDF':function(_0x56c3fe,_0x12444f){return _0x56c3fe===_0x12444f;},'aCsgx':_0x46b9('‮8e','NqnX'),'LRpBB':'luEEj','KFVqB':function(_0x50a46c){return _0x50a46c();},'oIgnR':function(_0x126f62,_0x3e072b){return _0x126f62>_0x3e072b;},'MJFGV':'\x0a--------------\x20资产查询\x20--------------','mhgth':_0x46b9('‮8f','i#G7')};if(_0x3cba60[_0x46b9('‮90','F58d')](typeof $request,'undefined')){}else{if(_0x3cba60['frRDF'](_0x3cba60[_0x46b9('‫91','F58d')],_0x3cba60[_0x46b9('‮92','S$DO')])){$[_0x46b9('‫81','IVnb')](_0x46b9('‮93','nJ3s')+this['name']+_0x46b9('‫94','RO[L'));}else{await km();if(!(await _0x3cba60[_0x46b9('‫95','GEkP')](checkEnv)))return;let _0xfc695e=[];let _0x52104e=userList[_0x46b9('‮96','DT]R')](_0x17c13f=>_0x17c13f[_0x46b9('‫97','Yf3$')]);if(_0x3cba60[_0x46b9('‮98','oKs0')](_0x52104e['length'],0x0)){$[_0x46b9('‫99','DNV)')](_0x3cba60[_0x46b9('‮9a','ynTL')]);_0xfc695e=[];for(let _0x4d9873 of _0x52104e){if(_0x3cba60[_0x46b9('‮9b','VJtn')](_0x3cba60[_0x46b9('‫9c','R5yx')],_0x46b9('‫9d','z^bH'))){_0xfc695e[_0x46b9('‫9e','7QwU')](_0x4d9873[_0x46b9('‫9f','&0Jt')]());}else{$['logAndNotify'](_0x46b9('‮a0','91bG')+this[_0x46b9('‮a1','GEkP')]+_0x46b9('‮a2','YE2V')+result[_0x46b9('‫a3','6sRA')]['coin']);}}await Promise[_0x46b9('‮a4','&0Jt')](_0xfc695e);_0x52104e=_0x52104e[_0x46b9('‮a5','isf2')](_0x44488f=>_0x44488f[_0x46b9('‫a6','DJ@@')]);if(_0x52104e['length']>0x0){_0xfc695e=[];for(let _0x3436b3 of _0x52104e[_0x46b9('‮a7','f^cP')](_0x28b799=>_0x28b799[_0x46b9('‫a8','kVN*')])){}await Promise[_0x46b9('‫a9','z^bH')](_0xfc695e);}}await $['showmsg']();}}})()['catch'](_0x5bd882=>console[_0x46b9('‫aa','z^bH')](_0x5bd882))['finally'](()=>$['done']());async function km(){var _0x49e0fe={'Hlqhn':_0x46b9('‮ab','wW$i'),'yGtCC':function(_0x4d1478,_0x4bcc24,_0x37eb9d){return _0x4d1478(_0x4bcc24,_0x37eb9d);},'NCDhE':_0x46b9('‫ac','zGCh'),'TgAJP':function(_0x227c4d,_0x12defb){return _0x227c4d==_0x12defb;},'naiZd':function(_0x3dcd52,_0x45d34f){return _0x3dcd52==_0x45d34f;},'eRVpD':function(_0x287e63,_0x1ca11c){return _0x287e63===_0x1ca11c;},'yfvnM':'SMVmG','lFEhR':function(_0x5aed4d,_0x26011a){return _0x5aed4d!==_0x26011a;},'rGXil':'xlAUv','TBZsz':_0x46b9('‫ad','e3bT')};try{let _0x3b1d36=_0x46b9('‫ae','Iiy7')+userCGkey+_0x46b9('‫af','#XY$')+uuid;let _0x422522='';let _0x5cf175=_0x49e0fe['yGtCC'](populateUrlObject,_0x3b1d36,_0x422522);await httpRequest(_0x49e0fe[_0x46b9('‮b0','91bG')],_0x5cf175);let _0xa16f43=httpResult;if(_0x49e0fe[_0x46b9('‮b1','e3bT')](_0xa16f43[_0x46b9('‮57','Yf3$')],0xc8)){this[_0x46b9('‮b2','isf2')]=_0xa16f43[_0x46b9('‫b3','f^cP')][_0x46b9('‮b4','DNV)')];this[_0x46b9('‮b5','DJ@@')]=timestampToTime(this['time']);$[_0x46b9('‫b6','91bG')](_0x46b9('‮b7','NqnX')+this['time1']);await $[_0x46b9('‫b8','f^cP')](0xbb8);}if(_0x49e0fe[_0x46b9('‮b9','F58d')](_0xa16f43['code'],0x95)||_0xa16f43[_0x46b9('‮ba','S$DO')]==0x94||_0xa16f43[_0x46b9('‫63','tdo&')]==0x70){if(_0x49e0fe[_0x46b9('‫bb','xJe7')](_0x49e0fe['yfvnM'],_0x49e0fe['yfvnM'])){$[_0x46b9('‮bc','fzlU')](_0xa16f43[_0x46b9('‫bd','SHsg')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{console[_0x46b9('‮be','Yf3$')](_0x49e0fe[_0x46b9('‮bf','isf2')]);return;}}if(_0xa16f43['code']==0x192){if(_0x49e0fe[_0x46b9('‫c0','VJtn')](_0x49e0fe['rGXil'],_0x49e0fe[_0x46b9('‫c1','Yf3$')])){$['logAndNotify'](_0xa16f43['msg']+_0x46b9('‮c2','YE2V'));}else{return Promise['resolve'](0x1);}}}catch(_0x52358d){}finally{return Promise[_0x46b9('‫c3','M^g!')](0x1);}}async function checkEnv(){var _0x2a34d4={'kfIsO':'BGKEL','kJiQM':_0x46b9('‮c4','G[gp'),'QiUuJ':_0x46b9('‫c5','v2BN'),'uuUKS':function(_0x592178,_0x5010ed){return _0x592178>_0x5010ed;},'KlFEB':_0x46b9('‮c6','ynTL')};if(userCookie){if(_0x2a34d4[_0x46b9('‮c7','S$DO')]!==_0x2a34d4[_0x46b9('‫c8','f^cP')]){let _0x8133c1=envSplitor[0x0];for(let _0x1acb8c of envSplitor){if('ruHSX'===_0x2a34d4[_0x46b9('‮c9',']vHF')]){if(_0x2a34d4[_0x46b9('‫ca',']vHF')](userCookie[_0x46b9('‮cb','tdo&')](_0x1acb8c),-0x1)){_0x8133c1=_0x1acb8c;break;}}else{$['logAndNotify'](result[_0x46b9('‮cc','GEkP')]+_0x46b9('‫cd','W]oO'));}}for(let _0x17afdc of userCookie[_0x46b9('‮ce','YE2V')](_0x8133c1)){if(_0x17afdc)userList[_0x46b9('‫cf','f^cP')](new UserInfo(_0x17afdc));}userCount=userList[_0x46b9('‫d0','ILII')];}else{return Promise['resolve'](0x1);}}else{console[_0x46b9('‮d1','#XY$')](_0x2a34d4[_0x46b9('‮d2','Yf3$')]);return;}console['log']('\x0a共找到'+userCount+_0x46b9('‮d3','6sRA'));return!![];}function populateUrlObject(_0x1caf13,_0x5e4d65,_0x400263,_0x4f9686=''){var _0x99582f={'coWSa':_0x46b9('‫d4','nJ3s'),'tTmuv':_0x46b9('‫d5','R5yx'),'QwzJD':_0x46b9('‫d6','W]oO')};let _0x5d852a=_0x1caf13[_0x46b9('‮d7','IVnb')]('//','/')['split']('/')[0x1];let _0x4f9fc8={'url':_0x1caf13,'headers':{'Host':_0x5d852a,'authorization':_0x5e4d65,'Content-Length':_0x400263,'User-Agent':defaultUA},'timeout':0x1388};if(_0x4f9686){if(_0x99582f[_0x46b9('‮d8','i#G7')]===_0x46b9('‫d9','ynTL')){return Promise[_0x46b9('‫da','G[gp')](0x1);}else{_0x4f9fc8[_0x46b9('‫db','#XY$')]=_0x4f9686;_0x4f9fc8['headers'][_0x46b9('‮dc','W]oO')]=_0x99582f['tTmuv'];_0x4f9fc8[_0x46b9('‫dd','fzlU')][_0x99582f['QwzJD']]=_0x4f9fc8[_0x46b9('‫de','nJ3s')]?_0x4f9fc8['body']['length']:0x0;}}return _0x4f9fc8;}async function httpRequest(_0x284f1e,_0x1ff757){var _0x2c94c5={'IYjla':'pHcbc','AImLI':function(_0x10a68b,_0xb20d88){return _0x10a68b!==_0xb20d88;},'qjCZm':_0x46b9('‫df','S$DO'),'ZFXKV':_0x46b9('‮e0','nJ3s'),'XTGaF':_0x46b9('‫e1','S$DO'),'VvyXE':function(_0x21a4e9,_0x33eb7d){return _0x21a4e9===_0x33eb7d;},'dfrJI':_0x46b9('‮e2','f^cP'),'DfNvR':'zJgcY','HdYDS':_0x46b9('‮e3','GEkP'),'QCMey':'AziQN','CJwYx':function(_0x8202f4){return _0x8202f4();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x5c8a38=>{$['send'](_0x284f1e,_0x1ff757,async(_0x486224,_0x4f0c48,_0x5ee2a0)=>{if(_0x46b9('‮e4','IVnb')===_0x2c94c5[_0x46b9('‮e5','xJe7')]){try{if(_0x2c94c5[_0x46b9('‮e6','ynTL')](_0x2c94c5['qjCZm'],'bEFew')){httpReq=_0x4f0c48;httpResp=_0x5ee2a0;if(_0x486224){if('CfChB'===_0x2c94c5[_0x46b9('‫e7','&0Jt')]){console['log'](_0x284f1e+_0x46b9('‫e8','tdo&'));console[_0x46b9('‫e9','whqA')](JSON[_0x46b9('‫ea','YE2V')](_0x486224));}else{$['logAndNotify'](result['msg']+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}}else{if(_0x46b9('‫eb','6sRA')===_0x2c94c5[_0x46b9('‮ec','wW$i')]){var _0x3e3c77=_0x46b9('‮ed','8YFP')[_0x46b9('‫ee','fzlU')]('|'),_0x27eaa4=0x0;while(!![]){switch(_0x3e3c77[_0x27eaa4++]){case'0':this[_0x46b9('‫ef','f^cP')]=++userIdx;continue;case'1':this[_0x46b9('‮f0','wZJ*')]=this[_0x46b9('‫f1','z^bH')];continue;case'2':try{this[_0x46b9('‮f2','S$DO')]=$['str2json'](str);this[_0x46b9('‫f3','oKs0')]=!![];}catch(_0x40addc){this[_0x46b9('‮88','DNV)')]=![];$[_0x46b9('‫f4','5mxG')](_0x46b9('‫f5','RO[L')+this[_0x46b9('‫f6','wW$i')]+_0x46b9('‮f7','5mxG'));}continue;case'3':this['valid']=![];continue;case'4':this[_0x46b9('‫f8','f^cP')]=![];continue;}break;}}else{if(_0x5ee2a0[_0x46b9('‮f9','f^cP')]){if(_0x2c94c5[_0x46b9('‮fa','8YFP')](_0x2c94c5['dfrJI'],_0x2c94c5[_0x46b9('‮fb','DNV)')])){httpResult=_0x5ee2a0[_0x46b9('‮fc',']vHF')];}else{if(typeof _0x5ee2a0[_0x46b9('‫fd','YE2V')]==_0x46b9('‮fe','oKs0')){if(_0x46b9('‮ff','VJtn')!==_0x2c94c5[_0x46b9('‮100','v2BN')]){httpResult=_0x5ee2a0[_0x46b9('‫101','SHsg')];}else{console['log'](_0x284f1e+_0x46b9('‫102','W]oO'));console[_0x46b9('‮103','M^g!')](JSON[_0x46b9('‮104','SHsg')](_0x486224));}}else{try{httpResult=JSON[_0x46b9('‫105','isf2')](_0x5ee2a0[_0x46b9('‮106','5mxG')]);}catch(_0x6230bb){httpResult=_0x5ee2a0['body'];}}}}}}}else{httpResult=_0x5ee2a0['body'];}}catch(_0x9a79f7){console['log'](_0x9a79f7);}finally{if(_0x2c94c5[_0x46b9('‮107','2!*y')](_0x2c94c5[_0x46b9('‫108','#XY$')],_0x2c94c5[_0x46b9('‮109','R5yx')])){_0x2c94c5[_0x46b9('‫10a','R5yx')](_0x5c8a38);}else{try{httpResult=JSON[_0x46b9('‮10b','xJe7')](_0x5ee2a0[_0x46b9('‫fd','YE2V')]);}catch(_0x48a09e){httpResult=_0x5ee2a0['body'];}}}}else{$[_0x46b9('‮12','S$DO')]('账号['+this['name']+_0x46b9('‫10c','VJtn')+result['message']+'\x20');}});});};_0xodC='jsjiami.com.v6';
////////////////////////////////////////////////////////////////////
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
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
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