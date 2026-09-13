var courseData = [
    {
        id: 1, belt: "White Belt", status: "unlocked", title: "1강. 6시그마 경영 철학과 3.4 DPMO",
        content: `
            <h3>1강. 6시그마 경영 철학과 3.4 DPMO</h3>
            <p><strong>6시그마(Six Sigma)</strong>는 통계적 척도인 시그마(σ, 표준편차)를 활용해 모든 프로세스의 품질 수준을 정량적으로 평가하고, 불량 발생 원인을 근본적으로 제거하는 경영 혁신 철학입니다. 단순 QC나 사후 선별이 아니라, 고객이 정의한 규격(Spec) 안에서 공정 변동(Variation)을 줄여 사실상의 무결점을 지향하는 전사적 방법론입니다. 제조뿐 아니라 서비스, 소프트웨어 배포, 병원 대기, 금융 심사처럼 "반복되는 일"이 있는 곳이면 어디든 적용할 수 있습니다.</p>

            <h4>1. 시그마(σ)가 의미하는 것</h4>
            <p>시그마는 데이터가 중심(평균)으로부터 얼마나 흩어져 있는지를 나타내는 <strong>표준편차</strong>입니다. 품질 맥락에서 "시그마 수준"이란, 공정 평균에서 고객 규격 한계(USL/LSL)까지가 몇 개의 표준편차로 떨어져 있는지를 뜻합니다. 거리가 멀수록(시그마 수준이 높을수록) 규격 밖으로 나갈 확률이 급격히 줄어듭니다. 같은 평균이라도 산포가 크면 고객 경험은 들쭉날쭉해지고, 숨겨진 재작업·긴급 출하가 늘어납니다.</p>
            <p>따라서 6시그마의 핵심 질문은 "평균이 목표인가?"만이 아니라 <strong>"변동을 얼마나 줄였는가?"</strong>입니다. 변동을 줄이면 예측 가능성이 커지고, 재고·버퍼·검사 의존도가 함께 내려갑니다.</p>
            <div class="infograph">
              <div class="ig-title">시그마 수준별 DPMO (장기, 1.5σ Shift 반영)</div>
              <table class="mini-table">
                <thead><tr><th>시그마</th><th>DPMO</th><th>수율(대략)</th></tr></thead>
                <tbody>
                  <tr><td>2σ</td><td>308,537</td><td>69.1%</td></tr>
                  <tr><td>3σ</td><td>66,807</td><td>93.3%</td></tr>
                  <tr><td>4σ</td><td>6,210</td><td>99.4%</td></tr>
                  <tr><td>5σ</td><td>233</td><td>99.98%</td></tr>
                  <tr><td>6σ</td><td>3.4</td><td>99.99966%</td></tr>
                </tbody>
              </table>
            </div>
            <p>위 표에서 보듯, 3σ에서 6σ로 갈수록 불량률은 선형이 아니라 <strong>기하급수적으로</strong> 감소합니다. "조금만 더 검사하자"로는 도달하기 어렵고, 프로세스 설계·측정·원인 제거를 구조적으로 바꿔야 하는 이유입니다.</p>

            <h4>2. 1.5 시그마 시프트와 3.4 DPMO</h4>
            <p>정규분포 중심에서 규격까지가 정확히 6σ일 때, 단기·이상적 조건의 이론 불량률은 약 0.002 ppm(10억 개 중 2개)입니다. 그러나 모토로라의 마이클 해리(Michael Harry)는 현장 데이터를 통해, 장기적으로 기계 마모·작업자 피로·환경 변화·자재 로트 교체 등으로 공정 평균이 중심에서 <strong>±1.5σ만큼 이동(Shift)</strong>한다는 사실을 실증했습니다.</p>
            <div class="infograph">
              <div class="ig-title">1.5σ Shift 개념 (정규분포와 규격)</div>
              <div class="svg-wrap">
                <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" aria-label="1.5 sigma shift">
                  <line x1="20" y1="110" x2="300" y2="110" stroke="#94A3B8" stroke-width="2"/>
                  <path d="M40 110 C70 110 80 30 160 30 C240 30 250 110 280 110" fill="none" stroke="#2563EB" stroke-width="2.5"/>
                  <path d="M70 110 C100 110 110 45 180 45 C250 45 255 110 285 110" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4 3"/>
                  <line x1="280" y1="20" x2="280" y2="110" stroke="#EF4444" stroke-width="2"/>
                  <text x="250" y="18" font-size="11" fill="#EF4444" font-weight="700">USL</text>
                  <text x="145" y="22" font-size="10" fill="#2563EB">단기 중심</text>
                  <text x="175" y="58" font-size="10" fill="#B45309">+1.5σ 이동</text>
                  <text x="30" y="128" font-size="10" fill="#64748B">LSL</text>
                  <text x="270" y="128" font-size="10" fill="#64748B">규격 상한</text>
                </svg>
              </div>
              <div class="kpi-row" style="margin-top:0.8rem;">
                <div class="kpi"><span class="num">6σ</span><span class="lbl">목표 수준</span></div>
                <div class="kpi"><span class="num">±1.5σ</span><span class="lbl">장기 평균 이동</span></div>
                <div class="kpi"><span class="num">3.4</span><span class="lbl">DPMO (장기)</span></div>
              </div>
            </div>
            <p>이 1.5σ 치우침을 최악 조건으로 감안해도 규격 밖으로 나가는 비율이 100만 기회당 3.4회 — 즉 <strong>3.4 DPMO</strong>입니다. 수율로 환산하면 약 99.99966%이며, 이것이 업계에서 말하는 "6시그마 품질"의 장기 정의입니다. DPMO를 쓸 때는 단위(Unit)와 기회(Opportunity)를 명확히 정의해야 비교가 가능합니다.</p>
            <div class="formula">DPMO = (결함수 / 기회수) × 1,000,000<small>기회(Opportunity) = 단위당 결함이 생길 수 있는 검사 포인트</small></div>

            <h4>3. 6시그마의 진화</h4>
            <p>6시그마는 한 번의 유행이 아니라 세대가 바뀌며 범위가 확장되어 왔습니다. 초기에는 제조 통계 문제해결에 집중했지만, GE를 거치며 경영 언어가 되었고, 이후 린과 결합해 속도와 품질을 동시에 다루며, 지금은 디지털·실시간 데이터와 연결됩니다.</p>
            <div class="infograph">
              <div class="ig-title">세대별 진화 사다리</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">1세대</div><div class="ladder-body"><strong>통계적 문제해결</strong> — 1980s 모토로라. 제조 불량률 감소가 목적.</div></div>
                <div class="ladder-item"><div class="ladder-tag">2세대</div><div class="ladder-body"><strong>경영 혁신</strong> — 1990s GE. R&amp;D·영업·인사 등 전사 프로세스 최적화.</div></div>
                <div class="ladder-item"><div class="ladder-tag">3세대</div><div class="ladder-body"><strong>린 6시그마</strong> — TPS 낭비 제거(Lean)와 품질 개선의 결합.</div></div>
                <div class="ladder-item"><div class="ladder-tag">4세대</div><div class="ladder-body"><strong>디지털 린 6시그마</strong> — IoT·실시간 데이터·AI·Agile 연계.</div></div>
              </div>
            </div>

            <h4>4. 조직 역할과 숨겨진 공장</h4>
            <p>도구만 있고 역할이 없으면 프로젝트는 중간에 멈춥니다. 챔피언이 자원을 열어주고, 벨트 인력이 분석을 수행하며, 프로세스 오너가 개선 후 일상을 소유해야 성과가 유지됩니다.</p>
            <div class="callout-grid">
              <div class="callout"><strong>Champion</strong>임원급 스폰서. 방향 설정, 자원 배분, 장애물 제거.</div>
              <div class="callout"><strong>Black Belt (BB)</strong>전담 프로젝트 리더. DMAIC 리딩·통계 분석.</div>
              <div class="callout"><strong>Green Belt (GB)</strong>현업 병행. 부분 프로젝트·데이터 수집 지원.</div>
              <div class="callout"><strong>Process Owner</strong>개선 후 프로세스를 일상적으로 소유·유지.</div>
            </div>
            <p><strong>숨겨진 공장(Hidden Factory)</strong>은 재작업, 검사 대기, 폐기, 긴급 출하, 중복 확인처럼 겉으로는 "생산·업무"처럼 보이지만 실제로는 시간과 비용을 잠식하는 비가시적 활동을 말합니다. 겉 수율만 보면 괜찮아 보여도, 숨겨진 공장 때문에 원가와 리드타임이 악화됩니다. 6시그마는 이 숨은 비용을 데이터로 드러내는 데에도 강점이 있습니다.</p>
            <div class="infograph">
              <div class="ig-title">예방 vs 검사 — 품질 철학 비교</div>
              <div class="compare-2">
                <div class="compare-card bad">
                  <h5>전통적 검사 중심</h5>
                  <ul>
                    <li>완성품에서 불량 선별</li>
                    <li>사후 대응, 비용 후행</li>
                    <li>숨겨진 공장 증가</li>
                  </ul>
                </div>
                <div class="compare-card good">
                  <h5>6시그마 예방 중심</h5>
                  <ul>
                    <li>공정 산포 자체를 축소</li>
                    <li>결함 원천 차단</li>
                    <li>고객 규격 기준의 설계</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tip-box">💡 <strong>핵심 요약:</strong> 6시그마 = 고객 규격 안에서 변동을 줄이는 철학. 장기 목표는 1.5σ Shift를 감안한 <strong>3.4 DPMO</strong>이며, 창안은 모토로라·전사 확산은 GE입니다.</div>
            <div class="lesson-outro">
              <h4>1강 정리</h4>
              <p>이번 강에서는 6시그마가 “고객 규격 안에서 변동을 줄이는 경영 철학”임을 확인했고, 3.4 DPMO·벨트·챔피언 역할을 익혔습니다. 철학의 뼈대가 잡혔으니, 다음은 그 철학을 숫자로 연결하는 일입니다.</p>
              <p class="next-hint">다음 2강에서는 VOC·Kano·CTQ로 “무엇을 품질로 볼지”를 측정 가능하게 만듭니다. 단원 퀴즈를 푼 뒤 이어 가세요.</p>
            </div>
        `,
        quizzes: [
            {"q": "6시그마가 추구하는 장기적인 통계적 목표 수치로 올바른 것은?", "options": ["0.002 DPMO", "1.5 DPMO", "3.4 DPMO", "6.0 DPMO"], "answer": 2, "rationale": "1.5시그마 시프트를 감안한 장기적인 6시그마 공정의 불량률은 100만 개 중 3.4개인 3.4 DPMO입니다."},
            {"q": "6시그마를 1980년대에 최초로 창안하여 제조 공정에 도입한 기업과 인물은?", "options": ["GE - 잭 웰치", "모토로라 - 마이클 해리", "도요타 - 오노 다이이치", "포드 - 헨리 포드"], "answer": 1, "rationale": "6시그마는 모토로라의 마이클 해리와 빌 스미스에 의해 최초로 창안되었습니다."},
            {"q": "단순한 제조 통계 기법이었던 6시그마를 R&D, 영업, 서비스 등 기업 전체의 경영 혁신 전략으로 전 세계에 확산시킨 기업은?", "options": ["애플(Apple)", "소니(Sony)", "제너럴 일렉트릭(GE)", "삼성(Samsung)"], "answer": 2, "rationale": "GE의 전 CEO인 잭 웰치가 6시그마를 전사적 경영 혁신 전략으로 승화시켰습니다."},
            {"q": "통계학에서 '시그마(σ)'가 본래 의미하는 척도는 무엇인가?", "options": ["평균 (Mean)", "표준편차 (Standard Deviation)", "비율 (Proportion)", "중앙값 (Median)"], "answer": 1, "rationale": "시그마(σ)는 데이터가 중심으로부터 얼마나 흩어져 있는지를 나타내는 표준편차를 의미합니다."},
            {"q": "6시그마 품질 수준인 '3.4 DPMO'를 제품의 양품 수율(Yield)로 환산했을 때 올바른 수치는?", "options": ["99.0%", "99.9%", "99.99%", "99.99966%"], "answer": 3, "rationale": "100만 개 중 3.4개의 불량을 제외한 999,996.6개가 양품이므로 수율은 99.99966%입니다."},
            {"q": "마이클 해리가 주창한 '1.5 시그마 시프트(Shift)'의 의미로 가장 적절한 것은?", "options": ["단기적으로 공정 평균은 1.5σ만큼 개선된다.", "장기적으로 기계 마모나 작업자 변경 등으로 공정 평균이 ±1.5σ만큼 중심에서 이동한다.", "측정 시스템의 오차가 항상 1.5σ만큼 발생한다.", "규격 한계선이 1.5σ만큼 넓어진다."], "answer": 1, "rationale": "장기적인 환경 변화로 인해 공정의 평균이 중심에서 1.5σ만큼 치우치는 현상을 의미합니다."},
            {"q": "6시그마 프로젝트를 수행할 때 불량(Defect)을 판정하는 가장 궁극적인 기준을 제시하는 주체는?", "options": ["품질관리 부서장", "프로젝트 블랙벨트", "고객 (Customer)", "최고경영자 (CEO)"], "answer": 2, "rationale": "6시그마는 철저한 고객 중심 사상입니다. 설계 도면을 만족하더라도 고객이 만족하지 않으면 불량입니다."},
            {"q": "6시그마 조직 구조에서 프로젝트의 방향을 설정하고, 자원을 지원하며 장애물을 제거해 주는 경영진 역할을 무엇이라 부르는가?", "options": ["블랙벨트 (Black Belt)", "그린벨트 (Green Belt)", "챔피언 (Champion)", "프로세스 오너 (Process Owner)"], "answer": 2, "rationale": "챔피언(Champion)은 프로젝트를 후원하고 리소스를 배분하는 임원급 스폰서입니다."},
            {"q": "제품을 다시 작업하거나 폐기하는 등 겉으로 드러나지 않지만 기업의 이익을 갉아먹는 비효율적인 공정을 뜻하는 용어는?", "options": ["보틀넥 (Bottleneck)", "숨겨진 공장 (Hidden Factory)", "다중공선성", "이상원인 (Special Cause)"], "answer": 1, "rationale": "재작업, 검사 대기 등으로 인해 시간과 비용을 낭비하게 만드는 보이지 않는 프로세스를 숨겨진 공장이라고 합니다."},
            {"q": "전통적인 품질관리와 6시그마 품질관리의 가장 큰 차이점은 무엇인가?", "options": ["전통적 품질관리는 예방에, 6시그마는 검사에 집중한다.", "전통적 품질관리는 완성품 중 불량을 골라내는 데 집중하고, 6시그마는 프로세스 자체의 산포를 줄여 불량 발생을 원천 예방한다.", "6시그마는 통계 프로그램 없이 경험에 의존한다.", "전통적 품질관리가 고객 중심적이다."], "answer": 1, "rationale": "6시그마는 사후 검사가 아닌, 프로세스 자체의 변동성(산포)을 줄여 결함 발생을 사전에 차단하는 철학입니다."},
        ]
    },
    {
        id: 2, belt: "White Belt", status: "locked", title: "2강. VOC, Kano 모델과 CTQ 도출",
        content: `
            <h3>2강. VOC, Kano 모델과 CTQ 도출</h3>
            <p>6시그마에서 불량(Defect)의 최종 판정자는 설계 도면이나 내부 KPI가 아니라 <strong>고객(Customer)</strong>입니다. 내부 목표를 달성해도 고객이 불편하면 그것은 품질 실패입니다. 따라서 프로젝트의 출발점은 항상 <strong>VOC(Voice of Customer)</strong>를 듣고, 그것을 측정 가능한 <strong>CTQ(Critical to Quality)</strong>로 바꾸는 일입니다. Define 단계에서 이 연결이 약하면 이후 Measure·Analyze가 "틀린 문제"를 열심히 푸는 낭비가 됩니다.</p>

            <h4>1. VOC란 무엇인가</h4>
            <p>VOC는 고객이 말로 표현한 요구, 불만, 기대, 사용 맥락을 아우릅니다. 명시적 VOC("배송이 느려요")뿐 아니라 암묵적 VOC(앱을 자주 종료함, 재구매율 하락, 장바구니 이탈)도 중요합니다. 또한 <strong>외부 고객</strong>(최종 소비자, 발주처)과 <strong>내부 고객</strong>(다음 공정, 인접 부서)을 구분하면 요구사항의 충돌과 우선순위가 선명해집니다.</p>
            <p>좋은 VOC 수집은 "설문 한 번"이 아니라, 정량으로 크기를 재고 정성으로 이유를 파는 <strong>혼합 설계</strong>입니다. CS 로그와 이탈 데이터는 이미 조직 안에 쌓여 있는 값진 VOC 원천입니다.</p>
            <div class="infograph">
              <div class="ig-title">VOC 수집 방법 칩</div>
              <div class="chip-grid">
                <span class="chip">설문(정량)</span>
                <span class="chip">심층 인터뷰</span>
                <span class="chip">FGI</span>
                <span class="chip hot">불만/CS 로그</span>
                <span class="chip">현장 관찰</span>
                <span class="chip">사용성 테스트</span>
                <span class="chip">NPS/리뷰</span>
                <span class="chip hot">이탈·재구매 데이터</span>
              </div>
            </div>
            <p>정량 조사(척도형 설문)는 우선순위를 숫자로 비교하기 좋고, 정성 조사(인터뷰·관찰)는 "왜"를 깊게 파기 좋습니다. 실무에서는 불만 빈도가 높은 테마를 먼저 고르고, 그다음 인터뷰로 문장을 CTQ 후보로 정제하는 흐름이 효율적입니다.</p>

            <h4>2. Kano 모델: 품질의 세 축</h4>
            <p>카노(Kano) 모델은 요구사항이 충족될 때 만족도가 어떻게 반응하는지로 VOC를 분류합니다. 모든 요구를 동일 가중치로 다루면 예산이 분산되고, 당연적 품질을 놓치면 치명적 이탈이 발생합니다. 반대로 매력적 품질만 쫓다 기본이 무너지면 "반짝 기능, 기본 불만"이 됩니다.</p>
            <div class="infograph">
              <div class="ig-title">Kano 3유형 비교</div>
              <div class="compare-2">
                <div class="compare-card">
                  <h5>당연적 (Must-be)</h5>
                  <ul>
                    <li>충족해도 "당연"</li>
                    <li>미달 시 강한 불만</li>
                    <li>예: 앱이 강제종료되지 않음</li>
                  </ul>
                </div>
                <div class="compare-card">
                  <h5>일원적 (One-dim.)</h5>
                  <ul>
                    <li>충족↑ → 만족↑</li>
                    <li>성능·속도·가격 등</li>
                    <li>예: 배달 시간 단축</li>
                  </ul>
                </div>
              </div>
              <div class="compare-2" style="margin-top:0.7rem;">
                <div class="compare-card good">
                  <h5>매력적 (Attractive)</h5>
                  <ul>
                    <li>없어도 큰 불만 없음</li>
                    <li>있으면 감동·차별화</li>
                    <li>시간이 지나면 당연적으로 전이</li>
                  </ul>
                </div>
                <div class="compare-card">
                  <h5>실무 팁</h5>
                  <ul>
                    <li>당연적부터 방어</li>
                    <li>일원적으로 경쟁</li>
                    <li>매력적으로 차별</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="info-box"><strong>전이 현상:</strong> 과거 매력적이었던 지문 인식·무료 반품·당일배송 안내 등은 이제 당연적 기대가 됩니다. Kano 분류는 고정값이 아니라 시장·시간에 따라 재평가해야 합니다.</div>

            <h4>3. CTQ Tree: VOC를 숫자로</h4>
            <p>CTQ Tree는 모호한 VOC를 Driver(주요 요인)로 분해한 뒤, 측정 단위와 Spec이 있는 CTQ로 내리는 하향식 도구입니다. "빠르다/친절하다/안정적이다"는 감정 표현이지 지표가 아닙니다. 프로젝트 팀이 같은 문장을 보고도 다른 측정을 하면 실패합니다.</p>
            <div class="infograph">
              <div class="ig-title">CTQ Tree 전개 흐름</div>
              <div class="flow-row">
                <div class="flow-step">VOC</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">Driver</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step accent">CTQ</div>
              </div>
            </div>
            <ul>
              <li><strong>VOC:</strong> "새로 만든 앱이 너무 답답해요."</li>
              <li><strong>Driver:</strong> 빠른 반응 속도 / 시스템 안정성</li>
              <li><strong>CTQ:</strong> 초기 로딩 ≤ 1.5초 / 크래시율 &lt; 0.1%</li>
            </ul>
            <p>CTQ를 고를 때는 측정 가능성, 데이터 수집 비용, 고객 영향도, 프로젝트 범위 안의 통제 가능성을 함께 봅니다. CTQ가 너무 많으면 초점이 흐려지므로, 보통 핵심 소수(1~3개)로 압축합니다.</p>
            <div class="infograph">
              <div class="ig-title">좋은 CTQ vs 나쁜 CTQ</div>
              <div class="compare-2">
                <div class="compare-card bad">
                  <h5>나쁜 예</h5>
                  <ul>
                    <li>음식이 맛있어야 한다</li>
                    <li>직원이 친절해야 한다</li>
                    <li>디자인이 세련되어야 한다</li>
                  </ul>
                </div>
                <div class="compare-card good">
                  <h5>좋은 예</h5>
                  <ul>
                    <li>로딩 시간 ≤ 1.5초</li>
                    <li>온도시차 ±2°C 이내</li>
                    <li>배송 Lead Time ≤ 24h</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="formula">좋은 CTQ = 측정단위(Unit) + 목표/규격(Target or Spec)<small>SMART: Specific, Measurable, Achievable, Relevant, Time-bound</small></div>
            <div class="tip-box">💡 <strong>실무 포인트:</strong> CTQ는 반드시 숫자로 측정 가능해야 하며, 합격/불합격을 가르는 Spec이 있어야 "불량"을 정의할 수 있습니다.</div>
            <div class="lesson-outro">
              <h4>2강 정리</h4>
              <p>VOC를 듣고 Kano로 우선순위를 가린 뒤, CTQ와 Spec으로 “불량”을 정의하는 흐름을 익혔습니다. 프로젝트가 흔들리면 대개 이 연결이 약합니다.</p>
              <p class="next-hint">다음 3강에서는 SIPOC·VSM·린 낭비로 프로세스 흐름을 시각화합니다. CTQ를 어디에 붙일지 지도가 필요하기 때문입니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "카노(Kano) 모델에서 '충족되면 당연하게 생각하지만, 미달되면 심각한 불만을 초래하는' 품질 특성은 무엇인가?", "options": ["매력적 품질", "일원적 품질", "당연적 품질", "무관심 품질"], "answer": 2, "rationale": "당연적 품질(Must-be Quality)은 고객이 기본적으로 전제하는 핵심 요구사항으로, 불충족 시 강한 불만을 일으킵니다."},
            {"q": "카노 모델에서 '충족될수록 고객 만족도가 비례해서 상승하고, 미달될수록 불만이 커지는' 품질 특성은?", "options": ["매력적 품질", "일원적 품질", "당연적 품질", "역 품질"], "answer": 1, "rationale": "일원적 품질(One-dimensional Quality)은 성능이나 속도처럼 제공되는 양에 비례하여 만족도가 변하는 특성입니다."},
            {"q": "과거에는 '매력적 품질'이었던 스마트폰의 지문 인식 기능이 현재는 '당연적 품질'로 여겨집니다. 이를 통해 알 수 있는 카노 모델의 특징은?", "options": ["품질 특성은 영구 불변한다.", "매력적 품질은 시간이 지나면서 점차 당연적 품질로 변화한다.", "고객의 요구사항은 항상 일원적 품질에만 집중된다.", "당연적 품질이 매력적 품질로 역행한다."], "answer": 1, "rationale": "매력적 품질 요소는 경쟁사들이 모방하고 기술이 보편화됨에 따라 시간이 지나면 고객이 당연하게 여기는 당연적 품질로 변하게 됩니다."},
            {"q": "고객의 모호한 요구사항(VOC)을 구체적이고 측정 가능한 지표로 변환하는 도구는 무엇인가?", "options": ["파레토 차트", "특성요인도", "CTQ Tree", "관리도"], "answer": 2, "rationale": "CTQ Tree는 VOC ➡️ Driver(주요 요인) ➡️ CTQ(핵심 품질 특성) 순으로 전개하여 구체적 지표를 도출하는 하향식 도구입니다."},
            {"q": "다음 중 올바르게 도출된 CTQ(Critical to Quality)의 예시로 가장 적절한 것은?", "options": ["음식이 맛있어야 한다.", "직원들이 친절해야 한다.", "앱의 초기 화면 로딩 시간이 1.5초 이내여야 한다.", "제품 디자인이 세련되어야 한다."], "answer": 2, "rationale": "CTQ는 객관적인 '숫자'로 측정 가능하고 명확한 합격/불합격의 기준(Target/Spec)을 포함해야 합니다."},
            {"q": "CTQ Tree를 전개할 때 거치는 3단계의 올바른 순서는?", "options": ["CTQ ➡️ VOC ➡️ Driver", "VOC ➡️ CTQ ➡️ Driver", "Driver ➡️ VOC ➡️ CTQ", "VOC ➡️ Driver ➡️ CTQ"], "answer": 3, "rationale": "고객의 소리(VOC)를 먼저 듣고, 주요 요구사항(Driver)을 파악한 뒤, 최종적으로 측정 가능한 지표(CTQ)로 변환합니다."},
            {"q": "6시그마에서 불량(Defect)을 정의하는 가장 근본적인 기준을 제시하는 주체는?", "options": ["경영진", "고객 (Customer)", "품질 보증 부서 (QA)", "프로젝트 리더 (Black Belt)"], "answer": 1, "rationale": "6시그마는 철저한 고객 중심 사상입니다. 회사의 자체 규격이 아니라 고객의 요구사항(VOC)이 불량 판정의 유일한 기준입니다."},
            {"q": "다음 중 카노 모델의 '매력적 품질(Attractive Quality)'에 대한 설명으로 올바른 것은?", "options": ["충족되지 않으면 심각한 불만을 초래한다.", "고객이 명시적으로 요구하는 가장 기본적인 기능이다.", "충족되지 않아도 불만은 없으나, 충족되면 큰 감동을 준다.", "충족될수록 불만이 커진다."], "answer": 2, "rationale": "매력적 품질은 고객이 전혀 기대하지 않았던 잠재적 요구사항으로 감동을 유발하지만, 없다고 해서 불만이 생기지는 않습니다."},
            {"q": "다음 중 외부 고객(External Customer)이 아닌 내부 고객(Internal Customer)에 해당하는 것은?", "options": ["우리 회사의 제품을 구매한 최종 소비자", "완성된 부품을 납품받아 조립하는 다음 공정의 동료 작업자", "제품의 수리를 요청하는 AS 신청자", "앱스토어에서 어플리케이션을 다운로드한 유저"], "answer": 1, "rationale": "내부 고객이란 내 작업의 결과물을 전달받아 다음 작업을 수행하는 사내의 다음 공정 담당자나 타 부서를 의미합니다."},
            {"q": "CTQ 도출 시 고객 요구사항을 수집하는 방법 중 성격이 '정량적'인 조사 방법은?", "options": ["포커스 그룹 인터뷰 (FGI)", "고객 심층 인터뷰 (In-depth Interview)", "온라인 설문조사 (5점 척도)", "현장 관찰조사"], "answer": 2, "rationale": "설문조사(5점 척도 등)는 데이터를 숫자로 수집하여 통계적 분석이 가능한 정량적 조사 방법입니다."},
        ]
    },
    {
        id: 3, belt: "Yellow Belt", status: "locked", title: "3강. 프로세스 시각화와 린(Lean) 기초",
        content: `
            <h3>3강. 프로세스 시각화와 린(Lean) 기초</h3>
            <p>6시그마가 <strong>불량(Defect)</strong>과 변동을 줄인다면, 린(Lean)은 프로세스의 <strong>낭비(Waste, Muda)</strong>를 제거해 <strong>속도(Lead Time)</strong>를 높입니다. 둘을 결합한 <strong>린 6시그마(Lean Six Sigma)</strong>는 "빠르게, 그리고 올바르게"를 동시에 추구합니다. 시각화 없이는 낭비도 병목도 보이지 않으므로, Define·Measure 초기에 맵핑이 필수입니다.</p>
            <p>실무에서는 DMAIC만으로 품질을 다루다가 Lead Time이 안 줄어드는 경우가 많습니다. 반대로 린만으로 속도를 올려도 불량 산포가 남으면 재작업으로 다시 느려집니다. <strong>품질 문제면 DMAIC/DFSS, 흐름·낭비 문제면 린, 둘 다면 린 6시그마</strong>로 프레임을 잡으세요. DFSS 세부 로드맵(DMADV·IDOV 등)과 방법론 선택은 5강·13강에서 이어서 다룹니다.</p>

            <h4>1. SIPOC: 범위의 거시 지도</h4>
            <p>SIPOC은 프로젝트 경계(Boundary)를 5~7단계로 요약하는 거시적 맵입니다. 세부 플로우차트보다 먼저 그려 "무엇을 다루고 무엇을 다루지 않는지"를 합의합니다. Supplier와 Customer를 명시하면 입·출력의 품질 기준(요구사항)도 함께 드러납니다.</p>
            <div class="infograph">
              <div class="ig-title">SIPOC 흐름</div>
              <div class="flow-row">
                <div class="flow-step">S<br/>공급자</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">I<br/>투입</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step accent">P<br/>공정</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">O<br/>산출</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">C<br/>고객</div>
              </div>
              <div class="svg-wrap" style="margin-top:0.9rem;">
                <svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" aria-label="SIPOC boxes">
                  <rect x="8" y="25" width="52" height="40" rx="6" fill="#EFF6FF" stroke="#2563EB"/>
                  <text x="34" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#1E40AF">S</text>
                  <rect x="70" y="25" width="52" height="40" rx="6" fill="#EFF6FF" stroke="#2563EB"/>
                  <text x="96" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#1E40AF">I</text>
                  <rect x="132" y="20" width="56" height="50" rx="6" fill="#2563EB"/>
                  <text x="160" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">P</text>
                  <rect x="198" y="25" width="52" height="40" rx="6" fill="#EFF6FF" stroke="#2563EB"/>
                  <text x="224" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#1E40AF">O</text>
                  <rect x="260" y="25" width="52" height="40" rx="6" fill="#EFF6FF" stroke="#2563EB"/>
                  <text x="286" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#1E40AF">C</text>
                </svg>
              </div>
            </div>
            <ul>
              <li><strong>S (Supplier):</strong> 자재·정보 제공자</li>
              <li><strong>I (Input):</strong> 투입 자원·데이터·지시</li>
              <li><strong>P (Process):</strong> 변환의 핵심 단계(5~7)</li>
              <li><strong>O (Output):</strong> 제품·서비스·정보 산출</li>
              <li><strong>C (Customer):</strong> 외부 고객 또는 다음 공정</li>
            </ul>
            <p>상세 프로세스 맵은 SIPOC의 돋보기 버전입니다. Measure에서 병목·재작업 루프·대기 구간을 넣으면 Lead Time 분석으로 자연스럽게 이어집니다.</p>

            <h4>2. 7대 낭비와 VA / NVA</h4>
            <p>가치흐름도(VSM)는 주문부터 인도까지 물류·정보 흐름을 그려 <strong>부가가치(VA)</strong>와 <strong>비부가가치(NVA)</strong> 시간을 분리합니다. 많은 서비스·제조 현장에서 VA 비율은 한 자릿수~수십 %에 불과합니다. "바쁘게 일하는데 결과가 느리다"는 대개 NVA가 Lead Time을 지배하기 때문입니다.</p>
            <div class="infograph">
              <div class="ig-title">도요타 7대 낭비 (Muda)</div>
              <div class="chip-grid">
                <span class="chip hot">과잉생산</span>
                <span class="chip">대기</span>
                <span class="chip">운반</span>
                <span class="chip">과잉가공</span>
                <span class="chip">재고</span>
                <span class="chip">동작</span>
                <span class="chip">불량</span>
              </div>
            </div>
            <p>그중 <strong>과잉생산</strong>은 다른 낭비를 연쇄 유발하는 "최악의 낭비"로 자주 꼽힙니다. 고객 수요보다 앞서·더 많이 만들면 재고·운반·숨은 불량이 함께 늘어납니다. 서비스에서도 "미리 과도한 보고서/중복 승인"이 과잉생산의 변형입니다.</p>
            <div class="infograph">
              <div class="ig-title">리드타임 구성 예시 (상대 비중)</div>
              <div class="bar-chart">
                <div class="bar-row"><span>VA</span><div class="bar-track"><div class="bar-fill" style="width:18%"></div></div><span>18%</span></div>
                <div class="bar-row"><span>필요 NVA</span><div class="bar-track"><div class="bar-fill" style="width:22%"></div></div><span>22%</span></div>
                <div class="bar-row"><span>순수 NVA</span><div class="bar-track"><div class="bar-fill" style="width:60%"></div></div><span>60%</span></div>
              </div>
            </div>
            <div class="info-box"><strong>VA 판정 3질문:</strong> ① 고객이 비용을 지불할 의사가 있는가? ② 형태·정보가 실제로 변환되는가? ③ First Time Right인가? — 법적 감사·중복 결재는 "필요 NVA"일 수 있으나 순수 VA는 아닙니다.</div>

            <h4>3. 5S와 포카요케</h4>
            <p>5S는 거창한 캠페인이 아니라 <strong>눈으로 보는 관리</strong>의 기초 공사입니다. 정상/이상을 10초 안에 구별할 수 있어야 이상원인이 조기에 드러납니다.</p>
            <div class="infograph">
              <div class="ig-title">5S 사다리</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">1S</div><div class="ladder-body"><strong>정리(Sort)</strong> — 필요/불필요 분리, 불필요 제거</div></div>
                <div class="ladder-item"><div class="ladder-tag">2S</div><div class="ladder-body"><strong>정돈(Set)</strong> — 정위치·정량, 찾기 쉬운 배치</div></div>
                <div class="ladder-item"><div class="ladder-tag">3S</div><div class="ladder-body"><strong>청소(Shine)</strong> — 청소=점검, 이상 조기 발견</div></div>
                <div class="ladder-item"><div class="ladder-tag">4S</div><div class="ladder-body"><strong>청결(Standardize)</strong> — 규칙·표지·체크리스트</div></div>
                <div class="ladder-item"><div class="ladder-tag">5S</div><div class="ladder-body"><strong>습관화(Sustain)</strong> — 유지·감사·문화화</div></div>
              </div>
            </div>
            <p><strong>포카요케(Poka-Yoke)</strong>는 실수해도 결함이 되지 않도록 구조적으로 막는 설계입니다. USB-C의 양방향 삽입, 조립 지그의 키잉(keying), 시스템 필수 필드 검증, 바코드 스캔 강제 등이 대표 예입니다. "교육만으로 실수를 없앤다"보다 "실수해도 불량이 안 나오게"가 린의 정신에 가깝습니다.</p>
            <div class="tip-box">💡 <strong>요약:</strong> SIPOC로 경계를 잡고, 7대 낭비·VSM으로 NVA를 드러내며, 5S·포카요케로 현장의 시각 관리와 실수 방지를 구축하세요.</div>
            <div class="lesson-outro">
              <h4>3강 정리</h4>
              <p>SIPOC로 경계를 잡고, 7대 낭비·VSM으로 NVA를 드러내며, 5S·포카요케로 현장 관리 기초를 익혔습니다. 품질과 속도를 함께 보려면 린이 필수입니다.</p>
              <p class="next-hint">다음 4강에서는 중심·산포와 QC7으로 문제를 “보이는 숫자/그림”으로 바꾸는 기초 통계를 다룹니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "SIPOC 다이어그램에서 프로세스의 결과물을 전달받는 내/외부 주체를 의미하는 알파벳은?", "options": ["S (Supplier)", "I (Input)", "P (Process)", "C (Customer)"], "answer": 3, "rationale": "C는 Customer(고객)를 의미하며, 산출물(Output)을 전달받는 최종 대상입니다."},
            {"q": "SIPOC 다이어그램을 작성하는 가장 주된 목적은 무엇인가?", "options": ["공정 내 세부적인 병목 시간 계산", "프로젝트가 다룰 프로세스의 전체 범위(경계)를 거시적으로 정의", "작업자의 불필요한 동작 분석", "불량의 근본 원인을 통계적으로 검증"], "answer": 1, "rationale": "SIPOC는 Define(정의) 단계에서 프로젝트의 시작과 끝을 명확히 하여 분석 범위를 한정하는 거시적 맵핑 도구입니다."},
            {"q": "6시그마가 '불량 감소(품질)'에 초점을 맞춘다면, 린(Lean) 방법론이 가장 핵심적으로 추구하는 목표는 무엇인가?", "options": ["통계 기법의 고도화", "직원 복지 향상", "낭비(Waste) 제거를 통한 처리 속도 향상", "새로운 혁신 제품 설계"], "answer": 2, "rationale": "린(Lean)은 프로세스 내의 비부가가치 활동(낭비)을 제거하여 속도(Lead Time)와 효율성을 극대화하는 데 초점을 둡니다."},
            {"q": "도요타 생산방식(TPS)에서 정의한 '7대 낭비(Muda)'에 해당하지 않는 것은?", "options": ["과잉생산의 낭비", "대기의 낭비", "재고의 낭비", "표준화의 낭비"], "answer": 3, "rationale": "7대 낭비는 과잉생산, 대기, 운반, 가공, 재고, 동작, 불량입니다. 표준화는 낭비가 아니라 개선을 유지하는 필수 수단입니다."},
            {"q": "7대 낭비 중 최악의 낭비로 꼽히며, 재고 증가와 불량품 누적 등 다른 모든 낭비를 연쇄적으로 유발하는 낭비는?", "options": ["운반의 낭비", "과잉생산의 낭비", "동작의 낭비", "대기의 낭비"], "answer": 1, "rationale": "고객이 요구하지 않았음에도 더 많이, 더 일찍 생산하는 '과잉생산의 낭비'가 모든 낭비의 근원입니다."},
            {"q": "고객의 주문부터 제품이 인도될 때까지의 전체 흐름을 도식화하여, '부가가치 시간'과 '비부가가치 시간'을 분리해 내는 린(Lean)의 핵심 도구는?", "options": ["특성요인도", "가치흐름도 (VSM)", "파레토 차트", "관리계획서"], "answer": 1, "rationale": "가치흐름도(Value Stream Mapping, VSM)는 공정 내 정체된 시간과 정보의 흐름을 시각화하는 도구입니다."},
            {"q": "직장 내 정리, 정돈, 청소, 청결, 습관화를 통해 누구나 10초 이내에 정상과 이상 상태를 구별할 수 있게 만드는 현장 관리 기법은?", "options": ["5S 활동", "6시그마", "FMEA", "QFD"], "answer": 0, "rationale": "5S는 린(Lean)의 기초 공사로, 시각적으로 직관적인 통제(눈으로 보는 관리)를 가능하게 합니다."},
            {"q": "작업자가 작업 중 실수(Human Error)를 하려고 해도 구조적으로 절대 실수할 수 없도록 원천 차단하는 설계 기법은?", "options": ["칸반 (Kanban)", "풀프루프 (Poka-Yoke)", "식스시그마", "히스토그램"], "answer": 1, "rationale": "포카요케(Poka-Yoke)는 위아래 구분이 없는 USB-C 타입 케이블처럼 실수를 물리적/시스템적으로 방지하는 기법입니다."},
            {"q": "상세 프로세스 맵(Detailed Process Map)에 대한 설명으로 올바르지 않은 것은?", "options": ["Measure 단계에서 프로세스의 문제점을 세밀하게 파악하기 위해 작성한다.", "공정의 각 단계별 소요 시간(Lead Time)을 기입할 수 있다.", "플로우차트 기호(네모, 마름모 등)를 사용하여 상세히 그린다.", "프로젝트의 거시적인 범위만을 정의하기 위해 5~7단계로 요약하여 작성한다."], "answer": 3, "rationale": "거시적 범위만을 5~7단계로 요약하는 것은 SIPOC 다이어그램이며, 상세 프로세스 맵은 이를 돋보기로 보듯 세밀하게 나눈 것입니다."},
            {"q": "부가가치 활동(Value Add)을 판정하는 3가지 기준에 해당하지 않는 것은?", "options": ["고객이 기꺼이 그 활동에 비용을 지불할 의사가 있는가?", "그 활동을 통해 제품이나 서비스의 형태가 변환되는가?", "처음부터 올바르게(First Time Right) 수행되었는가?", "그 활동이 사내 규정이나 법적 절차상 반드시 요구되는가?"], "answer": 3, "rationale": "사내 규정이나 법적 절차 때문에 하는 일(예: 감사, 중복 결재)은 회사를 위해 필요할 순 있으나, 고객 입장에서 가치를 더하는 '순수 부가가치 활동'은 아닙니다."},
        ]
    },
    {
        id: 4, belt: "Yellow Belt", status: "locked", title: "4강. 기초 통계와 7가지 품질 도구(QC 7)",
        content: `
            <h3>4강. 기초 통계와 7가지 품질 도구(QC 7)</h3>
            <p>데이터 없이 개선하면 의견 싸움이 되고, 도구 없이 데이터만 모으면 정보 과부하가 됩니다. 이번 강은 <strong>중심과 산포</strong>를 읽는 법, <strong>경험 법칙(Empirical Rule)</strong>, 그리고 현장 문제의 상당수를 시각적으로 푸는 <strong>QC 7 Tools</strong>를 다룹니다. 고급 소프트웨어 없이도, 올바른 그림 한 장이 회의를 바꾸는 경우가 많습니다.</p>

            <h4>1. 중심경향과 산포</h4>
            <p>같은 "평균 100"이라도 산포가 다르면 고객 경험은 완전히 다릅니다. 6시그마는 평균 맞추기뿐 아니라 <strong>흩어짐을 줄이는 것</strong>이 핵심입니다. 이상치가 많은 데이터에서는 평균이 왜곡되므로 중앙값을 함께 보고, 산포는 범위·분산·표준편차로 표현합니다. 실무 커뮤니케이션에서는 단위가 원래 데이터와 같은 <strong>표준편차(σ)</strong>가 가장 자주 쓰입니다.</p>
            <div class="infograph">
              <div class="ig-title">중심 vs 산포</div>
              <div class="compare-2">
                <div class="compare-card">
                  <h5>중심경향</h5>
                  <ul>
                    <li>평균(Mean) — 이상치에 민감</li>
                    <li>중앙값(Median) — 극단치에 강함</li>
                    <li>최빈값(Mode) — 범주형에 유용</li>
                  </ul>
                </div>
                <div class="compare-card">
                  <h5>산포</h5>
                  <ul>
                    <li>범위(Range)</li>
                    <li>분산(Variance)</li>
                    <li>표준편차(σ) — 실무 표준</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="formula">σ = √( Σ(xᵢ − μ)² / n )  (모집단)<small>표본에서는 보통 n−1로 나눔 (불편추정)</small></div>
            <p>분산은 편차를 제곱해 합산한 뒤 평균한 값이라 단위가 제곱이 됩니다. 표준편차는 그 제곱근이므로 해석이 직관적입니다. "평균 ± 몇 σ"라는 표현은 이후 공정능력·관리도·시그마 수준과 연결됩니다.</p>

            <h4>2. 정규분포와 경험 법칙</h4>
            <p>정규분포는 평균(μ)과 표준편차(σ)만으로 밀도 형태를 설명하는 종형 분포입니다. 많은 공정 특성이 근사적으로 정규에 가깝거나, 중심극한정리로 표본평균이 정규에 접근합니다. 물론 치우침·이봉·절단 분포도 흔하므로, 히스토그램으로 형태를 먼저 확인하는 습관이 중요합니다.</p>
            <div class="infograph">
              <div class="ig-title">Empirical Rule KPI</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">68%</span><span class="lbl">±1σ 구간</span></div>
                <div class="kpi"><span class="num">95%</span><span class="lbl">±2σ 구간</span></div>
                <div class="kpi"><span class="num">99.7%</span><span class="lbl">±3σ 구간</span></div>
              </div>
              <div class="svg-wrap" style="margin-top:0.85rem;">
                <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" aria-label="bell curve">
                  <line x1="20" y1="100" x2="300" y2="100" stroke="#CBD5E1" stroke-width="2"/>
                  <path d="M40 100 C80 100 100 20 160 20 C220 20 240 100 280 100" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
                  <line x1="160" y1="20" x2="160" y2="100" stroke="#1E40AF" stroke-width="1.5" stroke-dasharray="3 2"/>
                  <line x1="110" y1="55" x2="110" y2="100" stroke="#64748B" stroke-width="1"/>
                  <line x1="210" y1="55" x2="210" y2="100" stroke="#64748B" stroke-width="1"/>
                  <text x="160" y="14" text-anchor="middle" font-size="10" fill="#1E40AF">μ</text>
                  <text x="110" y="112" text-anchor="middle" font-size="9" fill="#64748B">−1σ</text>
                  <text x="210" y="112" text-anchor="middle" font-size="9" fill="#64748B">+1σ</text>
                </svg>
              </div>
            </div>
            <p>±3σ 밖은 약 0.3%로, 관리도에서 "이상"을 볼 때 기초 감각이 됩니다. 분포가 치우치거나 이봉이면 평균·σ만으로 판단하기 위험하므로 히스토그램·층별이 선행되어야 합니다.</p>

            <h4>3. QC 7 Tools — 언제 쓰는가</h4>
            <p>QC7은 "만능 고난도 통계"가 아니라, 문제를 보이게 만드는 실무 도구 세트입니다. 파레토로 어디에 힘을 쏠지 정하고, 특성요인도로 후보 원인을 펼치며, 산점도·히스토그램·관리도로 관계를 확인합니다.</p>
            <div class="infograph">
              <div class="ig-title">QC7 도구 그리드</div>
              <div class="callout-grid">
                <div class="callout"><strong>파레토</strong>Vital Few 우선순위. 빈도·누적%.</div>
                <div class="callout"><strong>특성요인도</strong>4M1E로 원인 브레인스토밍.</div>
                <div class="callout"><strong>산점도</strong>X–Y 상관(비례/반비례).</div>
                <div class="callout"><strong>히스토그램</strong>분포 형태·산포 한눈.</div>
                <div class="callout"><strong>관리도</strong>시간축 안정성·이상원인.</div>
                <div class="callout"><strong>체크시트</strong>누락 없는 수집 양식.</div>
              </div>
              <p style="margin:0.7rem 0 0; font-size:0.9rem;"><strong>층별(Stratification):</strong> 기계·작업자·시간대·로트로 쪼개 숨은 패턴 발견. 종종 "8번째 도구"처럼 함께 씁니다.</p>
            </div>
            <table class="mini-table">
              <thead><tr><th>상황</th><th>우선 도구</th></tr></thead>
              <tbody>
                <tr><td>무엇부터 고칠까?</td><td>파레토</td></tr>
                <tr><td>원인은 뭘까?</td><td>특성요인도 + 층별</td></tr>
                <tr><td>관계가 있나?</td><td>산점도</td></tr>
                <tr><td>분포가 어떤가?</td><td>히스토그램</td></tr>
                <tr><td>공정이 안정한가?</td><td>관리도</td></tr>
              </tbody>
            </table>
            <div class="warn-box"><strong>주의:</strong> 특성요인도의 모든 X를 "진짜 원인"으로 단정하지 마세요. Vital Few 검증은 가설검정·데이터로 Analyze에서 이어집니다.</div>
            <div class="tip-box">💡 <strong>기억:</strong> 중심과 산포를 함께 보고, 경험 법칙으로 정규 감각을 익힌 뒤, QC7으로 문제를 시각화하세요.</div>
            <div class="lesson-outro">
              <h4>4강 정리</h4>
              <p>평균만 보지 말고 산포를 함께 읽으며, QC7으로 우선순위와 원인을 시각화하는 감각을 익혔습니다. 이제 “도구 상자”가 갖춰졌습니다.</p>
              <p class="next-hint">다음 5강에서는 DMAIC 로드맵과 방법론 선택(DFSS·린·애자일)으로 프로젝트를 어떻게 굴릴지 실무 프레임을 잡습니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "매우 극단적인 이상치(Outlier)가 포함된 데이터 집단의 중심 위치를 파악할 때, 평균(Mean)보다 왜곡이 적어 더 신뢰할 수 있는 대푯값은?", "options": ["분산", "범위", "표준편차", "중앙값 (Median)"], "answer": 3, "rationale": "이상치가 존재하는 경우, 데이터의 순서를 기준으로 정가운데 위치한 중앙값이 평균보다 중심경향을 더 정확히 나타냅니다."},
            {"q": "다음 중 데이터가 중심으로부터 얼마나 넓게 흩어져 있는지를 나타내는 '산포(Dispersion)'의 척도가 아닌 것은?", "options": ["범위 (Range)", "분산 (Variance)", "표준편차 (Standard Deviation)", "최빈값 (Mode)"], "answer": 3, "rationale": "최빈값(Mode)은 데이터 집단에서 가장 자주 나타나는 값으로, 산포가 아닌 중심경향 척도입니다."},
            {"q": "각 데이터가 평균에서 떨어진 거리(편차)를 제곱하여 모두 더한 뒤 평균을 낸 '분산(Variance)'에 루트(√)를 씌워 구하는 값은?", "options": ["상관계수", "표준편차 (σ)", "결정계수", "신뢰구간"], "answer": 1, "rationale": "표준편차(Standard Deviation)는 분산의 양의 제곱근으로, 단위가 원래 데이터와 같아져 실무에서 가장 많이 사용되는 산포 척도입니다."},
            {"q": "정규분포(Normal Distribution)에 대한 '경험 법칙(Empirical Rule)'에 따르면, 평균을 중심으로 ±1표준편차(1σ) 범위 내에 존재하는 데이터의 비율은 약 얼마인가?", "options": ["50%", "68.2%", "95.4%", "99.7%"], "answer": 1, "rationale": "정규분포에서는 평균을 중심으로 ±1σ 내에 약 68.2%, ±2σ 내에 약 95.4%, ±3σ 내에 약 99.7%의 데이터가 분포합니다."},
            {"q": "전체 불량의 80%는 20%의 치명적 원인에서 발생한다는 법칙에 기반하여, 불량 유형을 빈도순으로 나열하고 누적 점유율을 꺾은선으로 표시한 차트는?", "options": ["히스토그램", "산점도", "특성요인도", "파레토 차트 (Pareto Chart)"], "answer": 3, "rationale": "파레토 차트는 가장 중요한 소수의 문제(Vital Few)를 찾아내어 개선의 우선순위를 결정하는 데 사용됩니다."},
            {"q": "결과(문제)에 영향을 미치는 다양한 잠재 원인들을 사람(Man), 기계(Machine), 재료(Material), 방법(Method) 등의 관점에서 물고기 뼈 모양으로 계층화한 브레인스토밍 도구는?", "options": ["특성요인도 (Fishbone Diagram)", "관리도", "가치흐름도", "체크 시트"], "answer": 0, "rationale": "이시카와 가오루가 창안한 특성요인도는 문제의 원인을 논리적이고 체계적으로 발굴하는 데 쓰입니다."},
            {"q": "두 변수(예: 온도와 강도) 사이에 어떠한 비례 또는 반비례 관계가 존재하는지 파악하기 위해 직교 좌표평면 위에 데이터 포인트를 점으로 찍어 나타낸 그래프는?", "options": ["히스토그램", "관리도", "산점도 (Scatter Plot)", "파레토 차트"], "answer": 2, "rationale": "산점도는 원인(X)과 결과(Y) 간의 상관관계를 시각적으로 파악하는 데 가장 유용한 도구입니다."},
            {"q": "수집된 연속형 데이터가 정규분포를 띠는지 1차적으로 확인하기 위해, 데이터의 분포 형태와 중심 위치, 산포를 막대 형태로 시각화한 그래프는?", "options": ["산점도", "히스토그램 (Histogram)", "층별", "관리도"], "answer": 1, "rationale": "히스토그램은 구간별 데이터의 빈도수를 막대로 표현하여 데이터의 전체적인 모양(분포)을 한눈에 보여줍니다."},
            {"q": "막연하게 섞여 있는 전체 데이터를 기계별, 작업자별, 시간대별, 원자재 로트별로 쪼개어 숨겨진 패턴이나 근본적인 차이를 찾아내는 데이터 분류 기법은?", "options": ["층별 (Stratification)", "체크 시트", "특성요인도", "산점도"], "answer": 0, "rationale": "데이터를 의미 있는 그룹(층)으로 나누어 분석하는 층별은 문제의 진짜 원인을 좁혀가는 데 매우 중요합니다."},
            {"q": "공정의 품질 특성치가 시간의 흐름에 따라 통계적으로 안정적인 상태인지, 아니면 외부 요인에 의해 이상(Special Cause)이 발생했는지를 관리한계선(UCL, LCL)을 통해 모니터링하는 시각적 도구는?", "options": ["파레토 차트", "히스토그램", "관리도 (Control Chart)", "산점도"], "answer": 2, "rationale": "관리도는 공정의 변동이 우연원인인지 이상원인인지를 판별하여 실시간 통제를 가능하게 하는 꺾은선 그래프입니다."},
        ]
    },
    {
        id: 5, belt: "Green Belt", status: "locked", title: "5강. DMAIC 프로젝트 로드맵 실무",
        content: `
            <h3>5강. DMAIC 프로젝트 로드맵 실무</h3>
            <p>DMAIC는 기존 프로세스를 구조적으로 개선하는 6시그마의 표준 로드맵입니다. Define → Measure → Analyze → Improve → Control. 각 단계는 산출물(Deliverable)이 분명하며, 다음 단계로 넘어가기 전 게이트 리뷰(챔피언 승인)를 거치는 것이 실무 관례입니다. "아이디어부터 실행"이 아니라 <strong>문제 정의 → 현 수준 → 원인 입증 → 개선 → 유지</strong>의 순서를 지킵니다.</p>
            <p>다만 실무에서는 <strong>모든 프로젝트에 DMAIC만 쓰는 것은 아닙니다</strong>. 업종·프로젝트 성격에 따라 DFSS(DMADV·IDOV·CDOV 등), 린 6시그마, 애자일 6시그마를 고르거나 병행합니다. 잘못된 로드맵 선택은 “틀린 문제”만큼 비용이 큽니다.</p>

            <h4>0. 먼저 고르기 — 어떤 방법론인가?</h4>
            <p>차터를 쓰기 전에 <strong>개선(Fix)</strong>인지 <strong>설계(Create)</strong>인지, <strong>속도(Waste)</strong>가 급한지, <strong>불확실성</strong>이 큰지를 판별하세요. 같은 “품질 문제”라도 답이 되는 로드맵이 다릅니다.</p>
            <div class="infograph">
              <div class="ig-title">프로젝트 성격 → 방법론</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">기존 공정</div><div class="ladder-body"><strong>DMAIC</strong> — 이미 돌아가는 라인·프로세스의 결함·산포를 줄일 때</div></div>
                <div class="ladder-item"><div class="ladder-tag">신규 설계</div><div class="ladder-body"><strong>DFSS</strong> — 제품·서비스·시스템을 처음부터 만들 때 (DMADV·IDOV·CDOV·DCCDI·DMADOV 등)</div></div>
                <div class="ladder-item"><div class="ladder-tag">속도·낭비</div><div class="ladder-body"><strong>린 6시그마</strong> — Lead Time·WIP·7대 낭비가 핵심 이슈일 때 DMAIC에 Lean 도구를 결합</div></div>
                <div class="ladder-item"><div class="ladder-tag">빠른 학습</div><div class="ladder-body"><strong>애자일 6시그마</strong> — 요구가 자주 바뀌거나 IT·디지털 환경에서 짧은 스프린트로 검증할 때</div></div>
              </div>
            </div>
            <div class="infograph">
              <div class="ig-title">한눈에 보는 선택 기준</div>
              <table class="mini-table">
                <thead><tr><th>상황</th><th>추천</th><th>예시</th></tr></thead>
                <tbody>
                  <tr><td>기존 라인 불량·재작업</td><td>DMAIC</td><td>조립수율, 클레임률, 심사리드타임</td></tr>
                  <tr><td>신제품·신규 서비스</td><td>DFSS (DMADV 등)</td><td>신차 모듈, 앱 온보딩, 병원 신프로세스</td></tr>
                  <tr><td>대기·재고·핸드오프 과다</td><td>린 6시그마</td><td>물류 Lead Time, 백오피스 병목</td></tr>
                  <tr><td>요구 변경·시장 불확실</td><td>애자일 6시그마</td><td>디지털 제품, MVP 개선</td></tr>
                  <tr><td>설계+양산 최적화 병행</td><td>DMADOV / 하이브리드</td><td>하드웨어 신제품 + 공정 셋업</td></tr>
                </tbody>
              </table>
            </div>
            <div class="chip-grid">
              <span class="chip hot">DMAIC</span>
              <span class="chip">DFSS</span>
              <span class="chip">린 6시그마</span>
              <span class="chip">애자일 6시그마</span>
              <span class="chip">하이브리드</span>
            </div>
            <div class="info-box"><strong>실무 팁:</strong> “DMAIC로 시작했는데 사실 설계가 틀렸다”면 DFSS로 전환하고, “DFSS로 설계했는데 양산 산포가 남았다”면 DMAIC/린으로 이어 붙입니다. 로드맵은 종교가 아니라 도구입니다. DFSS 세부 변형은 13강에서 다룹니다.</div>

            <div class="infograph">
              <div class="ig-title">DMAIC 5단계</div>
              <div class="flow-row">
                <div class="flow-step accent">D</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">M</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step accent">A</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">I</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step accent">C</div>
              </div>
              <div class="kpi-row" style="margin-top:0.85rem;">
                <div class="kpi"><span class="num">D</span><span class="lbl">문제·범위 정의</span></div>
                <div class="kpi"><span class="num">A</span><span class="lbl">Vital Few 검증</span></div>
                <div class="kpi"><span class="num">C</span><span class="lbl">요요 방지</span></div>
              </div>
            </div>

            <h4>1. Define — 프로젝트 차터</h4>
            <p>Define의 핵심 산출물은 <strong>Project Charter(프로젝트 헌장)</strong>입니다. 해결책을 미리 쓰지 않습니다. "무엇을, 왜, 어디까지, 누가, 얼마의 효과로"만 합의합니다. 문제 기술서(Problem Statement)는 증상·영향·시점을 사실에 가깝게 쓰고, CTQ와 목표 수치로 성공 정의를 고정합니다. Scope In/Out이 흐리면 프로젝트가 무한 확장됩니다.</p>
            <div class="infograph">
              <div class="ig-title">차터에 들어가는 것</div>
              <div class="chip-grid">
                <span class="chip hot">Problem Statement</span>
                <span class="chip">CTQ / Goal</span>
                <span class="chip">Scope In/Out</span>
                <span class="chip">Team &amp; Roles</span>
                <span class="chip">재무 기대효과</span>
                <span class="chip">일정·마일스톤</span>
              </div>
            </div>
            <div class="warn-box"><strong>차터에 넣지 말 것:</strong> 최종 개선안(Final Solution). 해결책은 Analyze·Improve 이후에야 나옵니다.</div>

            <h4>2. Measure — As-Is를 숫자로</h4>
            <p>현재 수준을 측정하기 전, 데이터가 믿을 만한지 <strong>MSA</strong>로 검증합니다. 측정이 흔들리면 "공정이 나쁜 것인지, 자가 나쁜 것인지"를 구분할 수 없습니다. MSA 이후에는 공정능력·시그마 수준·베이스라인 불량률·리드타임을 확정합니다. "감으로 나쁘다"가 아니라 "Z-bench / DPMO / Cpk가 얼마"로 말해야 Improve 전후 비교가 가능합니다.</p>
            <p>데이터 수집 계획에는 무엇을, 어디서, 얼마나, 누가, 어떤 조작적 정의로 재는지가 들어가야 합니다. 정의가 다르면 같은 이름이라도 다른 데이터가 됩니다.</p>

            <h4>3. Analyze — Vital Few</h4>
            <p>잠재 원인(X)은 많습니다(Trivial Many). 그중 Y에 통계적으로 유의미한 영향을 주는 <strong>Vital Few</strong>만 남기는 단계가 Analyze입니다. 파레토·특성요인도·공정맵으로 후보를 좁히고, 가설검정·회귀·다변량 탐색 등으로 입증합니다. "모두가 원인"이라고 하면 개선 자원이 흩어집니다.</p>
            <div class="infograph">
              <div class="ig-title">원인 압축</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">Many</div><div class="ladder-body">브레인스토밍·공정맵에서 나온 다수 X</div></div>
                <div class="ladder-item"><div class="ladder-tag">Few</div><div class="ladder-body">데이터·파레토로 후보 축소</div></div>
                <div class="ladder-item"><div class="ladder-tag">Vital</div><div class="ladder-body">가설검정으로 입증된 핵심 X</div></div>
              </div>
            </div>

            <h4>4. Improve &amp; Control</h4>
            <p>Improve에서는 DOE·시뮬레이션·파일럿 등으로 최적 조건을 찾고 부작용을 검증합니다. 전면 롤아웃 전에 Pilot로 리스크를 줄이는 것이 표준입니다. Control에서는 SOP 개정, 교육, <strong>관리계획서(Control Plan)</strong>, SPC 관리도로 회귀(요요)를 막습니다. 개선은 이벤트가 아니라 새로운 일상이어야 합니다.</p>
            <div class="infograph">
              <div class="ig-title">단계별 핵심 산출물</div>
              <table class="mini-table">
                <thead><tr><th>단계</th><th>대표 산출물</th></tr></thead>
                <tbody>
                  <tr><td>D</td><td>Charter, SIPOC, CTQ</td></tr>
                  <tr><td>M</td><td>MSA, 데이터계획, Baseline</td></tr>
                  <tr><td>A</td><td>가설검정, Vital Few</td></tr>
                  <tr><td>I</td><td>DOE, Pilot, 개선안</td></tr>
                  <tr><td>C</td><td>Control Plan, SPC, SOP</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout-grid">
              <div class="callout"><strong>Pilot</strong>전면 적용 전 소규모 검증으로 리스크 축소</div>
              <div class="callout"><strong>Control Plan</strong>누가·언제·무엇을 측정하고 이상 시 조치</div>
            </div>
            <div class="tip-box">💡 <strong>한 줄:</strong> 먼저 방법론을 고르고(DMAIC / DFSS / 린 / 애자일), DMAIC를 쓸 때는 게이트별 산출물로 전진하세요.</div>
            <div class="lesson-outro">
              <h4>5강 정리</h4>
              <p>상황별 방법론 선택과 DMAIC 게이트·산출물을 익혔습니다. 차터부터 Control Plan까지 “느낌”이 아니라 산출물로 전진하는 습관이 핵심입니다.</p>
              <p class="next-hint">다음 6강 MSA에서는 데이터가 믿을 만한지부터 검증합니다. Measure의 성패가 여기서 갈립니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "이미 운영 중인 공정의 불량·산포를 줄이는 데 가장 적합한 6시그마 로드맵은?", "options": ["DMADV", "IDOV", "DMAIC", "DCCDI"], "answer": 2, "rationale": "DMAIC는 기존 프로세스를 정의-측정-분석-개선-관리로 개선하는 표준 로드맵입니다."},
            {"q": "신제품·신규 서비스를 '처음부터' 6시그마 품질로 설계할 때 쓰는 방법론군은?", "options": ["SPC", "PDCA", "DFSS", "Gage R&R"], "answer": 2, "rationale": "DFSS(Design for Six Sigma)는 신규 설계에 쓰이며 DMADV·IDOV·CDOV 등 세부 로드맵이 있습니다."},
            {"q": "리드타임·재고·핸드오프 낭비가 핵심일 때 DMAIC에 Lean 도구를 결합하는 접근은?", "options": ["폭포수 모델", "린 6시그마", "가설검정만", "관리도만"], "answer": 1, "rationale": "린 6시그마는 낭비 제거(속도)와 변동 감소(품질)를 동시에 다룹니다."},
            {"q": "요구사항이 자주 바뀌는 디지털/IT 환경에서 짧은 주기로 DMAIC를 돌리는 접근은?", "options": ["애자일 6시그마", "OFAT", "시그마 시프트", "숨은 공장"], "answer": 0, "rationale": "애자일 6시그마는 스프린트 단위로 가설·실험을 반복해 학습 속도를 높입니다."},
            {"q": "6시그마 프로젝트의 Define(정의) 단계에서 작성하여 경영진(챔피언)의 승인을 받는 핵심 산출물은 무엇인가?", "options": ["관리계획서 (Control Plan)", "프로젝트 차터 (Project Charter)", "데이터 수집 계획서", "가설검정 보고서"], "answer": 1, "rationale": "프로젝트 헌장(Project Charter)은 해결할 문제, CTQ, 목표, 범위, 기대효과 등을 명확히 정의하는 Define 단계의 핵심 산출물입니다."},
            {"q": "수집한 데이터의 신뢰성을 확보하기 위해 측정 시스템 분석(MSA)을 수행하는 DMAIC 단계는?", "options": ["Define (정의)", "Measure (측정)", "Analyze (분석)", "Control (관리)"], "answer": 1, "rationale": "현재 프로세스의 수준(As-Is)을 정확히 파악하기 전, 데이터의 오차를 검증하는 MSA는 측정(Measure) 단계에서 필수적으로 수행합니다."},
            {"q": "결과(Y)에 영향을 미치는 수많은 잠재 원인(X) 중, 통계적 가설검정을 통해 '핵심 소수원인(Vital Few)'을 검증해내는 단계는?", "options": ["Define (정의)", "Measure (측정)", "Analyze (분석)", "Improve (개선)"], "answer": 2, "rationale": "잠재 원인 중 불량에 실질적이고 치명적인 영향을 미치는 진짜 원인(Vital Few)을 밝혀내는 것은 Analyze(분석) 단계입니다."},
            {"q": "실험계획법(DOE)을 활용하여 핵심 원인을 제거할 최적의 공정 조건을 도출하는 단계는?", "options": ["Measure (측정)", "Analyze (분석)", "Improve (개선)", "Control (관리)"], "answer": 2, "rationale": "최적화 방안을 도출하고 파일럿 테스트를 통해 해결책을 적용하는 단계는 Improve(개선)입니다."},
            {"q": "개선된 성과가 원래의 나쁜 상태로 돌아가는 '요요 현상'을 방지하기 위해 통계적 공정 관리도(SPC)를 도입하는 단계는?", "options": ["Define (정의)", "Analyze (분석)", "Improve (개선)", "Control (관리)"], "answer": 3, "rationale": "작업 표준서(SOP)를 개정하고 지속적인 모니터링 시스템을 구축하는 마지막 단계는 Control(관리)입니다."},
            {"q": "다음 중 Define(정의) 단계의 프로젝트 헌장(Project Charter)에 포함되지 않는 항목은?", "options": ["프로젝트 목표(Goal) 및 대상 범위(Scope)", "팀 구성원 및 역할(Team & Roles)", "문제 기술서(Problem Statement)", "최종 개선 해결책(Final Solution)"], "answer": 3, "rationale": "구체적인 해결책은 Analyze와 Improve 단계를 거쳐야 나오므로, 프로젝트 초기인 Define 단계에서는 알 수 없습니다."},
        ]
    },
    {
        id: 6, belt: "Green Belt", status: "locked", title: "6강. 측정 시스템 분석 (MSA)",
        content: `
            <h3>6강. 측정 시스템 분석 (MSA)</h3>
            <p>분석의 품질은 데이터의 품질을 넘을 수 없습니다(GIGO: Garbage In, Garbage Out). MSA는 관측된 변동이 <strong>실제 제품/공정 변동</strong>인지, <strong>측정 과정의 오차</strong>인지 분리해 검증합니다. Measure 단계에서 MSA를 건너뛰면 이후 가설검정·공정능력이 모두 흔들립니다. "숫자가 있다"와 "숫자가 믿을 만하다"는 다릅니다.</p>
            <p>측정 시스템은 계측기만이 아닙니다. 사람, 방법, 환경, 시료 준비, 소프트웨어까지 포함합니다. 저울·버니어·자동검사기뿐 아니라 설문 척도, 수작업 타이머, 티켓 분류 규칙도 MSA의 대상이 될 수 있습니다.</p>

            <h4>1. 정확성 vs 정밀성</h4>
            <p>과녁으로 비유하면 이해하기 쉽습니다. 중심(참값)에 평균이 가까운지가 정확성, 탄착군이 오밀조밀한지가 정밀성입니다. 둘은 독립적으로 나쁠 수 있습니다. 정확성만 좋고 정밀성이 나쁘면 매번 다른 값이 나오고, 정밀성만 좋고 정확성이 나쁘면 "일관되게 틀린" 상태가 됩니다.</p>
            <div class="infograph">
              <div class="ig-title">Accuracy vs Precision</div>
              <div class="compare-2">
                <div class="compare-card good">
                  <h5>정확성 (Accuracy)</h5>
                  <ul>
                    <li>평균 ≈ 참값(Target)</li>
                    <li>치우침(Bias)·선형성·안정성</li>
                    <li>교정·영점 조절로 개선</li>
                  </ul>
                </div>
                <div class="compare-card">
                  <h5>정밀성 (Precision)</h5>
                  <ul>
                    <li>반복 측정의 산포</li>
                    <li>Gage R&amp;R (EV+AV)</li>
                    <li>기기·방법·교육으로 개선</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="formula">Bias = 관측 평균 − 참값(Reference)<small>체계적 치우침. 예: 10kg 분동 → 10.5kg 표시</small></div>
            <p>선형성(Linearity)은 측정 범위 전반에서 치우침이 일정한지, 안정성(Stability)은 시간이 지나도 정확성이 유지되는지를 봅니다. 정확성 문제는 대개 교정·마스터 표준으로, 정밀성 문제는 Gage R&amp;R 개선으로 접근합니다.</p>

            <h4>2. Gage R&amp;R: EV와 AV</h4>
            <ul>
              <li><strong>반복성 (Repeatability, EV):</strong> 동일 작업자·동일 측정기로 반복할 때의 산포. 주로 계측기(Equipment) 자체, 고정 불량, 해상도 부족.</li>
              <li><strong>재현성 (Reproducibility, AV):</strong> 다른 작업자(Appraiser)가 동일 기기로 측정할 때의 산포. 방법·힘·각도·교육 차이.</li>
            </ul>
            <div class="infograph">
              <div class="ig-title">오차 분해</div>
              <div class="flow-row">
                <div class="flow-step">총 관측변동</div>
                <span class="flow-arrow">=</span>
                <div class="flow-step">부품변동</div>
                <span class="flow-arrow">+</span>
                <div class="flow-step accent">Gage R&amp;R</div>
              </div>
              <div class="flow-row" style="margin-top:0.5rem;">
                <div class="flow-step">EV</div>
                <span class="flow-arrow">+</span>
                <div class="flow-step">AV</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step accent">R&amp;R</div>
              </div>
            </div>
            <div class="info-box"><strong>해석 팁:</strong> AV ≫ EV이면 사람·표준화 교육이 1순위. EV ≫ AV이면 기기 정밀도·고정·환경이 1순위입니다. 부품 간 변동이 너무 작으면 %Study Var가 과대 평가될 수 있어 시료 선정도 중요합니다.</div>

            <h4>3. %Study Variation 판정</h4>
            <p>%Study Var는 측정 시스템 변동이 전체 연구 변동에서 차지하는 비율입니다. AIAG 등 실무 가이드의 흔한 임계값을 기준으로 합격/조건부/불합격을 나눕니다. 불합격인데 분석을 계속하면 "공정 개선"이 아니라 "측정 개선"이 먼저입니다.</p>
            <div class="infograph">
              <div class="ig-title">%Study Var 임계 (상대 스케일)</div>
              <div class="bar-chart">
                <div class="bar-row"><span>&lt;10%</span><div class="bar-track"><div class="bar-fill" style="width:25%"></div></div><span>우수</span></div>
                <div class="bar-row"><span>10–30%</span><div class="bar-track"><div class="bar-fill" style="width:55%"></div></div><span>조건부</span></div>
                <div class="bar-row"><span>&gt;30%</span><div class="bar-track"><div class="bar-fill" style="width:90%"></div></div><span>불합격</span></div>
              </div>
              <div class="kpi-row" style="margin-top:0.8rem;">
                <div class="kpi"><span class="num">&lt;10%</span><span class="lbl">합격·우수</span></div>
                <div class="kpi"><span class="num">10–30%</span><span class="lbl">조건부 수용</span></div>
                <div class="kpi"><span class="num">&gt;30%</span><span class="lbl">즉시 개선</span></div>
              </div>
            </div>
            <div class="callout-grid">
              <div class="callout"><strong>치우침·선형성</strong>측정 범위 전반에서 평균이 참값을 따르는지</div>
              <div class="callout"><strong>안정성</strong>시간이 지나도 정확성이 유지되는지</div>
            </div>
            <div class="tip-box">💡 <strong>판정:</strong> %Study Var &lt; 10%면 우수, &gt; 30%면 측정 시스템을 고친 뒤 데이터를 다시 모으세요.</div>
            <div class="lesson-outro">
              <h4>6강 정리</h4>
              <p>정확성·정밀성, Gage R&amp;R, %Study Variation 판정으로 측정 시스템을 검증하는 법을 익혔습니다. 나쁜 데이터로는 좋은 분석이 불가능합니다.</p>
              <p class="next-hint">다음 7강에서는 Cp·Cpk로 “공정이 규격을 얼마나 잘 채우는지” 공정능력을 읽습니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "측정 시스템 분석(MSA)에서 측정 평균값이 참값(Target)에 얼마나 일치하는가를 나타내는 척도는?", "options": ["정밀성 (Precision)", "정확성 (Accuracy)", "반복성 (Repeatability)", "재현성 (Reproducibility)"], "answer": 1, "rationale": "평균이 과녁의 정중앙(참값)과 일치하는 정도를 정확성(Accuracy)이라고 하며, 주로 치우침으로 평가합니다."},
            {"q": "MSA에서 측정값들이 과녁을 빗나가더라도 한곳에 오밀조밀하게 모여 있는 '산포'의 개념을 의미하는 것은?", "options": ["선형성 (Linearity)", "정확성 (Accuracy)", "안정성 (Stability)", "정밀성 (Precision)"], "answer": 3, "rationale": "반복 측정 시 데이터들이 흩어지지 않고 모여 있는 산포의 좁은 정도를 정밀성(Precision)이라고 합니다."},
            {"q": "측정 오차의 핵심 원인 중, '동일한 작업자'가 '동일한 측정기'로 여러 번 측정할 때 발생하는 산포는?", "options": ["반복성 (Repeatability, EV)", "재현성 (Reproducibility, AV)", "선형성 (Linearity)", "치우침 (Bias)"], "answer": 0, "rationale": "동일 조건 하에서의 측정 변동인 반복성은 보통 측정 계측기기(Equipment) 자체의 오차로 인해 발생합니다."},
            {"q": "측정 오차의 핵심 원인 중, '다른 작업자들'이 '동일한 측정기'로 측정할 때 발생하는 작업자 간의 평균적 산포는?", "options": ["반복성 (Repeatability, EV)", "재현성 (Reproducibility, AV)", "안정성 (Stability)", "치우침 (Bias)"], "answer": 1, "rationale": "작업자(Appraiser)마다 측정 방식이 다르거나 힘의 세기가 달라서 발생하는 오차를 재현성이라고 합니다."},
            {"q": "Gage R&R 분석 결과, 총 변동 대비 측정 시스템 변동 비율(%Study Var)이 10% 미만(또는 1% 미만)으로 산출되었다. 올바른 판정은?", "options": ["측정 시스템을 즉각 폐기해야 한다.", "조건부로 수용 가능하다.", "측정 시스템이 매우 우수하여 합격이다.", "작업자 재교육이 시급하다."], "answer": 2, "rationale": "측정 시스템에 의한 오차가 전체 변동의 10% 미만이면 데이터의 신뢰성이 매우 높은 우수한(합격) 상태로 판정합니다."},
            {"q": "Gage R&R 분석에서 %Study Var가 35%로 산출되었다. 다음 중 가장 적절한 조치는?", "options": ["측정 시스템이 매우 우수하므로 다음 단계로 넘어간다.", "조건부로 수용하고 데이터를 분석한다.", "측정 시스템을 즉시 개선(기기 점검, 교육 등)한 후 다시 데이터를 수집한다.", "측정 대상 부품을 다른 재질로 바꾼다."], "answer": 2, "rationale": "측정 오차가 30%를 초과하면 불합격이므로, 기기 보정이나 작업자 교육 등 개선을 거친 후 MSA를 재실시해야 합니다."},
            {"q": "MSA 분석 결과 재현성(AV) 변동이 반복성(EV)보다 훨씬 크게 나타났다. 가장 적절한 1차 개선 조치는?", "options": ["새로운 고가의 측정 기기를 도입한다.", "계측기의 영점을 다시 맞춘다.", "작업자 간 측정 방식이 통일되도록 측정 표준 작업지침서(SOP)를 교육한다.", "샘플의 크기를 줄인다."], "answer": 2, "rationale": "재현성은 작업자(사람) 간의 차이에서 발생하므로 기기 교체보다는 작업자 대상의 표준화 교육이 가장 효과적입니다."},
            {"q": "다음 중 측정 시스템의 '정확성(Accuracy)'을 평가하는 지표가 아닌 것은?", "options": ["치우침 (Bias)", "선형성 (Linearity)", "안정성 (Stability)", "Gage R&R"], "answer": 3, "rationale": "치우침, 선형성, 안정성은 정확성(평균의 이동)을 평가하며, Gage R&R은 정밀성(산포)을 평가하는 지표입니다."},
            {"q": "저울로 10kg짜리 표준 분동을 측정했는데 10.5kg이 나왔다. 측정값이 참값에서 체계적으로 벗어난 이 차이를 무엇이라 하는가?", "options": ["치우침 (Bias)", "재현성 (AV)", "반복성 (EV)", "분산 (Variance)"], "answer": 0, "rationale": "참값(Reference)과 관측된 평균값 사이의 차이를 치우침(Bias)이라고 하며, 보통 영점 조절로 해결합니다."},
            {"q": "시간의 흐름에 따라 측정 시스템의 정확성이 변하지 않고 유지되는 정도를 나타내는 지표는?", "options": ["선형성 (Linearity)", "안정성 (Stability)", "반복성 (Repeatability)", "재현성 (Reproducibility)"], "answer": 1, "rationale": "동일한 표준품을 한 달 뒤, 1년 뒤에 재었을 때도 같은 값이 나오는지 확인하는 지표가 안정성입니다."},
        ]
    },
    {
        id: 7, belt: "Green Belt", status: "locked", title: "7강. 공정능력지수 (Process Capability)",
        content: `
            <h3>7강. 공정능력지수 (Process Capability)</h3>
            <p>공정능력지수는 고객이 허용한 규격 폭(Tolerance) 안에 우리 공정의 산포가 얼마나 여유 있게 들어가는지를 보여주는 <strong>품질 성적표</strong>입니다. 수율·불량률과 연결되지만, "규격 대비 산포와 치우침"을 한 숫자로 요약한다는 점이 강점입니다. Measure에서 베이스라인을 잡고 Improve 전후를 비교할 때 가장 많이 쓰입니다.</p>
            <p>중요한 전제는 <strong>공정이 통계적으로 안정</strong>해야 한다는 것입니다. 관리도가 불안한데 능력지수만 계산하면, 예측 불가능한 상태를 숫자로 포장하는 셈입니다. 또한 규격(USL/LSL)은 고객·설계에서 온 것이지, 공정이 "맞춰 쓰기" 위해 임의로 바꾸면 안 됩니다.</p>

            <h4>1. Cp와 Cpk</h4>
            <p>단기 공정능력은 부분군 내(Within) 표준편차처럼 외부 노이즈가 통제된 변동을 씁니다. 설비·재료의 "잠재력"에 가깝습니다.</p>
            <div class="formula">Cp = (USL − LSL) / (6σ)<small>평균이 정중앙이라 가정한 잠재 능력. 산포만 평가</small></div>
            <div class="formula">Cpk = min( (USL−μ)/(3σ), (μ−LSL)/(3σ) )<small>치우침을 반영한 실제 능력. 항상 Cpk ≤ Cp</small></div>
            <div class="infograph">
              <div class="ig-title">Cpk vs Cp 관계</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">Cp</div><div class="ladder-body">산포만 봄 → "잠재적으로 얼마나 좁은가"</div></div>
                <div class="ladder-item"><div class="ladder-tag">치우침</div><div class="ladder-body">평균이 Target에서 멀어지면 손실</div></div>
                <div class="ladder-item"><div class="ladder-tag">Cpk</div><div class="ladder-body">실제 여유. Cp에서 치우침만큼 깎임</div></div>
              </div>
            </div>
            <p>Cp가 높은데 Cpk가 낮다면, 산포는 이미 좋은데 평균이 한쪽으로 기운 상태입니다. 이 경우 고가 설비 교체보다 <strong>세팅·평균을 Target으로 이동</strong>하는 것이 1순위입니다.</p>

            <h4>2. Pp / Ppk (장기)</h4>
            <p>Pp·Ppk는 전체 표준편차(Overall)를 사용해 계절·교대·로트·보수 등 장기 변동을 포함합니다. 고객이 체감하는 출하 품질에 더 가깝습니다. 단기 Cp/Cpk가 좋아도 장기 Ppk가 나쁘면 "현장 유지력"이나 로트 간 변동에 문제가 있는 신호입니다. 보고 시 단기/장기를 구분해 제시하세요.</p>

            <h4>3. 판정 기준 KPI</h4>
            <p>산업·고객 요구에 따라 기준은 달라질 수 있으나, 제조에서 흔히 쓰는 기준은 다음과 같습니다. Cpk &lt; 1.0이면 규격 대비 여유가 없어 불량이 구조적으로 발생하기 쉽습니다.</p>
            <div class="infograph">
              <div class="ig-title">산업에서 자주 쓰는 임계</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">1.00</span><span class="lbl">최소 경계 (위험)</span></div>
                <div class="kpi"><span class="num">1.33</span><span class="lbl">양호·합격 (≈4σ)</span></div>
                <div class="kpi"><span class="num">2.00</span><span class="lbl">6시그마급</span></div>
              </div>
              <div class="bar-chart" style="margin-top:0.85rem;">
                <div class="bar-row"><span>Cpk&lt;1</span><div class="bar-track"><div class="bar-fill" style="width:30%"></div></div><span>다수 이탈</span></div>
                <div class="bar-row"><span>1.33</span><div class="bar-track"><div class="bar-fill" style="width:65%"></div></div><span>목표선</span></div>
                <div class="bar-row"><span>2.0</span><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><span>월드클래스</span></div>
              </div>
            </div>

            <h4>4. 치우침 문제 vs 산포 문제</h4>
            <p>능력지수를 "낮다"고만 말하지 말고, Cp와 Cpk의 간격으로 처방을 갈라야 합니다. 평균 이동과 산포 축소는 비용·난이도·도구가 다릅니다.</p>
            <div class="infograph">
              <div class="ig-title">진단과 처방</div>
              <div class="compare-2">
                <div class="compare-card">
                  <h5>Cp↑ / Cpk↓</h5>
                  <ul>
                    <li>산포는 좁음</li>
                    <li>평균이 크게 치우침</li>
                    <li>처방: 세팅·평균을 Target으로</li>
                  </ul>
                </div>
                <div class="compare-card bad">
                  <h5>Cp·Cpk 모두 낮음</h5>
                  <ul>
                    <li>산포 자체가 큼</li>
                    <li>설비·재료·방법 변동</li>
                    <li>처방: 변동원 제거·DOE</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="svg-wrap">
              <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" aria-label="spec and process">
                <line x1="40" y1="70" x2="280" y2="70" stroke="#94A3B8" stroke-width="2"/>
                <line x1="60" y1="40" x2="60" y2="80" stroke="#EF4444" stroke-width="2"/>
                <line x1="260" y1="40" x2="260" y2="80" stroke="#EF4444" stroke-width="2"/>
                <text x="60" y="32" text-anchor="middle" font-size="10" fill="#EF4444">LSL</text>
                <text x="260" y="32" text-anchor="middle" font-size="10" fill="#EF4444">USL</text>
                <ellipse cx="160" cy="70" rx="55" ry="22" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
                <text x="160" y="74" text-anchor="middle" font-size="11" fill="#1E40AF" font-weight="700">공정 산포</text>
              </svg>
            </div>
            <div class="tip-box">💡 <strong>기억:</strong> Cpk ≥ 1.33을 실무 합격선으로 보고, Cpk 2.0이면 6시그마 수준입니다. Cp만 보지 말고 치우침을 반드시 함께 읽으세요.</div>
            <div class="lesson-outro">
              <h4>7강 정리</h4>
              <p>Cp와 Cpk의 차이, 치우침, 1.33·2.0 목표선을 익혔습니다. 공정능력은 “현재 수준”을 경영 언어로 번역하는 지표입니다.</p>
              <p class="next-hint">다음 8강에서는 가설검정과 Type I·II 오류로 “차이가 우연인지”를 판정하는 Analyze 핵심을 다룹니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "공정능력지수에 대한 설명으로 가장 올바른 것은?", "options": ["공정의 불량품 개수를 의미한다.", "고객이 요구하는 규격 폭 안에 공정의 산포가 얼마나 잘 들어가는지를 나타내는 비율이다.", "공정의 생산 속도를 나타낸다.", "측정 시스템의 오차율을 나타낸다."], "answer": 1, "rationale": "공정능력지수는 규격 한계(Tolerance) 대비 공정의 흩어짐(6σ) 비율로, 공정이 얼마나 우수한 품질을 내는지 수치화한 것입니다."},
            {"q": "단기 공정능력지수 중에서, 공정의 '평균 치우침'을 전혀 고려하지 않고 오직 규격 폭과 공정 산포만 비교하는 잠재 능력 지수는?", "options": ["Cp", "Cpk", "Pp", "Ppk"], "answer": 0, "rationale": "치우침을 배제하고 평균이 정중앙에 있다고 가정할 때 공정이 낼 수 있는 최대의 잠재 능력이 Cp입니다."},
            {"q": "공정의 평균이 어느 한쪽(규격 상한 또는 하한)으로 치우친 정도를 반영하여 산출하는 단기 '실제' 공정능력 지수는?", "options": ["Cp", "Cpk", "Pp", "Ppk"], "answer": 1, "rationale": "Cpk는 치우침을 고려하므로, 공정이 실제로 양품을 생산해 낼 수 있는 능력을 나타냅니다."},
            {"q": "Cp와 Cpk의 관계에 대한 설명으로 올바른 것은?", "options": ["항상 Cp = Cpk 이다.", "항상 Cpk > Cp 이다.", "항상 Cpk ≤ Cp 이다.", "서로 연관성이 없다."], "answer": 2, "rationale": "Cpk는 잠재능력인 Cp에서 평균의 치우침(손실)만큼을 빼고 계산하므로, 절대 Cp보다 클 수 없습니다."},
            {"q": "계절, 작업자 교대, 원자재 변경 등 공정에 영향을 미치는 모든 환경적 변동(부분군 간 변동 포함)이 반영된 전체 데이터를 사용하는 공정능력 지수는?", "options": ["Cp, Cpk", "Pp, Ppk", "Z-st", "Gage R&R"], "answer": 1, "rationale": "장기간에 걸친 현실적인 전체 변동을 반영하는 것은 장기 공정능력지수인 Pp, Ppk입니다."},
            {"q": "대부분의 제조업 및 산업에서 공정능력이 '우수하다(합격)'고 판정하는 Cpk의 최소 기준값은?", "options": ["0.67", "1.00", "1.33", "2.00"], "answer": 2, "rationale": "Cpk 1.33(약 4시그마 수준) 이상을 통상적으로 관리 상태가 양호하고 우수한 공정으로 평가합니다."},
            {"q": "공정이 완벽한 '6시그마 수준'을 달성했을 때의 Cpk 값은 얼마인가?", "options": ["1.0", "1.33", "1.67", "2.0"], "answer": 3, "rationale": "규격 중심에서 한쪽 규격 한계까지 6σ가 들어가는 상태이므로 Cpk 값은 2.0이 됩니다."},
            {"q": "계산 결과 Cp는 1.6으로 매우 우수하지만, Cpk는 0.7로 불량 위험 수준으로 나타났다. 이를 해결하기 위한 가장 시급한 조치는?", "options": ["설비를 전면 교체하여 산포를 줄인다.", "작업자 교육을 통해 산포를 줄인다.", "공정의 평균 세팅값을 조절하여 규격 중심(Target)으로 이동시킨다.", "규격 폭을 늘려달라고 고객에게 요청한다."], "answer": 2, "rationale": "Cp가 크다는 것은 산포는 충분히 작다는 뜻입니다. Cpk만 낮다면 평균이 크게 치우쳐 있다는 뜻이므로, 설비 세팅(영점)을 조절해 평균을 중앙으로 옮겨주면 됩니다."},
            {"q": "단기 공정능력을 계산할 때 사용되는 '부분군 내(Within) 표준편차'의 특징은?", "options": ["외부의 모든 환경 변동이 섞여 있다.", "한 로트 안에서 단시간에 측정되어 환경적 노이즈가 통제된 상태이다.", "1년 치 데이터를 한 번에 모아서 계산한다.", "재현성 오차를 포함한다."], "answer": 1, "rationale": "단기 공정능력은 외부 변동이 개입하기 전의 가장 순수한 기계/재료의 이상적 능력(부분군 내 변동)을 측정합니다."},
            {"q": "공정능력지수 Cpk가 1.0 미만일 때의 의미로 가장 적절한 것은?", "options": ["공정능력이 매우 부족하여 규격 이탈(불량)이 다수 발생하고 있다.", "대부분의 산업에서 권장하는 우수한 상태이다.", "완벽한 무결점 6시그마 상태이다.", "측정 시스템에 이상이 생겼음을 의미한다."], "answer": 0, "rationale": "Cpk < 1.0은 공정의 산포가 규격 폭을 벗어났음을 수학적으로 의미하므로, 즉각적인 개선 조치가 필요합니다."},
        ]
    },
    {
        id: 8, belt: "Green Belt", status: "locked", title: "8강. 가설검정과 2가지 통계적 오류",
        content: `
            <h3>8강. 가설검정과 2가지 통계적 오류</h3>
            <p>현장에서 "이번 개선 후 평균이 조금 올랐다"는 흔합니다. 그러나 그 차이가 <strong>우연의 산포</strong>인지, <strong>통계적으로 유의미한 효과</strong>인지를 가르는 도구가 가설검정입니다. Analyze 단계에서 Vital Few를 "의견"이 아니라 "증거"로 만들 때 핵심이 됩니다. 표본이 작거나 변동이 크면, 눈으로 보이는 차이도 우연일 수 있습니다.</p>
            <p>가설검정은 법정에 비유되곤 합니다. 기본은 무죄(H0: 차이 없음)이고, 충분히 강한 증거가 있을 때만 유죄(H0 기각)로 갑니다. 증거가 애매하면 "무죄 확정"이 아니라 "아직은 기각할 수 없음"에 가깝습니다.</p>

            <h4>1. H0와 H1</h4>
            <ul>
              <li><strong>귀무가설 (H0):</strong> 차이가 없다 / 효과가 없다. (기본 상태)</li>
              <li><strong>대립가설 (H1 또는 Ha):</strong> 차이가 있다 / 효과가 있다. (우리가 입증하려는 주장)</li>
            </ul>
            <p>단측/양측 검정 선택은 실무 질문에 맞춥니다. "개선 후가 더 좋은가"만 보면 단측, "다르기만 하면 되는가"면 양측입니다. 유의수준 α는 보통 0.05를 쓰지만, 안전·규제 이슈에서는 더 엄격히 잡을 수 있습니다.</p>
            <div class="formula">유의수준 α (흔히 0.05)<small>H0가 참인데 기각할 최대 허용 확률 — Type I 오류율</small></div>

            <h4>2. p-value 의사결정</h4>
            <p>p-value는 "H0가 참일 때, 현재만큼(또는 더) 극단적인 결과가 나올 확률"의 요약입니다. 작을수록 H0에 불리한 증거입니다. 의사결정은 단순합니다. p ≤ α이면 H0 기각, 그렇지 않으면 기각하지 않습니다.</p>
            <div class="infograph">
              <div class="ig-title">p-value 의사결정 흐름</div>
              <div class="flow-row">
                <div class="flow-step">가설 설정</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">데이터·통계량</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step accent">p-value</div>
              </div>
              <div class="flow-row" style="margin-top:0.55rem;">
                <div class="flow-step">p ≤ α</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step accent">H0 기각</div>
                <span class="flow-arrow">/</span>
                <div class="flow-step">p &gt; α</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">기각 못함</div>
              </div>
            </div>
            <div class="info-box"><strong>오해 방지:</strong> p=0.04가 "효과가 96% 진짜"라는 뜻은 아닙니다. α와 비교해 H0 기각 여부를 판단하는 규칙에 가깝습니다. 또한 유의함 ≠ 실무적 중요함입니다.</div>

            <h4>3. Type I / Type II 오류</h4>
            <p>결정을 내리면 두 종류의 실수를 피할 수 없습니다. Type I은 없는 차이를 있다고 보는 것, Type II는 있는 차이를 놓치는 것입니다. 품질 검사 맥락에서는 각각 생산자 위험·소비자 위험에 자주 비유됩니다.</p>
            <div class="infograph">
              <div class="ig-title">두 오류와 이해관계</div>
              <div class="compare-2">
                <div class="compare-card bad">
                  <h5>Type I (α)</h5>
                  <ul>
                    <li>H0 참인데 기각</li>
                    <li>없는 효과를 "있다"고 봄</li>
                    <li>생산자 위험(불량 아닌데 불량 판정)에 비유</li>
                  </ul>
                </div>
                <div class="compare-card">
                  <h5>Type II (β)</h5>
                  <ul>
                    <li>H0 거짓인데 기각 못함</li>
                    <li>있는 효과를 놓침</li>
                    <li>소비자 위험(불량인데 통과)에 비유</li>
                  </ul>
                </div>
              </div>
              <div class="kpi-row" style="margin-top:0.8rem;">
                <div class="kpi"><span class="num">α</span><span class="lbl">Type I 위험</span></div>
                <div class="kpi"><span class="num">β</span><span class="lbl">Type II 위험</span></div>
                <div class="kpi"><span class="num">1−β</span><span class="lbl">검정력(Power)</span></div>
              </div>
            </div>
            <p>표본을 키우면 일반적으로 검정력(1−β)이 올라갑니다. α를 너무 작게만 잡으면 Type II가 커질 수 있어, 실무에서는 α=0.05와 함께 표본 크기·최소 검출 효과(Effect size)를 함께 설계합니다.</p>

            <h4>4. t-test vs ANOVA</h4>
            <p>비교하는 집단 수와 설계에 따라 도구를 고릅니다. 두 평균이면 t, 세 개 이상이면 ANOVA가 기본입니다. 짝지은 전·후 데이터는 Paired t가 맞습니다.</p>
            <table class="mini-table">
              <thead><tr><th>도구</th><th>비교 대상</th><th>질문</th></tr></thead>
              <tbody>
                <tr><td>1-sample t</td><td>한 집단 vs 기준값</td><td>평균이 Target과 다른가?</td></tr>
                <tr><td>2-sample t</td><td>두 집단</td><td>두 평균이 다른가?</td></tr>
                <tr><td>Paired t</td><td>전·후 짝</td><td>개선 전후 차이가 있는가?</td></tr>
                <tr><td>ANOVA</td><td>3개 이상 집단</td><td>집단 간 평균 차이가 있는가?</td></tr>
              </tbody>
            </table>
            <div class="callout-grid">
              <div class="callout"><strong>t-test</strong>두 평균 비교의 기본. 정규·등분산 가정 점검</div>
              <div class="callout"><strong>ANOVA</strong>다집단. 유의하면 사후검정으로 어느 쌍인지</div>
            </div>
            <div class="warn-box"><strong>주의:</strong> 통계적으로 유의하다고 해서 곧바로 전면 적용하지 마세요. 효과 크기, 비용, 부작용, 재현성을 함께 검토합니다.</div>
            <div class="tip-box">💡 <strong>요약:</strong> H0/H1을 세우고 p-value로 기각 여부를 결정하되, Type I·II 균형을 이해하고, 비교 집단 수에 맞는 t / ANOVA를 선택하세요.</div>
            <div class="lesson-outro">
              <h4>8강 정리</h4>
              <p>H0/H1, p-value, α·β 균형, t-test와 ANOVA 선택 기준을 익혔습니다. Vital Few를 “주장”이 아니라 “입증”으로 남기는 단계입니다.</p>
              <p class="next-hint">다음 9강에서는 상관·다중회귀로 X와 Y의 관계를 모형화하고 예측·우선순위를 잡습니다. Black Belt로 깊어집니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "가설검정에서 \"기존 프로세스와 새로운 프로세스 간에 차이가 없다\" 또는 \"효과가 없다\"고 설정하는 보수적인 기본 가설은?", "options": ["대립가설 (H1)", "귀무가설 (H0)", "연구가설", "조건가설"], "answer": 1, "rationale": "법정의 무죄 추정 원칙처럼, 충분한 증거가 확보되기 전까지 '아무런 차이나 변화가 없다'고 가정하는 것을 귀무가설(Null Hypothesis)이라 합니다."},
            {"q": "프로젝트 리더가 실험을 통해 적극적으로 증명하고 채택받고자 하는 \"차이가 있다\" 또는 \"개선 효과가 있다\"는 가설은?", "options": ["귀무가설 (H0)", "대립가설 (H1)", "영가설", "안정가설"], "answer": 1, "rationale": "연구자가 입증하고자 하는 긍정적인 변화나 차이를 나타내는 가설을 대립가설(Alternative Hypothesis)이라고 합니다."},
            {"q": "통계 소프트웨어를 돌린 결과 P-value가 0.02로 산출되었다. 유의수준(α)을 0.05로 설정했을 때 올바른 결론은?", "options": ["귀무가설을 채택하여, 차이가 없다고 결론 내린다.", "귀무가설을 기각하고 대립가설을 채택하여, 차이가 있다고 결론 내린다.", "분산이 너무 크므로 재검정한다.", "P-value가 0.05보다 작으므로 오류가 발생했다."], "answer": 1, "rationale": "P-value(0.02) < 유의수준(0.05) 이므로 이런 결과가 우연히 나올 확률이 5% 미만입니다. 따라서 우연이 아니라고 판단하여 귀무가설을 기각합니다."},
            {"q": "실제 모집단에서는 차이가 없는데(귀무가설 참), 표본 데이터가 우연히 치우쳐서 잘못하여 '차이가 있다'고 판정(대립가설 채택)하는 오류는?", "options": ["제1종 오류 (α 오류)", "제2종 오류 (β 오류)", "표준 오차", "측정 오차"], "answer": 0, "rationale": "정상(차이 없음)을 불량(차이 있음)으로 잘못 판정하는 것을 제1종 오류라고 합니다."},
            {"q": "제1종 오류(α 오류)가 현장에서 발생했을 때 초래되는 결과를 가장 잘 비유한 것은?", "options": ["불량품을 정상으로 오인해 시장에 유출시켜 리콜 사태 발생", "정상적인 양품 로트를 불량으로 오인해 전량 폐기하여 재무적 손실 발생", "측정 기기의 영점이 틀어짐", "작업자가 도면을 잘못 해석함"], "answer": 1, "rationale": "제1종 오류는 '생산자 위험'으로, 회사 내부에서 멀쩡한 제품을 버리게 되어 금전적 낭비(손실)를 초래합니다."},
            {"q": "실제 모집단에서는 차이가 있는데(대립가설 참), 데이터가 부족하여 '차이가 없다'고 잘못 판정(귀무가설 채택)하는 오류는?", "options": ["제1종 오류 (α 오류)", "제2종 오류 (β 오류)", "상관 오류", "회귀 오류"], "answer": 1, "rationale": "불량(차이 있음)을 정상(차이 없음)으로 놓치는 치명적인 실수를 제2종 오류라고 합니다."},
            {"q": "제2종 오류(β 오류)를 다르게 부르는 용어로, 불량품을 양품으로 오인하여 시장에 출하함으로써 발생하는 치명적인 위험을 뜻하는 말은?", "options": ["생산자 위험", "소비자 위험", "경영자 위험", "통계적 위험"], "answer": 1, "rationale": "불량이 시장에 나가 소비자가 피해를 입고 기업 이미지가 실추되므로 이를 '소비자 위험'이라고 부릅니다."},
            {"q": "기존 장비(A)와 신규 도입 장비(B)에서 생산된 제품의 '평균' 강도에 차이가 있는지 2개 그룹의 평균을 비교할 때 사용하는 통계 기법은?", "options": ["카이제곱 검정", "상관분석", "t-검정 (t-test)", "F-검정"], "answer": 2, "rationale": "독립된 두 그룹 간의 평균 차이가 통계적으로 유의미한지 비교할 때는 2표본 t-검정을 사용합니다."},
            {"q": "A사, B사, C사 3곳의 납품업체에서 들어온 원자재의 평균 무게에 차이가 있는지 '3개 이상 그룹'의 평균을 비교할 때 사용하는 기법은?", "options": ["1표본 t-검정", "상관분석", "분산분석 (ANOVA)", "단순 회귀분석"], "answer": 2, "rationale": "3개 이상의 다중 그룹 간 평균 차이를 동시에 검증할 때는 분산분석(Analysis of Variance, ANOVA)을 사용합니다."},
            {"q": "가설검정 결과 P-value가 0.35로 산출되었다. 유의수준(α) 0.05 하에서 프로젝트 리더가 내려야 할 올바른 조치는?", "options": ["대립가설을 채택하고 즉시 공정을 변경한다.", "우연히 발생할 확률이 35%나 되므로 귀무가설을 채택하여, 통계적으로 유의미한 차이가 없다고 결론 내린다.", "데이터를 조작하여 P-value를 낮춘다.", "제1종 오류가 발생했다고 보고한다."], "answer": 1, "rationale": "P-value(0.35) > 유의수준(0.05) 이므로, 현재의 차이는 단순히 우연일 확률이 높습니다. 따라서 차이가 없다는 귀무가설을 채택합니다."},
        ]
    },
    {
        id: 9, belt: "Black Belt", status: "locked", title: "9강. 상관분석과 다중 회귀분석",
        content: `
            <h3>9강. 상관분석과 다중 회귀분석</h3>
            <p><strong>상관분석</strong>과 <strong>회귀분석</strong>은 Analyze 단계에서 Y(결과)와 X(원인 후보)의 관계를 수치로 밝히는 핵심 도구입니다. 상관은 함께 움직이는 정도를, 회귀는 예측 방정식을 만듭니다. 다만 강한 상관만으로 인과를 단정하면 안 됩니다. 블랙벨트는 숫자를 읽는 동시에, 공정에서 실제로 조절 가능한 레버인지 따져야 합니다.</p>

            <h4>1. 상관 vs 인과: 가장 흔한 함정</h4>
            <p>피어슨 상관계수 r이 높다는 것은 직선 관계의 강도를 말할 뿐, X가 Y를 일으킨다는 증거가 아닙니다. 제3의 변수(계절, 캠페인, 설비 로트, 교대)가 둘을 동시에 움직일 수 있습니다. 현장에서는 도메인 지식, 실험(DOE), 시계열 선행성, 공정 메커니즘으로 인과 가설을 보강해야 합니다. 상관은 후보를 좁히는 지도이고, 인과는 개선 실행의 허가증입니다.</p>
            <div class="infograph">
              <div class="ig-title">상관 vs 인과 비교</div>
              <div class="compare-2">
                <div class="compare-card good">
                  <h5>올바른 해석</h5>
                  <ul>
                    <li>r은 선형 관계의 강도·방향만 요약</li>
                    <li>산점도로 이상치·비선형을 먼저 확인</li>
                    <li>인과는 실험·공정 지식으로 검증</li>
                  </ul>
                </div>
                <div class="compare-card bad">
                  <h5>위험한 해석</h5>
                  <ul>
                    <li>r이 크면 무조건 원인이다</li>
                    <li>산점도 없이 숫자만 보고 결론</li>
                    <li>제3 변수(교란)를 무시</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>실무 예: 아이스크림 판매량과 익사 사고는 여름이라는 공통 요인으로 상관이 커지지만, 판매량 억제가 익사를 줄이지는 않습니다. 공정에서도 외기온도와 불량률이 같이 움직여도, 진짜 원인은 냉각수 온도나 점도일 수 있습니다. 따라서 Improve 전에 반드시 조작 가능한 X인지 확인하세요.</p>

            <h4>2. 상관계수 r의 해석 가이드</h4>
            <p>r은 -1~+1 사이입니다. 절댓값이 클수록 직선 관계가 강하고, 부호는 방향입니다. 표본이 작으면 우연히 큰 r이 나올 수 있으므로 p-value와 신뢰구간도 함께 봅니다. 스피어만 상관은 순위 기반으로 이상치에 덜 민감합니다.</p>
            <div class="infograph">
              <div class="ig-title">|r| 강도 해석 바 차트</div>
              <div class="bar-chart">
                <div class="bar-row"><span>무상관</span><div class="bar-track"><div class="bar-fill" style="width:8%"></div></div><span>~0.1</span></div>
                <div class="bar-row"><span>약한</span><div class="bar-track"><div class="bar-fill" style="width:30%"></div></div><span>~0.3</span></div>
                <div class="bar-row"><span>중간</span><div class="bar-track"><div class="bar-fill" style="width:50%"></div></div><span>~0.5</span></div>
                <div class="bar-row"><span>강한</span><div class="bar-track"><div class="bar-fill" style="width:70%"></div></div><span>~0.7</span></div>
                <div class="bar-row"><span>매우강함</span><div class="bar-track"><div class="bar-fill" style="width:90%"></div></div><span>~0.9</span></div>
              </div>
            </div>
            <ul>
              <li><strong>양의 상관:</strong> X↑ → Y↑ (예: 트래픽↑ → 응답시간↑)</li>
              <li><strong>음의 상관:</strong> X↑ → Y↓ (예: 캐시 적중률↑ → 지연↓)</li>
              <li><strong>주의:</strong> 비선형(U자형)이면 r은 작아 보여도 관계는 강할 수 있음</li>
              <li><strong>층별:</strong> 설비·제품군별로 나누면 전체 상관이 사라지거나 뒤집히기도 함</li>
            </ul>
            <div class="info-box">산점도는 필수입니다. 이상치 하나가 r을 왜곡하고, 군집이 둘이면 가짜 상관이 생깁니다. 층별 후 다시 상관을 보는 습관이 Analyze 품질을 크게 올립니다.</div>

            <h4>3. 단순·다중 회귀와 예측 방정식</h4>
            <p>회귀는 Y를 X로 설명·예측하는 식을 만듭니다. 단순 회귀는 X가 1개, 다중 회귀는 X가 2개 이상입니다. 현장 문제는 대부분 다중이므로 계수의 부호·크기·유의성을 함께 해석합니다. 목표는 완벽한 방정식이 아니라 통제 레버를 찾는 것입니다.</p>
            <div class="formula">Y = β0 + β1X1 + β2X2 + … + βkXk + ε
            <small>β0: 절편 · βi: 편회귀계수 · ε: 오차(잔차)</small></div>
            <p>계수 βi는 다른 X를 고정했을 때 Xi가 1단위 변할 때 Y의 평균 변화입니다. 단위가 다르면 표준화 계수로 상대 중요도를 비교합니다. 범주형 X는 더미 변수로 넣고, 교호항(X1×X2)을 추가하면 DOE에서 본 결합 효과를 회귀로도 표현할 수 있습니다.</p>

            <h4>4. 결정계수 R²와 모델 신뢰도</h4>
            <p>R²는 회귀식이 Y 변동을 얼마나 설명하는지를 0~1(또는 %)로 보여줍니다. 변수를 넣으면 R²는 거의 항상 올라가므로, 다중 회귀에서는 조정 R², 예측 R², RMSE/MAPE, 교차검증 오차를 함께 봅니다.</p>
            <div class="infograph">
              <div class="ig-title">회귀 모델 KPI 예시</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">0.82</span><span class="lbl">R² (설명력)</span></div>
                <div class="kpi"><span class="num">0.79</span><span class="lbl">Adj R²</span></div>
                <div class="kpi"><span class="num">&lt;0.05</span><span class="lbl">핵심 X p-value</span></div>
              </div>
            </div>
            <p>R²가 높아도 잔차 가정이 깨지면 추론이 위험합니다. 반대로 R²가 중간이어도 핵심 X가 유의하고 공정 지식이 맞다면 개선 방향 설정에 충분할 수 있습니다. 과적합을 피하려면 홀드아웃 데이터에서 예측 성능을 확인하세요.</p>

            <h4>5. 다중공선성(VIF) 경고</h4>
            <p>독립변수끼리 너무 비슷하면(예: 평수와 제곱미터, 온도와 전력) 계수 부호가 뒤집히거나 표준오차가 커집니다. 이를 <strong>다중공선성</strong>이라 하며 VIF로 진단합니다.</p>
            <div class="warn-box"><strong>VIF 판정:</strong> 통상 VIF &gt; 5~10이면 다중공선성 의심. 변수 제거, 합성, 또는 대표 변수만 남기세요. 예측만 목표면 유지할 수 있으나 Improve용 원인 해석에는 부적절합니다.</div>
            <ul>
              <li>상관행렬에서 |r|이 매우 큰 X쌍을 먼저 점검</li>
              <li>공정 지식상 동일 물리량의 다른 표현인지 확인</li>
              <li>단계적 선택보다 가설 기반 변수 선정이 해석에 유리</li>
            </ul>

            <h4>6. 잔차 가정 체크리스트</h4>
            <p>잔차(실제 Y − 예측 Y)가 건강한지 확인해야 회귀 결론을 믿을 수 있습니다. 가정 위반은 유의성·신뢰구간을 왜곡합니다.</p>
            <div class="infograph">
              <div class="ig-title">잔차 가정 칩</div>
              <div class="chip-grid">
                <span class="chip hot">정규성</span>
                <span class="chip hot">독립성</span>
                <span class="chip hot">등분산성</span>
                <span class="chip">선형성</span>
                <span class="chip">이상치 점검</span>
                <span class="chip">영향점(Cook)</span>
              </div>
            </div>
            <ul>
              <li><strong>정규성:</strong> 잔차 히스토그램/정규확률도. 심한 왜곡 시 변환·로버스트 회귀 검토</li>
              <li><strong>독립성:</strong> 시간순 잔차 패턴이면 시계열 상관 의심</li>
              <li><strong>등분산성:</strong> 예측값 대비 잔차 부채꼴이면 이분산 → 가중회귀·변환</li>
            </ul>
            <div class="tip-box"><strong>실무 요약:</strong> 상관으로 후보를 좁히고, 회귀로 예측·우선순위를 정하며, VIF와 잔차로 모델을 검증하세요. 출력의 별표보다 공정에서 조절 가능한 X인지가 더 중요합니다.</div>
            <div class="lesson-outro">
              <h4>9강 정리</h4>
              <p>상관은 후보를, 회귀는 예측과 우선순위를 줍니다. VIF·잔차 진단으로 모델을 검증하는 습관까지 챙겼습니다.</p>
              <p class="next-hint">다음 10강 DOE에서는 인자를 의도적으로 바꿔 주효과·교호작용을 확인하고 최적 조건을 찾습니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "상관분석(Correlation Analysis)에 대한 설명으로 가장 올바른 것은?", "options": ["원인과 결과의 관계를 수학적 방정식으로 도출한다.", "두 변수 간에 선형적(직선) 비례 또는 반비례 관계가 얼마나 강한지를 파악한다.", "미래의 데이터를 예측하는 데 주로 사용된다.", "그룹 간의 평균 차이를 검증한다."], "answer": 1, "rationale": "상관분석은 두 변수가 얼마나 밀접하게 같이 변하는지(직선 관계의 강도)를 볼 뿐, 인과관계나 예측 방정식을 도출하지는 않습니다."},
            {"q": "피어슨 상관계수(r)의 값이 -0.85로 산출되었다. 이를 올바르게 해석한 것은?", "options": ["두 변수는 강한 양(+)의 상관관계가 있다.", "두 변수는 서로 아무런 관계가 없다(무상관).", "한 변수가 증가할 때 다른 변수는 뚜렷하게 감소하는 강한 음(-)의 상관관계가 있다.", "데이터에 계산 오류가 발생했다."], "answer": 2, "rationale": "상관계수(r)는 -1에서 +1 사이의 값을 가집니다. -0.85는 -1에 가까우므로 매우 강한 반비례(음의 상관) 관계를 의미합니다."},
            {"q": "상관관계와 인과관계에 대한 설명 중 올바른 것은?", "options": ["상관관계가 높으면 반드시 원인과 결과의 관계이다.", "인과관계가 성립하려면 반드시 상관관계가 0이어야 한다.", "강한 상관관계가 있다고 해서 무조건 인과관계가 성립하는 것은 아니다.", "상관분석만으로 모든 인과관계를 100% 증명할 수 있다."], "answer": 2, "rationale": "아이스크림 판매량과 익사 사고 발생률은 여름이라는 제3의 변수 때문에 강한 상관관계를 보이지만, 아이스크림이 익사의 원인(인과관계)은 아닙니다."},
            {"q": "독립변수(X, 원인)의 변화에 따라 종속변수(Y, 결과)가 어떻게 변하는지 수학적인 예측 방정식(Y = aX + b)을 도출하는 분석 기법은?", "options": ["상관분석", "분산분석 (ANOVA)", "회귀분석 (Regression Analysis)", "t-검정"], "answer": 2, "rationale": "회귀분석은 인과관계를 바탕으로 최적의 적합선을 그려 미래의 Y값을 예측하는 수학적 모델링 기법입니다."},
            {"q": "다중 회귀분석(Multiple Regression)을 사용해야 하는 상황으로 알맞은 것은?", "options": ["결과(Y)에 영향을 미치는 독립변수(X)가 2개 이상일 때", "독립변수(X)가 1개뿐일 때", "종속변수(Y)가 2개 이상일 때", "세 그룹의 평균을 비교할 때"], "answer": 0, "rationale": "현장의 문제는 대부분 여러 개의 원인이 복합적으로 작용하므로, 2개 이상의 독립변수를 갖는 다중 회귀분석을 주로 사용합니다."},
            {"q": "회귀분석 결과 '결정계수(R-Square, R²)'가 0.82(82%)로 도출되었다. 이 수치의 의미는 무엇인가?", "options": ["데이터의 82%가 불량임을 의미한다.", "회귀방정식이 실제 데이터 변동의 82%를 설명(예측)할 수 있을 만큼 모델의 신뢰도가 높다는 의미이다.", "독립변수들끼리 82%의 다중공선성을 가진다.", "P-value가 82%이므로 귀무가설을 채택해야 한다."], "answer": 1, "rationale": "결정계수(R²)는 도출된 예측 방정식이 현실의 데이터를 얼마나 잘 설명하는지를 0~1(또는 0~100%)로 나타내는 예측력 지표입니다."},
            {"q": "다중 회귀분석에서 '다중공선성(Multicollinearity)'이란 무엇을 뜻하는가?", "options": ["종속변수(Y)가 여러 개 존재하는 현상", "독립변수(X)들끼리 서로 너무 강한 상관관계를 가져서 회귀 모델의 계산을 왜곡시키는 현상", "결정계수가 100%를 초과하는 현상", "잔차가 정규분포를 띠는 현상"], "answer": 1, "rationale": "X1과 X2가 사실상 같은 의미의 변수여서 서로 묶여버리면(예: 아파트 '평수'와 '제곱미터'), 모델이 어떤 변수 때문에 Y가 변했는지 구분하지 못하는 다중공선성이 발생합니다."},
            {"q": "다중공선성(Multicollinearity)의 발생 여부를 수치로 확인하기 위해 사용하는 지표로, 통상 10 이상이면 문제가 있다고 판단하는 것은?", "options": ["P-value", "R-Square", "VIF (분산팽창계수)", "Z-bench"], "answer": 2, "rationale": "VIF(Variance Inflation Factor) 값이 10(때로는 5)을 넘어가면 독립변수 간 다중공선성이 심각하다고 보아 해당 변수를 제거해야 합니다."},
            {"q": "회귀분석에서 '잔차(Residual)'의 개념을 가장 잘 설명한 것은?", "options": ["분석을 완료하고 남은 데이터의 개수", "실제 관측된 Y값과 회귀방정식을 통해 예측된 Y값의 차이(오차)", "결정계수에서 1을 뺀 값", "독립변수들의 평균값"], "answer": 1, "rationale": "잔차는 회귀모델이 미처 설명하지 못한 실제와의 오차이며, 잔차 분석을 통해 모델의 타당성(정규성, 등분산성 등)을 최종 검증합니다."},
            {"q": "회귀분석의 최종 단계인 '잔차 분석(Residual Analysis)'에서 잔차가 만족해야 할 3가지 통계적 가정이 아닌 것은?", "options": ["정규성 (Normality)", "독립성 (Independence)", "등분산성 (Equal Variance)", "종속성 (Dependence)"], "answer": 3, "rationale": "건강한 회귀 모델의 잔차는 정규분포를 띠고, 서로 독립적이며, 흩어짐의 정도가 일정한 등분산성을 가져야 합니다."},
        ]
    },
    {
        id: 10, belt: "Black Belt", status: "locked", title: "10강. 실험계획법 (DOE) 기초와 심화",
        content: `
            <h3>10강. 실험계획법 (DOE) 기초와 심화</h3>
            <p><strong>실험계획법(DOE)</strong>은 Improve 단계에서 최적 공정 조건을 효율적으로 찾기 위한 수학적 실험 설계입니다. 한 번에 한 인자만 바꾸는 OFAT와 달리, 인자들을 체계적으로 조합해 주효과와 교호작용을 동시에 추정합니다. 시간과 비용을 아끼면서도 설계공간을 넓게 탐색하는 것이 목표입니다. 블랙벨트는 실험 횟수보다 얻을 정보의 질을 먼저 설계합니다.</p>

            <h4>1. OFAT의 한계 vs DOE의 강점</h4>
            <p>OFAT는 직관적이지만 실험 횟수가 늘고, 무엇보다 <strong>교호작용</strong>을 놓칩니다. 현장 불량의 상당수는 A가 높을 때만 B의 효과가 뒤집히는 식의 결합 문제입니다. DOE는 직교·균형 설계로 효과를 분리해 추정합니다.</p>
            <div class="infograph">
              <div class="ig-title">OFAT vs DOE</div>
              <div class="compare-2">
                <div class="compare-card bad">
                  <h5>OFAT</h5>
                  <ul>
                    <li>한 번에 한 인자만 변경</li>
                    <li>교호작용 탐지 불가</li>
                    <li>최적점 탐색이 느리고 편향</li>
                  </ul>
                </div>
                <div class="compare-card good">
                  <h5>DOE</h5>
                  <ul>
                    <li>인자를 직교·균형 조합</li>
                    <li>주효과+교호작용 동시 추정</li>
                    <li>적은 횟수로 넓은 공간 탐색</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4>2. 인자(Factor)와 수준(Level)</h4>
            <p><strong>인자</strong>는 의도적으로 바꾸는 입력(온도, 압력, 속도, 촉매비)이고, <strong>수준</strong>은 구체 값(저/고, 100℃/150℃)입니다. Y는 반응값(수율, 불량률, 강도, 지연)입니다. 인자는 통제 가능해야 Improve로 이어집니다. 수준 폭이 너무 좁으면 효과를 못 보고, 너무 넓으면 설비 한계·안전 이슈가 생깁니다.</p>
            <div class="callout-grid">
              <div class="callout"><strong>인자 선정</strong>FMEA, 특성요인도, 회귀에서 유력했던 X를 우선. 너무 많으면 스크리닝부터.</div>
              <div class="callout"><strong>수준 설정</strong>공정 지식·안전·스펙을 반영. 코드화(−1/+1)하면 해석이 쉬워집니다.</div>
            </div>

            <h4>3. 주효과와 교호작용</h4>
            <p><strong>주효과</strong>는 한 인자가 Low→High로 변할 때 Y 평균의 변화입니다. <strong>교호작용</strong>은 다른 인자의 수준에 따라 그 효과가 달라지는 현상입니다. 교호 그래프에서 선이 교차하거나 기울기가 크게 다르면 신호입니다. 복잡한 현장 불량은 대개 교호에서 옵니다.</p>
            <div class="infograph">
              <div class="ig-title">DOE 효과 사다리</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">1</div><div class="ladder-body"><strong>주효과</strong> — 단일 인자의 평균 영향력</div></div>
                <div class="ladder-item"><div class="ladder-tag">2</div><div class="ladder-body"><strong>2차 교호</strong> — A×B 결합 효과 (현장의 핵심)</div></div>
                <div class="ladder-item"><div class="ladder-tag">3</div><div class="ladder-body"><strong>고차 교호</strong> — A×B×C 등. 종종 작아 부분요인에서 희생 가능</div></div>
              </div>
            </div>
            <div class="info-box">DOE의 존재 이유 중 하나는 교호작용 수치화입니다. 주효과만 보고 세팅하면, 다른 조건에서 최적이 최악으로 바뀔 수 있습니다.</div>

            <h4>4. 완전요인 vs 부분요인</h4>
            <p><strong>완전요인</strong>은 모든 조합을 실험합니다. 2수준 k인자는 2^k회입니다(3인자 → 8회). 정보가 완전하지만 인자가 늘면 비용이 폭증합니다. <strong>부분요인</strong>은 고차 교호를 희생(교락)하고 실험 수를 1/2, 1/4로 줄입니다. 해상도(Resolution)가 높을수록 주효과·2차 교호의 교락이 적습니다. 초기에는 스크리닝, 유력 인자가 남으면 완전요인 또는 RSM으로 정밀화합니다.</p>
            <div class="infograph">
              <div class="ig-title">실험 횟수 감각</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">2³=8</span><span class="lbl">완전 3인자</span></div>
                <div class="kpi"><span class="num">2⁵=32</span><span class="lbl">완전 5인자</span></div>
                <div class="kpi"><span class="num">2⁵⁻¹=16</span><span class="lbl">1/2 부분 5인자</span></div>
              </div>
            </div>

            <h4>5. 랜덤화·블록화·반복</h4>
            <ul>
              <li><strong>랜덤화:</strong> 순서를 섞어 미지 노이즈가 한 조건에 몰리지 않게 함</li>
              <li><strong>블록화:</strong> 교대/로트/설비 등 제거 불가 노이즈를 덩어리로 분리</li>
              <li><strong>반복:</strong> 같은 조건을 다시 돌려 순수 오차와 유의성 평가</li>
            </ul>
            <p>이 세 원리는 실험의 신뢰성을 지키는 기초입니다. 소프트웨어가 만든 런 시트를 그대로 쓰지 말고, 현장 제약을 반영해 실행 가능성을 점검하세요.</p>

            <h4>6. RSM과 확인 실험</h4>
            <p>1차 모형으로 유력 영역을 찾은 뒤 <strong>RSM</strong>으로 2차 표면을 적합해 최적점을 찾습니다. CCD, Box-Behnken이 대표적입니다. 소프트웨어가 제안한 최적 조합은 반드시 <strong>확인 실험</strong>으로 양산에서 재현성을 검증합니다. 확인이 실패하면 모델 외삽, 미측정 노이즈, 교락을 의심하세요.</p>
            <div class="infograph">
              <div class="ig-title">DOE → 최적화 흐름</div>
              <div class="flow-row">
                <div class="flow-step">스크리닝</div><span class="flow-arrow">→</span>
                <div class="flow-step">요인배치</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">RSM</div><span class="flow-arrow">→</span>
                <div class="flow-step">확인실험</div>
              </div>
            </div>
            <div class="tip-box"><strong>실무 요약:</strong> OFAT를 버리고 주효과·교호를 동시에 보세요. 인자가 많으면 부분요인, 최적 근처에서는 RSM, 마지막은 확인 실험으로 닫으세요.</div>
            <div class="lesson-outro">
              <h4>10강 정리</h4>
              <p>OFAT의 한계를 넘어 요인배치·부분요인·RSM·확인실험으로 Improve의 실험 설계를 익혔습니다.</p>
              <p class="next-hint">다음 11강 SPC에서는 개선된 공정을 관리도로 감시해 요요를 막는 Control의 연결합니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "전통적인 실험 방식인 OFAT(One Factor at a Time)의 치명적인 단점으로 알맞은 것은?", "options": ["실험 횟수가 너무 적다.", "가장 중요한 '변수 간의 교호작용(Interaction)'을 절대 발견할 수 없다.", "수학적 계산이 불가능하다.", "결정계수를 높인다."], "answer": 1, "rationale": "한 번에 한 변수만 바꾸면 변수들이 결합했을 때 발생하는 시너지나 간섭 효과(교호작용)를 파악할 수 없습니다."},
            {"q": "실험계획법(DOE)에서 '인자(Factor)'와 '수준(Level)'의 개념을 올바르게 짝지은 것은?", "options": ["인자: 수율 / 수준: 불량률", "인자: 100도, 150도 / 수준: 가열 온도", "인자: 가열 온도 / 수준: 100도, 150도", "인자: 작업자 / 수준: 생산량"], "answer": 2, "rationale": "결과에 영향을 주기 위해 의도적으로 변화를 주는 변수가 '인자(온도)'이며, 실험을 위해 설정한 구체적 세팅값이 '수준(100도, 150도)'입니다."},
            {"q": "단일 인자(예: 압력)가 낮은 수준에서 높은 수준으로 변할 때, 결과값(Y) 평균이 얼마나 변하는지를 의미하는 DOE의 기본 개념은?", "options": ["교호작용 효과", "주효과 (Main Effect)", "블록 효과", "랜덤 효과"], "answer": 1, "rationale": "다른 변수를 무시하고 한 인자만의 순수한 영향력을 계산한 것을 주효과(Main Effect)라고 합니다."},
            {"q": "현장에서 발생하는 복잡한 불량의 주원인으로, 특정 인자의 효과가 다른 인자의 조건(수준)에 따라 완전히 달라지는 현상은?", "options": ["주효과", "교호작용 효과 (Interaction Effect)", "직교성", "등분산성"], "answer": 1, "rationale": "DOE를 수행하는 가장 큰 이유가 바로 이 변수 간의 결합 효과인 '교호작용'을 수치화하여 잡아내기 위함입니다."},
            {"q": "실험계획의 기본 원리 중, 알지 못하는 무수히 많은 외부 노이즈(온도 미세 변화, 진동 등)가 특정 실험에 집중되는 것을 막기 위해 실험 순서를 무작위로 섞는 원리는?", "options": ["블록화 (Blocking)", "직교성 (Orthogonality)", "랜덤화 (Randomization)", "반복 (Replication)"], "answer": 2, "rationale": "랜덤화는 우리가 통제하지 못한 외부 오차 요인들이 실험 전체에 골고루 분산되도록 하여 실험의 신뢰성을 높입니다."},
            {"q": "통제할 수 없는 외부 환경 변수(예: 오전반/오후반, 원자재 로트 A/B)가 결과에 미치는 영향을 격리하기 위해, 동일한 조건끼리 묶어서 실험을 설계하는 원리는?", "options": ["블록화 (Blocking)", "랜덤화 (Randomization)", "직교성", "다중공선성"], "answer": 0, "rationale": "제거할 수 없는 노이즈 변수들을 덩어리(블록)로 묶어 그 영향을 계산 밖으로 분리해 내는 기법이 블록화입니다."},
            {"q": "3개의 인자(X1, X2, X3)를 각각 2수준(Low, High)으로 설정하여 '완전요인배치법(Full Factorial)'을 설계했다면, 기본적으로 수행해야 할 총 실험 횟수는?", "options": ["5회", "6회", "8회", "9회"], "answer": 2, "rationale": "완전요인배치법은 (수준수)^(인자수) 로 계산됩니다. 2수준에 3인자이므로 2³ = 8회의 실험이 필요합니다."},
            {"q": "인자가 너무 많아 완전요인배치법(Full Factorial)으로 실험하기엔 비용과 시간이 너무 많이 들 때, 덜 중요한 고차 교호작용을 포기하고 필수 조합만 선별하여 실험 횟수를 줄이는 기법은?", "options": ["단순 회귀분석", "반응표면분석법 (RSM)", "부분요인배치법 (Fractional Factorial)", "OFAT"], "answer": 2, "rationale": "부분요인배치법은 통계적 직교성을 유지하면서 실험 횟수를 절반, 1/4로 줄여 최적화의 효율을 극대화합니다."},
            {"q": "DOE 분석 후 도출된 최적의 인자 조합을 현장에 적용하기 전, 반드시 수행해야 하는 필수 과정은?", "options": ["과거 데이터 삭제", "확인 실험 (Confirmation Run)", "프로젝트 해체", "경쟁사 도면 분석"], "answer": 1, "rationale": "통계 소프트웨어가 추천한 최적 조건이 현실의 양산 라인에서도 진짜로 작동하는지 '확인 실험(검증)'을 반드시 거쳐야 합니다."},
            {"q": "인자와 결과(Y) 간의 곡선(비선형) 관계를 3차원 지형도로 모델링하여 가장 완벽한 최적점(산의 정상)을 찾는 고급 실험계획법 기법은?", "options": ["부분요인배치법", "반응표면분석법 (RSM: Response Surface Methodology)", "다구치 강건설계", "카이제곱 검정"], "answer": 1, "rationale": "반응표면분석은 1차식(직선)을 넘어 2차식(곡선)을 모델링하여 미세한 최적 타겟을 찾아내는 고급 DOE 기법입니다."},
        ]
    },
    {
        id: 11, belt: "Black Belt", status: "locked", title: "11강. 통계적 공정관리 (SPC)와 관리도",
        content: `
            <h3>11강. 통계적 공정관리 (SPC)와 관리도</h3>
            <p><strong>SPC(Statistical Process Control)</strong>는 Control 단계에서 개선된 공정을 시간축으로 감시하는 체계입니다. 관리도는 Y(또는 핵심 X)를 타점해 공정이 예측 가능한지, 이상원인이 개입했는지 시각적으로 판정합니다. 목표는 무결점이 아니라 <strong>통계적 관리상태</strong>를 유지하는 것입니다. 안정된 뒤에야 공정능력(Cpk) 해석이 의미를 갖습니다.</p>

            <h4>1. 우연원인 vs 이상원인</h4>
            <p><strong>우연원인(Common Cause)</strong>은 공정에 늘 존재하는 자연 산포입니다. 점이 UCL~LCL 안에서 무작위로 움직입니다. 시스템을 바꿔야 줄어듭니다. <strong>이상원인(Special Cause)</strong>은 공구 파손, 잘못된 세팅, 원자재 이상처럼 외부 충격입니다. 한계선 이탈이나 비정상 패턴이 보이면 즉시 조치합니다. 이상원인을 우연처럼 방치하면 관리한계가 넓어져 알람이 무력화됩니다.</p>
            <div class="infograph">
              <div class="ig-title">원인 유형 비교</div>
              <div class="compare-2">
                <div class="compare-card good">
                  <h5>우연원인</h5>
                  <ul>
                    <li>항상 존재, 예측 가능 범위</li>
                    <li>관리한계 내 랜덤 변동</li>
                    <li>대응: 시스템/설계 개선</li>
                  </ul>
                </div>
                <div class="compare-card bad">
                  <h5>이상원인</h5>
                  <ul>
                    <li>갑자기 개입하는 특수 요인</li>
                    <li>이탈·런·트렌드 등 패턴</li>
                    <li>대응: 즉시 현장 조치·제거</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4>2. 관리한계 vs 규격한계</h4>
            <p>혼동하면 안 됩니다. <strong>관리한계(UCL/LCL)</strong>는 공정 데이터로부터 ±3σ 등으로 계산한 통계선입니다. <strong>규격한계(USL/LSL)</strong>는 고객·설계가 정한 허용 범위입니다. 관리상태여도 규격을 못 맞출 수 있고(능력 부족), 규격 안이어도 관리도가 이상일 수 있습니다(불안정).</p>
            <div class="infograph">
              <div class="ig-title">한계선의 의미</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">±3σ</span><span class="lbl">관리한계(통계)</span></div>
                <div class="kpi"><span class="num">고객</span><span class="lbl">규격한계(요구)</span></div>
                <div class="kpi"><span class="num">Cpk</span><span class="lbl">능력은 별도 평가</span></div>
              </div>
            </div>
            <div class="warn-box">관리도에 규격선을 겹쳐 그리고 규격 이탈만 보는 습관은 위험합니다. SPC의 1차 질문은 규격이 아니라 공정이 안정한가입니다.</div>

            <h4>3. 관리도 선택 가이드</h4>
            <p>데이터 유형과 부분군 크기에 따라 차트가 달라집니다. 잘못된 차트는 잘못된 알람을 만듭니다.</p>
            <div class="infograph">
              <div class="ig-title">대표 관리도 선택표</div>
              <table class="mini-table">
                <tr><th>차트</th><th>데이터</th><th>부분군</th><th>용도</th></tr>
                <tr><td>Xbar-R</td><td>연속형</td><td>n=2~8</td><td>평균+범위</td></tr>
                <tr><td>I-MR</td><td>연속형</td><td>n=1</td><td>개별+이동범위</td></tr>
                <tr><td>p / np</td><td>불량비율/개수</td><td>배치</td><td>불량률 관리</td></tr>
                <tr><td>c / u</td><td>결점수</td><td>단위</td><td>스크래치·버그</td></tr>
              </table>
            </div>
            <ul>
              <li><strong>Xbar-R:</strong> 매 시간 5개씩 치수 측정 등 제조 표준</li>
              <li><strong>I-MR:</strong> 파괴검사, 일 1회 화학분석, 일일 KPI</li>
              <li><strong>p:</strong> 로트별 불량률, 앱 가입 실패율(표본 크기 변동 가능)</li>
              <li><strong>c:</strong> 패널당 결점 수, 코드 1000LOC당 버그 수</li>
            </ul>

            <h4>4. 런·트렌드 등 이상 패턴</h4>
            <p>점이 한계선 안이어도 패턴이면 이상원인 신호입니다. <strong>런(Run)</strong>은 중심선 한쪽에 연속 타점(관례상 7점 전후), <strong>트렌드(Trend)</strong>는 연속 상승/하락(관례상 6점 전후)입니다. 주기성, 한계선 근처 군집, 중심선 과도 밀착도 점검합니다.</p>
            <div class="infograph">
              <div class="ig-title">패턴 신호 칩</div>
              <div class="chip-grid">
                <span class="chip hot">한계선 이탈</span>
                <span class="chip hot">런(한쪽 연속)</span>
                <span class="chip hot">트렌드</span>
                <span class="chip">주기성</span>
                <span class="chip">2/3점이 2σ 밖</span>
                <span class="chip">층별 필요</span>
              </div>
            </div>
            <div class="svg-wrap">
            <svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line x1="20" y1="20" x2="300" y2="20" stroke="#F87171" stroke-dasharray="4 3"/>
              <line x1="20" y1="45" x2="300" y2="45" stroke="#94A3B8"/>
              <line x1="20" y1="70" x2="300" y2="70" stroke="#F87171" stroke-dasharray="4 3"/>
              <polyline fill="none" stroke="#2563EB" stroke-width="2" points="30,48 60,42 90,50 120,38 150,55 180,30 210,25 240,18 270,40 300,46"/>
              <text x="22" y="16" font-size="10" fill="#64748B">UCL</text>
              <text x="22" y="86" font-size="10" fill="#64748B">LCL</text>
            </svg>
            </div>
            <p>위 스케치는 트렌드 후 이탈 직전 상황을 단순화한 것입니다. 실제로는 Western Electric/Nelson 규칙을 팀 표준으로 고정하세요.</p>

            <h4>5. Control에서의 운영 루틴</h4>
            <p>관리도는 벽에 붙인 그림이 아니라 반응 체계입니다. 누가 타점하는지, 이탈 시 누구를 호출하는지, 조치 후 재타점을 어떻게 기록하는지 Control Plan과 연결합니다. 과도한 알람은 무시로 이어지므로, 측정 시스템과 부분군 정의가 먼저 건전해야 합니다.</p>
            <div class="tip-box"><strong>실무 요약:</strong> 우연/이상을 구분하고, 관리한계≠규격한계를 기억하세요. 데이터 유형에 맞는 차트를 고르고, 런·트렌드까지 읽으며 즉각 조치하세요.</div>
            <div class="lesson-outro">
              <h4>11강 정리</h4>
              <p>우연/이상원인, 관리한계≠규격한계, 차트 선택과 런·트렌드 판독을 익혔습니다. 실시간 감시의 기본 언어입니다.</p>
              <p class="next-hint">다음 12강에서는 FMEA·Control Plan·이해관계자 관리로 프로젝트 성과를 조직에 정착시킵니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "통계적 공정관리(SPC)에서 공정에 항상 존재하며 통계적으로 예측 가능한 범위 내에서 발생하는 미세한 환경적 변동을 무엇이라 하는가?", "options": ["이상원인 (Special Cause)", "우연원인 (Common Cause)", "치명적 원인", "인위적 원인"], "answer": 1, "rationale": "온도의 미세한 변화나 기계의 백래시처럼 피할 수 없는 자연스러운 산포를 우연원인(Common Cause)이라고 합니다."},
            {"q": "관리도 상에 나타난 변동 중, 작업자의 조작 실수나 기계 부품의 파손 등 즉각적인 원인 규명과 조치가 필요한 외부 요인은?", "options": ["우연원인 (Common Cause)", "이상원인 (Special Cause)", "시스템 원인", "설계 원인"], "answer": 1, "rationale": "평소와 다른 패턴을 만들거나 한계선을 이탈하게 만드는 요인을 이상원인(Special Cause)이라 하며, 현장에서 즉각 제거해야 합니다."},
            {"q": "관리한계선(Control Limit)과 규격한계선(Spec Limit)의 차이를 가장 올바르게 설명한 것은?", "options": ["둘은 완전히 동일한 개념이다.", "규격한계선은 통계적으로 계산되며, 관리한계선은 고객이 정한다.", "관리한계선(UCL/LCL)은 공정 데이터의 통계적 계산(±3σ)으로 그려지며, 규격한계선(USL/LSL)은 고객의 요구사항으로 정해진다.", "관리도는 규격한계선만 있으면 그릴 수 있다."], "answer": 2, "rationale": "관리한계는 우리 공정이 낼 수 있는 자연스러운 능력(통계치)이며, 규격한계는 고객이 원하는 허용 범위입니다. 관리도는 관리한계선으로 공정의 안정성을 봅니다."},
            {"q": "공정에서 2~8개의 샘플(부분군)을 수집하여 연속형 데이터(길이, 무게 등)의 평균과 산포를 동시에 모니터링할 때 가장 널리 쓰이는 관리도는?", "options": ["I-MR 관리도", "Xbar-R 관리도", "p 관리도", "c 관리도"], "answer": 1, "rationale": "부분군(Sample Size)이 존재할 때 연속형 데이터의 평균(Xbar)과 범위(R)를 그리는 것이 제조업의 표준인 Xbar-R 관리도입니다."},
            {"q": "파괴 검사나 하루 한 번 수집되는 화학 공정 데이터처럼 샘플을 1개씩(부분군 n=1) 측정한 연속형 데이터를 모니터링할 때 사용하는 관리도는?", "options": ["Xbar-S 관리도", "Xbar-R 관리도", "p 관리도", "I-MR 관리도"], "answer": 3, "rationale": "개별 데이터 단위(n=1)를 측정할 때는 개별값(Individual)과 바로 이전 데이터와의 이동 범위(Moving Range)를 그리는 I-MR 관리도를 씁니다."},
            {"q": "스마트폰 앱의 '가입 실패율'이나 제조 공정의 '불량률'과 같이 합격/불합격 판정이 나는 불량품의 '비율(%)'을 관리할 때 사용하는 이산형 관리도는?", "options": ["Xbar-R 관리도", "p 관리도", "c 관리도", "u 관리도"], "answer": 1, "rationale": "Proportion(비율)을 나타내는 이산형 데이터 관리도는 p 관리도입니다. (표본의 크기가 매번 달라도 사용 가능)"},
            {"q": "직물 1롤당 발견되는 얼룩의 수, 소스코드 1000줄당 발견되는 버그의 수 등 '일정 단위 내에서 발생하는 결점의 개수'를 관리할 때 사용하는 관리도는?", "options": ["p 관리도", "np 관리도", "c 관리도", "I-MR 관리도"], "answer": 2, "rationale": "불량품(그 자체가 쓸모없어짐)이 아닌, 하나의 양품 속에 섞여 있는 흠집이나 버그(결점, Defect)의 개수를 셀 때는 c 관리도나 u 관리도를 사용합니다."},
            {"q": "관리도 해석 시, 점들이 관리한계선을 벗어나지는 않았으나 '연속해서 7개 이상의 점이 중심선(평균) 위쪽이나 아래쪽 한 방향으로만 찍히는 패턴'을 무엇이라 하는가?", "options": ["트렌드 (Trend)", "런 (Run)", "주기 (Cycle)", "관리 상태 (In-Control)"], "answer": 1, "rationale": "중심선을 기준으로 한쪽으로 치우쳐 연속 타점되는 현상을 런(Run)이라고 하며, 공정의 평균이 이동했음(이상원인)을 의미합니다."},
            {"q": "관리도에 찍힌 6개 이상의 점이 연속해서 계속 상승하거나 계속 하락하는 경향성을 보이는 이상 패턴을 무엇이라 하는가?", "options": ["런 (Run)", "트렌드 (Trend)", "주기 (Cycle)", "이탈 (Outlier)"], "answer": 1, "rationale": "공구의 점진적 마모나 화학액의 점진적 농도 저하 등으로 인해 타점이 한 방향으로 계속 오르내리는 현상은 트렌드(경향성)입니다."},
            {"q": "공정이 '통계적 관리 상태(In-Control)'에 있다는 것은 어떤 의미인가?", "options": ["불량품이 단 1개도 나오지 않는 완벽한 상태이다.", "이상원인(Special Cause)이 모두 제거되어 오직 우연원인에 의한 변동만 존재하는 예측 가능한 상태이다.", "Cp와 Cpk가 2.0을 넘었다.", "모든 타점이 중심선에 정확히 일치한다."], "answer": 1, "rationale": "통계적 관리 상태란 점들이 한계선 안에서 무작위로 오르내리며 외부의 이상원인이 전혀 개입되지 않은 안정적인 상태를 뜻합니다. (불량이 없다는 뜻은 아님)"},
        ]
    },
    {
        id: 12, belt: "Black Belt", status: "locked", title: "12강. 변화 관리와 프로젝트 통제",
        content: `
            <h3>12강. 변화 관리와 프로젝트 통제</h3>
            <p>통계적으로 완벽한 Improve 안도, 현장이 옛 습관으로 돌아가면 실패합니다. Control 단계의 본질은 <strong>변화 관리</strong>와 <strong>리스크 통제</strong>입니다. 요요 현상을 막고, FMEA로 위험을 줄이며, Control Plan·이해관계자 전략으로 성과를 고정합니다. 하드 스킬(통계)과 소프트 스킬(설득)이 만나는 지점입니다.</p>

            <h4>1. 요요 현상(Yo-yo Effect)</h4>
            <p>다이어트 후 체중이 되돌듯, 개선 직후 지표가 좋아졌다가 수주~수개월 뒤 원상복귀하는 현상입니다. 원인으로는 표준 미문서화, 교육 부족, 인센티브 불일치, 챔피언 관심 소멸, 측정 중단이 흔합니다. 개선팀을 해산하기 전에 유지 지표와 책임자를 명시하세요.</p>
            <div class="warn-box"><strong>요요 경고:</strong> 개선 효과를 자랑하는 발표회만 하고 Control Plan·핸드오버가 없으면 요요는 거의 확정입니다. 프로세스 오너에게 일상 운영 권한을 공식 이관하세요.</div>

            <h4>2. FMEA와 RPN</h4>
            <p><strong>FMEA</strong>는 잠재 고장형태·영향·원인을 사전에 점수화해 예방합니다. RPN으로 우선순위를 정하고, 높은 항목부터 포카요케·검사·설계 변경을 적용합니다. 사후 약방문이 아니라 사전 리스크 엔지니어링입니다.</p>
            <div class="formula">RPN = 심각도(S) × 발생도(O) × 검출도(D)
            <small>각 1~10점 척도 · RPN 범위 대략 1~1000</small></div>
            <div class="infograph">
              <div class="ig-title">RPN 구성 KPI</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">S</span><span class="lbl">고객·안전 영향</span></div>
                <div class="kpi"><span class="num">O</span><span class="lbl">발생 가능성</span></div>
                <div class="kpi"><span class="num">D</span><span class="lbl">검출 어려움</span></div>
              </div>
            </div>
            <ul>
              <li>S가 극히 높으면 RPN이 낮아도 별도 관리(안전 항목)</li>
              <li>조치 후 RPN을 재평가해 잔여 리스크를 문서화</li>
              <li>설계 FMEA(DFMEA)와 공정 FMEA(PFMEA)를 구분</li>
            </ul>

            <h4>3. 포카요케(Poka-Yoke)</h4>
            <p>사람이 실수해도 불량이 나가지 않도록 물리·시스템적으로 막는 설계입니다. 경고형보다 방지형(조립 방향이 아니면 끼워지지 않음, 필수 필드 미입력 시 저장 불가)이 강력합니다. FMEA의 높은 D 항목을 포카요케로 낮추는 전략이 효과적입니다.</p>
            <div class="callout-grid">
              <div class="callout"><strong>방지형</strong>구조적으로 오류 자체를 불가능하게 만듦</div>
              <div class="callout"><strong>검출형</strong>오류 발생 즉시 알람·정지·표시</div>
            </div>

            <h4>4. Control Plan 필수 필드</h4>
            <p>관리계획서는 개선 후 일상 운영의 계약서입니다. 누가, 무엇을, 언제, 어떻게 측정하고, 이탈 시 어떻게 조치하는지 한 장에 모읍니다.</p>
            <div class="infograph">
              <div class="ig-title">Control Plan 핵심 필드</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">CTQ</div><div class="ladder-body">관리 특성·스펙·단위</div></div>
                <div class="ladder-item"><div class="ladder-tag">측정</div><div class="ladder-body">방법·장비·MSA·샘플링</div></div>
                <div class="ladder-item"><div class="ladder-tag">책임</div><div class="ladder-body">담당자·빈도·기록 위치</div></div>
                <div class="ladder-item"><div class="ladder-tag">반응</div><div class="ladder-body">이탈 시 조치·에스컬레이션</div></div>
              </div>
            </div>

            <h4>5. 이해관계자: 영향력 × 우호도</h4>
            <p>프로젝트를 막는 사람은 종종 데이터가 아니라 정치·관심사입니다. 이해관계자를 <strong>영향력(Power)</strong>과 <strong>우호도(Support)</strong> 축으로 매핑해, 고영향·저우호 그룹을 우선 설득합니다. 엘리베이터 스피치로 30초 안에 목적·효과·필요 지원을 말하세요.</p>
            <div class="infograph">
              <div class="ig-title">이해관계자 우선순위 바</div>
              <div class="bar-chart">
                <div class="bar-row"><span>고영향·비우호</span><div class="bar-track"><div class="bar-fill" style="width:95%"></div></div><span>1순위</span></div>
                <div class="bar-row"><span>고영향·우호</span><div class="bar-track"><div class="bar-fill" style="width:70%"></div></div><span>유지</span></div>
                <div class="bar-row"><span>저영향·비우호</span><div class="bar-track"><div class="bar-fill" style="width:35%"></div></div><span>관찰</span></div>
                <div class="bar-row"><span>저영향·우호</span><div class="bar-track"><div class="bar-fill" style="width:25%"></div></div><span>정보</span></div>
              </div>
            </div>

            <h4>6. ARMI 역할 모델</h4>
            <p>역할이 흐리면 결정이 늦어지고 책임이 증발합니다. ARMI로 명확히 나눕니다.</p>
            <div class="infograph">
              <div class="ig-title">ARMI 칩</div>
              <div class="chip-grid">
                <span class="chip hot">A Approval 승인자</span>
                <span class="chip">R Resource 자원제공</span>
                <span class="chip">M Member 실무멤버</span>
                <span class="chip">I Interested 관심당사자</span>
              </div>
            </div>
            <p>A는 챔피언·경영진, R은 설비·인력·예산 제공자, M은 분석·실행 팀, I는 영향을 받지만 일상 참여는 적은 부서입니다. 킥오프에서 ARMI를 합의하고 주간으로 갱신하세요. 프로젝트 종료 시 Hand-over로 현업 오너에게 이관합니다.</p>
            <div class="tip-box"><strong>실무 요약:</strong> 요요를 전제로 방어하세요. FMEA·RPN·포카요케로 위험을 낮추고, Control Plan과 ARMI·이해관계자 맵으로 성과를 조직에 고정하세요.</div>
            <div class="lesson-outro">
              <h4>12강 정리</h4>
              <p>요요를 전제로 한 방어, FMEA·RPN·포카요케, Control Plan과 변화 관리로 “개선이 일상”이 되게 하는 법을 익혔습니다. Black Belt 구간을 마칩니다.</p>
              <p class="next-hint">다음 13강 Master에서는 DFSS와 DMADV·IDOV·CDOV·DCCDI·DMADOV 등 설계 로드맵 변형을 다룹니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "개선된 프로세스가 현장 작업자의 옛날 습관으로 인해 과거의 나쁜 상태로 되돌아가는 현상을 6시그마에서는 무엇이라 부르는가?", "options": ["나비 효과", "요요 현상 (Yo-yo Effect)", "다중공선성", "시그마 시프트"], "answer": 1, "rationale": "다이어트 실패처럼 힘들게 개선한 성과가 표준화 부재로 인해 원상 복구되는 것을 요요 현상이라 부르며, Control 단계의 핵심 방어 대상입니다."},
            {"q": "새로운 프로세스나 장비를 현장에 도입하기 전, 발생할 수 있는 잠재적 고장과 위험을 '사전에' 예측하고 점수화하여 예방책을 세우는 도구는?", "options": ["FMEA (고장형태 및 영향분석)", "QFD (품질기능전개)", "DOE (실험계획법)", "ANOVA"], "answer": 0, "rationale": "Failure Mode and Effects Analysis (FMEA)는 사후 약방문이 아니라, 사전에 시스템의 치명적 결함을 찾아내 방지하는 리스크 관리 도구입니다."},
            {"q": "FMEA에서 위험의 심각성을 수치화하는 RPN(위험우선순위 수치)을 산출하는 공식은?", "options": ["심각도(S) + 발생도(O) + 검출도(D)", "심각도(S) × 발생도(O) ÷ 검출도(D)", "심각도(S) × 발생도(O) × 검출도(D)", "심각도(S) × (발생도(O) + 검출도(D))"], "answer": 2, "rationale": "RPN(Risk Priority Number)은 고장이 고객에게 미치는 심각도, 일어날 확률인 발생도, 그리고 잡아낼 수 있는 확률인 검출도를 모두 곱하여 1~1000점 사이로 산출합니다."},
            {"q": "FMEA의 세 가지 평가 요소 중, 고장이 발생했을 때 그것이 고객(또는 다음 공정)의 안전이나 품질에 얼마나 치명적인 영향을 미치는가를 평가하는 지표는?", "options": ["발생도 (Occurrence)", "검출도 (Detection)", "심각도 (Severity)", "우선도 (Priority)"], "answer": 2, "rationale": "심각도(Severity)는 고장이 발생했을 때 고객이 체감하는 피해의 크기로, 보통 10점을 만점으로 가장 먼저 개선해야 할 지표입니다."},
            {"q": "작업자가 피로하거나 부주의해도 물리적, 시스템적으로 절대 실수(Human Error)를 할 수 없도록 공정을 설계하는 린(Lean)의 핵심 기법은?", "options": ["칸반 (Kanban)", "풀프루프 / 포카요케 (Poka-Yoke)", "시그마 시프트", "층별"], "answer": 1, "rationale": "포카요케는 '바보(Poka) 방지(Yoke)'라는 뜻으로, 자동차 기어를 P에 놓아야만 시동이 꺼지도록 설계하는 것 등이 대표적 예시입니다."},
            {"q": "프로젝트가 끝난 후에도 개선된 성과가 유지되도록, \"누가, 언제, 어떤 기기로 측정하고 이상 발생 시 어떻게 조치할 것인지\"를 상세히 명문화한 최종 문서는?", "options": ["프로젝트 헌장 (Project Charter)", "관리계획서 (Control Plan)", "데이터 수집 계획서", "가설검정 보고서"], "answer": 1, "rationale": "관리계획서(Control Plan)는 개선된 프로세스가 현장 작업자들에게 표준 업무로 정착되도록 가이드라인을 제공하는 Control 단계의 핵심 산출물입니다."},
            {"q": "혁신 프로젝트를 추진할 때 필수적인 '이해관계자 분석(Stakeholder Analysis)'에서 사람들을 분류하는 두 가지 핵심 축은 무엇인가?", "options": ["나이와 직급", "성향과 업무량", "영향력(Power)과 우호도(Support)", "지식과 경험"], "answer": 2, "rationale": "프로젝트에 미치는 영향력(파워)은 큰데 우리 프로젝트에 비우호적인 사람을 찾아내어 우선적으로 소통하고 설득하기 위해 두 축을 사용합니다."},
            {"q": "프로젝트 팀원과 관련 부서의 역할을 명확히 규정하는 ARMI 모델에서, 의사결정권과 승인 권한을 가진 챔피언이나 경영진을 뜻하는 알파벳은?", "options": ["A (Approval)", "R (Resource)", "M (Member)", "I (Interested Party)"], "answer": 0, "rationale": "A는 Approval(승인자/의사결정자)을 뜻하며, 프로젝트의 최종 결정과 장애물 제거 역할을 맡습니다."},
            {"q": "바쁜 경영진이나 챔피언과 엘리베이터에 탔을 때, 30초 이내의 짧은 시간 동안 프로젝트의 목적과 기대효과를 강력하게 각인시켜 지원을 이끌어내는 소통 기법은?", "options": ["엘리베이터 스피치 (Elevator Speech)", "브레인스토밍", "라운드 로빈", "마인드 맵"], "answer": 0, "rationale": "엘리베이터 스피치는 핵심만 간결하게 찔러 경영진의 즉각적인 관심과 리소스(Resource) 배분을 얻어내는 변화 관리의 중요 소프트 스킬입니다."},
            {"q": "6시그마 프로젝트의 공식적인 종료 단계에서, 개선된 프로세스의 일상적 운영 권한과 유지보수 책임을 현업 부서의 장(Process Owner)에게 넘기는 행위를 무엇이라 하는가?", "options": ["파일럿 (Pilot)", "프로젝트 이관 (Hand-over / Transition)", "프로세스 맵핑", "챔피언 승인"], "answer": 1, "rationale": "프로젝트 이관은 블랙벨트(개선팀)의 임무가 종료되고, 프로세스 오너(현업)가 관리계획서(Control Plan)를 넘겨받아 일상 업무로 유지하는 것을 공식화하는 절차입니다."},
        ]
    },
    {
        id: 13, belt: "Master", status: "locked", title: "13강. DFSS와 설계 로드맵 변형",
        content: `
            <h3>13강. DFSS와 설계 로드맵 변형</h3>
            <p>DMAIC는 이미 존재하는 프로세스의 결함을 고치는 데 탁월하지만, 뼈대 자체가 잘못되면 한계가 있습니다. 신규 제품·서비스·시스템을 처음부터 6시그마 품질로 만들 때는 <strong>DFSS(Design for Six Sigma)</strong>를 사용합니다. 목표는 양산 후 불량을 줄이는 것이 아니라, 설계 단계에서 변동과 위험을 흡수하는 것입니다.</p>
            <p>DFSS는 “하나의 약어”가 아닙니다. 업종·조직·프로젝트 성격에 따라 <strong>DMADV, IDOV, CDOV, DCCDI, DMADOV</strong> 등 여러 로드맵이 쓰입니다. 공통점은 VOC→CTQ→설계→검증이며, 단계 이름과 강조점이 다릅니다.</p>

            <h4>1. DMAIC vs DFSS — 언제 무엇을?</h4>
            <p>앞단은 비슷해 보이지만 목적이 다릅니다. DMAIC는 Analyze→Improve→Control로 <strong>현상을 고치고</strong>, DFSS는 Design·Optimize·Verify로 <strong>새로운 것을 만들고 검증</strong>합니다.</p>
            <div class="infograph">
              <div class="ig-title">개선 vs 설계</div>
              <div class="compare-2">
                <div class="compare-card">
                  <h5>DMAIC</h5>
                  <ul>
                    <li>기존 프로세스 개선</li>
                    <li>Improve로 세팅·절차 변경</li>
                    <li>Control로 유지</li>
                  </ul>
                </div>
                <div class="compare-card good">
                  <h5>DFSS (여러 로드맵)</h5>
                  <ul>
                    <li>신규 제품·서비스·시스템</li>
                    <li>설계·최적화·검증이 중심</li>
                    <li>양산 전 품질을 설계에 내장</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="warn-box"><strong>전환 신호:</strong> DMAIC로 Improve를 반복해도 CTQ가 안 오르면 “공정 문제”가 아니라 “설계 한계”일 수 있습니다. 그때는 DFSS로 재정의하세요.</div>

            <h4>2. DFSS 로드맵 패밀리 한눈에</h4>
            <div class="infograph">
              <div class="ig-title">대표 DFSS 변형</div>
              <div class="chip-grid">
                <span class="chip hot">DMADV</span>
                <span class="chip">IDOV</span>
                <span class="chip">CDOV</span>
                <span class="chip">DCCDI</span>
                <span class="chip">DMADOV</span>
              </div>
              <table class="mini-table" style="margin-top:0.85rem;">
                <thead><tr><th>로드맵</th><th>단계</th><th>잘 맞는 상황</th></tr></thead>
                <tbody>
                  <tr><td><strong>DMADV</strong></td><td>Define–Measure–Analyze–Design–Verify</td><td>범용 신규 설계. 제조·서비스·IT 모두</td></tr>
                  <tr><td><strong>IDOV</strong></td><td>Identify–Design–Optimize–Validate</td><td>요구 식별→설계→최적화가 뚜렷한 R&amp;D·제품개발</td></tr>
                  <tr><td><strong>CDOV</strong></td><td>Concept–Design–Optimize–Verify</td><td>컨셉 선택이 성패를 가르는 신사업·플랫폼</td></tr>
                  <tr><td><strong>DCCDI</strong></td><td>Define–Customer–Concept–Design–Implement</td><td>고객 통찰·컨셉이 핵심인 서비스·CX 설계</td></tr>
                  <tr><td><strong>DMADOV</strong></td><td>Define–Measure–Analyze–Design–Optimize–Verify</td><td>설계 후 파라미터 최적화가 긴 하드웨어·공정</td></tr>
                </tbody>
              </table>
            </div>
            <div class="info-box">조직마다 이름을 조금씩 바꿉니다(예: DMEDI, DCOV). 중요한 것은 약어 암기가 아니라 <strong>고객→측정→설계→최적화→검증</strong>의 게이트를 빠뜨리지 않는 것입니다.</div>

            <h4>3. DMADV — 가장 널리 쓰는 DFSS</h4>
            <div class="infograph">
              <div class="ig-title">DMADV 로드맵</div>
              <div class="flow-row">
                <div class="flow-step">Define</div><span class="flow-arrow">→</span>
                <div class="flow-step">Measure</div><span class="flow-arrow">→</span>
                <div class="flow-step">Analyze</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">Design</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">Verify</div>
              </div>
            </div>
            <ul>
              <li><strong>Define:</strong> 신규 목표, 고객, 사업 경계, 성공 기준</li>
              <li><strong>Measure:</strong> VOC→CTQ, 경쟁 벤치마크, 측정 가능성</li>
              <li><strong>Analyze:</strong> 하이레벨 아키텍처 대안, 실현성·리스크 비교</li>
              <li><strong>Design:</strong> 상세 파라미터, 시뮬레이션, 프로토타입, 강건 설계</li>
              <li><strong>Verify:</strong> 시제품·파일럿, CTQ 입증, 양산/배포 이관</li>
            </ul>
            <div class="info-box">Verify는 DMAIC의 Control과 다릅니다. 설계가 CTQ를 충족하는지 최종 입증하고 양산 체계로 넘기는 게이트입니다.</div>

            <h4>4. IDOV — Identify에서 Validate까지</h4>
            <p><strong>IDOV</strong>는 GE 등에서 널리 쓰인 DFSS 변형으로, 요구 <strong>식별(Identify)</strong>과 <strong>최적화(Optimize)</strong>·<strong>검증(Validate)</strong>을 강조합니다. “무엇을 만들지”가 아직 흐릴 때, VOC·시장·규제를 Identify에서 단단히 고정합니다.</p>
            <div class="infograph">
              <div class="ig-title">IDOV</div>
              <div class="flow-row">
                <div class="flow-step accent">Identify</div><span class="flow-arrow">→</span>
                <div class="flow-step">Design</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">Optimize</div><span class="flow-arrow">→</span>
                <div class="flow-step">Validate</div>
              </div>
              <div class="kpi-row" style="margin-top:0.85rem;">
                <div class="kpi"><span class="num">I</span><span class="lbl">Identify CTQ</span></div>
                <div class="kpi"><span class="num">D</span><span class="lbl">Design</span></div>
                <div class="kpi"><span class="num">O</span><span class="lbl">Optimize</span></div>
                <div class="kpi"><span class="num">V</span><span class="lbl">Validate</span></div>
              </div>
            </div>
            <ul>
              <li><strong>Identify:</strong> 고객·비즈니스 CTQ, 경쟁 갭, 제약(비용·규제)</li>
              <li><strong>Design:</strong> 개념·상세 설계, QFD, 시스템 아키텍처</li>
              <li><strong>Optimize:</strong> DOE·강건설계·공차설계로 성능·산포 최적화</li>
              <li><strong>Validate:</strong> 시험·파일럿·신뢰성으로 CTQ 달성 입증</li>
            </ul>
            <div class="callout-grid">
              <div class="callout"><strong>잘 맞는 업종</strong>제품 R&amp;D, 전자·기계 신모델, 의료기기 설계</div>
              <div class="callout"><strong>핵심 차이</strong>DMADV의 Analyze를 Identify+Optimize 강조로 재배치</div>
            </div>

            <h4>5. CDOV — Concept이 먼저</h4>
            <p><strong>CDOV</strong>는 <strong>Concept</strong> 선택부터 시작합니다. 플랫폼·아키텍처·비즈니스 모델처럼 “어느 컨셉을 가져갈지”가 설계 세부보다 먼저인 프로젝트에 적합합니다. Pugh Matrix·TRIZ가 Concept 단계의 주력 도구가 됩니다.</p>
            <div class="infograph">
              <div class="ig-title">CDOV</div>
              <div class="flow-row">
                <div class="flow-step accent">Concept</div><span class="flow-arrow">→</span>
                <div class="flow-step">Design</div><span class="flow-arrow">→</span>
                <div class="flow-step">Optimize</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">Verify</div>
              </div>
            </div>
            <ul>
              <li><strong>Concept:</strong> 대안 컨셉 도출·평가·선정 (Pugh, 실현성, 리스크)</li>
              <li><strong>Design:</strong> 선정 컨셉의 상세 설계·인터페이스</li>
              <li><strong>Optimize:</strong> 파라미터·공차·원가·신뢰성 최적화</li>
              <li><strong>Verify:</strong> 프로토타입·필드 테스트로 검증</li>
            </ul>
            <div class="tip-box"><strong>언제 CDOV?</strong> “기능을 조금만 고친다”가 아니라 “아키텍처를 새로 고른다”일 때. 잘못된 컨셉을 상세 설계하면 최적화만으로는 구제되지 않습니다.</div>

            <h4>6. DCCDI — 고객과 컨셉을 앞에</h4>
            <p><strong>DCCDI</strong>(Define–Customer–Concept–Design–Implement)는 서비스·CX·디지털 경험처럼 <strong>고객 이해</strong>와 <strong>컨셉</strong>이 설계의 절반인 경우에 자주 맞습니다. Customer 단계에서 페르소나·여정지도·Kano·VOC를 깊게 파고, Concept에서 가치제안을 고른 뒤 Design→Implement로 갑니다.</p>
            <div class="infograph">
              <div class="ig-title">DCCDI</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">Define</div><div class="ladder-body">사업 목표·범위·성공 정의</div></div>
                <div class="ladder-item"><div class="ladder-tag">Customer</div><div class="ladder-body">VOC·여정·CTQ·경쟁 경험 갭</div></div>
                <div class="ladder-item"><div class="ladder-tag">Concept</div><div class="ladder-body">서비스/제품 컨셉 선정</div></div>
                <div class="ladder-item"><div class="ladder-tag">Design</div><div class="ladder-body">프로세스·UI·운영 규칙 상세화</div></div>
                <div class="ladder-item"><div class="ladder-tag">Implement</div><div class="ladder-body">파일럿·롤아웃·운영 이관</div></div>
              </div>
            </div>
            <div class="callout-grid">
              <div class="callout"><strong>잘 맞는 업종</strong>금융·병원·리테일 서비스 설계, 앱/웹 CX</div>
              <div class="callout"><strong>주의</strong>Implement 후 산포가 남으면 DMAIC/린으로 이어 붙임</div>
            </div>

            <h4>7. DMADOV — Design과 Optimize를 분리</h4>
            <p><strong>DMADOV</strong>는 DMADV에 <strong>Optimize</strong>를 명시적으로 끼워 넣은 형태입니다. 복잡한 하드웨어·공정에서 “설계안을 그린 것”과 “파라미터를 최적화한 것”을 게이트로 분리할 때 유용합니다. Design에서 구조·아키텍처를 고정하고, Optimize에서 DOE·RSM·강건설계로 산포·원가·수율을 밀어 올립니다.</p>
            <div class="infograph">
              <div class="ig-title">DMADOV</div>
              <div class="flow-row">
                <div class="flow-step">D</div><span class="flow-arrow">→</span>
                <div class="flow-step">M</div><span class="flow-arrow">→</span>
                <div class="flow-step">A</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">D</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">O</div><span class="flow-arrow">→</span>
                <div class="flow-step">V</div>
              </div>
            </div>
            <p>양산 공정 셋업까지 한 프로젝트에서 다룰 때는 DMADOV 후반(Optimize–Verify)과 린 6시그마/DMAIC를 하이브리드로 연결하기도 합니다.</p>

            <h4>8. 업종·프로젝트별 선택 가이드</h4>
            <div class="infograph">
              <div class="ig-title">상황별 추천</div>
              <table class="mini-table">
                <thead><tr><th>상황</th><th>1순위</th><th>대안/병행</th></tr></thead>
                <tbody>
                  <tr><td>기존 제조 라인 불량</td><td>DMAIC</td><td>린 6시그마</td></tr>
                  <tr><td>신제품 범용 설계</td><td>DMADV</td><td>IDOV</td></tr>
                  <tr><td>R&amp;D·파라미터 최적화 길다</td><td>IDOV / DMADOV</td><td>DOE·강건설계 강화</td></tr>
                  <tr><td>플랫폼·아키텍처 선택</td><td>CDOV</td><td>Pugh + TRIZ</td></tr>
                  <tr><td>서비스·CX·디지털 경험</td><td>DCCDI</td><td>애자일 6시그마</td></tr>
                  <tr><td>리드타임·낭비 중심</td><td>린 6시그마</td><td>DMAIC + VSM</td></tr>
                  <tr><td>요구 변동·빠른 학습</td><td>애자일 6시그마</td><td>스프린트 DMADV/DCCDI</td></tr>
                </tbody>
              </table>
            </div>
            <div class="chip-grid">
              <span class="chip hot">린 6시그마</span>
              <span class="chip">애자일 6시그마</span>
              <span class="chip">하이브리드</span>
            </div>
            <p><strong>린 6시그마</strong>는 “품질(산포)”과 “속도(낭비)”를 한 프로젝트에서 다룹니다. DFSS로 설계해도 운영 단계에서 VSM·5S·칸반이 필요하면 린을 붙입니다. <strong>애자일 6시그마</strong>는 DFSS/DMAIC 단계를 긴 폭포수로 두지 않고, 2~4주 스프린트로 쪼개 검증합니다(16강).</p>

            <h4>9. QFD와 품질의 집(HOQ)</h4>
            <p>거의 모든 DFSS 변형에서 공통 도구가 <strong>QFD(Quality Function Deployment)</strong>입니다. 고객의 언어를 기술 특성으로 번역하며, 시각화 형태가 <strong>HOQ(House of Quality)</strong>입니다.</p>
            <div class="infograph">
              <div class="ig-title">QFD 전개 사다리</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">VOC</div><div class="ladder-body">고객 요구·중요도</div></div>
                <div class="ladder-item"><div class="ladder-tag">CTQ</div><div class="ladder-body">측정 가능한 기술 특성</div></div>
                <div class="ladder-item"><div class="ladder-tag">부품</div><div class="ladder-body">부품·모듈 스펙으로 전개</div></div>
                <div class="ladder-item"><div class="ladder-tag">공정</div><div class="ladder-body">공정·관리 항목으로 연결</div></div>
              </div>
            </div>
            <p>지붕(상관)에서는 기술 특성끼리의 상충을 봅니다. 상충이 크면 TRIZ나 타협 설계가 필요합니다.</p>

            <h4>10. 강건 설계 · Pugh · TRIZ</h4>
            <p><strong>강건 설계(Robust Design)</strong>는 통제 불가 노이즈에도 성능이 흔들리지 않도록 파라미터를 고릅니다. IDOV/CDOV/DMADOV의 Optimize 단계에서 특히 중요합니다.</p>
            <div class="infograph">
              <div class="ig-title">강건성의 KPI 감각</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">평균</span><span class="lbl">타겟 근접</span></div>
                <div class="kpi"><span class="num">산포</span><span class="lbl">노이즈 둔감</span></div>
                <div class="kpi"><span class="num">SN비</span><span class="lbl">신호 대 잡음</span></div>
              </div>
            </div>
            <p><strong>Pugh Matrix</strong>는 Concept/Analyze에서 대안을 +, −, S로 비교합니다. <strong>TRIZ</strong>는 모순(튼튼하면서 가벼움)을 타협 없이 푸는 창의 원리입니다.</p>
            <div class="chip-grid">
              <span class="chip hot">Pugh 평가</span>
              <span class="chip">TRIZ 모순해소</span>
              <span class="chip">FMEA 연계</span>
              <span class="chip">시뮬레이션</span>
            </div>
            <div class="tip-box"><strong>실무 요약:</strong> 기존을 고치면 DMAIC, 새로 만들면 DFSS. DFSS 안에서는 범용은 DMADV, 요구식별·최적화 강조는 IDOV, 컨셉 우선은 CDOV, 고객·서비스는 DCCDI, 설계·최적화 분리는 DMADOV. 속도는 린, 불확실성은 애자일과 붙이세요.</div>
            <div class="lesson-outro">
              <h4>13강 정리</h4>
              <p>기존 개선(DMAIC)과 신규 설계(DFSS)를 구분하고, 업종·프로젝트에 맞는 설계 로드맵을 고르는 기준을 익혔습니다.</p>
              <p class="next-hint">다음 14강에서는 IoT·실시간 SPC·RPA가 결합된 디지털 린 6시그마(LSS 4.0)를 봅니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "기존에 존재하는 프로세스를 개선하는 DMAIC와 달리, 완전히 새로운 제품이나 서비스를 무결점 상태로 기획하고 설계하기 위해 사용하는 6시그마 방법론은?", "options": ["PDCA", "DFSS (Design for Six Sigma)", "SPC", "FMEA"], "answer": 1, "rationale": "DFSS는 '설계 단계에서부터' 6시그마 품질 수준을 달성하도록 제품·프로세스를 백지상태에서 창조하는 방법론입니다."},
            {"q": "DFSS의 대표 로드맵으로 Define–Measure–Analyze–Design–Verify를 쓰는 것은?", "options": ["DMAIC", "PDCA", "DMADV", "5S"], "answer": 2, "rationale": "신규 설계의 가장 널리 쓰이는 DFSS 로드맵이 DMADV입니다."},
            {"q": "Identify–Design–Optimize–Validate 순서로 진행하는 DFSS 변형은?", "options": ["CDOV", "IDOV", "DCCDI", "DMAIC"], "answer": 1, "rationale": "IDOV는 요구 식별(Identify)과 최적화(Optimize)·검증(Validate)을 강조하는 DFSS 로드맵입니다."},
            {"q": "플랫폼·아키텍처처럼 '컨셉 선정'이 먼저인 신규 프로젝트에 잘 맞는 DFSS 변형은?", "options": ["CDOV", "Gage R&R", "SPC", "OFAT"], "answer": 0, "rationale": "CDOV는 Concept–Design–Optimize–Verify로, 컨셉 선택이 성패를 가르는 경우에 적합합니다."},
            {"q": "Define–Customer–Concept–Design–Implement로 고객 통찰과 컨셉을 앞에 두는 DFSS 변형은?", "options": ["DMADV", "DCCDI", "PDCA", "ANOVA"], "answer": 1, "rationale": "DCCDI는 서비스·CX 설계처럼 Customer·Concept 단계가 핵심인 프로젝트에 자주 맞습니다."},
            {"q": "DMADV에 Optimize 단계를 명시적으로 넣어 Design과 파라미터 최적화를 분리한 로드맵은?", "options": ["DMADOV", "SIPOC", "VSM", "Kano"], "answer": 0, "rationale": "DMADOV는 Design 이후 Optimize를 게이트로 분리해 복잡한 하드웨어·공정 최적화에 유용합니다."},
            {"q": "모호한 고객 요구(VOC)를 기술 특성으로 번역하는 DFSS 공통 도구는?", "options": ["QFD (품질기능전개)", "관리도", "VSM", "특성요인도"], "answer": 0, "rationale": "QFD는 고객의 언어를 기술의 언어로 번역해 설계에 반영하는 매트릭스 도구입니다."},
            {"q": "QFD를 시각화한 집 모양 매트릭스의 이름은?", "options": ["CTQ Tree", "HOQ (품질의 집)", "파레토 차트", "산점도"], "answer": 1, "rationale": "House of Quality(HOQ)는 QFD의 핵심 시각화 도구입니다."},
            {"q": "외부 노이즈에도 성능이 흔들리지 않도록 파라미터를 고르는 기법은?", "options": ["강건 설계 (Robust Design)", "숨은 공장", "시그마 시프트", "Trivial Many"], "answer": 0, "rationale": "강건 설계는 노이즈에 둔감한 설계값을 찾아 품질 변동을 최소화합니다."},
            {"q": "DMAIC와 DFSS(DMADV 등)의 가장 근본적인 차이로 올바른 것은?", "options": ["DMAIC만 통계를 쓴다", "DFSS는 서비스에만 쓴다", "DMAIC는 기존 프로세스를 고치고, DFSS는 새로 설계한다", "둘은 단계 이름만 다르다"], "answer": 2, "rationale": "DMAIC는 현상 개선(Fixing), DFSS는 신규 창조(Creating)가 목적입니다."},
        ]
    },
    {
        id: 14, belt: "Master", status: "locked", title: "14강. 디지털 린 6시그마 (LSS 4.0)",
        content: `
            <h3>14강. 디지털 린 6시그마 (LSS 4.0)</h3>
            <p>4차 산업혁명 기술(IoT, Cloud, Big Data, AI)이 린·6시그마와 결합하면서 측정·분석·통제의 속도가 바뀌었습니다. <strong>LSS 4.0</strong>은 수기 샘플링과 사후 엑셀 분석에서 벗어나, 실시간 데이터와 자동화로 DMAIC를 가속하는 운영 체계입니다. 블랙벨트에게는 통계 감각에 더해 데이터 파이프라인 이해가 필요합니다.</p>

            <h4>1. IoT 기반 Measure</h4>
            <p>과거에는 작업자가 체크시트에 하루 몇 번 기록했지만, 지금은 설비 센서가 온도·진동·압력·전류를 초단위로 클라우드에 적재합니다. 전수에 가까운 데이터가 Measure의 표본 편향을 줄입니다. 다만 센서 교정·타임스탬프·결측 처리가 새로운 MSA 과제가 됩니다.</p>
            <div class="info-box">디지털 Measure도 측정 시스템입니다. 센서 드리프트, 샘플링 주기, 단위 환산 오류는 고전 Gage R&amp;R만큼 위험합니다.</div>

            <h4>2. 실시간 SPC와 알림 흐름</h4>
            <p>관리도가 밤사이 배치로 그려지는 대신, BI 대시보드가 24시간 렌더링합니다. UCL/LCL 이탈 시 밀리초~초 단위로 모바일·메신저 알림이 나가 불량 확산을 막습니다.</p>
            <div class="infograph">
              <div class="ig-title">실시간 SPC 알림 흐름</div>
              <div class="flow-row">
                <div class="flow-step">IoT</div><span class="flow-arrow">→</span>
                <div class="flow-step">스트림</div><span class="flow-arrow">→</span>
                <div class="flow-step">SPC엔진</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">Alert</div><span class="flow-arrow">→</span>
                <div class="flow-step">현장조치</div>
              </div>
            </div>
            <div class="warn-box">알람이 너무 잦으면 무시됩니다. 관리한계·부분군·필터 규칙을 공정 지식과 맞춰 튜닝하세요.</div>

            <h4>3. 디지털 트윈 DOE</h4>
            <p><strong>디지털 트윈</strong>은 물리 공장의 가상 쌍둥입니다. 설비를 멈추지 않고 가상에서 DOE·What-if를 수만 번 돌려 후보 조건을 좁힌 뒤, 현실에서는 확인 실험만 수행합니다. 비용·리드타임을 크게 줄이지만, 모델 가정과 현실의 갭을 항상 검증해야 합니다.</p>
            <div class="infograph">
              <div class="ig-title">가상→현실 검증</div>
              <div class="compare-2">
                <div class="compare-card good">
                  <h5>디지털 트윈</h5>
                  <ul>
                    <li>빠른 다회 실험</li>
                    <li>위험·비용 낮음</li>
                    <li>광역 탐색</li>
                  </ul>
                </div>
                <div class="compare-card">
                  <h5>물리 확인</h5>
                  <ul>
                    <li>모델 외삽 검증</li>
                    <li>노이즈 실측</li>
                    <li>양산 이관 근거</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4>4. 빅데이터 3V와 프로세스 마이닝</h4>
            <p>빅데이터의 <strong>3V</strong>는 Volume(양), Velocity(속도), Variety(다양성)입니다. 정형 센서뿐 아니라 로그·이미지·텍스트가 Analyze 입력이 됩니다. <strong>프로세스 마이닝</strong>은 이벤트 로그로 실제 업무 흐름을 자동 VSM처럼 그려 병목·우회·재작업을 드러냅니다.</p>
            <div class="infograph">
              <div class="ig-title">3V KPI</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">Volume</span><span class="lbl">데이터 규모</span></div>
                <div class="kpi"><span class="num">Velocity</span><span class="lbl">생성·처리 속도</span></div>
                <div class="kpi"><span class="num">Variety</span><span class="lbl">형태 다양성</span></div>
              </div>
            </div>

            <h4>5. RPA와 예지보전(PdM) 사다리</h4>
            <p><strong>RPA</strong>는 반복 사무(취합, 입력, 대사)를 봇이 수행해 휴먼에러와 대기를 줄입니다. 설비 보전은 사후→예방→예지로 고도화됩니다.</p>
            <div class="infograph">
              <div class="ig-title">보전 성숙 사다리</div>
              <div class="ladder">
                <div class="ladder-item"><div class="ladder-tag">BM</div><div class="ladder-body">사후 보전 — 고장 후 수리</div></div>
                <div class="ladder-item"><div class="ladder-tag">PM</div><div class="ladder-body">예방 보전 — 주기 교체</div></div>
                <div class="ladder-item"><div class="ladder-tag">PdM</div><div class="ladder-body">예지 보전 — 센서·ML로 시점 예측</div></div>
              </div>
            </div>
            <div class="chip-grid">
              <span class="chip">IoT</span>
              <span class="chip">Cloud</span>
              <span class="chip hot">Realtime SPC</span>
              <span class="chip">Process Mining</span>
              <span class="chip">RPA</span>
              <span class="chip hot">PdM</span>
            </div>
            <h4>6. CPS와 블랙벨트의 디지털 역량</h4>
            <p><strong>CPS(Cyber-Physical System)</strong>는 물리 설비와 사이버 분석이 양방향으로 연결되어 스스로 보정·최적화를 시도하는 스마트 팩토리의 뼈대입니다. 센서→분석→액추에이터 루프가 닫히면 Control이 사람 개입 없이도 일부 작동합니다. 다만 안전·품질 게이트는 여전히 사람이 설계해야 합니다.</p>
            <ul>
              <li>클라우드로 대용량 저장·분산 분석이 가능해져 지역 공장 간 벤치마크가 쉬워짐</li>
              <li>블랙벨트는 미니탭뿐 아니라 Python/R로 로그·스트림을 다룰 줄 알아야 함</li>
              <li>대시보드 예쁜 그림보다, 정의된 CTQ·알람 책임·조치 SLA가 운영 품질을 결정</li>
            </ul>
            <div class="info-box">LSS 4.0 성공의 척도는 도입한 툴 개수가 아니라, 이상 감지부터 현장 조치까지의 리드타임이 실제로 줄었는지입니다.</div>
            <div class="tip-box"><strong>실무 요약:</strong> 센서로 측정하고, 실시간 SPC로 통제하며, 트윈·마이닝·RPA·PdM으로 개선 속도를 높이세요. 기술 도입보다 알람·책임·데이터 품질 운영이 성패를 가릅니다.</div>
            <div class="lesson-outro">
              <h4>14강 정리</h4>
              <p>센서 데이터, 실시간 SPC, 디지털 트윈·RPA·예지보전으로 DMAIC 속도를 높이는 LSS 4.0 감각을 익혔습니다. 기술보다 운영 책임이 성패를 가릅니다.</p>
              <p class="next-hint">다음 15강에서는 통계와 AI/머신러닝을 어떻게 역할 분담할지 다룹니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "디지털 린 6시그마(LSS 4.0) 환경에서 Measure(측정) 단계를 혁신적으로 변화시킨 가장 핵심적인 기술 발전은?", "options": ["종이 체크시트의 항목 세분화", "IoT 센서를 통한 공정 데이터의 실시간/자동 스트리밍 수집", "수기 결재 라인의 간소화", "샘플링 검사 비율의 축소"], "answer": 1, "rationale": "사물인터넷(IoT) 센서의 도입으로 사람이 직접 샘플링하던 수기 오차가 사라지고 24시간 실시간 전수 데이터 수집이 가능해졌습니다."},
            {"q": "LSS 4.0에서 기존 엑셀 기반의 SPC(통계적 공정관리)를 대체하는 현대적인 실시간 통제 방식은?", "options": ["분기별 품질 보고서 인쇄", "Tableau, PowerBI 등을 활용한 실시간 대시보드 렌더링 및 자동 알림(Alert) 시스템", "월간 경영진 회의체 신설", "작업자 상호 교차 검증"], "answer": 1, "rationale": "클라우드와 BI 툴을 결합하여 관리도가 실시간으로 업데이트되며, 이상 징후 발생 시 현장에 모바일 푸시 알림을 즉각 발송합니다."},
            {"q": "실제 공장이나 설비를 멈추지 않고, 가상 공간에 똑같은 쌍둥이 공장을 3D와 데이터로 모델링하여 다양한 공정 조건을 시뮬레이션(DOE) 해보는 기술은?", "options": ["디지털 트윈 (Digital Twin)", "블록체인 (Blockchain)", "자연어 처리 (NLP)", "메타버스 (Metaverse)"], "answer": 0, "rationale": "디지털 트윈 기술을 활용하면 물리적 비용이나 생산 차질 없이 수만 번의 실험계획법(DOE)과 최적화 시뮬레이션을 수행할 수 있습니다."},
            {"q": "현대의 디지털 비즈니스에서 생성되는 '빅데이터(Big Data)'의 3가지 핵심 특징(3V)에 해당하지 않는 것은?", "options": ["Volume (데이터의 양)", "Velocity (데이터 생성 속도)", "Variety (데이터의 다양성)", "Validity (데이터의 합법성)"], "answer": 3, "rationale": "빅데이터의 3V는 거대한 규모(Volume), 실시간에 가까운 빠른 생성 및 처리 속도(Velocity), 텍스트/이미지 등 형태의 다양성(Variety)을 의미합니다."},
            {"q": "기업 내부 시스템에 쌓인 이벤트 로그(Event Log) 데이터를 분석하여, 직원들이 실제로 어떤 순서로 업무를 처리하는지 눈에 보이는 '가치흐름도(VSM)'로 자동 시각화해 주는 기술은?", "options": ["프로세스 마이닝 (Process Mining)", "텍스트 마이닝 (Text Mining)", "로봇 프로세스 자동화 (RPA)", "클라우드 컴퓨팅"], "answer": 0, "rationale": "프로세스 마이닝은 정보 시스템의 로그 데이터를 분석해 실제 프로세스의 병목과 우회(Bypass) 경로를 투명하게 그려내는 디지털 진단 기법입니다."},
            {"q": "린(Lean)의 핵심인 '낭비 제거'를 사무직 업무에 적용할 때, 엑셀 데이터 취합이나 영수증 입력 같은 단순 반복 업무를 소프트웨어 봇(Bot)이 대신 수행하게 만드는 자동화 기술은?", "options": ["IoT (사물인터넷)", "RPA (Robotic Process Automation)", "3D 프린팅", "디지털 트윈"], "answer": 1, "rationale": "RPA는 사무 환경의 규칙적이고 반복적인 PC 작업을 자동화하여 처리 속도를 높이고 휴먼 에러를 0%로 만드는 LSS 4.0의 핵심 도구입니다."},
            {"q": "사후에 고장이 나면 고치는 방식(BM)이나 정해진 주기마다 부품을 교체하는 방식(PM)을 넘어, 센서 데이터를 분석해 '고장이 날 시점을 미리 예측'하여 정비하는 현대적 유지보수 방식은?", "options": ["사후 보전 (Breakdown Maintenance)", "예방 보전 (Preventive Maintenance)", "예지 보전 (Predictive Maintenance, PdM)", "자주 보전 (Autonomous Maintenance)"], "answer": 2, "rationale": "머신러닝과 실시간 진동/온도 데이터를 결합하여 설비의 수명을 예측하고 필요한 시점에만 정비하는 것을 예지 보전(PdM)이라고 합니다."},
            {"q": "물리적인 설비(Physical)와 컴퓨터 사이버 공간(Cyber)의 데이터가 실시간으로 양방향 소통하며 공정을 자율적으로 제어하는 스마트 팩토리의 핵심 시스템은?", "options": ["ERP 시스템", "CPS (Cyber-Physical System)", "CRM 시스템", "HRM 시스템"], "answer": 1, "rationale": "CPS(사이버 물리 시스템)는 현실의 설비와 가상 공간의 컴퓨팅 능력을 네트워크로 결합해 스스로 최적화하는 LSS 4.0의 인프라입니다."},
            {"q": "디지털 린 6시그마에서 클라우드 컴퓨팅(Cloud Computing)이 기여하는 가장 큰 장점은?", "options": ["데이터의 양을 줄여준다.", "물리적 서버 구축 없이 대용량의 공정 데이터를 전 세계 어디서나 실시간으로 저장하고 분산 분석할 수 있게 해준다.", "작업자의 휴식 시간을 늘려준다.", "문서의 인쇄 속도를 높여준다."], "answer": 1, "rationale": "클라우드는 무제한에 가까운 스토리지와 컴퓨팅 파워를 제공하여 빅데이터 분석과 실시간 협업을 가능하게 합니다."},
            {"q": "전통적인 6시그마 전문가(블랙벨트)가 디지털 전환(DX) 시대에 추가로 갖추어야 할 가장 중요한 역량은?", "options": ["수기 장부 작성 능력", "미니탭(Minitab) 소프트웨어 인스톨 능력", "파이썬(Python)/R 등을 활용한 코딩 및 빅데이터 핸들링 역량", "종이 체크시트 디자인 능력"], "answer": 2, "rationale": "LSS 4.0 시대에는 엑셀 범위를 넘어서는 대용량 데이터를 다루고 머신러닝 알고리즘을 적용하기 위해 파이썬이나 R 같은 데이터 사이언스 역량이 요구됩니다."},
        ]
    },
    {
        id: 15, belt: "Master", status: "locked", title: "15강. AI/머신러닝 기반 통계 고도화",
        content: `
            <h3>15강. AI/머신러닝 기반 통계 고도화</h3>
            <p>빅데이터 시대의 Analyze는 고전 통계(ANOVA, 회귀)를 넘어 <strong>머신러닝·딥러닝</strong>과 융합됩니다. 목적은 해석 가능한 인과와 높은 예측력을 상황별로 선택하는 것입니다. 블랙벨트는 알고리즘 이름보다, 어떤 데이터가 필요하고 어떤 위험이 있는지를 설계해야 합니다.</p>

            <h4>1. NLP로 VOC 고도화</h4>
            <p>앱 리뷰, 상담 녹취, SNS 불만은 비정형 텍스트입니다. <strong>NLP</strong>와 감성분석으로 부정 키워드·토픽을 군집화하면 숨은 CTQ를 빠르게 발굴합니다. LLM은 FMEA·매뉴얼 초안 작성도 가속하지만, 환각을 막기 위해 전문가 검수가 필수입니다.</p>
            <div class="infograph">
              <div class="ig-title">VOC → CTQ 디지털 흐름</div>
              <div class="flow-row">
                <div class="flow-step">텍스트</div><span class="flow-arrow">→</span>
                <div class="flow-step">NLP</div><span class="flow-arrow">→</span>
                <div class="flow-step">감성/토픽</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">CTQ후보</div>
              </div>
            </div>

            <h4>2. 지도 vs 비지도 학습</h4>
            <p><strong>지도 학습</strong>은 X와 정답 Y(양/불량, 수율) 쌍으로 예측·분류 모델을 학습합니다. <strong>비지도 학습</strong>은 Y 없이 유사성으로 군집(K-means 등)을 찾아 불량 유형·고객 세그먼트를 발견합니다. 프로젝트 초반에는 비지도로 구조를 보고, 라벨이 쌓이면 지도로 예측을 고도화하는 전략이 흔합니다.</p>
            <div class="infograph">
              <div class="ig-title">학습 유형 비교</div>
              <div class="compare-2">
                <div class="compare-card good">
                  <h5>지도 학습</h5>
                  <ul>
                    <li>Y 라벨 필요</li>
                    <li>분류·회귀 예측</li>
                    <li>예: RF, XGBoost</li>
                  </ul>
                </div>
                <div class="compare-card">
                  <h5>비지도 학습</h5>
                  <ul>
                    <li>Y 없음</li>
                    <li>군집·차원축소</li>
                    <li>예: K-means, PCA</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4>3. RF/XGBoost vs 회귀</h4>
            <p>다중 회귀는 해석이 쉽고 인과 가설 검증에 강하지만, 강한 비선형·고차 교호·수백 개 변수에서는 한계가 있습니다. <strong>랜덤 포레스트·XGBoost</strong>는 비선형과 교호를 자동 학습해 예측력이 높은 편입니다. 다만 계수처럼 단순한 스토리텔링은 어렵고, 변수 중요도·SHAP 등으로 해석을 보강합니다.</p>
            <div class="infograph">
              <div class="ig-title">모델 선택 감각</div>
              <div class="bar-chart">
                <div class="bar-row"><span>해석성</span><div class="bar-track"><div class="bar-fill" style="width:90%"></div></div><span>회귀↑</span></div>
                <div class="bar-row"><span>비선형예측</span><div class="bar-track"><div class="bar-fill" style="width:90%"></div></div><span>ML↑</span></div>
                <div class="bar-row"><span>소표본</span><div class="bar-track"><div class="bar-fill" style="width:75%"></div></div><span>회귀유리</span></div>
                <div class="bar-row"><span>고차원X</span><div class="bar-track"><div class="bar-fill" style="width:85%"></div></div><span>ML유리</span></div>
              </div>
            </div>

            <h4>4. 과적합 경고</h4>
            <p>모델이 훈련 데이터를 암기하면 신규 데이터에서 성능이 떨어집니다. 이를 <strong>과적합(Overfitting)</strong>이라 합니다. 교차검증, 정규화, 조기중단, 홀드아웃, 단순화로 방어합니다. 6시그마에서는 현장 파일럿 성능이 최종 판정입니다.</p>
            <div class="warn-box"><strong>과적합 경고:</strong> 학습 R²만 보고 배포하지 마세요. 검증·테스트 성능과 시간 외 표본(다른 로트·계절)에서 재현되는지 확인하세요.</div>

            <h4>5. CNN 검사와 이상탐지</h4>
            <p><strong>CNN</strong>은 이미지 픽셀 패턴을 학습해 스크래치·조립 불량 자동 육안검사에 쓰입니다. <strong>이상탐지</strong>는 관리한계를 사람이 일일이 정하기 어려운 다변량 센서 공간에서 평소와 다른 패턴을 스스로 잡습니다. SPC를 대체하기보다, 다변량·비선형 보완재로 쓰는 것이 안전합니다.</p>
            <div class="infograph">
              <div class="ig-title">AI 품질 칩</div>
              <div class="chip-grid">
                <span class="chip hot">NLP VOC</span>
                <span class="chip">지도/비지도</span>
                <span class="chip hot">RF/XGBoost</span>
                <span class="chip">과적합방지</span>
                <span class="chip hot">CNN검사</span>
                <span class="chip">이상탐지</span>
              </div>
            </div>
            <div class="callout-grid">
              <div class="callout"><strong>통계의 강점</strong>가설·인과·소표본 추론에 강함</div>
              <div class="callout"><strong>ML의 강점</strong>복잡한 패턴 예측·자동화에 강함</div>
            </div>
            <h4>6. 생성형 AI와 분석 거버넌스</h4>
            <p>LLM으로 FMEA·관리계획서·교육자료 초안을 수 초 만에 만들 수 있습니다. 그러나 출처 없는 수치, 잘못된 고장모드, 보안 민감 데이터 유출 위험이 있습니다. 프롬프트에 넣을 데이터 범위, 검수자, 버전 관리를 정하세요.</p>
            <ul>
              <li>모델 성능은 정확도만이 아니라 재현율·정밀도·비용·설명 가능성으로 균형 평가</li>
              <li>라벨 품질이 낮으면 고급 알고리즘도 무의미 — Measure의 MSA와 같은 문제</li>
              <li>현장 파일럿 없이 전면 자동화하지 말 것 (섀도 모드→부분 적용→전면)</li>
            </ul>
            <div class="tip-box"><strong>확장 요약:</strong> AI는 통계를 대체하지 않고 확장합니다. 해석이 필요하면 회귀·가설검정을, 복잡한 예측·이미지·텍스트에는 ML을, 그리고 항상 검증 세트로 과적합을 감시하세요.</div>
            <div class="tip-box"><strong>실무 요약:</strong> NLP로 VOC를 확장하고, 문제에 맞게 회귀와 ML을 선택하세요. 과적합을 경계하며 CNN·이상탐지로 검사·모니터링을 고도화하되, 현장 검증을 생략하지 마세요.</div>
            <div class="lesson-outro">
              <h4>15강 정리</h4>
              <p>회귀·가설검정의 해석력과 ML의 예측력을 문제에 맞게 고르고, 과적합·현장 검증을 빠뜨리지 않는 관점을 익혔습니다.</p>
              <p class="next-hint">마지막 16강에서는 애자일 리듬으로 DMAIC/DFSS를 돌리는 실전을 마무리합니다.</p>
            </div>
        `,
        quizzes: [
            {"q": "앱스토어 리뷰, 고객센터 녹취록 등 글자나 음성으로 된 방대한 비정형 데이터(Unstructured Data)를 컴퓨터가 읽고 분석하여 숨은 CTQ를 도출할 때 사용하는 인공지능 기술은?", "options": ["자연어 처리 (NLP: Natural Language Processing)", "이미지 분할 (Image Segmentation)", "강화 학습 (Reinforcement Learning)", "시계열 분석 (Time-series Analysis)"], "answer": 0, "rationale": "NLP는 인간의 언어를 컴퓨터가 이해하고 의미를 추출하게 하는 기술로, 비정형 텍스트 VOC 분석에 필수적입니다."},
            {"q": "기존의 다중 회귀분석을 대체하여, 수백 개의 변수 간에 얽힌 '복잡한 비선형 관계'를 학습하고 결과(Y)를 매우 높은 정확도로 예측하는 머신러닝 알고리즘 기법은?", "options": ["t-검정", "ANOVA (분산분석)", "랜덤 포레스트(Random Forest) 및 XGBoost", "파레토 분석"], "answer": 2, "rationale": "랜덤 포레스트나 XGBoost 같은 앙상블 트리 기반 머신러닝은 변수 간의 복잡한 교호작용과 비선형성을 자동으로 학습하여 예측력을 극대화합니다."},
            {"q": "텍스트 VOC 분석 중, 고객이 쓴 리뷰 문장이 긍정적인지, 부정적인지, 또는 중립적인지를 AI가 자동으로 분류하여 고객의 불만(Pain point)을 정량화하는 기법은?", "options": ["감성 분석 (Sentiment Analysis)", "선형 계획법 (Linear Programming)", "군집 분석 (Clustering)", "의사결정나무 (Decision Tree)"], "answer": 0, "rationale": "감성 분석은 텍스트 내의 부정/긍정 단어와 문맥을 분석하여 고객 감정의 온도나 불만 수준을 수치화하는 NLP 기법입니다."},
            {"q": "명확한 정답(결과 Y)을 주지 않고 데이터만 주었을 때, AI가 데이터들 간의 유사성을 바탕으로 스스로 특징을 찾아 비슷한 것끼리 묶어주는 '비지도 학습' 기법은?", "options": ["다중 회귀 분석", "K-means 군집 분석 (Clustering)", "로지스틱 회귀", "랜덤 포레스트"], "answer": 1, "rationale": "군집 분석(Clustering)은 정답 레이블이 없는 데이터에서 숨겨진 패턴이나 그룹(예: 유사한 불량 유형 그룹)을 발견할 때 사용하는 비지도 학습입니다."},
            {"q": "수년간 축적된 공정 고장 이력 텍스트 데이터를 LLM(대형 언어 모델, 예: ChatGPT)에 학습시킨 후 가장 기대할 수 있는 실무적 효과는?", "options": ["공장 설비의 전력을 차단한다.", "새로운 공정 설계 시 FMEA(고장형태영향분석) 초안을 몇 초 만에 자동 생성(Drafting)하여 시간을 단축한다.", "직원들의 근태를 관리한다.", "부품의 재질을 물리적으로 바꾼다."], "answer": 1, "rationale": "생성형 AI(LLM)는 과거 데이터를 기반으로 고장 모드, 원인, 조치 방안 등의 문서 초안을 즉각 생성하여 지식 근로자의 업무를 획기적으로 가속합니다."},
            {"q": "머신러닝 모델을 학습시킬 때, 모델이 훈련용 데이터에만 너무 과도하게 맞춰져서(암기하여), 처음 보는 새로운 데이터에 대해서는 오히려 예측력이 떨어지는 현상을 무엇이라 하는가?", "options": ["다중공선성 (Multicollinearity)", "과적합 (Overfitting)", "정규화 (Normalization)", "잔차 이탈 (Residual Outlier)"], "answer": 1, "rationale": "과적합(Overfitting)은 모델이 노이즈까지 모두 외워버려 범용성을 잃는 현상으로, AI 분석 시 반드시 교차 검증(Cross Validation)으로 예방해야 합니다."},
            {"q": "정답(Y값, 예: 양품/불량 판정)이 달려 있는 과거 데이터를 AI에게 주고 학습시켜, 미래에 들어올 새로운 데이터의 결과를 예측하거나 분류하게 만드는 머신러닝의 종류는?", "options": ["비지도 학습 (Unsupervised Learning)", "강화 학습 (Reinforcement Learning)", "지도 학습 (Supervised Learning)", "전이 학습 (Transfer Learning)"], "answer": 2, "rationale": "입력값(X)과 정답(Y)의 쌍을 주고 그 관계를 학습시키는 방식을 지도 학습(Supervised Learning)이라 합니다."},
            {"q": "제조 라인에서 제품의 표면 스크래치나 조립 불량을 작업자의 육안 대신 카메라와 AI가 실시간으로 분석하여 판독하는 자동 육안 검사(Auto Visual Inspection)에 가장 널리 쓰이는 딥러닝 기술은?", "options": ["RNN (순환 신경망)", "CNN (합성곱 신경망)", "K-means", "로지스틱 회귀"], "answer": 1, "rationale": "CNN(Convolutional Neural Network)은 이미지의 픽셀 패턴을 학습하여 사람의 눈을 대신하는 시각 인식 AI의 핵심 기술입니다."},
            {"q": "관리도(Control Chart) 대신 머신러닝의 '이상 탐지(Anomaly Detection)' 알고리즘을 사용할 때의 가장 큰 장점은?", "options": ["변수를 1개만 모니터링할 수 있다.", "사람이 일일이 관리한계선을 설정할 필요 없이, 수백 개의 변수 조합 속에서 발생하는 평소와 다른 미세한 이상 패턴을 AI가 스스로 감지한다.", "계산 과정이 덧셈과 뺄셈으로만 이루어진다.", "종이와 연필만으로 계산이 가능하다."], "answer": 1, "rationale": "다변량 이상 탐지 AI는 수많은 센서 데이터가 복합적으로 만들어내는 보이지 않는 이상 징후를 스스로 학습하여 알람을 줍니다."},
            {"q": "전통적인 통계학 기반 6시그마와 비교할 때, 머신러닝(ML) 기반 분석이 가지는 가장 큰 차별점은?", "options": ["모집단의 표본 추출을 중시한다.", "가설(p-value)을 엄격히 검증하여 인과관계를 증명하는 데 집착한다.", "사전 가설이나 변수 간의 선형적 관계에 얽매이지 않고, 데이터 자체가 가진 숨은 패턴을 찾아 '높은 정확도의 예측'을 하는 데 집중한다.", "오직 30개 미만의 소표본 데이터만 다룬다."], "answer": 2, "rationale": "고전 통계가 '인과관계 검증(해석)'에 무게를 둔다면, 머신러닝은 데이터의 패턴을 통한 '예측 정확도 극대화'에 초점을 맞춥니다."},
        ]
    },
    {
        id: 16, belt: "Master", status: "locked", title: "16강. 애자일(Agile) 6시그마 실전",
        content: `
            <h3>16강. 애자일(Agile) 6시그마 실전</h3>
            <p>전통 6시그마의 비판 중 하나는 “결론까지 너무 오래 걸려 시장이 변한다”는 점입니다. IT에서 검증된 <strong>애자일</strong> 사상과 DMAIC·DFSS를 결합하면, 짧은 주기로 가설을 검증하고 학습 속도를 높일 수 있습니다. 완벽한 보고서보다 작동하는 개선을 자주 전달하는 것이 핵심입니다.</p>
            <p>애자일 6시그마는 DMAIC/DFSS를 대체하는 것이 아니라 <strong>실행 리듬</strong>을 바꿉니다. 기존 공정 개선은 스프린트 DMAIC, 신규 설계는 스프린트 DMADV·DCCDI처럼 로드맵을 쪼개 돌립니다. 어떤 로드맵을 고를지는 5강·13강의 방법론 선택 기준을 따릅니다.</p>

            <h4>1. 폭포수 vs 애자일</h4>
            <p>폭포수는 단계를 크게 순차 진행하고 문서·게이트를 중시합니다. 애자일은 변화를 수용하고, 짧은 배달과 피드백을 중시합니다. 규제가 강한 영역에서는 하이브리드가 현실적입니다.</p>
            <div class="infograph">
              <div class="ig-title">Waterfall vs Agile</div>
              <div class="compare-2">
                <div class="compare-card bad">
                  <h5>폭포수형 리스크</h5>
                  <ul>
                    <li>장기간 후행 피드백</li>
                    <li>요구 변경에 취약</li>
                    <li>문서에 과투자 가능</li>
                  </ul>
                </div>
                <div class="compare-card good">
                  <h5>애자일형 강점</h5>
                  <ul>
                    <li>2~4주 단위 검증</li>
                    <li>고객·현업 지속 협력</li>
                    <li>작동 결과물 우선</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4>2. 스프린트 DMAIC 루프</h4>
            <p>한 스프린트 안에서 DMAIC를 가볍게 한 바퀴 돌리고, 다음 스프린트에서 심화합니다. 완벽한 데이터를 기다리지 않고, 현재 데이터로 가설→실험→학습을 반복합니다.</p>
            <div class="infograph">
              <div class="ig-title">스프린트 안 DMAIC</div>
              <div class="flow-row">
                <div class="flow-step">D</div><span class="flow-arrow">→</span>
                <div class="flow-step">M</div><span class="flow-arrow">→</span>
                <div class="flow-step">A</div><span class="flow-arrow">→</span>
                <div class="flow-step">I</div><span class="flow-arrow">→</span>
                <div class="flow-step accent">C/회고</div>
              </div>
            </div>
            <p><strong>MVP(Minimum Viable Product)</strong>는 핵심 CTQ만 담은 최소 개선안·프로토타입입니다. 현장 반응을 보고 범위를 확장하세요. 한 번에 완벽한 솔루션을 노리다가 타이밍을 놓치는 것이 더 큰 낭비일 수 있습니다.</p>

            <h4>3. 칸반 WIP과 일일 스크럼</h4>
            <p><strong>칸반</strong>은 To-do / In Progress / Done을 시각화합니다. <strong>WIP 제한</strong>으로 진행 중 작업이 쌓여 병목이 되는 것을 막습니다. <strong>일일 스크럼</strong>은 15분 내외로 어제·오늘·장애(Blocker)를 공유해 리더가 즉시 제거합니다.</p>
            <div class="infograph">
              <div class="ig-title">흐름 효율 KPI</div>
              <div class="kpi-row">
                <div class="kpi"><span class="num">WIP↓</span><span class="lbl">진행중 제한</span></div>
                <div class="kpi"><span class="num">15분</span><span class="lbl">Daily Scrum</span></div>
                <div class="kpi"><span class="num">2~4주</span><span class="lbl">Sprint 길이</span></div>
              </div>
            </div>

            <h4>4. CI/CD를 포카요케로</h4>
            <p>IT/앱 환경에서 <strong>CI/CD</strong>는 빌드·테스트·배포를 자동화합니다. CTQ(성능, 보안, 회귀테스트)를 파이프라인 게이트로 두면, 기준 미달 코드가 운영에 못 들어가게 하는 시스템적 포카요케가 됩니다. Control 단계의 디지털 구현입니다.</p>
            <div class="info-box">사람이 매번 체크리스트를 외우는 것보다, 파이프라인이 실패를 물리적으로 차단하는 편이 요요와 휴먼에러에 강합니다.</div>

            <h4>5. PO vs Black Belt, 그리고 회고</h4>
            <p><strong>Product Owner(PO)</strong>는 VOC·비즈니스 가치에 따라 백로그 우선순위를 결정합니다. <strong>Black Belt</strong>는 통계·실험·리스크 분석으로 How를 설계합니다. 둘의 협업이 애자일 6시그마의 엔진입니다. 스프린트 종료 후 <strong>회고(Retrospective)</strong>에서 Keep/Problem/Try를 합의하며 팀 프로세스 자체를 개선합니다.</p>
            <div class="infograph">
              <div class="ig-title">역할·의식 칩</div>
              <div class="chip-grid">
                <span class="chip hot">PO (What)</span>
                <span class="chip hot">BB (How)</span>
                <span class="chip">Scrum Master</span>
                <span class="chip">칸반/WIP</span>
                <span class="chip">CI/CD</span>
                <span class="chip hot">회고</span>
              </div>
            </div>
            <div class="ladder">
              <div class="ladder-item"><div class="ladder-tag">계획</div><div class="ladder-body">스프린트 목표·CTQ 범위 합의</div></div>
              <div class="ladder-item"><div class="ladder-tag">실행</div><div class="ladder-body">DMAIC 미니루프·WIP 관리</div></div>
              <div class="ladder-item"><div class="ladder-tag">검증</div><div class="ladder-body">MVP 피드백·데이터 확인</div></div>
              <div class="ladder-item"><div class="ladder-tag">학습</div><div class="ladder-body">회고로 다음 스프린트 개선</div></div>
            </div>
            <div class="tip-box"><strong>실무 요약:</strong> 폭포수의 긴 대기 대신 스프린트 DMAIC로 학습하세요. 칸반·스크럼으로 흐름을 관리하고, CI/CD로 품질을 시스템화하며, PO와 BB가 What/How를 나누고 회고로 성장하세요.</div>
            <div class="lesson-outro finale">
              <h4>16강 정리 · 전 과정 수료 인사</h4>
              <p>스프린트 DMAIC, 칸반·스크럼, CI/CD, PO와 Black Belt의 협업까지 — 변화를 짧게 학습하는 애자일 6시그마를 익혔습니다.</p>
              <p style="margin-top:0.65rem;">White부터 Master까지 16강 전체를 끝까지 따라와 주셔서 정말 수고하셨습니다. 철학(VOC·CTQ) → 시각화·린 → DMAIC·통계 → DFSS·디지털·AI·애자일로 이어진 이 로드맵이, 현장 프로젝트에서 “맞는 방법론을 고르고 게이트로 전진하는” 판단의 기준이 되길 바랍니다.</p>
              <p class="next-hint">다음 단계: 단원 퀴즈로 16강을 점검한 뒤, 홈의 <strong>종합 모의고사(5회×30문항)</strong>로 전 과정을 한 번에 점검해 보세요. 합격 기준 70점 — 응원합니다!</p>
            </div>
        `,
        quizzes: [
            {"q": "결론이 나올 때까지 6개월 이상 걸리는 전통적인 6시그마(폭포수 방식)의 단점을 극복하기 위해, 프로젝트를 2~4주 단위의 짧은 주기로 쪼개어 빠르게 시도하고 수정하는 현대적 접근 방식은?", "options": ["린(Lean) 생산 방식", "애자일(Agile) 방식", "DMADV 로드맵", "오류증명(Poka-Yoke) 방식"], "answer": 1, "rationale": "애자일(Agile)은 완벽한 계획보다는 변화에 대한 빠른 대응과 짧은 주기의 반복적(Iterative) 개선을 핵심 사상으로 합니다."},
            {"q": "애자일 6시그마에서 2~4주 단위로 실행되는 짧고 집중적인 작업 주기를 뜻하는 용어는?", "options": ["마일스톤 (Milestone)", "게이트 리뷰 (Gate Review)", "스프린트 (Sprint)", "백로그 (Backlog)"], "answer": 2, "rationale": "스프린트(Sprint)는 목표를 달성하기 위해 전력 질주하는 짧은 기간을 뜻하며, 매 스프린트마다 실질적인 개선 결과물을 도출해야 합니다."},
            {"q": "완벽한 해결책을 1년 뒤에 내놓는 대신, 핵심 가치(CTQ)만을 충족하는 '최소 기능 제품'이나 '프로토타입 개선안'을 현장에 빠르게 배포하여 피드백을 받는 개념은?", "options": ["MVP (Minimum Viable Product)", "RPA (로봇 자동화)", "FMEA", "SOP (표준작업지침)"], "answer": 0, "rationale": "MVP는 최소한의 자원으로 고객(또는 현장)의 반응을 가장 빠르게 검증할 수 있는 핵심 기능만의 구현체를 뜻합니다."},
            {"q": "애자일 환경에서 프로젝트의 진행 상황(할 일, 진행 중, 완료)을 시각화하고, 특정 단계에 업무가 과도하게 몰리는 병목(Bottleneck) 현상을 막기 위해 사용하는 게시판 형태의 도구는?", "options": ["특성요인도", "산점도", "칸반 (Kanban) 보드", "파레토 차트"], "answer": 2, "rationale": "칸반 보드는 투명한 업무 시각화 도구로, WIP(진행 중인 작업)의 개수를 제한하여 업무 흐름의 정체를 실시간으로 해소합니다."},
            {"q": "애자일 조직에서 매일 정해진 시간에 15분 내외로 서서 진행하며, 어제 한 일, 오늘 할 일, 그리고 현재 업무를 방해하는 장애 요소(Blocker)를 빠르게 공유하는 회의는?", "options": ["킥오프 미팅", "일일 스크럼 (Daily Scrum / Stand-up)", "게이트 리뷰", "타운홀 미팅"], "answer": 1, "rationale": "일일 스크럼 미팅은 팀의 소통 단절을 막고 장애물을 즉시 파악해 리더(스크럼 마스터)가 해결할 수 있게 돕는 핵심 의식입니다."},
            {"q": "IT 소프트웨어 품질 관리(IT 6시그마)에서 사람이 수동으로 하던 빌드 및 테스트, 배포 과정을 자동화하여 코드 결함이 운영 서버로 넘어가는 것을 원천 차단하는 파이프라인 시스템은?", "options": ["CI/CD (지속적 통합/지속적 배포)", "VSM (가치흐름도)", "ERP 시스템", "VPN"], "answer": 0, "rationale": "CI/CD 파이프라인은 코드가 합쳐질 때마다 자동화된 테스트를 수행하므로 소프트웨어 산업의 완벽한 '풀프루프(Poka-Yoke)' 도구로 기능합니다."},
            {"q": "애자일 6시그마 프로젝트에서 '고객의 목소리(VOC)'를 대변하며, 제품이나 개선안이 갖추어야 할 우선순위(백로그)를 최종 결정하는 역할은?", "options": ["블랙벨트 (Black Belt)", "프로덕트 오너 (Product Owner, PO)", "스크럼 마스터 (Scrum Master)", "개발자 (Developer)"], "answer": 1, "rationale": "프로덕트 오너(PO)는 비즈니스 가치를 극대화하기 위해 무엇을(What) 우선적으로 개선할지 결정하는 방향타 역할을 합니다."},
            {"q": "하나의 스프린트가 종료되었을 때, 팀원들이 모여 '무엇이 좋았고, 무엇이 문제였으며, 다음 스프린트에서는 어떻게 개선할 것인지'를 솔직하게 회고하는 활동은?", "options": ["브레인스토밍", "회고 (Retrospective)", "관리도 분석", "FMEA 작성"], "answer": 1, "rationale": "회고(Retrospective)는 팀 스스로 프로세스를 점검하고 지속적 개선(Continuous Improvement)을 내재화하는 애자일의 핵심 활동입니다."},
            {"q": "전통적인 '폭포수(Waterfall) 모델'과 비교할 때, '애자일(Agile) 모델'의 특징으로 올바르지 않은 것은?", "options": ["요구사항의 변화를 적극적으로 수용한다.", "초기 단계에서 완벽하고 방대한 문서를 작성하는 것을 가장 중요하게 여긴다.", "고객 또는 현업과의 지속적인 협력과 피드백을 중시한다.", "작동하는 결과물을 짧은 주기로 자주 전달한다."], "answer": 1, "rationale": "애자일은 방대한 문서 작업보다는 '작동하는 결과물(소프트웨어/개선안)' 자체를 훨씬 더 가치 있게 여깁니다."},
            {"q": "애자일 6시그마에서 DMAIC 사이클을 적용하는 올바른 방식은?", "options": ["Define에 2개월, Measure에 2개월 등 각 단계별로 충분한 시간을 분배한다.", "한 달 주기의 스프린트 안에서 DMAIC 전 과정을 빠르고 가볍게 한 번 돌려 MVP를 도출하고, 다음 스프린트에서 이를 심화 반복한다.", "통계적 검증(Analyze)이 완벽하게 끝날 때까지 어떠한 개선안도 실행해서는 안 된다.", "Control 단계는 프로젝트 종료 후 1년 뒤에 실시한다."], "answer": 1, "rationale": "애자일 6시그마는 DMAIC 사이클 전체를 스프린트 단위로 짧게 여러 번 반복(Iterative)하여 점진적으로 완성도를 높여가는 방식입니다."},
        ]
    }
];
