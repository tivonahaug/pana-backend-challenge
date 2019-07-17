exports.seed = function(knex, Promise) {
  return knex("transactions")
    .del()
    .then(function() {
      return knex("teams").del();
    })
    .then(function() {
      return knex("teams").insert([
        {
          id: 1,
          created_at: new Date(),
          updated_at: new Date(),
          name: "Tesla"
        },
        {
          id: 2,
          created_at: new Date(),
          updated_at: new Date(),
          name: "Uber"
        }
      ]);
    })
    .then(function() {
      return knex("transactions").insert([
        {
          created_at: new Date(),
          updated_at: new Date(),
          amount: 36375,
          description: "Flight from EWR to SFO",
          team_id: 1
        },
        {
          created_at: new Date(),
          updated_at: new Date(),
          amount: 1264,
          description: "Uber Ride in LA",
          team_id: 1
        },
        {
          created_at: new Date(),
          updated_at: new Date(),
          amount: 73821,
          description: "Stay at the Hilton SF",
          team_id: 2
        }
      ]);
    });
};
