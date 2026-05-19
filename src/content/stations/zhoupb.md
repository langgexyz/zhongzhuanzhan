---
name: ZhouPB Sub2API
name_en: ZhouPB Sub2API
url: https://sub2api.zhoupb.com/
affiliate: https://sub2api.zhoupb.com/
models:
  - gpt-5.5
  - gpt-5.4
  - gpt-5.4-mini
  - gpt-5.3-codex
  - gpt-5.3-codex-spark
  - gpt-5.2
  - gpt-image-1
  - gpt-image-1.5
  - gpt-image-2
priceNote_zh: 按号池倍率计费；具体 ¥/M tokens 需管理员分配订阅后可见
priceNote_en: Priced by channel-pool multiplier; concrete ¥/M tokens visible only after admin assigns a subscription
promo_zh: 注册即送 $5 体验额度（邮箱密码即可，0 验证）
promo_en: $5 free credit on sign-up (email + password, no verification)
short_zh: 基于 sub2api 的中转站，模型清单覆盖 GPT-5 系列与 Image 系列，OpenAI 兼容协议。
short_en: A sub2api-based relay covering the GPT-5 series and Image series with an OpenAI-compatible API.
tags: [codex-cli, cursor, gpt-5, codex]
status: active
since: 2024-09
featured: true
billing: payg
prices_zh:
  GPT: 注册送 $5；CodeX 号池 0.6× 倍率，标准号池 1.0×
prices_en:
  GPT: $5 free credit; CodeX pool 0.6×, standard pool 1.0×
---

## 接入方式

- 协议：OpenAI 兼容
- Endpoint：`/v1/chat/completions`、`/v1/models`
- 鉴权：`Authorization: Bearer <key>`

## 支持模型

文本：GPT-5.5 / 5.4 / 5.4-mini / 5.3-codex / 5.3-codex-spark / 5.2

图像：gpt-image-1 / 1.5 / 2

## 计费 / 号池

- **新用户注册** 即送 $5 体验额度（邮箱 + 密码，无验证）
- 公开可见的号池组（groups）：
  - `Xiao Mi Open AI` — 标准号池，倍率 **1.0×**
  - `CodeX - 满血号池` — Codex 订阅号池，倍率 **0.6×**（按量付费，不限场景，不支持生图）
- 站方关闭了模型价目公开 API（`available_channels_enabled = false`），具体 ¥/M tokens 需联系管理员开通订阅后才能在控制台看到。

## 适合场景

- 需要 GPT-5 系列接口的开发者
- Codex 用户（享 0.6× 倍率优惠）
- 需要图像生成接口的轻度使用
