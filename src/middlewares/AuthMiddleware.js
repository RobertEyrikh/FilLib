import store from "@/store";

async function redirectIfNotGuest(to, from, next) {
  const isGuest = await getIsAuthState();
  if (!isGuest) {
    next("/home");
  } else {
    next();
  }
}
async function redirectIfNotAuth(to, from, next) {
  const isGuest = await getIsAuthState();
  if (isGuest) {
    next("/not_authorized");
  } else {
    next();
  }
}

function getIsAuthState() {
  return new Promise((resolve) => {
    if (store.state.user.isAuth === null) {
      const unwatch = store.watch(
        () => store.state.user.isAuth,
        (value) => {
          unwatch();
          resolve(!value);
        }
      );
    } else {
      resolve(!store.state.user.isAuth);
    }
  });
}

export { redirectIfNotGuest, redirectIfNotAuth };
