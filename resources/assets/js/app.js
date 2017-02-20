
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//import CourseCard from './components/CourseCard.vue';
//import Login from './components/Login.vue';

Vue.component('login', require('./components/Login.vue'));
Vue.component('course-card',require('./components/CourseCard.vue'));
Vue.component('nav-bottom-student',require('./components/student/NavBottomStudent.vue'));
Vue.component('nav-bottom-instructor',require('./components/instructor/NavBottomInstructor.vue'));

const app = new Vue({
    el: '#app'
});
