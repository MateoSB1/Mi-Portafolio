function renderSkills() {
    const technicalGrid = document.getElementById('technical-skills-grid');
    const softGrid = document.getElementById('soft-skills-grid');

    if (!technicalGrid || !softGrid) return;

    technicalGrid.innerHTML = skillsData.technical.map(skill => `
        <div class="skill-item">
            <div class="skill-icon">
                ${skill.iconImage 
                    ? `<img src="${skill.iconImage}" alt="${skill.name}" style="width: 40px; height: 40px; object-fit: contain; filter: brightness(0) saturate(100%) invert(79%) sepia(39%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);">`
                    : skill.icon
                }
            </div>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');

    softGrid.innerHTML = skillsData.soft.map(skill => `
        <div class="skill-item">
            <div class="skill-icon">
                ${skill.iconImage 
                    ? `<img src="${skill.iconImage}" alt="${skill.name}" style="width: 40px; height: 40px; object-fit: contain; filter: brightness(0) saturate(100%) invert(79%) sepia(39%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);">`
                    : skill.icon
                }
            </div>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');
}