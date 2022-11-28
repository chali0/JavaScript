/*
Meco真茶局

变量：捉包unionid=xxx openid=xxx wxid=123456用&连接   多账号换行隔开
格式：export meco="unionid=xxxxxxxx&openid=xxx&wxid=1234"

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("Meco真茶局");
let hpid = 'oPwQG5puFzR3zT4mTGLc59KAiLBU' //需要助力的账号openid
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x18001729) NetType/WIFI Language/zh_CN'
var _0xodX='jsjiami.com.v6',_0xodX_=['‮_0xodX'],_0x3364=[_0xodX,'w4YZFg==','eQolw4LCgg==','w6pIQcOFHw==','wqdaARkXShg=','w6tmPywe','YcOww4bDrsOp','eQcBw6bClg==','EkjClVxD','w5l7UcOMwphMw5c=','woDDlcKQIW7Cm8OFQxtkR8KEIgp+NQ/DhMKQwqhOK8OTwqI0J8KRC082GcOZHQ/CqU/CnERhw5ZXwrVhP1Frw6o=','MsK+KhwyLsKi','w4jCvig2Rw==','Ux0Ow6vCmcK+','JBHCnsOJwoc=','w7ROfMOZIw==','VAEzw5HChQ==','w5ZMOBo=','w6XmrJDmlr/nrKnliJrojK3lvIs=','W8KRBsOpw7DCi1jDu8KzG8Ohcg==','OC4CUw==','I8KjeUbCjw==','XMKGYcKRwr4=','6LWQ5Y6xwo4=','O8Kjw4bCtg==','Q1zChB8Zw7kG','wp7DrTU+wp7CssK5','f8KBwqvCscKyw4bDgQ==','wpzDuCgd','b8KsUMKrwqI=','w4ABGGJg','wqNowqjDpMKv','ZglgckM=','wrF0HcK1dVcnwrc/wqLDs8K1Y8O2Sn3DuTICBhXCumXCuFPCh8Kew7/CiT0oVcKHV8KJecOeTR7DtsKuw4IWacK2w4xFwrbCjwllBkFEwpIVXg==','Qwg0wqjDtgdE','w7IVGcKlw6pn','YsOOJ1Br','ccO3w7sQYA==','wprDgisAw7nDtw==','6LSI5Y+Owqw=','fSTDtlg=','w5F7GTMN','QUpsw49j','wqPDpCASwos=','wqlBNHEaw49A','w7Jib8OPJjnCl2zDoXx5ZA==','6LaN5Y+peQ==','YMKBwrvCp8K6w5fDgQ==','BMOww5NxwrpkEMKiPgLDkcOh','UgwGw6A=','A8OPw5BewqM=','axXDo2vCkA==','Yy/DuXXCpQ==','Fx8pXcK/','wr/DuwUAwos=','dcO1wo/CuFs=','wpzDvTU5','PjsbRsKJOwU0woHDvm/DhGxsZ8KxIghgwo7CjB85w5V9wolgBcOSHF/Cq8OVwqwRWkvDjsKqwp4mw5VOEsOtwovCjsK9wpY5bCUbw4XCr3hpA8Osw6bCtcKLETFcKw==','wphfVMOrcA==','w6pSwr8bw7XCrlzCsw==','RgcvwqbDtQ==','woPDpz4Hw5LDng==','w4/Dly4Qw7jDrcKTw7Rr','w74bK3lw','XlbChBg=','wpIXCcKzw40=','wp/DvCclwofCtw==','woTDq8KOH3A=','w6gew5HDtsKs','GRPClXkl','woZfS8Ov','VcOywr7Dm0jCjRTCpw==','aRhxY1jDucKq','wrvCjhrDnSk9XQ==','QcKKQ8KTwrkvwprCl2A3w4TCug==','6LSR5YyJOg==','w6VuHuahg+W9oOmVk+ivkA==','wqB3wqUww7Y=','OSvCgVsp','G8KWTELCkg==','woRRQcOLc8KFMSxTw45NGg==','6LeP5Y2BEQ==','NcOtwovCiA==','wo/DvA0Iw5fDk8OG','wrgOB8KUw6E+I2MZw5jCjBE=','6Let5Y2IQw==','HyjCscOIwrk=','YMOCw5QP','LcKhPAY=','w5JRD8KPaw==','w7LCu8KJamLCtiDCk8Kcw4DCon/CncOoBhXCrlnDhncWwo0kwo/DuMOqwr1ENcKBJ8O8w7oOX8OVw6ZSwphcwr4Uw4XCu8KfSMOYPcOIwoA3w4Q1bHLDlAI/wqjChBjCucOLw6XCusOBI8K5w55e','w77CijzDmSs9XcOy','w6rCrsKPe3w=','B8OZVcOMTDw=','wqtKWA/Cuw==','w54bNVhe','XsKRRcKmwqI4','w75HBcKSSQ==','w4Z6a8OFEQ==','wrlQFTcVWDNiIMKCw4Fa','WWzCvMKRwqhowqE=','VsOnwr7CiE8=','w5hqUMKRwp5Jw50E','6Leq5Y+KwpQ=','Y8KFwqXCsQ==','ZElJw61zw5LDlw==','wqrDp8KzKWk=','VMOww7LDk8OW','HDjComgs','wqrCgDzDkCQ3XA==','woJxwozDg8K1','w4gZFXg=','bitEVmA=','XR0bw6nCmcK5asKbFQE9wrQvJ3XCocKzcGnCkcKQAMOKNG0UcsOfw6/CucK3','MxLCn2g4w750woDDrcKWwpPDh1EZ','P8KhKws=','ajLChgc=','ZUlUw7lmw50=','UcKXD8OMw5zClkPDusKuHcOpYlE=','bMKUwrjCuMKyw5PDhS/DtcOGwrbDtQfCgsOzX8O8w5kiVMKKUcOOYWXDk8Kfw5xgwqRObMKy','wqrDmSQAw6nDqsKKwrwaBCnDrMOww5A=','NyrCmGgx','OkzCs25n','SiLDrVBw','RRYxwq7DrA==','ccKWI8Ocw6Q=','OcOjwoLClA==','w5xEJMKxecOowq5+NsKoTFY=','wqrDvxkdw4E=','IsKoAzluw4Z2','wqNywrnDnsKg','VcKRBcOR','RcOywrxDV8Oo','wqPDi2wEEMKDVDrCksO9J8OPw7cBw4HDnMKFw6/ClMKSwrbCr1PDgMO/w4bDqcK1w7pSIMKUwrjDnFbDnERdw7Jvw6vClMOZwrMNR8OANCXCrsK5w4Itw4rDkcOCDcKPZ3c/w7LCsg==','BifCp8OMwqw=','wqBRGxkVVRk=','wrBqwrfDjMKE','AMKpfnLCoA==','wpN2wo/DosK2','RMOxwqPCoVU=','BCPCpsOCwq1Ow50=','RcO4wrVlTcOkahHCuw7CtHs=','ZsOOw5sUYXkfw7o=','aMOHwoHCrA==','wr8L5byZ5YqI562V57ih6LyB5bu1','wr1hHcKk','wpzDpTQOw4nDn8ORDw==','wrNvKj8o','S8Ojwr/CmkPCmR4=','IcKhSmDCs2YVw7wnS3Fiw5PDsw==','H8Omw65WwrM=','dgLDjGxX','ZcKQwrzCpMKoworCi3TDpMOZwqjCskjCgcOsScO7woQ9X8KXVcKXOnTDkMKXwog7w7sTOcO5DHgxHMO/BcOKN8OZRcOAwoFkw7TDjsK5worDlDkXwpZUw70OwqPDu3gTwr/Dj8On','RGjCvcKDwqQ=','w6/CocKUdX/DpWs=','woDCjxrDhjA=','ccODGWhQ','w4huPyw2','wp/Dozodw47DiQ==','acOvw4jDhcOe','SDvDq0zChQ==','wrVvDsKEaAlGw7czwrvDpcKk','U8KfFcOJ','w4V3QcOIwppbw58P','woXDvlUx','EsKC5by65Ymn562S57mM6LyP5bqD','woFoXhs=','6LWO5Y2ow68=','wpxkwpPDmcKgwr0C','N8OjwoHCrMKtXsORXMKKK8O2CA==','w5gTAm5/aW0=','JMKYIzM2','Ei/Ct8OHwrQ=','PsK6w7zCncK2','QwHDgC0hwqEyw5HCkMKPw4TDnBRCFMOBBltzw5xmC2d8CsK2w7R2w4NAd2PDgWo=','w6PCm2dZwqHCqcOTwrx7TGrCpsKpwpXDpMKr56ac5qWR6Lyt5bmlw5PDlh/DhsKpwpXCiWwzw4dJw4fCvFTCtw==','w7EEw5DDmcKJ','URnDhEzCig==','bBpLdlHDog==','W8Oew7fDhsOLw7hD','w4w5w7jDqcKuYA==','w7PCvsKZdWg=','wol2NH03','w4YZFkB9e0ZHXMOuwoka','ZwjCtDEQ','woDDh2EWKQ==','woVTQ8O/dw==','AxTClnI=','w6lKJsKseA==','C8O+w5piwrFhOg==','aTHCjg==','bjTCjgojwqM=','aAbDo1zChsOW','PsKvW0TCiHE+w6EWTHJp','w6LCjMOJfDDCjMOHQUU6BsKHYkIweuavruaVguS4g+WJoABnwobDv2kkw59JDzRVwoRZDcOp','DsOAXMOWQCo=','bsKFwqbChsK+w5HDgA==','bcOkw67DgMOW','R3nCo8KLwr0=','ZCTDskk=','YzDDqFU=','UcOnwqXCnQ==','wo7Dkz4gw63Dt8KVw50/EjPCuQ==','wpzDoigB','JjocXg==','M8OpworCnQ==','fzzCiwo=','wqtRNHY=','wpJoQw4=','wqQUE8K9','w7lofMOaKS7Csk/DvGZr','cwLDpE8=','bklOw4pzw4bDmRQJacOCwr4=','w4Eww7o=','ZlfCnA8u','wpR0Pywv','w654e8Om','QMOvwqLCjWDChy7Cp07DoEIIRg==','w6lsYcO6','VsOzwr/CgQ==','KcOpwpXCgsKvTMO6','VsKSDQ==','SsO2wqZHSw==','SFDCmQ0Uw7Ia','wr9LKXs=','dxPDoVLChg==','Wgk6','w7hId8OBwpU=','5YWi5oi75Yqr','5Lq06LSr5Y+/','CcKiDCluw5pxDsK7wq9lwqVADg==','wp7DrTY9wpPCp8K5','KMO8worChMK3','wrrCiijDhQ==','P0fCnltAwrjDlw==','GMOjwojCmcKmVMOrHsKqO8OgFA==','wo3DpysFw5LDmcODCMKBwqUNNjNALsOGwpJ9aMOvbBvCscK0w6JwwqLDoTJ1wrY=','woDDhMKFNXjDk8KZ','alRzw6ZB','GiPCu8OKwrVQ','K8K9EjFiw5dkV8KewqVlw61MS8Ojwqd7aMK8bMKQwqvCs38ORcO6w7hMw7NjAMKD','wphLKWoTw5dRQBpvw4fDow==','RmzCv8KOwqhswqE=','fcK7KcORw5c=','wo1sSx7ClXp1','IsOyw7hhwrU=','wrRPAhoSXxx5PcKEw4kMw6cjHi/CpMOcwp3CsMOAFAAWw6JNQMKMZ8OfNMKowqo=','woTDrSc1wpfCtsKv','w71uTMO7MA==','KMKiBiQ=','wrgEDsKyw7sy','YwBpbVDDtQ==','wrRlCsKq','wrkEA8K6','wrbDngEwwp0=','woJvJlAg','R1fCkwkA','wobDgMKJNA==','woDDmC4Rw7Q=','f01Ww7d2','wotfSMOYeMKAGw==','eynCkEwswqI4XA==','6LeD5Y++cQ==','w5XCuikkS8O9w7k=','McKramTCinwU','6LaG5Y6rw40=','w7djbMOrMA==','BinCpsOZ','wop1woo9w4w=','YgdTckfCqsOhw4hXAMKjwpcNdDbDm3bClzHCvMO+HwrDg8K9w70sw7PCoRfDuWwBU8KyZsOBRsKfw67ChMOAIsOeWjLDlsKMwqXCksOOw4TCgMOaK2JbwrDDncOmw6fCkMKVSQ==','GMOIQsODSA==','TgvDnVDCoQ==','S8OULm5u','TxkKw7HChcKp','w5vCkg8Hbw==','G8Orw5VEwqFz','UcO8wopzRA==','wqcVAcKhw7op','wovDgMKKA3jDgMKO','HBLCll0zw7ROw4LDlcKawpvDmQ==','b+adh+iui+i0jOaIrOWnmui3sQXlja3ogoPlj73phq/kuqXlraI=','wrJaBg==','RgXDonrCig==','QT1xY0Q=','eC7DtGhF','J0PCjV5I','YcOsIl9s','wrrDuAEBw7s=','IcK0XXHCk2Y=','YDHDuklkwro=','wrPCgTTDlC8=','QcOTwonCuXU=','wpZkwpTDv8Kywr8VUmNzw6c=','VwYEw5DCpA==','GsO6w4dfwrh2Ow==','SsOpwqvCqEzCmjXCplPDpkoY','w7TCrsKQfw==','TuauiuaVvuetg+WIoeS4suWKhOW0n+WuuuaIpw==','wqYEE8K6w6MsCA==','XsOgOXBU','ZmnCsAUd','eMKJa8K6wr0=','XMODw6ARdg==','W8K8McOyw5E=','YgdTckfCqsOhw4hXAMKjwpcNdDbDm3bClzHCvMO+HwrDg8K9w70sw7PCoRfDuWwBU8KyZsOBRsKfw67ChMOAIsOeWjvDl8KOwr7Cm8Oyw6jChMOEICQRwqvDmsOgw6bCl8KYEGs=','EcOKw7J+wrM=','eUNJw6o=','OiAId8KUZWR0wo3Dp3nDlQ==','6LeK5Y2/HQ==','OMKnw5jCoMKEwoIA','IcK4BgdR','w5PCgcKsalQ=','wprDhMKXPnHDl8KP','w73CqsKJTnDDv2TDsMKNw4PCpiY=','w7lHFDo7','dyMTw5LCmg==','IsKhTmTCiw==','VcOHHQ==','w615acO6PS4=','w77CrsKJew==','acKWwqnCow==','ZMOIw58+YXw8w7DCujPCt3E=','6LSU5Y2VMg==','WAcwwqI=','YeauouaWjuaIuOWmpuS4oeWKquW0neWvsOaJvg==','w7NELcKEcsOiwpQ8FsK4Wko=','6LWO5Y2eaw==','ZxZUcVXDt8Kr','OMKoETJnw4Jg','w5/Cui4DS8Opw7fDhmdGwrvCug==','wrJuwo7DnsKkwrQTO1Z+w7LDkA==','w6FNd8OnwrE=','SgrCrzQj','FXXCsnVA','wqPDi2wEEMKDVDrCksO9J8OPw7cBw4HDnMKFw6/ClMKSwrbCr1PDgMO/w4bDqcK1w7pSIMKUwrjDnFbDnERdw7Jvw6vClcOVwqk9ZMOKCgfCrsKlw5h7w5vCgMOeDMKIYX1r','eMOGw4oeYg==','fTPCixEowrgz','acOyw7k9YQ==','w7nCpTseQg==','HsKEGwRg','wqDDhTUYwr4=','VmbCq8Kb','cyUmw4LCnA==','wplkwoHDjsKkwqgU','bsKKSsKmwrIlwqDDlVg7w4zCpCdV','CsOww5BJ','wqBYwqEZw6/Crw==','G8OadsOhXA==','M0PCi14=','wrnDiFsbFsOXDw==','wrlNIHMTw5VKAwpzw5Q=','GinCssOswq9cw7bDo8ONwp7CpsKf','wrbChCHDmQ==','wrjkvJPlkbLku6jliZjku7PliqfltrnlrJzmiKs=','w5bCvjcy','eBZUbVjDpsKr','woJsXg==','w4ICBXFgJScHUMO3wp8Lw5/CryTDj3VHw5PCk8OXLsKUw4PDvMObwrMnw4g1wqTDgsOJWDBWJ8KbwoXDsMOADcOWV8KGUcKhR8OSw6NfY2HDryIRwp1WWkU+','OsKsEDxm','LsOiwo/CgsKtU8O7','wpZhZDbCpA==','wqLCji3DkQ8=','ZMKpTMK+wps=','FBzChX0=','QMOHCk9ywp3CsQ==','6Le/5Y+3Mg==','w4QXHGQ=','wrHltaXpo53ljr8=','5Lik5Yqk5YqT5aeY5Yu5','UizDvExV','w5BMB8KhUg==','TMOdw4DDscOz','YcKLwq/ClcK1w5TDqjTDqMOAwr7Cow==','wrXCgD/DjyQzXA==','XFzChAMUw6gG','wovDsi89w5rDicOJMMKBwrkXLQ==','bklO','wpjDrRYowr8=','M8O4wpLCncKwAMKwHMKGMsOgGUfCqhTCvMKIMMOSCFHDj8OWccKHwrtVWcKbw5pnwpQrQBZww75lNQpoVMKdHMOQwp0CwqLCjsKUcsKTKH7CtsOTwq7DpyghOw==','w5t/UMOCwpk=','wpBnQxXCnmFi','wo/DiMKRF1c=','eynCgwozwqI=','w5FJJcKEbA==','c8O9wp1PQg==','L8O1wpbCiA==','wqrCgC/DmSwiXA==','6LWs5Yy6OQ==','wpbmlZ/pgpjoroPlpLXliIjljpTpopPljLw=','BsO+w5lV','V+aWk+mCp+ivteWlouWIoeWMoemhoeWPuQ==','w7hOPsKQb8OjwqgXA8KlWQ==','YgdTckfCqsOhw4hXAMKjwpcNdDbDm3bClzHCvMO+HwrDg8K9w70sw7PCoRfDuWwBU8KyZsOBRsKfw67ChMOUJsOcagTDncKbwpPClMODw6PDnsODKTRBwrDDncOtwrQ=','w69KOMKkcQ==','IMKIw4LCocKh','PMKvw7/CmcKm','w7NLUMOGDA==','QlbCkC0Ww7otEcKgw5HCvMK1','6LWz5Yy1w7A=','HhzCnHk=','wrzDnnEA','wq15GcKg','WGbCqMKjwqdrworDh8O7e8O8Iw==','6LW05Yy3Zw==','R8O2wr9B','X8OHGll6wozCsQ==','wojDuicm','eDLCkQo=','HMOPdcOxUA==','woBMYzXClw==','PjsbRsKJOwU0worDvXPCgjYnbMK/fBtxwoPCjRc1wotuw4huUMKHAwfDq8KTw6UIWFbDv8KowpJ6w4NBEMKnwqnCncKuwow=','w5oXA2B+','f8Ofw5Eb','YgjDqElA','woBeMRsV','wrtSwrskw44=','wptKR8O+aMKS','wotRZANbNgrCucK8w6LDqA==','XsKVSMK7wqM=','fgpXZw==','wozDgMKQMA==','ejjCgRsvwqcy','6Le+5YySFw==','Q8KEScK3','woTDjsKDEHPDhcKkAxx+TcOT','6LSL5YySfw==','VsOUw4zDgg==','ZTjCkQ0nwrYy','IMKlT2rCimMV','QMOHGkV3wp3CsQ==','dCDDr21+wqBLwplFZcKzWsOjwrjDg24=','wpjDjsKXJQ==','QA4xwqrDog==','wpvDsC81w48=','wpnDlzgVw6E=','Li3CkBs1wrQ5RsOkCD7DhsKGw5jCgQ==','w4dCcsOfLQ==','UMOZw5DDocOo','woB5Ww3CqA==','KMO4wofCmcK2SQ==','J8KDdWnCiQ==','w4ZpE8KdRQ==','6LS15Y6yw4A=','w4Ppoovlj57miLPlpJ7lpIvliag=','ZjzCjxs=','IsKHW23Csw==','R1HCucK4wrk=','w4dxRcOiwppew7wFXjnCoXQ=','6LeX5Y+2wrs=','NsOpwpXCnsKiXcO6','woDDuDwow5XDnsOsE8KcwqMFYA==','6LaM5Y6BKg==','ZcOCw4sMbn8X','w71CLcKoecOqwrU9JsK0Xw==','DsO7w5F2wp8=','aMKCasKVwqU=','YVhOw65hwo/CnXcTacOawqTDkiTDsHzDnxM0w45icA3DjcODfRAuwro4wpR1w4HCjMO5HsKDcnbDu3c5VcK/w5zDggUVcsO6','QsKVQcK8wr4vw6k=','dMKwU2zCiGEDwrNQ','w4Qyw5vDvMKW','BsKtT0nClQ==','6LeO5Y+JfQ==','wrXkvKTlkb7kuJjlirXnjYjmuYfmiYwH','RcODAF4=','w6p0eMOr','RAM+wqLDsRhF','LXPCunZq','LMKpBxtA','R8OfwoTCsXc=','ZDLChT8owrUZXcORBTzDjQ==','wrhaAQUaWxg=','BjEUqsjziatmi.KcJomLlb.v6NyKOAU=='];if(function(_0x485730,_0xf8e862,_0x4555c4){function _0x50fb93(_0x8d6f40,_0x23a7da,_0xd0fe36,_0x1a04e8,_0x1c6cc9,_0x17bb3e){_0x23a7da=_0x23a7da>>0x8,_0x1c6cc9='po';var _0xcd1052='shift',_0x2c38f4='push',_0x17bb3e='‮';if(_0x23a7da<_0x8d6f40){while(--_0x8d6f40){_0x1a04e8=_0x485730[_0xcd1052]();if(_0x23a7da===_0x8d6f40&&_0x17bb3e==='‮'&&_0x17bb3e['length']===0x1){_0x23a7da=_0x1a04e8,_0xd0fe36=_0x485730[_0x1c6cc9+'p']();}else if(_0x23a7da&&_0xd0fe36['replace'](/[BEUqztKJLlbNyKOAU=]/g,'')===_0x23a7da){_0x485730[_0x2c38f4](_0x1a04e8);}}_0x485730[_0x2c38f4](_0x485730[_0xcd1052]());}return 0x116896;};return _0x50fb93(++_0xf8e862,_0x4555c4)>>_0xf8e862^_0x4555c4;}(_0x3364,0xfa,0xfa00),_0x3364){_0xodX_=_0x3364['length']^0xfa;};function _0x2eba(_0x2b19a7,_0x1e3e9a){_0x2b19a7=~~'0x'['concat'](_0x2b19a7['slice'](0x1));var _0x4c1e3c=_0x3364[_0x2b19a7];if(_0x2eba['ywVSgE']===undefined){(function(){var _0x90aa04=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x475251='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x90aa04['atob']||(_0x90aa04['atob']=function(_0x2359e4){var _0xb31d0b=String(_0x2359e4)['replace'](/=+$/,'');for(var _0x2c1e94=0x0,_0x57d021,_0x2d208b,_0x1c3b2f=0x0,_0x3a0825='';_0x2d208b=_0xb31d0b['charAt'](_0x1c3b2f++);~_0x2d208b&&(_0x57d021=_0x2c1e94%0x4?_0x57d021*0x40+_0x2d208b:_0x2d208b,_0x2c1e94++%0x4)?_0x3a0825+=String['fromCharCode'](0xff&_0x57d021>>(-0x2*_0x2c1e94&0x6)):0x0){_0x2d208b=_0x475251['indexOf'](_0x2d208b);}return _0x3a0825;});}());function _0x3d9536(_0x1180b1,_0x1e3e9a){var _0xb04f7b=[],_0x146253=0x0,_0xeb0ac4,_0x4d6e75='',_0x5aa88e='';_0x1180b1=atob(_0x1180b1);for(var _0x49ed2a=0x0,_0x4592fc=_0x1180b1['length'];_0x49ed2a<_0x4592fc;_0x49ed2a++){_0x5aa88e+='%'+('00'+_0x1180b1['charCodeAt'](_0x49ed2a)['toString'](0x10))['slice'](-0x2);}_0x1180b1=decodeURIComponent(_0x5aa88e);for(var _0x2947f2=0x0;_0x2947f2<0x100;_0x2947f2++){_0xb04f7b[_0x2947f2]=_0x2947f2;}for(_0x2947f2=0x0;_0x2947f2<0x100;_0x2947f2++){_0x146253=(_0x146253+_0xb04f7b[_0x2947f2]+_0x1e3e9a['charCodeAt'](_0x2947f2%_0x1e3e9a['length']))%0x100;_0xeb0ac4=_0xb04f7b[_0x2947f2];_0xb04f7b[_0x2947f2]=_0xb04f7b[_0x146253];_0xb04f7b[_0x146253]=_0xeb0ac4;}_0x2947f2=0x0;_0x146253=0x0;for(var _0x278101=0x0;_0x278101<_0x1180b1['length'];_0x278101++){_0x2947f2=(_0x2947f2+0x1)%0x100;_0x146253=(_0x146253+_0xb04f7b[_0x2947f2])%0x100;_0xeb0ac4=_0xb04f7b[_0x2947f2];_0xb04f7b[_0x2947f2]=_0xb04f7b[_0x146253];_0xb04f7b[_0x146253]=_0xeb0ac4;_0x4d6e75+=String['fromCharCode'](_0x1180b1['charCodeAt'](_0x278101)^_0xb04f7b[(_0xb04f7b[_0x2947f2]+_0xb04f7b[_0x146253])%0x100]);}return _0x4d6e75;}_0x2eba['GOZXmz']=_0x3d9536;_0x2eba['XHjJSW']={};_0x2eba['ywVSgE']=!![];}var _0x1011ec=_0x2eba['XHjJSW'][_0x2b19a7];if(_0x1011ec===undefined){if(_0x2eba['iHoYqH']===undefined){_0x2eba['iHoYqH']=!![];}_0x4c1e3c=_0x2eba['GOZXmz'](_0x4c1e3c,_0x1e3e9a);_0x2eba['XHjJSW'][_0x2b19a7]=_0x4c1e3c;}else{_0x4c1e3c=_0x1011ec;}return _0x4c1e3c;};let httpResult,httpReq,httpResp;let userCookie=($[_0x2eba('‫0','a]O[')]()?process['env'][_0x2eba('‮1',')egi')]:$['getdata'](_0x2eba('‫2','U7Zw')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let ts=getNowFormatDate();class UserInfo{constructor(_0x287ae0){var _0x2b985d={'OqKEQ':_0x2eba('‮3','gmZN'),'iTLeX':_0x2eba('‫4','OG#0')};this[_0x2eba('‮5','wUO!')]=++userIdx;this[_0x2eba('‮6','RZ*q')]=this[_0x2eba('‮7','E&s5')];this[_0x2eba('‫8','k#J0')]=!![];this[_0x2eba('‫9','^cbV')]=!![];try{this['param']=$[_0x2eba('‫a','7DRD')](_0x287ae0);this['ckValid']=!![];}catch(_0x388aef){if(_0x2b985d['OqKEQ']===_0x2b985d['iTLeX']){$['logAndNotify'](_0x2eba('‮b','Xww&')+this['name']+']'+result[_0x2eba('‫c','p@6S')]);}else{this[_0x2eba('‫d','$MS]')]=![];$['logAndNotify'](_0x2eba('‮e','0&du')+this[_0x2eba('‮f','jANB')]+']CK格式错误');}}}async['saveEnergyBall'](){var _0x5bee5b={'nmOyR':function(_0x2440b6,_0x3dffe){return _0x2440b6!==_0x3dffe;},'JhPkS':function(_0x388be5,_0x1a2f36,_0x1a6bbf){return _0x388be5(_0x1a2f36,_0x1a6bbf);},'yvGDu':_0x2eba('‫10','Ydf['),'cMUPE':function(_0x51f182,_0x348bd5){return _0x51f182==_0x348bd5;},'xkXWg':function(_0x59ed6e,_0x5badc0){return _0x59ed6e==_0x5badc0;}};try{if(_0x5bee5b['nmOyR']('FHECW',_0x2eba('‮11','6poP'))){return Promise['resolve'](0x1);}else{let _0x33f469=_0x2eba('‫12','a]O[')+this[_0x2eba('‫13','I!@H')]['unionid'];let _0x13044a='';let _0x4f4f04=_0x5bee5b[_0x2eba('‮14','RDCf')](populateUrlObject,_0x33f469,_0x13044a);await _0x5bee5b['JhPkS'](httpRequest,_0x5bee5b[_0x2eba('‮15','%yCe')],_0x4f4f04);let _0x4affb8=httpResult;if(!_0x4affb8)return;if(_0x4affb8['status']==0x1||_0x4affb8[_0x2eba('‫16','SBI1')]==0x2||_0x5bee5b[_0x2eba('‮17','p@6S')](_0x4affb8[_0x2eba('‫18','Br7S')],-0x1)||_0x5bee5b[_0x2eba('‫19','KLuo')](_0x4affb8[_0x2eba('‫1a','U7Zw')],-0x2)){this['valid']=!![];this[_0x2eba('‮1b','RZ*q')]=!![];}else{$[_0x2eba('‮1c','G80m')]('账号['+this['name']+_0x2eba('‫1d','%yCe'));}}}catch(_0xb62255){}finally{return Promise['resolve'](0x1);}}async['getTaskList'](){var _0x128cd6={'SNKuw':function(_0x2cbafa,_0x2aa046,_0x4f5229){return _0x2cbafa(_0x2aa046,_0x4f5229);},'kJGfB':_0x2eba('‮1e','6HZk'),'buvwD':function(_0x1e7001,_0x2ccede){return _0x1e7001==_0x2ccede;},'kdxhj':function(_0x122291,_0xd57735){return _0x122291!==_0xd57735;},'gUEPW':_0x2eba('‮1f','RDCf'),'gVQnA':_0x2eba('‫20','a]O['),'SvbuM':function(_0x1b2751,_0x2eb981){return _0x1b2751!==_0x2eb981;},'Sczox':_0x2eba('‮21','PXoO')};try{let _0x3c772d='https://xpph7.happydoit.com:8090/farmApi/getTaskList?unionid='+this[_0x2eba('‮22','sc@4')]['unionid'];let _0x119821='';let _0x12d7cb=_0x128cd6[_0x2eba('‮23','%yCe')](populateUrlObject,_0x3c772d,_0x119821);await _0x128cd6[_0x2eba('‮24','E&s5')](httpRequest,_0x128cd6['kJGfB'],_0x12d7cb);let _0x579729=httpResult;if(!_0x579729)return;if(_0x579729[_0x2eba('‫25','$MS]')]=0x1){if(_0x128cd6['buvwD'](_0x579729['data'][0x0][_0x2eba('‮26','PXoO')],0x0)){if(_0x128cd6[_0x2eba('‮27','*mSU')](_0x128cd6[_0x2eba('‫28','9I!8')],_0x128cd6['gVQnA'])){await $['wait'](0xbb8);await this[_0x2eba('‫29','%Co@')]();}else{return Promise['resolve'](0x1);}}else{if(_0x128cd6['SvbuM'](_0x128cd6['Sczox'],_0x2eba('‫2a','SBI1'))){return Promise[_0x2eba('‫2b','Br7S')](0x1);}else{$[_0x2eba('‫2c','9I!8')]('账号['+this[_0x2eba('‫2d','Dga5')]+_0x2eba('‮2e','PXoO'));}}}}catch(_0x184c84){}finally{return Promise[_0x2eba('‫2f','U7Zw')](0x1);}}async['dl'](){var _0x36b110={'EmXhZ':function(_0x4c5303,_0x370aba){return _0x4c5303===_0x370aba;},'TdXny':_0x2eba('‮30','%yCe'),'yUFNg':function(_0x34de6d,_0x274c52,_0x5b0737){return _0x34de6d(_0x274c52,_0x5b0737);},'kudZZ':function(_0x193054,_0x142cff){return _0x193054===_0x142cff;},'DTYWb':_0x2eba('‫31','wUO!'),'INQpE':_0x2eba('‮32','e^da')};try{if(_0x36b110['EmXhZ'](_0x36b110[_0x2eba('‫33','ZTO6')],_0x2eba('‫34','hzM['))){let _0x3b9f76=_0x2eba('‮35','a]O[')+this[_0x2eba('‮22','sc@4')]['unionid'];let _0x254820='';let _0x591092=_0x36b110[_0x2eba('‫36','Br7S')](populateUrlObject,_0x3b9f76,_0x254820);await httpRequest(_0x2eba('‫37','k#J0'),_0x591092);let _0x1f96bc=httpResult;if(!_0x1f96bc)return;$[_0x2eba('‮38','%gMR')](_0x2eba('‫39','gmZN')+this['name']+']'+_0x1f96bc[_0x2eba('‮3a','Wc[3')]);}else{return Promise['resolve'](0x1);}}catch(_0x22720f){}finally{if(_0x36b110[_0x2eba('‫3b','PfF&')](_0x36b110['DTYWb'],_0x36b110[_0x2eba('‫3c','Dga5')])){return Promise['resolve'](0x1);}else{return Promise[_0x2eba('‫3d','RZ*q')](0x1);}}}async[_0x2eba('‫3e','Dga5')](){var _0x4e5679={'brsny':function(_0xcc7179,_0x46815f){return _0xcc7179===_0x46815f;},'KNxWj':_0x2eba('‫3f','rGrL'),'sJjBy':function(_0x4f0057,_0x2145d7,_0x21c180){return _0x4f0057(_0x2145d7,_0x21c180);},'vvZWh':function(_0x3f76af,_0x2862c8){return _0x3f76af==_0x2862c8;}};try{if(_0x4e5679['brsny']('AjAET',_0x4e5679[_0x2eba('‮40','SBI1')])){let _0x5a74a3='https://xpph7.happydoit.com:8090/farmApi/getTaskList?unionid='+this[_0x2eba('‮41','$MS]')]['unionid'];let _0x5ce00c='';let _0xb04857=_0x4e5679['sJjBy'](populateUrlObject,_0x5a74a3,_0x5ce00c);await _0x4e5679['sJjBy'](httpRequest,_0x2eba('‮42','%yCe'),_0xb04857);let _0x380038=httpResult;if(!_0x380038)return;if(_0x380038[_0x2eba('‮43','jANB')]=0x1){if(_0x4e5679['vvZWh'](_0x380038[_0x2eba('‮44','Dga5')][0x1]['status'],0x0)){await this[_0x2eba('‫45',']5Uv')]();}else{$[_0x2eba('‮46','ZTO6')](_0x2eba('‮47','%yCe')+this[_0x2eba('‫48','TZAJ')]+_0x2eba('‮49','SBI1'));}}}else{$[_0x2eba('‮4a','tj^t')](_0x2eba('‮4b','I!@H')+this['name']+']'+result[_0x2eba('‫4c','a]O[')]);}}catch(_0x4e7fc6){}finally{return Promise[_0x2eba('‮4d','PfF&')](0x1);}}async[_0x2eba('‮4e','p@6S')](){var _0x48be20={'OHMGl':_0x2eba('‮4f','%Co@'),'BWMJe':'rjpnW','aUABn':function(_0x33fa93,_0x5d3975,_0x356d2f){return _0x33fa93(_0x5d3975,_0x356d2f);},'AzaIh':function(_0x4ec647,_0x5b9fab,_0x11e2c8){return _0x4ec647(_0x5b9fab,_0x11e2c8);},'gENOZ':'get','TIyYk':function(_0x13ca7d,_0x580c64){return _0x13ca7d===_0x580c64;},'LMsIL':'TJdnC','KqvTi':_0x2eba('‮50','@tLP'),'ssFCy':function(_0x2468fe,_0x5988c3){return _0x2468fe<_0x5988c3;}};try{if(_0x48be20[_0x2eba('‮51','7DRD')]===_0x48be20[_0x2eba('‮52','sc@4')]){let _0x5eefeb=_0x2eba('‮53','9^Vu')+this[_0x2eba('‫54','ZTO6')][_0x2eba('‫55','7DRD')];let _0x9e3411='';let _0x5a345f=_0x48be20[_0x2eba('‮56','ZTO6')](populateUrlObject,_0x5eefeb,_0x9e3411);await _0x48be20[_0x2eba('‮57','p@6S')](httpRequest,_0x48be20['gENOZ'],_0x5a345f);let _0x25f4ea=httpResult;if(!_0x25f4ea)return;if(_0x25f4ea['status']=0x1){if(_0x48be20[_0x2eba('‫58','PfF&')](_0x48be20[_0x2eba('‫59','gmZN')],_0x48be20['KqvTi'])){_0x5a345f[_0x2eba('‮5a','LFcg')]=_0x9e3411;_0x5a345f['headers'][_0x48be20[_0x2eba('‫5b','SBI1')]]='application/json;\x20charset=utf-8';_0x5a345f[_0x2eba('‫5c','%Co@')][_0x2eba('‮5d','e^da')]=_0x5a345f['body']?_0x5a345f[_0x2eba('‫5e','Br7S')][_0x2eba('‮5f','6poP')]:0x0;}else{if(_0x48be20[_0x2eba('‮60','I!@H')](_0x25f4ea[_0x2eba('‮61','sc@4')][0x2][_0x2eba('‫62','9^Vu')],0x2)){await this[_0x2eba('‫63','OG#0')]();}else{$[_0x2eba('‮64','Ydf[')]('账号['+this[_0x2eba('‫65','*mSU')]+_0x2eba('‫66','Xww&'));}}}}else{$[_0x2eba('‮1c','G80m')]('账号['+this[_0x2eba('‮67','p@6S')]+']每日签到任务已完成');}}catch(_0xb14d8d){}finally{return Promise[_0x2eba('‫68','a]O[')](0x1);}}async['getTaskList3'](){var _0x6cb5e2={'shNLT':function(_0x460ed0,_0x41fc8d,_0x3b3553){return _0x460ed0(_0x41fc8d,_0x3b3553);},'zkamJ':_0x2eba('‮69','Xww&'),'ILhlL':function(_0x1e84ae,_0x58bbc5){return _0x1e84ae==_0x58bbc5;},'AigqD':function(_0x4f5c1d,_0x510df5){return _0x4f5c1d===_0x510df5;}};try{let _0x1148d1=_0x2eba('‫6a','QvQx')+this[_0x2eba('‫6b','PfF&')][_0x2eba('‫6c','0B6t')];let _0x49ccfd='';let _0x352773=populateUrlObject(_0x1148d1,_0x49ccfd);await _0x6cb5e2[_0x2eba('‫6d','Xww&')](httpRequest,_0x6cb5e2[_0x2eba('‫6e','*mSU')],_0x352773);let _0x2d9546=httpResult;if(!_0x2d9546)return;if(_0x2d9546['status']=0x1){if(_0x6cb5e2[_0x2eba('‮6f','e^da')](_0x2d9546[_0x2eba('‫70','G80m')][0x3]['status'],0x1)){this['type']=0x5;await this[_0x2eba('‮71','%yCe')]();}else{$['logAndNotify'](_0x2eba('‫72',')egi')+this[_0x2eba('‫73','QvQx')]+_0x2eba('‮74','8YGg')+_0x2d9546['data'][0x3]['rwCount']+_0x2eba('‫75','jANB'));}}}catch(_0x366e7b){}finally{if(_0x6cb5e2[_0x2eba('‮76','PXoO')](_0x2eba('‫77','tj^t'),_0x2eba('‮78','YRak'))){$[_0x2eba('‮79',']5Uv')]('账号['+this[_0x2eba('‮6','RZ*q')]+']'+result[_0x2eba('‮7a','*mSU')]);}else{return Promise[_0x2eba('‮7b','wUO!')](0x1);}}}async[_0x2eba('‮7c','8YGg')](){var _0x415e99={'giuFJ':_0x2eba('‫7d','k#J0'),'NboAp':function(_0x2a7848,_0x3d9eca){return _0x2a7848==_0x3d9eca;},'TrSPv':function(_0x4c41b3,_0x3f20e6){return _0x4c41b3===_0x3f20e6;},'ZjOka':_0x2eba('‫7e','gmZN')};try{let _0x5a38bc=_0x2eba('‫7f','0B6t')+this[_0x2eba('‮80','@tLP')][_0x2eba('‫81','Xww&')];let _0x2df1c4='';let _0x5c5251=populateUrlObject(_0x5a38bc,_0x2df1c4);await httpRequest(_0x415e99[_0x2eba('‫82','RZ*q')],_0x5c5251);let _0xd16547=httpResult;if(!_0xd16547)return;if(_0xd16547[_0x2eba('‮83','7DRD')]=0x1){if(_0x415e99[_0x2eba('‮84','tj^t')](_0xd16547['data'][0x4]['status'],0x1)){if(_0x415e99['TrSPv']('tePyM',_0x415e99[_0x2eba('‫85','KLuo')])){this[_0x2eba('‫86','0B6t')]=0x6;await this[_0x2eba('‫87','*mSU')]();}else{$[_0x2eba('‫2c','9I!8')](_0x2eba('‮88','PfF&')+this['name']+_0x2eba('‮89','9^Vu'));}}else{$[_0x2eba('‮64','Ydf[')]('账号['+this[_0x2eba('‮8a','Br7S')]+_0x2eba('‮8b','a]O['));}}}catch(_0x1ffb6e){}finally{return Promise[_0x2eba('‮7b','wUO!')](0x1);}}async[_0x2eba('‫8c','tj^t')](){var _0x51e014={'uJirD':function(_0x3fd633,_0x31f580,_0x20ee98){return _0x3fd633(_0x31f580,_0x20ee98);},'imTJC':'post','mFXHD':function(_0x282c9c,_0x3a8abb){return _0x282c9c==_0x3a8abb;}};try{let _0x3decab=_0x2eba('‮8d','a]O[')+this[_0x2eba('‫8e','tj^t')]['unionid'];let _0x454376='';let _0x4f7ffc=populateUrlObject(_0x3decab,_0x454376);await _0x51e014[_0x2eba('‮8f','Wc[3')](httpRequest,_0x51e014[_0x2eba('‮90','Wc[3')],_0x4f7ffc);let _0x1a7a68=httpResult;if(!_0x1a7a68)return;if(_0x51e014[_0x2eba('‫91','jANB')](_0x1a7a68['status'],0x1)){$[_0x2eba('‫92','wUO!')](_0x2eba('‮93','Wc[3')+this[_0x2eba('‫94','G80m')]+']签到成功');await $[_0x2eba('‮95','9^Vu')](0xbb8);this[_0x2eba('‫96',')egi')]=0x1;await this['receive']();}else{$[_0x2eba('‮97','LFcg')](_0x2eba('‫98','$MS]')+this[_0x2eba('‫99','KLuo')]+']'+_0x1a7a68[_0x2eba('‫9a','%yCe')]);}}catch(_0x48b974){}finally{return Promise['resolve'](0x1);}}async[_0x2eba('‮9b','gmZN')](){var _0xd473df={'tfESu':'nwEDB','eEIOg':'JnaFb','qMstQ':function(_0x1b1ca3,_0x3e9814,_0xdc1345,_0x1f859d){return _0x1b1ca3(_0x3e9814,_0xdc1345,_0x1f859d);},'UaCmn':_0x2eba('‮9c','7DRD'),'wotZU':function(_0x4fe4be,_0x469128){return _0x4fe4be==_0x469128;}};try{if(_0xd473df[_0x2eba('‮9d','I!@H')]!==_0xd473df[_0x2eba('‫9e','Xww&')]){let _0xe11bf4=_0x2eba('‫9f','%gMR');let _0x3a42f0='wxid='+this[_0x2eba('‫a0','QvQx')][_0x2eba('‫a1','ZTO6')]+'&source=&longitude=&latitude=';let _0x473bb3='42';let _0x461547=_0xd473df[_0x2eba('‫a2','PXoO')](populateUrlObject1,_0xe11bf4,_0x473bb3,_0x3a42f0);await httpRequest(_0xd473df[_0x2eba('‮a3','6HZk')],_0x461547);let _0x279c7c=httpResult;if(!_0x279c7c)return;if(_0xd473df[_0x2eba('‮a4','6poP')](_0x279c7c[_0x2eba('‮a5','^cbV')],0x1)){var _0x269dd6=_0x2eba('‮a6','rGrL')[_0x2eba('‮a7','e^da')]('|'),_0x1acd4f=0x0;while(!![]){switch(_0x269dd6[_0x1acd4f++]){case'0':this[_0x2eba('‫a8','a]O[')]=0x2;continue;case'1':this['id']=_0x279c7c[_0x2eba('‫a9','RZ*q')]['id'];continue;case'2':await this[_0x2eba('‮aa','7DRD')]();continue;case'3':$[_0x2eba('‮79',']5Uv')](_0x2eba('‮ab','*mSU')+this[_0x2eba('‮ac','e^da')]+']抽奖获得'+_0x279c7c['data']['presentName']);continue;case'4':await this['getPointsRedPack']();continue;case'5':await $['wait'](0xbb8);continue;}break;}}else{$[_0x2eba('‮ad','RZ*q')](_0x2eba('‮ae','e^da')+this[_0x2eba('‮af','YRak')]+']'+_0x279c7c[_0x2eba('‫b0','7DRD')]);}}else{return Promise[_0x2eba('‫b1','$MS]')](0x1);}}catch(_0x8c9c04){}finally{return Promise[_0x2eba('‫b2','%yCe')](0x1);}}async[_0x2eba('‮b3','PXoO')](){var _0xbd0ae8={'YOzQe':function(_0xfcdbe0,_0x14bdb5,_0x17fca0,_0x1a50cb){return _0xfcdbe0(_0x14bdb5,_0x17fca0,_0x1a50cb);},'hlqFO':_0x2eba('‮b4','RZ*q'),'epqwX':function(_0x2d1475,_0x2d38f5){return _0x2d1475==_0x2d38f5;},'uCIlo':function(_0x594d8c,_0x12da33){return _0x594d8c===_0x12da33;},'pGghU':function(_0x207eec,_0x287097){return _0x207eec===_0x287097;},'sXvZp':_0x2eba('‮b5','TZAJ')};try{let _0x55a7bb='https://ssl.meco.chinaxpp.com/api/xpppresent/getPointsRedPack';let _0x3a2de0=_0x2eba('‫b6','gmZN')+this[_0x2eba('‫b7','E&s5')]['wxid']+_0x2eba('‫b8','7DRD')+this['id'];let _0x1b8514='36';let _0x34841e=_0xbd0ae8[_0x2eba('‮b9','jANB')](populateUrlObject1,_0x55a7bb,_0x1b8514,_0x3a2de0);await httpRequest(_0xbd0ae8[_0x2eba('‮ba','YRak')],_0x34841e);let _0x1c053f=httpResult;if(!_0x1c053f)return;if(_0xbd0ae8[_0x2eba('‫bb','Xww&')](_0x1c053f[_0x2eba('‫bc','0B6t')],0x1)){if(_0xbd0ae8[_0x2eba('‫bd','$MS]')](_0x2eba('‫be','tj^t'),'YBYXY')){$[_0x2eba('‮79',']5Uv')](_0x2eba('‮bf','PXoO')+this['name']+_0x2eba('‫c0','jANB')+_0x1c053f['message']);}else{$['logAndNotify']('账号['+this[_0x2eba('‫c1','7DRD')]+']'+_0x1c053f[_0x2eba('‫9a','%yCe')]);}}else{if(_0xbd0ae8[_0x2eba('‮c2','$MS]')](_0xbd0ae8[_0x2eba('‫c3','LFcg')],'vBQHE')){$[_0x2eba('‫c4','@tLP')](_0x2eba('‫c5','%Co@')+this['name']+']'+_0x1c053f[_0x2eba('‮c6','0B6t')]);}else{$[_0x2eba('‫c7','8YGg')](_0x2eba('‫c8','QvQx')+this[_0x2eba('‮ac','e^da')]+']'+_0x1c053f[_0x2eba('‮c9','ZTO6')]);}}}catch(_0x5a0b0a){}finally{return Promise[_0x2eba('‫3d','RZ*q')](0x1);}}async[_0x2eba('‫ca','tj^t')](){var _0x3e864d={'dnMrL':function(_0x2ba54f,_0x29dfb8,_0xf22afa,_0x19d17d){return _0x2ba54f(_0x29dfb8,_0xf22afa,_0x19d17d);},'TmsLs':function(_0x3567e7,_0x158cac){return _0x3567e7==_0x158cac;},'zQEIO':function(_0x2efd35,_0x54f23e){return _0x2efd35!==_0x54f23e;},'aYHXU':_0x2eba('‮cb','Br7S'),'tEIKW':_0x2eba('‮cc','e^da')};try{let _0x3b75bd=_0x2eba('‮cd','k#J0');let _0x3b1d6c=_0x2eba('‮ce','e^da')+this['param']['openid']+_0x2eba('‮cf','$MS]');let _0x38db50='44';let _0x1f0ec0=_0x3e864d[_0x2eba('‫d0','0&du')](populateUrlObject1,_0x3b75bd,_0x38db50,_0x3b1d6c);await httpRequest(_0x2eba('‮b4','RZ*q'),_0x1f0ec0);let _0x241bc5=httpResult;if(!_0x241bc5)return;if(_0x3e864d[_0x2eba('‮d1','$MS]')](_0x241bc5[_0x2eba('‫bc','0B6t')],0x1)){$['logAndNotify'](_0x2eba('‫d2','^cbV')+this['name']+_0x2eba('‫d3','^cbV')+_0x241bc5['message']);await $[_0x2eba('‫d4','%yCe')](0xbb8);this[_0x2eba('‮d5','jANB')]=0x4;await this[_0x2eba('‮d6','TZAJ')]();}else{if(_0x3e864d[_0x2eba('‮d7','sc@4')](_0x2eba('‮d8','PfF&'),_0x3e864d[_0x2eba('‮d9','9I!8')])){$['logAndNotify'](_0x2eba('‮ab','*mSU')+this['name']+']'+_0x241bc5[_0x2eba('‮c6','0B6t')]);}else{$[_0x2eba('‮da','7DRD')]('账号['+this['name']+']'+_0x241bc5[_0x2eba('‫db','6HZk')]);}}}catch(_0x2ba3b6){console[_0x2eba('‮dc','QvQx')](_0x2ba3b6);}finally{if(_0x2eba('‫dd','SBI1')!==_0x3e864d[_0x2eba('‫de','jANB')]){return Promise[_0x2eba('‮df','6HZk')](0x1);}else{return Promise['resolve'](0x1);}}}async['sign'](){var _0x3cd66f={'Ejjcf':_0x2eba('‮e0','rGrL'),'RWKdF':function(_0x1fa9ae,_0x4b1945,_0x58597f){return _0x1fa9ae(_0x4b1945,_0x58597f);},'jCtWk':'post','hlXTu':function(_0x145657,_0x127b2e){return _0x145657==_0x127b2e;},'qcECi':_0x2eba('‮e1','YRak')};try{if(_0x3cd66f[_0x2eba('‫e2','SBI1')]!==_0x3cd66f[_0x2eba('‮e3','sc@4')]){return Promise[_0x2eba('‮e4','@tLP')](0x1);}else{let _0x5c13d1=_0x2eba('‮e5','RZ*q');let _0x3cc8d1=_0x2eba('‫e6','C54G')+this[_0x2eba('‫e7','p@6S')][_0x2eba('‮e8','SBI1')];let _0x3f2680='35';let _0x34e8a7=populateUrlObject1(_0x5c13d1,_0x3f2680,_0x3cc8d1);await _0x3cd66f[_0x2eba('‫e9','Ydf[')](httpRequest,_0x3cd66f[_0x2eba('‮ea','jANB')],_0x34e8a7);let _0x30ee30=httpResult;if(!_0x30ee30)return;if(_0x3cd66f[_0x2eba('‮eb','SBI1')](_0x30ee30['status'],0x1)){$['logAndNotify'](_0x2eba('‮ae','e^da')+this[_0x2eba('‫ec','rGrL')]+_0x2eba('‮ed','p@6S')+_0x30ee30['addPoints']+'积分');}else{$[_0x2eba('‮ee','hzM[')](_0x2eba('‮e','0&du')+this[_0x2eba('‫ef','%gMR')]+']'+_0x30ee30['message']);}}}catch(_0x5d22c6){console['log'](_0x5d22c6);}finally{if(_0x3cd66f[_0x2eba('‫f0','$MS]')]!==_0x3cd66f[_0x2eba('‮f1','e^da')]){$['logAndNotify'](_0x2eba('‮f2','Ydf[')+this[_0x2eba('‫f3','Wc[3')]+']'+result[_0x2eba('‮f4','wUO!')]);}else{return Promise[_0x2eba('‫f5','gmZN')](0x1);}}}async[_0x2eba('‮f6',']5Uv')](){var _0x438aa9={'jwics':function(_0xfb595f,_0x12a8d2){return _0xfb595f!==_0x12a8d2;},'lzGpw':'lfAjE','PlNzp':function(_0x5906c6,_0x4113e4,_0x36ef82){return _0x5906c6(_0x4113e4,_0x36ef82);},'zgNcg':_0x2eba('‫f7','8YGg'),'yPCoo':function(_0x1a4f32,_0x17adbc){return _0x1a4f32==_0x17adbc;},'iVLLb':function(_0x2acdb2,_0x41014d){return _0x2acdb2===_0x41014d;},'HfVQq':'DySkk','OlfCy':_0x2eba('‫f8','e^da')};try{if(_0x438aa9[_0x2eba('‮f9','QvQx')](_0x2eba('‫fa','%Co@'),_0x438aa9[_0x2eba('‮fb','a]O[')])){let _0x5775b8=_0x2eba('‫fc',')egi')+this[_0x2eba('‫54','ZTO6')][_0x2eba('‮fd','TZAJ')]+_0x2eba('‮fe','U7Zw')+this['type'];let _0x1975b3='';let _0x40baee=_0x438aa9[_0x2eba('‫ff','%yCe')](populateUrlObject,_0x5775b8,_0x1975b3);await httpRequest(_0x438aa9['zgNcg'],_0x40baee);let _0x16b774=httpResult;if(!_0x16b774)return;if(_0x438aa9[_0x2eba('‫100','ZTO6')](_0x16b774[_0x2eba('‮101','E&s5')],0x1)){$[_0x2eba('‮46','ZTO6')](_0x2eba('‮102','wUO!')+this[_0x2eba('‮103','PXoO')]+']'+_0x16b774['message']);}else{if(_0x438aa9[_0x2eba('‫104','rGrL')](_0x438aa9[_0x2eba('‫105','k#J0')],_0x438aa9[_0x2eba('‮106','gmZN')])){return Promise[_0x2eba('‮107','OG#0')](0x1);}else{$[_0x2eba('‮108','jANB')](_0x2eba('‫109','@tLP')+this['name']+']'+_0x16b774[_0x2eba('‮10a',']5Uv')]);}}}else{$[_0x2eba('‮10b','Br7S')]('账号['+this[_0x2eba('‮10c','SBI1')]+']会员互动任务已完成');}}catch(_0x1e786f){}finally{return Promise['resolve'](0x1);}}async['fhelp'](){var _0x516c0b={'APFkE':function(_0x2ee3f5,_0x2a8b07){return _0x2ee3f5!==_0x2a8b07;},'SsCQy':_0x2eba('‫10d','Br7S'),'TmZxc':function(_0x15c76f,_0x58f2c0,_0x3e7926){return _0x15c76f(_0x58f2c0,_0x3e7926);},'FvifB':function(_0x3ffac0,_0x2da6ba){return _0x3ffac0==_0x2da6ba;},'lJjNm':function(_0x2e6ceb,_0x500341){return _0x2e6ceb===_0x500341;},'HBGxv':_0x2eba('‮10e','RDCf'),'IVpGt':_0x2eba('‮10f','RDCf')};try{if(_0x516c0b[_0x2eba('‮110','%gMR')](_0x516c0b[_0x2eba('‮111','gmZN')],_0x516c0b[_0x2eba('‮112','9I!8')])){if(userCookies)userList[_0x2eba('‮113','gmZN')](new UserInfo(userCookies));}else{let _0x469767=_0x2eba('‫114','%gMR')+this[_0x2eba('‮115','^cbV')]['unionid']+_0x2eba('‮116','6poP')+this[_0x2eba('‮117','TZAJ')][_0x2eba('‫118','8YGg')]+_0x2eba('‫119','E&s5')+ts;let _0x32e7c8='';let _0xea9f22=populateUrlObject(_0x469767,_0x32e7c8);await _0x516c0b[_0x2eba('‮11a','QvQx')](httpRequest,_0x2eba('‮11b','wUO!'),_0xea9f22);let _0x5508e1=httpResult;if(!_0x5508e1)return;if(_0x516c0b[_0x2eba('‮11c','U7Zw')](_0x5508e1[_0x2eba('‮11d','gmZN')],0x1)){if(_0x516c0b[_0x2eba('‫11e','RZ*q')]('ovnPb',_0x516c0b[_0x2eba('‮11f','0&du')])){$['logAndNotify'](_0x2eba('‮ab','*mSU')+this['name']+']'+_0x5508e1[_0x2eba('‫c','p@6S')]);}else{this[_0x2eba('‫120','G80m')]=++userIdx;this[_0x2eba('‮121','^cbV')]=this[_0x2eba('‫120','G80m')];this['valid']=!![];this['canRead']=!![];try{this['param']=$[_0x2eba('‮122','9I!8')](str);this[_0x2eba('‫123','a]O[')]=!![];}catch(_0x36fa60){this[_0x2eba('‮124','*mSU')]=![];$[_0x2eba('‫125','e^da')](_0x2eba('‫126','hzM[')+this['index']+_0x2eba('‮127','rGrL'));}}}else{if(_0x516c0b[_0x2eba('‮128','6poP')](_0x516c0b[_0x2eba('‫129','G80m')],_0x516c0b[_0x2eba('‫12a','$MS]')])){$[_0x2eba('‫12b','^cbV')](_0x2eba('‮12c','E&s5')+this[_0x2eba('‮12d','0B6t')]+']'+_0x5508e1[_0x2eba('‮c9','ZTO6')]);}else{this[_0x2eba('‫12e','8YGg')]=![];$[_0x2eba('‮12f','U7Zw')](_0x2eba('‮130','9^Vu')+this[_0x2eba('‫131','Ydf[')]+']CK格式错误');}}}}catch(_0x2668dc){}finally{return Promise['resolve'](0x1);}}async[_0x2eba('‫132','ZTO6')](){var _0x4472f1={'dXcTT':'Content-Type','NCruK':function(_0xc58856,_0x3e3e5e,_0x2a3b35){return _0xc58856(_0x3e3e5e,_0x2a3b35);},'gGnLg':_0x2eba('‮133','C54G'),'tmDYM':function(_0x332299,_0x5b5f49){return _0x332299==_0x5b5f49;},'alOWU':_0x2eba('‫134','tj^t'),'BFWxt':function(_0x364d7c,_0x3c5af4){return _0x364d7c!==_0x3c5af4;}};try{let _0x10bc8d=_0x2eba('‫135','Dga5')+hpid+_0x2eba('‫136','*mSU')+this[_0x2eba('‮137','Dga5')][_0x2eba('‫138','I!@H')];let _0x2b2dd6='';let _0x372288=_0x4472f1[_0x2eba('‫139','Xww&')](populateUrlObject,_0x10bc8d,_0x2b2dd6);await httpRequest(_0x4472f1['gGnLg'],_0x372288);let _0x179251=httpResult;if(!_0x179251)return;if(_0x4472f1[_0x2eba('‫13a','QvQx')](_0x179251[_0x2eba('‮13b','e^da')],0x1)){if(_0x4472f1[_0x2eba('‮13c','tj^t')]!==_0x2eba('‫13d','jANB')){$[_0x2eba('‮13e','6HZk')](_0x2eba('‫109','@tLP')+this[_0x2eba('‫ef','%gMR')]+']'+_0x179251[_0x2eba('‮13f','LFcg')]);}else{this[_0x2eba('‫140','9I!8')]=$[_0x2eba('‫141','@tLP')](str);this['ckValid']=!![];}}else{$[_0x2eba('‮46','ZTO6')](_0x2eba('‫142','6poP')+this[_0x2eba('‮143',']5Uv')]+']'+_0x179251[_0x2eba('‮144','k#J0')]);}}catch(_0x562510){}finally{if(_0x4472f1[_0x2eba('‮145','RZ*q')](_0x2eba('‮146','YRak'),_0x2eba('‫147','G80m'))){let _0x54804b=url[_0x2eba('‫148','*mSU')]('//','/')[_0x2eba('‮149','%Co@')]('/')[0x1];let _0x233a61={'url':url,'headers':{'Host':_0x54804b,'User-Agent':defaultUA},'timeout':0x1388};if(body){_0x233a61[_0x2eba('‮14a','QvQx')]=body;_0x233a61['headers'][_0x4472f1[_0x2eba('‫14b','a]O[')]]=_0x2eba('‫14c','SBI1');_0x233a61[_0x2eba('‫5c','%Co@')][_0x2eba('‫14d','G80m')]=_0x233a61[_0x2eba('‫14e','C54G')]?_0x233a61[_0x2eba('‮14f','7DRD')][_0x2eba('‫150','k#J0')]:0x0;}return _0x233a61;}else{return Promise['resolve'](0x1);}}}async[_0x2eba('‮151','hzM[')](){var _0x123247={'FhBtz':_0x2eba('‮152',']5Uv'),'RsYta':_0x2eba('‮153','E&s5'),'mnLQB':'Ygvma','AkWfE':function(_0x470d24,_0x39a39f,_0x2489e9){return _0x470d24(_0x39a39f,_0x2489e9);},'pnQRW':function(_0x5e3709,_0x5a338e){return _0x5e3709==_0x5a338e;},'RiBwF':function(_0x2a5c9a,_0x325954){return _0x2a5c9a!==_0x325954;},'bwoHw':_0x2eba('‫154','G80m'),'frpuA':function(_0x59a63a,_0x1f83b9){return _0x59a63a===_0x1f83b9;},'bkHhA':'fPXIS'};try{if(_0x123247[_0x2eba('‮155','sc@4')]!==_0x2eba('‮156','PXoO')){let _0x37b889=url['replace']('//','/')[_0x2eba('‫157','TZAJ')]('/')[0x1];let _0x2b070f={'url':url,'headers':{'Host':_0x37b889,'Content-Length':Content,'content-type':_0x123247[_0x2eba('‮158','hzM[')],'User-Agent':defaultUA},'timeout':0x1388};if(body){_0x2b070f[_0x2eba('‫159','0B6t')]=body;_0x2b070f['headers'][_0x2eba('‫15a','tj^t')]=_0x123247[_0x2eba('‮15b','8YGg')];_0x2b070f[_0x2eba('‮15c','PfF&')][_0x123247[_0x2eba('‮15d','%Co@')]]=_0x2b070f[_0x2eba('‫15e','hzM[')]?_0x2b070f[_0x2eba('‫159','0B6t')][_0x2eba('‫15f','KLuo')]:0x0;}return _0x2b070f;}else{let _0x354924=_0x2eba('‫160','9^Vu')+this[_0x2eba('‫161','Ydf[')][_0x2eba('‫162','6HZk')];let _0x2e68aa='';let _0x265a3b=populateUrlObject(_0x354924,_0x2e68aa);await _0x123247[_0x2eba('‫163','%Co@')](httpRequest,'post',_0x265a3b);let _0x389ccb=httpResult;if(!_0x389ccb)return;if(_0x123247['pnQRW'](_0x389ccb['status'],0x1)){if(_0x123247[_0x2eba('‫164','$MS]')](_0x123247[_0x2eba('‫165','%Co@')],_0x123247[_0x2eba('‫166','9I!8')])){return Promise[_0x2eba('‮167','Ydf[')](0x1);}else{$[_0x2eba('‮168','KLuo')](_0x2eba('‮47','%yCe')+this[_0x2eba('‫ec','rGrL')]+']'+_0x389ccb['data'][0x0][_0x2eba('‫169','ZTO6')]+'\x20\x20'+_0x389ccb['data'][0x0][_0x2eba('‫16a','9I!8')]+_0x2eba('‮16b','tj^t')+_0x389ccb[_0x2eba('‮16c',')egi')][0x0][_0x2eba('‮16d','8YGg')]);}}}}catch(_0x5dc511){}finally{if(_0x123247['frpuA'](_0x2eba('‫16e','6HZk'),_0x123247['bkHhA'])){return Promise['resolve'](0x1);}else{$[_0x2eba('‮ee','hzM[')](_0x2eba('‫98','$MS]')+this['name']+']'+result[_0x2eba('‫16f','9I!8')]);}}}async[_0x2eba('‮170','$MS]')](){var _0x38e604={'HQEbr':function(_0x24d54a,_0x4ad0a9,_0x2b7ed8){return _0x24d54a(_0x4ad0a9,_0x2b7ed8);},'XjVzu':function(_0x2e44bd,_0x316998,_0xe85bdc){return _0x2e44bd(_0x316998,_0xe85bdc);},'CapBK':'post','pCjSY':function(_0x190239,_0x5e1d0f){return _0x190239==_0x5e1d0f;},'QZiby':function(_0x1bf37d,_0x357bc6){return _0x1bf37d===_0x357bc6;},'LXfww':'uBisz','CoKOV':_0x2eba('‮171','Br7S'),'fVzqm':'xjnEg','COdmi':_0x2eba('‫172','PXoO')};try{let _0x4d59a2=_0x2eba('‫173',']5Uv')+this[_0x2eba('‫174','LFcg')][_0x2eba('‫175','Dga5')];let _0x3776a3='';let _0x44fd5c=_0x38e604['HQEbr'](populateUrlObject,_0x4d59a2,_0x3776a3);await _0x38e604[_0x2eba('‮176','*mSU')](httpRequest,_0x38e604[_0x2eba('‮177','%yCe')],_0x44fd5c);let _0x3c6325=httpResult;if(!_0x3c6325)return;if(_0x38e604[_0x2eba('‮178','rGrL')](_0x3c6325[_0x2eba('‮179','8YGg')],0x1)){if(_0x38e604[_0x2eba('‮17a','YRak')](_0x38e604[_0x2eba('‮17b','RDCf')],_0x38e604['CoKOV'])){$[_0x2eba('‮17c',')egi')]('账号['+this['name']+']'+_0x3c6325[_0x2eba('‫17d','hzM[')][0x0][_0x2eba('‮17e','@tLP')]+'\x20\x20'+_0x3c6325[_0x2eba('‮61','sc@4')][0x0][_0x2eba('‮17f','9^Vu')]+_0x2eba('‮180','%yCe')+_0x3c6325[_0x2eba('‫181','Xww&')][0x0]['progress']);}else{$['logAndNotify'](_0x2eba('‮182','Br7S')+this['name']+']'+_0x3c6325[_0x2eba('‫183','%Co@')]);await $['wait'](0x1388);await this['saveUserEnergy']();}}else{if(_0x38e604['fVzqm']===_0x38e604['COdmi']){return Promise['resolve'](0x1);}else{$[_0x2eba('‫184','0B6t')]('账号['+this[_0x2eba('‫ec','rGrL')]+']'+_0x3c6325['message']);}}}catch(_0x4feddc){}finally{return Promise[_0x2eba('‫185','QvQx')](0x1);}}}!(async()=>{var _0x50ee27={'DKcwv':function(_0x558929){return _0x558929();},'Nszyv':function(_0x4ff740,_0x526fb3){return _0x4ff740>_0x526fb3;},'iqdoy':function(_0xc54a56,_0x58080b){return _0xc54a56===_0x58080b;},'RRscA':_0x2eba('‫186','C54G'),'UmPya':'\x0a--------------\x20登录\x20--------------','oUVOV':function(_0x1fec91,_0x310123){return _0x1fec91!==_0x310123;},'KxybJ':_0x2eba('‮187','Ydf['),'mmeuj':_0x2eba('‫188','Wc[3'),'UQOgq':_0x2eba('‫189','G80m'),'FPJTf':_0x2eba('‫18a','E&s5'),'ofVvC':function(_0x20f429,_0x3b99f7){return _0x20f429!==_0x3b99f7;},'HnkcV':_0x2eba('‮18b','0&du'),'AKMZT':_0x2eba('‮18c','RDCf')};if(typeof $request!=='undefined'){}else{if(!(await _0x50ee27['DKcwv'](checkEnv)))return;let _0x1ed185=[];let _0x141e55=userList[_0x2eba('‮18d','a]O[')](_0x5bb0d=>_0x5bb0d[_0x2eba('‮18e','YRak')]);if(_0x50ee27['Nszyv'](_0x141e55[_0x2eba('‮18f','0&du')],0x0)){if(_0x50ee27[_0x2eba('‮190','Dga5')](_0x50ee27[_0x2eba('‮191','OG#0')],_0x50ee27['RRscA'])){$[_0x2eba('‫192','QvQx')](_0x50ee27['UmPya']);_0x1ed185=[];for(let _0x536ec2 of _0x141e55){if(_0x50ee27[_0x2eba('‮193','7DRD')](_0x50ee27[_0x2eba('‮194','9^Vu')],_0x50ee27[_0x2eba('‫195','^cbV')])){_0x1ed185['push'](_0x536ec2[_0x2eba('‮196','G80m')]());}else{this[_0x2eba('‮197','tj^t')]=!![];this[_0x2eba('‮198','Br7S')]=!![];}}await Promise[_0x2eba('‮199','7DRD')](_0x1ed185);_0x141e55=_0x141e55[_0x2eba('‫19a','7DRD')](_0x3808d6=>_0x3808d6['valid']);if(_0x50ee27['Nszyv'](_0x141e55[_0x2eba('‫19b','RDCf')],0x0)){$[_0x2eba('‮19c','$MS]')](_0x2eba('‮19d','RZ*q'));_0x1ed185=[];for(let _0x54249a of _0x141e55[_0x2eba('‫19e','I!@H')](_0x45052a=>_0x45052a[_0x2eba('‫19f',']5Uv')])){var _0x129189=_0x50ee27[_0x2eba('‫1a0','YRak')][_0x2eba('‮1a1','LFcg')]('|'),_0x5ceefc=0x0;while(!![]){switch(_0x129189[_0x5ceefc++]){case'0':await $['wait'](0x1388);continue;case'1':await $[_0x2eba('‫1a2','PXoO')](0x1388);continue;case'2':_0x1ed185[_0x2eba('‮1a3','PXoO')](_0x54249a['fhelp']());continue;case'3':_0x1ed185['push'](_0x54249a['dl']());continue;case'4':await $[_0x2eba('‮1a4','9I!8')](0x1388);continue;case'5':_0x1ed185['push'](_0x54249a[_0x2eba('‫1a5','E&s5')]());continue;case'6':_0x1ed185[_0x2eba('‫1a6','8YGg')](_0x54249a['getTaskList3']());continue;case'7':_0x1ed185[_0x2eba('‮1a7','%gMR')](_0x54249a[_0x2eba('‮1a8','0B6t')]());continue;case'8':await $[_0x2eba('‮1a9','7DRD')](0x1388);continue;case'9':_0x1ed185[_0x2eba('‫1aa','OG#0')](_0x54249a['getTaskList1']());continue;case'10':await $[_0x2eba('‮1ab','Xww&')](0x1f40);continue;case'11':await $['wait'](0x1388);continue;case'12':_0x1ed185[_0x2eba('‫1ac','U7Zw')](_0x54249a[_0x2eba('‫1ad','jANB')]());continue;case'13':await $[_0x2eba('‫1ae','RDCf')](0x1388);continue;case'14':_0x1ed185['push'](_0x54249a[_0x2eba('‮1af','k#J0')]());continue;}break;}}await Promise[_0x2eba('‮1b0','0&du')](_0x1ed185);$[_0x2eba('‮108','jANB')](_0x50ee27['FPJTf']);_0x1ed185=[];for(let _0x3f58b of _0x141e55){if(_0x50ee27['ofVvC'](_0x50ee27[_0x2eba('‫1b1','wUO!')],_0x50ee27[_0x2eba('‫1b2','6HZk')])){_0x1ed185[_0x2eba('‮1b3','jANB')](_0x3f58b[_0x2eba('‫1b4','9I!8')]());await $[_0x2eba('‮1b5','jANB')](0xbb8);_0x1ed185[_0x2eba('‫1b6','9I!8')](_0x3f58b['saveUserEnergy']());}else{return Promise[_0x2eba('‫1b7','0B6t')](0x1);}}await Promise[_0x2eba('‫1b8','hzM[')](_0x1ed185);}}else{return Promise[_0x2eba('‫68','a]O[')](0x1);}}await $['showmsg']();}})()[_0x2eba('‫1b9','KLuo')](_0x7a65ff=>console['log'](_0x7a65ff))[_0x2eba('‫1ba','wUO!')](()=>$[_0x2eba('‮1bb','OG#0')]());async function checkEnv(){var _0xda35e={'RnmDo':function(_0x5353a4,_0x548806){return _0x5353a4>_0x548806;},'SVUba':'未找到CK\x20请阅读脚本说明'};if(userCookie){let _0x3ea66d=envSplitor[0x0];for(let _0x3fc3b1 of envSplitor){if(_0xda35e['RnmDo'](userCookie['indexOf'](_0x3fc3b1),-0x1)){_0x3ea66d=_0x3fc3b1;break;}}for(let _0x419163 of userCookie[_0x2eba('‮1bc','RDCf')](_0x3ea66d)){if(_0x419163)userList['push'](new UserInfo(_0x419163));}userCount=userList['length'];}else{console[_0x2eba('‫1bd','TZAJ')](_0xda35e[_0x2eba('‫1be','@tLP')]);return;}console['log'](_0x2eba('‫1bf','PXoO')+userCount+_0x2eba('‮1c0','jANB'));return!![];}function populateUrlObject(_0x29f446,_0x3454de=''){var _0x42ddd6={'cxIxS':_0x2eba('‫1c1','PfF&')};let _0x194dfa=_0x29f446[_0x2eba('‮1c2','gmZN')]('//','/')[_0x2eba('‮1c3','0B6t')]('/')[0x1];let _0xf7fb7d={'url':_0x29f446,'headers':{'Host':_0x194dfa,'User-Agent':defaultUA},'timeout':0x1388};if(_0x3454de){_0xf7fb7d[_0x2eba('‮1c4','*mSU')]=_0x3454de;_0xf7fb7d[_0x2eba('‮1c5','sc@4')][_0x2eba('‫1c6','0B6t')]=_0x2eba('‫1c7','8YGg');_0xf7fb7d[_0x2eba('‫1c8','RZ*q')][_0x42ddd6[_0x2eba('‫1c9','k#J0')]]=_0xf7fb7d['body']?_0xf7fb7d['body'][_0x2eba('‫1ca','Ydf[')]:0x0;}return _0xf7fb7d;}function populateUrlObject1(_0x5dae06,_0x221e7a,_0x3f25ca=''){var _0x3bbb45={'JEHyI':_0x2eba('‫1cb','PfF&'),'JmLQa':_0x2eba('‮1cc','OG#0'),'ccDux':'Content-Length'};let _0x3566dd=_0x5dae06[_0x2eba('‫1cd','LFcg')]('//','/')['split']('/')[0x1];let _0x29068d={'url':_0x5dae06,'headers':{'Host':_0x3566dd,'Content-Length':_0x221e7a,'content-type':_0x3bbb45[_0x2eba('‫1ce','hzM[')],'User-Agent':defaultUA},'timeout':0x1388};if(_0x3f25ca){_0x29068d['body']=_0x3f25ca;_0x29068d[_0x2eba('‫1cf','Xww&')][_0x3bbb45[_0x2eba('‫1d0','Br7S')]]=_0x2eba('‮1d1','6HZk');_0x29068d[_0x2eba('‫1d2','gmZN')][_0x3bbb45[_0x2eba('‫1d3','jANB')]]=_0x29068d[_0x2eba('‫1d4','PfF&')]?_0x29068d[_0x2eba('‫15e','hzM[')][_0x2eba('‫1d5','U7Zw')]:0x0;}return _0x29068d;};_0xodX='jsjiami.com.v6';
async function httpRequest(method,url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                } else {
                    if(resp.body) {
                        if(typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}

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