/* Factual schedules cross-checked 17 Nov 2026. Coordinates are venue-level waypoints. */
window.BTS_GUIDE = (() => {
const sources = {
 article:'https://www.straitstimes.com/singapore/drone-shows-fireworks-among-activities-to-mark-bts-the-city-arirang-programme-in-singapore',
 official:'https://weverse.io/bts/notice/40721',
 stb:'https://www.stb.gov.sg/about-stb/media-publications/media-centre/-bts-the-city-arirang-singapore--expands-programme-and-welcomes-visa-as-official-partner-alongside-stb/',
 annex:'https://isomer-user-content.by.gov.sg/1/90435fad-cb2e-4e3b-a7e4-2a2ad99d2ecd/Annex%20-%20BTS%20THE%20CITY%20ARIRANG%20SINGAPORE%20Expands%20Programme%20and%20Welcomes%20Visa%20as%20Official%20Partner%20a.pdf',
 sentosa:'https://www.sentosa.com.sg/en/campaigns/btsthecityarirangsg/',
 rws:'https://www.rwsentosa.com/en/guide-to-fun/bts-singapore-the-city-arirang-resorts-world-sentosa-guide',
 gallery:'https://www.nationalgallery.sg/sg/en/about/media-centre/from-pop-art-to-pop-culture-national-gallery-singapore-unveils-bts-the-city-arirang.html',
 malls:'https://www.fareastmalls.com.sg/en/happenings/happenings-details?eventName=BTS+THE+CITY+HOLIDAY+ESCAPE+with+Far+East+Malls'
};
const areas = {bay:['Marina Bay','마리나 베이'],civic:['Civic District','시빅 디스트릭트'],sentosa:['Sentosa','센토사'],kallang:['Kallang','칼랑'],changi:['Changi','창이'],mandai:['Mandai','만다이'],river:['Clarke Quay / River Valley','클락 키 / 리버 밸리'],orchard:['Orchard','오차드']};
const venues = {
 gardens:['Gardens by the Bay · Supertree Grove','가든스 바이 더 베이 · 슈퍼트리 그로브',1.2816,103.8636,'bay'],
 jewel:['Jewel Changi Airport','주얼 창이공항',1.3602,103.9898,'changi'],
 mandai:['Mandai Wildlife Reserve · Exploria / East Plaza','만다이 야생동물 보호구역 · 익스플로리아 / 이스트 플라자',1.4043,103.7895,'mandai'],
 gallery:['National Gallery Singapore','내셔널 갤러리 싱가포르',1.2903,103.8519,'civic'],
 museum:['National Museum of Singapore','싱가포르 국립박물관',1.2966,103.8485,'civic'],
 uss:['Universal Studios Singapore','유니버설 스튜디오 싱가포르',1.254,103.8238,'sentosa'],
 convention:['Resorts World Convention Centre','리조트 월드 컨벤션 센터',1.2557,103.8219,'sentosa'],
 palawan:['Palawan Beach / Palawan Green','팔라완 비치 / 팔라완 그린',1.2492,103.8215,'sentosa'],
 bazaar:['Central Beach Bazaar','센트럴 비치 바자',1.2513,103.818,'sentosa'],
 sensory:['Sensoryscape','센서리스케이프',1.2531,103.819,'sentosa'],
 express:['Sentosa Express · Beach Station','센토사 익스프레스 · 비치역',1.2513,103.8197,'sentosa'],
 cable:['Sentosa Line · Imbiah Lookout','센토사 라인 · 임비아 룩아웃',1.2569,103.8176,'sentosa'],
 ora:['Hotel Ora','호텔 오라',1.2562,103.8213,'sentosa'],
 equarius:['Equarius Hotel','이쿼리우스 호텔',1.2575,103.8178,'sentosa'],
 laurus:['The Laurus','더 로러스',1.2581,103.8196,'sentosa'],
 stadium:['National Stadium','싱가포르 국립경기장',1.304,103.8747,'kallang'],
 riverside:['Stadium Riverside Walk','스타디움 리버사이드 워크',1.3014,103.8722,'kallang'],
 sphere:['Deloitte Sphere · OCBC Square','딜로이트 스피어 · OCBC 스퀘어',1.3028,103.8732,'kallang'],
 zouk:['Zouk Singapore','주크 싱가포르',1.2906,103.8462,'river'],
 funan:['Funan · Atrium & Rooftop','푸난 · 아트리움 & 루프톱',1.2913,103.8499,'civic'],
 fountain:['Clarke Quay Fountain Square','클락 키 파운틴 스퀘어',1.2906,103.8453,'river'],
 orchard:['Orchard Central','오차드 센트럴',1.3007,103.8398,'orchard'],
 central:['Clarke Quay Central','클락 키 센트럴',1.2888,103.8466,'river'],
 bahru:['New Bahru','뉴 바루',1.294,103.838,'river'],
 merlion:['Merlion Park','머라이언 파크',1.2868,103.8545,'bay'],
 acm:['Asian Civilisations Museum','아시아 문명 박물관',1.2875,103.8516,'civic'],
 peranakan:['Peranakan Museum','페라나칸 박물관',1.2944,103.849,'civic'],
 anderson:['Anderson Bridge','앤더슨 브리지',1.2869,103.8526,'river'],
 cavenagh:['Cavenagh Bridge','캐버나 브리지',1.2869,103.8515,'river'],
 clemenceau:['Clemenceau Bridge','클레망소 브리지',1.2906,103.8414,'river'],
 coleman:['Coleman Bridge','콜먼 브리지',1.289,103.8473,'river'],
 elgin:['Elgin Bridge','엘긴 브리지',1.2896,103.8486,'river'],
 ord:['Ord Bridge','오드 브리지',1.2911,103.8437,'river'],
 millenia:['Millenia Tower','밀레니아 타워',1.2935,103.8603,'bay'],
 oue:['OUE Bayfront','OUE 베이프런트',1.2835,103.8522,'bay'],
 flyer:['Singapore Flyer','싱가포르 플라이어',1.2893,103.8631,'bay'],
 fullerton:['The Fullerton Hotel','풀러턴 호텔',1.2863,103.853,'bay'],
 helix:['The Helix Bridge','헬릭스 브리지',1.2878,103.8606,'bay']
};
const categories = {all:['All experiences','전체 행사','✦','#9b83e9'],show:['Lights & shows','조명 & 쇼','✧','#bc9bff'],party:['Dance & parties','댄스 & 파티','♫','#f4a1c1'],experience:['Explore & play','체험 & 포토','◎','#91cfc7'],shop:['Shopping & dining','쇼핑 & 다이닝','◇','#e9c083'],stay:['Stay & travel','숙박 & 교통','↗','#a2baf4'],concert:['Concert','콘서트','Ⅱ','#f17686']};
const events=[];
function add(id,v,cat,title,start,end,time,desc,opts={}) {
 events.push({id,venue:v,category:cat,title,start:`2026-12-${String(start).padStart(2,'0')}`,end:typeof end==='string'?end:`2026-12-${String(end).padStart(2,'0')}`,time,description:desc,source:'official',...opts});
}
add('garden-show','gardens','show',['Supertrees, in BTS rhythm','BTS 음악으로 빛나는 슈퍼트리'],12,22,['21:35–21:50','21:35–21:50'],['Music and lights. Free from surrounding viewpoints; Christmas Wonderland admission needed inside the Grove.','음악과 조명이 만나는 밤. 주변 전망 지점은 무료이며 그로브 내부 관람은 크리스마스 원더랜드 입장권이 필요합니다.']);
add('garden-red','gardens','show',['Supertrees in Ari Red','아리 레드 슈퍼트리'],8,22,['23:00–01:00 (+1 day)','23:00–다음 날 01:00'],['Red illumination; late-night session.','슈퍼트리가 붉게 물드는 심야 조명 행사입니다.']);
add('jewel-show','jewel','show',['Rain Vortex light & music','레인 보텍스 빛과 음악'],1,26,['20:00 & 21:00','20:00 / 21:00'],['Watch from Forest Valley, levels 1–4.','포레스트 밸리 1~4층에서 관람할 수 있습니다.']);
add('jewel-photo','jewel','experience',['A welcome at Jewel','주얼의 BTS 웰컴 포토존'],1,26,['10:00–22:00','10:00–22:00'],['Level 4 photo stop and media displays.','4층 포토존과 미디어 전시를 만나보세요.']);
add('mandai-exploria','mandai','experience',['Exploria takeover','익스플로리아 테마 체험'],4,27,['Weekdays 12:00–20:00; weekends / holidays 11:00–21:00','평일 12:00–20:00 · 주말·공휴일 11:00–21:00'],['Immersive attraction; admission required. Last entry one hour before closing.','몰입형 어트랙션으로 입장권이 필요하며 마감 1시간 전 입장이 종료됩니다.']);
add('mandai-photo','mandai','experience',['East Plaza photo moments','이스트 플라자 포토존'],4,27,['08:30–00:00','08:30–24:00'],['Outside Singapore Zoo entrance.','싱가포르 동물원 입구 밖에 있습니다.']);
add('mandai-dine','mandai','shop',['Themed dining at OWA Bistro','OWA 비스트로 테마 다이닝'],1,31,['Dates & hours to confirm','정확한 날짜·시간 확인 필요'],['Announced for December; exact dining dates were not specified in the article or STB annex.','12월 행사로 발표되었으나 기사와 관광청 부록에는 식사 프로그램의 정확한 날짜가 명시되지 않았습니다.'],{source:'annex',tentative:true});
add('gallery-art','gallery','experience',['Pop art meets ARIRANG','팝아트와 ARIRANG의 만남'],11,31,['10:00–19:00','10:00–19:00'],['Art with music; trail ticket required. Stamp station accessible without a trail ticket.','음악과 함께 즐기는 아트 트레일. 트레일 입장권이 필요하며 스탬프 참여는 트레일 티켓 없이 가능합니다.'],{source:'gallery'});
add('gallery-rave','gallery','party',['Gallery after dark','갤러리 애프터 다크 레이브'],18,19,['20:00–23:00','20:00–23:00'],['Ticketed party in Singapore Courtyard.','싱가포르 코트야드에서 열리는 유료 파티입니다.'],{source:'gallery'});
add('gallery-dine','gallery','shop',['A taste of ARIRANG','ARIRANG 테마 메뉴'],11,31,['Restaurant hours vary','레스토랑별 영업시간 상이'],['At Bakery Brera, Rempapa and Milli.','베이커리 브레라, 렘파파, 밀리에서 즐길 수 있습니다.'],{source:'gallery'});
add('gallery-popup','gallery','shop',['ARIRANG merchandise pop-up','ARIRANG 공식 굿즈 팝업'],4,31,['Hours / entry: check organiser','운영시간·입장 방식: 공식 공지 확인'],['Official merchandise and visual installations at Supreme Court Terrace.','슈프림 코트 테라스의 공식 굿즈와 비주얼 전시입니다.'],{source:'gallery'});
add('museum-mirror','museum','experience',['Find your dance reflection','댄스 미러'],1,31,['10:00–19:00','10:00–19:00'],['Near outdoor Gemmill Fountain.','야외 젬밀 분수 근처에서 참여할 수 있습니다.']);
add('museum-red','museum','show',['Museum in red','붉게 물드는 국립박물관'],16,23,['19:30–00:00','19:30–24:00'],['Evening façade illumination.','박물관 외벽의 야간 조명입니다.']);
add('museum-dance','museum','party',['Random play dance','랜덤 플레이 댄스'],18,18,['19:30–21:30','19:30–21:30'],['Join KPOP Dance Off outside the museum.','박물관 야외에서 KPOP Dance Off와 함께 춤춰보세요.']);
add('uss-light','uss','show',['ARIRANG Lightscape','ARIRANG 라이트스케이프'],4,'2027-01-03',['From 19:30','19:30부터'],['Projection at Revenge of the Mummy; park ticket required.','미이라 어트랙션 외벽 프로젝션. 파크 입장권이 필요합니다.'],{source:'rws'});
const fireDates=[4,5,11,12,16,17,18,19,20,21,22,23,24,25].map(d=>`2026-12-${String(d).padStart(2,'0')}`).concat(['2027-01-01','2027-01-02']);
add('uss-fireworks','uss','show',['Fireworks over Lake Hollywood','레이크 할리우드 불꽃놀이'],4,'2027-01-02',['4, 5, 11, 12 Dec & 1, 2 Jan: 20:00; 16–25 Dec: 21:00, except 21 Dec: 23:45','12/4·5·11·12, 1/1·2: 20:00 · 12/16–25: 21:00 (12/21은 23:45)'],['Selected nights only. Park admission required; 21 Dec is the special Night Out session.','지정 날짜에만 진행합니다. 파크 입장이 필요하며 12월 21일은 나이트 아웃 특별 회차입니다.'],{dates:fireDates});
add('fan-village','convention','experience',['Meet at the Fan Village','팬 빌리지에서 만나요'],16,22,['11:00–22:00','11:00–22:00'],['Games, food, beauty and play; separate ticket required.','게임·음식·뷰티·놀이 공간. 별도 입장권이 필요합니다.'],{source:'rws'});
add('uss-night','uss','party',['One unforgettable Night Out','특별한 하룻밤, 나이트 아웃'],21,21,['20:00–01:00 (+1 day)','20:00–다음 날 01:00'],['Night rides and dance; event ticket required.','야간 놀이기구와 댄스 파티. 행사 티켓이 필요합니다.'],{source:'rws'});
add('sentosa-run','palawan','experience',['Run with ARMY','ARMY와 함께 달리기'],12,12,['15:30–22:30; race 17:00','15:30–22:30 · 레이스 17:00'],['Ticketed run with an after-race party.','러닝과 애프터 파티를 함께 즐기는 유료 행사입니다.'],{source:'sentosa'});
add('sentosa-drone','palawan','party',['Rave & drone-lit skies','레이브 & 드론 쇼'],18,20,['17:30–22:30; drones 20:30–20:40','17:30–22:30 · 드론 쇼 20:30–20:40'],['A beach party with a drone show; ticket required.','드론 쇼와 함께하는 해변 파티. 입장권이 필요합니다.'],{source:'sentosa'});
add('sentosa-inflatable','palawan','experience',['A giant ARIRANG moment','ARIRANG 대형 조형물'],4,31,['07:00–22:30','07:00–22:30'],['Giant inflatable by the beach.','해변의 대형 공기주입식 조형물입니다.'],{source:'sentosa'});
for (const [id,v] of [['palawan-photo','palawan'],['bazaar-photo','bazaar']]) add(id,v,'experience',['Island photo points','센토사 포토 포인트'],4,31,['07:00–22:30','07:00–22:30'],['Themed photo installations.','테마 포토존에서 추억을 남겨보세요.'],{source:'sentosa'});
add('hammock','sensory','experience',['Tape hammock installation','테이프 해먹 설치 작품'],4,31,['07:00–22:30','07:00–22:30'],['An installation along Sensoryscape.','센서리스케이프의 테마 설치 작품입니다.'],{source:'sentosa'});
add('cable-car','cable','stay',['ARIRANG above the island','하늘에서 만나는 ARIRANG'],4,31,['08:45–22:00','08:45–22:00'],['Themed cabins on the Sentosa Line; ticket required. Pin marks Imbiah Lookout station.','센토사 라인 테마 케이블카로 티켓이 필요합니다. 핀은 임비아 룩아웃역을 표시합니다.'],{source:'sentosa'});
add('express','express','stay',['Ride the Sentosa Express','센토사 익스프레스 테마 열차'],4,31,['07:00–00:00','07:00–24:00'],['Themed monorail; normal travel conditions apply. Pin marks Beach Station.','테마 모노레일로 일반 이용 조건이 적용됩니다. 핀은 비치역을 표시합니다.'],{source:'sentosa'});
for (const v of ['ora','equarius','laurus']) add(`stay-${v}`,v,'stay',[v==='laurus'?'Signature stay experience':'ARIRANG stay experience',v==='laurus'?'시그니처 숙박 체험':'ARIRANG 숙박 체험'],15,23,['Hotel reservation required','호텔 예약 필요'],['Themed hotel package; availability and inclusions vary.','테마 숙박 패키지의 이용 가능 여부와 포함 내역을 확인하세요.'],{source:'rws'});
add('kallang-zone','riverside','experience',['Feel Alive at The Kallang','칼랑 필 얼라이브 존'],9,22,['12:00–20:00','12:00–20:00'],['Fan chants, dance and photo experiences.','응원법·댄스·포토 체험을 즐겨보세요.']);
add('kallang-sphere','sphere','experience',['Step into the ARIRANG Sphere','ARIRANG 스피어'],8,22,['07:00–22:00','07:00–22:00'],['Multimedia at OCBC Square.','OCBC 스퀘어의 멀티미디어 콘텐츠입니다.']);
add('stadium-light','stadium','show',['National Stadium roof light-up','국립경기장 지붕 조명'],8,22,['From 19:30; selected dates','19:30부터 · 일부 날짜 제외'],['Some nights excluded; exact operating dates and times need confirmation.','일부 날짜는 제외되므로 정확한 운영일과 시간을 공식 공지에서 확인하세요.'],{tentative:true});
add('concert','stadium','concert',['BTS WORLD TOUR ‘ARIRANG’','BTS 월드투어 ‘ARIRANG’'],17,22,['See concert entry notice','공연 입장 공지 확인'],['Four shows. Tickets sold out.','총 4회 공연. 티켓은 매진되었습니다.'],{dates:[17,19,20,22].map(d=>`2026-12-${d}`)});
add('zouk-party','zouk','party',['Party in THE CITY','파티 인 더 시티'],16,23,['22:00–03:00 (+1 day)','22:00–다음 날 03:00'],['16 & 23 Dec only. Entry rules and capacity apply; consult Zouk for tickets.','12월 16일·23일에만 진행합니다. 입장 조건·수용 인원 제한과 티켓은 주크 공지를 확인하세요.'],{dates:['2026-12-16','2026-12-23']});
for (const v of ['funan','fountain','zouk']) add(`flash-${v}`,v,'party',['Flash mob & dance film programme','플래시몹 & 댄스 필름 프로그램'],9,9,['Session times to be announced','회차별 시간 미발표'],['Multi-site programme; performance or screening allocation and times to confirm.','여러 장소에서 진행하는 프로그램으로 장소별 공연·상영 배정과 시간은 확인이 필요합니다.'],{source:'annex'});
add('orchard-holiday','orchard','shop',['Holiday Escape','홀리데이 이스케이프'],1,31,['11:00–21:00','11:00–21:00'],['Photo zones and gifts with qualifying spend. Check redemption terms.','포토존과 구매 금액별 선물 행사. 증정 조건을 확인하세요.'],{source:'malls'});
add('central-holiday','central','shop',['Holiday Message Zone','홀리데이 메시지 존'],1,31,['11:00–21:00','11:00–21:00'],['Messages, keepsakes and qualifying-spend gifts.','메시지 남기기, 기념품과 구매 금액별 선물 행사를 즐겨보세요.'],{source:'malls'});
add('bahru-takeover','bahru','shop',['New Bahru, ARIRANG edition','뉴 바루 ARIRANG 테이크오버'],16,23,['Partner hours vary','매장별 영업시간 상이'],['Local brands, themed menus and photo spots.','로컬 브랜드의 테마 상품·메뉴와 포토존을 만나보세요.']);
for (const v of ['merlion','acm','peranakan','anderson','cavenagh','clemenceau','coleman','elgin','ord','millenia','oue','flyer','fullerton','helix']) add(`red-${v}`,v,'show',['Singapore in Ari Red','아리 레드로 빛나는 싱가포르'],8,22,['19:00–01:00 (+1 day)','19:00–다음 날 01:00'],['Part of the city landmark illumination. Access follows venue hours.','싱가포르 랜드마크 조명 행사의 일부입니다. 관람은 장소별 운영시간을 따릅니다.']);
return {sources,areas,venues,categories,events};
})();
