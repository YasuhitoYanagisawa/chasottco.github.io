const puppeteer = require('puppeteer');

(async () => {
    console.log("Launching browser...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log(`ERROR: ${msg.text()}`);
        } else {
            console.log(`LOG: ${msg.text()}`);
        }
    });

    page.on('pageerror', error => {
        console.log(`PAGE ERROR: ${error.message}`);
    });

    page.on('requestfailed', request => {
        console.log(`REQUEST FAILED: ${request.url()} - ${request.failure().errorText}`);
    });

    console.log("Navigating to URL...");
    await page.goto('https://yasuhitoyanagisawa.github.io/chasottco.github.io/', { waitUntil: 'networkidle0' });
    console.log("Done.");
    await browser.close();
})();
