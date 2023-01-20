document.body.addEventListener(
    'keydown',
    function (e) {
        e = e || window.event;
        let key = e.which || e.keyCode; // keyCode detection
        let ctrl = e.ctrlKey ? e.ctrlKey : key === 17 ? true : false; // ctrl detection
        if (key == 67 && ctrl) {
            alert(
                '본 데이터는 연구목적으로만 활용이 가능하며, 무단 전재 및 재배포를 금지합니다. 저작권에 위배되는 행위 시 사전 경고 없이 형사 고발 조치됨을 알려드립니다.',
            );
        }
    },
    false,
);
