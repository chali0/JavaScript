/*
完美人生App: 一诺庄园

变量：捉包https://hms.cignacmb.com域名headars里的Authorization 多账号换行隔开
格式：export ynzy="Authorization=Bearer_xxxxxx"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("一诺庄园");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; ProjectTitan Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36 ;hmsapp/5.5.36;HMS_APP_SESSIONID/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWduRGF0YSI6IkQ2QkY2NTRFNDA5N0UwMkMyQzJGRTVCQzFDNjg0RTg2OTI5MjQzIiwibG9naW5UaW1lIjoiMTY2ODAwOTAxMzY5NyIsIm5iZiI6MTY2ODAwOTAxMywiZXhwdCI6MTY2ODA5NTQxMzY5NywiaXNzIjoiSldUIiwiZnJvbSI6IkFQUCIsImV4cCI6MTY3MzE5MzAxMywidXNlcklkIjoiNjczMzQ5NCIsImlhdCI6MTY2ODAwOTAxM30.jFay4AUDuTq0ZQd2bzgGFw_WUZOz-An3UQc16aItE00;' //换成自己的UA
let list = 'param=eyJhY3Rpb24iOiJNQiIsInNlYXJjaEtleSI6IiIsImNhdGVnb3J5IjoiQTA3Iiwic29ydFR5cGUiOiIwNCIsImludGVydmFsIjoiMDAiLCJhY3Rpdml0eVR5cGUiOiIwNCwwMywwMiwxMywxNCwwMCIsImN1cnJlbnRQYWdlIjoiMSIsInBhZ2VTaXplIjoiMTAifQ=='         //库存监控body，默认虚拟卡类 如需其他自己抓
//https://member.cignacmb.com/shop/member/interface/queryShopList



var _0xodA='jsjiami.com.v6',_0xodA_=['‮_0xodA'],_0x2803=[_0xodA,'OUrDrwsT','wotsAcKMfg==','worDuAdTw60=','PxkJwokTwrBQcMOPFlUCB2cuwp0Tw6kuwqDDl8KJPxAAwqPCvjzDpnVUw5dXURMQEsOxQx/CjMOFwp1wesOFwrt9woN+w4E5XsONIcOJX3xsw5g=','RsObWcKVWw==','wqZcOSo=','woMrRjfDux4c','wpVcJCrCncOPOl9ARcK0woLCksO2','wrHDpB/DvknDt8Ovw4hZLQMTAA==','TcK6wrDDvg==','NcKWwosCZQ==','w4PCoMKydMKT','Rm7DpcKc','LsO7wqc=','IwQQwpwY','IwQQwpw=','wpzDvgzDl0jDocOIw51MMAwF','8JqPlOWOoeWvqumppuisveaLpeWJulzmnIHml4zmnpHohLc=','wrYgXWXDjw==','WMK0wrjDssK6','w4UPw4QLUhcq','w5LCtMKAfsKi','w5HCjsKsNsOj','SsOxacKXeg==','wo3DojU=','w5/orqnmoqTmnrzljIzlrrzmiJflnqTDhsOC5p+g5Zmi5Lmbw6VsFsKjN8OVw4Q0wr/Ct2flpYvojLfljIPlj6/lroo=','BF7DuCQj','w4/DqGHDjcOV','w57Ctl3CmcOH','w7vCqghTwp5wEMKjdMKSworCkg==','DOisguWJheWmruWmj+S9mueVp8ODMumHo+ihueeOi+Wjs+mBs+aLkuisneiDk+exvuS9neiBteintumYoQ==','w7XCksKXKsKrSzHDtw==','w7TCrjlzwpx9Og==','S8OjYi3Dsg==','w5zCtsKnfcKW','aMKVXHwZ','6Lew5Y+EEQ==','wqwoXWU=','CkwR','w6ACZcO0Jhsrw5VzSChlwqUGw5bCteWNjumEreajvOa2nG7DsyEyw6vCosKFEMOIM8KCBxzCpEg=','XyrCi1nCoA==','NCQtwq9h','IsKSwpwEUg==','w5LCnnoLJ1bDs3RO','fUTDssKbw7U=','BMOfOxnDhQ==','fsOEeMKtfsODRw==','wroaFhA9','AE94U8O+w4Q=','wochQBLDsAghOMOawphTw48=','wrHpg73nn7PljLbvvZ3DlELimIjvuanmnLnlrqDmlb/ku6XliJPlib/lvbnlnJJYwrpv54KH6L+S6KCv5Lib5qyLGA==','SsKraA==','wodGNS8/','ImYaYcKhw5c=','RC7ChcOHOQ==','LEs9wqjCgQ==','QnLDu8KR','woIgTifDtw0DPsOUwpRgw4VtH3/Ck8KeBA==','T8OCw58awpA/w4LCrcKEOg1U','ScOkw4nClA==','K8KYVw==','RMOjw4shwoQ=','w5fCgnhrM8K2','T8Ocw7YLwrQ=','w5fCiHFNKcK6BsOHEllcw7A=','fTQRwqDDjQ==','TMOycilMw6BJ','w6dXwqgYwp/Ds8O5I3LDn8OW','w5fChW0G','w7zDqmnDkQ==','w5rCqgFmwpg=','w7bDpsK/wp8=','w5xdwrwPwrY=','w7MrL8K/w6Y=','QMK2Pwg0','6Lan5Y2wwo0=','f+a0sOikvw==','w5PCkW0FD17DsHQ=','TsOUewM=','MsOPERDDuE8Q','IAwUwo0=','wpDDpCF9','w4JUfEMYOsOJSDhq','w6PCt8KjBg==','KsKBwoNWw7M=','w6t+wrEQwo4=','N8Ohwq1/','S8Oqw4PCsMOxw7nCvicjw4LDocOx','Yhw4wrzDsw==','w4/Ct3/CjcOkW8K0','wpdONyc3aBY=','wqYmXmU=','E8KBwoBbwpA=','BMORwpd5wpo=','CcKMeEvCrA==','L3M6wozCow==','wroaf3nCrA==','wrjDvgFQw5g=','TDHCk2nCkw==','QXfDpMKQw5Q=','wpjDgh1sw7M=','wr3DsCzDoXc=','w4fCisKmdMKD','wpTDsB/Dtw==','w6TCrsKrAMOiwoh4BcKXw5I8','H8K0woUJdcKxw6h4','W8Kyd0M=','XmjDrw==','5p695oq75YmfUcK7NOiuqembieivu+iHoeafgOisn+abnQ==','Q8O8ew==','5YaB5ouv5Ymb','5LiY6LSh5Y2/','T8KlwqTDt8K3e8Ouw5zDg8OPwocETlTCs1fDrUEJN8OcUcK1wqkFBwsRK8KCJH7CoQ==','AMOnwq5uwrbDnX/CkSJ1wpDCowoM','w7PDosKmwofCgMOjw6U=','WMK3aEII','wrNXDSbCnQ==','TsKaw57DjQ==','R8O2fR9Mw7Ne','w6DDt8KmwofCiMOjw6HCpsKHZxdzeMKSw7Zxwp/ChMOVw4smJMOhw6gPTkTCh8KUR8O5HWkWPcOZM8KFw6nCjMObc1JswqvDmXA=','WcKqFygXw4nDtg==','Myg/wrBA','QmA3Ow==','w7vCoAF1woR8','w55DdEsSOg==','N2DDjwM2','MsOuPxzDow==','wp9xBzPCnA==','NMK0wqoiUw==','RjjCncO/Ng==','wrUWD8KQwpw=','wpkrVDzDshoK','XcKwwrrDvw==','GH0tw6vCjA==','6LSy5Y6pwps=','w6XDqm3DgA==','6K+j5rCc5aex6LSJ','JBkPwpBHw7gWfcOb','RsO9dQ9Aw6BBw44Sw5vDjSnDtS3Cm8KowpE3','RcOqw4DCiA==','WcKvw7DDlsOH','XMOObBI=','U8KgEjU=','w7vDqnLDlsOZ','VnfDmsKrw4w=','w7xoVlwp','K29cVcOD','w6Iewqo=','w6nCqmN7LQ==','B0E5a8Kx','PFNuZMOR','woforIfmo57mnovljKDlr7nmiovlnLl+SOaflOWYjeS6h0pVw40Pw4RXwr/Cr0zDsMOF5aaC6I+b5Y6+5YyC5a6J','R8KmwprDtMK6fQ==','RsODw44=','wohJIz8=','wpZCLSI6cA4=','N20Ofw==','QsOrw5I=','wpV0ITvCgQ==','CsK0wpICZsKhw4A=','VxnCq0nCkw==','QcO8eB4Ew6xMw4QAw5fDtj/CvTbCtg==','w5PCmHsA','w5pGWGAT','w5Uew4YwQw==','w73DqmzDjMOY','bsK/wqXCksOQwoQ3','SsODw5w+woY=','IEzCjh0=','SxHCk8OAJQ==','wrE9QjLClMKEZwc=','RMOuw7LCkMOzw7TClA==','6LeX5Y+QAg==','w47CnnoLOQ==','w7stw6HmoaXlvLjpla/orqE=','QW4AF24=','KnE0w4XCjxUxW0/Ci8OBw6XDiXQ=','w5zCgmI=','w4zCp2fCucOY','w7QUwonDrMK6','w48EwrnDi8Kswq8bw6V3bVJWw5I=','w5TCunHCnsOsWsKg','w685LMKfw7g=','w7bCmVjCmcOf','QcKYwqPDosKX','Q1Y/BVE=','MMO8wqFuwqbDgEjDkwp1','C1ARwpzCpcKsAcOewq7DncK2Vg==','6Lax5YyyNA==','wo7DsD9w','f+aWlui2gOaLtuWMvOaKnuWJoQ==','BXE9w7DChB8LGXfCh8OJw7s=','w5EbMg==','Weiso+WKu+Wnm+WmseS8oueWqCNy6YWX6KK354yn5aGA6YOQ5omB6K2v6IGy57CF5L636IOP6KSr6Zi1','CklzZsO1w5IywoZ2wq7DoX0=','6LeM5Y+YEw==','wodcLw==','woMzNMKN','G3spw57Chg0g','ZyvCokHCg8KIwqbCjBtm','w4FAbE8cc8O/WBVsZcKnQsKhWwTCksK4NhPCh1fCvRbCmRY=','w5TCmcK4MsOv','EXXDrwYo','NFMawqTChQ==','UkY8Ens=','w7/CsRtiwoMuccOjbcKewoHCicK2wp7Dl2/CmAFPwoTDhDLDswrColg8w57Dg8Odw4PDvxYbUydOFcKUKsORFgdOwofDklPChS4KEi4jH8K1M8OZwokkQg==','JkoCwrXCpMK6JsOLwrvDgMK5QMOb','w7Uow4kDWQ==','woEjNMKVwrlScRw=','TGA0A0wcBWgvwq3DpEo=','wp0nKsKA','fuevk+WKiOiPrOW9qQ==','FENnV8Ofw5cIwog=','MMOhwqd0woDDkGTDjgs=','HMKnS3bCuw==','YMOObMKDfMORbH3Co8OtwrQ2','6LSI5Yyiwo8=','QMK0wrnDvg==','wpLDtCFlw6XCncO/w6U=','wq4mV0HCkMKTRgbCoiHCiyY=','w4gPw4c8','PMOUEw==','w4TCkXA8JF7DuQ==','wq4mVw==','U8KNU2oW','TMKnwrnChMOd','woLDtBjDuUrDs8Oj','wochQA==','czvCtHnCmcKZwofCsR17w6/DgsKtXho=','w4HDvmHDs8Op','w7HDpsKkworCjA==','w4DDssKiwoPCjsOyw6nCqMKPfBAzbg==','CcKbVVTCqzLDtSB5w47DtcOwcSg=','RMKkwrbDr8KK','a2UJGE8=','Q8Okw5DCkA==','w5Uew486Xhciw4HDhkpl','QXPDqcKNw5UW','U382IUsZJ1M6wrfDqQ==','Q8KqFSMAw5/DjMOm','cD/CtE0=','TsO/cC9Iw7JG','woJTODIudw==','w7sCO8Kkw5o=','LsKVT0E=','e8OAYsK2','woY2I8KEwo5YQRgWLznDgsOswp3DoMKo','w50fNMKvw5dlwqjCsyhWw4lR','T8KmcEo=','P8Kfwo9BwqbCvcOHw6MKSWrDpQ==','woLDtAjDuVTDocOPw5Y=','S8OyaBo=','w69VwrIpwo3DtMOR','wphKK8K2eVJPwpw=','RcKuBSc8w5rDqMOn','B0p4c8O6w4UX','w5wBwoHDjMKW','IsOBwoNwwpY=','P8Khwq1Zwoc=','dxYCwrTDu8KCYw==','PcOIEzLDvUIwO0nDg25O','fsOuw7Pmoaflv7HplYLoraM=','YQ0wwrTDo8KOU1U0b8K+FMO3wqPDgcKJ','N8OpwrNxwpDDnG/DmVM=','wocnNMKOwrlScRw=','IG3DryMt','YXonKk0KIn06wrDDq1x4','KkzClxk=','XcKgEQ0cw5/Di8OtwpIAe8OI','RcKmaU4=','UeS5muWKqsO4Mg==','woo5RiHDui8AOcOawpRbw4I=','J23DtDY=','CEd5QsKq','G3s5w5TCgw0gNWLCgMOLw7s=','XmjDr8K4w44BOErDgHjDj8KF','6LSK5YyCw6E=','Y+a3ruingA==','w7pYwq0WwqLDpsOXJw==','LeauuuS4sOWJoeW1h+e4quWvn+aInOS7iA==','w7PDosK1wo7CiMO2w6XCkcKPZh0l','fsKew7LDpcOb','w44aw54pRExhwrrDj1R9wqE2MMKywp7DnUTChMK0wrw1w77Cs3EMd8Oaw5pVLVk8w5cGSMOwEcKkbsKswqUCasKCX8ODwqkfw7XDtsO2JknCilzDocOzwpt2wqDCrQ==','w6XCu8KtDMO5wo1dNcOL','woMnNcKEwpc=','MiEZwoxm','RMOsaR7DiQ==','X8KBw5vDgMO+VgzDgyRL','IVJxVMOU','UCTCkmvCiQ==','VMOMw5Ev','OwIawrhHw7sxdMOWUV4e','6LWx5Y6aJg==','DemiiuWNi3hg','w7nCpAJ3w4E=','RG4nIw==','CcK4wpUWaMKmw4B+wolKw5dQK1vDgMKvw7h/','6aKw57GT5py48YOfsw==','ImnDri0sw7bCjg==','McOtwrN1wr/DhW4=','w7jCiHh4IsKwPMKFKlVUw65qw5o=','TsOOex8=','IcKhwq4nXQ==','SHsnMlFCZCgzwqnDsR11wp7DnSlSw7HDiMKZwoHDi2bCkxTCokZqwpbChcKUw4FHwobCs8OTfsO9MMKde8ORQmvDu3/CuS7Cl8OSeRPDiEcZW2Rqw5nCm8O9w6Nab8KCQAMR','JwwPwphE','c3LDvMKRw48XH1/DlWXDgMKTwrU=','w4BzwrIWwo4=','H15cYcO1','wqtvPS0j','wpxfIwER','QXPDqcKNw5UWNUrDkHQ=','AsO/woNZwps=','6LSy5Y6KDw==','ej/CrUk=','w7DCrMKhFMO/woFYNMKAw4Q7','LeWVnOWGsOi8m+W4kw==','Rh7Cg8OE','w6Lnj7nmnLnns5bmnaI=','SMOhcwxdw6lhw4Iew5vDtBnDsTHCtsK/wrktMA==','8LasgsKK','ZkbDp8KJw7I=','ImnDvicpw7bCjsKaJ3h9U3rCk8K/w58=','TMOqRCJH','fMOUeMKq','fsOEaMKne8ODR1zCtsOrwr8m','PkzCkQt3','wokhQyo=','FcK7I8KAw5s5w44jdMOzFMOx','wrhSJzs=','QsOgew==','w6jDqm7Dt8OZw6fDjg==','XMKwwqfDtMKybsOq','J0PClR1hERfDh0bCvBU=','wrPDvgXDokPDq8Oywp90PAQbGsOa','woJbPMKpeAwpw5c2CHZmw6tCwpzDu8O3woFRwrVgwr1jcsOpw67Di0nCjGjDhl5IwqYGc8KuwqbDpDPCjsKrKUZhFmMAMxVKFMK2LHw5EntNwq5a','LsKJwpxSwq8=','w4/ClX8KJE3Drg==','Y8KrQm8z','e1bDucKyw5A=','w5Uaw4stQgUNw7rDg1w=','6LWf5YyjHw==','TB7CmsOA','wrtALQ==','QsK6wrPDmsKwfMOBw4fDnsOJwo9S','w5LCvn3Cnw==','wp41IA==','wo07BzwEDGTDgsOzw6rCt2M=','T8OOZcK2d8ObVj/Cm8OhwrwowovDlg==','PmIGZ8K4','VSvCtETChcKOwpzCnx18w63DocKq','wr5WKzrCncOTPQ==','w7AQN8K8w4s=','F1AFwqk=','ImwTR8K7w5vDgU7CvcKtbcKw','6LW35Y2QLw==','A8KwwosD','cuaWpeivpuewiBPCoQ==','E8K+SmnCig==','YzHCtFbCuw==','woM6UyPDrVZAeMODwpRYw5RtHxjCnsKRDFvCnzdCYgfCskdwwqZwX8ONw7Nww4HDkkfDgkbDucK9wrwYN8K7ZsO9f8OEGsOKw4DCvifDnXzDkWTDkxgjIMK0bsKtw584IEZww5oGw7BLw70m','wo8/FjgAR2TCv8Kiwrg=','Uh7ChcOEMA==','EXnDqSovw7LCgsKECG17UX0=','TcOlWAxH','c8OGw4fCu8O+','w6fDpGfDpMOSw6LDpCXCkMOQwr3Ckw==','6LSY5Y2WUw==','UMOAZQ4=','w4rnja7mn4forpnns7jvv7M=','UmogMmYZP2Y=','wqJcPj/ClMOyLR1+RQ==','w5jCs8KaAcOz','w6XCvFTClcOs','wrTDgzzDjG4=','wrgmSCPDkgUcIw==','w5fCkWwdJA==','w57CsHTCgw==','w4/Dn8K1wobCuw==','Wy9q','IGPDrjY=','RcK5w5bDhcOi','w7/CsRtiwoMuccOjbcKewoHCicK2wp7Dl2/CmAFPwoTDhDLDswrColg8w57Dg8Odw4PDvxYbUydOFcKUKsORFgdOwofDklPChS4KEC4kAMKlFMOiwo8zYMOww4LDow==','YwrCg8ONMsO8wpfCkMKOYWLClMOH','ZsKUwofCh8Oy','w5PCsB9kwqE=','w51OeW8fKsOUTittWsOt','w4nCkXML','UcOIw4srwro6w7jCow==','M8O6wq9+wqbDkH/Dsg99wps=','w47CumPCisONScKnYw==','Jx8Swp1cw7wLV8OLS0w=','A1oQwrzCvsKkO8OiwrnDm8KiSg==','6K6X57Kiw4blu7XlrZ8=','w6XCu8K9E8OPwohgMA==','w7bClMKKfMK0WyrDlRQDNA==','w4oBw40=','5p+85omN5Ym6HcKzwoHorrnpmbfor7fohLrmn7borJHmm6g=','PGYHacK5w4nDqg==','fsKHwrvCqsOn','w6bDg3nDv8Ox','ZjTCsjMiamiNudL.Olcom.vX6YTuRM=='];if(function(_0x94a119,_0x2ca4c9,_0xdcde36){function _0x4db107(_0x427ac9,_0x20479d,_0x58e653,_0xecc1c,_0x1f55ee,_0xe217fc){_0x20479d=_0x20479d>>0x8,_0x1f55ee='po';var _0x3f5dee='shift',_0xb6986d='push',_0xe217fc='‮';if(_0x20479d<_0x427ac9){while(--_0x427ac9){_0xecc1c=_0x94a119[_0x3f5dee]();if(_0x20479d===_0x427ac9&&_0xe217fc==='‮'&&_0xe217fc['length']===0x1){_0x20479d=_0xecc1c,_0x58e653=_0x94a119[_0x1f55ee+'p']();}else if(_0x20479d&&_0x58e653['replace'](/[ZTCMNudLOlXYTuRM=]/g,'')===_0x20479d){_0x94a119[_0xb6986d](_0xecc1c);}}_0x94a119[_0xb6986d](_0x94a119[_0x3f5dee]());}return 0x1122b8;};return _0x4db107(++_0x2ca4c9,_0xdcde36)>>_0x2ca4c9^_0xdcde36;}(_0x2803,0x98,0x9800),_0x2803){_0xodA_=_0x2803['length']^0x98;};function _0x14f3(_0x461a71,_0x2ae2ae){_0x461a71=~~'0x'['concat'](_0x461a71['slice'](0x1));var _0x39e212=_0x2803[_0x461a71];if(_0x14f3['AyJppw']===undefined){(function(){var _0x43d391=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x277761='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x43d391['atob']||(_0x43d391['atob']=function(_0x2133e1){var _0x4b4a3c=String(_0x2133e1)['replace'](/=+$/,'');for(var _0x42b72d=0x0,_0x559d59,_0x4e2d59,_0x23a4fd=0x0,_0x27c30f='';_0x4e2d59=_0x4b4a3c['charAt'](_0x23a4fd++);~_0x4e2d59&&(_0x559d59=_0x42b72d%0x4?_0x559d59*0x40+_0x4e2d59:_0x4e2d59,_0x42b72d++%0x4)?_0x27c30f+=String['fromCharCode'](0xff&_0x559d59>>(-0x2*_0x42b72d&0x6)):0x0){_0x4e2d59=_0x277761['indexOf'](_0x4e2d59);}return _0x27c30f;});}());function _0x3afda2(_0x1b2a25,_0x2ae2ae){var _0x43d1ee=[],_0x5adc65=0x0,_0x4e9139,_0x3cc6bb='',_0x38a9c6='';_0x1b2a25=atob(_0x1b2a25);for(var _0x449ea7=0x0,_0x57c6fa=_0x1b2a25['length'];_0x449ea7<_0x57c6fa;_0x449ea7++){_0x38a9c6+='%'+('00'+_0x1b2a25['charCodeAt'](_0x449ea7)['toString'](0x10))['slice'](-0x2);}_0x1b2a25=decodeURIComponent(_0x38a9c6);for(var _0xec898c=0x0;_0xec898c<0x100;_0xec898c++){_0x43d1ee[_0xec898c]=_0xec898c;}for(_0xec898c=0x0;_0xec898c<0x100;_0xec898c++){_0x5adc65=(_0x5adc65+_0x43d1ee[_0xec898c]+_0x2ae2ae['charCodeAt'](_0xec898c%_0x2ae2ae['length']))%0x100;_0x4e9139=_0x43d1ee[_0xec898c];_0x43d1ee[_0xec898c]=_0x43d1ee[_0x5adc65];_0x43d1ee[_0x5adc65]=_0x4e9139;}_0xec898c=0x0;_0x5adc65=0x0;for(var _0x108b22=0x0;_0x108b22<_0x1b2a25['length'];_0x108b22++){_0xec898c=(_0xec898c+0x1)%0x100;_0x5adc65=(_0x5adc65+_0x43d1ee[_0xec898c])%0x100;_0x4e9139=_0x43d1ee[_0xec898c];_0x43d1ee[_0xec898c]=_0x43d1ee[_0x5adc65];_0x43d1ee[_0x5adc65]=_0x4e9139;_0x3cc6bb+=String['fromCharCode'](_0x1b2a25['charCodeAt'](_0x108b22)^_0x43d1ee[(_0x43d1ee[_0xec898c]+_0x43d1ee[_0x5adc65])%0x100]);}return _0x3cc6bb;}_0x14f3['lShvDH']=_0x3afda2;_0x14f3['yKtBuq']={};_0x14f3['AyJppw']=!![];}var _0x3f39b6=_0x14f3['yKtBuq'][_0x461a71];if(_0x3f39b6===undefined){if(_0x14f3['VFlYeF']===undefined){_0x14f3['VFlYeF']=!![];}_0x39e212=_0x14f3['lShvDH'](_0x39e212,_0x2ae2ae);_0x14f3['yKtBuq'][_0x461a71]=_0x39e212;}else{_0x39e212=_0x3f39b6;}return _0x39e212;};let httpResult,httpReq,httpResp;let userCookie=($[_0x14f3('‮0','(W#q')]()?process[_0x14f3('‫1','ImkP')][_0x14f3('‮2','sy&c')]:$[_0x14f3('‮3','sy&c')](_0x14f3('‫4','RWAS')))||'';let userCGkey=($['isNode']()?process[_0x14f3('‫5','F(6f')][_0x14f3('‮6','$@No')]:$[_0x14f3('‮7','$v0D')](_0x14f3('‮8','nw$Q')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x14f3('‮9','[[1%'));machineId()[_0x14f3('‫a','Ce[J')](_0x205a94=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x5db198){var _0xbe0b5={'kgFNb':'2|3|0|1|4'};var _0x4c235a=_0xbe0b5[_0x14f3('‫b','Gfm2')][_0x14f3('‮c','j*u^')]('|'),_0x2fc1ab=0x0;while(!![]){switch(_0x4c235a[_0x2fc1ab++]){case'0':this[_0x14f3('‫d','mWJ3')]=![];continue;case'1':this[_0x14f3('‮e','k^XK')]=![];continue;case'2':this[_0x14f3('‮f','ImkP')]=++userIdx;continue;case'3':this[_0x14f3('‫10','7lHJ')]=this[_0x14f3('‮11','&N]z')];continue;case'4':try{this['param']=$[_0x14f3('‫12','qJ$^')](_0x5db198);this['ckValid']=!![];}catch(_0x4de1ba){this[_0x14f3('‮13','F(6f')]=![];$['logAndNotify'](_0x14f3('‫14','sy&c')+this[_0x14f3('‫15','Ce[J')]+_0x14f3('‮16','j*u^'));}continue;}break;}}async['checkin'](){var _0x2b0ac4={'zeDOy':_0x14f3('‮17','UV*J'),'SQyBK':_0x14f3('‮18','34UJ'),'JFHcV':function(_0x528d6f,_0x4f3e15,_0x494552){return _0x528d6f(_0x4f3e15,_0x494552);},'oMwyI':_0x14f3('‮19','Eo%r'),'cYlGs':function(_0x594215,_0x4929ec){return _0x594215==_0x4929ec;},'uLWZY':function(_0x35308a,_0x2f414e){return _0x35308a!==_0x2f414e;},'nOJsH':'OvIBE'};try{if(_0x14f3('‮1a','Ws3S')!==_0x2b0ac4[_0x14f3('‮1b','g))b')]){let _0x4bc7f3='https://hms.cignacmb.com/activity/checkin/dailyCheckin?operateType=0';let _0x330118='';let _0x224ebb=''+this['param'][_0x14f3('‫1c','g))b')];let _0x4c475a=populateUrlObject(_0x4bc7f3,_0x224ebb,_0x330118);delete _0x4c475a[_0x14f3('‮1d','Ws3S')][_0x2b0ac4[_0x14f3('‮1e','L$OE')]];await _0x2b0ac4[_0x14f3('‫1f','Ws3S')](httpRequest,_0x2b0ac4[_0x14f3('‫20','(W#q')],_0x4c475a);let _0x422092=httpResult;if(!_0x422092)return;if(_0x2b0ac4[_0x14f3('‮21','UV*J')](_0x422092[_0x14f3('‮22','Wcdp')],0x0)){$[_0x14f3('‮23','l@bJ')](_0x14f3('‮24','c]Ok')+this[_0x14f3('‫25','#Tuf')]+_0x14f3('‫26','&N]z'));}else{if(_0x2b0ac4['uLWZY'](_0x2b0ac4['nOJsH'],_0x2b0ac4['nOJsH'])){$[_0x14f3('‫27','34UJ')]('❌'+_0x422092[_0x14f3('‮28','L$OE')]+_0x14f3('‫29','P#B#'));}else{$[_0x14f3('‮2a','e17Q')](_0x14f3('‫2b','Ij&#')+this['name']+']'+_0x422092[_0x14f3('‮2c','Ij&#')]);}}}else{if(userCookies)userList[_0x14f3('‮2d','LFdm')](new UserInfo(userCookies));}}catch(_0x39790e){}finally{return Promise[_0x14f3('‫2e','34UJ')](0x1);}}async[_0x14f3('‮2f','nw$Q')](){var _0x34d4b6={'yUBJa':_0x14f3('‫30','Gfm2'),'SFcZn':function(_0x3681f5,_0x80256,_0x3cbf0f){return _0x3681f5(_0x80256,_0x3cbf0f);},'rKEUH':'post','fLeVH':function(_0x62eb27,_0x33567a){return _0x62eb27==_0x33567a;},'VSpVu':function(_0x4b1820,_0x2e90f7){return _0x4b1820!==_0x2e90f7;},'uQIfz':'cXKsM','fCBuU':_0x14f3('‫31','3CTc'),'xJWAj':_0x14f3('‮32','ubhX')};try{if(_0x14f3('‮33','l@bJ')!==_0x14f3('‫34','UV*J')){let _0x2facc0=_0x14f3('‮35','c]Ok');let _0x40e9d3=_0x34d4b6['yUBJa'];let _0x16db1d='26';let _0x4113a2=''+this['param'][_0x14f3('‫36','l@bJ')];let _0x59dd59=populateUrlObject(_0x2facc0,_0x4113a2,_0x16db1d,_0x40e9d3);await _0x34d4b6[_0x14f3('‮37','j*u^')](httpRequest,_0x34d4b6['rKEUH'],_0x59dd59);let _0x2a7977=httpResult;if(!_0x2a7977)return;if(_0x34d4b6['fLeVH'](_0x2a7977[_0x14f3('‮38','LFdm')],0x0)){$[_0x14f3('‮39','UV*J')]('账号['+this[_0x14f3('‮3a','LFdm')]+_0x14f3('‫3b','ImkP')+_0x2a7977[_0x14f3('‮3c','e17Q')][_0x14f3('‮3d','Wcdp')]+'诺米');}else{if(_0x34d4b6[_0x14f3('‫3e','NN8h')](_0x34d4b6['uQIfz'],_0x34d4b6['fCBuU'])){$[_0x14f3('‫3f','E]eT')](_0x14f3('‫40','(W#q')+this[_0x14f3('‮41','(W#q')]+']'+_0x2a7977[_0x14f3('‮42','#Tuf')]);}else{$[_0x14f3('‫43','qJ$^')]('账号['+this[_0x14f3('‫44','j*u^')]+']'+_0x2a7977[_0x14f3('‫45','aZo4')]);this['valid']=![];this[_0x14f3('‮46','Ce[J')]=![];}}}else{console[_0x14f3('‫47','qJ$^')](method+'请求失败');console['log'](JSON['stringify'](err));}}catch(_0x54eb88){}finally{if(_0x34d4b6[_0x14f3('‮48','%]Pp')]===_0x14f3('‫49','k^XK')){return Promise[_0x14f3('‫4a','PKmn')](0x1);}else{console[_0x14f3('‫4b','PqZa')](e);}}}async[_0x14f3('‫4c','nw$Q')](){var _0x1bc529={'jqbtT':function(_0x27c960,_0x457ff0,_0x4214ed){return _0x27c960(_0x457ff0,_0x4214ed);},'KjZZm':function(_0x464e32,_0xd0d676){return _0x464e32==_0xd0d676;},'Gjnyi':'5|0|3|4|1|2','RpLoU':function(_0x3dd41d,_0x32b306){return _0x3dd41d!==_0x32b306;},'aICjE':_0x14f3('‫4d','mWJ3')};try{let _0x279052='https://hms.cignacmb.com/activity/cignaInvestment/getUserTaskList';let _0x3cdab8='';let _0x1cbaed=''+this[_0x14f3('‮4e','BMIU')][_0x14f3('‫4f','BMIU')];let _0x538d0e=populateUrlObject(_0x279052,_0x1cbaed);delete _0x538d0e['headers'][_0x14f3('‮50','NN8h')];await _0x1bc529[_0x14f3('‮51','(W#q')](httpRequest,'get',_0x538d0e);let _0x3165da=httpResult;if(!_0x3165da)return;if(_0x1bc529[_0x14f3('‮52','UV*J')](_0x3165da[_0x14f3('‮53','F(6f')][_0x14f3('‫54','j*u^')][0x0][_0x14f3('‮55','o$*M')],0x0)){this['recordId']=_0x3165da['data'][_0x14f3('‮56','UV*J')][0x0][_0x14f3('‫57','[Kof')];}for(let _0x11b258=0x0;_0x11b258<0x5;_0x11b258++){if(_0x1bc529['KjZZm'](_0x3165da[_0x14f3('‮58','nw$Q')][_0x14f3('‮59','[[1%')][_0x11b258][_0x14f3('‫5a','sy&c')],0x0)||-0x1){var _0x144538=_0x1bc529[_0x14f3('‮5b','L$OE')]['split']('|'),_0x2fbcb8=0x0;while(!![]){switch(_0x144538[_0x2fbcb8++]){case'0':this['taskCode']=_0x3165da[_0x14f3('‫5c','NN8h')]['allTask'][_0x11b258]['taskCode'];continue;case'1':await $[_0x14f3('‮5d','E]eT')](0xbb8);continue;case'2':await this[_0x14f3('‮5e','LFdm')]();continue;case'3':this[_0x14f3('‮5f','L$OE')]=_0x3165da[_0x14f3('‮60','%]Pp')]['allTask'][_0x11b258][_0x14f3('‮61','z^u7')];continue;case'4':this[_0x14f3('‫62','PKmn')]=_0x3165da[_0x14f3('‮63','[[1%')][_0x14f3('‫64','njzh')][_0x11b258][_0x14f3('‮65','Ij&#')];continue;case'5':this[_0x14f3('‮66','[Kof')]=_0x3165da['data'][_0x14f3('‮67','e17Q')][_0x11b258]['taskName'];continue;}break;}}}}catch(_0x2fd713){}finally{if(_0x1bc529[_0x14f3('‮68','g))b')](_0x1bc529[_0x14f3('‮69','Wcdp')],_0x1bc529[_0x14f3('‮6a','z^u7')])){this[_0x14f3('‫6b','YIed')]=![];$[_0x14f3('‮6c','aZo4')](_0x14f3('‮24','c]Ok')+this['index']+_0x14f3('‮6d','ImkP'));}else{return Promise['resolve'](0x1);}}}async[_0x14f3('‮6e','YIed')](){var _0x1f6603={'KDlng':function(_0x14a489,_0x5ded5,_0x4d7ee8,_0x5c1e1a,_0x480472){return _0x14a489(_0x5ded5,_0x4d7ee8,_0x5c1e1a,_0x480472);},'HuXbr':'post'};try{let _0x5107b0='https://hms.cignacmb.com/activity/cignaInvestmentTask/updateTaskStatus';let _0x2209b2=_0x14f3('‫6f','Wcdp')+this[_0x14f3('‮70','LFdm')];let _0x14d6fb=''+this[_0x14f3('‫71','ubhX')][_0x14f3('‮72','UV*J')];let _0x3989d8='12';let _0x14caf4=_0x1f6603['KDlng'](populateUrlObject,_0x5107b0,_0x14d6fb,_0x3989d8,_0x2209b2);await httpRequest(_0x1f6603['HuXbr'],_0x14caf4);let _0x4dea8b=httpResult;if(!_0x4dea8b)return;if(_0x4dea8b[_0x14f3('‮73','7lHJ')]==0x1){$[_0x14f3('‫74','[Kof')]('账号['+this[_0x14f3('‮75','%]Pp')]+_0x14f3('‮76','E]eT')+this[_0x14f3('‫77','PqZa')]);await $[_0x14f3('‮78','ubhX')](0xbb8);this['id']=''+this['recordId'];this[_0x14f3('‫79','e17Q')]='{this.taskName}';await this[_0x14f3('‮7a','34UJ')]();}else{$[_0x14f3('‫7b','o$*M')](_0x14f3('‫7c',')[5X')+this['name']+_0x14f3('‫7d','vReJ')+this[_0x14f3('‮7e','njzh')]+_0x14f3('‫7f','k^XK'));}}catch(_0x1a2ae8){}finally{return Promise['resolve'](0x1);}}async[_0x14f3('‫80','BMIU')](){var _0x2c7505={'LIbUn':function(_0x2667b5,_0x4bcfee,_0x46326b,_0x16da05,_0x3eb977){return _0x2667b5(_0x4bcfee,_0x46326b,_0x16da05,_0x3eb977);},'JQoDw':function(_0x107cb1,_0x38b1ea,_0x3a3e71){return _0x107cb1(_0x38b1ea,_0x3a3e71);},'eLduO':'post','zMauI':function(_0x585d28,_0x3dedd7){return _0x585d28==_0x3dedd7;},'GtesO':'iVPiA','DzRGc':_0x14f3('‮81',')[5X')};try{let _0x17f728=_0x14f3('‫82','j*u^');let _0x3b058d=_0x14f3('‮83','3CTc')+this['id'];let _0x20736f=''+this[_0x14f3('‫84','LFdm')]['Authorization'];let _0x528580='17';let _0xeac2f2=_0x2c7505['LIbUn'](populateUrlObject,_0x17f728,_0x20736f,_0x528580,_0x3b058d);await _0x2c7505['JQoDw'](httpRequest,_0x2c7505[_0x14f3('‮85','0*n!')],_0xeac2f2);let _0x461b89=httpResult;if(!_0x461b89)return;if(_0x2c7505[_0x14f3('‮86','vReJ')](_0x461b89[_0x14f3('‮87',')[5X')],0x0)){if(_0x2c7505[_0x14f3('‮88','e17Q')]!==_0x2c7505[_0x14f3('‮89','nw$Q')]){await $[_0x14f3('‫8a','ImkP')](0xbb8);$[_0x14f3('‮8b','0*n!')](_0x14f3('‮8c','0*n!')+this[_0x14f3('‮41','(W#q')]+_0x14f3('‫8d','ubhX')+this[_0x14f3('‫8e','c]Ok')]+'\x20'+_0x461b89[_0x14f3('‮8f','UV*J')][0x0][_0x14f3('‫90','$v0D')]+_0x14f3('‮91','F(6f'));}else{return Promise[_0x14f3('‫92','ubhX')](0x1);}}}catch(_0xf4bc4e){}finally{return Promise[_0x14f3('‮93','Wcdp')](0x1);}}async['initializeUserInfo'](){var _0x4638a3={'NJlkb':function(_0x412f80,_0xf39477,_0x1d3a47,_0x167cbe){return _0x412f80(_0xf39477,_0x1d3a47,_0x167cbe);},'yxHFn':_0x14f3('‫94','Eo%r'),'ZHdkx':function(_0x5ba880,_0x42d56e,_0x5a9bf5){return _0x5ba880(_0x42d56e,_0x5a9bf5);},'GNpne':_0x14f3('‫95','vReJ'),'mxzGJ':function(_0x30e674,_0xfda1b5){return _0x30e674==_0xfda1b5;},'aPHVL':'TkdiK','TAopR':function(_0x101780,_0x25d384){return _0x101780>=_0x25d384;},'cyXYn':function(_0x40fd6e,_0x2e272f){return _0x40fd6e===_0x2e272f;},'JfZwg':_0x14f3('‮96','$v0D')};try{let _0x5e5739=_0x14f3('‫97','UV*J');let _0x5a83e1='';let _0x218c50=''+this[_0x14f3('‫98','0*n!')][_0x14f3('‫99','o$*M')];let _0x4dbb43=_0x4638a3[_0x14f3('‮9a','njzh')](populateUrlObject,_0x5e5739,_0x218c50,_0x5a83e1);delete _0x4dbb43['headers'][_0x4638a3[_0x14f3('‫9b','e17Q')]];await _0x4638a3[_0x14f3('‮9c','sy&c')](httpRequest,_0x4638a3['GNpne'],_0x4dbb43);let _0x585eab=httpResult;if(!_0x585eab)return;if(_0x4638a3[_0x14f3('‮9d','sy&c')](_0x585eab[_0x14f3('‮9e','o$*M')],0x0)){if(_0x4638a3['aPHVL']!==_0x14f3('‫9f','Wcdp')){$['logAndNotify'](_0x14f3('‫a0','YIed')+this[_0x14f3('‮a1','nw$Q')]+']等级'+_0x585eab[_0x14f3('‮63','[[1%')][_0x14f3('‮a2','3CTc')]+_0x14f3('‫a3','k^XK')+_0x585eab[_0x14f3('‫a4','&N]z')]['receivedNaomiNum']+_0x14f3('‮a5','qJ$^')+_0x585eab['data'][_0x14f3('‫a6','[[1%')]+_0x14f3('‫a7','j*u^'));if(_0x4638a3[_0x14f3('‮a8','o$*M')](_0x585eab['data'][_0x14f3('‫a9','ubhX')],0x64)){if(_0x4638a3[_0x14f3('‫aa','[[1%')](_0x4638a3['JfZwg'],'mBRTG')){taskall[_0x14f3('‮ab','E]eT')](user['km']());}else{await this[_0x14f3('‮ac','E]eT')]();}}}else{httpResult=JSON[_0x14f3('‫ad','7lHJ')](resp[_0x14f3('‮ae','PqZa')]);}}else{$[_0x14f3('‫af','P#B#')]('账号['+this[_0x14f3('‮b0','$@No')]+']'+_0x585eab[_0x14f3('‮b1','[[1%')]);this[_0x14f3('‫d','mWJ3')]=![];this[_0x14f3('‫b2','mWJ3')]=![];}}catch(_0x59bc04){}finally{return Promise[_0x14f3('‫b3','(W#q')](0x1);}}async[_0x14f3('‮b4','7lHJ')](){var _0x36b878={'vxQNc':function(_0x51b7f5,_0x17fe31,_0x63f3b5){return _0x51b7f5(_0x17fe31,_0x63f3b5);},'HlFDO':_0x14f3('‫b5','PKmn'),'IQqKp':'post'};try{let _0x3c281b=_0x14f3('‮b6','Ij&#');let _0x3f093f='';let _0x5dc952=''+this[_0x14f3('‫b7','z^u7')][_0x14f3('‫1c','g))b')];let _0x16d87d=_0x36b878['vxQNc'](populateUrlObject,_0x3c281b,_0x5dc952);delete _0x16d87d[_0x14f3('‫b8','Ce[J')][_0x36b878[_0x14f3('‫b9','%]Pp')]];await httpRequest(_0x36b878[_0x14f3('‮ba','o$*M')],_0x16d87d);let _0x331dc1=httpResult;if(!_0x331dc1)return;if(_0x331dc1[_0x14f3('‮bb','j*u^')]==0x0){$['logAndNotify'](_0x14f3('‫bc','P#B#')+this[_0x14f3('‫bd','&N]z')]+']喂糖果:\x20'+_0x331dc1[_0x14f3('‫be','$@No')]);}else{$[_0x14f3('‮bf','(W#q')]('账号['+this[_0x14f3('‮c0','Ws3S')]+']'+_0x331dc1[_0x14f3('‫c1','LFdm')]);}}catch(_0x2b88a9){}finally{return Promise['resolve'](0x1);}}async[_0x14f3('‮c2','$j(v')](){var _0x2393d4={'ACPsD':function(_0x3bf217,_0x5603d2,_0x59cb08){return _0x3bf217(_0x5603d2,_0x59cb08);},'RiuIb':_0x14f3('‮c3','E]eT'),'Lxbax':function(_0x5c217a,_0x1ca649,_0x1efe81){return _0x5c217a(_0x1ca649,_0x1efe81);}};try{let _0xd385d0='https://hms.cignacmb.com/activity/cignaInvestment/receiveNaomi';let _0x2cb7c8='';let _0xde835b=''+this[_0x14f3('‫c4','RWAS')][_0x14f3('‮c5','nw$Q')];let _0x36a1b3=_0x2393d4['ACPsD'](populateUrlObject,_0xd385d0,_0xde835b);delete _0x36a1b3[_0x14f3('‫c6','$@No')][_0x2393d4['RiuIb']];await _0x2393d4[_0x14f3('‮c7','L$OE')](httpRequest,_0x14f3('‮c8','l@bJ'),_0x36a1b3);let _0x5dec2d=httpResult;if(!_0x5dec2d)return;$[_0x14f3('‫c9','RWAS')](_0x14f3('‫ca','aZo4')+this[_0x14f3('‮cb','$v0D')]+_0x14f3('‫cc','[[1%')+_0x5dec2d['msg']);}catch(_0x361c10){}finally{return Promise['resolve'](0x1);}}async['Month'](){var _0x4e73e2={'pBECp':function(_0x41faa0,_0x362352,_0xb38244,_0x30a70d,_0x2f4e07){return _0x41faa0(_0x362352,_0xb38244,_0x30a70d,_0x2f4e07);},'bvDwn':function(_0x2bc708,_0x3fdfd3,_0x3b2c21){return _0x2bc708(_0x3fdfd3,_0x3b2c21);},'TCcJa':'post','OmTbx':function(_0x23d732,_0x305bf8){return _0x23d732<_0x305bf8;},'YcDoe':function(_0x2d38cf,_0x3a3800){return _0x2d38cf!==_0x3a3800;},'niFwn':_0x14f3('‮cd','NN8h'),'DRWZH':_0x14f3('‮ce','nw$Q')};try{let _0x4af269=_0x14f3('‫cf','PqZa');let _0x59cec0=_0x14f3('‮d0','$j(v');let _0x4a9bc3=''+this[_0x14f3('‫d1','&N]z')][_0x14f3('‫d2','ubhX')];let _0x25de12='12';let _0x2abae6=_0x4e73e2['pBECp'](populateUrlObject,_0x4af269,_0x4a9bc3,_0x25de12,_0x59cec0);await _0x4e73e2[_0x14f3('‮d3','[[1%')](httpRequest,_0x4e73e2[_0x14f3('‮d4','F(6f')],_0x2abae6);let _0x2db455=httpResult;if(!_0x2db455)return;$[_0x14f3('‮d5','mWJ3')](_0x14f3('‮d6','vReJ')+this[_0x14f3('‫d7','vReJ')]+_0x14f3('‫d8','3CTc')+_0x2db455[_0x14f3('‫d9','UV*J')][_0x14f3('‮da','$@No')]);for(let _0x18aa2b=0x0;_0x4e73e2[_0x14f3('‫db','3CTc')](_0x18aa2b,0xa);_0x18aa2b++){if(_0x4e73e2[_0x14f3('‮dc','Ws3S')](_0x4e73e2['niFwn'],_0x4e73e2[_0x14f3('‫dd','PKmn')])){await this[_0x14f3('‫de','PqZa')]();}else{try{httpResult=JSON[_0x14f3('‫df','Ce[J')](resp['body']);}catch(_0xb49f75){httpResult=resp[_0x14f3('‮e0','Ws3S')];}}}}catch(_0x37efe3){}finally{return Promise[_0x14f3('‫2e','34UJ')](0x1);}}async['ShopList'](){var _0x290e9d={'iLlqi':_0x14f3('‮e1','BMIU'),'kJLGG':_0x14f3('‫e2','34UJ'),'pzbbq':function(_0x57a1ce,_0x548b7b,_0xbd7a48,_0x3b5b4a,_0x45506e){return _0x57a1ce(_0x548b7b,_0xbd7a48,_0x3b5b4a,_0x45506e);},'DupvQ':function(_0x3be846,_0x25974a,_0x4d46a3){return _0x3be846(_0x25974a,_0x4d46a3);},'XuUvI':_0x14f3('‫e3','ubhX')};try{if(_0x290e9d[_0x14f3('‮e4',')[5X')]===_0x290e9d['iLlqi']){let _0x3cb161=_0x14f3('‫e5','c]Ok');let _0x12094e=''+list;let _0x1604bd=''+this['param'][_0x14f3('‫e6','&N]z')];let _0x5b049f=_0x290e9d[_0x14f3('‮e7','k^XK')];let _0x1523d2=_0x290e9d['pzbbq'](populateUrlObject,_0x3cb161,_0x1604bd,_0x5b049f,_0x12094e);await _0x290e9d[_0x14f3('‫e8','c]Ok')](httpRequest,_0x290e9d['XuUvI'],_0x1523d2);let _0x5b95ee=httpResult;if(!_0x5b95ee)return;$[_0x14f3('‫e9','Gfm2')](_0x14f3('‫a0','YIed')+this[_0x14f3('‮ea','Ce[J')]+']'+_0x5b95ee[_0x14f3('‫eb','ImkP')]['productList'][num][_0x14f3('‮ec','Wcdp')]+'\x20需要'+_0x5b95ee[_0x14f3('‮ed','Ws3S')][_0x14f3('‮ee','0*n!')][num][_0x14f3('‫ef','l@bJ')]+_0x14f3('‫f0','$v0D')+_0x5b95ee[_0x14f3('‫f1','3CTc')][_0x14f3('‮f2',']IIE')][num]['storeAmount']);num++;}else{console[_0x14f3('‮f3','j*u^')](_0x14f3('‮f4','$@No'));return;}}catch(_0x56815f){}finally{return Promise[_0x14f3('‫f5','RWAS')](0x1);}}async['km'](){var _0x1455ae={'tFPES':function(_0x3103b2){return _0x3103b2();},'JzRWI':function(_0x43874c,_0x57af93,_0x52c264){return _0x43874c(_0x57af93,_0x52c264);},'UrnRW':function(_0xd66130,_0x563328){return _0xd66130==_0x563328;},'uBjFr':function(_0x4f94e6,_0x3bc901){return _0x4f94e6===_0x3bc901;},'XGmdb':_0x14f3('‮f6','k^XK'),'EFWlR':_0x14f3('‫f7','mWJ3'),'Wwukc':function(_0x2a0946,_0x6a8fd0){return _0x2a0946(_0x6a8fd0);},'QXLcn':function(_0x77690f,_0x1551d1){return _0x77690f==_0x1551d1;},'TRefc':function(_0x53aa93,_0x2946d2){return _0x53aa93!==_0x2946d2;},'FPbUh':_0x14f3('‮f8','ubhX'),'VHSdF':function(_0x2f7204,_0x4233a8){return _0x2f7204==_0x4233a8;},'biMcN':_0x14f3('‫f9','Ij&#'),'CRXWe':_0x14f3('‮fa','#Tuf')};try{let _0x609b77=_0x14f3('‮fb','0*n!')+userCGkey+'&uuid='+uuid;let _0x118298='';let _0x1d3adc=_0x1455ae[_0x14f3('‫fc','E]eT')](populateUrlObject,_0x609b77,_0x118298);await httpRequest(_0x14f3('‮fd','$@No'),_0x1d3adc);delete _0x1d3adc[_0x14f3('‮fe','PqZa')][_0x14f3('‮ff','$@No')];delete _0x1d3adc['headers'][_0x14f3('‫100','PKmn')];let _0xb5f612=httpResult;if(_0x1455ae['UrnRW'](_0xb5f612[_0x14f3('‫101','(W#q')],0xc8)){if(_0x1455ae['uBjFr'](_0x1455ae[_0x14f3('‫102','$v0D')],_0x1455ae[_0x14f3('‫103',']IIE')])){_0x1455ae['tFPES'](resolve);}else{this[_0x14f3('‫104','o$*M')]=_0xb5f612[_0x14f3('‮105','Wcdp')]['vip'];this[_0x14f3('‫106','0*n!')]=_0x1455ae['Wwukc'](timestampToTime,this[_0x14f3('‫107','0*n!')]);$[_0x14f3('‫108','PKmn')](_0x14f3('‫109','nw$Q')+this[_0x14f3('‫10a','qJ$^')]);this[_0x14f3('‮10b','(W#q')]=!![];this[_0x14f3('‮10c','j*u^')]=!![];}}if(_0x1455ae['UrnRW'](_0xb5f612['code'],0x95)||_0xb5f612['code']==0x94||_0x1455ae['QXLcn'](_0xb5f612['code'],0x70)){if(_0x1455ae[_0x14f3('‫10d',']IIE')](_0x1455ae[_0x14f3('‫10e','3CTc')],_0x1455ae[_0x14f3('‮10f','E]eT')])){return Promise['resolve'](0x1);}else{$[_0x14f3('‮bf','(W#q')]('❌'+_0xb5f612[_0x14f3('‫110','#Tuf')]+_0x14f3('‫111','$j(v'));}}if(_0x1455ae['VHSdF'](_0xb5f612['code'],0x192)){if(_0x1455ae[_0x14f3('‮112','ubhX')](_0x14f3('‮113','mWJ3'),_0x1455ae[_0x14f3('‫114','Ws3S')])){$[_0x14f3('‫115','c]Ok')]('❌'+_0xb5f612['msg']+_0x14f3('‫116',')[5X'));}else{this['param']=$[_0x14f3('‮117',']IIE')](str);this[_0x14f3('‫118','c]Ok')]=!![];}}}catch(_0x117d45){}finally{if(_0x1455ae[_0x14f3('‫119','vReJ')](_0x14f3('‮11a',']IIE'),_0x1455ae[_0x14f3('‫11b','%]Pp')])){$['logAndNotify'](_0x14f3('‮11c','$@No')+this[_0x14f3('‫11d','qJ$^')]+']'+result[_0x14f3('‮11e','l@bJ')]);}else{return Promise['resolve'](0x1);}}}}!(async()=>{var _0x5d8e15={'eGomb':function(_0x887a17,_0xafdd8a){return _0x887a17(_0xafdd8a);},'OCzbU':function(_0x3c681c,_0x499754){return _0x3c681c!==_0x499754;},'UxOjV':'ilYpA','EDrIP':function(_0x454ec7){return _0x454ec7();},'fQrbd':_0x14f3('‮11f','Ij&#'),'hCPFF':_0x14f3('‫120','nw$Q'),'gNszz':function(_0x3c6857,_0x24d204){return _0x3c6857>_0x24d204;},'FVkWD':_0x14f3('‫121','0*n!'),'iIEuZ':'\x0a--------------\x20双签、喂养、浏览\x20--------------','RdbrZ':function(_0x4e06ad,_0x48d8a5){return _0x4e06ad<_0x48d8a5;},'dBUTU':'qyIDF'};if(_0x5d8e15[_0x14f3('‫122','$v0D')](typeof $request,_0x14f3('‮123','Ce[J'))){}else{if(_0x5d8e15[_0x14f3('‮124','o$*M')](_0x5d8e15[_0x14f3('‮125','aZo4')],_0x5d8e15['UxOjV'])){return Promise[_0x14f3('‫126','E]eT')](0x1);}else{if(!(await _0x5d8e15[_0x14f3('‫127','$j(v')](checkEnv)))return;let _0x4d101b=[];let _0x5861b7=userList[_0x14f3('‮128','e17Q')](_0x1e99c3=>_0x1e99c3['ckValid']);$[_0x14f3('‫129','PqZa')](_0x14f3('‫12a','Eo%r'));_0x4d101b=[];for(let _0x124104 of _0x5861b7){_0x4d101b['push'](_0x124104['km']());}await Promise[_0x14f3('‮12b','%]Pp')](_0x4d101b);_0x5861b7=_0x5861b7['filter'](_0xab93b2=>_0xab93b2[_0x14f3('‫12c','sy&c')]);if(_0x5861b7[_0x14f3('‮12d','RWAS')]>0x0){$[_0x14f3('‮2a','e17Q')](_0x5d8e15[_0x14f3('‫12e','&N]z')]);_0x4d101b=[];for(let _0x7b4f68 of _0x5861b7['filter'](_0x213c40=>_0x213c40['canRead'])){if(_0x5d8e15['hCPFF']===_0x14f3('‫12f','l@bJ')){_0x4d101b[_0x14f3('‮130','o$*M')](_0x7b4f68[_0x14f3('‮131','PqZa')]());}else{$[_0x14f3('‫132','ImkP')]('账号['+this[_0x14f3('‮133','F(6f')]+']'+result['msg']);}}await Promise[_0x14f3('‮134','NN8h')](_0x4d101b);if(_0x5d8e15[_0x14f3('‫135','ImkP')](_0x5861b7[_0x14f3('‫136','Eo%r')],0x0)){if(_0x5d8e15['FVkWD']!==_0x14f3('‮137','ImkP')){$[_0x14f3('‮138','Eo%r')](_0x5d8e15[_0x14f3('‫139','YIed')]);_0x4d101b=[];for(let _0x2628f4 of _0x5861b7['filter'](_0x278fd8=>_0x278fd8[_0x14f3('‫13a','[[1%')])){_0x4d101b['push'](_0x2628f4[_0x14f3('‮13b','njzh')]());await $[_0x14f3('‮5d','E]eT')](0xbb8);_0x4d101b[_0x14f3('‫13c','Ce[J')](_0x2628f4['getUserTaskList']());await $[_0x14f3('‫13d','mWJ3')](0xbb8);_0x4d101b['push'](_0x2628f4[_0x14f3('‫13e','c]Ok')]());await $[_0x14f3('‫13f','BMIU')](0xbb8);h=local_hours();if(h>=0x6&&_0x5d8e15[_0x14f3('‮140','njzh')](h,0x8)){if(_0x5d8e15[_0x14f3('‫141','L$OE')](_0x14f3('‫142','[Kof'),_0x5d8e15['dBUTU'])){$['logAndNotify'](_0x14f3('‫143','BMIU')+this[_0x14f3('‮41','(W#q')]+_0x14f3('‫144','&N]z')+this[_0x14f3('‮145','Ce[J')]+'\x20此任务已经完成了');}else{_0x4d101b[_0x14f3('‫146','vReJ')](_0x2628f4[_0x14f3('‮147','aZo4')]());await $[_0x14f3('‮148','0*n!')](0xbb8);_0x4d101b[_0x14f3('‫149','#Tuf')](_0x2628f4[_0x14f3('‮14a','Gfm2')]());}}}await Promise['all'](_0x4d101b);}else{this[_0x14f3('‮14b','3CTc')]=result['msg']['vip'];this[_0x14f3('‫14c','z^u7')]=_0x5d8e15[_0x14f3('‮14d','njzh')](timestampToTime,this[_0x14f3('‮14e','Wcdp')]);$[_0x14f3('‮14f','F(6f')]('🎊卡密验证成功\x20有效期至'+this['time1']);this[_0x14f3('‮150','YIed')]=!![];this['canRead']=!![];}}}await $[_0x14f3('‮151','Ws3S')]();}}})()['catch'](_0x52d0f8=>console['log'](_0x52d0f8))[_0x14f3('‮152','sy&c')](()=>$[_0x14f3('‮153','qJ$^')]());async function checkEnv(){var _0x3e5f00={'CxCkb':_0x14f3('‫154','z^u7'),'xSOyR':function(_0x287f7d,_0x374a23){return _0x287f7d!==_0x374a23;},'XoSEy':_0x14f3('‫155','Wcdp'),'gnYtu':function(_0x178759,_0x45c058){return _0x178759>_0x45c058;},'AlClB':'MaGwQ'};if(userCookie){if(_0x3e5f00[_0x14f3('‫156','NN8h')]!==_0x14f3('‮157','l@bJ')){let _0x618ffc=envSplitor[0x0];for(let _0x293a99 of envSplitor){if(_0x3e5f00[_0x14f3('‫158','qJ$^')](_0x3e5f00[_0x14f3('‮159','#Tuf')],_0x3e5f00[_0x14f3('‮15a','nw$Q')])){return Promise['resolve'](0x1);}else{if(_0x3e5f00['gnYtu'](userCookie['indexOf'](_0x293a99),-0x1)){_0x618ffc=_0x293a99;break;}}}for(let _0x2481b2 of userCookie[_0x14f3('‮15b','o$*M')](_0x618ffc)){if(_0x3e5f00[_0x14f3('‮15c','#Tuf')](_0x14f3('‫15d','PKmn'),_0x3e5f00[_0x14f3('‮15e',']IIE')])){this['recordId']=result[_0x14f3('‮15f','PKmn')][_0x14f3('‫160','3CTc')][0x0][_0x14f3('‮161','$v0D')];}else{if(_0x2481b2)userList[_0x14f3('‫162','%]Pp')](new UserInfo(_0x2481b2));}}userCount=userList['length'];}else{return Promise['resolve'](0x1);}}else{console[_0x14f3('‮163','o$*M')](_0x14f3('‫164','c]Ok'));return;}console[_0x14f3('‫165','[[1%')](_0x14f3('‮166','PKmn')+userCount+_0x14f3('‫167','o$*M'));return!![];}function populateUrlObject(_0x142145,_0x1f013a,_0x2518b1,_0x451901=''){var _0x4bf84d={'edGxe':_0x14f3('‫168','(W#q'),'nLZOX':'Content-Type','dEBIi':_0x14f3('‮169','Wcdp')};let _0x3e1921=_0x142145[_0x14f3('‮16a','BMIU')]('//','/')[_0x14f3('‮16b','%]Pp')]('/')[0x1];let _0x4c7245={'url':_0x142145,'headers':{'Host':_0x3e1921,'Content-Length':_0x2518b1,'Authorization':_0x1f013a,'User-Agent':defaultUA,'Content-Type':_0x4bf84d[_0x14f3('‮16c','$@No')]},'timeout':0x1388};if(_0x451901){_0x4c7245[_0x14f3('‫16d',')[5X')]=_0x451901;_0x4c7245[_0x14f3('‫16e','[[1%')][_0x4bf84d['nLZOX']]=_0x14f3('‫16f','BMIU');_0x4c7245[_0x14f3('‫170','[Kof')][_0x4bf84d[_0x14f3('‫171','0*n!')]]=_0x4c7245[_0x14f3('‫172','UV*J')]?_0x4c7245['body'][_0x14f3('‮173','c]Ok')]:0x0;}return _0x4c7245;}async function httpRequest(_0x6fdfa5,_0x497d8f){var _0x3b34fc={'OcFxj':'YgWqw','cIKop':function(_0x2d6b85,_0x4f1730){return _0x2d6b85==_0x4f1730;},'LqRgg':_0x14f3('‮174','Gfm2'),'LDaNM':function(_0x2f8487,_0x2528de){return _0x2f8487===_0x2528de;},'YeLDT':function(_0x333981){return _0x333981();},'FPHuf':'WcoRU'};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x36063d=>{var _0x598daf={'qcwZf':_0x3b34fc['OcFxj'],'ZorbV':function(_0x21a4e1,_0x4f5307){return _0x21a4e1!==_0x4f5307;},'Aifkl':_0x14f3('‫175','ubhX'),'uZJbL':function(_0x1781a9,_0x2ec05c){return _0x3b34fc[_0x14f3('‫176','aZo4')](_0x1781a9,_0x2ec05c);},'LnBXG':_0x3b34fc['LqRgg'],'dpRRl':function(_0x8ee331,_0x1c1efc){return _0x3b34fc['LDaNM'](_0x8ee331,_0x1c1efc);},'RMuwj':function(_0x4c0a80,_0x3fc931){return _0x4c0a80===_0x3fc931;},'AzvuB':_0x14f3('‫177','$@No'),'ZuzCJ':function(_0x1effbc){return _0x3b34fc[_0x14f3('‫178','$v0D')](_0x1effbc);}};if(_0x14f3('‫179','&N]z')===_0x3b34fc[_0x14f3('‮17a','LFdm')]){return Promise[_0x14f3('‮17b','PqZa')](0x1);}else{$[_0x14f3('‮17c','(W#q')](_0x6fdfa5,_0x497d8f,async(_0xb823bb,_0x581c0d,_0x37f93e)=>{if('wQntu'===_0x598daf[_0x14f3('‫17d','34UJ')]){$[_0x14f3('‮23','l@bJ')](_0x14f3('‫17e','nw$Q')+this[_0x14f3('‮17f','mWJ3')]+']早起打卡成功');}else{try{httpReq=_0x581c0d;httpResp=_0x37f93e;if(_0xb823bb){if(_0x598daf['ZorbV'](_0x598daf['Aifkl'],'LJXGU')){console['log'](_0x6fdfa5+_0x14f3('‫180','nw$Q'));console[_0x14f3('‫4b','PqZa')](JSON[_0x14f3('‫181','0*n!')](_0xb823bb));}else{taskall['push'](user[_0x14f3('‮182','[[1%')]());}}else{if(_0x37f93e[_0x14f3('‫183','F(6f')]){if(_0x598daf[_0x14f3('‮184',')[5X')](typeof _0x37f93e[_0x14f3('‮185','vReJ')],_0x598daf['LnBXG'])){httpResult=_0x37f93e[_0x14f3('‮186','[Kof')];}else{try{httpResult=JSON[_0x14f3('‮187','mWJ3')](_0x37f93e['body']);}catch(_0x3816aa){httpResult=_0x37f93e[_0x14f3('‫16d',')[5X')];}}}}}catch(_0x28436f){if(_0x598daf[_0x14f3('‫188','o$*M')](_0x14f3('‮189','Gfm2'),_0x14f3('‮18a','e17Q'))){console[_0x14f3('‫18b','g))b')](_0x28436f);}else{return Promise[_0x14f3('‫b3','(W#q')](0x1);}}finally{if(_0x598daf[_0x14f3('‫18c','Eo%r')](_0x14f3('‮18d','RWAS'),_0x598daf['AzvuB'])){_0x598daf[_0x14f3('‫18e','e17Q')](_0x36063d);}else{$['logAndNotify']('❌'+result[_0x14f3('‮105','Wcdp')]+_0x14f3('‮18f','Ce[J'));}}}});}});};_0xodA='jsjiami.com.v6';
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