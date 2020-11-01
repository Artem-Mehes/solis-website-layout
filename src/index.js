new Glide('.glide', {
    gap: 10,
    perView: 2
}).mount();

const changeThemeBtn = document.querySelector('#change-theme-btn');
const videoPlay = document.querySelector('#video-play');
const videoWrapper = document.querySelector('#video-wrapper');

changeThemeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('theme-is-black')) {
        document.body.classList.remove('theme-is-black');
    } else {
        document.body.classList.add('theme-is-black');
    }
});

videoPlay.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.width = '812';
    iframe.height = '502';
    iframe.style.marginRight = '23px';
    iframe.src = 'https://www.youtube.com/embed/vnbN9V_2Guk';
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allowfullscreen', true);

    videoWrapper.append(iframe);
    videoPlay.remove();
});