import {
  ADD_DAY,
  REMOVE_DAY
} from './typeConstants';

export const addDay = (days) => ({
  type: ADD_DAY,
  value: days,
});

export const removeDay = (index) => ({
  type: REMOVE_DAY,
  value: index,
})