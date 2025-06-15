# 홈페이지 소개

이 페이지는 HTML과 CSS, JavaScript만으로 구현된 나만의 홈페이지입니다.  
웹 스크립트 수업을 통해 배우고, 꾸며보고, 나만의 스타일을 적용해보는 실험 공간입니다.  
디자인과 기능은 추후에 업데이트될 예정입니다 :)

👉 GitHub 저장소: [https://github.com/msKangHNU/msKangHNU](https://github.com/msKangHNU/msKangHNU)  
👉 홈페이지 주소: [https://mskanghnu.github.io/msKangHNU](https://mskanghnu.github.io/msKangHNU)<br><br><br>

## 1. 섹션별 스크롤 애니메이션

### 기능 설명  
페이지를 로드할 때 각 섹션(`intro`, `cards`, `extra-section`)이 아래에서 위로 자연스럽게 등장하는 애니메이션이 적용됩니다.  
스크롤에 직접 반응하는 건 아니지만, 사용자에게 부드럽게 순차적으로 섹션이 나타나는 느낌을 제공합니다.

### 코드 위치  
- `MyPage.css`  
  → 72번째 줄: `.intro { ... }`  
  → 97번째 줄: `.cards { ... }`  
  → 136번째 줄: `.extra-section { ... }`  
  → 160번째 줄: `@keyframes fadeInUp { ... }`

### 코드 설명  
- 각 섹션은 초기 상태에서 `opacity: 0` 및 `translateY(30px)`로 아래에 위치하며 숨겨져 있습니다.  
- 페이지 로딩 시 `fadeInUp` 애니메이션이 실행되어, 섹션이 위로 올라오며 점점 뚜렷하게 보이도록 설정되어 있습니다.  
- `animation-delay` 속성으로 섹션마다 다른 타이밍으로 등장하여 자연스러운 흐름을 만듭니다.

## 2. 다크모드 토글 기능

### 기능 설명  
페이지 전체에 다크모드와 라이트모드를 전환하는 기능입니다. 사용자가 버튼을 클릭하면 `body` 태그에 `dark-mode` 클래스를 토글하여 테마가 변경됩니다.

### 코드 위치  
- `index.html`  
  → 11번째 줄: `<div class="toggle-mode" onclick="toggleDarkMode()">`

- `MyPage.js`  
  → 1번째 줄: `function toggleDarkMode() { ... }`

- `MyPage.css`  
  → 46번째 줄: `body.dark-mode { ... }`  
  → 51번째 줄: `.toggle-mode { ... }`  
  → 66번째 줄: `.toggle-mode:hover { ... }`

### 코드 설명  
- `index.html`에서는 다크모드 토글 버튼을 생성하고, 클릭 시 `toggleDarkMode()` 함수를 호출합니다.  
- `MyPage.js`에서는 `body` 태그에 `dark-mode` 클래스를 토글합니다.  
- `MyPage.css`에서는 `body.dark-mode` 상태에서 어두운 테마 색상을 적용합니다.  
- `.toggle-mode`는 버튼의 기본 스타일이며, `.toggle-mode:hover`는 호버 스타일을 정의합니다.

## 3. 모달 창 동작 기능 (My Skills, Projects, Desired Job)

### 기능 설명  
사용자가 `My Skills`, `Projects`, `Desired Job` 버튼을 클릭하면, 각 타입에 따라 모달 또는 팝업 창이 동작합니다.  
- `My Skills` / `Projects`: 공통 모달 창을 사용하며, 콘텐츠가 동적으로 삽입됩니다.  
- `Desired Job`: 독립적인 팝업 구조를 사용하며, 카드 클릭 시 개별 카드가 확장되거나 전환됩니다.

### 코드 위치  
- `MyPage.js`  
  → 5번째 줄: `function openModal(type) { ... }`  
  → 124번째 줄: `function closeModal() { ... }`  
  → 131번째 줄: `function closeJobPopup() { ... }`

- `MyPage.css`  
  → 167번째 줄: `.modal { ... }`  
  → 184번째 줄: `.modal.show { ... }`  
  → 190번째 줄: `.modal-content { ... }`  
  → 206번째 줄: `.modal.show .modal-content { ... }`  
  → 420번째 줄: `.job-popup { ... }`  
  → 438번째 줄: `.job-popup.show { ... }`

### 코드 설명  
- `MyPage.js`  
  - `openModal()` 함수는 공통 모달을 열고, `skills`, `projects` 타입에 따라 콘텐츠를 삽입합니다.  
  - `closeModal()` 함수는 모달을 닫습니다.  
  - `closeJobPopup()` 함수는 팝업을 닫고 카드 상태를 초기화합니다.

- `MyPage.css`  
  - `.modal` 및 `.modal-content`는 공통 모달의 기본 구조와 애니메이션을 정의합니다.  
  - `.job-popup`은 잡 카드 팝업 구조이며, 확대/축소 및 흐림 효과가 적용됩니다.

## 4. Skills 차트 시각화 기능

### 기능 설명  
사용자가 `My Skills` 버튼을 클릭하면 모달 창에 기술 능력치를 보여주는 레이더 차트가 표시됩니다.  
Chart.js를 사용하여 각 기술(Python, JavaScript, HTML/CSS, C Language, SQL)의 숙련도를 시각적으로 표현합니다.

### 코드 위치  
- `MyPage.js`  
  → 16번째 줄: `<canvas id="skillsChart">` 엘리먼트 삽입  
  → 91번째 줄: `new Chart(ctx, { ... })`로 차트 렌더링 수행

### 코드 설명  
- `skillsChart`는 `canvas` 태그로 정의된 요소이며, `openModal('skills')` 호출 시 모달 내부에 삽입됩니다.  
- Chart.js 라이브러리를 이용해 `radar` 형태의 차트를 생성하며, 각 기술별 점수를 시각화합니다.  
- 배경, 테두리, 점 스타일은 다크모드에서도 잘 보이도록 설정되어 있습니다.

## 5. 프로젝트 목록 및 상세 카드 기능

### 기능 설명  
사용자가 `Projects` 버튼을 클릭하면 완료된/진행 중/예정된 프로젝트가 리스트로 나타납니다.  
완료된 프로젝트에서 각 항목을 클릭하면 상세 내용을 포함한 오버레이 카드가 확대되어 나타나며, 이미지/영상 미리보기 기능도 함께 제공됩니다.

### 코드 위치  
- `MyPage.js`  
  → 23번째 줄: 프로젝트 리스트 항목에서 `openProjectCard('...')` 호출  
  → 143번째 줄: `function openProjectCard(project)` 정의  
  → 199번째 줄: `function closeProjectCard()` 정의  

- `MyPage.css`  
  → 297번째 줄: `.project-overlay { ... }`  
  → 317번째 줄: `.project-card { ... }`

### 코드 설명  
- `openProjectCard(project)` 함수는 클릭된 프로젝트 타입에 따라 제목, 설명, 기술스택, 타임라인, 미디어 버튼 등을 `.project-card` 내부에 채워 넣습니다.  
- `.project-overlay`는 전체 배경을 어둡게 처리하며 `.project-card`는 애니메이션을 통해 중앙에 확대되어 표시됩니다.  
- `closeProjectCard()` 함수는 닫기 버튼 또는 외부 클릭 시 카드와 오버레이를 함께 닫아줍니다.  
- `.media-buttons` 버튼을 통해 이미지 또는 영상 미리보기를 선택적으로 띄울 수 있습니다.

## 6. 직업 카드 인터랙션 애니메이션

### 기능 설명  
`Desired Job` 버튼 클릭 시 나타나는 두 개의 직업 카드(Backend Developer, Game Developer)는 마우스를 올리면 확대되고, 다른 카드는 자동으로 축소됩니다.  
카드를 벗어나면 원래대로 복구되는 인터랙션이 적용되어 사용자가 명확하게 하나의 직무에 집중할 수 있도록 UX가 향상됩니다.

### 코드 위치  
- `MyPage.js`  
  → 42~75번째 줄: `backendCard`, `gameCard`의 `onmouseenter`, `onmouseleave` 이벤트 처리

- `MyPage.css`  
  → 444번째 줄: `.job-card { ... }`  
  → 465번째 줄: `.job-card.expanded { ... }`  
  → 476번째 줄: `.job-card.hidden { ... }`

### 코드 설명  
- `MyPage.js`  
  - `onmouseenter`: 마우스가 특정 카드 위에 올라가면 해당 카드에 `expanded` 클래스를 추가하고, 다른 카드에 `hidden` 클래스를 추가하여 강조됩니다.  
  - `onmouseleave`: 마우스가 카드에서 벗어나면 클래스가 제거되며 원래 크기로 돌아옵니다.

- `MyPage.css`  
  - `.job-card`: 카드의 기본 스타일을 정의합니다.  
  - `.job-card.expanded`: 확대된 카드의 크기와 폰트, 정렬이 커지고 강조됩니다.  
  - `.job-card.hidden`: 축소되며 투명해지고 비활성화 상태로 전환됩니다.

## 7. 프로젝트 팝업 시 배경 블러 처리

### 기능 설명  
사용자가 프로젝트 카드(예: Desired Job 등)를 클릭하면 개별 팝업 카드가 열리고, 그 뒤에 있는 배경이 흐려지는 효과가 적용됩니다.  
이를 통해 사용자 주의가 카드로 집중되도록 시각적 강조를 유도합니다.

### 코드 위치  
- `MyPage.css`  
  → 297번째 줄: `.project-overlay { ... }`  

### 코드 설명 
- `Mypage.css`
  - `.project-overlay`는 팝업 카드의 뒷배경을 덮는 전면 레이어입니다.  
  - `backdrop-filter: blur(5px);`를 사용하여 팝업 창이 열렸을 때 기존 페이지를 흐릿하게 처리합니다.  
  - `position: fixed`, `z-index`, `rgba` 배경과 함께 팝업이 전체 화면을 자연스럽게 덮도록 구성되어 있습니다.<br><br><br>

## 🔹 기타 UI 디테일 및 인터랙션

### 1. 다크모드 버튼 hover 효과  
- `MyPage.css`  
  → 66번째 줄: `.toggle-mode:hover { ... }`  
- 토글 버튼에 마우스를 올리면 밝기 강조 효과가 적용됩니다.

---

### 2. 미디어 버튼 hover 스타일  
- `MyPage.css`  
  → 411번째 줄: `.media-buttons button:hover { ... }`  
- 이미지/영상 보기 버튼에 마우스를 올리면 컬러 강조 효과로 인터랙션을 제공합니다.

---

### 3. 닫기 버튼 hover 강조 효과

- `MyPage.css`  
  → 225번째 줄: `.close-btn:hover { ... }`  
  → 389번째 줄: `.project-card .close-btn:hover { ... }`  
  → 507번째 줄: `.job-popup .close-btn:hover { ... }`  

- 각 모달이나 오버레이 카드의 `✖` 닫기 버튼에 마우스를 올리면 버튼이 커지거나 색상이 강조되며 상호작용을 시각적으로 표현합니다.  
  사용자가 닫기 기능을 인지하기 쉽도록 설계된 기본적인 인터랙션 처리입니다.

---

  ### 4. 전환 애니메이션 효과 (transition)

- `MyPage.css`  
  → 22번째 줄: `transition: color 0.5s ease;`  
  → 39번째 줄: `transition: background-color 0.3s ease;`  
  → 62번째 줄: `transition: all 0.2s ease;`  
  → 332번째 줄: `.project-card { transition: transform 0.4s ease, opacity 0.4s ease; }`  
  → 408번째 줄: `.media-buttons button { transition: background-color 0.2s; }`

- 버튼, 카드, 텍스트 등 UI 요소에 전환 애니메이션을 적용하여 hover나 상태 변화 시 부드럽고 자연스럽게 변화되도록 처리하였습니다.  
  사용자의 시선을 유도하거나, 클릭 피드백을 부드럽게 전달하는 데 활용됩니다.
