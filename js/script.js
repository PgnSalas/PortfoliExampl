'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuClose = document.querySelector('.menu__close'),
          hamburger = document.querySelector('.hamburger');

    function openMenu(btnOpen) {
        btnOpen.addEventListener('click', () => {
            menu.classList.add('active');
        });
    }

    openMenu(hamburger);

    function closeMenu(btnClose, window) {
        btnClose.addEventListener('click', () => {
            menu.classList.remove('active');
        });
        window.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('menu__overlay')) {
                menu.classList.remove('active');
            }
        });
    }

    closeMenu(menuClose, menu);

    // MENU_LIST_LI
    const links = document.querySelectorAll('.menu__link');

    function clickLink(link) {
        link.forEach((item, i) => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }

    clickLink(links);



    // ========================================== ABILITIES ==================================================================
    const btnAbiliti = document.querySelectorAll('.abilities__item_dop'),
          btnCloseNew = document.querySelectorAll('.abilities__item_dop-new'),
          itemAbil = document.querySelectorAll('.abilities__item'),
          newItem = document.querySelectorAll('.abilities__item-new');   


    let itemAnimated;
    let newItemAnimate;

    function btnNewWindow(btn) {
        btn.forEach((item, i) => {
            item.addEventListener('click', () => {
                setTimeout(function time() {
                }, 1000);

                itemAbil[i].classList.add('none');
                newItem[i].classList.remove('none');
                newItem[i].classList.add('active');

                itemAnimated = newItem[i].animate([
                    {filter: "opacity(0%)"},
                    {filter: "opacity(50%)"},
                    {filter: "opacity(100%)"},
                ], {
                    duration: 1000,
                    iterations: 1
                });
            });
        });
    }

    btnNewWindow(btnAbiliti);


    function closeItem(btn) {
        btn.forEach((item, i) => {
            item.addEventListener('click', () => {
                itemAbil[i].classList.remove('none');
                newItem[i].classList.add('none');
                newItem[i].classList.remove('active');

                newItemAnimate = itemAbil[i].animate([
                    {filter: "opacity(0%)"},
                    {filter: "opacity(50%)"},
                    {filter: "opacity(100%)"},
                ], {
                    duration: 1000,
                    iterations: 1
                });
            });
        });
    }

    closeItem(btnCloseNew);


    // =====================================PERCENTS======================================

    const procents = document.querySelectorAll('.item-percents__percents'),
          span = document.querySelectorAll('.span');

    function proc() {
        procents.forEach((item, i) => {
            span[i].style.width = item.textContent; 
        });
    }

    proc();


    // FORM
    const form = document.querySelector('.contacts__form');
    const checkbox = document.querySelector('.checkbox input');

    form.addEventListener('submit', formSend);

    function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        function look(box) {
            if (box.getAttribute('type') == 'checkbox' && box.checked === false) {
                box.classList.add('er');
            } else {
                box.classList.remove('er');
            }
        }
    
        look(checkbox);
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            // } else if (input.setAttribute('type') === 'checkbox' && input.checked === false) {
            //     formAddError(input);
            //     error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    // formValidate(form);


    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }


    // ======================================OVERLAY====================================================
    const up = document.querySelector('.overlay__link');
    const body = document.querySelector('body');


    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1400) { // когда пролистали больше чем 1600 работает условие
            up.style.display = 'block';
        } else {
            up.style.display = 'none';
        }
    });


    const btn = document.querySelector('.contacts__btn .btn');

    btn.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    new WOW().init();
});