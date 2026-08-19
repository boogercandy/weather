/* ═══════════════════════════════════════════════════════════════════
   🌸 계양 꽃길 가이드 — 꽃 목록 데이터 파일 (flowers.js)
   ───────────────────────────────────────────────────────────────────
   ★ 왕누님이 편집할 파일은 "이 파일 하나" 뿐이에요! (index.html은 안 건드려도 OK)

   ● 꽃 하나 = { ... } 중괄호 한 덩어리
   ● 각 항목(키) 뜻:
       name  : 꽃 이름            (예: "장미")
       place : 명소 이름          (예: "계양산 장미원")
       img   : 사진 파일 이름      (index.html과 같은 폴더에 있어야 해요)
       sm,sd : 개화 "시작" 월,일   (sm=월, sd=일)   예: 5월 1일 → sm:5, sd:1
       em,ed : 개화 "종료" 월,일   (em=월, ed=일)   예: 6월 15일 → em:6, ed:15
       guide : 가이드 문구          (""로 비우면 앱에서 "준비 중"으로 표시)
       map   : 네이버 지도 주소     (""로 비우면 버튼이 "준비중" 회색)
       photo : 포토갤러리 주소       (""로 비우면 버튼이 "준비중" 회색)

   ✏️ 편집 규칙 (이것만 지키면 안전!)
     1) 값은 항상 큰따옴표 " " 안에 적기.   예:  place: "계양아라온",
        (단, 날짜 sm/sd/em/ed 는 숫자니까 따옴표 없이:  sm: 5,  sd: 1, )
     2) 줄 끝의 쉼표( , )는 지우지 말기.
     3) 꽃 한 덩어리 { ... } 통째로 복사해서 새 꽃을 추가할 수 있어요.
        (맨 마지막 꽃만 } 뒤에 쉼표가 없어요. 중간에 추가하면 쉼표 챙기기!)
     4) 꽃을 빼고 싶으면 그 { ... } 덩어리를 통째로 지우면 돼요.
   ═══════════════════════════════════════════════════════════════════ */

const flowerDB = [

  {
    id: "DAFFODIL",
    name: "수선화",
    place: "계양아라온",
    img: "flower_01_daffodil.png",
    sm: 3, sd: 15,   em: 4, ed: 5,
    guide: "계양아라온의 노란 수선화 밭! 3월 말부터 4월 초까지가 정말 예뻐. 신비랑 같이 수선화 꽃내음 맡으러 가보자!",
    map: "https://naver.me/FQVGhxu8",
    photo: "https://gyeyang.photo/36"
  },

  {
    id: "AZALEA",
    name: "진달래",
    place: "계양산",
    img: "flower_02_azalea.png",
    sm: 3, sd: 25,   em: 4, ed: 20,
    guide: "🌺 분홍빛으로 물든 계양산! 계양산성박물관에서 하느재로 가는 코스가 진달래 명소야.",
    map: "https://naver.me/Gj6XOEGG",
    photo: "https://gyeyang.photo/30"
  },

  {
    id: "CHERRY",
    name: "벚꽃",
    place: "서부간선수로",
    img: "flower_03_cherryblossom.png",
    sm: 4, sd: 5,   em: 4, ed: 30,
    guide: "🌸 물길을 따라 길게 이어진 벚꽃 터널! 서부간선수로에서 흩날리는 벚꽃비를 즐겨봐.",
    map: "https://naver.me/xCByNMz0",
    photo: "https://gyeyang.photo/35"
  },

  {
    id: "ROSE",
    name: "장미",
    place: "계양산 장미원",
    img: "flower_04_rose.png",
    sm: 5, sd: 1,   em: 6, ed: 15,
    guide: "🌹 수만 송이의 장미가 펼쳐지는 계양산 장미원! 사진 맛집으로 유명하니 카메라 꼭 챙겨!",
    map: "https://naver.me/5iTI0W6A",
    photo: "https://gyeyang.photo/32"
  },

  /* ▼▼▼ 아래 꽃들은 명소·지도·포토·가이드가 아직 비어있어요. 정해지면 채워주세요! ▼▼▼ */

  {
    id: "LILY",
    name: "백합",
    place: "계양 백합 명소 (임시)",
    img: "flower_05_lily.png",
    sm: 6, sd: 1,   em: 7, ed: 20,
    guide: "",
    map: "",
    photo: ""
  },

  {
    id: "HOLLYHOCK",
    name: "접시꽃",
    place: "계양 접시꽃 명소 (임시)",
    img: "flower_06_hollyhock.png",
    sm: 6, sd: 15,   em: 8, ed: 10,
    guide: "",
    map: "",
    photo: ""
  },

  {
    id: "ZINNIA",
    name: "백일홍",
    place: "계양 백일홍 명소 (임시)",
    img: "flower_09_zinnia.png",
    sm: 6, sd: 25,   em: 10, ed: 10,
    guide: "",
    map: "",
    photo: ""
  },

  {
    id: "LILYTURF",
    name: "맥문동",
    place: "계양 맥문동 명소 (임시)",
    img: "flower_07_lilyturf.png",
    sm: 7, sd: 25,   em: 9, ed: 5,
    guide: "",
    map: "",
    photo: ""
  },

  {
    id: "COSMOS",
    name: "코스모스",
    place: "계양 코스모스 명소 (임시)",
    img: "flower_10_cosmos.png",
    sm: 9, sd: 1,   em: 10, ed: 25,
    guide: "",
    map: "",
    photo: ""
  },

  {
    id: "MUM",
    name: "국화",
    place: "계양 국화 명소 (임시)",
    img: "flower_11_mum.png",
    sm: 10, sd: 10,   em: 11, ed: 25,
    guide: "",
    map: "",
    photo: ""
  }

];

/* 겨울철(꽃이 없는 기간)에 보여줄 기본 카드. 보통은 안 건드려도 돼요. */
const WAITING = {
  id: "WAITING",
  name: "개화 대기",
  place: "계양산",
  img: "waiting_flower.png",
  guide: "꽃들이 잠을 자고 있어요. 다가올 봄을 기대하며 계양산 등산 어떠세요? ",
  map: "https://naver.me/Gj6XOEGG",
  photo: "https://gyeyang.photo/30"
};