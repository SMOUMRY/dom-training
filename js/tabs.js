const tabsList = document.querySelectorAll('#tabs-links [data-tab]');
tabsList.forEach(link => {
    link.addEventListener('click', function () {
        // Manage Links
        tabsList.forEach(link2 => link2.classList.remove('active'));
        link.classList.add('active');
        // Manage articles
        document.querySelectorAll('#tabs-contents [data-tab-content]').forEach(content => content.classList.remove('active'));
        document.getElementById(link.dataset.tab).classList.add('active');
    });    
    });
