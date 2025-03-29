function showDetails(memberId) {
    const details = document.querySelector(#${memberId} .details);
    const button = document.querySelector(#${memberId} button);
    
    if (details.style.display === 'block') {
        details.style.display = 'none';
        button.textContent = 'More Info';
    } else {
        details.style.display = 'block';
        button.textContent = 'Less Info';
    }
}
