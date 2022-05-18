// kalo di vidieo ini nama filenya controller

const { Pool } = require("pg");

const getStudents = (req, h) => {
  try{
    const response = h.response({
      status: 'success',
      message: 'BERHASIIIIL',
    });
    response.code(200);
    return response;
  } 
  catch(eror){
    const response = h.response({
      status: 'fail',
      message: error.message
  })
  response.code(400)
  return response
  }

  

  // const query = {
  //   text: 'SELECT * FROM students',
  // }

  // const result = await Pool.query(query);

  // const dataStudent = result.rows;

  // const response = h.response({
  //   status: 'success',
  //   data:  dataStudent,
  // });
  // response.code(201);
  // return response; 

  // return {
  //   status: 'success',
  //   data: { datas: dataStudent },
  // };


  // Pool.query("SELECT * ALL FROM students", (error, result) => {
  //   
  //   if(result){
  //     const response = h.response({
  //       data: {result},
  //     })
  //     return response;
  //   };

  // })

  
};

module.exports = {
  getStudents,
};