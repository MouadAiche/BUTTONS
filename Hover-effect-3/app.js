    let btncontainer = document.querySelector('.btn-container');
    let button = document.querySelector('.glow-btn');
    let interval;
    let spawndistance = 20;

    function createparticles() {
      let particles = document.createElement('div');
      particles.classList.add('particles');
      let btnwidth = button.offsetWidth;
      let btnheight = button.offsetHeight;

      let angle = Math.random() * 2 * Math.PI;
      let x = btnwidth / 2 + Math.cos(angle) * spawndistance;
      let y = btnheight / 2 + Math.sin(angle) * spawndistance;

      let dx = Math.cos(angle) * 100;
      let dy = Math.sin(angle) * 100;

      particles.style.left = `${x}px`;
      particles.style.top = `${y}px`;
      particles.style.setProperty('--dx', `${dx}px`);
      particles.style.setProperty('--dy', `${dy}px`);

      btncontainer.appendChild(particles);
      setTimeout(() => {
        particles.remove();
      }, 2000);
    }

    button.addEventListener('mouseenter', () => {
      interval = setInterval(createparticles, 80);
    });

    button.addEventListener('mouseleave', () => {
      clearInterval(interval);
    });