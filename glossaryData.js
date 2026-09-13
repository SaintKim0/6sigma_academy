var glossaryData = [
  {
    "id": "six-sigma",
    "term": "6시그마",
    "aliases": [
      "Six Sigma",
      "식스시그마"
    ],
    "category": "기초",
    "sortKo": "육시그마",
    "sortEn": "Six Sigma",
    "summary": "고객 규격 안에서 공정 변동(σ)을 줄여 장기 3.4 DPMO를 지향하는 품질·경영 혁신 방법론.",
    "lessons": [
      1
    ],
    "related": [
      "dpmo",
      "dmaic",
      "ctq"
    ],
    "detail": "<p>6시그마는 통계적 척도인 시그마(표준편차)를 활용해 프로세스 품질을 정량화하고, 불량 원인을 근본적으로 제거하는 전사적 접근입니다. “검사로 골라내기”가 아니라 <strong>변동을 줄여 불량이 안 나게</strong> 만듭니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">정규분포와 시그마 구간</div><div class=\"svg-wrap\"><svg viewBox=\"0 0 360 140\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 120 C60 120 80 30 180 30 C280 30 300 120 340 120\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"3\"/><line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"120\" stroke=\"#94A3B8\" stroke-dasharray=\"4 3\"/><text x=\"180\" y=\"135\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748B\">μ</text><text x=\"120\" y=\"135\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2563EB\">−1σ</text><text x=\"240\" y=\"135\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2563EB\">+1σ</text><text x=\"70\" y=\"100\" font-size=\"10\" fill=\"#0F766E\">68%</text><text x=\"55\" y=\"70\" font-size=\"10\" fill=\"#0F766E\">95%</text><text x=\"40\" y=\"50\" font-size=\"10\" fill=\"#0F766E\">99.7%</text></svg></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">핵심 숫자</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">3.4</span><span class=\"lbl\">DPMO (장기)</span></div><div class=\"kpi\"><span class=\"num\">±6σ</span><span class=\"lbl\">단기 목표 감각</span></div><div class=\"kpi\"><span class=\"num\">1.5σ</span><span class=\"lbl\">시프트 가정</span></div></div></div>\n<p>모토로라에서 창안되고 GE에서 경영 언어로 확산되었습니다. 제조뿐 아니라 서비스·IT·의료에도 적용됩니다.</p>\n<div class=\"chip-grid\"><span class=\"chip hot\">변동 감소</span><span class=\"chip\">고객 Spec</span><span class=\"chip\">DMAIC/DFSS</span><span class=\"chip\">벨트 체계</span></div>"
  },
  {
    "id": "dpmo",
    "term": "DPMO",
    "aliases": [
      "Defects Per Million Opportunities",
      "디피엠오"
    ],
    "category": "기초",
    "sortKo": "디피엠오",
    "sortEn": "DPMO",
    "summary": "백만 기회당 결함 수. 장기 6시그마 목표는 3.4 DPMO입니다.",
    "lessons": [
      1
    ],
    "related": [
      "six-sigma",
      "ctq"
    ],
    "detail": "<p>DPMO = (결함 수 ÷ (단위 수 × 기회 수)) × 1,000,000. 기회(Opportunity)는 단위당 결함이 날 수 있는 자리입니다.</p>\n<div class=\"formula\">DPMO = (D / (U × O)) × 10<sup>6</sup><small>D=결함, U=단위, O=기회</small></div>\n<div class=\"infograph\"><div class=\"ig-title\">시그마 감각</div><table class=\"mini-table\"><thead><tr><th>시그마(장기)</th><th>대략 DPMO</th></tr></thead><tbody><tr><td>6σ</td><td>3.4</td></tr><tr><td>5σ</td><td>233</td></tr><tr><td>4σ</td><td>6,210</td></tr><tr><td>3σ</td><td>66,807</td></tr></tbody></table></div>\n<p>장기 목표에 1.5σ Shift를 반영하는 것이 6시그마 관례입니다.</p>"
  },
  {
    "id": "sigma",
    "term": "시그마(σ)",
    "aliases": [
      "표준편차",
      "Sigma"
    ],
    "category": "기초",
    "sortKo": "시그마",
    "sortEn": "Sigma",
    "summary": "데이터의 산포(흩어짐)를 나타내는 표준편차. 작을수록 공정이 안정적입니다.",
    "lessons": [
      1,
      4,
      7
    ],
    "related": [
      "dpmo",
      "cpk"
    ],
    "detail": "<p>σ가 작으면 데이터가 평균 근처에 몰리고, 규격 안에 들어갈 확률이 높아집니다. 6시그마는 “평균만 맞추기”가 아니라 <strong>산포 자체를 줄이기</strong>에 초점을 둡니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">정규분포와 시그마 구간</div><div class=\"svg-wrap\"><svg viewBox=\"0 0 360 140\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 120 C60 120 80 30 180 30 C280 30 300 120 340 120\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"3\"/><line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"120\" stroke=\"#94A3B8\" stroke-dasharray=\"4 3\"/><text x=\"180\" y=\"135\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748B\">μ</text><text x=\"120\" y=\"135\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2563EB\">−1σ</text><text x=\"240\" y=\"135\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2563EB\">+1σ</text><text x=\"70\" y=\"100\" font-size=\"10\" fill=\"#0F766E\">68%</text><text x=\"55\" y=\"70\" font-size=\"10\" fill=\"#0F766E\">95%</text><text x=\"40\" y=\"50\" font-size=\"10\" fill=\"#0F766E\">99.7%</text></svg></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">평균 vs 산포</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>평균만 관리</h5><ul><li>중심은 맞지만 넓게 퍼짐</li><li>규격 이탈 잔존</li></ul></div><div class=\"compare-card good\"><h5>산포까지 관리</h5><ul><li>탄착군이 오밀조밀</li><li>규격 안 여유(σ) 확보</li></ul></div></div></div>"
  },
  {
    "id": "voc",
    "term": "VOC",
    "aliases": [
      "Voice of Customer",
      "고객의 목소리"
    ],
    "category": "고객",
    "sortKo": "브이오씨",
    "sortEn": "VOC",
    "summary": "고객이 원하고 불만하는 소리. 설·인터뷰·로그·행동 데이터로 수집합니다.",
    "lessons": [
      2
    ],
    "related": [
      "ctq",
      "kano",
      "qfd"
    ],
    "detail": "<p>내부 KPI가 좋아도 고객이 불편하면 품질 실패입니다. VOC는 프로젝트의 출발점입니다.</p>\n<div class=\"chip-grid\"><span class=\"chip hot\">설문</span><span class=\"chip\">심층 인터뷰</span><span class=\"chip\">FGI</span><span class=\"chip\">CS 로그</span><span class=\"chip\">현장 관찰</span><span class=\"chip\">NPS/리뷰</span></div>\n<div class=\"infograph\"><div class=\"ig-title\">VOC → 품질</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">VOC</div><div class=\"ladder-body\">고객 언어(빠르다, 편하다)</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">CTQ</div><div class=\"ladder-body\">측정 가능 특성으로 번역</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Spec</div><div class=\"ladder-body\">합격/불합격 경계</div></div></div></div>\n<p>말(설문)과 행동(이탈·재구매)을 함께 보세요.</p>"
  },
  {
    "id": "ctq",
    "term": "CTQ",
    "aliases": [
      "Critical to Quality",
      "핵심품질특성"
    ],
    "category": "고객",
    "sortKo": "씨티큐",
    "sortEn": "CTQ",
    "summary": "고객 관점에서 결정적인 품질 특성. 반드시 수치·스펙으로 정의합니다.",
    "lessons": [
      2,
      5
    ],
    "related": [
      "voc",
      "kano",
      "dmaic"
    ],
    "detail": "<p>좋은 CTQ 예: “배송 리드타임 ≤ 24시간”, “표면 긁힘 ≤ 0.1mm”. 나쁜 예: “품질을 좋게”, “사용하기 편하게”.</p>\n<div class=\"infograph\"><div class=\"ig-title\">CTQ 품질</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>나쁜 CTQ</h5><ul><li>형용사만 있음</li><li>측정 불가</li><li>합격선 없음</li></ul></div><div class=\"compare-card good\"><h5>좋은 CTQ</h5><ul><li>단위·수치 있음</li><li>측정 방법 명시</li><li>Spec 존재</li></ul></div></div></div>\n<div class=\"formula\">Y = f(X)<small>CTQ(Y)를 움직이는 원인(X)을 찾는 것이 프로젝트</small></div>"
  },
  {
    "id": "kano",
    "term": "Kano 모델",
    "aliases": [
      "카노",
      "Kano"
    ],
    "category": "고객",
    "sortKo": "카노모델",
    "sortEn": "Kano Model",
    "summary": "고객 요구를 당연적·일원적·매력적으로 나누어 우선순위를 정하는 모델.",
    "lessons": [
      2
    ],
    "related": [
      "voc",
      "ctq"
    ],
    "detail": "<p>모든 VOC를 같은 무게로 다루면 자원이 흩어집니다. Kano로 “없으면 불만 / 많을수록 만족 / 있으면 감동”을 구분합니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">Kano 3유형</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">당연적</div><div class=\"ladder-body\">Must-be — 없으면 불만, 있어도 감동 적음</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">일원적</div><div class=\"ladder-body\">One-dimensional — 성능에 비례해 만족</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">매력적</div><div class=\"ladder-body\">Attractive — 없어도 불만 적고, 있으면 감동</div></div></div></div>\n<p>매력적은 시간이 지나면 당연적으로 변합니다. 지속 관찰이 필요합니다.</p>"
  },
  {
    "id": "sipoc",
    "term": "SIPOC",
    "aliases": [
      "사이폭"
    ],
    "category": "린·시각화",
    "sortKo": "사이폭",
    "sortEn": "SIPOC",
    "summary": "Supplier–Input–Process–Output–Customer. 프로젝트 경계를 5~7단계로 요약하는 거시 맵.",
    "lessons": [
      3,
      5
    ],
    "related": [
      "vsm",
      "dmaic"
    ],
    "detail": "<p>세부 플로우차트 전에 SIPOC으로 “무엇을 다루고 무엇을 빼둘지”를 합의합니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">SIPOC</div><div class=\"flow-row\"><div class=\"flow-step\">S<br>공급자</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">I<br>투입</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">P<br>공정</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">O<br>산출</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">C<br>고객</div></div></div>\n<ul><li><strong>S:</strong> 자재·정보 제공자</li><li><strong>I:</strong> 투입물·데이터</li><li><strong>P:</strong> 변환 단계(5~7)</li><li><strong>O:</strong> 산출물</li><li><strong>C:</strong> 내·외부 고객</li></ul>"
  },
  {
    "id": "vsm",
    "term": "VSM",
    "aliases": [
      "가치흐름도",
      "Value Stream Mapping"
    ],
    "category": "린·시각화",
    "sortKo": "가치흐름도",
    "sortEn": "VSM",
    "summary": "주문부터 인도까지 흐름을 그려 VA/NVA를 분리하는 린의 핵심 도구.",
    "lessons": [
      3
    ],
    "related": [
      "sipoc",
      "lean",
      "muda"
    ],
    "detail": "<p>VSM은 Lead Time을 늘리는 대기·재고·핸드오프를 한눈에 보여 줍니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">가치 vs 낭비 시간</div><div class=\"svg-wrap\"><svg viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"30\" width=\"50\" height=\"28\" rx=\"4\" fill=\"#10B981\"/><text x=\"35\" y=\"48\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\" font-weight=\"700\">VA</text><rect x=\"70\" y=\"30\" width=\"90\" height=\"28\" rx=\"4\" fill=\"#FCA5A5\"/><text x=\"115\" y=\"48\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7F1D1D\">대기 NVA</text><rect x=\"170\" y=\"30\" width=\"45\" height=\"28\" rx=\"4\" fill=\"#10B981\"/><text x=\"192\" y=\"48\" text-anchor=\"middle\" font-size=\"11\" fill=\"#fff\" font-weight=\"700\">VA</text><rect x=\"225\" y=\"30\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#FCA5A5\"/><text x=\"260\" y=\"48\" text-anchor=\"middle\" font-size=\"11\" fill=\"#7F1D1D\">운반</text><rect x=\"305\" y=\"30\" width=\"25\" height=\"28\" rx=\"4\" fill=\"#10B981\"/><text x=\"10\" y=\"78\" font-size=\"11\" fill=\"#64748B\">Lead Time = VA + NVA (대부분 NVA)</text></svg></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">시간 분해</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">VA</span><span class=\"lbl\">부가가치</span></div><div class=\"kpi\"><span class=\"num\">필요 NVA</span><span class=\"lbl\">법·필수</span></div><div class=\"kpi\"><span class=\"num\">순수 NVA</span><span class=\"lbl\">없앨 낭비</span></div></div></div>\n<p>개선 아이디어보다 먼저 “현재 상태 맵”을 그려야 부분 최적화를 피할 수 있습니다.</p>"
  },
  {
    "id": "lean",
    "term": "린(Lean)",
    "aliases": [
      "Lean",
      "린 생산"
    ],
    "category": "린·시각화",
    "sortKo": "린",
    "sortEn": "Lean",
    "summary": "낭비(Muda)를 제거해 Lead Time과 흐름을 개선하는 방법론. 6시그마와 결합하면 린 6시그마.",
    "lessons": [
      3,
      5
    ],
    "related": [
      "muda",
      "vsm",
      "lss"
    ],
    "detail": "<p>6시그마가 불량·변동을 줄인다면, 린은 <strong>속도</strong>를 높입니다. 둘은 경쟁이 아니라 보완 관계입니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">초점 비교</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>6시그마</h5><ul><li>Defect·Variation</li><li>통계·실험</li><li>Cpk·DPMO</li></ul></div><div class=\"compare-card good\"><h5>린</h5><ul><li>Waste·Flow</li><li>VSM·5S·칸반</li><li>Lead Time</li></ul></div></div></div>\n<div class=\"chip-grid\"><span class=\"chip hot\">7대 낭비</span><span class=\"chip\">5S</span><span class=\"chip\">포카요케</span><span class=\"chip\">풀(Pull)</span><span class=\"chip\">지속 개선</span></div>"
  },
  {
    "id": "muda",
    "term": "7대 낭비(Muda)",
    "aliases": [
      "낭비",
      "Seven Wastes"
    ],
    "category": "린·시각화",
    "sortKo": "칠대낭비",
    "sortEn": "Muda",
    "summary": "과잉생산·대기·운반·과잉가공·재고·동작·불량. 린이 제거하려는 비부가가치.",
    "lessons": [
      3
    ],
    "related": [
      "lean",
      "vsm"
    ],
    "detail": "<p>낭비는 “바쁜데 가치가 없는 일”입니다. 과잉생산이 재고·운반·불량을 연쇄로 키우는 경우가 많습니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">7대 낭비</div><table class=\"mini-table\"><thead><tr><th>낭비</th><th>한 줄</th></tr></thead><tbody><tr><td>과잉생산</td><td>필요 이상·먼저 만들기</td></tr><tr><td>대기</td><td>사람·자재·정보 멈춤</td></tr><tr><td>운반</td><td>가치 없는 이동</td></tr><tr><td>과잉가공</td><td>고객이 안 원하는 과도 스펙</td></tr><tr><td>재고</td><td>문제 가림·현금 묶임</td></tr><tr><td>동작</td><td>불필요 손·몸 움직임</td></tr><tr><td>불량</td><td>재작업·폐기·클레임</td></tr></tbody></table></div>"
  },
  {
    "id": "five-s",
    "term": "5S",
    "aliases": [
      "오에스",
      "정리정돈"
    ],
    "category": "린·시각화",
    "sortKo": "오에스",
    "sortEn": "5S",
    "summary": "정리·정돈·청소·청결·습관화. 눈으로 보는 관리의 기초.",
    "lessons": [
      3
    ],
    "related": [
      "lean",
      "poka-yoke"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">5S</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">1S</div><div class=\"ladder-body\">정리(Sort) — 불필요 제거</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">2S</div><div class=\"ladder-body\">정돈(Set) — 위치 표준</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">3S</div><div class=\"ladder-body\">청소(Shine) — 이상 드러내기</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">4S</div><div class=\"ladder-body\">청결(Standardize) — 기준화</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">5S</div><div class=\"ladder-body\">습관화(Sustain) — 지속</div></div></div></div>\n<p>5S의 목적은 예쁨이 아니라 <strong>10초 안에 정상/이상을 구별</strong>하는 것입니다.</p>"
  },
  {
    "id": "poka-yoke",
    "term": "포카요케",
    "aliases": [
      "Poka-Yoke",
      "풀프루프",
      "오류방지"
    ],
    "category": "린·시각화",
    "sortKo": "포카요케",
    "sortEn": "Poka-Yoke",
    "summary": "실수해도 결함이 되지 않게, 또는 즉시 검출되게 구조를 만드는 실수 방지 설계.",
    "lessons": [
      3,
      12
    ],
    "related": [
      "lean",
      "fmea"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">유형</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>방지형</h5><ul><li>실수 자체를 불가능하게</li><li>키잉·인터록·필수 필드</li></ul></div><div class=\"compare-card good\"><h5>검출형</h5><ul><li>실수 즉시 감지·정지</li><li>센서·바코드 검증</li></ul></div></div></div>\n<p>“교육으로 실수 없애기”보다 “실수해도 불량이 안 나오게”가 린의 정신에 가깝습니다.</p>"
  },
  {
    "id": "dmaic",
    "term": "DMAIC",
    "aliases": [
      "디마이크"
    ],
    "category": "로드맵",
    "sortKo": "디마이크",
    "sortEn": "DMAIC",
    "summary": "Define–Measure–Analyze–Improve–Control. 기존 프로세스 개선의 표준 로드맵.",
    "lessons": [
      5
    ],
    "related": [
      "dfss",
      "dmadv",
      "lss"
    ],
    "detail": "<p>이미 돌아가는 공정·서비스의 결함·산포를 줄일 때 씁니다. 각 단계에 산출물이 있고 게이트 리뷰를 거칩니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">DMAIC</div><div class=\"flow-row\"><div class=\"flow-step accent\">D</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">M</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">A</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">I</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">C</div></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">단계 산출물</div><table class=\"mini-table\"><thead><tr><th>단계</th><th>대표 산출물</th></tr></thead><tbody><tr><td>D</td><td>Charter, SIPOC, CTQ</td></tr><tr><td>M</td><td>MSA, Baseline</td></tr><tr><td>A</td><td>Vital Few, 가설검정</td></tr><tr><td>I</td><td>DOE, Pilot</td></tr><tr><td>C</td><td>Control Plan, SPC</td></tr></tbody></table></div>\n<p>신규 설계가 목적이면 DFSS(DMADV 등)를 선택하세요.</p>"
  },
  {
    "id": "charter",
    "term": "프로젝트 차터",
    "aliases": [
      "Project Charter",
      "헌장"
    ],
    "category": "로드맵",
    "sortKo": "프로젝트차터",
    "sortEn": "Project Charter",
    "summary": "Define의 핵심 문서. 문제·CTQ·범위·팀·기대효과·일정을 합의합니다. 해결책은 넣지 않습니다.",
    "lessons": [
      5
    ],
    "related": [
      "dmaic",
      "ctq"
    ],
    "detail": "<div class=\"chip-grid\"><span class=\"chip hot\">Problem Statement</span><span class=\"chip\">CTQ/Goal</span><span class=\"chip\">Scope In/Out</span><span class=\"chip\">Team & Roles</span><span class=\"chip\">재무 효과</span><span class=\"chip\">마일스톤</span></div>\n<div class=\"warn-box\"><strong>넣지 말 것:</strong> Final Solution. 해결책은 Analyze·Improve 이후입니다.</div>"
  },
  {
    "id": "vital-few",
    "term": "Vital Few",
    "aliases": [
      "핵심소수원인",
      "바이탈퓨"
    ],
    "category": "로드맵",
    "sortKo": "바이탈퓨",
    "sortEn": "Vital Few",
    "summary": "결과에 치명적인 소수 핵심 원인. Analyze에서 통계로 입증합니다.",
    "lessons": [
      5,
      8
    ],
    "related": [
      "dmaic",
      "hypothesis"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">원인 압축</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">Many</div><div class=\"ladder-body\">브레인스토밍의 다수 X</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Few</div><div class=\"ladder-body\">파레토·데이터로 축소</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Vital</div><div class=\"ladder-body\">가설검정으로 입증</div></div></div></div>\n<p>“모두가 원인”이면 개선 자원이 흩어집니다. Vital Few에 집중하세요.</p>"
  },
  {
    "id": "msa",
    "term": "MSA",
    "aliases": [
      "측정시스템분석",
      "Measurement System Analysis"
    ],
    "category": "측정",
    "sortKo": "엠에스에이",
    "sortEn": "MSA",
    "summary": "관측 변동이 실제 공정 변동인지, 측정 오차인지 분리해 검증하는 분석.",
    "lessons": [
      6
    ],
    "related": [
      "gage-rr",
      "dmaic"
    ],
    "detail": "<p>GIGO: 나쁜 데이터로는 좋은 분석이 불가능합니다. Measure에서 MSA를 건너뛰면 이후가 흔들립니다.</p>\n<div class=\"infograph\"><div class=\"ig-title\">정확성 vs 정밀성</div><div class=\"svg-wrap\"><svg viewBox=\"0 0 320 140\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"80\" cy=\"70\" r=\"40\" fill=\"none\" stroke=\"#CBD5E1\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"70\" r=\"22\" fill=\"none\" stroke=\"#CBD5E1\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"70\" r=\"3\" fill=\"#EF4444\"/><circle cx=\"95\" cy=\"55\" r=\"4\" fill=\"#2563EB\"/><circle cx=\"100\" cy=\"80\" r=\"4\" fill=\"#2563EB\"/><circle cx=\"70\" cy=\"90\" r=\"4\" fill=\"#2563EB\"/><text x=\"80\" y=\"130\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748B\">정밀↓ 정확↓</text><circle cx=\"240\" cy=\"70\" r=\"40\" fill=\"none\" stroke=\"#CBD5E1\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"70\" r=\"22\" fill=\"none\" stroke=\"#CBD5E1\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"70\" r=\"3\" fill=\"#EF4444\"/><circle cx=\"238\" cy=\"68\" r=\"4\" fill=\"#10B981\"/><circle cx=\"242\" cy=\"72\" r=\"4\" fill=\"#10B981\"/><circle cx=\"236\" cy=\"72\" r=\"4\" fill=\"#10B981\"/><text x=\"240\" y=\"130\" text-anchor=\"middle\" font-size=\"11\" fill=\"#64748B\">정밀↑ 정확↑</text></svg></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">정확성·정밀성</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>정확성</h5><ul><li>참값에 평균이 가까운지</li><li>치우침·선형성</li></ul></div><div class=\"compare-card good\"><h5>정밀성</h5><ul><li>반복값이 오밀조밀한지</li><li>반복성·재현성</li></ul></div></div></div>"
  },
  {
    "id": "gage-rr",
    "term": "Gage R&R",
    "aliases": [
      "게이지알앤알",
      "반복성재현성"
    ],
    "category": "측정",
    "sortKo": "게이지알앤알",
    "sortEn": "Gage R and R",
    "summary": "측정기의 반복성(EV)과 재현성(AV)을 평가. %Study Var &lt;10% 우수, &gt;30% 불합격.",
    "lessons": [
      6
    ],
    "related": [
      "msa"
    ],
    "detail": "<div class=\"formula\">%Study Variation<small>측정오차가 총 관측변동에서 차지하는 비율</small></div>\n<div class=\"infograph\"><div class=\"ig-title\">판정 기준</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">&lt;10%</span><span class=\"lbl\">우수</span></div><div class=\"kpi\"><span class=\"num\">10–30%</span><span class=\"lbl\">조건부</span></div><div class=\"kpi\"><span class=\"num\">>30%</span><span class=\"lbl\">즉시 개선</span></div></div></div>\n<p>사람·방법·환경·소프트웨어도 측정 시스템의 일부입니다.</p>"
  },
  {
    "id": "cp",
    "term": "Cp",
    "aliases": [
      "잠재공정능력"
    ],
    "category": "공정능력",
    "sortKo": "씨피",
    "sortEn": "Cp",
    "summary": "치우침을 무시하고 산포만 본 잠재 공정능력. Cpk ≤ Cp.",
    "lessons": [
      7
    ],
    "related": [
      "cpk"
    ],
    "detail": "<div class=\"formula\">Cp = (USL − LSL) / (6σ)<small>규격폭 ÷ 공정 산포</small></div>\n<p>Cp가 높아도 평균이 치우치면 실제 불량이 납니다. 반드시 Cpk와 함께 보세요.</p>"
  },
  {
    "id": "cpk",
    "term": "Cpk",
    "aliases": [
      "실제공정능력"
    ],
    "category": "공정능력",
    "sortKo": "씨피케이",
    "sortEn": "Cpk",
    "summary": "치우침까지 반영한 단기 공정능력. 실무 합격선으로 1.33, 6시그마급은 약 2.0.",
    "lessons": [
      7
    ],
    "related": [
      "cp",
      "dpmo"
    ],
    "detail": "<div class=\"formula\">Cpk = min( (USL−μ)/3σ , (μ−LSL)/3σ )<small>규격까지 더 가까운 쪽 기준</small></div>\n<div class=\"infograph\"><div class=\"ig-title\">목표 감각</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">&lt;1.0</span><span class=\"lbl\">위험</span></div><div class=\"kpi\"><span class=\"num\">1.33</span><span class=\"lbl\">≈4σ 양호</span></div><div class=\"kpi\"><span class=\"num\">2.0</span><span class=\"lbl\">≈6σ</span></div></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">해석</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>Cp↑ Cpk↓</h5><ul><li>산포는 좋은데 치우침</li><li>센터링 시급</li></ul></div><div class=\"compare-card good\"><h5>둘 다 낮음</h5><ul><li>산포 자체가 큼</li><li>변동 감소 필요</li></ul></div></div></div>"
  },
  {
    "id": "hypothesis",
    "term": "가설검정",
    "aliases": [
      "Hypothesis Testing",
      "p-value"
    ],
    "category": "통계",
    "sortKo": "가설검정",
    "sortEn": "Hypothesis Testing",
    "summary": "H0/H1을 세우고 데이터로 기각 여부를 결정. Analyze의 Vital Few 입증 도구.",
    "lessons": [
      8
    ],
    "related": [
      "pvalue",
      "type-errors",
      "anova"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">검정 흐름</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">1</div><div class=\"ladder-body\">H0(차이 없음) / H1(차이 있음)</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">2</div><div class=\"ladder-body\">데이터·검정통계량</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">3</div><div class=\"ladder-body\">p-value와 α 비교</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">4</div><div class=\"ladder-body\">기각 또는 기각 못함</div></div></div></div>\n<p>기각 못함 ≠ “효과 없음 증명”. 증거가 부족하다는 뜻입니다.</p>"
  },
  {
    "id": "pvalue",
    "term": "p-value",
    "aliases": [
      "피값",
      "유의확률"
    ],
    "category": "통계",
    "sortKo": "피값",
    "sortEn": "p-value",
    "summary": "H0가 참일 때 이런 결과가 나올 확률. 보통 α=0.05보다 작으면 H0 기각.",
    "lessons": [
      8
    ],
    "related": [
      "hypothesis",
      "type-errors"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">판정</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">p≤α</span><span class=\"lbl\">H0 기각</span></div><div class=\"kpi\"><span class=\"num\">p>α</span><span class=\"lbl\">기각 못함</span></div><div class=\"kpi\"><span class=\"num\">α</span><span class=\"lbl\">보통 0.05</span></div></div></div>\n<p>p가 작다고 실무 효과가 크다는 뜻은 아닙니다. 효과 크기·신뢰구간도 함께 보세요.</p>"
  },
  {
    "id": "type-errors",
    "term": "Type I / Type II",
    "aliases": [
      "제1종오류",
      "제2종오류",
      "알파베타"
    ],
    "category": "통계",
    "sortKo": "제일종오류",
    "sortEn": "Type I Type II Error",
    "summary": "Type I(α): 없는데 있다고 오판(생산자 위험). Type II(β): 있는데 없다고 오판(소비자 위험).",
    "lessons": [
      8
    ],
    "related": [
      "hypothesis",
      "pvalue"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">두 오류</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>Type I (α)</h5><ul><li>정상→불량 오판</li><li>생산자 위험</li><li>α로 통제</li></ul></div><div class=\"compare-card good\"><h5>Type II (β)</h5><ul><li>불량→정상 오판</li><li>소비자 위험</li><li>검정력=1−β</li></ul></div></div></div>\n<p>α를 너무 조이면 β가 커질 수 있습니다. 표본수와 함께 균형을 설계하세요.</p>"
  },
  {
    "id": "anova",
    "term": "ANOVA",
    "aliases": [
      "분산분석",
      "에이노바"
    ],
    "category": "통계",
    "sortKo": "아노바",
    "sortEn": "ANOVA",
    "summary": "세 그룹 이상 평균 차이를 동시에 검정. 두 그룹이면 t-test.",
    "lessons": [
      8,
      10
    ],
    "related": [
      "hypothesis",
      "doe"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">선택</div><table class=\"mini-table\"><thead><tr><th>비교</th><th>도구</th></tr></thead><tbody><tr><td>2개 평균</td><td>t-test</td></tr><tr><td>3개 이상 평균</td><td>ANOVA</td></tr><tr><td>인자 실험</td><td>DOE + ANOVA</td></tr></tbody></table></div>\n<p>유의하면 사후검정으로 어느 쌍이 다른지 확인합니다.</p>"
  },
  {
    "id": "qc7",
    "term": "QC 7도구",
    "aliases": [
      "품질7도구",
      "QC7"
    ],
    "category": "통계",
    "sortKo": "큐씨칠도구",
    "sortEn": "QC Seven Tools",
    "summary": "파레토·특성요인도·산점도·히스토그램·관리도·체크시트·층별. 현장 문제 시각화 기초.",
    "lessons": [
      4
    ],
    "related": [
      "pareto",
      "spc"
    ],
    "detail": "<div class=\"chip-grid\"><span class=\"chip hot\">파레토</span><span class=\"chip\">특성요인도</span><span class=\"chip\">산점도</span><span class=\"chip\">히스토그램</span><span class=\"chip\">관리도</span><span class=\"chip\">체크시트</span><span class=\"chip\">층별</span></div>\n<p>복잡한 소프트웨어 전에, QC7으로 “무엇이 큰 문제인지”를 먼저 보이게 하세요.</p>"
  },
  {
    "id": "pareto",
    "term": "파레토",
    "aliases": [
      "Pareto",
      "80/20"
    ],
    "category": "통계",
    "sortKo": "파레토",
    "sortEn": "Pareto",
    "summary": "빈도·영향 순으로 막대를 세워 Vital Few 문제를 찾는 차트.",
    "lessons": [
      4,
      5
    ],
    "related": [
      "qc7",
      "vital-few"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">활용</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">집계</div><div class=\"ladder-body\">불량·클레임 유형별 건수</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">정렬</div><div class=\"ladder-body\">큰 것부터 막대</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">집중</div><div class=\"ladder-body\">상위 20% 원인에 자원</div></div></div></div>\n<p>파레토는 “느낌의 우선순위”를 데이터 우선순위로 바꿉니다.</p>"
  },
  {
    "id": "correlation",
    "term": "상관분석",
    "aliases": [
      "Correlation",
      "상관계수"
    ],
    "category": "통계",
    "sortKo": "상관분석",
    "sortEn": "Correlation",
    "summary": "두 변수가 함께 움직이는 정도(r). 상관 ≠ 인과.",
    "lessons": [
      9
    ],
    "related": [
      "regression"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">r 감각</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">≈0</span><span class=\"lbl\">무상관</span></div><div class=\"kpi\"><span class=\"num\">±0.7</span><span class=\"lbl\">강한 상관</span></div><div class=\"kpi\"><span class=\"num\">±1</span><span class=\"lbl\">완전</span></div></div></div>\n<div class=\"warn-box\"><strong>위험:</strong> 상관만 보고 원인으로 단정하면 잘못된 처방이 나옵니다. 실험·도메인 지식으로 인과를 확인하세요.</div>"
  },
  {
    "id": "regression",
    "term": "회귀분석",
    "aliases": [
      "Regression",
      "다중회귀"
    ],
    "category": "통계",
    "sortKo": "회귀분석",
    "sortEn": "Regression",
    "summary": "Y를 X들로 설명·예측하는 모형. R²·VIF·잔차 진단이 중요.",
    "lessons": [
      9
    ],
    "related": [
      "correlation",
      "doe"
    ],
    "detail": "<div class=\"formula\">Y = β0 + β1X1 + … + ε<small>계수 부호·크기로 우선순위 힌트</small></div>\n<div class=\"chip-grid\"><span class=\"chip hot\">R² / Adj R²</span><span class=\"chip\">VIF(다중공선성)</span><span class=\"chip\">잔차 정규·등분산</span><span class=\"chip\">Cook 거리</span></div>\n<p>출력의 별표보다 <strong>현장에서 조절 가능한 X</strong>인지가 더 중요합니다.</p>"
  },
  {
    "id": "doe",
    "term": "DOE",
    "aliases": [
      "실험계획법",
      "Design of Experiments"
    ],
    "category": "실험",
    "sortKo": "디오이",
    "sortEn": "DOE",
    "summary": "인자를 교차 배치해 주효과·교호작용을 효율적으로 추정하는 실험 설계.",
    "lessons": [
      10
    ],
    "related": [
      "anova",
      "regression",
      "dmadv"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">OFAT vs DOE</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>OFAT</h5><ul><li>한 번에 하나</li><li>교호 못 봄</li><li>횟수 폭증</li></ul></div><div class=\"compare-card good\"><h5>DOE</h5><ul><li>교차 조합</li><li>주효과+교호</li><li>효율적</li></ul></div></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">실무 순서</div><div class=\"flow-row\"><div class=\"flow-step\">스크리닝</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">요인배치</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">RSM</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">확인</div></div></div>\n<p>Improve의 핵심 무기다. DFSS Optimize에도 동일하게 씁니다.</p>"
  },
  {
    "id": "spc",
    "term": "SPC",
    "aliases": [
      "통계적공정관리",
      "Statistical Process Control"
    ],
    "category": "관리",
    "sortKo": "에스피씨",
    "sortEn": "SPC",
    "summary": "관리도로 공정을 실시간·정기 감시해 이상원인을 조기에 잡는 관리 체계.",
    "lessons": [
      11,
      5
    ],
    "related": [
      "control-chart",
      "control-plan"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">관리도와 한계선</div><div class=\"svg-wrap\"><svg viewBox=\"0 0 340 130\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"25\" x2=\"320\" y2=\"25\" stroke=\"#EF4444\" stroke-dasharray=\"5 4\"/><text x=\"325\" y=\"29\" font-size=\"10\" fill=\"#EF4444\">UCL</text><line x1=\"40\" y1=\"70\" x2=\"320\" y2=\"70\" stroke=\"#64748B\"/><text x=\"325\" y=\"74\" font-size=\"10\" fill=\"#64748B\">CL</text><line x1=\"40\" y1=\"115\" x2=\"320\" y2=\"115\" stroke=\"#EF4444\" stroke-dasharray=\"5 4\"/><text x=\"325\" y=\"119\" font-size=\"10\" fill=\"#EF4444\">LCL</text><polyline points=\"50,75 80,68 110,72 140,60 170,78 200,65 230,70 260,40 290,68\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2.5\"/><circle cx=\"260\" cy=\"40\" r=\"5\" fill=\"#EF4444\"/></svg></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">한계의 의미</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>관리한계</h5><ul><li>공정 데이터 ±3σ</li><li>우리 공정의 자연 변동</li></ul></div><div class=\"compare-card good\"><h5>규격한계</h5><ul><li>고객·도면 요구</li><li>능력(Cpk)과 연결</li></ul></div></div></div>\n<p>관리상태(안정)와 공정능력(Cpk)은 따로 평가합니다.</p>"
  },
  {
    "id": "control-chart",
    "term": "관리도",
    "aliases": [
      "Control Chart",
      "Xbar-R"
    ],
    "category": "관리",
    "sortKo": "관리도",
    "sortEn": "Control Chart",
    "summary": "시간순 타점으로 UCL/CL/LCL을 감시. 이탈·런·트렌드는 이상원인 신호.",
    "lessons": [
      11
    ],
    "related": [
      "spc"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">관리도와 한계선</div><div class=\"svg-wrap\"><svg viewBox=\"0 0 340 130\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"25\" x2=\"320\" y2=\"25\" stroke=\"#EF4444\" stroke-dasharray=\"5 4\"/><text x=\"325\" y=\"29\" font-size=\"10\" fill=\"#EF4444\">UCL</text><line x1=\"40\" y1=\"70\" x2=\"320\" y2=\"70\" stroke=\"#64748B\"/><text x=\"325\" y=\"74\" font-size=\"10\" fill=\"#64748B\">CL</text><line x1=\"40\" y1=\"115\" x2=\"320\" y2=\"115\" stroke=\"#EF4444\" stroke-dasharray=\"5 4\"/><text x=\"325\" y=\"119\" font-size=\"10\" fill=\"#EF4444\">LCL</text><polyline points=\"50,75 80,68 110,72 140,60 170,78 200,65 230,70 260,40 290,68\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2.5\"/><circle cx=\"260\" cy=\"40\" r=\"5\" fill=\"#EF4444\"/></svg></div></div>\n<div class=\"chip-grid\"><span class=\"chip hot\">한계선 이탈</span><span class=\"chip\">런(한쪽 연속)</span><span class=\"chip\">트렌드</span><span class=\"chip\">주기성</span><span class=\"chip\">2/3점이 2σ 밖</span></div>\n<p>점이 한계 안이어도 패턴 이상이면 조사합니다.</p>"
  },
  {
    "id": "control-plan",
    "term": "관리계획서",
    "aliases": [
      "Control Plan"
    ],
    "category": "관리",
    "sortKo": "관리계획서",
    "sortEn": "Control Plan",
    "summary": "누가·언제·무엇을 측정하고 이상 시 어떻게 조치할지 명시한 Control 산출물.",
    "lessons": [
      5,
      12
    ],
    "related": [
      "spc",
      "fmea"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">구성</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">무엇</div><div class=\"ladder-body\">CTQ·공정 파라미터</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">누가</div><div class=\"ladder-body\">담당·교대 책임</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">언제</div><div class=\"ladder-body\">주기·샘플 크기</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">조치</div><div class=\"ladder-body\">이탈 시 표준 대응</div></div></div></div>\n<p>개선은 이벤트가 아니라 새로운 일상이어야 합니다.</p>"
  },
  {
    "id": "fmea",
    "term": "FMEA",
    "aliases": [
      "고장모드영향분석",
      "Failure Mode"
    ],
    "category": "리스크",
    "sortKo": "에프엠이에이",
    "sortEn": "FMEA",
    "summary": "잠재 고장모드의 심각도·발생·검출을 점수화(RPN)해 예방조치를 설계에 반영.",
    "lessons": [
      12,
      13
    ],
    "related": [
      "rpn",
      "poka-yoke",
      "dfss"
    ],
    "detail": "<div class=\"formula\">RPN = S × O × D<small>Severity × Occurrence × Detection</small></div>\n<div class=\"infograph\"><div class=\"ig-title\">점수 축</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">S</span><span class=\"lbl\">심각도</span></div><div class=\"kpi\"><span class=\"num\">O</span><span class=\"lbl\">발생</span></div><div class=\"kpi\"><span class=\"num\">D</span><span class=\"lbl\">검출난이도</span></div></div></div>\n<p>점수 놀이보다 <strong>높은 RPN 항목의 조치</strong>가 목적입니다.</p>"
  },
  {
    "id": "rpn",
    "term": "RPN",
    "aliases": [
      "Risk Priority Number"
    ],
    "category": "리스크",
    "sortKo": "알피엔",
    "sortEn": "RPN",
    "summary": "FMEA에서 S×O×D로 산출하는 위험 우선순위 점수.",
    "lessons": [
      12
    ],
    "related": [
      "fmea"
    ],
    "detail": "<p>절대 기준선은 조직마다 다르지만, 상위 RPN부터 포카요케·검사·설계 변경으로 낮춥니다. 조치 후 RPN을 재평가하세요.</p>"
  },
  {
    "id": "dfss",
    "term": "DFSS",
    "aliases": [
      "Design for Six Sigma",
      "디이에프에스에스"
    ],
    "category": "로드맵",
    "sortKo": "디이에프에스에스",
    "sortEn": "DFSS",
    "summary": "신규 제품·서비스·시스템을 설계 단계부터 고품질로 만드는 방법론군. DMADV·IDOV 등.",
    "lessons": [
      13,
      5
    ],
    "related": [
      "dmadv",
      "idov",
      "cdov",
      "dccdi",
      "dmadov"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">DMAIC vs DFSS</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>DMAIC</h5><ul><li>기존 개선</li><li>Improve·Control</li></ul></div><div class=\"compare-card good\"><h5>DFSS</h5><ul><li>신규 설계</li><li>Design·Optimize·Verify</li></ul></div></div></div>\n<div class=\"chip-grid\"><span class=\"chip hot\">DMADV</span><span class=\"chip\">IDOV</span><span class=\"chip\">CDOV</span><span class=\"chip\">DCCDI</span><span class=\"chip\">DMADOV</span></div>\n<p>뼈대가 잘못된 공정을 DMAIC로만 고치면 한계가 있습니다.</p>"
  },
  {
    "id": "dmadv",
    "term": "DMADV",
    "aliases": [
      "디엠에이디브이"
    ],
    "category": "로드맵",
    "sortKo": "디엠에이디브이",
    "sortEn": "DMADV",
    "summary": "Define–Measure–Analyze–Design–Verify. 가장 널리 쓰이는 DFSS 로드맵.",
    "lessons": [
      13
    ],
    "related": [
      "dfss",
      "qfd"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">DMADV</div><div class=\"flow-row\"><div class=\"flow-step\">Define</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">Measure</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">Analyze</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">Design</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">Verify</div></div></div>\n<ul><li>Define: 목표·고객·경계</li><li>Measure: VOC→CTQ</li><li>Analyze: 아키텍처 대안</li><li>Design: 상세·강건설계</li><li>Verify: 시제품·파일럿</li></ul>"
  },
  {
    "id": "idov",
    "term": "IDOV",
    "aliases": [
      "아이디오브이"
    ],
    "category": "로드맵",
    "sortKo": "아이디오브이",
    "sortEn": "IDOV",
    "summary": "Identify–Design–Optimize–Validate. 요구 식별과 최적화를 강조하는 DFSS.",
    "lessons": [
      13
    ],
    "related": [
      "dfss",
      "doe"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">IDOV</div><div class=\"flow-row\"><div class=\"flow-step accent\">Identify</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">Design</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">Optimize</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">Validate</div></div></div>\n<p>R&D·제품개발처럼 CTQ 식별과 파라미터 최적화가 긴 프로젝트에 잘 맞습니다.</p>"
  },
  {
    "id": "cdov",
    "term": "CDOV",
    "aliases": [
      "씨디오브이"
    ],
    "category": "로드맵",
    "sortKo": "씨디오브이",
    "sortEn": "CDOV",
    "summary": "Concept–Design–Optimize–Verify. 컨셉·아키텍처 선택이 성패를 가르는 DFSS.",
    "lessons": [
      13
    ],
    "related": [
      "dfss",
      "pugh",
      "triz"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">CDOV</div><div class=\"flow-row\"><div class=\"flow-step accent\">Concept</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">Design</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">Optimize</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">Verify</div></div></div>\n<p>잘못된 컨셉을 상세 설계하면 최적화만으로 구제되지 않습니다. Pugh·TRIZ가 Concept의 주력 도구입니다.</p>"
  },
  {
    "id": "dccdi",
    "term": "DCCDI",
    "aliases": [
      "디씨씨디아이"
    ],
    "category": "로드맵",
    "sortKo": "디씨씨디아이",
    "sortEn": "DCCDI",
    "summary": "Define–Customer–Concept–Design–Implement. 고객·컨셉이 핵심인 서비스·CX 설계용.",
    "lessons": [
      13
    ],
    "related": [
      "dfss",
      "voc"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">DCCDI</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">Define</div><div class=\"ladder-body\">사업 목표·성공 정의</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Customer</div><div class=\"ladder-body\">VOC·여정·페르소나</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Concept</div><div class=\"ladder-body\">가치제안 선정</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Design</div><div class=\"ladder-body\">프로세스·UI·운영 규칙</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Implement</div><div class=\"ladder-body\">파일럿·롤아웃</div></div></div></div>"
  },
  {
    "id": "dmadov",
    "term": "DMADOV",
    "aliases": [
      "디엠에이디오브이"
    ],
    "category": "로드맵",
    "sortKo": "디엠에이디오브이",
    "sortEn": "DMADOV",
    "summary": "DMADV에 Optimize를 넣어 Design과 파라미터 최적화를 분리한 로드맵.",
    "lessons": [
      13
    ],
    "related": [
      "dmadv",
      "doe"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">DMADOV</div><div class=\"flow-row\"><div class=\"flow-step\">D</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">M</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">A</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">Design</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">Optimize</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">V</div></div></div>\n<p>복잡한 하드웨어·공정에서 구조 설계와 DOE 최적화를 게이트로 나눌 때 유용합니다.</p>"
  },
  {
    "id": "qfd",
    "term": "QFD",
    "aliases": [
      "품질기능전개",
      "Quality Function Deployment"
    ],
    "category": "설계",
    "sortKo": "큐에프디",
    "sortEn": "QFD",
    "summary": "고객 언어를 기술 특성으로 번역하는 매트릭스. HOQ로 시각화.",
    "lessons": [
      13
    ],
    "related": [
      "hoq",
      "ctq",
      "voc"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">전개</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">VOC</div><div class=\"ladder-body\">고객 요구·중요도</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">CTQ</div><div class=\"ladder-body\">기술 특성</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">부품</div><div class=\"ladder-body\">모듈 스펙</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">공정</div><div class=\"ladder-body\">관리 항목</div></div></div></div>\n<p>지붕(상관)에서 기술 특성 상충이 보이면 TRIZ나 타협 설계를 검토합니다.</p>"
  },
  {
    "id": "hoq",
    "term": "HOQ",
    "aliases": [
      "품질의 집",
      "House of Quality"
    ],
    "category": "설계",
    "sortKo": "에이치오큐",
    "sortEn": "HOQ",
    "summary": "QFD의 집 모양 매트릭스. 고객 요구와 기술 특성의 관계를 한눈에 보여 줌.",
    "lessons": [
      13
    ],
    "related": [
      "qfd"
    ],
    "detail": "<p>HOQ는 한 번 그리고 끝내는 문서가 아니라, 설계 의사결정의 살아 있는 지도로 쓰세요.</p>\n<div class=\"chip-grid\"><span class=\"chip hot\">고객 중요도</span><span class=\"chip\">기술 특성</span><span class=\"chip\">상관 지붕</span><span class=\"chip\">경쟁 벤치마크</span></div>"
  },
  {
    "id": "robust",
    "term": "강건 설계",
    "aliases": [
      "Robust Design",
      "다구치",
      "SN비"
    ],
    "category": "설계",
    "sortKo": "강건설계",
    "sortEn": "Robust Design",
    "summary": "통제 불가 노이즈에도 성능이 흔들리지 않게 파라미터를 고르는 설계.",
    "lessons": [
      13
    ],
    "related": [
      "doe",
      "dfss"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">목표</div><div class=\"kpi-row\"><div class=\"kpi\"><span class=\"num\">평균</span><span class=\"lbl\">타겟 근접</span></div><div class=\"kpi\"><span class=\"num\">산포</span><span class=\"lbl\">노이즈 둔감</span></div><div class=\"kpi\"><span class=\"num\">SN비</span><span class=\"lbl\">신호 대 잡음</span></div></div></div>\n<p>평균만 맞추는 설계는 현장 노이즈에 쉽게 무너집니다.</p>"
  },
  {
    "id": "pugh",
    "term": "Pugh Matrix",
    "aliases": [
      "퓨매트릭스",
      "개념선택"
    ],
    "category": "설계",
    "sortKo": "퓨매트릭스",
    "sortEn": "Pugh Matrix",
    "summary": "기준안 대비 설계 대안을 +/−/S로 비교해 최적 콘셉트를 고르는 평가표.",
    "lessons": [
      13
    ],
    "related": [
      "cdov",
      "triz"
    ],
    "detail": "<p>가중치와 평가 기준을 팀·챔피언과 사전 합의하면 주관성을 줄일 수 있습니다. CDOV Concept·DMADV Analyze에서 자주 씁니다.</p>"
  },
  {
    "id": "triz",
    "term": "TRIZ",
    "aliases": [
      "트리즈",
      "창의적문제해결"
    ],
    "category": "설계",
    "sortKo": "트리즈",
    "sortEn": "TRIZ",
    "summary": "상충하는 요구를 타협 없이 푸는 발명 원리 모음. QFD 지붕의 모순 해소에 유용.",
    "lessons": [
      13
    ],
    "related": [
      "qfd",
      "pugh"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">접근</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>타협</h5><ul><li>튼튼 ↔ 무게</li><li>한쪽을 희생</li></ul></div><div class=\"compare-card good\"><h5>TRIZ</h5><ul><li>모순을 구조적으로 해소</li><li>40 발명 원리 등</li></ul></div></div></div>"
  },
  {
    "id": "lss",
    "term": "린 6시그마",
    "aliases": [
      "Lean Six Sigma",
      "LSS"
    ],
    "category": "로드맵",
    "sortKo": "린육시그마",
    "sortEn": "Lean Six Sigma",
    "summary": "낭비 제거(속도)와 변동 감소(품질)를 한 프로젝트에서 다루는 결합 접근.",
    "lessons": [
      3,
      5,
      14
    ],
    "related": [
      "lean",
      "dmaic",
      "lss40"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">언제</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>품질·산포 중심</h5><ul><li>DMAIC/DFSS 우선</li></ul></div><div class=\"compare-card good\"><h5>속도·낭비 동시</h5><ul><li>린 6시그마</li><li>VSM+통계</li></ul></div></div></div>\n<p>DFSS로 설계해도 운영에서 대기가 남으면 린을 붙입니다.</p>"
  },
  {
    "id": "lss40",
    "term": "LSS 4.0",
    "aliases": [
      "디지털 린 6시그마"
    ],
    "category": "디지털",
    "sortKo": "엘에스에스사점이",
    "sortEn": "LSS 4.0",
    "summary": "IoT·클라우드·실시간 SPC·RPA·AI가 결합된 디지털 린 6시그마.",
    "lessons": [
      14
    ],
    "related": [
      "lss",
      "iot",
      "rpa"
    ],
    "detail": "<div class=\"chip-grid\"><span class=\"chip hot\">IoT</span><span class=\"chip\">Cloud</span><span class=\"chip\">Realtime SPC</span><span class=\"chip\">Process Mining</span><span class=\"chip\">RPA</span><span class=\"chip\">PdM</span></div>\n<p>기술 도입보다 알람 책임·데이터 품질·표준 대응 운영이 성패를 가릅니다.</p>"
  },
  {
    "id": "iot",
    "term": "IoT",
    "aliases": [
      "사물인터넷"
    ],
    "category": "디지털",
    "sortKo": "아이오티",
    "sortEn": "IoT",
    "summary": "센서로 공정 데이터를 자동·실시간 수집. Measure를 샘플링에서 스트리밍으로 바꿈.",
    "lessons": [
      14
    ],
    "related": [
      "lss40",
      "spc"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">데이터 루프</div><div class=\"flow-row\"><div class=\"flow-step\">센서</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">스트림</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">SPC</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">Alert</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">조치</div></div></div>"
  },
  {
    "id": "rpa",
    "term": "RPA",
    "aliases": [
      "로봇프로세스자동화"
    ],
    "category": "디지털",
    "sortKo": "알피에이",
    "sortEn": "RPA",
    "summary": "반복 PC 업무를 봇이 수행해 사무 낭비와 휴먼 에러를 줄이는 자동화.",
    "lessons": [
      14
    ],
    "related": [
      "lss40",
      "lean"
    ],
    "detail": "<p>엑셀 취합·입력·다운로드처럼 규칙이 뚜렷한 업무에 적합합니다. 예외가 많으면 프로세스 표준화가 먼저입니다.</p>"
  },
  {
    "id": "agile-lss",
    "term": "애자일 6시그마",
    "aliases": [
      "Agile Six Sigma"
    ],
    "category": "로드맵",
    "sortKo": "애자일육시그마",
    "sortEn": "Agile Six Sigma",
    "summary": "2~4주 스프린트로 DMAIC/DFSS를 돌려 학습 속도를 높이는 하이브리드.",
    "lessons": [
      16,
      5
    ],
    "related": [
      "dmaic",
      "dfss"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">리듬</div><div class=\"compare-2\"><div class=\"compare-card\"><h5>폭포수형</h5><ul><li>긴 계획 후 배포</li><li>시장 변화 리스크</li></ul></div><div class=\"compare-card good\"><h5>애자일형</h5><ul><li>짧은 배달</li><li>빠른 방향 수정</li></ul></div></div></div>\n<div class=\"infograph\"><div class=\"ig-title\">스프린트 DMAIC</div><div class=\"flow-row\"><div class=\"flow-step\">D/M</div><span class=\"flow-arrow\">→</span><div class=\"flow-step\">A</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">I</div><span class=\"flow-arrow\">→</span><div class=\"flow-step accent\">C/회고</div></div></div>\n<p>로드맵을 대체하는 것이 아니라 <strong>실행 주기</strong>를 바꿉니다.</p>"
  },
  {
    "id": "champion",
    "term": "챔피언",
    "aliases": [
      "Champion",
      "스폰서"
    ],
    "category": "역할",
    "sortKo": "챔피언",
    "sortEn": "Champion",
    "summary": "프로젝트를 후원하고 자원을 열어 주며 장애물을 제거하는 경영 스폰서.",
    "lessons": [
      1,
      5
    ],
    "related": [
      "black-belt",
      "green-belt"
    ],
    "detail": "<div class=\"infograph\"><div class=\"ig-title\">역할 분담</div><div class=\"ladder\"><div class=\"ladder-item\"><div class=\"ladder-tag\">Champion</div><div class=\"ladder-body\">방향·자원·승인</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">BB</div><div class=\"ladder-body\">프로젝트 리딩·분석</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">GB</div><div class=\"ladder-body\">모듈 수행·지원</div></div><div class=\"ladder-item\"><div class=\"ladder-tag\">Owner</div><div class=\"ladder-body\">일상 유지</div></div></div></div>"
  },
  {
    "id": "black-belt",
    "term": "블랙벨트",
    "aliases": [
      "Black Belt",
      "BB"
    ],
    "category": "역할",
    "sortKo": "블랙벨트",
    "sortEn": "Black Belt",
    "summary": "DMAIC/DFSS를 리딩하고 통계·실험을 깊게 다루는 전담에 가까운 전문가.",
    "lessons": [
      1,
      16
    ],
    "related": [
      "champion",
      "green-belt"
    ],
    "detail": "<p>애자일 환경에서는 How(방법·실험)를 설계하고, Product Owner가 What(우선순위)을 조율합니다.</p>"
  },
  {
    "id": "green-belt",
    "term": "그린벨트",
    "aliases": [
      "Green Belt",
      "GB"
    ],
    "category": "역할",
    "sortKo": "그린벨트",
    "sortEn": "Green Belt",
    "summary": "본업과 병행하며 모듈·지원 프로젝트를 수행하는 벨트.",
    "lessons": [
      1
    ],
    "related": [
      "black-belt",
      "champion"
    ],
    "detail": "<p>전 과정을 혼자 다 하는 역할이 아니라, BB·챔피언과 역할을 나누며 현장 지식을 분석에 연결합니다.</p>"
  },
  {
    "id": "process-owner",
    "term": "프로세스 오너",
    "aliases": [
      "Process Owner"
    ],
    "category": "역할",
    "sortKo": "프로세스오너",
    "sortEn": "Process Owner",
    "summary": "개선된 프로세스를 일상에서 소유·유지하는 현업 책임자.",
    "lessons": [
      1,
      12
    ],
    "related": [
      "control-plan",
      "champion"
    ],
    "detail": "<p>프로젝트가 끝나도 Control Plan·SOP·SPC의 주인은 프로세스 오너입니다. 이관 없는 개선은 요요로 이어집니다.</p>"
  }
];
