import reducer, {
  filterActive,
  showAll,
  filterCompleted,
} from '../../features/filterSlice';
import { SHOW_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../../globalConst';

const previousState = '';

describe('filterReducer should', () => {
  it('cnange filter state to SHOW_ALL', () => {
    expect(reducer(previousState, showAll())).toEqual(SHOW_ALL);
  });

  it('change filter state to FILTER_COMPLETED', () => {
    expect(reducer(previousState, filterCompleted())).toEqual(FILTER_COMPLETED);
  });

  it('change filter state to FILTER_ACTIVE', () => {
    expect(reducer(previousState, filterActive())).toEqual(FILTER_ACTIVE);
  });
});
