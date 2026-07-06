const { test } = require('@playwright/test');

test.beforeAll(async () => {

    console.log('Before All');

});

test.beforeEach(async () => {

    console.log('Before Each');

});

test.afterEach(async () => {

    console.log('After Each');

});

test.afterAll(async () => {

    console.log('After All');

});

test('Test A', async () => {

    console.log('Running Test A');

});

test('Test B', async () => {

    console.log('Running Test B');

});