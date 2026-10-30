# 日子慢慢

Astro 暖白个人博客，配 Decap CMS 本地内容管理和 RSS。示例资料不代表你的真实经历。

## 使用
已安装依赖，双击 start-blog.cmd，保持窗口开启。访问 http://localhost:4321 。后台 http://localhost:4321/admin/ ，选择本地登录即可编辑文章和个人介绍、上传图片。后台保存后刷新首页。CMS 写入本机 Markdown/JSON 文件，无需云账号。首次重新安装运行 npm install。需要 Node 22.12 或以上。

- npm run start：同时启动网站和本地 CMS 服务（仅本机）
- npm run build：生成 dist 静态网站
- npm run preview：预览构建
- /subscribe/：订阅说明和复制地址
- /rss.xml：真实 RSS 摘要 feed，附浏览器阅读样式

## 正式上线
在构建环境设置 SITE_URL=https://你的域名，然后 npm run build；部署 dist。不要直接双击 dist/index.html。发布文章后需要重新构建，RSS 随之更新。

本地 CMS 已接入；线上登录尚未连接账号。要在线编辑，将项目推送到自己的 GitHub 仓库，修改 public/admin/config.yml 的 repo，按 Decap GitHub backend 文档配置 OAuth 认证服务的 base_url/auth_endpoint，并配置托管平台提交后自动构建。不要在配置中写密钥。也可以一直使用本地后台，编辑完成后重新部署。

官方说明：https://decapcms.org/docs/working-with-a-local-git-repository/ 和 https://decapcms.org/docs/github-backend/ 。

首页插画由 CSS 绘制，无远程图片或字体依赖。

## 验证记录
已通过 Astro 构建、页面 HTTP 检查与 RSS XML 解析（3 篇文章）。未完成浏览器视觉与后台保存端到端验证。npm 安装报告 37 项依赖漏洞（含 10 项高危），主要来自 CMS 依赖链，上线前需进一步审核和更新。
