import { test, expect } from '@playwright/test'
import { PageManager } from '../pages/pagemanager';

test.describe('werken bij tests', () => {

    test.beforeEach(async ({ page }) => {
        const pm = new PageManager(page);
        await pm.onPrHomePage().goToPinkRoccadeHomepage();

        if (await pm.onPrHomePage().verifyNietAkkoordButtonIsVisible()) {
            await pm.onPrHomePage().clickNietAkkoordButton();
        }
    });

    test('navigate to and verify werken bij page header', async ({ page }) => {
        const pm = new PageManager(page);

        await pm.onPrHomePage().clickWerkenBijLink();
        expect(await pm.onWerkenBijPage().verifyWerkenBijHeaderIsVisible()).toBe(true);
    });
})