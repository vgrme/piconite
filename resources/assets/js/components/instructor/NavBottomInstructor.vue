<template>
     <ul class="nav nav-justified nav-pills nav-bottom">
         <li class="dropdown" v-for="menu_item in menu_items">
             <a href="#"><span><i :class="menu_item.icon"></i>&nbsp;{{menu_item.menu_text}}</span>
             </a>
              <div v-if="menu_item.sub_menu.length >= 1" class="dropdown-content">
    <a href="#" v-for="sub_menu_item in menu_item.sub_menu">{{ sub_menu_item }}</a>
  </div>
             </li>
 
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
                        icon: 'fa fa-graduation-cap',
                        menu_text: 'My Courses',
                        sub_menu: ['Course A', 'Course B']
                    },
                     {
                        icon: 'fa fa-users',
                        menu_text: 'My Students',
                        sub_menu: []
                    },
                     {
                        icon: 'fa fa-book',
                        menu_text: 'Submissions',
                          sub_menu: []
                    },
                     {
                        icon: 'fa fa-comment',
                        menu_text: 'Gradebook',
                          sub_menu: []
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

.dropdown {
    position: relative;
    display: inline-block;
    }
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
   width:100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}


</style>