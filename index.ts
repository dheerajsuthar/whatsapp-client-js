import {Builder, By, WebDriver} from 'selenium-webdriver'
import * as chrome from 'selenium-webdriver/chrome'
import * as read from 'readline-sync'

let input = ''
let quit = false
let l = console.log

const keypress = async () => {
    process.stdin.setRawMode(true)
    return new Promise(resolve => process.stdin.once('data', () => {
        process.stdin.setRawMode(false)
        resolve()
    }))
}

chrome.setDefaultService(
    new chrome.ServiceBuilder('./bin/chromedriver').build()
);

// const title = 'Cool Geek Stuff'
const title = ''

const fetchMessages = async (driver: WebDriver)=>{
    return {
        in: await getMessages(driver, '.message-in'),
        out: await getMessages(driver, '.message-out')
    }
}

const sendMessage = async (driver:WebDriver, message: string)=>{
    const getInput = await driver.findElement(By.css('#main div[contenteditable="true"'))
    await getInput.sendKeys(input + '\n')
}

const loop = (driver:WebDriver, interval: number) => setInterval(async ()=>{
    //send your message
    if(input){
        await sendMessage(driver, input)
        input = ''
    }

    const messages = await fetchMessages(driver)
    console.log(messages)
}, interval)

const getMessages = async (driver: WebDriver, selector: string = '.message-in')=>{
    const messageElements = await driver.findElements(By.css(
        selector
    ))

    return await Promise.all(messageElements.map(
        async e => await e.getText()
    ))
}

async function launch() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://web.whatsapp.com/')

    return driver;
}

const run = async ()=>{
    let driver = await launch();
    // TODO: Automate QR code scan process too.
    read.question('Press any key after scanning QR code.')

    const element = await driver.findElement(By.css(`span[title="${title}"`))
    await element.click()
    //loop
    loop(driver, 1000)

    input = 'hello test 2'

}



(async function myFunction() {
    await run()
    //your code inside this block
})();
