import { RootState } from '../index';

export const selectUsers = (state: RootState) => state.users.userData;