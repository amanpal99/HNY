// $(document).ready(function(){
//     $('.title').click(function(){
//         $('.container').addClass('open');
//     });


//     $('.close').click(function(){
//         $('.container').removeClass('open');
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.title').addEventListener('click', function () {
        document.querySelector('.container').classList.add('open');
        if (!document.getElementById('hnycss')) {
            const link = document.createElement('link');
            link.id = 'hnycss'; // Optional: Add an ID for easy reference
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'hny.css'; // Replace with your CSS file URL
            document.head.appendChild(link);
            console.log('CSS file loaded');
        } else {
            console.log('CSS file is already loaded');
        }
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.container').classList.remove('open');
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '0';

        setTimeout(() => {
            // Reload the page
                location.reload();
            }, 500);
    });
});