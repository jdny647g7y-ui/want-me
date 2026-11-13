const Q=[
['自分にとって良い選択だったと思えるのは？','自分なりに納得できる理由があるとき','信頼する人たちからも良い選択だと言われたとき','I','E'],
['理想の休日は？','その時間自体を心から楽しめる休日','やりたかったことを達成できる休日','B','D'],
['自由な時間ができたら、どちらに使いたい？','まだ知らないことを新しく体験する','今好きなことをもっと深く楽しむ','N','K'],
['大切な人と旅行を計画するときは？','それぞれの希望を出し、自分の希望も実現したい','一緒に楽しめることを中心に決めたい','W','R'],
['褒められたとき、より嬉しいのは？','自分でも良いと思っていた部分を褒められること','自分では気づかなかった魅力を認められること','I','E'],
['一年を振り返って、より満足するのは？','好きなことに囲まれて充実した一年','目標に向かって成長できた一年','B','D'],
['今まで大切にしてきたこととは別に、魅力的な新しい可能性が見つかったら？','新しい可能性に時間を使ってみたい','これまで大切にしてきたことに時間を使いたい','N','K'],
['グループで意見が分かれたとき、重視するのは？','自分の考えをきちんと反映できること','全員が納得できる結論を見つけること','W','R'],
['自分の魅力を判断するときは？','自分自身が好きだと思えるところ','周囲の人が魅力的だと感じてくれるところ','I','E'],
['何かに取り組むとき、より惹かれるのは？','取り組む過程そのものが楽しいこと','完成したときの達成感が大きいこと','B','D'],
['これからの人生で増やしたいのは？','まだ知らない世界や経験','すでに大切なものとの深いつながり','N','K'],
['大きな決断をするとき、より大切なのは？','自分の意思を明確にして選ぶこと','大切な人と十分に話し合って選ぶこと','W','R'],
['究極の二択：どちらの作品を残したい？','自分では最高傑作だと思えるが、世間には評価されない作品','自分の理想とは違うが、多くの人に愛される作品','I','E'],
['究極の二択：どちらの一年を選ぶ？','大きな成果はないが、毎日を満たされた気持ちで過ごす一年','忙しい日々だが、ずっと望んでいた目標を達成する一年','B','D'],
['究極の二択：次の一年を過ごすなら？','初めての場所で、新しい発見を重ねる','大好きな場所で、これまで以上に豊かな時間を過ごす','N','K'],
['究極の二択：二つの道があるなら？','自分が望む道を選び、相手とは別々の挑戦をする','相手と共に歩む道を選び、自分の計画を調整する','W','R'],
['究極の二択：どちらの評価を選ぶ？','周囲には理解されなくても、自分が誇れる生き方','自分の理想とは少し違っても、多くの人に支持される生き方','I','E'],
['究極の二択：人生の満足を選ぶなら？','特別な実績はなくても、日々の暮らしを楽しめる人生','困難もあるが、ずっと目指していたことを成し遂げる人生','B','D'],
['究極の二択：同じくらい幸せになれるなら？','新しい可能性を次々に見つける人生','大切なものを少しずつ育てていく人生','N','K'],
['究極の二択：大切な人と希望が違ったら？','互いの違いを認め、自分の希望を実現する','互いの希望を調整し、一緒に実現できることを選ぶ','W','R']];
const names={IBNW:'星追いねこ',IBNR:'旅するくろひょう',IBKW:'のんびりトラ',IBKR:'ゆきひょう',IDNW:'ひらめきフクロウ',IDNR:'たんけんリス',IDKW:'こだわりハリネズミ',IDKR:'こうぼうのこぐま',EBNW:'きらめきフェネック',EBNR:'はなかんむりうさぎ',EBKW:'たれみみこいぬ',EBKR:'ふわふわチンチラ',EDNW:'チャレンジライオン',EDNR:'ゆめみるユニコーン',EDKW:'はばたくクジャク',EDKR:'ゆうがな白鳥'};
const families={IB:['マイワールド族','#9583D8','自分らしい心地よさを大切にする'],ID:['クラフト族','#399B79','自分の理想を、自分らしい形で実現する'],EB:['スポットライト族','#DE8C9D','自分の魅力や存在を認められることを大切にする'],ED:['トロフィー族','#DE8659','成果を通して周囲から認められることを大切にする']};
const axes=[['I','E','自分の納得','周囲の評価'],['B','D','あり方','成果'],['N','K','新しい可能性','今ある価値'],['W','R','自分の意思','大切な関係']];
const descriptions={I:'自分の納得を判断の軸にし',E:'周囲からの評価を大切にし',B:'日々の充実を求め',D:'達成する喜びを求め',N:'新しい可能性に惹かれ',K:'今ある価値を育て',W:'自分の意思を大切にする',R:'大切な関係を守ろうとする'};
const app=document.getElementById('app');let step=0,answers=Array(20).fill(null);
const shell=html=>{app.innerHTML=`<div class="shell"><section class="panel">${html}</section></div>`;window.scrollTo({top:0,behavior:'instant'})};
function home(){history.replaceState(null,'',location.pathname);shell(`<div class="eyebrow">DISCOVER YOUR DESIRE</div><h1 class="logo">WANT ME<span class="heart">♡</span></h1><div class="subtitle">あなたが最後に選ぶのは、何？</div><p class="muted tagline">普段の価値観 × 究極の二択<br>20問で見つける、あなたの「大切」</p><img class="poster" src="assets/poster.webp" alt="WANT MEの16キャラクター一覧"><p><span class="pill">全20問 · 約3〜4分 · 16タイプ</span></p><button class="btn" id="start">診断をはじめる ♡</button><p class="muted">直感で答えてね。正解・不正解はないよ。</p>`);document.getElementById('start').onclick=()=>{answers=Array(20).fill(null);step=0;quiz()}};
function quiz(){let q=Q[step];shell(`<div class="row"><span class="eyebrow">WANT ME · ${step<12?'DAILY VALUES':'ULTIMATE CHOICE'}</span><b>${step+1} / 20</b></div><div class="progress"><div style="width:${answers.filter(x=>x!==null).length*5}%"></div></div><span class="pill">${step<12?'普段の価値観':'究極の二択'}</span><h2 class="question">${q[0]}</h2><div class="options"><button class="option" data-choice="0"><span class="letter">A</span><span>${q[1]}</span></button><button class="option" data-choice="1"><span class="letter">B</span><span>${q[2]}</span></button></div><div class="row" style="margin-top:28px"><button class="back" id="back">← 戻る</button><span class="muted">より近い方を選んでね ✧</span></div>`);document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{answers[step]=q[3+Number(b.dataset.choice)];if(step===19)result();else{step++;quiz()}});document.getElementById('back').onclick=()=>{if(step>0){step--;quiz()}else home()}};
function calc(){return axes.map(([a,b,left,right])=>{let selected=Q.map((q,i)=>q[3]===a?answers[i]:null).filter(x=>x!==null);let n=selected.filter(x=>x===a).length;return {a,b,left,right,n,other:5-n,code:n>=3?a:b}})}
function result(forced){let s=forced?null:calc();let code=forced||s.map(x=>x.code).join('');let fam=families[code.slice(0,2)];if(!names[code])return home();let summary=code.split('').map(x=>descriptions[x]).join('、')+'タイプ。';history.replaceState(null,'',location.pathname+'?type='+code);let bars=s?s.map(x=>`<div class="axis"><div class="axis-labels"><span>${x.a} ${x.left}</span><span>${x.b} ${x.right}</span></div><div class="axisbar"><span style="width:${x.n*20}%"></span><span style="width:${x.other*20}%"></span></div><div class="tiny">回答数 ${x.n} : ${x.other}${Math.abs(x.n-x.other)===1?' · この軸は僅差':''}</div></div>`).join(''):'<p class="muted">これはシェアされたタイプの紹介ページです。自分の結果を見るには診断してね。</p>';shell(`<div class="eyebrow">YOUR WANT ME TYPE ✦</div><div class="result-code">${code}</div><h1 class="result-name">${names[code]}</h1><div class="family" style="color:${fam[1]}">${fam[0]}</div><div class="character-stage"><span class="character-sparkle sparkle-one" aria-hidden="true">✧</span><img class="character animated-character" src="assets/${code}.webp" alt="${names[code]}のキャラクター"><span class="character-sparkle sparkle-two" aria-hidden="true">✦</span></div><div class="description"><b>${fam[2]}</b><br>${summary}</div><h3 class="section-title">${s?'あなたの価値観バランス':'WANT ME の4つの軸'}</h3>${bars}<div class="notice">β版の結果です。心理学的な妥当性・信頼性は未検証で、各軸5問の多数決で分類しています。</div><div class="actions"><button class="btn" id="share">結果をシェア ♡</button><button class="btn alt" id="again">自分も診断する</button></div><h3 class="section-title">16タイプのなかまたち</h3><div class="all-types">${Object.keys(names).map(c=>`<div class="type-card"><img loading="lazy" src="assets/${c}.webp" alt=""><strong>${c}</strong><p>${names[c]}</p></div>`).join('')}</div>`);document.getElementById('again').onclick=home;document.getElementById('share').onclick=async()=>{const data={title:`WANT ME | ${names[code]}`,text:`WANT MEの診断結果は「${names[code]}（${code}）」だったよ！`,url:location.href};if(navigator.share){try{await navigator.share(data);return}catch(e){if(e.name==='AbortError')return}}try{await navigator.clipboard.writeText(`${data.text}\n${data.url}`);alert('結果のリンクをコピーしたよ ♡')}catch(e){prompt('このURLをコピーしてね',location.href)}}}
const shared=new URLSearchParams(location.search).get('type');if(shared&&names[shared])result(shared);else home();

// Result character motion: keep the original 16 mascot assets unchanged.
(function addMascotMotion(){
  const style=document.createElement('style');
  style.textContent=`
    .character-stage{position:relative;isolation:isolate;margin:10px auto 20px;max-width:100%;}
    .character-stage .animated-character{display:block;max-width:100%;height:auto;margin-left:auto;margin-right:auto;transform-origin:50% 68%;animation:wantme-float 4.2s ease-in-out infinite,wantme-breathe 4.2s ease-in-out infinite;filter:drop-shadow(0 9px 10px rgba(139,112,168,.09));}
    .character-sparkle{position:absolute;z-index:2;color:#c7a2e6;font-size:30px;pointer-events:none;animation:wantme-twinkle 3.3s ease-in-out infinite;}
    .sparkle-one{top:16%;left:6%;}
    .sparkle-two{top:30%;right:7%;animation-delay:1.5s;font-size:22px;color:#e6b8cf;}
    @keyframes wantme-float{0%,100%{transform:translateY(0) rotate(-.6deg)}50%{transform:translateY(-11px) rotate(.6deg)}}
    @keyframes wantme-breathe{0%,100%{filter:drop-shadow(0 9px 10px rgba(139,112,168,.09))}50%{filter:drop-shadow(0 18px 15px rgba(139,112,168,.14))}}
    @keyframes wantme-twinkle{0%,100%{opacity:.25;transform:scale(.7) rotate(-12deg)}50%{opacity:1;transform:scale(1.15) rotate(12deg)}}
    @media(prefers-reduced-motion:reduce){.character-stage .animated-character,.character-sparkle{animation:none!important}}
  `;
  document.head.appendChild(style);
})();
