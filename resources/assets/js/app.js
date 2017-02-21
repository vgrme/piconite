
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


/* START Load Core Components */
require('./components/core/core');
/* END Load Core Components */

/* START Load admin Components */
require('./components/admin/admin');
/* END Load admin Components */

/* START Load Student Components */
require('./components/student/student');
/* END Load Student Components */

/* START Load Instructor Components */
require('./components/instructor/instructor');
/* END Load Instructor Components */

const app = new Vue({
    el: '#piconite-app'
});
