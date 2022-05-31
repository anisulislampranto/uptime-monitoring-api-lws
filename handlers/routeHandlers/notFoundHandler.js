// title: not found handler
// description: not found 404 handler
// date: 31 May

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested URL was not found!",
  });
};

module.exports = handler;
