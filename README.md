# Frontend Assignment

Implemented by [Luca Stendardo](https://www.linkedin.com/in/luca-stendardo/?locale=en_US)

## Description

Here is a somewhat different version of the task. :) In this version the utetnte can browse a list of products using a dynamic search bar. The list of products can be retrieved either from a .json file locally in the repo or via an API call. The latter, however, being restricted by CORS policies can only be used in a browser window with those policies disabled. I made this choice because in the context of an exercise it allowed me to better show how I would set up the app to work in a real, protected environment.

## Tech Stack

- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Material UI](https://mui.com/)

## Preview

Here's a little preview

    <img src="https://image-cache.xingcdn.com/images/attachments/263/737/595/original/c23f2bc8_fbec_48a0_a2a8_472253857803.jpg?Expires=1660912226&Signature=P8zsIsjBlFixCWpb8arRbLZbXj9JtAx6sORCuA4O1BlU2rGjdpaR369Uz3rsUYKP6sHErhUWjlQLoGIHPnGyVKnZDopUcUVXgvKp27wyv5x4GNHdUl2RrzbFXkJp0-11M8p07-gQjpnDZ9dVwxxIil3Qfy1qe~M1TbS3W6rR4DBY2TJA54kOCD1vnq4Wje2N1Kr4MnexommNlpYy0urNWqJBGwn9JPjMw7w6s26pSvRu98uuT66Zb2zcEFEIeGnhmFdL3P1A~0IgNorZZACkMOiM0h6~spflCsT0D4Y2s38~nm9p1772ESPr1fWpspb0D785Tee4Iae5gXg4FP7V0Q__&Key-Pair-Id=APKAJ7DHXHPGL3QFZP4Q" alt="Logo" width="1300" height="500">

## Run locally

### Frontend

Navigate to the client folder and run the following commands

```bash
npm install
```

In order to run the app via the API call, you need to

- go to the `bash App.tsx ` file
- uncomment the <ProductView/> component.
- open a browser window without the CORS policy restrictions.
  -To do this with Chrome in a Windows environment run the command:
  chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
  -While on Mac:
  -open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

To use the app in local mode, meaning taking data from the .json file, just open the browser normally and leave the <LocalProductView/> component uncommented in the App.tsx file

```bash
npm start
```

Now it should be running on your browser!

## Contact

Luca Stendardo - [LinkedIn](https://www.linkedin.com/in/luca-stendardo/?locale=en_US) - stendardo.lu@gmail.com
