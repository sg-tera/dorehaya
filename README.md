# dorehaya

This website provides details on train stopping patterns at each station in Japan.

data format  

```
allRoutes.push({
    notice: { text: "テキスト" },
    info: { name: "路線名", color: "#HEX(line color)", code: "JR(option: Station nunbering)"},
    types: [
        { id: "type1", name: "種別1", color: "#HEX(type color)" },
        { id: "type2", name: "種別2", color: "#HEX(type color)" }
    ],
    stations: [
        {
            name: "駅名",
            en: "Station name",
            lines: { type1: null, type2: "stop" },
            transfer: ["新幹線", "山手線"],
        },
        {
            name: "駅名",
            en: "Station name",
            lines: { type1: "stop", type2: "pass" },
        },
        {
            name: "駅名",
            en: "Station name",
            lines: { type1: "stop", type2: "stop" },
            flags: {
                type1: { noEnd: true },
            },
        },
    ]
})
```

- notice: option  
- info: requied  
- types: requied (Any numbers of types)  
- stations:  
  - name: requied  
  - en: requied  
  - lines: requied (out of service => null, stop => "stop", pass => "pass", partial stop => "partial1")  
  - transfer: option  
  - flags: if you want to express continuous lines, you set "flags".  
  noStart => NO process indicates Starting trains.  
  noEnd => NO process indicates distination.  
  ex) The Hanzomon Line and the Den-en-toshi Line are shown separately, but you want to show that they connect directly at Shibuya Station.  
