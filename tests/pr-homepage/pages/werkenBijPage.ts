import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class WerkenBijPage extends HelperBase {
    readonly page: Page;
    readonly werkenBijLink: Locator;
    readonly werkenBijHeader: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.werkenBijHeader = page.getByRole('heading', { name: 'Werken bij'});
    }

    async verifyWerkenBijHeaderIsVisible(): Promise<boolean> {
        return await this.werkenBijHeader.isVisible();
    }

}