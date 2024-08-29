// for menu transforms

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = 'white';
    link.style.color = 'black';
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = 'black';
    link.style.color = 'white';
  });
})



const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = 'white';
    link.style.color = 'black';
    link.style.transform = 'scale(1.1)'; // Add a slight zoom effect
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = 'black';
    link.style.color = 'white';
    link.style.transform = 'scale(1)';
  });
});

const dropdownLinks = document.querySelectorAll('.nav ul li a[href="#"]');

dropdownLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdownContent = link.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.05)';
    box.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)';
    box.style.boxShadow = 'none';
  });
});

const headingText = document.querySelector('.heading h1');
const headingWords = headingText.textContent.split(' ');

headingText.textContent = '';

headingWords.forEach((word, index) => {
  const span = document.createElement('span');
  span.textContent = word;
  span.style.animationDelay = `${index * 0.2}s`;
  headingText.appendChild(span);
});

const footerSections = document.querySelectorAll('footer p');

footerSections.forEach(section => {
  section.addEventListener('click', () => {
    section.classList.toggle('expanded');
  });
});