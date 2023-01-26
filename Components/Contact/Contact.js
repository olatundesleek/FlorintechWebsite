import React from "react";
import { Box } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box className="faq-container">
        <h3>CONTACT</h3>
        <h1>Get in touch.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          aspernatur voluptatem commodi quis. Dolorem nulla officiis quae ullam?
          Mollitia cumque odio, laborum in molestias itaque sed deserunt illum
          accusantium blanditiis dolore adipisci perferendis atque quia eum
          reiciendis hic quidem perspiciatis.
        </p>
      </Box>
      <Box>
        <Box>
          <form action="" method="post">
            <div>
              <Box>
                <label>Name</label>
              </Box>
              <input
                type="text"
                class="contact-input"
                placeholder="John Carter"
              />
            </div>
          </form>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default Contact;
