/*
网易严选 vx小程序

变量：两个必填 捉包https://miniapp.you.163.com/orchard/game 找到headers中的wx-pin-session或X-WX-3RD-Session的值 填变量wygy里多账号@隔开

格式：export wygy="xxxxx@xxxx"

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/
const $ = new Env("网易严选");
const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
var _0xodd='jsjiami.com.v6',_0xodd_=['‮_0xodd'],_0x2328=[_0xodd,'w5XCk8KTHg0fwqI5wovDl8K6FQ==','6Laf5YyLwq8=','wpZnEQ==','POivneajo+aflOWPv+WtveaJleWeqQfCneacnOWZreS7mMO9Hz4rwpfChw/CvAjDtcK55aWg6I6R5Yy85Y2u5ayf','wpbChsKwI8Kt','OcK8QsK2wrc=','wqbDvsKzw4fDksKWwrs7wq/CkMKrwqk=','5Lq76LS15Y+9','YRvCkRfDtQ==','wrh7GHYlwovCunPCiAbDrcOK','Xk9wNcKow73DuMOrDxBew73Cu1Z5w60ifsOIw5V6RcO3MMKDKcKvwpbDp8OAPA==','RBnCscKVw4TCrsKJLcKnPcKCGsOSXg==','DAHCk8Oiw5bCj8OOwpFVw6zDoMOoQnl/w6E=','wpPDucKmw7zDmQ==','aFciCw==','w4bCr8ORw4nClUkH','wpLDhMKAG8KT','w4hSw7opw6E=','w5rCgX8rwoM0wqM=','dwnChTLDiQ==','TlZ4AQ==','DcKRZF3CnMOX','w4Qtw4g=','JGnCssKUw50=','wrDDsMKLC8K4','A8KKMmI+dA==','NsKuDnET','w453d8Kw','B8O7RsOTw60=','OsKMfsKJwok=','cyRnAMOU','axnCuA==','6K+j5rCr5aSb6LW8','w5XCk8KT','worCtMK4M8Kvw7TCj8KmLg==','P8K1wr3CrQ==','w7HDkEjCiwo=','DsOaw4TCkw==','H8Oiw4rDmw0=','ZRnCu8KY','w6JlUMKhwoM=','w4vDtGXClg==','AMKHPw==','6K2O5rG95aet6Lab','aiAn','SR/CtcKHw6U=','aCTCswrDng==','Zlch','w5HCosOgLA==','w5/Cl3k=','KMO1Tw==','HEjCt8K0wpk=','w6dyZsKNwqg=','wqfDocKUM8Kcw67DtA==','QFZ7OcKVw45EwpTDlMKdAcKW','w5fCncKZOg==','wpnlj6HlrLzpq63orLjmip/liI9B5p+H5pap5p6j6ISN','aGPCo8KaAg==','wpZ/EWM4','ZsKkR8OOwoA=','w5lcw74ew6vCgsOp','Gz/Cq8Otw44=','Y0sIHWIS','AsKBQMKf','WFp0PcKgw6rDuA==','BcKbFmg5ZQ==','w45Xw7s=','RirClCbDtA==','w6sFw4TCoMKs','dAbCs8KIw5U=','MsKoTsKFwoE=','w6cGw4TCrjtB','AsKfXFvChMOWw7A=','w4kiZA==','w5FLwqjDjsKkw4thw5Zmw7PCv8KRRh3Drj0lw5jDrsK8w7rCs8O5EMKLwrEnH8KBw5TClsKJwqbDpU/CqXNLXUzChiDDv8KuezTDvx3Di3UiwqfCs8OnC8Oy','ZsKkB0nCqnQ1','T1Z4HQ==','w5RMwrs=','asK2QcOtwokzw5Y=','KsK2wrFTw78=','OsOKw4DDjwDDrBjChMOXUsO8w4w=','6LSo5Yy2PQ==','wpflj7DlrJLpqIrorb3mi6Lliap05p+S5pax5p+S6ISj','w41WwrHDm8Kv','axnCuMKgw4/CpMKzb8KfMcKKBA==','6LWI5Y6+w7w=','MMK+wrFT','wpFtRA==','AibDgMKKw4hVOSoNPMKefA==','LsKXN8Of','YOisgeWdssOuw6Hmn7vlm4zku5nDpTrDtFTDoihUclk/VeWmleiNuuWOruWMueWupg==','MsKwwrs=','w5onw5zCqsK5HsOd','MsK2wq9C','w5p3bQ==','MmzCjMO2wpjCuwR0QQfDpMKNNcKpHBg5Ik07YMOgBcOEbBXCvHRPwqU5bxkTdMKowqLDphnDqyzDscKiMcOdHn/Di8OYwpbCisK+w47DlcOZwoHCm3Uuw7FtwqY=','DSbDiMKgw49U','JsKBfcKKwqI=','HWzCosOWwo4=','Gn7DqyLDuA==','w40odEI=','RUvCr8K9RQ==','HsOQw5PCn27Dtw==','HVnCqsOCwq7Dj3QYZCvDicKvC8KQImkNGGxAEMKaacKtWjPClR4=','M8KCO8OOw5PCsg==','bEtRQsO7','DCbDg8Ky','MncmwrI=','wp3CtBBLan4vJMOrJ8OtJQ==','w6TmrLPmlJHnrKHliZPltonlraDmiYY=','MgsuwrLCh8Ku','w6/CtcKnFjckwqUCwrrDsw==','Jgczwq7CmMKy','wpd7EUMuwoHCgDHCqBbDu8OW','AOa2leikkeS4r+WJtOW3juWvg+aLgw==','w4tawq/Di8OywpA=','w4A7w6TClQ1zw73Cn1PDkcK6wpTCiR7DusKJBWhrHw0=','Mxo8wrPCnsKp','MsKwwrt3wqAGYcKQEnfCpsKq','6LSg5Y64Gw==','w4fDumzCig==','OsOKw4A=','KH3Ci8OpwofDt04=','DSHDgsKow414GQ==','w5xiacK4HktGQC5kMWfDsThlw6HCp8OKUXQzKcOawoQjb8KNwqvDjTwU','HcKwwrJCwqsMW8OSKnvCrsK0KMOW','cwjCsgXDtQ==','w6tSw6c=','FcKVRVLChA==','w7/CqcKAMhI=','AR7ChMOPw5HCiMOhwopIw6rDqMK+','OMOEw4rDqw==','A+euoeWLrOiOgeW9mVg=','w6hWw6fDmA==','LXnCkcOy','w6MMw58=','bxPCvsKFw4TCssKO','w70jW3HCtA==','w5HCmcKVOwYJwp8=','wpvCr8KuIw==','w5vCk8KQJg==','wpXCpcKkPcK1w7s=','e2/Cug==','ChTClw==','w5w5w5HCtQg=','w7J8w5YQbw==','KMKCLsOKw5XDu8KLTMKoE8OZesOIHX0eTyQAwr/DvE5rTsKgw4LClsOGw6ZcwpkTDsOkCcKZT8KqwrBvDTHCoMKlwrjCgHbCu2ZZwrzDulVxw54=','IFDDpQvDp8Ki','w5hZwrrDpMOa','w5xSw6smcw==','IwE5wqI=','6LWw5Y2Sw7w=','HCHCgcOk','AOmhnOWMj+euquWLpeawiOa6u8Op','KH3Ci8OzwofDtQ==','J3k2wq57','w7Z0w5rDkcK8','w7RjXcK8wrU=','U3nCjMKpfA==','w718bQ==','LAE6wobChcK+E8OBwrXDj3Ed','6LWm5Y6ZBg==','w4Yjw4LCoA==','w7PpoYzljablh6Dot4nmsI/muoDDgRLkurzmlq3ltr7po7/lrrY=','I20gwp9oJcO6w70m','w6kGYGjCiQ==','OcOYw5HCk2w=','wrbCssKQIMKw','w4HDr3XCnyzDssKjGsObw5pWwrvCmRICT27Dp3rClsOgw5RZPHfCjsOaMB/CkBDDsSjDnWdSQcKjPn/ChDprworDocKFDF5RBcKnBDQDXcOKdMOOwpkZw4nDjx/CkkvCogRDMMKIPMKbw5Jlwpd4w6nDmcKpw7FLw6vDjcKgw7vDoBo3HsO8w6NGBUMkaMKeN8K8wqjDv8K5UVYF','I8KZNcORw4/CpA==','wrRNVBPDkA==','bsKyWw==','Ih7ClMOrw4s=','E8KReU/ChMOL','ZcK4SMO+woI2w7wrwqvDqsKywoU=','6LaO5Y61w7Q=','wqbpopLljqDlhY/otbnms5HmuLpkw7w=','KcK+wqhTwrw=','Nw80wrM=','BsKNRcKywqLDlB/DlsKh','J07CrcK0w5w=','e8KZWidww64=','VRDCrMK1w5A=','EgguwpPCmg==','w5VQwrvDv8OwwoAAw5hiw7PDt8KE','6LW45Yyowoc=','LV7DpwU=','XlxvDcKXw54=','cS40w5RY','AMKHP0YzZMOpbDFaS8K1','w7Vfw7Et','w7VRw73Dk8Kd','eAZN','MMO9UsOU','QemijOWMmOazq+azkuawhOa6sUth5Lq75pan5ba86aCc5Y2E6L+y5Liw','OsK2WsKMwpBNBsOyDRcAUEdlw600wpFxWcKHwpjDjU7Cr3/DuMOLwp/CicKKw6s=','LMKywqzCm8KT','BcK+IMOjw4w=','asKTRjl1w78=','E8Oxw6XDtAg=','wrjDtMKnw7PDkMKG','6LaN5Y+Ow5Y=','wo57UADDmnE=','LXnCjMOjwpk=','JMOAw5TDuwLDvA==','w4Iod2bCqsKEGA9LfcK2Sw==','awzCkiY=','DkXDmQjDvA==','w6B7f8Krwoo=','GSnCisO0w5U=','McK1wr4=','e8KZWj1ww6zDgw==','F2LCq8Ouwpk=','ZsK+TjxF','MgstwqvCisK5OA==','I2guwqJ9','w65Yw7fDgA==','w5hRw7I8ZnBDw70nHX8F','fnvCncKoeQ==','K1rDqwTDq8K1Gg==','b1ZyDMKew4R+w5bDrMKRCcKIfMKe','PMKwwrhP','w6pew73DkMKdFg==','w60RWEDChw==','wpbCvgM=','XWFOQ8OZ','B0bDgizDoQ==','ccKQeMO8woI=','IsKiQl3Cqw==','w6tNw7jDo8Ke','w6JjZsKNwrg=','wpjCtRNvfA==','eghHPA==','VlFkPMK5','w5HCi3Ekwo8j','w5rCkGo/wpV8w7/CnyvCscOUw7cVUsKlLsOvM8K9wpnDlVTCo2YMO8Kaw7fClkQPw4okBkLDhMKXcykewpDDuMOxUcOAwqPCtcOMLMOcKR/Cm3EEV8O8w77CpEvClTFlegvCuMOWw6vDtkwhZ8KqwrXCqB8bw4RLwrBqw5MlaMOx','D8Oaw4/CgWvDpg==','wrFFAGkZ','DWPCm8Kfw7w=','HnzCicO2wp8=','dwjCjDbDoWg=','DFzDqBfDlA==','woHClMKfEsKi','w5QrXmnCiA==','YsKuAWzCoWIIwpB2alEE','6Lea5Y+peA==','Hea2ueimkuiMjeW8scO7woQ=','w6N2ecKRwqA8','fVkyF3Q=','HxTCkMO7w5PCmA==','FMKGKsODw5Q=','SFpTSMOs','w4tawq/DkcOywpIr','NnfCn8OHwoXDpWU0WAfDrMKd','6LSZ5Y+IWw==','aRfCssKE','w7Tmt5Top4nms5vmuqvDssKs5Lu/5pWT5bWB6aK+5YyE6Ly/5Luk','woPCvgRlaGwE','J8KTLg==','w5FLwqjDjsOtw55hwph7w7PDv8KUTgXDq3pyw5rDt8K9wqrDtcKjEMKYwrY6D8KPw4XCgcOcwqzDunTDqntNX0fCjzbDrsKqI3fDoETClSFhwrTDvcOuG8KhJ8KDGQQ+w5XClcKnEg==','MMKVLcOMw60=','KcKYZXbCkA==','dwZOPA==','w4LCr8OWw5nCsVYbwo5cAg==','LMKZPcO7w4jCpcOqDMKxE8ORag==','wp3libvkvYA=','w5vDvnLCmjPCvA==','w4dcw6sFw4bCmcOjYMKtaA==','wr3DsMK9w7I=','wp9mGXI=','6LSv5YyLcg==','8LuCtOawvua4kOS7gei3u+WBgOavr+S6o+WKlw==','w6lbw68nb2hS','YR/CkDM=','w5RQw5oibg==','KMKCLsOKw5XDu8KLTMKoE8OZesOIHX0eTyQAwr/DvE5rTsKgw4LClsOGw6ZcwpkTDsOkCcKZXMKqwq5hDTHCoMKlwrjCgHbCuHFCw6LCvkxtw58U','ZBnCsMKKw4jCpQ==','DMKSXsKywpc=','PMKjXg==','wpTCpsKhH8KN','f0VHVA==','DFHDjArDow==','wpVpQR3Duw==','BE7CvcKQw4Zmw6TDlT3DrmLClA==','6LWK5Y2Cw7s=','POS7vemkmuaJqeW/qOiMiOW8g++8mw==','wr3DsMKgw6PDjg==','W+a0iOaxtOaKoeWKtQ==','FsKVY04=','JBczwqbChsKzPg==','ES/CiMOk','6Lab5Y+lQg==','Lg8wwqI=','e35OdcOp','C3LCi8KTw5g=','w5vDvnLCgDPCvsOp','w6LCiE8Vwos=','w4nCr8OE','w4F/W8K+wqE=','bGlrZMOH','w74gd2bCnQ==','dRPCrMKUw43CtA==','w5fCrsO+PMOfw7E=','PHclwopnMsOfw5s2PVfCrg==','6LWl5Y+Iw5E=','B+S4kemnqOaLleW/q+iMtuW+vO+9gQ==','a0tXVMOs','6LWH5YyDUQ==','QeS4o+mks+ekjeWOm+++oemcneS6iOmlg+aUrOmXkg==','E8KReVXChMOJw7E=','w4nCpMOq','In0xwqRlIMO0','HyTCh8OHwoc=','wr/Dv8Kww6PDmsKbwpsxwr8=','w6xEfMKCJQ==','SlBwDMKew5g=','FsKTccKHwq/DjhA=','w4pZw7AuTQ==','HiXCgsOmwpjDlw==','aMKQRQ==','CCDDi8K/w4ND','SV5sMMKl','w4IifkDCsMKI','w4Qtw4jChMK7DMO2FAcZw77Crw==','YgzDt8O8woUvwofCl2TCqinDgF/Ds8OYw4nkuI3lip3lvbTlpqzDgcO0woECWng5FMO5MHjDqwJzcw==','Dg98bMK9wq7DpcKpGkxMw6rCrRdqwrRlasOXwoxnDg==','KWjClMOvwp8=','w4lKwq/Dlg==','a2vCp8KL','wonCtcK5Mg==','w4Qrw5zCsQ==','ecKiXMOX','wobCuh5+','IcOEw47Dug==','w47CncKdKw==','JsOQw5TDpg==','O3TClA==','M8KeNcONw4vCssOD','wprCocK+OcKp','YsKuAQ==','W1BuPA==','w5JYw7AcRA==','DwvCi8OYw7E=','w4fDk2PCmwo=','wqZ8dxHDhA==','wrFMZxzDuQ==','ek01Gg==','GcKdScKBwrfDjw==','jsIrhOjwiaFeKUmie.com.vIfP6GO=='];if(function(_0x33cb3b,_0x1df525,_0x557d1a){function _0x2a9771(_0x2c8f65,_0x479c6d,_0x205ae3,_0x371e18,_0x333ba9,_0x4d32f9){_0x479c6d=_0x479c6d>>0x8,_0x333ba9='po';var _0x47cd16='shift',_0x4a230d='push',_0x4d32f9='‮';if(_0x479c6d<_0x2c8f65){while(--_0x2c8f65){_0x371e18=_0x33cb3b[_0x47cd16]();if(_0x479c6d===_0x2c8f65&&_0x4d32f9==='‮'&&_0x4d32f9['length']===0x1){_0x479c6d=_0x371e18,_0x205ae3=_0x33cb3b[_0x333ba9+'p']();}else if(_0x479c6d&&_0x205ae3['replace'](/[IrhOwFeKUeIfPGO=]/g,'')===_0x479c6d){_0x33cb3b[_0x4a230d](_0x371e18);}}_0x33cb3b[_0x4a230d](_0x33cb3b[_0x47cd16]());}return 0x10d821;};return _0x2a9771(++_0x1df525,_0x557d1a)>>_0x1df525^_0x557d1a;}(_0x2328,0x19a,0x19a00),_0x2328){_0xodd_=_0x2328['length']^0x19a;};function _0x483e(_0x4c6420,_0x1517dc){_0x4c6420=~~'0x'['concat'](_0x4c6420['slice'](0x1));var _0x37bffd=_0x2328[_0x4c6420];if(_0x483e['sAHHKR']===undefined){(function(){var _0x3990c5=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x21c1b3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3990c5['atob']||(_0x3990c5['atob']=function(_0x3b8f6d){var _0x517154=String(_0x3b8f6d)['replace'](/=+$/,'');for(var _0x14e73a=0x0,_0x55e7fa,_0x37a600,_0x1a1dd1=0x0,_0x2285cd='';_0x37a600=_0x517154['charAt'](_0x1a1dd1++);~_0x37a600&&(_0x55e7fa=_0x14e73a%0x4?_0x55e7fa*0x40+_0x37a600:_0x37a600,_0x14e73a++%0x4)?_0x2285cd+=String['fromCharCode'](0xff&_0x55e7fa>>(-0x2*_0x14e73a&0x6)):0x0){_0x37a600=_0x21c1b3['indexOf'](_0x37a600);}return _0x2285cd;});}());function _0x5c503e(_0x9bea1,_0x1517dc){var _0x55ff31=[],_0x1cf870=0x0,_0x5b7812,_0x5abf0c='',_0x5a0fd='';_0x9bea1=atob(_0x9bea1);for(var _0x32d6df=0x0,_0x5b740f=_0x9bea1['length'];_0x32d6df<_0x5b740f;_0x32d6df++){_0x5a0fd+='%'+('00'+_0x9bea1['charCodeAt'](_0x32d6df)['toString'](0x10))['slice'](-0x2);}_0x9bea1=decodeURIComponent(_0x5a0fd);for(var _0x13e572=0x0;_0x13e572<0x100;_0x13e572++){_0x55ff31[_0x13e572]=_0x13e572;}for(_0x13e572=0x0;_0x13e572<0x100;_0x13e572++){_0x1cf870=(_0x1cf870+_0x55ff31[_0x13e572]+_0x1517dc['charCodeAt'](_0x13e572%_0x1517dc['length']))%0x100;_0x5b7812=_0x55ff31[_0x13e572];_0x55ff31[_0x13e572]=_0x55ff31[_0x1cf870];_0x55ff31[_0x1cf870]=_0x5b7812;}_0x13e572=0x0;_0x1cf870=0x0;for(var _0x43b89e=0x0;_0x43b89e<_0x9bea1['length'];_0x43b89e++){_0x13e572=(_0x13e572+0x1)%0x100;_0x1cf870=(_0x1cf870+_0x55ff31[_0x13e572])%0x100;_0x5b7812=_0x55ff31[_0x13e572];_0x55ff31[_0x13e572]=_0x55ff31[_0x1cf870];_0x55ff31[_0x1cf870]=_0x5b7812;_0x5abf0c+=String['fromCharCode'](_0x9bea1['charCodeAt'](_0x43b89e)^_0x55ff31[(_0x55ff31[_0x13e572]+_0x55ff31[_0x1cf870])%0x100]);}return _0x5abf0c;}_0x483e['nqhxVN']=_0x5c503e;_0x483e['zbMrIf']={};_0x483e['sAHHKR']=!![];}var _0x169521=_0x483e['zbMrIf'][_0x4c6420];if(_0x169521===undefined){if(_0x483e['LDQopK']===undefined){_0x483e['LDQopK']=!![];}_0x37bffd=_0x483e['nqhxVN'](_0x37bffd,_0x1517dc);_0x483e['zbMrIf'][_0x4c6420]=_0x37bffd;}else{_0x37bffd=_0x169521;}return _0x37bffd;};let httpResult,httpReq,httpResp;let userCookie=($[_0x483e('‫0','sxQ5')]()?process['env'][_0x483e('‮1','OK3n')]:$[_0x483e('‫2','00NH')]('wygy'))||'';let userCGkey=($[_0x483e('‫3','V$r%')]()?process[_0x483e('‮4','uSC$')][_0x483e('‫5','0o2M')]:$['getdata'](_0x483e('‫6','N$Dx')))||'';let userCookieArr=[];let userList=[];let userIdx=0x0;let userCount=0x0;class UserInfo{constructor(_0x3ba1dc){let _0x4fe44e=_0x3ba1dc[_0x483e('‮7',')$k(')]('＃');this['index']=++userIdx;this['name']=this[_0x483e('‮8','mgek')];this[_0x483e('‮9','cp7z')]=_0x4fe44e;this[_0x483e('‫a','#R&E')]=!![];}async['km'](){var _0x34ff10={'TTPYT':function(_0x4c5361,_0x1a2a21,_0x3e832d){return _0x4c5361(_0x1a2a21,_0x3e832d);},'Xvzrd':'X-WX-3RD-Session','DlMSc':_0x483e('‮b','4cEn'),'buVgD':'0|2|3|1|4','yyWSa':function(_0x1f4f7d,_0x44b191){return _0x1f4f7d(_0x44b191);}};try{let _0x1eb8f2=_0x483e('‫c','nL*6')+userCGkey;let _0x234ddd='';let _0x4afae9=_0x34ff10['TTPYT'](populateUrlObject,_0x1eb8f2,_0x234ddd);delete _0x4afae9[_0x483e('‮d','*5ff')][_0x34ff10['Xvzrd']];await httpRequest(_0x34ff10['DlMSc'],_0x4afae9);let _0x6f057a=httpResult;if(!_0x6f057a)return;if(_0x6f057a[_0x483e('‮e','II$J')]==0xc8){var _0x1ee48d=_0x34ff10['buVgD']['split']('|'),_0x7441a4=0x0;while(!![]){switch(_0x1ee48d[_0x7441a4++]){case'0':this['time']=_0x6f057a[_0x483e('‮f','nL*6')]['vip'];continue;case'1':this[_0x483e('‮10','zBcz')]=!![];continue;case'2':this[_0x483e('‫11','iS7N')]=_0x34ff10['yyWSa'](timestampToTime,this['time']);continue;case'3':this['valid']=!![];continue;case'4':$[_0x483e('‫12','un[p')](_0x483e('‫13','*5ff')+this['name']+_0x483e('‮14','PpNM')+this[_0x483e('‫15','nL*6')]);continue;}break;}}else if(_0x6f057a['code']==0x95){$[_0x483e('‮16',')$k(')](_0x483e('‮17','%5Ba')+this[_0x483e('‫18','iS7N')]+']'+_0x6f057a[_0x483e('‫19','W[z$')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else if(_0x6f057a['code']==0x94){$[_0x483e('‫1a','%5Ba')]('账号['+this[_0x483e('‮1b','XhNr')]+']'+_0x6f057a['msg']+_0x483e('‮1c','XhNr'));}}catch(_0x5cab51){console[_0x483e('‫1d','iS7N')](_0x5cab51);}finally{return Promise[_0x483e('‮1e','N$Dx')](0x1);}}async[_0x483e('‮1f','iS7N')](){var _0x3bdc64={'SyZla':function(_0x1f2b74,_0x161a32,_0x1cfe6d){return _0x1f2b74(_0x161a32,_0x1cfe6d);},'GtZPe':_0x483e('‫20','4bBD'),'YAaBv':function(_0xb95511,_0x499384){return _0xb95511==_0x499384;},'UAGTv':function(_0x3e9cda,_0x26b2f0){return _0x3e9cda!==_0x26b2f0;}};try{let _0x27b201=_0x483e('‮21','pMrl');let _0x18c4ad=''+this[_0x483e('‮22','%5Ba')];let _0x362531='';let _0xf6120c=populateUrlObject(_0x27b201,_0x18c4ad);await _0x3bdc64[_0x483e('‫23','OK3n')](httpRequest,_0x3bdc64[_0x483e('‮24','pMrl')],_0xf6120c);let _0x6626a4=httpResult;if(!_0x6626a4)return;if(_0x3bdc64[_0x483e('‮25','eFk9')](_0x6626a4[_0x483e('‮26','4cEn')],0xc8)){if(_0x3bdc64[_0x483e('‫27','#act')](_0x6626a4[_0x483e('‫28','!snZ')][_0x483e('‫29','pMrl')][_0x483e('‮2a','XhNr')],0x1)){if(_0x3bdc64['UAGTv']('oYYLp','jExzM')){await this['checkIn']();}else{try{httpResult=JSON[_0x483e('‫2b','B$0K')](resp[_0x483e('‫2c','%5Ba')]);}catch(_0x1c7064){httpResult=resp[_0x483e('‮2d','Fyaf')];}}}else{$[_0x483e('‫2e','f*^[')]('账号['+this['name']+_0x483e('‮2f','0%Mq'));}if(_0x6626a4[_0x483e('‮30','HVgI')][_0x483e('‫31','0%Mq')]['status']==0x1){await $['wait'](0x1388);await this[_0x483e('‮32','HVgI')]();}else{$[_0x483e('‫33','V1#s')]('账号['+this['name']+_0x483e('‫34','EP^R'));}if(_0x6626a4[_0x483e('‫35','nL*6')][_0x483e('‮36','cp7z')][_0x483e('‮37','HVgI')]==0x1){}else{}}else{$[_0x483e('‮38','iS7N')](_0x483e('‮39',')K50')+this[_0x483e('‮3a','8Z#n')]+']查询账户失败，变量可能错误');}}catch(_0x3e5133){console[_0x483e('‫3b','un[p')](_0x3e5133);}finally{return Promise[_0x483e('‫3c','pMrl')](0x1);}}async[_0x483e('‫3d','%5Ba')](){var _0x294fd1={'FAwEa':'Content-Type','SdKVp':_0x483e('‫3e','4bBD'),'lVVZP':_0x483e('‫3f','iS7N'),'taOhl':function(_0x3059e8,_0x3ba598){return _0x3059e8!==_0x3ba598;},'FUtmq':'xHMbj','hbkyM':_0x483e('‫40','0o2M'),'lAlvI':function(_0x29fd59,_0x37ad67,_0x392cef){return _0x29fd59(_0x37ad67,_0x392cef);},'ITzjz':_0x483e('‮41','*7$u'),'CALNE':function(_0x58ea10,_0x476f86){return _0x58ea10==_0x476f86;}};try{if(_0x294fd1[_0x483e('‫42','#R&E')](_0x294fd1[_0x483e('‮43','0%Mq')],_0x294fd1['hbkyM'])){let _0x54e078='https://miniapp.you.163.com/act/money/checkIn/V3/checkIn.json';let _0x17de66=''+this['cookie'];let _0xb208c4='';let _0x2d7130=_0x294fd1['lAlvI'](populateUrlObject,_0x54e078,_0x17de66);await httpRequest(_0x294fd1['ITzjz'],_0x2d7130);let _0x55c374=httpResult;if(!_0x55c374)return;if(_0x294fd1['CALNE'](_0x55c374['code'],0xc8)){$[_0x483e('‮44','[gQz')]('账号['+this[_0x483e('‫45','un[p')]+_0x483e('‫46','iS7N')+_0x55c374[_0x483e('‫47','*7$u')]['totalAmount']+'元');await $[_0x483e('‮48','pMrl')](0x1388);await this[_0x483e('‫49','cp7z')]();}}else{urlObject['body']=body;urlObject[_0x483e('‫4a',')$k(')][_0x294fd1['FAwEa']]=_0x294fd1[_0x483e('‮4b','4cEn')];urlObject[_0x483e('‫4c','0%Mq')][_0x294fd1['lVVZP']]=urlObject[_0x483e('‫4d','Vr(]')]?urlObject[_0x483e('‫4e','0%Mq')][_0x483e('‫4f','Vr(]')]:0x0;}}catch(_0x3ca53d){console['log'](_0x3ca53d);}finally{return Promise['resolve'](0x1);}}async[_0x483e('‮50','#act')](){var _0x35d22e={'zaSSL':function(_0xb23d01,_0x4d50bf,_0x7032a4){return _0xb23d01(_0x4d50bf,_0x7032a4);},'affZD':_0x483e('‫51','[gQz'),'Glwnp':function(_0x1fc9d4,_0x399e9f){return _0x1fc9d4==_0x399e9f;},'zCIhR':function(_0x5c74f2,_0x2aa731){return _0x5c74f2!==_0x2aa731;},'epWXy':_0x483e('‫52','cp7z'),'OsBVO':_0x483e('‮53','RG8J')};try{let _0x4ef4b5=_0x483e('‮54','XhNr');let _0x253166=''+this[_0x483e('‫55','eFk9')];let _0x42686a='';let _0x5c7d63=populateUrlObject(_0x4ef4b5,_0x253166);await _0x35d22e['zaSSL'](httpRequest,_0x35d22e[_0x483e('‫56','nL*6')],_0x5c7d63);let _0x6472ee=httpResult;if(!_0x6472ee)return;if(_0x35d22e[_0x483e('‮57','RG8J')](_0x6472ee[_0x483e('‮58','HVgI')],0xc8)){$['logAndNotify'](_0x483e('‮59','un[p')+this[_0x483e('‮5a','N@eJ')]+_0x483e('‮5b','EP^R')+_0x6472ee[_0x483e('‫5c','pMrl')][_0x483e('‫5d','Fyaf')]+'💧');}}catch(_0x799f78){if(_0x35d22e[_0x483e('‫5e','*7$u')](_0x35d22e[_0x483e('‮5f','VxWK')],_0x35d22e[_0x483e('‫60','#act')])){console[_0x483e('‮61','VxWK')](_0x799f78);}else{$[_0x483e('‫62','HVgI')](_0x483e('‫63','HVgI')+this[_0x483e('‮64','N$Dx')]+_0x483e('‫65','CbGT'));}}finally{return Promise['resolve'](0x1);}}async[_0x483e('‫66','Fyaf')](){var _0x287eff={'oGLVa':function(_0xc6aefa,_0x5565eb){return _0xc6aefa===_0x5565eb;},'MLLRB':_0x483e('‮67','4cEn'),'HSwff':function(_0x3232c8,_0x3fdc04,_0xe00209){return _0x3232c8(_0x3fdc04,_0xe00209);},'Oowet':function(_0x3b6f5e,_0x37b332){return _0x3b6f5e==_0x37b332;},'RfsTq':_0x483e('‫68','!snZ'),'yfnjs':function(_0x259592,_0x3b3474){return _0x259592!==_0x3b3474;},'OoGZh':'pEfkQ'};try{if(_0x287eff['oGLVa'](_0x483e('‮69','Vr(]'),_0x287eff['MLLRB'])){console['log'](e);}else{let _0x1d8023=_0x483e('‫6a','8Z#n');let _0x57b711=''+this[_0x483e('‮6b','XhNr')];let _0x4eb8b6='';let _0x214349=_0x287eff[_0x483e('‫6c','W[z$')](populateUrlObject,_0x1d8023,_0x57b711);await _0x287eff['HSwff'](httpRequest,_0x483e('‮6d','zBcz'),_0x214349);let _0x14adf7=httpResult;if(!_0x14adf7)return;if(_0x287eff[_0x483e('‫6e','[gQz')](_0x14adf7['result'][_0x483e('‫6f','#R&E')],0x1)){$[_0x483e('‮70','zBcz')](_0x483e('‫71','N$Dx')+this['name']+_0x483e('‮72','V1#s')+_0x14adf7['result'][_0x483e('‮73','iS7N')]+'💧');await $[_0x483e('‮74','HVgI')](0x7d00);await this[_0x483e('‮75','OK3n')]();}if(_0x287eff[_0x483e('‮76','!mxJ')](_0x14adf7['result'][_0x483e('‫77','IH$F')],0x2)){if(_0x287eff[_0x483e('‫78',')$k(')]!==_0x287eff[_0x483e('‮79','HVgI')]){$[_0x483e('‮7a','nL*6')](_0x483e('‮7b','iS7N')+this[_0x483e('‮7c','eFk9')]+']浏览获得:\x20'+_0x14adf7[_0x483e('‮7d','II$J')][_0x483e('‮7e',')K50')]+'💧');}else{$[_0x483e('‮7f','V$r%')]('账号['+this[_0x483e('‮80','RG8J')]+']领取免费水滴:\x20今日已领完');}}}}catch(_0x3abce4){if(_0x287eff[_0x483e('‫81','*7$u')]('cgupC',_0x287eff['OoGZh'])){console[_0x483e('‫82','Qbn!')](_0x3abce4);}else{$['logAndNotify'](_0x483e('‫13','*5ff')+this[_0x483e('‫83','!tDF')]+_0x483e('‫84','#act'));}}finally{return Promise['resolve'](0x1);}}async['taskRecordId'](){var _0x39c82c={'bqSWJ':_0x483e('‮85','mgek'),'ETBzf':function(_0x220466,_0x2e768b,_0xd90104){return _0x220466(_0x2e768b,_0xd90104);},'MzShr':function(_0x255426,_0x3f79e2){return _0x255426===_0x3f79e2;},'tXizj':_0x483e('‫86','EP^R'),'oBgnY':_0x483e('‮87','XhNr')};try{let _0x46395c='https://miniapp.you.163.com/orchard/task/water/get.json?taskId=REWARD_TOMORROW&taskRecordId=6509215';let _0x13548b=''+this[_0x483e('‮88','IH$F')];let _0x2f94e8='';let _0x335098=_0x39c82c['ETBzf'](populateUrlObject,_0x46395c,_0x13548b);await _0x39c82c[_0x483e('‫89','un[p')](httpRequest,'get',_0x335098);let _0x2cd22b=httpResult;if(!_0x2cd22b)return;if(_0x2cd22b[_0x483e('‫8a','PpNM')]['result']==0x1){$['logAndNotify'](_0x483e('‮8b','uSC$')+this['name']+']领取气泡水滴:\x20'+_0x2cd22b[_0x483e('‮8c','W[z$')][_0x483e('‫8d','pMrl')]+'💧');}if(_0x2cd22b['result'][_0x483e('‮8e','un[p')]==0x2){$[_0x483e('‫8f','4cEn')](_0x483e('‮39',')K50')+this[_0x483e('‮90','0o2M')]+']领取气泡水滴:\x20今日已领取过了');}}catch(_0x16295c){if(_0x39c82c[_0x483e('‮91','eFk9')](_0x483e('‮92','VxWK'),_0x39c82c[_0x483e('‮93','[gQz')])){console[_0x483e('‮94','EP^R')](_0x16295c);}else{return Promise[_0x483e('‫95','IH$F')](0x1);}}finally{if(_0x39c82c[_0x483e('‮96','pMrl')](_0x39c82c[_0x483e('‮97','IH$F')],_0x39c82c['oBgnY'])){return Promise['resolve'](0x1);}else{let _0x3c98ed=url[_0x483e('‮98','HVgI')]('//','/')[_0x483e('‫99','Fyaf')]('/')[0x1];let _0x86d35e={'url':url,'headers':{'Host':_0x3c98ed,'Content-Type':'application/json','X-WX-3RD-Session':ck},'timeout':0x1388};if(body){_0x86d35e[_0x483e('‫9a','*7$u')]=body;_0x86d35e['headers'][_0x483e('‫9b','RG8J')]=_0x39c82c[_0x483e('‮9c','#act')];_0x86d35e[_0x483e('‮9d','eFk9')][_0x483e('‫9e','II$J')]=_0x86d35e['body']?_0x86d35e[_0x483e('‮9f','iS7N')]['length']:0x0;}return _0x86d35e;}}}async[_0x483e('‫a0','*7$u')](){var _0x5af847={'xGWCn':function(_0x39c7ee,_0x12167e){return _0x39c7ee!==_0x12167e;},'gzkZp':_0x483e('‫a1','4cEn'),'xiCyv':function(_0xa85cfe,_0x460e6c,_0x5740d1){return _0xa85cfe(_0x460e6c,_0x5740d1);},'JQvkY':function(_0x48b09a,_0x5dcde0,_0x173f03){return _0x48b09a(_0x5dcde0,_0x173f03);},'eBANT':_0x483e('‫a2','f*^['),'Ddqpt':function(_0x579aa2,_0x2bb9c2){return _0x579aa2==_0x2bb9c2;},'OcbwZ':function(_0x4ddca3,_0x43e31f){return _0x4ddca3!==_0x43e31f;},'xTUHc':_0x483e('‫a3','B$0K'),'Tppyr':_0x483e('‫a4','eFk9')};try{if(_0x5af847[_0x483e('‮a5','zBcz')](_0x483e('‫a6','#R&E'),_0x5af847[_0x483e('‮a7','*7$u')])){let _0x4564fb=str[_0x483e('‮a8','VxWK')]('＃');this[_0x483e('‫a9','f*^[')]=++userIdx;this[_0x483e('‫aa','Qbn!')]=this[_0x483e('‮ab','00NH')];this[_0x483e('‫ac','65as')]=_0x4564fb;this['ckValid']=!![];}else{let _0x138b1f=_0x483e('‮ad','65as');let _0x4d92b6=''+this[_0x483e('‮ae','!snZ')];let _0x5a547e='';let _0x334f6a=_0x5af847['xiCyv'](populateUrlObject,_0x138b1f,_0x4d92b6);await _0x5af847[_0x483e('‮af','V1#s')](httpRequest,_0x5af847[_0x483e('‮b0','!mxJ')],_0x334f6a);let _0x48ab31=httpResult;if(!_0x48ab31)return;if(_0x5af847[_0x483e('‮b1','pMrl')](_0x48ab31['result'][_0x483e('‫b2','0o2M')],0x1)){if(_0x5af847[_0x483e('‮b3','eFk9')](_0x5af847[_0x483e('‫b4','Vr(]')],_0x483e('‫b5','4cEn'))){$[_0x483e('‮b6','*5ff')](_0x483e('‫b7','W[z$')+this[_0x483e('‮80','RG8J')]+_0x483e('‮b8','XhNr')+_0x48ab31[_0x483e('‫b9','VxWK')][_0x483e('‫ba','sxQ5')]+'💧');}else{return Promise['resolve'](0x1);}}if(_0x5af847['Ddqpt'](_0x48ab31['result'][_0x483e('‮bb','[gQz')],0x2)){if(_0x5af847[_0x483e('‮bc','XhNr')]!==_0x5af847[_0x483e('‮bd','B$0K')]){return Promise[_0x483e('‮be','nL*6')](0x1);}else{$[_0x483e('‮bf','pMrl')](_0x483e('‫c0','00NH')+this[_0x483e('‮c1',')$k(')]+_0x483e('‮c2','8Z#n'));}}}}catch(_0x2f87ac){console['log'](_0x2f87ac);}finally{return Promise[_0x483e('‫c3','f*^[')](0x1);}}async['dynamic'](){var _0x47b8b0={'pcwvK':_0x483e('‫c4','XhNr'),'HloLx':function(_0x5a9dd8,_0x42712b){return _0x5a9dd8==_0x42712b;},'OGqDk':function(_0x3f4ab3,_0x465a90){return _0x3f4ab3>=_0x465a90;}};try{let _0x2dfc92=_0x483e('‫c5','nL*6');let _0x4dc306=''+this['cookie'];let _0x2ee830='';let _0x2f986d=populateUrlObject(_0x2dfc92,_0x4dc306);await httpRequest(_0x47b8b0[_0x483e('‮c6','XhNr')],_0x2f986d);let _0x58f361=httpResult;if(!_0x58f361)return;if(_0x47b8b0[_0x483e('‫c7','#R&E')](_0x58f361[_0x483e('‫c8','Qbn!')],0xc8)){if(_0x47b8b0['OGqDk'](_0x58f361['result'][_0x483e('‫c9','CbGT')],0xa)){$[_0x483e('‮ca','XhNr')]('账号['+this[_0x483e('‫aa','Qbn!')]+']'+_0x58f361['result']['levelDesc']+_0x483e('‮cb','4bBD')+_0x58f361[_0x483e('‫cc','8Z#n')][_0x483e('‫cd','uSC$')]+'💧');await $[_0x483e('‫ce','PpNM')](0x1388);await this[_0x483e('‫cf','V1#s')]();}else{$[_0x483e('‮7f','V$r%')](_0x483e('‫d0','IH$F')+this[_0x483e('‫45','un[p')]+']剩余'+_0x58f361[_0x483e('‮30','HVgI')]['leftAmount']+_0x483e('‮d1','VxWK'));}}}catch(_0x16e6f4){console['log'](_0x16e6f4);}finally{return Promise[_0x483e('‮d2','RG8J')](0x1);}}async[_0x483e('‮d3','0o2M')](){var _0x371be2={'yjyTT':function(_0x4e0fc0,_0xf5a703,_0x431df7){return _0x4e0fc0(_0xf5a703,_0x431df7);},'mfkEL':function(_0x1730dc,_0x19889){return _0x1730dc==_0x19889;},'iwbhM':_0x483e('‮d4','RG8J'),'cSQBp':'gTmDw'};try{let _0x33d950=_0x483e('‮d5','XhNr');let _0x5ca88e=''+this[_0x483e('‮d6',')$k(')];let _0x4ef9ae='';let _0x4d8e91=_0x371be2['yjyTT'](populateUrlObject,_0x33d950,_0x5ca88e);await _0x371be2[_0x483e('‫d7','OK3n')](httpRequest,_0x483e('‮d8','mgek'),_0x4d8e91);let _0x17daa0=httpResult;if(!_0x17daa0)return;if(_0x371be2[_0x483e('‮d9','Vr(]')](_0x17daa0[_0x483e('‫da','B$0K')],0xc8)){if(_0x483e('‮db','eFk9')!==_0x371be2[_0x483e('‫dc','W[z$')]){$[_0x483e('‫dd','!mxJ')](_0x483e('‮de','!snZ')+this['name']+_0x483e('‮df','#R&E')+_0x17daa0[_0x483e('‮7d','II$J')][_0x483e('‫e0','PpNM')]+'💧');}else{$['logAndNotify']('账号['+this[_0x483e('‫aa','Qbn!')]+_0x483e('‫e1',')K50'));await $[_0x483e('‫e2','#R&E')](0xbb8);await this[_0x483e('‮e3','HVgI')]();}}if(_0x371be2['mfkEL'](_0x17daa0[_0x483e('‮e4','N@eJ')],0x1f4)){$['logAndNotify'](_0x483e('‮e5','4bBD')+this[_0x483e('‮e6','HVgI')]+']水滴不足');}}catch(_0x160507){console[_0x483e('‫82','Qbn!')](_0x160507);}finally{if(_0x483e('‮e7','B$0K')===_0x371be2[_0x483e('‮e8','!mxJ')]){return Promise[_0x483e('‫3c','pMrl')](0x1);}else{return Promise[_0x483e('‫e9','8Z#n')](0x1);}}}async['sc'](){var _0x199947={'sebgB':function(_0x54413d,_0x348dc7){return _0x54413d===_0x348dc7;},'UqbrM':_0x483e('‮ea','65as'),'pCHUY':_0x483e('‫eb','CbGT'),'PggAY':function(_0x57068b,_0x19efc1){return _0x57068b==_0x19efc1;}};try{if(_0x199947['sebgB'](_0x199947['UqbrM'],_0x483e('‮ec','VxWK'))){let _0xf95ae3='https://miniapp.you.163.com/orchard/task/water/get.json?taskId=GET_EVERYDAY_RANDOM&taskRecordId=&subTaskId=';let _0x3ea8cd=''+this['cookie'];let _0x2d314a='';let _0x230ed0=populateUrlObject(_0xf95ae3,_0x3ea8cd);await httpRequest(_0x199947[_0x483e('‫ed','B$0K')],_0x230ed0);let _0x4ba886=httpResult;if(!_0x4ba886)return;if(_0x199947[_0x483e('‫ee','4cEn')](_0x4ba886[_0x483e('‮ef',')$k(')][_0x483e('‫f0','b%CH')],0x1)){$[_0x483e('‫f1','Fyaf')](_0x483e('‮f2','eFk9')+this['name']+_0x483e('‫f3','pMrl')+_0x4ba886['result'][_0x483e('‮f4','B$0K')]+'💧');}if(_0x4ba886['result'][_0x483e('‫35','nL*6')]==0x2){$['logAndNotify'](_0x483e('‫f5','#R&E')+this['name']+_0x483e('‮f6','B$0K'));}}else{return Promise[_0x483e('‮f7','#R&E')](0x1);}}catch(_0x5d3eff){console[_0x483e('‫f8','b%CH')](_0x5d3eff);}finally{return Promise[_0x483e('‫f9','Fyaf')](0x1);}}}!(async()=>{var _0x52baa5={'mdkFk':function(_0x5ac978,_0x11b651){return _0x5ac978!==_0x11b651;},'QVeVR':function(_0xcbcb01){return _0xcbcb01();},'QglfN':function(_0xadc85f,_0x3a0d67){return _0xadc85f>_0x3a0d67;},'haHRH':'\x0a--------------\x20卡密验证\x20--------------'};if(_0x52baa5[_0x483e('‫fa','N@eJ')](typeof $request,_0x483e('‫fb','PpNM'))){}else{if(!(await _0x52baa5[_0x483e('‮fc','4bBD')](checkEnv)))return;let _0x4ef33e=[];let _0x36f1f8=userList[_0x483e('‮fd','II$J')](_0x1e76f6=>_0x1e76f6[_0x483e('‮fe','OK3n')]);if(_0x52baa5[_0x483e('‮ff','RG8J')](_0x36f1f8[_0x483e('‫100','N@eJ')],0x0)){$['logAndNotify'](_0x52baa5['haHRH']);_0x4ef33e=[];for(let _0x48fb52 of _0x36f1f8){_0x4ef33e['push'](_0x48fb52['km']());}await Promise[_0x483e('‫101','IH$F')](_0x4ef33e);_0x36f1f8=_0x36f1f8[_0x483e('‫102','%5Ba')](_0x5eada7=>_0x5eada7[_0x483e('‫103','00NH')]);if(_0x52baa5['QglfN'](_0x36f1f8[_0x483e('‫104','4cEn')],0x0)){$[_0x483e('‮105','N$Dx')](_0x483e('‫106','!mxJ'));_0x4ef33e=[];for(let _0x3f0cfe of _0x36f1f8){var _0x34584a=_0x483e('‫107','00NH')[_0x483e('‮108','pMrl')]('|'),_0x4caea7=0x0;while(!![]){switch(_0x34584a[_0x4caea7++]){case'0':_0x4ef33e[_0x483e('‮109','nL*6')](_0x3f0cfe['taskRecordId']());continue;case'1':await $[_0x483e('‮10a','#act')](0x1388);continue;case'2':_0x4ef33e[_0x483e('‮10b','Vr(]')](_0x3f0cfe[_0x483e('‮10c','N$Dx')]());continue;case'3':_0x4ef33e[_0x483e('‮10d','zBcz')](_0x3f0cfe['subTaskId']());continue;case'4':_0x4ef33e['push'](_0x3f0cfe['finish']());continue;case'5':await $[_0x483e('‫10e','f*^[')](0x1388);continue;case'6':await $[_0x483e('‮10f','un[p')](0x1388);continue;case'7':await $[_0x483e('‫10e','f*^[')](0x1388);continue;case'8':await $[_0x483e('‫110','0%Mq')](0x1388);continue;case'9':_0x4ef33e['push'](_0x3f0cfe['dynamic']());continue;case'10':_0x4ef33e[_0x483e('‫111','un[p')](_0x3f0cfe['sc']());continue;}break;}}await Promise[_0x483e('‫112','pMrl')](_0x4ef33e);}}await $[_0x483e('‫113','XhNr')]();}})()[_0x483e('‫114','Vr(]')](_0x206438=>console[_0x483e('‮115','*5ff')](_0x206438))['finally'](()=>$[_0x483e('‮116','00NH')]());async function checkEnv(){var _0x2063e5={'nHbtU':function(_0x4da781,_0x282680){return _0x4da781!==_0x282680;},'ZbTdr':_0x483e('‮117','RG8J'),'fJbPf':function(_0x2fcc7f,_0x3531db){return _0x2fcc7f===_0x3531db;},'oFzyl':_0x483e('‮118','[gQz'),'qrSsH':'未找到变量\x20请阅读脚本说明'};if(userCookie){if(_0x2063e5[_0x483e('‫119','8Z#n')](_0x2063e5[_0x483e('‮11a','W[z$')],_0x483e('‮11b','W[z$'))){for(let _0x4d6302 of userCookie['split']('@')){if(_0x4d6302)userList[_0x483e('‮11c','sxQ5')](new UserInfo(_0x4d6302));}userCount=userList[_0x483e('‮11d','OK3n')];}else{$[_0x483e('‮11e','0%Mq')](_0x483e('‮11f','0%Mq')+this['name']+']'+result[_0x483e('‫120','V1#s')]+_0x483e('‮121','B$0K'));}}else{if(_0x2063e5['fJbPf'](_0x2063e5[_0x483e('‮122','Vr(]')],_0x483e('‫123','mgek'))){$[_0x483e('‫124','PpNM')](_0x2063e5['qrSsH']);return;}else{resolve();}}$['logAndNotify']('共找到'+userCount+_0x483e('‫125','VxWK'));return!![];}function populateUrlObject(_0x16e4ba,_0x56d494,_0x2d869a=''){var _0x54cf3f={'OnFpT':function(_0x33ad0a,_0x1ad26c){return _0x33ad0a!==_0x1ad26c;},'Yhrze':_0x483e('‮126','0o2M'),'UwVTl':'CcVpm','VDzzj':_0x483e('‫127','V1#s'),'ckwXf':_0x483e('‮128','00NH'),'rdzqD':_0x483e('‫129',')$k(')};let _0x15e978=_0x16e4ba['replace']('//','/')['split']('/')[0x1];let _0x59cfb2={'url':_0x16e4ba,'headers':{'Host':_0x15e978,'Content-Type':_0x483e('‮12a','[gQz'),'X-WX-3RD-Session':_0x56d494},'timeout':0x1388};if(_0x2d869a){if(_0x54cf3f['OnFpT'](_0x54cf3f[_0x483e('‫12b','PpNM')],_0x54cf3f['UwVTl'])){_0x59cfb2[_0x483e('‮12c','sxQ5')]=_0x2d869a;_0x59cfb2[_0x483e('‫12d','CbGT')][_0x54cf3f[_0x483e('‮12e','^vWm')]]=_0x54cf3f[_0x483e('‮12f','uSC$')];_0x59cfb2[_0x483e('‮130','65as')][_0x54cf3f[_0x483e('‮131','0o2M')]]=_0x59cfb2[_0x483e('‮132','II$J')]?_0x59cfb2['body'][_0x483e('‫133','#R&E')]:0x0;}else{console[_0x483e('‫134','N$Dx')](e);}}return _0x59cfb2;}async function httpRequest(_0x53a7d4,_0x1df7a4){var _0x51e629={'YgybZ':function(_0x4846e4,_0x479213){return _0x4846e4!==_0x479213;},'gMMYb':_0x483e('‫135','!mxJ'),'XKIdU':_0x483e('‫136','^vWm'),'IGmUc':function(_0x83d848,_0x316e10){return _0x83d848==_0x316e10;},'svZEO':_0x483e('‫137','V$r%'),'NijfD':function(_0x2a7a76,_0x17b6d0){return _0x2a7a76===_0x17b6d0;},'mkgax':function(_0x7f1e2b,_0x2277ec){return _0x7f1e2b!==_0x2277ec;},'oshql':_0x483e('‮138','V$r%'),'vNHcq':function(_0x5bf95a){return _0x5bf95a();}};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x3c5c59=>{$[_0x483e('‮139','4bBD')](_0x53a7d4,_0x1df7a4,async(_0x57282f,_0x268e09,_0xa4164)=>{try{httpReq=_0x268e09;httpResp=_0xa4164;if(_0x57282f){if(_0x51e629[_0x483e('‫13a','!tDF')](_0x483e('‫13b','mgek'),_0x51e629[_0x483e('‫13c','Qbn!')])){console[_0x483e('‫13d',')$k(')](_0x53a7d4+_0x483e('‫13e','Qbn!'));console[_0x483e('‮13f','0%Mq')](JSON[_0x483e('‫140','Vr(]')](_0x57282f));}else{httpResult=_0xa4164[_0x483e('‫141','EP^R')];}}else{if('RAPxO'!==_0x51e629[_0x483e('‫142','8Z#n')]){if(_0xa4164[_0x483e('‮143','!snZ')]){if(_0x51e629[_0x483e('‫144','un[p')](typeof _0xa4164[_0x483e('‮145',')$k(')],_0x51e629[_0x483e('‫146','VxWK')])){httpResult=_0xa4164['body'];}else{try{httpResult=JSON['parse'](_0xa4164['body']);}catch(_0x411046){httpResult=_0xa4164[_0x483e('‮147','8Z#n')];}}}}else{console[_0x483e('‫148','V$r%')](_0x53a7d4+_0x483e('‮149','nL*6'));console[_0x483e('‮14a',')K50')](JSON['stringify'](_0x57282f));}}}catch(_0x177c97){if(_0x51e629[_0x483e('‮14b',')$k(')]('mILIS',_0x483e('‮14c','0o2M'))){console[_0x483e('‮14d','sxQ5')](_0x177c97);}else{this[_0x483e('‮14e','b%CH')]=result[_0x483e('‫14f','65as')][_0x483e('‫150','!tDF')];this[_0x483e('‮151','!mxJ')]=timestampToTime(this['time']);this[_0x483e('‮152','VxWK')]=!![];this[_0x483e('‮153','^vWm')]=!![];$[_0x483e('‮154','II$J')]('账号['+this[_0x483e('‮155','0%Mq')]+_0x483e('‫156','^vWm')+this[_0x483e('‮157','#act')]);}}finally{if(_0x51e629[_0x483e('‫158','V1#s')]('ZFVvN',_0x51e629[_0x483e('‮159','zBcz')])){return Promise[_0x483e('‮15a','uSC$')](0x1);}else{_0x51e629[_0x483e('‮15b','[gQz')](_0x3c5c59);}}});});};_0xodd='jsjiami.com.v6';

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
            if (Notify > 0){
            if($.isNode()){
                var notify = require('./sendNotify');
                $.logAndNotify('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            }
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
            $.logAndNotify(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}