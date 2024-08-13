import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('pink roccade home page verification tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.pinkroccadelocalgovernment.nl');
        
        const nietAkkoordButton = page.getByRole('button', { name: 'Niet akkoord' });

        if ( await nietAkkoordButton.isVisible()) {
            await page.getByRole('button', { name: 'Niet akkoord' }).click({
                button: 'left'});
        }
    });

    test('verify pink roccade logo', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Go to PinkRoccade homepage' }).first()).toBeVisible();
    });

    test('verify onze experise link item', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Onze expertise' }).first()).toBeVisible();
    });
})