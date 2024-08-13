import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class PRHomePage extends HelperBase {
    readonly page: Page;
    readonly nietAkkoordButton: Locator;
    readonly pinkRoccadeLogo: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.nietAkkoordButton = page.getByRole('button', { name: 'Niet akkoord' });
        this.pinkRoccadeLogo = page.getByRole('link', { name: 'Go to PinkRoccade homepage' }).first();
    }

    async verifyNietAkkoordButton(): Promise<boolean> {
        return await this.nietAkkoordButton.isVisible();
    }

    async clickNietAkkoordButton() {
        if ( await this.nietAkkoordButton.isVisible()) {
            await this.nietAkkoordButton.click();
        }
    }

    async verifyPinkRoccadeLogoIsVisible(): Promise<boolean> {
        return await this.page.getByRole('link', { name: 'Go to PinkRoccade homepage' }).first().isVisible();
    }

    async verifyOnseExpertiseLinkIsVisible(): Promise<boolean> {
        return await this.page.getByRole('link', { name: 'Onze expertise' }).first().isVisible();
    }

}