import Knex from 'knex'

export const seed = async (knex: Knex) => {
  await knex('points').insert([
    {
      city: 'Minas',
      email: 'donamaria@email.com',
      image: 'https://source.unsplash.com/ATgfRqpFfFI',
      latitude: -23.5891584,
      longitude: -46.7771682,
      name: 'Point A',
      uf: 'MG',
      whatsapp: '1198765432'
    }, {
      city: 'Minas',
      email: 'donamaria@email.com',
      image: 'https://source.unsplash.com/ATgfRqpFfFI',
      latitude: -23.5891584,
      longitude: -46.7771682,
      name: 'Point B',
      uf: 'MG',
      whatsapp: '1198765432'
    }, {
      image: 'https://source.unsplash.com/ATgfRqpFfFI',
      name: 'Point C',
      email: 'donamaria@email.com',
      whatsapp: '1198765432',
      latitude: -27.5891584,
      longitude: -46.7771682,
      city: 'Rio',
      uf: 'RJ'
    }, {
      image: 'https://source.unsplash.com/ATgfRqpFfFI',
      name: 'Mercado do Zezinho',
      email: 'zezinho@email.com',
      whatsapp: '1199876653',
      latitude: -23.5891584,
      longitude: -46.7771682,
      city: 'Dourado',
      uf: 'SP'
    }, {
      image: 'https://source.unsplash.com/ATgfRqpFfFI',
      name: 'Mercado da Beatriz',
      email: 'beatriz@email.com',
      whatsapp: '11998938723',
      latitude: -23.5891584,
      longitude: -46.7771682,
      city: 'Laranjal do Jari',
      uf: 'AP'
    }
  ])
}
