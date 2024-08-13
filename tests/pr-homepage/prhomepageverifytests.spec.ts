import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { PageManager } from './pages/pagemanager';

describe('pink roccade home page verification tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.pinkroccadelocalgovernment.nl');
        
        const pm = new PageManager(page);        

        if ( await pm.onPrHomePage().verifyNietAkkoordButton()) {
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