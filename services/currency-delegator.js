const puppeteer = require("puppeteer");

async function getCurrentCurrency(currency){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=dollar+rate+in+${currency}`);
    const bodyHandle = await page.$('#knowledge-currency__updatable-data-column');
    const html = await page.evaluate(body => body.innerHTML, bodyHandle);
    let indexOf = html.indexOf('data-exchange-rate="');
    const lastIndexOf = html.indexOf('">');
    let of = html.substring(indexOf, lastIndexOf);
    const value = of.split('="')[1];
    await bodyHandle.dispose();
    await browser.close();
    return value;
}

module.exports = {getCurrentCurrency}