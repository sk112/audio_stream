
### STEPS TO SETUP FIREBASE
- Login/create Firebase account
  ![Step 1](/server/assets/firebase/step1.png)
  ![Step 2](/server/assets/firebase/step2.png)
  ![Step 3](/server/assets/firebase/step3.png)
  ![Step 4](/server/assets/firebase/step4.png)
  ![Step 5](/server/assets/firebase/step5.png)
  ![Step 6](/server/assets/firebase/step6.png)
  - Click on `Register App` and Modify the properties in `.env` file accordingly.
  ```
  # These are the properties to add in `/server/.env` file
  APIKEY=
  AUTHDOMAIN=
  PROJECTID=
  STORAGEBUCKET=
  MESSAGINGSENDERID=
  APPID=
  MEASUREMENTID=
  ```
  ![Step 7](/server/assets/firebase/step7.png)
  ![Step 8](/server/assets/firebase/step8.png)
  ![Step 9](/server/assets/firebase/step9.png)
  ![Step 10](/server/assets/firebase/step10.png)
  ![Step 11](/server/assets/firebase/step11.png)
  ![Step 12](/server/assets/firebase/step12.png)
  ![Step 13](/server/assets/firebase/step13.png)
  ![Step 14](/server/assets/firebase/step14.png)

  - Save the generated file at `/server/` directory
  - Also add `GOOGLE_APPLICATION_CREDENTIALS` with full path of above json file as value. 
  ```
  #example
  GOOGLE_APPLICATION_CREDENTIALS=/Users/user/Documents/server/chatily.json
  ```