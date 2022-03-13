import path from "node:path";
 import url from "node:url";
 
 const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    libraryTarget: 'module',
  },
  experiments: {
    outputModule: true,
  },
}