---
name: ariesapi.com
name_en: ariesapi.com
url: https://ariesapi.com/
affiliate: https://ariesapi.com/register?aff=HULVCYCTB3Q2
models:
  - claude-opus-4-7
  - claude-opus-4-7-thinking
  - claude-opus-4-6
  - claude-opus-4-6-thinking
  - claude-sonnet-4-6
  - claude-haiku-4-5
protocols: [OpenAI, Anthropic, Gemini, Antigravity]
priceNote_zh: 价格需注册后查看
priceNote_en: Pricing visible after sign-up
promo_zh: Codex 低至 0.15× · Claude (CC-AWS 逆向) 0.2× 倍率
promo_en: Codex from 0.15× · Claude (CC-AWS reverse) 0.2× rate
status: active
billing: payg
contact: "Aries AI 交流群 QQ: 790828582"
prices_zh:
  GPT: 模型清单与单价未公开，需注册登录后控制台查看
prices_en:
  GPT: Model list and pricing not public; visible only after registration
---

## 接入方式

- 协议：仅 OpenAI 兼容 `/v1`
  - `/v1/messages`（Anthropic 原生协议）→ **404**
  - `/v1beta/...`（Gemini 原生协议）→ **404**
- 鉴权：站方在 `/v1/models` 错误回应里明示支持三种 header — `Authorization: Bearer`、`x-api-key`、`x-goog-api-key`
- 主入口：`https://ariesapi.com/v1`
- backend：**非 new-api / 非 sub2api**，自研后端（响应无 `x-new-api-version` / `x-oneapi-request-id` 等 fingerprint）

## 注册

- 邮箱白名单：仅 `@qq.com` 与 `@gmail.com`
- 注册需邮箱验证码
- 支持 promo code（`promo_code_enabled: true`）
- 邀请码功能关闭（`invitation_code_enabled: false`）
- 邀请返利已启用（`affiliate_enabled: true`）
- 站点 logo 颜色：紫色（`#4c33de`）

## 计费方式

- 按量付费
- 支付通道：**Stripe + Airwallex**（国际信用卡 / 跨境支付宝 / 跨境微信）
- 公开模型清单与价格的开关已关闭（`available_channels_enabled: false`），具体可用模型与单价需注册登录后控制台查看

## 已知协议限制

仅 `/v1` (OpenAI 兼容)，不支持 Anthropic / Gemini 原生协议。如客户端只支持 `/v1/messages`（如 Claude Code 默认端点）或 `/v1beta/...`（如 Gemini CLI 默认端点），需要在客户端侧改写到 OpenAI `/v1/chat/completions`。

## 联系

- Aries AI 交流群 QQ：**790828582**
- 站方未公开邮件 / 工单地址（站点 config 中 `contact_info` 为空）
