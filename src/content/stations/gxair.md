---
name: gxair.cn
name_en: gxair.cn
url: https://api.gxair.cn/
affiliate: https://api.gxair.cn/
models:
  - claude-opus-4-7
  - claude-4-7
  - claude-opus-4-6
  - claude-4-6
  - claude-opus-4-6-1m
  - claude-opus-4-6-fast
  - claude-opus-4-5-20251101
  - claude-sonnet-4-6
  - claude-sonnet-4-6-1m
  - claude-sonnet-4-5-20250929
  - claude-haiku-4-5-20251001
  - gpt-5.5
  - gpt-5.4
  - gpt-5.4-mini
  - gpt-5.3-codex
  - gpt-5.2
  - gemini-3.1-pro
  - gemini-3.1
  - gemini-3.1-flash-image-preview
  - gemini-3.1-flash-image-preview-2k
  - gemini-3.1-flash-image-preview-4k
  - gemini-3.1-flash-image-preview-1x1-2k
  - gemini-3.1-flash-image-preview-1x1-4k
  - gemini-3.1-flash-image-preview-3x4-2k
  - gemini-3.1-flash-image-preview-3x4-4k
  - gemini-3.1-flash-image-preview-4x3-2k
  - gemini-3.1-flash-image-preview-4x3-4k
  - gemini-3.1-flash-image-preview-9x16-2k
  - gemini-3.1-flash-image-preview-9x16-4k
  - gemini-3.1-flash-image-preview-16x9-2k
  - gemini-3.1-flash-image-preview-16x9-4k
  - deepseek-v4-pro
  - deepseek-v4-flash
  - grok-4.20-fast
  - grok-4.20-0309-non-reasoning
  - grok-imagine-image-lite
  - gpt-image-2
protocols: [OpenAI, Anthropic, Gemini]
priceNote_zh: 价格视所属号池，需注册后查看
priceNote_en: Pricing depends on assigned channel pool; visible after sign-up
promo_zh: codex 池 0.15× · 限时 claude / DeepSeek 0.88× 倍率
promo_en: codex pool 0.15× · 限时 claude / DeepSeek 0.88× rate
tags: [claude-code, claude, codex-cli, codex, cursor, gpt-5, gemini, deepseek, grok]
status: active
billing: payg
prices_zh:
  Claude: 满血 / 限时 claude 池含 Opus 4.6 / 4.7、Sonnet 4.6；MAX1 池含全部 Claude 4.x（含 1m / fast 变体）
  GPT: codex 池含 GPT-5.2 / 5.3-codex / 5.4-mini；codex pro / X 池含 GPT-5.4 / 5.5
  Gemini: gemini 池含 3.1-pro / 3.1
  Grok: codex 池含 grok-4.20-fast / 4.20-0309-non-reasoning / imagine-image-lite
prices_en:
  Claude: 满血 / 限时 claude pools cover Opus 4.6 / 4.7 and Sonnet 4.6; MAX1 covers all Claude 4.x incl. 1m and fast variants
  GPT: 'codex pool covers GPT-5.2 / 5.3-codex / 5.4-mini; codex pro / X covers GPT-5.4 / 5.5'
  Gemini: gemini pool covers 3.1-pro / 3.1
  Grok: codex pool covers grok-4.20-fast / 4.20-0309-non-reasoning / imagine-image-lite
---

## 接入方式

- 协议：OpenAI 兼容 + Anthropic 原生（`supported_endpoint_types: ["anthropic", "openai"]`）
- 主入口：`https://api.gxair.cn/v1`
- 鉴权：`Authorization: Bearer <key>` 或 `x-api-key: <key>`
- 公开 endpoint（站方 `/api/status` 自报）：
  - `/v1`（OpenAI 兼容 API 主入口）
  - `/ops/status`（平台状态监控页）
  - `/api-status.json`（监控状态 JSON 接口）
- 站方推荐客户端：Cherry Studio / AionUI / 流畅阅读 / CC Switch / Lobe Chat

## 支持模型（抓自 `/api/pricing` 公开接口）

共 24 个模型：

**Claude (11)**：opus-4-7 / 4-7 · opus-4-6 / 4-6 / 4-6-1m / 4-6-fast / 4-5-20251101 · sonnet-4-6 / 4-6-1m / 4-5-20250929 · haiku-4-5-20251001

**GPT (5)**：gpt-5.5 / 5.4 / 5.4-mini / 5.3-codex / 5.2

**Gemini (2)**：gemini-3.1-pro / 3.1

**DeepSeek (2)**：deepseek-v4-pro / v4-flash

**Grok (3)**：grok-4.20-fast / 4.20-0309-non-reasoning / imagine-image-lite

**图像 (1)**：gpt-image-2（按次 ¥0.25 / 请求）

## 号池分布

| 号池 | 覆盖模型 |
|---|---|
| **claude MAX1** | 全部 Claude 4.x（含独有的 4-6-1m / 4-6-fast / sonnet-4-6-1m / 4-5 / 4-5-20251101 等变体） |
| claude-MAX2 | claude-haiku-4-5 · claude-opus-4-6 / 4-7 · claude-sonnet-4-6 |
| claude-满血 / 限时 claude | Opus 4-6 / 4-7、Sonnet 4-6 |
| 自用 | GPT-5.5 / 5.4 / 5.3-codex、Claude opus-4-6 |
| codex | GPT-5.2 / 5.3-codex / 5.4-mini、grok 系列、gpt-image-2、grok-imagine-image-lite |
| codex pro / X | GPT-5.4 / 5.5、gpt-image-2 |
| gemini | gemini-3.1-pro / 3.1 |
| DeepSeek | deepseek-v4-pro / v4-flash |
| img | gpt-image-2 |

具体每个号池的倍率与分配规则由管理员设置，注册后控制台可见。

## 计费方式

new-api 标准公式 `model_ratio × group_ratio` 按 token 量计费；图像 / Grok-imagine 走按次（`model_price` 字段）。各模型缓存倍率 `cache_ratio = 0.1`（典型 new-api 默认），cache 命中享 10% 折扣。
