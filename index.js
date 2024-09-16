import puppeteer from "puppeteer";

const url = "https://scholar.google.com/citations?view_op=view_org&org=16345133980181568013&hl=en&oi=io";

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: "screenshot.png"});
    await browser.close();
}

main();