class header_default extends HTMLElement{
    constructor(){ 
        super();
    }
    connectedCallback(){
        this.attachShadow({mode:'open'});        
        
        const header = document.createElement('header');
        const header_container = document.createElement('div');
        header_container.setAttribute('class','header_container');

        const main_nav = document.createElement('div');
        main_nav.setAttribute('class','main_nav');

        const header_logo = document.createElement('div');
        header_logo.setAttribute('class','header_logo');
        

        const header_logo_img = document.createElement('img');
        header_logo_img.setAttribute('src','../image/headerLogoDefault.png');

        const header_nav = document.createElement('div');
        header_nav.setAttribute('class','header_nav');

        const header_nav_ul = document.createElement('ul');
        
        const header_nav_ul_li1 = document.createElement('li');
        const header_nav_ul_li1_a = document.createElement('a');
        header_nav_ul_li1_a.innerText = "강소특구소개"
        header_nav_ul_li1_a.setAttribute('href','#'); 
        const header_nav_ul_li1_ul = document.createElement('ul');
        header_nav_ul_li1_ul.setAttribute('class','hover none');

        const header_nav_ul_li1_ul_li1 = document.createElement('li');
        const header_nav_ul_li1_ul_li1_a = document.createElement('a');
        header_nav_ul_li1_ul_li1_a.setAttribute('href','#');
        header_nav_ul_li1_ul_li1_a.innerText = "인사말";
        const header_nav_ul_li1_ul_li2 = document.createElement('li');
        const header_nav_ul_li1_ul_li2_a = document.createElement('a');
        header_nav_ul_li1_ul_li2_a.setAttribute('href','#');
        header_nav_ul_li1_ul_li2_a.innerText = "강소특구개요";
        const header_nav_ul_li1_ul_li3 = document.createElement('li');
        const header_nav_ul_li1_ul_li3_a = document.createElement('a');
        header_nav_ul_li1_ul_li3_a.setAttribute('href','#');
        header_nav_ul_li1_ul_li3_a.innerText = "오시는길";

        const header_nav_ul_li2 = document.createElement('li');
        const header_nav_ul_li2_a = document.createElement('a');
        header_nav_ul_li2_a.setAttribute('href','#'); 
        header_nav_ul_li2_a.innerText = '지원사업소개';

        const header_nav_ul_li2_ul = document.createElement('ul');
        header_nav_ul_li2_ul.setAttribute('class','hover none');
    
        const header_nav_ul_li2_ul_li1 = document.createElement('li');
        const header_nav_ul_li2_ul_li1_a = document.createElement('a');
        header_nav_ul_li2_ul_li1_a.setAttribute('href','#');
        header_nav_ul_li2_ul_li1_a.innerText = "연구기관기술";

        const header_nav_ul_li2_ul_li2 = document.createElement('li');
        const header_nav_ul_li2_ul_li2_a = document.createElement('a');
        header_nav_ul_li2_ul_li2_a.setAttribute('href','#');
        header_nav_ul_li2_ul_li2_a.innerText = "지역기술"
        
        const header_nav_ul_li3 = document.createElement('li');
        const header_nav_ul_li3_a = document.createElement('a');
        header_nav_ul_li3_a.setAttribute('href','#'); 
        header_nav_ul_li3_a.innerText = "기술정보";

        const header_nav_ul_li3_ul = document.createElement('ul');
        header_nav_ul_li3_ul.setAttribute('class','hover none');

        const header_nav_ul_li3_ul_li1 = document.createElement('li');
        const header_nav_ul_li3_ul_li1_a = document.createElement('a');
        header_nav_ul_li3_ul_li1_a.setAttribute('herf','a');
        header_nav_ul_li3_ul_li1_a.innerText = "기술검색";

        const header_nav_ul_li3_ul_li2 = document.createElement('li');
        const header_nav_ul_li3_ul_li2_a = document.createElement('a');
        header_nav_ul_li3_ul_li2_a.setAttribute('herf','a');
        header_nav_ul_li3_ul_li2_a.innerText = "우주기술";

        const header_nav_ul_li3_ul_li3 = document.createElement('li');
        const header_nav_ul_li3_ul_li3_a = document.createElement('a');
        header_nav_ul_li3_ul_li3_a.setAttribute('herf','a');
        header_nav_ul_li3_ul_li3_a.innerText = "기술영상";

        const header_nav_ul_li3_ul_li4 = document.createElement('li');
        const header_nav_ul_li3_ul_li4_a = document.createElement('a');
        header_nav_ul_li3_ul_li4_a.setAttribute('herf','a');
        header_nav_ul_li3_ul_li4_a.innerText = "기술동향";

        const header_nav_ul_li4 = document.createElement('li');
        const header_nav_ul_li4_a = document.createElement('a');
        header_nav_ul_li4_a.setAttribute('href','#'); 
        header_nav_ul_li4_a.innerText = "연구마당";

        const header_nav_ul_li4_ul = document.createElement('ul');
        header_nav_ul_li4_ul.setAttribute('class','hover none');

        const header_nav_ul_li4_ul_li1 = document.createElement('li');
        const header_nav_ul_li4_ul_li1_a = document.createElement('a');
        header_nav_ul_li4_ul_li1_a.setAttribute('href','#');
        header_nav_ul_li4_ul_li1_a.innerText = '연구분야';

        const header_nav_ul_li4_ul_li2 = document.createElement('li');
        const header_nav_ul_li4_ul_li2_a = document.createElement('a');
        header_nav_ul_li4_ul_li2_a.setAttribute('href','#');
        header_nav_ul_li4_ul_li2_a.innerText = "보유장비";
        
        const header_nav_ul_li4_ul_li3 = document.createElement('li');
        const header_nav_ul_li4_ul_li3_a = document.createElement('a');
        header_nav_ul_li4_ul_li3_a.setAttribute('href','#');
        header_nav_ul_li4_ul_li3_a.innerText = "기술자료";
        
        const header_nav_ul_li5 = document.createElement('li');
        const header_nav_ul_li5_a = document.createElement('a');
        header_nav_ul_li5_a.setAttribute('href','#'); 
        header_nav_ul_li5_a.innerText = "메타타운"

        const header_nav_ul_li5_ul = document.createElement('ul');
        header_nav_ul_li5_ul.setAttribute('class','hover none');

        const header_nav_ul_li5_ul_li1 = document.createElement('li');
        const header_nav_ul_li5_ul_li1_a = document.createElement('a');
        header_nav_ul_li5_ul_li1_a.innerText = "메타타운";
        header_nav_ul_li5_ul_li1_a.setAttribute('href','#');
        
        const header_nav_ul_li6 = document.createElement('li');
        const header_nav_ul_li6_a = document.createElement('a');
        header_nav_ul_li6_a.setAttribute('href','#'); 
        header_nav_ul_li6_a.innerText = "고객지원";

        const header_nav_ul_li6_ul = document.createElement('ul');
        header_nav_ul_li6_ul.setAttribute('class','hover none');

        const header_nav_ul_li6_ul_li1 = document.createElement('li');
        const header_nav_ul_li6_ul_li1_a = document.createElement('a');
        header_nav_ul_li6_ul_li1_a.setAttribute('href','#');
        header_nav_ul_li6_ul_li1_a.innerText = "공지사항";

        const header_nav_ul_li6_ul_li2 = document.createElement('li');
        const header_nav_ul_li6_ul_li2_a = document.createElement('a');
        header_nav_ul_li6_ul_li2_a.setAttribute('href','#');
        header_nav_ul_li6_ul_li2_a.innerText = '사업공고';

        const header_nav_ul_li6_ul_li3 = document.createElement('li');
        const header_nav_ul_li6_ul_li3_a = document.createElement('a');
        header_nav_ul_li6_ul_li3_a.setAttribute('href','#');
        header_nav_ul_li6_ul_li3_a.innerText = "특구일정";
        
        const header_nav_ul_li6_ul_li4 = document.createElement('li');
        const header_nav_ul_li6_ul_li4_a = document.createElement('a');
        header_nav_ul_li6_ul_li4_a.setAttribute('href','#');
        header_nav_ul_li6_ul_li4_a.innerText = "회의실 예약";

        const header_nav_ul_li7 = document.createElement('li');
        const header_nav_ul_li7_a = document.createElement('a');
        header_nav_ul_li7_a.setAttribute('href','#'); 
        header_nav_ul_li7_a.innerText = "홍보센터"

        const header_nav_ul_li7_ul = document.createElement('ul');
        header_nav_ul_li7_ul.setAttribute('class','hover none');

        const header_nav_ul_li7_ul_li1 = document.createElement('li');
        const header_nav_ul_li7_ul_li1_a = document.createElement('a');
        header_nav_ul_li7_ul_li1_a.setAttribute('href','#');
        header_nav_ul_li7_ul_li1_a.innerText = "기업홍보";

        const header_nav_ul_li7_ul_li2 = document.createElement('li');
        const header_nav_ul_li7_ul_li2_a = document.createElement('a');
        header_nav_ul_li7_ul_li2_a.setAttribute('href','#');
        header_nav_ul_li7_ul_li2_a.innerText = "홍보자료";

        const header_nav_ul_li7_ul_li3 = document.createElement('li');
        const header_nav_ul_li7_ul_li3_a = document.createElement('a');
        header_nav_ul_li7_ul_li3_a.setAttribute('href','#');
        header_nav_ul_li7_ul_li3_a.innerText = "보도자료";

        const header_nav_ul_li7_ul_li4 = document.createElement('li');
        const header_nav_ul_li7_ul_li4_a = document.createElement('a');
        header_nav_ul_li7_ul_li4_a.setAttribute('href','#');
        header_nav_ul_li7_ul_li4_a.innerText = "행사사진";

        const header_nav_ul_li8 = document.createElement('li');
        const header_nav_ul_li8_a = document.createElement('a');
        header_nav_ul_li8_a.setAttribute('href','#'); 
        header_nav_ul_li8_a.innerText = "입주마당";

        const header_nav_ul_li8_ul = document.createElement('ul');
        header_nav_ul_li8_ul.setAttribute('class','hover none');

        const header_nav_ul_li8_ul_li1 = document.createElement('li');
        const header_nav_ul_li8_ul_li1_a = document.createElement('a');
        header_nav_ul_li8_ul_li1_a.setAttribute('href','#');
        header_nav_ul_li8_ul_li1_a.innerText = "제1 캠퍼스";

        const header_nav_ul_li8_ul_li2 = document.createElement('li');
        const header_nav_ul_li8_ul_li2_a = document.createElement('a');
        header_nav_ul_li8_ul_li2_a.setAttribute('href','#');
        header_nav_ul_li8_ul_li2_a.innerText = "제2 캠퍼스";

        const header_nav_ul_li8_ul_li3 = document.createElement('li');
        const header_nav_ul_li8_ul_li3_a = document.createElement('a');
        header_nav_ul_li8_ul_li3_a.setAttribute('href','#');
        header_nav_ul_li8_ul_li3_a.innerText = "입주공간 신청";

        const header_nav_ul_li8_ul_li4 = document.createElement('li');
        const header_nav_ul_li8_ul_li4_a = document.createElement('a');
        header_nav_ul_li8_ul_li4_a.setAttribute('href','#');
        header_nav_ul_li8_ul_li4_a.innerText = "입주기업";




        const header_log = document.createElement('div');
        header_log.setAttribute('class','header_log');

        const login = document.createElement('div');
        login.setAttribute('class','login');
        const login_btn = document.createElement('input');
        login_btn.setAttribute('type','button');
        login_btn.setAttribute('value','로그인');

        const logout = document.createElement('div');
        logout.setAttribute('class','logout none');
        const mypage_btn = document.createElement('input');
        mypage_btn.setAttribute('type','button');
        mypage_btn.setAttribute('value','마이페이지');

        const logout_btn = document.createElement('input');
        logout_btn.setAttribute('type','button');
        logout_btn.setAttribute('value','로그아웃');

        const log_icon = document.createElement('div');
        log_icon.setAttribute('class','log_icon');
        log_icon.addEventListener('click', function () {
            if(click.style.display == "block"){
                click.style.display= "none";
                log_icon_img.src = "../image/menuOpen.png"
            }else{
                click.style.display= "block";
                log_icon_img.src = "../image/menuClose.png"

            }
          
          });
        const log_icon_img = document.createElement('img');
        log_icon_img.setAttribute('src','../image/menuOpen.png');


        const click = document.createElement('div');
        click.setAttribute('class','click none');

        const login_small = document.createElement('div');
        login_small.setAttribute('class','login_small');

        const login_small_div = document.createElement('div');
        const login_small_div_span1 = document.createElement('span');
        login_small_div_span1.innerText = "로그인 하면 더 많은";
        const br = document.createElement('br');
        const login_small_div_span2 = document.createElement('span');
        login_small_div_span2.innerText = "서비스를 이용할 수 있습니다."
        const login_small_btn1 = document.createElement('input');
        login_small_btn1.setAttribute('type','button');
        login_small_btn1.setAttribute('value','로그인');
        const login_small_btn2 = document.createElement('input');
        login_small_btn2.setAttribute('type','button');
        login_small_btn2.setAttribute('value','회원가입');
        login_small_btn2.setAttribute('class','mleft');
        const small_line = document.createElement('div');
        small_line.setAttribute('class','small_line');
        const hr = document.createElement('hr');

        const small_list = document.createElement('div');
        small_list.setAttribute('class','small_list');
        const small_list_ul1 = document.createElement('ul');
        
        const small_list_ul_li1 = document.createElement('li');
        small_list_ul_li1.innerText = '강소특구소개';
        const small_list_ul_li1_ul = document.createElement('ul');
        const small_list_ul_li1_ul_li1 = document.createElement('li');
        const small_list_ul_li1_ul_li1_a = document.createElement('a');
        small_list_ul_li1_ul_li1_a.setAttribute('href','#');
        small_list_ul_li1_ul_li1_a.innerText = "인사말"
        
        const small_list_ul_li1_ul_li2 = document.createElement('li');
        const small_list_ul_li1_ul_li2_a = document.createElement('a');
        small_list_ul_li1_ul_li2_a.setAttribute('href','#');
        small_list_ul_li1_ul_li2_a.innerText = "강소특구개요"

        const small_list_ul_li1_ul_li3 = document.createElement('li');
        const small_list_ul_li1_ul_li3_a = document.createElement('a');
        small_list_ul_li1_ul_li3_a.setAttribute('href','#');
        small_list_ul_li1_ul_li3_a.innerText ="오시는길";

        const small_list_ul2 = document.createElement('ul');
        const small_list_ul_li2 = document.createElement('li');
        small_list_ul_li2.innerText = "지원사업소개"
        const small_list_ul_li2_ul = document.createElement('ul');
        const small_list_ul_li2_ul_li1 = document.createElement('li');
        const small_list_ul_li2_ul_li1_a = document.createElement('a');
        small_list_ul_li2_ul_li1_a.innerText = '연구기관기술';
        small_list_ul_li2_ul_li1_a.setAttribute('href','#');
        const small_list_ul_li2_ul_li2 = document.createElement('li');
        const small_list_ul_li2_ul_li2_a = document.createElement('a');
        small_list_ul_li2_ul_li2_a.setAttribute('href','#');
        small_list_ul_li2_ul_li2_a.innerText = "지역기술"


        const small_list_ul3 = document.createElement('ul');
        const small_list_ul_li3 = document.createElement('li');
        small_list_ul_li3.innerText = "기술정보";

        const small_list_ul_li3_ul = document.createElement('ul');
        const small_list_ul_li3_ul_li1 = document.createElement('li');
        const small_list_ul_li3_ul_li1_a = document.createElement('a');
        small_list_ul_li3_ul_li1_a.setAttribute('href','#');
        small_list_ul_li3_ul_li1_a.innerText = "기술검색";

        const small_list_ul_li3_ul_li2 = document.createElement('li');
        const small_list_ul_li3_ul_li2_a = document.createElement('a');
        small_list_ul_li3_ul_li2_a.setAttribute('href','#');
        small_list_ul_li3_ul_li2_a.innerText = "우수기술";

        const small_list_ul_li3_ul_li3 = document.createElement('li');
        const small_list_ul_li3_ul_li3_a = document.createElement('a');
        small_list_ul_li3_ul_li3_a.setAttribute('href','#');
        small_list_ul_li3_ul_li3_a.innerText = "기술동향";


        const small_list_ul4 = document.createElement('ul');
        const small_list_ul_li4 = document.createElement('li');
        small_list_ul_li4.innerText = "연구마당";

        const small_list_ul_li4_ul = document.createElement('ul');
        
        const small_list_ul_li4_ul_li1 = document.createElement('li');
        const small_list_ul_li4_ul_li1_a = document.createElement('a');
        small_list_ul_li4_ul_li1_a.setAttribute('href','#');
        small_list_ul_li4_ul_li1_a.innerText = "연구분야";
        const small_list_ul_li4_ul_li2 = document.createElement('li');
        const small_list_ul_li4_ul_li2_a = document.createElement('a');
        small_list_ul_li4_ul_li2_a.setAttribute('href','#');
        small_list_ul_li4_ul_li2_a.innerText = "기술동향";
        const small_list_ul_li4_ul_li3 = document.createElement('li');
        const small_list_ul_li4_ul_li3_a = document.createElement('a');
        small_list_ul_li4_ul_li3_a.setAttribute('href','#');
        small_list_ul_li4_ul_li3_a.innerText = "기술동향";


        const small_list_ul5 = document.createElement('ul');
        const small_list_ul_li5 = document.createElement('li');
        small_list_ul_li5.innerText = "메타타운";
        const small_list_ul_li5_ul = document.createElement('ul');
        const small_list_ul_li5_ul_li1 = document.createElement('li');
        const small_list_ul_li5_ul_li1_a = document.createElement('a');
        small_list_ul_li5_ul_li1_a.setAttribute('href','#');
        small_list_ul_li5_ul_li1_a.innerText = "메타타운";

        const small_list_ul6 = document.createElement('ul');
        const small_list_ul_li6 = document.createElement('li');
        small_list_ul_li6.innerText = "고객지원";
        const small_list_ul_li6_ul = document.createElement('ul');
        const small_list_ul_li6_ul_li1 = document.createElement('li');
        const small_list_ul_li6_ul_li1_a = document.createElement('a');
        small_list_ul_li6_ul_li1_a.setAttribute('href','#');
        small_list_ul_li6_ul_li1_a.innerText = "공지사항"
        const small_list_ul_li6_ul_li2 = document.createElement('li');
        const small_list_ul_li6_ul_li2_a = document.createElement('a');
        small_list_ul_li6_ul_li2_a.setAttribute('href','#');
        small_list_ul_li6_ul_li2_a.innerText = "사업공고";
        const small_list_ul_li6_ul_li3 = document.createElement('li');
        const small_list_ul_li6_ul_li3_a = document.createElement('a');
        small_list_ul_li6_ul_li3_a.setAttribute('href','#');
        small_list_ul_li6_ul_li3_a.innerText = "특구일정"

        const small_list_ul7 = document.createElement('ul');
        const small_list_ul_li7 = document.createElement('li');
        small_list_ul_li7.innerText = "홍보센터";
        const small_list_ul_li7_ul = document.createElement('ul');
        const small_list_ul_li7_ul_li1 = document.createElement('li');
        const small_list_ul_li7_ul_li1_a = document.createElement('a');
        small_list_ul_li7_ul_li1_a.setAttribute('href','#');
        small_list_ul_li7_ul_li1_a.innerText = "기업홍보";
        const small_list_ul_li7_ul_li2 = document.createElement('li');
        const small_list_ul_li7_ul_li2_a = document.createElement('a');
        small_list_ul_li7_ul_li2_a.setAttribute('href','#');
        small_list_ul_li7_ul_li2_a.innerText = "홍보자료";
        const small_list_ul_li7_ul_li3 = document.createElement('li');
        const small_list_ul_li7_ul_li3_a = document.createElement('a');
        small_list_ul_li7_ul_li3_a.setAttribute('href','#');
        small_list_ul_li7_ul_li3_a.innerText = "보도자료";
        const small_list_ul_li7_ul_li4 = document.createElement('li');
        const small_list_ul_li7_ul_li4_a = document.createElement('a');
        small_list_ul_li7_ul_li4_a.setAttribute('href','#');
        small_list_ul_li7_ul_li4_a.innerText = "행사사진";

        const small_list_ul8 = document.createElement('ul');
        const small_list_ul_li8 = document.createElement('li');
        small_list_ul_li8.innerText = '입주마당';
        const small_list_ul_li8_ul = document.createElement('ul');
        const small_list_ul_li8_ul_li1 = document.createElement('li');
        const small_list_ul_li8_ul_li1_a = document.createElement('a');
        small_list_ul_li8_ul_li1_a.setAttribute('href','#');
        small_list_ul_li8_ul_li1_a.innerText = '제1 캠퍼스';
        const small_list_ul_li8_ul_li2 = document.createElement('li');
        const small_list_ul_li8_ul_li2_a = document.createElement('a');
        small_list_ul_li8_ul_li2_a.setAttribute('href','#');
        small_list_ul_li8_ul_li2_a.innerText = '제2 캠퍼스';
        const small_list_ul_li8_ul_li3 = document.createElement('li');
        const small_list_ul_li8_ul_li3_a = document.createElement('a');
        small_list_ul_li8_ul_li3_a.setAttribute('href','#');
        small_list_ul_li8_ul_li3_a.innerText = "입주공간 신청";
        const small_list_ul_li8_ul_li4 = document.createElement('li');
        const small_list_ul_li8_ul_li4_a = document.createElement('a');
        small_list_ul_li8_ul_li4_a.setAttribute('href','#');
        small_list_ul_li8_ul_li4_a.innerText = "입주기업";
        


        
        header.appendChild(header_container);

        header_container.appendChild(main_nav);
        header_container.appendChild(click);

        //header_log
        header_log.appendChild(login);
        header_log.appendChild(logout);
        header_log.appendChild(log_icon);

        login.appendChild(login_btn);
        logout.appendChild(mypage_btn);
        logout.appendChild(logout_btn);
        log_icon.appendChild(log_icon_img);
        main_nav.appendChild(header_logo);
        main_nav.appendChild(header_nav);
        main_nav.appendChild(header_log);

        header_logo.appendChild(header_logo_img);
        header_nav.appendChild(header_nav_ul);
        header_nav_ul.appendChild(header_nav_ul_li1);
        header_nav_ul_li1.appendChild(header_nav_ul_li1_a);
        header_nav_ul_li1.appendChild(header_nav_ul_li1_ul);

        header_nav_ul_li1_ul.appendChild(header_nav_ul_li1_ul_li1);
        header_nav_ul_li1_ul_li1.appendChild(header_nav_ul_li1_ul_li1_a);
        header_nav_ul_li1_ul.appendChild(header_nav_ul_li1_ul_li2);
        header_nav_ul_li1_ul_li2.appendChild(header_nav_ul_li1_ul_li2_a);
        header_nav_ul_li1_ul.appendChild(header_nav_ul_li1_ul_li3);
        header_nav_ul_li1_ul_li2.appendChild(header_nav_ul_li1_ul_li3_a);

        header_nav_ul.appendChild(header_nav_ul_li2);
        header_nav_ul_li2.appendChild(header_nav_ul_li2_a);
        header_nav_ul_li2.appendChild(header_nav_ul_li2_ul);

        header_nav_ul_li2_ul.appendChild(header_nav_ul_li2_ul_li1);
        header_nav_ul_li2_ul_li1.appendChild(header_nav_ul_li2_ul_li1_a);
        header_nav_ul_li2_ul.appendChild(header_nav_ul_li2_ul_li2);
        header_nav_ul_li2_ul_li2.appendChild(header_nav_ul_li2_ul_li2_a);
        
        header_nav_ul.appendChild(header_nav_ul_li3);
        header_nav_ul_li3.appendChild(header_nav_ul_li3_a);
        header_nav_ul_li3.appendChild(header_nav_ul_li3_ul);

        header_nav_ul_li3_ul.appendChild(header_nav_ul_li3_ul_li1);
        header_nav_ul_li3_ul_li1.appendChild(header_nav_ul_li3_ul_li1_a);
        header_nav_ul_li3_ul.appendChild(header_nav_ul_li3_ul_li2);
        header_nav_ul_li3_ul_li2.appendChild(header_nav_ul_li3_ul_li2_a);
        header_nav_ul_li3_ul.appendChild(header_nav_ul_li3_ul_li3);
        header_nav_ul_li3_ul_li3.appendChild(header_nav_ul_li3_ul_li3_a);
        header_nav_ul_li3_ul.appendChild(header_nav_ul_li3_ul_li4);
        header_nav_ul_li3_ul_li4.appendChild(header_nav_ul_li3_ul_li4_a);

        header_nav_ul.appendChild(header_nav_ul_li4);
        header_nav_ul_li4.appendChild(header_nav_ul_li4_a);
        header_nav_ul_li4.appendChild(header_nav_ul_li4_ul);

        header_nav_ul_li4_ul.appendChild(header_nav_ul_li4_ul_li1);
        header_nav_ul_li4_ul_li1.appendChild(header_nav_ul_li4_ul_li1_a);
        header_nav_ul_li4_ul.appendChild(header_nav_ul_li4_ul_li2);
        header_nav_ul_li4_ul_li2.appendChild(header_nav_ul_li4_ul_li2_a);
        header_nav_ul_li4_ul.appendChild(header_nav_ul_li4_ul_li3);
        header_nav_ul_li4_ul_li3.appendChild(header_nav_ul_li4_ul_li3_a);
        
        header_nav_ul.appendChild(header_nav_ul_li5);
        header_nav_ul_li5.appendChild(header_nav_ul_li5_a);
        header_nav_ul_li5.appendChild(header_nav_ul_li5_ul);

        header_nav_ul_li5_ul.appendChild(header_nav_ul_li5_ul_li1);
        header_nav_ul_li5_ul_li1.appendChild(header_nav_ul_li4_ul_li1_a);
        
        header_nav_ul.appendChild(header_nav_ul_li6);
        header_nav_ul_li6.appendChild(header_nav_ul_li6_a);
        header_nav_ul_li6.appendChild(header_nav_ul_li6_ul);

        header_nav_ul_li6_ul.appendChild(header_nav_ul_li6_ul_li1);
        header_nav_ul_li6_ul_li1.appendChild(header_nav_ul_li6_ul_li1_a);
        header_nav_ul_li6_ul.appendChild(header_nav_ul_li6_ul_li2);
        header_nav_ul_li6_ul_li2.appendChild(header_nav_ul_li6_ul_li2_a);
        header_nav_ul_li6_ul.appendChild(header_nav_ul_li6_ul_li3);
        header_nav_ul_li6_ul_li3.appendChild(header_nav_ul_li6_ul_li3_a);
        header_nav_ul_li6_ul.appendChild(header_nav_ul_li6_ul_li4);
        header_nav_ul_li6_ul_li4.appendChild(header_nav_ul_li6_ul_li4_a);

        header_nav_ul.appendChild(header_nav_ul_li7);
        header_nav_ul_li7.appendChild(header_nav_ul_li7_a);
        header_nav_ul_li7.appendChild(header_nav_ul_li7_ul);

        header_nav_ul_li7_ul.appendChild(header_nav_ul_li7_ul_li1);
        header_nav_ul_li7_ul_li1.appendChild(header_nav_ul_li7_ul_li1_a);
        header_nav_ul_li7_ul.appendChild(header_nav_ul_li7_ul_li2);
        header_nav_ul_li7_ul_li2.appendChild(header_nav_ul_li7_ul_li2_a);
        header_nav_ul_li7_ul.appendChild(header_nav_ul_li7_ul_li3);
        header_nav_ul_li7_ul_li3.appendChild(header_nav_ul_li7_ul_li3_a);
        header_nav_ul_li7_ul.appendChild(header_nav_ul_li7_ul_li4);
        header_nav_ul_li7_ul_li4.appendChild(header_nav_ul_li7_ul_li4_a);

        header_nav_ul.appendChild(header_nav_ul_li8);
        header_nav_ul_li8.appendChild(header_nav_ul_li8_a);
        header_nav_ul_li8.appendChild(header_nav_ul_li8_ul);

        header_nav_ul_li8_ul.appendChild(header_nav_ul_li8_ul_li1);
        header_nav_ul_li8_ul_li1.appendChild(header_nav_ul_li8_ul_li1_a);
        header_nav_ul_li8_ul.appendChild(header_nav_ul_li8_ul_li2);
        header_nav_ul_li8_ul_li2.appendChild(header_nav_ul_li8_ul_li2_a);
        header_nav_ul_li8_ul.appendChild(header_nav_ul_li8_ul_li3);
        header_nav_ul_li8_ul_li3.appendChild(header_nav_ul_li8_ul_li3_a);
        header_nav_ul_li8_ul.appendChild(header_nav_ul_li8_ul_li4);
        header_nav_ul_li8_ul_li4.appendChild(header_nav_ul_li8_ul_li4_a);


        //click
        click.appendChild(login_small);
        click.appendChild(small_line);
        click.appendChild(small_list);
        

        //login_small
        login_small.appendChild(login_small_div);
        login_small_div.appendChild(login_small_div_span1);
        login_small_div.appendChild(br);
        login_small_div.appendChild(login_small_div_span2);
        login_small.appendChild(login_small_btn1);
        login_small.appendChild(login_small_btn2);

        //small line
        small_line.appendChild(hr);

        //small list
        small_list.appendChild(small_list_ul1);
        small_list.appendChild(small_list_ul2);
        small_list.appendChild(small_list_ul3);
        small_list.appendChild(small_list_ul4);
        small_list.appendChild(small_list_ul5);
        small_list.appendChild(small_list_ul6);
        small_list.appendChild(small_list_ul7);
        small_list.appendChild(small_list_ul8);
        
        //small ul 1


        small_list_ul1.appendChild(small_list_ul_li1);
        small_list_ul1.appendChild(small_list_ul_li1_ul);

        small_list_ul_li1_ul.appendChild(small_list_ul_li1_ul_li1);
        small_list_ul_li1_ul.appendChild(small_list_ul_li1_ul_li2);
        small_list_ul_li1_ul.appendChild(small_list_ul_li1_ul_li3);
        
        small_list_ul_li1_ul_li1.appendChild(small_list_ul_li1_ul_li1_a);
        small_list_ul_li1_ul_li2.appendChild(small_list_ul_li1_ul_li2_a);
        small_list_ul_li1_ul_li3.appendChild(small_list_ul_li1_ul_li3_a);


        //small ul 2
        small_list_ul2.appendChild(small_list_ul_li2);
        small_list_ul2.appendChild(small_list_ul_li2_ul);

        small_list_ul_li2_ul.appendChild(small_list_ul_li2_ul_li1);
        small_list_ul_li2_ul.appendChild(small_list_ul_li2_ul_li2);
        
        small_list_ul_li2_ul_li1.appendChild(small_list_ul_li2_ul_li1_a);
        small_list_ul_li2_ul_li2.appendChild(small_list_ul_li2_ul_li2_a);


        //small ul 3
        small_list_ul3.appendChild(small_list_ul_li3);
        small_list_ul3.appendChild(small_list_ul_li3_ul);

        small_list_ul_li3_ul.appendChild(small_list_ul_li3_ul_li1);
        small_list_ul_li3_ul.appendChild(small_list_ul_li3_ul_li2);
        small_list_ul_li3_ul.appendChild(small_list_ul_li3_ul_li3);
        
        small_list_ul_li3_ul_li1.appendChild(small_list_ul_li3_ul_li1_a);
        small_list_ul_li3_ul_li2.appendChild(small_list_ul_li3_ul_li2_a);
        small_list_ul_li3_ul_li3.appendChild(small_list_ul_li3_ul_li3_a);


        //small ul 4
        small_list_ul4.appendChild(small_list_ul_li4);
        small_list_ul4.appendChild(small_list_ul_li4_ul);

        small_list_ul_li4_ul.appendChild(small_list_ul_li4_ul_li1);
        small_list_ul_li4_ul.appendChild(small_list_ul_li4_ul_li2);
        
        small_list_ul_li4_ul_li1.appendChild(small_list_ul_li4_ul_li1_a);
        small_list_ul_li4_ul_li2.appendChild(small_list_ul_li4_ul_li2_a);


        //small ul 5
        small_list_ul5.appendChild(small_list_ul_li5);
        small_list_ul5.appendChild(small_list_ul_li5_ul);

        small_list_ul_li5_ul.appendChild(small_list_ul_li5_ul_li1);
        
        small_list_ul_li5_ul_li1.appendChild(small_list_ul_li5_ul_li1_a);

        //small ul 6
        small_list_ul6.appendChild(small_list_ul_li6);
        small_list_ul6.appendChild(small_list_ul_li6_ul);

        small_list_ul_li6_ul.appendChild(small_list_ul_li6_ul_li1);
        small_list_ul_li6_ul.appendChild(small_list_ul_li6_ul_li2);
        small_list_ul_li6_ul.appendChild(small_list_ul_li6_ul_li3);
        
        small_list_ul_li6_ul_li1.appendChild(small_list_ul_li6_ul_li1_a);
        small_list_ul_li6_ul_li2.appendChild(small_list_ul_li6_ul_li2_a);
        small_list_ul_li6_ul_li3.appendChild(small_list_ul_li6_ul_li3_a);


        //small ul 7
        small_list_ul7.appendChild(small_list_ul_li7);
        small_list_ul7.appendChild(small_list_ul_li7_ul);

        small_list_ul_li7_ul.appendChild(small_list_ul_li7_ul_li1);
        small_list_ul_li7_ul.appendChild(small_list_ul_li7_ul_li2);
        small_list_ul_li7_ul.appendChild(small_list_ul_li7_ul_li3);
        small_list_ul_li7_ul.appendChild(small_list_ul_li7_ul_li4);

        small_list_ul_li7_ul_li1.appendChild(small_list_ul_li7_ul_li1_a);
        small_list_ul_li7_ul_li2.appendChild(small_list_ul_li7_ul_li2_a);
        small_list_ul_li7_ul_li3.appendChild(small_list_ul_li7_ul_li3_a);
        small_list_ul_li7_ul_li4.appendChild(small_list_ul_li7_ul_li4_a);


        //small ul 8 
        small_list_ul8.appendChild(small_list_ul_li8);
        small_list_ul8.appendChild(small_list_ul_li8_ul);

        small_list_ul_li8_ul.appendChild(small_list_ul_li8_ul_li1);
        small_list_ul_li8_ul.appendChild(small_list_ul_li8_ul_li2);
        small_list_ul_li8_ul.appendChild(small_list_ul_li8_ul_li3);
        small_list_ul_li8_ul.appendChild(small_list_ul_li8_ul_li4);

        small_list_ul_li8_ul_li1.appendChild(small_list_ul_li8_ul_li1_a);
        small_list_ul_li8_ul_li2.appendChild(small_list_ul_li8_ul_li2_a);
        small_list_ul_li8_ul_li3.appendChild(small_list_ul_li8_ul_li3_a);
        small_list_ul_li8_ul_li4.appendChild(small_list_ul_li8_ul_li4_a);


        const style = document.createElement('style');
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(header);


        log_icon.onclick = function small_menu_btn(){
            document.getElementsByClassName("click").style.display = "none";
        }
        

        style.textContent = `
        ul{
            list-style: none;
            padding: 0;
        }
input{
    background-color: #FFFFFF;
    color: #374151;
    padding: 0 8px;
}
a{
    text-decoration: none;
    padding: 0;
    color: #9CA3AF;
}
a:hover{
    color: #008DFF;
    font-weight: 700;
}

header{
    background-color: #FFFFFF;
}

.header_container{
    width: 1280px;
    margin: 0 auto;
}

.main_nav{
    width: 100%;
    height: 100px;
}

.header_logo{
    margin: auto;
    float: left;
    height: 100%;
    margin-right: 93px;
}
.header_logo img{
    padding: 25px 0;
}

.header_nav{
    float: left;
    height: 100%;
}

.header_nav ul{
    height: 100%;
    margin: 0;
}

.header_nav ul li{
    float: left;
    width: auto;
    line-height: 100px;
    height: 100px;
}
.header_nav li a{
    letter-spacing: -1%;
    line-height: 100px;
    text-align: center;
    display: inline-block;
    padding:0px 16px;
    font-size: 18px;
    font-weight: 700;
}
.header_nav ul ul{
    margin-top: 24px;
}
.header_nav ul ul li{
    float: left;
    width: auto;
}
.header_nav ul ul li a{
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4;
    text-align: center;
}

.header_log{
    float: right;
    line-height: 100px;
    vertical-align: middle;
}
.header_log input{
    border: 0;
    outline: 0;
    line-height: 100px;
    font-size: 18px;
    float: left;
}
.header_log img{
    margin-top: 45px;
    display: none;
}

.header_log input:hover{
    text-decoration: underline;
}


.mleft{
    float: left;
    margin-left: 8px;
}
.logout{

}
.log_icon{

}

.hover{
    margin-top: 24px;
    margin-bottom: 40px;
    float: left;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
}
.hover li a{
    line-height: 28px;
    height: 28px;
    padding: 12px;
    text-align: center;
}
hr{
    float: left;
}
.login_small{
    margin: 0 auto;
    margin-top: 40px;
    width: 480px;
}
.login_small div{
    margin-bottom: 16px;
}
.login_small div span{
    color: #4B5563;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    letter-spacing: -1%;
}
.login_small input{
    width: 236px;
    height: 34px;
    padding: 6px 12px 6px 12px;
    border-radius: 4px;
    background-color: #008DFF;
    color: #FFFFFF;
    border: #008DFF;
    float: left;
}
.small_line{
    color: #D1D5D8;
    margin-top: 24px;
    float: left;
    width: 100%;
    margin-bottom: 24px;
}

.small_list ul{
    width: 50%;
    float: left;
}
.small_list ul li{
    color:#000000;
    font-size: 20px;
    font-weight: bold;
    line-height: 130%;
    vertical-align: top;
}
.small_list ul ul{
    margin-top: 16px;
    min-height: 162px;
}
.small_list ul ul li{
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -1%;
    height: 28px;
    margin-bottom: 12px;
}
.none {
    display: none;
}



@media (max-width: 1023px) {
    .header_container{
        width: 480px;
    }
    .header_nav{
        display: none;
    }
    .login{
        display: none;
    }
    .logout{
        display: none;
    }
    .header_log img{
        display: block;
    }
    .click{
        display: block;
    }
    .small_line{
        color: #D1D5D8;
        margin-top: 24px;
        float: left;
        width: 100%;
        margin-bottom: 24px;
    }
    hr{
        width: 480px;
        margin: 0 auto;
    }
    .mleft{
        float: left;
        margin-left: 8px;
    }

}

@media (max-width: 639px) {
    .header_container{
        width: 360px;
    }
    .login_small{
        margin-top: 24px;
    }
    .login_small div{
        margin-bottom: 24px;
    }
    .login_small div span{
        color: #4B5563;
        font-size: 14px;
        font-weight: 500;
        line-height: 22.4px;
        letter-spacing: -1%;
    }
    .login_small input{
        width: 160px;
        height: 34px;
        padding: 6px 12px 6px 12px;
        border-radius: 4px;
        background-color: #008DFF;
        color: #FFFFFF;
        border: #008DFF;
    }
    .small_line{
        color: #D1D5D8;
        margin-top: 24px;
        margin-bottom: 24px;
    }
    
    .small_list ul{
        width: 100%;
        float: left;
    }
    .small_list ul li{
        color:#000000;
        font-size: 20px;
        font-weight: bold;
        line-height: 130%;
        vertical-align: top;
    }
    .small_list ul ul{
        margin-top: 16px;
        min-height: 162px;
    }
    .small_list ul ul li{
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: -1%;
        height: 28px;
        float:left;
        width: 100%;
        margin-bottom: 12px;
    }
    
    .small_line{
        color: #D1D5D8;
        margin-top: 24px;
        float: left;
        width: 100%;
        margin-bottom: 24px;
    }
    hr{
        width: 328px;
        margin: 0 auto;
    }
    
}
        `;

    

    }
}

customElements.define('header-default',header_default);