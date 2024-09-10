const express = require('express')

const router = express.Router()

const { User } = require('../class/user')

const { Balance } = require('../class/balance')

router.post('/index', function (req, res) {})

// Підключаємо роутер

router.post('/balance', function (req, res) {})

// Підключаємо роутер

router.post('/recovery', function (req, res) {})
// Підключаємо роутер

router.post('/recovery-confirm', function (req, res) {})
// Підключаємо роутер

router.post('/signin', function (req, res) {})
// Підключаємо роутер

router.post('/signup', function (req, res) {})
// Підключаємо роутер

router.post('/signup-confirm', function (req, res) {})

// Підключаємо роутер

router.post('/settings', function (req, res) {})
// Підключаємо роутер

router.post('/recive', function (req, res) {})
// Підключаємо роутер

router.post('/transaction', function (req, res) {})
// Підключаємо роутер

router.post('/send', function (req, res) {})
// Підключаємо роутер

router.post('/notification', function (req, res) {})

// Експортуємо глобальний роутер
module.exports = router
