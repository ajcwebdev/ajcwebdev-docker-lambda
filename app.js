'use strict'

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Cause I don't want a server, but I do still want a container`,
      },
      null,
      2
    ),
  }
}