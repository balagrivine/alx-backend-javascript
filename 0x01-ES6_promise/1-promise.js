export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const successObject = {
      "status": 200,
      "body": "success"
    };
    if (success) {
      resolve(successObject);
    }
    else {
      reject("The fake API is not working currently");
  } });
}
