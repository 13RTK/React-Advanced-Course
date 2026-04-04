export async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Your browser does not support geolocation');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error.message);
      },
    );
  });
}
