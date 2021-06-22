import { UserFilter } from './UserFilter.pipe';

describe('TitleCasePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new UserFilter();

  it('should be able to filter user objects', () => {
    expect(
      pipe.transform(
        [
          { id: 1, name: 'Leanne Graham' },
          { id: 2, name: 'Leanne Graham' },
        ],
        '2'
      )
    ).toBeInstanceOf(Object);
  });

  // ... more tests ...
});
