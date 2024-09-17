import puppeteer from "puppeteer";

const url = "https://scholar.google.com/citations?view_op=view_org&org=16345133980181568013&hl=en&oi=io";

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const allProfs = await page.evaluate(() => {
        const profs = document.querySelectorAll("div.gsc_1usr");
        return Array.from(profs).map((prof) => {
            const title = prof.querySelector('h3').innerText;
            const url = prof.querySelector('a').href;
            return {title, url};
        });
    });

    console.log(allProfs)
    //await browser.close();
}

main();
