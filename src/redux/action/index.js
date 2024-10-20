/**
 * Create action for Redux
 */
import { sessionActions } from '../reducer/session';

// Actions from SessionReducer
export const { loadingStart, loadingStop, add } = sessionActions;
