<template>
     <ul class="nav nav-justified nav-pills nav-bottom">
         <li v-for="menu_item in menu_items"><a href=""><span><i :class="menu_item.icon"></i>&nbsp;{{menu_item.menu_text}}</span></a></li>
 
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
                return [
                    {
                        icon: 'fa fa-user',
                        menu_text: 'Users'
                    },
                     {
                        icon: 'fa fa-book',
                        menu_text: 'Settings'
                    },
                     {
                        icon: 'fa fa-graduation-cap',
                        menu_text: 'Courses'
                    },
                     {
                        icon: 'fa fa-comment',
                        menu_text: 'Gradebook'
                    }
                    ]
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