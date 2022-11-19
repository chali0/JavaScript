/*
目标:  睡觉宝App
码子:  

变量：捉包https://mapi.shuijiaobao.cn/login/code域名 body里的equipmentCode=xxxxxxx 同时header里也包含这串 (#这是设备标识，多账号自己想办法)

格式：export sleep="ua=5201314"  多账号换行隔开

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

交流群：https://t.me/meetclover01
*/

const $ = new Env("睡觉宝");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
let iphone = 'HUAWEI' //设备标识，可以不改
let app = '2.0.5'        //app版本
let ah = '10'             //安卓版本 (7.1就是7 | 8.2就是8 不要具体到小数点)




var _0xodz='jsjiami.com.v6',_0xodz_=['‮_0xodz'],_0x1aef=[_0xodz,'w7HCoE0vHw==','w7/CpzHCosOL','Fi3CqVc=','w6XCgMKhBcO5MsK4w6nCng==','dMK4w43DkMKT','fMKlw5nDnA==','w7TDj8OXwrwu','w63Dg05/wr8=','wonDq8OKMMO2','wr7Dl0wBP8Kzwq8rGcO2w4J4','5oC96aasw7xd54275Z2f5pep6ZSL','Y3g6JMOgwrPDpsK4CMKzWXfCjWzCgXjDssOIHMK2wrfDscOgW8OMQcKcSV07wpfDtsOmw7FcwqI9wqwaUELDvA==','UcKOw7DDt8Kn','woN+K0Q7w4XDmg==','wqnDpsOpL8O9KcKYw6I=','wo7DgMOuFMKM','R0HCsg==','w640wqc=','ecOhdMKlYMKyaANcSsKBFDMBwrPCng==','G8OJw7gTDSvDtnB1cA==','w7rDm8OsLy90PcKTw5/Cm8OtwpUE','wrRCRcKDZcOvEsO4JjU=','w4JoNnc8wpU=','JMKAwpcKwqI=','QEvCrDtiwrcgw5QFwrtReA==','euefueW4oOWStOiMgOW9jA==','bcKdw4lo','w6DDisOLwogUwpl5WwY=','woXDhcO4IsOVUUJ5GMKUesOVw6Y=','wpPDgMO1CQ==','PMKRU8KEXA==','J8KXwo0QwqI=','JMKMccKNVg==','wqxhw6TDuy0kwoU=','UcKEw7bDtsKvw6kD','dGUHZMOcw4zDvGYwQTTCqA==','wrZww6PDpDJow48MwpnDo8OuVnbDhcKTFxzChnHCoj4gc1rCvMOxKsK/NQUTQsKfw7wsOicswrHDjSQkw5AZbsOT','aTIVwp9v','wqdOXMKyX8O2Fg==','BnDCrcKIMAXChsO6','TMKdw7Zsbw==','w6LCiBs=','woZ9wqpUMibDlsOwShVNFsKLHQ==','wqI1wqfCrHEuw5IRw4LCtcOiDyQ=','OcOMwo11','ZcKvw5hkcw==','wpHDscOODMOB','w6PChcKSVmk=','w63CtMK4c8KVAMKFDF3Dm3AV','6LSB5YyFBA==','w55hw7fDrw==','KsKuwqoZwpQZasKSw73Dr8OQ','w7nDlsOJwrslwpRZUh3Cnkxf','6Lem5Y+ccw==','IcOmwoU=','VcKXLMKRw5vCrcOq','PcKuwrUJ','wpXDgSjCpsKg','w7XDnXZPwoc=','w6TDl15dw5jCo1DDqg==','BsK+w5cgw7s=','wqtOUQ==','wqXCicKe','w73CqsKzbcKICMKuBlnDjg==','KcOkwpfDsHJbcMKZHsKfw4xgL3o=','wpBNwqM3wrXCg3cIGlRnVcKF','C8K0wozDlsK7','wprDl8O8G8Kx','IcKuwqE8wqUTUcKQw6vDo8OEdg==','6LaJ5Y+sMg==','wrzDmUYl','e+W9q+WRv+een+inlPCxo58=','TsKSw6I=','LBQ3HlI=','FUvCmsK+KQ==','w4XCiWUB','5Lys5oCHw6/Dt+eOp+Wcg+aUm+mUtQ==','54Kaw4Hpn5vmi4rljqLmlanplpI=','w7jDv0lgwqxaUEE/w7nDhWcFWh7Cnw==','wqYqw75Gw5I=','w6bChMKsA8O1KMK8','YsKZw4Q=','w5TCkcKs','TMKSw53CgV7DkMKwcsOxwro=','w7DDiMObwpM7wp1yUx3CqElJHsOo','fijDisK9woV1w6PCjwwVwr3Cg0U=','IDxZdg==','BMKew4Yzw7g=','CcONw7kuGzU=','wp3CgAkr','YGMafg==','w53ChxnCpMOv','w7lSw57DmcK0','K0LDpFHDqMOBwrJbNi/Cu08=','6LSq5Yy9w7E=','wrBlw7rDsQ==','woDlvonmsq7msrrojLjlv5c=','w6XCgMKsNg==','TR3CpsK/','RMKAOsKfw4PCvsOAwo/DlsK/w5kUwrNVDsKl','w6DCq8KvXsKSB8KqF0DDnXhDwqxzScOkPcOWdMKZSR4dw4rDi8KFf8OzX8OZecKbwqs=','N8OSTMO/Gw==','wrnDuhzCsMKg','wrfDkcO5N8Or','D8OMw6A8RGjCvH5oIsO3wpXDmDPCr8K1wrwOw7JWwrDDtsK1csKuV8OmwpzCqcODwrQ7I8KAwqfCvF0ew48Aw6RJNMKyOBJzw58kVm3Dmg/Ck1jCqsO2w6LDggA=','w4V5wqpUJnY=','KcKMwrIH','w4/CgABz','WE3Cph89','RcKDw6LDo8Kr','HMKew4oXw7gOccO5w4XDoSfDnA==','OMO8wo/DvDM=','wrZKRMKPUg==','w7bDmMOAwqguwpFz','w6LCjsK8Mg==','wrXDjMOpNQ==','GcKTwrMowow=','e8Kuw6dldw==','BhDCl0J4','R+itj+ahlOaeqeWMn+WugeaKheWcvVFL5p6g5ZqY5LiHZ8KMwprClDPDkn3DnMO0wq195aeL6I6Q5Y2Z5Y+T5ayf','wpDor7fmoZrmna/ljrDlrbfmiKzlnILDjmLmnZPlmYPkuponU8OXw5/CkcK4wokjwpDDjmLlpp7ojbnljJbljYHlr50=','w6XChcK4cg==','wpTCs8OdcHJYw6bCjm8mw4MO','bOitouWIneWmg+WkhuS9ieeUvcKYGOmEjeihqueOoOWjiOmAv+aKoeismuiCu+exmeS8ruiCn+imvumZqg==','IW/Cm8K2Gw==','SH0ePcOU','wrXDrMObP8OqMsKF','NVTDiX3Dlg==','WUQrYcOs','EsKew4kv','w6/DuA7Dow==','UQ3Cu8KwY0M=','5p+85oud5Yq9E8Kvwqjor7LpmZ/orbfoh5PmnJTor7nmmKw=','w5fCpMKXdsKibcObwqjChMONwqvDs8Otwp7CvMOV5Y6C5a+q6amZ6K6TEMKMQMOzcBPCs8KbwpbCvjHDphk4w68=','w5HChksxGQ==','GiFEJ8KUwpPCkjl4DW3DoD/Dt8OBB+aXmOW4jeS6gOWKiHLCucO8IU3CmcOQH051A8KKw6QYwr4=','wqU2RMOZwrwJwrxJO8OvwrILKcOsw67DuOWsouaXtuS7quWIoMKqw6plSStNwqQow5YwOhrDncOMwo4=','bhrCpMKxWQ==','ZsKWw75rVA==','CsKvwrYQwr4=','VGgsUsOV','w73DuUl4wqxL','T8KOw6LDmMKtw7soL0fCicOGw4A=','wrPDggHCi8K/','TCYVwqxo','w7rCnlgMJQ==','SgQ3wr9zw581MsOOw5hTSg==','w6t0B8KMw7Y=','ZEMhEcOV','EMKUwojDtsKT','wojCqcOJWQ==','w5fCpMKXdsKibcObwqjChMONwqvDs8Otwp7CvMOV6LeF5Y+b5qCV5rSZEMKMQMOzcBPCs8KbwpbCvjHDphk4w68=','PcKCwr8W','C8OXw7M=','c8Kww4dQTg==','Rwc8','w53CgAFiAD8=','WkXCpxNo','WMKSw5vCqGk=','ExcTFFDCuw==','wpvDrB/Cu8Kz','w6XCi8KyRXppaw==','asKzw6bDvcKt','JnzDt1fDpw==','aMKtw4lOZg==','w6TCoC7Cnw==','w6fCvDrCmQ==','wqllw77DoA==','N1jDsHg=','SA4nwrJ0w4gP','wrBeW8KO','LsK3dMKvYcK6dSNcRMKHFx06w6fCuw==','PsOwwpHDtm5AcA==','wo9jwrh8LC/DvcOxSiNIAA==','E8Ocw7oBEQ==','OsO+wrLDqE8=','PcKjw5cZw5g=','wq5kcsK/WQ==','EcOeTMOh','woB+wrpcNi7DvMOsWi9cKsKDHQVY','6LWq5Y2iwrk=','w7XDn39VwqY=','CsKHwosfwoo=','wrHDpsOdGsOhJMK4w6rDncKJw6DCpw==','5L+95oCTwqkv54y15Z+X5paz6ZeO','54KJw4Ppn6/mio3ljYzmlYrplKE=','wpHCssOeVGQ=','wpJ6M3k2','wo8dw71dw6DCniE=','N0zDsXHDqw==','KcKIwoADwrl6Mw==','w7PDk1tIw4bCo1o=','wovDoMOG5qGs5b+r6ZaR6K+q','JFjClsKWCg==','VcK4M8KQw5o=','wrHChU8KTg==','5oOr6ae9HyznjbnlnJHml5Lpl6Y=','54Cswpnpn7DmiqnljKrmlIbpl6M=','AXfCkcKLLx/Cjw==','wrXDgsO5M8KM','wrbChmACYQN/','w7DCujPCkg==','YUEvIMO0','5p+S5oqi5YqKclcc6K2f6Zuk6K+g6IWV5p6J6K6D5pu/','JcK0w78lw6Q=','B1XCs8K0Dw==','EOW/mOawjOawouiOs+W9jg==','wpDCiG7Cng==','ICHDjTfCkFPDosOTwqMowoY=','e3zCo8OVw4Q=','a3fCnsOgw41Gwrc=','w6bDicOCwpM/','w5vCnRLCg8Oj','BMOPwqXDtWA=','GjEVKVU=','wqxETw==','6K265rOV5aWb6La/','wojDjsO7','U8KUw7bDsQ==','Sg4+wplpw5M=','dsKoHsKYw68=','SSMowr1/','IyLDjirCpQ==','wpbDhMOvEsOeSEs=','wrJrw7A=','5Yas5ou35YqK','5LqF6LS95Y6e','wrnDnU4wfMK2wo0tG8O6','bn7CvjhZ','w6x0B8KAw7RKw6VJWsKnw7FBcMKp','wpFpwq9RIyjDlg==','FMOIw7glCg==','wojDh8O8F8OH','w4vDiMKHwppK','DcOEWA==','wox+PnQ3w5rDjA==','EXDCkMKIJwLCnMKwai8dw6o=','w63DqMKewr5CwoZMwqBZawwFM3HDiHIlWsKPL8OIS8OqwrJ5w7bDnMK5KMKuwoF7BA==','ZMKvw4vDjMKCw6jClg==','Zl0bF8OJ','XwfCscKu','bsKlw47DkQ==','w4fCjWYDP3E=','w6zCq8K8A8Ok','Tl43JcOZ','L8KawrDDpsKQ','w5jCjWYA','IMO3w5IhKg==','wrXCusOYWU0=','CTgTMVc=','6K6I5rKZ5aeW6LaW','w4fCh28=','AWvCjMKVLAvCgcO7Zw==','worCucOJXnBKw40=','w7fDlsOKwoM=','w4N6I8Kfw7A=','AsKUw545w7ocWg==','w7JOw4nDmcKU','EHDCmsKF','woMew7lqw6bCiw==','wrDDl085','w6PCukkDDA==','w7rCtDDCkg==','EeaDpemmj+aLiuWNow==','L8K3fMK6','w63CjsK/','PsKtwqMYwrs=','wrrDqC/CtsKxO0o=','VMKeOsKbw4c=','wop/wpFSJi4=','wpPCjG7Cm8KldhQ=','PMKcwozDlsKs','w5/CgG0K','ImPDm0XDqQ==','I8KNwrIHwq0=','SAo9wps=','w4Zhw7bDo8K1','w5Nhw7TDmMK0w5Be','J1XCrcKyJw==','w7HCug3CjcO7','Gh0tCVU=','wq3DrCnCs8K9','wpfCgkzCnsKoaxE=','EcOKTcO6Eg==','wqXDr8O7LcOO','wptqwp5LAw==','DcOEWMOIGVrCthU3FBvChQ==','6LWr5Yy2wp0=','w7LDvkFpwrE=','w5DDlCHmoqblvYnplbPor6g=','woh0OFE8w4zDscO6TMOHD8K7','6Lew5Y2Uw5Y=','JS3DpirClQ==','N0LDsGQ=','wq7Dk8OoLsOo','wrDDm2w5Cw==','AmrCjcKU','Q8KbMcKQw5LCqcOMwo/Dl8K7w58i','wq3DqMOIOsOi','wokNw6Zmw7XCkiBUWCB0AcKcw7M=','wpR6LXE/','fsK9w7ABw74LKMKDwq3DtsKWc8OKIMKY','wpB8wrNUNg==','wrrDojfCtsKPLEQdw4A=','wojDjsO7PMOcWmByM8Kec8OF','6Lad5YyeNg==','w5Dohb3li4LmjYrnj7bmm6jmnK3lvZLljLoo5pS76K6P5pyt5b2p','bnbCncOEw5ttwp/Dkk5LwqfDig==','6Lan5YyswoQ=','w5zphIrlu57kuL/otYhE5pSr5rK25o+554yC','IcK3f8KCasK9Tx9ESMKEHg==','6La25Y2PVg==','w6jCi8Kxcg==','w63nmbvlv4/miprliY7CkeS9muearueim+WttQ==','w7LnjIjmnKLphpHluZA=','cnkLaMOVw5vDlnA=','wo4Jw7Ftw6nCmhpWRRBv','w4Rvw7HDr8K/','FMKQw5k3','wr/DvMOYOcOjJcKpw6nDgMKTw7I=','w5Rhw67Dqw==','w63Cj8Kl','A8OZw6At','NCvDgiHCqknDiMOVwqQ0','bMKNw4hgd8Olw7AvwodNwqxRHns=','wqjDusOfKcOGLsKQw6o=','C8OXw7MNECPDnXpxZcO8wok=','D8OKUsOs','UBvCsg==','w73CqeKYmu+5lOWNl+mGj+W0hOWmtOaXoeaLtuahhuacu+ajvOW+vA==','w6TCojTCk8Oo','KcKTw4wQw54=','w7TCj8KveHN+ag==','woDChnHCmsKq','KMO0wpbDuA==','wpHDksO5D8O7UEhy','wqFIS8KDRcOoJ8O6PW3Crg==','KcKgwrIc','wpFoOmIbw4bDmcO6','w5jCjWsWLm3Csl3Cj8Op','b206NQ==','w7HDmMOawps=','wqPDkMOoIsKtw6ZjNQ==','wpbCnHjCncKoZyrDi8OVJl4=','fnkEaMOcw4w=','wrplw6PDtQ==','6LaN5YyfUw==','w77DmWBM','w4jnm4Llv7vmi6rli5TDkOS9t+eaueehqOWupw==','wrvnjKDmnKzph53lu4g=','wo3Cr8OfQ1VSw47Cjg==','w7zDv0lowpZaS3s9','fGMOS8OXw5rDsXshSSbCtA==','6Le05Y2PcA==','w6bohIPli4Xmj4bnj5Xmm4/mnZLlv5vljok/5pWs6K++5p2q5b2u','IumEiuW7puS6vui1phTmlpjmsJzmj4DnjY8=','wrjCm3oTflUpOSnCksOmw6bChMKtSHxawrDDksOBwoICAjjCqR0lRi1ow780E8K1wqtDTw==','w7/DuB/DtCI=','w4vDs8K6wrRR','dnbCqcOxw4dgwr/Dmg==','Who8wqFuw5ceOMOKw40=','wrjDuMOPMsO/LcKTw6vDncK/w6XCscKkw5Y=','wqXCicKewoY=','w7HCq8KIHMOV','wqbDjMO+JA==','6LWr5YyvQw==','wqnnrpfliKrvv6Xnr6g=','ZnjCjsOk','w7HDmMOXwqUlwoV6','5aa8wpnojJnlva0=','wodtwqtc','w5xyDsKaw45Nw78CeQ==','ByvCqkBXEMO7ZxnCsMOxwoxzwp1D','EcK+wpDDv8K8Rww=','wpTDjsOvCQ==','S8KHw7bDv8Kb','S0DClMOfw5M=','wpTDkMOUAcOp','IsKXwqISwqYpeMOPcsKRMsOrwq53ME9PwoEWwqjCgMOZwo3DnwsHw6/DlcOGKSXDkwVJwpXCvMOwZ8KgYQ==','FcOXw6EiGg==','wo3CisOJZm0=','woPDhMOoKcObU0s=','w63DosK5wrVb','cMO7wprCkMOXw6bDl8K1JcOUZjfCvA==','OAc0FUo=','C8KfdcKhQg==','FyrDlDTCoQ==','w7jCujrCtsOkQcKxw5oNTsKYFQ==','w4F6BMKR','w4t6HcKV','KMO0wpvDhm5fZsKD','KcKkwrUe','wrnDrCLCjcK8JlgA','wodtwqZiLiLDgMOq','c3kbRMOMw5M=','VMKGw6LDgMKJ','Z2oPbcOB','J8KJwpLDm8KW','wqPCnXPCusKn','6LeC5Y+sBA==','GiPCoEs=','5q60556y6KWo6aGr5bi05ZK6','fsKvw5rDhMKGw7nCgA==','BzLCoUd8','GsKSwoM2wrc=','aWMqLQ==','wrjCim8HaB11','wrPCgGAXaAFyOzDCisOmw6o=','GMKUw4wyw7MYTA==','w7bCujnCjg==','wrxrw7PDrQ==','QEHCpR14wrs=','Z2MpFcO9w63Ch8O4EcK7T2c=','6LWh5Y+aw5g=','jwsjXBlbbhbiaxNRWmQzSTi.com.v6=='];if(function(_0x3dccd2,_0x256d1e,_0x5069d7){function _0x3db0e8(_0x58550f,_0x27dda8,_0x30bf5b,_0x1ede65,_0x28d7b3,_0x5b1018){_0x27dda8=_0x27dda8>>0x8,_0x28d7b3='po';var _0x426b82='shift',_0x46b468='push',_0x5b1018='‮';if(_0x27dda8<_0x58550f){while(--_0x58550f){_0x1ede65=_0x3dccd2[_0x426b82]();if(_0x27dda8===_0x58550f&&_0x5b1018==='‮'&&_0x5b1018['length']===0x1){_0x27dda8=_0x1ede65,_0x30bf5b=_0x3dccd2[_0x28d7b3+'p']();}else if(_0x27dda8&&_0x30bf5b['replace'](/[wXBlbbhbxNRWQzST=]/g,'')===_0x27dda8){_0x3dccd2[_0x46b468](_0x1ede65);}}_0x3dccd2[_0x46b468](_0x3dccd2[_0x426b82]());}return 0x11431c;};return _0x3db0e8(++_0x256d1e,_0x5069d7)>>_0x256d1e^_0x5069d7;}(_0x1aef,0x10a,0x10a00),_0x1aef){_0xodz_=_0x1aef['length']^0x10a;};function _0x168f(_0x3d99e3,_0x5d729d){_0x3d99e3=~~'0x'['concat'](_0x3d99e3['slice'](0x1));var _0x426679=_0x1aef[_0x3d99e3];if(_0x168f['BkNEIP']===undefined){(function(){var _0x4959ca=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x40886a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4959ca['atob']||(_0x4959ca['atob']=function(_0x59552b){var _0x12bae1=String(_0x59552b)['replace'](/=+$/,'');for(var _0x1ea344=0x0,_0x4bfbfb,_0x4dc251,_0xb506bf=0x0,_0x988de7='';_0x4dc251=_0x12bae1['charAt'](_0xb506bf++);~_0x4dc251&&(_0x4bfbfb=_0x1ea344%0x4?_0x4bfbfb*0x40+_0x4dc251:_0x4dc251,_0x1ea344++%0x4)?_0x988de7+=String['fromCharCode'](0xff&_0x4bfbfb>>(-0x2*_0x1ea344&0x6)):0x0){_0x4dc251=_0x40886a['indexOf'](_0x4dc251);}return _0x988de7;});}());function _0x4ddc65(_0x58d61c,_0x5d729d){var _0x967133=[],_0x275816=0x0,_0x32bd52,_0x3491eb='',_0x3deddb='';_0x58d61c=atob(_0x58d61c);for(var _0x33ce9e=0x0,_0x5381cd=_0x58d61c['length'];_0x33ce9e<_0x5381cd;_0x33ce9e++){_0x3deddb+='%'+('00'+_0x58d61c['charCodeAt'](_0x33ce9e)['toString'](0x10))['slice'](-0x2);}_0x58d61c=decodeURIComponent(_0x3deddb);for(var _0x4ee37d=0x0;_0x4ee37d<0x100;_0x4ee37d++){_0x967133[_0x4ee37d]=_0x4ee37d;}for(_0x4ee37d=0x0;_0x4ee37d<0x100;_0x4ee37d++){_0x275816=(_0x275816+_0x967133[_0x4ee37d]+_0x5d729d['charCodeAt'](_0x4ee37d%_0x5d729d['length']))%0x100;_0x32bd52=_0x967133[_0x4ee37d];_0x967133[_0x4ee37d]=_0x967133[_0x275816];_0x967133[_0x275816]=_0x32bd52;}_0x4ee37d=0x0;_0x275816=0x0;for(var _0x35f350=0x0;_0x35f350<_0x58d61c['length'];_0x35f350++){_0x4ee37d=(_0x4ee37d+0x1)%0x100;_0x275816=(_0x275816+_0x967133[_0x4ee37d])%0x100;_0x32bd52=_0x967133[_0x4ee37d];_0x967133[_0x4ee37d]=_0x967133[_0x275816];_0x967133[_0x275816]=_0x32bd52;_0x3491eb+=String['fromCharCode'](_0x58d61c['charCodeAt'](_0x35f350)^_0x967133[(_0x967133[_0x4ee37d]+_0x967133[_0x275816])%0x100]);}return _0x3491eb;}_0x168f['kSmJRY']=_0x4ddc65;_0x168f['aRZCoo']={};_0x168f['BkNEIP']=!![];}var _0x51b255=_0x168f['aRZCoo'][_0x3d99e3];if(_0x51b255===undefined){if(_0x168f['IUjWkv']===undefined){_0x168f['IUjWkv']=!![];}_0x426679=_0x168f['kSmJRY'](_0x426679,_0x5d729d);_0x168f['aRZCoo'][_0x3d99e3]=_0x426679;}else{_0x426679=_0x51b255;}return _0x426679;};let httpResult,httpReq,httpResp;let userCookie=($['isNode']()?process['env'][_0x168f('‮0','B83(')]:$[_0x168f('‫1','vrSj')](_0x168f('‫2','^SXy')))||'';let userCGkey=($[_0x168f('‫3','62Oc')]()?process['env']['CGkey']:$[_0x168f('‫4','#)67')](_0x168f('‫5','x9as')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;const {machineId,machineIdSync}=require('node-machine-id');machineId()[_0x168f('‮6','men@')](_0x4a2ddc=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x3587e4){var _0x5d958d={'UJSNe':function(_0x24302f,_0xe14286){return _0x24302f===_0xe14286;},'eoPzq':_0x168f('‫7','pAG^'),'xfAvA':'MMPcJ'};this[_0x168f('‫8','y8@1')]=++userIdx;this[_0x168f('‮9','qhl9')]=this['index'];this[_0x168f('‫a','HNts')]=![];this[_0x168f('‫b','HNts')]=![];try{if(_0x5d958d[_0x168f('‮c','HVB7')](_0x5d958d[_0x168f('‫d','i&Wl')],_0x5d958d[_0x168f('‮e','Y)6$')])){this[_0x168f('‫f','vrSj')]=$['str2json'](_0x3587e4);this[_0x168f('‫10','#)67')]=!![];}else{httpResult=JSON[_0x168f('‫11','ys@g')](resp['body']);}}catch(_0x1a1e6b){if(_0x5d958d[_0x168f('‮12','Pke(')]===_0x5d958d[_0x168f('‮13','62Oc')]){this['ckValid']=![];$[_0x168f('‮14','ys@g')](_0x168f('‫15','B83(')+this[_0x168f('‫16','m(&g')]+_0x168f('‮17','jco1'));}else{$[_0x168f('‫18','tXw6')](_0x168f('‮19','2zok')+this['name']+']自动提现暂未开发\x20敬请期待');}}}async['login'](){var _0x5d8db3={'JrtSZ':_0x168f('‮1a','lrT]'),'ABvWX':function(_0x1271e4,_0x3f7296,_0x332a7c){return _0x1271e4(_0x3f7296,_0x332a7c);},'fivDd':_0x168f('‮1b','pAG^'),'jkGZw':function(_0x1f69a4,_0x5e68a1){return _0x1f69a4>_0x5e68a1;},'pwidb':'OCiFo'};try{if(_0x5d8db3[_0x168f('‮1c','KgGt')]!==_0x168f('‫1d','@guz')){taskall[_0x168f('‫1e','HVB7')](user[_0x168f('‮1f','^SXy')]());}else{let _0x352b9b='https://mapi.shuijiaobao.cn/login/code';let _0x1264f4=''+this[_0x168f('‮20','Pke(')]['ua'];let _0x4c76c7=_0x168f('‮21','^HwZ')+this[_0x168f('‮22','tXw6')]['ua'];let _0x4db8ee=populateUrlObject(_0x352b9b,_0x1264f4,_0x4c76c7);await _0x5d8db3['ABvWX'](httpRequest,_0x5d8db3['fivDd'],_0x4db8ee);let _0x4c82cc=httpResult;if(!_0x4c82cc)return;if(_0x4c82cc['ok']=0x1){var _0x18a3a0=_0x168f('‫23','B83(')[_0x168f('‫24','62Oc')]('|'),_0x1ca3af=0x0;while(!![]){switch(_0x18a3a0[_0x1ca3af++]){case'0':if(_0x5d8db3['jkGZw'](_0x4c82cc['data']['userInfo'][_0x168f('‫25','vrSj')],0x2710)){$[_0x168f('‮26','KgGt')](_0x168f('‫27','c@9u')+this['name']+_0x168f('‮28','jco1'));}else{$[_0x168f('‮29','TXze')](_0x168f('‮2a','jQsH')+this['name']+_0x168f('‮2b','jQsH'));}continue;case'1':$[_0x168f('‮2c','Wtxg')](_0x168f('‫2d','sY1I')+this[_0x168f('‫2e','k)n)')]+_0x168f('‮2f','HNts')+this['id']+_0x168f('‫30','@guz')+_0x4c82cc['data']['userInfo']['gold_coin']);continue;case'2':this[_0x168f('‮31','1yDS')]=_0x4c82cc['data'][_0x168f('‮32','^HwZ')][0x0]['id'];continue;case'3':this[_0x168f('‮33','HNts')]=_0x4c82cc['data']['userInfo']['accessToken'];continue;case'4':this['number']=_0x4c82cc[_0x168f('‫34','$AOP')][_0x168f('‮35','Pke(')][0x0]['gold_number'];continue;case'5':this['id']=_0x4c82cc[_0x168f('‮36','HNts')]['userInfo']['id'];continue;case'6':this[_0x168f('‮37','k)n)')]=_0x4c82cc[_0x168f('‮38','ohuA')]['userInfo'][_0x168f('‫39','lrT]')];continue;case'7':this[_0x168f('‫3a','1#4Z')]=_0x4c82cc['data'][_0x168f('‮3b','Pke(')]['equipment_code'];continue;}break;}}else{$[_0x168f('‮3c','ohuA')]('账号['+this[_0x168f('‫3d','ys@g')]+']\x20'+_0x4c82cc[_0x168f('‮3e','yt(J')]+_0x168f('‮3f','Pke('));}}}catch(_0x15c7b0){}finally{if(_0x5d8db3[_0x168f('‮40','i&Wl')]!==_0x168f('‮41','$AOP')){return Promise[_0x168f('‫42','k)n)')](0x1);}else{this[_0x168f('‫43','#)67')]=result[_0x168f('‫44','y!c4')][_0x168f('‫45','KgGt')][_0x168f('‫46','4!J5')];this['key']=result[_0x168f('‮47','B83(')][_0x168f('‮48','tXw6')][_0x168f('‮49','men@')];this['id']=result[_0x168f('‫4a','VNtU')][_0x168f('‫45','KgGt')]['id'];this['equipment_code']=result[_0x168f('‮4b','swfv')][_0x168f('‫4c','2zok')]['equipment_code'];this['bubbleid']=result['data'][_0x168f('‫4d','#)67')][0x0]['id'];this[_0x168f('‫4e','1yDS')]=result[_0x168f('‮4f','77x8')]['bubble_list'][0x0]['gold_number'];$['logAndNotify'](_0x168f('‫50','men@')+this[_0x168f('‫51','sY1I')]+_0x168f('‮52','swfv')+this['id']+_0x168f('‫53','m(&g')+result['data']['userInfo']['gold_coin']);if(result[_0x168f('‫44','y!c4')][_0x168f('‮54','[wa7')][_0x168f('‮55','m(&g')]>0x2710){$[_0x168f('‮56','1yDS')](_0x168f('‫57','@guz')+this['name']+_0x168f('‫58','c@9u'));}else{$['logAndNotify']('账号['+this['name']+_0x168f('‫59','x9as'));}}}}async['sign'](){var _0x18771d={'GkTfz':function(_0x5f0762,_0x2bb06e){return _0x5f0762/_0x2bb06e;},'krcgU':function(_0x1786c9,_0x4e51b5){return _0x1786c9(_0x4e51b5);},'pJPKI':function(_0x4bf77e,_0x5f4889,_0x3cb321,_0x5baf75){return _0x4bf77e(_0x5f4889,_0x3cb321,_0x5baf75);}};try{let _0x3042b1=_0x168f('‫5a','3IbS');let _0x18726a=Math[_0x168f('‮5b','jco1')](_0x18771d[_0x168f('‫5c','x0AT')](new Date()['getTime'](),0x3e8))[_0x168f('‮5d','TXze')]();let _0x1111c2=_0x18771d['krcgU'](MD5Encrypt,''+this['id']+this['key']+_0x18726a+'000');let _0x50f4ba='a|'+ah+'|'+app+_0x168f('‮5e','qhl9')+this[_0x168f('‮5f','Pke(')]+'|1080|2267|0|'+this['id']+'|'+_0x18726a+_0x168f('‫60','swfv')+_0x1111c2+'|'+this['token']+'|'+iphone;let _0x53a8ce='';let _0x2e0467=_0x18771d[_0x168f('‫61','[PjX')](populateUrlObject,_0x3042b1,_0x50f4ba,_0x53a8ce);await httpRequest(_0x168f('‫62','2zok'),_0x2e0467);let _0xbc47fc=httpResult;if(!_0xbc47fc)return;$['logAndNotify'](_0x168f('‫63','Wtxg')+this['name']+_0x168f('‮64','#)67')+_0xbc47fc[_0x168f('‮65','TXze')]['sign_info'][_0x168f('‮66','swfv')]+_0x168f('‮67','swfv')+_0xbc47fc[_0x168f('‫68','62Oc')][_0x168f('‫69','KUq0')][_0x168f('‮6a','0bDp')]+'金币');}catch(_0x592196){}finally{return Promise['resolve'](0x1);}}async[_0x168f('‫6b','x9as')](){var _0x40fcba={'PqUTb':'keep-alive','IYnZf':'rjBFy','uVsWq':function(_0x243663,_0x1eb65c){return _0x243663/_0x1eb65c;},'azWgp':function(_0x3ac405,_0x1bb865){return _0x3ac405(_0x1bb865);},'GuIfn':function(_0x48c61c,_0x117627,_0x491bb7,_0x424900){return _0x48c61c(_0x117627,_0x491bb7,_0x424900);},'FGmbF':function(_0x164f0f,_0x69e9fb,_0x344665){return _0x164f0f(_0x69e9fb,_0x344665);},'Pdugn':_0x168f('‮6c','KgGt'),'XLHhn':function(_0x49a84e,_0x21f198){return _0x49a84e<_0x21f198;},'wffgx':function(_0x2f2dca,_0x214d20){return _0x2f2dca!==_0x214d20;},'XRuhC':'GilBC','WtiEc':'bdbfk','HFgdF':function(_0x15c7db,_0x469f8a){return _0x15c7db===_0x469f8a;},'ZHEKT':_0x168f('‮6d','cNLn'),'krlUA':'zcHTk'};try{if(_0x40fcba[_0x168f('‫6e','TXze')]===_0x40fcba[_0x168f('‮6f','Pke(')]){let _0x35f4c5=_0x168f('‫70','y8@1');let _0x5eb256=Math[_0x168f('‫71','ohuA')](_0x40fcba[_0x168f('‫72','[wa7')](new Date()[_0x168f('‮73','KgGt')](),0x3e8))['toString']();let _0x19958e=_0x40fcba[_0x168f('‮74','x0AT')](MD5Encrypt,''+this['id']+this['key']+_0x5eb256+'000');let _0x44e058='a|'+ah+'|'+app+'|ql_sleep|'+this['equipment_code']+_0x168f('‫75',')GuS')+this['id']+'|'+_0x5eb256+'000|'+_0x19958e+'|'+this['token']+'|'+iphone;let _0x41754c='';let _0x47713a=_0x40fcba[_0x168f('‮76','Y)6$')](populateUrlObject,_0x35f4c5,_0x44e058,_0x41754c);await _0x40fcba[_0x168f('‮77','Wtxg')](httpRequest,_0x40fcba[_0x168f('‮78','lrT]')],_0x47713a);let _0x4cd76e=httpResult;if(!_0x4cd76e)return;$[_0x168f('‮79','i&Wl')]('账号['+this[_0x168f('‮7a','KUq0')]+']'+_0x4cd76e[_0x168f('‫7b','KUq0')][_0x168f('‮7c','y!c4')][0x1][_0x168f('‮7d','B83(')]+'\x20||\x20看视频领金币'+_0x4cd76e['data'][_0x168f('‮7e','vrSj')][0x3]['desc']);if(_0x40fcba['XLHhn'](_0x4cd76e['data'][_0x168f('‮7f','62Oc')][0x3][_0x168f('‮80','1yDS')],0x8)){for(let _0xe8f39a=0x1;_0x40fcba[_0x168f('‮81',')GuS')](_0xe8f39a,0x9);_0xe8f39a++){if(_0x40fcba[_0x168f('‮82','1yDS')](_0x40fcba[_0x168f('‫83','x9as')],_0x40fcba[_0x168f('‮84','#)67')])){$[_0x168f('‮56','1yDS')](_0x168f('‫85','tXw6')+this[_0x168f('‫86','0bDp')]+']第'+_0xe8f39a+_0x168f('‫87','swfv'));await this['dayReward']();}else{let _0x529669=_0x35f4c5[_0x168f('‫88',')GuS')]('//','/')[_0x168f('‮89','0bDp')]('/')[0x1];let _0x956d6e={'url':_0x35f4c5,'headers':{'Host':_0x529669,'ua':_0x44e058,'Connection':_0x40fcba[_0x168f('‮8a','y8@1')]},'timeout':0x1388};if(_0x41754c){_0x956d6e[_0x168f('‮8b','VNtU')]=_0x41754c;_0x956d6e[_0x168f('‫8c','3IbS')][_0x168f('‫8d','3IbS')]='application/x-www-form-urlencoded';_0x956d6e[_0x168f('‫8e','$AOP')]['Content-Length']=_0x956d6e[_0x168f('‫8f','i&Wl')]?_0x956d6e[_0x168f('‫90','77x8')][_0x168f('‫91','KmJo')]:0x0;}return _0x956d6e;}}}}else{this['ckValid']=![];$[_0x168f('‫92','VNtU')](_0x168f('‫93','pAG^')+this['index']+']CK格式错误');}}catch(_0x497acc){}finally{if(_0x40fcba['HFgdF'](_0x40fcba[_0x168f('‫94','men@')],_0x40fcba[_0x168f('‫95','i&Wl')])){httpResult=resp[_0x168f('‫96','0bDp')];}else{return Promise['resolve'](0x1);}}}async[_0x168f('‮97','[PjX')](){var _0x3c9b80={'qIKGX':function(_0x2b160d,_0x1799c3){return _0x2b160d===_0x1799c3;},'vSksv':_0x168f('‫98','cNLn'),'Tbpky':'shLEe','XccDh':function(_0x4ed86e,_0x5998ee){return _0x4ed86e(_0x5998ee);},'yzOYb':function(_0x20ad16,_0x219fa5,_0x9242ad,_0x4a123f){return _0x20ad16(_0x219fa5,_0x9242ad,_0x4a123f);},'QnIin':function(_0x277407,_0x41ed63,_0x40211b){return _0x277407(_0x41ed63,_0x40211b);},'ncAhw':_0x168f('‮99',')GuS'),'jVKmi':_0x168f('‮9a','swfv')};try{if(_0x3c9b80['qIKGX'](_0x3c9b80[_0x168f('‮9b','m(&g')],_0x3c9b80[_0x168f('‫9c','Pke(')])){$[_0x168f('‮9d','@guz')](_0x168f('‫9e','B83(')+h+'点\x20非打卡时间');}else{let _0x584cc8=_0x168f('‮9f','VNtU');let _0x11e752=Math[_0x168f('‮a0','cNLn')](new Date()[_0x168f('‫a1','tXw6')]()/0x3e8)[_0x168f('‫a2','Pke(')]();let _0x4a975d=_0x3c9b80[_0x168f('‮a3','2zok')](MD5Encrypt,''+this['id']+this[_0x168f('‮a4','KmJo')]+_0x11e752+_0x168f('‫a5','77x8'));let _0x305799=MD5Encrypt(this['id']+_0x168f('‫a6','Wtxg')+_0x11e752+this['token']);let _0x44da37='a|'+ah+'|'+app+_0x168f('‮a7','ohuA')+this[_0x168f('‫3a','1#4Z')]+_0x168f('‫a8','k)n)')+this['id']+'|'+_0x11e752+'000|'+_0x4a975d+'|'+this['token']+'|'+iphone;let _0x365b28=_0x168f('‫a9','4!J5')+_0x11e752+_0x168f('‫aa','tXw6')+_0x305799+'&type=155';let _0x4fae38=_0x3c9b80['yzOYb'](populateUrlObject,_0x584cc8,_0x44da37,_0x365b28);await _0x3c9b80['QnIin'](httpRequest,_0x3c9b80[_0x168f('‫ab','y8@1')],_0x4fae38);let _0x3a9771=httpResult;if(!_0x3a9771)return;if(_0x3a9771['ok']==0x1){$[_0x168f('‫ac','KmJo')]('账号['+this['name']+_0x168f('‮ad','^SXy')+_0x3a9771[_0x168f('‮ae','1#4Z')][_0x168f('‮af','swfv')][_0x168f('‮b0','KgGt')]+'金币');await $[_0x168f('‫b1','KgGt')](0x3a98);}}}catch(_0x7411f){}finally{if(_0x3c9b80[_0x168f('‮b2','Wtxg')](_0x3c9b80[_0x168f('‫b3','B83(')],_0x168f('‫b4','Wtxg'))){return Promise[_0x168f('‮b5','77x8')](0x1);}else{return Promise[_0x168f('‫b6','cNLn')](0x1);}}}async[_0x168f('‮b7','1yDS')](){var _0x5a6a1e={'IdCvK':function(_0x59886f,_0x4a623d){return _0x59886f===_0x4a623d;},'nbhtq':'qqFqc','OYEar':function(_0x16a220,_0x57095e){return _0x16a220/_0x57095e;},'EaKeh':function(_0x3a18aa,_0x16d7a1){return _0x3a18aa(_0x16d7a1);},'lSemt':function(_0x11d5d2,_0x33e77b,_0x97fb6f,_0x1a5650){return _0x11d5d2(_0x33e77b,_0x97fb6f,_0x1a5650);},'uPRqs':function(_0x3ae30a,_0x538716,_0x4475bd){return _0x3ae30a(_0x538716,_0x4475bd);},'eoNAv':function(_0x5bdb13,_0x191325){return _0x5bdb13==_0x191325;}};try{if(_0x5a6a1e['IdCvK'](_0x5a6a1e['nbhtq'],'qqFqc')){let _0x424818=_0x168f('‮b8','77x8');let _0x4c6e58=Math['round'](_0x5a6a1e[_0x168f('‮b9','qhl9')](new Date()[_0x168f('‫ba','4!J5')](),0x3e8))[_0x168f('‮bb','HVB7')]();let _0x503f66=_0x5a6a1e[_0x168f('‮bc','1#4Z')](MD5Encrypt,''+this['id']+this['key']+_0x4c6e58+_0x168f('‮bd','@guz'));let _0x38558d='a|'+ah+'|'+app+'|ql_sleep|'+this[_0x168f('‫be','62Oc')]+_0x168f('‮bf','77x8')+this['id']+'|'+_0x4c6e58+_0x168f('‫c0','1#4Z')+_0x503f66+'|'+this['token']+'|'+iphone;let _0x4cd4ca='';let _0x3de9b3=_0x5a6a1e[_0x168f('‮c1','1#4Z')](populateUrlObject,_0x424818,_0x38558d,_0x4cd4ca);await _0x5a6a1e[_0x168f('‫c2','KgGt')](httpRequest,_0x168f('‮1b','pAG^'),_0x3de9b3);let _0x29dbe1=httpResult;if(!_0x29dbe1)return;if(_0x5a6a1e[_0x168f('‫c3','k)n)')](_0x29dbe1['ok'],0x1)){$[_0x168f('‫c4','jQsH')](_0x168f('‫c5','^SXy')+this[_0x168f('‮c6','HNts')]+']恰饭打卡获得'+_0x29dbe1[_0x168f('‮4f','77x8')][_0x168f('‮c7','B83(')]+'金币');}else{$[_0x168f('‮c8','swfv')](_0x168f('‮c9','4!J5')+this[_0x168f('‫2e','k)n)')]+']恰饭打卡'+_0x29dbe1[_0x168f('‮ca','y!c4')]);}}else{return Promise[_0x168f('‫cb','^SXy')](0x1);}}catch(_0x36156c){}finally{return Promise['resolve'](0x1);}}async['createOrderSleep'](){var _0x56b25a={'nMSCN':function(_0x37db33,_0x1298b3){return _0x37db33/_0x1298b3;},'vOzvm':function(_0x44894b,_0x37f0d0){return _0x44894b(_0x37f0d0);},'azdwo':function(_0x527582,_0x26be28,_0x3731ab){return _0x527582(_0x26be28,_0x3731ab);},'LtqKU':_0x168f('‫cc','B83('),'SfJmv':_0x168f('‫cd','vrSj')};try{let _0x347eb5='https://mapi.shuijiaobao.cn/sleep/createOrderSleep';let _0x31ad74=Math['round'](_0x56b25a[_0x168f('‫ce','m(&g')](new Date()['getTime'](),0x3e8))[_0x168f('‫cf','sY1I')]();let _0x44ddec=_0x56b25a[_0x168f('‫d0','$AOP')](MD5Encrypt,''+this['id']+this[_0x168f('‮d1','4!J5')]+_0x31ad74+_0x168f('‮d2','swfv'));let _0x4fd9a2='a|'+ah+'|'+app+_0x168f('‫d3','jQsH')+this[_0x168f('‫d4','y!c4')]+_0x168f('‫d5','^HwZ')+this['id']+'|'+_0x31ad74+'000|'+_0x44ddec+'|'+this[_0x168f('‮d6','x9as')]+'|'+iphone;let _0x298d6a='';let _0x1c2d2c=populateUrlObject(_0x347eb5,_0x4fd9a2,_0x298d6a);await _0x56b25a['azdwo'](httpRequest,_0x56b25a[_0x168f('‮d7','2zok')],_0x1c2d2c);let _0x2f54e1=httpResult;if(!_0x2f54e1)return;if(_0x2f54e1['ok']==0x1){$[_0x168f('‮d8','B83(')](_0x168f('‫d9','KUq0')+this[_0x168f('‮da','@guz')]+_0x168f('‫db','qhl9')+_0x2f54e1[_0x168f('‮dc','cNLn')]);}else{if(_0x56b25a[_0x168f('‫dd','Y)6$')]!==_0x168f('‫de','HVB7')){$[_0x168f('‫92','VNtU')](_0x168f('‫d9','KUq0')+this[_0x168f('‫df','men@')]+']恰饭打卡'+_0x2f54e1['msg']);}else{$['logAndNotify'](_0x168f('‮e0','yt(J')+h+_0x168f('‫e1','cNLn'));}}}catch(_0x482367){}finally{return Promise['resolve'](0x1);}}async[_0x168f('‮e2','m(&g')](){var _0x4050b0={'PFyVV':function(_0x506484,_0x28d0ce){return _0x506484===_0x28d0ce;},'IRDSe':_0x168f('‫e3','^HwZ')};try{let _0x566cb='https://mapi.shuijiaobao.cn/sleep/collectSleepGold';let _0xcd8166=Math['round'](new Date()[_0x168f('‮e4','[PjX')]()/0x3e8)['toString']();let _0x9cba9a=MD5Encrypt(''+this['id']+this[_0x168f('‫e5','1#4Z')]+_0xcd8166+_0x168f('‫e6','KgGt'));let _0x4cb3c3='a|'+ah+'|'+app+_0x168f('‮e7','RIX&')+this[_0x168f('‮e8','swfv')]+_0x168f('‫e9','TXze')+this['id']+'|'+_0xcd8166+_0x168f('‫ea','1yDS')+_0x9cba9a+'|'+this[_0x168f('‫eb','$AOP')]+'|'+iphone;let _0x3bb937='number='+this[_0x168f('‮ec','ohuA')]+_0x168f('‫ed','c@9u')+this['bubbleid'];let _0x120c13=populateUrlObject(_0x566cb,_0x4cb3c3,_0x3bb937);await httpRequest(_0x168f('‫ee','1yDS'),_0x120c13);let _0xe92e0f=httpResult;if(!_0xe92e0f)return;if(_0xe92e0f['ok']=0x1){if(_0x4050b0['PFyVV'](_0x4050b0[_0x168f('‫ef','i&Wl')],_0x4050b0[_0x168f('‮f0','HNts')])){$[_0x168f('‫f1','pAG^')](_0x168f('‮f2',')GuS')+this[_0x168f('‮f3','77x8')]+_0x168f('‫f4','Pke(')+_0xe92e0f[_0x168f('‫f5','[PjX')]['gold_number']+'金币');}else{taskall[_0x168f('‫f6','yt(J')](user[_0x168f('‮f7','^SXy')]());}}}catch(_0x50dc98){}finally{return Promise['resolve'](0x1);}}async['km'](){var _0x37b7f3={'DYGFf':'content-type','ryJmP':_0x168f('‮f8','jQsH'),'IHBkU':'Content-Length','SpeJY':function(_0x18db66,_0x4f2585){return _0x18db66!==_0x4f2585;},'EgGdv':_0x168f('‮f9','ys@g'),'CIHgx':function(_0x4f86f9,_0x14869e){return _0x4f86f9==_0x14869e;},'fbgzh':function(_0xb05566,_0x23857c){return _0xb05566(_0x23857c);},'klnrJ':function(_0x5d9764,_0x301b16){return _0x5d9764==_0x301b16;},'tpLzY':function(_0x11b3d4,_0x370c1a){return _0x11b3d4==_0x370c1a;},'FZCUL':_0x168f('‮fa','vrSj')};try{if(_0x37b7f3[_0x168f('‫fb','KgGt')]('xgGQm',_0x37b7f3['EgGdv'])){let _0x3fe32e=_0x168f('‮fc','ohuA')+userCGkey+_0x168f('‫fd','62Oc')+uuid;let _0x5cbee1='';let _0x21ec36=populateUrlObject(_0x3fe32e,_0x5cbee1);await httpRequest('post',_0x21ec36);let _0x3c5b6f=httpResult;if(_0x37b7f3['CIHgx'](_0x3c5b6f[_0x168f('‫fe','y8@1')],0xc8)){this[_0x168f('‮ff','c@9u')]=_0x3c5b6f[_0x168f('‮3e','yt(J')]['vip'];this[_0x168f('‮100','KmJo')]=_0x37b7f3[_0x168f('‫101','cNLn')](timestampToTime,this['time']);$[_0x168f('‫102','$AOP')]('🎊卡密验证成功\x20有效期至'+this[_0x168f('‫103','y!c4')]);this[_0x168f('‮104','4!J5')]=!![];this[_0x168f('‮105','swfv')]=!![];}if(_0x3c5b6f[_0x168f('‫106','[PjX')]==0x95||_0x37b7f3['klnrJ'](_0x3c5b6f['code'],0x94)||_0x37b7f3['tpLzY'](_0x3c5b6f[_0x168f('‫107','2zok')],0x70)){if(_0x37b7f3[_0x168f('‫108','y8@1')](_0x168f('‫109','1#4Z'),_0x168f('‫10a','0bDp'))){$['logAndNotify']('❌'+_0x3c5b6f[_0x168f('‮dc','cNLn')]+_0x168f('‮10b','ohuA'));}else{$[_0x168f('‫f1','pAG^')]('❌'+_0x3c5b6f['msg']+_0x168f('‮10c','HNts'));}}if(_0x37b7f3['tpLzY'](_0x3c5b6f[_0x168f('‮10d','k)n)')],0x192)){$[_0x168f('‮10e','[wa7')]('❌'+_0x3c5b6f['msg']+_0x168f('‫10f','y!c4'));}}else{return Promise['resolve'](0x1);}}catch(_0xd7e666){}finally{if(_0x37b7f3[_0x168f('‮110','HVB7')](_0x37b7f3['FZCUL'],_0x168f('‫111','VNtU'))){return Promise['resolve'](0x1);}else{urlObject['body']=body;urlObject[_0x168f('‮112','Pke(')][_0x37b7f3['DYGFf']]=_0x37b7f3[_0x168f('‫113','pAG^')];urlObject['headers'][_0x37b7f3[_0x168f('‫114','1yDS')]]=urlObject[_0x168f('‮115','$AOP')]?urlObject[_0x168f('‫116','jco1')][_0x168f('‮117','yt(J')]:0x0;}}}}!(async()=>{var _0x230624={'zLzYI':_0x168f('‫118','2zok'),'DdEXl':'undefined','THDPk':function(_0x4b9041,_0x483c77){return _0x4b9041>_0x483c77;},'nOZYo':function(_0x41977e,_0x2513e1){return _0x41977e!==_0x2513e1;},'jMERu':'EhHxP','QvPhn':'ZRcmH','Donxg':_0x168f('‫119','Pke('),'tjXsJ':function(_0x2bd40d,_0x308b0a){return _0x2bd40d===_0x308b0a;},'oOoEF':_0x168f('‫11a','men@'),'hqjvD':function(_0x819a07,_0x46a70d){return _0x819a07>_0x46a70d;},'FaDic':_0x168f('‮11b','1yDS'),'IRcdn':function(_0x4251c9,_0x38518f){return _0x4251c9===_0x38518f;},'aQtGa':'OAzyu','tdnMo':_0x168f('‮11c','KUq0'),'vkPqM':function(_0x149fcb,_0x1929ec){return _0x149fcb>=_0x1929ec;},'VGhjH':function(_0x32ac43,_0x392c23){return _0x32ac43>=_0x392c23;},'MRzON':function(_0x25e4c0,_0x3fef79){return _0x25e4c0<_0x3fef79;},'eyyaq':_0x168f('‫11d','yt(J'),'lmePb':'AmdVa','VFdbn':_0x168f('‫11e','1#4Z'),'GFMbA':_0x168f('‮11f','B83('),'vopLz':function(_0x516ee9,_0x4df9eb){return _0x516ee9<_0x4df9eb;},'MiLyJ':function(_0x3bf607,_0x34681f){return _0x3bf607>=_0x34681f;},'rJlnm':function(_0x29dbb8,_0x56c241){return _0x29dbb8<_0x56c241;}};if(typeof $request!==_0x230624[_0x168f('‫120','1yDS')]){}else{if(!(await checkEnv()))return;let _0x10cbdc=[];let _0x2a3e62=userList[_0x168f('‫121','m(&g')](_0x3d72f4=>_0x3d72f4['ckValid']);$[_0x168f('‮122','cNLn')]('\x0a通知区：\x0a⚠️念念不忘\x20必有回响提醒您！\x20\x20此脚本有多个定时任务\x0a早：5:00-9:00\x20|\x2011:00-14:00\x20\x20\x0a晚：17:00-20:00\x20|\x2021:00-02:00');if(_0x230624['THDPk'](_0x2a3e62['length'],0x0)){if(_0x230624[_0x168f('‫123','vrSj')](_0x230624[_0x168f('‫124','qhl9')],_0x230624[_0x168f('‫125','men@')])){$[_0x168f('‫126','qhl9')](_0x230624[_0x168f('‫127','KUq0')]);_0x10cbdc=[];for(let _0xe1fd54 of _0x2a3e62){if(_0x230624['tjXsJ'](_0x230624[_0x168f('‫128','VNtU')],_0x230624[_0x168f('‫129','x9as')])){_0x10cbdc[_0x168f('‮12a','[wa7')](_0xe1fd54['km']());await $['wait'](0x1388);$['logAndNotify'](_0x168f('‫12b','Pke('));_0x10cbdc['push'](_0xe1fd54['login']());await $[_0x168f('‫12c','y8@1')](0xbb8);}else{console[_0x168f('‮12d','ohuA')](_0x230624[_0x168f('‮12e','1#4Z')]);return;}}await Promise[_0x168f('‮12f','qhl9')](_0x10cbdc);_0x2a3e62=_0x2a3e62[_0x168f('‫130','c@9u')](_0x17ad7f=>_0x17ad7f[_0x168f('‫131','KmJo')]);if(_0x230624[_0x168f('‫132','RIX&')](_0x2a3e62[_0x168f('‫133','Y)6$')],0x0)){$['logAndNotify'](_0x230624[_0x168f('‫134','vrSj')]);_0x10cbdc=[];for(let _0x343505 of _0x2a3e62['filter'](_0x346a87=>_0x346a87[_0x168f('‫135','k)n)')])){if(_0x230624[_0x168f('‫136','cNLn')](_0x230624[_0x168f('‫137','pAG^')],_0x230624[_0x168f('‫138','1#4Z')])){_0x10cbdc[_0x168f('‫139','i&Wl')](_0x343505[_0x168f('‮13a','i&Wl')]());await $[_0x168f('‫13b','77x8')](0xbb8);_0x10cbdc[_0x168f('‮13c','pAG^')](_0x343505[_0x168f('‮13d','qhl9')]());await $['wait'](0xbb8);_0x10cbdc[_0x168f('‫13e','4!J5')](_0x343505[_0x168f('‫13f','Wtxg')]());}else{return Promise[_0x168f('‮140','y!c4')](0x1);}}await Promise['all'](_0x10cbdc);$[_0x168f('‫141','62Oc')](_0x230624[_0x168f('‮142','ohuA')]);_0x10cbdc=[];for(let _0x5a1fd1 of _0x2a3e62){h=local_hours();if(_0x230624[_0x168f('‮143','y!c4')](h,0xc)&&h<0xe||_0x230624['VGhjH'](h,0x14)&&_0x230624[_0x168f('‮144','$AOP')](h,0x2)){if(_0x230624[_0x168f('‫145','4!J5')](_0x230624['eyyaq'],_0x230624['lmePb'])){_0x10cbdc[_0x168f('‮146','ys@g')](_0x5a1fd1[_0x168f('‮147','62Oc')]());}else{$[_0x168f('‮3c','ohuA')](_0x168f('‫148','y!c4')+this['name']+']\x20'+result['msg']+'\x20\x20⚠️变量已失效或检查格式');}}else{if(_0x230624[_0x168f('‫149','m(&g')](_0x230624['VFdbn'],_0x230624[_0x168f('‫14a','B83(')])){$[_0x168f('‫14b','Pke(')](_0x168f('‫14c','^HwZ')+h+_0x168f('‮14d','RIX&'));}else{this['index']=++userIdx;this['name']=this[_0x168f('‮14e','[wa7')];this[_0x168f('‫14f','tXw6')]=![];this[_0x168f('‫150','^HwZ')]=![];try{this[_0x168f('‫151','pAG^')]=$['str2json'](str);this[_0x168f('‫152','y8@1')]=!![];}catch(_0x49b249){this[_0x168f('‮153','sY1I')]=![];$[_0x168f('‫126','qhl9')]('账号['+this['index']+_0x168f('‫154','2zok'));}}}if(h>=0x5&&_0x230624['vopLz'](h,0x9)||_0x230624[_0x168f('‫155','HVB7')](h,0xb)&&h<0xe||_0x230624['MiLyJ'](h,0x11)&&_0x230624['rJlnm'](h,0x14)||h>=0x15&&_0x230624[_0x168f('‮156','^SXy')](h,0x18)){_0x10cbdc[_0x168f('‫1e','HVB7')](_0x5a1fd1['dinnerCreate']());}else{if('wjBfS'===_0x168f('‫157','3IbS')){return Promise['resolve'](0x1);}else{$['logAndNotify'](_0x168f('‮158','m(&g')+h+_0x168f('‮159','swfv'));}}}await Promise['all'](_0x10cbdc);}}else{$['logAndNotify']('账号['+this[_0x168f('‫3d','ys@g')]+_0x168f('‫59','x9as'));}}await $[_0x168f('‫15a','HVB7')]();}})()[_0x168f('‮15b','2zok')](_0x4fc269=>console['log'](_0x4fc269))[_0x168f('‫15c','3IbS')](()=>$[_0x168f('‮15d','i&Wl')]());async function checkEnv(){var _0x4b8da2={'UERsr':function(_0x32c5f4,_0x9857eb){return _0x32c5f4!==_0x9857eb;},'uJMHM':_0x168f('‫15e','VNtU'),'yeYPq':function(_0x17be1b,_0x5ab5ae){return _0x17be1b>_0x5ab5ae;},'OHOti':function(_0x39bf07,_0x328944){return _0x39bf07===_0x328944;},'HZGlb':'ljCAU','eChZq':'WlJcC','dloyj':_0x168f('‮15f','[wa7')};if(userCookie){let _0x5dd0c5=envSplitor[0x0];for(let _0x2cc559 of envSplitor){if(_0x4b8da2[_0x168f('‮160','$AOP')](_0x4b8da2[_0x168f('‫161','HVB7')],_0x4b8da2['uJMHM'])){$['logAndNotify']('账号['+this['name']+_0x168f('‫162','Wtxg')+result[_0x168f('‮163','#)67')][_0x168f('‫164','lrT]')]+'金币');}else{if(_0x4b8da2[_0x168f('‫165','TXze')](userCookie[_0x168f('‮166','TXze')](_0x2cc559),-0x1)){_0x5dd0c5=_0x2cc559;break;}}}for(let _0x3d07b2 of userCookie[_0x168f('‫167','swfv')](_0x5dd0c5)){if(_0x4b8da2[_0x168f('‮168','i&Wl')](_0x4b8da2[_0x168f('‫169','y!c4')],_0x4b8da2[_0x168f('‮16a','Y)6$')])){console[_0x168f('‮16b','4!J5')](method+_0x168f('‮16c','jco1'));console[_0x168f('‫16d','KgGt')](JSON['stringify'](err));}else{if(_0x3d07b2)userList[_0x168f('‫16e','cNLn')](new UserInfo(_0x3d07b2));}}userCount=userList[_0x168f('‮16f','qhl9')];}else{if(_0x4b8da2['UERsr'](_0x168f('‮170','^SXy'),_0x168f('‮171','qhl9'))){console['log'](_0x4b8da2[_0x168f('‮172','lrT]')]);return;}else{return Promise[_0x168f('‫173','KgGt')](0x1);}}console[_0x168f('‮174','77x8')](_0x168f('‫175','Pke(')+userCount+_0x168f('‫176','KUq0'));return!![];}function populateUrlObject(_0x5b2098,_0xded841,_0x5715c0=''){var _0x442cab={'UNFLH':_0x168f('‮177','@guz'),'QSrvc':function(_0x5bf3a5,_0x50d72b){return _0x5bf3a5===_0x50d72b;},'xrioA':'USlWR','GPiHa':_0x168f('‫178','KmJo'),'mQUCZ':_0x168f('‮179','KUq0')};let _0x16e333=_0x5b2098[_0x168f('‫17a','62Oc')]('//','/')[_0x168f('‫17b','ohuA')]('/')[0x1];let _0x3331b6={'url':_0x5b2098,'headers':{'Host':_0x16e333,'ua':_0xded841,'Connection':_0x442cab[_0x168f('‫17c','Pke(')]},'timeout':0x1388};if(_0x5715c0){if(_0x442cab['QSrvc'](_0x442cab['xrioA'],_0x442cab[_0x168f('‫17d','x0AT')])){console[_0x168f('‮17e','ys@g')](e);}else{_0x3331b6['body']=_0x5715c0;_0x3331b6[_0x168f('‫17f','tXw6')][_0x168f('‮180','HVB7')]=_0x168f('‮181','x0AT');_0x3331b6[_0x168f('‮182',')GuS')][_0x442cab[_0x168f('‮183','VNtU')]]=_0x3331b6[_0x168f('‫184','yt(J')]?_0x3331b6[_0x168f('‮185',')GuS')][_0x168f('‫186','men@')]:0x0;}}return _0x3331b6;}async function httpRequest(_0x1f6cd0,_0x3a4a2b){var _0x201b93={'GOFmT':function(_0x2de6ad,_0x7c4e48){return _0x2de6ad===_0x7c4e48;},'faptR':'HFjuP','laJka':_0x168f('‮187','[PjX'),'RfMYh':'UPdiW','BNSSE':function(_0x233bdc,_0x1efa54){return _0x233bdc==_0x1efa54;},'nWtaX':_0x168f('‫188','VNtU'),'HRAgG':_0x168f('‮189','x9as')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x4bd8d4=>{$[_0x168f('‫18a','men@')](_0x1f6cd0,_0x3a4a2b,async(_0x44c66b,_0x360cf7,_0x5a89d6)=>{try{httpReq=_0x360cf7;httpResp=_0x5a89d6;if(_0x44c66b){if(_0x201b93[_0x168f('‫18b','ohuA')](_0x168f('‮18c','[wa7'),_0x168f('‫18d','Y)6$'))){if(userCookies)userList[_0x168f('‫16e','cNLn')](new UserInfo(userCookies));}else{console['log'](_0x1f6cd0+_0x168f('‫18e','x9as'));console[_0x168f('‮18f','men@')](JSON[_0x168f('‫190','HVB7')](_0x44c66b));}}else{if(_0x201b93['faptR']!=='HFjuP'){return Promise[_0x168f('‫191','[wa7')](0x1);}else{if(_0x5a89d6[_0x168f('‫192','swfv')]){if(_0x201b93[_0x168f('‮193','KUq0')]===_0x201b93['RfMYh']){return Promise[_0x168f('‮194','$AOP')](0x1);}else{if(_0x201b93[_0x168f('‮195','HNts')](typeof _0x5a89d6[_0x168f('‮196','HVB7')],_0x168f('‫197','^HwZ'))){httpResult=_0x5a89d6[_0x168f('‮198','@guz')];}else{if(_0x201b93['nWtaX']===_0x201b93[_0x168f('‫199','men@')]){$[_0x168f('‮29','TXze')](_0x168f('‫2d','sY1I')+this[_0x168f('‮19a','i&Wl')]+_0x168f('‫19b','y!c4')+result['msg']);}else{try{httpResult=JSON['parse'](_0x5a89d6[_0x168f('‫90','77x8')]);}catch(_0x2bb075){httpResult=_0x5a89d6[_0x168f('‫19c','Wtxg')];}}}}}}}}catch(_0xf3cbe5){console[_0x168f('‮19d','[PjX')](_0xf3cbe5);}finally{_0x4bd8d4();}});});};_0xodz='jsjiami.com.v6';


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