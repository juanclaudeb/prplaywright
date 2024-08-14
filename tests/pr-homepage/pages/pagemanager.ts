import { Page } from '@playwright/test';
import { PRHomePage } from './prhomepage';
import { WerkenBijPage } from './werkenBijPage';

export class PageManager {
    private readonly page: Page;
    private readonly prHomePage: PRHomePage;
    private readonly werkenBijPage: WerkenBijPage;

    constructor(page: Page) {
        this.page = page;
        this.prHomePage = new PRHomePage(this.page);
        this.werkenBijPage = new WerkenBijPage(this.page);
    }

    onPrHomePage() {
        return this.prHomePage;
    }

    onWerkenBijPage() {
        return this.werkenBijPage;
    }
}
