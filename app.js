const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            // Check if there's an element with the class .active-btn
            let currentBtn = document.querySelector('.active-btn');

            // Remove .active-btn class from the existing active button
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }

            // Add .active-btn class to the clicked button
            this.classList.add('active-btn');
        });
    }

    // section active class
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].addEventListener('click', (e) => {
            const id=e.target.dataset.id;
            if(id)
            {
                // remove selected from the other bts
                sectBtns.forEach((btn) =>{
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
                //hide other sections
                section.forEach((section)=>{
                    section.classList.remove('active')
                })
                const element=document.getElementById(id);
                element.classList.add('active');
            }
        });
    }
    // togle theme
    const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element=document.body;
        element.classList.toggle('light-mode');

    })
}

PageTransitions();
