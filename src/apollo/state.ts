import { makeVar } from '@apollo/client';

export const accessTokenVar = makeVar('');

export const isRequestPending = makeVar(false);
