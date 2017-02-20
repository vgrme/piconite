<template>
      <div class="col-sm-4 col-md-4">
    <div class="thumbnail">
      <img v-bind:src="imgsrc" alt="...">
      <div class="caption">
        <h3>{{title}}</h3>
        <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
    60%
  </div>
</div>
        <p>This course focuses on the fundamentals of Computer Science.</p>
        <p><a href="#" class="btn btn-success btn-block" role="button">Launch Course</a>
        </p>
      </div>
    </div>
  </div>
  </template>

  <script>
   export default {
      
        props: ['imgsrc','title']
            
            
    }
</script>
<style>
  .thumbnail {
    background-color: #fff !important;
  }
</style>
