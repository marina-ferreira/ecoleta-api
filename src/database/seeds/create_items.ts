import Knex from 'knex'

export const seed = async (knex: Knex) => {
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lamp-bulbs.svg' },
    { title: 'Pilhas e baterias', image: 'batteries.svg' },
    { title: 'Papéis e Papelão', image: 'paper.svg' },
    { title: 'Resíduos Orgânicos', image: 'organics.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' }
  ])
}
