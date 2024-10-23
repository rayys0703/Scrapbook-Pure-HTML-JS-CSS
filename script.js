        const scrapbook = document.querySelector('.scrapbook');
        let startX, scrollLeft, isDown;

        scrapbook.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - scrapbook.offsetLeft;
            scrollLeft = scrapbook.scrollLeft;
        });

        scrapbook.addEventListener('mouseleave', () => {
            isDown = false;
        });

        scrapbook.addEventListener('mouseup', () => {
            isDown = false;
        });

        scrapbook.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrapbook.offsetLeft;
            const walk = (x - startX) * 3;
            scrapbook.scrollLeft = scrollLeft - walk;
        });

        scrapbook.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - scrapbook.offsetLeft;
            scrollLeft = scrapbook.scrollLeft;
        });

        scrapbook.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - scrapbook.offsetLeft;
            const walk = (x - startX) * 2;
            scrapbook.scrollLeft = scrollLeft - walk;
        });
