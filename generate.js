const fs = require('fs');
const path = require('path');

// 1. 扫描 extensions 目录下的所有 .js 文件
const extDir = path.join(__dirname, 'extensions');
const files = fs.readdirSync(extDir).filter(file => file.endsWith('.js'));

const extensions = files.map(file => {
    const slug = path.basename(file, '.js');
    // 自动生成符合 TurboWarp 标准的 JSON 格式
    return {
        id: slug,
        name: slug.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // 把 my_custom_ext 变成 My Custom Ext
        description: "从我的插件站自动加载的扩展",
        slug: slug,
        image: `https://你的网址/icons/${slug}.svg`, // 你可以提前放好图标
        scratchCompatible: false,
        docs: false,
        by: [],
        original: []
    };
});

// 2. 将数据写入 extensions-v0.json
const result = { extensions };
fs.writeFileSync(
    path.join(__dirname, 'extensions-v0.json'), 
    JSON.stringify(result, null, 2)
);

console.log('✅ 扩展 JSON 文件已自动生成！共生成 ' + extensions.length + ' 个扩展。');
