import AppNavigator from './stack_navigation';

const recentlyVisitedRoutes = new Set();//防止連點，多次navigate，增加此判斷

const navReducers = (state, action) => {
  const { getStateForAction } = AppNavigator.router;
  if (action.type === 'Navigation/NAVIGATE') {
      if (recentlyVisitedRoutes.has(action.routeName)) {
          return state;
      }
      recentlyVisitedRoutes.add(action.routeName);
      setTimeout(() => {
          recentlyVisitedRoutes.delete(action.routeName);
      }, 400);
  }

  const newState = getStateForAction(action, state);
  return newState || state;
};

export default navReducers;
