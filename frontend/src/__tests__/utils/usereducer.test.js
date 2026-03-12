import usereducer from '../../Usereducer/Usereducer';

describe('usereducer', () => {
  const initialState = null;

  test('returns initial state for unknown action', () => {
    const result = usereducer(initialState, { type: 'UNKNOWN' });
    expect(result).toBeNull();
  });

  test('handles "user" action with payload', () => {
    const userPayload = { name: 'Test User', email: 'test@example.com' };
    const result = usereducer(initialState, { type: 'user', payload: userPayload });
    expect(result).toEqual(userPayload);
  });

  test('handles "user" action updating existing state', () => {
    const existingUser = { name: 'Old User' };
    const newUser = { name: 'New User' };
    const result = usereducer(existingUser, { type: 'user', payload: newUser });
    expect(result).toEqual(newUser);
  });

  test('handles "CLEAR" action', () => {
    const existingUser = { name: 'Test User' };
    const result = usereducer(existingUser, { type: 'CLEAR' });
    expect(result).toBeNull();
  });

  test('handles "CLEAR" action when already null', () => {
    const result = usereducer(initialState, { type: 'CLEAR' });
    expect(result).toBeNull();
  });
});
