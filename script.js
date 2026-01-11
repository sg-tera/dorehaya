// =========================================
// 描画ロジック（複数路線対応版）
// =========================================

(function () {
    // データの存在チェック
    if (!window.allRoutes || window.allRoutes.length === 0) {
        console.error("データが見つかりません。");
        return;
    }

    const allRoutes = window.allRoutes;

    const app = document.getElementById('route-map-app');
    let fullHtml = ''; // 全路線のHTMLをここに貯める

    // ▼▼▼ 路線ごとのループ処理開始 ▼▼▼
    allRoutes.forEach((route) => {

        // 変数を短く使えるように取り出す
        const routeInfo = route.info;
        const lineTypes = route.types;
        const stations = route.stations;

        // 1つの路線のHTML生成
        let html = `
        ${route.notice && route.notice.text ? `<div class="notice-container">${route.notice.text}</div>` : ''}
          <div class="app-container">
            <div class="line-header-tab" style="background-color: ${routeInfo.color};">
            ${routeInfo.code != null ? `<span class="line-code-badge">${routeInfo.code}</span>` : ''}
            <span class="line-name-text">${routeInfo.name}</span>
            </div>

            <div class="layout-wrapper">
              <div class="legend-col">
                <div class="header-spacer"></div>
                <div class="legend-tracks">
                  ${lineTypes.map(type =>
            `<div class="label-box" style="background-color: ${type.color};">${type.name}</div>`
        ).join('')}
                </div>
              </div>
        
              <div class="scroll-area">
                <ul class="route-list">
        `;

        // 駅ごとの処理
        stations.forEach((station, index) => {
            const hasTransfer = station.transfer && station.transfer.length > 0;
            html += `<li class="station ${hasTransfer ? 'has-transfer' : ''}">`;

            // 駅名
            html += `
                <div class="station-name">
                    ${station.name}<span class="en">${station.en}</span>
                </div>
            `;

            // 線路
            html += `<div class="tracks">`;
            lineTypes.forEach(type => {
                const status = station.lines[type.id];
                const color = type.color;

                let classes = ['line'];
                let style = `color: ${color};`;

                if (status === null || status === undefined) {
                    classes.push('empty');
                } else {
                    style += ` background-color: ${color};`;
                    if (status === 'stop') classes.push('stop');
                    else if (status === 'partial1') classes.push('partial1');

                    // 始発・終点判定
                    const prevStation = stations[index - 1];
                    const nextStation = stations[index + 1];
                    let isStart = !prevStation || !prevStation.lines[type.id];
                    let isEnd = !nextStation || !nextStation.lines[type.id];

                    // 駅ごとのフラグで上書き可能
                    if (station.flags && station.flags[type.id]) {
                        if (station.flags[type.id].noStart) {
                            isStart = false;
                        }
                        if (station.flags[type.id].noEnd) {
                            isEnd = false;
                        }
                    }

                    if (isStart) classes.push('start');
                    if (isEnd) classes.push('end');
                }
                html += `<div class="${classes.join(' ')}" style="${style}"></div>`;
            });
            html += `</div>`; // .tracks

            // 乗り換え
            html += `<div class="transfer">${hasTransfer ? station.transfer.join('<br>') : ''}</div>`;
            html += `</li>`;
        });

        html += `
                </ul>
              </div>
            </div>
          </div>
        `;

        // 生成した路線のHTMLを全体に追加
        fullHtml += html;
    });
    // ▲▲▲ ループ終了 ▲▲▲

    // 最後に描画
    app.innerHTML = fullHtml;
})();