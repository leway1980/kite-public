import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';

// ─── Stories synthesized from 255 RSS articles fetched 2026-04-17 ────────────

const aiNewsStories: Story[] = [
	{
		id: 'sai-news-001',
		cluster_number: 1,
		unique_domains: 5,
		number_of_titles: 6,
		category: 'AI 動態',
		title: 'Anthropic 發表 Claude Opus 4.7：旗艦升級背後是 Mythos 資安彩排',
		short_summary:
			'Anthropic 於 4 月 16 日正式推出 Claude Opus 4.7，強化進階軟體工程與視覺分析能力，但更值得關注的是：這是 Anthropic 首次在商用模型上部署新一代資安偵測機制，外界普遍解讀為更強大的 Mythos 模型上市前的治理壓力測試。白宮同期傳出計畫允許聯邦機構使用 Mythos，顯示 AI 模型的資安可控性已成為政府採購的核心考量。',
		emoji: '🔐',
		did_you_know:
			'根據 Anthropic 官方說明，Opus 4.7 的資安能力刻意設計在 Mythos 之下，用意是讓研究者和企業先在較低風險環境中測試新治理框架的實際效果。',
		talking_points: [
			'Opus 4.7 在進階軟體工程、複雜編碼任務和高解析視覺理解上，均較前代 Opus 4.6 有明顯提升，尤其改善了過去需高度人工監督的複雜程式任務。',
			'首度部署新一代資安偵測機制，包括提示注入防護與異常行為監控，是 Anthropic 在「高能力模型如何安全商業化」這條路上的公開壓力測試。',
			'Anthropic 資安旗艦模型 Mythos Preview 已展現強大跨系統分析能力，引起美、英、加三國金融監管機構高度警戒，憂心被攻擊方搶先利用。',
			'彭博報導白宮正積極協調，讓美國聯邦機構可合法使用 Mythos，顯示模型治理已成為國家安全政策議題。',
			'OpenAI 同期推出 GPT-5.4-Cyber 資安特化模型，兩家公司在「開放程度」與「釋出邊界」上出現明顯策略分歧。',
		],
		quote: '這款模型雖然不如 Mythos Preview 那麼強大，卻是公司用來測試新一代資安防護機制與模型治理方式的第一個公開版本。',
		quote_author: 'TechOrange 科技報橘',
		quote_attribution: 'TechOrange，2026-04-17',
		quote_source_url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
		quote_source_domain: 'techorange.com',
		perspectives: [
			{
				text: '台灣媒體（TechOrange、INSIDE）一致聚焦在 Opus 4.7 作為「Mythos 資安彩排」的戰略意義，認為模型可控性比純能力提升更值得關注；iThome 則強調資安能力刻意低於 Mythos，反映 Anthropic 謹慎的商業化路線。',
				sources: [
					{ name: 'TechOrange 科技報橘', url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/' },
					{ name: 'INSIDE', url: 'https://www.inside.com.tw/article/41088-claude-opus-4-7' },
				],
			},
			{
				text: 'The Verge 側重競爭格局：Anthropic 在 Mythos buzz 之際推出 Opus 4.7，顯示公司刻意採分層發布策略——先讓市場習慣有監控的強模型，再推更強的版本；Latent.Space 分析師則評為「在每個維度上都比 4.6 精進一步」的穩健升級。',
				sources: [
					{ name: 'AI | The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence/913184/anthropic-claude-opus-4-7-cybersecurity' },
					{ name: 'Latent.Space', url: 'https://www.latent.space/p/ainews-anthropic-claude-opus-47-literally' },
				],
			},
		],
		timeline: [
			{ date: '2026-04-11', date_iso: '2026-04-11', content: 'Anthropic 發布 Mythos Preview，僅對受信任研究夥伴開放，強大能力引起多國監管機構警戒。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: 'OpenAI 推出 GPT-5.4-Cyber 資安特化模型，兩家公司資安模型策略出現明顯分歧。' },
			{ date: '2026-04-16', date_iso: '2026-04-16', content: 'Anthropic 正式發表 Claude Opus 4.7，強調資安偵測機制為核心新特色。' },
			{ date: '2026-04-17', date_iso: '2026-04-17', content: '彭博報導白宮擬允許聯邦機構使用 Mythos；iThome 資安週報指出美英加三國監管機構已進入警戒狀態。' },
		],
		primary_image: {
			url: 'https://placehold.co/600x400?text=Claude+Opus+4.7',
			caption: 'Anthropic Claude Opus 4.7 發布，資安治理成核心議題',
			credit: 'Anthropic',
		},
		articles: [
			{
				title: 'Anthropic 發表新 AI 模型 Claude Opus 4.7，攻向「可控 AI」新戰場',
				link: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
				domain: 'techorange.com',
				date: '2026-04-17',
			},
			{
				title: 'Anthropic Opus 4.7 登場！既是旗艦升級，也是 Mythos 上市前的資安彩排',
				link: 'https://www.inside.com.tw/article/41088-claude-opus-4-7',
				domain: 'inside.com.tw',
				date: '2026-04-17',
			},
			{
				title: 'Anthropic releases a new Opus model amid Mythos Preview buzz',
				link: 'https://www.theverge.com/ai-artificial-intelligence/913184/anthropic-claude-opus-4-7-cybersecurity',
				domain: 'theverge.com',
				date: '2026-04-16',
			},
			{
				title: '聚焦進階軟體工程技術，Anthropic 釋出新模型 Claude Opus 4.7',
				link: 'https://infosecu.technews.tw/2026/04/17/anthropic-introduces-claude-opus-4-7/',
				domain: 'technews.tw',
				date: '2026-04-17',
			},
			{
				title: '[AINews] Anthropic Claude Opus 4.7 - literally one step better than 4.6 in every dimension',
				link: 'https://www.latent.space/p/ainews-anthropic-claude-opus-47-literally',
				domain: 'latent.space',
				date: '2026-04-17',
			},
			{
				title: 'AI 資安攻防升級：OpenAI 推 GPT-5.4-Cyber，釋出策略與 Anthropic 出現分歧',
				link: 'https://techorange.com/2026/04/15/openai-ships-gpt-5-4-cyber-mythos/',
				domain: 'techorange.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'techorange.com' },
			{ name: 'inside.com.tw' },
			{ name: 'theverge.com' },
			{ name: 'technews.tw' },
			{ name: 'latent.space' },
		],
	},
	{
		id: 'sai-news-002',
		cluster_number: 2,
		unique_domains: 4,
		number_of_titles: 5,
		category: 'AI 動態',
		title: 'OpenAI Codex 全面升級：背景電腦操控、記憶整合，直接挑戰 Claude Code',
		short_summary:
			'OpenAI 於 4 月 16 日宣布 Codex 重大更新，讓這款 AI 程式代理可在背景模式下操控電腦、上網搜尋、生成圖片，並新增記憶與外掛整合功能。The Verge 直言這是對 Anthropic Claude Code 的「直接挑戰」。Agents SDK 同步新增原生沙箱執行功能，讓開發者能更安全地部署長時間運作的 AI 代理。兩家公司的編碼 AI 代理競賽已進入正面交鋒階段。',
		emoji: '💻',
		did_you_know:
			'OpenAI 同日宣布 Cloudflare 整合 GPT-5.4 和 Codex 進 Agent Cloud，企業客戶可在 Cloudflare 基礎設施直接部署 AI 代理，不需自建運算環境。',
		talking_points: [
			'Codex macOS/Windows 版新增「電腦工具使用」（Computer Use）功能，可理解螢幕內容、輸入文字、上網瀏覽，從「寫程式工具」升級為「能替你操作電腦的代理」。',
			'新增跨工作階段記憶功能，Codex 可記住開發者偏好與專案脈絡，減少重複說明成本。',
			'外掛整合功能讓 Codex 可接入 Jira、GitHub、Figma 等開發工具，打通開發生命週期各環節。',
			'Agents SDK 升級加入原生沙箱執行（Native Sandbox Execution），讓長時間自主執行的 AI 代理具備更嚴格的權限隔離。',
			'OpenAI 與 Cloudflare 的 Agent Cloud 整合，讓企業可在雲端基礎設施直接使用 GPT-5.4 和 Codex，降低自建部署門檻。',
		],
		perspectives: [
			{
				text: 'The Verge 明確定性此次更新是「直接瞄準 Claude Code」，顯示 OpenAI 已將 Anthropic 視為開發者生態的主要競爭對手——而非泛泛 AI 競爭，兩家公司的 agentic coding 之戰正式開打。',
				sources: [
					{ name: 'AI | The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence/913034/openai-codex-updates-use-macos' },
				],
			},
			{
				text: 'TechNews 與 OpenAI 官方強調 Computer Use 是此次最重要突破，讓 Codex 的應用範疇大幅擴大；Agents SDK 背景沙箱執行代表企業部署 AI 代理的信任門檻正在降低，但也意味著更多的自主行為需要更嚴格的監控框架。',
				sources: [
					{ name: 'OpenAI News', url: 'https://openai.com/index/codex-for-almost-everything' },
					{ name: 'TechNews 科技新報', url: 'https://technews.tw/2026/04/17/openai-releases-a-major-update-to-codex/' },
				],
			},
		],
		timeline: [
			{ date: '2026-04-13', date_iso: '2026-04-13', content: 'OpenAI 與 Cloudflare 宣布整合，企業可在 Agent Cloud 使用 GPT-5.4 和 Codex。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: 'OpenAI 發布 Agents SDK 升級版，加入原生沙箱執行機制。' },
			{ date: '2026-04-16', date_iso: '2026-04-16', content: 'OpenAI 宣布 Codex 重大更新，The Verge 報導稱這是對 Claude Code 的直接挑戰。' },
		],
		articles: [
			{
				title: "OpenAI's big Codex update is a direct shot at Claude Code",
				link: 'https://www.theverge.com/ai-artificial-intelligence/913034/openai-codex-updates-use-macos',
				domain: 'theverge.com',
				date: '2026-04-16',
			},
			{
				title: 'Codex for (almost) everything',
				link: 'https://openai.com/index/codex-for-almost-everything',
				domain: 'openai.com',
				date: '2026-04-16',
			},
			{
				title: 'OpenAI Codex 重大更新：Agent 背景運作、內建瀏覽器、整合外掛',
				link: 'https://technews.tw/2026/04/17/openai-releases-a-major-update-to-codex/',
				domain: 'technews.tw',
				date: '2026-04-17',
			},
			{
				title: 'OpenAI Codex macOS版App加入電腦工具使用功能，能上網、打字、生成圖片',
				link: 'https://www.ithome.com.tw/news/175135',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
			{
				title: 'The next evolution of the Agents SDK',
				link: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
				domain: 'openai.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'theverge.com' },
			{ name: 'openai.com' },
			{ name: 'technews.tw' },
			{ name: 'ithome.com.tw' },
		],
	},
	{
		id: 'sai-news-003',
		cluster_number: 3,
		unique_domains: 5,
		number_of_titles: 8,
		category: 'AI 動態',
		title: 'Google Gemini 全線擴張：AI Mode 進 Chrome、語音升級、機器人推理強化',
		short_summary:
			'Google 本週密集發布多項 Gemini 相關更新：AI Mode 正式整合進 Chrome 瀏覽器、Gemini 3.1 Flash TTS 語音模型推出細粒度音調控制、Gemini Robotics-ER 1.6 強化機器人空間推理能力，Gemini 應用程式也推出 Mac 原生版本並支援從 Google Photos 生成個人化圖片。各方解讀 Google 正全面打通 Gemini 的應用版圖，從瀏覽器到機器人一次佈局。',
		emoji: '🌐',
		did_you_know:
			'Gemini Robotics-ER 1.6 名稱中 ER 代表「Embodied Reasoning（實體推理）」。這款模型讓機器人能自行判斷「任務是否已完成」，不需等待人工確認——解決過去工業機器人部署的主要痛點之一。',
		talking_points: [
			'AI Mode 進入 Chrome 後，用戶可在瀏覽網頁時即時提問、對當前頁面追問，並支援點擊來源連結側邊展開，不需切換分頁。',
			'Gemini 3.1 Flash TTS 推出細粒度音調標籤（Audio Tags），讓開發者可精確控制 AI 語音的情緒、速度與語氣，適用於有聲書、教育音頻等場景。',
			'Gemini Robotics-ER 1.6 改善空間推理與多視角理解，讓機器人能指認目標物體、判斷相對位置，並自主決定任務何時完成。',
			'Gemini Mac App 提供 Option+Space 浮動視窗，可分享當前視窗內容讓 Gemini 直接分析，與微軟 Copilot 在桌面端展開競爭。',
			'Google Personal Intelligence 更新：Gemini 可讀取 Google Photos 並用 Nano Banana 2 圖像模型生成個人化圖片，但也引發個資邊界疑慮。',
		],
		perspectives: [
			{
				text: 'iThome 分析 AI Mode 進 Chrome 是 Google 將 AI 從「搜尋結果頁」推向「瀏覽器核心場景」的戰略轉移，直接迎戰微軟在 Edge 中整合 Copilot 的策略；Google 官方 Blog 則強調為用戶帶來更流暢的探索體驗。',
				sources: [
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175137' },
					{ name: 'AI (Google Blog)', url: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/' },
				],
			},
			{
				text: 'The Verge 聚焦 Gemini 個人化圖片的隱私疑慮：Gemini 現在可以讀取用戶私人照片來生成圖片，個人資料的使用邊界正在擴大，Google 如何處理這類資料成為關注焦點；TechOrange 從機器人視角解讀 Gemini Robotics-ER 1.6 讓機器人從「服從指令」進化到「情境感知決策」。',
				sources: [
					{ name: 'AI | The Verge', url: 'https://www.theverge.com/tech/913202/gemini-personal-intelligence-images-nano-banana' },
					{ name: 'TechOrange 科技報橘', url: 'https://techorange.com/2026/04/16/google-deepmind-gemini-robotics-er-1-6/' },
				],
			},
		],
		timeline: [
			{ date: '2026-04-13', date_iso: '2026-04-13', content: 'Google DeepMind 發表 Gemini Robotics-ER 1.6，強化機器人實體推理能力。' },
			{ date: '2026-04-14', date_iso: '2026-04-14', content: 'Google 發布 Chrome Skills，讓用戶可把常用 AI 提示存成一鍵工具。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: 'Google 發表 Gemini 3.1 Flash TTS 語音模型並推出 Gemini Mac App。' },
			{ date: '2026-04-16', date_iso: '2026-04-16', content: 'AI Mode 整合進 Chrome；Gemini 支援從 Google Photos 生成個人化圖片。' },
		],
		articles: [
			{
				title: 'A new way to explore the web with AI Mode in Chrome',
				link: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/',
				domain: 'blog.google',
				date: '2026-04-16',
			},
			{
				title: "Google's AI Mode update lets you open links without leaving the page",
				link: 'https://www.theverge.com/tech/913202/gemini-personal-intelligence-images-nano-banana',
				domain: 'theverge.com',
				date: '2026-04-16',
			},
			{
				title: 'Gemini 3.1 Flash TTS: the next generation of expressive AI speech',
				link: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
				domain: 'deepmind.google',
				date: '2026-04-15',
			},
			{
				title: 'AI Mode進駐Chrome，瀏覽器AI競爭升溫',
				link: 'https://www.ithome.com.tw/news/175137',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
			{
				title: '讓機器人自己判斷任務是否完成：Google 發表 Gemini Robotics-ER 1.6',
				link: 'https://techorange.com/2026/04/16/google-deepmind-gemini-robotics-er-1-6/',
				domain: 'techorange.com',
				date: '2026-04-16',
			},
			{
				title: 'Google launches a Gemini AI app on Mac',
				link: 'https://www.theverge.com/tech/912638/google-gemini-mac-app',
				domain: 'theverge.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'blog.google' },
			{ name: 'theverge.com' },
			{ name: 'deepmind.google' },
			{ name: 'ithome.com.tw' },
			{ name: 'techorange.com' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: 'sai-edu-001',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '均一董事長回母校演講：AI 時代高中生現在就能做的 4 件事',
		short_summary:
			'均一平台教育基金會董事長在母校師大附中對高一新生演講，以「AI 時代下的附中人」為題，分享一個對社會的觀察、一組使用 AI 的思考框架，以及深夜在醫院被撞開的核心問題。他提出高中生「現在就能做」的 4 件實戰建議，強調 AI 時代的競爭優勢不在於會用工具，而在於清楚知道「為什麼要用」與「能判斷輸出品質」的後設認知能力。這是近期台灣原生、繁體中文的最具深度 AI 教育思考文章。',
		emoji: '🎯',
		did_you_know:
			'均一平台目前服務超過 200 萬名學習者，是台灣規模最大的非營利數位學習平台。基金會董事長這篇演講稿在社群引發廣泛討論，被教師族群稱為「說清楚了 AI 時代教育到底該做什麼」的代表性論述。',
		talking_points: [
			'演講者核心觀察：AI 工具會讓「執行力」的門檻大幅降低，但「判斷力」——能否判斷 AI 輸出的品質好壞——將成為未來最重要的差異化能力。',
			'他提出的 4 件高中生現在就能做的事，圍繞「大量輸入」（廣泛閱讀與體驗）、「刻意輸出」（持續練習表達）、「後設反思」（思考自己的思考過程）與「AI 協作實驗」（用 AI 做真實專案）四個維度。',
			'演講中提到一個台大雲林分院深夜被撞開的問題：「你是否曾經為了一件事熬夜，不是因為被要求，而是因為你真的想知道答案？」——這個問題指向 AI 時代最難被取代的「內在動機」。',
			'他警告：若學生只學「怎麼 prompt」，很快就會被下一代工具淘汰；真正要培養的是「在拿到 AI 答案之後，你有沒有能力繼續追問、質疑、驗證」的習慣。',
		],
		quote: 'AI 時代最危險的事不是不會用 AI，而是用了 AI 之後失去了自己的判斷力。',
		quote_author: '均一平台教育基金會董事長',
		quote_attribution: '演講摘要，均一官方部落格，2026-04-14',
		quote_source_url: 'https://official.junyiacademy.org/blog/senior_ai_class/',
		quote_source_domain: 'official.junyiacademy.org',
		perspectives: [
			{
				text: '教育思想家視角：這篇演講文本代表台灣本土教育界對 AI 衝擊的深度回應——不是「禁用 AI」也不是「全面擁抱 AI」，而是提出「AI 時代的人應該修煉什麼能力」這個更根本的問題，值得台灣教師在設計課程目標時參考。',
				sources: [
					{ name: '均一平台教育基金會 JunyiAcademy', url: 'https://official.junyiacademy.org/blog/senior_ai_class/' },
				],
			},
		],
		articles: [
			{
				title: 'AI 時代，高中生現在就能做的 4 件事 —— 均一董事長呂冠緯給附中人的實戰建議',
				link: 'https://official.junyiacademy.org/blog/senior_ai_class/',
				domain: 'official.junyiacademy.org',
				date: '2026-04-14',
			},
		],
		domains: [
			{ name: 'official.junyiacademy.org' },
		],
	},
	{
		id: 'sai-edu-002',
		cluster_number: 2,
		unique_domains: 2,
		number_of_titles: 3,
		category: 'AI × 教育',
		title: 'MIT：AI 時代人文學科不可或缺，EdSurge 指 EdTech 需貼近學生真實處境',
		short_summary:
			'MIT 人文、藝術與社會科學學院（SHASS）迎來 75 週年，院長 Agustín Rayo 直言 AI 重塑高等教育，但批判性思維、倫理推理與跨領域溝通能力的重要性反而更高。與此同時，EdSurge 研究指出真正有效的 EdTech 共同特徵是「貼近學生真實處境」，而非只拚功能多寡。兩則訊息共同指向同一個問題：有效的 AI 教育工具，必須先理解學生是誰，而非只關注 AI 技術有多強。',
		emoji: '📖',
		did_you_know:
			'MIT SHASS 是 MIT 歷史上建立的第一個學院，成立於 1950 年，最初設置的原因正是工程師創辦人認為技術人才必須同時具備人文素養——這個初衷在 AI 時代顯得格外切題。',
		talking_points: [
			'MIT SHASS 院長表示，AI 時代讓「問出對的問題」比「執行答案」更重要，這正是人文社會科學訓練的核心能力。',
			'他指出 AI 擅長生成內容，但判斷這些內容是否符合倫理、是否有偏見、是否值得信任，仍需要人文學科的訓練框架，因此人文教育不是被 AI 替代，而是更不可缺。',
			'EdSurge 研究顯示，即使是最好的 EdTech 工具，若未能貼近學生真實使用情境，終究無法發揮效果——導入 AI 工具前，先問「這符合我學生的需求嗎」。',
			'兩則訊息都指向同一結論：AI 工具的效用，最終取決於使用者（學生與教師）的主動性與判斷力，而非工具本身的強大程度。',
		],
		quote: 'The question is not whether AI will change higher education — it will. The question is whether we shape that change or just react to it.',
		quote_author: 'MIT SHASS 院長',
		quote_attribution: 'MIT News 訪問，2026-04-14',
		quote_source_url: 'https://news.mit.edu/2026/qa-mit-shass-and-future-of-education-age-ai-0414',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: 'MIT 的學術立場：AI 工具本身的設計、使用與詮釋，都需要具備哲學、社會學與倫理訓練的人才把關，因此人文學科是 AI 時代的「品質閘門」，而非過時的殘留。',
				sources: [
					{ name: 'MIT News - Artificial intelligence', url: 'https://news.mit.edu/2026/qa-mit-shass-and-future-of-education-age-ai-0414' },
				],
			},
			{
				text: 'EdSurge 研究者的現場提醒：技術再強的 EdTech 產品，若未能貼近學生的真實使用情境，終究無法發揮效果。這是對所有 AI 教育工具導入計畫的共同挑戰：先理解學生，再選工具。',
				sources: [
					{ name: 'EdSurge Articles', url: 'https://www.edsurge.com/news/2026-04-15-what-makes-edtech-work-for-students-infographic' },
				],
			},
		],
		articles: [
			{
				title: 'Q&A: MIT SHASS and the future of education in the age of AI',
				link: 'https://news.mit.edu/2026/qa-mit-shass-and-future-of-education-age-ai-0414',
				domain: 'news.mit.edu',
				date: '2026-04-14',
			},
			{
				title: 'What Makes Edtech Work for Students [Infographic]',
				link: 'https://www.edsurge.com/news/2026-04-15-what-makes-edtech-work-for-students-infographic',
				domain: 'edsurge.com',
				date: '2026-04-15',
			},
			{
				title: "Teaching Showed Me Education Isn't the Great Equalizer",
				link: 'https://www.edsurge.com/news/2026-04-15-teaching-showed-me-education-isn-t-the-great-equalizer',
				domain: 'edsurge.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
			{ name: 'edsurge.com' },
		],
	},
	{
		id: 'sai-edu-003',
		cluster_number: 3,
		unique_domains: 2,
		number_of_titles: 3,
		category: 'AI × 教育',
		title: '美國數位無障礙新法截止：多數學校未達標，教育科技平等問題再浮現',
		short_summary:
			'美國數位無障礙更新條款於本週正式生效，要求學校和教育科技廠商的數位內容必須符合 WCAG 2.1 AA 標準，但 EdSurge 調查指出多數學校尚未達標。同期，AI 醫療診斷研究顯示現成 LLM 在早期診斷的錯誤率逾 80%，印證「AI 工具的適用邊界」是一個跨領域共同挑戰。兩則訊息共同指向：AI 工具的導入，能縮小服務落差，還是只會讓原本有資源的人如虎添翼？',
		emoji: '⚖️',
		did_you_know:
			'WCAG（Web Content Accessibility Guidelines）AA 等級要求包含足夠的顏色對比、鍵盤可操作性、螢幕閱讀器相容等。許多主流 EdTech 平台至今仍未完全達到這個基準，而這正是這次截止日讓業界緊張的原因。',
		talking_points: [
			'美國新數位無障礙規範要求所有接受聯邦資助的學校，其數位工具和線上內容必須符合 WCAG 2.1 AA 標準，涵蓋視覺、聽覺、認知與運動功能障礙的學生。',
			'EdSurge 調查指出多數學校和 EdTech 廠商尚未準備好，小型地方學區受衝擊尤大，可能面臨法規違規風險。',
			'美國醫學期刊 JAMA Network Open 同期發布研究，指出現成 LLM 在臨床早期鑑別診斷階段的錯誤率普遍超過 80%，顯示 AI 工具的「適用邊界」是各領域共同面對的課題。',
			'這對 AI 教育工具導入提出尖銳問題：若連基本數位無障礙都做不到，AI 個人化學習工具能真正惠及所有學生嗎？',
		],
		perspectives: [
			{
				text: 'EdSurge 的政策角度：數位無障礙截止日是一個遲來的警鐘，提醒學校和廠商科技不能只服務「主流」學生，必須從設計源頭就考慮多元需求。AI 工具的設計與導入若不納入無障礙考量，將系統性排除最需要協助的學生群體。',
				sources: [
					{ name: 'EdSurge Articles', url: 'https://www.edsurge.com/news/2026-04-16-the-digital-accessibility-deadline-is-here-schools-aren-t-ready' },
				],
			},
			{
				text: 'iThome 從 AI 工具信任度角度切入：JAMA 研究顯示 LLM 在醫療診斷的錯誤率超過 80%，這個數字提醒教育工作者：AI 工具的「能力評估」不能只看廠商宣稱，需要獨立的使用情境驗證——這個邏輯同樣適用於教育場域的 AI 導入決策。',
				sources: [
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175147' },
				],
			},
		],
		articles: [
			{
				title: "The Digital Accessibility Deadline Is Here. Schools Aren't Ready.",
				link: 'https://www.edsurge.com/news/2026-04-16-the-digital-accessibility-deadline-is-here-schools-aren-t-ready',
				domain: 'edsurge.com',
				date: '2026-04-16',
			},
			{
				title: "Teaching Showed Me Education Isn't the Great Equalizer",
				link: 'https://www.edsurge.com/news/2026-04-15-teaching-showed-me-education-isn-t-the-great-equalizer',
				domain: 'edsurge.com',
				date: '2026-04-15',
			},
			{
				title: '美國醫學期刊研究顯示AI早期診斷錯誤率逾80%',
				link: 'https://www.ithome.com.tw/news/175147',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'edsurge.com' },
			{ name: 'ithome.com.tw' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'sai-classroom-001',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: 'NotebookLM 5 個改變教學備課方式的功能：Podcast 生成到跨文件追問',
		short_summary:
			'Class Tech Tips 的 EasyEdTech Podcast 第 366 集深度拆解了 5 個 NotebookLM 功能，這些功能在實際課堂備課與學生學習場景中最具改變力。從自動生成 Podcast 音頻摘要、跨多份文件同時追問，到建立個人知識庫讓學生「問自己的資料」，這些功能讓 Google 的 NotebookLM 成為目前對教師最友善、最有備課效率的 AI 工具之一。對於希望用 Google 工具提升教學準備效率的老師，這是一份值得參考的功能指南。',
		emoji: '🎧',
		did_you_know:
			'NotebookLM 的 Podcast 生成功能（Audio Overview）可以把你上傳的多份 PDF、Google Docs 或網頁連結，自動生成一段自然對話式的音頻摘要。這個功能在美國教師社群中被廣泛用來「快速消化研究報告」，從 30 頁的報告中在 10 分鐘內抓住要點。',
		talking_points: [
			'功能一：Audio Overview（音頻概覽）——把上傳的多份文件自動生成一段兩人對話式 Podcast，適合通勤途中消化長篇研究報告或教科書章節。',
			'功能二：跨文件問答——NotebookLM 可同時讀取多份來源並整合回答，教師可上傳整學期教材後，詢問「第三單元和第六單元有哪些核心概念相互呼應」。',
			'功能三：學生專屬知識庫——讓學生上傳自己的筆記與資料後，NotebookLM 只根據這些來源回答問題，避免 AI 生成與課程無關的回應。',
			'功能四：引用來源追蹤——每個 AI 回應都附有原文出處標記，讓師生能快速確認 AI 的根據，培養資訊查核習慣。',
			'功能五：客製化指南生成——可根據上傳內容自動生成學習指南、測驗題或重點摘要，節省教師重複性備課時間。',
		],
		perspectives: [
			{
				text: 'Class Tech Tips 的實務觀察：NotebookLM 最大的教學優勢在於「封閉式知識庫」——讓 AI 只根據教師指定的資料回答，有效避免 AI 幻覺問題，也讓課堂 AI 使用更易於管控。這對擔心學生用 AI 走捷徑的老師來說，是一個相對安全的切入點。',
				sources: [
					{ name: 'Class Tech Tips', url: 'https://classtechtips.com/2026/04/14/notebooklm-for-teachers-366/' },
				],
			},
		],
		articles: [
			{
				title: '5 NotebookLM Features That Might Change How You Teach - EasyEdTech Podcast 366',
				link: 'https://classtechtips.com/2026/04/14/notebooklm-for-teachers-366/',
				domain: 'classtechtips.com',
				date: '2026-04-14',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
	{
		id: 'sai-classroom-002',
		cluster_number: 2,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 教學實戰',
		title: '用 AI 整理 Google Drive 教材：具體 Prompt 步驟與分類系統建議',
		short_summary:
			'Class Tech Tips 發布了一篇實作指南，說明教師如何用 AI 工具整理長期積累的混亂 Google Drive 教材，包含檔案命名規則設計、按課程標準自動分類的 Prompt 寫法，以及建立可持續維護的資料夾結構。同期，AI + Education = Simplified 的訪談節目也探討了大學教師如何應對 AI 衝擊，指出「強制要學生用 AI」比「禁用 AI」更容易引發反彈，真正的挑戰是設計出讓 AI 使用有意義的任務架構。兩篇文章都指向同一個實務問題：AI 工具導入的第一步，往往不是技術問題，而是組織問題。',
		emoji: '📂',
		did_you_know:
			'許多教師反映 Google Drive 積累 5-10 年後，資料夾結構已難以維護，找舊教材花費的時間甚至比重新製作還長。AI 工具在這個「整理舊有資源」的場景，往往比在「創建新內容」的場景中能帶來更立竿見影的效率提升。',
		talking_points: [
			'Class Tech Tips 建議的 AI 整理流程：先讓 AI 分析現有檔案列表，提出命名規則草案（如「[年級]-[單元]-[資源類型]-[日期]」）；再用 AI 協助批量產出重新命名建議清單。',
			'按課程標準分類的 Prompt 範例：「以下是我的高中物理教材清單，請按照台灣 108 課綱的核心素養面向，幫我建議一個合理的分類架構。」——這種方式可快速生成符合在地課程脈絡的分類建議。',
			'AI + Education = Simplified 的訪談指出，大多數抱怨大學強迫使用 AI 的學生，真正的不滿是「任務設計讓 AI 使用變得沒有意義」——如果學生用 AI 只是在填空，他們感受不到學習。',
			'訪談建議：不要問「要不要讓學生用 AI」，而是問「我能設計一個任務，讓使用 AI 需要學生真正思考？」——這個問題架構更適合教師在備課時使用。',
		],
		perspectives: [
			{
				text: 'Class Tech Tips 的效率視角：AI 整理教材資源的價值在於把教師從「低價值重複勞動」中解放出來，讓更多時間花在課堂設計本身。對於 Google Workspace 深度使用者而言，這是一個低門檻、高回報的 AI 起點。',
				sources: [
					{ name: 'Class Tech Tips', url: 'https://classtechtips.com/2026/04/15/organize-teaching-resources/' },
				],
			},
			{
				text: 'AI + Education = Simplified 的課程設計視角：AI 工具是否有教育價值，取決於任務設計是否要求學生真正運用認知。單純用 AI 完成填空式任務不等於學習——這是教師在 AI 時代需要重新設計作業的核心理由。',
				sources: [
					{ name: 'AI + Education = Simplified', url: 'https://aiedusimplified.substack.com/p/most-people-complain-about-universities' },
				],
			},
		],
		articles: [
			{
				title: 'How to Use AI to Organize Teaching Resources',
				link: 'https://classtechtips.com/2026/04/15/organize-teaching-resources/',
				domain: 'classtechtips.com',
				date: '2026-04-15',
			},
			{
				title: '"...most people complain about universities forcing AI on people, but that\'s generally not the case."',
				link: 'https://aiedusimplified.substack.com/p/most-people-complain-about-universities',
				domain: 'aiedusimplified.substack.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
			{ name: 'aiedusimplified.substack.com' },
		],
	},
	{
		id: 'sai-classroom-003',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: '「Claim Auditor」AI 工具：讓學生練習查核「研究支持的」說法是否真的有根據',
		short_summary:
			'Larry Ferlazzo 在部落格介紹了一款名為 Claim Auditor 的 AI 工具，讓學生輸入任何「據研究顯示」的說法，工具會自動搜尋同儕審查論文來驗證該主張的可信度。這個工具在「資訊素養」與「批判性思維」教學場景中特別有價值——它把 AI 的搜尋能力用於「質疑 AI 生成的說法」本身，形成一個有趣的教學遞迴：用 AI 練習不盲信 AI。這對科學課與思辨課都是高度適用的課堂工具。',
		emoji: '🔍',
		did_you_know:
			'Claim Auditor 的設計邏輯與台灣近年推動的「媒體素養」課程高度吻合——學生不只要知道怎麼查資料，更要養成「主動質疑來源可信度」的習慣。科學課在這方面有天然的教學優勢：用「假設驗證」的思維框架來檢驗 AI 輸出，本來就是科學方法訓練的延伸。',
		talking_points: [
			'Claim Auditor 的使用方式：在對話框輸入任何聲稱有研究支持的說法（例如「班級人數越少，學生表現越好」），工具會搜尋同儕審查文獻並給出支持程度評估。',
			'Ferlazzo 測試「班級規模越小、學生成績越好」這個常見說法，Claim Auditor 的回應顯示：研究支持確實存在，但效果量比一般認知中更小，且有重要條件限制——這正是批判性閱讀應該注意的細節。',
			'這個工具的教學意涵不只是「查證」，更是訓練學生理解「研究支持」的強弱差異：一篇小樣本研究和百篇大型 meta-analysis 的「支持強度」截然不同。',
			'對於自然科學教師，這個工具可以用於讓學生查核課本上的「研究顯示」說法，或者驗證網路上常見的「科學謠言」，兼顧課程內容與資訊素養。',
		],
		perspectives: [
			{
				text: 'Larry Ferlazzo 的教師實踐視角：這個工具的最大價值不在於「給出正確答案」，而在於「展示查證過程」——讓學生看到如何從主張到文獻的完整查核路徑，而非直接接受 AI 的第一個回應。這是把 AI 用於培養懷疑精神的典範案例。',
				sources: [
					{ name: "Larry Ferlazzo's Websites of the Day…", url: 'https://larryferlazzo.edublogs.org/2026/04/15/the-claim-auditor-uses-ai-to-verify-claims-that-people-say-are-research-based/' },
				],
			},
		],
		articles: [
			{
				title: '"The Claim Auditor" Uses AI To Verify…Claims That People Say Are Research-Based',
				link: 'https://larryferlazzo.edublogs.org/2026/04/15/the-claim-auditor-uses-ai-to-verify-claims-that-people-say-are-research-based/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'stw-edu-001',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 2,
		category: '教育政策',
		title: '教師法修正三讀：停聘補償入法，代理教師工會：代理師需專屬機制',
		short_summary:
			'立法院於 4 月 17 日三讀通過《教師法》第 25、53 條修正案，明定教師若因不實指控遭停聘調查，最終未受解聘者，學校須補發停聘期間薪資及學術研究加給。代理教師工會肯定此里程碑，但指出代理教師遭調查停聘時應有「專屬補償機制」，現行修正仍有不足；全國教育產業總工會則強調保障仍不夠完整。這是近年教師勞動權益保障的重要進展，影響全台數萬名正式與代理教師。',
		emoji: '🏫',
		did_you_know:
			'台灣目前有約 3 萬名代理教師，相當比例每學期面臨聘約不穩定的問題。此次修法聚焦停聘補償，但代理教師的整體勞動保障仍是教育工會持續倡議的核心議題，後續立法空間仍大。',
		talking_points: [
			'修正條文明定：教師遭停聘接受調查，若最終認定非屬解聘或終局停聘並回復聘任，學校須補發停聘期間本薪（年功薪）及學術研究加給。',
			'代理教師工會主張，代理師在遭調查停聘期間的補償應有專屬機制，不能套用正式教師規定，因代理師聘約屆期後補發執行方式不明確。',
			'全國教育產業總工會（全教產）肯定本次修法突破歷年難以進展的瓶頸，但強調整體教師保障仍不足，申訴程序與時程上有待改善。',
			'此修法補足了過去教師即使遭不實指控停聘、事後清白也拿不回薪水的制度漏洞，被工會視為基本勞動尊嚴的保障。',
		],
		perspectives: [
			{
				text: '代理教師工會肯定修法方向，但提出代理師的停聘補償應另立專屬條款，否則在實際執行時恐因聘約到期等問題難以落實，需要後續配套法規跟進。',
				sources: [
					{ name: '自由時報 生活新聞', url: 'https://news.ltn.com.tw/news/life/breakingnews/5407371' },
				],
			},
			{
				text: '全國教育產業總工會立場：這是重要的第一步，但教師整體保障仍不完整，後續立法仍需關注申訴程序的公正性與效率，尤其是停聘調查的時程合理性問題。',
				sources: [
					{ name: '自由時報 生活新聞', url: 'https://news.ltn.com.tw/news/life/breakingnews/5407175' },
				],
			},
		],
		articles: [
			{
				title: '教師法修法前進一步 代理教師工會：代理師調查停聘應有專屬補償',
				link: 'https://news.ltn.com.tw/news/life/breakingnews/5407371',
				domain: 'ltn.com.tw',
				date: '2026-04-17',
			},
			{
				title: '教師法三讀補發學術加給 全教產肯定：但保障仍不足',
				link: 'https://news.ltn.com.tw/news/life/breakingnews/5407175',
				domain: 'ltn.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'ltn.com.tw' },
		],
	},
	{
		id: 'stw-edu-002',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '教育出版商 McGraw-Hill 遭駭：逾 1350 萬筆教師與學生資料外洩',
		short_summary:
			'知名教育出版商麥格羅希爾（McGraw-Hill）本週遭確認資料外洩，駭客公布超過 100GB 的內部資料，其中包含多個平台共 1,350 萬筆電子郵件信箱，以及不完整的姓名、地址與電話資訊。這是近期規模最大的教育科技資安事件之一，對全球使用 McGraw-Hill 數位學習平台的教師和學生均構成直接風險，也再次凸顯教育機構在資料保護上的結構性弱點。',
		emoji: '🔓',
		did_you_know:
			'McGraw-Hill 旗下的數位學習平台包括 Connect、ALEKS 等，在美國大學與高中廣泛使用，全球用戶超過 1 億人。這次外洩事件的規模使其成為教育科技史上最嚴重的資安事件之一。台灣亦有部分大學使用其平台，相關用戶應確認帳號是否受影響。',
		talking_points: [
			'駭客組織宣稱取得 McGraw-Hill Salesforce 資料 4,500 萬筆紀錄，最終公布超過 100GB 資料，其中確認包含 1,350 萬筆電子郵件信箱，已被 Have I Been Pwned 收錄。',
			'外洩資料跨越多個 McGraw-Hill 平台站點，代表不同課程工具的用戶（包括 Connect、ALEKS 等）均可能受影響。',
			'這次事件再次暴露教育科技平台的資安弱點：EdTech 業者往往儲存大量師生個資，但資安投資遠低於金融或醫療業，成為駭客的優先目標。',
			'台灣教師若有使用 McGraw-Hill 旗下平台，應立即變更密碼並確認是否有異常登入，並通報服務平台確認資料範圍。',
		],
		perspectives: [
			{
				text: 'iThome 資安角度：McGraw-Hill 事件顯示 EdTech 平台已成為資安攻擊的重要目標，因為這類平台同時持有大量師生個資與付款資訊，但資安防護投資普遍不足。教育機構在選用數位平台時，需將廠商的資安能力列為採購評估的核心指標。',
				sources: [
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175143' },
				],
			},
		],
		articles: [
			{
				title: '駭客公布McGraw-Hill逾100GB資料',
				link: 'https://www.ithome.com.tw/news/175143',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'ithome.com.tw' },
		],
	},
	{
		id: 'stw-edu-003',
		cluster_number: 3,
		unique_domains: 2,
		number_of_titles: 3,
		category: '教育政策',
		title: '歐盟推出隱私保護年齡驗證 App，台灣 join.gov.tw 同期提案強化校園霸凌追蹤',
		short_summary:
			'歐盟宣布線上年齡驗證 App 技術已完成，即將上架，讓用戶可在不暴露個資的情況下驗證年齡，防止未成年人接觸不適宜內容，符合歐盟《數位服務法》要求。同期，台灣公共政策參與平台出現「建立校園霸凌加害者行為紀錄制度並明定禁止入校機制」的提案，參考韓國制度，要求建立五級分類的霸凌記錄並在升學時揭露。兩個政策方向都反映「如何在數位時代保護未成年人」這個全球共同挑戰。',
		emoji: '🛡️',
		did_you_know:
			'歐盟年齡驗證 App 採用「零知識證明」技術原理，讓系統只能驗證「用戶是否已達特定年齡」，而不能取得用戶的實際年齡或身分資訊——這是隱私保護技術設計的重要里程碑，也是未來台灣類似政策可參考的技術方案。',
		talking_points: [
			'歐盟年齡驗證 App 讓用戶以護照或身分證完成一次驗證後，在各平台只需出示「已達年齡門檻」的驗證結果，不需每次重新提交個資，兼顧保護與隱私。',
			'該 App 遵守歐盟《數位服務法》要求，規範色情、賭博及酒精等內容平台必須驗證用戶年齡，否則面臨重大罰款。',
			'台灣公共政策平台的校園霸凌提案，要求依霸凌嚴重程度建立五級處置標準，第三級以上行為強制列入學籍紀錄，情節嚴重者在申請高中、大學及教職時列為審查依據。',
			'參考韓國制度的提案還要求：在調查期間及處分確定後，嚴重霸凌加害者禁止進入受害者所在校園，避免二次傷害。',
		],
		timeline: [
			{ date: '2026-04-16', date_iso: '2026-04-16', content: '台灣 join.gov.tw 出現「建立校園霸凌加害者行為紀錄制度」提案，附上參考韓國制度的完整架構。' },
			{ date: '2026-04-17', date_iso: '2026-04-17', content: '歐盟宣布線上年齡驗證 App 技術就緒，即將在 App Store 和 Play Store 上架供下載。' },
		],
		perspectives: [
			{
				text: '歐盟政策角度：年齡驗證 App 是歐盟在「保護兒少 vs. 隱私保護」兩難中找到的技術解法，以「最小個資揭露原則」為核心設計。對台灣而言，這是制定類似政策時的重要參考模板——技術上可行，法規上有先例。',
				sources: [
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175145' },
				],
			},
			{
				text: '台灣公民社會角度：校園霸凌追蹤提案代表台灣家長與教育工作者對現行「轉學後記錄歸零」制度的不滿正在轉化為制度倡議。韓國的分級追蹤制度實施後確實降低了嚴重霸凌案件的再犯率，但也引發「永久標記對未成年人是否公平」的倫理爭議。',
				sources: [
					{ name: '公共政策網路參與平臺', url: 'https://join.gov.tw/idea/detail/01c4596f-4324-4821-9b43-1d00b77b8b0c' },
				],
			},
		],
		articles: [
			{
				title: '歐盟即將推出線上年齡驗證App，可確保隱私完成驗證',
				link: 'https://www.ithome.com.tw/news/175145',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
			{
				title: '建立校園霸凌加害者行為紀錄制度，並明定禁止入校機制',
				link: 'https://join.gov.tw/idea/detail/01c4596f-4324-4821-9b43-1d00b77b8b0c',
				domain: 'join.gov.tw',
				date: '2026-04-16',
			},
			{
				title: '教師罷工權合法化——建立對等協商機制與校園民主之基石',
				link: 'https://join.gov.tw/idea/detail/5d189d57-22df-402e-811f-6e8b00dd5b51',
				domain: 'join.gov.tw',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'ithome.com.tw' },
			{ name: 'join.gov.tw' },
		],
	},
];

export const MOCK_STORIES_BY_CATEGORY: Record<string, Story[]> = {
	[AI_NEWS_UUID]: aiNewsStories,
	[AI_EDU_UUID]: aiEduStories,
	[AI_CLASSROOM_UUID]: aiClassroomStories,
	[TW_EDU_UUID]: twEduStories,
};

export function collectDomains(stories: Story[]): Domain[] {
	const seen = new Map<string, Domain>();
	for (const s of stories) {
		if (!s.domains) continue;
		for (const d of s.domains) {
			if (!seen.has(d.name)) seen.set(d.name, d);
		}
	}
	return Array.from(seen.values());
}
