allRoutes.push({
    notice: { text: "泉岳寺からほとんどの列車は浅草線、京成線に直通します。泉岳寺から種別が変わります。逝っとけダイヤ発動に注意。" },
    info: { name: "京急本線", color: "#38b2eb", code: "KK" },
    types: [
        { id: "air", name: "エア快", color: "#f77621" },
        { id: "kaitoku", name: "快特", color: "#0ea80e" },
        { id: "ltdexp", name: "特急", color: "#d81e1e" },
        { id: "exp", name: "急行", color: "#0e3cd1" },
    ],
    stations: [
        {
            name: "泉岳寺",
            en: "Sengakuji",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: "stop" },
            transfer: ["都営浅草線"],
        },
        {
            name: "品川",
            en: "Shinagawa(KK1)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "stop", air: "stop" },
            transfer: ["JR在来線各線", "JR東海道新幹線"],
        },
        {
            name: "北品川",
            en: "Kita-Shinagawa(KK2)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: "pass" }
        },
        {
            name: "新馬場",
            en: "Shin-Banba(KK3)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: "pass" }
        },
        {
            name: "青物横丁",
            en: "Aomono-yokochō(KK4)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "pass", air: "pass" }
        },
        {
            name: "鮫洲",
            en: "Samezu(KK5)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: "pass" }
        },
        {
            name: "立会川",
            en: "Tachiaigawa(KK6)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: "pass" }
        },
        {
            name: "大森海岸",
            en: "Ōmori-kaigan(KK7)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: "pass" }
        },
        {
            name: "平和島",
            en: "Heiwajima(KK8)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "pass", air: "pass" }
        },
        {
            name: "大森町",
            en: "Ōmori-machi(KK9)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: "pass" }
        },
        {
            name: "梅屋敷",
            en: "Umeyashiki(KK10)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: "pass" }
        },
        {
            name: "京急蒲田",
            en: "Keikyū Kamata(KK11)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: "pass" },
            transfer: ["空港線"],
            flags: {
                air: { noEnd: true }
            }
        },
        {
            name: "雑色",
            en: "Zōshiki(KK18)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "六郷土手",
            en: "Rokugodote(KK19)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "京急川崎",
            en: "Keikyū Kawasaki(KK20)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: null },
            transfer: ["大師線", "JR東海道線", "JR南武線"],
        },
        {
            name: "八丁畷",
            en: "Hatchōnawate(KK27)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "鶴見市場",
            en: "Tsurumi-ichiba(KK28)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "京急鶴見",
            en: "Keikyū Tsurumi(KK29)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null },
            transfer: ["JR京浜東北線", "JR鶴見線"],
        },
        {
            name: "花月総持寺",
            en: "Kagetsu-sōjiji(KK30)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "生麦",
            en: "Namamugi(KK31)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "京急新子安",
            en: "Keikyū Shin-Koyasu(KK32)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null },
            transfer: ["JR京浜東北線"],
        },
        {
            name: "子安",
            en: "Koyasu(KK33)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "神奈川新町",
            en: "Kanagawa-Shinmachi(KK34)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "pass", air: null }
        },
        {
            name: "京急東神奈川",
            en: "Keikyū Higashi-Kanagawa(KK35)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null },
            transfer: ["JR京浜東北線", "JR横浜線"],
        },
        {
            name: "神奈川",
            en: "Kanagawa(KK36)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "横浜",
            en: "Yokohama(KK37)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: null },
            transfer: ["JR各線", "東急各線", "相鉄本線"],
        },
        {
            name: "戸部",
            en: "Tobe(KK38)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "日ノ出町",
            en: "Hinodechō(KK39)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "黄金町",
            en: "Koganechō(KK40)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "南太田",
            en: "Minami-Ōta(KK41)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "井土ヶ谷",
            en: "Idogaya(KK42)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "弘明寺",
            en: "Gumyōji(KK43)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "上大岡",
            en: "Kami-Ōoka(KK44)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: null }
        },
        {
            name: "屏風浦",
            en: "Byōbugaura(KK45)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "杉田",
            en: "Sugita(KK46)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null },
            transfer: ["JR根岸線", "シーサイドライン"],
        },
        {
            name: "京急富岡",
            en: "Keikyū Tomioka(KK47)",
            lines: { exp: "pass", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "能見台",
            en: "Nōkendai(KK48)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "金沢文庫",
            en: "Kanazawa-Bunko(KK49)",
            lines: { exp: "stop", ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "金沢八景",
            en: "Kanazawa-Hakkei(KK50)",
            lines: { exp: "stop", ltdexp: "stop", kaitoku: "stop", air: null },
            transfer: ["逗子線", "シーサイドライン"],
            flags: {
                exp: { noEnd: true }
            }
        },
        {
            name: "追浜",
            en: "Oppama(KK54)",
            lines: { exp: null, ltdexp: "stop", kaitoku: "pass", air: null }
        },
        {
            name: "京急田浦",
            en: "Keikyū Taura(KK55)",
            lines: { exp: null, ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "安針塚",
            en: "Anjinzuka(KK56)",
            lines: { exp: null, ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "逸見",
            en: "Hemi(KK57)",
            lines: { exp: null, ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "汐入",
            en: "Shioiri(KK58)",
            lines: { exp: null, ltdexp: "stop", kaitoku: "pass", air: null }
        },
        {
            name: "横須賀中央",
            en: "Yokosuka-Chūō(KK59)",
            lines: { exp: null, ltdexp: "stop", kaitoku: "stop", air: null }
        },
        {
            name: "県立大学",
            en: "Kenritsudaigaku(KK60)",
            lines: { exp: null, ltdexp: "pass", kaitoku: "pass", air: null }
        },
        {
            name: "堀ノ内",
            en: "Horinouchi(KK61)",
            lines: { exp: null, ltdexp: "stop", kaitoku: "stop", air: null },
            transfer: ["久里浜線"],
            flags: {
                kaitoku: { noEnd: true },
            }
        },
        {
            name: "京急大津",
            en: "Keikyū Ōtsu(KK62)",
            lines: { exp: null, ltdexp: "stop", kaitoku: null, air: null }
        },
        {
            name: "馬堀海岸",
            en: "Mabori-kaigan(KK63)",
            lines: { exp: null, ltdexp: "stop", kaitoku: null, air: null }
        },
        {
            name: "浦賀",
            en: "Uraga(KK64)",
            lines: { exp: null, ltdexp: "stop", kaitoku: null, air: null }
        }
    ]
})