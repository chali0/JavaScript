/*
碳普惠  vx小程序

变量：捉包https://mall.tphcer.com/域名headars里的x-tphmall-token 

格式：export tph="token=xxxxxx"  多账号换行隔开

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

交流群：https://t.me/meetclover
*/

const $ = new Env("碳普惠");
let envSplitor = ['\n'] //多账号隔开方式，默认换行可自定义


var _0xod8='jsjiami.com.v6',_0xod8_=['‮_0xod8'],_0xc574=[_0xod8,'wpVPKcKUw6tSIA==','w6vDjcOBFys=','wrEgURs=','F8O7c8KbR8OF','wo0Rw4TCvMKRwqbDrMOQw77Dm0J9E8KDN8OqXhTDhi5zw54mwqrCsHzCs8KRw4zDixjDrFfChXBnw7E2wrQBPMOPB8KlwpHDksKqw61a','G8Ktw5tWBQ==','QwbDihnDkA==','GSs3RcKm','Z21+RyosUw==','FMOGwq/DlgQ=','aysLwrHChsObwrXChMOFwpLDhcKwWw==','IUhX','VsKZwpXCvsKV','w4V+BMKTSsKSwqEJwrcTSSjDslDDuMOcMw==','ZMKLZcKUCw==','a8OUwqfClg==','Yeayi+acg+WnguWIluWOsOmjjeWPjQ==','NAQURA==','w5zDrsOREDQ=','S8Ogw5bDjcOTKMOqHWPCgDMX','wpNLJcKV','csKfesKVFw==','w55oJMKUR8KWwqE=','U3A9UCkTVw==','cFpIacKxJUB3w6zCicODJzA=','wpUKw4PCuA==','QltOaMKwMEBrw7Q=','NyDDqsKbag==','wqp8w4EDw5M=','fVA4wrwrw78d','HsKnw6RjAw==','KXXDpsK9','wqXmqJ7mi5vlirDku7Pvvak=','MgHDiXzCk0E=','wopHbsOkLQ==','wrMNwotldTAzw7fDgsOzLsKL','ABJC','w5jor4jmo4TmnZPljLnlrrXmi4LlnrwtOeadl+Waq+S4vnfCrznCuF7DizEFE8KIw5HlpKzojovlja/lj73lrYI=','w4BkJMKP','w5XCkMKBPcOFwpvDtMOfZnXCmMOew5Q=','MAvDssK3aw==','wpLDt8KqZUEEw4LDq8Omw5jDrMK0X3Q6wonCjMOAYll0KsKDQcOvF2U+w6jDkMOFwrzDnMKdT8OeT8OSJcKNYmLDicK4wrzDocOzw5ccXCM3','IMOswqzDghM=','FyQlZcK4','L3HDqsK8w4bClMKr','f0Vkw6DDgjE/Nk7Cjiw5P8Oz','KsOXUMK3ag==','wp9acA==','cVQtwrk=','wpRWd8OC','w5tsPsKP','UirDtQ==','EwvDgMKIRw==','Z8KRwr5YMAHCuw==','WDsMwrbChcOfwrk=','fW17','BcOLwprDkR0=','VMKGwpR+f8ObwoPCsijDk8OZwqDDrCvChHzDkMOVwrN/wrvCkMK/JD7DssOAIQ3CtMOZwp7Cqkd4EwdHwoJ6wr1OwozCmnPCjMKP','c2HDiF/Dmw==','R1hJcMKH','MBbDjw==','6LWx5Y6Ew6A=','ScOuw5zDqQ==','Jj3Ds8KTdxE=','OXPClcOgMA==','w7zCs8KwIcO8','RcK6asKVIA==','wp7DnwQzJ1/DpA==','w6ZIccKHX8OMZ8OXw4c6Rms=','6LaJ5Y2xw6s=','w7DCqcOwc8KjBQ==','f2dsVw==','wp1Dw5wmw7c=','Xhdxwq0T','bcOTwrPClS4=','w4hsI8Ka','wpvDmx4o','wrorUQ==','UwjDlR0=','w6IXwo7CicKNYsKLw6bCsCt8w6I=','w7N1w4s1VGVHw6jCug==','DMKfw6ttMQ==','U8KWwrFrfw==','6LS25YyBwog=','wrjms4TmnrnlpprliZPljbPpoYXljKk=','w67DqMKiwqHDvF3CpA==','VkpIU8K7IEh/w6k=','R8KRfjw=','ZMKwwqNaQw==','w73Cr8O2bsKjWMOMwqlxw5tGPsOGwrMdwphEKCnDvcKBFAElcMKEMAgwwqlPJg7CmcK+w67DvcKML8OxWBXCiA==','woVNwrRuw7jDiUw=','AsKow40=','w7pGZMKnXA==','XsOBw4DDn8OE','Jj3Ds8KQaw==','P8KLw5nDuDQMAms2w4rDlhw=','bemhjeWNhOWkluWKl8Okw5Y=','woAXw4LCocKRw7s=','UhvDkxLDkQ==','w4nCij3DqMKX','YDUcwr7CoA==','w5rCmMOYZ8Kz','SOmhsuWMm+WloeWLrU3Dvg==','ChXCsMOD','VcOqw4bDrcOPKA==','MxAOWA==','RMKKbDzDuMOn','eA3DksKBBg==','wr8gUiPCrlXCosKvUsOPXgI=','w7gXwpDChw==','w5fpoqHlj4DlppDlioDCkgnopZ7ljaLpq5/or6EyPUPDl+WwpuitjOiGseWIiOi9qOmoouivkQ==','wo00w5p6','w4jDo8OENDRBKQnCr8OV','CcO7bsKTX8Obw54=','F8Oxeg==','VcOqw4LDo8OROsOB','JCrDtcKoYQTCssKaIMKK','I8KLw43DjQ==','MWLCgMORKA==','MkJIacKq','wpMkw6rCmcKy','w6jCnBvDu8KcaTIvBz1vCQ==','6Lay5Y+nw6Q=','BcKtw4RS','d+mrkuiuvuejmOWLnuaUmeaLjOWJocKEw4vCgcOh5by15aWj6IeF5Yuq6L+k6au86K2B','VAjDkQjDncKawpI=','wp40w4dv','wqwNw7Zjwrk=','Vy7DuMKh','M8OPdsK/ZQ==','Z8K5VxzDvA==','cWvDkVnDmsK5Ng==','OMOxc8KIVsODw4/CvMK8w64Qwo4=','w6XCgwzDlsKbbh00GjtnX8KtBy7DuMKHZ23CjzLChkXDkgINw4bCkwjCtcOdw4hHwrTDiMOmSsO6wocIwqFQw4E7woRlE0c=','wqYKw57CuMKHw7LCt8OSw5/Dn0B2ScKf','A8Kiw4dZDA==','wq7DqzMaGw==','w5Mkwp/Cu8KO','w51vcsKkYg==','OMOjwrDDjRo=','FRHCuMOTw5TDpMKq','VAhowo4c','wrgYw4lXwpI=','Dw5Bw4A=','Z3xrUzxkD8KGesKAGg3Dt8KIRMKWwp/CpjzDr8OYZwvCmWbCqEHDgsOyDgU7TcOhbzNIwofChMKew4BQF8Kmw5/Cu1bCq8K3w6BXwr7DkQ==','wqLChg7DlsOPIgs4XCZsB8K0WD3CoMKXL3/CsiXCnAnDlRQ=','w6TChMKHNMOH','csKRwrk=','w7nDv8KjwqDDvw==','wrJHw60Sw6rCgMO3w54hwpTDsWk=','w7vCusOvew==','DeiFp+WJtui9pOmrsuitv8OF','wphYOsKdw71H','YsOQwr7CoRnDphAiwp4=','CHbCiMOGBg==','I8KRw43DkQ==','wo9PP8KRw7xE','6Lec5Y20woU=','JAAJZsKow6Fmw5d1w4o=','wpcBwrtl','biDDgB/DjA==','w6bDh8OKAyI=','Kw9EHUo=','wqsNwodBdQ==','fn3Dk1PDpw==','OjzDscKXVg==','N8Oowqo=','SHJ4w7vDvQ==','w7DCqcOwcMK/','d+ePg+aesg==','w6DCkgjDmw==','JUJKYsKHwolbSmw3MsOSw7jCsSc=','GAbCq8OZw54=','TCDDtsKUJ8K3IjEpwoASw4Q=','6Las5Y+QTQ==','wpZeacOT','w5flj7/ph5npl5/or57mir7lt5vlponml7s=','LQkld8Ku','ERvCvsO2w5/DssKXQ2vDvcOfwqs=','wq5Hw7kn','FjtYKnc=','w4R5I8KLEcOPw6s2wrJPQSjDg03DtsOVL8KGagnClijCsn90WMOTKcO7wr/CnwPCrsKJwpxqT8OuQcKYwo1pVcOVw4rCjUPCvsKrCA8NbcOja8OmIsKBI8KW','IXvDllPDkcOg','E8OKbMK1Vw==','SBrDh8KfGA==','w4zDqcOUBw==','UjNUwo0=','Dz1Z','UcOmw4E=','IxrDlnTDkQ==','w4Z6OMKdUQ==','ZMKfwr7Cng==','8JqdvuWOrOWvsemrkOiutuaLjuWKgGvmnbnmla7mn4/ohJY=','woxWacOTaQ==','w4zDp8OeMDRSLg==','QnoqWg==','wrwNwohB','WXpqS8KP','w7bCtMOmew==','F8OxesK9XcOJw7XDvsKcw74GwpI=','VMKnwrZEXQ==','dlo9wr0=','AQ5Cw7jCkGhkw4/DkcKBw69R','w7XDoMKgwofDog==','e2wAwqsH','Tm1vw5zDlw==','Tk95w7vDiyku','5p+Q5oir5YqDTcKaUOittumbseisruiFkOacjeitr+aYvw==','w5QFwqd+wqnDicKUwpx4w5DCuj3DsT4vbOmiueWNv+WlkOWLi8KrP8KfXkjDtAEYI8KYT8OQWlgV','w4XDg8OxMDI=','bRRywq8F','AjzDikTCtw==','wp5WaMOCPQE=','IA4rUcKhw7ph','UWA9Vw==','HcKtw4VeDA==','PcOUwpHDjyc=','a2HDhHvDm8K5HSfDlcKRL3w=','J2rCnsOEIF0=','woAtfy7CuQ==','UDrDosK9','wrYMwopL','eVo+','C2zDmsK7w6U=','bmRz','JyZkw5zCig==','w4PDo8OeBSVb','WwbDhj3DkMKWwr1VKcOkwow7','wo7DnlHCl8OfIFFtXnkkXcO4B3TCr+aUleW5suS7sOWJgWDDhkXCil1Mwo7DkEbDt8KUwoAOwqLDhQ==','wr1Jw6QBw6HChcOd','HRRWw5E=','KhYuWMKsw6Fgw6x5w53CnsODw6bCtXrCh3w=','w7ofwo7Clg==','wp8DwrE=','RWEDwq45','XTUwwrLCkA==','w6zDuMKiwqY=','w7hCYcKnQ8OM','dMKYwqE=','RMKWYj/DoMOnwpY=','DgBRw5rClg==','w7B/w5EC','dEUpwrQnw64PZ8KYBzvDjSjDm8KJwrE=','U8Kkw7w0Q8KwwoJ7wp5lFMKn','PhvCt8ODw5TDuMKtAVPDscOXwrUYBw==','X0wIwqkY','Z8KEw4sGQQ==','fREmwp/Cjg==','TzRdwo0PYUI=','XMKbaDjCoMO1wp3Du8ODcQ==','KyJ9w4PCiw==','I2zClsOJ','b2vDgl7DkMKvIA==','e8K1aMKLGQ==','wpxaOMKcw6dDMmvDocKrw5Fxb2pVDQ==','X8KbbCzDqMOmwoI=','wpg6w5d3','wpIKwrNtwq7Cmw==','ecKRwqNQKB8=','w7DDosK2','csKeZ8KvFw==','5YSa5oqy5YqZ','w77CvsOnbsO9A8KPw69qw58=','IhUNXMKkw7Bkw4x4w4DClcKJw5jCr3jCjA==','H3HDoMKdw4k=','MMKLw5DDjT8GOCk2w5rDgAA=','f8Kdwo56acKPw5jCsAnDl8ObwqvCtjc=','w7jCtsKPPcOQ','wogYwpFOwr4=','RjEY','SXhjw5LDlw==','RcOgw5XDtQ==','YnogSyALRgs8InRL','NgPDi33CiUVlRCPCvGDCp2/Ck8OgLS7Cs8KPDjwUasOCw63CjsKMwojCowMNw4XDrMK9w47Dr8OrJMOBw49Bw75Zw4DDlBTDiio=','w4lIeMKyVMOGXcKVw782TnVkBg==','GcKpw5lbCRHClQ==','woQVw4DCoMKLw7/CosKLw7rDlUA+RcOaMMO1SlzDkm9iw5xmw7DCtWjDucKKw5zDgQ7CplrDjQNsw7glwqMmMcOJX8KVwpHDvcOqwrA=','w6TCvMKtIMOe','YmdeViM=','UCl7wo8l','U8Kgw4QhSsK3wpI=','K3vDrMKZw43CgsKWTMKBXhvDmA==','w73Ci8KRMMOS','ISDDpcKH','BQREw53Cm35Z','wpQ2cRfChw==','wqx7w5IBw5A=','QmlWdCI=','HxvCvcOO','RjsRwr7CncOB','BBJrw5bCmmk=','YMObwrw=','Fj5W','U8O/w5k=','RHs4','wp0ww4dqwrAEw6A=','BWpIacK9','bFkCRyc=','ZEI9wrk2','bmDDh1/DjQ==','wr0uWAc=','QQjDjRXDmg==','Uk5SU8K7Nk0=','wo1qw7w+w50=','wq5Jw7gyw6k=','ZkErw6okw74BfQ==','RTFvwokbR0A=','dsOpw4DDgMOK','JUfDjcK0w7c=','T154wqbDjSwkdQ==','wrwJwrpFdz0Z','6La65Y26woo=','ZmZ7Rjc=','w7fCusOxe8OmVsKKw6t7','LT9GEEE=','UXo9Sw==','GSLDtsK9SA==','Uw9QwooP','w7djw6czfw==','Xx3DlQzDjcOIw5wVPMOkwoktwpfCoUgLLcKxHV4GKkHCoQnDkRcHEMK6wqzDhMOpDz5G','wpxecMOXZQ==','X8KdwoRr','w6TCisKXIcOh','wr1Hw642','wpwfw7HCgMKK','GRXCrcOW','WFVlSsKQ','Yx0bwq/CnA==','U8Ogw73Do8OeLcOIF1vChiILHyXCow3DjA==','DiFZPVfClcKIwq8CYcOiwqo=','6LWh5Y+jw5A=','Teafmuavsumpt+iskuejgui8hOWytuWGh+WTquS4lg==','w6PChMKcIQ==','w6Z1w4wIXWRD','UMKdwodPYsKFw6LDsjHDm8OTwrU=','6Lec5Y6iw6g=','fsKXwr7Cng==','wqDpqqboronno7HorYjliIvplYror7Digq7ig6Lliojml64=','wokOwrR+','wovDnwMKLlvDol7CpHc=','6LWL5Y6Wfg==','fsKdQ8KC','Humjo+WOq+WlpuWJvMKpJQ==','wp8nw4FjwqIX','wpXDmzUuHA==','ZRZowrAA','MGdkTsKG','Ql9QaMKq','cW/Dj1PDkQ==','VURuw7HDnw==','C8O/b8KdXg==','dsOBwrjDgRbDoh4+','JUZ1bcKowo9K','woDDlRAdJU3Dj17CtHvDryM=','6LeK5Y2NLA==','w78YwpnCh8Kn','bcKIw5nmobzlvKnpl4forJk=','w7zCtcOme8Ko','ZsOUwqTCoRnDsBU=','STzDgsK8LsK9ODE5wogN','wp4hw6tEwr0=','OMOxc8KIVsODw4/CvMKkw7IOwozDuw8=','RnvDl1LDmsKvOjLDgMKMIGrDmw==','YsOQwr4=','dcKyw6YjSg==','w4fCgzrDmcKI','wqwww4dowqs=','LjbCrcOhw5w=','O8KQw4rDiSlSYysvw4LDnAnDu0jDg8OhdcKVYFTCjcKQw5DCvcKwewJUQyjCjiltwpPCmCnClFHDtMKjwpnDhws=','RwjDkx3Dkw==','FiFVGVc=','XsKhwq5IYQ==','XwzDgBjDm8KAwoA=','wpIww5JqwrQCw7I=','HsOzS8KWVQ==','I3XDv8K5','6LSR5Y6ew7o=','w7LDrMK8wqs=','X8Kdwo59acKCw5nDqSzDhMOQwojCoybChw==','dGfDhFTDvMKz','IE9oTcKV','w5vCo8OvesKe','LyDDpsK/ahLCn8KaMMKGcxo=','6LWE5Y65ZQ==','AwBIw5w=','YeS4uOaUheW3vOe7g+eun+WKnOi9muS7gw==','6LSR5YyJVg==','wosEw53CqQ==','DeS5h+aUu+W1kee6seevgOWLlei/iuS7iQ==','w685wrvCksKP','Sm8UUxw=','ZcKBwr5f','DyfDr8K4QQ==','wqQQw4TCpMKNw67CqsKFw7LDjkd+Uw==','XzZhwrEE','Y2d4YiE6bsOGY8KIEBg=','6LSz5YyDwpY=','X05RZA==','LllXfMK3w5wBC3UDLcObwpjCsDrCg8OdSMOMw7rDjVXCgGvDgsKdUQEuFMO6A0FNw6XDmsKLw7k=','worDosKsdF8=','KcKow4TDtiA=','dcKOXMKJLA==','fMKZwrTCusK9wqcmw5Zqwo1KwrU=','RD8Swrw=','WOevi+WLusOJXA==','CBNXw5TCjWs=','6LeY5Y6YwoY=','KExOaQ==','w7Fiw40KQnU=','QsKuw6EvSsKowpM=','wrjDosKtfFEewrTCk8OZw43DocKPRTYHwrXCjMKVXjNGP8KgFMOVFQcgwrvCiw==','w7XClcKFOcODworDvMORbm7Cn8Kew4LDpzfDjQ0uHMOkwoAYfyjCgMOFDUvChkkOERrCqGQIHMKYHMOgw53DlMKzGH3Dm1lV','YyDDv8KhLMK9GHMJwpAEw5g=','AAoTRMKow71xwpVdw4rClcOBw4bCtA==','QcOqw5LDmMOk','XcK2ZxDDpw==','XMKufMKsGw==','Z8KRwr1bPRTCuw==','w7fCgxDDk8KG','f0F6WMKG','wrxHw64q','wrsqVAbCpUPCnw==','jsjiwQaFmwi.nrPBecomN.Bv6fIEyu=='];if(function(_0x3a3219,_0x3c0d67,_0x3960db){function _0x2e3db6(_0x180ce4,_0x26f728,_0x40df59,_0x54a193,_0x2b1f56,_0x220288){_0x26f728=_0x26f728>>0x8,_0x2b1f56='po';var _0x582e23='shift',_0x3fe368='push',_0x220288='‮';if(_0x26f728<_0x180ce4){while(--_0x180ce4){_0x54a193=_0x3a3219[_0x582e23]();if(_0x26f728===_0x180ce4&&_0x220288==='‮'&&_0x220288['length']===0x1){_0x26f728=_0x54a193,_0x40df59=_0x3a3219[_0x2b1f56+'p']();}else if(_0x26f728&&_0x40df59['replace'](/[wQFwnrPBeNBfIEyu=]/g,'')===_0x26f728){_0x3a3219[_0x3fe368](_0x54a193);}}_0x3a3219[_0x3fe368](_0x3a3219[_0x582e23]());}return 0x113a1f;};return _0x2e3db6(++_0x3c0d67,_0x3960db)>>_0x3c0d67^_0x3960db;}(_0xc574,0x122,0x12200),_0xc574){_0xod8_=_0xc574['length']^0x122;};function _0xefda(_0x30ef0c,_0xab1140){_0x30ef0c=~~'0x'['concat'](_0x30ef0c['slice'](0x1));var _0x3ae207=_0xc574[_0x30ef0c];if(_0xefda['nmRjVd']===undefined){(function(){var _0xb87d59=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x30588e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xb87d59['atob']||(_0xb87d59['atob']=function(_0x26e738){var _0x10b1d4=String(_0x26e738)['replace'](/=+$/,'');for(var _0x3147f2=0x0,_0x1d8257,_0x35acb0,_0x2bf54a=0x0,_0x779549='';_0x35acb0=_0x10b1d4['charAt'](_0x2bf54a++);~_0x35acb0&&(_0x1d8257=_0x3147f2%0x4?_0x1d8257*0x40+_0x35acb0:_0x35acb0,_0x3147f2++%0x4)?_0x779549+=String['fromCharCode'](0xff&_0x1d8257>>(-0x2*_0x3147f2&0x6)):0x0){_0x35acb0=_0x30588e['indexOf'](_0x35acb0);}return _0x779549;});}());function _0x237a24(_0x500c9e,_0xab1140){var _0x228522=[],_0x3e07ec=0x0,_0x21f932,_0x48d34d='',_0x1d8389='';_0x500c9e=atob(_0x500c9e);for(var _0xb505a2=0x0,_0x56579d=_0x500c9e['length'];_0xb505a2<_0x56579d;_0xb505a2++){_0x1d8389+='%'+('00'+_0x500c9e['charCodeAt'](_0xb505a2)['toString'](0x10))['slice'](-0x2);}_0x500c9e=decodeURIComponent(_0x1d8389);for(var _0x5d6768=0x0;_0x5d6768<0x100;_0x5d6768++){_0x228522[_0x5d6768]=_0x5d6768;}for(_0x5d6768=0x0;_0x5d6768<0x100;_0x5d6768++){_0x3e07ec=(_0x3e07ec+_0x228522[_0x5d6768]+_0xab1140['charCodeAt'](_0x5d6768%_0xab1140['length']))%0x100;_0x21f932=_0x228522[_0x5d6768];_0x228522[_0x5d6768]=_0x228522[_0x3e07ec];_0x228522[_0x3e07ec]=_0x21f932;}_0x5d6768=0x0;_0x3e07ec=0x0;for(var _0x308c18=0x0;_0x308c18<_0x500c9e['length'];_0x308c18++){_0x5d6768=(_0x5d6768+0x1)%0x100;_0x3e07ec=(_0x3e07ec+_0x228522[_0x5d6768])%0x100;_0x21f932=_0x228522[_0x5d6768];_0x228522[_0x5d6768]=_0x228522[_0x3e07ec];_0x228522[_0x3e07ec]=_0x21f932;_0x48d34d+=String['fromCharCode'](_0x500c9e['charCodeAt'](_0x308c18)^_0x228522[(_0x228522[_0x5d6768]+_0x228522[_0x3e07ec])%0x100]);}return _0x48d34d;}_0xefda['azisgW']=_0x237a24;_0xefda['vqKpKs']={};_0xefda['nmRjVd']=!![];}var _0x2fafb5=_0xefda['vqKpKs'][_0x30ef0c];if(_0x2fafb5===undefined){if(_0xefda['GKMvir']===undefined){_0xefda['GKMvir']=!![];}_0x3ae207=_0xefda['azisgW'](_0x3ae207,_0xab1140);_0xefda['vqKpKs'][_0x30ef0c]=_0x3ae207;}else{_0x3ae207=_0x2fafb5;}return _0x3ae207;};let httpResult,httpReq,httpResp;let userCookie=($[_0xefda('‫0','Z(!A')]()?process[_0xefda('‫1','cwSo')][_0xefda('‫2','nc&8')]:$['getdata'](_0xefda('‫3','srs1')))||'';let userCGkey=($['isNode']()?process[_0xefda('‮4','EyAr')]['CGkey']:$[_0xefda('‫5','5z!0')](_0xefda('‮6','Ehst')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require('node-machine-id');machineId()['then'](_0x204530=>{});let uuid=machineIdSync();class UserInfo{constructor(_0x4dade0){var _0x1f2e84={'SBvmY':_0xefda('‫7','EyAr'),'ewqHj':function(_0x5e4ad6,_0x3d101d){return _0x5e4ad6===_0x3d101d;},'QfqLw':_0xefda('‫8','(]^J'),'bSFlT':'pFJZZ'};this[_0xefda('‫9','IC9V')]=++userIdx;this[_0xefda('‫a','UDbb')]=this['index'];this[_0xefda('‫b','A@do')]=![];this[_0xefda('‮c','OSBS')]=![];try{if(_0x1f2e84['SBvmY']===_0x1f2e84[_0xefda('‮d','I&7*')]){this[_0xefda('‮e','I&7*')]=$[_0xefda('‫f','(]^J')](_0x4dade0);this[_0xefda('‮10','we7N')]=!![];}else{return Promise['resolve'](0x1);}}catch(_0xcb3e1d){if(_0x1f2e84['ewqHj'](_0x1f2e84[_0xefda('‮11','srs1')],_0x1f2e84[_0xefda('‮12','JxY^')])){this['param']=$[_0xefda('‮13','lr&c')](_0x4dade0);this[_0xefda('‮14','pisD')]=!![];}else{this['ckValid']=![];$['logAndNotify'](_0xefda('‮15','G!jU')+this[_0xefda('‫16','fJxs')]+']CK格式错误');}}}async[_0xefda('‫17','$]K*')](){var _0x194649={'vJGBB':'1|3|0|4|2','uUibx':function(_0x45efea,_0x539380){return _0x45efea!==_0x539380;},'csXTN':_0xefda('‫18','nc&8'),'Aibse':function(_0x109b2e,_0x18a37e,_0x45d3b1){return _0x109b2e(_0x18a37e,_0x45d3b1);},'rjigV':_0xefda('‮19','EyAr'),'pobtK':function(_0x4d4d10,_0x4c847f){return _0x4d4d10==_0x4c847f;},'yzALh':function(_0x71a5f5,_0x2c7a3c){return _0x71a5f5>=_0x2c7a3c;},'izYKN':_0xefda('‫1a','sa3U'),'ICdvu':'nJscN','CLQXw':'yaBrW'};try{if(_0x194649[_0xefda('‮1b','we7N')](_0x194649[_0xefda('‮1c','aQcU')],'iLpcb')){let _0x3d9223=_0xefda('‫1d','A@do');let _0x4e91ba=_0xefda('‮1e','rW%i')+this[_0xefda('‮1f','m1W#')];let _0x280d6b=_0x194649['Aibse'](populateUrlObject1,_0x3d9223,_0x4e91ba);await httpRequest(_0x194649['rjigV'],_0x280d6b);let _0x327283=httpResult;if(!_0x327283)return;if(_0x194649[_0xefda('‫20','#OID')](_0x327283[_0xefda('‫21','I&7*')],0xc8)){if(_0x194649[_0xefda('‫22','w2%$')](_0x327283[_0xefda('‫23','mUK)')]['length'],0x3)){if(_0x194649[_0xefda('‮24','OSBS')]!==_0x194649[_0xefda('‫25','p^n3')]){this['mm']=_0x327283['data'];let _0x38c0d8=this['mm'];var _0xd6a592=_0x38c0d8[_0xefda('‮26','srs1')]();this['m']=_0xd6a592;$[_0xefda('‫27','nc&8')](_0xefda('‫28','JxY^')+this['name']+_0xefda('‮29','msH(')+this['m']);await $[_0xefda('‮2a','#OID')](0xbb8);await this['vercode']();}else{return Promise[_0xefda('‫2b','aQcU')](0x1);}}else{$[_0xefda('‫2c','m1W#')](_0xefda('‫2d','5z!0')+this[_0xefda('‫2e','msH(')]+_0xefda('‫2f','A3l!'));await $[_0xefda('‮30','DQL*')](0xbb8);await this[_0xefda('‫31','EapY')]();}}}else{$['logAndNotify'](_0xefda('‫32','Z(!A')+this[_0xefda('‮33','ZWbN')]+_0xefda('‮34','F0$C')+result[_0xefda('‮35','5z!0')]);}}catch(_0x5593ec){}finally{if(_0xefda('‫36','EapY')!==_0x194649[_0xefda('‫37','we7N')]){var _0x22b307=_0x194649[_0xefda('‮38','Ehst')][_0xefda('‫39','OSBS')]('|'),_0x34ec76=0x0;while(!![]){switch(_0x22b307[_0x34ec76++]){case'0':this[_0xefda('‫3a','IC9V')]=![];continue;case'1':this[_0xefda('‫3b','lr&c')]=++userIdx;continue;case'2':try{this[_0xefda('‫3c','rSI9')]=$[_0xefda('‮3d','cwSo')](str);this['ckValid']=!![];}catch(_0x48f667){this[_0xefda('‫3e','Ehst')]=![];$[_0xefda('‫3f','EapY')](_0xefda('‫40','EapY')+this[_0xefda('‮41','llTs')]+_0xefda('‫42','mF&R'));}continue;case'3':this['name']=this[_0xefda('‮43','$]K*')];continue;case'4':this[_0xefda('‮44','cwSo')]=![];continue;}break;}}else{return Promise[_0xefda('‫2b','aQcU')](0x1);}}}async[_0xefda('‮45','s9%m')](){var _0x33d176={'tcnpJ':function(_0x102c31,_0x2a92ea){return _0x102c31!==_0x2a92ea;},'ebHpf':_0xefda('‮46','5z!0'),'bSNFm':function(_0x2b8d02,_0xdfbaae,_0x895403){return _0x2b8d02(_0xdfbaae,_0x895403);},'ydaRQ':_0xefda('‮47','rSI9'),'lqSqu':_0xefda('‫48','IC9V'),'emVjf':_0xefda('‮49','cwSo'),'fbKAQ':function(_0x59da91,_0x3a12bf){return _0x59da91===_0x3a12bf;},'NxmdN':_0xefda('‮4a','mF&R'),'nPCIu':'FpoGK','yOFpP':function(_0x3efc3e,_0x40fddd){return _0x3efc3e!==_0x40fddd;},'KoldA':_0xefda('‫4b','6Lca'),'kzZlY':_0xefda('‮4c','5z!0')};try{if(_0x33d176['tcnpJ'](_0x33d176['ebHpf'],_0xefda('‫4d','mUK)'))){let _0x11af1b=_0xefda('‫4e','vx51');let _0x3d9970='';let _0x46be4e=''+this[_0xefda('‮4f','A@do')][_0xefda('‫50','nc&8')];let _0x4b763e=_0x33d176[_0xefda('‫51','m1W#')](populateUrlObject,_0x11af1b,_0x46be4e);delete _0x4b763e[_0xefda('‫52','A@do')][_0x33d176['ydaRQ']];delete _0x4b763e[_0xefda('‫53','5z!0')][_0x33d176['lqSqu']];await _0x33d176['bSNFm'](httpRequest,_0x33d176[_0xefda('‮54','rSI9')],_0x4b763e);let _0x5a107d=httpResult;if(!_0x5a107d)return;if(_0x5a107d[_0xefda('‫55','JxY^')]['signStatus']==0x0){$['logAndNotify'](_0xefda('‫56','A@do')+this[_0xefda('‮57','G!jU')]+']今日还未签到\x20已连续签到'+_0x5a107d['data'][_0xefda('‮58','m1W#')]+'天');await $[_0xefda('‮30','DQL*')](0xbb8);await this[_0xefda('‮59','IC9V')]();}else{if(_0x33d176[_0xefda('‫5a','Ehst')](_0x33d176[_0xefda('‮5b','$]K*')],_0x33d176['nPCIu'])){return Promise['resolve'](0x1);}else{$[_0xefda('‮5c','sa3U')](_0xefda('‫5d','nc&8')+this[_0xefda('‮5e','Z(!A')]+_0xefda('‮5f','m1W#'));}}}else{$['logAndNotify'](_0xefda('‮60','q[e2')+this[_0xefda('‫61','w2%$')]+_0xefda('‫62',']Ng#'));}}catch(_0x1d0548){}finally{if(_0x33d176[_0xefda('‫63','llTs')](_0x33d176['KoldA'],_0x33d176[_0xefda('‮64','EyAr')])){return Promise[_0xefda('‫2b','aQcU')](0x1);}else{taskall[_0xefda('‮65','PzUW')](user['info']());}}}async['signIn'](){var _0x2d3055={'ylXYs':_0xefda('‫66','sa3U'),'fosKf':'NZAWx','zLzOz':_0xefda('‮67','w2%$'),'xZOwP':function(_0x5cd4b1,_0x552b61){return _0x5cd4b1==_0x552b61;}};try{if(_0x2d3055[_0xefda('‮68','we7N')]===_0x2d3055['fosKf']){$[_0xefda('‫69','fJxs')](_0xefda('‫6a','PzUW')+this[_0xefda('‮6b','OSBS')]+']变量错误或已失效');}else{let _0x50f1cb=_0xefda('‮6c','Ehst');let _0x57143d='{}';let _0x1d28f1='2';let _0x56f2d9=''+this[_0xefda('‫6d','$G#G')]['token'];let _0x16b587=populateUrlObject(_0x50f1cb,_0x56f2d9,_0x1d28f1,_0x57143d);delete _0x16b587['headers'][_0x2d3055[_0xefda('‮6e','vx51')]];await httpRequest('post',_0x16b587);let _0x5715a8=httpResult;if(!_0x5715a8)return;if(_0x2d3055['xZOwP'](_0x5715a8[_0xefda('‮6f','ZWbN')],0x0)){$[_0xefda('‫70','msH(')]('账号['+this[_0xefda('‮71','p^n3')]+_0xefda('‮72','cwSo')+_0x5715a8[_0xefda('‫73','Z(!A')]);}else{$['logAndNotify'](_0xefda('‫74','DQL*')+this[_0xefda('‮75','Ehst')]+']'+_0x5715a8[_0xefda('‫76','aQcU')]);}}}catch(_0x4b22b2){}finally{return Promise[_0xefda('‮77','mF&R')](0x1);}}async['isShareThreeTimes'](){var _0x54bbbf={'NnFYX':_0xefda('‫78','$G#G'),'RBPZd':_0xefda('‮79','#OID'),'LkSqY':_0xefda('‮7a','s9%m'),'DKquz':_0xefda('‫7b','F0$C'),'LRRKX':function(_0x408874,_0x36e568){return _0x408874!==_0x36e568;},'ToKTm':_0xefda('‮7c','srs1'),'ZNJuk':function(_0x535522,_0xa70bfb,_0x220e9f){return _0x535522(_0xa70bfb,_0x220e9f);},'FoFEF':function(_0x11defe,_0x25a8df){return _0x11defe==_0x25a8df;},'twKsH':'Swthc','bcTrT':function(_0x5982be,_0x25683a){return _0x5982be===_0x25683a;},'jWXAg':'Dpzek','agzZh':_0xefda('‮7d','q[e2')};try{if(_0x54bbbf[_0xefda('‮7e','ZWbN')]('fecTY',_0x54bbbf['ToKTm'])){let _0x33baf2=url[_0xefda('‮7f','PzUW')]('//','/')[_0xefda('‮80','6Lca')]('/')[0x1];let _0x4d89f4={'url':url,'headers':{'Host':_0x33baf2,'authorization':_0x54bbbf[_0xefda('‮81','OSBS')],'User-Agent':defaultUA,'content-type':_0x54bbbf['RBPZd']},'timeout':0x1388};if(body){_0x4d89f4[_0xefda('‫82','I&7*')]=body;_0x4d89f4[_0xefda('‮83','UDbb')][_0x54bbbf['LkSqY']]=_0x54bbbf['RBPZd'];_0x4d89f4[_0xefda('‮84','A3l!')][_0x54bbbf[_0xefda('‫85','Gn!u')]]=_0x4d89f4[_0xefda('‫86','UDbb')]?_0x4d89f4['body'][_0xefda('‫87','rSI9')]:0x0;}return _0x4d89f4;}else{let _0x16e65a=_0xefda('‮88','w2%$');let _0x1317fa='';let _0x2786a8=''+this[_0xefda('‫89','8jYD')][_0xefda('‫8a','A@do')];let _0x391ab3=_0x54bbbf[_0xefda('‮8b','F0$C')](populateUrlObject,_0x16e65a,_0x2786a8);delete _0x391ab3[_0xefda('‫8c','fJxs')][_0x54bbbf[_0xefda('‫8d',']Ng#')]];delete _0x391ab3['headers'][_0xefda('‮8e','p^n3')];await httpRequest(_0xefda('‮8f','Ehst'),_0x391ab3);let _0x18a6dc=httpResult;if(!_0x18a6dc)return;if(_0x54bbbf[_0xefda('‮90','msH(')](_0x18a6dc[_0xefda('‫55','JxY^')][_0xefda('‫91','NN]*')],0x0)){for(let _0x46cba0=0x0;_0x46cba0<0x3;_0x46cba0++){if(_0x54bbbf['twKsH']!==_0x54bbbf[_0xefda('‫92','ZWbN')]){$['logAndNotify']('账号['+this[_0xefda('‮93','cwSo')]+_0xefda('‮94','lr&c'));}else{await $[_0xefda('‮95','F0$C')](0x7d0);await this[_0xefda('‮96','Gn!u')]();}}}else{$[_0xefda('‫97','srs1')]('账号['+this[_0xefda('‮98','A3l!')]+']分享任务已完成');}}}catch(_0x2d79da){}finally{if(_0x54bbbf[_0xefda('‫99','ZWbN')](_0x54bbbf['jWXAg'],_0x54bbbf['agzZh'])){return Promise[_0xefda('‮9a','NN]*')](0x1);}else{return Promise[_0xefda('‮9b','EyAr')](0x1);}}}async['share'](){var _0x1d0a8f={'tTKPW':function(_0x30986c,_0x27c8b2,_0x50a6b8,_0x4938cc,_0x480487){return _0x30986c(_0x27c8b2,_0x50a6b8,_0x4938cc,_0x480487);},'ItLQi':_0xefda('‫9c','OSBS'),'ukMTk':_0xefda('‮9d','w2%$'),'rxjRu':'qXxXG'};try{let _0x3ffbdf='https://mall.tphcer.com/wx/user/share';let _0x3a06bd=JSON[_0xefda('‮9e','OSBS')]({});let _0x53f68e='2';let _0x33d47c=''+this['param'][_0xefda('‫9f','sa3U')];let _0x3d2076=_0x1d0a8f[_0xefda('‮a0','I&7*')](populateUrlObject,_0x3ffbdf,_0x33d47c,_0x53f68e,_0x3a06bd);delete _0x3d2076[_0xefda('‮a1','(]^J')][_0x1d0a8f['ItLQi']];await httpRequest(_0x1d0a8f[_0xefda('‫a2','8jYD')],_0x3d2076);let _0x106135=httpResult;if(!_0x106135)return;$['logAndNotify']('账号['+this[_0xefda('‮a3','JxY^')]+_0xefda('‫a4','rW%i')+_0x106135[_0xefda('‫a5','5U1h')]);}catch(_0x5f14ca){}finally{if(_0x1d0a8f['rxjRu']!==_0x1d0a8f[_0xefda('‫a6','rW%i')]){$[_0xefda('‮a7','pisD')]('❌'+result[_0xefda('‫a8','Z(!A')]+_0xefda('‫a9','rW%i'));}else{return Promise[_0xefda('‮9b','EyAr')](0x1);}}}async[_0xefda('‫aa','NN]*')](){var _0xd4409={'TAXUu':function(_0x506ae7,_0xd7d8ef,_0x5e7683,_0x5abf92){return _0x506ae7(_0xd7d8ef,_0x5e7683,_0x5abf92);},'jcQsP':_0xefda('‮ab','#OID'),'QIMKY':function(_0x43c99e,_0x5f2e5e,_0x3cda06){return _0x43c99e(_0x5f2e5e,_0x3cda06);},'eyxYI':function(_0x4e922a,_0x3abb8a){return _0x4e922a<_0x3abb8a;},'KukyS':function(_0x522f78,_0xa41dfb){return _0x522f78!==_0xa41dfb;},'iQkxJ':_0xefda('‫ac','sa3U'),'PDAvC':'eHYvk'};try{let _0x1f8643=_0xefda('‮ad','$G#G');let _0x43b4e2='';let _0x20a218=''+this[_0xefda('‮ae',']Ng#')]['token'];let _0x1d1522=_0xd4409[_0xefda('‮af','F0$C')](populateUrlObject,_0x1f8643,_0x20a218,_0x43b4e2);delete _0x1d1522[_0xefda('‫b0','JxY^')][_0xefda('‫b1','lr&c')];delete _0x1d1522[_0xefda('‮83','UDbb')][_0xd4409['jcQsP']];await _0xd4409[_0xefda('‫b2','rSI9')](httpRequest,_0xefda('‫b3','rW%i'),_0x1d1522);let _0x1c2cc3=httpResult;if(!_0x1c2cc3)return;for(let _0x4acaf3=0x0;_0xd4409['eyxYI'](_0x4acaf3,0x13);_0x4acaf3++){this['id']=_0x1c2cc3[_0xefda('‮b4','(]^J')][_0xefda('‫b5','rW%i')][_0x4acaf3]['id'];await $[_0xefda('‮b6','NN]*')](0x3a98);await this[_0xefda('‫b7','s9%m')]();}}catch(_0x35500e){}finally{if(_0xd4409['KukyS'](_0xd4409['iQkxJ'],_0xd4409[_0xefda('‮b8','sa3U')])){return Promise[_0xefda('‮b9','PzUW')](0x1);}else{return Promise[_0xefda('‮ba','p^n3')](0x1);}}}async[_0xefda('‫bb','fJxs')](){var _0x1a9c91={'qNJFz':function(_0x249b40,_0xeccb7d,_0x2dde1f){return _0x249b40(_0xeccb7d,_0x2dde1f);},'vwuqY':function(_0x2287b6,_0x16ca7a,_0x249ee8){return _0x2287b6(_0x16ca7a,_0x249ee8);},'xpgPu':function(_0xaeda3c,_0x19a0af){return _0xaeda3c===_0x19a0af;},'hVEtV':_0xefda('‮bc',']Ng#')};try{let _0x1b219d=_0xefda('‫bd','m1W#')+this['id'];let _0x3be290='';let _0x3e1fdf=''+this[_0xefda('‫89','8jYD')][_0xefda('‫be','IC9V')];let _0x340b3b=_0x1a9c91['qNJFz'](populateUrlObject,_0x1b219d,_0x3e1fdf);await _0x1a9c91[_0xefda('‫bf','OSBS')](httpRequest,_0xefda('‫c0','5U1h'),_0x340b3b);let _0x15724f=httpResult;if(!_0x15724f)return;num++;$['logAndNotify'](_0xefda('‫c1','5U1h')+this[_0xefda('‮c2','srs1')]+']第'+num+'次阅读\x20'+_0x15724f[_0xefda('‮c3','sa3U')]);}catch(_0x5bf2c3){}finally{if(_0x1a9c91[_0xefda('‮c4','f!(F')](_0x1a9c91[_0xefda('‫c5','#OID')],_0xefda('‫c6','ZWbN'))){return Promise[_0xefda('‫c7','EapY')](0x1);}else{$[_0xefda('‮c8','hXnD')](_0xefda('‮c9','Gn!u')+this['name']+']签到:\x20'+result[_0xefda('‫ca','$]K*')]);}}}async['reward'](){var _0x259fe1={'AmyAJ':function(_0x8640f1,_0x1bff92,_0x160532){return _0x8640f1(_0x1bff92,_0x160532);},'xMHEd':_0xefda('‮cb','fJxs'),'hfyfR':function(_0x45d692,_0x1aa3d8){return _0x45d692>_0x1aa3d8;},'gSBZY':function(_0x107127,_0x41ee65){return _0x107127===_0x41ee65;},'QfZhr':'CetDB','odQes':_0xefda('‫cc','I&7*')};try{let _0x41982d='https://mall.tphcer.com/wx/reward/getCarbonExcludeWXYD';let _0x38824a='{}';let _0x522f45='2';let _0x3a5e58=''+this['param']['token'];let _0x3fff02=populateUrlObject(_0x41982d,_0x3a5e58,_0x522f45,_0x38824a);await _0x259fe1['AmyAJ'](httpRequest,_0x259fe1[_0xefda('‫cd','we7N')],_0x3fff02);let _0x2eabb5=httpResult;if(!_0x2eabb5)return;if(_0x259fe1[_0xefda('‫ce','cwSo')](_0x2eabb5[_0xefda('‫cf','NN]*')]['length'],0x1)){await $[_0xefda('‫d0','EapY')](0xbb8);this[_0xefda('‮d1','UDbb')]=_0x2eabb5[_0xefda('‮d2','A@do')][0x0][_0xefda('‫d3','llTs')];await this[_0xefda('‫d4','aQcU')]();}else{if(_0x259fe1[_0xefda('‫d5','8jYD')](_0x259fe1['QfZhr'],_0x259fe1[_0xefda('‮d6','m1W#')])){return Promise['resolve'](0x1);}else{$['logAndNotify'](_0xefda('‮d7','msH(')+this[_0xefda('‮75','Ehst')]+_0xefda('‮d8','w2%$'));}}}catch(_0x2c85f5){}finally{return Promise[_0xefda('‮d9','G!jU')](0x1);}}async[_0xefda('‮da','OSBS')](){var _0x5f46ea={'ULbIF':function(_0x1c6bdc,_0x2ffa8a,_0x359e58,_0x31fe3f,_0x113233){return _0x1c6bdc(_0x2ffa8a,_0x359e58,_0x31fe3f,_0x113233);},'yNqSy':_0xefda('‫db','q[e2'),'MyARe':function(_0x3e5220,_0x25e708){return _0x3e5220!==_0x25e708;},'JkcgI':'HEuar','bDIcj':function(_0x1b11e8,_0x3e31c3){return _0x1b11e8==_0x3e31c3;},'XKEwB':_0xefda('‫dc','m1W#')};try{let _0x2a8472=_0xefda('‮dd','$]K*');let _0x2ba24b=_0xefda('‮de','DQL*')+this[_0xefda('‫df','8jYD')]+'\x22}';let _0x49332a=''+this[_0xefda('‫e0','hXnD')]['token'];let _0x18b38b='41';let _0x17c0a3=_0x5f46ea['ULbIF'](populateUrlObject,_0x2a8472,_0x49332a,_0x18b38b,_0x2ba24b);await httpRequest(_0x5f46ea[_0xefda('‮e1','srs1')],_0x17c0a3);let _0x269535=httpResult;if(!_0x269535)return;if(_0x269535[_0xefda('‮e2','sa3U')]==0x192){$[_0xefda('‫e3','vx51')](_0xefda('‮15','G!jU')+this['name']+_0xefda('‫e4','mF&R')+_0x269535[_0xefda('‮e5','w2%$')]);}else if(_0x269535[_0xefda('‫e6','A@do')]==0x0){if(_0x5f46ea[_0xefda('‫e7','6Lca')](_0x5f46ea[_0xefda('‮e8','p^n3')],_0xefda('‫e9','$]K*'))){$['logAndNotify'](_0xefda('‮c9','Gn!u')+this[_0xefda('‮6b','OSBS')]+_0xefda('‮ea','PzUW')+_0x269535['errmsg']);await $[_0xefda('‮eb','mUK)')](0xbb8);await this[_0xefda('‮ec','srs1')]();}else{taskall[_0xefda('‮ed','F0$C')](user['km']());}}else if(_0x5f46ea['bDIcj'](_0x269535[_0xefda('‫ee','q[e2')],0x1e84e5)){if(_0xefda('‫ef','s9%m')===_0x5f46ea['XKEwB']){$[_0xefda('‫f0','UDbb')]('账号['+this[_0xefda('‫f1','llTs')]+_0xefda('‮f2','hXnD'));await $[_0xefda('‮f3','5z!0')](0xbb8);await this[_0xefda('‫f4','Gn!u')]();}else{return Promise[_0xefda('‫f5','rSI9')](0x1);}}}catch(_0x116d74){console[_0xefda('‮f6','rSI9')](_0x116d74);}finally{return Promise[_0xefda('‮f7','srs1')](0x1);}}async[_0xefda('‫f8','sa3U')](){var _0x1fe898={'vAZUP':function(_0x436f61,_0x4b95e5,_0x463145,_0x2a0692,_0x3d3185){return _0x436f61(_0x4b95e5,_0x463145,_0x2a0692,_0x3d3185);},'ZkGDQ':function(_0x23548b,_0x4e7895,_0x1b56be){return _0x23548b(_0x4e7895,_0x1b56be);},'CxlFH':_0xefda('‫f9','vx51'),'VXEmh':function(_0xedf838,_0x2fa0d5){return _0xedf838(_0x2fa0d5);},'HQkCV':'WjvqV'};try{let _0xb52bcb='https://mall.tphcer.com/admin/authBus/getVercode';let _0x624f9='{}';let _0x4193ad=''+this[_0xefda('‫fa','f!(F')][_0xefda('‮fb','Ehst')];let _0x43740a='2';let _0x85bd02=_0x1fe898[_0xefda('‮fc','w2%$')](populateUrlObject,_0xb52bcb,_0x4193ad,_0x43740a,_0x624f9);await _0x1fe898['ZkGDQ'](httpRequest,_0x1fe898['CxlFH'],_0x85bd02);let _0x2ab961=httpResult;if(!_0x2ab961)return;$[_0xefda('‫fd','6Lca')](_0xefda('‫fe','aQcU')+this[_0xefda('‮ff','8jYD')]+_0xefda('‫100','p^n3'));this[_0xefda('‮101','A@do')]=_0x2ab961[_0xefda('‮102','5z!0')]['captcha'];this['code']=_0x1fe898[_0xefda('‮103','5z!0')](encodeURIComponent,this['captcha']);await $[_0xefda('‫104','s9%m')](0x1388);await this['base64img']();}catch(_0x1781d4){}finally{if(_0x1fe898[_0xefda('‮105','rSI9')]!==_0xefda('‫106','q[e2')){return Promise['resolve'](0x1);}else{return Promise['resolve'](0x1);}}}async[_0xefda('‮107','IC9V')](){var _0x3853a8={'rRQfk':_0xefda('‮108','rSI9'),'ANNlI':_0xefda('‫109','6Lca'),'BMzYC':_0xefda('‮10a','w2%$'),'ERbYQ':function(_0x5541b1,_0x40dab7){return _0x5541b1!==_0x40dab7;},'WHdbS':_0xefda('‫10b','8jYD'),'MFnbs':function(_0x1a64ea,_0x1680a4,_0x44e519){return _0x1a64ea(_0x1680a4,_0x44e519);},'xYrvy':function(_0x332c63,_0x459812){return _0x332c63==_0x459812;},'IuzvC':function(_0x3f4276,_0x40cf62){return _0x3f4276===_0x40cf62;},'TKPML':_0xefda('‮10c','EapY')};try{if(_0x3853a8[_0xefda('‫10d','llTs')](_0x3853a8[_0xefda('‫10e','hXnD')],_0xefda('‫10f',']Ng#'))){urlObject['body']=body;urlObject[_0xefda('‮110','mUK)')][_0x3853a8[_0xefda('‮111','we7N')]]=_0x3853a8['ANNlI'];urlObject['headers'][_0x3853a8[_0xefda('‮112','5z!0')]]=urlObject[_0xefda('‫113','Z(!A')]?urlObject[_0xefda('‫113','Z(!A')]['length']:0x0;}else{let _0xd302a0=_0xefda('‫114','fJxs')+this['m']+_0xefda('‫115','6Lca');let _0x2c4f38=''+this[_0xefda('‮116','#OID')]['token'];let _0x56ef70='';let _0x28976a=populateUrlObject(_0xd302a0,_0x2c4f38);await _0x3853a8['MFnbs'](httpRequest,_0xefda('‫117','PzUW'),_0x28976a);let _0x49f56d=httpResult;if(!_0x49f56d)return;if(_0x3853a8['xYrvy'](_0x49f56d[_0xefda('‮118','G!jU')],0x0)){$[_0xefda('‮119','I&7*')]('账号['+this[_0xefda('‮11a','$]K*')]+_0xefda('‫11b',']Ng#')+_0x49f56d[_0xefda('‫11c','A3l!')]);await $[_0xefda('‮30','DQL*')](0x1388);await this[_0xefda('‫11d','cwSo')]();}else{if(_0x3853a8[_0xefda('‮11e','f!(F')]('evHly',_0x3853a8['TKPML'])){taskall[_0xefda('‮11f','vx51')](user[_0xefda('‮120','A3l!')]());}else{$[_0xefda('‫2c','m1W#')](_0xefda('‫121','$G#G')+this['name']+']验证失败\x20\x20再次尝试……');await $['wait'](0xbb8);await this[_0xefda('‫122','F0$C')]();}}}}catch(_0x93d0a2){}finally{return Promise['resolve'](0x1);}}async[_0xefda('‮123','DQL*')](){var _0x27a2ad={'YIacr':function(_0x396447,_0x399014){return _0x396447!==_0x399014;},'yspiR':function(_0xcfff13,_0x2e1951,_0x382e8b){return _0xcfff13(_0x2e1951,_0x382e8b);},'tXroZ':function(_0x1f57b4,_0x14417f){return _0x1f57b4==_0x14417f;},'nlXGc':'YJcRD'};try{if(_0x27a2ad[_0xefda('‮124','A@do')](_0xefda('‮125','Gn!u'),_0xefda('‮126','nc&8'))){return Promise['resolve'](0x1);}else{let _0x6f8d24='https://mall.tphcer.com/wx/user/info';let _0x5ba28a='';let _0x5bf0b2=''+this['param'][_0xefda('‮127','pisD')];let _0x558588=_0x27a2ad[_0xefda('‫128','IC9V')](populateUrlObject,_0x6f8d24,_0x5bf0b2);await _0x27a2ad[_0xefda('‮129','sa3U')](httpRequest,_0xefda('‫12a',']Ng#'),_0x558588);let _0x5d595e=httpResult;if(!_0x5d595e)return;if(_0x27a2ad[_0xefda('‫12b','lr&c')](_0x5d595e[_0xefda('‫12c','$]K*')],0x0)){$['logAndNotify'](_0xefda('‫fe','aQcU')+this[_0xefda('‮5e','Z(!A')]+']'+_0x5d595e['data'][_0xefda('‮33','ZWbN')]+_0xefda('‫12d','5U1h')+_0x5d595e[_0xefda('‮12e','6Lca')][_0xefda('‮12f','Ehst')]+'碳币');}else if(_0x5d595e[_0xefda('‫130','mUK)')]=0x1f5){$[_0xefda('‫131','s9%m')](_0xefda('‮132','hXnD')+this[_0xefda('‫133','rW%i')]+_0xefda('‫134','hXnD'));}}}catch(_0x5240c7){}finally{if(_0x27a2ad[_0xefda('‫135','F0$C')]!==_0x27a2ad['nlXGc']){$[_0xefda('‫136','mUK)')]('账号['+this['name']+']'+result[_0xefda('‫76','aQcU')]);}else{return Promise['resolve'](0x1);}}}async['km'](){var _0x4b274d={'hTqId':_0xefda('‫137','I&7*'),'hUVJQ':function(_0x311c89,_0x3b7c69){return _0x311c89==_0x3b7c69;},'jwofz':function(_0x3865fc,_0x3fea85){return _0x3865fc(_0x3fea85);},'imqIr':function(_0x42394c,_0x3e27c2){return _0x42394c===_0x3e27c2;},'rGeHp':_0xefda('‫138','nc&8')};try{let _0x43137e=_0xefda('‫139','NN]*')+userCGkey+_0xefda('‮13a','IC9V')+uuid;let _0x5396a6='';let _0x2de5a1=populateUrlObject(_0x43137e,_0x5396a6);await httpRequest(_0x4b274d[_0xefda('‫13b','rSI9')],_0x2de5a1);let _0x44dd56=httpResult;if(_0x4b274d[_0xefda('‮13c','s9%m')](_0x44dd56[_0xefda('‮13d','Gn!u')],0xc8)){this[_0xefda('‫13e','we7N')]=_0x44dd56[_0xefda('‫13f','nc&8')][_0xefda('‮140','srs1')];this[_0xefda('‫141','5U1h')]=_0x4b274d[_0xefda('‮142','NN]*')](timestampToTime,this[_0xefda('‮143','msH(')]);$[_0xefda('‮c8','hXnD')](_0xefda('‫144','PzUW')+this[_0xefda('‮145','rW%i')]);this['valid']=!![];this[_0xefda('‫146','Gn!u')]=!![];}if(_0x44dd56[_0xefda('‮147','EyAr')]==0x95||_0x44dd56[_0xefda('‮148','pisD')]==0x94||_0x4b274d[_0xefda('‫149','OSBS')](_0x44dd56[_0xefda('‮14a','$]K*')],0x70)){$[_0xefda('‫14b','rSI9')]('❌'+_0x44dd56['msg']+'\x20请检查卡密或在TG机器人\x20@CGKEYBot\x20处获取卡密');}if(_0x4b274d[_0xefda('‮14c','m1W#')](_0x44dd56[_0xefda('‫14d','(]^J')],0x192)){$[_0xefda('‫14e','Z(!A')]('❌'+_0x44dd56['msg']+'\x20请勿多处使用or重装环境造成请联系作者解除');}}catch(_0x574157){}finally{if(_0x4b274d[_0xefda('‮14f','G!jU')](_0xefda('‫150','(]^J'),_0x4b274d[_0xefda('‮151','lr&c')])){if(userCookies)userList[_0xefda('‮65','PzUW')](new UserInfo(userCookies));}else{return Promise[_0xefda('‮152','lr&c')](0x1);}}}}!(async()=>{var _0xd74ac5={'LxQcF':_0xefda('‮153','5z!0'),'KNKGr':function(_0x1394af,_0x15792a){return _0x1394af!==_0x15792a;},'agEdR':'undefined','UOqUW':function(_0x4dd10f){return _0x4dd10f();},'mYOlY':function(_0x4cfb7a,_0x393950){return _0x4cfb7a>_0x393950;},'SbJLy':'ziyYz','JGAet':function(_0x843521,_0x1a8989){return _0x843521>_0x1a8989;},'PTZvw':_0xefda('‫154','I&7*'),'wkOky':_0xefda('‮155','Gn!u')};if(_0xd74ac5[_0xefda('‫156','we7N')](typeof $request,_0xd74ac5['agEdR'])){}else{if(!(await _0xd74ac5[_0xefda('‮157','5U1h')](checkEnv)))return;let _0x2c9071=[];let _0x4c906e=userList[_0xefda('‫158','rW%i')](_0x46aee0=>_0x46aee0[_0xefda('‫159','F0$C')]);$['logAndNotify']('\x0a通知区：\x0a⚠️念念不忘\x20必有回响\x0a');_0x2c9071=[];for(let _0x26f441 of _0x4c906e){_0x2c9071[_0xefda('‫15a','EyAr')](_0x26f441['km']());}await Promise['all'](_0x2c9071);_0x4c906e=_0x4c906e['filter'](_0xa0bb77=>_0xa0bb77[_0xefda('‫15b','8jYD')]);if(_0xd74ac5[_0xefda('‮15c',']Ng#')](_0x4c906e['length'],0x0)){$[_0xefda('‮15d','IC9V')]('\x0a--------------\x20变量检测\x20--------------');_0x2c9071=[];for(let _0x1ea707 of _0x4c906e[_0xefda('‫15e','f!(F')](_0x4722e1=>_0x4722e1['canRead'])){if(_0xd74ac5[_0xefda('‮15f','UDbb')]!=='HimSh'){_0x2c9071[_0xefda('‫160','s9%m')](_0x1ea707[_0xefda('‫161','pisD')]());}else{console[_0xefda('‫162','(]^J')](_0xd74ac5[_0xefda('‮163','JxY^')]);return;}}await Promise[_0xefda('‫164','fJxs')](_0x2c9071);if(_0xd74ac5[_0xefda('‫165','Z(!A')](_0x4c906e[_0xefda('‫166','Gn!u')],0x0)){$[_0xefda('‮167','A@do')](_0xefda('‫168','6Lca'));_0x2c9071=[];for(let _0x189355 of _0x4c906e['filter'](_0x3786e8=>_0x3786e8[_0xefda('‮169','I&7*')])){_0x2c9071[_0xefda('‮16a','Z(!A')](_0x189355['isSignToday']());await $[_0xefda('‫d0','EapY')](0xbb8);_0x2c9071['push'](_0x189355[_0xefda('‮16b','F0$C')]());await $[_0xefda('‮b6','NN]*')](0xbb8);_0x2c9071[_0xefda('‮16a','Z(!A')](_0x189355[_0xefda('‮16c','llTs')]());}await Promise[_0xefda('‫16d','DQL*')](_0x2c9071);$['logAndNotify'](_0xd74ac5[_0xefda('‮16e','(]^J')]);_0x2c9071=[];for(let _0x43b6b1 of _0x4c906e['filter'](_0x661703=>_0x661703['canRead'])){if(_0xd74ac5[_0xefda('‮16f','p^n3')]===_0xd74ac5['wkOky']){_0x2c9071[_0xefda('‮170','G!jU')](_0x43b6b1[_0xefda('‫171','hXnD')]());}else{return Promise[_0xefda('‮f7','srs1')](0x1);}}await Promise[_0xefda('‮172','PzUW')](_0x2c9071);}}await $[_0xefda('‮173','q[e2')]();}})()[_0xefda('‫174','Z(!A')](_0x1bcb35=>console['log'](_0x1bcb35))['finally'](()=>$[_0xefda('‫175','aQcU')]());async function checkEnv(){var _0x4b0ae2={'FCXzu':_0xefda('‮176','(]^J'),'kIFlZ':_0xefda('‫177','mF&R'),'rIXrj':_0xefda('‮178','mUK)'),'WOYFg':_0xefda('‮179','(]^J'),'TwzNA':function(_0x2572a5,_0xdfe25d){return _0x2572a5>_0xdfe25d;},'bbIHT':'未找到CK\x20请阅读脚本说明'};if(userCookie){let _0x229b42=envSplitor[0x0];for(let _0x3b428c of envSplitor){if(_0x4b0ae2[_0xefda('‫17a','mF&R')]===_0x4b0ae2[_0xefda('‮17b','p^n3')]){if(_0x4b0ae2['TwzNA'](userCookie[_0xefda('‫17c','we7N')](_0x3b428c),-0x1)){_0x229b42=_0x3b428c;break;}}else{let _0x492d3f=url['replace']('//','/')['split']('/')[0x1];let _0x284e8e={'url':url,'headers':{'Host':_0x492d3f,'x-tphmall-token':ck,'Content-Length':ct,'Connection':_0xefda('‫17d','q[e2'),'content-type':_0x4b0ae2[_0xefda('‫17e','Z(!A')]},'timeout':0x1388};if(body){_0x284e8e[_0xefda('‫17f','f!(F')]=body;_0x284e8e[_0xefda('‫180','IC9V')][_0x4b0ae2[_0xefda('‫181','ZWbN')]]=_0xefda('‮182','A3l!');_0x284e8e[_0xefda('‫183','q[e2')][_0x4b0ae2['rIXrj']]=_0x284e8e['body']?_0x284e8e[_0xefda('‫184','5z!0')][_0xefda('‮185','DQL*')]:0x0;}return _0x284e8e;}}for(let _0x51b4ca of userCookie['split'](_0x229b42)){if(_0x51b4ca)userList['push'](new UserInfo(_0x51b4ca));}userCount=userList[_0xefda('‮186','PzUW')];}else{console[_0xefda('‫187','G!jU')](_0x4b0ae2[_0xefda('‮188','ZWbN')]);return;}console['log'](_0xefda('‮189','8jYD')+userCount+'个账号');return!![];}function populateUrlObject(_0x1d0f6f,_0x1df809,_0x1accac,_0x408af8=''){var _0x24a2cc={'lSzhz':_0xefda('‫18a','$]K*'),'MkkdP':_0xefda('‫18b','F0$C'),'oeUKp':function(_0x278169,_0x468081){return _0x278169!==_0x468081;},'vwLDd':_0xefda('‫18c','JxY^'),'jEuyB':_0xefda('‫18d','vx51'),'uRiFp':_0xefda('‮18e','m1W#')};let _0x15793d=_0x1d0f6f['replace']('//','/')['split']('/')[0x1];let _0x5917f2={'url':_0x1d0f6f,'headers':{'Host':_0x15793d,'x-tphmall-token':_0x1df809,'Content-Length':_0x1accac,'Connection':_0x24a2cc[_0xefda('‫18f','#OID')],'content-type':_0x24a2cc['MkkdP']},'timeout':0x1388};if(_0x408af8){if(_0x24a2cc['oeUKp'](_0x24a2cc['vwLDd'],_0x24a2cc[_0xefda('‮190','DQL*')])){console[_0xefda('‮191','p^n3')](e);}else{_0x5917f2['body']=_0x408af8;_0x5917f2['headers'][_0x24a2cc['jEuyB']]=_0x24a2cc['MkkdP'];_0x5917f2[_0xefda('‮a1','(]^J')][_0x24a2cc[_0xefda('‮192','lr&c')]]=_0x5917f2['body']?_0x5917f2[_0xefda('‫193','srs1')]['length']:0x0;}}return _0x5917f2;}function populateUrlObject1(_0x34a673,_0x391474=''){var _0x8a86e4={'IJhSb':'Basic\x20YWRtaW46MTc0NDQzNzMzMw==','pYXut':function(_0x5ac515,_0x4cba85){return _0x5ac515!==_0x4cba85;},'moAul':'vsBgR','GyDuG':_0xefda('‫194','EyAr'),'rSXRT':_0xefda('‮195','5U1h'),'MaIWm':_0xefda('‫196','hXnD')};let _0x35f501=_0x34a673[_0xefda('‫197','8jYD')]('//','/')['split']('/')[0x1];let _0x1e9eba={'url':_0x34a673,'headers':{'Host':_0x35f501,'authorization':_0x8a86e4['IJhSb'],'User-Agent':defaultUA,'content-type':_0xefda('‫198','w2%$')},'timeout':0x1388};if(_0x391474){if(_0x8a86e4[_0xefda('‮199','#OID')](_0x8a86e4[_0xefda('‫19a','fJxs')],_0xefda('‫19b','we7N'))){this[_0xefda('‫19c','mF&R')]=![];$[_0xefda('‮19d','JxY^')](_0xefda('‮d7','msH(')+this[_0xefda('‮19e','#OID')]+']CK格式错误');}else{_0x1e9eba[_0xefda('‮19f','sa3U')]=_0x391474;_0x1e9eba[_0xefda('‮1a0','Z(!A')][_0x8a86e4[_0xefda('‫1a1','UDbb')]]=_0x8a86e4[_0xefda('‮1a2','I&7*')];_0x1e9eba['headers'][_0x8a86e4[_0xefda('‫1a3','fJxs')]]=_0x1e9eba[_0xefda('‮1a4','mUK)')]?_0x1e9eba[_0xefda('‮19f','sa3U')][_0xefda('‫1a5','p^n3')]:0x0;}}return _0x1e9eba;};_0xod8='jsjiami.com.v6';
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