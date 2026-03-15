allRoutes.push({
    info: { name: "京急空港線", color: "#38b2eb", code: "KK" },
    types: [
        { id: "air", name: "エア快", color: "#f77621" },
        { id: "kaitoku", name: "快特", color: "#0ea80e" },
        { id: "ltdexp", name: "特急", color: "#d81e1e" },
        { id: "exp", name: "急行", color: "#0e3cd1" }
    ],
    stations: [
        {
            name: "京急蒲田",
            en: "Keikyū-Kamata(KK11)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: "pass" },
            transfer: ["京急本線"],
            flags: {
                air: { noStart: true },
                kaitoku: { noStart: true },
                ltdexp: { noStart: true },
                exp: { noStart: true }
            }
        },
        {
            name: "糀谷",
            en: "Kōjiya(KK12)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "pass", air: "pass" }
        },
        {
            name: "大鳥居",
            en: "Ōtorii(KK13)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "pass", air: "pass" }
        },
        {
            name: "穴守稲荷",
            en: "Anamori-Inari(KK14)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "pass", air: "pass" }
        },
        {
            name: "天空橋",
            en: "Tenkūbashi(KK15)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "pass", air: "pass" },
            transfer: ["東京モノレール羽田空港線"]
        },
        {
            name: "羽田空港第3ターミナル",
            en: "Haneda Airport Terminal 3(KK16) [T3]",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: "stop" },
            transfer: ["国際線"]
        },
        {
            name: "羽田空港第1・第2ターミナル",
            en: "Haneda Airport Terminal 1・2(KK17) [T1] [T2]",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: "stop" },
            transfer: ["ANA", "JAL", "他日本籍航空会社各社"]
        }
    ]
})