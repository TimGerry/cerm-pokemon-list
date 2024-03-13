import { test, expect, Page, Locator } from '@playwright/test';


test.describe('UI tests for pokemon form', () => {
  let page: PokemonPage;

  test.beforeEach(async ({ page: p }) => {
    page = new PokemonPage(p);
    await page.navigateTo();
  })

  test('has title', async () => {
    // Expect a title "to contain" a substring.
    expect(await page.title()).toBe('CermPokemonList');
  });

  test('form should submit', async () => {
    const name = page.form.nameInput;
    const type = page.form.typeInput;
    const attack = page.form.attackInput;
    await page.form.fillIn('swampert', 'water', 'hydro pump');

    await expect(name).toHaveValue('swampert');
    await expect(type).toHaveValue('water');
    await expect(attack).toHaveValue('hydro pump');
    await expect(page.form.submitIsEnabled).toBeTruthy();
  })
});

abstract class PageObject {
  constructor(protected host: Locator) { }
}

class PokemonPage {

  constructor(private page: Page) { }

  public navigateTo() {
    return this.page.goto('/pokemon');
  }

  public title = async () => { return await this.page.title() };
  public form = new PokemonForm(this.page.locator('app-pokemon-form'));
}

class PokemonForm extends PageObject {
  public nameInput = this.host.locator('#nameInput');
  public typeInput = this.host.locator('#typeInput');
  public attackInput = this.host.locator('#attackInput');

  async fillIn(name: string, type: string, attack: string) {
    await this.nameInput.fill(name);
    await this.typeInput.fill(type);
    await this.attackInput.fill(attack);
  }

  async submitIsEnabled() {
    const submitButton = this.host.locator('button');
    return await submitButton.isEnabled;
  }
}
