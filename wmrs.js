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
let list = 'param=eyJhY3Rpb24iOiJNQiIsInNlYXJjaEtleSI6IiIsImNhdGVnb3J5IjoiQTA3Iiwic29ydFR5cGUiOiIwNCIsImludGVydmFsIjoiMDAiLCJhY3Rpdml0eVR5cGUiOiIwNCwwMywwMiwxMywxNCwwMCIsImN1cnJlbnRQYWdlIjoiMSIsInBhZ2VTaXplIjoiMTAifQ=='         //库存监控body，默认虚拟卡类 如需其他自己抓


var _0xod5='jsjiami.com.v6',_0xod5_=['‮_0xod5'],_0x32f0=[_0xod5,'P8KzwqHCtMKdeQ==','e8O8w7bCv8Kp','N1NlwpXCkg==','w7PDrkkKfw==','wpbDncOpwrcq','w7sNwo9K','wrNdOUJD','T2ZzwqXCjw==','BQXDssK2WQ==','diPDncK0wqo=','wqLDoTA=','RH0e','GxbDlsKyZsKBwqHCksOb','w7gJwpNPwq0=','w4JDwrPCmsOQw7XCpcK/','YTDDhcK5wqvCpmI=','MmZ8wrPCog==','fkLDrMKFw7I=','wo3DgcOwwq8KFsKt','V8K6wojDug==','w6zDqMOVK38=','RF3DrhDCnQ==','w685ccO8w7s=','In7DuEI=','AsKww68uw64=','bm8DAcKl','wpbCugrDjis=','w5ceDBdV','TcKow7vDnw==','F37DgB4FDcKtw40=','JHDDqFo=','cSvDtsK7wq7Crmp6woI+w7I=','wpzCuRDDgygyw6Yp','w4wXAlwh','d151wpM=','w6kYwpFCwqlnw7nCuTjDrsKFMWHCnzbCiGQGwrlawqbDlcOOw6oSwqASw73CuRDClXE7R17CssOMw4cpwrzDmk9YwobDnsKUDw==','w7ASITlZw6fDnA==','ScOnw6fCvw==','Cg3DgMKi','Q8Oxw5HCqsKB','wp3DiE/CrCrDog==','w7zCiSs=','KcK/wrHCqA==','w5/DiMOEO2RxwrI=','GsKWw5o=','w7JwwqrDjcOD','Gk9ZwoHCkmVn','JlzDiBQO','w6MMwql/wqI=','woDCvR7DiQ==','w6Ixd8KRw4U=','eEfDnQjCkQ==','cS/DocOqwq3CvGlA','BA3Dg8KaZsKCwobCm8OWwqPCpsK9','6LST5Yyiwrc=','wqfDoDN8Kg==','T1Qyw7s6ejs=','w7dDwqhhwq3CrQgewqTDpHcNw4dYXzTCjkfCuRd6J8KWw7bChBRbLcK0Xm/DtcO5NwfDmCbCqcOEwofDonkiwr/Dn3dt','PkVDwpHCln9ywqjClsKgw5QBw5vCow==','VjbCqn8SwrTDiAvDkF5THFtacMO1VRR5TEI2w57ChsOUKjIoXnzDuMOww4h8YhlWwrRWw40GwqTDlsKtSU1ow7LDhcK5L29mXsOrYsOYwrvCgFPCrmRyGsKBYsOcwoU=','wrbDicK3w4oQ','w6IUImIWZSY=','X8Opw6zChcKL','dV3Di8Kyw4PCl3J/DMKf','Q8Kow7jDp3/DlMO9P8OkwpQ3Cg==','6LWU5Yymw4Y=','bDrDvsK9','DuaVp+i2jeaLlOWOkeaKh+WKqw==','d0jDg8KCw68=','wozDlMOvwqkS','w6HDgGUS','w57DkygAw7M=','dcOVFWAowo3Crg==','wrtCw79Bw7nCu8KvTlIhLW9Aw7M=','wpPDgcOtwqcSCA==','QU8w','wpzCuQDDgzYgw4o=','w6gYMyk=','w6vCtB5rw5k=','UcO+OWc4','w6MDDWw/','wr/DlAdKIQ==','wrF7FWJ4','w7wkb8KIw5JgJcOrw5xBwpDCvnkPwovCtsOUSGtPwpd+fsKvwo4qJcKrGVdPw4cGQsOgw6lVecO1W8KUwqPCmjB4w6gdwrdywpjCisOUOcOywr5bwrjCrXYN','XF0lw7k8LjAnHS/Dg8KrCW3ClsKbRHY6w6fCjMOLw5Jmw5oK','wp7CvQHDjTc=','w5I9wo5awrg=','wq5lGmh+','F27CucOcJMKKQMKA','w6IZdcOd','wqnnr4XliLHojbTlv5k=','wq5eXMKNwpXCi8KlRA==','dUDDjcKow6XCh15iDQ==','woHDsHXCrCM=','w7XCiDppw6bDqgk4Ljgfw4U=','6Law5Y+EwoM=','E0tAwoA=','wpzCuQDDnB4zw5wu','LH7Du3oXwoTDpVc6aXDDpw==','w7YWLTg=','deWWkOeyr+aeucOGdA==','EsKLw4s=','D09eworCn2dj','6Lee5Y+aw4o=','wpPDnnXClj3DosKiw5XCukJtBsOgw5/CmQ==','b04ew74A','FcK0w6k=','XMOAw4jClsKf','wo/Do8OZwq8h','Cz7DqnNQw7LDl1jCi08S','w7PCrSViw48=','IMOZwrvDs8K0','wovDhh5JKA==','w6vCgi5Hw6TDuCI=','DUtfwoTCng==','YFYmP8Kbw6TDkztjwpQNwp4B','R8Kiw77DgnTDgsOA','UsKUwqLDiMK/','w79DwpfDoMO+','PcKWw4QSw6g=','YnzDoMKiw6M=','w4rDiMOTMHdhwppK','d3bCn8KTel/CpBrDs8KZWA==','HR1iwr4sWAnDqQ==','HsK+w7ocw6XCosKow77Drkomw6c=','w79dwrxowrw=','IsK7w6fmorjlvrrplI7orpI=','w4I0DS5S','w5Y7VcOLw5s=','wpoZwqHDrXw=','w6kEwo16wqF3w7M=','OTFhGiMp','wqfDinjCtg0=','X0w7w7El','Z1RywoXCqFohDw==','KzJhHDIZRxN1wq3CtnE=','w6NDwrxswrDCqz0Lwr7DoEpWw54BXTA=','w4zDjMODNEZqwrdL','YkjDnsKn','YzfDv8KMwqbCvG0=','W8Kmw6zDjVLDn8OXNQ==','XHMKTsKyNcK0XQ==','w6wJwpVP','HEZBwrHCkmJt','wovDhcOwwqsoAcKlwqI=','OjBzBg==','w6oSMzJQw6PDig==','wqEdwpPDhEwFw602wq8Ew6okw44PRlI=','w7oeMHI=','PRBNNxQ=','w412Y1Elw5ccFMKG','UgXCtm4Y','w6IFN3YALXpmwrvDs8KMwoAeR8OJwrsbeMK2wrHDo0c4IhRYw6PDm2xDNcKoXMO1FcKDTRxDNQITW3ZKw57CmDptFcOhwo5DaMKRSQrCny/DnQkcbjvCksO1R8OOQ8Oi','wrrDryRyEcKTw7dA','wq/CqQfDhDUkw4Y3e8OnIXXDig==','Ej42eWA=','wobDvCzCqsOM','IzMmfXc=','B1rDrlk1','ZmggNcK4','w6oHwoVX','wrPDo8KLw5Qw','cD7DsMK9wq7CuWNtwoIjw70d','6Lay5Y6nQA==','QOS5i+WLlT5t','YULDuS7CrcOZw5PCs8ORw7draw==','EnrDigU=','wrJaQsKYw6A=','IQAWV35Aw44sOCk6wo3DpFbCng==','wofCiwfDlAA=','w6/DqGkKfg==','wo3CrzXDiR0=','CGjDhA==','dDLDow==','agrDpsKfwrU=','wqAEwprDgA==','ZUjDhMKUw5PChVU=','w7jDmh0qw7o/w6fDl05fUgA=','6LSi5Y+xwqE=','w6Xmt6Lopbg=','XiAeJsOVw5M6OA==','X+aunOS5l+WIpeW1h+e7mOWvseaJiuS6vQ==','wrHDrcKOw4QNAhbCuMOxw4rDnD0=','RwTCkVoK','YHM2w6ge','XFMkw6w=','w5gtW8ONw5k=','WsKWwrzDjsKm','w6YeJA==','wo3DgcOgwq8UBMKBwqME','woEPW8OJPg==','w6gBwoZuworDlmnClsKjwrZTw4UJ','w5EEwrpAwqA=','U8O/w6TCgsK2','w7kFInIGZBYmwrfDuw==','w7g/fMK5w48+RMKrw4VNwpvCpQ==','aEjDh8Kj','W+mir+WNvMO8wpY=','blTDtTnDuA==','6aGj57Gt5p6d8Y+8og==','w6cGN0UZ','w58lLAhd','HSYSa2w=','wo5vI0J7w51N','EUVKwqTCnXVIw6rCrsKsw5wf','6Lau5Y6fwro=','w7tAwr8=','w7DCiTRcw6HDrys+IDQsw493wq8Ew4TCt8OX','wrDDpgbCmA==','R1zDnsKuw5nCllhqCcKOw47Cvyk=','wpkLSMOMNkXChA==','XXd0wr3CnQ==','UcO5E3Yi','X0g2w6wkYBYxMyI=','w6QHwoZvwq5gw5bCoiXDqMKNZw==','6Leo5Y25DA==','C3rDjhQ=','wp3nr4Dnu5I=','THMNRA==','w7Axb8KZ','JueOmeaeo+ewkOacqg==','RUImNg==','TTMCOsOvw5obOA/DoiUFLgB/ccOsw4vDgQ==','8LqPmVo=','MMKlw4kow7I=','w6vCgj5Nw6HDuCIzFDAWw5F7wpM4w4c=','TGHDvQvCkA==','w7Yka8Kgw7I=','dmPCmcKVekjCrQDDs8KFXsKV','wr7DryVqNw==','ZEbDjsK/','H8Kiw7o=','Q8K0woDDqsK0','wrpcdsOtwqhrwo8=','RsKpw6nDg2LDhMOwMcO+wpko','TDTDo8KqwpE=','w7wZasOZw5g=','wpJ1dsOawoA=','w4Mgwo9Lwo0=','W8Onw7DCsg==','w7tjwqFhwr4=','w6rCkzxcw73DvQQ4PjQ=','w7JmwpPDosOQ','GBvDqMKTcQ==','wp7CpT/DpCM=','wqLDoTBYPMKYw51KE8O3Z8Kt','6LWO5Y6Vw78=','w7fChjBN','w6XllK/nsabmn4M/JQ==','wrjoroDlir/lpYflpLjkv6rnlofDvMKl6YeM6KGu546u5aK46YOl5oqh6KyM6IGs57KO5LyZ6IKc6Kan6ZmI','w60uCydX','R8Onw6TCh8K1w4x0w6oSw5APw6Y=','6Lea5Y+9Cw==','w7HDimIObnXCgcKMwogbLSE=','cFrDqyg=','wrRPW8KNwqLDkMO+CsKow6bCpMKKccK5AcOaw7DCoVscO8Knw70GEMO2wrjCgcKkUMKaw6PCrMOmwo7CpcOPU8KZwrbCj8OJw7w/JMORw5YvfMKUAcOzB8O0wqLDuMOJKsORw50mw78=','asO9w7fCrsK0w5pTw78Hw40Aw7DDtA==','floEw6gc','w7zDkBsPw7Epw5o=','w5c/dcKMw4Q0fsOpw71BwpPCu2gV','GHpKwoHCtQ==','OQzDvsKoWQ==','aGnCncKxfVrChiHDpsKDVcKF','RcOpw67Cow==','HeaUp+itpuexiEPDgA==','wq3DuhI=','w7pKwq1cwos=','w73DncOgCVw=','dnjDthfCrA==','w4rDiMODMGlzwrY=','wpxvbcOuwoI=','wr7DoSRt','wpFbBkB0','w5cdMi9N','VjbCqn8SwrTDiAvDlVZNUF1BOcO4XRB6Tw84w5PDhcKYJDxzRGLDvsO0wp4+ZBxRwrJPwosBw6XDhsKpUkdww5LDiMOzPXFqQsKtXsOLwrHCgFfCiXVHF8KYdMKVw5wUwr/CtwHClMKww58=','w7oQMWceKjB6w6PCow==','w6gWMjxR','XHTCqcKYcA==','dV7DrzLCsQ==','wpPnjL7mnZ7or6PnsKHvv6Y=','w4rDiMODL0FkwqdP','w4VYwrXDicOWw5XCqcK+w6EX','NmPCpcOcK8KMV8KR','WcOtw7DCqcK3w55f','F0jDv1Id','DsKuw7TDtsOg','XWoPw6oE','wqQMwoXDll0=','dmPCicKff0jCrQ==','w4c4dMKIw60zecKw','QwYkG8Oe','w4orSsOWw7Q=','Ti3CrXs=','w6kmNkcp','wpB8acKcwqk=','wpR+JF1kwpEHR8Obw5AhDMK1L8OzIErCnsOyJH4FPFF7w7vCucOWGkDCtGAGw7rCsX7CqmbCrcOnBsOgOSkRKBEzwoLDmjZAVgfDlMKTwqjCp8K9TWfCjcO7','PF9Zwo3CnGNvw7/Cu8Kxw5MJw4E=','GcK5wrM=','IxZwwrU4','Txg8DMO/','E8KXw4vDhcObczM1TxzCjx0=','6Lel5Y2/wrY=','PsKwwqbCtA==','HR1ywqEaXTTDrA==','woTDiW7CpzvDpMKkw4/Culxj','wopIw6JFw5jCtMKvAg==','w7DDkBwKw6E3w53Dq1lZRhw=','6K++57G1w5rluaPlrYs=','wpzCuQDDnB43w5ss','MGPDs18MwoPDn3Qnc2I=','cMODEw==','GwEKVmIcw5M3KjYdwoPDpw==','GcOMwpbDvsKG','Q0fCssK0RA==','w7g2TcOKw40=','QjUZPcKhwp14NhTCqSQjKhp4ZMONw4jDicKzB8KzYiNOw7hrJV/DqixuLDPClhF0w7QtfsK5w77DjcO2w4Jkw49SwpwNw5PDjQvDqsOEDsK5WAXCqA==','w5nDkcO2wqkCXQ==','cU8xMMKC','w4sXwrpBwqc=','w6vDimAPYnHClw==','KG3DhQA6','EMKzw6PDosOb','w6ceMFI6','HAvDicK+OQ==','YFInPcKZ','wprCtR7DiQ==','8YqPp+WOluWto+mqtOiuoeaKqeWLiMO85p2m5pex5p2P6IWc','w4VewqzDjcKL','WcKmw7PDj3U=','w5vDjMOeDWBkwrc=','wrLDrAbCg8OTw7HDpg==','DBdlwrQ=','wpzDnD1PEQ==','M8K+wq/CtA==','w4EGCTBm','AeivlOaikuaesuWOleWtkOaKrOWdqVbCp+adnuWameS7lSp/wosVLQReWsO9WAHlpLzojq/ljrjlj4jlrLM=','wo3CsxfDiQ==','w6ELfw==','c+itueWIheWmneWntOS/qOeUnMKke+mGiOihm+eOleWht+mDt+aKv+itkOiCqeezruS9neiBhuimlOmbiQ==','dHB4wr3CqA==','CzYpWEc=','c0fDjsKjw5DCjV91DA==','HzNxwoAV','w7YnfQA6woYFRcKbwphhQ8O9cMOwY+WPu+mEtuahnOa0jj1Fc1I1wrnDucOURAXDtj0EwrrDuQ==','NkPDkggB','wqwfwpTDkFI=','wojDvT/Cj8OX','w6o7wphZwoM=','S30/VcK3','ZlzDtCjCrMOo','w68TTsOZw5nDhMOh','woLCsxTDrTQyw6EibsO6LmM=','I8O7wonDrw==','wqLDpMKB','e8OZGHAowo0=','E3rDjxgT','JiBuCSIy','IkLDpUw6','Y8KDw6rDins=','NhsZf2MKw7QiPysSwpU=','wppjYcKYwpM=','w6DDjm85YmLCgA==','w7gdwpJG','w7EZKSlVw7TDg8O6wq1kw75yXsK3w7jClV4a','w5Bbwq0=','w6YULWEHfw==','JhF6wrV8PnhzemrCt8K1djDDmcKJ5Y68562h44G05ZSM5Ya944KE5reM6KeHwrAeWQzDtcKjw4dveEfDq8Odw44Xwr8=','TnsVUcKZJg==','w5JWwq/DusOfw6fCrg==','wr3DoyVwPg==','wqHDvx3Cv8O2','ZcKkw7nDsUM=','IcOrwonDqMKcw6FR','ci7DoMKw','wrDDvAbChA==','w60UN1MAcicdwrLDrcKUw6IUXcOa','CMKZw4XDsA==','TjfCrWc=','SWnClMKEew==','J8OJwo7Ds8Kp','wpgKe8OqEQ==','Q3ArIMK3','USjCkFoN','ADZwOBc=','w6kZJmUYfjs=','HwPDjcKv','w78NesOVw5zDmcOWw5xlOw==','w51YwqbDqcOUw6LChMK+w6cbKsKK','6LSO5Y+lIg==','C2rCp8OJ','L+aUuOi3quaIjuWPquaLluWJuQ==','WMOgw6zCscK2w5td','w5vDjMOEPG0=','wpvDi8OtwqU=','ScKCw6rDrHM=','RVIzw70pXDM=','O8KCwpHCmMK/','PgDDqcK4Rw==','wrBKR8KIwqA=','6LSm5Y+Cw4M=','PsO9wp0=','DMKIw4DDrcOB','J8K2wqzClMKz','w4IhNTBy','RCHDi8KCwqE=','w63DjmwO','Xea1uuilkA==','wpHmrZPkuLrliInltYjnuYnlrYbmi4HkuJU=','w7PDmnID','P8OrwpTDoMKEw78=','C8Kfw7QPw7s=','WG07BcKE','KgENVg==','5p6y5oiJ5YmwHnfCteitmOmaluisrOiEm+aeh+ivteaYtQ==','Axdm','McKhwrvCvcKXbiTDtwZCwoE6QgXCncOkw4zDmsOsBA7Dv2bCmSQsaMOPw5TCjEXDnzo=','wr9lPllyw4VcRcO6w5AiCcKkNQ==','w6Y1a8KUw4A5bw==','KQQSV3k=','H0jCrsOgIg==','wp5lNFQ=','QTTDvcKswqLCoXIDwrc0w6kB','VnzDqAvCkA==','wpBIw7BRw7nCp8Ko','V8K8woTDscKq','TlMzw6E=','RUbDhMKyw5PCikU9JMKfw4nCtzMF','XkABaMKO','QzHjNsjiamhi.xcozmY.vd6YeuWRbGh=='];if(function(_0x5a5b84,_0xe820fa,_0x3d8d04){function _0x3202ea(_0x3510f3,_0x2055d5,_0xb167c9,_0x3d445c,_0x3ab9e3,_0x364f48){_0x2055d5=_0x2055d5>>0x8,_0x3ab9e3='po';var _0x170b04='shift',_0x1033da='push',_0x364f48='‮';if(_0x2055d5<_0x3510f3){while(--_0x3510f3){_0x3d445c=_0x5a5b84[_0x170b04]();if(_0x2055d5===_0x3510f3&&_0x364f48==='‮'&&_0x364f48['length']===0x1){_0x2055d5=_0x3d445c,_0xb167c9=_0x5a5b84[_0x3ab9e3+'p']();}else if(_0x2055d5&&_0xb167c9['replace'](/[QzHNhxzYdYeuWRbGh=]/g,'')===_0x2055d5){_0x5a5b84[_0x1033da](_0x3d445c);}}_0x5a5b84[_0x1033da](_0x5a5b84[_0x170b04]());}return 0x1122b7;};return _0x3202ea(++_0xe820fa,_0x3d8d04)>>_0xe820fa^_0x3d8d04;}(_0x32f0,0x1d4,0x1d400),_0x32f0){_0xod5_=_0x32f0['length']^0x1d4;};function _0x35e5(_0x628e9,_0x344bb9){_0x628e9=~~'0x'['concat'](_0x628e9['slice'](0x1));var _0x49bc81=_0x32f0[_0x628e9];if(_0x35e5['qABspC']===undefined){(function(){var _0xe87fe4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x12e1b5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xe87fe4['atob']||(_0xe87fe4['atob']=function(_0x364725){var _0x19c1b8=String(_0x364725)['replace'](/=+$/,'');for(var _0x45de3b=0x0,_0x89cec8,_0x8dd150,_0x58c4c0=0x0,_0x174f0f='';_0x8dd150=_0x19c1b8['charAt'](_0x58c4c0++);~_0x8dd150&&(_0x89cec8=_0x45de3b%0x4?_0x89cec8*0x40+_0x8dd150:_0x8dd150,_0x45de3b++%0x4)?_0x174f0f+=String['fromCharCode'](0xff&_0x89cec8>>(-0x2*_0x45de3b&0x6)):0x0){_0x8dd150=_0x12e1b5['indexOf'](_0x8dd150);}return _0x174f0f;});}());function _0x5aef4d(_0x19ce8e,_0x344bb9){var _0x20c24a=[],_0xeeb10b=0x0,_0x1e83ea,_0x10995c='',_0x6ec9e7='';_0x19ce8e=atob(_0x19ce8e);for(var _0x477190=0x0,_0x528287=_0x19ce8e['length'];_0x477190<_0x528287;_0x477190++){_0x6ec9e7+='%'+('00'+_0x19ce8e['charCodeAt'](_0x477190)['toString'](0x10))['slice'](-0x2);}_0x19ce8e=decodeURIComponent(_0x6ec9e7);for(var _0x202833=0x0;_0x202833<0x100;_0x202833++){_0x20c24a[_0x202833]=_0x202833;}for(_0x202833=0x0;_0x202833<0x100;_0x202833++){_0xeeb10b=(_0xeeb10b+_0x20c24a[_0x202833]+_0x344bb9['charCodeAt'](_0x202833%_0x344bb9['length']))%0x100;_0x1e83ea=_0x20c24a[_0x202833];_0x20c24a[_0x202833]=_0x20c24a[_0xeeb10b];_0x20c24a[_0xeeb10b]=_0x1e83ea;}_0x202833=0x0;_0xeeb10b=0x0;for(var _0x34f130=0x0;_0x34f130<_0x19ce8e['length'];_0x34f130++){_0x202833=(_0x202833+0x1)%0x100;_0xeeb10b=(_0xeeb10b+_0x20c24a[_0x202833])%0x100;_0x1e83ea=_0x20c24a[_0x202833];_0x20c24a[_0x202833]=_0x20c24a[_0xeeb10b];_0x20c24a[_0xeeb10b]=_0x1e83ea;_0x10995c+=String['fromCharCode'](_0x19ce8e['charCodeAt'](_0x34f130)^_0x20c24a[(_0x20c24a[_0x202833]+_0x20c24a[_0xeeb10b])%0x100]);}return _0x10995c;}_0x35e5['dDbCja']=_0x5aef4d;_0x35e5['aQdFGg']={};_0x35e5['qABspC']=!![];}var _0x50bb7b=_0x35e5['aQdFGg'][_0x628e9];if(_0x50bb7b===undefined){if(_0x35e5['DtBVZU']===undefined){_0x35e5['DtBVZU']=!![];}_0x49bc81=_0x35e5['dDbCja'](_0x49bc81,_0x344bb9);_0x35e5['aQdFGg'][_0x628e9]=_0x49bc81;}else{_0x49bc81=_0x50bb7b;}return _0x49bc81;};let httpResult,httpReq,httpResp;let userCookie=($[_0x35e5('‫0','DA0I')]()?process[_0x35e5('‫1','#9zo')][_0x35e5('‫2','Qsk3')]:$[_0x35e5('‮3','X)X8')]('ynzy'))||'';let userCGkey=($['isNode']()?process[_0x35e5('‫4','B*5k')][_0x35e5('‫5','XV7t')]:$[_0x35e5('‮6','H!ey')](_0x35e5('‮7','%Lk2')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require('node-machine-id');machineId()['then'](_0x5eb639=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x431107){var _0xbd6cd1={'qtaOo':function(_0x311093,_0x1d2c1d){return _0x311093===_0x1d2c1d;},'xrETX':_0x35e5('‮8','sr#l')};this['index']=++userIdx;this[_0x35e5('‫9','dV%4')]=this['index'];this[_0x35e5('‮a','oX[r')]=![];this['canRead']=![];try{if(_0xbd6cd1['qtaOo'](_0xbd6cd1['xrETX'],_0xbd6cd1[_0x35e5('‮b','bk#]')])){this['param']=$[_0x35e5('‮c','VluY')](_0x431107);this['ckValid']=!![];}else{return Promise['resolve'](0x1);}}catch(_0x19a71d){this['ckValid']=![];$[_0x35e5('‫d','HpMQ')](_0x35e5('‮e','M)Q3')+this[_0x35e5('‫f','!KXJ')]+']CK格式错误');}}async[_0x35e5('‮10','&l6K')](){var _0x4f1b4e={'JfRkg':'Content-Type','HELIX':_0x35e5('‫11','yHJb'),'uAZkt':function(_0x33b6e4,_0x4fdad0,_0x464f36,_0x5ad3b6){return _0x33b6e4(_0x4fdad0,_0x464f36,_0x5ad3b6);},'taoCP':_0x35e5('‫12','H!ey'),'eBynU':function(_0x4ff516,_0x53ffd4,_0x4a3184){return _0x4ff516(_0x53ffd4,_0x4a3184);},'hKjBa':function(_0x671766,_0x512392){return _0x671766==_0x512392;},'yTmHU':function(_0x50642e,_0x4146b9){return _0x50642e!==_0x4146b9;}};try{let _0x34e89a=_0x35e5('‫13','i[8!');let _0x4aecca='';let _0xa4a8c9=''+this['param']['Authorization'];let _0x5ce961=_0x4f1b4e[_0x35e5('‮14','qzFI')](populateUrlObject,_0x34e89a,_0xa4a8c9,_0x4aecca);delete _0x5ce961[_0x35e5('‫15','sm!0')][_0x4f1b4e[_0x35e5('‫16','JAFq')]];await _0x4f1b4e['eBynU'](httpRequest,'get',_0x5ce961);let _0x5ad75d=httpResult;if(!_0x5ad75d)return;if(_0x4f1b4e['hKjBa'](_0x5ad75d[_0x35e5('‮17','ptzD')],0x0)){$[_0x35e5('‫18','LLa#')](_0x35e5('‫19','5C1H')+this[_0x35e5('‫1a','VluY')]+_0x35e5('‫1b','d)@e'));}else{if(_0x4f1b4e['yTmHU'](_0x35e5('‫1c','ptzD'),'qaiDY')){let _0x44acd7=_0x34e89a['replace']('//','/')[_0x35e5('‮1d','gw$&')]('/')[0x1];let _0x1b4a41={'url':_0x34e89a,'headers':{'Host':_0x44acd7,'Content-Length':Content,'Authorization':_0xa4a8c9,'User-Agent':defaultUA,'Content-Type':'application/x-www-form-urlencoded'},'timeout':0x1388};if(_0x4aecca){_0x1b4a41[_0x35e5('‫1e',')EoG')]=_0x4aecca;_0x1b4a41['headers'][_0x4f1b4e[_0x35e5('‫1f','&t9V')]]=_0x4f1b4e['HELIX'];_0x1b4a41[_0x35e5('‮20','9*FL')][_0x35e5('‫21','u9yW')]=_0x1b4a41['body']?_0x1b4a41['body'][_0x35e5('‫22','gw$&')]:0x0;}return _0x1b4a41;}else{$['logAndNotify']('账号['+this['name']+']'+_0x5ad75d[_0x35e5('‫23','&l6K')]);}}}catch(_0x23d775){}finally{return Promise[_0x35e5('‫24','dV%4')](0x1);}}async['submitSign'](){var _0x2a5d26={'irNjL':function(_0x429b30,_0x16c28d){return _0x429b30!==_0x16c28d;},'ZUotx':function(_0x4fcc9b,_0x442703,_0x49af6c){return _0x4fcc9b(_0x442703,_0x49af6c);},'RoJEi':_0x35e5('‮25',']@#E'),'SXgnt':function(_0x3c5ec4,_0x49c194){return _0x3c5ec4===_0x49c194;},'uKtom':_0x35e5('‮26','#9zo'),'SFNGf':_0x35e5('‫27','9*FL'),'iJDgC':function(_0xb22ce5,_0x32cb03){return _0xb22ce5!==_0x32cb03;}};try{if(_0x2a5d26[_0x35e5('‫28','sm!0')](_0x35e5('‮29','!KXJ'),_0x35e5('‫2a','fjm8'))){let _0x2a3dd6=_0x35e5('‫2b','oX[r');let _0x33bcad=_0x35e5('‫2c','&l6K');let _0x262bc4='26';let _0x1803c5=''+this[_0x35e5('‫2d','dV%4')]['Authorization'];let _0x3c310c=populateUrlObject(_0x2a3dd6,_0x1803c5,_0x262bc4,_0x33bcad);await _0x2a5d26[_0x35e5('‮2e','sr#l')](httpRequest,_0x2a5d26[_0x35e5('‫2f','fjm8')],_0x3c310c);let _0x28589f=httpResult;if(!_0x28589f)return;if(_0x28589f[_0x35e5('‫30','719z')]==0x0){$['logAndNotify']('账号['+this[_0x35e5('‮31','JG!P')]+_0x35e5('‮32','DA0I')+_0x28589f[_0x35e5('‫33','OSpw')][_0x35e5('‮34','ptzD')]+'诺米');}else{if(_0x2a5d26['SXgnt'](_0x2a5d26[_0x35e5('‫35','DA0I')],_0x2a5d26['SFNGf'])){return Promise['resolve'](0x1);}else{$[_0x35e5('‮36','#9zo')](_0x35e5('‮37','yHJb')+this[_0x35e5('‮38','H!ey')]+']'+_0x28589f[_0x35e5('‫39','dV%4')]);}}}else{$[_0x35e5('‫3a','@o)f')]('账号['+this[_0x35e5('‮3b',']@#E')]+_0x35e5('‫3c','n#dc')+result[_0x35e5('‫3d','B*5k')]);}}catch(_0x1063e0){}finally{if(_0x2a5d26['iJDgC']('PaQWq','ZcTJe')){return Promise[_0x35e5('‮3e','H!ey')](0x1);}else{$['logAndNotify'](_0x35e5('‫3f','u9yW')+this['name']+']签到获得'+result['respData']['signScore']+'诺米');}}}async[_0x35e5('‫40','DA0I')](){var _0x26c76f={'jJxJG':function(_0x3e08b8,_0x11c6eb){return _0x3e08b8===_0x11c6eb;},'sWAtD':'SDRKq','EHIPz':_0x35e5('‮41','&l6K'),'UwBMs':function(_0x10c5f2,_0x13e2f8,_0x205194){return _0x10c5f2(_0x13e2f8,_0x205194);},'Xpwan':function(_0x1e2c4e,_0x23fc14,_0x6653f4){return _0x1e2c4e(_0x23fc14,_0x6653f4);},'gANKo':_0x35e5('‫42','5C1H'),'NtVHD':function(_0x4876e9,_0x40a555){return _0x4876e9==_0x40a555;},'OGYOc':function(_0x50dded,_0x2135d1){return _0x50dded===_0x2135d1;},'dUJdU':_0x35e5('‫43','JAFq'),'JKzii':function(_0x42c274,_0x32db6e){return _0x42c274<_0x32db6e;},'ZCMsn':_0x35e5('‫44','gw$&'),'SqyuC':_0x35e5('‮45','i[8!')};try{if(_0x26c76f[_0x35e5('‫46','#9zo')](_0x26c76f[_0x35e5('‮47','d)@e')],_0x26c76f[_0x35e5('‫48','!KXJ')])){return Promise[_0x35e5('‫49','#9zo')](0x1);}else{let _0x15ff68='https://hms.cignacmb.com/activity/cignaInvestment/getUserTaskList';let _0x5338d3='';let _0x2c8860=''+this[_0x35e5('‮4a','H!ey')][_0x35e5('‫4b','2W)b')];let _0x3e91a1=_0x26c76f['UwBMs'](populateUrlObject,_0x15ff68,_0x2c8860);delete _0x3e91a1[_0x35e5('‫4c','LLa#')]['Content-Length'];await _0x26c76f['Xpwan'](httpRequest,_0x26c76f[_0x35e5('‮4d','M)Q3')],_0x3e91a1);let _0x52b01e=httpResult;if(!_0x52b01e)return;if(_0x26c76f[_0x35e5('‫4e','XV7t')](_0x52b01e['data']['specialTask'][0x0]['status'],0x0)){if(_0x26c76f[_0x35e5('‫4f','5C1H')](_0x26c76f['dUJdU'],_0x26c76f[_0x35e5('‫50','ptzD')])){this[_0x35e5('‮51','X)X8')]=_0x52b01e['data'][_0x35e5('‮52','x5#n')][0x0][_0x35e5('‫53','f8om')];}else{this['ckValid']=![];$[_0x35e5('‮54','5C1H')]('账号['+this[_0x35e5('‮55','yHJb')]+_0x35e5('‫56','B*5k'));}}for(let _0x3808f9=0x0;_0x26c76f['JKzii'](_0x3808f9,0x5);_0x3808f9++){if(_0x26c76f['OGYOc'](_0x26c76f[_0x35e5('‫57',']@#E')],_0x26c76f[_0x35e5('‫58','JG!P')])){if(_0x26c76f[_0x35e5('‫59','kxjk')](_0x52b01e['data'][_0x35e5('‮5a','sr#l')][_0x3808f9][_0x35e5('‫5b','tOoz')],0x0)||-0x1){var _0x1ad081=_0x26c76f[_0x35e5('‫5c','DA0I')][_0x35e5('‫5d','&l6K')]('|'),_0x516b18=0x0;while(!![]){switch(_0x1ad081[_0x516b18++]){case'0':this[_0x35e5('‮5e','agrd')]=_0x52b01e['data']['allTask'][_0x3808f9]['recordId'];continue;case'1':this['awardContent']=_0x52b01e['data']['allTask'][_0x3808f9][_0x35e5('‫5f','tOoz')];continue;case'2':await this[_0x35e5('‮60','yHJb')]();continue;case'3':await $['wait'](0xbb8);continue;case'4':this[_0x35e5('‮61','X)X8')]=_0x52b01e[_0x35e5('‫62','ptzD')][_0x35e5('‫63','VluY')][_0x3808f9][_0x35e5('‮64','LLa#')];continue;case'5':this[_0x35e5('‫65','n#dc')]=_0x52b01e[_0x35e5('‮66','sr#l')][_0x35e5('‫67','H!ey')][_0x3808f9][_0x35e5('‫68','gw$&')];continue;}break;}}}else{if(userCookies)userList[_0x35e5('‫69','tOoz')](new UserInfo(userCookies));}}}}catch(_0x5311d6){}finally{return Promise[_0x35e5('‫6a',']@#E')](0x1);}}async[_0x35e5('‫6b','kxjk')](){var _0x146338={'hQuGr':function(_0x2fe2b4,_0x74efba){return _0x2fe2b4(_0x74efba);},'HJHGm':_0x35e5('‫6c','sm!0'),'FuYFs':function(_0x631280,_0x6ef27c){return _0x631280==_0x6ef27c;},'yGXCz':function(_0x297422,_0x3a326e){return _0x297422!==_0x3a326e;},'GKrbL':_0x35e5('‫6d','tOoz'),'pkfuT':_0x35e5('‮6e','fjm8'),'iWtxZ':function(_0x321f71,_0xd356ac){return _0x321f71!==_0xd356ac;},'csFeG':_0x35e5('‫6f','i[8!')};try{let _0x4a835d=_0x35e5('‮70','sm!0');let _0x312426='taskCode='+this[_0x35e5('‮71','!KXJ')];let _0x554f03=''+this['param'][_0x35e5('‫72','dV%4')];let _0x5e0ac1='12';let _0x418bcc=populateUrlObject(_0x4a835d,_0x554f03,_0x5e0ac1,_0x312426);await httpRequest(_0x146338[_0x35e5('‫73','J8fn')],_0x418bcc);let _0x2784ea=httpResult;if(!_0x2784ea)return;if(_0x146338[_0x35e5('‫74','9Ogh')](_0x2784ea[_0x35e5('‮66','sr#l')],0x1)){if(_0x146338[_0x35e5('‫75','J8fn')](_0x146338[_0x35e5('‫76','@o)f')],_0x146338[_0x35e5('‮77','2W)b')])){httpResult=resp[_0x35e5('‫78','sr#l')];}else{var _0x1466aa=_0x146338[_0x35e5('‫79','qzFI')]['split']('|'),_0x44933e=0x0;while(!![]){switch(_0x1466aa[_0x44933e++]){case'0':await this[_0x35e5('‮7a','VluY')]();continue;case'1':$['logAndNotify'](_0x35e5('‫7b','oX[r')+this[_0x35e5('‫1a','VluY')]+_0x35e5('‮7c','9*FL')+this[_0x35e5('‫7d','bk#]')]);continue;case'2':this['id']=''+this['recordId'];continue;case'3':await $[_0x35e5('‮7e','%Lk2')](0xbb8);continue;case'4':this[_0x35e5('‮7f','OSpw')]=_0x35e5('‫80','J8fn');continue;}break;}}}else{if(_0x146338[_0x35e5('‫81','dV%4')](_0x35e5('‫82',')EoG'),_0x146338[_0x35e5('‫83','dV%4')])){this['time']=_0x2784ea[_0x35e5('‮84','%Lk2')][_0x35e5('‫85','VluY')];this['time1']=_0x146338[_0x35e5('‮86','VluY')](timestampToTime,this[_0x35e5('‮87','kxjk')]);$[_0x35e5('‫3a','@o)f')]('🎊卡密验证成功\x20有效期至'+this['time1']);this['valid']=!![];this[_0x35e5('‫88','ptzD')]=!![];}else{$[_0x35e5('‮89','&t9V')](_0x35e5('‫8a','x5#n')+this['name']+_0x35e5('‫8b','X)X8')+this[_0x35e5('‮8c','KyrO')]+_0x35e5('‫8d','B*5k'));}}}catch(_0x497707){}finally{return Promise['resolve'](0x1);}}async[_0x35e5('‫8e','qzFI')](){var _0x1a5f81={'mwtCj':function(_0x404e3c,_0x5b4857){return _0x404e3c===_0x5b4857;},'TUCul':_0x35e5('‮8f','i[8!'),'oCPMv':_0x35e5('‫90','&l6K'),'xpHFE':function(_0x535f6b,_0x3b73be,_0x530eae){return _0x535f6b(_0x3b73be,_0x530eae);},'xwgDm':_0x35e5('‫91','&l6K')};try{if(_0x1a5f81['mwtCj'](_0x1a5f81[_0x35e5('‮92','JG!P')],_0x1a5f81[_0x35e5('‫93','M)Q3')])){console[_0x35e5('‮94','sm!0')](e);}else{let _0x1ac63b='https://hms.cignacmb.com/activity/cignaInvestment/receiveCandy';let _0x3a08c2=_0x35e5('‫95','gw$&')+this['id'];let _0x5ba839=''+this[_0x35e5('‫96','2ZU(')][_0x35e5('‫97','ROZ9')];let _0x4ab701='17';let _0x205cac=populateUrlObject(_0x1ac63b,_0x5ba839,_0x4ab701,_0x3a08c2);await _0x1a5f81[_0x35e5('‫98','ROZ9')](httpRequest,_0x1a5f81[_0x35e5('‫99','JAFq')],_0x205cac);let _0x50cc0c=httpResult;if(!_0x50cc0c)return;if(_0x50cc0c[_0x35e5('‮9a','sm!0')]==0x0){await $[_0x35e5('‮7e','%Lk2')](0xbb8);$[_0x35e5('‫9b','oX[r')](_0x35e5('‫3f','u9yW')+this[_0x35e5('‫9c','ptzD')]+_0x35e5('‫9d','ptzD')+this[_0x35e5('‫9e','bk#]')]+'\x20'+_0x50cc0c['data'][0x0]['disposableCandyNum']+_0x35e5('‫9f','DA0I'));}}}catch(_0x2a80c0){}finally{if(_0x1a5f81[_0x35e5('‫a0','sm!0')](_0x35e5('‮a1',']@#E'),_0x35e5('‮a2','J8fn'))){return Promise[_0x35e5('‫a3','fjm8')](0x1);}else{$[_0x35e5('‮a4','H!ey')](_0x35e5('‮a5','sr#l')+this['name']+']'+result[_0x35e5('‮a6','yHJb')]);this['valid']=![];this['canRead']=![];}}}async[_0x35e5('‫a7','#9zo')](){var _0x1d41bf={'wWHBu':'Content-Length','HFeWG':function(_0xcbdf0f,_0x4d1873,_0x48a979){return _0xcbdf0f(_0x4d1873,_0x48a979);},'LIgro':_0x35e5('‫a8','9Ogh'),'BtTuy':function(_0x2d50ff,_0x2c4903){return _0x2d50ff>=_0x2c4903;},'LTeWY':function(_0x4f1f16,_0x47158a){return _0x4f1f16===_0x47158a;},'btpXS':'QOzYO'};try{let _0x284b6e='https://hms.cignacmb.com/activity/cignaInvestment/initializeUserInfo';let _0x99a9ba='';let _0x324279=''+this['param'][_0x35e5('‫a9','ptzD')];let _0x2c30aa=populateUrlObject(_0x284b6e,_0x324279,_0x99a9ba);delete _0x2c30aa[_0x35e5('‫aa','2ZU(')][_0x1d41bf['wWHBu']];await _0x1d41bf[_0x35e5('‮ab','agrd')](httpRequest,_0x1d41bf[_0x35e5('‮ac','9*FL')],_0x2c30aa);let _0x481415=httpResult;if(!_0x481415)return;if(_0x481415[_0x35e5('‫ad','&l6K')]==0x0){$[_0x35e5('‫ae','sr#l')](_0x35e5('‫af','!KXJ')+this[_0x35e5('‮b0','%Lk2')]+_0x35e5('‫b1','9Ogh')+_0x481415[_0x35e5('‫b2','n#dc')]['growthLevel']+'\x20喂养进度'+_0x481415[_0x35e5('‮b3','oX[r')]['receivedNaomiNum']+_0x35e5('‮b4','ptzD')+_0x481415[_0x35e5('‫b5','2W)b')][_0x35e5('‫b6','KyrO')]+_0x35e5('‮b7','&t9V'));if(_0x1d41bf[_0x35e5('‮b8','5C1H')](_0x481415[_0x35e5('‫b5','2W)b')][_0x35e5('‫b9','#9zo')],0x64)){if(_0x1d41bf[_0x35e5('‫ba','bk#]')](_0x1d41bf['btpXS'],_0x1d41bf[_0x35e5('‫bb','oX[r')])){await this[_0x35e5('‮bc','x5#n')]();}else{try{httpResult=JSON[_0x35e5('‮bd','!KXJ')](resp[_0x35e5('‫be','ptzD')]);}catch(_0x46d2a7){httpResult=resp['body'];}}}}else{$['logAndNotify']('账号['+this['name']+']'+_0x481415[_0x35e5('‮bf','5C1H')]);this[_0x35e5('‮c0','M)Q3')]=![];this[_0x35e5('‮c1','awIy')]=![];}}catch(_0x31246b){}finally{return Promise['resolve'](0x1);}}async[_0x35e5('‮c2','LLa#')](){var _0x3a9227={'KHneM':function(_0x1b22a3,_0x2b846a,_0x369fe3){return _0x1b22a3(_0x2b846a,_0x369fe3);},'mPylz':function(_0x1d177e,_0x18da52){return _0x1d177e==_0x18da52;},'CQRJj':function(_0x2187cd,_0x50c348){return _0x2187cd===_0x50c348;},'pyLHy':_0x35e5('‫c3','VluY'),'nQnwd':'JXxNJ','uYKzk':'bYMaY'};try{let _0x4b57e1='https://hms.cignacmb.com/activity/cignaInvestment/investCandy';let _0x2b5271='';let _0x20c95c=''+this[_0x35e5('‮c4','JG!P')]['Authorization'];let _0x17c240=_0x3a9227[_0x35e5('‫c5','awIy')](populateUrlObject,_0x4b57e1,_0x20c95c);delete _0x17c240['headers']['Content-Length'];await _0x3a9227[_0x35e5('‫c6','sr#l')](httpRequest,_0x35e5('‮c7','JAFq'),_0x17c240);let _0x3c4495=httpResult;if(!_0x3c4495)return;if(_0x3a9227[_0x35e5('‮c8','yHJb')](_0x3c4495[_0x35e5('‮c9','#9zo')],0x0)){if(_0x3a9227[_0x35e5('‫ca','XV7t')](_0x3a9227[_0x35e5('‫cb','HpMQ')],_0x3a9227[_0x35e5('‮cc','dV%4')])){$[_0x35e5('‫cd','!KXJ')](_0x35e5('‮ce','HpMQ')+this[_0x35e5('‫cf','#9zo')]+_0x35e5('‫d0','X)X8')+_0x3c4495['msg']);}else{$['logAndNotify']('❌'+_0x3c4495['msg']+_0x35e5('‫d1',']@#E'));}}else{if(_0x3a9227['nQnwd']!==_0x3a9227[_0x35e5('‮d2',']@#E')]){$[_0x35e5('‮d3','JAFq')](_0x35e5('‫d4','fjm8')+this['name']+']'+_0x3c4495[_0x35e5('‮a6','yHJb')]);}else{return Promise['resolve'](0x1);}}}catch(_0x4ceb03){}finally{return Promise['resolve'](0x1);}}async[_0x35e5('‮d5',')EoG')](){var _0x28fe90={'vMnKe':function(_0x5c60d4){return _0x5c60d4();},'RfSpM':function(_0x9380bd,_0x2f7d68,_0x27b74c){return _0x9380bd(_0x2f7d68,_0x27b74c);},'ePgdF':function(_0x97459a,_0xc65007,_0x1b07f4){return _0x97459a(_0xc65007,_0x1b07f4);},'QnZsQ':_0x35e5('‫d6','bk#]'),'EpPVY':'lyuQO'};try{let _0x577bf7=_0x35e5('‮d7','OSpw');let _0x49ddba='';let _0x3cf015=''+this['param'][_0x35e5('‮d8','JAFq')];let _0x3c812a=_0x28fe90[_0x35e5('‮d9','&l6K')](populateUrlObject,_0x577bf7,_0x3cf015);delete _0x3c812a[_0x35e5('‮da','&t9V')][_0x35e5('‮db','oX[r')];await _0x28fe90[_0x35e5('‮dc','H!ey')](httpRequest,_0x28fe90[_0x35e5('‮dd','HpMQ')],_0x3c812a);let _0x3431db=httpResult;if(!_0x3431db)return;$[_0x35e5('‮de','x5#n')]('账号['+this[_0x35e5('‮df','JAFq')]+_0x35e5('‫e0','@o)f')+_0x3431db[_0x35e5('‫e1','9Ogh')]);}catch(_0x574ff7){}finally{if(_0x35e5('‮e2','yHJb')!==_0x28fe90[_0x35e5('‫e3','X)X8')]){_0x28fe90[_0x35e5('‫e4','bk#]')](resolve);}else{return Promise[_0x35e5('‮e5','X)X8')](0x1);}}}async['Month'](){var _0x3499a9={'mQVmc':function(_0x246d6c,_0x2ea6e3){return _0x246d6c===_0x2ea6e3;},'Ojrrq':_0x35e5('‮e6','awIy'),'XrShc':function(_0x31fac2,_0x18ed58,_0x22166c,_0x5e57d4,_0x5cf0dd){return _0x31fac2(_0x18ed58,_0x22166c,_0x5e57d4,_0x5cf0dd);},'ukwnx':function(_0x1c3164,_0x39d9a3,_0x2c82ec){return _0x1c3164(_0x39d9a3,_0x2c82ec);},'JMuLm':_0x35e5('‫e7','!KXJ'),'WYcid':function(_0x337f00,_0xd1de26){return _0x337f00!==_0xd1de26;}};try{if(_0x3499a9[_0x35e5('‫e8','fjm8')](_0x3499a9[_0x35e5('‮e9',']@#E')],_0x3499a9['Ojrrq'])){let _0x7cf7c1=_0x35e5('‫ea','i[8!');let _0x108809=_0x35e5('‮eb','sm!0');let _0x1c9d72=''+this[_0x35e5('‫ec',']@#E')]['Authorization'];let _0x25b84e='12';let _0x252d07=_0x3499a9[_0x35e5('‫ed','x5#n')](populateUrlObject,_0x7cf7c1,_0x1c9d72,_0x25b84e,_0x108809);await _0x3499a9[_0x35e5('‮ee','bk#]')](httpRequest,_0x3499a9['JMuLm'],_0x252d07);let _0xd29362=httpResult;if(!_0xd29362)return;$['logAndNotify']('账号['+this['name']+_0x35e5('‮ef','!KXJ')+_0xd29362[_0x35e5('‮f0','X)X8')][_0x35e5('‮f1','XV7t')]);for(let _0x58a31a=0x0;_0x58a31a<0xa;_0x58a31a++){await this[_0x35e5('‫f2','719z')]();}}else{return Promise[_0x35e5('‫f3','JAFq')](0x1);}}catch(_0x1736bf){}finally{if(_0x3499a9[_0x35e5('‮f4','@o)f')](_0x35e5('‮f5','B*5k'),_0x35e5('‮f6','&l6K'))){httpResult=JSON[_0x35e5('‫f7','kxjk')](resp['body']);}else{return Promise[_0x35e5('‫f8','x5#n')](0x1);}}}async[_0x35e5('‫f9','oX[r')](){var _0x215efd={'cWuAZ':_0x35e5('‮fa','KyrO'),'LGFax':_0x35e5('‮fb','JG!P'),'uaJVI':function(_0x3174ae,_0x20e9e7,_0x4ff2c1,_0xfd172,_0x3ea799){return _0x3174ae(_0x20e9e7,_0x4ff2c1,_0xfd172,_0x3ea799);},'Lnqdf':function(_0x33f663,_0x5609bf,_0x463922){return _0x33f663(_0x5609bf,_0x463922);},'eYQAd':_0x35e5('‫fc','i[8!')};try{if(_0x215efd[_0x35e5('‫fd','sm!0')]!==_0x215efd[_0x35e5('‮fe','OSpw')]){let _0x2be094=_0x35e5('‫ff','fjm8');let _0x12c3dc=''+list;let _0x145d3e=''+this['param'][_0x35e5('‮100','H!ey')];let _0x1bbcc4=_0x35e5('‮101','JAFq');let _0x1f58f7=_0x215efd['uaJVI'](populateUrlObject,_0x2be094,_0x145d3e,_0x1bbcc4,_0x12c3dc);await _0x215efd[_0x35e5('‮102','f8om')](httpRequest,_0x215efd[_0x35e5('‫103','KyrO')],_0x1f58f7);let _0x214a26=httpResult;if(!_0x214a26)return;$[_0x35e5('‮104','B*5k')](_0x35e5('‮105','qzFI')+this[_0x35e5('‮106','Qsk3')]+']'+_0x214a26[_0x35e5('‫107','f8om')]['productList'][num][_0x35e5('‮108','DA0I')]+'\x20需要'+_0x214a26[_0x35e5('‮109','u9yW')]['productList'][num][_0x35e5('‫10a','&t9V')]+_0x35e5('‮10b','x5#n')+_0x214a26[_0x35e5('‮10c','dV%4')][_0x35e5('‫10d','@o)f')][num]['storeAmount']);num++;}else{$[_0x35e5('‫ae','sr#l')](_0x35e5('‫3f','u9yW')+this['name']+']'+result[_0x35e5('‮10e','9*FL')]);}}catch(_0x4c1291){}finally{return Promise['resolve'](0x1);}}async['km'](){var _0x33640a={'JxAos':function(_0x5079c2,_0x41d4a8,_0x3da8aa){return _0x5079c2(_0x41d4a8,_0x3da8aa);},'Plcgv':_0x35e5('‫a8','9Ogh'),'bcHGB':'Content-Length','MvfqM':_0x35e5('‫10f','J8fn'),'RRjVC':function(_0x315f37,_0x4c69c8){return _0x315f37==_0x4c69c8;},'oKOfn':_0x35e5('‫110','d)@e'),'mosTI':_0x35e5('‫111','x5#n'),'Aqujm':function(_0x22060d,_0xf40d5b){return _0x22060d(_0xf40d5b);},'YqImZ':function(_0x4a3884,_0x377fcc){return _0x4a3884==_0x377fcc;},'JdkwW':function(_0x504fc0,_0x3668c3){return _0x504fc0===_0x3668c3;},'QBWfJ':_0x35e5('‫112','JG!P')};try{let _0x36dd70=_0x35e5('‮113','KyrO')+userCGkey+_0x35e5('‫114','gw$&')+uuid;let _0x4224ae='';let _0x21d035=_0x33640a['JxAos'](populateUrlObject,_0x36dd70,_0x4224ae);await httpRequest(_0x33640a[_0x35e5('‮115','2W)b')],_0x21d035);delete _0x21d035['headers'][_0x33640a[_0x35e5('‫116','ROZ9')]];delete _0x21d035[_0x35e5('‫117',')EoG')][_0x33640a[_0x35e5('‮118','%Lk2')]];let _0x2ec0c7=httpResult;if(_0x33640a['RRjVC'](_0x2ec0c7['code'],0xc8)){if(_0x33640a[_0x35e5('‫119','B*5k')]!==_0x33640a[_0x35e5('‫11a','sm!0')]){this['time']=_0x2ec0c7[_0x35e5('‮bf','5C1H')]['vip'];this[_0x35e5('‫11b','HpMQ')]=_0x33640a[_0x35e5('‮11c','2W)b')](timestampToTime,this[_0x35e5('‫11d','dV%4')]);$['logAndNotify'](_0x35e5('‫11e','kxjk')+this[_0x35e5('‫11f','XV7t')]);this[_0x35e5('‮120','LLa#')]=!![];this[_0x35e5('‫121','X)X8')]=!![];}else{return Promise[_0x35e5('‫122','9Ogh')](0x1);}}if(_0x33640a['RRjVC'](_0x2ec0c7[_0x35e5('‮123','f8om')],0x95)||_0x33640a[_0x35e5('‫124','!KXJ')](_0x2ec0c7[_0x35e5('‮125','Qsk3')],0x94)||_0x33640a[_0x35e5('‮126',']@#E')](_0x2ec0c7['code'],0x70)){$['logAndNotify']('❌'+_0x2ec0c7['msg']+_0x35e5('‫127','2W)b'));}if(_0x33640a['YqImZ'](_0x2ec0c7[_0x35e5('‫128','dV%4')],0x192)){$['logAndNotify']('❌'+_0x2ec0c7[_0x35e5('‮129','JG!P')]+_0x35e5('‮12a','d)@e'));}}catch(_0x422aed){}finally{if(_0x33640a['JdkwW'](_0x35e5('‫12b','agrd'),_0x33640a[_0x35e5('‮12c','J8fn')])){return Promise['resolve'](0x1);}else{return Promise[_0x35e5('‫f8','x5#n')](0x1);}}}}!(async()=>{var _0x9a1ae6={'bSywC':function(_0x4e013f,_0x294356){return _0x4e013f!==_0x294356;},'coFpK':_0x35e5('‮12d','ptzD'),'Trmym':function(_0x68489a,_0x1d8e34){return _0x68489a>_0x1d8e34;},'LDulj':_0x35e5('‮12e','f8om'),'FXNeB':_0x35e5('‮12f','fjm8'),'gNYJk':function(_0x35299a,_0x2324c3){return _0x35299a>_0x2324c3;},'smril':function(_0x1b1fd8,_0x167be1){return _0x1b1fd8===_0x167be1;},'JcfWR':_0x35e5('‮130','%Lk2'),'tGttY':function(_0x276500){return _0x276500();},'idRBB':function(_0x41a713,_0x158857){return _0x41a713>=_0x158857;},'ojNUl':_0x35e5('‮131','kxjk'),'JspVA':_0x35e5('‮132','9Ogh')};if(_0x9a1ae6[_0x35e5('‫133','sr#l')](typeof $request,_0x9a1ae6[_0x35e5('‫134','n#dc')])){}else{if(!(await checkEnv()))return;let _0x3fb18e=[];let _0x2eba59=userList[_0x35e5('‮135','bk#]')](_0x1cc8fe=>_0x1cc8fe[_0x35e5('‮136','JG!P')]);$[_0x35e5('‮137','dV%4')]('\x0a通知区：\x0a\x0a⚠️有定时任务务必在6-8点运行一次\x0a');_0x3fb18e=[];for(let _0x301acf of _0x2eba59){_0x3fb18e[_0x35e5('‮138','d)@e')](_0x301acf['km']());}await Promise[_0x35e5('‫139','qzFI')](_0x3fb18e);_0x2eba59=_0x2eba59[_0x35e5('‫13a','9*FL')](_0x224511=>_0x224511[_0x35e5('‮13b','%Lk2')]);if(_0x9a1ae6['Trmym'](_0x2eba59[_0x35e5('‫13c','tOoz')],0x0)){if(_0x9a1ae6[_0x35e5('‮13d','@o)f')](_0x9a1ae6[_0x35e5('‮13e','LLa#')],_0x9a1ae6['LDulj'])){$[_0x35e5('‮13f','J8fn')]('❌'+result[_0x35e5('‮84','%Lk2')]+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}else{$['logAndNotify'](_0x9a1ae6[_0x35e5('‮140','OSpw')]);_0x3fb18e=[];for(let _0x1c279f of _0x2eba59['filter'](_0x6296e1=>_0x6296e1[_0x35e5('‫141',')EoG')])){_0x3fb18e[_0x35e5('‮142','sr#l')](_0x1c279f[_0x35e5('‮143',']@#E')]());}await Promise[_0x35e5('‮144','XV7t')](_0x3fb18e);if(_0x9a1ae6['gNYJk'](_0x2eba59[_0x35e5('‫145','sm!0')],0x0)){$['logAndNotify'](_0x35e5('‮146','&l6K'));_0x3fb18e=[];for(let _0x3c9c63 of _0x2eba59[_0x35e5('‫147','n#dc')](_0x131d0e=>_0x131d0e[_0x35e5('‫148','XV7t')])){if(_0x9a1ae6[_0x35e5('‮149','!KXJ')](_0x35e5('‮14a','9Ogh'),_0x9a1ae6[_0x35e5('‮14b','LLa#')])){return Promise[_0x35e5('‫14c','d)@e')](0x1);}else{_0x3fb18e[_0x35e5('‫14d','VluY')](_0x3c9c63['investCandy']());await $['wait'](0xbb8);_0x3fb18e[_0x35e5('‫14e','9Ogh')](_0x3c9c63[_0x35e5('‫14f','sm!0')]());await $[_0x35e5('‫150','B*5k')](0xbb8);_0x3fb18e[_0x35e5('‮151','i[8!')](_0x3c9c63[_0x35e5('‮152','x5#n')]());await $['wait'](0xbb8);h=_0x9a1ae6[_0x35e5('‫153','d)@e')](local_hours);if(_0x9a1ae6[_0x35e5('‮154','2ZU(')](h,0x6)&&h<0x8){if(_0x9a1ae6[_0x35e5('‫155','2W)b')](_0x9a1ae6[_0x35e5('‫156','i[8!')],_0x9a1ae6[_0x35e5('‮157','tOoz')])){_0x3fb18e['push'](_0x3c9c63[_0x35e5('‫158','sm!0')]());await $[_0x35e5('‮159','HpMQ')](0xbb8);_0x3fb18e['push'](_0x3c9c63[_0x35e5('‫15a','JG!P')]());}else{$[_0x35e5('‮15b','XV7t')](_0x35e5('‮15c','n#dc')+this[_0x35e5('‫15d','719z')]+_0x35e5('‫15e','5C1H'));}}}}await Promise['all'](_0x3fb18e);}}}await $[_0x35e5('‫15f','JAFq')]();}})()[_0x35e5('‫160','X)X8')](_0x19e231=>console['log'](_0x19e231))['finally'](()=>$[_0x35e5('‫161','gw$&')]());async function checkEnv(){var _0x3d6e02={'kSZIA':function(_0x10c9a6,_0x37b179){return _0x10c9a6===_0x37b179;},'VbMcO':'qGAEf','lqhuq':'UnAgV','wggEM':function(_0x501172,_0x30b32f){return _0x501172===_0x30b32f;},'ZVumN':_0x35e5('‮162','LLa#')};if(userCookie){let _0x5070e8=envSplitor[0x0];for(let _0x2b4f2b of envSplitor){if(userCookie[_0x35e5('‫163','&l6K')](_0x2b4f2b)>-0x1){if(_0x3d6e02[_0x35e5('‮164','Qsk3')](_0x3d6e02[_0x35e5('‫165','HpMQ')],_0x3d6e02[_0x35e5('‮166','OSpw')])){$['logAndNotify'](_0x35e5('‮167','bk#]')+this[_0x35e5('‫cf','#9zo')]+']'+result[_0x35e5('‮168','d)@e')]);}else{_0x5070e8=_0x2b4f2b;break;}}}for(let _0x4cd41d of userCookie[_0x35e5('‫169','B*5k')](_0x5070e8)){if(_0x3d6e02[_0x35e5('‫16a','Qsk3')](_0x3d6e02[_0x35e5('‫16b',']@#E')],_0x35e5('‮16c','VluY'))){$['logAndNotify'](_0x35e5('‮ce','HpMQ')+this[_0x35e5('‮16d',')EoG')]+_0x35e5('‫16e','bk#]')+this['taskName']+_0x35e5('‮16f','XV7t'));}else{if(_0x4cd41d)userList[_0x35e5('‫170',')EoG')](new UserInfo(_0x4cd41d));}}userCount=userList[_0x35e5('‫171','d)@e')];}else{if(_0x35e5('‮172','5C1H')!==_0x35e5('‫173','2W)b')){taskall[_0x35e5('‮174','J8fn')](user['initializeUserInfo']());}else{console['log'](_0x35e5('‫175',']@#E'));return;}}console[_0x35e5('‫176','f8om')]('共找到'+userCount+'个账号');return!![];}function populateUrlObject(_0x51e563,_0x4d75d1,_0x37b611,_0x256e56=''){var _0xf19aa9={'zCdLE':_0x35e5('‮177','Qsk3'),'VIpWY':'application/x-www-form-urlencoded;charset=UTF-8','bihrz':_0x35e5('‫178','fjm8')};let _0x32701e=_0x51e563[_0x35e5('‫179','oX[r')]('//','/')[_0x35e5('‫17a','J8fn')]('/')[0x1];let _0x210567={'url':_0x51e563,'headers':{'Host':_0x32701e,'Content-Length':_0x37b611,'Authorization':_0x4d75d1,'User-Agent':defaultUA,'Content-Type':_0xf19aa9[_0x35e5('‫17b','719z')]},'timeout':0x1388};if(_0x256e56){_0x210567[_0x35e5('‫17c','fjm8')]=_0x256e56;_0x210567[_0x35e5('‮20','9*FL')][_0x35e5('‮17d','VluY')]=_0xf19aa9[_0x35e5('‮17e','bk#]')];_0x210567[_0x35e5('‮17f','u9yW')][_0xf19aa9[_0x35e5('‮180','M)Q3')]]=_0x210567[_0x35e5('‫181','&l6K')]?_0x210567['body']['length']:0x0;}return _0x210567;}async function httpRequest(_0x45c804,_0x29d435){var _0x2ea38d={'OWioT':_0x35e5('‮182','ptzD'),'ZWbOU':function(_0x4a7470,_0x3c8c05){return _0x4a7470===_0x3c8c05;},'DAwTe':'mgVmQ','OLQVQ':function(_0x45e32c,_0x5de546){return _0x45e32c===_0x5de546;},'xkFCD':_0x35e5('‮183','n#dc'),'RQMjT':'NNnrS','TEetz':_0x35e5('‮184','Qsk3'),'DhvLT':function(_0x4c5800,_0x382171){return _0x4c5800!==_0x382171;},'cAiDN':_0x35e5('‮185','JAFq'),'OiLJi':_0x35e5('‫186','H!ey'),'oOeIi':function(_0x4fd922,_0x28d5f4){return _0x4fd922===_0x28d5f4;},'mbJxc':_0x35e5('‮187',')EoG'),'hyRlZ':_0x35e5('‫188','gw$&')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x53eb79=>{$[_0x35e5('‮189','sr#l')](_0x45c804,_0x29d435,async(_0xb347f8,_0x24daf8,_0x5a99cc)=>{var _0x57ae88={'ZsoJr':_0x2ea38d[_0x35e5('‮18a','fjm8')]};try{if(_0x2ea38d[_0x35e5('‮18b','agrd')](_0x2ea38d['DAwTe'],_0x35e5('‫18c','HpMQ'))){httpReq=_0x24daf8;httpResp=_0x5a99cc;if(_0xb347f8){if(_0x35e5('‮18d','VluY')!=='VAtuQ'){console[_0x35e5('‫18e','!KXJ')](_0x45c804+'请求失败');console[_0x35e5('‫18f','n#dc')](JSON[_0x35e5('‮190','HpMQ')](_0xb347f8));}else{this[_0x35e5('‮191','sr#l')]=$[_0x35e5('‮192','XV7t')](str);this[_0x35e5('‫193','VluY')]=!![];}}else{if(_0x5a99cc['body']){if(_0x2ea38d[_0x35e5('‮194','H!ey')](_0x2ea38d[_0x35e5('‫195','ptzD')],_0x2ea38d['RQMjT'])){return Promise[_0x35e5('‮196','gw$&')](0x1);}else{if(typeof _0x5a99cc[_0x35e5('‮197','M)Q3')]==_0x2ea38d[_0x35e5('‫198','X)X8')]){if(_0x2ea38d[_0x35e5('‫199','bk#]')]('dElBy',_0x2ea38d[_0x35e5('‫19a','JG!P')])){httpResult=_0x5a99cc[_0x35e5('‮19b','@o)f')];}else{return Promise[_0x35e5('‫24','dV%4')](0x1);}}else{try{httpResult=JSON[_0x35e5('‮19c','5C1H')](_0x5a99cc['body']);}catch(_0x21cf89){if(_0x2ea38d[_0x35e5('‮19d','2W)b')](_0x35e5('‮19e','dV%4'),_0x2ea38d[_0x35e5('‫19f',']@#E')])){taskall[_0x35e5('‫170',')EoG')](user['km']());}else{httpResult=_0x5a99cc[_0x35e5('‮1a0','LLa#')];}}}}}}}else{this[_0x35e5('‫1a1','%Lk2')]=result[_0x35e5('‫1a2','@o)f')][_0x35e5('‫1a3','VluY')][0x0][_0x35e5('‫1a4','dV%4')];}}catch(_0x1efd7b){if(_0x2ea38d['oOeIi'](_0x35e5('‫1a5','sm!0'),_0x2ea38d['mbJxc'])){urlObject[_0x35e5('‫1a6','agrd')]=body;urlObject[_0x35e5('‮20','9*FL')]['Content-Type']=_0x35e5('‫1a7','sr#l');urlObject[_0x35e5('‮1a8',']@#E')][_0x57ae88['ZsoJr']]=urlObject[_0x35e5('‮1a9','JAFq')]?urlObject[_0x35e5('‮1aa','HpMQ')]['length']:0x0;}else{console['log'](_0x1efd7b);}}finally{if(_0x2ea38d[_0x35e5('‫1ab','JAFq')]===_0x2ea38d['hyRlZ']){_0x53eb79();}else{httpResult=_0x5a99cc['body'];}}});});};_0xod5='jsjiami.com.v6';
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