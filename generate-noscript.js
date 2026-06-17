const fs = require("fs");
const path = require("path");
const vm = require("vm");

const allRoutes = [];
const dataDir = path.join(__dirname, "data");

// dataフォルダの全JSを読み込んでallRoutesに積む
fs.readdirSync(dataDir).filter(f => f.endsWith(".js")).forEach(file => {
    const code = fs.readFileSync(path.join(dataDir, file), "utf-8");
    const sandbox = { allRoutes };
    vm.runInNewContext(code, sandbox);
});

// noscript用HTMLを生成
const html = allRoutes.map(route => {
    const stationNames = route.stations.map(s => s.name).join("・");
    const typeNames = route.types.map(t => t.name).join("・");
    return `<section>
<h2>${route.info.name}</h2>
<p>種別：${typeNames}</p>
<p>停車駅：${stationNames}</p>
</section>`;
}).join("\n");

// index.htmlの<noscript>を差し替え
let index = fs.readFileSync("index.html", "utf-8");
index = index.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript>\n${html}\n</noscript>`
);
fs.writeFileSync("index.html", index);
console.log(`${allRoutes.length}路線のnoscriptを生成しました`);