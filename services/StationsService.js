/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* This is a summary
* This is a description
*
* id Integer The id to consume. (optional)
* returns List
* */
const getAllRadioStations = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getAllRadioStations,
};
