document.addEventListener("DOMContentLoaded", () => {
    // fungsi untuk mengubah bentuk bentuk bulan
    const moon = document.querySelector('.moon');
    let state = 0;

    moon.addEventListener('click', () => {
        state = (state + 1) % 3;
        moon.classList.remove('crescent', 'half', 'full');
        if (state === 1) {
            moon.classList.add('crescent');
        } else if (state === 2) {
            moon.classList.add('half');
        } else {
            moon.classList.add('full');
        }
    });

    // fungsi untuk click nama lengkap ke instagram saya
    const typedName = document.getElementById('typed-name');
    typedName.addEventListener('click', () => {
        window.open('https://www.instagram.com/alkhdf_', '_blank');
    });
    
});
