<template>
     <ul class="nav nav-justified nav-pills nav-bottom">
         <li v-for="menu_item in menu_items"><a href=""><span><i class="fa fa-graduation-cap"></i>&nbsp;{{menu_item}}</span></a></li>
 
</ul>
</template>

<script>
    export default {
        mounted: function() {
            console.log('Mounted');
        },
        data() {
            return {
                menu_items: this.get_menu_items()
            }
        },
        methods: {
            get_menu_items() {
                return ['My Courses', 'My Students','Submissions','Discussions']
            }
        }
    }
</script>

<style>
    .nav-bottom {
    margin-top:0px;
    height:50px;
    padding: 0 60px;
    background: #f6f6f6;
    z-index: 40;
    border-bottom: 1px solid #d7d7d7;
    
}

.nav-bottom > li {
    border-left: 1px solid #d7d7d7;
    border-right: 1px solid transparent;
    padding:0px;
     
      text-transform: uppercase;
    letter-spacing: 1px;
  
    font-weight: 500;
}

.nav-bottom > li > a:hover {
   /* background: #00b1b3;*/
    background: #3097D1;
    margin: 0px;
    border-radius: 0px;
    color: #f5f8fa !important;
}
.nav-bottom > li > a {
    padding: 15px 15px;
    color: #4d545d !important;
}

</style>