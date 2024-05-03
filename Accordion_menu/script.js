document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        
        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = null;
            button.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.maxHeight = null;
                content.previousElementSibling.classList.remove('active');
            });
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            button.classList.add('active');
        }
    });
});
