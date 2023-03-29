// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const SECRET = "6LcNXykaAAAAAPBGLmn0ot_lm3GpZUqTUj5YLeI-";

// function getContent(token) {
//   return { secret: SECRET, token };
// }

export default async function handler(req, res) {
  // console.log(getContent(req.body.token), JSON.stringify(req.body));

  try {
    // let reCaptchaResponse = await fetch(
    //   `https://www.google.com/recaptcha/api/siteverify`,
    //   {
    //     method: "POST",
    //     body: getContent(req.body.token),
    //   }
    // );
    // const userResponse = await reCaptchaResponse.json();
    // res.status(200).json({
    //   status: "success",
    //   data: userResponse,
    // });
  } catch (err) {
    // res.status(500).json({
    //   status: "error",
    //   message: err.message,
    // });
  }
}
