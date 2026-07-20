(() => {
    "use strict";
    const concerns = [
        [
            "生理痛がひどい",
            "鎮痛剤が効かない痛みは子宮内膜症や子宮筋腫のサインかもしれません。早めのご相談を。",
        ],
        [
            "生理不順が続く",
            "ホルモンバランスの乱れが主な原因です。適切な治療で多くの方が改善されています。",
        ],
        [
            "更年期の不調",
            "動悸・ほてり・不眠・気分の落ち込み。ホルモン補充療法で症状を和らげることができます。",
        ],
        [
            "妊娠の可能性",
            "妊娠検査から初期診察・継続ケアまで、不安なことはどんな些細なことでもご相談ください。",
        ],
        [
            "性感染症が心配",
            "検査から治療まで、完全個室でプライバシーに配慮した対応を行っています。",
        ],
        [
            "はじめての婦人科",
            "初めての受診でも安心できるよう、女性医師・女性スタッフが丁寧に対応します。",
        ],
    ];
    const services = [
        [
            "♧",
            "婦人科一般外来",
            "月経不順・PMS・おりもの・下腹部痛など、日常的な婦人科のお悩みに幅広く対応します。",
        ],
        [
            "♙",
            "産科・妊婦健診",
            "妊娠初期から産後まで、ひとりひとりに寄り添った安心のマタニティケアを提供します。",
        ],
        [
            "☼",
            "更年期・ホルモン外来",
            "ホットフラッシュ・不眠・気分の変化など、更年期症状の緩和と女性ホルモンのケアを行います。",
        ],
        [
            "⌕",
            "子宮・卵巣がん検診",
            "定期的な検診で早期発見・早期治療を。子宮頸がん・体がん・卵巣エコーを一度に受診できます。",
        ],
        [
            "⊕",
            "避妊・ピル処方",
            "低用量ピル・IUD・緊急避妊薬など、お一人おひとりのライフスタイルに合わせた選択肢をご提案します。",
        ],
        [
            "◎",
            "ブライダルチェック",
            "結婚を控えた方の婦人科的健康確認と、STI検査・風疹抗体検査などをまとめて受けられます。",
        ],
    ];
    const steps = [
        [
            "01",
            "Web予約",
            "24時間受け付けるWeb予約フォームから、ご希望の日時をご予約ください。",
        ],
        [
            "02",
            "来院・受付",
            "ご来院後、受付でご本人確認を行い、問診票をご記入いただきます。",
        ],
        [
            "03",
            "診察",
            "女性医師が問診・診察を行います。気になることは遠慮なくお話しください。",
        ],
        [
            "04",
            "お会計・処方",
            "診察後にお会計をし、必要に応じてお薬や検査キットを処方します。",
        ],
    ];
    const features = [
        [
            "☆",
            "女性医師・女性スタッフ",
            "全スタッフが女性。デリケートなお悩みも安心してお話しいただける環境を整えています。",
        ],
        [
            "▣",
            "完全予約制",
            "Web予約で待合室での長時間待機を軽減。ゆとりある時間でご来院いただけます。",
        ],
        [
            "♧",
            "最新医療機器完備",
            "高精度な超音波診断装置を導入。より正確で安心できる診断を提供します。",
        ],
        [
            "⌖",
            "好アクセス・バリアフリー",
            "渋谷駅から徒歩4分。エレベーター完備で妊婦・車いすの方も安心してご利用いただけます。",
        ],
    ];
    const faqs = [
        [
            "初めての受診でも大丈夫ですか？",
            "はい。女性医師・女性スタッフが丁寧にご説明しながら診察を進めます。",
        ],
        [
            "予約は必要ですか？",
            "当院は完全予約制です。Web予約またはお電話にてご予約ください。",
        ],
        [
            "生理中でも受診できますか？",
            "一般的な問診・相談は可能です。一部の検査は行えない場合があります。",
        ],
        [
            "健康保険は使えますか？",
            "多くの診療は保険適用です。一部は自費診療となります。",
        ],
        [
            "診察は何分くらいかかりますか？",
            "初診は30〜45分程度、再診・検診のみは15〜20分程度が目安です。",
        ],
        [
            "駐車場はありますか？",
            "専用駐車場はありません。近隣のコインパーキングをご利用ください。",
        ],
    ];
    const fill = (selector, html) => {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = html;
    };
    fill(
        ".card-grid--concerns",
        concerns
            .map(
                (x) =>
                    `<article class="concern-card reveal"><h3>${x[0]}</h3><p>${x[1]}</p></article>`,
            )
            .join(""),
    );
    fill(
        ".card-grid--services",
        services
            .map(
                (x) =>
                    `<article class="service-card reveal"><b aria-hidden="true">${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p><a href="#reservation">詳しく見る　→</a></article>`,
            )
            .join(""),
    );
    fill(
        ".steps",
        steps
            .map(
                (x) =>
                    `<li class="reveal"><span><small>Step</small>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></li>`,
            )
            .join(""),
    );
    fill(
        ".features__grid",
        features
            .map(
                (x, i) =>
                    `<article class="feature-card feature-card--${i + 1} reveal"><b aria-hidden="true">${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></article>`,
            )
            .join(""),
    );
    fill(
        ".faq__list",
        faqs
            .map(
                (x, i) =>
                    `<article class="faq-item reveal"><h3><button type="button" aria-expanded="false" aria-controls="faq-answer-${i}"><span><i>Q</i>${x[0]}</span><b aria-hidden="true">⌄</b></button></h3><div id="faq-answer-${i}" class="faq-item__answer" hidden><p><i>A</i>${x[1]}</p></div></article>`,
            )
            .join(""),
    );
    const header = document.querySelector(".header"),
        menu = document.querySelector(".menu-button"),
        nav = document.querySelector(".global-nav");
    const closeMenu = () => {
        menu?.setAttribute("aria-expanded", "false");
        nav?.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    };
    menu?.addEventListener("click", () => {
        const open = menu.getAttribute("aria-expanded") === "true";
        menu.setAttribute("aria-expanded", String(!open));
        nav.classList.toggle("is-open", !open);
        document.body.classList.toggle("menu-open", !open);
    });
    nav?.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", closeMenu),
    );
    window.addEventListener(
        "scroll",
        () => header?.classList.toggle("is-scrolled", scrollY > 20),
        { passive: true },
    );
    document.querySelectorAll(".faq-item button").forEach((btn) =>
        btn.addEventListener("click", () => {
            const open = btn.getAttribute("aria-expanded") === "true";
            const answer = document.getElementById(
                btn.getAttribute("aria-controls"),
            );
            btn.setAttribute("aria-expanded", String(!open));
            if (answer) answer.hidden = open;
        }),
    );
    const observer = new IntersectionObserver(
        (entries) =>
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is-visible");
                    observer.unobserve(e.target);
                }
            }),
        { threshold: 0.08, rootMargin: "0px 0px -30px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
