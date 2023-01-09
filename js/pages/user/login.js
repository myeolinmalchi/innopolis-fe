const [idInput, pwInput, loginButton] = [
    document.getElementById('mb-id'),
    document.getElementById('mb-pw'),
    document.getElementById('login-button'),
];

const login = async (id, pw) => {
    const res = await fetch(
        `https://katech1234.cafe24.com/bbs/test_login_check.php`,
        {
            method: 'POST',
            body: JSON.stringify({
                mb_id: id ?? '',
                mb_pw: pw ?? '',
                url: 'katech1234.cafe24.com',
            }),
        },
    );

    if (res.status === 200) {
        const { stat, code, txt } = await res.json();

        if (stat === 'ok' && code === '1') {
            // 로그인 성공
            alert(txt);
            location.href = '/';
        } else {
            // 로그인 실패
            alert(txt);
        }
    }
};

const keydownHandler = () => {
    if (idInput.getValue() !== '' && pwInput.getValue() !== '') {
        loginButton.setAttribute('state', 'default');
    } else {
        loginButton.setAttribute('state', 'disabled');
    }
};

idInput.input.addEventListener('keyup', keydownHandler);
pwInput.input.addEventListener('keyup', keydownHandler);
