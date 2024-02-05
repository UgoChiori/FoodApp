// import express, { json, urlencoded } from 'express';
// import { createTransport } from 'nodemailer';
// import multer, { memoryStorage } from 'multer';

// const app = express();
// const port = 3001;

// // Multer configuration for handling file uploads
// const storage = memoryStorage();
// const upload = multer({ storage });

// // Express middleware to handle JSON and form data
// app.use(json());
// app.use(urlencoded({ extended: true }));

// // POST endpoint for form submission
// app.post('/submit_form', upload.single('paymentReceipt'), (req, res) => {
//   // Extract form data from request body
//   const { name, email, phoneNumber, address } = req.body;
//   const paymentReceipt = req.file.buffer;

//   // Nodemailer configuration
//   const transporter = createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'ugochiori@gmail.com', // Your Gmail email address
//       pass: 'ugochiori_password', // Your Gmail password
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: 'ugochiori@gmail.com', // Your Gmail email address
//     to: email, // User's email address from the form
//     subject: 'New Payment Form Submission',
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Phone Number: ${phoneNumber}
//       Address: ${address}
//     `,
//     attachments: [
//       {
//         filename: 'paymentReceipt.jpg',
//         content: paymentReceipt,
//         encoding: 'base64',
//       },
//     ],
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Form submitted successfully!');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


// server.js
import express, { json, urlencoded } from 'express';
import { createTransport } from 'nodemailer';
import multer from 'multer';
import { memoryStorage } from 'multer';

const app = express();
const port = 3001;

const storage = memoryStorage();
const upload = multer({ storage });

app.use(json());
app.use(urlencoded({ extended: true }));

// POST endpoint for payment form submission
app.post('/submit_payment', upload.single('paymentReceipt'), async (req, res) => {
  try {
    const { name, email, phoneNumber, address } = req.body;
    const paymentReceipt = req.file.buffer;

    // Nodemailer configuration
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'your_email@gmail.com', // Your Gmail email address
        pass: 'your_email_password', // Your Gmail password
      },
    });

    // Email options
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'New Payment Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Address: ${address}
      `,
      attachments: [
        {
          filename: 'paymentReceipt.jpg',
          content: paymentReceipt,
          encoding: 'base64',
        },
      ],
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Payment Message sent: %s', info.messageId);
    res.status(200).send('Payment form submitted successfully!');
  } catch (error) {
    console.error('Payment Error:', error.message);
    res.status(500).send(error.toString());
  }
});

// POST endpoint for food order submission
app.post('/submit_order', upload.single('foodOrder'), async (req, res) => {
  try {
    const { customerName, customerEmail, orderDetails } = req.body;

    // Nodemailer configuration (you may use a different email for orders)
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'your_email@gmail.com', // Your Gmail email address
        pass: 'your_email_password', // Your Gmail password
      },
    });

    // Email options
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'your_destination_email@example.com',
      subject: 'New Food Order',
      text: `
        Customer Name: ${customerName}
        Customer Email: ${customerEmail}
        Order Details: ${orderDetails}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Order Message sent: %s', info.messageId);
    res.status(200).send('Food order submitted successfully!');
  } catch (error) {
    console.error('Order Error:', error.message);
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
