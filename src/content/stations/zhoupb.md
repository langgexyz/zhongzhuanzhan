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
priceNote_zh: 按官方价倍率计费，具体见站内
priceNote_en: Multiplier over official pricing; see in-site rates
promo_zh: 注册即送少量体验额度
promo_en: Free trial credits on sign-up
short_zh: 基于 sub2api 的中转站，模型清单覆盖 GPT-5 系列与 Image 系列，OpenAI 兼容协议。
short_en: A sub2api-based relay covering the GPT-5 series and Image series with an OpenAI-compatible API.
tags: [codex-cli, cursor, gpt-5, codex]
status: active
since: 2024-09
featured: true
billing: payg
prices_zh:
  GPT: 登录查看（站点未公开 API 价目）
prices_en:
  GPT: login to view (pricing not public)
---

## 接入方式

- 协议：OpenAI 兼容
- Endpoint：`/v1/chat/completions`、`/v1/models`
- 鉴权：`Authorization: Bearer <key>`

## 支持模型

文本：GPT-5.5 / 5.4 / 5.4-mini / 5.3-codex / 5.3-codex-spark / 5.2

图像：gpt-image-1 / 1.5 / 2

## 适合场景

- 需要 GPT-5 系列接口的开发者
- 需要图像生成接口的轻度使用
