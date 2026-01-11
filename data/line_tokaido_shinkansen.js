allRoutes.push({
    notification: { text: "「のぞみ」「みずほ」号指定席を利用の際は「のぞみ・みずほ号指定席特急料金」が加算されます。" },
    info: { name: "東海道新幹線", color: "#0011ff" },
    types: [
        { id: 'nozomi', name: 'のぞみ', color: '#e7d000' },
        { id: 'hikari', name: 'ひかり', color: '#bd0808' },
        { id: 'kodama', name: 'こだま', color: '#1336ff' },
    ],
    stations: [
        {
            name: "東京",
            en: "Tokyo",
            lines: { nozomi: "stop", hikari: "stop", kodama: "stop" },
            transfer: ["新幹線", "東京メトロ線"],
        },
        {
            name: "品川",
            en: "Shinagawa",
            lines: { nozomi: "stop", hikari: "stop", kodama: "stop" },
            transfer: ["京急線"],
        },
        {
            name: "新横浜",
            en: "Shin-Yokohama",
            lines: { nozomi: "stop", hikari: "stop", kodama: "stop" },
            transfer: ["相鉄・東急新横浜線", "市営地下鉄ﾌﾞﾙｰﾗｲﾝ"],
        },
        {
            name: "小田原",
            en: "Odawara",
            lines: { nozomi: "pass", hikari: "partial1", kodama: "stop" },
            transfer: ["小田急線", "伊豆箱根鉄道大雄山線"],
        },
        {
            name: "熱海",
            en: "Atami",
            lines: { nozomi: "pass", hikari: "partial1", kodama: "stop" },
            transfer: ["JR線"],
        },
        {
            name: "三島",
            en: "Mishima",
            lines: { nozomi: "pass", hikari: "partial1", kodama: "stop" },
            transfer: ["伊豆箱根鉄道駿豆線"],
        },
        {
            name: "新富士",
            en: "Shin-Fuji",
            lines: { nozomi: "pass", hikari: "pass", kodama: "stop" },
        },
        {
            name: "静岡",
            en: "Shizuoka",
            lines: { nozomi: "pass", hikari: "partial1", kodama: "stop" },
            transfer: ["静岡鉄道線"],
        },
        {
            name: "掛川",
            en: "Kakegawa",
            lines: { nozomi: "pass", hikari: "pass", kodama: "stop" },
            transfer: ["天竜浜名湖鉄道線"],
        },
        {
            name: "浜松",
            en: "Hamamatsu",
            lines: { nozomi: "pass", hikari: "stop", kodama: "stop" },
            transfer: ["遠州鉄道線"],
        },
        {
            name: "豊橋",
            en: "Toyohashi",
            lines: { nozomi: "pass", hikari: "partial1", kodama: "stop" },
            transfer: ["JR線", "名鉄名古屋本線", "豊橋鉄道線"],
        },
        {
            name: "三河安城",
            en: "Mikawa-Anjō",
            lines: { nozomi: "pass", hikari: "pass", kodama: "stop" },
        },
        {
            name: "名古屋",
            en: "Nagoya",
            lines: { nozomi: "stop", hikari: "stop", kodama: "stop" },
            transfer: ["JR線", "近鉄線", "名古屋市営地下鉄線 他"],
        },
        {
            name: "岐阜羽島",
            en: "Gifu-Hashima",
            lines: { nozomi: "pass", hikari: "partial1", kodama: "stop" },
            transfer: ["名鉄羽島線"],
        },
        {
            name: "米原",
            en: "Maibara",
            lines: { nozomi: "pass", hikari: "partial1", kodama: "stop" },
            transfer: ["JR線", "近江鉄道線"],
        },
        {
            name: "京都",
            en: "Kyōtō",
            lines: { nozomi: "stop", hikari: "stop", kodama: "stop" },
            transfer: ["JR線", "近鉄京都線", "市営地下鉄烏丸線"],
        },
        {
            name: "新大阪",
            en: "Shin-Ōsaka",
            lines: { nozomi: "stop", hikari: "stop", kodama: "stop" },
            transfer: ["JR線", "大阪メトロ御堂筋線"],
        },
    ]
})