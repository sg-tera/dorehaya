allRoutes.push({
    info: { name: "山陽新幹線", color: "#0011ff" },
    types: [
        { id: 'mizuho', name: 'みずほ', color: "#ff891a" },
        { id: 'nozomi', name: 'のぞみ', color: '#e7d000' },
        { id: 'sakura', name: 'さくら', color: "#ff6dc7" },
        { id: 'hikari', name: 'ひかり', color: '#bd0808' },
        { id: 'kodama', name: 'こだま', color: '#1336ff' },
        { id: 'tsubame', name: 'つばめ', color: '#23dddd' }
    ],
    stations: [
        {
            name: "新大阪",
            en: "Shin-Ōsaka",
            lines: { mizuho: "stop", nozomi: "stop", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: null },
            transfer: ["JR線", "大阪メトロ御堂筋線"],
            flags: {
                nozomi: { noStart: true },
                hikari: { noStart: true },
                kodama: { noStart: true },
            },
        },
        {
            name: "新神戸",
            en: "Shin-Kōbe",
            lines: { mizuho: "stop", nozomi: "stop", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: null },
            transfer: ["神戸市営地下鉄線"],
        },
        {
            name: "西明石",
            en: "Nishi-Akashi",
            lines: { mizuho: "pass", nozomi: "partial1", sakura: "partial1", hikari: "partial1", kodama: "stop", tsubame: null },
        },
        {
            name: "姫路",
            en: "Himeji",
            lines: { mizuho: "partial1", nozomi: "partial1", sakura: "partial1", hikari: "stop", kodama: "stop", tsubame: null },
            transfer: ["JR線", "山陽電鉄線"],
        },
        {
            name: "相生",
            en: "Aioi",
            lines: { mizuho: "pass", nozomi: "pass", sakura: "pass", hikari: "partial1", kodama: "stop", tsubame: null },
            transfer: ["赤穂線"],
        },
        {
            name: "岡山",
            en: "Okayama",
            lines: { mizuho: "stop", nozomi: "stop", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: null },
            transfer: ["JR線", "岡山電気軌道線"],
        },
        {
            name: "新倉敷",
            en: "Shin-Kurashiki",
            lines: { mizuho: "partial1", nozomi: "partial1", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: null },
        },
        {
            name: "福山",
            en: "Fukuyama",
            lines: { mizuho: "partial1", nozomi: "partial1", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: null },
            transfer: ["福塩線"],
        },
        {
            name: "新尾道",
            en: "Shin-Onomichi",
            lines: { mizuho: "pass", nozomi: "pass", sakura: "pass", hikari: "partial1", kodama: "stop", tsubame: null },
        },
        {
            name: "三原",
            en: "Mihara",
            lines: { mizuho: "pass", nozomi: "pass", sakura: "pass", hikari: "partial1", kodama: "stop", tsubame: null },
            transfer: ["呉線"],
        },
        {
            name: "東広島",
            en: "Higashi-Hiroshima",
            lines: { mizuho: "pass", nozomi: "pass", sakura: "pass", hikari: "partial1", kodama: "stop", tsubame: null },
        },
        {
            name: "広島",
            en: "Hiroshima",
            lines: { mizuho: "stop", nozomi: "stop", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: null },
            transfer: ["JR線", "広島電鉄本線"],
        },
        {
            name: "新岩国",
            en: "Shin-Iwakuni",
            lines: { mizuho: "pass", nozomi: "pass", sakura: "pass", hikari: "partial1", kodama: "stop", tsubame: null },
            transfer: ["錦川鉄道線"],
        },
        {
            name: "徳山",
            en: "Tokuyama",
            lines: { mizuho: "pass", nozomi: "partial1", sakura: "partial1", hikari: "partial1", kodama: "stop", tsubame: null },
        },
        {
            name: "新山口",
            en: "Shin-Yamaguchi",
            lines: { mizuho: "partial1", nozomi: "partial1", sakura: "partial1", hikari: "partial1", kodama: "stop", tsubame: null },
            transfer: ["山口線", "宇部線"],
        },
        {
            name: "厚狭",
            en: "Asa",
            lines: { mizuho: "pass", nozomi: "pass", sakura: "pass", hikari: "pass", kodama: "stop", tsubame: null },
        },
        {
            name: "新下関",
            en: "Shin-Shimonoseki",
            lines: { mizuho: "pass", nozomi: "pass", sakura: "partial1", hikari: "partial1", kodama: "stop", tsubame: "stop" },
        },
        {
            name: "小倉",
            en: "Kokura",
            lines: { mizuho: "stop", nozomi: "stop", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: "stop" },
            transfer: ["JR線", "北九州モノレール"],
        },
        {
            name: "博多",
            en: "Hakata",
            lines: { mizuho: "stop", nozomi: "stop", sakura: "stop", hikari: "stop", kodama: "stop", tsubame: "stop" },
            flags: {
                mizuho: { noEnd: true },
                sakura: { noEnd: true },
                tsubame: { noEnd: true },
            },
            transfer: ["JR線", "福岡市地下鉄線"],
        },
        {
            name: "博多南",
            en: "Hakataminami",
            lines: { mizuho: null, nozomi: null, sakura: null, hikari: null, kodama: "stop", tsubame: null },
            transfer: ["博多↔博多南在来線扱"],
        },
    ]
})