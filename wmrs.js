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



var _0xodC='jsjiami.com.v6',_0xodC_=['‮_0xodC'],_0x2039=[_0xodC,'w6bCqXJnXQ==','w4ZfeMK+w5w=','6LWa5Y2Uw7k=','AFDDsQ3DrsOyw7LDgsK8ew==','F8K5L8ONwoY=','w44tasKKfw==','wpbDicKtw44f','w5/CrXl8VQ==','wosWwqM1SQ==','RMO1NBld','w77CrXdwIQ==','wrfDicKjw4I=','w6nCpXRHdVzDjg==','woM2cBrCkcOnw5HDhB1OwrI6','8KifkuWPmuWtkOmqjeitpeaJoOWKu8KZ5p6O5pe45p606ISU','KznDl8O/ZQ==','wpMbwqs7','eMOgwo0=','wovDn8K4Fh0=','wqvDg8KBJCNGwp/DgHnDuAhOwqEAw7URwqsTJgZtTsObS3/DsT8URTDDusOsYEHCnmrDtcOLw7F4w4jDvsObRsOlEmLClMOawptNUBvDhsORw4QNcH5Fw7vDjQE=','A8O7YMOQw5g=','wqd0KcK8w4p3w7PCocOPwojCp8KVwps=','Yit0wokn','w6TCr2xZeA==','UAXCsSg=','6LWs5Yymw6Y=','w6FjZcK8w77CvsKgwqY=','R8O3NxRcKE1ZHMK2w64=','wqHpnJjopaM=','wrwKwqovwp5ywoHCug==','KTEFGnrDhGbCun4FEcO+','6K6r57OVwprluoTlrY4=','w4U6asKDT8O6QMON','wr7CjgPDu0/ClzrCqEbChBk=','A8O9UQsaQMOp','Ey3CoAcU','OHRUHwDCv07DqjM=','PVMSQQQ=','wqYbwq0vw6A8w5rCsMKXY8OXdCpHMAA6AyvCg1bCr8ONNzoPwoNmfhnCul7Cm1UPwovDsFtEw67Ct24hAxnCksKkEwBNw518PXkHwqFgIyo9','CmnDlcKJw7Y=','OsK+w47Cqg==','DcOxwo4x','wonDs8K8Iyk=','DsOdwq5k','8JONmeWPueWtm+mpmuiut+aItOWKrW3mnYHml6Pmno3ohrM=','wqxrH8Kk','K1wl','T8KJQF8fwpPDgQ==','wqDDmMKRMQ==','woLCrCrDk0w=','w6fCt30=','w6YHw7zDsFc=','b8OxwrbDhg==','fsOnNzpB','aGcAGg==','W8OqPzFHL3d4CcKyw61e','DOisn+WLkeWkl+WlvuS+jeeWjRJc6YWf6KOo546V5aKe6YCJ5oil6K+/6IOC57GK5Ly76ICV6KWx6ZmS','OsKkw47Ctg==','w7jCoWl6fEvDjw==','w6ZocsKpw5zCtsK6wqIc','GsOow41xXg==','woQMTjLCmQ==','JUM9w5BhwpnCl0HChcK4IQzCg8KSw6/ChOWNt+mEoOajjua3hDbCscOoQ8Odw7lpw6x3wpTDkcOkA0xY','IzwbPl8=','PcKodV0EZhQ6UMO2wqYKOsOEJBzlj5jnrIrjgJrllZTlhK7jgJnmtIzop4PChMObw5hVwpNvbcOTZMOcDT18wrfCiA==','wpdOF2fDlw==','OcKrw63Ctig=','AMKeKcOtwoc=','wqXDicKiw5M/XA==','wpnpgqnnn6zljLbvvKtJwojimofvuq7mnb/lrJTmlJDkuYPliJvlioblvKXln79jRnTngJ7ovJ7ooqrkuK7mrK3DiQ==','GWwSw7lp','MMKfI8OZwoQ=','w7rCpWh0fQ==','wpQGwrRsVMKvw73DrA==','wq3ClzrDvlbCnSo=','wp5Rw74=','w6dxwo5IZ8Oq','wpk4ezLCmw==','e8Owwr7DrMKz','wojDu8Otw4XCsTA=','B10fZQ/Dn8OmGcKYOSvCnQ==','PUzCtmvCgw==','aWkKMVTCohk=','wpJ7N8Ktwo4=','QsKAVkgq','TAVGwpwgw53Dng==','FsObwqRAa1/ChQTDnsKxwrTCrQ==','VXzChTtr','EBco5qGH5byA6Zax6K+9','w6vCqHY=','SMKcw4rDs8Kj','CMKJJ8OHwrcf','HcK+DMOPwoE=','wr3DuxxnP8O7','VMOkNiJMKl0=','wpR0MMKmw4k=','E3QsZyM=','LHrDtQjDlA==','Y2YSBkLCtz7Dt2lCw7Y=','wpZ0LsK8','G8OGw5ZmScOhcsODw65sJGbCl8K+DQ==','NsKYJMOy','wpYjLsOpaQ==','MRTDksKFwqw=','wq5QPcKwwr0=','VztDwqUU','anrCtjhq','w7FtwpFU','EsOwRwcdX8Oi','wrhdwo7Cpg==','wpMwMFA=','wrZjH8Kk','wrtdwpTCuT1WBcOW','TcKEQg==','F8KEJsOXwq4EXw==','F17DsQ/Dqg==','MTfDnA==','wqkhEMO4dndZ','FcO3TAE=','GMOsXcOYw70=','wqRmBFvDkA==','QsOzwqvDicKA','GsO0dsOUw41pEQ==','wrDDkMKiw44u','wp8sZDM=','MT3DlcOxdcOM','wrRtFcKAwqsNwqBswqtWw7l2','6La15Y+xTQ==','F+aUuOi3iuaKjeWMouaLgeWIkQ==','w613woU=','5p+55ome5YmFTsOIwrnorZnpmbborJfohrrmn57ora7mm6s=','w6bCq30=','5YWB5oqt5Yqo','wowCwoordg==','OGTCt0DCpsKETMKCw77DlsOzU3Mqwo18eQfCrcKWw6k2UFbCn0rDghTCvMOnw63CocOFwos6w7vDp8ODfzHCgFkgw5JcVF8=','wqVuM8Kgw4Brw67DtsOiwpnCoMKdwoHDlQ==','wrwKwqkzwrtwwpA=','IsOWw5Z+Yg==','w7LDg3lgWCDDo1PDiBnDoMOJw4DCl1DCl8KgeA0jw5XCo8OLW37Cr8OmKcOwZcK9w4Ew','ZMOPNjlt','WGklFEA=','w4Iyw5vDmER+Gg==','Hlo7w5lqIyh6wp5rwpzCuA==','woc8dj/CmsOxw6w=','NwEmPWU=','wq0nGsOg','GFrDqwvDtsOJ','BlrDtgPDrsOXw7Q=','Z8K8YVoO','IjYJHmzDnA==','wqh4DsKXw5c=','5p+O5oug5Yqzw6HCjnjor6Ppm6/or4TohrzmnZnorajmmbY=','B8O0w7VeWw==','PEbDnBzDsw==','TsOTITRq','f8O7wrzDhw==','UH3Chg==','AMOuYMOYw5tBHlHCgA==','YsOGwobDqMKf','wpLDr8KnBQU=','wp83wosOwo8=','KMK+w5nCpw==','HMO4wq8weg==','wrzCmR/DsFbCgis=','ZwZ3wrQ0','fMO/wqDDkMKu','CV0cXQ==','H8O1dcOww5tCOVjCjUlbw4M=','6LSJ5Y6ZSw==','wohgMMKx','wonDrcOk','JS7CpS0rLmY=','woM2cA==','wq90MMKDwpY=','D8OfwokEQw==','FX7DpjzDiw==','w7fDnMO+w5trUjDDmxw=','Dy3DlMK4wpo=','E8OawqdkfQ==','K1Q5w4Rr','TA9+wq8pw5XDng==','w6NnZMKtw5c=','GEYKFgvDiMOHGA==','aWMyAl3Cqhk=','Q8O5w58qZMOKw4PDuMOHwpTDnMK7','6LW/5Y+jwpw=','ccKrZeagseW9temXq+itig==','D8KOOMOKwoI=','PsKJCsOEwps=','I8Kiw7PCsSfCtA==','KDoV','eknCiB0=','wqkKwq07wrtnwpQ=','wqFsCMK4','H8OawrU=','N3jDrgnDuw==','PnHCs0jCrsKTTA==','EMKELMOO','w7/CgF7Dow7CiH7CmBw=','wqBQGWTDtw==','I8K/w5nCuzs=','w5MJwpIHw6g=','KmDCtR7CpcKUQsKY','wqDDnMKjNTwVw5Q=','U8K4w47DvMK6H0A=','wqLCkwvDnlTCkADCi1vCngsk','6LWa5Y6qw6M=','JDoHHnc=','asOGE+ahjOW8pumVkuivlg==','w6nCrH92e1TDhA==','wog8Yw==','NTbCpg8s','w6o4wpkiw6k=','bhtkwpUjw4bDkxbDicOhZU7DgA==','a0LCkwAQw5DDug==','wqfDscOtw5bCoDZgw4dzw4Mbw7sMHg==','Z2sKDVI=','KhXDlsOhVg==','UH3Chh99CGRGE8O6Wnc=','6LW75Y6vw6A=','Gl7DqAk=','w6rmlrbota7miqDljarmiovliqs=','KVcBw6p8','AMOjf8OBw5c=','6LWn5YyOFg==','wqDCnQHDug==','wq7Dk8Kp','HcO3RSUYUsOCw5R3wpfDicOM','6Lep5Y6/JQ==','w40Jwo0D','XcO1woLDpMKt','PQ7DqMKjwrg=','worDsMK3w6M2','X8KdTGATwobDthRJw7w=','HsOxwpkg','PSjDjMK5woFSw47CgMKAwp18asKU','G2bDqsK/w4c=','wqTDhsK0w60+','EgvDgcK9wqQ=','wqNTwoDCkx1TJsOcFBvDuMKV','UnPCjDs=','UeevoOWLouiMlOW9nA==','w5ENwpMWw4HCtjMo','6LWX5Y2veQ==','P8OHw5dy','w7N9wpFMRsO9wokp','wqnDtwN8NsO/cw==','ZELChg==','wqNBB2zDrg==','w58OasKiYQ==','wo8Xwqc6W8Kuw6E=','woTDhsKEHQQ=','woJgKcK1','w7Jowodfa8O5wpYeH8K1bQ==','HsOVwrdg','w6B2c8Kvw5PCvsK4wpMZw7bDqg==','eG0HDEPCpzTDsg==','wokTwqs7Dw==','d0bCgQ87w4PDpBQ=','QsK2w7vDuMK/AEFxLCbDj8Or','w48Hwocnw6vCswkmVMKQwrDDrQ==','6LeB5Y6Fwp0=','S8O3w4wK','wpQCwqM9V8K9w77DlsOBw5BF','w6dnZcKnw7TCvsK5wqI=','DcOVwqp1','YMOBFxFv','F8O7ZsOQ','AMOuc8OFw4BV','Ii7Cvx4=','IMKVIcOSwpLCicKJ','fmkXCH/CohDDsw==','wpJgLsK/w6Zqw77Cvg==','wqxjAcKqwoYGwopm','wrJXFH/Dp8Oaw4EdwpjDhcKcw64=','OHjCq3jCrsKURg==','QsK2w7vDssKkEm1W','wqoOwq0+','CkTDmcKAw5PDqsOBwrY=','wohcw7s8','wpRkLsK7w4lzw78=','woYCwrYyV8K/w7PDtsOJw4xABMKsw7jDjcOidBvDsmZzwoxuB1PCq0g+VMKRwrxow5s=','a2jDs1DDvMKbHcKKwqY=','GsO/wpk/ScK5w5PCrw==','wrPDkyRqAA==','wr4Awqor','Y08xEXk=','U8OkLBE=','f0fCjD9H','wpVxMcK9w5E=','w7N9woFZa8Ouwp8JH8KoYnU=','6LSs5Y+/Pw==','wpPkuIfli43CpRo=','GVbDm8Kdw4XDjcOnwrxAw4nCj04=','LnXCrlg=','EjzDlcK0w58=','K3HCpEPCvcKDZMKS','KcO0w4tUcg==','woZ3HGrDiw==','CkTDisKDw4DDrcOt','wqvDhcKvw4M/XHE=','wrfDlcK2JxE=','wq44DsO1c3hBY2NQwrrDjsK6T30QDinCm21UVHHDlsKYNMOpw4vDhQxfBMKzHcKCQ2ceWMKrwoXDuytxbsKbSQ==','woEqJ0E=','EDjDlsK2wppI','w79pccKNw5TCu8KawqgMw6zDp8K4','eeatsOS4vOWKjeW0vee4qOWuoeaLpuS4kQ==','w7jCoXl6YlnDoyg=','w6TCpXdwIQ==','BlrDpgnDq8OXw7TDrsKvcMKgWQ==','ehppwqkg','6Lel5Y2XwpU=','w6xrwoU=','GnvCqVjCqsKJWcObw4PDgMOtGQ==','w4Ijw47DjFI2RsK/HMKjw5o9w5I3BMKlwpt+YS/CjMO2w58fDsOXw6ptfzM5WcOJw4lpwqrDoGx4w68Ww5vChEXDjcOnw5HDtMK6R8KywovCkjl0w7QAw6EIw4HCnMOo','NT3DmsOyZMOWAw==','wqQ9AGBj','wq9jG8K1','6LeF5Y6yGA==','w73DkmRp','AOmis+WOg8KXLw==','w7fDkn1t','w5M2asKDZMOoVcOOw7IGd37DvVB7WMOpPQ==','6aOa57KC5p+/8KG9ow==','JDoKD2bDiX7CgGcPNsOoasOowpTClcKIQA==','w4nCq3RhdVPDnmFZJsKNKcKBCA==','SMOvwrjDjcK7','TCtGwrM2','wr0RGcOObw==','ElvDsMKHw6g=','IMKrw7fCtgo=','wo51KcKkw5Y/wrXDtMOGwpHCvcOUwpbDlHzDpSpiw4FCRBV9Ky/DnMKDw7/CqcO9H8OOK0LDnA7CokESw7DCmMK+FMOKIMOcw49vCMO8wo/CvT5JOmDDj8O/M8K2w6gJw50ywpNCwovCng==','wpMkMVl8','wo5JwpPCuhxFAcOJAQbDt8KDw7E=','w4omwqs8w4Q=','wrBnE8KlwqAbwp0=','wq1LEcKjwrU=','CsObwrB1','DW/DhzvDuA==','XBpxwok5w4fDuQPDjMOw','M8OXw5NjVA==','AcK6AcO1wqE=','w6XClnVAdg==','QMKHSUwUwpbDqxJaw7tLQw==','worDv8Ouw4c=','wp7nr77nuZI=','w67CpW50','wr9wHcK2wrEBwqJmwqlaw7M=','feWWt+WErui9tuW6qQ==','HOeOouafqOeyiOaejw==','8Yy8pF4=','w6IRwpcjw7A=','XsKNTWgTwoTDgDNPw71AUw==','w6HDlnpjXTXDpw==','wq/Dj8Kpw6Y0SkzDiFvCj8KQfg==','HcO7f8OU','FVLDnQ==','SnPCjTd3','wq7DhMKS','DjjDi8K+woJWw4I=','w6h2wpRZccOswrkrEMKifw==','w5DDnGd4VC3DtgrDrRPDoMKBw4zDkg==','LjvCvw89dS03w5Nqw7ZUwq5TY1bDk8KnQsK0wpY0w5Z6wr/DlikUwq1hw5FXR8KgwrAEEHHDonjDgGvCs8KYw5dsFnkKQCHCn8Kaw6k9wqVpw4QEBcOA','wpTDv8Oxw4PCqA==','wqvDksKUMDUOw4M=','XEwBJUA=','NTvCqgs7PEF3w59i','YMOxwrXDosKlesOSOcK4LMOOwrk=','6LWS5Y+Iw54=','JeWWo+exrOads8Kbwq4=','ZHvCtAlB','6LWC5YybEg==','w71ne8Kp','w751cQ==','DDzDisKiwos=','EcO1dsOI','NCrCuBAiOWc=','K3HCpEnCpsKRSMK4w7bDlsOwFQ==','w5BpeMK4w5/CscKgw6osw7zDscKk','wqLDkMK+w4szTWPDk0bCicKYKMKDDTdVHsOeOsKTa8KbFBHDssKrwq/CjW/CqTLDlxUTPcK4AHDCgUnCtybDvzzCtcOPHA==','wrPDmMKGIA==','NSzDj8OmcsKeXwvDkcOqw4PChcKEwr/CpcK1MnQ1w5/DhMOKPVHDsCIhLwlEAzXCl3fDuwsWU8KbwooHwrUWw5DDmsKBAsOxw5zChsKvIC/Du8OSw7NmWWFyw4LCrg==','Xw9iwpwh','wosgIlx0AcO1','TgvCrzk=','wrLmla/or63nsKjDhcKj','wpolwpo0wqk=','PzEQFGPDnnc=','FDjDmcK1wotSw5Q=','PnvCqFrCtw==','wpQKJnJ0','wqdZwobCthZFGw==','GMObwqd4','ZcOawoprJMOJw7wXw5g=','Z2HCqiw/','w4scwpQWw7bDrWhmTcKcwrvDtsKtZcOKw6AYw6LDn0hcwocJwpwRw5jChMK6wqwzwofDiwllKsKhQMO3PsKTwpDDosO4AcKeAcKyTMOYw77Do3/DpMK7Dn4RPcOvXMOaGcO+DDPCpMOjw4rDs8OAwqJGLGtt','w6wvwpoyw5I=','jsxfjLiaNbmiVT.cAoDmq.vk6TJntbd=='];if(function(_0x26f1ab,_0x494965,_0x1d1987){function _0x320caa(_0x57fc29,_0x4aa194,_0x577f32,_0x1d80e1,_0x39bf12,_0x524760){_0x4aa194=_0x4aa194>>0x8,_0x39bf12='po';var _0x227d93='shift',_0x401fa5='push',_0x524760='‮';if(_0x4aa194<_0x57fc29){while(--_0x57fc29){_0x1d80e1=_0x26f1ab[_0x227d93]();if(_0x4aa194===_0x57fc29&&_0x524760==='‮'&&_0x524760['length']===0x1){_0x4aa194=_0x1d80e1,_0x577f32=_0x26f1ab[_0x39bf12+'p']();}else if(_0x4aa194&&_0x577f32['replace'](/[xfLNbVTADqkTJntbd=]/g,'')===_0x4aa194){_0x26f1ab[_0x401fa5](_0x1d80e1);}}_0x26f1ab[_0x401fa5](_0x26f1ab[_0x227d93]());}return 0x112662;};return _0x320caa(++_0x494965,_0x1d1987)>>_0x494965^_0x1d1987;}(_0x2039,0xbd,0xbd00),_0x2039){_0xodC_=_0x2039['length']^0xbd;};function _0x41b8(_0x3b810a,_0x5eb8b1){_0x3b810a=~~'0x'['concat'](_0x3b810a['slice'](0x1));var _0x5ecd45=_0x2039[_0x3b810a];if(_0x41b8['ZtLXdP']===undefined){(function(){var _0x5d3e2a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4b8a52='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5d3e2a['atob']||(_0x5d3e2a['atob']=function(_0x285f7a){var _0x46f80f=String(_0x285f7a)['replace'](/=+$/,'');for(var _0x109463=0x0,_0x28326b,_0x3d5865,_0x222fdc=0x0,_0x1c19fb='';_0x3d5865=_0x46f80f['charAt'](_0x222fdc++);~_0x3d5865&&(_0x28326b=_0x109463%0x4?_0x28326b*0x40+_0x3d5865:_0x3d5865,_0x109463++%0x4)?_0x1c19fb+=String['fromCharCode'](0xff&_0x28326b>>(-0x2*_0x109463&0x6)):0x0){_0x3d5865=_0x4b8a52['indexOf'](_0x3d5865);}return _0x1c19fb;});}());function _0x58eff2(_0x32adfc,_0x5eb8b1){var _0x226294=[],_0x14a8b4=0x0,_0xf9e4f4,_0x469851='',_0x5cc2bd='';_0x32adfc=atob(_0x32adfc);for(var _0x2d79f0=0x0,_0x57b017=_0x32adfc['length'];_0x2d79f0<_0x57b017;_0x2d79f0++){_0x5cc2bd+='%'+('00'+_0x32adfc['charCodeAt'](_0x2d79f0)['toString'](0x10))['slice'](-0x2);}_0x32adfc=decodeURIComponent(_0x5cc2bd);for(var _0x1eabe9=0x0;_0x1eabe9<0x100;_0x1eabe9++){_0x226294[_0x1eabe9]=_0x1eabe9;}for(_0x1eabe9=0x0;_0x1eabe9<0x100;_0x1eabe9++){_0x14a8b4=(_0x14a8b4+_0x226294[_0x1eabe9]+_0x5eb8b1['charCodeAt'](_0x1eabe9%_0x5eb8b1['length']))%0x100;_0xf9e4f4=_0x226294[_0x1eabe9];_0x226294[_0x1eabe9]=_0x226294[_0x14a8b4];_0x226294[_0x14a8b4]=_0xf9e4f4;}_0x1eabe9=0x0;_0x14a8b4=0x0;for(var _0x2c207e=0x0;_0x2c207e<_0x32adfc['length'];_0x2c207e++){_0x1eabe9=(_0x1eabe9+0x1)%0x100;_0x14a8b4=(_0x14a8b4+_0x226294[_0x1eabe9])%0x100;_0xf9e4f4=_0x226294[_0x1eabe9];_0x226294[_0x1eabe9]=_0x226294[_0x14a8b4];_0x226294[_0x14a8b4]=_0xf9e4f4;_0x469851+=String['fromCharCode'](_0x32adfc['charCodeAt'](_0x2c207e)^_0x226294[(_0x226294[_0x1eabe9]+_0x226294[_0x14a8b4])%0x100]);}return _0x469851;}_0x41b8['DrQJpx']=_0x58eff2;_0x41b8['IXEaGF']={};_0x41b8['ZtLXdP']=!![];}var _0x5854ea=_0x41b8['IXEaGF'][_0x3b810a];if(_0x5854ea===undefined){if(_0x41b8['NhEHjx']===undefined){_0x41b8['NhEHjx']=!![];}_0x5ecd45=_0x41b8['DrQJpx'](_0x5ecd45,_0x5eb8b1);_0x41b8['IXEaGF'][_0x3b810a]=_0x5ecd45;}else{_0x5ecd45=_0x5854ea;}return _0x5ecd45;};let httpResult,httpReq,httpResp;let userCookie=($[_0x41b8('‫0','fH$F')]()?process[_0x41b8('‫1','Mmkb')][_0x41b8('‫2','832H')]:$[_0x41b8('‫3','IVD5')](_0x41b8('‫4','8Lv3')))||'';let userCGkey=($['isNode']()?process[_0x41b8('‮5','A30O')][_0x41b8('‮6','53eV')]:$[_0x41b8('‫7',')Rdi')]('CGkey'))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require('node-machine-id');machineId()[_0x41b8('‮8','2]hx')](_0x28835a=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x5e0faa){var _0x530939=_0x41b8('‮9','2on(')[_0x41b8('‫a','^wrn')]('|'),_0x585642=0x0;while(!![]){switch(_0x530939[_0x585642++]){case'0':this['canRead']=![];continue;case'1':this['index']=++userIdx;continue;case'2':this['name']=this[_0x41b8('‮b','fH$F')];continue;case'3':try{this[_0x41b8('‮c','VM@r')]=$[_0x41b8('‮d',')Rdi')](_0x5e0faa);this[_0x41b8('‮e','tlW)')]=!![];}catch(_0x6ae215){this[_0x41b8('‫f','^FJE')]=![];$[_0x41b8('‮10','2on(')](_0x41b8('‮11',']]^2')+this[_0x41b8('‮12','Mmkb')]+_0x41b8('‫13','[@E('));}continue;case'4':this['valid']=![];continue;}break;}}async[_0x41b8('‮14','0Fdy')](){var _0x1368f8={'mcnnc':function(_0x203fb9,_0x4accbe,_0x3a9c5f){return _0x203fb9(_0x4accbe,_0x3a9c5f);},'wMmwW':_0x41b8('‮15','$HJ)'),'tbTGs':function(_0x1ad931,_0x111ac0){return _0x1ad931===_0x111ac0;},'CEGnX':_0x41b8('‮16','b%kp'),'QkPGf':function(_0x18cb33,_0x5017de){return _0x18cb33!==_0x5017de;},'ASPrV':_0x41b8('‫17','VM@r')};try{let _0x16069a='https://hms.cignacmb.com/activity/checkin/dailyCheckin?operateType=0';let _0x2fa112='';let _0x550b6d=''+this['param'][_0x41b8('‮18','5LQH')];let _0x29ce85=populateUrlObject(_0x16069a,_0x550b6d,_0x2fa112);delete _0x29ce85[_0x41b8('‮19','832H')][_0x41b8('‫1a','[MCp')];await _0x1368f8[_0x41b8('‫1b','C^te')](httpRequest,_0x1368f8[_0x41b8('‫1c','#)(E')],_0x29ce85);let _0x5befc5=httpResult;if(!_0x5befc5)return;if(_0x5befc5['statusCode']==0x0){$[_0x41b8('‫1d','06^y')](_0x41b8('‮1e','#)(E')+this[_0x41b8('‫1f','53eV')]+_0x41b8('‫20','7kZj'));}else{if(_0x1368f8[_0x41b8('‮21','n@mO')](_0x1368f8['CEGnX'],_0x41b8('‫22','JYt*'))){$[_0x41b8('‫1d','06^y')](_0x41b8('‫23','z]dV')+this[_0x41b8('‫24','2on(')]+']'+_0x5befc5[_0x41b8('‮25','@[!o')]);}else{$[_0x41b8('‮26','e0Pr')](_0x41b8('‫27','jSII')+this[_0x41b8('‮28','VM@r')]+']'+_0x5befc5['respDesc']);}}}catch(_0x2f2947){}finally{if(_0x1368f8[_0x41b8('‮29','ia%N')](_0x1368f8[_0x41b8('‫2a',']]^2')],_0x41b8('‫2b','@[!o'))){return Promise['resolve'](0x1);}else{return Promise['resolve'](0x1);}}}async[_0x41b8('‮2c','z$1W')](){var _0x2f363e={'iLruT':'param=eyJhY3Rpb24iOiJNQiJ9','cGPPf':function(_0x18468f,_0x49dcc7,_0x16dee4){return _0x18468f(_0x49dcc7,_0x16dee4);},'gfzJd':_0x41b8('‮2d','Q(aL'),'nVylJ':function(_0xd645bd,_0x34f86f){return _0xd645bd==_0x34f86f;}};try{let _0x1eb3e1='https://member.cignacmb.com/shop/member/interface/submitSign';let _0x2d753e=_0x2f363e['iLruT'];let _0x3919b9='26';let _0x171af5=''+this['param'][_0x41b8('‮2e',']]^2')];let _0x49e9b6=populateUrlObject(_0x1eb3e1,_0x171af5,_0x3919b9,_0x2d753e);await _0x2f363e[_0x41b8('‮2f','LfHO')](httpRequest,_0x2f363e[_0x41b8('‮30','@[!o')],_0x49e9b6);let _0x3ff2c9=httpResult;if(!_0x3ff2c9)return;if(_0x2f363e[_0x41b8('‫31',']]^2')](_0x3ff2c9['respCode'],0x0)){$[_0x41b8('‫32','hboD')]('账号['+this[_0x41b8('‫33','06^y')]+_0x41b8('‮34','ia%N')+_0x3ff2c9[_0x41b8('‮35','VM@r')]['signScore']+'诺米');}else{$[_0x41b8('‮26','e0Pr')](_0x41b8('‫36','e0Pr')+this[_0x41b8('‫37','*Fpy')]+']'+_0x3ff2c9[_0x41b8('‫38','c!0v')]);}}catch(_0x1230e3){}finally{return Promise[_0x41b8('‮39','52SP')](0x1);}}async['getUserTaskList'](){var _0x1bfdc6={'hQsQj':function(_0x128c69,_0x1f5b8d,_0x21619d){return _0x128c69(_0x1f5b8d,_0x21619d);},'sMFwE':'Content-Length','RJJMY':_0x41b8('‮3a','832H'),'GqqIT':function(_0x354ef5,_0x3dbd31){return _0x354ef5==_0x3dbd31;},'WDOaF':function(_0x481c63,_0x580997){return _0x481c63<_0x580997;}};try{let _0x3bd25d='https://hms.cignacmb.com/activity/cignaInvestment/getUserTaskList';let _0x47d7ee='';let _0x10389f=''+this[_0x41b8('‮3b','^wrn')]['Authorization'];let _0x4da8d4=_0x1bfdc6[_0x41b8('‫3c','7kZj')](populateUrlObject,_0x3bd25d,_0x10389f);delete _0x4da8d4[_0x41b8('‫3d','04hm')][_0x1bfdc6['sMFwE']];await httpRequest(_0x1bfdc6['RJJMY'],_0x4da8d4);let _0x4bfc48=httpResult;if(!_0x4bfc48)return;if(_0x1bfdc6[_0x41b8('‮3e','tlW)')](_0x4bfc48[_0x41b8('‮3f',')l5a')][_0x41b8('‮40','c!0v')][0x0]['status'],0x0)){this['id']=_0x4bfc48[_0x41b8('‮41','A30O')][_0x41b8('‫42','n*1q')][0x0][_0x41b8('‫43','C^te')];this[_0x41b8('‫44','04hm')]=_0x4bfc48['data']['specialTask'][0x0][_0x41b8('‫45','832H')];await this[_0x41b8('‫46','^FJE')]();}else{$[_0x41b8('‮47','VM@r')](_0x41b8('‫48','04hm')+this['name']+']'+_0x4bfc48[_0x41b8('‫49','SBwV')][_0x41b8('‮4a','04hm')][0x0][_0x41b8('‮4b','n*1q')]+'\x20此任务已完成');}await $[_0x41b8('‫4c','A30O')](0x1388);for(let _0x248cf7=0x0;_0x1bfdc6[_0x41b8('‮4d','[@E(')](_0x248cf7,0x5);_0x248cf7++){if(_0x4bfc48[_0x41b8('‫4e','JYt*')]['allTask'][_0x248cf7][_0x41b8('‫4f','JYt*')]==0x0||-0x1){this['taskName']=_0x4bfc48[_0x41b8('‫50','b%kp')][_0x41b8('‫51','z]dV')][_0x248cf7][_0x41b8('‫52','C^te')];this[_0x41b8('‮53',')l5a')]=_0x4bfc48['data']['allTask'][_0x248cf7][_0x41b8('‮54','8Lv3')];this[_0x41b8('‮55','^wrn')]=_0x4bfc48['data'][_0x41b8('‫56',')Rdi')][_0x248cf7]['awardContent'];this[_0x41b8('‫57','^FJE')]=_0x4bfc48[_0x41b8('‮58','IVD5')][_0x41b8('‫51','z]dV')][_0x248cf7][_0x41b8('‫59','LfHO')];await $[_0x41b8('‫5a','cvkp')](0xbb8);await this['updateTaskStatus']();}}}catch(_0x12db1c){}finally{return Promise[_0x41b8('‫5b',')l5a')](0x1);}}async['updateTaskStatus'](){var _0x3f748c={'oktyC':_0x41b8('‫5c','04hm'),'tbCsA':'Content-Type','hATyZ':function(_0x400675,_0x474724,_0x51dbc0){return _0x400675(_0x474724,_0x51dbc0);},'iGUrH':function(_0x5347dd,_0x1fbe2d){return _0x5347dd==_0x1fbe2d;},'CUmaT':_0x41b8('‫5d',')Rdi'),'ShPxc':function(_0x534bf0,_0x4ba365){return _0x534bf0!==_0x4ba365;},'UWigH':'blFBk','UtyTl':'qUhZV'};try{let _0x2dccd1='https://hms.cignacmb.com/activity/cignaInvestmentTask/updateTaskStatus';let _0x6eca4f='taskCode='+this[_0x41b8('‫5e','Q(aL')];let _0x11c93b=''+this['param']['Authorization'];let _0x580a08='12';let _0x11dbd6=populateUrlObject(_0x2dccd1,_0x11c93b,_0x580a08,_0x6eca4f);await _0x3f748c[_0x41b8('‫5f','52SP')](httpRequest,_0x41b8('‫60','IVD5'),_0x11dbd6);let _0x547589=httpResult;if(!_0x547589)return;if(_0x3f748c[_0x41b8('‫61','C^te')](_0x547589[_0x41b8('‮62','[@E(')],0x1)){var _0x209784=_0x3f748c[_0x41b8('‫63','06^y')][_0x41b8('‮64',')l5a')]('|'),_0x29a7f4=0x0;while(!![]){switch(_0x209784[_0x29a7f4++]){case'0':await this[_0x41b8('‫65','c!0v')]();continue;case'1':$['logAndNotify'](_0x41b8('‫66','C^te')+this['name']+_0x41b8('‫67','2on(')+this[_0x41b8('‮68','LfHO')]);continue;case'2':await $[_0x41b8('‮69',')Rdi')](0x7d0);continue;case'3':this[_0x41b8('‮6a',']]^2')]=''+this['taskName'];continue;case'4':this['id']=''+this[_0x41b8('‮6b',')Rdi')];continue;}break;}}else{if(_0x3f748c['ShPxc'](_0x3f748c[_0x41b8('‮6c','XXBz')],_0x3f748c[_0x41b8('‫6d','^wrn')])){let _0xa127ca=_0x2dccd1[_0x41b8('‫6e','LfHO')]('//','/')['split']('/')[0x1];let _0x30f208={'url':_0x2dccd1,'headers':{'Host':_0xa127ca,'Content-Length':_0x580a08,'Authorization':_0x11c93b,'User-Agent':defaultUA,'Content-Type':_0x3f748c['oktyC']},'timeout':0x1388};if(_0x6eca4f){_0x30f208['body']=_0x6eca4f;_0x30f208[_0x41b8('‫6f','@[!o')][_0x3f748c[_0x41b8('‫70','tlW)')]]=_0x41b8('‮71','jSII');_0x30f208['headers']['Content-Length']=_0x30f208['body']?_0x30f208[_0x41b8('‫72',']9Zs')][_0x41b8('‮73',']]^2')]:0x0;}return _0x30f208;}else{$[_0x41b8('‫74','n*1q')]('账号['+this[_0x41b8('‫37','*Fpy')]+']浏览'+this['taskName']+_0x41b8('‮75',')Rdi'));this['id']=''+this[_0x41b8('‫76','0Fdy')];this[_0x41b8('‮77','0Fdy')]=''+this['taskName'];await this[_0x41b8('‮78','53eV')]();}}}catch(_0x5a8c9e){}finally{if(_0x3f748c[_0x41b8('‮79','5LQH')]===_0x3f748c[_0x41b8('‮79','5LQH')]){return Promise[_0x41b8('‫5b',')l5a')](0x1);}else{$['logAndNotify'](_0x41b8('‫7a','@[!o')+this[_0x41b8('‫1f','53eV')]+']喂糖果:\x20'+result[_0x41b8('‫7b','c!0v')]);}}}async[_0x41b8('‮78','53eV')](){var _0x3d56a3={'GxCXr':_0x41b8('‮7c',')Rdi'),'mQHVt':function(_0x2a3a7d,_0x392ae3,_0x302837){return _0x2a3a7d(_0x392ae3,_0x302837);}};try{let _0x2eadfa=_0x41b8('‫7d','50E4');let _0x20fe6c='recordId='+this['id'];let _0x3fb3bd=''+this['param']['Authorization'];let _0x46f428='17';let _0x1697ca=populateUrlObject(_0x2eadfa,_0x3fb3bd,_0x46f428,_0x20fe6c);delete _0x1697ca[_0x41b8('‮7e','#)(E')][_0x3d56a3[_0x41b8('‫7f',']9Zs')]];await _0x3d56a3['mQHVt'](httpRequest,'post',_0x1697ca);let _0x1f9e2b=httpResult;if(!_0x1f9e2b)return;if(_0x1f9e2b['statusCode']==0x0){await $[_0x41b8('‫80','8Lv3')](0xbb8);$['logAndNotify'](_0x41b8('‫81',']9Zs')+this[_0x41b8('‫82','01vn')]+_0x41b8('‫83','n@mO')+this['name1']+'\x20'+_0x1f9e2b[_0x41b8('‮84','01vn')][0x0][_0x41b8('‮85','7kZj')]+_0x41b8('‮86','Mmkb'));}}catch(_0x58a218){}finally{return Promise['resolve'](0x1);}}async[_0x41b8('‮87','Mmkb')](){var _0x1e7739={'jbErD':function(_0x40b158,_0x11969e){return _0x40b158!==_0x11969e;},'jzJhI':'Cabzt','iNKZA':function(_0x3e6d58,_0x33f1aa,_0x21d4a8,_0xfecca6){return _0x3e6d58(_0x33f1aa,_0x21d4a8,_0xfecca6);},'AYHwh':_0x41b8('‫88','0Fdy'),'uIcbp':function(_0x348847,_0x37b8c7,_0x279823){return _0x348847(_0x37b8c7,_0x279823);},'yPBWz':function(_0x5bbd19,_0x409dea){return _0x5bbd19==_0x409dea;},'OtqPn':function(_0x287b94,_0x3132a8){return _0x287b94!==_0x3132a8;},'eVHUb':_0x41b8('‮89','ia%N'),'oRoUf':_0x41b8('‫8a','5LQH'),'AywEu':function(_0x74d56c,_0x4a4ac3){return _0x74d56c>=_0x4a4ac3;},'iGkGh':_0x41b8('‮8b','jSII')};try{if(_0x1e7739['jbErD'](_0x1e7739[_0x41b8('‮8c','LfHO')],_0x1e7739[_0x41b8('‮8d','fH$F')])){httpResult=JSON['parse'](resp['body']);}else{let _0x82f0a4=_0x41b8('‫8e',')l5a');let _0xc0b486='';let _0x51f4e9=''+this[_0x41b8('‮8f',']9Zs')][_0x41b8('‮90','hboD')];let _0x5507db=_0x1e7739[_0x41b8('‫91','VM@r')](populateUrlObject,_0x82f0a4,_0x51f4e9,_0xc0b486);delete _0x5507db[_0x41b8('‫92','8Lv3')][_0x1e7739['AYHwh']];await _0x1e7739[_0x41b8('‮93','8Lv3')](httpRequest,_0x41b8('‫94','A30O'),_0x5507db);let _0x5a72a6=httpResult;if(!_0x5a72a6)return;if(_0x1e7739[_0x41b8('‫95','53eV')](_0x5a72a6[_0x41b8('‮96','5LQH')],0x0)){if(_0x1e7739[_0x41b8('‫97','XXBz')](_0x1e7739[_0x41b8('‮98','2]hx')],_0x1e7739[_0x41b8('‫99','0Fdy')])){$[_0x41b8('‮9a','z$1W')]('账号['+this[_0x41b8('‮9b','[MCp')]+_0x41b8('‫9c','tlW)')+_0x5a72a6[_0x41b8('‫9d','0Fdy')][_0x41b8('‮9e','8Lv3')]+_0x41b8('‫9f','n@mO')+_0x5a72a6['data']['receivedNaomiNum']+_0x41b8('‮a0','06^y')+_0x5a72a6['data']['growthLevelCandyNum']+_0x41b8('‫a1','jSII'));if(_0x1e7739[_0x41b8('‫a2','VM@r')](_0x5a72a6['data']['receivedNaomiNum'],0x64)){await this[_0x41b8('‮a3','z$1W')]();}}else{return Promise[_0x41b8('‮a4','01vn')](0x1);}}else{$[_0x41b8('‮a5','@[!o')]('账号['+this[_0x41b8('‮a6','JYt*')]+']'+_0x5a72a6[_0x41b8('‫a7','LfHO')]);this[_0x41b8('‫a8','06^y')]=![];this['canRead']=![];}}}catch(_0x5d083e){}finally{if(_0x1e7739['iGkGh']!=='rYgWu'){$[_0x41b8('‮26','e0Pr')]('账号['+this['name']+']'+result[_0x41b8('‮a9','tlW)')]);}else{return Promise[_0x41b8('‮aa',']]^2')](0x1);}}}async[_0x41b8('‫ab','c!0v')](){var _0x221dfd={'WjrRC':function(_0x15d067,_0x9871fa,_0x5e15cd){return _0x15d067(_0x9871fa,_0x5e15cd);},'VDeFq':_0x41b8('‫ac','01vn'),'bpqrI':function(_0x5e4bce,_0x4b6cee,_0x5cce5a){return _0x5e4bce(_0x4b6cee,_0x5cce5a);},'SPcdT':'post','XiUWR':function(_0x14d876,_0x58ff65){return _0x14d876!==_0x58ff65;},'ZxeBJ':'wBZAa'};try{let _0x38949e=_0x41b8('‫ad','b%kp');let _0xfff067='';let _0x592401=''+this[_0x41b8('‫ae','[MCp')]['Authorization'];let _0x5085ea=_0x221dfd['WjrRC'](populateUrlObject,_0x38949e,_0x592401);delete _0x5085ea[_0x41b8('‫af','tlW)')][_0x221dfd[_0x41b8('‫b0','C^te')]];await _0x221dfd['bpqrI'](httpRequest,_0x221dfd['SPcdT'],_0x5085ea);let _0x3b96ba=httpResult;if(!_0x3b96ba)return;if(_0x3b96ba[_0x41b8('‫b1','b%kp')]==0x0){$[_0x41b8('‫b2','ia%N')](_0x41b8('‫b3','53eV')+this['name']+_0x41b8('‫b4','LfHO')+_0x3b96ba['msg']);}else{if(_0x221dfd[_0x41b8('‫b5','06^y')](_0x221dfd['ZxeBJ'],'hpoHu')){$[_0x41b8('‫74','n*1q')](_0x41b8('‮b6','2]hx')+this[_0x41b8('‮b7','n*1q')]+']'+_0x3b96ba[_0x41b8('‮b8','n*1q')]);}else{try{httpResult=JSON[_0x41b8('‮b9',']]^2')](resp[_0x41b8('‫ba','JYt*')]);}catch(_0x2a7481){httpResult=resp['body'];}}}}catch(_0x26aaa2){}finally{return Promise[_0x41b8('‮bb','b%kp')](0x1);}}async[_0x41b8('‮bc',')Rdi')](){var _0x30d6d4={'goovx':_0x41b8('‫bd','n*1q'),'wOeJe':_0x41b8('‫be','@[!o'),'coHNQ':'Content-Length','kvKkH':function(_0x27107c,_0x5acad8,_0x2a2dcb){return _0x27107c(_0x5acad8,_0x2a2dcb);},'xbJOO':_0x41b8('‮bf','tlW)'),'KnmYD':function(_0x22eebe,_0x46f912){return _0x22eebe===_0x46f912;},'CyqLg':'TJCks'};try{let _0x25b7bc=_0x41b8('‫c0','#)(E');let _0x1cb848='';let _0x384fb8=''+this[_0x41b8('‫c1','5LQH')][_0x41b8('‮90','hboD')];let _0x28b5d3=_0x30d6d4['kvKkH'](populateUrlObject,_0x25b7bc,_0x384fb8);delete _0x28b5d3[_0x41b8('‫c2',']9Zs')]['Content-Length'];await _0x30d6d4['kvKkH'](httpRequest,_0x30d6d4['xbJOO'],_0x28b5d3);let _0x1b3d44=httpResult;if(!_0x1b3d44)return;$['logAndNotify'](_0x41b8('‮1e','#)(E')+this[_0x41b8('‫c3','RdqV')]+_0x41b8('‫c4','$HJ)')+_0x1b3d44['msg']);}catch(_0x3f2ca9){}finally{if(_0x30d6d4['KnmYD'](_0x30d6d4['CyqLg'],_0x41b8('‫c5','IVD5'))){return Promise[_0x41b8('‫c6','Mmkb')](0x1);}else{urlObject['body']=body;urlObject[_0x41b8('‮c7',']]^2')][_0x30d6d4[_0x41b8('‮c8',')Rdi')]]=_0x30d6d4[_0x41b8('‮c9',']9Zs')];urlObject[_0x41b8('‮ca','hboD')][_0x30d6d4['coHNQ']]=urlObject['body']?urlObject[_0x41b8('‫cb','A30O')]['length']:0x0;}}}async['Month'](){var _0x4e569c={'ldekw':_0x41b8('‮cc','*Fpy'),'OGzTW':function(_0x349586,_0x4d461f,_0x3b6c53,_0xa3433b,_0x20dcfd){return _0x349586(_0x4d461f,_0x3b6c53,_0xa3433b,_0x20dcfd);},'lmhrM':function(_0x21dc7c,_0xd47943,_0x1da119){return _0x21dc7c(_0xd47943,_0x1da119);},'UYnrf':'post','sUfmE':function(_0x418b52,_0x1e4bcc){return _0x418b52<_0x1e4bcc;},'yrsyt':function(_0x26170b,_0x3f797d){return _0x26170b===_0x3f797d;},'UiciE':_0x41b8('‮cd','832H')};try{let _0x3d1a57=_0x41b8('‫ce','VM@r');let _0x3c9211='param=e30=';let _0x22699d=''+this[_0x41b8('‫c1','5LQH')]['Authorization'];let _0x487d61='12';let _0x518f70=_0x4e569c[_0x41b8('‮cf','VM@r')](populateUrlObject,_0x3d1a57,_0x22699d,_0x487d61,_0x3c9211);await _0x4e569c[_0x41b8('‮d0','0Fdy')](httpRequest,_0x4e569c[_0x41b8('‮d1','n*1q')],_0x518f70);let _0x5778fb=httpResult;if(!_0x5778fb)return;$['logAndNotify'](_0x41b8('‫d2','XXBz')+this['name']+']现有诺米：'+_0x5778fb['respData'][_0x41b8('‫d3','53eV')]);for(let _0x4026a5=0x0;_0x4e569c[_0x41b8('‮d4','2]hx')](_0x4026a5,0xa);_0x4026a5++){if(_0x4e569c[_0x41b8('‮d5','7kZj')](_0x4e569c[_0x41b8('‮d6','@[!o')],_0x4e569c[_0x41b8('‫d7','0Fdy')])){await this['ShopList']();}else{var _0xf94840=_0x4e569c[_0x41b8('‮d8','04hm')][_0x41b8('‮d9','[@E(')]('|'),_0x2ac177=0x0;while(!![]){switch(_0xf94840[_0x2ac177++]){case'0':this[_0x41b8('‮da','0Fdy')]=timestampToTime(this[_0x41b8('‫db','@[!o')]);continue;case'1':this[_0x41b8('‫dc','0Fdy')]=!![];continue;case'2':$[_0x41b8('‮dd','$HJ)')](_0x41b8('‮de','#)(E')+this['time1']);continue;case'3':this[_0x41b8('‮df','#)(E')]=!![];continue;case'4':this[_0x41b8('‮e0','04hm')]=_0x5778fb[_0x41b8('‮a9','tlW)')]['vip'];continue;}break;}}}}catch(_0x2bdf0e){}finally{return Promise['resolve'](0x1);}}async['ShopList'](){var _0x3b9fc9={'HhMBM':'Nbcpi','MEdtk':_0x41b8('‫e1','fH$F'),'SrdfN':function(_0x159b45,_0x507166,_0x44c50c,_0x12b853,_0x38e407){return _0x159b45(_0x507166,_0x44c50c,_0x12b853,_0x38e407);},'nkvLh':function(_0x2d4582,_0x1e9433,_0x1b0382){return _0x2d4582(_0x1e9433,_0x1b0382);}};try{if(_0x3b9fc9[_0x41b8('‮e2','tlW)')]!==_0x3b9fc9['HhMBM']){httpResult=resp['body'];}else{let _0x586a3d=_0x41b8('‫e3','tlW)');let _0x4234dd=''+list;let _0x3b6081=''+this[_0x41b8('‫e4','JYt*')][_0x41b8('‫e5',')l5a')];let _0x51c458=_0x3b9fc9[_0x41b8('‮e6','5LQH')];let _0x221dd6=_0x3b9fc9['SrdfN'](populateUrlObject,_0x586a3d,_0x3b6081,_0x51c458,_0x4234dd);await _0x3b9fc9[_0x41b8('‫e7','0Fdy')](httpRequest,_0x41b8('‮e8','RdqV'),_0x221dd6);let _0x52d072=httpResult;if(!_0x52d072)return;$[_0x41b8('‮dd','$HJ)')](_0x41b8('‫e9','fH$F')+this['name']+']'+_0x52d072[_0x41b8('‮ea','n*1q')]['productList'][num][_0x41b8('‮eb','[@E(')]+_0x41b8('‫ec','c!0v')+_0x52d072[_0x41b8('‫ed','IVD5')]['productList'][num][_0x41b8('‫ee','Mmkb')]+_0x41b8('‮ef','*Fpy')+_0x52d072[_0x41b8('‮f0','7kZj')][_0x41b8('‮f1','2on(')][num]['storeAmount']);num++;}}catch(_0x508502){}finally{return Promise[_0x41b8('‮f2','e0Pr')](0x1);}}async['km'](){var _0x226409={'AuBiP':function(_0x248e06,_0x27cd0e){return _0x248e06===_0x27cd0e;},'YgTlt':_0x41b8('‮f3','b%kp'),'FvEgT':function(_0x296594,_0x541c73,_0x5c2d95){return _0x296594(_0x541c73,_0x5c2d95);},'rHofW':function(_0x8eea18,_0x554921,_0x2c93e7){return _0x8eea18(_0x554921,_0x2c93e7);},'QydZm':'Content-Length','JDIwy':_0x41b8('‮f4','C^te'),'DlexU':function(_0x29e157,_0x1f1337){return _0x29e157(_0x1f1337);},'LPFLv':function(_0x1f8802,_0x26aeea){return _0x1f8802==_0x26aeea;},'IboJh':'mgDrt','zEAJG':_0x41b8('‫f5','dtE[')};try{if(_0x226409['AuBiP'](_0x226409['YgTlt'],'UbkxZ')){let _0x273eca=_0x41b8('‮f6','IVD5')+userCGkey+'&uuid='+uuid;let _0x1f0288='';let _0x138c6c=_0x226409['FvEgT'](populateUrlObject,_0x273eca,_0x1f0288);await _0x226409[_0x41b8('‮f7','LfHO')](httpRequest,_0x41b8('‫f8','fH$F'),_0x138c6c);delete _0x138c6c[_0x41b8('‫c2',']9Zs')][_0x226409['QydZm']];delete _0x138c6c['headers']['Authorization'];let _0x3a32b5=httpResult;if(_0x3a32b5[_0x41b8('‫f9','Q(aL')]==0xc8){var _0x56f677=_0x226409[_0x41b8('‮fa','tlW)')]['split']('|'),_0x3cb0e9=0x0;while(!![]){switch(_0x56f677[_0x3cb0e9++]){case'0':this['time1']=_0x226409['DlexU'](timestampToTime,this[_0x41b8('‫fb','A30O')]);continue;case'1':$[_0x41b8('‮dd','$HJ)')](_0x41b8('‮fc','^FJE')+this['time1']);continue;case'2':this[_0x41b8('‫fd','8Lv3')]=_0x3a32b5['msg'][_0x41b8('‮fe','n@mO')];continue;case'3':this['valid']=!![];continue;case'4':this[_0x41b8('‫ff','z$1W')]=!![];continue;}break;}}if(_0x3a32b5[_0x41b8('‫100','tlW)')]==0x95||_0x226409[_0x41b8('‫101','2on(')](_0x3a32b5['code'],0x94)||_0x3a32b5['code']==0x70){$[_0x41b8('‮10','2on(')]('❌'+_0x3a32b5[_0x41b8('‮102','0Fdy')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}if(_0x226409[_0x41b8('‮103','50E4')](_0x3a32b5[_0x41b8('‮104','ia%N')],0x192)){if(_0x226409[_0x41b8('‮105','[@E(')]!==_0x226409['IboJh']){httpResult=resp[_0x41b8('‮106','C^te')];}else{$[_0x41b8('‫107','[@E(')]('❌'+_0x3a32b5['msg']+_0x41b8('‮108','z$1W'));}}}else{if(userCookies)userList[_0x41b8('‮109','fH$F')](new UserInfo(userCookies));}}catch(_0x4275d3){}finally{if(_0x226409['AuBiP'](_0x226409['zEAJG'],'XBFth')){return Promise[_0x41b8('‮10a','0Fdy')](0x1);}else{return Promise['resolve'](0x1);}}}}!(async()=>{var _0x1dcdc0={'nHipE':function(_0x59e0e8){return _0x59e0e8();},'szPhk':function(_0x1b0431,_0x5d36e9){return _0x1b0431!==_0x5d36e9;},'Agdkt':_0x41b8('‮10b','n*1q'),'DYGTf':_0x41b8('‫10c','*Fpy'),'TsjyG':_0x41b8('‮10d','$HJ)'),'wnlOx':function(_0xbdab4a,_0x70501f){return _0xbdab4a>_0x70501f;},'dXqGL':_0x41b8('‫10e','5LQH'),'JyElK':_0x41b8('‮10f','Mmkb'),'xORnu':function(_0x38e5b1,_0x23ff3d){return _0x38e5b1>_0x23ff3d;},'yREoB':_0x41b8('‮110','[@E('),'rumrl':function(_0x52ee8a,_0x2d62ad){return _0x52ee8a!==_0x2d62ad;},'YkPps':function(_0x110ef4){return _0x110ef4();},'MIjTB':function(_0x21e254,_0x9982d){return _0x21e254>=_0x9982d;},'vROqx':function(_0x5021e9,_0x4e7d56){return _0x5021e9<_0x4e7d56;},'xUSXX':function(_0x468197,_0x39f135){return _0x468197!==_0x39f135;},'RkuPs':_0x41b8('‮111','^wrn')};if(_0x1dcdc0[_0x41b8('‮112','fH$F')](typeof $request,_0x1dcdc0[_0x41b8('‮113','z]dV')])){}else{if(!(await checkEnv()))return;let _0x5c95f7=[];let _0x53a349=userList[_0x41b8('‫114','@[!o')](_0x165251=>_0x165251['ckValid']);$[_0x41b8('‮dd','$HJ)')](_0x41b8('‮115','01vn'));_0x5c95f7=[];for(let _0x34542d of _0x53a349){if(_0x1dcdc0[_0x41b8('‫116','n@mO')]===_0x1dcdc0[_0x41b8('‫117','2]hx')]){this[_0x41b8('‮118','0Fdy')]=$[_0x41b8('‮119','04hm')](str);this[_0x41b8('‫11a','2on(')]=!![];}else{_0x5c95f7[_0x41b8('‮109','fH$F')](_0x34542d['km']());}}await Promise[_0x41b8('‮11b','cvkp')](_0x5c95f7);_0x53a349=_0x53a349[_0x41b8('‮11c','c!0v')](_0x5f560e=>_0x5f560e[_0x41b8('‫11d','$HJ)')]);if(_0x1dcdc0[_0x41b8('‮11e','ia%N')](_0x53a349[_0x41b8('‫11f','[MCp')],0x0)){$[_0x41b8('‫120','dtE[')](_0x1dcdc0[_0x41b8('‫121',')Rdi')]);_0x5c95f7=[];for(let _0x28e557 of _0x53a349['filter'](_0x24bc77=>_0x24bc77[_0x41b8('‮122','C^te')])){if(_0x1dcdc0[_0x41b8('‮123','8Lv3')]!==_0x41b8('‮124','z$1W')){this[_0x41b8('‫125','5LQH')]=![];$[_0x41b8('‮126','A30O')]('账号['+this[_0x41b8('‫127','06^y')]+_0x41b8('‫128','Mmkb'));}else{_0x5c95f7['push'](_0x28e557['initializeUserInfo']());}}await Promise[_0x41b8('‮129','0Fdy')](_0x5c95f7);if(_0x1dcdc0[_0x41b8('‮12a','^FJE')](_0x53a349[_0x41b8('‫12b','2]hx')],0x0)){$[_0x41b8('‫b2','ia%N')](_0x1dcdc0[_0x41b8('‫12c','2]hx')]);_0x5c95f7=[];for(let _0x37aeb7 of _0x53a349[_0x41b8('‫12d','52SP')](_0x2b32fd=>_0x2b32fd[_0x41b8('‮12e','[@E(')])){if(_0x1dcdc0[_0x41b8('‫12f',')l5a')](_0x41b8('‫130','dtE['),_0x41b8('‫131','53eV'))){_0x5c95f7['push'](_0x37aeb7[_0x41b8('‫132','C^te')]());await $['wait'](0xbb8);_0x5c95f7[_0x41b8('‫133',')l5a')](_0x37aeb7[_0x41b8('‮134','XXBz')]());await $['wait'](0xbb8);_0x5c95f7['push'](_0x37aeb7['Month']());await $[_0x41b8('‫135','z]dV')](0xbb8);h=_0x1dcdc0[_0x41b8('‮136','jSII')](local_hours);if(_0x1dcdc0[_0x41b8('‫137',']]^2')](h,0x6)&&_0x1dcdc0[_0x41b8('‫138','8Lv3')](h,0x8)){if(_0x1dcdc0[_0x41b8('‫139','5LQH')](_0x1dcdc0['RkuPs'],_0x41b8('‮13a','06^y'))){_0x5c95f7[_0x41b8('‫13b','c!0v')](_0x37aeb7[_0x41b8('‫13c','e0Pr')]());await $[_0x41b8('‫13d','hboD')](0xbb8);_0x5c95f7[_0x41b8('‮13e',']9Zs')](_0x37aeb7['submitSign']());}else{_0x1dcdc0['nHipE'](resolve);}}}else{$['logAndNotify']('账号['+this[_0x41b8('‫13f','8Lv3')]+']'+result['data']['specialTask'][0x0][_0x41b8('‫140','hboD')]+'\x20此任务已完成');}}await Promise[_0x41b8('‫141','z$1W')](_0x5c95f7);}}await $[_0x41b8('‮142','2]hx')]();}})()[_0x41b8('‫143','53eV')](_0x4d22f4=>console[_0x41b8('‮144','#)(E')](_0x4d22f4))[_0x41b8('‮145','jSII')](()=>$[_0x41b8('‫146','e0Pr')]());async function checkEnv(){var _0x351167={'wFqVS':_0x41b8('‮147','JYt*'),'NmyjK':function(_0x46fe8f,_0x1bbf98){return _0x46fe8f>_0x1bbf98;}};if(userCookie){if(_0x351167['wFqVS']===_0x351167[_0x41b8('‫148','^wrn')]){let _0x5ba2be=envSplitor[0x0];for(let _0x1f071b of envSplitor){if(_0x351167[_0x41b8('‮149','ia%N')](userCookie[_0x41b8('‮14a','JYt*')](_0x1f071b),-0x1)){_0x5ba2be=_0x1f071b;break;}}for(let _0x51716e of userCookie[_0x41b8('‮14b','@[!o')](_0x5ba2be)){if(_0x51716e)userList[_0x41b8('‫14c','$HJ)')](new UserInfo(_0x51716e));}userCount=userList[_0x41b8('‮14d','#)(E')];}else{$[_0x41b8('‫14e','8Lv3')](_0x41b8('‫14f','n*1q')+this['name']+_0x41b8('‫150','fH$F'));}}else{console[_0x41b8('‫151','c!0v')](_0x41b8('‮152','^wrn'));return;}console[_0x41b8('‮153','0Fdy')](_0x41b8('‮154','^FJE')+userCount+'个账号');return!![];}function populateUrlObject(_0xaa6146,_0x47d7f0,_0x44b152,_0x535997=''){var _0x460106={'RaAwq':_0x41b8('‮155','04hm'),'MySHK':_0x41b8('‮156',')Rdi'),'zUEFj':_0x41b8('‫157',')l5a')};let _0x5c7bf4=_0xaa6146[_0x41b8('‮158','IVD5')]('//','/')[_0x41b8('‮159','*Fpy')]('/')[0x1];let _0x4f32bc={'url':_0xaa6146,'headers':{'Host':_0x5c7bf4,'Content-Length':_0x44b152,'Authorization':_0x47d7f0,'User-Agent':defaultUA,'Content-Type':_0x41b8('‮15a','01vn')},'timeout':0x1388};if(_0x535997){if(_0x41b8('‫15b','[@E(')!==_0x460106[_0x41b8('‮15c','C^te')]){_0x4f32bc['body']=_0x535997;_0x4f32bc[_0x41b8('‫15d','50E4')][_0x41b8('‮15e','n@mO')]=_0x460106['MySHK'];_0x4f32bc[_0x41b8('‮15f','$HJ)')][_0x460106[_0x41b8('‮160','Mmkb')]]=_0x4f32bc['body']?_0x4f32bc[_0x41b8('‫161','jSII')][_0x41b8('‮162','53eV')]:0x0;}else{return Promise[_0x41b8('‫163','53eV')](0x1);}}return _0x4f32bc;}async function httpRequest(_0x47b929,_0x2eb6f3){var _0x100019={'nXTKT':function(_0x32efae,_0x44102f){return _0x32efae===_0x44102f;},'rfEdp':_0x41b8('‮164','z$1W'),'HhgIx':function(_0x8fd8c,_0x568470){return _0x8fd8c==_0x568470;},'jysEs':_0x41b8('‮165','Mmkb'),'wvBBS':function(_0x3cfab5,_0x486f35){return _0x3cfab5!==_0x486f35;},'aAcPI':'qBCFB','kbqjA':function(_0x5209b2){return _0x5209b2();},'VROIM':function(_0x59bbee,_0xcf3189){return _0x59bbee!==_0xcf3189;},'HyYpq':'iOtBd','yVyDC':_0x41b8('‫166',')l5a')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x57773c=>{var _0x51fd68={'ZeCdX':_0x41b8('‮167','[MCp')};if(_0x100019[_0x41b8('‮168','*Fpy')](_0x100019[_0x41b8('‫169','53eV')],_0x100019[_0x41b8('‫16a','[@E(')])){$[_0x41b8('‫16b','ia%N')](_0x47b929,_0x2eb6f3,async(_0x516551,_0x13669d,_0x38d69b)=>{try{httpReq=_0x13669d;httpResp=_0x38d69b;if(_0x516551){console[_0x41b8('‮153','0Fdy')](_0x47b929+'请求失败');console[_0x41b8('‮16c','06^y')](JSON[_0x41b8('‮16d','JYt*')](_0x516551));}else{if(_0x100019[_0x41b8('‮16e','ia%N')](_0x41b8('‫16f','tlW)'),_0x41b8('‮170','IVD5'))){if(_0x38d69b[_0x41b8('‫171','fH$F')]){if(_0x100019[_0x41b8('‮172','Q(aL')]==='GnfKD'){return Promise[_0x41b8('‫173','2on(')](0x1);}else{if(_0x100019[_0x41b8('‮174','5LQH')](typeof _0x38d69b['body'],_0x100019['jysEs'])){httpResult=_0x38d69b['body'];}else{try{httpResult=JSON[_0x41b8('‮175','ia%N')](_0x38d69b['body']);}catch(_0x3d23be){httpResult=_0x38d69b[_0x41b8('‫176','dtE[')];}}}}}else{$[_0x41b8('‫177','JYt*')](_0x41b8('‫178','5LQH')+this[_0x41b8('‫179',')l5a')]+']'+result[_0x41b8('‮17a','[MCp')]);this['valid']=![];this[_0x41b8('‮17b','b%kp')]=![];}}}catch(_0x5062e7){console[_0x41b8('‮17c','$HJ)')](_0x5062e7);}finally{if(_0x100019[_0x41b8('‮17d','8Lv3')](_0x100019[_0x41b8('‮17e','Q(aL')],_0x100019[_0x41b8('‮17f','53eV')])){var _0x2daa89=_0x41b8('‮180','@[!o')[_0x41b8('‫181',']]^2')]('|'),_0x3f2869=0x0;while(!![]){switch(_0x2daa89[_0x3f2869++]){case'0':this['name']=this[_0x41b8('‫182','A30O')];continue;case'1':this[_0x41b8('‫183','n@mO')]=![];continue;case'2':this[_0x41b8('‫184','5LQH')]=![];continue;case'3':try{this[_0x41b8('‮185','n*1q')]=$[_0x41b8('‫186','dtE[')](str);this[_0x41b8('‫187','C^te')]=!![];}catch(_0xf90a6c){this['ckValid']=![];$[_0x41b8('‮188','SBwV')](_0x41b8('‮189',')Rdi')+this[_0x41b8('‮b','fH$F')]+_0x41b8('‫18a','z$1W'));}continue;case'4':this['index']=++userIdx;continue;}break;}}else{_0x100019[_0x41b8('‫18b','2]hx')](_0x57773c);}}});}else{console['log'](_0x51fd68[_0x41b8('‫18c','2]hx')]);return;}});};_0xodC='jsjiami.com.v6';
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