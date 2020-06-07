import Knex from 'knex'

export const seed = async (knex: Knex) => {
  await knex('point_items').insert([
    { point_id: 1, item_id: 1 },
    { point_id: 1, item_id: 2 },
    { point_id: 1, item_id: 3 },
    { point_id: 2, item_id: 4 },
    { point_id: 2, item_id: 5 },
    { point_id: 2, item_id: 6 },
    { point_id: 3, item_id: 1 },
    { point_id: 3, item_id: 3 },
    { point_id: 3, item_id: 5 },
    { point_id: 3, item_id: 6 },
    { point_id: 4, item_id: 2 },
    { point_id: 4, item_id: 4 },
    { point_id: 4, item_id: 6 },
    { point_id: 5, item_id: 3 },
    { point_id: 5, item_id: 5 }
  ])
}
