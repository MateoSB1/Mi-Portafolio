document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-item")
    const dropdownMenu = document.getElementById("dropdownMenu")
    const dropdownButton = document.getElementById("dropdownTrigger")

    const carouselTrack = document.querySelector(".carousel-track")
    const prevButton = document.querySelector(".carousel-button.prev")
    const nextButton = document.querySelector(".carousel-button.next")
    const projectItems = Array.from(document.querySelectorAll(".project-item"))

    let currentIndex = 0
    let itemWidth = projectItems[0].offsetWidth + 16
    let visibleItems = Math.floor(carouselTrack.offsetWidth / itemWidth)
    let totalItems = projectItems.length

    function updateCarouselWidth() {
        itemWidth = projectItems[0].offsetWidth + 16 
        visibleItems = Math.floor(carouselTrack.parentElement.offsetWidth / itemWidth)
        carouselTrack.style.width = `${totalItems * itemWidth}px`
    }

    function updateCarousel() {
        const maxIndex = totalItems - visibleItems
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex))

        const newTransformValue = -currentIndex * itemWidth
        carouselTrack.style.transform = `translateX(${newTransformValue}px)`

        prevButton.style.display = currentIndex === 0 ? "none" : "flex"
        nextButton.style.display = currentIndex >= maxIndex ? "none" : "flex"
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++
            updateCarousel()
        }
    })

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--
            updateCarousel()
        }
    })

    window.addEventListener("resize", () => {
        updateCarouselWidth()
        updateCarousel()
    })

    updateCarouselWidth()
    updateCarousel()


    const techs = ["Mostrar Todo", "HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript", "React", "ReactRouter", "Firebase"]

    dropdownMenu.innerHTML = techs.map(tech => `<a href="#" data-tech="${tech}">${tech}</a>`).join("\n")

    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("open")
    })

    document.addEventListener("click", (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("open")
        }
    })

    dropdownMenu.addEventListener("click", (event) => {
        event.preventDefault()
        const selectedTech = event.target.dataset.tech

        if (!selectedTech) return

        projects.forEach(project => {
            const badges = Array.from(project.querySelectorAll(".badge")).map(badge => badge.textContent.trim())

            if (selectedTech === "Mostrar Todo" || badges.includes(selectedTech)) {
                project.style.display = "block"
            } else {
                project.style.display = "none"
            }
        })
    })
})
