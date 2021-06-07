import * as webpack from "webpack";
import * as HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/public/index.html"
});

const config: webpack.Configuration = {
  // Declara o ambiente como ambiente de desenvolvimento
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // Adiciona as extensões .ts e .tsx como extensões possíveis de resolver
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // Todos os arquivos contendo '.ts' ou '.tsx' serão manipuladas
      // pelo 'awesome-typescript-loader'

      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;
