function inject(request, state, logger) {
  const data = [{
    reason: 'Coffee',
    reasonId: A,
    dateTime: '2017-11-22 08:00:00',
    timezone: 'EASTERN',
    startTime: '1970-01-01 08:00:00',
    endTime: '1970-01-01 08:29:59'
  }, {
    reason: 'Coffee',
    reasonId: A,
    dateTime: '2017-11-22 08:30:00',
    timezone: 'EASTERN',
    startTime: '1970-01-01 08:30:00',
    endTime: '1970-01-01 08:59:59'
  }, {
    reason: 'Coffee',
    reasonId: A,
    dateTime: '2017-11-22 09:00:00',
    timezone: 'ARIZONA',
    startTime: '1970-01-01 09:00:00',
    endTime: '1970-01-01 09:29:59'
  }, {
    reason: 'Coffee',
    reasonId: A,
    dateTime: '2017-11-22 09:30:00',
    timezone: 'EASTERN',
    startTime: '1970-01-01 09:30:00',
    endTime: '1970-01-01 09:59:59'
  }, {
    reason: 'Coffee',
    reasonId: A,
    dateTime: '2017-11-22 10:00:00',
    timezone: 'EASTERN',
    startTime: '1970-01-01 10:00:00',
    endTime: '1970-01-01 10:29:59'
  }];

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
