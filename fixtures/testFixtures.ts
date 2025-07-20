import {test as baseTest} from '@playwright/test';
import {LandingPage} from '../pages/landingPage';
import {DashBoardPage} from '../pages/dashBoardPage';

type Fixtures = {
    landingPage: LandingPage;
    dashBoardPage: DashBoardPage;
}

const testPages = baseTest.extend<Fixtures>({
    landingPage: async ({page}, use) => {
        const landingPage = new LandingPage(page);
        await use(landingPage);
    },
    dashBoardPage: async ({page}, use) => {
        const dashBoardPage = new DashBoardPage(page);
        await use(dashBoardPage);
    }
})

export const test = testPages;
export const expect = testPages.expect;

