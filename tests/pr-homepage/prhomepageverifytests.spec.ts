import { test, expect } from '@playwright/test';
import { PageManager } from './pages/pagemanager';

test.describe('pink roccade home page verification tests', () => {
    
    test.beforeEach(async ({ page }) => {       
        const pm = new PageManager(page);
        
        await pm.onPrHomePage().goToPinkRoccadeHomepage();

        if (await pm.onPrHomePage().verifyNietAkkoordButtonIsVisible()) {
            await pm.onPrHomePage().clickNietAkkoordButton();
        }
    });

    test('verify pink roccade logo', async ({ page }) => {
        const pm = new PageManager(page);  
        expect(await pm.onPrHomePage().verifyPinkRoccadeLogoIsVisible()).toBe(true);
    });

    test('verify onze experise link item', async ({ page }) => {
        const pm = new PageManager(page);
        expect(await pm.onPrHomePage().verifyOnseExpertiseLinkIsVisible()).toBe(true);
    });
})