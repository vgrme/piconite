<template>
    <div class="login-box">
  <form name="form-signin" class="form-signin" role="form" v-on:submit.prevent="login">
 
        <h2 class="form-signin-heading">Please sign in</h2>
        <div class="alert alert-danger" v-if="loginerrors.length > 0">
            <ul class="login-errors">
                <li v-for="error in loginerrors">
                    {{error}}
                    
                </li>
            </ul>
        </div>
        <input ref="email" id="email" type="email" name="email" class="form-control login-input" placeholder="Email address">
        <input ref="password" id="password" type="password" name="password" class="form-control login-input" placeholder="Password">
        <button type="submit" class="login-btn">Sign in</button>
      </form>
</div>
</template>
<script>
    export default {
   data() {
       return {
           loginerrors: []
       }
   },
    methods: {
        login() {
           axios.post('/login', {
                email: this.$refs.email.value,
                password: this.$refs.password.value
            })
            .then(function (response) {
            console.log('woot' + response);
            window.location.replace('/home')
            })
            .catch(function (error) {
                console.log('oops'+ error);
                this.setLoginErrors(error.response.data);
            }.bind(this));
        },
        setLoginErrors(errorList) {
            this.loginerrors = []
            for(var key in errorList) {
                let errStr = errorList[key]
                this.loginerrors.push(errStr)
            }
        }
    }
    }
</script>
<style scoped>
    .login-box {
        background:white;
        height:400px;
        width:400px;
        border-radius:8px;
        margin-left: 300px;
        margin-top: 150px;
    }
    .login-btn {
    height: 50px;
    margin-top: 50px;
    display: block;
    width: 100%;
    background: #396bf7;
    color: white;
    font-size: 20px;
    border: 1px solid #396bf7;
    border-radius: 5px;
    }
    .login-input {
    margin-bottom: 10px;
    height: 50px;
    border-radius: 5px;
    }
    .login-errors {
        list-style:none;
    }
    .form-signin {
    padding: 20px;
    margin: 0 auto;
    }
    .form-signin-heading {
        margin-bottom: 20px;
        text-align: center;
    }
</style>