const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '-'
module.exports = client => {
  
  const aktiviteListesi = [
    `${prefix}help/-yardım | ${client.guilds.cache.size} sunucuya hizmet veriyoruz!🌍`,
    '-help/-yardım 🔥'

  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 2500)
}