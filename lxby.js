/*
联想百应 vx小程序

变量：捉包https://hms.cignacmb.com域名headars里的Authorization 多账号换行隔开
格式：export lxby="Authorization=Bearer_xxxxx"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("联想百应");
let envSplitor = ['\n'] //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 7.1.2; V2203A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4343 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/9296 MicroMessenger/8.0.27.2220(0x28001B59) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android' //换成自己的UA




var _0xod5='jsjiami.com.v6',_0xod5_=['‮_0xod5'],_0xedef=[_0xod5,'wq/CqwJPcMK0wrLCpMKhw5BMw7Yuw5PDvsKHw5jDocK0bQtowrRNwoMjHcKZLcOLYcOFYsKQb8OtSMKTw7zCtcKpw6IvFDbDssOqw7woGsKlwpJLw7Itwoo1wrZrWcO7QMO7wotlw4gyw5TDsMKBP8K+QS3CtzTDoxDCiMOjC8KgwoV+wqUjw7loAsOswrZZdSrCh8KzGg53HMOFYhkzwpYuwqlbMEPDkDbCocKMwobDvRfCiVJzQsOGC8ODwo7Cq2hlwpbDnSwlW8ORTsKAGXF3w7HCp8KDwroXAcOuwoUQI8KLwrfDqcObwqI0TT/CiXzCr0LCmEgww4zChwjCuC5Cw53DtmxEYlHCt1gawpdzXsKxHTJ6M8OBw71Mwrxdw53DoVVowo7Dv1vDssOkwqbClcO+w74iVsKscFFeZsKxwpfDqFV5w604w7p5woJew43DqMKewqIreX/DsMKKwrpsYUEDwoIqU8KrRcOBwrMEGG0+w5xfw7XCtMOqw7zClMKPQsONd8O/LMOoXWvCl8KGwp/DhMK6wo7Dh1FnwqRQK1J5C8K/w7QEw4kGwobDrw7DjsOxLsOtQAQnwrRKMA90e8OaYsOqN3jDmgxPwrECBMORwqbDmBHCk8Oawo5F','w7cFcxB1b8K7LcKLw6wiwofDpcOh','w5DCqBPDh2c=','wrB6w64=','w5kgRzZ3','Rm02w7TDuA==','woPDuDI5w4g=','w6vDs8OaWFA=','EsO3wq5PVQ==','VMKwwrUyHA==','A8OEHx9X','asKeEsKkw5A=','woENwow4RQ==','JsKzw4/DlcK1','Phccwold','wqXCrBvDjQ==','d8KfDcKkw5lUZMKYGsOBwrYx','w6rCrzHDqVgJFxg=','I8O/BApn','w7vCkiDDtHo=','emvDsMKAwqDDncON','N8O3w5zCmA==','w5DCtBjDsHoJFwQ=','wrl+w7cY','AsOXwqnDsA==','Z3pUwqdhYsOtacOZLsK2woM=','C8O8wofDg8O6','em8lw6TDoQ==','M8O+w4bCmyg=','PBrCpcOfwrA=','wpXCpRFS','FATCk0LClDjDpMKEw48TVMKE','C8Okw5nDsB4=','wrVww74E','wq3Cogg=','6KyU5rKf5aem6Le+','O8KWw4I=','IF/ClcKDLMOddQB5','wr3DpEMAw6Y=','OwfDsFHDoA/DncO4w6UNP8Kr','6LSo5Y+PNw==','ccO4eWc=','wq3lu6PpkbHmt67op6zkubHli73lt6vlr4Lmiac=','MsOzw4XCgD5ew74=','UMOKSkZA','w7fDt8KvCg==','ZcKKLsKjwrTCssKC','cmVHdjg=','b8KAK8K+','bgNUwrE=','BcOUwr1IVWbCncK9ew==','aGwkFQ==','bsKQGMKyw6pJbsKRIA==','Bw7CjGDClQ==','H8Okw5/Dog==','EsOZwrbDtMOz','IcKcAwnDnTVjw79rMcKHQg==','XOeageW+vuaKpeWKuQ==','JcKcw5bDkcKbw4rDhQ==','KcKSDSTDihJFw7V8M8KoVQ==','w6XDucKqAMKJEW1awrY=','L8OEwrrDn8Ot','E8O5wrPDssOL','NMKWw4HDmw==','AknCkcKdMA==','K2rCo8KpDw==','6Lee5Y28Jg==','YFkBw5c=','w5fnrJLli7fojJ7lvaY=','fBlDwqA=','VMOYQkHCuQ==','wrLCvgTDusKl','w7HCuQTDr1oWAQ==','6LaC5Y6HOw==','wr7nrqPli6fkuKDliKnltLjlrprmi5o=','wqV6w6kSXsORwqA=','wrHCrBdWUMKxwqDDvw==','w4HDqsOORMOc','w6IYwrPDmcKCenjDg8OFNcOmLcKtacO6DUrCiDjDv8O0w4Q6LcKUYsOZBsKjYg5ESmPDsG/DsVzCkGfDvcOyHsOYw4nDtcKbOVUHwqVzwqdzw61Yw4/CucO9w5gXcUrDl8KvZg8Tw5JC','BHsUwqpdJBcNw71RwqIdw4PCrD/DisKSIEZHwpNCXkZldVQAW3nDmsKGw7EkG8KKK8OWVzXCoh1owq3Dp8K8woZBwrHCvETDg8ONwp8Jw4o5wrAGYcKyw51ZbVPCg8K9FsKHwr/DqsOewqRYw71qU8ORw6d6QCgzCMOuFMOgw7HDv2PDu8OOwoc3wqVdw5M7dsKORsO0wogvwrJXw7LDpMOuw5HDuzAndSTDncO1JcOyQMOIwpFjDns=','wrXCogTDicKR','wojChhrDv8KP','bMOrwo7Ds0I=','YsKVwo/DkA==','e8O4YGM=','w7gZwo7DjQ==','ZMKrwr0ZKDbCs1knPmwS','wrrDnEATw7k=','w4EaaSVD','dcKhwqIaISPCog==','b2I8GMOOwrzDj8OMwpvDrAoo','VDZ5wp/ClA==','V8KWwoEzDw==','wpAMwroYVQ==','GxXCk3XCiG3Cr8OYw7ASSMKADFFew6kuw7AHw6t0w7PDsMKsw5U1PjvDglnCuVTDgsKsw6oTw6piZRvDq1TCgcOtwqMKFsKMw441w6NcwqLDhsOuwpPDuxDCqMK2wpIvScOAXsOow5jCisObw5c=','w4jDkcKrw60=','woMFwrY6cw==','dsOQcGrCjQ==','w73CiCHDpcON','SnkgDsOF','O8KWw4LDv8KZw5jDrhDCmUg9w6Y=','6LST5Y2GwqQ=','wpMLwqk+','ICDDig==','ecKGIsKi','w5AZDcKEwos=','8YK/oOWOvOWumemqkeisoeaJoOWKmjvmnojmlrfmnLHohYo=','aMKQFcKow5o=','w5/CpCPDnsOfIcOd','C8Oww5jDqw==','awlEwoTCgXZcwo4Mw5PDh8K0','AQTClGrClyHDpQ==','MMKcw5HDucKYw5PDhAzCoUgow6s=','wocFwq4r','w6guwpTDmcK4','ZV4Jw4vDtA==','wr9rw64NQcKdw6p7w71RwonCs8ONNCArD1LDihPDlBIIBQbCucKtwqjCpy1WUsOPwodhw6dAwqtjFTvCmMOgw6fCkUnDjRMjcxPCs8KpwoDCjD4MwoomPC7DnsKfwpLDoQ==','woxIwq46fsKjEXFSw6XDnRTCm3nDinM=','OTzDhn0z','W2p8dhI=','wp/DiF4zw7M=','wpAFwrI7bsK/GWE=','wp/DpBJucjnDuQ==','dsKbwoLDgQ==','wqZGw4MLeQ==','c8KfwpjDmkoEwqg=','wrtww708XMODwos7w7pQwoDCug==','6LSq5Y+6Cw==','Zm/DrsKK','fABFwrvCvXJawpIg','fMOsZnDCmHjDn8KPJw==','5q+R5rS76KWDwoHojpPlvJ0=','wrzDj1sgw48=','R2BffTLCl8OIKsO3','ZHkkBMOYw6XClMKwwo3DohE0w7IBwocgw7l5MjdoIF1xw6XCkxbDucOPWXjCr3QgwqZzf8Khw4rDoMKgwqzDgcOwC8KCXETCucOAwqbDi3PCicKow4w0','cyzDpMKAwqPDj8Obw7bCsx3CnwLDqg==','woXCqxdCb8KHwrrDrw==','IcK0DUJgC8ODwpPCtsKEfMKbwqlBS8OGw4sHw4nCiMKTVABawrzClMKZIsOp','SsO8XFHCkg==','w57DncKCP8Kz','NsK8w6LDscK6','J8OSEhs=','WW1Haw==','w7nDjH7DnAXDm8Odw49c','5q225rSn6KWfMOiMueW/vA==','wrHCoRrDn8KswpnCnsO/Yw==','IEjCiMKYJw==','w4PDg14hIwwI','MMKcw5HDssKYw5vDiRHCpE89w7A=','wp/Drgk=','XSLDsiDDlg==','PxzDo2DDvVHCvMK4w6EFOMKhwrQQDMKfOknDiQTCrcKIwrcBwq3CrsOnwrdewqfCosOvw5Zae3wgFU/CkMKyw6nCtxYDeMORZsOOOAQk','LMOOEwZ5','HsKNw4DDmcK6','RsOKbGDCmQ==','HgnDlWDDqg==','woHCqxxD','HsKhw7LDisK2','R0x3wrZH','6Lew5Y2GEw==','egvDiQA=','w7HDucK/Eg==','w4zCnw3DsMOmwrPCjsKK','I+eMqOacpg==','Y8KlwqUU','HDYWwqFXBxkLw7hO','bcO8Z23Cp23DlQ==','AsKpw4vDv8Kz','d8K9O8KUwps=','w47CoD7Do8OWNsOc','EBUPwpVB','acOcemVt','WH9NfBE=','w7PCsMO2w7E7','OcOsYWvCryY=','wqMAw6LDqWw=','RsKQwp3Dr2A=','BsOFwrBSdQ==','woEDwq0=','c8KtwrwQfA==','I8O3w5vCvjpcw78=','wpXCvMK7wrLDrA==','GcOawrt6b23CuMK3YcKWSlE=','wrvDgi8=','w6HorLrmoq/mnYnljp7lrLzmi6flnqVSw7rmn7XlmbHku7dSDcOuw7fCjsOgUMKWUEo45aWd6I+y5Y6Z5Y+Q5ay5','w5QTKMKSw4s=','VGNOaw==','w4zDuMOsdHITw7XDvsKtTU8R','wqPorKvliojlpprlpLLkvJ/nlYwfw6/phrvoob3nj6floJLpgKPmirror4jog5Pnsb7kvrTogbvop5vpmJQ=','wrTDniwt','wrltw70vXw==','MsOzw4bCgzNLw74=','P0TCgA==','w6/Dn1nDtDs=','NcO4w5HCiTlUw7XDpcO8','w5nCtBrDp8Oo','wq/DvxxrZQ==','w71Hw7ByMMONXSg2wqzDkgPClHbDi3Hlj4jph6bmop3mt4lBdX4YEMKcwoh1GEk2AMOtMMOp','wozCnRJAWQ==','wonDsVrCrRtNSV3CsFvClWXCvC7Chx/mlaLlur3kuJPli58YXSPCnsOGwqfCvsK4w4fDiCNoL8Kjw7o=','XcOUwojCk8OawpHCjVLDgAx2wrLDkMK2w5/DtOS5pOS7uOS8g+aBmVXCksKxw7lFwqlnUHvDmcOrKBJbw54=','w4bDh8OhQU8=','w7AGwq7DocKW','eF1jwpJv','wqjDkS18aw==','fHFTwq1qZsOp','w6XCtRvDtFMS','w5fDqcOAdcODJ8OS','EMOxwqRUcw==','wqsIfcOFAcKh','woABw7jDiQ==','JUrCi8KDJg==','OBvDpmwS','w4IjXjR5','UcKfwoLDnnc=','FybCh8OvwrfDl8KeDsKbw5tAMQ==','wqXCshNOVQ==','woTCrRRSecKq','w5rCjQbDkMOKwrzCjA==','w47DrMOlXMOY','w7bDq8OeccOk','b2YGFcOHwrbDnw==','P0TCgMKrLMOeUgl0wrTCvcKG','6LaS5Y6dRg==','wr/Dnywxw58=','AxTClG0=','ITzDinEzF8KeJm8I','a8KrwrY0IzHCiWUnOHgO','fcKaPMKv','N0rCjsKGO8O5dANjwrbCksKR','wr/DmUc6','wrHCvwDDisKWwpbClA==','w6LCsBs=','wq3CogjDrcKRwp7Cv8OicsOUwqlg','wrLCiClfUw==','wp7DohF+ZAI=','FsOUwrJpZGjCkg==','w5jDi8KGw7A=','HMOgw5/DjxTCrm1qPsOAa8O5','bWE8','GMOkw5/DoBM=','aH1OwqNqfMO1','IMOSGBs=','F0LClsKFIA==','bV9zViM=','5py15oun5YikQcKAO+ith+mbuOiuueiEr+afr+itl+aYjg==','c8OtfElE','wqTDjkYdw48=','QsKGPMK/wp0=','wqIAwr4tSA==','S8KbGsKzw6s=','6Lal5YyrLA==','G8OUwrFe','HMObwrheeUbCkA==','w77Dj142Aw==','woQawrE2aQ==','wo7CoRZBaMKw','w7zDtsKvFsKl','IzLDgH0=','A8OUwrBSZQ==','JMKNw5fCjMKdw4/DjxE=','c8O2c0PCpX/DvsKSNlzCpcOa','a8KrwrY=','D8Ozw4HCvQY=','wpnDuw1maBPDvHbDq2fDl8KyU8KDCwQ=','MQHDllLDmA==','w5/CqiPDuMOfLsONOi3CjwIt','PzbDnXQ8I8KD','w4rCnATDq8Ob','wpYww7nDjU8=','w5MQdBQ8YsKgbcK3w7spwpPDosKlDyDCq8OFw6vDgRNPPAE=','wpoZwpwOVQ==','W8K4wpjDsVw=','wpUFwrkm','d8O8dWbCrmnDgw==','w4PDvsODcUY=','YGvDosKLwqnDmcOb','w6XDlF8eKA==','P07CicKNNsOS','CsOZwrrDkMOzw53CmGFsw5JVLQ==','U+etquWIkOiNteW+kQ==','UcOQwovDsw==','fcKeEMKvw40=','w4jDgcKSw6UPSwA=','w4RNwr0=','wprDpBlz','DsOTwrzDtcO4w4vCpQ==','JsO1w7fCiBQ=','NsKJw5XDksKew5/DgQvChE41wrDChcK2woXCozlvwoRZB8OSwrHCoRrDqC8TNcKbwqJgWw==','acKfworDkUMAwr4=','w7nDi8KMw70LRhHCn8Obw4Rfw7YTQg==','EQ7Cg3w=','dgXDgBw=','w5bDgcKMw64aQA==','wrnDkyIxw4TDgg==','w4/CgybDjsOM','LMKDFCTDmjJMw6R2N8KPFFPCrlPCtzTDkMKQw6PCnFQzw5/CmW8Xwp7DhMO2w5VlPg==','JMOwwrXDmMOV','Y8OAwpM=','YlcL','6K6g5rCq5aam6LS1','wqPDg1M=','BsOBwq5Sb27Cn8K+bA==','w4YfBMKY','GQfCol3Csw==','BgrCi3zCvA==','FMOHPg9b','M8OCw4nDjxY=','wqPCogvDlQ==','JcKcw5XDksKWw5/DhQ==','csKKwofDnFI=','w7rCgwbDtsOKwrPCnMOIwo7DrcORwqI=','RcOxfFbCgA==','JcKWBSzDliNe','wo0wwqoedA==','wq3Dg1Ar','ZGvDrcKIwrjDgw==','w6HCsxPDuQ==','w6YDwqA=','csK8woDDt1A=','bsKQC8Kyw5s=','NcKWw4HDhw==','bFcIw4s=','w5jDlWMhKx8=','EsOQwqhfYH3Clw==','wqPDlFYr','GhLCqWrCnzI=','wozDq183w5M=','w7TDlmjDi3vDlcOTw55RQkULfsOcw54=','w57CnMOUw5w=','w6kDwqnDncKULiPDgcOCJMO5OA==','JcOZwrPDpcO4w5fCoiNUw55dM8ObSw==','b8KbP8Kmw6Y=','w4QgXwxo','R0XDtsKAwpY=','w7vDucKmFg==','w7nDmGLDvDPDmcOW','R0vDscKFwoo=','TcKbwq7Dv0A=','wqrDghloag==','L8KcADE=','w6vCuRbDpFMSFw==','wpPCpMKDwrXDig==','wr96w7sZV8OVwrY=','JsOSEgc=','c8O8emXCv3M=','w5rChz7Do8ODwrTCjA==','w5fDqsO+RMOO','DsKwCBnDig==','RsKOCcKhwpQ=','LMO5w5LCrTFZw5XDr8OsbcO/aA==','6La85Y2OVw==','d8KfHcKkw4Y=','F8Oqw4zDqhXCnnxFB8Oe','fGIjAA==','w6rDksOYVF8=','WEgJw5fDvA==','wr7DhTwkw5TCjMKzNMOgCsKhCcO+FcKHNQgkw6/DjBhMwrV0w456w61QM8OjwpnCgghiLS/DhHHCsMKwwojChhtXTsOgw6nCtsKkw4vDnAnCpcOFAx5JwpvDvnEBOVdk','bsO/d3bCqQ==','wrDChDrDtsKY','UcKbGMKMw7I=','woAoWcOAPA==','wo7Cqx9ncsK8wp3DpMOgwpcawq8=','OhvDsA==','wobCpQxH','PcKSBTvDpz5Gw7Vx','I8KWw47Dm8KZ','esKQDcKg','w6YDwqDDqMKfJBnCg8OCNMOvJA==','6LaM5YyDw6o=','w5oLcAE=','Wueav+W+hOaJpeWLkg==','UcK0wrQQAQ==','6LW15Y+cwrw=','DueZkOW+suWnm+i1p8Ka6K+r5qKm5p+l5YyF6YSU','w4gfB8Kgw5RnwrDCmhVdwpTDiA==','6LWA5Y2BwoY=','w6QNwqrDjA==','w5QCD8KHw5Nvwps=','PA3DsmDCowrDv8O+w6cB','jnsjiamUExi.PrcgomrL.Wv6zKVNQ=='];if(function(_0x184521,_0x96ad93,_0x15a320){function _0x55c654(_0x2e2912,_0x1bf958,_0x48f695,_0x216af3,_0x16314c,_0x28c881){_0x1bf958=_0x1bf958>>0x8,_0x16314c='po';var _0x2184e3='shift',_0x13c494='push',_0x28c881='‮';if(_0x1bf958<_0x2e2912){while(--_0x2e2912){_0x216af3=_0x184521[_0x2184e3]();if(_0x1bf958===_0x2e2912&&_0x28c881==='‮'&&_0x28c881['length']===0x1){_0x1bf958=_0x216af3,_0x48f695=_0x184521[_0x16314c+'p']();}else if(_0x1bf958&&_0x48f695['replace'](/[nUExPrgrLWzKVNQ=]/g,'')===_0x1bf958){_0x184521[_0x13c494](_0x216af3);}}_0x184521[_0x13c494](_0x184521[_0x2184e3]());}return 0x11581a;};return _0x55c654(++_0x96ad93,_0x15a320)>>_0x96ad93^_0x15a320;}(_0xedef,0x143,0x14300),_0xedef){_0xod5_=_0xedef['length']^0x143;};function _0x448a(_0x1ae0f2,_0x2f1deb){_0x1ae0f2=~~'0x'['concat'](_0x1ae0f2['slice'](0x1));var _0x30fe0f=_0xedef[_0x1ae0f2];if(_0x448a['nQUIhe']===undefined){(function(){var _0x5911ce=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xe4ae6d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5911ce['atob']||(_0x5911ce['atob']=function(_0x448bec){var _0x3da3c0=String(_0x448bec)['replace'](/=+$/,'');for(var _0x3abfbe=0x0,_0x1cb41f,_0x48b8f0,_0x20b148=0x0,_0x453229='';_0x48b8f0=_0x3da3c0['charAt'](_0x20b148++);~_0x48b8f0&&(_0x1cb41f=_0x3abfbe%0x4?_0x1cb41f*0x40+_0x48b8f0:_0x48b8f0,_0x3abfbe++%0x4)?_0x453229+=String['fromCharCode'](0xff&_0x1cb41f>>(-0x2*_0x3abfbe&0x6)):0x0){_0x48b8f0=_0xe4ae6d['indexOf'](_0x48b8f0);}return _0x453229;});}());function _0x595957(_0x3f4f4c,_0x2f1deb){var _0x5a479a=[],_0x244293=0x0,_0x47b765,_0x59396e='',_0x2679d9='';_0x3f4f4c=atob(_0x3f4f4c);for(var _0x456f50=0x0,_0x9f016d=_0x3f4f4c['length'];_0x456f50<_0x9f016d;_0x456f50++){_0x2679d9+='%'+('00'+_0x3f4f4c['charCodeAt'](_0x456f50)['toString'](0x10))['slice'](-0x2);}_0x3f4f4c=decodeURIComponent(_0x2679d9);for(var _0xaa09ea=0x0;_0xaa09ea<0x100;_0xaa09ea++){_0x5a479a[_0xaa09ea]=_0xaa09ea;}for(_0xaa09ea=0x0;_0xaa09ea<0x100;_0xaa09ea++){_0x244293=(_0x244293+_0x5a479a[_0xaa09ea]+_0x2f1deb['charCodeAt'](_0xaa09ea%_0x2f1deb['length']))%0x100;_0x47b765=_0x5a479a[_0xaa09ea];_0x5a479a[_0xaa09ea]=_0x5a479a[_0x244293];_0x5a479a[_0x244293]=_0x47b765;}_0xaa09ea=0x0;_0x244293=0x0;for(var _0x3bfb9f=0x0;_0x3bfb9f<_0x3f4f4c['length'];_0x3bfb9f++){_0xaa09ea=(_0xaa09ea+0x1)%0x100;_0x244293=(_0x244293+_0x5a479a[_0xaa09ea])%0x100;_0x47b765=_0x5a479a[_0xaa09ea];_0x5a479a[_0xaa09ea]=_0x5a479a[_0x244293];_0x5a479a[_0x244293]=_0x47b765;_0x59396e+=String['fromCharCode'](_0x3f4f4c['charCodeAt'](_0x3bfb9f)^_0x5a479a[(_0x5a479a[_0xaa09ea]+_0x5a479a[_0x244293])%0x100]);}return _0x59396e;}_0x448a['AXPosh']=_0x595957;_0x448a['bFXQSg']={};_0x448a['nQUIhe']=!![];}var _0x5e581b=_0x448a['bFXQSg'][_0x1ae0f2];if(_0x5e581b===undefined){if(_0x448a['CrbiOJ']===undefined){_0x448a['CrbiOJ']=!![];}_0x30fe0f=_0x448a['AXPosh'](_0x30fe0f,_0x2f1deb);_0x448a['bFXQSg'][_0x1ae0f2]=_0x30fe0f;}else{_0x30fe0f=_0x5e581b;}return _0x30fe0f;};let httpResult,httpReq,httpResp;let userCookie=($[_0x448a('‫0','TNNg')]()?process['env']['lxby']:$[_0x448a('‮1','KtJm')](_0x448a('‮2','b39x')))||'';let userCGkey=($[_0x448a('‫3','GCc)')]()?process['env']['CGkey']:$['getdata'](_0x448a('‮4','b39x')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x448a('‫5','g*b5'));machineId()[_0x448a('‮6','PZf#')](_0x2d4608=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x52dd8e){var _0xa69d93={'pyTnB':_0x448a('‫7','oFm2'),'fYMBn':_0x448a('‫8','zU)('),'OErjF':function(_0x598e28,_0x8f5778){return _0x598e28===_0x8f5778;},'LaEJf':_0x448a('‮9','9zh^'),'RIdbk':_0x448a('‫a','YWV7'),'chhPa':function(_0x3cf918,_0x4daaeb){return _0x3cf918!==_0x4daaeb;},'CClQy':'grvpq','KaFfE':_0x448a('‮b','xZD3')};this['index']=++userIdx;this[_0x448a('‮c','f#Ou')]=this['index'];this['valid']=![];this[_0x448a('‫d','g*b5')]=![];try{if(_0xa69d93[_0x448a('‮e','xZD3')](_0xa69d93[_0x448a('‮f','5MFb')],_0xa69d93[_0x448a('‮10','mwrB')])){urlObject[_0x448a('‫11','ZDig')]=body;urlObject[_0x448a('‫12','k5at')][_0xa69d93[_0x448a('‫13','t18q')]]='application/json';urlObject[_0x448a('‮14','r)se')][_0xa69d93['fYMBn']]=urlObject[_0x448a('‮15','zSN5')]?urlObject[_0x448a('‫11','ZDig')][_0x448a('‫16','eafV')]:0x0;}else{this['param']=$['str2json'](_0x52dd8e);this[_0x448a('‫17','k4se')]=!![];}}catch(_0x61510e){if(_0xa69d93[_0x448a('‮18','q83^')](_0xa69d93[_0x448a('‮19','ZDig')],_0xa69d93[_0x448a('‮1a','smXR')])){this['ckValid']=![];$[_0x448a('‮1b','SYG#')](_0x448a('‮1c','g*b5')+this[_0x448a('‮1d','9zh^')]+']CK格式错误');}else{console['log'](_0x61510e);}}}async[_0x448a('‮1e','UvBn')](){var _0x5c42dd={'qfctb':function(_0x5be46e,_0x545c96,_0x32c23b){return _0x5be46e(_0x545c96,_0x32c23b);},'qIUZg':function(_0x4094a8,_0xb64185,_0x571838){return _0x4094a8(_0xb64185,_0x571838);},'lZgZS':_0x448a('‫1f','!PX2'),'OjaML':function(_0x45b7a4,_0x10ab2e){return _0x45b7a4==_0x10ab2e;},'bhBwv':_0x448a('‫20','*85G'),'GEJbI':'SSlwr','CNNsF':_0x448a('‫21','61py')};try{let _0x142cb3=_0x448a('‫22','BpRe');let _0x24242a='encryptData=pyvIz7uqhjeo3E5OmBirxMl%2Fc7BpdVKj5lQqQqlIxVupmQoWrt0btIF9vTJkL%2FRTfr1h8D9TY8I4%2FD%2Bl05oGK3ggnrm8sAynIaNRlS1XOV%2BGErXX2Pv6jn8F%2F4pRy87H2EKKNcTBa8aztmU0nUQx9rGR%2FQKKwb9su%2FdHb0nSqLSO8fiK51PD80%2Bgh59vCyFuU82Vogvf7LC2FcxJlBFGFg%3D%3D&iv=fIbsuYcURmSZNRvMk0mWfw%3D%3D&sessionKey=K%2FnXjqZ3pS8wNjMwgNfbog%3D%3D&openid=o2bfX5TqrCnoFpXK7j0BzYScfuyM&unionid=ot988vyP9t3czhnOoLAMtOCbi2yw&nickname=&encryptUserData=&qrCodeKey=&iv_user=&registerChannel=MICRO_STATION&is_enterprise=1&from=';let _0x213d16=_0x5c42dd[_0x448a('‫23','eafV')](populateUrlObject1,_0x142cb3,_0x24242a);await _0x5c42dd[_0x448a('‮24','pWFB')](httpRequest,_0x5c42dd['lZgZS'],_0x213d16);let _0x25f7fc=httpResult;if(!_0x25f7fc)return;if(_0x5c42dd[_0x448a('‮25','9zh^')](_0x25f7fc['code'],0xc8)){if(_0x5c42dd['bhBwv']===_0x5c42dd[_0x448a('‫26','fCr*')]){$[_0x448a('‮27','rIdz')]('❌'+_0x25f7fc[_0x448a('‮28','nY(6')]+'\x20请勿多处使用or重装环境造成请联系作者解除');}else{this['paasToken']=_0x25f7fc[_0x448a('‮29','rIdz')][_0x448a('‮2a','ZDig')];this[_0x448a('‫2b','R6Wn')]=_0x25f7fc[_0x448a('‮2c','9zh^')]['token'];$[_0x448a('‮2d','oFm2')](_0x448a('‮2e','PZf#')+this[_0x448a('‮2f','YWV7')]+_0x448a('‮30','#Pox'));}}else{if(_0x448a('‮31','#Pox')===_0x5c42dd['CNNsF']){$['logAndNotify'](_0x448a('‫32','k0&X')+this['name']+_0x448a('‮33','k0&X'));}else{$[_0x448a('‫34','20za')](_0x448a('‫35','zU)(')+this[_0x448a('‫36','oFm2')]+']登录失败\x20请检查变量');}}}catch(_0x4f012d){}finally{return Promise['resolve'](0x1);}}async[_0x448a('‫37','20za')](){var _0x2b99cf={'SReeC':_0x448a('‫38','nY(6'),'PbqSa':_0x448a('‫39','rIdz'),'uYHFO':'content-type','EimxY':'application/json','dVLlz':_0x448a('‫3a','YWV7'),'gBrtT':function(_0x4f367f,_0x3df7c4){return _0x4f367f===_0x3df7c4;},'Gyiad':_0x448a('‫3b','k5at'),'vgQgX':function(_0x18fb52,_0x1b93d3,_0x470ba1){return _0x18fb52(_0x1b93d3,_0x470ba1);},'qJjkB':_0x448a('‫3c','r)se'),'ANcFy':function(_0x42d7d2,_0x3d8170){return _0x42d7d2==_0x3d8170;},'xNWtL':'QQivw','rHwRL':function(_0x19eb2c,_0x11a2f4){return _0x19eb2c===_0x11a2f4;},'MaSXa':_0x448a('‫3d','YWV7'),'tWIVQ':function(_0x1f1d04,_0x29a288){return _0x1f1d04<_0x29a288;},'shsww':function(_0x197507,_0x5877d2){return _0x197507!==_0x5877d2;},'GSEqi':_0x448a('‮3e','61py'),'fXYma':_0x448a('‮3f','BpRe'),'mlmGc':_0x448a('‮40','*85G')};try{if(_0x2b99cf[_0x448a('‫41','KtJm')](_0x448a('‫42','#Pox'),_0x2b99cf[_0x448a('‮43','zSN5')])){let _0x1624f8='https://baiyingmalladmin.lenovo.com/api/v5/user/profile?is_profile=1';let _0x1b1109='';let _0x2c280e=''+this[_0x448a('‮44','9zh^')];let _0x103f72=populateUrlObject(_0x1624f8,_0x2c280e,_0x1b1109);await _0x2b99cf[_0x448a('‫45','%Lpb')](httpRequest,_0x2b99cf[_0x448a('‮46','R6Wn')],_0x103f72);let _0x53fd04=httpResult;if(!_0x53fd04)return;if(_0x2b99cf[_0x448a('‮47','Nv4N')](_0x53fd04[_0x448a('‮48','pWFB')][_0x448a('‫49','9zh^')][0x0][_0x448a('‮4a','k5at')],![])){if(_0x2b99cf[_0x448a('‫4b','zSN5')](_0x2b99cf[_0x448a('‫4c','k5at')],'fkntR')){return Promise[_0x448a('‫4d','xZD3')](0x1);}else{await $[_0x448a('‫4e','SYG#')](0x1388);await this[_0x448a('‫4f','k5at')]();}}else{$['logAndNotify']('账号['+this[_0x448a('‫50','r)se')]+']店铺关注任务已完成');}if(_0x53fd04[_0x448a('‫51','zU)(')][_0x448a('‮52','q9I*')][0x1][_0x448a('‮4a','k5at')]==![]){if(_0x2b99cf['rHwRL'](_0x448a('‮53','zU)('),_0x2b99cf['MaSXa'])){for(let _0xcb5209=0x0;_0x2b99cf[_0x448a('‫54','61py')](_0xcb5209,0xa);_0xcb5209++){if(_0x2b99cf[_0x448a('‫55','SYG#')](_0x2b99cf[_0x448a('‫56','hgi!')],_0x2b99cf['fXYma'])){await $[_0x448a('‫57','rIdz')](0x2710);await this[_0x448a('‮58','GCc)')]();}else{httpResult=JSON[_0x448a('‫59','UvBn')](resp[_0x448a('‮5a','r)se')]);}}}else{console[_0x448a('‮5b','pWFB')](method+_0x448a('‮5c','t18q'));console[_0x448a('‮5d','R6Wn')](JSON[_0x448a('‫5e','k0&X')](err));}}else{if(_0x2b99cf[_0x448a('‮5f','b39x')](_0x2b99cf['mlmGc'],_0x2b99cf['mlmGc'])){$[_0x448a('‮60','nY(6')](_0x448a('‫61','61py')+this[_0x448a('‮62','eafV')]+_0x448a('‫63','ywS8'));}else{let _0x468001=_0x1624f8[_0x448a('‮64','SYG#')]('//','/')['split']('/')[0x1];let _0x241ab5={'url':_0x1624f8,'headers':{'Host':_0x468001,'Connection':_0x2b99cf[_0x448a('‫65','5o1d')],'token':_0x2c280e,'Content-Length':ct,'content-type':'application/json','Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0x2b99cf['PbqSa'],'User-Agent':defaultUA},'timeout':0x1388};if(_0x1b1109){_0x241ab5[_0x448a('‮66','f#Ou')]=_0x1b1109;_0x241ab5[_0x448a('‮67','smXR')][_0x2b99cf['uYHFO']]=_0x2b99cf[_0x448a('‫68','#s4i')];_0x241ab5['headers'][_0x2b99cf['dVLlz']]=_0x241ab5[_0x448a('‮69','smXR')]?_0x241ab5[_0x448a('‫6a','s$(R')]['length']:0x0;}return _0x241ab5;}}}else{this[_0x448a('‮6b','KtJm')]=result[_0x448a('‮6c','!PX2')][_0x448a('‫6d','9zh^')];this[_0x448a('‫6e','GCc)')]=result[_0x448a('‫6f','UvBn')][_0x448a('‮70','zU)(')];$[_0x448a('‫71','ZDig')]('账号['+this['name']+_0x448a('‮72','5MFb'));}}catch(_0x308a18){}finally{return Promise[_0x448a('‫73','R6Wn')](0x1);}}async[_0x448a('‮74','ZDig')](){var _0x15fd5e={'IrgNp':function(_0x2b9f22,_0x51324d,_0x33b0ec){return _0x2b9f22(_0x51324d,_0x33b0ec);},'uOncV':'get','Qbvwr':function(_0x3c15d8,_0x59f03e){return _0x3c15d8!==_0x59f03e;},'BbJld':'bbPLi','KAVCr':function(_0x4a0322,_0x2c5c75){return _0x4a0322===_0x2c5c75;},'sskVZ':'vpcHg'};try{let _0x3ee84d='https://paas.lenovo.com.cn/event-promotion-server/event/dailyCheckIn';let _0x46ec83='';let _0x275b84=''+this[_0x448a('‮75','f#Ou')];let _0x38e282=populateUrlObject(_0x3ee84d,_0x275b84);await _0x15fd5e[_0x448a('‮76','zU)(')](httpRequest,_0x15fd5e[_0x448a('‮77','zU)(')],_0x38e282);let _0x1d90ba=httpResult;if(!_0x1d90ba)return;if(_0x1d90ba[_0x448a('‫78','R6Wn')]==0xc8){if(_0x15fd5e[_0x448a('‮79','k0&X')](_0x15fd5e['BbJld'],_0x448a('‮7a','k0&X'))){$['logAndNotify'](_0x448a('‮7b','mwrB')+this[_0x448a('‮7c','61py')]+_0x448a('‫7d','oFm2')+_0x1d90ba['data']['coins']+'积分');}else{taskall[_0x448a('‮7e','s$(R')](user['km']());}}else{if(_0x15fd5e[_0x448a('‫7f','eafV')](_0x15fd5e[_0x448a('‮80','pWFB')],'TAwRB')){return Promise[_0x448a('‮81','k5at')](0x1);}else{$[_0x448a('‫34','20za')](_0x448a('‮82','20za')+this['name']+_0x448a('‫83','t18q'));}}}catch(_0x2368f3){}finally{return Promise[_0x448a('‫84','r)se')](0x1);}}async[_0x448a('‫85','rIdz')](){var _0x1889bf={'jMAIU':'125','IKuSp':'post','YZqay':function(_0xad836d,_0xf4dda2){return _0xad836d==_0xf4dda2;},'YUcle':function(_0x4c9a8f,_0xd89712){return _0x4c9a8f===_0xd89712;},'uptAS':_0x448a('‮86','q83^')};try{let _0x3a7783=_0x448a('‮87','oFm2');let _0x4ac066=_0x448a('‮88','Nv4N');let _0x35a66a=''+this[_0x448a('‫89','pWFB')];let _0x2fa162=_0x1889bf['jMAIU'];let _0x2d3874=populateUrlObject(_0x3a7783,_0x35a66a,_0x2fa162,_0x4ac066);await httpRequest(_0x1889bf[_0x448a('‫8a','pWFB')],_0x2d3874);let _0x3d7723=httpResult;if(!_0x3d7723)return;if(_0x1889bf[_0x448a('‮8b','2MMh')](_0x3d7723[_0x448a('‫8c','5MFb')],0xc8)){this['ruId']=_0x3d7723[_0x448a('‮8d','eafV')][0x1][_0x448a('‫8e','oFm2')];await $['wait'](0x1388);await this[_0x448a('‫8f','#Pox')]();}}catch(_0x197746){}finally{if(_0x1889bf['YUcle'](_0x1889bf[_0x448a('‮90','b39x')],_0x1889bf[_0x448a('‮91','YWV7')])){return Promise[_0x448a('‮81','k5at')](0x1);}else{return Promise[_0x448a('‫92','#Pox')](0x1);}}}async[_0x448a('‮93','!PX2')](){var _0x466b67={'gfgGH':_0x448a('‫94','s$(R'),'iIdhF':function(_0x264b3e,_0x1cd6d4,_0x346153){return _0x264b3e(_0x1cd6d4,_0x346153);},'AMliw':function(_0x31ea14,_0x2a474b,_0x16c12a){return _0x31ea14(_0x2a474b,_0x16c12a);},'Ftpzn':'get','XpWPh':function(_0x5b7467,_0x5d3639){return _0x5b7467!==_0x5d3639;},'LQGiP':_0x448a('‫95','#Pox')};try{if(_0x466b67['gfgGH']===_0x466b67[_0x448a('‫96','%Lpb')]){let _0x527a2f=_0x448a('‮97','GCc)')+this[_0x448a('‫98','(s2O')];let _0x2ecf37='';let _0xae8c1e=''+this[_0x448a('‫99','%Lpb')];let _0xecc0ad=_0x466b67[_0x448a('‮9a','eafV')](populateUrlObject,_0x527a2f,_0xae8c1e);await _0x466b67[_0x448a('‮9b','8JSE')](httpRequest,_0x466b67[_0x448a('‫9c','!PX2')],_0xecc0ad);let _0x2de03d=httpResult;if(!_0x2de03d)return;if(_0x2de03d['code']==0xc8){$[_0x448a('‮9d','R6Wn')](_0x448a('‫9e','2MMh')+this['name']+']'+_0x2de03d[_0x448a('‮9f','%Lpb')][_0x448a('‫a0','DVVp')]+'获得'+_0x2de03d['data']['plusScore']+'积分');}}else{this[_0x448a('‫a1','smXR')]=result['msg']['vip'];this[_0x448a('‫a2','20za')]=timestampToTime(this['time']);$['logAndNotify'](_0x448a('‮a3','%Lpb')+this['time1']);this[_0x448a('‮a4','9zh^')]=!![];this[_0x448a('‮a5','8JSE')]=!![];}}catch(_0x16cd35){}finally{if(_0x466b67['XpWPh'](_0x466b67['LQGiP'],'PRPFB')){taskall[_0x448a('‮a6','UvBn')](user[_0x448a('‫a7','s$(R')]());}else{return Promise[_0x448a('‮a8','GCc)')](0x1);}}}async[_0x448a('‫a9','R6Wn')](){var _0x5c2675={'zMoHe':'134','lfVxs':function(_0x2a6273,_0x399bff,_0x74ebd7,_0x2e1800,_0x8d3261){return _0x2a6273(_0x399bff,_0x74ebd7,_0x2e1800,_0x8d3261);},'sccwd':function(_0x4f5995,_0x2547ae,_0x45ec84){return _0x4f5995(_0x2547ae,_0x45ec84);},'PdjaY':_0x448a('‫aa','%Lpb'),'kpsHi':function(_0x3cd0d3,_0x50ba3c){return _0x3cd0d3!==_0x50ba3c;},'qYYvK':_0x448a('‮ab','oFm2'),'xQuPs':_0x448a('‮ac','61py')};try{let _0x452f90=_0x448a('‫ad','r)se');let _0x5f2704=_0x448a('‮ae','%Lpb')+this['ruId']+'\x22:\x2210\x22,\x22page\x22:1,\x22size\x22:20,\x22shopPriceOrderType\x22:\x22\x22,\x22salesVolumeOrderType\x22:\x22\x22,\x22addTimeOrderType\x22:\x22\x22,\x22terminal\x22:\x22wx\x22}';let _0x3215c9=''+this[_0x448a('‮af','DVVp')];let _0x1bc0d6=_0x5c2675['zMoHe'];let _0x23f120=_0x5c2675[_0x448a('‮b0','#s4i')](populateUrlObject,_0x452f90,_0x3215c9,_0x1bc0d6,_0x5f2704);await _0x5c2675['sccwd'](httpRequest,_0x5c2675[_0x448a('‮b1','b39x')],_0x23f120);let _0xe5460a=httpResult;if(!_0xe5460a)return;if(_0xe5460a['code']==0xc8){let _0xf78d16=0x0;_0xf78d16++;this[_0x448a('‮b2','%Lpb')]=_0xe5460a['data'][_0xf78d16][_0x448a('‫b3','mwrB')];await $[_0x448a('‮b4','5MFb')](0x1388);await this['plusScore']();}}catch(_0x262249){}finally{if(_0x5c2675['kpsHi'](_0x5c2675[_0x448a('‮b5','r)se')],_0x5c2675['xQuPs'])){return Promise[_0x448a('‮b6','5MFb')](0x1);}else{$[_0x448a('‮b7','r)se')](_0x448a('‫b8','!PX2')+this[_0x448a('‮b9','xZD3')]+']第'+result['data'][_0x448a('‫ba','s$(R')][_0x448a('‮bb','eafV')]+_0x448a('‮bc','ywS8')+result['data']['plusScore'][_0x448a('‮bd','b39x')]+'积分');}}}async[_0x448a('‫be','#s4i')](){var _0x14b515={'UeHSY':function(_0x595dfd,_0x462e51,_0x2054c7,_0x356129,_0x4ac897){return _0x595dfd(_0x462e51,_0x2054c7,_0x356129,_0x4ac897);},'KEILn':function(_0xa55cb4,_0x368245,_0x2cf331){return _0xa55cb4(_0x368245,_0x2cf331);},'aEGOM':'post','lIkIt':function(_0x2fb309,_0x5a44a8){return _0x2fb309==_0x5a44a8;}};try{let _0x2bcedf=_0x448a('‫bf','!PX2');let _0x472fbb=_0x448a('‮c0','xZD3')+this[_0x448a('‮c1','rIdz')]+_0x448a('‮c2','5o1d')+this['goods_id']+'}';let _0x5d6f27=''+this['token'];let _0x2d5ca2='53';let _0x270978=_0x14b515[_0x448a('‫c3','eafV')](populateUrlObject,_0x2bcedf,_0x5d6f27,_0x2d5ca2,_0x472fbb);await _0x14b515[_0x448a('‫c4','f#Ou')](httpRequest,_0x14b515[_0x448a('‮c5','R6Wn')],_0x270978);let _0x59a713=httpResult;if(!_0x59a713)return;if(_0x14b515['lIkIt'](_0x59a713[_0x448a('‮c6','zSN5')],0xc8)){$['logAndNotify']('账号['+this[_0x448a('‮c7','#s4i')]+']第'+_0x59a713['data']['plusScore'][_0x448a('‫c8','g*b5')]+_0x448a('‫c9','nY(6')+_0x59a713[_0x448a('‫51','zU)(')][_0x448a('‫ca','pWFB')][_0x448a('‮cb','k0&X')]+'积分');}}catch(_0x78ae90){}finally{return Promise[_0x448a('‮cc','TNNg')](0x1);}}async[_0x448a('‮cd','R6Wn')](){var _0x203905={'hsexJ':function(_0x1ca0b8,_0x2ea045,_0x5e2ccf){return _0x1ca0b8(_0x2ea045,_0x5e2ccf);},'ItegM':function(_0x4580ba,_0x30c92f,_0x4ee758){return _0x4580ba(_0x30c92f,_0x4ee758);},'YSxbR':_0x448a('‫ce','mwrB'),'IaBpd':function(_0x5d5694,_0xf3c67a){return _0x5d5694==_0xf3c67a;},'UPnAD':function(_0x4dc119,_0x418ed7){return _0x4dc119===_0x418ed7;},'IXWtA':'uSygW','zRtSJ':_0x448a('‫cf','SSdZ')};try{let _0x548038=_0x448a('‫d0','nY(6');let _0x512ac3='';let _0x253d78=''+this['token'];let _0x203057=_0x203905[_0x448a('‮d1','zSN5')](populateUrlObject,_0x548038,_0x253d78);await _0x203905[_0x448a('‫d2','R6Wn')](httpRequest,_0x203905[_0x448a('‮d3','eafV')],_0x203057);let _0x13cc60=httpResult;if(!_0x13cc60)return;if(_0x203905[_0x448a('‮d4','nY(6')](_0x13cc60[_0x448a('‮d5','rIdz')],0xc8)){if(_0x203905['UPnAD'](_0x203905[_0x448a('‫d6','R6Wn')],_0x203905[_0x448a('‮d7','q9I*')])){$['logAndNotify'](_0x448a('‮d8','BpRe')+this[_0x448a('‮d9','SSdZ')]+']'+_0x13cc60[_0x448a('‫da','f#Ou')][_0x448a('‮db','k4se')][_0x448a('‮c','f#Ou')]+_0x448a('‮dc','5o1d')+_0x13cc60[_0x448a('‮dd','#Pox')][_0x448a('‫de','Nv4N')]+'积分');}else{return Promise[_0x448a('‮df','eafV')](0x1);}}}catch(_0x1e867e){}finally{if(_0x203905[_0x448a('‫e0','R6Wn')]('niiKq',_0x203905[_0x448a('‫e1','smXR')])){return Promise[_0x448a('‮b6','5MFb')](0x1);}else{return Promise[_0x448a('‫e2','8JSE')](0x1);}}}async['km'](){var _0x199fa4={'ufUZm':'未找到CK\x20请阅读脚本说明','osgrp':_0x448a('‮e3','Nv4N'),'YDGCs':_0x448a('‮e4','5o1d'),'dNnVd':function(_0x10cbba,_0xfe0ef6,_0x27ac04){return _0x10cbba(_0xfe0ef6,_0x27ac04);},'StiHH':'post','GjvZF':function(_0x503c58,_0x5d6b38){return _0x503c58==_0x5d6b38;},'ELloh':function(_0x57d1c8,_0x7b0a04){return _0x57d1c8(_0x7b0a04);},'pcHsq':function(_0x59dfe9,_0x2b1c4c){return _0x59dfe9==_0x2b1c4c;},'qmKmg':function(_0x7d34ed,_0x4de683){return _0x7d34ed!==_0x4de683;},'vEnEf':'bvnVY'};try{if(_0x199fa4[_0x448a('‮e5','#s4i')]!==_0x199fa4[_0x448a('‮e6','PZf#')]){let _0x4bbc46='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+_0x448a('‫e7','eafV')+uuid;let _0x4e1d4c='';let _0x5c97c7=_0x199fa4['dNnVd'](populateUrlObject,_0x4bbc46,_0x4e1d4c);await httpRequest(_0x199fa4[_0x448a('‫e8','ywS8')],_0x5c97c7);let _0x3ae547=httpResult;if(_0x199fa4[_0x448a('‫e9','5MFb')](_0x3ae547['code'],0xc8)){var _0x8ce507='0|3|1|4|2'[_0x448a('‮ea','KtJm')]('|'),_0x36e038=0x0;while(!![]){switch(_0x8ce507[_0x36e038++]){case'0':this['time']=_0x3ae547['msg'][_0x448a('‮eb','%Lpb')];continue;case'1':$[_0x448a('‮9d','R6Wn')](_0x448a('‮a3','%Lpb')+this[_0x448a('‫ec','#Pox')]);continue;case'2':this[_0x448a('‮ed','SYG#')]=!![];continue;case'3':this['time1']=_0x199fa4['ELloh'](timestampToTime,this[_0x448a('‫a1','smXR')]);continue;case'4':this[_0x448a('‫ee','t18q')]=!![];continue;}break;}}if(_0x3ae547['code']==0x95||_0x3ae547['code']==0x94||_0x199fa4['pcHsq'](_0x3ae547['code'],0x70)){$[_0x448a('‮ef','KtJm')]('❌'+_0x3ae547[_0x448a('‫f0','BpRe')]+_0x448a('‫f1','pWFB'));}if(_0x199fa4[_0x448a('‮f2','20za')](_0x3ae547[_0x448a('‮f3','#s4i')],0x192)){$[_0x448a('‮f4','*85G')]('❌'+_0x3ae547['msg']+_0x448a('‫f5','k5at'));}}else{httpResult=resp[_0x448a('‫f6','BpRe')];}}catch(_0x37a493){}finally{if(_0x199fa4['qmKmg'](_0x199fa4['vEnEf'],_0x448a('‫f7','r)se'))){return Promise[_0x448a('‮f8','SYG#')](0x1);}else{console[_0x448a('‮f9','k0&X')](_0x199fa4[_0x448a('‮fa','g*b5')]);return;}}}}!(async()=>{var _0x4428e3={'oplYj':_0x448a('‫fb','SYG#'),'vICPi':function(_0x599070,_0x127fe2){return _0x599070!==_0x127fe2;},'PZPvj':'AbjLv','eDxor':function(_0x53f94e,_0x4c9997){return _0x53f94e>_0x4c9997;},'uHKtO':function(_0x262406,_0x2b2810){return _0x262406>_0x2b2810;},'PeikQ':_0x448a('‫fc','8JSE'),'nSJlm':_0x448a('‫fd','mwrB'),'GvkhI':_0x448a('‮fe','%Lpb'),'znsHw':'XmqEJ','BiHeK':_0x448a('‮ff','rIdz'),'LIQIs':_0x448a('‮100','k5at'),'PLQyO':_0x448a('‮101','R6Wn'),'bZXtu':function(_0x3c709f,_0x5c763b){return _0x3c709f===_0x5c763b;},'NjFSW':_0x448a('‫102','*85G'),'cDGqg':_0x448a('‫103','oFm2')};if(typeof $request!==_0x4428e3['oplYj']){}else{if(_0x4428e3[_0x448a('‫104','q9I*')](_0x4428e3[_0x448a('‮105','mwrB')],_0x4428e3['PZPvj'])){return Promise[_0x448a('‫106','q9I*')](0x1);}else{if(!(await checkEnv()))return;$['logAndNotify']('\x0a通知区：\x0a⚠️念念不忘\x20必有回响\x0a');let _0x224def=[];let _0x27265f=userList[_0x448a('‫107','k5at')](_0x22d98a=>_0x22d98a[_0x448a('‫108','q83^')]);if(_0x4428e3[_0x448a('‫109','KtJm')](_0x27265f[_0x448a('‫10a','fCr*')],0x0)){_0x224def=[];for(let _0x334e7e of _0x27265f){_0x224def[_0x448a('‫10b','ywS8')](_0x334e7e['km']());}await Promise['all'](_0x224def);_0x27265f=_0x27265f['filter'](_0x3668d4=>_0x3668d4[_0x448a('‫10c','k0&X')]);if(_0x4428e3[_0x448a('‫10d','DVVp')](_0x27265f['length'],0x0)){if(_0x4428e3[_0x448a('‮10e','YWV7')](_0x4428e3[_0x448a('‮10f','5MFb')],_0x4428e3['nSJlm'])){$[_0x448a('‮110','hgi!')](_0x4428e3[_0x448a('‮111','rIdz')]);_0x224def=[];for(let _0x886c2c of _0x27265f[_0x448a('‮112','rIdz')](_0x36befd=>_0x36befd[_0x448a('‫113','k4se')])){if(_0x4428e3[_0x448a('‫114','q83^')]===_0x4428e3[_0x448a('‫115','q83^')]){this[_0x448a('‮116','!PX2')]=![];$[_0x448a('‮117','k0&X')](_0x448a('‫118','YWV7')+this[_0x448a('‫119','BpRe')]+']CK格式错误');}else{_0x224def[_0x448a('‫11a','GCc)')](_0x886c2c[_0x448a('‮11b','DVVp')]());}}await Promise['all'](_0x224def);$[_0x448a('‫11c','#Pox')](_0x4428e3['LIQIs']);_0x224def=[];for(let _0xe7b94d of _0x27265f){_0x224def[_0x448a('‮11d','smXR')](_0xe7b94d[_0x448a('‮11e','k0&X')]());await $['wait'](0xbb8);_0x224def[_0x448a('‮11f','b39x')](_0xe7b94d[_0x448a('‮120','pWFB')]());}await Promise[_0x448a('‮121','k5at')](_0x224def);$[_0x448a('‫122','pWFB')](_0x4428e3[_0x448a('‫123','rIdz')]);_0x224def=[];for(let _0x19c685 of _0x27265f[_0x448a('‫124','mwrB')](_0x5295c9=>_0x5295c9[_0x448a('‮125','KtJm')])){if(_0x4428e3['bZXtu'](_0x4428e3['NjFSW'],_0x4428e3['cDGqg'])){httpResult=resp[_0x448a('‫126','(s2O')];}else{_0x224def['push'](_0x19c685[_0x448a('‮127','UvBn')]());}}await Promise[_0x448a('‮128','!PX2')](_0x224def);}else{if(userCookies)userList[_0x448a('‮11f','b39x')](new UserInfo(userCookies));}}}await $['showmsg']();}}})()[_0x448a('‫129','UvBn')](_0x598213=>console['log'](_0x598213))[_0x448a('‫12a','q9I*')](()=>$[_0x448a('‫12b','zSN5')]());async function checkEnv(){var _0x5bad1a={'puSjG':function(_0x65c4a9,_0x48c82e){return _0x65c4a9===_0x48c82e;},'kbrOe':_0x448a('‮12c','k0&X'),'OisxL':function(_0x1dd045,_0x133a2c){return _0x1dd045!==_0x133a2c;},'UjcrU':'hupzN','BPzYe':_0x448a('‮12d','#s4i'),'OetQY':_0x448a('‮12e','eafV')};if(userCookie){if(_0x5bad1a[_0x448a('‫12f','5o1d')]('Diqob',_0x5bad1a[_0x448a('‮130','b39x')])){let _0x136b8c=envSplitor[0x0];for(let _0x15d8a3 of envSplitor){if(_0x5bad1a[_0x448a('‮131','smXR')](_0x5bad1a[_0x448a('‫132','%Lpb')],_0x5bad1a[_0x448a('‮133','9zh^')])){$['logAndNotify'](_0x448a('‮134','k5at')+this[_0x448a('‮135','KtJm')]+']店铺浏览任务已完成');}else{if(userCookie[_0x448a('‮136','KtJm')](_0x15d8a3)>-0x1){if(_0x5bad1a[_0x448a('‮137','TNNg')](_0x5bad1a['BPzYe'],_0x5bad1a['BPzYe'])){return Promise['resolve'](0x1);}else{_0x136b8c=_0x15d8a3;break;}}}}for(let _0xcaf1f0 of userCookie[_0x448a('‮138','%Lpb')](_0x136b8c)){if(_0xcaf1f0)userList[_0x448a('‮11d','smXR')](new UserInfo(_0xcaf1f0));}userCount=userList[_0x448a('‮139','rIdz')];}else{this[_0x448a('‮13a','f#Ou')]=++userIdx;this[_0x448a('‮13b','DVVp')]=this['index'];this[_0x448a('‫13c','KtJm')]=![];this[_0x448a('‮ed','SYG#')]=![];try{this['param']=$[_0x448a('‮13d','R6Wn')](str);this[_0x448a('‫17','k4se')]=!![];}catch(_0x2c7caa){this['ckValid']=![];$[_0x448a('‫13e','eafV')]('账号['+this['index']+']CK格式错误');}}}else{console[_0x448a('‫13f','#Pox')](_0x5bad1a[_0x448a('‫140','SYG#')]);return;}console['log']('共找到'+userCount+'个账号');return!![];}function populateUrlObject(_0x5dffca,_0x240cd3,_0x51602d,_0x2ff469=''){var _0x527198={'fDrlk':_0x448a('‮141','mwrB'),'msAQH':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20GLK-AL00\x20Build/HUAWEIGLK-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/86.0.4240.99\x20XWEB/4317\x20MMWEBSDK/20220805\x20Mobile\x20Safari/537.36\x20MMWEBID/9296\x20MicroMessenger/8.0.27.2220(0x28001B59)\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64\x20MiniProgramEnv/android','NodEP':_0x448a('‮142','nY(6'),'ciHDZ':_0x448a('‮143','8JSE'),'TrrPg':'Content-Length'};let _0x1b9a89=_0x5dffca[_0x448a('‮144','DVVp')]('//','/')[_0x448a('‮145','k4se')]('/')[0x1];let _0x3f4ad1={'url':_0x5dffca,'headers':{'Host':_0x1b9a89,'Connection':'keep-alive','token':_0x240cd3,'Content-Length':_0x51602d,'content-type':_0x527198[_0x448a('‫146','ywS8')],'Accept-Encoding':_0x448a('‫147','YWV7'),'User-Agent':_0x527198[_0x448a('‮148','%Lpb')],'User-Agent':defaultUA},'timeout':0x1388};if(_0x2ff469){if(_0x527198['NodEP']!==_0x448a('‫149','5MFb')){_0x3f4ad1[_0x448a('‮14a','%Lpb')]=_0x2ff469;_0x3f4ad1[_0x448a('‮14b','eafV')][_0x527198[_0x448a('‫14c','*85G')]]=_0x527198['fDrlk'];_0x3f4ad1[_0x448a('‮14d','xZD3')][_0x527198[_0x448a('‮14e','TNNg')]]=_0x3f4ad1['body']?_0x3f4ad1['body'][_0x448a('‮14f','k0&X')]:0x0;}else{$[_0x448a('‮150','zU)(')]('账号['+this['name']+_0x448a('‮151','q9I*')+result[_0x448a('‫152','2MMh')][_0x448a('‮153','9zh^')]+'积分');}}return _0x3f4ad1;}function populateUrlObject1(_0x58717d,_0x530e57=''){var _0x1b6415={'fcBdK':'Content-Type'};let _0x5f5563=_0x58717d[_0x448a('‮154','(s2O')]('//','/')[_0x448a('‮145','k4se')]('/')[0x1];let _0x38de53={'url':_0x58717d,'headers':{'Host':_0x5f5563,'content-type':'application/x-www-form-urlencoded','Content-Length':_0x448a('‫155','ywS8')},'timeout':0x1388};if(_0x530e57){_0x38de53[_0x448a('‫156','mwrB')]=_0x530e57;_0x38de53[_0x448a('‫157','zU)(')][_0x1b6415[_0x448a('‮158','SYG#')]]=_0x448a('‮159','R6Wn');_0x38de53[_0x448a('‫15a','5MFb')][_0x448a('‫15b','(s2O')]=_0x38de53[_0x448a('‮15c','GCc)')]?_0x38de53[_0x448a('‮15d','SSdZ')][_0x448a('‮15e','(s2O')]:0x0;}return _0x38de53;}async function httpRequest(_0x374d4d,_0x416c25){var _0x50d396={'jfEXH':function(_0x1e7c9e,_0x2adbd6){return _0x1e7c9e==_0x2adbd6;},'uklyG':_0x448a('‫15f','BpRe'),'JdBAl':function(_0x10569a,_0x3c92eb){return _0x10569a===_0x3c92eb;},'PzHqh':'HGbLm','qfDlF':_0x448a('‫160','8JSE'),'lsaLx':function(_0x5f32dd){return _0x5f32dd();},'BFhIH':_0x448a('‮161','ZDig'),'izMsz':'Content-Length'};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x52f870=>{var _0x4753f7={'ZhhTK':_0x50d396[_0x448a('‫162','zU)(')],'FnNtZ':_0x448a('‫163','R6Wn'),'zZwAi':_0x50d396['izMsz']};$['send'](_0x374d4d,_0x416c25,async(_0x5e1967,_0x8fd2b5,_0x4e2117)=>{try{httpReq=_0x8fd2b5;httpResp=_0x4e2117;if(_0x5e1967){console[_0x448a('‫164','61py')](_0x374d4d+_0x448a('‮165','nY(6'));console[_0x448a('‫166','b39x')](JSON[_0x448a('‫167','KtJm')](_0x5e1967));}else{if(_0x4e2117[_0x448a('‮168','20za')]){if(_0x50d396[_0x448a('‮169','GCc)')](typeof _0x4e2117['body'],_0x50d396[_0x448a('‫16a','GCc)')])){httpResult=_0x4e2117['body'];}else{try{if(_0x50d396['JdBAl'](_0x50d396[_0x448a('‮16b','zSN5')],_0x448a('‮16c','UvBn'))){httpResult=JSON['parse'](_0x4e2117[_0x448a('‮16d','pWFB')]);}else{let _0x1b2c23=_0x416c25[_0x448a('‫16e','R6Wn')]('//','/')[_0x448a('‫16f','5MFb')]('/')[0x1];let _0x55564b={'url':_0x416c25,'headers':{'Host':_0x1b2c23,'content-type':_0x4753f7['ZhhTK'],'Content-Length':_0x4753f7['FnNtZ']},'timeout':0x1388};if(body){_0x55564b[_0x448a('‮15d','SSdZ')]=body;_0x55564b['headers'][_0x448a('‫170','k4se')]=_0x4753f7[_0x448a('‮171','eafV')];_0x55564b[_0x448a('‫172','ZDig')][_0x4753f7[_0x448a('‮173','%Lpb')]]=_0x55564b[_0x448a('‫156','mwrB')]?_0x55564b[_0x448a('‫174','b39x')][_0x448a('‮175','xZD3')]:0x0;}return _0x55564b;}}catch(_0x40b284){httpResult=_0x4e2117[_0x448a('‫176','k5at')];}}}}}catch(_0x2ea9de){console[_0x448a('‫177','oFm2')](_0x2ea9de);}finally{if(_0x50d396['qfDlF']!==_0x448a('‫178','5MFb')){try{httpResult=JSON[_0x448a('‫179','9zh^')](_0x4e2117[_0x448a('‮17a','R6Wn')]);}catch(_0x81f665){httpResult=_0x4e2117[_0x448a('‮17b','61py')];}}else{_0x50d396['lsaLx'](_0x52f870);}}});});};_0xod5='jsjiami.com.v6';
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
