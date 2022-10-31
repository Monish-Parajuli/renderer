import puppeteer from "puppeteer-core";

export const Pdf = async ({ url }) => {
  const browser = await puppeteer.launch({
    args: [
      "--headless",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--remote-debugging-port=9222",
      "--remote-debugging-address=0.0.0.0",
    ],
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  const buffer = await page.pdf({
    format: "A4",
  });
  await browser.close();
  return buffer;
};
