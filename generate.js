const fs = require('fs');
const path = require('path');

// 设置你的插件根目录
const extDir = path.join(__dirname, 'extensions');
const outputFile = path.join(__dirname, 'extensions-v0.json');
const BASE_URL = 'https://SYSTEM-RAM-OP.github.io';

// 递归获取所有 js 文件（支持子文件夹）
function getAllJSFiles(dir, baseDir = '') {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            // 如果是文件夹，递归进去找
            results = results.concat(getAllJSFiles(filePath, path.join(baseDir, file)));
        } else if (file.endsWith('.js')) {
            // 如果是 js 文件，记录下相对于根目录的路径
            const relativePath = path.join(baseDir, file);
            results.push(relativePath);
        }
    });
    return results;
}

// 1. 扫描 extensions 目录
const filePaths = getAllJSFiles(extDir);

const extensions = filePaths.map(relativePath => {
    // 去掉 .js 后缀，把反斜杠统一换成斜杠（兼容 Windows/Linux）
    let slug = relativePath.replace(/\.js$/, '').replace(/\\/g, '/');
    const name = slug.split('/').pop().replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return {
        id: slug,
        name: name,
        description: "从我的插件站自动加载的扩展",
        slug: slug,
        image: `${BASE_URL}/icons/${slug.split('/').pop()}.svg`,
        scratchCompatible: false,
        docs: false,
        by: [],
        original: []
    };
});

// 2. 写入 JSON
const result = { extensions };
fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
console.log(`✅ JSON 已生成！共收录 ${extensions.length} 个扩展。`);
