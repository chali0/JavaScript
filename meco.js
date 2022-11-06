/*
Meco真茶局

变量：捉包unionid=xxx openid=xxx wxid=123456用&连接   多账号换行隔开
格式：export meco="unionid=xxxxxxxx&openid=xxx&wxid=1234"

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("Meco真茶局");
let hpid = 'oPwQG5l8YphEDH5TbYPIURZBJrfw' //需要助力的账号openid
let envSplitor = ['\n']  //多账号隔开方式
var _0xodX='jsjiami.com.v6',_0xodX_=['‮_0xodX'],_0x5bd3=[_0xodX,'6LWG5Y26wpA=','wqXCulx9','w6XCmzrDi3DDoG0=','HkYTE8Ku','ZTMkwq/Cjw==','QMOjMMOJGQ==','VRtl','wpLCucOzwoo=','wovCgMKMwow3MMKy','wr3CmADCoDo=','QsKtUhbDlg==','6LSU5Y6JSg==','NFXChcKRDMOSwrc=','T1RDw7MewpXCryLDjQRU','J30rKMKM','wofCvRrChhM=','IsKpDMKfw4HDnMOlwpvDtsKjPBU=','6LSz5Y2lKg==','wpfDoUHCgg==','SOaVsumDseitreWmpuWLmeWMjemimuWOlA==','6Lef5Y23dw==','RcORIsKZ','wpzkvrrlkJnkua7libzkuIvlipDlt5TlrY7mibs=','w68Pw6XChHM=','woTCvcO0woTChlTCmw==','IAg3Y8OQcgM=','w7rClcKAF8KswpLCr8K0wqjDksOPw6E=','wr/DiDPDssOR','w6EWwqcww4I=','RUlQw64Iw4PDr2PDsRFHwpNOVsOJw5kWwpvCscO7EcKdwpoAwq/CkWPCvcKXworDuQdAwozCiU/DlnHCjcO8ecOBw4VMwojDpMOQMR3DrVzCmMORw5IPA0vDu1QhdA==','ZsK9QznDgg==','MAFww7xIw7o/','YiUKwojCgA==','wqYiEg==','bMKLWsOFw6gg','w5rCoxnDosK7','KkTCl8KWGMOG','wqHCpjrCtQ==','IAgnacOVcgM=','wp4pwqPDijs=','w4LClwXDlFk=','woomDMKFw70=','wqPDvjXDgMOOX153wrPDksKcwoE=','BOW3gumhsOWMtA==','w6FjIzvClVHCrm8Nw4EPw50=','6LW/5Y+Hwq0=','PGHCrhU=','w6HDkMOcw74v','CFfDlRwN','YsOzZ3DDuw==','w6PCqTE=','DsKSwrjChxvDhgw=','KcKjH8KKw47Di8OAwrjDq8K5Llg=','JXDCkjNQ','eMKaTw==','IWZ4w4TCpg==','NkrCosK4Ow==','wpHDtFjCl1cpw41tLFjCncOKw5jCiwHCqUjDqm/CjsK5wpzCjsKGwpnDm8OnwoPCusKowrFew4FSScOTw5Q5w4fDrk4HcS4Zw5LCgigmMGhkC0nCrMOsP8Kjw43Dr8Oe','QMKBfsKPwrM=','w7kXw5vCrHjCi8K8','HQADRMOI','H2HCoMOLwqY=','wqoUwoDDgho=','wq/Ck1c/w6o=','NCjCisKiwrw=','w7rCmyrDnXjDsW0=','6LSd5YyOPQ==','w73CoyXDhMKTw7/CrQ==','S8KWFQE=','wpvCkCLCiQM=','ecOrYcK6CUbDmw==','Vgdewr0Q','w6g7wqwaw5Y=','XX9dw6cC','XklFw6oOwoo=','wq7DlMO2wpvCscOLwo1fHUvChRE=','6LWB5Y+fZQ==','wqc4wqzDjA==','BOetjuWLhuaLsuWLsg==','URYqwrM=','IGXCoBV2DcOq','KwkVRMOF','w6ULwpQiw4E=','wprCt8OgwqrChEbCsMKtVVjCt8K+','6Led5YyuWg==','w67ChQfDmw==','d8O2EcOWC8OtwpM=','KgrCgkfCig==','f8ODKcO7wr0=','w5wYwqYMw5lmwqE=','EMKYwqzCqRnDlCfCmMOeChTDhA==','wqZJdcKK','Ouavp+aXm+evkeWLruiNjOW9vg==','w48ZwrEzw5p5wqoDw4s=','JyrClmE=','UDhmwr88','VhgwwrM=','RVvCjwtxBmwIwppBwpg=','QiEnwrbCuA==','w69KMzLCrg==','UBF1wo4=','wr9QccKLHQ==','wrhJasKOTQ==','ZSvCmGPCtGnDt8OwC1zDqcKtdQgIbMOYQcKWwoDCpSxIw4d9w6nDsWTCpg==','HnAswp5k','BsKHwozCgyE=','TsOoZ8KPLA==','wrLDkC3ClcKg','T8ORO8Kd','XMKcEiUiwpDDt8OgAwpiJ3V2wqcm','wrPDhSLCmcK9woZU','YsKlQT0=','6Lev5Y6uwpo=','SBYuwqI=','D+aLkOWkkuiOu+W8qw==','aMOkfMK0','wrHDkiTCj8Kxwp5FaMKjBsOg','MXYtwrlH','B8K4wqzDngg=','6LWD5Y2Ow7g=','JcKBwrbClg==','wrDDnsOiwrXCs8OZwqY=','w6scw4bCk3nCi8K2AsOtYx00HMKXGW8=','wonCmMK8wpc=','EMO3w7bCpBU=','e8O9YcKxWg==','aMKHUsOV','bnYUwqtOwr8lwoAFw756FTTDtMKA','wrPCvA7CvxA=','NcOJwqI3woM=','wqA6wqnDpgc=','OMKUwrrChw/ChA==','6LW05Y6aHw==','VcKYCxA=','wpLpoJfljoTmiLzlp7blpa3liqE=','KApqw6BHw7Q+','w5oswqEhw6A=','asKqbsOfJQ==','Ihg3ZA==','EsKnwoDDqBwrw4dQwq47OSI=','6LWW5Y+Qw6Q=','EsKWwqbCjQ==','wqwiFcK1w4w/w54=','wq4ewoPDnDI=','wrvDvSHDmMOR','wonDlibClsKS','w79pNxXCl0PChQ==','wrTDmsO9wrPCuw==','wqImCMKUw4g5w58=','w6rCly7DlXTDq2d8VMOMXg==','wq7DkCTCksK9wpQM','W8ORPcKddA==','dcOjB8OLA8Ou','cRATwr/Cjw==','w67CpSTDu8KZ','dMOyRMKgMg==','wrtcecKbVR4=','NV/CkcKjA8ORwpwxwpQRw7rCkw==','6LWV5Y+4wr0=','E8KtwpTDmhMow6w=','RR94woM=','wo3CjsK/woY=','wr3DtDHDpMOJTXU=','w5rDj8OZw5wHw4zDjsKpw4XCtTAq','wqbCvkJrwpEuwoc=','dsO8BQ==','wpPCrXUYw5Mqd00swoYtDHx9EcKiBQPDqsO0AsKORMOxwpRaP8OJwqUUw4zDs0bDmMKwaRVlJ2UQwpBDWyvCq2Q=','wqdYfcKBSQnCjw==','wrHDgTPCncK5','w5fDhMOaw40Gw4HDrsKyw4I=','wqfCtFZZwp4twqxBYEPCt0U=','EMKYwqw=','Nwpqw7xKw6U+','fsOga8KwDlnDmg==','Y8OIF8O/wrs=','DsKnwpTDnQ==','w5XDuMOQw6oM','w5nDuMOOw7oB','UC0lwqLCsQ==','c8KvTcOBHx3CjcK7wqfDssOQajZwUg8gwo47NX4Ew54vwoLDicKcfsKKwqlYQS4+w6zCm0MZMxzDunhgwoPDhnfDtD3CnQ/CisK9wqjChhLDtMOT','ImHCsRFy','QhXCtsKzwqPDng==','woTCscOFwo3Cqw==','Rz9lwpkN','6LW05Y+3wpg=','CMOcw5DCoznDjF8=','FMKCwoXDpzo=','wrk4wrPDiBA=','XklWwqwRworCryI=','TlZyw78XwpDCpA==','d8K0XsOwAkPDrMO7wqvDq8OGew==','6LWY5Yy/wrw=','XcKFf8Kdwr/DuDo=','w7LCgRnDkcOcRV0=','N8KMworDvR8=','wpzkvZ3lkL7kuZTliIXkuqPliJrltYLlrqjmi7A=','w6/ClcKHLMKhwpfCoQ==','w6bCjA/DksOA','AnMnMcKs','KV/ChcKW','Zn9ow5sq','FsK8wpPDmQF1wqYQwqIiLzNxOcO4V8OSDcOpKsOjw48abMK/wr0Swq3DocOtw517wqPDq0AOFMK9w5XCo8KewozDsUfCssKpw61resOyOcKDw5huYmdMw4Abw4DCoX8UIMOxQw==','EkZXw4DCsMKSwo0=','w5DCt8O3wo7ChEvCmsO/','H1fDmhkqHg==','Yw59w7dSw7o2w4zCqQ==','bE5Rw6Yo','P8K7wpLDkSE=','woTCqVRXwoU=','UMK6c8O2w48=','wpXCuGwN','RsOVPMKPeMOQWA==','6LSL5Y+Kfw==','AEYMFw==','HULDjAQiHTg=','DsOswqYR','wq7DgknCpVQ=','6LS85Y2kOQ==','CRLCqA==','w6/orabmopLmnaTlj4Hlr73miIblnLDCk8O85p+A5ZqQ5Lq2fy1PwoBVSQzCiMK1UUTlpavojJbljKnljYzlrI0=','csO2DsOV','F8KXMsK9w70=','csOmXFnDuQ==','S8KqbsOLLg==','w4NhMxvCvA==','QsOof8K0IA==','DBXCu8KzwrXDmcOFTcKYPWDCsVvCnwrDgg7DgQEIasKFXRLDj8KKT8Oyw7NPwoHCoSnDs8K5w4fCpMOVbl3DtFfCpcKBXCPDqsO3XsKuw6rDs8OpwoIqLcOEwoNqYzwLwoLDtMK9IzLDlWHCvQ==','SQcmwqnCk8K0','wqPDoxnCiMKz','WcK6PgEq','fsKWXsOaPA==','A3TCrgNX','MgBbw7BR','w5vDhcONw64Iw4/DpQ==','6LSN5Y2HFA==','wqVNa8KcQQrDlw==','fR1nwoUR','w54IwqYL','KMKvBcK6w63DgcO+wprDq8KlNAUM','XT9FwqcF','K1rCpMOiwrs=','NsKgHsKUw6Q=','Oz7CglzCjQ==','G3vCksOXwqdJw7t5wrFuw6kdQMKHUVDDjXtyR8Kyw5oqw71Aw7kAw6Vpw7bCh8OUw5DCncO2PDt2OWArAX1TRifCh8OkBHHClk7DoyrCncOjPcKdw5LCv1fCr8K6','NQ5rw7JL','PsKOwrLCnBTCnlI=','C35cw5fCig==','wq7DrcOzwqLCiw==','wrhHa8Kb','w77ClsK4CsK4','wovCo8KFwrIJ','dMO9a8KXKQ==','MH4Fwoxz','wpjCucOqwo4=','dMO6AcOOBMOrwpvDow==','csK9RTk=','wocYwozDrA==','Vh9lwpY=','MyrCmHHCtG/DocK+','dsO8BcOkBMOuwrjDqcOoE8OFw7g=','wpwBw6QfwoZsw7QLwow=','ZsOiHcOzwoQ=','dcK9XwrDikTDoA==','HW7Ci8OC','EgDCo8KqwqI=','wrLDlDPDjsK+woNeSA==','E0zDqRYvEzk=','R8OfKMK9d8OTc3PCkMKEw6wO','LAF9w7Ze','GCxS5qKv5byp6ZaK6K60','w4TCiiHDmsOD','wq/DncOSwp3Crw==','d8OlTlzDhQ==','wr3DtCHDrsOMTXU=','wqPDvjU=','VRY1wqLCr8KjP8OfNQN0w6gwwqc=','KDsNXcOO','w7RFLSDCsg==','CV7DmzM1','wqEtwrXDmQ7CrcK6wrI6PXttwrjCqwkwA8OMw4MbL15Qw7jClcOFe8OqSsOILTjDvy7Cr0Y4wrjDhC3DosO9w50CFErDqWENwrDDt8O4wqxeEnjDoDdFw4JPwpFhXQ==','woLCnDrCsx8=','w5TCmcKbM8Kn','w6fCiRvDvsKR','w754JQ7CjkY=','w63ChALDgsKo','w4s7w5zCsUA=','XMKZV8ODOg==','QVJDw58Vwp3CjiPDvQhRwoI=','C8OYw47CtQ==','5qy75reE5rC5Ow==','w6Ecw4HCsHfChcK9','wo7ClsKmwpc=','Ng5vw7Zzw6A+w5vDkcOhwpx1w6HCog==','CA7CqMKCwqjCh8KkDcKUJHbCoA==','6LWt5YyXwoA=','P2XCsAN+HMOq','wojCuMKkwrcm','F24IKMKK','EsOowrgbwqgVwpE=','w6PCqTHDqsKRw63Chm8cwq3DrsKW','UsKvbMOWAw==','ecOROsO0wrI=','X8KaeynDlw==','VBIwwqjClsKmPw==','b8O9BsOADMOjwpjDo8O4','Dwx7w6J8','dMOlw4rChF9iwqQSw7d/cnZrOsK9FuatreaWmOS5q+WLr8KswotDb8Oxw79SwrrDtMOww4lmwqHCoAw=','w7PCrQHDigk+w49veQXDgMKPw4LCiETDqOenteaml+i/jeW5jMO2w5jDl8KFw5fCmcKnwpTCr8K1wqVDw4MZBQ==','w5rCrSbDmWA=','w7fClRDDtcOe','BVl9w4XCuw==','wpjCslcJw4x5PA==','wrHCnSDCvwQ=','ShItwqDCjsK4','IR9Mw6lk','ecK0asOJIA==','FU1Nw4DCssKNwow=','w4ISwrIiw5t0wooYw4zCmlHDpw==','SXXDmjvDqyfCv8OgAB3Cq8OuP0xROeWPneWvoumop+itp8OpYBHCgyTCscK4LMK2w7NYw5DDqRwI','w7wMw4HCqw==','CE4NBsKmw7c=','YMK9XTHDiw==','Ni8uY8OO','G2bChsKnCA==','VsKJYMKawrvDrQ==','SMORIcKufMOWWQ==','FBTCvMKr','wrtBf8KB','C8KWwqLCnA==','asOmEcON','My3ChH4=','w6fCgR7DqsORQFPDpwHCh8KC','A3rClcOP','YsOzGMOu','DsK9wpTDgQ==','w7rClcKAF8KswpLCr8K0wqjDksOPw6A=','wrbDgSjCiA==','DMKCwrjCgA==','wpHCvcOzwr/Ci1HClcKOSELCpcO0','PsKzGMK2','FGrCksOzwrUAwr8awqBtw61B','wozCuGgc','P1jCk8KOHQ==','S8KMFR0=','WMKFYMKe','w67Cqjo=','Ly/Cg3XCsg==','DmAFwrlF','EErCiMOGwpo=','c8O7H8O+wrIRwrdyK8O0M2RI','wrYmD8Ky','VgIwwq8=','wonCvHIHw4xmPQ==','f8OtZ8KiClzDmA==','wpXCucOzwojCgg==','dsOsag==','w5LDj8OQw7g=','VcKzXyzDikvDsMOvbgc9Cg==','PcKnwonDnRchw70SwpY3MTwyfw==','w4zChsK9DMKg','wrnCscO2wq/Csw==','5py15oqB5YiLw7LDlnPorpHpmp/or6vohbDmnYTor5LmmLc=','w7DCicKhGsKO','FsO0w4XCiAE=','w5jDgcOTw7g=','WxB1wpIReMO6','O3YKwqdJ','WMKpacKEwoY=','w53DjcOZw5gw','w4TCngXDicOA','fMOwe8K9','wovCksK/wo8jPcKj','NsO6w6/ClDQ=','wr3CuivCtBMPFQ==','w7YWwqY3w5Q=','w63CqTLDkg==','e8KlZAHDrA==','MjfCjsKAwqo=','K3wXwpdk','YMOqbw==','5YWk5ous5YmB','5Lui6LSO5Y+v','w48Ww5zCt3PCjMKsW8OKSAg1','Uw5hwpsAVMO9w7PDgB3CjsKNw5XDtyFJNcOJNcKYKFTDs8KPwovDocOGGsKMESo=','EW/CrQR6FcO7w5YLccKfwqrDvwA=','bMKPV8OYw6k=','wpvCmMKrwpo=','w6fCozfDj8Kaw7vCuw==','wqzDvwbDksOs','Dj7Cj3PCvg==','ZSlewpEx','wqnCtFVh','AsOiwq8N','w7HClcKaJMK5wok=','c8OmGsO5wrY=','T8OqZsKhAkHDi8KDT8KGLU7Dk1U=','bcKaS8Odw7wwAw==','w4XDkMOSw7Qd','QTxfwoQP','PkTDtBEU','GijCsH/Crg==','csOACMKVcQ==','WcKWAgw=','ImvChz5Y','HsKYwq/CkQ==','dsO2DMOCHsOi','w6zCiw0=','5p2W5oqJ5Yu7wqs8wpDorp7pm7LorZHohbnmnZ7orYnmmoE=','a0xSw7Y/','wqnDjFXComY=','eMO/AcOZwqc=','wpfCocKawo4P','OMKFwrXClw==','FcKbwobDmwQ=','Vyh3wrAs','IsKpDA==','6K6y5rCt5aSo6La2','LzfCkA==','BSLCh3fCjw==','BUdaw5Y=','OGkXAsKk','MCsBZ8O2','X1hXw7EXwo/CpQ==','ScOfK8KF','wr/DsCDDssOF','w6LCiw7Dhw==','wqMoAsK/','w6FjIw==','KivCuXnCom8=','wqTDjjc=','PlXCgsKGDMOBwrM=','P2XCoB8=','w6nClyTDkcOUVg==','AQ/CuQ==','wrjCnmoNw5k=','EUfCqBVm','w5jDj8Oaw7hEw4XDocKlw5nCtTg2w7PCtQs=','b8KzXMOf','wp4Bw6YfwoRsw7ALwoo=','MAVYw6dT','wrtYdMKGVA==','wrjCr0Mqwpo6wo1A','BsOSw7XCsTTDgl4=','wqIsMMKnw4Exw58=','wq0oAcKHw4M8w7XDn1DCicKrJw==','6Let5Yysag==','M2Qq5qGO5b+M6Zac6K6w','Kw50w7Y=','BElQw73Cu8Kawo0=','LUgPBsKmw6srw6oqScKswpo=','PlXCgg==','eMKPchvDjg==','w7sawqwSw5A=','FmvDuRoB','Yxpsw7pCwq4=','LUQpwotz','wqfDucOewp/CkQ==','EMKPwpTDhTU=','KMOjw7TCqj0=','wqjCtFV9','CizCnsKNwoc=','NsKVPMKuw7w=','wqDDlMO1wqM=','LQp4w7dDw6Eo','L8K2G8Kyw4bDm8OKwoDDq8KlNEMCwrE8w5vClcOrUcKxw7Z0w5BOY2BxGsKSw5gR','G2rCh8ODwrEBwqc=','w7XDj8OQw6kMw4bDtMOrw73CuTg0wqrCtA==','ITfCk28=','w4LDicOTw7g=','e8KvVg==','YMK1QQ==','w7llKR/Dig==','WW5Dw6QT','MQZ0w7Y=','c8KQXMOww7M3KMO1ZAMOXw==','wpzljKblrqDpqYrorazmiYjliKTCkOacreaWqOafkuiGrQ==','w7vCrzvDjsOO','Mg5ww6c=','worClsK5woYHMMKjJsOAw50bwrPDh8Ko','wrnCgsOOwpPCmA==','w40SwrEG','wodyUcKXUg==','A8Oiwq8R','wprChQPCqAQ=','WMKWAhA=','w4MOwrI=','UOivkOahv+aekuWMouWuvOaJi+WdnMO6euaekeWaouS5h2VSJzUlwplOI8K1w6Yj5ae86I+t5Y+g5Y6P5ayp','wprCmMKrwoY=','wq/DsgDCkMKw','wpjCisOGwofCjg==','6LWC5Y6WwpQ=','Q1xJw7s=','wq/DiMO2','XOisgOWItOWnsuWls+S/j+eVgcKYw5jphq7oorfnjJLloIzpgobmi5Horarog4vnsbLkvazogJnopaLpmZM=','wrs8wrLDhhHDocOw','AsODw4bCoSI=','wovDpV/CiEhlwoc=','WMOROcKZXMOZWG7Cg8KUw4gWR8K0','RMKufj7DoQ==','wqDCjcO/woXCvg==','w6QNw4bCs2XDmMO3WcOmQQg4e8OYEmU2wqkZwr/CtcO5w5w5w5LCrsOkdsOmw7TDmcKqM2HCh1vDsMOiw5jCicORw7PCoDjDuMOLw5rDi8OIw77CucKaw4fCkCZWw7LCj8Odw43ChcK1wrpb','Igw2bcOR','wozCmcKmwowsN8Ki','LcKkworCrxo=','ElbCusKTFA==','ZcKoUCzDmlY=','wrLDlCDCiMKhwoM=','wr/Cv3ldwr8=','JVzCr8OqwoI=','f09rw7g1','GEYNG8Kn','w5XDgcOQw48Mw4nDpA==','ShgkwobClMK0FMOCBAR3w6M=','eMK9XD0=','dsOsalrDm8OqwofDtsOMB8OFw6U=','dMOyD8OA','wrYQP8Kcw4o=','w5rCvMK9LcK6','wqtDTsKOTATDlg==','wqU2wqbDqBPDs8Obw7I2JG18','6LWI5Y+QOg==','LkzCreaim+W/m+mVquisuw==','LMKFwq/CpxvChF1iw6nDv8Ox','wq3Cuh3Csj0=','OnTCtwBsQcKgw5Q/ZMKBwqXCvEbDuGjCtsOtwq7DlMOlfSQKwpx3D3vDvMOeGGXDicOswpV9YcOOw4YOwrpuw7MBDMKKa1o5wovDtlhsw4LDhiTDvsKNw53Dj8OC','S8KYFBQg','YMO8GMO1wp4BwoY=','wqzCtX9xwqU=','w7HCisKzAcKl','IXTCogRqCA==','NgwwbQ==','aMKeUsOF','wqzCvkVNwoMswpBqdV7CtA==','MGMxwqx2','KkAzwoVr','DMOiwqw1wqoHwrpXP8KNw73Cng==','cOavsuaXgeevoOWJi+S4guWJoeW2vuWsheaJsQ==','6LWj5Y6YQg==','dcK6VMOU','VMKBeMKP','w4HChxvDrg==','El7lvYLlirrnrKDnupDovYfluKE=','wqxJbMKO','EMO/wqQTwrYGwodL','wovCksK8wowuKMKj','wqkzEsK2w55iwpTCn1zCkMK9Nkd2ZsOHdMOLw5wLFsODw6HCsEHCssOawpnDoyHCnMOEwoDDqcKgNMKuw5PDhcOEw6XCsHzDrC5hwpAjGcKlw7whUcOQwpk/w5BbTjd9wo/CocKbTQ==','asOif3rDmA==','woPCtsOuwoTChEvCmg==','XhF2wrYHU8OSw6jDnRvChsOb','6LaI5Y6Kwo4=','N1HCm8KH','e8K5QivDjkLDoQ==','QRI3wpPCm8KjMcOhGR5lwqs=','DMKeEsKzw6U=','wrvDi8OjwozCpQ==','JkjCkcORwr0=','acKRdMO6w48=','JSXCpsKuwr4=','PgIjTcOSYChUMsOKwrvCjA==','6LS85Y20Vg==','YsOkZcKw','ZMOxfMKlFBXCkMKBe8KTM0HCkBPDqVbCjcKICRrCjcOuDVLCk8KgDsKUbcKdw7F4wosHw5PDuMOsR8OKw7haM8O9IhjCq8OQwqzDjcKyTXBfw4zCuXcUwonCnmzDsA==','w7XCigPDkcOeWlw=','wpnCokFcwpk=','BMK0HcKsw4s=','A1pfw5g=','6LSA5Y6AGA==','HkbDkhI=','G8KdworCpgQ=','YsKrS8OnFg==','acK+SsOeAFHDhw==','VhYxwrTCnw==','RBgnwr4=','KcKPwr/Cig==','wqPCv2I5w44=','TsOiAcOrEw==','w4HCkwDDq8OZ','wqLClcOEwoDCiw==','w4xZNSvCqw==','Ag3ChkfClg==','PyjsjZZiamxixZ.DcomnBE.Nv6u=='];if(function(_0x3a86e3,_0x30bcf4,_0x10185f){function _0x33f555(_0x46d53a,_0x245c60,_0x1c3b5b,_0x4d310c,_0x191913,_0x3d77f7){_0x245c60=_0x245c60>>0x8,_0x191913='po';var _0x59e94d='shift',_0x1bc225='push',_0x3d77f7='‮';if(_0x245c60<_0x46d53a){while(--_0x46d53a){_0x4d310c=_0x3a86e3[_0x59e94d]();if(_0x245c60===_0x46d53a&&_0x3d77f7==='‮'&&_0x3d77f7['length']===0x1){_0x245c60=_0x4d310c,_0x1c3b5b=_0x3a86e3[_0x191913+'p']();}else if(_0x245c60&&_0x1c3b5b['replace'](/[PyZZxxZDnBENu=]/g,'')===_0x245c60){_0x3a86e3[_0x1bc225](_0x4d310c);}}_0x3a86e3[_0x1bc225](_0x3a86e3[_0x59e94d]());}return 0x110947;};return _0x33f555(++_0x30bcf4,_0x10185f)>>_0x30bcf4^_0x10185f;}(_0x5bd3,0x1ac,0x1ac00),_0x5bd3){_0xodX_=_0x5bd3['length']^0x1ac;};function _0x2d84(_0x5205c3,_0x49e4cf){_0x5205c3=~~'0x'['concat'](_0x5205c3['slice'](0x1));var _0xc76f1e=_0x5bd3[_0x5205c3];if(_0x2d84['TsBkdT']===undefined){(function(){var _0x2c0182=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2e9312='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2c0182['atob']||(_0x2c0182['atob']=function(_0x63b6e7){var _0x1ae765=String(_0x63b6e7)['replace'](/=+$/,'');for(var _0x4bbf66=0x0,_0x3cb483,_0x430dfe,_0x33ef2c=0x0,_0x2f4ea4='';_0x430dfe=_0x1ae765['charAt'](_0x33ef2c++);~_0x430dfe&&(_0x3cb483=_0x4bbf66%0x4?_0x3cb483*0x40+_0x430dfe:_0x430dfe,_0x4bbf66++%0x4)?_0x2f4ea4+=String['fromCharCode'](0xff&_0x3cb483>>(-0x2*_0x4bbf66&0x6)):0x0){_0x430dfe=_0x2e9312['indexOf'](_0x430dfe);}return _0x2f4ea4;});}());function _0x55e873(_0x240b40,_0x49e4cf){var _0x35a7dc=[],_0xfa0e11=0x0,_0x9c8721,_0x1baeba='',_0x9a6f82='';_0x240b40=atob(_0x240b40);for(var _0x4cce71=0x0,_0x15bfbb=_0x240b40['length'];_0x4cce71<_0x15bfbb;_0x4cce71++){_0x9a6f82+='%'+('00'+_0x240b40['charCodeAt'](_0x4cce71)['toString'](0x10))['slice'](-0x2);}_0x240b40=decodeURIComponent(_0x9a6f82);for(var _0x466b27=0x0;_0x466b27<0x100;_0x466b27++){_0x35a7dc[_0x466b27]=_0x466b27;}for(_0x466b27=0x0;_0x466b27<0x100;_0x466b27++){_0xfa0e11=(_0xfa0e11+_0x35a7dc[_0x466b27]+_0x49e4cf['charCodeAt'](_0x466b27%_0x49e4cf['length']))%0x100;_0x9c8721=_0x35a7dc[_0x466b27];_0x35a7dc[_0x466b27]=_0x35a7dc[_0xfa0e11];_0x35a7dc[_0xfa0e11]=_0x9c8721;}_0x466b27=0x0;_0xfa0e11=0x0;for(var _0x5cc9c0=0x0;_0x5cc9c0<_0x240b40['length'];_0x5cc9c0++){_0x466b27=(_0x466b27+0x1)%0x100;_0xfa0e11=(_0xfa0e11+_0x35a7dc[_0x466b27])%0x100;_0x9c8721=_0x35a7dc[_0x466b27];_0x35a7dc[_0x466b27]=_0x35a7dc[_0xfa0e11];_0x35a7dc[_0xfa0e11]=_0x9c8721;_0x1baeba+=String['fromCharCode'](_0x240b40['charCodeAt'](_0x5cc9c0)^_0x35a7dc[(_0x35a7dc[_0x466b27]+_0x35a7dc[_0xfa0e11])%0x100]);}return _0x1baeba;}_0x2d84['EKTllq']=_0x55e873;_0x2d84['xUwPnd']={};_0x2d84['TsBkdT']=!![];}var _0x13b650=_0x2d84['xUwPnd'][_0x5205c3];if(_0x13b650===undefined){if(_0x2d84['ODbbBo']===undefined){_0x2d84['ODbbBo']=!![];}_0xc76f1e=_0x2d84['EKTllq'](_0xc76f1e,_0x49e4cf);_0x2d84['xUwPnd'][_0x5205c3]=_0xc76f1e;}else{_0xc76f1e=_0x13b650;}return _0xc76f1e;};let defaultUA='Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_0\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.23(0x18001729)\x20NetType/WIFI\x20Language/zh_CN';let httpResult,httpReq,httpResp;let userCookie=($[_0x2d84('‫0','&ggN')]()?process[_0x2d84('‮1','^f3e')]['meco']:$[_0x2d84('‮2','zvPP')](_0x2d84('‮3','30yg')))||'';let userCGkey=($[_0x2d84('‮4','Kryb')]()?process[_0x2d84('‮5','tl9G')][_0x2d84('‫6','PCKh')]:$['getdata'](_0x2d84('‮7','30yg')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x2d84('‫8','cvLb'));machineId()[_0x2d84('‫9','IHRB')](_0x207f54=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x2224ec){var _0xf68441={'ujAtu':_0x2d84('‮a','%N91')};var _0x2a30d6=_0xf68441[_0x2d84('‮b','Sb)Y')][_0x2d84('‮c','vjp!')]('|'),_0x4c6f4e=0x0;while(!![]){switch(_0x2a30d6[_0x4c6f4e++]){case'0':this['index']=++userIdx;continue;case'1':this['valid']=![];continue;case'2':try{this['param']=$[_0x2d84('‫d','k9vJ')](_0x2224ec);this[_0x2d84('‫e','dCPU')]=!![];}catch(_0x4e70b2){this[_0x2d84('‮f','Gk8j')]=![];$[_0x2d84('‫10','Gk8j')](_0x2d84('‫11','k9vJ')+this['index']+_0x2d84('‫12',')qnZ'));}continue;case'3':this[_0x2d84('‮13','Sb)Y')]=this['index'];continue;case'4':this[_0x2d84('‫14','IHtW')]=![];continue;}break;}}async['km'](){var _0x507c45={'qGXfo':_0x2d84('‫15',')qnZ'),'eBOEN':function(_0x28719f,_0x1528eb,_0x11ca0c){return _0x28719f(_0x1528eb,_0x11ca0c);},'nGslG':_0x2d84('‫16','zvPP'),'MZWze':function(_0x21f9a3,_0x51d108){return _0x21f9a3==_0x51d108;},'nMQNA':function(_0x374532,_0x33b1d2){return _0x374532!==_0x33b1d2;},'xSWpS':_0x2d84('‫17','Bv%5'),'tSgzh':function(_0x3a7cb3,_0x30dc73){return _0x3a7cb3(_0x30dc73);},'OZIxr':function(_0x3c438b,_0x52dfe9){return _0x3c438b==_0x52dfe9;},'TaqRR':function(_0x31f129,_0x2b9817){return _0x31f129==_0x2b9817;},'nRAld':_0x2d84('‫18','%N91'),'gzeqz':_0x2d84('‫19','r#x8'),'yxASV':'Iowvu'};try{let _0x4112e5='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+_0x2d84('‮1a','Sb)Y')+uuid;let _0x6cfcfd='';let _0x1eeffb=_0x507c45[_0x2d84('‫1b','XGX#')](populateUrlObject,_0x4112e5,_0x6cfcfd);await _0x507c45[_0x2d84('‮1c','gaHb')](httpRequest,_0x507c45[_0x2d84('‫1d','uBKy')],_0x1eeffb);let _0x992c52=httpResult;if(!_0x992c52)return;if(_0x507c45[_0x2d84('‮1e','dCPU')](_0x992c52[_0x2d84('‮1f','k9vJ')],0xc8)){if(_0x507c45[_0x2d84('‫20','tl9G')](_0x507c45[_0x2d84('‮21','KN0H')],_0x507c45['xSWpS'])){_0x1eeffb[_0x2d84('‫22','gaHb')]=_0x6cfcfd;_0x1eeffb[_0x2d84('‮23','Sb)Y')][_0x507c45['qGXfo']]=_0x2d84('‮24','KN0H');_0x1eeffb[_0x2d84('‮25','NeSc')][_0x2d84('‫26','cvLb')]=_0x1eeffb['body']?_0x1eeffb[_0x2d84('‫27','&ggN')]['length']:0x0;}else{this[_0x2d84('‫28','cvLb')]=_0x992c52[_0x2d84('‫29','Bv%5')][_0x2d84('‮2a','Bv%5')];this[_0x2d84('‮2b','jj!p')]=_0x507c45[_0x2d84('‫2c','eHp2')](timestampToTime,this[_0x2d84('‮2d','Sb)Y')]);$[_0x2d84('‫2e','Otcz')]('账号['+this['name']+_0x2d84('‮2f','Gk8j')+this[_0x2d84('‫30','wY$P')]);await $[_0x2d84('‮31','Sb)Y')](0xbb8);await this[_0x2d84('‮32','nXe#')]();}}if(_0x507c45[_0x2d84('‮33','@7HG')](_0x992c52[_0x2d84('‮34','%N91')],0x95)||_0x507c45[_0x2d84('‫35','vjp!')](_0x992c52[_0x2d84('‫36','[g(#')],0x94)||_0x507c45[_0x2d84('‫37','qnEk')](_0x992c52[_0x2d84('‮38','%6#]')],0x70)){$['logAndNotify'](_0x2d84('‫11','k9vJ')+this['name']+']'+_0x992c52[_0x2d84('‮39','%N91')]+_0x2d84('‫3a','r#x8'));}if(_0x507c45['TaqRR'](_0x992c52[_0x2d84('‫3b','nXe#')],0x192)){if(_0x507c45[_0x2d84('‫3c','^f3e')]===_0x507c45[_0x2d84('‫3d','@7HG')]){$['logAndNotify'](_0x2d84('‮3e','tl9G')+this[_0x2d84('‫3f','eHp2')]+']'+_0x992c52[_0x2d84('‫40','gaHb')]+_0x2d84('‮41','ADh^'));}else{return Promise[_0x2d84('‮42','@BJD')](0x1);}}}catch(_0x2f1370){}finally{if(_0x507c45[_0x2d84('‫43','dCPU')]!==_0x507c45['yxASV']){return Promise['resolve'](0x1);}else{return Promise[_0x2d84('‫44','q@Z$')](0x1);}}}async[_0x2d84('‮45','#QIR')](){var _0x1b4355={'QSAGm':function(_0x538544,_0x3074a2,_0x25bfc1){return _0x538544(_0x3074a2,_0x25bfc1);},'KfLqy':'post','ZYBsx':function(_0x308d91,_0x4ca226){return _0x308d91==_0x4ca226;},'FlALz':function(_0x16c5c8,_0x2617e9){return _0x16c5c8==_0x2617e9;},'tdHEO':function(_0xfaaef0,_0x4b6f25){return _0xfaaef0===_0x4b6f25;},'VSIMV':_0x2d84('‮46','Bv%5'),'wWYZg':function(_0x1318a3,_0x4f4cdd){return _0x1318a3===_0x4f4cdd;},'GLInw':_0x2d84('‮47','@7HG')};try{let _0x105f63=_0x2d84('‫48','CSR&')+this[_0x2d84('‫49','ZSWq')][_0x2d84('‮4a','nXe#')];let _0x1b8da1='';let _0x87cdad=_0x1b4355[_0x2d84('‮4b','ADh^')](populateUrlObject,_0x105f63,_0x1b8da1);await httpRequest(_0x1b4355[_0x2d84('‮4c','zvPP')],_0x87cdad);let _0x815b6=httpResult;if(!_0x815b6)return;if(_0x815b6['status']==0x1||_0x1b4355['ZYBsx'](_0x815b6[_0x2d84('‮4d','Bv%5')],-0x1)||_0x1b4355['FlALz'](_0x815b6[_0x2d84('‫4e','^f3e')],0x2)){if(_0x1b4355[_0x2d84('‫4f','k9vJ')](_0x1b4355[_0x2d84('‫50','NeSc')],_0x2d84('‫51','eHp2'))){this[_0x2d84('‮52',')qnZ')]=!![];this[_0x2d84('‫53','cvLb')]=!![];}else{$[_0x2d84('‮54','9c!6')]('账号['+this[_0x2d84('‫55','Bv%5')]+']'+_0x815b6['message']);}}else{$[_0x2d84('‫56','$Q1a')]('账号['+this[_0x2d84('‮57','VK(&')]+']查询账户失败\x20可能变量不对');}}catch(_0x2f804c){}finally{if(_0x1b4355[_0x2d84('‫58','Gk8j')](_0x1b4355[_0x2d84('‫59','HQhP')],'VUxnT')){return Promise['resolve'](0x1);}else{this[_0x2d84('‫5a','vjp!')]=![];$[_0x2d84('‮5b','@BJD')](_0x2d84('‫5c',')qnZ')+this['index']+_0x2d84('‮5d','NeSc'));}}}async[_0x2d84('‫5e','nK3x')](){var _0x161b23={'gnNiU':function(_0x5024ae,_0x3e50de,_0x1464e4){return _0x5024ae(_0x3e50de,_0x1464e4);},'lzGBh':'get','bFUKV':_0x2d84('‮5f','qnEk')};try{let _0x3c13a3=_0x2d84('‮60','30yg')+this[_0x2d84('‫61','%6#]')][_0x2d84('‫62','0#T!')];let _0x1dd1de='';let _0x502b81=_0x161b23['gnNiU'](populateUrlObject,_0x3c13a3,_0x1dd1de);await _0x161b23[_0x2d84('‫63','k9vJ')](httpRequest,_0x161b23[_0x2d84('‮64','HQhP')],_0x502b81);let _0x4b0575=httpResult;if(!_0x4b0575)return;if(_0x4b0575[_0x2d84('‫65','30yg')]=0x1){if(_0x4b0575[_0x2d84('‮66','ZSWq')][0x0]['status']==0x0){await $[_0x2d84('‫67','Otcz')](0xbb8);await this[_0x2d84('‫68','k9vJ')]();}else{if(_0x2d84('‮69','XGX#')===_0x161b23[_0x2d84('‫6a','XGX#')]){$[_0x2d84('‫6b','[g(#')]('账号['+this['name']+_0x2d84('‫6c','eHp2'));}else{$['logAndNotify'](_0x2d84('‫6d','Sb)Y')+this[_0x2d84('‮6e','IHRB')]+']'+_0x4b0575['data'][0x0]['nickname']+'\x20\x20'+_0x4b0575[_0x2d84('‮6f','eJCN')][0x0][_0x2d84('‮70','wY$P')]+_0x2d84('‫71','^wSs')+_0x4b0575[_0x2d84('‫72','vjp!')][0x0][_0x2d84('‫73','[g(#')]);}}}}catch(_0x306a1e){}finally{return Promise[_0x2d84('‫74','nXe#')](0x1);}}async['dl'](){var _0x5f5a6e={'SeOBA':function(_0x478c33,_0x5db11c,_0x5d0729){return _0x478c33(_0x5db11c,_0x5d0729);}};try{let _0x484f04=_0x2d84('‮75','Gk8j')+this[_0x2d84('‫76','$Q1a')][_0x2d84('‫77','@7HG')];let _0x2dfbee='';let _0x3bd9fb=_0x5f5a6e['SeOBA'](populateUrlObject,_0x484f04,_0x2dfbee);await httpRequest('post',_0x3bd9fb);let _0x1452bf=httpResult;if(!_0x1452bf)return;$[_0x2d84('‫78','^wSs')](_0x2d84('‫79','%N91')+this[_0x2d84('‫7a','zvPP')]+']'+_0x1452bf[_0x2d84('‮7b','Bv%5')]);}catch(_0xcbfc0c){}finally{return Promise['resolve'](0x1);}}async[_0x2d84('‫7c','9c!6')](){var _0x4f0f03={'UGwvi':function(_0x25d3a5,_0x40c81e){return _0x25d3a5===_0x40c81e;},'ADimx':_0x2d84('‮7d','KN0H'),'RypDi':function(_0x10bfea,_0x18ec6a,_0x404e9a){return _0x10bfea(_0x18ec6a,_0x404e9a);},'Jrvrd':'get','gjANs':_0x2d84('‫7e','gaHb')};try{if(_0x4f0f03[_0x2d84('‫7f','NeSc')](_0x2d84('‮80','Otcz'),_0x4f0f03[_0x2d84('‮81','tl9G')])){$[_0x2d84('‮82','ZSWq')](_0x2d84('‫83','$Q1a')+this[_0x2d84('‫84','qL7L')]+']'+result['message']);}else{let _0x460bda=_0x2d84('‫85','qL7L')+this['param'][_0x2d84('‮86','Kryb')];let _0x5a767c='';let _0x516c86=_0x4f0f03[_0x2d84('‮87','k9vJ')](populateUrlObject,_0x460bda,_0x5a767c);await _0x4f0f03['RypDi'](httpRequest,_0x4f0f03[_0x2d84('‫88','KN0H')],_0x516c86);let _0x77e576=httpResult;if(!_0x77e576)return;if(_0x77e576['status']=0x1){if(_0x77e576['data'][0x1]['status']==0x0){await this[_0x2d84('‫89','IHtW')]();}else{$[_0x2d84('‫10','Gk8j')](_0x2d84('‮8a','9c!6')+this[_0x2d84('‫8b','r#x8')]+']每日抽奖任务已完成');}}}}catch(_0x19f34f){}finally{if(_0x4f0f03[_0x2d84('‫8c','ADh^')]===_0x2d84('‫8d','IHRB')){return Promise[_0x2d84('‫8e','IHRB')](0x1);}else{try{httpResult=JSON[_0x2d84('‫8f','9c!6')](resp[_0x2d84('‫90','9c!6')]);}catch(_0x385641){httpResult=resp[_0x2d84('‫91','nK3x')];}}}}async['getTaskList2'](){var _0x4a67d5={'TMCka':function(_0x167715,_0x2a90be){return _0x167715!==_0x2a90be;},'AUqQP':_0x2d84('‫92','PCKh'),'CDghu':function(_0x5e9a3d,_0x895d4,_0x41a3ba){return _0x5e9a3d(_0x895d4,_0x41a3ba);},'ZpRls':function(_0x5a53cd,_0x508b79,_0x3a1eb2){return _0x5a53cd(_0x508b79,_0x3a1eb2);},'hGJpL':_0x2d84('‮93','VK(&'),'RbPVe':'IZJZO','cvWGe':_0x2d84('‫94','Kryb')};try{if(_0x4a67d5[_0x2d84('‮95','@7HG')](_0x4a67d5[_0x2d84('‮96','jj!p')],_0x4a67d5[_0x2d84('‮97','&ggN')])){$[_0x2d84('‫78','^wSs')](_0x2d84('‫98','[g(#')+this[_0x2d84('‫99','k9vJ')]+']'+result[_0x2d84('‮9a','B6$3')]);}else{let _0x4a94c8='https://xpph7.happydoit.com:8090/farmApi/getTaskList?unionid='+this[_0x2d84('‮9b',')qnZ')]['unionid'];let _0x2ce6b1='';let _0xeb94ec=_0x4a67d5[_0x2d84('‮9c','9c!6')](populateUrlObject,_0x4a94c8,_0x2ce6b1);await _0x4a67d5[_0x2d84('‫9d','VK(&')](httpRequest,_0x2d84('‮9e','^wSs'),_0xeb94ec);let _0x59d71d=httpResult;if(!_0x59d71d)return;if(_0x59d71d['status']=0x1){if(_0x59d71d[_0x2d84('‫9f','@7HG')][0x2][_0x2d84('‮a0','nXe#')]<0x2){if(_0x4a67d5['TMCka'](_0x4a67d5[_0x2d84('‮a1','qnEk')],_0x2d84('‫a2','Bv%5'))){$['logAndNotify'](_0x2d84('‫a3','^wSs')+this['name']+']领取抽奖奖励'+_0x59d71d[_0x2d84('‫a4','zvPP')]);}else{await this[_0x2d84('‮a5','eHp2')]();}}else{if(_0x2d84('‫a6',')qnZ')!==_0x4a67d5[_0x2d84('‮a7','qnEk')]){$[_0x2d84('‫a8','KN0H')](_0x2d84('‮a9','0#T!')+this[_0x2d84('‮aa','q@Z$')]+_0x2d84('‮ab','0#T!'));}else{$['logAndNotify'](_0x2d84('‫ac','q@Z$')+this[_0x2d84('‫ad','#QIR')]+_0x2d84('‮ae','^f3e'));}}}}}catch(_0x2b9608){}finally{if(_0x4a67d5[_0x2d84('‫af','CSR&')]!=='JGhdj'){return Promise[_0x2d84('‫b0','@7HG')](0x1);}else{return Promise[_0x2d84('‫b1','ZSWq')](0x1);}}}async[_0x2d84('‮b2','HQhP')](){var _0x433ab4={'DRIOz':function(_0x592af8,_0x20d21d,_0x2052b2){return _0x592af8(_0x20d21d,_0x2052b2);},'nkmqL':function(_0x23d9cf,_0x124dcd,_0x27131f){return _0x23d9cf(_0x124dcd,_0x27131f);},'UeOID':function(_0x15751,_0x5308b5){return _0x15751==_0x5308b5;},'WpbcF':function(_0x3cf86d,_0x4298e8){return _0x3cf86d!==_0x4298e8;},'KajCP':_0x2d84('‮b3','Sa%9'),'xpjkN':_0x2d84('‮b4','%N91')};try{let _0x347a2c=_0x2d84('‫b5','eHp2')+this[_0x2d84('‮b6','Bv%5')][_0x2d84('‫b7','Sb)Y')];let _0x5aee78='';let _0x16c96d=_0x433ab4[_0x2d84('‮b8','9c!6')](populateUrlObject,_0x347a2c,_0x5aee78);await _0x433ab4['nkmqL'](httpRequest,_0x2d84('‫b9','Gk8j'),_0x16c96d);let _0x1beac4=httpResult;if(!_0x1beac4)return;if(_0x1beac4[_0x2d84('‫ba','Otcz')]=0x1){if(_0x433ab4[_0x2d84('‫bb','wY$P')](_0x1beac4[_0x2d84('‮6f','eJCN')][0x3][_0x2d84('‮bc','zvPP')],0x1)){this[_0x2d84('‮bd','qnEk')]=0x5;await this[_0x2d84('‮be','ZSWq')]();}else{if(_0x433ab4[_0x2d84('‮bf','@BJD')](_0x2d84('‮c0','B6$3'),_0x433ab4[_0x2d84('‮c1','Gk8j')])){$[_0x2d84('‫c2','Sa%9')]('账号['+this['name']+_0x2d84('‮c3','zvPP')+_0x1beac4['data'][0x3]['rwCount']+'人助力奖励');}else{$[_0x2d84('‫c4','jj!p')](_0x2d84('‮c5','zvPP')+this[_0x2d84('‫c6','30yg')]+']'+_0x1beac4['message']);}}}}catch(_0x3edd8d){}finally{if(_0x433ab4[_0x2d84('‫c7','cvLb')](_0x433ab4[_0x2d84('‫c8','r#x8')],_0x433ab4[_0x2d84('‫c9','$Q1a')])){console[_0x2d84('‮ca','wY$P')](e);}else{return Promise[_0x2d84('‫cb','ADh^')](0x1);}}}async[_0x2d84('‫cc','KN0H')](){var _0x365aec={'cMAkg':function(_0x499870,_0x11b97b){return _0x499870!==_0x11b97b;},'SPmDa':_0x2d84('‮cd','30yg'),'EqdCb':function(_0x58ca7c,_0x58a52f,_0x325a88){return _0x58ca7c(_0x58a52f,_0x325a88);},'OmGHt':function(_0x2a5d8a,_0x4e7ba9,_0x235fd2){return _0x2a5d8a(_0x4e7ba9,_0x235fd2);},'lnFlr':_0x2d84('‮ce','Otcz'),'mShnN':_0x2d84('‫cf','IHtW'),'PIEaz':function(_0x483a42,_0x14fcf1){return _0x483a42==_0x14fcf1;}};try{if(_0x365aec['cMAkg'](_0x365aec['SPmDa'],_0x2d84('‮d0','zvPP'))){let _0x10ba4e=_0x2d84('‫d1','q@Z$')+this[_0x2d84('‫d2','eJCN')][_0x2d84('‫d3','CSR&')];let _0x2c9fa5='';let _0x265ca0=_0x365aec['EqdCb'](populateUrlObject,_0x10ba4e,_0x2c9fa5);await _0x365aec[_0x2d84('‮d4','ZSWq')](httpRequest,_0x365aec[_0x2d84('‮d5','NeSc')],_0x265ca0);let _0x54b72c=httpResult;if(!_0x54b72c)return;if(_0x54b72c['status']=0x1){if(_0x365aec[_0x2d84('‮d6','@BJD')](_0x365aec['mShnN'],_0x2d84('‮d7','PCKh'))){if(_0x365aec[_0x2d84('‮d8','tl9G')](_0x54b72c['data'][0x4]['status'],0x1)){this['type']=0x6;await this[_0x2d84('‫d9','B6$3')]();}else{$[_0x2d84('‫6b','[g(#')](_0x2d84('‫da','%6#]')+this['name']+']无邀请奖励可领取');}}else{httpResult=JSON[_0x2d84('‫8f','9c!6')](resp['body']);}}}else{return Promise[_0x2d84('‫db','wY$P')](0x1);}}catch(_0x360b4f){}finally{return Promise['resolve'](0x1);}}async['getUserDate'](){var _0x5a58ae={'Xbola':'GeaLA','dyOJy':function(_0x4a6612,_0x22e104,_0x1d4ef3){return _0x4a6612(_0x22e104,_0x1d4ef3);},'FFyyc':function(_0x19d49f,_0x5db901,_0x18ecff){return _0x19d49f(_0x5db901,_0x18ecff);},'fgyzb':_0x2d84('‫dc','%6#]'),'pByyy':function(_0xdfcb32,_0x45ffa1){return _0xdfcb32==_0x45ffa1;},'KvAAt':'KXlEY'};try{if(_0x5a58ae['Xbola']!==_0x2d84('‫dd','qnEk')){let _0x1d2d7b='https://xpph7.happydoit.com:8090/farmApi/getUserDate?unionid='+this['param'][_0x2d84('‫de','qL7L')];let _0x5d8001='';let _0x26dea1=_0x5a58ae[_0x2d84('‫df','^wSs')](populateUrlObject,_0x1d2d7b,_0x5d8001);await _0x5a58ae[_0x2d84('‫e0','%N91')](httpRequest,_0x5a58ae['fgyzb'],_0x26dea1);let _0x508749=httpResult;if(!_0x508749)return;if(_0x5a58ae[_0x2d84('‫e1','eHp2')](_0x508749[_0x2d84('‮e2','eHp2')],0x1)){$[_0x2d84('‮e3','gaHb')](_0x2d84('‫e4','IHtW')+this[_0x2d84('‫e5','@BJD')]+_0x2d84('‮e6','zvPP'));await $[_0x2d84('‫e7','9c!6')](0xbb8);this['type']=0x1;await this[_0x2d84('‫e8','30yg')]();}else{if(_0x2d84('‫e9','ZSWq')!==_0x5a58ae[_0x2d84('‮ea','%N91')]){$[_0x2d84('‮eb','@7HG')](_0x2d84('‫ec','PCKh')+this[_0x2d84('‫e5','@BJD')]+']'+_0x508749['message']);}else{return Promise[_0x2d84('‫db','wY$P')](0x1);}}}else{$['logAndNotify']('账号['+this[_0x2d84('‮ed','Kryb')]+']'+result[_0x2d84('‫ee','VK(&')]);}}catch(_0x2e3f4f){}finally{if(_0x2d84('‮ef','&ggN')!==_0x2d84('‫f0','0#T!')){return Promise[_0x2d84('‫f1','%N91')](0x1);}else{$[_0x2d84('‮f2','ADh^')](_0x2d84('‮a9','0#T!')+this[_0x2d84('‮f3','vjp!')]+_0x2d84('‫f4','IHtW')+result[_0x2d84('‫f5','%N91')]+'积分');}}}async[_0x2d84('‫f6','&ggN')](){var _0x369277={'dVdqB':function(_0x426a41,_0x40e7b2){return _0x426a41!==_0x40e7b2;},'ZAePd':_0x2d84('‮f7','^wSs'),'Jiqlv':function(_0x24c880,_0x5b9692,_0x41d293,_0x156dcc){return _0x24c880(_0x5b9692,_0x41d293,_0x156dcc);},'TAeTc':function(_0x22bd0e,_0x5a6c08,_0x34d8c3){return _0x22bd0e(_0x5a6c08,_0x34d8c3);},'VvJPY':_0x2d84('‮f8','9c!6'),'zpGkV':function(_0x136361,_0x74168){return _0x136361==_0x74168;},'BmoZK':_0x2d84('‮f9','r#x8'),'zdYZz':function(_0x2acb78,_0x4ea087){return _0x2acb78!==_0x4ea087;},'ypKwz':'ReNCW'};try{if(_0x369277[_0x2d84('‫fa','9c!6')](_0x369277['ZAePd'],_0x2d84('‮fb','jj!p'))){httpResult=resp[_0x2d84('‫fc','^wSs')];}else{let _0x2e3bb7='https://ssl.meco.chinaxpp.com/api/xpppresent/draw';let _0x33a23b=_0x2d84('‮fd','vjp!')+this[_0x2d84('‮fe','vjp!')]['wxid']+_0x2d84('‮ff','&ggN');let _0x4c95ff='42';let _0x4f36e3=_0x369277['Jiqlv'](populateUrlObject1,_0x2e3bb7,_0x4c95ff,_0x33a23b);await _0x369277['TAeTc'](httpRequest,_0x369277[_0x2d84('‫100','XGX#')],_0x4f36e3);let _0x598345=httpResult;if(!_0x598345)return;if(_0x369277[_0x2d84('‮101','ADh^')](_0x598345[_0x2d84('‫65','30yg')],0x1)){var _0x4963ee=_0x369277[_0x2d84('‮102','qL7L')][_0x2d84('‫103','^f3e')]('|'),_0x4048ac=0x0;while(!![]){switch(_0x4963ee[_0x4048ac++]){case'0':this['id']=_0x598345[_0x2d84('‫104','#QIR')]['id'];continue;case'1':await $['wait'](0xbb8);continue;case'2':await this[_0x2d84('‮105','%6#]')]();continue;case'3':await this[_0x2d84('‫106','^f3e')]();continue;case'4':this[_0x2d84('‮107','Bv%5')]=0x2;continue;case'5':$[_0x2d84('‮5b','@BJD')](_0x2d84('‮108','@BJD')+this[_0x2d84('‮109','9c!6')]+_0x2d84('‮10a','ZSWq')+_0x598345[_0x2d84('‮10b','qL7L')][_0x2d84('‫10c','^f3e')]);continue;}break;}}else{if(_0x369277['zdYZz'](_0x369277[_0x2d84('‫10d','XGX#')],_0x369277[_0x2d84('‫10e','uBKy')])){return Promise['resolve'](0x1);}else{$['logAndNotify'](_0x2d84('‮10f','dCPU')+this[_0x2d84('‮110','nK3x')]+']'+_0x598345['message']);}}}}catch(_0x3fba1e){}finally{return Promise[_0x2d84('‮111','gaHb')](0x1);}}async[_0x2d84('‮112','CSR&')](){var _0x10387e={'fcDof':function(_0x35972f,_0x3c20bd,_0x347c2b,_0x324e96){return _0x35972f(_0x3c20bd,_0x347c2b,_0x324e96);},'UDiCG':function(_0x385087,_0x7736e9,_0x1ad070){return _0x385087(_0x7736e9,_0x1ad070);},'ichOz':_0x2d84('‮113','nXe#'),'TWfeP':function(_0xf6fe6,_0xdd644b){return _0xf6fe6==_0xdd644b;},'tQtBU':function(_0x359edb,_0x5e8f50){return _0x359edb===_0x5e8f50;},'AlmVs':'IwDfk','qqWnI':_0x2d84('‮114','dCPU'),'gGBuO':function(_0x20a207,_0x2d101e){return _0x20a207!==_0x2d101e;}};try{let _0x1e2e8a='https://ssl.meco.chinaxpp.com/api/xpppresent/getPointsRedPack';let _0x57495c=_0x2d84('‮115','qL7L')+this['param'][_0x2d84('‮116','Otcz')]+_0x2d84('‫117','XGX#')+this['id'];let _0x43f340='36';let _0x395259=_0x10387e[_0x2d84('‮118','qnEk')](populateUrlObject1,_0x1e2e8a,_0x43f340,_0x57495c);await _0x10387e[_0x2d84('‫119','[g(#')](httpRequest,_0x10387e[_0x2d84('‮11a','@BJD')],_0x395259);let _0x596549=httpResult;if(!_0x596549)return;if(_0x10387e['TWfeP'](_0x596549[_0x2d84('‮11b','nK3x')],0x1)){$['logAndNotify'](_0x2d84('‫11c','ZSWq')+this[_0x2d84('‫11d','%6#]')]+_0x2d84('‮11e','Sa%9')+_0x596549[_0x2d84('‫11f','Sb)Y')]);}else{if(_0x10387e[_0x2d84('‮120','%N91')](_0x10387e['AlmVs'],_0x10387e[_0x2d84('‫121','IHRB')])){if(userCookies)userList[_0x2d84('‫122','ZSWq')](new UserInfo(userCookies));}else{$[_0x2d84('‫123','uBKy')](_0x2d84('‮124','r#x8')+this[_0x2d84('‫125','ADh^')]+']'+_0x596549[_0x2d84('‫126','Gk8j')]);}}}catch(_0x461a98){}finally{if(_0x10387e[_0x2d84('‮127','@BJD')](_0x2d84('‮128','Sa%9'),_0x2d84('‮129','^f3e'))){return Promise[_0x2d84('‫12a','jj!p')](0x1);}else{this[_0x2d84('‮12b','gaHb')]=!![];this[_0x2d84('‮12c','Gk8j')]=!![];}}}async[_0x2d84('‮12d','B6$3')](){var _0x5aa4f8={'WgPxu':function(_0x322cfc,_0x4320a5,_0x555227,_0x187298){return _0x322cfc(_0x4320a5,_0x555227,_0x187298);},'acrPf':function(_0x238aca,_0x51ced5,_0x2cd094){return _0x238aca(_0x51ced5,_0x2cd094);},'xwLuU':function(_0x454aa4,_0x3879de){return _0x454aa4==_0x3879de;}};try{let _0xc8d7ab='https://ssl.meco.chinaxpp.com/api/meco/bigmelonDec';let _0x64f2f9=_0x2d84('‫12e','^f3e')+this[_0x2d84('‮12f','#QIR')][_0x2d84('‫130','VK(&')]+'&points=2';let _0x33b3ab='44';let _0xc8146b=_0x5aa4f8[_0x2d84('‫131','9c!6')](populateUrlObject1,_0xc8d7ab,_0x33b3ab,_0x64f2f9);await _0x5aa4f8[_0x2d84('‮132','wY$P')](httpRequest,'post',_0xc8146b);let _0x5e0ee7=httpResult;if(!_0x5e0ee7)return;if(_0x5aa4f8[_0x2d84('‫133','qL7L')](_0x5e0ee7[_0x2d84('‫134','vjp!')],0x1)){$[_0x2d84('‫135','zvPP')](_0x2d84('‮136','NeSc')+this[_0x2d84('‫55','Bv%5')]+']会员互动玩游戏\x20'+_0x5e0ee7[_0x2d84('‮137','uBKy')]);await $[_0x2d84('‮138','^wSs')](0xbb8);this[_0x2d84('‫139','nXe#')]=0x4;await this[_0x2d84('‮13a','Sa%9')]();}else{$[_0x2d84('‫13b','cvLb')]('账号['+this['name']+']'+_0x5e0ee7[_0x2d84('‫13c','k9vJ')]);}}catch(_0x4b7853){console[_0x2d84('‮13d','VK(&')](_0x4b7853);}finally{return Promise[_0x2d84('‫b1','ZSWq')](0x1);}}async['sign'](){var _0x28b623={'FySwb':function(_0x68015e,_0x411f86,_0x2272cf,_0x248feb){return _0x68015e(_0x411f86,_0x2272cf,_0x248feb);}};try{let _0x5a6731=_0x2d84('‮13e','PCKh');let _0x544341=_0x2d84('‮13f','vjp!')+this[_0x2d84('‮140','^f3e')]['openid'];let _0x3287a5='35';let _0x144c92=_0x28b623['FySwb'](populateUrlObject1,_0x5a6731,_0x3287a5,_0x544341);await httpRequest('post',_0x144c92);let _0xe78f7a=httpResult;if(!_0xe78f7a)return;if(_0xe78f7a['status']==0x1){$[_0x2d84('‮5b','@BJD')](_0x2d84('‫a3','^wSs')+this[_0x2d84('‮57','VK(&')]+']每日签到获得'+_0xe78f7a[_0x2d84('‫141','cvLb')]+'积分');}else{$[_0x2d84('‮142','k9vJ')]('账号['+this['name']+']'+_0xe78f7a['message']);}}catch(_0x1a3184){console[_0x2d84('‮143','ADh^')](_0x1a3184);}finally{return Promise[_0x2d84('‮144','Sb)Y')](0x1);}}async[_0x2d84('‫145','qL7L')](){var _0x51e693={'MjUXh':_0x2d84('‫146','0#T!'),'riBfA':_0x2d84('‮147','uBKy'),'uAtnd':function(_0x15ad9a,_0x5b2d7a){return _0x15ad9a==_0x5b2d7a;},'jJbNH':_0x2d84('‮148','cvLb'),'IDmTm':_0x2d84('‫149','cvLb')};try{if(_0x51e693['MjUXh']===_0x2d84('‮14a','9c!6')){let _0x140255=_0x2d84('‫14b','IHRB')+this[_0x2d84('‮14c','30yg')][_0x2d84('‮4a','nXe#')]+_0x2d84('‮14d','tl9G')+this['type'];let _0x26b68d='';let _0x39c277=populateUrlObject(_0x140255,_0x26b68d);await httpRequest(_0x51e693[_0x2d84('‮14e','@7HG')],_0x39c277);let _0x18d4b9=httpResult;if(!_0x18d4b9)return;if(_0x51e693[_0x2d84('‮14f','^wSs')](_0x18d4b9['status'],0x1)){$[_0x2d84('‫123','uBKy')](_0x2d84('‮150','30yg')+this[_0x2d84('‫3f','eHp2')]+']'+_0x18d4b9[_0x2d84('‫151','dCPU')]);}else{if('cXnwe'!==_0x51e693[_0x2d84('‫152','uBKy')]){this[_0x2d84('‮153','@BJD')]=$[_0x2d84('‮154','eHp2')](str);this[_0x2d84('‮155','eHp2')]=!![];}else{$[_0x2d84('‮156','IHRB')](_0x2d84('‫157','uBKy')+this[_0x2d84('‫7a','zvPP')]+']'+_0x18d4b9[_0x2d84('‫158','eJCN')]);}}}else{return Promise[_0x2d84('‮159','Kryb')](0x1);}}catch(_0x35179d){}finally{if(_0x51e693['IDmTm']!==_0x51e693[_0x2d84('‫15a','uBKy')]){$['logAndNotify'](_0x2d84('‫ec','PCKh')+this[_0x2d84('‫e5','@BJD')]+_0x2d84('‮15b','Gk8j'));}else{return Promise[_0x2d84('‮15c','HQhP')](0x1);}}}async[_0x2d84('‮15d','Kryb')](){var _0x473959={'KBLEQ':_0x2d84('‮15e',')qnZ'),'DCooq':'DyeEf','AsuxS':function(_0x3e0de6,_0x3c5fde,_0x556845){return _0x3e0de6(_0x3c5fde,_0x556845);},'OreOu':_0x2d84('‫15f','zvPP'),'OEHGR':function(_0x458a94,_0x57b90d){return _0x458a94==_0x57b90d;},'WBeBp':'EXFEx'};try{if(_0x473959[_0x2d84('‫160','eHp2')]!==_0x473959['DCooq']){let _0x41ad62=_0x2d84('‫161','uBKy')+this['param'][_0x2d84('‮162','IHtW')]+_0x2d84('‮163','@7HG')+this[_0x2d84('‮14c','30yg')][_0x2d84('‫164','r#x8')]+_0x2d84('‮165','Sb)Y')+ts;let _0x3021ac='';let _0x214c28=_0x473959[_0x2d84('‫166','eHp2')](populateUrlObject,_0x41ad62,_0x3021ac);await _0x473959[_0x2d84('‮167','uBKy')](httpRequest,_0x473959[_0x2d84('‮168','k9vJ')],_0x214c28);let _0x16041c=httpResult;if(!_0x16041c)return;if(_0x473959[_0x2d84('‮169','Otcz')](_0x16041c['status'],0x1)){$['logAndNotify'](_0x2d84('‮3e','tl9G')+this[_0x2d84('‮16a','PCKh')]+']'+_0x16041c[_0x2d84('‮16b','#QIR')]);}else{$['logAndNotify'](_0x2d84('‮16c','eHp2')+this[_0x2d84('‫16d',')qnZ')]+']'+_0x16041c[_0x2d84('‮16e','r#x8')]);}}else{$['logAndNotify']('账号['+this[_0x2d84('‫16f','[g(#')]+']'+result['message']);}}catch(_0x3785f7){}finally{if('FnUEu'===_0x473959[_0x2d84('‮170','q@Z$')]){$['logAndNotify'](_0x2d84('‫171','VK(&')+this['name']+']'+result[_0x2d84('‫172','tl9G')]+_0x2d84('‫173','Sa%9'));}else{return Promise['resolve'](0x1);}}}async[_0x2d84('‮174','VK(&')](){var _0xf09418={'PqWzB':function(_0x375ec5,_0x370dd2){return _0x375ec5===_0x370dd2;},'NmwaG':_0x2d84('‫175','KN0H'),'bCXtg':function(_0x283d62,_0x158ced,_0x30dd3b){return _0x283d62(_0x158ced,_0x30dd3b);},'eMgkP':function(_0x12b044,_0x46629d){return _0x12b044==_0x46629d;},'QtmsH':function(_0x303303,_0x346421){return _0x303303===_0x346421;},'UfMsK':'woBcw','Ocvrx':_0x2d84('‫176','$Q1a')};try{if(_0xf09418[_0x2d84('‫177','IHRB')](_0xf09418[_0x2d84('‮178','jj!p')],_0xf09418[_0x2d84('‫179','qL7L')])){let _0x3f900f=_0x2d84('‫17a','tl9G')+hpid+'&openid='+this['param'][_0x2d84('‮17b','9c!6')];let _0x44b068='';let _0x488db0=_0xf09418[_0x2d84('‫17c','^f3e')](populateUrlObject,_0x3f900f,_0x44b068);await _0xf09418[_0x2d84('‮17d','%6#]')](httpRequest,'post',_0x488db0);let _0x370719=httpResult;if(!_0x370719)return;if(_0xf09418[_0x2d84('‫17e','IHRB')](_0x370719['status'],0x1)){if(_0xf09418[_0x2d84('‫17f','30yg')](_0x2d84('‫180','Sb)Y'),_0xf09418['UfMsK'])){$['logAndNotify'](_0x2d84('‫157','uBKy')+this[_0x2d84('‮57','VK(&')]+']'+_0x370719[_0x2d84('‮181','cvLb')]);}else{return Promise['resolve'](0x1);}}else{$[_0x2d84('‫56','$Q1a')](_0x2d84('‮182','#QIR')+this['name']+']'+_0x370719[_0x2d84('‫183','vjp!')]);}}else{return Promise['resolve'](0x1);}}catch(_0x36b636){}finally{if(_0xf09418['Ocvrx']!==_0xf09418[_0x2d84('‮184','^wSs')]){taskall[_0x2d84('‫185','%N91')](user['km']());}else{return Promise['resolve'](0x1);}}}async[_0x2d84('‮186','KN0H')](){var _0xed68a6={'OBZOe':function(_0x341871,_0x35b252){return _0x341871===_0x35b252;},'xfuJK':_0x2d84('‫187','^wSs'),'lVbxT':function(_0x5c8a20,_0x3547f5,_0x55ac72){return _0x5c8a20(_0x3547f5,_0x55ac72);},'cfLIu':function(_0x4bebd1,_0x96ccf6){return _0x4bebd1==_0x96ccf6;},'rTJQK':function(_0x5c10b5,_0x244cfb){return _0x5c10b5===_0x244cfb;},'xxcBN':_0x2d84('‫188','NeSc'),'DnKds':function(_0x20129d,_0x53fe95){return _0x20129d===_0x53fe95;},'mfCGp':'reAQD'};try{if(_0xed68a6['OBZOe'](_0xed68a6[_0x2d84('‮189','KN0H')],_0xed68a6[_0x2d84('‮18a','&ggN')])){let _0x51a7de=_0x2d84('‮18b','NeSc')+this[_0x2d84('‮18c','Sb)Y')][_0x2d84('‮18d','nK3x')];let _0x3ddf17='';let _0x458763=_0xed68a6[_0x2d84('‫18e','IHtW')](populateUrlObject,_0x51a7de,_0x3ddf17);await _0xed68a6[_0x2d84('‮18f','gaHb')](httpRequest,_0x2d84('‫190','vjp!'),_0x458763);let _0x4feec6=httpResult;if(!_0x4feec6)return;if(_0xed68a6[_0x2d84('‮191','HQhP')](_0x4feec6['status'],0x1)){if(_0xed68a6[_0x2d84('‫192','nXe#')](_0xed68a6[_0x2d84('‫193','qL7L')],_0xed68a6[_0x2d84('‮194','XGX#')])){$[_0x2d84('‫2e','Otcz')]('账号['+this[_0x2d84('‫195','@7HG')]+']'+_0x4feec6['data'][0x0][_0x2d84('‮196','VK(&')]+'\x20\x20'+_0x4feec6[_0x2d84('‮197','Bv%5')][0x0][_0x2d84('‮198','@BJD')]+'\x20\x20当前等级进度'+_0x4feec6[_0x2d84('‮199','^wSs')][0x0][_0x2d84('‮19a','&ggN')]);}else{$[_0x2d84('‫19b','VK(&')](_0x2d84('‫a3','^wSs')+this[_0x2d84('‮109','9c!6')]+']'+_0x4feec6[_0x2d84('‫158','eJCN')]);}}}else{var _0x45439b=_0x2d84('‫19c','%N91')[_0x2d84('‮19d','0#T!')]('|'),_0x34dc82=0x0;while(!![]){switch(_0x45439b[_0x34dc82++]){case'0':this[_0x2d84('‮19e','Bv%5')]=![];continue;case'1':this[_0x2d84('‮19f','NeSc')]=this['index'];continue;case'2':this['index']=++userIdx;continue;case'3':this[_0x2d84('‫1a0','tl9G')]=![];continue;case'4':try{this[_0x2d84('‮9b',')qnZ')]=$[_0x2d84('‫1a1','^f3e')](str);this[_0x2d84('‮1a2','r#x8')]=!![];}catch(_0xb5acef){this['ckValid']=![];$[_0x2d84('‮1a3','#QIR')](_0x2d84('‮136','NeSc')+this[_0x2d84('‫1a4','Sb)Y')]+_0x2d84('‮1a5','Sb)Y'));}continue;}break;}}}catch(_0x8aba4e){}finally{if(_0xed68a6[_0x2d84('‮1a6','Kryb')](_0xed68a6[_0x2d84('‮1a7','gaHb')],_0xed68a6[_0x2d84('‮1a8','$Q1a')])){return Promise[_0x2d84('‫1a9','Sa%9')](0x1);}else{console[_0x2d84('‫1aa','Sa%9')](e);}}}async[_0x2d84('‫1ab','9c!6')](){var _0x3e9188={'WCpci':function(_0x2cc9bd,_0x4a3e9e,_0x129bb9){return _0x2cc9bd(_0x4a3e9e,_0x129bb9);},'Iiopj':function(_0x46c2bb,_0x3ad98b,_0x491cea){return _0x46c2bb(_0x3ad98b,_0x491cea);},'hOMUn':_0x2d84('‫15f','zvPP'),'bBTiW':function(_0x405d4f,_0x424888){return _0x405d4f===_0x424888;},'GBnrV':_0x2d84('‫1ac','ZSWq'),'qOkTd':_0x2d84('‫1ad','jj!p'),'ItUgo':function(_0x1fe93d,_0x28dc15){return _0x1fe93d!==_0x28dc15;},'lCKnB':'IxUuk','IFJqx':_0x2d84('‮1ae','r#x8')};try{let _0x14d3ae=_0x2d84('‫1af','@BJD')+this[_0x2d84('‫61','%6#]')][_0x2d84('‫b7','Sb)Y')];let _0x3df748='';let _0x20b28d=_0x3e9188[_0x2d84('‮1b0','qnEk')](populateUrlObject,_0x14d3ae,_0x3df748);await _0x3e9188[_0x2d84('‫1b1','HQhP')](httpRequest,_0x3e9188[_0x2d84('‮1b2','wY$P')],_0x20b28d);let _0x90abd0=httpResult;if(!_0x90abd0)return;if(_0x90abd0[_0x2d84('‫1b3','jj!p')]==0x1){if(_0x3e9188[_0x2d84('‮1b4','wY$P')](_0x3e9188[_0x2d84('‮1b5','CSR&')],_0x3e9188[_0x2d84('‫1b6','IHRB')])){let _0x579620=0x1;_0x579620++;$[_0x2d84('‫1b7','eHp2')]('账号['+this[_0x2d84('‮1b8','dCPU')]+']第'+_0x579620+_0x2d84('‫1b9','$Q1a')+_0x90abd0[_0x2d84('‫1ba','CSR&')]);await $[_0x2d84('‫1bb','nXe#')](0x1388);await this[_0x2d84('‮1bc','Sb)Y')]();}else{$[_0x2d84('‮1bd','tl9G')](_0x2d84('‮1be','nK3x')+this['name']+']'+_0x90abd0[_0x2d84('‮1bf','30yg')]);}}else{if(_0x3e9188[_0x2d84('‮1c0','nXe#')]!==_0x2d84('‮1c1',')qnZ')){return Promise[_0x2d84('‮1c2','[g(#')](0x1);}else{$[_0x2d84('‮1c3','wY$P')](_0x2d84('‮16c','eHp2')+this[_0x2d84('‫55','Bv%5')]+']'+_0x90abd0['message']);}}}catch(_0x2d9cb9){}finally{if(_0x3e9188[_0x2d84('‫1c4','IHRB')](_0x3e9188[_0x2d84('‫1c5','0#T!')],_0x3e9188[_0x2d84('‮1c6','Bv%5')])){return Promise['resolve'](0x1);}else{return Promise[_0x2d84('‮1c7','9c!6')](0x1);}}}}!(async()=>{var _0x4c92b9={'bqCje':_0x2d84('‫1c8','VK(&'),'dBjor':function(_0x1221fb,_0x371b9e){return _0x1221fb>_0x371b9e;},'dpUzB':'mgYcP','boSxL':_0x2d84('‮1c9','Sb)Y'),'BVpEe':_0x2d84('‮1ca','uBKy'),'lwtct':_0x2d84('‫1cb','q@Z$'),'Ffcwx':function(_0x25a648,_0x3e0538){return _0x25a648!==_0x3e0538;},'cEnaN':_0x2d84('‫1cc','B6$3'),'WGuvd':_0x2d84('‫1cd','Kryb')};if(typeof $request!==_0x4c92b9[_0x2d84('‮1ce','IHtW')]){}else{if(!(await checkEnv()))return;let _0x3fb4ab=[];let _0x32ed51=userList['filter'](_0x4efd13=>_0x4efd13[_0x2d84('‮1cf','PCKh')]);if(_0x4c92b9[_0x2d84('‮1d0','qnEk')](_0x32ed51[_0x2d84('‮1d1','9c!6')],0x0)){if(_0x4c92b9[_0x2d84('‫1d2','Sb)Y')]===_0x4c92b9[_0x2d84('‮1d3','IHRB')]){return Promise[_0x2d84('‫1d4','IHtW')](0x1);}else{$[_0x2d84('‫1d5','%N91')](_0x2d84('‮1d6','&ggN'));_0x3fb4ab=[];for(let _0x3f58bd of _0x32ed51){_0x3fb4ab[_0x2d84('‫1d7','CSR&')](_0x3f58bd['km']());}await Promise['all'](_0x3fb4ab);_0x32ed51=_0x32ed51[_0x2d84('‫1d8',')qnZ')](_0x40d819=>_0x40d819[_0x2d84('‫1d9','Bv%5')]);if(_0x4c92b9[_0x2d84('‮1da','ZSWq')](_0x32ed51['length'],0x0)){$[_0x2d84('‮1c3','wY$P')](_0x4c92b9[_0x2d84('‫1db','zvPP')]);_0x3fb4ab=[];for(let _0x33891c of _0x32ed51[_0x2d84('‫1dc','eJCN')](_0xc3e853=>_0xc3e853[_0x2d84('‫1dd','#QIR')])){_0x3fb4ab[_0x2d84('‫1de','tl9G')](_0x33891c[_0x2d84('‮1df','vjp!')]());await $[_0x2d84('‫1e0','ADh^')](0x1388);_0x3fb4ab[_0x2d84('‫1e1','VK(&')](_0x33891c['dl']());await $['wait'](0x1388);_0x3fb4ab[_0x2d84('‮1e2','&ggN')](_0x33891c[_0x2d84('‮1e3','Kryb')]());await $['wait'](0x1388);_0x3fb4ab[_0x2d84('‮1e4','NeSc')](_0x33891c['getTaskList1']());await $[_0x2d84('‫1e5','0#T!')](0x1388);_0x3fb4ab[_0x2d84('‫1e6','uBKy')](_0x33891c[_0x2d84('‮1e7','HQhP')]());await $[_0x2d84('‮1e8','^f3e')](0x1388);_0x3fb4ab[_0x2d84('‮1e9','ADh^')](_0x33891c[_0x2d84('‮1ea','@7HG')]());await $[_0x2d84('‮31','Sb)Y')](0x1388);_0x3fb4ab[_0x2d84('‮1eb','KN0H')](_0x33891c[_0x2d84('‮1ec','NeSc')]());await $[_0x2d84('‫1ed','PCKh')](0x1388);_0x3fb4ab['push'](_0x33891c[_0x2d84('‮1ee','zvPP')]());await $['wait'](0x1f40);_0x3fb4ab[_0x2d84('‫1ef','%6#]')](_0x33891c[_0x2d84('‮1f0','eJCN')]());}await Promise[_0x2d84('‮1f1','wY$P')](_0x3fb4ab);$[_0x2d84('‫1b7','eHp2')](_0x4c92b9[_0x2d84('‮1f2','&ggN')]);_0x3fb4ab=[];for(let _0x3a7a0e of _0x32ed51){if(_0x4c92b9[_0x2d84('‫1f3','XGX#')](_0x4c92b9[_0x2d84('‮1f4','NeSc')],_0x4c92b9['WGuvd'])){_0x3fb4ab[_0x2d84('‫1ef','%6#]')](_0x3a7a0e[_0x2d84('‫1f5','0#T!')]());await $[_0x2d84('‮1f6','Gk8j')](0xbb8);_0x3fb4ab[_0x2d84('‮1f7','9c!6')](_0x3a7a0e['saveUserEnergy']());}else{return Promise[_0x2d84('‫1f8','PCKh')](0x1);}}await Promise['all'](_0x3fb4ab);}}}await $[_0x2d84('‫1f9','qL7L')]();}})()[_0x2d84('‫1fa','@7HG')](_0x44f9b9=>console[_0x2d84('‮1fb','$Q1a')](_0x44f9b9))['finally'](()=>$[_0x2d84('‮1fc','cvLb')]());async function checkEnv(){var _0x8fbba2={'kmyfp':_0x2d84('‫1fd','Bv%5'),'SCLDl':'application/json;\x20charset=utf-8','XksTa':_0x2d84('‫1fe','uBKy'),'myUYC':function(_0x1d67eb,_0x424ef3){return _0x1d67eb===_0x424ef3;},'nOvIc':'TdsGX','zrAqw':function(_0x567b52,_0x309059){return _0x567b52>_0x309059;},'hIejX':function(_0x144e5c,_0x449af0){return _0x144e5c!==_0x449af0;},'kmgEY':'uWqgE','Dzowp':_0x2d84('‮1ff','HQhP'),'VVACl':_0x2d84('‫200','@7HG'),'czqYY':_0x2d84('‫201','Otcz')};if(userCookie){let _0x4547db=envSplitor[0x0];for(let _0x4e99e8 of envSplitor){if(_0x8fbba2[_0x2d84('‮202','HQhP')](_0x8fbba2['nOvIc'],_0x2d84('‫203','dCPU'))){$['logAndNotify']('账号['+this[_0x2d84('‫204','cvLb')]+']每日抽奖任务已完成');}else{if(_0x8fbba2['zrAqw'](userCookie[_0x2d84('‮205','^wSs')](_0x4e99e8),-0x1)){_0x4547db=_0x4e99e8;break;}}}for(let _0x40c58c of userCookie[_0x2d84('‮206','XGX#')](_0x4547db)){if(_0x8fbba2[_0x2d84('‮207','eJCN')](_0x8fbba2[_0x2d84('‫208','cvLb')],_0x8fbba2[_0x2d84('‮209','Kryb')])){if(_0x40c58c)userList[_0x2d84('‫20a','qL7L')](new UserInfo(_0x40c58c));}else{let _0x3dd1c1=url[_0x2d84('‮20b','nXe#')]('//','/')['split']('/')[0x1];let _0x2845cf={'url':url,'headers':{'Host':_0x3dd1c1,'User-Agent':defaultUA},'timeout':0x1388};if(body){_0x2845cf['body']=body;_0x2845cf['headers'][_0x8fbba2['kmyfp']]=_0x8fbba2[_0x2d84('‮20c','dCPU')];_0x2845cf[_0x2d84('‫20d','qnEk')][_0x8fbba2[_0x2d84('‫20e','%N91')]]=_0x2845cf['body']?_0x2845cf[_0x2d84('‫20f','wY$P')]['length']:0x0;}return _0x2845cf;}}userCount=userList['length'];}else{if(_0x8fbba2[_0x2d84('‫210','Bv%5')](_0x8fbba2[_0x2d84('‫211','tl9G')],'CwvCc')){$[_0x2d84('‮eb','@7HG')](_0x2d84('‮c5','zvPP')+this[_0x2d84('‫16d',')qnZ')]+']'+result['message']);}else{console['log'](_0x8fbba2[_0x2d84('‫212','XGX#')]);return;}}console[_0x2d84('‮213','qL7L')](_0x2d84('‮214','0#T!')+userCount+_0x2d84('‫215','vjp!'));return!![];}function populateUrlObject(_0x4ca209,_0x1538d8=''){var _0x1b19b8={'cnTSL':_0x2d84('‮216','CSR&'),'Mfxex':_0x2d84('‮217','^wSs'),'WWOfX':_0x2d84('‫218','30yg')};let _0x3af89e=_0x4ca209['replace']('//','/')[_0x2d84('‮219','Otcz')]('/')[0x1];let _0x24e9c3={'url':_0x4ca209,'headers':{'Host':_0x3af89e,'User-Agent':defaultUA},'timeout':0x1388};if(_0x1538d8){_0x24e9c3[_0x2d84('‮21a','nXe#')]=_0x1538d8;_0x24e9c3[_0x2d84('‮21b','wY$P')][_0x1b19b8[_0x2d84('‫21c','Sa%9')]]=_0x1b19b8[_0x2d84('‮21d','&ggN')];_0x24e9c3['headers'][_0x1b19b8[_0x2d84('‮21e','^wSs')]]=_0x24e9c3[_0x2d84('‫21f','k9vJ')]?_0x24e9c3[_0x2d84('‮220','[g(#')][_0x2d84('‫221','HQhP')]:0x0;}return _0x24e9c3;}function populateUrlObject1(_0x43d3b7,_0x498fa5,_0x43acd6=''){var _0x2a884b={'sBNsf':'application/x-www-form-urlencoded','NcKfW':function(_0x1f5b1c,_0x2c254f){return _0x1f5b1c===_0x2c254f;},'YpGih':_0x2d84('‫222','0#T!'),'QZqIw':_0x2d84('‮216','CSR&'),'pkDNG':_0x2d84('‫223','qL7L')};let _0x18b9f6=_0x43d3b7[_0x2d84('‫224','Otcz')]('//','/')[_0x2d84('‮225','cvLb')]('/')[0x1];let _0x5b0ad3={'url':_0x43d3b7,'headers':{'Host':_0x18b9f6,'Content-Length':_0x498fa5,'content-type':_0x2a884b[_0x2d84('‫226','^wSs')],'User-Agent':defaultUA},'timeout':0x1388};if(_0x43acd6){if(_0x2a884b[_0x2d84('‫227','r#x8')](_0x2a884b[_0x2d84('‮228','&ggN')],_0x2a884b[_0x2d84('‫229','#QIR')])){_0x5b0ad3[_0x2d84('‫22a','%6#]')]=_0x43acd6;_0x5b0ad3[_0x2d84('‮23','Sb)Y')][_0x2a884b['QZqIw']]=_0x2a884b['sBNsf'];_0x5b0ad3['headers'][_0x2a884b[_0x2d84('‮22b','30yg')]]=_0x5b0ad3[_0x2d84('‮22c','ADh^')]?_0x5b0ad3['body'][_0x2d84('‫22d','VK(&')]:0x0;}else{console[_0x2d84('‮22e','Kryb')](_0x2d84('‫22f','ADh^'));return;}}return _0x5b0ad3;}async function httpRequest(_0x36af7f,_0x4aecce){var _0x439fc6={'kSarv':_0x2d84('‫230','eHp2'),'xHRuK':function(_0x4df47c,_0x2634aa){return _0x4df47c!==_0x2634aa;},'eVfGE':_0x2d84('‮231','q@Z$'),'jzgPs':_0x2d84('‫232','0#T!'),'FzpaI':function(_0x443876,_0x5467cf){return _0x443876==_0x5467cf;},'zghBI':'object','VNvpg':function(_0x5ee193,_0x281a3b){return _0x5ee193===_0x281a3b;},'bFEkJ':_0x2d84('‮233','nXe#')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x20e88a=>{$[_0x2d84('‫234','nK3x')](_0x36af7f,_0x4aecce,async(_0x285687,_0x250d20,_0x231dcb)=>{if(_0x439fc6['kSarv']===_0x439fc6[_0x2d84('‮235','uBKy')]){try{if(_0x439fc6['xHRuK'](_0x439fc6[_0x2d84('‮236','^wSs')],_0x439fc6['jzgPs'])){httpReq=_0x250d20;httpResp=_0x231dcb;if(_0x285687){console[_0x2d84('‫237','KN0H')](_0x36af7f+_0x2d84('‮238','Sb)Y'));console[_0x2d84('‫239','&ggN')](JSON['stringify'](_0x285687));}else{if(_0x231dcb['body']){if(_0x439fc6[_0x2d84('‫23a','&ggN')](typeof _0x231dcb[_0x2d84('‮23b','IHtW')],_0x439fc6['zghBI'])){if(_0x439fc6[_0x2d84('‮23c',')qnZ')]('Afpls',_0x439fc6[_0x2d84('‮23d','ZSWq')])){return Promise[_0x2d84('‫23e','eHp2')](0x1);}else{httpResult=_0x231dcb[_0x2d84('‮23f','#QIR')];}}else{try{httpResult=JSON[_0x2d84('‫240','Sa%9')](_0x231dcb[_0x2d84('‫22a','%6#]')]);}catch(_0x1d28d8){httpResult=_0x231dcb[_0x2d84('‫241','Kryb')];}}}}}else{httpResult=_0x231dcb[_0x2d84('‫242','Gk8j')];}}catch(_0x154a34){console[_0x2d84('‮243','jj!p')](_0x154a34);}finally{_0x20e88a();}}else{return Promise[_0x2d84('‮144','Sb)Y')](0x1);}});});};_0xodX='jsjiami.com.v6';

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