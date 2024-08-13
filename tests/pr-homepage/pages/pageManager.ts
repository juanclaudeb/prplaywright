import { Page, expect } from '@playwright/test';
import { PRHomePage } from './prhomepage';

export class PageManager {
    private readonly page: Page;
    private readonly prHomePage: PRHomePage;

    constructor(page: Page) {
        this.page = page;
        this.prHomePage = new PRHomePage(this.page);
    }

    onPrHomePage() {
        return this.prHomePage;
    }
}