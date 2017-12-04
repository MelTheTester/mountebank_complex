function inject(request, state, logger) {
  const data = {
    schema: {
      name: 'scheduler',
      version: '1.0.0'
    },
    data: {
      name: "Melissa's Calendar",
      logo: '/content/v2/binary/image/logo.jpeg',
      genericErrorMessage: 'Oops, something went wrong!'
      appointmentConfirmationMessage: "You're all set! Here we go!"
    }
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
