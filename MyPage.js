function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function openModal(type) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  let content = '';

  if (type === 'skills') {
    content = `
      <h2 style="display: flex; align-items: center; justify-content: center; gap: 8px;">
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721290.png" width="28" height="28" />
        My Skills
      </h2>
      <canvas id="skillsChart" width="400" height="400"></canvas>
    `;
  } else if (type === 'projects') {
    content = `
      <h2>📁 Projects</h2>
      <h3 style="text-align:left;">✅ 완료된 프로젝트</h3>
      <ul style="text-align:left;">
        <li><a href="#" onclick="event.stopPropagation(); openProjectCard('visit')">🙋‍♂️ 방문 기록 시스템 (2021.12 완료)</a></li>
        <li><a href="#" onclick="event.stopPropagation(); openProjectCard('smartpot')">🌿 스마트 화분 회전 시스템 (2025.06 완료)</a></li>
      </ul>
      <h3 style="text-align:left; margin-top:1.5rem;">🛠 진행 중인 프로젝트</h3>
      <ul style="text-align:left;">
        <li>👨‍💻 GitHub 활동 분석 시스템 <span style="color:#ccc; font-size:0.9rem;">– 오픈소스SW개발 프로젝트</span></li>
        <li>📊 대전광역시 보행 교통사고 분석 <span style="color:#ccc; font-size:0.9rem;">– 빅데이터 프로젝트</span></li>
      </ul>
      <h3 style="text-align:left; margin-top:1.5rem;">🔧 예정된 프로젝트</h3>
      <ul style="text-align:left;">
        <li>🎮 Unity 기반 RPG 게임 제작</li>
        <li>🍝 이미지 기반 음식 칼로리 예측 AI 모델 개발</li>
        <li>🎧 감정 기반 음악 추천 시스템</li>
      </ul>
      <div id="projectDetailCard"></div>
    `;
  } else if (type === 'job') {
    const overlay = document.getElementById('jobOverlay');
    const popup = document.getElementById('jobPopup');
    const backendCard = document.getElementById('backendCard');
    const gameCard = document.getElementById('gameCard');

    overlay.style.display = 'flex';
    popup.classList.remove('show');
    void popup.offsetWidth;
    overlay.classList.add('show');
    popup.classList.add('show');

    backendCard.classList.add('hover-disabled');
    gameCard.classList.add('hover-disabled');

    popup.addEventListener('transitionend', function handler() {
      backendCard.classList.remove('hover-disabled');
      gameCard.classList.remove('hover-disabled');
      popup.removeEventListener('transitionend', handler);
    });

    backendCard.onmouseenter = () => {
      backendCard.classList.add("expanded");
      gameCard.classList.add("hidden");
    };
    backendCard.onmouseleave = () => {
      backendCard.classList.remove("expanded");
      gameCard.classList.remove("hidden");
    };
    gameCard.onmouseenter = () => {
      gameCard.classList.add("expanded");
      backendCard.classList.add("hidden");
    };
    gameCard.onmouseleave = () => {
      gameCard.classList.remove("expanded");
      backendCard.classList.remove("hidden");
    };

    return;
  }

  body.innerHTML = content;
  modal.classList.add('show');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.classList.add('fade-in');
      }
      if (type === 'skills') {
        const ctx = document.getElementById('skillsChart');
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Python', 'JavaScript', 'HTML/CSS', 'C Language', 'SQL'],
            datasets: [{
              label: 'Skill Level',
              data: [75, 70, 65, 80, 40],
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
              pointBackgroundColor: 'white',
              pointRadius: 4,
              pointHoverRadius: 6
            }]
          },
          options: {
            scales: {
              r: {
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: { display: false },
                pointLabels: { color: '#fff', font: { size: 14 } },
                grid: { color: '#aaa' },
                angleLines: { color: '#999' }
              }
            },
            plugins: { legend: { display: false } }
          }
        });
      }
    });
  });
}

function closeModal() {
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');
  modalContent.classList.remove('fade-in');
  modal.classList.remove('show');
}

function closeJobPopup() {
  const popup = document.getElementById('jobPopup');
  const overlay = document.getElementById('jobOverlay');
  popup.classList.remove('show');
  overlay.classList.remove('show');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300);
  document.getElementById('backendCard').classList.remove('expanded', 'hidden');
  document.getElementById('gameCard').classList.remove('expanded', 'hidden');
}

function openProjectCard(project) {
  const overlay = document.getElementById('projectOverlay');
  const title = overlay.querySelector('.project-title');
  const desc = overlay.querySelector('.project-desc');
  const tags = overlay.querySelector('.tags');
  const timeline = overlay.querySelector('.timeline');
  const preview = overlay.querySelector('.media-preview');
  const card = overlay.querySelector('.project-card');

  preview.innerHTML = '';

  if (project === 'visit') {
    title.textContent = '🙋‍♂️ 방문 기록 시스템';
    desc.textContent = '학생증과 체온 센서를 이용해 방문 정보를 기록하고 확인할 수 있는 시스템입니다.';
    tags.innerHTML = `
      <span class="tag">Arduino</span>
      <span class="tag">C++</span>
      <span class="tag">MySQL</span>
      <span class="tag">PHP</span>
    `;
    timeline.innerHTML = `
      📅 2021.04 ~ 2021.12<br>기획 → 설계 → 구현 → 발표 → 수상(금상)
      <div class="media-buttons">
        <button onclick="showImage('visit')">🖼️ 이미지 보기</button>
        <button onclick="showVideo('visit')">🎬 영상 보기</button>
      </div>
    `;
  } else if (project === 'smartpot') {
    title.textContent = '🌿 스마트 화분 회전 시스템';
    desc.textContent = '빛의 방향을 추적하여 자동 회전하는 아두이노 기반 화분 시스템입니다.';
    tags.innerHTML = `
      <span class="tag">Arduino</span>
      <span class="tag">C++</span>
      <span class="tag">Flutter</span>
      <span class="tag">회로설계</span>
    `;
    timeline.innerHTML = `
      📅 2025.03 ~ 2025.06<br>기획 → 설계 → 구현 → 발표
      <div class="media-buttons">
        <button onclick="showImage('smartpot')">🖼️ 이미지 보기</button>
        <button onclick="showVideo('smartpot')">🎬 영상 보기</button>
      </div>
    `;
  }

  overlay.classList.add('show');
  card.style.transform = 'scale(0.8)';
  card.style.opacity = '0';

  requestAnimationFrame(() => {
    card.style.transition = 'all 0.3s ease';
    card.style.transform = 'scale(1)';
    card.style.opacity = '1';
  });
}

function closeProjectCard() {
  const overlay = document.getElementById('projectOverlay');
  const card = overlay.querySelector('.project-card');
  card.style.transform = 'scale(0.8)';
  card.style.opacity = '0';
  setTimeout(() => {
    overlay.classList.remove('show');
    card.style.transform = '';
    card.style.opacity = '';
  }, 300);
}

function openImage(type) {
  const src = type === 'visit' ? 'images/visit.jpg' : 'images/smartpot.jpg';
  window.open(src, '_blank', 'width=800,height=600');
}

function openVideo(type) {
  const src = type === 'visit' ? 'videos/visit.mp4' : 'videos/smartpot.mp4';
  window.open(src, '_blank', 'width=1000,height=700');
}

function showImage(type) {
  const preview = document.querySelector('#projectOverlay .media-preview');
  const src = type === 'visit' ? 'images/visit.jpg' : 'images/smartpot.jpg';
  preview.innerHTML = `<img src="${src}" alt="프로젝트 이미지" style="max-width:100%; border-radius:12px; margin-top:1rem;" />`;
}

function showVideo(type) {
  const preview = document.querySelector('#projectOverlay .media-preview');
  const src = type === 'visit' ? 'videos/visit.mp4' : 'videos/smartpot.mp4';
  preview.innerHTML = `
    <video controls style="max-width:100%; border-radius:12px; margin-top:1rem;">
      <source src="${src}" type="video/mp4">
      해당 브라우저는 video 태그를 지원하지 않습니다.
    </video>
  `;
}

document.addEventListener("click", function (e) {
  const jobPopup = document.getElementById("jobPopup");
  const jobOverlay = document.getElementById("jobOverlay");
  if (
    jobOverlay.classList.contains("show") &&
    !jobPopup.contains(e.target) &&
    !e.target.closest('.card')
  ) {
    closeJobPopup();
  }
});

document.addEventListener("click", function (e) {
  const projectOverlay = document.getElementById("projectOverlay");
  const projectCard = projectOverlay?.querySelector(".project-card");

  if (
    projectOverlay?.classList.contains("show") &&
    !projectCard?.contains(e.target) &&
    !e.target.closest("li a")
  ) {
    closeProjectCard();
  }
});