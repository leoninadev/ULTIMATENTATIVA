// script.js

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
         document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                dropdownContent.style.display = 'none';
                }
          });
    });
});
