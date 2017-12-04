function inject(request, state, logger) {
  const data =
    {
      active: 1,
      appointmentReasons: [
        {
          id: A,
          reason: 'Coffee',
          reasonOrder: 2
        },
        {
          id: B,
          reason: 'Dinner Date',
          reasonOrder: 3
        },
        {
          id: C,
          reason: 'Movie',
          reasonOrder: 5
        },
        {
          id: D,
          reason: 'Hiking',
          reasonOrder: 4
        },
        {
          id: E,
          reason: 'Bicycling',
          reasonOrder: 1
        },
        {
          id: F,
          reason: 'Other',
          reasonOrder: 6
        }
      ]
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
