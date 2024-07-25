document.addEventListener('DOMContentLoaded', function() {
    const boardcastBtn = document.getElementById('btn-boardcast');
    const publishingBtn = document.getElementById('btn-publishing');
    const contentBtn = document.getElementById('btn-content');
    const boardcastContent = document.getElementById('1st');
    const publishingContent = document.getElementById('2nd');
    const contentContent = document.getElementById('3rd');

    // Footer links
    const footerBroadcast = document.getElementById('footer-broadcast');
    const footerPublishing = document.getElementById('footer-publishing');
    const footerContent = document.getElementById('footer-content');

    boardcastBtn.addEventListener('click', function() {
        boardcastContent.style.display = 'block';
        publishingContent.style.display = 'none';
        contentContent.style.display = 'none';
        boardcastBtn.classList.add('active');
        publishingBtn.classList.remove('active');
        contentBtn.classList.remove('active');
    });

    publishingBtn.addEventListener('click', function() {
        boardcastContent.style.display = 'none';
        publishingContent.style.display = 'block';
        contentContent.style.display = 'none';
        boardcastBtn.classList.remove('active');
        publishingBtn.classList.add('active');
        contentBtn.classList.remove('active');
    });

    contentBtn.addEventListener('click', function() {
        boardcastContent.style.display = 'none';
        publishingContent.style.display = 'none';
        contentContent.style.display = 'block';
        boardcastBtn.classList.remove('active');
        publishingBtn.classList.remove('active');
        contentBtn.classList.add('active');
    });

    // Add functionality to footer links
    footerBroadcast.addEventListener('click', function() {
        boardcastBtn.click();
    });

    footerPublishing.addEventListener('click', function() {
        publishingBtn.click();
    });

    footerContent.addEventListener('click', function() {
        contentBtn.click();
    });
});