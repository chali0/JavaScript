/*
微信小程序: 成语闯关赚钱版

变量：捉包https://apimallwm.exijiu.com域名headars里的Authorization 多账号换行隔开
库存监控: 可自定义监控类型对应变量后面连接需要监控的类型id 具体看样本
例如: 数码[2] 家电[20] 厨房[10]…… 更多可以自己抓包提取url里的type_id

格式样本：export xjxcx="Authorization=xxxxx&typeid=2"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("习酒会员俱乐部");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x18001729) NetType/WIFI Language/zh_CN' //换成自己的UA


var _0xodZ='jsjiami.com.v6',_0xodZ_=['‮_0xodZ'],_0x5ec0=[_0xodZ,'TksoUm/CiCU=','wpcew70xwqPDn8KVeVRtaMK2','wr/DucKXw7vCoDrCp8Kfa1XCpQXCiUHCsyvCqMKCfsK8w6PDhsK3woXCgHDDlBjDt1wOIEc=','w77DtcKGw5TDrw==','dOaeneaKjOWKqgfCicOs6K6b6Zis6K+X6IeF5p2L6K6c5puN','wpFNw7rDrHs=','I8K/w5t7CcONHA==','TMO9JcKHw5Y=','w6fDpDt1wqI=','wrPDtVZmSQ==','IsKNwr0iw5I=','woURw4NE','w7fDgcOrW1zCr08=','ExHDs3wI','wozCoS3Cg8OK','UXHDpD1X','RTXDgsK/','wp0Bw5FIG8OIw4g=','V8O1XHvDog==','w6lIVl0oGGLDhsKgwpMUwpHDr8O4','w4hIXFA=','wrIGS8K8e8OG','DlVAwp5Y','5Li76Law5Y+T','wrJQw5LDpGQhYk3DhwXDnsKMU8KfUh/DiE0XF3XChAF+w5QPwpdkwrzCs8K0w5RD','w4xow5TCg2U=','w4ZwGMK1NsK4wpI=','wqLCo3rDqA==','A8K4wo4Vw57DtcOQ','VsKFw53CgWh9w70=','w7pfbU0o','w5zDgnxB','wr/DuSbCqA==','w5hwBcK9LsKm','EMKKXsK3Eg==','wpI9w6AqwpA=','wqYqw5ldJg==','w7nDghduwog=','O8K0wrohw7Q=','KMOPXMOdKw==','wqvDmkRaRg==','KynCshJs','w70lw6rChA==','wpzDjV1Xag==','6K+J5rKi5aaN6LeA','BFBm','asKSAVfChgPCtX8e','w6wvw6DCmQ==','UC15A8OR','eRF4KcOR','BsOFXsOVDsOEwq3ClBHDpcKcwqw=','6LeT5Y6Tw6s=','wq7CrXPDtA==','wrnDtzbCsA==','wooVfwA3dMOCw4R5','wq/CgMKABA==','w73njKbmnYs=','cMKIB1vCjxbCvW0OwrzDtQ==','Z8O3SFjDvA==','w6Nlw5DClmpSEw==','w7zDlMKdw7jDqA==','wpcLw5RV','McKvw6xKE08=','DiPCrCU=','CcO9wpHDucKt','wqTCtWfDiGs=','wooZOyPCmA==','w6NWw5LClUg=','E8OEwpU=','TOiuu+agiOaeueWNouWvmeaJvuWdnQMb5p6R5ZqD5LqxVMOUw6hANsKlHcKrwoPDqG7lp7HojJzljILlj5DlraE=','O2N0KBTCq8O3w4jDqcO4W1w=','6LaY5Y2aQw==','w5jorZPmoZjmn5Hlj6jphJbplLPorqYbw67lpajml6Y=','wqfCjsKT','w6hfUzbCnQ==','w4bCmEgECA==','wpkDw5Z2HQ==','w6DCiGMoEg==','TcKUw47Dl2d8w6Es','RkoK','w6lhfjvClQ==','Slcyw5/Cv00=','w7wUAA==','JMK+w5t7XMOvGw9qwqzDr8KcAHLCsw==','wp9pDMOEEA==','w517D8K/Ig==','w79qaz0=','wrfDp8KDw7LCsQ==','wrbCrXLDuEs=','wq1/w6nCp0/DtMKt','w5IAHzAw','wr0Ic8K6Y8OHw64=','GlpywqROTSk=','6Laj5Y2Tw4M=','wrk/V+ahl+W9p+mUg+itjA==','NMK1YcKh','w7d6BcKuP8KgwoM5GMO9eRdqAQ==','NsK5w7JfAwFTBMO3w5vDpH8iCcO6LcO7w7LDg14hwr9Hw7bClRzCmsOuw4nCrsKQw6MhwrzCtcK1W8OHw4nDrw==','WMKTB1bChxbCtWMGwqfDsizCnQ==','w4LDiMOSUkg=','w7EfFxkaPQk=','wqzChMKA','CT7Cug==','esKWwp5ww7nCgMObwopjGSBe','w65lw5PCoQ==','wrPDvyHCusOTXsO4RcKk','w6nDgcOuUVzChkQoGcO5','woAdaAo=','w6nDuDZlwp/DnFIWUnck','w7obGC8aLh4=','6Le75Y2hGQ==','w7cbGxg=','w53oraHmooLmn6XljKDphaHplKroro1UauWlu+aWgw==','VT/DlcKpdMOPwpI=','wrzDpjLCvcOlU8O4XMKoETPDoMOtJcK0w73Do8K7wrzDuMOCw7vDncOQIxXClcOsPwbDnMK8Uw==','dcOsd2vDiw==','w4xVV0RwG3/ChcKFwoYIwpnDvMOiOkBuw48YbHnDnQ==','wqrDr3ZzeA==','UMOpDcK/w6A=','PF5+PzE=','dMKWwp1I','wp/CqMK4J1k=','wp3Cp8KTFWg=','P2lyDR/CvcOK','w7sVEgQ=','V8O5PcKew5ERwofDgn5Iw7DCosKew6jChcO8woLCmE4AXlXDlsO9bsK4D8KOw4ZFw5jCnBfDuBdkWMOpecOuw7PCiFbCvEvCslQ=','w7XDhcOqVV0=','OMOpwpfDosKnXVNMJCkNw65T','woNPw6HCpFI=','w74vw7fClA==','w7dEwr1vPXXCugQdbMO4wrQ=','w6jDl8O/','w7dlw5fCsA==','MsKkw7Vb','DwNmwpUAA0E=','wpXDsEZU','wqlIw4HCvmE=','JSbDlw==','M0t1Czc=','w5zDrcKRw6LDlMKkw7ode8KVQR/DosOOw4TDlFJoUyTDs8K5O8KZworDpcKowpLCl8K5wqY+Sk3Dvno6ZRZSw4cLwpNxKjvDq8OswobChhTDpQ==','wqnDrzLCtMOlVA==','w4Fxw4rCrGBBHgNBIsO2wqPCiQ==','w7luZzzCiEs4','ZcKJwrNIw5s=','PQ7CiRZg','JsK+w5hfH8OmNAN2wqzDp8KA','6LSB5Y6tw70=','DsOLTcO1','I2RmBBjCocOYw47DscOOSUwswoAc','HcO9wpfDqw==','wrdBw5bDqQ==','NMK1c8KrI8O0NcOo','wp7CvjjCmg==','wpwKw5ZD','RcKpwoNWw6E=','LXfCi8OrNcKUw5omcMKjwprDmsO+L8Kww6jkuKDliK7lvLflpK4aD8OKRGlMLFYXwpXCjsKzw7PCkcKI','DMOfwpDDjcKY','woAnw4NrLg==','w6Ztw5LCsGpB','w6xhw5DCo3tb','wrHDuSXCkMOiVMOXR8K1FzvCtg==','w4QzwqrDmAfCuMOkwolbAMK0wr3DlWXDrsK05qOK5pyt5Y+C6Ye0w4HChjhVwofCrUbCpcOxY3rDswbDsWM=','wp/CoSrCncO1','w4gJHDgQ','WDtnG8O7wpjDu8OPJE7ChAM=','VsOjLcKLw5o=','wq4WVsKz','TjTDgMKp','w7gWGg==','wrgKScKvasOc','wq/DnHpaSw==','UsKFw5LCgnln','T0sbw7HCtUzDsD0DGwl6','LCpGwo8f','O8Kya8K6IcO0','w7JqaArCiFgv','TcKJw5vCiw==','ISLDl2kl','wrvDvyzCsMOgXMOg','w5PChn89GsO3wpTDkC/DuCzDqsO2w5c=','wpUEw6ctwqnDg8KILmFgccK8wpw=','wrEgw7UywrM=','wo/ColnDnko=','ecOkXEHDrA==','LMOtSsOhOQ==','w6FFdxbCqw==','NsKow6dLFUkP','RnoSUEQ=','w4pUw5/CkHw=','D1p1','IMKGw7paIA==','wocTeA4=','w7YBw6HCo8K6','w5HDiMKDw6XDkg==','wqgKVQ==','SEc2WDI=','CsOewp/Dvw==','w51GUV0=','w4zDiGtXw4TDqMOZ','wr7DuSbCtA==','UsOJCsKfw7s=','HcOYwpbDvw==','w6PDuSZl','McK0YMKPKsOiGsOrKkPDnig=','w613w5k=','Oeiskeais+afm+WOieWuouaLiuWcsTPClOaeoeWYq+S5icKmwoZFwqhxYzc4w7nDssKz5aWL6I6+5Y+Q5Y6c5ayo','wr3DpsKDw7I=','w7ZKw6/CsVk=','e8KJF0c=','w5nDqsKC','wqDor7PliYHlp57lpIvkvYznlZ8WUumGm+ihmueNo+WhpOmCvuaIuuisk+iAu+exsuS/lOiDo+iln+mZjQ==','ZApm','upVjUsXzjiaSlmtik.clqogbm.v6P=='];if(function(_0x3f8999,_0x1258d4,_0xb6280){function _0x756847(_0x10cb14,_0x4a2656,_0x15c2bb,_0x5c23ed,_0x10b96b,_0x1e17b4){_0x4a2656=_0x4a2656>>0x8,_0x10b96b='po';var _0x2f3bf9='shift',_0x4dd963='push',_0x1e17b4='‮';if(_0x4a2656<_0x10cb14){while(--_0x10cb14){_0x5c23ed=_0x3f8999[_0x2f3bf9]();if(_0x4a2656===_0x10cb14&&_0x1e17b4==='‮'&&_0x1e17b4['length']===0x1){_0x4a2656=_0x5c23ed,_0x15c2bb=_0x3f8999[_0x10b96b+'p']();}else if(_0x4a2656&&_0x15c2bb['replace'](/[upVUXzSltklqgbP=]/g,'')===_0x4a2656){_0x3f8999[_0x4dd963](_0x5c23ed);}}_0x3f8999[_0x4dd963](_0x3f8999[_0x2f3bf9]());}return 0x11217c;};return _0x756847(++_0x1258d4,_0xb6280)>>_0x1258d4^_0xb6280;}(_0x5ec0,0x123,0x12300),_0x5ec0){_0xodZ_=_0x5ec0['length']^0x123;};function _0x551f(_0x696643,_0x5b7d0e){_0x696643=~~'0x'['concat'](_0x696643['slice'](0x1));var _0x28e4fc=_0x5ec0[_0x696643];if(_0x551f['JrPHCh']===undefined){(function(){var _0x2212d9=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5ca2d1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2212d9['atob']||(_0x2212d9['atob']=function(_0x307c4f){var _0x55eba5=String(_0x307c4f)['replace'](/=+$/,'');for(var _0x9a5a0f=0x0,_0x2921b1,_0x9f74b1,_0x11c0b0=0x0,_0x4f5592='';_0x9f74b1=_0x55eba5['charAt'](_0x11c0b0++);~_0x9f74b1&&(_0x2921b1=_0x9a5a0f%0x4?_0x2921b1*0x40+_0x9f74b1:_0x9f74b1,_0x9a5a0f++%0x4)?_0x4f5592+=String['fromCharCode'](0xff&_0x2921b1>>(-0x2*_0x9a5a0f&0x6)):0x0){_0x9f74b1=_0x5ca2d1['indexOf'](_0x9f74b1);}return _0x4f5592;});}());function _0x28b501(_0xd3241d,_0x5b7d0e){var _0x4e11c7=[],_0x1b995c=0x0,_0x230cff,_0x41e506='',_0x25cf5a='';_0xd3241d=atob(_0xd3241d);for(var _0x3f3c60=0x0,_0x3f53b2=_0xd3241d['length'];_0x3f3c60<_0x3f53b2;_0x3f3c60++){_0x25cf5a+='%'+('00'+_0xd3241d['charCodeAt'](_0x3f3c60)['toString'](0x10))['slice'](-0x2);}_0xd3241d=decodeURIComponent(_0x25cf5a);for(var _0x3e4c94=0x0;_0x3e4c94<0x100;_0x3e4c94++){_0x4e11c7[_0x3e4c94]=_0x3e4c94;}for(_0x3e4c94=0x0;_0x3e4c94<0x100;_0x3e4c94++){_0x1b995c=(_0x1b995c+_0x4e11c7[_0x3e4c94]+_0x5b7d0e['charCodeAt'](_0x3e4c94%_0x5b7d0e['length']))%0x100;_0x230cff=_0x4e11c7[_0x3e4c94];_0x4e11c7[_0x3e4c94]=_0x4e11c7[_0x1b995c];_0x4e11c7[_0x1b995c]=_0x230cff;}_0x3e4c94=0x0;_0x1b995c=0x0;for(var _0x18be1c=0x0;_0x18be1c<_0xd3241d['length'];_0x18be1c++){_0x3e4c94=(_0x3e4c94+0x1)%0x100;_0x1b995c=(_0x1b995c+_0x4e11c7[_0x3e4c94])%0x100;_0x230cff=_0x4e11c7[_0x3e4c94];_0x4e11c7[_0x3e4c94]=_0x4e11c7[_0x1b995c];_0x4e11c7[_0x1b995c]=_0x230cff;_0x41e506+=String['fromCharCode'](_0xd3241d['charCodeAt'](_0x18be1c)^_0x4e11c7[(_0x4e11c7[_0x3e4c94]+_0x4e11c7[_0x1b995c])%0x100]);}return _0x41e506;}_0x551f['oGdSZw']=_0x28b501;_0x551f['DqzXnx']={};_0x551f['JrPHCh']=!![];}var _0x4e1e03=_0x551f['DqzXnx'][_0x696643];if(_0x4e1e03===undefined){if(_0x551f['sTJeyI']===undefined){_0x551f['sTJeyI']=!![];}_0x28e4fc=_0x551f['oGdSZw'](_0x28e4fc,_0x5b7d0e);_0x551f['DqzXnx'][_0x696643]=_0x28e4fc;}else{_0x28e4fc=_0x4e1e03;}return _0x28e4fc;};let httpResult,httpReq,httpResp;let userCookie=($['isNode']()?process[_0x551f('‮0','iN0Y')][_0x551f('‫1','j4l&')]:$['getdata']('xjxcx'))||'';let userCGkey=($[_0x551f('‮2','iN0Y')]()?process[_0x551f('‫3','vmO(')]['CGkey']:$['getdata']('CGkey'))||'';let userList=[];let num=0x0;let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x551f('‮4','uXWm'));machineId()['then'](_0x40737b=>{});let uuid=machineIdSync();class UserInfo{constructor(_0xe11205){var _0x612aa={'OwZqM':function(_0x39e6ae,_0x197937){return _0x39e6ae!==_0x197937;},'KziMO':_0x551f('‫5','We19'),'KLBTG':'VINig'};this[_0x551f('‫6','wqqi')]=++userIdx;this[_0x551f('‫7','j4l&')]=this[_0x551f('‫8','kqDY')];this[_0x551f('‫9','#yhT')]=![];this[_0x551f('‫a','Yqh9')]=![];try{if(_0x612aa['OwZqM'](_0x612aa[_0x551f('‮b','vmO(')],_0x612aa['KLBTG'])){this['param']=$['str2json'](_0xe11205);this[_0x551f('‮c','Shj[')]=!![];}else{return Promise[_0x551f('‫d','axNv')](0x1);}}catch(_0x344a2b){this['ckValid']=![];$['logAndNotify'](_0x551f('‫e','hrkk')+this['index']+_0x551f('‮f','5jik'));}}async[_0x551f('‫10','wyG&')](){var _0x37b356={'GlJfx':function(_0x47b27c,_0x1d9f8d,_0x4b6187,_0x393636){return _0x47b27c(_0x1d9f8d,_0x4b6187,_0x393636);},'FAFMu':_0x551f('‮11','wqqi'),'NmUvi':function(_0x30c1b6,_0xe64c48,_0x3d30ca){return _0x30c1b6(_0xe64c48,_0x3d30ca);}};try{let _0x240ef3=_0x551f('‮12','XY7Q');let _0x37162f='';let _0x433cb0=''+this['param'][_0x551f('‫13','i4Ua')];let _0x14d753=_0x37b356[_0x551f('‮14','hrkk')](populateUrlObject,_0x240ef3,_0x433cb0,_0x37162f);delete _0x14d753[_0x551f('‮15','vmO(')][_0x37b356['FAFMu']];await _0x37b356['NmUvi'](httpRequest,_0x551f('‮16','dA$X'),_0x14d753);let _0x4368f0=httpResult;if(!_0x4368f0)return;if(_0x4368f0[_0x551f('‫17','%*RL')]==0x0){$[_0x551f('‫18','ob$8')]('账号['+this[_0x551f('‮19','D(PL')]+']'+_0x4368f0['data'][_0x551f('‫1a','@mdI')]+'\x20'+_0x4368f0['data'][_0x551f('‫1b','hrkk')]+'\x20现有'+_0x4368f0[_0x551f('‫1c','5jik')][_0x551f('‫1d','Z4o[')]+'积分');this['valid']=!![];this[_0x551f('‮1e','vmO(')]=!![];}else{$['logAndNotify'](_0x551f('‫1f','@mdI')+this[_0x551f('‮20','vmO(')]+_0x551f('‫21','Z4o['));}}catch(_0x3fa3bc){}finally{return Promise[_0x551f('‫22','2V@M')](0x1);}}async['sign'](){var _0xd7438f={'TILBr':'Content-Type','VFgpC':_0x551f('‫23','@mdI'),'qXbBT':'Content-Length','SvCSy':function(_0x559201,_0x279273){return _0x559201===_0x279273;},'odDQB':'fRxcI','kRmVK':_0x551f('‫24','NIjf'),'JgQAy':_0x551f('‮25',']elK'),'MQfQx':function(_0x588941,_0x5e2e23,_0x60b176,_0x35ebde){return _0x588941(_0x5e2e23,_0x60b176,_0x35ebde);},'ZVmub':function(_0x43c470,_0xa444bc){return _0x43c470<_0xa444bc;}};try{if(_0xd7438f[_0x551f('‫26','MyIE')](_0xd7438f[_0x551f('‫27','yo7n')],_0xd7438f[_0x551f('‮28','ykCz')])){urlObject[_0x551f('‫29','ob$8')]=body;urlObject['headers'][_0xd7438f[_0x551f('‫2a','dA$X')]]=_0xd7438f[_0x551f('‫2b','dA$X')];urlObject[_0x551f('‫2c','ykCz')][_0xd7438f['qXbBT']]=urlObject[_0x551f('‮2d','vmO(')]?urlObject['body']['length']:0x0;}else{let _0x4120f4=_0x551f('‮2e','yo7n');let _0x453e0d=_0xd7438f['JgQAy'];let _0x2fad3a=''+this[_0x551f('‮2f','hrkk')][_0x551f('‫30','D0H9')];let _0x1153a3=_0xd7438f[_0x551f('‮31','Yqh9')](populateUrlObject,_0x4120f4,_0x2fad3a,_0x453e0d);await httpRequest(_0x551f('‮32','DQXm'),_0x1153a3);let _0x274df9=httpResult;if(!_0x274df9)return;$[_0x551f('‮33','EV24')]('账号['+this['name']+']'+_0x274df9[_0x551f('‮34','hrkk')]);for(let _0x37b42c=0x0;_0xd7438f['ZVmub'](_0x37b42c,0x14);_0x37b42c++){await $[_0x551f('‮35','D(PL')](0xbb8);await this[_0x551f('‮36','XY7Q')]();}}}catch(_0x2a04da){}finally{return Promise[_0x551f('‫37','oNqu')](0x1);}}async[_0x551f('‮38','MyIE')](){var _0x27c510={'dGfbM':function(_0x42e3ef,_0x228c2e){return _0x42e3ef===_0x228c2e;},'Ohwcx':_0x551f('‫39','Yqh9'),'YEmOb':function(_0x348b0e,_0x755199,_0x53e343,_0x8f14ff){return _0x348b0e(_0x755199,_0x53e343,_0x8f14ff);},'spJyL':function(_0x4877d1,_0x10722f,_0x30ece8){return _0x4877d1(_0x10722f,_0x30ece8);},'QBAJc':_0x551f('‮3a','DN)P')};try{if(_0x27c510[_0x551f('‫3b','ykCz')](_0x27c510['Ohwcx'],_0x27c510['Ohwcx'])){let _0x2f8a97=_0x551f('‫3c','A]i[')+this['param'][_0x551f('‫3d','@mdI')];let _0x7f3e10='';let _0x2d51e0=''+this['param'][_0x551f('‮3e','D(PL')];let _0x43897d=_0x27c510['YEmOb'](populateUrlObject,_0x2f8a97,_0x2d51e0,_0x7f3e10);delete _0x43897d[_0x551f('‫3f','j4l&')]['Content-Length'];await _0x27c510[_0x551f('‮40','ob$8')](httpRequest,_0x27c510[_0x551f('‫41','%*RL')],_0x43897d);let _0x13c9fd=httpResult;if(!_0x13c9fd)return;$[_0x551f('‫42','uXWm')](_0x551f('‮43','2V@M')+this['name']+']'+_0x13c9fd[_0x551f('‮44','A#xf')][num][_0x551f('‮45','ykCz')]+'\x20库存'+_0x13c9fd[_0x551f('‮46','D0H9')][num]['inventory_num']+'\x20需要'+_0x13c9fd[_0x551f('‮47','ATss')][num][_0x551f('‮48','wyG&')]+'积分');num++;}else{taskall[_0x551f('‮49','O8N@')](user[_0x551f('‮4a','njQr')]());}}catch(_0x21c7d3){}finally{return Promise['resolve'](0x1);}}}!(async()=>{var _0x432616={'sWyYu':'undefined','uCsGP':function(_0xaa31ea){return _0xaa31ea();},'WNsSI':function(_0x103c3b,_0x29018d){return _0x103c3b>_0x29018d;},'qjaoG':function(_0x3917a2,_0xe1b76c){return _0x3917a2!==_0xe1b76c;},'QsjEo':_0x551f('‫4b','ob$8'),'VEOzJ':function(_0x3f777b,_0x8e0b5d){return _0x3f777b>_0x8e0b5d;},'QLSus':_0x551f('‫4c','2V@M')};if(typeof $request!==_0x432616['sWyYu']){}else{await _0x432616[_0x551f('‮4d','D0H9')](km);if(!(await _0x432616[_0x551f('‫4e','njQr')](checkEnv)))return;let _0x38a46a=[];let _0x5b7c2e=userList[_0x551f('‮4f','D(PL')](_0x1cc61a=>_0x1cc61a['ckValid']);if(_0x432616['WNsSI'](_0x5b7c2e[_0x551f('‫50','D(PL')],0x0)){$[_0x551f('‮51','@mdI')](_0x551f('‮52','Yqh9'));_0x38a46a=[];for(let _0x1f558e of _0x5b7c2e){if(_0x432616[_0x551f('‫53','O8N@')](_0x432616['QsjEo'],_0x432616[_0x551f('‫54','vmO(')])){this['ckValid']=![];$[_0x551f('‮55','46]1')]('账号['+this[_0x551f('‫56','yo7n')]+']CK格式错误');}else{_0x38a46a[_0x551f('‫57','Shj[')](_0x1f558e[_0x551f('‮58','2V@M')]());}}await Promise[_0x551f('‮59','vmO(')](_0x38a46a);_0x5b7c2e=_0x5b7c2e[_0x551f('‫5a','Shj[')](_0x5a2550=>_0x5a2550['valid']);if(_0x432616[_0x551f('‫5b','MyIE')](_0x5b7c2e[_0x551f('‮5c','r^HG')],0x0)){$[_0x551f('‮5d','iN0Y')](_0x432616[_0x551f('‫5e','oNqu')]);_0x38a46a=[];for(let _0x45e2df of _0x5b7c2e[_0x551f('‫5f','wyG&')](_0xdcde9c=>_0xdcde9c[_0x551f('‫60','j4l&')])){_0x38a46a['push'](_0x45e2df[_0x551f('‮61','r^HG')]());}await Promise['all'](_0x38a46a);}}await $['showmsg']();}})()[_0x551f('‫62','DN)P')](_0x2de918=>console['log'](_0x2de918))[_0x551f('‮63','@mdI')](()=>$['done']());async function km(){var _0x3587ab={'Cibiv':function(_0x38fb6b,_0x33357c){return _0x38fb6b===_0x33357c;},'FGsuY':'hrxpt','pNqNF':_0x551f('‮64','HsLB'),'zTImG':_0x551f('‫65','3)Xs'),'JPaTs':function(_0x4c9e2e,_0x5bc0ab,_0x4b0d12){return _0x4c9e2e(_0x5bc0ab,_0x4b0d12);},'jWEDQ':function(_0x58ba95,_0x5e443a){return _0x58ba95==_0x5e443a;},'xAeCT':_0x551f('‮66','3)Xs'),'mDCqY':function(_0x2486de,_0x2a2ce9){return _0x2486de==_0x2a2ce9;},'vNQuV':function(_0x5c5d2f,_0x2e498e){return _0x5c5d2f!==_0x2e498e;},'gNhSL':_0x551f('‮67','#yhT')};try{if(_0x3587ab['Cibiv'](_0x551f('‮68','NIjf'),_0x3587ab[_0x551f('‫69','A#xf')])){let _0x21d347='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+'&uuid='+uuid;let _0x644abf='';let _0xe3643b=populateUrlObject(_0x21d347,_0x644abf);delete _0xe3643b['headers'][_0x3587ab[_0x551f('‮6a','j4l&')]];delete _0xe3643b[_0x551f('‮6b','XY7Q')][_0x3587ab[_0x551f('‫6c','bIgr')]];await _0x3587ab[_0x551f('‮6d','D(PL')](httpRequest,_0x551f('‫6e','axNv'),_0xe3643b);let _0x4f8d13=httpResult;if(_0x3587ab[_0x551f('‫6f','uXWm')](_0x4f8d13[_0x551f('‮70','5jik')],0xc8)){if(_0x3587ab['Cibiv'](_0x3587ab[_0x551f('‫71','DQXm')],_0x551f('‮72','A]i['))){this['time']=_0x4f8d13['msg'][_0x551f('‮73','Shj[')];this[_0x551f('‮74','bIgr')]=timestampToTime(this[_0x551f('‫75','!pEX')]);$[_0x551f('‮33','EV24')]('卡密验证成功\x20有效期至'+this['time1']);await $[_0x551f('‮76',']elK')](0xbb8);}else{return Promise[_0x551f('‫77','29Oh')](0x1);}}if(_0x4f8d13[_0x551f('‫78','@mdI')]==0x95||_0x3587ab[_0x551f('‮79','yo7n')](_0x4f8d13[_0x551f('‮7a','!pEX')],0x94)||_0x4f8d13[_0x551f('‮7b','Z4o[')]==0x70){$[_0x551f('‮7c','wyG&')](_0x4f8d13[_0x551f('‫7d','D(PL')]+_0x551f('‫7e','i4Ua'));}if(_0x4f8d13[_0x551f('‮7f','kqDY')]==0x192){if(_0x3587ab[_0x551f('‫80','D(PL')](_0x3587ab['gNhSL'],_0x3587ab['gNhSL'])){httpResult=resp[_0x551f('‮81','i4Ua')];}else{$[_0x551f('‮7c','wyG&')](_0x4f8d13[_0x551f('‮82','A]i[')]+_0x551f('‮83','D(PL'));}}}else{console[_0x551f('‫84','#5jt')](e);}}catch(_0xfaa239){}finally{return Promise[_0x551f('‫85','bIgr')](0x1);}}async function checkEnv(){var _0x40a789={'FcxJz':_0x551f('‮86','3)Xs'),'IRnsp':_0x551f('‫87','kqDY'),'BmXdv':function(_0x11cbcc,_0x226cbe){return _0x11cbcc>_0x226cbe;},'gryuZ':function(_0xa4d116,_0x2ff4e4){return _0xa4d116===_0x2ff4e4;},'IPRSi':_0x551f('‮88','A]i['),'QzzOG':function(_0x1ed980,_0x5f1279){return _0x1ed980===_0x5f1279;},'bjfqx':'snRox','fjAUz':_0x551f('‮89','!pEX')};if(userCookie){let _0x2eeae2=envSplitor[0x0];for(let _0x3b8052 of envSplitor){if(_0x40a789[_0x551f('‫8a','ATss')](userCookie[_0x551f('‫8b','uXWm')](_0x3b8052),-0x1)){_0x2eeae2=_0x3b8052;break;}}for(let _0x4f59a3 of userCookie[_0x551f('‮8c','yo7n')](_0x2eeae2)){if(_0x40a789[_0x551f('‫8d','Z4o[')](_0x551f('‮8e','MyIE'),_0x40a789[_0x551f('‮8f','d86f')])){if(_0x4f59a3)userList[_0x551f('‫90','njQr')](new UserInfo(_0x4f59a3));}else{return Promise[_0x551f('‮91','hrkk')](0x1);}}userCount=userList['length'];}else{if(_0x40a789['QzzOG'](_0x551f('‫92','DN)P'),_0x40a789[_0x551f('‫93','O8N@')])){let _0xb4bdb3=url['replace']('//','/')[_0x551f('‮94','tjt$')]('/')[0x1];let _0x1d68f6={'url':url,'headers':{'Host':_0xb4bdb3,'Authorization':ck,'Content-Length':'22','User-Agent':defaultUA},'timeout':0x3a98};if(body){_0x1d68f6[_0x551f('‮95','2V@M')]=body;_0x1d68f6[_0x551f('‮96','njQr')][_0x40a789[_0x551f('‮97','NIjf')]]=_0x40a789['IRnsp'];_0x1d68f6['headers'][_0x551f('‫98',']elK')]=_0x1d68f6[_0x551f('‮99',']elK')]?_0x1d68f6['body'][_0x551f('‫9a','Shj[')]:0x0;}return _0x1d68f6;}else{console['log'](_0x40a789[_0x551f('‮9b','axNv')]);return;}}console['log']('\x0a共找到'+userCount+_0x551f('‮9c','NIjf'));return!![];}function populateUrlObject(_0x1c6980,_0x3f35e0,_0x569ab5=''){var _0x4d32cb={'LljGj':function(_0x49f338,_0x8a67b5){return _0x49f338!==_0x8a67b5;},'PEIIS':'AwntQ','VPfmY':'Content-Type','Hvpbe':_0x551f('‫9d','ATss'),'PxUde':'Content-Length'};let _0x1a74e7=_0x1c6980['replace']('//','/')['split']('/')[0x1];let _0x160f29={'url':_0x1c6980,'headers':{'Host':_0x1a74e7,'Authorization':_0x3f35e0,'Content-Length':'22','User-Agent':defaultUA},'timeout':0x3a98};if(_0x569ab5){if(_0x4d32cb[_0x551f('‫9e','D(PL')](_0x4d32cb['PEIIS'],'AwntQ')){return Promise[_0x551f('‮9f','wqqi')](0x1);}else{_0x160f29[_0x551f('‫a0','#yhT')]=_0x569ab5;_0x160f29[_0x551f('‮a1','d86f')][_0x4d32cb['VPfmY']]=_0x4d32cb['Hvpbe'];_0x160f29[_0x551f('‮a2','r^HG')][_0x4d32cb[_0x551f('‫a3',']elK')]]=_0x160f29[_0x551f('‫a4','29Oh')]?_0x160f29[_0x551f('‫a5','@mdI')][_0x551f('‮a6','wqqi')]:0x0;}}return _0x160f29;}async function httpRequest(_0xfdd171,_0x2ec0a2){var _0x69b66e={'PiUPO':function(_0xe384ee,_0x43ef7d){return _0xe384ee!==_0x43ef7d;},'JVDSC':_0x551f('‮a7','wyG&'),'XUjRS':function(_0x32b9a3,_0x81f832){return _0x32b9a3==_0x81f832;},'NgKdQ':_0x551f('‮a8','3)Xs'),'tmdUj':_0x551f('‫a9','njQr'),'RCqzG':_0x551f('‫aa','Z4o['),'GezNo':function(_0x367bca){return _0x367bca();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x22bb86=>{var _0x28558f={'DCeQx':function(_0x1609b0,_0x56ea5a){return _0x69b66e[_0x551f('‫ab','d86f')](_0x1609b0,_0x56ea5a);},'eThwk':_0x551f('‫ac','A#xf'),'dyyYD':function(_0x33dc5a,_0x365a31){return _0x33dc5a===_0x365a31;},'ZJqAh':'KbvIk','MExsD':_0x69b66e['JVDSC'],'HMxjO':function(_0x1d1bb8,_0x19f184){return _0x69b66e['XUjRS'](_0x1d1bb8,_0x19f184);},'Riaqe':_0x69b66e['NgKdQ'],'cRlQG':_0x69b66e['tmdUj'],'VqYMw':_0x69b66e[_0x551f('‮ad','MyIE')],'lgfZc':function(_0x19a5ed){return _0x69b66e[_0x551f('‫ae','%*RL')](_0x19a5ed);}};$[_0x551f('‮af','DQXm')](_0xfdd171,_0x2ec0a2,async(_0x4d9d0c,_0x3e9c91,_0x409df6)=>{try{if(_0x28558f['DCeQx']('exqpd',_0x28558f[_0x551f('‮b0','MyIE')])){httpReq=_0x3e9c91;httpResp=_0x409df6;if(_0x4d9d0c){console['log'](_0xfdd171+_0x551f('‮b1','r^HG'));console[_0x551f('‮b2','axNv')](JSON[_0x551f('‫b3','i4Ua')](_0x4d9d0c));}else{if(_0x409df6[_0x551f('‫b4','DQXm')]){if(_0x28558f[_0x551f('‮b5','46]1')](_0x28558f['ZJqAh'],_0x28558f[_0x551f('‮b6','46]1')])){$[_0x551f('‮b7','A#xf')](_0x551f('‫b8','njQr')+this[_0x551f('‮b9','#yhT')]+']'+result[_0x551f('‫ba','@mdI')][_0x551f('‮bb','5jik')]+'\x20'+result[_0x551f('‮bc','dA$X')]['level_name']+_0x551f('‮bd','@mdI')+result['data'][_0x551f('‮be','i4Ua')]+'积分');this[_0x551f('‮bf','NIjf')]=!![];this[_0x551f('‮c0','D(PL')]=!![];}else{if(_0x28558f[_0x551f('‫c1','A]i[')](typeof _0x409df6[_0x551f('‮c2','njQr')],_0x551f('‮c3','XY7Q'))){httpResult=_0x409df6[_0x551f('‫c4','%*RL')];}else{try{httpResult=JSON[_0x551f('‮c5','D0H9')](_0x409df6['body']);}catch(_0x1fd0d0){if(_0x28558f[_0x551f('‫c6','#yhT')](_0x28558f[_0x551f('‫c7','BzVm')],_0x28558f[_0x551f('‫c8','D(PL')])){$[_0x551f('‮51','@mdI')](result[_0x551f('‫c9','!pEX')]+_0x551f('‮ca','%*RL'));}else{httpResult=_0x409df6['body'];}}}}}}}else{$[_0x551f('‫cb','ykCz')](_0x551f('‫cc','29Oh')+this['name']+_0x551f('‫cd','hrkk'));}}catch(_0x59b43f){console[_0x551f('‫ce','dA$X')](_0x59b43f);}finally{if(_0x551f('‮cf','j4l&')===_0x28558f[_0x551f('‮d0','HsLB')]){_0x28558f[_0x551f('‮d1','njQr')](_0x22bb86);}else{this[_0x551f('‫d2','HsLB')]=$[_0x551f('‫d3','r^HG')](str);this['ckValid']=!![];}}});});};_0xodZ='jsjiami.com.v6';
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