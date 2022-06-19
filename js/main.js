window.addEventListener('load', () => {

    const nextBtn = document.querySelector('.previewty_package_slide_next');
    const prevBtn = document.querySelector('.previewty_package_slide_prev');
    const packageSlide = document.querySelector('.previewty_package_slide');
    let active_num = 1;

    window.addEventListener("resize", resizeFunction);
    resizeFunction();

    function resizeFunction() {
        winW = window.innerWidth;
        if(winW > 991) {
            packageSlide.prepend(packageSlide.lastElementChild);
            packageSlide.prepend(packageSlide.lastElementChild);
        
            nextBtn.addEventListener('click', () => {
                packageSlide.prepend(packageSlide.lastElementChild);
                packageSlide.prepend(packageSlide.lastElementChild);
                if(active_num >= packageSlide.children.length) {
                    active_num = 1;
                }
                else {
                    active_num += 1;
                }
                for(var i=0; i<packageSlide.children.length; i++) {
                    packageSlide.children[i].classList.remove('active');
                }
                document.querySelector(`#previewty_package_${active_num}`).classList.add('active')
            });
            prevBtn.addEventListener('click', () => {
                packageSlide.append(packageSlide.firstElementChild);
                packageSlide.append(packageSlide.firstElementChild);
                if(active_num <= 1) {
                    active_num = 6;
                }
                else {
                    active_num -= 1;
                }
                for(var i=0; i<packageSlide.children.length; i++) {
                    packageSlide.children[i].classList.remove('active');
                }
                document.querySelector(`#previewty_package_${active_num}`).classList.add('active')
            });
        
        }
    }



});