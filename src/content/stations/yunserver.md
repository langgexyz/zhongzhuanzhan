---
name: yunserver.cn
name_en: yunserver.cn
url: https://api.yunserver.cn/
affiliate: https://api.yunserver.cn/register?aff=OPjO
models:
  - claude-opus-4-7
  - claude-opus-4-6
  - Claude混合版
  - gpt-5.5
  - gpt-5.5-pro
  - gpt-5.4
  - gpt-5.4-pro
  - gpt-5.4-mini
  - gpt-5.3-codex
  - gpt-5.3-codex-spark
  - gpt-5.2
  - gpt-image-2
  - gemini-3.1-pro-preview
  - gemini-3-pro-preview
  - deepseek-v4-pro
  - deepseek-v4-flash
  - deepseek-v4-flash-h
  - deepseek-v4-flash-l
  - kimi-k2.6
  - glm5.1
  - Qwen3.6-35B-A3B
  - minimax-m2.7
protocols: [OpenAI, Anthropic, Gemini]
priceNote_zh: GPT-5.4 低至 ¥0.8 / M tokens 起
priceNote_en: GPT-5.4 from ¥0.8 / M tokens
promo_zh: GPT-5.4 低至 ¥0.8 / M tokens 起
promo_en: GPT-5.4 from ¥0.8 / M tokens
tags: [claude-code, codex-cli, cursor, claude, gpt-5, codex, gemini, deepseek, kimi]
status: active
since: 2026-04
billing: payg
prices_zh:
  GPT: ¥0.675/M 起 (5.3-codex)，5.5 ¥1.85/M
  Claude: ¥0.808/M 起 (混合版)，Opus 4.7 ¥3.06/M
  Gemini: ¥0.067 / 请求 (3-pro / 3.1)
prices_en:
  GPT: from ¥0.675/M (5.3-codex), 5.5 at ¥1.85/M
  Claude: from ¥0.808/M (mixed), Opus 4.7 ¥3.06/M
  Gemini: ¥0.067 / request (3-pro / 3.1)
---

## 接入方式

- 协议：OpenAI 兼容
- Endpoint：`https://api.yunserver.cn/v1/chat/completions`
- 鉴权：`Authorization: Bearer <key>`
- 兼容客户端：Claude Code / Cursor / Codex CLI / Cherry Studio / Lobe Chat 等任何 OpenAI 协议客户端

## 支持模型

- **GPT**：gpt-5.5 / 5.5-pro / 5.4 / 5.4-pro / 5.3-codex
- **Claude**：claude-opus-4-7 / 4-6
- **Gemini**：gemini-3.1-pro-preview / 3-pro-preview
- **DeepSeek**：deepseek-v4-pro / flash / flash-h / flash-l
- **国产**：kimi-k2.6 / glm5.1 / Qwen3.6-35B-A3B / minimax-m2.7
- **图像**：gpt-image-2

## 计费方式

人民币结算，按模型 token 用量计费（图像与 Gemini 系列按请求次数）。下表为各家族在**最低可用号池**下的输入单价（数据抓取自 `/api/pricing`，公式：`model_ratio × 2 × 6.8 × group_ratio`）：

| 模型 | 输入 ¥/M tokens | 输出 ¥/M tokens | 号池 |
|---|---:|---:|---|
| gpt-5.3-codex | 0.675 | 5.40 | gpt-default (×1.36) |
| gpt-5.4 | 1.11 | 6.66 | gpt-default |
| gpt-5.5 | 1.85 | 11.10 | gpt-default |
| gpt-5.4-pro | 2.04 | 12.24 | gpt-pro (×2.0) |
| gpt-5.5-pro | 3.81 | 22.85 | gpt-pro |
| Claude 混合版 | 0.808 | 8.08 | default (×1.2) |
| claude-opus-4-6 | 2.72 | 13.60 | claude-default (×1.0) |
| claude-opus-4-7 | 3.06 | 15.30 | claude-default |
| gemini-3-pro-preview | — | ¥0.067 / 请求 | default |
| gemini-3.1-pro-preview | — | ¥0.067 / 请求 | default |
| gpt-image-2 | — | ¥0.139 / 请求 | gpt-default |

号池倍率：`claude-default 1.0× · default 1.2× · gpt-default 1.36× · gpt-pro 2.0×`。账户默认进 `default` / `gpt-default`，需要 `gpt-pro` 等独享池要联系管理员。
