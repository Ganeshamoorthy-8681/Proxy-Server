//AUTOMATES THE GOOGLE SIGN IN STEP IN ORDER GET THE SESSION REFRESHED
// import puppeteer from 'puppeteer';

// export const getCookie = async () =>
// {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   // Step 1: Navigate to SAML Login URL
//   await page.goto('https://accounts.google.com/o/saml2/initsso?idpid=C03c05rb4&spid=770251076762&forceauthn=false');

//   // Step 2: Enter Email
//   await page.type('#identifierId', 'ganeshama@appranix.com'); // Google email input
//   await page.click('#identifierNext'); // Click "Next"

//   // Step 3: Enter Password
//   await page.waitForSelector('input[type="password"]', { visible: true });
//   await page.type('input[type="password"]', 'Ganesh@8681');
//   await page.click('#passwordNext'); // Click "Next"

//   await new Promise(resolve => setTimeout(resolve, 120000));

//   // Step 4: Wait for Redirection and Capture SAML Assertion
//   await page.waitForNavigation();
//   const cookies = await page.cookies();
//   console.log('Cookies:', cookies);
//   // const samlResponse = await page.evaluate(() =>
//   // {
//   //   console.log(samlResponse);
//   //   // Capture SAML response or cookies
//   //   return document.querySelector('input[name="SAMLResponse"]');
//   // });

//   console.log('SAML Response:', samlResponse);

//   await browser.close();
// };
