const { Builder, Capabilities, By } = require("selenium-webdriver");
require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await (
    await driver
  ).get(
    "http://127.0.0.1:5500/week6/day2/automation-demo/movie-list/index.html"
  );
});

afterAll(async () => {
  await (await driver).quit();
});

test("delete Movie", async () => {
  await driver.findElement(By.xpath("//input")).sendKeys("Interstellar");
  await driver.findElement(By.xpath("//button")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//li/button")).click();
  await driver.sleep(1000);
});

test("cross off movie", async () => {
  await driver.findElement(By.xpath("//input")).sendKeys("Interstellar");
  await driver.findElement(By.xpath("//button")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//li/span")).click();
  await driver.sleep(2000);
});

test("check message", async () => {
  await driver.findElement(By.xpath("//input")).sendKeys("Interstellar");
  await driver.findElement(By.xpath("//button")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//li/span")).click();
  const message = await driver.findElement(By.xpath("//aside"));
  const displayed = message.isDisplayed();
  expect(displayed).toBeTruthy();
  await driver.sleep(2000);
});
