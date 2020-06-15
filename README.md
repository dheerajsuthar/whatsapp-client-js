#WhatsApp Client JS

## Why
WhatsApp doesn't expose its user/dev APIs publicly (only business APIs). This project works around that using selenium 
to control the official WhatsApp web client. 

## How
1. Download chromedriver suitable to your chrome version from [here](https://chromedriver.storage.googleapis.com/index.html)
(to find chrome version, enter following in URL bar & press Enter: `chrome://version/`)
2. Place it in bin with file name as `chromedriver`
3. Install ts-node globally: `yarn add --global ts-node`
4. Install dependencies: `yarn`
5. Run `yarn start`

## Known issues
1. Mac doesn't allow to open chromedriver. See solution (here)[https://stackoverflow.com/questions/60362018/macos-catalinav-10-15-3-error-chromedriver-cannot-be-opened-because-the-de].

## Limitation
1. No solution for QR code, so that step is still required.
