'use strict';

import {pdp_page_data} from './pdp-base'; 

document.addEventListener("DOMContentLoaded", () => {
    const pdp_variations = document.querySelector('.b-pdp_details-variations');
    const pdp_variation_item = pdp_variations.querySelectorAll('.b-pdp_details-variation');

    const pdp_sizes = document.querySelector('.b-pdp_details-element_sizes');
    const pdp_size_item = pdp_sizes.querySelectorAll('.b-pdp_details-element_size'); 

 
 
    function setActiveClass(array, parent, nameClass) { 
        parent.addEventListener('click', (event) => {
            array.forEach(btn => {
                let active_variation = parent.querySelector('.' + `${nameClass}`);
                active_variation.classList.remove(nameClass);
                event.target.classList.add(nameClass);
            });
        });    
    }
    
    function classToggle(el) {
        let elTarget = document.querySelector(el); 
        elTarget.addEventListener('click', () => { 
            elTarget.classList.toggle('m-active'); 
        });
    } 

    function my_accordeon(accordeon) {
        let accordeon_parent = document.querySelector(accordeon),
            accordeon_items = accordeon_parent.querySelectorAll('[data-accordeon-item]'),
            accordeon_control = accordeon_parent.querySelectorAll('[data-accordeon-control]');

        
        accordeon_control.forEach(btn => { 
            btn.addEventListener('click', function(e) {
                if (e.target.parentNode.classList.contains('m-expanded')) {
                    e.target.parentNode.classList.remove('m-expanded');
                } else if (!e.target.parentNode.classList.contains('m-expanded')) {
                    accordeon_items.forEach(item => { 
                        if (item.classList.contains('m-expanded')) {
                            item.classList.remove('m-expanded')
                        }
                    });
                    e.target.parentNode.classList.add('m-expanded');
                }
            });
        });  
 
        // accordeon_control.forEach(btn => { // это простой Аккордеон где может быть несколько активныз блоков
        //     btn.addEventListener('click', (e) => {
        //        if (e.target.parentNode.classList.contains('m-expanded')) {
        //             e.target.parentNode.classList.remove('m-expanded');
        //        } else { 
        //             e.target.parentNode.classList.add('m-expanded');
        //        }
        //     });
        // }); // это простой Аккордеон где может быть несколько активныз блоков  
    }


    const person = {
        name: 'Alex',
        tel: '+74444444'
    };
 
    console.log(JSON.parse(JSON.stringify(person)))

    // Глубокое копирование обьекта
    let user = {
        name: "Ivan",
        data: { 
            name: {
                    age: 22,
                }
            }
        };
        
        let admin = {};
        
        function getObj(admin,user) {
            for(key in user) {
                if(typeof user[key] !== "object") { //Если свойства, ключи объекта user не будут ровняться объекту
                    admin[key] = user[key]; //Тогда мы копируем эти свойства в новый объект
                } else {
                    admin[key] = {}; //Иначе, Если свойство передаваемое в admin из user будет ровняться объекту
                    return getObj(admin[key],user[key]); // Тогда возвращаем, передаем свойства из этого объекта (admin[key]) в параметры функции, и свойства внутри объекта user тоже передаем чтобы искать дальше значения внутри, вытаскивать и копировать из него
                }
            }
        } 
        
        getObj(admin,user)
        
        admin.data.name.age = 2
        
        console.log(user) // 22
        console.log(admin) // 2
    // Глубокое копирование обьекта
        

 
    my_accordeon('.b-pdp_calc-accordeon');
    classToggle('.b-pdp_details-more');
    classToggle('.b-pdp_calc-checkbox_info');
    setActiveClass(pdp_size_item, pdp_sizes, 'm-active');
    setActiveClass(pdp_variation_item, pdp_variations, 'm-current');
}); 
