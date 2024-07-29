---
type: 'post'
title: 'JSR  package registry'
date: 2024-04-27
description: 'About Jsr package registry'
tags:
    - javascript
    - JSR
---

Node နှင့် Deno ၏ ဖန်တီးသူ Ryan ၏ javascript and typescript open source package registry ဖြစ်ပါသည်။ Npm ကိုအစားထိုးတဲ့ Package Manager မဟုတ်ဖူးလို့လည်းသူကိုယ်တိုင် ပြောထားပါသည်။

ကျနော်ဒီလပိုင်းထဲစမ်းလည်းသုံးကြည့်တယ်ကိုယ်တိိုင်လည်း package တစ်ခု publish လုပ်ကြည့်ပါသည်။ esm တစ်မျိုးထဲသာ support လုပ်ပြီး package တစ်ခုစီတိုင်းသည် runtime compatible ကိုဖော်ပြရပါတယ် Browsers, Node, Deno, Cloudflare Workers, Bun စသည်ဖြင့်ဖော်ပြရပါသည်။

[![JSR Scope](https://jsr.io/badges/@ptm)](https://jsr.io/@ptm)

Package တစ်ခုခြင်းအတွက် Jsr ကပေးသော score system ရှိပါသည်။ ကျနော်တို့ Compiler bundler တွေသုံးစရာမလိုအပ်ပဲ Typescript ကို clean code ဖြစ်အောင် Strongly type ဖြစ်အောင်ရေးပေးရပါမယ်.. ကျနော်အခုအထိ score 100 မရသေးပါဘူး.. version တစ်ခုပြောင်းမယ်ဆို github action ကနေပဲဖြစ်ဖြစ် local ကနေပဲ ဖြစ်ဖြစ် publish လုပ်တဲ့အခါ uncommited change တွေရှိတဲ့အခါမရပါဘူးမင်းတင်ခြင်ရင် `--allow-dirty` flag ကို သုံးပါတဲ့.. တော်တော်ဂွမ်းသည်။

Github Action ကနေ publish လုပ်ရင်တော့ verified ကြောင်းဖော်ပြပေးသည်။ကျနော့်တစ်ဦးထဲအမြင်ကတော့ package owner တစ်ယောက်အနေနှင့်မဟုတ်ပဲ User တစ်ယောက်အနေနှင့် Jsr ကိုသုံးသင့်တယ်လို့ယူဆပါသည်။ Node js compatible ဖြစ်တဲ့ package တွေကို npm yarn pnpm အားလုံးနှင့်သုံးလို့ရပါသည်။
