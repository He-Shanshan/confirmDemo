export function modelConfirm(arg) {
  const chooseType = confirm(arg);
  return new Promise((resolve, reject) => {
    resolve(chooseType);
  });
}
