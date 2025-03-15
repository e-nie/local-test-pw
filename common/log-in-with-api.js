export const logInWithApi = async (page, request, context, email, password) => {
  //send request, using information from the browser headers and payload
  const response = await request.post(`${process.env.API_BASE_URL}/user/login`, {
    data: {
      email,
      password,
    },
  })

  const body = await response.json()
  process.env['PROFILE_ID'] = body.payload.user._id

  //extract headers from the response (2 headers with names 'set-cookie')
  const headers = response.headers()
  //we look for headers with the name 'set-cookie' and split them into an array
  const cookies = headers['set-cookie'].split('\n')
  const setCookies = []

  for (const cookie of cookies) {
    const pairs = cookie.split('; ')
    const object = {}

    const [name, value] = pairs.shift().split('=')
    object['name'] = name
    object['value'] = value

    for (const pair of pairs) {
      let [key, value] = pair.split('=')

      if (key === 'Expires') {
        value = Date.parse(value) / 1000
      }

      object[`${key.charAt(0).toLowerCase() + key.slice(1)}`] = value || true
    }

    setCookies.push(object)
  }

  await page.goto('/')
  await context.addCookies(setCookies)
  await page.reload()
}
