const { getStudents } = require("./handler");

const routes = [
  {
    method: 'GET',
    path: '/students',
    handler: getStudents,
  },
];



module.export = routes;