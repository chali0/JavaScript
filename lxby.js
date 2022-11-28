/*
联想百应 vx小程序

变量：捉包https://baiyingmalladmin.lenovo.com/api/v4/user/wxapp/loginWxApp域名请求体body全部放进变量 多账号换行隔开 
注意：第一次授权登录时才能抓到

格式：export lxby="body=encryptData=xxxxxxx"  

*/

const $ = new Env("联想百应");
let envSplitor = ['\n'] //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 7.1.2; V2203A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4343 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/9296 MicroMessenger/8.0.27.2220(0x28001B59) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android' //换成自己的UA



var _0xodE='jsjiami.com.v6',_0xodE_=['‮_0xodE'],_0x3ec3=[_0xodE,'M8KkBzo=','w53DmcK2woE=','bU3CmAw=','wqA2w4QJwo7CqVvCiEoIwp5I','Z3kQwoPCpQ==','d8K+wp3Ck8Or','DHErbMK4','ABvDvMKqRWTDpA==','esK6W8KdVsO4wosww4NnwrLCvA==','6LWg5Y+fEA==','R8OlVFo=','a+W6pOmSmuWHs+azjeS7n+WKpeW2veWuguaJnQ==','R8Oxw6FMw7DDoDRBY8O+TMKg','5pyM5oqi5Yqcfl7DgeiulOmZt+ituuiFqOaftuivhOabkA==','w7FMXQ==','wrRzw7YbcMO1JiXCvsKhw6zCosO/Oh/CtBNpw4DCnBXCsWzCoUfCvEVSNhfDpzULwqVyw6tGYjElw6XCj8Onwrk9wpcMw49gTsOvHUcqw5ArwrHDpVQREsOkwrDCnMO0wqUgw6nCk0A=','RzVOb8K+','VsOKw4VYw7o=','wrENw6AdwoQ=','FMKCw4bDkcOs','IsK+Kjs=','w6/Du8OLf8OB','C8KwFx3DvA==','c3nChgrDrg==','wrXCtHvCpyA=','6LaJ5Y2bwqQ=','EcOoPMOt','OVI3T8K4NsKENcO+','woLCvsK5JglNCQ==','wqfChl7CiSfCgsKkwqcSYD4Cw5HDu8K0Zw==','wrHCo8K4NAVPGDNMwoMDXMOOwpc=','w6ZGWlE=','Swszw4kE','cljChQjDpcO2wq/CosK4RXLCklHCqG8yWVrCvsK/CzsEKR/Dm8OOOT8ZNwTCqMKhNGnCtcKxbCPDnCvCtA7DvMKRwpnCrGLDjgNqwpBPwq12fVwqwrQIbnJhw5k=','w7fDmMONw4k/w6TDrUbDlMO2fWnDj8K1wotcw7ZGwovDr8OWW8OlXDnDr101wqLCrFnCu23DhF7Cum/Dv8KewrHCkxzCpwB5wrhAaWPCqsO1MMKZUMK7U8KtYsKqWMKdDi0Lw5B7wr18wpjChMO/Sx83Qw4HFS4Qw6ZaC8OawpNVcsKZwqDDl0J/U8OIw6jDsiUTw4Z4w6HDi8K4wq8awpYVw7R6wrNBLcOJF8OCHTNRw6PCrHxNwrnDig9rwrDDrCXDuktuM8KH','wqTCpVrCiyw=','wrkDXcK3GQ==','PlQKSMKc','PXXCoMKe','woFfw49hYg==','wrEUZcK9Qg==','FMKEwo9Kw70=','LULDmcKM','w4zDsMOGT8OcQgZj','wqJ/wonClw==','EyE4wo/DjcKYaQ==','wrI6w7APwoM=','wq7Crldneg==','P1bCg8K4w5Y=','c3Fyw5rCgQ==','w79vfG0c','w5rDhsOIw73DmA==','TsO+UE9nw5dkwoU1JsORM8OlbMK4wrrDokvCiyvDoWQ0OA==','JEcvPQ==','Wz9EbsK1Vyk=','TsOXw7rDsg0=','GHHDq8OXIRrCq8O3JHzCrnA3woUPw5k=','JH/CjsKFEgnDhg==','bGRww5TCgcKv','wq3CukVlYMOEfA==','eQ7Cp8K7c8KzAsOjRg==','w75dXVUeXsKAK1PCuMOcIzbDosOofwQcORXDvTvCjMKGcnrDnRTDvCt+JsOVwoLDnURkPMOBw5N9wo/DpWDDv2fCgMOkw4bCt8KlcMK2w6DDr8Ohw48=','QVg1w4sdw4wFIXHDgx8aOA==','d8KowqvCs8OiwoVqwqs=','w4BaPsK+UV/Cnnx3FCZtM2TCgE5mdMKkDcKgI8KTFybDvETCrS0=','JsK+ITrDrkQ9ew==','w77DssO3w6rDow==','6LSP5Y2zYg==','EC8jwoo=','5q2o5rWx6KaKHOiNnOW/gg==','TcOlTV4=','VsO7w75Pw7nDtSU=','EsOsPMOAJyvCnMOfw4YOwrXChg==','asKgw6wPwro=','HDojwpvDjcOrIi5ewqoMwrsbOD3DigISAMKmwr/DiUgsEWXCq8OmAH1RB8OLwqDDl8OBw70Dw7hjw5LCgsO1w6jCt2RTZ8KpRcO0wo8=','w5zCicOaw4Ux','wpE+w4AswoQ=','fUnChQ==','McKIw6jDjg==','6LWv5Y+JGQ==','wq04w4UA','Xhsmw4U=','M8KkZEsnFcKywqU=','woZmMcKx','FueOg+adqQ==','w7tqbkwd','MxHDucKnWQ==','SMOhw7TDhSU=','asK6w6AowpoYw60nP8KxGxY=','6LSQ5Y+EOw==','woxmKMK1','R8Orw79Sw4bDoC9gcg==','Q8Ouw4vDiQ==','BxDDq8KgT3vDr8KDw6E=','w4wzw5DDmxE3w5/DlcOFeVkawrZJQcOZ5pag5buO5Lm55YujZMOAwooTJw9Ub242wqLCuWhtSg==','VEcZwrXCrQ==','wrDDiDrCrsKzIjrDrsKVQMOgSg==','wqTpgpznnYDljajvvZPDheKZre+4hOW9q+W/juS7qeW9tsKz5b+45pyO5Zqc5ZCAKw==','w4LDo8OLNT3Cpw==','LcK+KR/Ds38acMKUfzXDqg==','LMOxwoEQOMOMTl/CrF/Dtx3Dsx7CicO45Yig5pa05Y+W6YerwpTCmWXDpcKnwpPCrnTDm8OLwozDrFMhag==','Nl04LA==','GCEwwoLDkMKGdUBewrs=','wr0FwqE=','IEEnMMKgTw==','wq/Cs1ptZw==','LcK0IDnDqXM=','wr8gwpd6w48=','WcO2Vlkiw5hu','wqI1w4Q=','IHXCiMKgGR/Du8OCwqnDoFfDgQ==','w4wzw5DDmxE3w5/DlcOFeVkawrZJQcOZ5Lmv5LmM5L2j5oCtZMOAwooTJw9Ub242wqLCuWhtSg==','wqDCn0LCkSvCkw==','wqF7wonCulN9wpvClsKhOhJY','wr/DhinCjMK1','wrBow6U=','QMK1w4JcecKNGg==','S8Obw4XDkC0=','5pyD5ou65YiJfADClOivvOmbreiuvuiFjuaemOiutOaamA==','IMO6GcO9Ow==','w6nCg8Okw6YX','w4jDssOTIx4=','w4fDqMOBNzHCgMKr','wphyL8K8','RUMMw6lR','BDskwoM=','wrDDgjPCiMKpLg==','ShPCo8K+Qg==','VsO8w4hIw70=','LcK+KQ==','AsKxV3ws','IMKCw7/DhMOVwqdI','wqrCmUk=','5YWY5ou65YiJ','5Lic6LSV5Y6X','PmbCn8KtwrpBworClHsS','KE4yUMKCNsKKM8Oyw6nCocK/wrTChcKWwqA=','DMK+NDfDsXc1MMOVOGPCs8KmBF3DtMKAVAHDrEnDqcOiw5Mbw7nCqEDDgilqGMOSJsKWwptQw6bDpMO2Z8Owwop7ODF8P8OJwpp2Uglow49zPcOaGMOrwrJJJl/Dg0/Du1HCicOCwqPCqCDDmsKHw5vCscO2N8K7w7sEUzwQw6PDssKDNsO0D3gONcK1wqYEQ8KmA23DtcKBQnHCoMOBZ8O6w4zDosKlw4HChmzDqMKAU09/wrF+EcKZwqrCgH4ERMKmwo7ClAULLnspw4sWI1zCmDvCvcK1wpHDksKNXCPCimpGYcOrw5TDkSV0cXvCtMOqS1JUw4o2woRFe8KLw59bDV8jw5QxZcOBw64lw51pM0ghw78nw6I3XWwGwqc7agw1wpImdMONwpLDqMOxHcKBwrfCo8ONfHMdw5Rww7YGXMK5w4PDuMKcF1vDvl0Qw54owpBjGVBlAFgPw7DDoyzDgnfDvSg5w5t6CwbDj8OuwrZOwo8mwq8GbsOywr5QwqHDr8KlW8OwE8KVw4EzYQjDhxMaEnMOKsOIAsOHCzQCIMKIwqLCl8KJwrhpPyDDlcKHdcKiw5wmwrcqwrUjNcK6w7JTP1TCgsKNHsOpw7A6w40=','wp9ow6wfZsKhfSfCgcKsw63CtcKmIg==','IMKCw7zDh8OYwrJI','w6XDpcKdwqAX','w4bDlMO1w5LDpw==','TMO7w6xEw7DDsTM=','wrUAw4cMwqE=','wqp7wpPCkUhy','w63CisOOw4A1w4TDrUbDtMO9MXzClcK6w5AJw7MewqTDpMKGDMOqGHvCoRR5wrHColrCuys=','FGdQJ8Ofb0E=','wooow6EywqQ=','wqRxwpnCjw==','PWbCm8K5w7JSwpU=','wpDCo8KyOQ==','FsOiwrlcwqTDv3BuJA==','wpTCjlrCtBc=','NMK3PSTDhQ==','wr7Cn8KCODM=','VcK5w4JZ','H13CgMKUIA==','PybDrcKnYg==','PmjCucKLw5g=','wo3Cp0JbVQ==','RcOrXn4lw5BFwocxPcOSOQ==','6LWg5YygWg==','KMK2bFw=','wrjDhinCjg==','DHLDvsOJARfCrMOs','w6bnjYbmnKc=','wrxrP8KGwoo=','LmjCrsKNwp8=','U8K6w59HTQ==','6Law5Y+ecg==','wrIIwqB9','woxCw74=','RMKzw4hE','woxCJMKFwpg=','VsK9w55OcA==','wo3Cgk3CpiU=','ahx3cMKq','IEfDicOBMg==','SMOya1AB','NcKnbVAa','Kl8sbsKONMKP','w4bCmMKfwpLDmg==','MsKlPGzDt2g7cQ==','w4zDh8KpwoQMR8Oi','fMKowqPClsO/wr5NwqAtwqvCgjg=','TcKEwo/mo6vlvp7pl4Por6w=','J18vWQ==','w4LDrMOnRMOLeA==','wpMJWw==','wodIw61me07Clw==','wowZeMK6H0bDnSUrUWpke2PCiw==','w5rDrsOAPA==','QMOqXVoz','wq9wwpnCk0Q=','UHEkwpLCig==','JWLCiMK8w7o=','c3VswoHCn8K0w6RH','ERXDmcKkRXvDpQ==','K2AnAcKW','wrzCtGBrYMObfQ==','ZQ3CtcKJTsK0I8O+V8OrYwo=','6LSC5Y2pw5Y=','GxDDq8KgUQ==','VhU1','6K+E5rCY5aSU6LSv','K8KJwpFBw6PCncOCEsOARA==','VsKzw59J','Ug4mw5QBwpJZUXrDhlRZcw3Dj8KVP0nDksKQYRXCuMOTDDzDiMKvQcKswrVQw7rDqsKIYQ97HTzCuDk+W8OgwqfDscKYwqljZcK3w5XDi8OOAsObwqTCssOCJMKEwrXCjA==','S8OrXUY=','w7bCqcKQwpbDpw==','ME7CmMKXw5o=','wpzCq8KQCSo=','FXJMIsOK','MkcgIcKr','ZGBqw5I=','6LSm5Y+2RQ==','S+ebuOW8r+aLh+WJuA==','w4DCmMKSwojDqhLDgW0Q','RMOuw5HDugXCkDc=','KkcsBcKrWcOjVTfCmsK3w6Y=','6LWp5Y+aw6Y=','aMK0w6oM','wpvnmaXlvqjlp4fotJk66KyF5qC45pyN5Y6M6Ya7','VHU7wpTCgh7Dtg==','wqzDlTLCicK0KhE=','QXUNwqjCqg==','wrRzw7YbcMO1JiXCr8Kow6rCq8K7JA3Cu19iw43CiRTCq2TCtkfCskFVIAjDpnxGwqlwwqkJcTYlw7LDisKhw6M9wpoRwpA/X8OvF0Ijw5Zgw7fDtWQNDMOuwrXCgcOLwrRywqo=','ACE8wo7DkA==','U8Ogw5jDoDc=','woJ/w4hGag==','w4PDjMO3MyA=','woYXaMK+','TcOww7lFw7LDsSF+Q8OwTcKu','IE0EVcKFPMKYLw==','MUkiMA==','wp7Co8KxAQ5FInF0wo8LQg==','6Leg5YyBdQ==','O2LCl8K4','e+W5i+mRluWFjuazveS4muWLguW2gOWsjeaJog==','w6LDicODw4XDqw==','UlIUw6E=','YBHClMKhTsK5HsO5','wqQ8w5wiwoTCpUvCqHIOwp9Z','ccODw5nDkCo=','wqrCmUnCpCDChcKLwrwPZjZU','WFINw6U=','dOW4k+mTg+a1sOimg+S5j+WKquW0muWvieaJhA==','ewfCocKnTMKmCA==','wqJ/wpTCmkVZwprCncKLPz1Z','UDVLfsK1Sy7CosKTwpjCk8K8','ccK3wrTCu8O4wrliwrswwq3Cim7DjzB8bg==','wo9iKA==','AHvCv8KbBQ==','woIfQsKXKg==','BMKAOg7Djg==','dMOAN8K5wqg=','JG7Cm8KRBEHCmsKCwq3DqFDDix/DlsKNbcOFwrJjwrw4w7nDjsOFaQbCmHMTAsKASFbClcKkWMOHJAjDsMOOw6vDjgV2w4lsw6HCsMKNwqDCpMOtesOKKMKvw5gBwr4fw7U7EsOvw78xGQ==','w5/DjcKewpY0QcOtP18=','BW1ELg==','YDAYw64h','w4NAc3w/','6LW45Y+twp8=','eMK0UcK5','TeeuueWLtOiNoOW8hg==','w6jCm8OKw40=','DmdBL8Obflc=','woAeRMKfDg==','wprCqcK3JAVTHw==','eRU8w5AXw4YCU1TDglNHbgs=','csKowqDCrg==','RcOgw5vDkQ==','JVssW8KfPQ==','wrF1PcKs','esOsHcK+wolRdwLDpcKn','w4XDvsOETg==','Gn07SMKv','FHHCo8KRwpY=','wqtFw6YyVg==','J2bCicKyw7tWwoM=','wo4Ze8KeXE/Dsik3UWJ4','XTtIbw==','w7Pnr7jlipXkuqnli6jltL3lrYHmiJs=','wo8BwqJow5XDs3HDoA==','eAx3','wqYCZMKTFQ==','w4DClsKAwo8=','SjjCmsKBSA==','R8Oxw6lF','EjFsIjiaLwmin.comZt.LevL6LfR=='];if(function(_0x5107ea,_0x376a69,_0x31ee8a){function _0x378950(_0x1cfa9f,_0x3e4880,_0x1f4a34,_0x169fd8,_0x454636,_0x446033){_0x3e4880=_0x3e4880>>0x8,_0x454636='po';var _0x27555c='shift',_0x236be3='push',_0x446033='‮';if(_0x3e4880<_0x1cfa9f){while(--_0x1cfa9f){_0x169fd8=_0x5107ea[_0x27555c]();if(_0x3e4880===_0x1cfa9f&&_0x446033==='‮'&&_0x446033['length']===0x1){_0x3e4880=_0x169fd8,_0x1f4a34=_0x5107ea[_0x454636+'p']();}else if(_0x3e4880&&_0x1f4a34['replace'](/[EFILwnZtLeLLfR=]/g,'')===_0x3e4880){_0x5107ea[_0x236be3](_0x169fd8);}}_0x5107ea[_0x236be3](_0x5107ea[_0x27555c]());}return 0x116897;};return _0x378950(++_0x376a69,_0x31ee8a)>>_0x376a69^_0x31ee8a;}(_0x3ec3,0x1db,0x1db00),_0x3ec3){_0xodE_=_0x3ec3['length']^0x1db;};function _0x2da1(_0x2e4303,_0x26252c){_0x2e4303=~~'0x'['concat'](_0x2e4303['slice'](0x1));var _0x181b59=_0x3ec3[_0x2e4303];if(_0x2da1['XsEZTH']===undefined){(function(){var _0x4015fa=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1789a8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4015fa['atob']||(_0x4015fa['atob']=function(_0x1a3add){var _0x31a5f2=String(_0x1a3add)['replace'](/=+$/,'');for(var _0x4a1928=0x0,_0x363a9a,_0x4b74a3,_0x239ef3=0x0,_0xb33461='';_0x4b74a3=_0x31a5f2['charAt'](_0x239ef3++);~_0x4b74a3&&(_0x363a9a=_0x4a1928%0x4?_0x363a9a*0x40+_0x4b74a3:_0x4b74a3,_0x4a1928++%0x4)?_0xb33461+=String['fromCharCode'](0xff&_0x363a9a>>(-0x2*_0x4a1928&0x6)):0x0){_0x4b74a3=_0x1789a8['indexOf'](_0x4b74a3);}return _0xb33461;});}());function _0x288c51(_0x2ef4fd,_0x26252c){var _0xf7dc19=[],_0x33433a=0x0,_0x118106,_0x4be280='',_0x577244='';_0x2ef4fd=atob(_0x2ef4fd);for(var _0x4d8cb1=0x0,_0x1c9d0e=_0x2ef4fd['length'];_0x4d8cb1<_0x1c9d0e;_0x4d8cb1++){_0x577244+='%'+('00'+_0x2ef4fd['charCodeAt'](_0x4d8cb1)['toString'](0x10))['slice'](-0x2);}_0x2ef4fd=decodeURIComponent(_0x577244);for(var _0x348ec3=0x0;_0x348ec3<0x100;_0x348ec3++){_0xf7dc19[_0x348ec3]=_0x348ec3;}for(_0x348ec3=0x0;_0x348ec3<0x100;_0x348ec3++){_0x33433a=(_0x33433a+_0xf7dc19[_0x348ec3]+_0x26252c['charCodeAt'](_0x348ec3%_0x26252c['length']))%0x100;_0x118106=_0xf7dc19[_0x348ec3];_0xf7dc19[_0x348ec3]=_0xf7dc19[_0x33433a];_0xf7dc19[_0x33433a]=_0x118106;}_0x348ec3=0x0;_0x33433a=0x0;for(var _0x3114c2=0x0;_0x3114c2<_0x2ef4fd['length'];_0x3114c2++){_0x348ec3=(_0x348ec3+0x1)%0x100;_0x33433a=(_0x33433a+_0xf7dc19[_0x348ec3])%0x100;_0x118106=_0xf7dc19[_0x348ec3];_0xf7dc19[_0x348ec3]=_0xf7dc19[_0x33433a];_0xf7dc19[_0x33433a]=_0x118106;_0x4be280+=String['fromCharCode'](_0x2ef4fd['charCodeAt'](_0x3114c2)^_0xf7dc19[(_0xf7dc19[_0x348ec3]+_0xf7dc19[_0x33433a])%0x100]);}return _0x4be280;}_0x2da1['kMjrhR']=_0x288c51;_0x2da1['PhhXZp']={};_0x2da1['XsEZTH']=!![];}var _0x52cd24=_0x2da1['PhhXZp'][_0x2e4303];if(_0x52cd24===undefined){if(_0x2da1['UwsnhC']===undefined){_0x2da1['UwsnhC']=!![];}_0x181b59=_0x2da1['kMjrhR'](_0x181b59,_0x26252c);_0x2da1['PhhXZp'][_0x2e4303]=_0x181b59;}else{_0x181b59=_0x52cd24;}return _0x181b59;};let httpResult,httpReq,httpResp;let userCookie=($[_0x2da1('‮0','U0mI')]()?process[_0x2da1('‫1','Q4dL')]['lxby']:$[_0x2da1('‫2','@WVp')]('lxby'))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x2da1('‫3','kYu%'));machineId()[_0x2da1('‫4','TQ*]')](_0xebd65a=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x29d41e){this[_0x2da1('‮5','cK$P')]=++userIdx;this['name']=this[_0x2da1('‫6','*5Rm')];this[_0x2da1('‫7','(Wv#')]=![];this['canRead']=![];try{this[_0x2da1('‫8','Gmj)')]=$[_0x2da1('‮9','tH@O')](_0x29d41e);this[_0x2da1('‫a','RUHY')]=!![];}catch(_0x31252f){if(_0x2da1('‫b','!kUf')==='mHlES'){this[_0x2da1('‫c','TkOA')]=![];$[_0x2da1('‮d','g59(')](_0x2da1('‮e','039D')+this[_0x2da1('‫f','RUHY')]+']CK格式错误');}else{console[_0x2da1('‫10','&[NS')](method+_0x2da1('‫11','O*[v'));console['log'](JSON['stringify'](err));}}}async[_0x2da1('‫12','Ks*z')](){var _0x5e1527={'IpULv':function(_0x206dc2,_0x4ff72f,_0x3f3204){return _0x206dc2(_0x4ff72f,_0x3f3204);},'FPcmY':_0x2da1('‫13','b6(V'),'eMbJM':function(_0x4f5db4,_0x15d2e3){return _0x4f5db4==_0x15d2e3;},'ngFIJ':'2|0|4|3|1'};try{let _0x1d35db=_0x2da1('‮14','&[NS');let _0x2bea87=''+this['param'][_0x2da1('‮15','cK$P')];let _0x5ef4a3=_0x5e1527['IpULv'](populateUrlObject1,_0x1d35db,_0x2bea87);await _0x5e1527['IpULv'](httpRequest,_0x5e1527[_0x2da1('‫16','Nzm#')],_0x5ef4a3);let _0x330a5c=httpResult;if(!_0x330a5c)return;if(_0x5e1527[_0x2da1('‮17','Gmj)')](_0x330a5c['code'],0xc8)){var _0x3cd534=_0x5e1527[_0x2da1('‫18','d8S2')][_0x2da1('‫19','mZ$s')]('|'),_0x52532e=0x0;while(!![]){switch(_0x3cd534[_0x52532e++]){case'0':this[_0x2da1('‮1a','!kUf')]=_0x330a5c[_0x2da1('‮1b','tH@O')]['token'];continue;case'1':$['logAndNotify'](_0x2da1('‫1c','tH@O')+this['name']+_0x2da1('‮1d','fYiO'));continue;case'2':this[_0x2da1('‮1e','Nzm#')]=_0x330a5c['data']['paasToken'];continue;case'3':this[_0x2da1('‫1f','1XJd')]=!![];continue;case'4':this['valid']=!![];continue;}break;}}else{$[_0x2da1('‮20','!kUf')](_0x2da1('‮21','U)@4')+this[_0x2da1('‫22','sRBJ')]+_0x2da1('‮23','*5Rm'));}}catch(_0x5e82d4){}finally{return Promise[_0x2da1('‫24','(Wv#')](0x1);}}async[_0x2da1('‫25','2HR!')](){var _0x292681={'togHW':function(_0x9cf26b,_0x20b69b,_0x3d4bbd,_0x40ebde){return _0x9cf26b(_0x20b69b,_0x3d4bbd,_0x40ebde);},'bRQDp':function(_0x38a90e,_0x323a9d,_0x1e283e){return _0x38a90e(_0x323a9d,_0x1e283e);},'bUVBk':'get','mJRai':function(_0x3deb62,_0x48cf40){return _0x3deb62==_0x48cf40;},'monQY':_0x2da1('‫26','(Wv#')};try{let _0x453f8f=_0x2da1('‮27','(D6f');let _0x54d553='';let _0x53d168=''+this[_0x2da1('‫28','e5!f')];let _0xa02194=_0x292681[_0x2da1('‮29','1XJd')](populateUrlObject,_0x453f8f,_0x53d168,_0x54d553);await _0x292681[_0x2da1('‮2a','@WVp')](httpRequest,_0x292681['bUVBk'],_0xa02194);let _0x2ec36d=httpResult;if(!_0x2ec36d)return;if(_0x292681[_0x2da1('‮2b','TQ*]')](_0x2ec36d[_0x2da1('‫2c','kYu%')][_0x2da1('‮2d','039D')][0x0][_0x2da1('‫2e','np@F')],![])){await $[_0x2da1('‫2f','!kUf')](0x1388);await this['ShopList']();}else{$[_0x2da1('‮30','d8S2')](_0x2da1('‫31','w2o#')+this[_0x2da1('‫32','Gmj)')]+_0x2da1('‫33','b6(V'));}if(_0x292681[_0x2da1('‮34','soI1')](_0x2ec36d[_0x2da1('‫35','%pBr')]['integralTask'][0x1][_0x2da1('‫36','g59(')],![])){await this[_0x2da1('‫37','krVh')]();}else{if(_0x2da1('‮38','1XJd')!==_0x292681['monQY']){$[_0x2da1('‫39','w2o#')]('账号['+this[_0x2da1('‫3a','%pBr')]+_0x2da1('‮3b','cK$P'));}else{resolve();}}}catch(_0x93c989){}finally{return Promise[_0x2da1('‮3c','g59(')](0x1);}}async[_0x2da1('‫3d','*5Rm')](){var _0x5f1092={'vyiXM':_0x2da1('‫3e','O*[v'),'ATkWk':_0x2da1('‮3f','GN]p'),'LxMLh':function(_0x46ad6c,_0x4ddf42,_0x499f4a){return _0x46ad6c(_0x4ddf42,_0x499f4a);},'ZeCXc':_0x2da1('‮40','VQya'),'ZJJJS':function(_0x2426cc,_0x47b439){return _0x2426cc!==_0x47b439;},'UiZYR':_0x2da1('‮41','xBHE'),'JHTLD':_0x2da1('‫42','Q4dL'),'waVly':function(_0x1c3717,_0x1bf815){return _0x1c3717!==_0x1bf815;},'SCytD':function(_0x224ff3,_0x5dc29c){return _0x224ff3!==_0x5dc29c;},'Jkgjc':_0x2da1('‮43','[WC)'),'wBdYU':_0x2da1('‫44','fYiO')};try{let _0x20cb4b=_0x2da1('‮45','xBHE');let _0xe28588='';let _0x5cd691=''+this[_0x2da1('‮46','6vr3')];let _0x50d0bd=_0x5f1092['LxMLh'](populateUrlObject,_0x20cb4b,_0x5cd691);await httpRequest(_0x5f1092['ZeCXc'],_0x50d0bd);let _0x7bbd56=httpResult;if(!_0x7bbd56)return;if(_0x7bbd56[_0x2da1('‫47','mZ$s')]==0xc8){if(_0x5f1092[_0x2da1('‮48','&[NS')](_0x5f1092[_0x2da1('‮49','S3gA')],_0x5f1092['JHTLD'])){$['logAndNotify'](_0x2da1('‮4a','^iED')+this[_0x2da1('‮4b','Nq([')]+_0x2da1('‫4c','GN]p')+_0x7bbd56[_0x2da1('‮4d','iQET')]['coins']+'积分');}else{_0x50d0bd[_0x2da1('‮15','cK$P')]=_0xe28588;_0x50d0bd[_0x2da1('‫4e','mZ$s')][_0x5f1092[_0x2da1('‫4f','Q4dL')]]=_0x5f1092['ATkWk'];_0x50d0bd[_0x2da1('‫50','d8S2')][_0x2da1('‮51','&[NS')]=_0x50d0bd[_0x2da1('‮52','GN]p')]?_0x50d0bd[_0x2da1('‮53','1XJd')][_0x2da1('‫54','np@F')]:0x0;}}else{if(_0x5f1092['waVly']('vQeFz','vQeFz')){taskall[_0x2da1('‫55','8yM)')](user[_0x2da1('‮56','fYiO')]());}else{$['logAndNotify']('账号['+this[_0x2da1('‮57','U0mI')]+']签到任务已完成');}}}catch(_0x4be823){}finally{if(_0x5f1092[_0x2da1('‮58','np@F')](_0x5f1092[_0x2da1('‫59','^iED')],_0x5f1092[_0x2da1('‮5a','(D6f')])){return Promise[_0x2da1('‫5b','Gmj)')](0x1);}else{$[_0x2da1('‫5c','kYu%')]('账号['+this[_0x2da1('‫5d','O*[v')]+_0x2da1('‫5e','TQ*]'));}}}async[_0x2da1('‮5f','N$iR')](){var _0xcf18e8={'GHInN':_0x2da1('‮60','np@F'),'iNQta':function(_0x32ab6f,_0x40f709,_0x5f20f7,_0x582283,_0x41c93a){return _0x32ab6f(_0x40f709,_0x5f20f7,_0x582283,_0x41c93a);},'CZHIh':function(_0x366c94,_0x5c840c){return _0x366c94==_0x5c840c;},'AiXxK':function(_0xcd530f,_0x366645){return _0xcd530f!==_0x366645;},'EOiPS':_0x2da1('‫61','Q4dL')};try{let _0x4cd7c4='https://shop-pub-gateway.baiying.com.cn/api/goods/v1/getNearbyShopList';let _0x58a421='{\x22keywords\x22:\x22\x22,\x22page\x22:1,\x22size\x22:10,\x22terminal\x22:\x22wx\x22,\x22distanceOrderType\x22:1,\x22shopScoreOrderType\x22:\x22\x22,\x22latitude\x22:\x22\x22,\x22longitude\x22:\x22\x22}';let _0x9fe891=''+this['token'];let _0x2ffb36=_0xcf18e8['GHInN'];let _0x685821=_0xcf18e8['iNQta'](populateUrlObject,_0x4cd7c4,_0x9fe891,_0x2ffb36,_0x58a421);await httpRequest(_0x2da1('‫62','Nzm#'),_0x685821);let _0x4581d1=httpResult;if(!_0x4581d1)return;if(_0xcf18e8[_0x2da1('‫63','g59(')](_0x4581d1[_0x2da1('‮64','039D')],0xc8)){this[_0x2da1('‮65','[WC)')]=_0x4581d1['data'][0x1][_0x2da1('‫66','6vr3')];await $[_0x2da1('‮67','qQh6')](0x1388);await this[_0x2da1('‫68','krVh')]();}}catch(_0x6253e1){}finally{if(_0xcf18e8[_0x2da1('‮69','(Wv#')](_0x2da1('‮6a','GN]p'),_0xcf18e8[_0x2da1('‮6b','np@F')])){return Promise[_0x2da1('‮6c','RUHY')](0x1);}else{$[_0x2da1('‮6d','Nq([')](_0x2da1('‫6e','!kUf')+this[_0x2da1('‫6f','cK$P')]+_0x2da1('‮70','%pBr'));}}}async[_0x2da1('‮71','039D')](){var _0x1eaf03={'sBUBn':_0x2da1('‫72','b6(V'),'rTHxo':function(_0x5a8df0,_0x3c62eb,_0x49b1f0){return _0x5a8df0(_0x3c62eb,_0x49b1f0);},'FeJzU':_0x2da1('‫73','S3gA'),'yHYhx':function(_0x21a51c,_0x442a16){return _0x21a51c==_0x442a16;},'DdbTn':function(_0x484047,_0x418271){return _0x484047===_0x418271;},'JaYCa':'aWPXy','iUwrx':'HeCzg'};try{let _0x1738bf=_0x2da1('‮74','(D6f')+this['ruId'];let _0x27ffbf='';let _0x13fa9c=''+this[_0x2da1('‮75','O*[v')];let _0xf4dce4=_0x1eaf03[_0x2da1('‫76','039D')](populateUrlObject,_0x1738bf,_0x13fa9c);await _0x1eaf03[_0x2da1('‫77','krVh')](httpRequest,_0x1eaf03[_0x2da1('‫78','N*a#')],_0xf4dce4);let _0x531432=httpResult;if(!_0x531432)return;if(_0x1eaf03['yHYhx'](_0x531432[_0x2da1('‫79','[WC)')],0xc8)){if(_0x1eaf03[_0x2da1('‫7a','U0mI')](_0x1eaf03[_0x2da1('‮7b','[WC)')],_0x1eaf03[_0x2da1('‮7c','qQh6')])){console['log'](_0x1eaf03[_0x2da1('‮7d','w2o#')]);return;}else{$[_0x2da1('‮30','d8S2')](_0x2da1('‮7e','6vr3')+this['name']+']'+_0x531432['data']['msg']+'获得'+_0x531432[_0x2da1('‮7f','%pqo')][_0x2da1('‫80','np@F')]+'积分');await $['wait'](0x1388);await this[_0x2da1('‫81','d8S2')]();}}}catch(_0xb7500b){}finally{return Promise['resolve'](0x1);}}async['getGoodsList'](){var _0x4c4e87={'iFUHq':'keep-alive','UEYYZ':_0x2da1('‫82','w2o#'),'HSQuz':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20GLK-AL00\x20Build/HUAWEIGLK-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/86.0.4240.99\x20XWEB/4317\x20MMWEBSDK/20220805\x20Mobile\x20Safari/537.36\x20MMWEBID/9296\x20MicroMessenger/8.0.27.2220(0x28001B59)\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64\x20MiniProgramEnv/android','iXEZm':'content-type','ZJyKI':_0x2da1('‫83','d8S2'),'bStnb':'134','OdppZ':function(_0x99a4a0,_0x1fbfad,_0x3c425f){return _0x99a4a0(_0x1fbfad,_0x3c425f);},'wjHtw':_0x2da1('‫84','S3gA'),'MBnvg':function(_0x4217bc,_0x2a38d4){return _0x4217bc==_0x2a38d4;},'arVcx':function(_0x2f5ccc,_0x167537){return _0x2f5ccc<_0x167537;},'Sbybp':'RjRdc','qcXjh':function(_0x5281f9,_0x43a12b){return _0x5281f9!==_0x43a12b;},'jUyeA':_0x2da1('‫85','&[NS')};try{let _0x30386b=_0x2da1('‫86','qQh6');let _0x163221=_0x2da1('‮87','iQET');let _0x307f8e=''+this['token'];let _0x435bbb=_0x4c4e87[_0x2da1('‫88','w2o#')];let _0x4d9c37=populateUrlObject(_0x30386b,_0x307f8e,_0x435bbb,_0x163221);await _0x4c4e87[_0x2da1('‫89','Q4dL')](httpRequest,_0x4c4e87[_0x2da1('‮8a','np@F')],_0x4d9c37);let _0x2661c4=httpResult;if(!_0x2661c4)return;if(_0x4c4e87['MBnvg'](_0x2661c4[_0x2da1('‫8b','^iED')],0xc8)){for(let _0x88af9c=0x0;_0x4c4e87[_0x2da1('‮8c','@WVp')](_0x88af9c,0xa);_0x88af9c++){if(_0x4c4e87[_0x2da1('‮8d','kYu%')]!==_0x4c4e87[_0x2da1('‫8e','Ks*z')]){try{httpResult=JSON['parse'](resp[_0x2da1('‫8f','U)@4')]);}catch(_0x2bec91){httpResult=resp['body'];}}else{this[_0x2da1('‫90','U0mI')]=_0x2661c4[_0x2da1('‮91','*5Rm')][''+_0x88af9c][_0x2da1('‮92','e5!f')];await $['wait'](0x1388);await this['plusScore']();}}}}catch(_0x133739){}finally{if(_0x4c4e87[_0x2da1('‮93','krVh')](_0x2da1('‮94','TkOA'),_0x4c4e87[_0x2da1('‮95','Gmj)')])){let _0x342958=url['replace']('//','/')[_0x2da1('‫96','tH@O')]('/')[0x1];let _0x4807b7={'url':url,'headers':{'Host':_0x342958,'Connection':_0x4c4e87[_0x2da1('‮97','S3gA')],'token':ck,'Content-Length':ct,'content-type':_0x4c4e87[_0x2da1('‫98','soI1')],'Accept-Encoding':_0x2da1('‫99','cK$P'),'User-Agent':_0x4c4e87['HSQuz'],'User-Agent':defaultUA},'timeout':0x1388};if(body){_0x4807b7[_0x2da1('‫9a','!kUf')]=body;_0x4807b7[_0x2da1('‮9b','O*[v')][_0x4c4e87[_0x2da1('‮9c','1XJd')]]=_0x2da1('‫9d','hddS');_0x4807b7[_0x2da1('‮9e','xBHE')][_0x4c4e87['ZJyKI']]=_0x4807b7['body']?_0x4807b7['body'][_0x2da1('‫9f','tH@O')]:0x0;}return _0x4807b7;}else{return Promise[_0x2da1('‮a0','TkOA')](0x1);}}}async[_0x2da1('‮a1','g59(')](){var _0x1c4c7c={'qqfNa':function(_0x73e6ed,_0x3950c7){return _0x73e6ed==_0x3950c7;}};try{let _0xf5e21c=_0x2da1('‫a2','S3gA');let _0x3fe26f=_0x2da1('‫a3','&[NS')+this[_0x2da1('‫a4','GN]p')]+_0x2da1('‮a5','kYu%')+this[_0x2da1('‮a6','[WC)')]+'}';let _0x2b1d67=''+this['token'];let _0x5d81bc='53';let _0x10c860=populateUrlObject(_0xf5e21c,_0x2b1d67,_0x5d81bc,_0x3fe26f);await httpRequest(_0x2da1('‫62','Nzm#'),_0x10c860);let _0xfffc1f=httpResult;if(!_0xfffc1f)return;if(_0x1c4c7c[_0x2da1('‫a7','soI1')](_0xfffc1f['code'],0xc8)){$['logAndNotify'](_0x2da1('‫a8','cK$P')+this['name']+']第'+_0xfffc1f[_0x2da1('‫a9','e5!f')]['plusScore']['currScore']+_0x2da1('‮aa','np@F')+_0xfffc1f[_0x2da1('‫ab','cK$P')][_0x2da1('‫80','np@F')]['score']+'积分');}}catch(_0x54ed5b){}finally{return Promise[_0x2da1('‫ac','039D')](0x1);}}async[_0x2da1('‫ad','%pqo')](){var _0x1c0a3f={'Psdim':function(_0x4630a0,_0x28eb0b,_0x560e89){return _0x4630a0(_0x28eb0b,_0x560e89);},'RghIo':function(_0x241428,_0xf74ec7,_0x1f560d){return _0x241428(_0xf74ec7,_0x1f560d);},'mCGip':function(_0x1964a4,_0x595acd){return _0x1964a4!==_0x595acd;},'Aovbp':'ZtgiS','onKmE':_0x2da1('‫ae','sRBJ')};try{let _0x1b2abd=_0x2da1('‮af','e5!f');let _0x4141b4='';let _0x53ca0f=''+this['token'];let _0x344651=_0x1c0a3f[_0x2da1('‮b0','iQET')](populateUrlObject,_0x1b2abd,_0x53ca0f);await _0x1c0a3f[_0x2da1('‫b1','krVh')](httpRequest,_0x2da1('‮b2','qQh6'),_0x344651);let _0x6d75b6=httpResult;if(!_0x6d75b6)return;if(_0x6d75b6[_0x2da1('‫b3','N*a#')]==0xc8){$[_0x2da1('‮20','!kUf')](_0x2da1('‫b4','np@F')+this[_0x2da1('‫b5','krVh')]+']'+_0x6d75b6[_0x2da1('‮b6','&[NS')][_0x2da1('‫b7','LbuM')][_0x2da1('‫b8','VQya')]+_0x2da1('‮b9','%pBr')+_0x6d75b6['data']['coinsTatal']+'积分');}}catch(_0x482291){}finally{if(_0x1c0a3f[_0x2da1('‫ba','S3gA')](_0x1c0a3f[_0x2da1('‫bb','RUHY')],_0x1c0a3f[_0x2da1('‫bc','1XJd')])){return Promise['resolve'](0x1);}else{$[_0x2da1('‮bd','sRBJ')](_0x2da1('‫be','%pBr')+this['name']+']第'+result[_0x2da1('‮bf','VQya')]['plusScore'][_0x2da1('‮c0','039D')]+'次浏览\x20获得'+result[_0x2da1('‮c1','1XJd')]['plusScore']['score']+'积分');}}}}!(async()=>{var _0x2d8d0f={'aiqUW':function(_0x3a7157,_0x536b7a){return _0x3a7157!==_0x536b7a;},'rWQNC':_0x2da1('‫c2','RUHY'),'pllgk':function(_0x2a9cbf,_0x57bd98){return _0x2a9cbf>_0x57bd98;},'cIZbV':_0x2da1('‮c3','*5Rm')};if(_0x2d8d0f['aiqUW'](typeof $request,_0x2d8d0f[_0x2da1('‫c4','(Wv#')])){}else{if(!(await checkEnv()))return;$[_0x2da1('‫c5','2HR!')](_0x2da1('‮c6','TQ*]'));let _0x56e9fd=[];let _0xda64bd=userList['filter'](_0x2a137a=>_0x2a137a['ckValid']);if(_0xda64bd[_0x2da1('‫c7','TQ*]')]>0x0){$[_0x2da1('‮c8','[WC)')](_0x2da1('‫c9','b6(V'));_0x56e9fd=[];for(let _0x3eeead of _0xda64bd){_0x56e9fd[_0x2da1('‮ca','!kUf')](_0x3eeead[_0x2da1('‮cb','e5!f')]());}await Promise[_0x2da1('‫cc','N$iR')](_0x56e9fd);_0xda64bd=_0xda64bd[_0x2da1('‮cd','!kUf')](_0x1f477b=>_0x1f477b['valid']);if(_0x2d8d0f[_0x2da1('‮ce','TkOA')](_0xda64bd[_0x2da1('‮cf','[WC)')],0x0)){$['logAndNotify'](_0x2d8d0f[_0x2da1('‮d0','N$iR')]);_0x56e9fd=[];for(let _0x50e99c of _0xda64bd){_0x56e9fd['push'](_0x50e99c['dailyCheckIn']());await $[_0x2da1('‫2f','!kUf')](0xbb8);_0x56e9fd['push'](_0x50e99c[_0x2da1('‫d1','cK$P')]());}await Promise[_0x2da1('‮d2','krVh')](_0x56e9fd);$[_0x2da1('‮d3','xBHE')](_0x2da1('‫d4','*5Rm'));_0x56e9fd=[];for(let _0x487c16 of _0xda64bd[_0x2da1('‮d5','w2o#')](_0xb353d8=>_0xb353d8['canRead'])){_0x56e9fd['push'](_0x487c16[_0x2da1('‫d6','*5Rm')]());}await Promise['all'](_0x56e9fd);}}await $['showmsg']();}})()[_0x2da1('‮d7','2HR!')](_0x1753c8=>console[_0x2da1('‫d8','(D6f')](_0x1753c8))[_0x2da1('‫d9','b6(V')](()=>$['done']());async function checkEnv(){var _0xfa7162={'UsQqs':function(_0x34e764,_0x4ce5f3){return _0x34e764===_0x4ce5f3;},'eyZJK':_0x2da1('‮da','1XJd'),'ftvqW':function(_0x11a7dc,_0x28b369){return _0x11a7dc>_0x28b369;},'Cqqvb':'vpggY','DfVEB':_0x2da1('‮db','cK$P')};if(userCookie){let _0x40cc46=envSplitor[0x0];for(let _0x417b4a of envSplitor){if(_0xfa7162[_0x2da1('‮dc','%pqo')]('lTzxM',_0xfa7162[_0x2da1('‮dd','iQET')])){if(_0xfa7162[_0x2da1('‫de','TQ*]')](userCookie[_0x2da1('‫df','TQ*]')](_0x417b4a),-0x1)){_0x40cc46=_0x417b4a;break;}}else{if(userCookies)userList[_0x2da1('‫e0','VQya')](new UserInfo(userCookies));}}for(let _0x54c381 of userCookie[_0x2da1('‮e1','%pBr')](_0x40cc46)){if(_0x54c381)userList[_0x2da1('‫e2','e5!f')](new UserInfo(_0x54c381));}userCount=userList[_0x2da1('‫e3','2HR!')];}else{if(_0xfa7162[_0x2da1('‮e4','g59(')]!==_0x2da1('‮e5','039D')){console[_0x2da1('‫e6','[WC)')](_0xfa7162[_0x2da1('‫e7','LbuM')]);return;}else{return Promise[_0x2da1('‮e8','N*a#')](0x1);}}console[_0x2da1('‮e9','w2o#')](_0x2da1('‮ea','cK$P')+userCount+_0x2da1('‫eb','%pBr'));return!![];}function populateUrlObject(_0x523ebf,_0x3e5fd3,_0x1a3cb3,_0x4a04e5=''){var _0x33da3a={'mPgIA':_0x2da1('‮ec','Gmj)'),'JIbEw':_0x2da1('‫ed','np@F'),'IWdve':'gzip,compress,br,deflate','DVmLD':_0x2da1('‫ee','[WC)'),'YPviX':'content-type','vYoiJ':_0x2da1('‮ef','(D6f')};let _0x8fb8cc=_0x523ebf[_0x2da1('‫f0','N*a#')]('//','/')['split']('/')[0x1];let _0x12ff61={'url':_0x523ebf,'headers':{'Host':_0x8fb8cc,'Connection':_0x33da3a['mPgIA'],'token':_0x3e5fd3,'Content-Length':_0x1a3cb3,'content-type':_0x33da3a[_0x2da1('‮f1','6vr3')],'Accept-Encoding':_0x33da3a[_0x2da1('‫f2','soI1')],'User-Agent':_0x33da3a['DVmLD'],'User-Agent':defaultUA},'timeout':0x1388};if(_0x4a04e5){_0x12ff61['body']=_0x4a04e5;_0x12ff61['headers'][_0x33da3a['YPviX']]='application/json';_0x12ff61[_0x2da1('‮f3','039D')][_0x33da3a[_0x2da1('‫f4','krVh')]]=_0x12ff61['body']?_0x12ff61[_0x2da1('‫8f','U)@4')][_0x2da1('‮f5','*5Rm')]:0x0;}return _0x12ff61;}function populateUrlObject1(_0x31f323,_0x27feee=''){var _0x568a7c={'IqIWO':_0x2da1('‮f6','iQET'),'WpEkm':'Content-Type'};let _0x44969c=_0x31f323[_0x2da1('‫f7','mZ$s')]('//','/')['split']('/')[0x1];let _0x36f6ff={'url':_0x31f323,'headers':{'Host':_0x44969c,'content-type':_0x568a7c[_0x2da1('‫f8','krVh')],'Content-Length':'496'},'timeout':0x1388};if(_0x27feee){_0x36f6ff[_0x2da1('‮f9','*5Rm')]=_0x27feee;_0x36f6ff['headers'][_0x568a7c['WpEkm']]=_0x568a7c['IqIWO'];_0x36f6ff[_0x2da1('‫fa','Gmj)')]['Content-Length']=_0x36f6ff['body']?_0x36f6ff[_0x2da1('‮fb','d8S2')]['length']:0x0;}return _0x36f6ff;}async function httpRequest(_0x169016,_0x5f1ed6){var _0x4e6aa2={'SGouW':_0x2da1('‮fc','039D'),'MXbbK':function(_0x90944a,_0x8a3688){return _0x90944a!==_0x8a3688;},'kkCVO':_0x2da1('‮fd','w2o#'),'TlcRx':function(_0x508a8c,_0x33e5cc){return _0x508a8c!==_0x33e5cc;},'prjvj':_0x2da1('‮fe','[WC)'),'wzYvf':function(_0x2a9736,_0x534c6d){return _0x2a9736==_0x534c6d;},'KXxzY':function(_0xe21736,_0x2595a4){return _0xe21736!==_0x2595a4;},'RNrqy':'SZEly','KtcCk':function(_0xee5a05,_0x3ce0c3){return _0xee5a05!==_0x3ce0c3;},'YFRzz':_0x2da1('‫ff','d8S2')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x46d3cb=>{$[_0x2da1('‫100','b6(V')](_0x169016,_0x5f1ed6,async(_0x32d50d,_0x3c2f94,_0x21d21e)=>{var _0x507b61={'avRoJ':_0x4e6aa2[_0x2da1('‮101','xBHE')]};if(_0x4e6aa2[_0x2da1('‫102','RUHY')](_0x4e6aa2[_0x2da1('‮103','Gmj)')],_0x2da1('‫104','TkOA'))){$[_0x2da1('‫105','cK$P')](_0x2da1('‮106','LbuM')+this[_0x2da1('‫107','LbuM')]+']'+result[_0x2da1('‫108','2HR!')][_0x2da1('‫109','hddS')]['name']+_0x2da1('‫10a','w2o#')+result[_0x2da1('‫108','2HR!')]['coinsTatal']+'积分');}else{try{if(_0x4e6aa2[_0x2da1('‮10b','VQya')](_0x4e6aa2[_0x2da1('‫10c','^iED')],_0x2da1('‮10d','b6(V'))){$['logAndNotify'](_0x2da1('‫10e','S3gA')+this[_0x2da1('‫10f','N$iR')]+']店铺浏览任务已完成');}else{httpReq=_0x3c2f94;httpResp=_0x21d21e;if(_0x32d50d){console['log'](_0x169016+'请求失败');console[_0x2da1('‮110','@WVp')](JSON['stringify'](_0x32d50d));}else{if(_0x21d21e['body']){if(_0x4e6aa2['wzYvf'](typeof _0x21d21e[_0x2da1('‫111','b6(V')],'object')){httpResult=_0x21d21e['body'];}else{try{if(_0x4e6aa2['KXxzY'](_0x2da1('‫112','VQya'),_0x4e6aa2['RNrqy'])){httpResult=JSON[_0x2da1('‫113','b6(V')](_0x21d21e[_0x2da1('‫9a','!kUf')]);}else{return Promise['resolve'](0x1);}}catch(_0x235d4b){httpResult=_0x21d21e['body'];}}}}}}catch(_0xcd856){console['log'](_0xcd856);}finally{if(_0x4e6aa2[_0x2da1('‮114','w2o#')](_0x4e6aa2[_0x2da1('‮115','O*[v')],_0x4e6aa2[_0x2da1('‮116','hddS')])){var _0x216dc3=_0x507b61[_0x2da1('‫117','cK$P')][_0x2da1('‫118','LbuM')]('|'),_0xab2126=0x0;while(!![]){switch(_0x216dc3[_0xab2126++]){case'0':this[_0x2da1('‮119','np@F')]=![];continue;case'1':this[_0x2da1('‫11a','Nzm#')]=![];continue;case'2':this['index']=++userIdx;continue;case'3':try{this['param']=$[_0x2da1('‮11b','[WC)')](str);this[_0x2da1('‮11c','6vr3')]=!![];}catch(_0x4b927e){this['ckValid']=![];$[_0x2da1('‮11d','GN]p')](_0x2da1('‮21','U)@4')+this['index']+_0x2da1('‫11e','GN]p'));}continue;case'4':this[_0x2da1('‮11f','np@F')]=this['index'];continue;}break;}}else{_0x46d3cb();}}}});});};_0xodE='jsjiami.com.v6';
////////////////////////////////////////////////////////////////////
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
            for(let item of str.split('#')) {
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