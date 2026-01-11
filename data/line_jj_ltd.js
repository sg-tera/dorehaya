allRoutes.push({
    info: { name: "常磐特急", color: "#16b07f", code: "JJ" },
    types: [
        { id: 'Hitachi', name: 'ひたち', color: '#ff67bf' },
        { id: 'Tokiwa', name: 'ときわ', color: '#00a65e' },
    ],
    stations: [
        {
            name: "仙台",
            en: "Sendai",
            lines: { Hitachi: "stop", Tokiwa: null },
            transfer: ["新幹線", "JR線", "市営地下鉄線"],
        },
        {
            name: "岩沼",
            en: "Iwanuma",
            lines: { Hitachi: "partial1", Tokiwa: null },
        },
        {
            name: "亘理",
            en: "Watari",
            lines: { Hitachi: "partial1", Tokiwa: null },
        },
        {
            name: "相馬",
            en: "Sōma",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "原ノ町",
            en: "Haranomachi",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "浪江",
            en: "Namie",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "双葉",
            en: "Futaba",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "大野",
            en: "Ōno",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "富岡",
            en: "Tomioka",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "広野",
            en: "Hirono",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "いわき",
            en: "Iwaki",
            lines: { Hitachi: "stop", Tokiwa: null },
            transfer: ["磐越東線"],
        },
        {
            name: "湯本",
            en: "Yumoto",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "泉",
            en: "Izumi",
            lines: { Hitachi: "stop", Tokiwa: null },
        },
        {
            name: "勿来",
            en: "Nakoso",
            lines: { Hitachi: "partial1", Tokiwa: null },
        },
        {
            name: "磯原",
            en: "Isohara",
            lines: { Hitachi: "partial1", Tokiwa: null },
        },
        {
            name: "高萩",
            en: "Takahagi",
            lines: { Hitachi: "partial1", Tokiwa: "stop" },
        },
        {
            name: "日立",
            en: "Hitachi",
            lines: { Hitachi: "stop", Tokiwa: "stop" },
        },
        {
            name: "常陸多賀",
            en: "Hitachi-Taga",
            lines: { Hitachi: "partial1", Tokiwa: "stop" },
        },
        {
            name: "大甕",
            en: "Ōmika",
            lines: { Hitachi: "partial1", Tokiwa: "stop" },
        },
        {
            name: "東海",
            en: "Tōkai",
            lines: { Hitachi: "partial1", Tokiwa: "partial1" },
        },
        {
            name: "勝田",
            en: "Katsuta",
            lines: { Hitachi: "stop", Tokiwa: "stop" },
            transfer: ["ひたちなか海浜鉄道線", "★茨城高専★"],
        },
        {
            name: "水戸",
            en: "Mito",
            lines: { Hitachi: "stop", Tokiwa: "stop" },
            transfer: ["水郡線", "鹿島臨海鉄道線"],
        },
        {
            name: "偕楽園（臨）",
            en: "Kairakuen (extra)",
            lines: { Hitachi: "partial1", Tokiwa: "partial1" },
            transfer: ["季節限定臨時", "下り専用駅"],
        },
        {
            name: "赤塚",
            en: "Akatsuka",
            lines: { Hitachi: "pass", Tokiwa: "stop" },
        },
        {
            name: "友部",
            en: "Tomobe",
            lines: { Hitachi: "pass", Tokiwa: "stop" },
            transfer: ["水戸線"],
        },
        {
            name: "石岡",
            en: "Ishioka",
            lines: { Hitachi: "pass", Tokiwa: "stop" },
        },
        {
            name: "土浦",
            en: "Tsuchiura",
            lines: { Hitachi: "partial1", Tokiwa: "stop" },
        },
        {
            name: "荒川沖",
            en: "Arakawaoki",
            lines: { Hitachi: "pass", Tokiwa: "partial1" },
        },
        {
            name: "ひたち野うしく",
            en: "Hitachinoushiku",
            lines: { Hitachi: "pass", Tokiwa: "partial1" },
        },
        {
            name: "牛久",
            en: "Ushiku",
            lines: { Hitachi: "pass", Tokiwa: "partial1" },
        },
        {
            name: "龍ケ崎市",
            en: "Ryūgasakishi",
            lines: { Hitachi: "pass", Tokiwa: "partial1" },
        },
        {
            name: "柏",
            en: "Kashiwa",
            lines: { Hitachi: "partial1", Tokiwa: "stop" },
            transfer: ["常磐緩行線", "東武ｱｰﾊﾞﾝﾊﾟｰｸﾗｲﾝ"],
        },
        {
            name: "日暮里",
            en: "Nippori",
            lines: { Hitachi: "pass", Tokiwa: "partial1" },
            transfer: ["JR線", "京成線", "日暮里・舎人ﾗｲﾅｰ"],
        },
        {
            name: "上野",
            en: "Ueno",
            lines: { Hitachi: "stop", Tokiwa: "stop" },
            transfer: ["東北新幹線", "東海道本線系統", "東京メトロ線"],
        },
        {
            name: "東京",
            en: "Tōkyō",
            lines: { Hitachi: "stop", Tokiwa: "stop" },
            transfer: ["中央線", "京葉線", "東京メトロ線"],
        },
        {
            name: "品川",
            en: "Shinagawa",
            lines: { Hitachi: "stop", Tokiwa: "stop" },
            transfer: ["東海道新幹線", "横須賀・総武快速線", "京急線"],
        },
    ]
});