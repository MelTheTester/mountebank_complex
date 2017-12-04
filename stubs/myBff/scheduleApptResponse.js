function inject(request, state, logger) {
  const data = {
    createdDateTime: '2017-11-21 09:43:48',
    state: '',
    firstName: 'Jane',
    lastName: 'Doe',
    confirmationCode: '01XF',
    dateOfBirth: '1980-01-01 00:00:00',
    appointmentComments: 'Coffee Catch-up',
    phone: '3234344433',
    email: 'jane.doe@email.com',
    cancelledDateTime: '',
    locationName: 'Starbucks',
    address: '',
    appointmentDateTime: '2017-11-22 09:00:00',
    active: 1,
  };

  function httpResponse(res) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: res
    };
  }

  return httpResponse(data);
}
