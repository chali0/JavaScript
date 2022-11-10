/*
完美人生App: 一诺庄园

变量：捉包https://hms.cignacmb.com域名headars里的authorization 多账号换行隔开
格式：export ynzy="authorization=Bearer_xxxxxx@Bearer_xxxxxx"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("一诺庄园");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; ProjectTitan Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36 ;hmsapp/5.5.36;HMS_APP_SESSIONID/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWduRGF0YSI6IkQ2QkY2NTRFNDA5N0UwMkMyQzJGRTVCQzFDNjg0RTg2OTI5MjQzIiwibG9naW5UaW1lIjoiMTY2ODAwOTAxMzY5NyIsIm5iZiI6MTY2ODAwOTAxMywiZXhwdCI6MTY2ODA5NTQxMzY5NywiaXNzIjoiSldUIiwiZnJvbSI6IkFQUCIsImV4cCI6MTY3MzE5MzAxMywidXNlcklkIjoiNjczMzQ5NCIsImlhdCI6MTY2ODAwOTAxM30.jFay4AUDuTq0ZQd2bzgGFw_WUZOz-An3UQc16aItE00;' //换成自己的UA


var _0xod8='jsjiami.com.v6',_0xod8_=['‮_0xod8'],_0x1475=[_0xod8,'w43CiEbCjEA=','w5UiI0hkwpzChQ==','PcKHRkNQ','w4o3wpDDhsO6','w4DDhz7CtcKoHxUJwrfDkA==','Zy9Tw6TDpD7DkUfCvE7ChcOe','6LaI5Y6Dw6E=','acKETcKP','w6E0EA==','6LWb5Y+oLg==','w4rDgcKZwow=','w48iMUNtwpjCkw==','w7gewqTCkzpRwrTCvsKHK2IFD8KDXMO86LeP5Y+C5qOb5p2Yw5M1VGpXZcOSw4Beb8KewoFpQQ8=','wolfNsKMCWgpCXjDvMKrZ8Kxw6EUw4bluLjlmbDllaHlhLJsfTrDuEl5w6FbwqQJwrJhwqR4w6E=','K8KCJcO5w7o=','w5saw57Ch0hhXsOjw70=','McOywp8GSg==','w48MEQMM','Q8KZZyQ8PQ==','a8KKR8KrKksUw7HCkgsBw5g=','MsKzKMKJIw==','Bm3ChzY=','EMKmw4/CsR9jCQbDrcKCWktAfBrCtsO1Lg==','LsKqAw==','AHnCmDfCgw==','w4bDssKQb8O1Og==','N8KNA8KhCXfCqMKqL8KWH30=','w7bCvUHDnzQ=','w6Ubd8OVQTc=','w4nDtsKQWsOkM8Kb','DWoGwp4=','wptdw7/Dm2QIw5rDssOEYjY=','G1fDhEY=','w655MUY=','HsKtw5LCkAVnFzvDtsKUZHRMfSc=','VsOXwogwwoxvw7NfVFTCiks=','wqrCvsKAfjA=','w7kkw4bDvsKs','SsONwpwZ','wrB8wqLCsAnDj8KL','wpUewq3CvA==','CsK9w4TCqB92NgbDsMKJ','w4ADwrB3Vg==','w4UdHBbChA==','wo7Cl8K1woLDqsOCMBA8IMOvdw==','w7EXaMOOSDNh','MsK7RQ==','FsO2AcO/wotTAw==','w68Rw4g=','6K295rGL5aW46LW0','dMKRUsKDKkgzw7jCnw==','w5DDkivCosK1','WlLDrg==','K8KpAcOQ','w7TDvsK6wrpx','wprCm8KzcRE=','wonCl8KEwpXDsw==','wqdHwrvDhcKNWMO3wqLCjwbCl8KPZyshM8K0DmLCsRjCq33DusOqD1h8T8OdYB9Vc1/Cp8OZw78Kw5FPwpDDvjbCrsKyE3BCOVPDhsOaD8Kuw6PCrcKuBnY=','w6lGwrrDnMOTSg==','w6pJw58mJQ==','LsKQIsO3w58=','w5jCtFPDljgMwoo=','FGDDr13Cmw==','BFPDjFbCihDCqw==','w4bDicO1ccOXw5k7MAJewpZyIg==','w6nCo3jDuAc=','NiLCo8Oa','w403w6rCinc=','w4DDgzPCqMKp','w4kuL0kw','w4vChHvCqUY1Pg==','L8KLCcKF','w4fDpMKZ','O8KvAsOQwqQ=','w4VtGSPDjQ==','UcKZZjU=','6LaY5Y6+woQ=','w67nr7rnu7g=','w4TDuMK4wpY=','XcOKwoAGwpZjw7FVVljCgA==','w5LllrHlh7LovaXlurE=','XsOZwpsQ','w5LDvMKvwpJZwpBELCTDglhzw5p6Fxo=','woTnj6vmnYLnsrjmnbc=','w43DpcKRf8O1OsKzE8Oxe8KKwqIVw6YkPcOsPDc=','8JiPv8O5','woEQwqDCrQ==','GCnChMOLw4Q=','MMK4TXU=','w4vCinHCng==','w6sdwrLDtsObV3HCj3UWw6Q2','w6Adf8OE','w7oxNhgd','PcK6HsKKAg==','w4keGC/Cpg==','w64BfA==','wqforoXliKrlpq3lprHkvYznlJfCj3PphrLooYfnj6DloIzpgp3miqborr7og7DnsqTkv57og6bopr3pmbg=','w4TCsEHDmRMfwpRx','byFAw4Q=','wqVoQcOawprCk2s=','O8KnHMOew5tBw6zCiw==','w7nmrpTmlq4=','wqd1wrTCuCzDh8KIwps=','w4LkuoTliaXltLrlroTmiqw=','EMK4R2R7w7nDpGQ5wrTDlsK3','wpNDw7nDkn4fw7jDp8ODaSEHWsKDBsKrwp4YfcOSwoF1VDIIJMKawoMQLcOXw4kgV0Ftwo3DuMO6wqV5eMOqwrfChMKgwpY=','wodrQ8O6wp7CjnROCEHDucOrWsOr','cMOHwo8kw4k=','w7hmJybDlg==','PFbChjzCsA==','IOafoOaKreWLoirDizborbPpmJ3or4/ohYTmnLnorZLmmqs=','w4dBw6gFLw==','w682w5bCmkg=','QQtcw5HDrg==','w7QhKcK3Pg==','O8KySHR7w6XDow==','AcKjR1Fc','woDCl8K2wro=','DlnDiUs=','Gn3CmjnCkzA=','PMK2A8Ocw6E=','w58oJlU=','AFnDig==','wrNgw5DDpk4=','ZuWFh+aLk+WIgg==','5LmP6La45Y6Z','bsO2wqk8w6IqPw==','T07DhcKORg==','DcO7D8OswoNSFw==','w4lmJyXDqjxaFFzCg13DrA==','Hn3ClTrCgioK','w7Jow4kd','ScKVZTctJw==','woHCmsK6ewrDnEY=','aWzDrsKRwrc=','w5/Cs1jDlz4K','w6VPDgDDtg==','w6/DpMKJUcOV','w5t/NXcj','Cng/wpXDrQ==','eUfDocKfwrY=','wofCncKzXzE=','w4EjC8KrGQ==','w5rCq2jDnDY=','w6IETsOLVA==','Dk1OZQM=','6K+B5rG/5aa46Les','w5Imwrg=','H0LDn1vCgQXCscKWwrs=','wr11wqrCtg==','wq7mrIvmlrPkvZrljojnrrvli5/ltbnlrJrmiLc=','w5NjIBXDhQ==','FHfCkCc=','IMKeAMOMw6Y=','wo3Ci8K1wpDDlw==','w4LDtsKowo4=','PsKtw5PCsiY=','w7Y+IhnChA==','w5DDuMK+woRV','WMOXwosI','McOkwogqbmjDiQ==','wpZLw7HDk3E=','wrpnwonCvAbDgw==','KsKoGQ==','w5kswqtLw7DCkhU=','ZcO9wqMp','AMOwGA==','w7DDtDTCpMKk','w5UDwqhYUCIF','bB3DoTpj','w5wJwrhZHDsFBMOQbsK5w45RLsKt','w4fDmzrCrw==','w7RdI0sc','FHERwpPDgw==','JsKoC8OQw60=','w5PCsFzDoDgfwp0=','woPCnsK7dQs=','w7TDiMOzK8OSw5g9JA==','w50iwolOw73CjxA=','w48/w7XDm8KY','w7s3A0Vy','AFnDinPCgQbClsKfwrZbwo3Cog==','VMOZwoIU','w68sIRsnw7Fs','wp5cw67Dv3kYw5fDvMOebylR','DMOwCsOtwp4=','wqdsSMOtwpDCiW4=','PnAbwoLDnmPCksO2w6Rrw4XDr3PCvw==','wqNhWQ==','wqxwWcO+wojDmi9MLEnDpMKiTcOqw6FADsOww4Y1w73DnE3DncKMQsK6WxdEX1YOw5gFOMOXw7EeQMKaSH5LTsOVYcOtPcOrw5HDk3gBMcKZTQrCrMOJCsK5w70sDUjDgFk=','w7LDhivCqcKyHj8cwrLDgUEbAQ==','wqxhTMOqwp7CknM=','EFMnwoPDow==','JMK1a2hp','SsKrYcKQFw==','w409wr5bw6TClTfDn1/CrA==','QzXDrR50DAkJTT/Cp8KO','6LW95YyVPw==','ZSFZw4A=','w7xow4olLRREw4TDpMO4G8OC','6La25Y+ww7Y=','wpDCncKhwqzDqMOQGw==','WsKlwqDCpg==','wpvCsCLDt8Kuw7/DgMKkw7tCw5RfwqM7dcOyZsO0w6New4Z7asOZwqnCrGhqw5o+VMOewq4nQScJwobDv8OGGyjClMKaw7LDsXd1w5LCjBsleMKrRsKdwqvCtcOXwpc=','w58Iwoh1w6E=','w5jChGfCmk4=','w68Bw47CikF6WcO8w7jCqMOHXEo=','woHCgC/DgsKe','wrAYwobCsVs=','C8Ktw5XCtTVtAQo=','w7c7NsK8McOZw4LDnsKlw6pfZQ==','6LSQ5Y+Kw5I=','w4TDtsKTbQ==','IOiOqOW/og==','f07DpMKOwpXDsDha','w5MmL0k=','F8O7HcOnwopWAQ==','wrRxwrPChhHDg8KXwqobw7vCiMOAUxFk','bsKsFFF8','wpBBwpTCgxU=','w6TDkh3CscKo','JibCn8Omw6E=','Z8KrGWwtw6vCojVc','w6J+w4cICA==','IsKAGsOcw4I=','w6nDoMKGwpRg','w4PDhcKA','w78zFg4+w6tLwprCg8OX','wobCmcKmwqI=','w5crLg3CgsO/w5lJw63Dk1o=','w5nDo8KffMO0IQ==','w6dmw4QQ','w5LDvMKvwpJZwpBECwvDjVNnw58=','w4bDuMKZScOvNsKxGcOzd8KAwpg=','6LWz5Y66wpw=','w5dLw4EeMQ==','wrh1wrzDh8OT','WyxWw5HDiQ==','w71nFE8bUcOA','6Lei5Y+zdg==','w68lwpfmoIDlvL7plY/oros=','w65oPTA=','fcO/wrUEw6I6MQ==','DmsUwoLDjn4=','eMKowr/CvxE=','w4MHw50=','wqforoXmoJXmnZLlj5Tlr7XmiKnln4hVOOaeuOWYp+S4tcKdw7YKw6MUw4fCuhxzXT7lpbXojazlj6vljZ3lroY=','IMKnRXlq','wpLCiMKoZgLDqUwZwr3CscKIwrA=','bEfDu8KqwrDDoic=','McOkwpgqcHrDpcKk','wrd1wrPCsg==','w4oowqxEw5/ChxnDlQ==','fsKzKUBvZmU=','I8KpCMO0w7tEw4/CgcOlKlvDiA==','6Lah5Y2Lw5o=','S8KRZjU=','w5HmrojmlpI=','w6/ku4jlia7ltYflrLvmiac=','wqhrSsOPwpXChE4MME3DscO1','YFjDsA==','w6xpMUEbTsOB','w7LDjMOleMOMw44GKxBBwqxpLQbDl8K/','wopZw77DqlI=','DXAGwoI=','wrHCrRXDssK4','DA/CqMO+w6g=','wpHCixHDgMK8','EcK8w5LCtQU4SkDDv8KKfBZGZzTCtsOyIkB1IjfDicOjwo1Gw4/DiMKJwofDlsOgW05aw7DDhW1LZ8OAw4DCgcKrSMOlbE7DrcKVwrJzw6Rjwro9woAIdn8nwpRGIBDDlsKLwo4ILA==','w7PDncOycsO7w4Q2L14=','UcKReDsaIMOcHw==','WVHDssKdwqg=','w4DDgcKAwog=','ccK+KHE=','eOS4i+WKqmp5','wpXCmcK7wrc=','wpDCncKxwqbDrcOQGzwpJ8Otdw==','wp3CnsKkcQ==','w6RAHyHDuQ==','NHHCtyvCgg==','w7UXwqbDmMOZRVo=','w54Bw4nCig==','w6oQw4bDm8K/ccOSIcO7UMKhdMODw7oUwqDDiMOd','J07CrifCqA==','w4hwKh7DpA==','HWhuahQ=','O8KjXWBtwq3Cv2YFwqDDlcO8bsOlJH5Dw4/DlGHCj8K7JcOhNsKtOGzCsCDCvUZLRcKMBmdYwozCs3XDmX1HwrDCsMK8w6bDjmLCp8Okw4QMwqTDm28RI8KewpHCvg==','w7Ebw4zDgMKkdMO3LMK8','w5zCvlU=','bMOywqsxw64=','bi/Dvjd1Gi4cWCLCqMKYDw==','w5wtwrFEdQ==','woxof8OswqI=','a0bDo8KwwpI=','OSLCoA==','w7sxw5/DmMK0','w4g0LC/ChcO6w7tyw7jDiVdm','6La45Y+7GQ==','w7plMV4YS8OFw5kTw7TDjcObFx0+EcKzwqw=','w6sLN0VI','w7JnGijDgw==','VsOXwog=','w60fw4LDig==','BnnChj/Cig==','w5fDlMKGw5vDiFPDjcOE','LMKtOcOUw7lJw6U=','wpLClMKRwqHDlQ==','w74iBBUnw65t','dsKxLGBndGLCl8OsGsKSwqrDhcKddsOCCcOb','XMKwK2Bre3rDk8OaGsKpwr7DlMKH','w44mwqxb','K1fDuVXCuw==','w4plFzwiP8ORZ8Kab1ILwo17w459LMKGLRXDr8OTw5rCqRN5AMKtVsO3BC5EFCIww4PCk8OUw5R7w7DCrSXCmcK7MArDscKoccKNW8K/woTDucKZwrFAw6EKw5gPwrLCihpccQ==','w6HDrMK4wp9fwpRIMgvDl15xw50=','FlETwqbDnA==','M8KHBcKEAmHClQ==','woDCsDfDs8KowrbCrMOkw7JC','w73DnsOCbsOJ','6LW15Yygcg==','w47DuMKhwpI=','w6/oj5HlvYs=','wr97wqDCkgzDgsKrwpEOw6HChcO1','6Lal5Y6Jw7Q=','Z+evsee5iA==','wqN2QsO5wo/CiEwGMkHDuw==','w4zChGHCmg==','w6TnjrTmnKTnsZjmnac=','8LCspcO/','w68dfMOgSiFKSyHCuMOgMw==','6LS55YyoHg==','wpTCmcK+wqrDoA==','FcK2NMKFNg==','w5LDtcKvS8Ok','w7JZMUw4','SsOZwp0Qwo8=','wqdve8OvwpfCiWQ=','w5EoJW1vworCuMOVwq/Coyc7','6LaO5YySTg==','woHCmcK8wpHDocOHGg==','DX4HwpfDlg==','XsKqMXxhZ2fChMO3C8KuwrbDjg==','TZjsjEPilamiEUS.brtcoRm.Xvx6=='];if(function(_0x375a08,_0x4d3b3e,_0x36dae4){function _0x10c253(_0x4a4943,_0x1363b5,_0x262142,_0xa6987a,_0x4e0f7e,_0x31badf){_0x1363b5=_0x1363b5>>0x8,_0x4e0f7e='po';var _0x2b210b='shift',_0x42e2ab='push',_0x31badf='‮';if(_0x1363b5<_0x4a4943){while(--_0x4a4943){_0xa6987a=_0x375a08[_0x2b210b]();if(_0x1363b5===_0x4a4943&&_0x31badf==='‮'&&_0x31badf['length']===0x1){_0x1363b5=_0xa6987a,_0x262142=_0x375a08[_0x4e0f7e+'p']();}else if(_0x1363b5&&_0x262142['replace'](/[TZEPlEUSbrtRXx=]/g,'')===_0x1363b5){_0x375a08[_0x42e2ab](_0xa6987a);}}_0x375a08[_0x42e2ab](_0x375a08[_0x2b210b]());}return 0x111b76;};return _0x10c253(++_0x4d3b3e,_0x36dae4)>>_0x4d3b3e^_0x36dae4;}(_0x1475,0xa2,0xa200),_0x1475){_0xod8_=_0x1475['length']^0xa2;};function _0x1cf8(_0x31fa8d,_0xdaa038){_0x31fa8d=~~'0x'['concat'](_0x31fa8d['slice'](0x1));var _0x3d74f8=_0x1475[_0x31fa8d];if(_0x1cf8['fPiZhc']===undefined){(function(){var _0x22bd83=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2337a3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x22bd83['atob']||(_0x22bd83['atob']=function(_0xd003ca){var _0x4cab0e=String(_0xd003ca)['replace'](/=+$/,'');for(var _0x4df4c0=0x0,_0x125965,_0x4bcfda,_0x49167d=0x0,_0x1ff777='';_0x4bcfda=_0x4cab0e['charAt'](_0x49167d++);~_0x4bcfda&&(_0x125965=_0x4df4c0%0x4?_0x125965*0x40+_0x4bcfda:_0x4bcfda,_0x4df4c0++%0x4)?_0x1ff777+=String['fromCharCode'](0xff&_0x125965>>(-0x2*_0x4df4c0&0x6)):0x0){_0x4bcfda=_0x2337a3['indexOf'](_0x4bcfda);}return _0x1ff777;});}());function _0x551bf1(_0x46b32d,_0xdaa038){var _0xf4c529=[],_0x1c579d=0x0,_0x2df937,_0x1443e3='',_0x8dbabb='';_0x46b32d=atob(_0x46b32d);for(var _0x2c6185=0x0,_0x1b2864=_0x46b32d['length'];_0x2c6185<_0x1b2864;_0x2c6185++){_0x8dbabb+='%'+('00'+_0x46b32d['charCodeAt'](_0x2c6185)['toString'](0x10))['slice'](-0x2);}_0x46b32d=decodeURIComponent(_0x8dbabb);for(var _0x1e0a18=0x0;_0x1e0a18<0x100;_0x1e0a18++){_0xf4c529[_0x1e0a18]=_0x1e0a18;}for(_0x1e0a18=0x0;_0x1e0a18<0x100;_0x1e0a18++){_0x1c579d=(_0x1c579d+_0xf4c529[_0x1e0a18]+_0xdaa038['charCodeAt'](_0x1e0a18%_0xdaa038['length']))%0x100;_0x2df937=_0xf4c529[_0x1e0a18];_0xf4c529[_0x1e0a18]=_0xf4c529[_0x1c579d];_0xf4c529[_0x1c579d]=_0x2df937;}_0x1e0a18=0x0;_0x1c579d=0x0;for(var _0x3aba81=0x0;_0x3aba81<_0x46b32d['length'];_0x3aba81++){_0x1e0a18=(_0x1e0a18+0x1)%0x100;_0x1c579d=(_0x1c579d+_0xf4c529[_0x1e0a18])%0x100;_0x2df937=_0xf4c529[_0x1e0a18];_0xf4c529[_0x1e0a18]=_0xf4c529[_0x1c579d];_0xf4c529[_0x1c579d]=_0x2df937;_0x1443e3+=String['fromCharCode'](_0x46b32d['charCodeAt'](_0x3aba81)^_0xf4c529[(_0xf4c529[_0x1e0a18]+_0xf4c529[_0x1c579d])%0x100]);}return _0x1443e3;}_0x1cf8['LCChdH']=_0x551bf1;_0x1cf8['oOFNHx']={};_0x1cf8['fPiZhc']=!![];}var _0x1c4ce6=_0x1cf8['oOFNHx'][_0x31fa8d];if(_0x1c4ce6===undefined){if(_0x1cf8['KrNsNb']===undefined){_0x1cf8['KrNsNb']=!![];}_0x3d74f8=_0x1cf8['LCChdH'](_0x3d74f8,_0xdaa038);_0x1cf8['oOFNHx'][_0x31fa8d]=_0x3d74f8;}else{_0x3d74f8=_0x1c4ce6;}return _0x3d74f8;};let httpResult,httpReq,httpResp;let userCookie=($[_0x1cf8('‫0','XERo')]()?process[_0x1cf8('‮1','I7ST')]['ynzy']:$[_0x1cf8('‫2',')9BW')](_0x1cf8('‫3','WtNH')))||'';let userCGkey=($[_0x1cf8('‫0','XERo')]()?process[_0x1cf8('‫4','!9mn')][_0x1cf8('‮5','Snv#')]:$[_0x1cf8('‫6','&P(L')](_0x1cf8('‮7','@H&e')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x1cf8('‮8','&P(L'));machineId()[_0x1cf8('‫9','Snv#')](_0x1c0b50=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x11a8fe){var _0x642324={'LAZtN':function(_0x33a342,_0x164b2d){return _0x33a342===_0x164b2d;},'FpAis':_0x1cf8('‫a','Fu5Z')};this[_0x1cf8('‮b','pTNJ')]=++userIdx;this['name']=this[_0x1cf8('‫c','I7ST')];this['valid']=![];this[_0x1cf8('‮d','R%ao')]=![];try{this[_0x1cf8('‮e','Y!z6')]=$[_0x1cf8('‫f','x5MB')](_0x11a8fe);this[_0x1cf8('‫10',')9BW')]=!![];}catch(_0x321d2f){if(_0x642324[_0x1cf8('‫11','O2C&')](_0x642324[_0x1cf8('‫12','hvnz')],'zfIcH')){$[_0x1cf8('‫13','k^R(')]('账号['+this[_0x1cf8('‫14','uIo@')]+']'+result['msg']);}else{this[_0x1cf8('‮15','BV@G')]=![];$[_0x1cf8('‮16','b[$Z')]('账号['+this[_0x1cf8('‫17','!9mn')]+']CK格式错误');}}}async[_0x1cf8('‫18','VeX]')](){var _0x583eb1={'mhPwQ':function(_0x13c6b3,_0x22a736,_0xe663af,_0xed3d0d){return _0x13c6b3(_0x22a736,_0xe663af,_0xed3d0d);},'mLRuX':_0x1cf8('‮19','pTNJ'),'wbBxw':function(_0x80a6a4,_0x49d444,_0x4e7ab4){return _0x80a6a4(_0x49d444,_0x4e7ab4);},'MNAzS':_0x1cf8('‫1a','VeX]')};try{let _0x62e020=_0x1cf8('‫1b','VeX]');let _0x4315ef='';let _0x1db909=''+this['param'][_0x1cf8('‫1c','Snv#')];let _0x107c33=_0x583eb1['mhPwQ'](populateUrlObject,_0x62e020,_0x1db909,_0x4315ef);delete _0x107c33[_0x1cf8('‫1d','VeX]')][_0x583eb1[_0x1cf8('‫1e','pTNJ')]];await _0x583eb1[_0x1cf8('‮1f','tqNM')](httpRequest,_0x583eb1[_0x1cf8('‫20','9Fr)')],_0x107c33);let _0x37048f=httpResult;if(!_0x37048f)return;if(_0x37048f[_0x1cf8('‮21',')9BW')]==0x0){$[_0x1cf8('‫22','@H&e')](_0x1cf8('‫23','wcvb')+this[_0x1cf8('‫24','N5mo')]+']早起打卡成功');}else{$[_0x1cf8('‫25','p6jV')](_0x1cf8('‫26','p6jV')+this['name']+']'+_0x37048f['msg']);}}catch(_0x3a5ef4){}finally{return Promise[_0x1cf8('‮27','TTlj')](0x1);}}async['submitSign'](){var _0x3ecd9f={'aAWZp':'param=eyJhY3Rpb24iOiJNQiJ9','rDyEC':_0x1cf8('‮28','S3J3'),'RgByS':function(_0x990be7,_0xca6e4a){return _0x990be7==_0xca6e4a;}};try{let _0x4fefc2=_0x1cf8('‮29','j!q)');let _0x58607a=_0x3ecd9f[_0x1cf8('‮2a',')9BW')];let _0x73f7cf='26';let _0x29c996=''+this[_0x1cf8('‫2b','21C(')][_0x1cf8('‮2c','o[)b')];let _0x14608c=populateUrlObject(_0x4fefc2,_0x29c996,_0x73f7cf,_0x58607a);await httpRequest(_0x3ecd9f[_0x1cf8('‫2d','j!q)')],_0x14608c);let _0x32436b=httpResult;if(!_0x32436b)return;if(_0x3ecd9f[_0x1cf8('‫2e','B4jy')](_0x32436b[_0x1cf8('‫2f','Vd15')],0x0)){$[_0x1cf8('‫30','gF4L')](_0x1cf8('‮31','q@OK')+this[_0x1cf8('‮32','o%v(')]+_0x1cf8('‫33','pTNJ')+_0x32436b[_0x1cf8('‮34','KeVD')]['signScore']+'诺米');}else{$['logAndNotify']('账号['+this[_0x1cf8('‮35','hvnz')]+']'+_0x32436b['respDesc']);}}catch(_0x3fda7f){}finally{return Promise[_0x1cf8('‮36','!9mn')](0x1);}}async[_0x1cf8('‮37','XERo')](){var _0x47e60e={'ryjlK':function(_0x5e5bb6,_0x44eea2){return _0x5e5bb6===_0x44eea2;},'mFuiW':_0x1cf8('‮38','$Ga&'),'IyJcP':function(_0x119673,_0x46f9ee,_0x31bab6,_0x62b3e3){return _0x119673(_0x46f9ee,_0x31bab6,_0x62b3e3);},'GLlzr':function(_0x59d4ad,_0x2fcd8e){return _0x59d4ad<_0x2fcd8e;},'wFsrd':function(_0x281caa,_0x6618b4){return _0x281caa===_0x6618b4;},'PlbtC':_0x1cf8('‫39','XERo'),'LtXCb':_0x1cf8('‮3a','Snv#'),'Rblmx':_0x1cf8('‮3b','aiFa'),'fsHSb':'oJCuz','aoUAa':_0x1cf8('‫3c','tqNM')};try{if(_0x47e60e[_0x1cf8('‮3d','p6jV')](_0x47e60e['mFuiW'],_0x47e60e[_0x1cf8('‫3e','I7ST')])){let _0x46061d='https://hms.cignacmb.com/activity/cignaInvestment/getUserTaskList';let _0x50b4b3='';let _0x1a9f2b=''+this['param']['Authorization'];let _0x3b2608=_0x47e60e[_0x1cf8('‮3f','IC%2')](populateUrlObject,_0x46061d,_0x1a9f2b,_0x50b4b3);delete _0x3b2608['headers']['Content-Length'];await httpRequest(_0x1cf8('‫40','Qdcn'),_0x3b2608);let _0x3bb769=httpResult;if(!_0x3bb769)return;if(_0x3bb769[_0x1cf8('‫41','BV@G')]==0x0){if(_0x3bb769[_0x1cf8('‫42','TTlj')][_0x1cf8('‫43','IpOd')][0x0][_0x1cf8('‫44','o%v(')]=0x0){await $[_0x1cf8('‮45','p6jV')](0xbb8);await this[_0x1cf8('‮46','IC%2')]();}else{$[_0x1cf8('‮47','o%v(')](_0x1cf8('‫48','aiFa')+this[_0x1cf8('‫24','N5mo')]+']每日保单签到已完成');}for(let _0x3b488d=0x0;_0x47e60e[_0x1cf8('‮49','p6jV')](_0x3b488d,0x4);_0x3b488d++){if(_0x47e60e[_0x1cf8('‮4a','(%kU')](_0x47e60e[_0x1cf8('‫4b','N5mo')],_0x47e60e['LtXCb'])){this[_0x1cf8('‮4c','Fu5Z')]=![];$['logAndNotify'](_0x1cf8('‫4d','VeX]')+this[_0x1cf8('‫17','!9mn')]+_0x1cf8('‮4e','&P(L'));}else{if(_0x3bb769[_0x1cf8('‮4f','*)#z')][_0x1cf8('‮50','WtNH')][''+_0x3b488d][_0x1cf8('‫51','pTNJ')]==-0x1){if(_0x47e60e[_0x1cf8('‮52','S3J3')]===_0x47e60e['fsHSb']){$['logAndNotify'](_0x3bb769[_0x1cf8('‫53','o[)b')]+_0x1cf8('‫54','xrTG'));}else{var _0x3646d5=_0x47e60e['aoUAa'][_0x1cf8('‫55','tqNM')]('|'),_0x4567ed=0x0;while(!![]){switch(_0x3646d5[_0x4567ed++]){case'0':this[_0x1cf8('‮56','Y!z6')]=_0x3bb769['data']['allTask'][''+_0x3b488d]['awardContent'];continue;case'1':await this['updateTaskStatus']();continue;case'2':await $['wait'](0x1388);continue;case'3':this['recordId']=_0x3bb769['data'][_0x1cf8('‮57','KeVD')][''+_0x3b488d][_0x1cf8('‫58','O%Mm')];continue;case'4':this['taskCode']=_0x3bb769[_0x1cf8('‫59','XERo')]['allTask'][''+_0x3b488d]['taskCode'];continue;}break;}}}else{this[_0x1cf8('‫5a',')9BW')]=_0x3bb769['data'][_0x1cf8('‮5b','$Ga&')][''+num]['taskName'];$[_0x1cf8('‫5c','I7ST')](_0x1cf8('‮5d','x5MB')+this[_0x1cf8('‫5e','3zi6')]+_0x1cf8('‮5f','BV@G')+this['taskName']+_0x1cf8('‮60','(%kU'));num++;}}}}}else{$[_0x1cf8('‫61','VeX]')](result[_0x1cf8('‫62','KeVD')]+'\x20请勿多处使用or重装环境造成请联系作者解除');}}catch(_0x549495){}finally{return Promise[_0x1cf8('‮63','Fu5Z')](0x1);}}async[_0x1cf8('‫64','x5MB')](){var _0x4af1bc={'kBrtO':function(_0x39e450,_0x3a3338){return _0x39e450===_0x3a3338;},'bOGGa':_0x1cf8('‮65','b[$Z'),'hbyJk':function(_0x2baee4,_0xd43bde,_0x1f5dc7,_0x16850f,_0x56f4b7){return _0x2baee4(_0xd43bde,_0x1f5dc7,_0x16850f,_0x56f4b7);},'Tzecy':function(_0x54432f,_0x472541,_0x7ce226){return _0x54432f(_0x472541,_0x7ce226);},'sGTJI':_0x1cf8('‮66','pTNJ'),'vECUa':function(_0x2678e0,_0x483fbe){return _0x2678e0==_0x483fbe;},'nIVpv':function(_0x43ec1f,_0x11eed1){return _0x43ec1f===_0x11eed1;},'pPhRm':_0x1cf8('‫67','j!q)')};try{if(_0x4af1bc['kBrtO'](_0x1cf8('‮68','aiFa'),_0x4af1bc[_0x1cf8('‫69','j!q)')])){return Promise['resolve'](0x1);}else{let _0x4b4ddd=_0x1cf8('‫6a','Vd15');let _0x1ea08=_0x1cf8('‫6b','x5MB')+this[_0x1cf8('‮6c','3zi6')];let _0x5256ed=''+this['param']['Authorization'];let _0x518b22='12';let _0x327146=_0x4af1bc['hbyJk'](populateUrlObject,_0x4b4ddd,_0x5256ed,_0x518b22,_0x1ea08);await _0x4af1bc[_0x1cf8('‫6d','KeVD')](httpRequest,_0x4af1bc['sGTJI'],_0x327146);let _0x36092f=httpResult;if(!_0x36092f)return;if(_0x4af1bc['vECUa'](_0x36092f[_0x1cf8('‮6e','Qdcn')],0x1)){$['logAndNotify']('账号['+this[_0x1cf8('‫6f','$Ga&')]+_0x1cf8('‮70','3zi6')+this['awardContent']);await $[_0x1cf8('‫71','TTlj')](0x1388);await this[_0x1cf8('‫72','TTlj')]();}else{$['logAndNotify']('账号['+this[_0x1cf8('‮73','Y!z6')]+']浏览任务失败');}}}catch(_0x519a12){}finally{if(_0x4af1bc[_0x1cf8('‮74','*)#z')](_0x1cf8('‫75','fIr5'),_0x4af1bc['pPhRm'])){return Promise[_0x1cf8('‫76','xrTG')](0x1);}else{taskall[_0x1cf8('‮77','o[)b')](user[_0x1cf8('‫78','O2C&')]());}}}async['receiveCandy'](){var _0x4cb28f={'CigLX':'DxEkS','ShuSN':_0x1cf8('‫79','fIr5'),'nKmxD':function(_0x42bbbd,_0x29a727,_0x1c6816,_0x2dbeb1,_0x4c7254){return _0x42bbbd(_0x29a727,_0x1c6816,_0x2dbeb1,_0x4c7254);},'HlRbY':function(_0x273959,_0x3f4020,_0x502004){return _0x273959(_0x3f4020,_0x502004);},'fmtNC':'post','xOpwb':function(_0x43ec8d,_0x48dd0f){return _0x43ec8d==_0x48dd0f;},'cnJnY':function(_0x3ae90c,_0x24039f){return _0x3ae90c===_0x24039f;},'VLuiI':_0x1cf8('‫7a','*)#z'),'xnSyL':_0x1cf8('‫7b','kJbH'),'plCbQ':'tgFUe'};try{if(_0x4cb28f['CigLX']!==_0x4cb28f['ShuSN']){let _0x23e969=_0x1cf8('‫7c','tqNM');let _0x44a2bf=_0x1cf8('‮7d','O2C&')+this['recordId'];console[_0x1cf8('‮7e','R%ao')](_0x44a2bf);let _0x3a5c57=''+this[_0x1cf8('‮7f','WtNH')][_0x1cf8('‫80','@H&e')];let _0x5ac702='17';let _0x489fd0=_0x4cb28f[_0x1cf8('‫81','&P(L')](populateUrlObject,_0x23e969,_0x3a5c57,_0x5ac702,_0x44a2bf);await _0x4cb28f[_0x1cf8('‮82','VeX]')](httpRequest,_0x4cb28f[_0x1cf8('‮83','KeVD')],_0x489fd0);let _0x1f54e2=httpResult;if(!_0x1f54e2)return;console[_0x1cf8('‫84','aiFa')](_0x1f54e2);if(_0x4cb28f[_0x1cf8('‮85','O2C&')](_0x1f54e2['statusCode'],0x0)){$[_0x1cf8('‮86','IpOd')](_0x1cf8('‫87','Fu5Z')+this[_0x1cf8('‫14','uIo@')]+']领取:\x20'+_0x1f54e2['data'][0x0][_0x1cf8('‫88','Fu5Z')]+'颗糖果🍬');}else{if(_0x4cb28f['cnJnY'](_0x4cb28f[_0x1cf8('‮89','hvnz')],_0x4cb28f[_0x1cf8('‮8a','*)#z')])){console[_0x1cf8('‫8b','uIo@')](e);}else{$['logAndNotify']('账号['+this[_0x1cf8('‮8c','O2C&')]+']'+_0x1f54e2['msg']);}}}else{this[_0x1cf8('‫8d','fIr5')]=$[_0x1cf8('‮8e','Qdcn')](str);this[_0x1cf8('‫8f','I7ST')]=!![];}}catch(_0x2166ea){}finally{if(_0x4cb28f['cnJnY'](_0x4cb28f[_0x1cf8('‫90','TTlj')],_0x4cb28f['plCbQ'])){return Promise[_0x1cf8('‫91','BV@G')](0x1);}else{httpResult=resp['body'];}}}async[_0x1cf8('‫92','$Ga&')](){var _0x15f32f={'kNfPg':function(_0x1bea81,_0x31a800,_0x19fde5,_0xad809a){return _0x1bea81(_0x31a800,_0x19fde5,_0xad809a);},'lEdXG':_0x1cf8('‮93','$Ga&'),'qWLov':_0x1cf8('‮94',')9BW'),'JtyGG':function(_0x107770,_0x34a76b){return _0x107770===_0x34a76b;},'njcAu':'xLBDJ','zbCwq':_0x1cf8('‫95','k^R(')};try{let _0x4ec1df=_0x1cf8('‫96','HcTh');let _0x4a66a5='';let _0xfe3808=''+this['param'][_0x1cf8('‫97','IC%2')];let _0x1d108f=_0x15f32f[_0x1cf8('‫98','pTNJ')](populateUrlObject,_0x4ec1df,_0xfe3808,_0x4a66a5);delete _0x1d108f[_0x1cf8('‫99','wcvb')][_0x15f32f['lEdXG']];await httpRequest(_0x15f32f['qWLov'],_0x1d108f);let _0x13ac1e=httpResult;if(!_0x13ac1e)return;if(_0x13ac1e[_0x1cf8('‮9a','j!q)')]==0x0){if(_0x15f32f['JtyGG'](_0x15f32f['njcAu'],_0x15f32f[_0x1cf8('‮9b','x5MB')])){$['logAndNotify'](_0x1cf8('‫9c','tqNM')+this[_0x1cf8('‮9d','IC%2')]+_0x1cf8('‫9e','&P(L')+_0x13ac1e['respData']['signScore']+'诺米');}else{$[_0x1cf8('‫9f','XERo')](_0x1cf8('‫a0','O2C&')+this['name']+_0x1cf8('‮a1','uIo@')+_0x13ac1e['data'][_0x1cf8('‫a2','VeX]')]+'\x20喂养进度'+_0x13ac1e[_0x1cf8('‮a3','21C(')]['receivedNaomiNum']+_0x1cf8('‫a4','VeX]')+_0x13ac1e['data']['growthLevelCandyNum']+_0x1cf8('‮a5',')9BW'));}}else{$[_0x1cf8('‫a6','x7EV')](_0x1cf8('‫a7','$Ga&')+this['name']+']'+_0x13ac1e['msg']);this[_0x1cf8('‫a8','TTlj')]=![];this['canRead']=![];}}catch(_0x5ca3df){}finally{return Promise[_0x1cf8('‮63','Fu5Z')](0x1);}}async['investCandy'](){var _0x74bf19={'lUsbO':'1|2|3|4|0','NTPeQ':function(_0x34c3c0,_0x3d7685){return _0x34c3c0!==_0x3d7685;},'emSwc':function(_0x7fa50f,_0x7f13d,_0x52edd4){return _0x7fa50f(_0x7f13d,_0x52edd4);},'PTIpf':'Content-Length','nPoSN':function(_0x4cd396,_0x1c7f1e,_0xe38281){return _0x4cd396(_0x1c7f1e,_0xe38281);},'MEEqO':function(_0x58f24b,_0x437f49){return _0x58f24b==_0x437f49;}};try{if(_0x74bf19[_0x1cf8('‫a9','wcvb')]('xbQCe',_0x1cf8('‮aa','o%v('))){var _0x4f44ca=_0x74bf19[_0x1cf8('‫ab','Fu5Z')]['split']('|'),_0x44dc4a=0x0;while(!![]){switch(_0x4f44ca[_0x44dc4a++]){case'0':try{this[_0x1cf8('‫ac','uIo@')]=$['str2json'](str);this['ckValid']=!![];}catch(_0x1d3e05){this[_0x1cf8('‮ad','VeX]')]=![];$[_0x1cf8('‫ae','hvnz')](_0x1cf8('‮af','21C(')+this[_0x1cf8('‮b','pTNJ')]+']CK格式错误');}continue;case'1':this['index']=++userIdx;continue;case'2':this[_0x1cf8('‮73','Y!z6')]=this[_0x1cf8('‫17','!9mn')];continue;case'3':this['valid']=![];continue;case'4':this[_0x1cf8('‫b0','TTlj')]=![];continue;}break;}}else{let _0x5de884='https://hms.cignacmb.com/activity/cignaInvestment/investCandy';let _0x229e65='';let _0x55ad3f=''+this[_0x1cf8('‫b1','pTNJ')][_0x1cf8('‫b2','$Ga&')];let _0x838280=_0x74bf19[_0x1cf8('‫b3','21C(')](populateUrlObject,_0x5de884,_0x55ad3f);delete _0x838280[_0x1cf8('‫b4','hvnz')][_0x74bf19['PTIpf']];await _0x74bf19[_0x1cf8('‫b5','tqNM')](httpRequest,'post',_0x838280);let _0x708367=httpResult;if(!_0x708367)return;if(_0x74bf19[_0x1cf8('‫b6','xrTG')](_0x708367[_0x1cf8('‮b7','Snv#')],0x0)){$[_0x1cf8('‮b8','N5mo')](_0x1cf8('‫b9','o[)b')+this[_0x1cf8('‮ba','9Fr)')]+']喂糖果:\x20'+_0x708367[_0x1cf8('‮bb','BV@G')]);}else{$[_0x1cf8('‫13','k^R(')](_0x1cf8('‫bc','pTNJ')+this[_0x1cf8('‫bd','Qdcn')]+']'+_0x708367[_0x1cf8('‫53','o[)b')]);}}}catch(_0x2f5a26){}finally{return Promise[_0x1cf8('‮be','hvnz')](0x1);}}}!(async()=>{var _0x223291={'dDJLo':function(_0x33ecb5,_0x3c40af){return _0x33ecb5!==_0x3c40af;},'CKfyG':'jqmVg','cvohD':function(_0x26b0ff){return _0x26b0ff();},'iQLiD':_0x1cf8('‫bf','b[$Z'),'Flsmi':_0x1cf8('‮c0','x7EV'),'YAIjV':'\x0a--------------\x20双签、任务\x20--------------','zZiQz':function(_0x550fc8,_0x1b9cea){return _0x550fc8>=_0x1b9cea;},'relKg':function(_0x1753a2,_0x509fcf){return _0x1753a2===_0x509fcf;}};if(_0x223291[_0x1cf8('‮c1','I7ST')](typeof $request,_0x1cf8('‮c2','o[)b'))){}else{if(_0x1cf8('‫c3','O%Mm')!==_0x223291[_0x1cf8('‮c4','BV@G')]){await km();if(!(await _0x223291['cvohD'](checkEnv)))return;let _0x459eb0=[];let _0x5dbf57=userList[_0x1cf8('‮c5','3zi6')](_0x4ac501=>_0x4ac501[_0x1cf8('‫8f','I7ST')]);if(_0x5dbf57['length']>0x0){$[_0x1cf8('‫c6','9Fr)')](_0x223291[_0x1cf8('‫c7','wcvb')]);_0x459eb0=[];for(let _0x4aa175 of _0x5dbf57){_0x459eb0[_0x1cf8('‮c8','fIr5')](_0x4aa175[_0x1cf8('‫c9','Vd15')]());}await Promise[_0x1cf8('‫ca','I7ST')](_0x459eb0);_0x5dbf57=_0x5dbf57['filter'](_0x3e21e8=>_0x3e21e8[_0x1cf8('‮cb','fIr5')]);if(_0x5dbf57[_0x1cf8('‮cc','o%v(')]>0x0){$[_0x1cf8('‮cd','wcvb')](_0x223291[_0x1cf8('‮ce','R%ao')]);_0x459eb0=[];for(let _0x2665e0 of _0x5dbf57[_0x1cf8('‫cf','x7EV')](_0x53d617=>_0x53d617[_0x1cf8('‫d0','o%v(')])){_0x459eb0[_0x1cf8('‮d1','pTNJ')](_0x2665e0[_0x1cf8('‫d2','b[$Z')]());await $[_0x1cf8('‫d3','k^R(')](0x1f40);_0x459eb0[_0x1cf8('‮d4','Fu5Z')](_0x2665e0[_0x1cf8('‫d5','Vd15')]());$[_0x1cf8('‫d6','uIo@')](_0x223291[_0x1cf8('‮d7','Y!z6')]);h=local_hours();if(_0x223291[_0x1cf8('‮d8','O2C&')](h,0x6)&&h<=0x8){_0x459eb0[_0x1cf8('‫d9','uIo@')](_0x2665e0[_0x1cf8('‮da','XERo')]());await $[_0x1cf8('‮db','B4jy')](0x1388);_0x459eb0['push'](_0x2665e0[_0x1cf8('‫dc','Vd15')]());}else{if(_0x223291[_0x1cf8('‫dd','&P(L')](_0x1cf8('‮de','IpOd'),_0x1cf8('‮de','IpOd'))){$[_0x1cf8('‫df','TTlj')]('\x0a有定时任务务必在6-8点运行一次');}else{return Promise[_0x1cf8('‫e0','x7EV')](0x1);}}}await Promise[_0x1cf8('‮e1','tqNM')](_0x459eb0);}}await $[_0x1cf8('‮e2','!9mn')]();}else{console[_0x1cf8('‮e3','O2C&')](method+_0x1cf8('‫e4','*)#z'));console['log'](JSON[_0x1cf8('‮e5','9Fr)')](err));}}})()[_0x1cf8('‫e6','Snv#')](_0x3653bb=>console[_0x1cf8('‫e7','q@OK')](_0x3653bb))['finally'](()=>$[_0x1cf8('‫e8','I7ST')]());async function km(){var _0x49aff2={'zNrBf':function(_0x1e51c4,_0x295910,_0x154438){return _0x1e51c4(_0x295910,_0x154438);},'dkVQJ':function(_0x584e2a,_0x334ade,_0xf18341){return _0x584e2a(_0x334ade,_0xf18341);},'aVMBJ':'post','xVBot':'Content-Length','YrJJZ':function(_0x30c1f8,_0x505c06){return _0x30c1f8==_0x505c06;},'jvpue':_0x1cf8('‮e9','IC%2'),'cCPhY':_0x1cf8('‮ea','Y!z6'),'OdPrB':function(_0x4afe99,_0x5f47f6){return _0x4afe99(_0x5f47f6);},'LgiUM':function(_0x38cc43,_0x52c0c5){return _0x38cc43==_0x52c0c5;},'MdCtt':function(_0x41096f,_0x1b49e4){return _0x41096f==_0x1b49e4;},'zohEZ':function(_0x4c0c38,_0x267b60){return _0x4c0c38==_0x267b60;},'vvAbV':function(_0x52d020,_0x284d44){return _0x52d020!==_0x284d44;},'mESAM':_0x1cf8('‮eb','TTlj')};try{let _0x33a0f7=_0x1cf8('‮ec','(%kU')+userCGkey+_0x1cf8('‮ed','(%kU')+uuid;let _0x5e1cea='';let _0x55aaa8=_0x49aff2[_0x1cf8('‮ee','p6jV')](populateUrlObject,_0x33a0f7,_0x5e1cea);await _0x49aff2['dkVQJ'](httpRequest,_0x49aff2[_0x1cf8('‮ef','I7ST')],_0x55aaa8);delete _0x55aaa8[_0x1cf8('‫f0','R%ao')][_0x49aff2[_0x1cf8('‫f1','k^R(')]];delete _0x55aaa8[_0x1cf8('‫f2','k^R(')][_0x1cf8('‮f3','x5MB')];let _0x4ba62c=httpResult;if(_0x49aff2[_0x1cf8('‮f4','R%ao')](_0x4ba62c[_0x1cf8('‫f5','aiFa')],0xc8)){if(_0x49aff2['jvpue']!==_0x49aff2[_0x1cf8('‫f6','o[)b')]){var _0x144caa='4|5|0|2|1|3'[_0x1cf8('‫f7','Snv#')]('|'),_0x33f6dc=0x0;while(!![]){switch(_0x144caa[_0x33f6dc++]){case'0':$['logAndNotify']('卡密验证成功\x20有效期至'+this[_0x1cf8('‫f8','hvnz')]);continue;case'1':this['valid']=!![];continue;case'2':await $['wait'](0xbb8);continue;case'3':this[_0x1cf8('‫f9','21C(')]=!![];continue;case'4':this[_0x1cf8('‫fa','wcvb')]=_0x4ba62c[_0x1cf8('‫fb','o%v(')]['vip'];continue;case'5':this[_0x1cf8('‮fc','I7ST')]=_0x49aff2[_0x1cf8('‮fd','*)#z')](timestampToTime,this[_0x1cf8('‫fe','3zi6')]);continue;}break;}}else{$[_0x1cf8('‮cd','wcvb')](_0x1cf8('‮ff',')9BW')+this[_0x1cf8('‫24','N5mo')]+_0x1cf8('‫100','Snv#')+_0x4ba62c[_0x1cf8('‫101','IC%2')][_0x1cf8('‫102','uIo@')]+_0x1cf8('‮103','b[$Z')+_0x4ba62c[_0x1cf8('‫104','uIo@')][_0x1cf8('‫105','IC%2')]+_0x1cf8('‫106','IpOd')+_0x4ba62c[_0x1cf8('‮a3','21C(')][_0x1cf8('‮107','o%v(')]+_0x1cf8('‮108','WtNH'));}}if(_0x49aff2['LgiUM'](_0x4ba62c[_0x1cf8('‫109','B4jy')],0x95)||_0x49aff2[_0x1cf8('‮10a','aiFa')](_0x4ba62c[_0x1cf8('‮10b','tqNM')],0x94)||_0x4ba62c[_0x1cf8('‫10c','21C(')]==0x70){$[_0x1cf8('‫10d','xrTG')](_0x4ba62c['msg']+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}if(_0x49aff2['zohEZ'](_0x4ba62c[_0x1cf8('‮10e','x7EV')],0x192)){if(_0x49aff2[_0x1cf8('‮10f','BV@G')](_0x1cf8('‫110','wcvb'),_0x49aff2[_0x1cf8('‮111','IpOd')])){$['logAndNotify'](_0x4ba62c[_0x1cf8('‮112','x7EV')]+_0x1cf8('‫113','xrTG'));}else{this[_0x1cf8('‫114','R%ao')]=_0x4ba62c[_0x1cf8('‫115','N5mo')][_0x1cf8('‮116','VeX]')][''+num][_0x1cf8('‮117','I7ST')];$['logAndNotify']('账号['+this['name']+_0x1cf8('‫118','IpOd')+this[_0x1cf8('‫119','XERo')]+_0x1cf8('‫11a','B4jy'));num++;}}}catch(_0x4b6752){}finally{return Promise['resolve'](0x1);}}async function checkEnv(){var _0x41557a={'ouxJa':_0x1cf8('‮11b','tqNM'),'pQfrH':_0x1cf8('‫11c','b[$Z'),'RtnAB':_0x1cf8('‮11d','VeX]'),'WFEal':_0x1cf8('‮11e','WtNH'),'ABlxf':function(_0xca4a9f,_0xfa800f){return _0xca4a9f>_0xfa800f;},'GAejV':function(_0x979f3f,_0x2defb5){return _0x979f3f!==_0x2defb5;},'JKhtd':_0x1cf8('‫11f','*)#z'),'yoVgf':_0x1cf8('‫120','fIr5'),'ASYXY':_0x1cf8('‫121','S3J3')};if(userCookie){if(_0x41557a['WFEal']===_0x41557a[_0x1cf8('‮122','p6jV')]){let _0x4c80ed=envSplitor[0x0];for(let _0x4e4892 of envSplitor){if(_0x41557a[_0x1cf8('‫123','o[)b')](userCookie['indexOf'](_0x4e4892),-0x1)){if(_0x41557a['GAejV'](_0x41557a[_0x1cf8('‮124','N5mo')],_0x41557a['yoVgf'])){_0x4c80ed=_0x4e4892;break;}else{urlObject['body']=body;urlObject[_0x1cf8('‫f0','R%ao')][_0x41557a[_0x1cf8('‫125','gF4L')]]=_0x41557a['pQfrH'];urlObject[_0x1cf8('‮126','tqNM')][_0x41557a[_0x1cf8('‫127','tqNM')]]=urlObject[_0x1cf8('‫128','TTlj')]?urlObject[_0x1cf8('‮129','k^R(')][_0x1cf8('‮12a','fIr5')]:0x0;}}}for(let _0x4d2a4b of userCookie[_0x1cf8('‮12b','I7ST')](_0x4c80ed)){if(_0x4d2a4b)userList['push'](new UserInfo(_0x4d2a4b));}userCount=userList['length'];}else{httpResult=JSON['parse'](resp[_0x1cf8('‮12c','hvnz')]);}}else{console[_0x1cf8('‫12d','k^R(')](_0x41557a[_0x1cf8('‫12e','b[$Z')]);return;}console[_0x1cf8('‫84','aiFa')](_0x1cf8('‫12f','k^R(')+userCount+_0x1cf8('‫130','!9mn'));return!![];}function populateUrlObject(_0x355190,_0x4d95e1,_0x410101,_0x41c5af=''){var _0x13d15e={'ysLGu':'application/x-www-form-urlencoded','tHnXq':function(_0x5a8afb,_0x3fb754){return _0x5a8afb!==_0x3fb754;}};let _0x4e7c8a=_0x355190[_0x1cf8('‮131','WtNH')]('//','/')['split']('/')[0x1];let _0x3318a2={'url':_0x355190,'headers':{'Host':_0x4e7c8a,'Content-Length':_0x410101,'Authorization':_0x4d95e1,'User-Agent':defaultUA,'Content-Type':_0x13d15e[_0x1cf8('‮132','q@OK')]},'timeout':0x1388};if(_0x41c5af){if(_0x13d15e['tHnXq']('SgPsC','SQbne')){_0x3318a2['body']=_0x41c5af;_0x3318a2[_0x1cf8('‫133','!9mn')][_0x1cf8('‫134','*)#z')]='application/x-www-form-urlencoded;charset=UTF-8';_0x3318a2[_0x1cf8('‮135','fIr5')]['Content-Length']=_0x3318a2['body']?_0x3318a2[_0x1cf8('‮136','p6jV')][_0x1cf8('‫137','3zi6')]:0x0;}else{return Promise[_0x1cf8('‫138','Y!z6')](0x1);}}return _0x3318a2;}async function httpRequest(_0x3ec2e4,_0x1ccad4){var _0x4f8df6={'EswYT':function(_0x504957,_0x3ffa0e){return _0x504957===_0x3ffa0e;},'wgJcV':_0x1cf8('‫139','KeVD'),'tlvag':_0x1cf8('‮13a','R%ao'),'tbzKW':function(_0x34eb30,_0x5134f3){return _0x34eb30!==_0x5134f3;},'ZwZVF':_0x1cf8('‫13b','*)#z')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x41d35b=>{var _0x5c5cb8={'jzZnk':function(_0x56877b,_0x19e022){return _0x4f8df6[_0x1cf8('‫13c','o%v(')](_0x56877b,_0x19e022);},'WPSgM':'avUjp','vowgw':function(_0x14e27a,_0x561aa9){return _0x4f8df6[_0x1cf8('‮13d','Fu5Z')](_0x14e27a,_0x561aa9);},'YjiDJ':_0x4f8df6[_0x1cf8('‫13e','pTNJ')],'oXoys':function(_0x2fb5fa,_0x2600cc){return _0x2fb5fa==_0x2600cc;},'osgSS':_0x4f8df6[_0x1cf8('‮13f','KeVD')],'GeuwP':function(_0x5367bd,_0x147372){return _0x4f8df6[_0x1cf8('‮140','Y!z6')](_0x5367bd,_0x147372);},'Reiwo':_0x4f8df6[_0x1cf8('‫141','gF4L')],'dxxmf':function(_0x545a7e){return _0x545a7e();}};$['send'](_0x3ec2e4,_0x1ccad4,async(_0x34f838,_0x4fba8b,_0x2e911b)=>{try{httpReq=_0x4fba8b;httpResp=_0x2e911b;if(_0x34f838){if(_0x5c5cb8[_0x1cf8('‮142','R%ao')](_0x1cf8('‫143','x7EV'),_0x5c5cb8[_0x1cf8('‫144','kJbH')])){console['log'](_0x3ec2e4+_0x1cf8('‫145','q@OK'));console[_0x1cf8('‮146',')9BW')](JSON[_0x1cf8('‮147','k^R(')](_0x34f838));}else{$[_0x1cf8('‫c6','9Fr)')]('账号['+this[_0x1cf8('‮148','XERo')]+_0x1cf8('‮149','j!q)'));}}else{if(_0x5c5cb8['vowgw'](_0x5c5cb8[_0x1cf8('‫14a','*)#z')],_0x5c5cb8['YjiDJ'])){if(_0x2e911b[_0x1cf8('‮14b','fIr5')]){if(_0x5c5cb8[_0x1cf8('‮14c','I7ST')](typeof _0x2e911b['body'],_0x5c5cb8[_0x1cf8('‫14d','TTlj')])){httpResult=_0x2e911b[_0x1cf8('‮14e','IC%2')];}else{if(_0x5c5cb8[_0x1cf8('‮14f','Vd15')](_0x5c5cb8[_0x1cf8('‮150','IpOd')],'ygAjR')){try{httpResult=JSON[_0x1cf8('‫151','IC%2')](_0x2e911b[_0x1cf8('‫128','TTlj')]);}catch(_0x4473fe){httpResult=_0x2e911b[_0x1cf8('‮152','uIo@')];}}else{return Promise[_0x1cf8('‫153','O%Mm')](0x1);}}}}else{return Promise['resolve'](0x1);}}}catch(_0x3f9047){console['log'](_0x3f9047);}finally{_0x5c5cb8[_0x1cf8('‫154','b[$Z')](_0x41d35b);}});});};_0xod8='jsjiami.com.v6';
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