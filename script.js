    const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');
    const introSection = document.getElementById('intro');
    const nav = document.querySelector('nav');
    const enterBtn = document.getElementById('enterBtn');

    enterBtn.addEventListener('click', () => {
      introSection.classList.remove('active');
      nav.style.display = 'flex';
      sections.forEach(section => {
        section.id === 'menu' ? section.classList.add('active') : section.classList.remove('active');
      });
      buttons.forEach(btn => btn.classList.remove('active'));
      document.querySelector('nav button[data-target="menu"]').classList.add('active');
      document.querySelector('.sub-menu[data-parent="drink"]').classList.add('active');
      document.querySelector('.main-btn[data-parent="drink"]').classList.add('active');
    });

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const target = button.getAttribute('data-target');
        sections.forEach(section => {
          section.id === target ? section.classList.add('active') : section.classList.remove('active');
        });
      });
    });

    const mainBtns = document.querySelectorAll('.main-btn');
    const subMenus = document.querySelectorAll('.sub-menu');

    mainBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const parent = btn.getAttribute('data-parent');
        subMenus.forEach(sub => {
          sub.getAttribute('data-parent') === parent ? sub.classList.toggle('active') : sub.classList.remove('active');
        });
        mainBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // نمایش منوی واقعی وقتی روی زیرمنو کلیک میشه
    const subItems = document.querySelectorAll('.sub-menu .menu-item');
    const menuContents = document.querySelectorAll('.menu-content');

    subItems.forEach(item => {
      item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        menuContents.forEach(content => content.classList.remove('active'));
        const targetMenu = document.querySelector(`.menu-content[data-category="${category}"]`);
        if (targetMenu) {
          targetMenu.classList.add('active');
          targetMenu.scrollIntoView({ behavior: "smooth" });
        }
      });
    });