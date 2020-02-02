import { expect } from 'chai';
import { getTask } from '../getTask';

describe('getTask', () => {
  it('should return Id = 1', () => {
    expect(getTask().id).eq('1');
  });
});
