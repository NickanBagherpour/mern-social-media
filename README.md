```
mkdir <root-project>
git init
echo > .gitignore
# fill the .gitignore file
mkdir server
cd server
npm i -g nodemon
npm init -y
npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose
# package.json > type: "module" to use import instead of require
npm create vite@latest # > React > TypeScript > client
cd client
npm i
npm i @reduxjs/toolkit react-redux redux-persist
npm i react-router-dom@6 dotenv react-dropzone formik
npm i @mui/material @mui/icons-material @emotion/styled @emotion/react
```
