
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourCommand from './modules/ourCommand';
import calc from './modules/calc.js';
import sendForm from './modules/sendForm';
import valid from './modules/valid';
//Timer
countTimer('1 july 2020');
//Menu
toggleMenu();
//popup  
togglePopup();
//Tabs  
tabs();
//Slider
slider();
//Command 
ourCommand();
//калькулятор  
calc(100);
//send-ajax-form
sendForm();
//reset
//валидация
valid();