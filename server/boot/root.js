'use strict';

module.exports = function(server) {
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  //router.get('/opencloud', (req,res) => {
  //  return res.status(200).send({"message": "Hello Open Cloud"});
  //})
  server.use(router);
};
