import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  
  // Extract username and password from the body
  const { username, password } = body
  
  //if username is wangyan, password is 12345 , it is valid
  //otherwise throw 401 error 

  if (username === 'wangyan' && password === '12345') {
     // create fake user
  const user = {
    id: faker.string.nanoid(5),
    name: username,
    email: faker.internet.email(),
    avatar: faker.image.avatarLegacy(),
  };

  console.log('user->', user)
  /**
   * In a real app, you should reach out to DB/external auth service to fetch the user and validate the different stuff
   */
  await setUserSession(event, {
    user,
    loggedInAt: new Date(),
    // Any extra fields
  });

  return user;
  }else{
    sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
  }

 
});
