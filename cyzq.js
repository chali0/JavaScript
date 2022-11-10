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



var _0xodx='jsjiami.com.v6',_0xodx_=['‮_0xodx'],_0x3256=[_0xodx,'w6fDpjMPw4w=','w7HDjMKqf8KY','w6nDsAYQw7fDjTgSwpfCkAfCoMKIIhbCj3zCgV5Pw5vDucKSwqAMw4w5QMOEwrBODcKQw71uwpTCu8OKKCPDs3w6e8KY','w4pRwr7CscKE','R03DunUvw61zXSzDjMOQw4pE','HUNiwosa','wprCq8KZwrTCog==','woBAw7TCsMKB','wovCt8OdwqzCkw==','woEDVhM8','DSvDkMOPw6Y=','JcOvJcKMwpnCpnc=','wqnDolbDmQ==','NuaNrueOjTJr','JsK1wpd2w6k=','GSV0aVo=','w6zCjxkZ','wrbChyHDqk3Dr8KBPWAAw7jDuw==','NuaNrueOjTJr8JadmOaBl+WWgOS9s+WOnem5kuS5iQ==','E8OmVkE=','f27DgcOCGw==','w53Dl2Zfw5g=','wq7DrMOvwrdcEcOw','FMOpX0HCjg==','fk0gwqTCpg==','wrTChjwTCEEWCw==','OsKPOzAvKGg=','WizCl8KTw4xZwpw=','w7tkw4UId8Ojw7zDrcO4N8OnMQ==','6LaR5Y2HbA==','wpBhXHcm','IMOEcOagmOW/uemVjOiuqw==','Ei/DlVBJ','GsKVQcOkw4k=','OMOhaWfCpw==','LlLDoDBfNcKu','w5PDgMKGfcKKLMKpw6lQ','LBXCozBtwrI3CmDClcKUwogHfT5C6LaE5Lux5p6r6K2dQMKvU8K3OykFK8OJF17CkXZrw58=','GifDjcOUXQ==','EBnDuMOWSA==','WMOscsOkRw==','dwrDpB0eSg==','wppkbnMyIFo=','KAXDuMOLw7nChA==','w7RHw5ooUQ==','SsO8wpTCmxI=','wq/DrVzDqcOl','QkY/wo7Cpw==','G0MNFw==','w4rDmmY=','w6jCiREUw6Bd','QcKNaVPClA==','XcKow5bCssOi','B1MQGFpQ','wqHDqlfDiHwF','agHDoQ==','wpVgX1MwLXBTw60BeF0=','6LSw5Y+3w74=','w7lqw48s','wpfmjp7njoJRSg==','wqLCp8KPwqrClRzDkA==','OsKFGTIr','B1kZ','woLDoMO5w7LDtMOSeQ==','dQzDpgw=','SSjCssKG','wpBEOMK/TMOpSgPDocOPw4/Dj8Kww4jCp8OQacKOw5TCqCPCuUHCkMOHw4oJwpLDiMOqw5tsMcKUwqdMYWQlwoU7w7HDhnM8w67DmEx1E3zDkh0ZwojDlS7CrMOuw4g=','f8KRGDgnfA==','aEMFwqjCrQ==','w7vCl3LCnMOb','SXTCqwfCkg==','cgzDrAw=','wrzDg2HDiw==','XlvCtA==','YXLDo8OVw48=','DsK8Hxcy','wqYhVSoEwrohJMKvw5UFwqg=','5Y235a+G6aip6K2m5omz5YiRwrXmnp7ml6zmnI3ohps=','wrPCvC97Aw==','woxlw4jCsg==','XQfDo8OYHw==','wppgXHc=','w7XCk23ChcO3w6fDpU8mw7YAw7w=','EMO0XA==','EsOzO8K1wqA=','wozDv8OCw5LDmw==','w5HDhMKFCsKn','CRvDn8O0ZXRN','EcOoXGXCmDEKMsKmNsOxFQ==','wqHDhGjDi8O7','w7ZXEeaitOW+uumVreiuig==','VSjCpsKzw45UwrYIw4k2E8KW','W8KYw50=','w7rorJ/lirnlprHlpKfkv7Tnl6c9ZumGpOihm+eMreWigumCjOaKnOivieiCieewueS+suiAtOilgemaiQ==','BsKaw7ohdX/Dog==','f1XDu8OXwrs=','w4J6PsOtw407Aw==','wpfDucO7w7rDrA==','L8KGYMOP','I0N0woAMwqk=','PeafhuaJu+WIisKzVcK76Kyz6Zm56K+A6Iay5p2d6K6Z5pmY','O8OlMQ==','d+WHtuaJheWIlA==','5Lid6LeK5Y+y','UgzDph0eVsOewrzCkMOMwqow','w6XDgcKMbMKJK8KzwqF4wpEzGsK4wrk=','GVMOE09bwpc=','w5XDnsKOccKY','wrDCvsObwqM=','RcOewqXCuBEnw4A=','w7jCjHrCqMOww6DDilQ7w7AIwqpHfcKlJBDDh8OkQ2TDusKCwqPDsyZ/emZew5bCg2I=','wqrDhWjDlw==','wrPCoMKEwqQ=','w4VNw5M7wr0=','OCjDn8ONQQ==','w4fDgMKiBsKxw6Q=','wr3DokrDuG8=','PWhvwrUh','w7zDo8K1SMKA','wpPDg8Ojw7vDnQ==','KMKACB4g','wpRpw4sYZw==','SA/Dp8OnJQ==','w7bDq8KvfcKo','wpfDrMO5w7c=','WcOWwojCtBc=','MVLDkB1C','NgXDpcODw6HCmsKs','MT1kcmY=','w7jDgGN6w7I=','ccKnR3PCiQ==','cXrDusOR','w4d7PQ==','PFJowo4WwqZUwqjDmQ==','Mls7Jn0=','XxvDuRgq','OMKsw7AUSA==','Ix3DrVRp','wqHCrMKtwr7CnA==','w4R/wrnCnA==','w7dYw6YNwoU=','X3/DrVEQ','w7HDpQATw6E=','CB/DrcOs','WyjCpcKL','wrfChz1J','w4TDjcKvIsK8w7TDqTzCin/Cqhs=','6Lan5Y2zKQ==','wqrClz1SA1Uc','QMOKwpPCmBg=','WcObd8OtRUA=','GMOpTQ==','KENuwoMZwrVc','bAjDucO6PQ7Ckg==','KxTDvHcqwqRkw7fDr8O/TxjDtknCuQ==','N8KQw6c6fGfDs1nDmwrCo8KAw4cW','wopiw6oKWg==','C8OmV03Ckg==','woBtw6A9R8OrUg==','wp7CjQTDnWk=','w5tlMsOmw68=','w5jDhmZfw4g=','VMKEw57CiQ==','wpBVLcKrE8K0Fg==','PsKDY8OLw7ESw6rCmA/DtMOhwp93SHUXw54HMsK4wqrDjMKlP8KOBcKXwqIjNsOzw7nCkQ==','aQLDqcOn','Jg/DssOV','wqvDplXDm20f','DcOmSUXCmw==','woxhw7rCtsKow4PDqg==','6LSo5Y+bCQ==','X8KFw57ClcOz','w7XDocKD5qGf5b+d6ZaJ6K2I','eX7DuMOVwpI7w4Zk','L8KcYMOT','wqDDnnjDnsOwbcOlbWDCuhrCqcONecOgDsKXw594wrBGF8OvGMK1wrcVT8OYRcOefsKyFcKeQx0XXcKXYMOWwqo=','wpNtw7wOTw==','w7Z+w5YhdsO1w5vDuMOtKsOoJ14=','UwPCkMKhw6w=','CsKBGR4F','w4zDn8KAdsKk','TsOUwqDCuQ==','Bh/DrsOUZ3lnP8Oew700fQ==','6LS35Y6Uw5M=','wqnCkyNE','wprphZLluLrClw==','w7rCk2PCqg==','wotqS30yP1s=','wrTChi9TFn4cEzQW','wrnCqsKBwrnCnR3DhA==','wrPCo8OGwrHCuw==','NRTDq2Y=','JHxYwoEI','w4fDmW13w5J+wp7DgxdxK8Kj','6LWi5Y6Xw40=','w6DCgRAF','wr7mia/pm6rkvLzlirnmiprliqk=','CsOmUlA=','EcOiTUHCmhAqOQ==','woRpw7o6UcOvRA==','wpPmn5bmibTli7TDmsOIwovor5fpmZforaTohbzmnqnor4vmmZ4=','w6vDjcKmF8K3w77Dk37CsnPCogU0Kg==','OMK/WsOww6o=','wo9bDcKuOg==','WMOcTcOyUh8TwqTCti8WZ8OGw6ErwpYPbMK9wqxTbMKBwo3CkcOqwqLCtcKJeEofAcKmEsOwJcKgwrLDtMOQw7c=','wrjDi37Dj8Ou','FcKKw70mdnvDrg7DthvCpMKIw50=','w4PDk2tSw5lowqM=','wqtUw6IkcA==','AcKOwqlA','Jw/DssOJ','w6LCjxohw6tLUMOeAMKadMK8','6LaO5Y2VwpM=','BV8dFEBZwp/Ckw==','b+eOluackw==','PcKFGTA=','6YW65bq3KueOhuaeteS9ieWJiw==','wrbCsMOLwrs=','SSjCtsKXw5I=','w7HDqwUFw7Y=','w4LDj8KWeQ==','LFjDpDpB','EMKswrJTw7U=','w4TDnUYwLA==','NxTDt8Oew7nCoMKsWU9V','MxrDtHtj','w7rCnWTClsO8w6LDjw==','w4TDiMKQV8K8','ScOawrDCvQ==','w4h7M8Om','wrrDrMOowpE=','w7zChGnCrMO4w63DjEU=','OsKLCTQ=','w4XCsxwYw7Y=','eXTDqcOxwpAaw6ZvGh3Co04=','MlbDvjo=','IOadouivmei0guaLgeWlpOi1oX3ljIrphpDkuprlrpXmiqTlt43lpIbmlJE=','OSxhZXnCpMOy','wqLDu1jDlHgZNWs=','IMOeAsKHwpE=','woPCqzprEA==','Q3/Dr8OCwrA=','w7rCjHjCgcOx','w4tjwro=','A8OKSXg4H8O+FXV3A8OswqLCqGnCosOtwrg3wr4lw5LDszTCs8Oyw6fCuMK/HsO1w5fDh8O9JT3CsD3DoMODKSTDqA==','RX3Dv2UL','AcKAwqhVw4o=','PULDpzdcMcKiDnE+w4QpBg==','UADCqMK/w64=','w5Rlw5gd','dnTDqsOV','w63Dun4RKg==','wq/DosOlwpw=','JxTDvGs=','O8OlMcKiwpvCtFx5w6vCqHcH','6LaA5Y2Zwrk=','WsKJdknCkXnDvg==','UVHDunUkw617UCzDlA==','B1kZPkBcwrzCmcO8MgQp','EMOiSFfClzIh','wopVP8KgGsKwAA==','QMKFcVLClGzDusKzHVc=','MVjDvTpKfsO4RA==','wr3DosOywpE=','wqLCoTx2Kw==','jVdMfsjiWazmqi.cCRkGoeVZzm.v6=='];if(function(_0x3b4d08,_0x4c3071,_0x396ae2){function _0x50cafc(_0x1cb302,_0x518395,_0x2f0f3b,_0x56d059,_0x517838,_0x108d98){_0x518395=_0x518395>>0x8,_0x517838='po';var _0x21b083='shift',_0x162c8c='push',_0x108d98='‮';if(_0x518395<_0x1cb302){while(--_0x1cb302){_0x56d059=_0x3b4d08[_0x21b083]();if(_0x518395===_0x1cb302&&_0x108d98==='‮'&&_0x108d98['length']===0x1){_0x518395=_0x56d059,_0x2f0f3b=_0x3b4d08[_0x517838+'p']();}else if(_0x518395&&_0x2f0f3b['replace'](/[VdMfWzqCRkGeVZz=]/g,'')===_0x518395){_0x3b4d08[_0x162c8c](_0x56d059);}}_0x3b4d08[_0x162c8c](_0x3b4d08[_0x21b083]());}return 0x111c16;};return _0x50cafc(++_0x4c3071,_0x396ae2)>>_0x4c3071^_0x396ae2;}(_0x3256,0x19f,0x19f00),_0x3256){_0xodx_=_0x3256['length']^0x19f;};function _0x33d2(_0x2872ad,_0x1f43ca){_0x2872ad=~~'0x'['concat'](_0x2872ad['slice'](0x1));var _0x2a60fa=_0x3256[_0x2872ad];if(_0x33d2['RgOcGd']===undefined){(function(){var _0x53d493=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4707d6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x53d493['atob']||(_0x53d493['atob']=function(_0x5d009b){var _0x56551b=String(_0x5d009b)['replace'](/=+$/,'');for(var _0x3a85a4=0x0,_0x36ea1a,_0xb6d70f,_0x1380b7=0x0,_0x52b386='';_0xb6d70f=_0x56551b['charAt'](_0x1380b7++);~_0xb6d70f&&(_0x36ea1a=_0x3a85a4%0x4?_0x36ea1a*0x40+_0xb6d70f:_0xb6d70f,_0x3a85a4++%0x4)?_0x52b386+=String['fromCharCode'](0xff&_0x36ea1a>>(-0x2*_0x3a85a4&0x6)):0x0){_0xb6d70f=_0x4707d6['indexOf'](_0xb6d70f);}return _0x52b386;});}());function _0x3048d0(_0x5cd457,_0x1f43ca){var _0x1aa57d=[],_0x23ad56=0x0,_0x2c911e,_0x2e1cc8='',_0x2aaf69='';_0x5cd457=atob(_0x5cd457);for(var _0x334f0e=0x0,_0x193cb7=_0x5cd457['length'];_0x334f0e<_0x193cb7;_0x334f0e++){_0x2aaf69+='%'+('00'+_0x5cd457['charCodeAt'](_0x334f0e)['toString'](0x10))['slice'](-0x2);}_0x5cd457=decodeURIComponent(_0x2aaf69);for(var _0x508300=0x0;_0x508300<0x100;_0x508300++){_0x1aa57d[_0x508300]=_0x508300;}for(_0x508300=0x0;_0x508300<0x100;_0x508300++){_0x23ad56=(_0x23ad56+_0x1aa57d[_0x508300]+_0x1f43ca['charCodeAt'](_0x508300%_0x1f43ca['length']))%0x100;_0x2c911e=_0x1aa57d[_0x508300];_0x1aa57d[_0x508300]=_0x1aa57d[_0x23ad56];_0x1aa57d[_0x23ad56]=_0x2c911e;}_0x508300=0x0;_0x23ad56=0x0;for(var _0x3735c2=0x0;_0x3735c2<_0x5cd457['length'];_0x3735c2++){_0x508300=(_0x508300+0x1)%0x100;_0x23ad56=(_0x23ad56+_0x1aa57d[_0x508300])%0x100;_0x2c911e=_0x1aa57d[_0x508300];_0x1aa57d[_0x508300]=_0x1aa57d[_0x23ad56];_0x1aa57d[_0x23ad56]=_0x2c911e;_0x2e1cc8+=String['fromCharCode'](_0x5cd457['charCodeAt'](_0x3735c2)^_0x1aa57d[(_0x1aa57d[_0x508300]+_0x1aa57d[_0x23ad56])%0x100]);}return _0x2e1cc8;}_0x33d2['QhqHjv']=_0x3048d0;_0x33d2['CSaQqn']={};_0x33d2['RgOcGd']=!![];}var _0x3679cb=_0x33d2['CSaQqn'][_0x2872ad];if(_0x3679cb===undefined){if(_0x33d2['QeVRAq']===undefined){_0x33d2['QeVRAq']=!![];}_0x2a60fa=_0x33d2['QhqHjv'](_0x2a60fa,_0x1f43ca);_0x33d2['CSaQqn'][_0x2872ad]=_0x2a60fa;}else{_0x2a60fa=_0x3679cb;}return _0x2a60fa;};let httpResult,httpReq,httpResp;let userCookie=($[_0x33d2('‫0','y$e(')]()?process[_0x33d2('‮1','myF3')]['cycg']:$[_0x33d2('‫2','dcct')]('cycg'))||'';let userCGkey=($['isNode']()?process['env']['CGkey']:$[_0x33d2('‫3','p8[9')]('CGkey'))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x33d2('‮4','@@m$'));machineId()['then'](_0x928829=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x489a40){var _0x52a3af={'nMXPl':_0x33d2('‫5','IMBp'),'DeBvJ':function(_0x310894,_0x4c1a91){return _0x310894!==_0x4c1a91;},'dmHTa':'pqhnZ'};this[_0x33d2('‫6','x(T*')]=++userIdx;this['name']=this['index'];this[_0x33d2('‫7','myF3')]=![];this[_0x33d2('‫8','x(T*')]=![];try{if(_0x52a3af[_0x33d2('‮9','ElLK')](_0x33d2('‫a','MpYP'),_0x52a3af['dmHTa'])){let _0x42e970=url['replace']('//','/')[_0x33d2('‮b','$ILl')]('/')[0x1];let _0x2e1be9={'url':url,'headers':{'Host':_0x42e970,'authorization':ck,'Content-Length':Content,'User-Agent':defaultUA},'timeout':0x1388};if(body){_0x2e1be9[_0x33d2('‮c','Duer')]=body;_0x2e1be9[_0x33d2('‫d','3PAz')]['Content-Type']=_0x33d2('‮e','Ev@5');_0x2e1be9['headers'][_0x52a3af['nMXPl']]=_0x2e1be9[_0x33d2('‮f','p8[9')]?_0x2e1be9[_0x33d2('‮10','IdSz')][_0x33d2('‫11','9RJd')]:0x0;}return _0x2e1be9;}else{this[_0x33d2('‫12','myF3')]=$['str2json'](_0x489a40);this['ckValid']=!![];}}catch(_0x1932af){this[_0x33d2('‮13','2hL]')]=![];$['logAndNotify'](_0x33d2('‮14','pqcf')+this[_0x33d2('‮15','Duer')]+_0x33d2('‮16','VW]G'));}}async[_0x33d2('‫17','9&AD')](){var _0x26175d={'jDQSL':function(_0x3eb1e7,_0x3761b5,_0x588964,_0x578009){return _0x3eb1e7(_0x3761b5,_0x588964,_0x578009);},'SetOF':function(_0x1d75ea,_0x253ea6,_0x4a2971){return _0x1d75ea(_0x253ea6,_0x4a2971);},'jqbnH':_0x33d2('‫18','Ev@5'),'kXZHM':function(_0x4b4f89,_0x4fa923){return _0x4b4f89==_0x4fa923;}};try{let _0x55ead9=_0x33d2('‮19','WfIk');let _0x200b67='';let _0x575e09=''+this[_0x33d2('‮1a','x(T*')][_0x33d2('‫1b','D!Vv')];let _0x538377=_0x26175d[_0x33d2('‫1c','woJ%')](populateUrlObject,_0x55ead9,_0x575e09,_0x200b67);delete _0x538377['headers']['Content-Length'];await _0x26175d[_0x33d2('‫1d','ade%')](httpRequest,_0x26175d[_0x33d2('‫1e','uc)#')],_0x538377);let _0x38200c=httpResult;if(!_0x38200c)return;if(_0x26175d['kXZHM'](_0x38200c[_0x33d2('‫1f','7$nW')],0x0)){$[_0x33d2('‮20','(#wL')](_0x33d2('‮21','#SWZ')+this[_0x33d2('‫22','$&I&')]+_0x33d2('‮23','9RJd')+_0x38200c['data'][_0x33d2('‫24','ThrZ')]);}}catch(_0x42b58f){}finally{return Promise[_0x33d2('‫25','Oy6B')](0x1);}}async[_0x33d2('‫26','$&I&')](){var _0x557d34={'arykl':'Content-Length','cEpVi':function(_0x4214f2,_0x4d2471,_0x16eb0e){return _0x4214f2(_0x4d2471,_0x16eb0e);},'kZBfp':function(_0x54d10b,_0x1c1ad2){return _0x54d10b==_0x1c1ad2;}};try{let _0x5b2756='https://idiom.ijiaweb.com/api/User/startLevel';let _0x26f0ce='';let _0x3b5a43=''+this['param']['authorization'];let _0x198256=populateUrlObject(_0x5b2756,_0x3b5a43,_0x26f0ce);delete _0x198256[_0x33d2('‫27','mkV$')][_0x557d34[_0x33d2('‮28','TZY@')]];await _0x557d34['cEpVi'](httpRequest,_0x33d2('‫29','@@m$'),_0x198256);let _0x2c039e=httpResult;if(!_0x2c039e)return;if(_0x557d34[_0x33d2('‫2a','dcct')](_0x2c039e['code'],0x0)){$[_0x33d2('‮2b','$ILl')](_0x33d2('‫2c','IdSz')+this[_0x33d2('‫2d','GOL#')]+_0x33d2('‮2e','x(T*'));await $[_0x33d2('‮2f','myF3')](0x7530);await this[_0x33d2('‮30','myF3')]();}}catch(_0x5c8d5e){}finally{return Promise['resolve'](0x1);}}async[_0x33d2('‫31','x(T*')](){var _0x5c878c={'ZxCYc':_0x33d2('‮32','ThrZ'),'YmfKy':function(_0x42d16c){return _0x42d16c();},'HXlKR':_0x33d2('‮33','VW]G'),'bCsNP':function(_0x4f12a9,_0x403479){return _0x4f12a9==_0x403479;},'aMhgR':'gKGcq','smqEp':_0x33d2('‮34','Ev@5'),'bfrOP':function(_0x2b35a3,_0x3b083c){return _0x2b35a3>=_0x3b083c;},'KSaxs':_0x33d2('‮35','3PAz')};try{let _0x4680fb=_0x33d2('‫36','y$e(');let _0x18dd34='';let _0x5bcbf8=''+this[_0x33d2('‮37','WfIk')][_0x33d2('‮38','IMBp')];let _0x286850=populateUrlObject(_0x4680fb,_0x5bcbf8,_0x18dd34);delete _0x286850[_0x33d2('‫39','$ILl')][_0x5c878c[_0x33d2('‮3a','x(T*')]];await httpRequest(_0x33d2('‫3b','6Cq('),_0x286850);let _0x5195f5=httpResult;if(!_0x5195f5)return;if(_0x5c878c['bCsNP'](_0x5195f5[_0x33d2('‫3c','IdSz')],0x0)){$[_0x33d2('‫3d','GOL#')](_0x33d2('‮3e','VW]G')+this['name']+']'+_0x5195f5['data'][_0x33d2('‮3f','F$4x')]+_0x33d2('‫40','dcct')+_0x5195f5[_0x33d2('‮41','ade%')]['coin']+_0x33d2('‫42','$ILl')+_0x5195f5[_0x33d2('‮43','TZY@')][_0x33d2('‮44','woJ%')]);this[_0x33d2('‮45','Z2V1')]=_0x5195f5[_0x33d2('‫46','uc)#')]['power'];for(let _0x532f0a=0x0;_0x532f0a<''+this[_0x33d2('‫47','dLDG')];_0x532f0a++){if(_0x5c878c[_0x33d2('‮48','6Cq(')]!==_0x5c878c[_0x33d2('‮49','04@y')]){await this[_0x33d2('‫4a','IdSz')]();}else{console['log'](_0x5c878c['ZxCYc']);return;}}this[_0x33d2('‫4b','@@m$')]=!![];this[_0x33d2('‮4c','ThrZ')]=!![];if(_0x5c878c[_0x33d2('‫4d','uc)#')](_0x5195f5[_0x33d2('‮4e','7$nW')][_0x33d2('‮4f','MpYP')],0xbb8)){await $[_0x33d2('‫50','tV[y')](0x1388);await this[_0x33d2('‫51','ThrZ')]();}}if(_0x5195f5[_0x33d2('‫52','ade%')]==0x191){if(_0x5c878c[_0x33d2('‮53','GOL#')]==='wkAaL'){$[_0x33d2('‮54','9&AD')](_0x33d2('‫2c','IdSz')+this[_0x33d2('‮55','dLDG')]+_0x33d2('‮56','myF3'));}else{_0x5c878c['YmfKy'](resolve);}}}catch(_0x186a72){}finally{return Promise[_0x33d2('‮57','z29z')](0x1);}}async[_0x33d2('‮58','9RJd')](){var _0xfc0ac8={'cprEh':_0x33d2('‮59','HT7l'),'cEqxK':'coin=3000','iGiMN':function(_0x25eae2,_0x143416,_0x3ea86b){return _0x25eae2(_0x143416,_0x3ea86b);},'oPGCl':_0x33d2('‫5a','$&I&'),'ZJIdv':'QpRsB'};try{if(_0x33d2('‮5b','9&AD')===_0xfc0ac8[_0x33d2('‮5c','ThrZ')]){$['logAndNotify'](result[_0x33d2('‫5d','*IR&')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{let _0x551208=_0x33d2('‮5e','@0&P');let _0x5b667b=_0xfc0ac8[_0x33d2('‮5f','GlkC')];let _0x288cef='9';let _0x3a0c14=''+this[_0x33d2('‫60','6Cq(')][_0x33d2('‮61','dLDG')];let _0x1e3d0a=populateUrlObject(_0x551208,_0x3a0c14,_0x288cef,_0x5b667b);await _0xfc0ac8[_0x33d2('‫62','woJ%')](httpRequest,_0x33d2('‫63','S[L7'),_0x1e3d0a);let _0x1d0a3b=httpResult;if(!_0x1d0a3b)return;if(_0x1d0a3b[_0x33d2('‫64','9&AD')]==0x0){if(_0xfc0ac8['oPGCl']===_0xfc0ac8[_0x33d2('‮65','04@y')]){try{httpResult=JSON['parse'](resp[_0x33d2('‫66','tV[y')]);}catch(_0x436d8c){httpResult=resp[_0x33d2('‫67','@@m$')];}}else{$[_0x33d2('‮68','HT7l')](_0x33d2('‫69','uc)#')+this['name']+']'+_0x1d0a3b[_0x33d2('‮6a','QNjg')]+'\x20');await $['wait'](0x1388);await this[_0x33d2('‮6b','GlkC')]();}}else{$[_0x33d2('‫6c','F$4x')](_0x33d2('‫2c','IdSz')+this['name']+']'+_0x1d0a3b[_0x33d2('‮6d','myF3')]);}}}catch(_0x511aae){}finally{return Promise[_0x33d2('‮6e','3PAz')](0x1);}}async[_0x33d2('‮6f','QNjg')](){var _0x2e6b87={'fbAoH':function(_0x5d7a2c,_0x521abf){return _0x5d7a2c!==_0x521abf;},'lAcTs':_0x33d2('‫70','dLDG'),'Rexlb':function(_0x5f1fcb,_0x1c1bd,_0x58dbc1,_0xc978,_0x4fba6b){return _0x5f1fcb(_0x1c1bd,_0x58dbc1,_0xc978,_0x4fba6b);},'KdyiZ':function(_0x5f4024,_0x54f939,_0x4dd5e6){return _0x5f4024(_0x54f939,_0x4dd5e6);},'oJXgE':_0x33d2('‫71','tV[y'),'YfbvD':function(_0x2789d5,_0x18e332){return _0x2789d5==_0x18e332;},'KMdxV':'IKFck','WTMBN':function(_0x2b2e6e,_0x29729c){return _0x2b2e6e===_0x29729c;},'wHDzr':'PcvZQ','RlfcO':'ZmXty','EfRCQ':_0x33d2('‮72','$&I&')};try{if(_0x2e6b87[_0x33d2('‫73','Z2V1')](_0x33d2('‫74','uc)#'),'knwSR')){let _0x4bf345=_0x33d2('‫75','Z2V1');let _0x1cd322=_0x2e6b87[_0x33d2('‫76','*IR&')];let _0x2bdac9='8';let _0x2340e8=''+this['param'][_0x33d2('‫77','GlkC')];let _0x3cf864=_0x2e6b87[_0x33d2('‫78','dcct')](populateUrlObject,_0x4bf345,_0x2340e8,_0x2bdac9,_0x1cd322);await _0x2e6b87[_0x33d2('‮79','mkV$')](httpRequest,_0x2e6b87[_0x33d2('‫7a','2hL]')],_0x3cf864);let _0x2297b5=httpResult;if(!_0x2297b5)return;if(_0x2e6b87[_0x33d2('‫7b','TZY@')](_0x2297b5[_0x33d2('‫52','ade%')],0x0)){if(_0x2e6b87['fbAoH'](_0x2e6b87[_0x33d2('‫7c','$B6q')],_0x33d2('‫7d','IdSz'))){return Promise[_0x33d2('‫7e','HT7l')](0x1);}else{$['logAndNotify']('账号['+this[_0x33d2('‫7f','9RJd')]+_0x33d2('‮80','@0&P'));}}if(_0x2297b5['code']==0x190){if(_0x2e6b87[_0x33d2('‮81','6Cq(')](_0x2e6b87['wHDzr'],_0x2e6b87[_0x33d2('‮82','z29z')])){httpResult=resp[_0x33d2('‮83','GOL#')];}else{$[_0x33d2('‮84','ElLK')]('账号['+this['name']+_0x33d2('‫85','@0&P'));}}}else{var _0x135f51='3|0|1|2|4'['split']('|'),_0x53d999=0x0;while(!![]){switch(_0x135f51[_0x53d999++]){case'0':this[_0x33d2('‮86','myF3')]=this[_0x33d2('‫87','vD!Z')];continue;case'1':this[_0x33d2('‫88','$ILl')]=![];continue;case'2':this[_0x33d2('‮89','tV[y')]=![];continue;case'3':this[_0x33d2('‮8a','myF3')]=++userIdx;continue;case'4':try{this[_0x33d2('‫8b','pqcf')]=$[_0x33d2('‮8c','$&I&')](str);this[_0x33d2('‮8d','ade%')]=!![];}catch(_0x304d84){this[_0x33d2('‮8e','woJ%')]=![];$[_0x33d2('‫8f','D!Vv')](_0x33d2('‮90','04@y')+this[_0x33d2('‮91','Oy6B')]+_0x33d2('‫92','myF3'));}continue;}break;}}}catch(_0x3aee71){}finally{if(_0x2e6b87[_0x33d2('‫93','@@m$')](_0x2e6b87[_0x33d2('‮94','Ev@5')],_0x2e6b87[_0x33d2('‫95','myF3')])){return Promise[_0x33d2('‮96','dLDG')](0x1);}else{taskall['push'](user['getUser']());}}}}!(async()=>{var _0x4db580={'pWDAT':function(_0x29d5b9,_0x28745d){return _0x29d5b9!==_0x28745d;},'CIpJu':_0x33d2('‫97','uc)#'),'ziqCA':function(_0x2c91b0){return _0x2c91b0();},'hDKff':function(_0x51c9bc){return _0x51c9bc();},'cLxaH':function(_0x2fc266,_0x217cef){return _0x2fc266===_0x217cef;},'LjmKl':_0x33d2('‫98','GlkC'),'kClBi':function(_0x1416fb,_0x4ff15f){return _0x1416fb>_0x4ff15f;}};if(_0x4db580[_0x33d2('‮99','(#wL')](typeof $request,_0x4db580['CIpJu'])){}else{await _0x4db580[_0x33d2('‫9a','(#wL')](km);if(!(await _0x4db580[_0x33d2('‮9b','y$e(')](checkEnv)))return;let _0x23762a=[];let _0x577712=userList[_0x33d2('‫9c','#SWZ')](_0x457963=>_0x457963[_0x33d2('‮9d','Oy6B')]);if(_0x577712[_0x33d2('‫9e','IdSz')]>0x0){if(_0x4db580[_0x33d2('‮9f','D!Vv')](_0x33d2('‮a0','7$nW'),_0x33d2('‫a1','WfIk'))){$[_0x33d2('‫8f','D!Vv')](_0x4db580[_0x33d2('‫a2','pqcf')]);_0x23762a=[];for(let _0x4ddb74 of _0x577712){_0x23762a[_0x33d2('‫a3','F$4x')](_0x4ddb74['getUser']());}await Promise[_0x33d2('‫a4','$ILl')](_0x23762a);_0x577712=_0x577712[_0x33d2('‫a5','GOL#')](_0x4ce231=>_0x4ce231[_0x33d2('‫a6','QNjg')]);if(_0x4db580[_0x33d2('‮a7','Duer')](_0x577712[_0x33d2('‫a8','F$4x')],0x0)){_0x23762a=[];for(let _0x4e7eea of _0x577712[_0x33d2('‮a9','9RJd')](_0x326b0c=>_0x326b0c['canRead'])){}await Promise[_0x33d2('‫aa','p8[9')](_0x23762a);}}else{$[_0x33d2('‮ab','Oy6B')](_0x33d2('‫ac','vD!Z')+this[_0x33d2('‮ad','D!Vv')]+_0x33d2('‮ae','$B6q'));}}await $[_0x33d2('‮af','mkV$')]();}})()[_0x33d2('‫b0','ade%')](_0x2c5dbf=>console[_0x33d2('‫b1','F$4x')](_0x2c5dbf))[_0x33d2('‮b2','8Gyp')](()=>$[_0x33d2('‮b3','#SWZ')]());async function km(){var _0x12c44d={'foWmf':function(_0x5f4e1a,_0xe91e7f,_0x30f174){return _0x5f4e1a(_0xe91e7f,_0x30f174);},'bkxXB':function(_0x6d4ee0,_0x533260,_0x31b1ac){return _0x6d4ee0(_0x533260,_0x31b1ac);},'aFoLN':_0x33d2('‮b4','woJ%'),'NYPnY':function(_0x424f37,_0x546058){return _0x424f37==_0x546058;},'WXrFq':function(_0x427bd7,_0x5caaac){return _0x427bd7(_0x5caaac);},'tNaZa':function(_0x5cf003,_0x3eddac){return _0x5cf003==_0x3eddac;},'VjnFC':function(_0xc2faa6,_0x4be7f7){return _0xc2faa6==_0x4be7f7;},'EymVU':function(_0x315bf7,_0x23d6af){return _0x315bf7===_0x23d6af;},'yfMiu':'UGJoH'};try{let _0x1924f5=_0x33d2('‫b5','3PAz')+userCGkey+_0x33d2('‮b6','ade%')+uuid;let _0x24d824='';let _0x3d6a06=_0x12c44d[_0x33d2('‮b7','pqcf')](populateUrlObject,_0x1924f5,_0x24d824);await _0x12c44d[_0x33d2('‫b8','ThrZ')](httpRequest,_0x12c44d[_0x33d2('‮b9','gQMm')],_0x3d6a06);let _0x206c81=httpResult;if(_0x12c44d['NYPnY'](_0x206c81[_0x33d2('‫ba','#SWZ')],0xc8)){this[_0x33d2('‮bb','WfIk')]=_0x206c81['msg'][_0x33d2('‮bc','gQMm')];this[_0x33d2('‮bd','9&AD')]=_0x12c44d[_0x33d2('‮be','ade%')](timestampToTime,this['time']);$[_0x33d2('‮bf','$B6q')](_0x33d2('‫c0','vD!Z')+this['time1']);await $[_0x33d2('‮2f','myF3')](0xbb8);}if(_0x12c44d[_0x33d2('‮c1','$&I&')](_0x206c81[_0x33d2('‫c2','2hL]')],0x95)||_0x12c44d[_0x33d2('‮c3','p8[9')](_0x206c81[_0x33d2('‮c4','Oy6B')],0x94)||_0x206c81[_0x33d2('‫ba','#SWZ')]==0x70){$[_0x33d2('‫c5','ThrZ')](_0x206c81[_0x33d2('‮c6','myF3')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}if(_0x206c81['code']==0x192){if(_0x12c44d[_0x33d2('‮c7','HT7l')](_0x33d2('‫c8','8Gyp'),_0x12c44d[_0x33d2('‮c9','VW]G')])){this[_0x33d2('‫ca','(#wL')]=![];$[_0x33d2('‮cb','myF3')](_0x33d2('‫69','uc)#')+this[_0x33d2('‫cc','WfIk')]+_0x33d2('‫cd','MpYP'));}else{$[_0x33d2('‫ce','woJ%')](_0x206c81[_0x33d2('‫cf','Duer')]+_0x33d2('‫d0','ElLK'));}}}catch(_0x184d10){}finally{return Promise[_0x33d2('‫d1','IMBp')](0x1);}}async function checkEnv(){var _0x413e89={'jNugE':function(_0x3eb99e,_0x2ab1b0){return _0x3eb99e>_0x2ab1b0;}};if(userCookie){let _0x4e9015=envSplitor[0x0];for(let _0x56b397 of envSplitor){if(_0x413e89[_0x33d2('‮d2','9&AD')](userCookie[_0x33d2('‫d3','MpYP')](_0x56b397),-0x1)){_0x4e9015=_0x56b397;break;}}for(let _0x53e2b8 of userCookie[_0x33d2('‫d4','8Gyp')](_0x4e9015)){if(_0x53e2b8)userList[_0x33d2('‮d5','Ev@5')](new UserInfo(_0x53e2b8));}userCount=userList[_0x33d2('‫d6','dcct')];}else{console['log'](_0x33d2('‮d7','QNjg'));return;}console[_0x33d2('‮d8','HT7l')](_0x33d2('‫d9','myF3')+userCount+_0x33d2('‫da','QNjg'));return!![];}function populateUrlObject(_0xc38a99,_0x5cdb38,_0x1f7af8,_0x5c0afe=''){var _0x5a369b={'vVRQH':_0x33d2('‫db','#SWZ'),'LvRQf':_0x33d2('‮dc','uc)#')};let _0x509f49=_0xc38a99[_0x33d2('‫dd','F$4x')]('//','/')[_0x33d2('‮de','uc)#')]('/')[0x1];let _0x20def1={'url':_0xc38a99,'headers':{'Host':_0x509f49,'authorization':_0x5cdb38,'Content-Length':_0x1f7af8,'User-Agent':defaultUA},'timeout':0x1388};if(_0x5c0afe){_0x20def1[_0x33d2('‮df','TZY@')]=_0x5c0afe;_0x20def1[_0x33d2('‫e0','7$nW')][_0x5a369b['vVRQH']]=_0x33d2('‮e1','ThrZ');_0x20def1['headers'][_0x5a369b['LvRQf']]=_0x20def1[_0x33d2('‫e2','WfIk')]?_0x20def1[_0x33d2('‮e3','mkV$')]['length']:0x0;}return _0x20def1;}async function httpRequest(_0x40dd75,_0x12e4db){var _0x2a2e73={'zaqDv':'CscDb','rNuRY':_0x33d2('‫e4','S[L7'),'ZMWPl':_0x33d2('‮e5','(#wL'),'qdeOc':function(_0x4ec0ea,_0x44be1b){return _0x4ec0ea!==_0x44be1b;},'JmGbD':'gKoIb','MrICl':'IYKkN','eurNG':function(_0x2cd161,_0x37fb2b){return _0x2cd161==_0x37fb2b;},'oPWQI':_0x33d2('‮e6','VW]G'),'weEwE':function(_0x48cc1a,_0xb49065){return _0x48cc1a===_0xb49065;},'PEMeD':function(_0x1ec5a4){return _0x1ec5a4();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x2f2d9b=>{var _0x2ccb8d={'meCBq':_0x2a2e73[_0x33d2('‮e7','9RJd')],'ztvxs':function(_0x29a85f,_0x15072b){return _0x29a85f===_0x15072b;},'SviLN':_0x2a2e73[_0x33d2('‮e8','dcct')],'FKBIy':_0x2a2e73[_0x33d2('‫e9','uc)#')],'YmEYS':_0x33d2('‫ea','8Gyp'),'LSyZQ':function(_0x341605,_0x3fac58){return _0x2a2e73[_0x33d2('‮eb','ade%')](_0x341605,_0x3fac58);},'ffuFn':_0x2a2e73['JmGbD'],'dhYkT':_0x2a2e73['MrICl'],'pcMcd':function(_0x23c489,_0x4c9f72){return _0x2a2e73['eurNG'](_0x23c489,_0x4c9f72);},'SRMdz':_0x2a2e73['oPWQI'],'yGcLP':function(_0x5b2ccb,_0x566c8c){return _0x2a2e73[_0x33d2('‮ec','x(T*')](_0x5b2ccb,_0x566c8c);},'eaCqi':_0x33d2('‮ed','p8[9'),'mqWDl':function(_0x486935){return _0x2a2e73[_0x33d2('‮ee','uc)#')](_0x486935);}};$[_0x33d2('‫ef','8Gyp')](_0x40dd75,_0x12e4db,async(_0x50f55d,_0x71431e,_0x34439b)=>{if(_0x33d2('‮f0','7$nW')===_0x2ccb8d[_0x33d2('‮f1','dLDG')]){return Promise[_0x33d2('‫f2','IdSz')](0x1);}else{try{httpReq=_0x71431e;httpResp=_0x34439b;if(_0x50f55d){if(_0x2ccb8d[_0x33d2('‮f3','z29z')](_0x2ccb8d[_0x33d2('‫f4','$ILl')],_0x2ccb8d[_0x33d2('‫f5','QNjg')])){$[_0x33d2('‮84','ElLK')]('账号['+this['name']+']金币+'+result[_0x33d2('‮f6','9&AD')][_0x33d2('‫24','ThrZ')]);}else{console['log'](_0x40dd75+'请求失败');console[_0x33d2('‮f7','MpYP')](JSON[_0x33d2('‫f8','dcct')](_0x50f55d));}}else{if(_0x2ccb8d[_0x33d2('‫f9','F$4x')]!==_0x33d2('‫fa','#SWZ')){if(_0x34439b['body']){if(_0x2ccb8d[_0x33d2('‫fb','IMBp')](_0x2ccb8d[_0x33d2('‮fc','@@m$')],_0x2ccb8d['dhYkT'])){if(_0x2ccb8d[_0x33d2('‫fd','mkV$')](typeof _0x34439b[_0x33d2('‫fe','*IR&')],_0x2ccb8d[_0x33d2('‮ff','S[L7')])){httpResult=_0x34439b[_0x33d2('‮f','p8[9')];}else{if(_0x2ccb8d[_0x33d2('‫100','GlkC')](_0x2ccb8d['eaCqi'],'JwNbC')){httpResult=JSON[_0x33d2('‮101','Z2V1')](_0x34439b[_0x33d2('‫102','(#wL')]);}else{try{httpResult=JSON['parse'](_0x34439b[_0x33d2('‫103','woJ%')]);}catch(_0xb25f9c){httpResult=_0x34439b['body'];}}}}else{if(userCookies)userList[_0x33d2('‮104','$&I&')](new UserInfo(userCookies));}}}else{$[_0x33d2('‮105','VW]G')](_0x33d2('‮106','Z2V1')+this['name']+']'+result[_0x33d2('‫107','$&I&')]);}}}catch(_0x5624ea){console[_0x33d2('‮f7','MpYP')](_0x5624ea);}finally{_0x2ccb8d[_0x33d2('‫108','7$nW')](_0x2f2d9b);}}});});};_0xodx='jsjiami.com.v6';
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