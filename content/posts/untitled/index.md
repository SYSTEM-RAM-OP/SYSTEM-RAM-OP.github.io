---
id: 01M80QCN8YMTK1VWT6PT3T491H
title: "Lucky Block TACZ 1.0.2发布"
slug: luckyblocktacz1.0.2
status: draft
created_at: 2026-11-22T04:14:21Z
categories:
  - LuckyBlockTACZ
tags:
  - LuckyBlockTACZ1.0.2
---

## LuckyBlock TACZ 1.0.2

**Minecraft 1.20.1 · Forge**

### 模组简介

LuckyBlock TACZ 是一个轻量级的 TaCZ 幸运方块模组，\*\*不依赖原版 Lucky Block 模组\*\*，无需额外安装即可使用。挖开幸运方块，即可随机获得一把 TaCZ 枪械，并同时掉落与之口径完全匹配的弹药，开箱即射，不会枪弹错配。

### 增加特性

- **枪械 + 配套弹药成对掉落**：从 70+ 把 TaCZ 枪械中随机抽取一把，同时掉出对应的 60 发弹药。

- **近战与投掷物**：安装绿葡萄战术装备（`lrtactical`）后，掉落池额外包含 11 件近战武器与 5 件投掷物。

- **地表结构生成**：幸运方块以地表结构（`luckyblocktacz:lucky_block_tacz_surface`）形式自然生成于主世界。

- **地下矿脉生成**：方块同时像矿石一样生成在 Y 60–120 之间的地下。

- **箱子战利品**：约 24 种地牢、神庙、矿道等箱子有 10% 几率开出幸运方块。

- **合成配方**：9 个泥土合成 1 个幸运方块。

### 修复项

- 修复枪械与弹药\*\*无法同时掉落\*\*的问题，现在枪与配套弹药必定成对掉落。

- 修复挖掉方块后\*\*仍会掉落方块自身\*\*的问题。

- 修复箱子战利品修改器\*\*完全未生效\*\*的问题（缺少 Forge 全局战利品修改器的注册清单）。

- 修正战利品条件类型 `minecraft:alternative` → `minecraft:any_of`。

### 前置依赖

- **必须**：TaCZ（`tacz`），版本 1.2.0

- **可选**：绿葡萄战术装备（`lrtactical`）

- **可选**：Delta WT（`delta_wt`）

### 下载说明

1. 点击本 Release 下方的 `LuckyBlockTACZ-1.0.jar` 下载模组文件。

2. 将 jar 放入客户端或服务端的 `mods` 目录。

3. 确保已安装前置依赖 **TaCZ**。

4. 重启游戏，在世界中挖开幸运方块即可获得随机枪械与配套弹药。

Github:[SYSTEM-RAM-OP/LuckyBlockTACZ](https://github.com/SYSTEM-RAM-OP/LuckyBlockTACZ)

Modrinth:[https://modrinth.com/project/J1g7TRaI](https://modrinth.com/project/J1g7TRaI)

CurseForge:[https://www.curseforge.com/minecraft/mc-mods/lucky-block-tacz](https://www.curseforge.com/minecraft/mc-mods/lucky-block-tacz)
