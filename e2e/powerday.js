import { Selector } from 'testcafe'

fixture `Getting Started`
    .page `http://localhost:3000/power-day`

test('Page header', async t => {
  await t
      .expect(Selector('#header').innerText).eql('Power Day')
})

test('Card component', async t => {
  await t
      .expect(Selector('#header-stretching').innerText).eql('Stretching')
})

test('Search feature', async t => {
  await t
      .typeText('#search', 'power')
      .expect(Selector('#header-powerdrink').innerText).eql('Power Drink')
})
