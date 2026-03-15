# どれはや

このウェブサイトは日本の鉄道路線の種別による停車パターンの情報を提供します。

データ形式 *コピペして使用してください。既存の路線の記述も併せて参考にしてください。  

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

- notice: 任意  
- info: 必須  
- types: 必須 (いくつでも)  
- stations:  
  - name: 必須  
  - en: 必須  
  - lines: 必須 (乗り入れていない => null, 停車 => "stop", 通過 => "pass", 一部停車 => "partial1")  
  - transfer: 任意  
  - flags: 直通・連続した路線を示す場合は使用してください。種別ごとに設定します。  
noStart => 路線の始発駅処理をしません  
noEnd => 路線の終着駅処理をしません  
ex) 半蔵門線と田園都市線は別々の路線として記述したいが、渋谷駅で直通していることを示したいとき。  
他にも、別路線に分岐するときなどにも使えます。(京急本線=>京急空港線)
