import { PokemonTypePipe } from './pokemon-type.pipe';

describe('PokemonTypePipe', () => {
  let sut: PokemonTypePipe;

  beforeEach(() => {
    sut = new PokemonTypePipe();
  });

  it('create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should return type', () => {
      const expected = 'water';

      let actual = sut.transform(expected);

      expect(actual).toEqual(expected);
  });

  it('should return custom message', () => {
    let expected = '-';
    let actual = sut.transform(undefined, expected);
    expect(actual).toEqual(expected);
  });

  it('should return standard message', () => {
    let actual = sut.transform(undefined);
    expect(actual).toEqual('Unavailable');
  });
});
