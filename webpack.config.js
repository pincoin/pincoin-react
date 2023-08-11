const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dotenv = require("dotenv");
const webpack = require("webpack");
dotenv.config(); // .env 파일 파싱한 결과 객체를 process.env에 저장

module.exports = {
    mode: prod ? "production" : "development",
    devtool: prod ? undefined : "source-map",

    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/",
        publicPath: "/", // react-router-dom 설정 필수
        filename: '[name].js?id=[chunkhash]', // 배포 시 캐시 상관 없이 빠른 반영
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: ["file-loader"],
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx", ".json"],
                },
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            title: process.env.SITE_TITLE,
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({ // dotenv 플러그인 정의
            'process.env': JSON.stringify(process.env),
        }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true, // react-router-dom 설정 필수
        open: true,
    },
};
