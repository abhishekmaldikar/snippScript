import React from 'react'
import { Container, Box, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { motion, useScroll } from "framer-motion"
import SyntaxHighlighter from "react-syntax-highlighter";
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-dune-dark";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../App.css"
import { bgcolor } from '@mui/system';


//atelier-dune-dark
const Pages = () => {




    // const [text, setText] = useState('');
    const { scrollYProgress } = useScroll();

    return (


        <div>

            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />

            <Container
                maxWidth="md"
            >
                <Box

                >
                    <Typography variant="h3" align='center' my="90px" fontFamily="Helvetica Neue">
                        "this" key word in javascript
                    </Typography>

                    <Typography variant="subtitle2" mt="50px" mb="30px" sx={{ fontSize: 20 }}>
                        By Abhishek Maldikar,
                    </Typography>

                    <Typography sx={{ fontSize: 19 }}>
                        In JavaScript this is the function invocation context.

                        The challenge is that this has a complicated behavior. That's why during a JavaScript coding interview you might be asked how this behaves in certain situations.

                        Since the best way to prepare for a coding interview is to practice, in this post I compiled a list of 7 interesting interview questions on this keyword.

                        If you're not familiar with this keyword, I recommend reading the post Gentle Explanation of "this" in JavaScript before continuing.

                        Note: JavaScript snippets below run in non-strict mode, also known as sloppy mode.
                    </Typography>

                    <Typography variant="h5" my="45px">
                        Question 1: Variable vs property
                    </Typography>

                    <Typography variant='p' align='center' >
                        What logs to console the following code snippet:
                    </Typography>


                    <Box className='highlighter__result' my="45px">

                        <SyntaxHighlighter language='javascript' style={atelierCaveDark}>
                            {
                                `
const object = {
   message: 'Hello, World!',
   getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
    }
};

console.log(object.getMessage()); // What is logged?
        `
                            }
                        </SyntaxHighlighter>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Expand answer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    'Hello, World!' is logged to console. Try the demo.

                                    object.getMessage() is a method invocation, that's why this inside the method equals object.

                                    There's also a variable declaration const message = 'Hello, Earth!' inside the method. The variable doesn't influence anyhow the value of this.message.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                    </Box>


                    <Typography variant="h5" my="45px">
                        Question 2: Cat name
                    </Typography>

                    <Typography variant='p' align='center' >
                        What logs to console the following code snippet:
                    </Typography>


                    <Box className='highlighter__result' my="45px">

                        <SyntaxHighlighter language='javascript' style={atelierCaveDark}>
                            {
                                `
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
console.log(cat.getName()); // What is logged?
const { getName } = cat;
console.log(getName());     // What is logged?
        `
                            }
                        </SyntaxHighlighter>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Expand answer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                'Fluffy' and 'Fluffy' are logged to console. Try the demo.

When a function is invoked as a constructor new Pet('Fluffy'), this inside the constructor function equals the constructed object.

this.name = name expression inside Pet constructor creates name property on the constructed object.

this.getName this.name creates a method getName on the constructed object. And since the arrow function is used, this inside the arrow function equals to this of the outer scope — the constructor function Pet.

Invoking cat.getName(), as well as getName(), returns the expression this.name that evaluates to 'Fluffy'.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Box>


                    <Typography variant="h5" my="45px">
                        Question 3: Delayed greeting
                    </Typography>

                    <Typography variant='p' align='center' >
                        What logs to console the following code snippet:
                    </Typography>


                    <Box className='highlighter__result' my="45px">

                        <SyntaxHighlighter language='javascript' style={atelierCaveDark}>
                            {
                                `
const object = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message); // What is logged?
  }
};
setTimeout(object.logMessage, 1000);
        `
                            }
                        </SyntaxHighlighter>

                    </Box>


                    <Typography variant="h5" my="45px">
                        Question 4: Artificial method
                    </Typography>

                    <Typography variant='p' align='center' >
                        How can you call logMessage function so that it logs "Hello, World!"?
                    </Typography>


                    <Box className='highlighter__result' my="45px">

                        <SyntaxHighlighter language='javascript' style={atelierCaveDark}>
                            {
                                `
const object = {
  message: 'Hello, World!'
};
function logMessage() {
  console.log(this.message); // "Hello, World!"
}
// Write your code here...
        `
                            }
                        </SyntaxHighlighter>

                    </Box>




                    <Typography variant="h5" my="45px">
                        Question 5: Greeting and farewell
                    </Typography>

                    <Typography variant='p' align='center' >
                        What logs to console the following code snippet:
                    </Typography>


                    <Box className='highlighter__result' my="45px">

                        <SyntaxHighlighter language='javascript' style={atelierCaveDark}>
                            {
                                `
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2);
        `
                            }
                        </SyntaxHighlighter>

                    </Box>



                    <Typography variant="h5" my="45px">
                        Question 5: Greeting and farewell
                    </Typography>

                    <Typography variant='p' align='center' >
                        What logs to console the following code snippet:
                    </Typography>


                    <Box className='highlighter__result' my="45px">

                        <SyntaxHighlighter language='javascript' style={atelierCaveDark}>
                            {
                                `
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);
        `
                            }
                        </SyntaxHighlighter>

                    </Box>


                </Box>
            </Container>
        </div>
    )
}

export default Pages