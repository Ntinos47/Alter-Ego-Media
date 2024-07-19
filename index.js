const buttons = document.querySelectorAll('#myDIV .btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

    });
});


document.addEventListener('DOMContentLoaded', function() {
    const boardcastBtn = document.getElementById('btn-boardcast');
    const publishingBtn = document.getElementById('btn-publishing');
    const contentBtn = document.getElementById('btn-content');
    const boardcastContent = document.getElementById('1st');
    const publishingContent = document.getElementById('2nd');

    boardcastBtn.addEventListener('click', function() {
        boardcastContent.style.display = 'block';
        publishingContent.style.display = 'none';
        boardcastBtn.classList.add('active');
        publishingBtn.classList.remove('active');
        contentBtn.classList.remove('active');
    });

    publishingBtn.addEventListener('click', function() {
        boardcastContent.style.display = 'none';
        publishingContent.style.display = 'block';
        boardcastBtn.classList.remove('active');
        publishingBtn.classList.add('active');
        contentBtn.classList.remove('active');
    });

    contentBtn.addEventListener('click', function() {
        boardcastContent.style.display = 'none';
        publishingContent.style.display = 'none';
        boardcastBtn.classList.remove('active');
        publishingBtn.classList.remove('active');
        contentBtn.classList.add('active');
    });
});