---
name: zhoupb.com
name_en: zhoupb.com
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
  - claude-opus-4-7
  - claude-opus-4-6
  - claude-opus-4-6-thinking
  - claude-opus-4-5-thinking
  - claude-sonnet-4-6
  - claude-sonnet-4-5
  - claude-sonnet-4-5-thinking
  - gemini-3.1-pro-high
  - gemini-3.1-pro-low
  - gemini-3-pro-high
  - gemini-3-pro-low
  - gemini-3-pro-preview
  - gemini-3-pro-image
  - gemini-3-flash
  - gemini-3.1-flash-image
  - gemini-3.1-flash-image-preview
  - gemini-2.5-flash
  - gemini-2.5-flash-thinking
  - gemini-2.5-flash-lite
  - gemini-2.5-flash-image
  - gemini-2.5-flash-image-preview
protocols: [OpenAI, Anthropic, Gemini, Antigravity]
priceNote_zh: 价格视所属号池，需注册后查看
priceNote_en: Pricing depends on assigned channel pool; visible after sign-up
promo_zh: Codex 满血号池 0.6× 倍率
promo_en: Codex 满血 channel pool 0.6× rate
status: active
since: 2024-09
featured: true
billing: payg
prices_zh:
  GPT: 注册送 $5；CodeX 号池 0.6× 倍率（按量），标准号池 1.0×
  Claude: 走 Antigravity 协议，号池由管理员分配
  Gemini: 走 Antigravity 协议，号池由管理员分配
prices_en:
  GPT: $5 free credit; CodeX pool 0.6×, standard pool 1.0× (PAYG)
  Claude: via Antigravity protocol; group admin-assigned
  Gemini: via Antigravity protocol; group admin-assigned
---

## 接入方式

多协议，按调用客户端选择：

| 协议 | 端点 | 鉴权 |
|---|---|---|
| OpenAI | `/v1/chat/completions`、`/v1/models` | `Authorization: Bearer` |
| Anthropic（Claude Code 用） | `/v1/messages` | `x-api-key` + `anthropic-version: 2023-06-01` |
| Gemini | `/v1beta/...` | `x-goog-api-key` |
| Antigravity（多家族聚合） | `/antigravity/v1/models`、`/antigravity/v1beta/...` | `Authorization: Bearer` |

> 注：每个 API key 实际可用的模型 = 用户被管理员分配进哪个号池。OpenAI 号池里调 `/v1/messages` 会拿到 404；调 Claude 需要被分到 Anthropic 平台号池。

## 支持模型（按家族）

**GPT (9)**：GPT-5.5 / 5.4 / 5.4-mini / 5.3-codex / 5.3-codex-spark / 5.2 + gpt-image-1 / 1.5 / 2

**Claude (7)**：Opus 4.7 / 4.6 / 4.6-thinking / 4.5-thinking · Sonnet 4.6 / 4.5 / 4.5-thinking

**Gemini (14)**：3.1-pro-high / 3.1-pro-low · 3-pro-high / 3-pro-low / 3-pro-preview / 3-pro-image · 3-flash · 3.1-flash-image / 3.1-flash-image-preview · 2.5-flash / 2.5-flash-thinking / 2.5-flash-lite / 2.5-flash-image / 2.5-flash-image-preview

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
