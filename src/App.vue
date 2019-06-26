<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html,body{
  margin: 0;
}
form {
    display: block;
    margin-top: 0em;
}
.text-center {
    text-align: center;
}
* {
    box-sizing: border-box;
    /* font-weight: 400;
    font-style: normal;
    font-family: 'Microsoft YaHei'; */
}
body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    overflow-x: hidden;
    background-color: #fff;
}
html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
</style>
