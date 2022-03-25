const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const fsExtra = require("fs-extra");
const fs = require("fs");

// 入口打包文件夹
const entryDir = path.resolve(__dirname, "../packages");
// 出口文件夹
const outDir = path.resolve(__dirname, "../lib");

// vite 配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

// rollup配置
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, "index.ts"),
        name: "m-element-components",
        fileName: "m-element-components",
        formats: ["es", "umd"],
      },
      outDir,
    },
  });
};

// 单组件打包
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: "index",
        fileName: "index",
        formats: ["es", "umd"],
      },
      outDir: path.resolve(outDir, name),
    },
  });
};

// 单个组件生成package.json
const createPackageJson = (name) => {
  const fileStr = `
  {
    "name":"${name}",
    "main":"index.umd.js",
    "module":"index.es.js",
    "style":"styles.css"
  }
  `;
  // 输出
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    "utf-8"
  );
};

const buildLib = async () => {
  await buildAll();
  // 获取组件名组成的数组
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes( "index.ts");
  });
  // 循环构建
  for (const name of components) {
    await buildSingle(name);
    createPackageJson(name);
  }
};

buildLib();
