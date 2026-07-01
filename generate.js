const fs = require('fs');
const path = require('path');

// 设置你的插件根目录
const extDir = path.join(__dirname, 'extensions');
const outputFile = path.join(__dirname, 'extensions-v0.json');
const BASE_URL = 'https://SYSTEM-RAM-OP.github.io';

// 递归获取所有 js 文件
function getAllJSFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllJSFiles(filePath));
        } else if (file.endsWith('.js')) {
            results.push(filePath);
        }
    });
    return results;
}

const jsFiles = getAllJSFiles(extDir);

const extensions = jsFiles.map(filePath => {
    const fileName = path.basename(filePath, '.js');
    const metaPath = path.join(path.dirname(filePath), `${fileName}.json`);
    let meta = { 
        name: fileName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), 
        description: '暂无描述', 
        author: '' 
    };
    
    if (fs.existsSync(metaPath)) {
        try {
            const metaData = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            meta = { ...meta, ...metaData };
        } catch (e) {
            console.warn(`⚠️ 读取 ${fileName}.json 失败，使用默认设置`);
        }
    }

    return {
        id: fileName,
        name: meta.name,
        description: meta.description,
        slug: fileName,
        image: `${BASE_URL}/icons/${fileName}.svg`,
        scratchCompatible: false,
        docs: false,
        by: meta.author ? [meta.author] : [],
        original: []
    };
});

const result = { extensions };
fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
console.log(`✅ JSON 已生成！共收录 ${extensions.length} 个扩展。`);
