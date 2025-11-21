document.addEventListener('DOMContentLoaded', () => {
    const signinBtn = document.querySelector('.signin');
    const overlay = document.querySelector('.overlay');

    if (signinBtn && overlay) {
        overlay.style.display = 'none';

        signinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.style.display = (overlay.style.display === 'none') ? 'block' : 'none';
        });
    }

    // ==========================
    // 2. Поиск
    // ==========================
    const searchForm = document.getElementById('home_search');
    const searchInput = document.getElementById('searchform_q');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                alert(`You searched for: "${query}"`);
            } else {
                alert('Please enter a search term.');
            }
        });
    }

    // ==========================
    // 3. Автопрокрутка трендов
    // ==========================
    const trendsList = document.querySelector('#trends ul');
    if (trendsList) {
        let scrollPos = 0;
        setInterval(() => {
            scrollPos += 1;
            trendsList.scrollLeft = scrollPos;
            if (scrollPos >= trendsList.scrollWidth - trendsList.clientWidth) {
                scrollPos = 0;
            }
        }, 30); // скорость (меньше = быстрее)
    }

    // ==========================
    // 4. Имитация отправки твита
    // ==========================
    const tweetsContainer = document.querySelector('.tweet-widget');
    if (tweetsContainer) {
        // Создаём форму под твитами
        const form = document.createElement('form');
        form.innerHTML = `
            <h3>Post a Tweet</h3>
            <textarea id="newTweet" rows="3" style="width:100%; border-radius:5px; padding:5px;" placeholder="What's happening?"></textarea>
            <button type="submit" style="margin-top:5px; padding:6px 12px; border:none; background:#27b; color:white; border-radius:5px;">Tweet</button>
        `;
        tweetsContainer.parentNode.insertBefore(form, tweetsContainer);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = document.getElementById('newTweet').value.trim();
            if (text === '') {
                alert('Tweet cannot be empty.');
                return;
            }

            const tweet = document.createElement('div');
            tweet.className = 'tweet';
            tweet.innerHTML = `
                <div class="tweet-avatar"></div>
                <div class="tweet-content">
                    <span class="tweet-user">You</span>
                    <div class="tweet-text">${text}</div>
                    <div class="tweet-meta">Just now</div>
                </div>
            `;
            tweetsContainer.prepend(tweet);
            document.getElementById('newTweet').value = '';
        });
    }
});