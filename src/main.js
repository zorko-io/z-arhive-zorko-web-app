// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './stylus/main.styl'
import AppFactory from './AppFactory'

const app = AppFactory()

app({Vue, el: '#app'})
