import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';

// ─── Stories synthesized from 173 RSS articles fetched 2026-04-17 ────────────

const aiNewsStories: Story[] = [
	{
		id: 's0000001-ai-news-0001',
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
			'Opus 4.7 在進階軟體工程、複雜編碼任務和高解析視覺理解上，均較前代 Opus 4.6 有明顯提升。',
			'首度部署新一代資安偵測機制，包括提示注入防護與異常行為監控，是 Anthropic 在「高能力模型如何安全商業化」這條路上的公開壓力測試。',
			'Anthropic 資安旗艦模型 Mythos 據稱可在作業系統與瀏覽器中找出大量高風險漏洞，已引起美、英、加三國金融監管機構高度警戒。',
			'彭博報導白宮正積極協調，讓美國聯邦機構可合法使用 Mythos，顯示模型治理已成為國家安全政策議題。',
			'OpenAI 同期亦推出 GPT-5.4-Cyber 資安特化模型，AI 資安攻防模型競賽正式進入下一階段。',
		],
		quote: '這款模型雖然不如 Mythos Preview 那麼強大，卻是公司用來測試新一代資安防護機制與模型治理方式的第一個公開版本。',
		quote_author: 'TechOrange 科技報橘',
		quote_attribution: 'TechOrange，2026-04-17',
		quote_source_url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
		quote_source_domain: 'techorange.com',
		perspectives: [
			{
				text: '台灣媒體（TechOrange、INSIDE、TechNews）一致聚焦在 Opus 4.7 作為「Mythos 資安彩排」的戰略意義，認為模型可控性比純能力提升更值得關注。',
				sources: [
					{ name: 'TechOrange 科技報橘', url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/' },
					{ name: 'INSIDE', url: 'https://www.inside.com.tw/article/41088-claude-opus-4-7' },
				],
			},
			{
				text: 'The Verge 與 iThome 側重技術面：Opus 4.7 資安能力刻意低於 Mythos，反映 Anthropic 在「釋出多少能力」上的謹慎策略，與 OpenAI 較開放的資安模型路線形成對比。',
				sources: [
					{ name: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence/913184/anthropic-claude-opus-4-7-cybersecurity' },
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175154' },
				],
			},
		],
		timeline: [
			{ date: '2026-04-11', date_iso: '2026-04-11', content: 'Anthropic 發布 Mythos Preview，僅對受信任研究夥伴開放，強大能力引起多國監管機構警戒。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: 'TechOrange 分析 OpenAI 以 GPT-5.4-Cyber 跟進，兩家公司資安模型策略出現明顯分歧。' },
			{ date: '2026-04-16', date_iso: '2026-04-16', content: 'Anthropic 正式發表 Claude Opus 4.7，強調資安偵測機制為核心新特色。' },
			{ date: '2026-04-17', date_iso: '2026-04-17', content: '彭博報導白宮擬允許聯邦機構使用 Mythos，模型治理進入政府政策層次。' },
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
				title: 'Claude Opus 4.7強化開發與影像處理，資安能力刻意低於Mythos模型',
				link: 'https://www.ithome.com.tw/news/175154',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
			{
				title: '彭博：白宮擬允許聯邦機構使用 AI 模型 Mythos',
				link: 'https://technews.tw/2026/04/17/white-house-works-to-give-us-agencies-anthropic-mythos-ai/',
				domain: 'technews.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'techorange.com' },
			{ name: 'inside.com.tw' },
			{ name: 'theverge.com' },
			{ name: 'technews.tw' },
			{ name: 'ithome.com.tw' },
		],
	},
	{
		id: 's0000001-ai-news-0002',
		cluster_number: 2,
		unique_domains: 4,
		number_of_titles: 5,
		category: 'AI 動態',
		title: 'OpenAI Codex 全面升級：背景運作、內建瀏覽器，直接挑戰 Claude Code',
		short_summary:
			'OpenAI 於 4 月 16 日宣布 Codex 重大更新，讓這款 AI 程式代理可在背景模式下操作電腦、上網搜尋、生成圖片，並新增記憶與外掛整合功能。The Verge 直言這是對 Anthropic Claude Code 的「直接挑戰」。同步更新的 Agents SDK 也加入原生沙箱執行功能，讓開發者能更安全地部署長時間運作的 AI 代理。',
		emoji: '💻',
		did_you_know:
			'OpenAI 同日宣布 Cloudflare 將 GPT-5.4 與 Codex 整合進 Agent Cloud，企業客戶可在 Cloudflare 基礎設施上直接部署 AI 代理，不需自建運算環境。',
		talking_points: [
			'Codex macOS/Windows 版新增「電腦工具使用」功能（Computer Use），可理解螢幕內容、輸入文字、上網瀏覽，幾乎是全能代理。',
			'新增記憶功能，Codex 可跨工作階段記住開發者偏好與專案脈絡，減少重複說明的成本。',
			'外掛整合功能讓 Codex 可接入 Jira、GitHub、Figma 等工具，打通開發生命週期各環節。',
			'Agents SDK 同步升級，加入原生沙箱執行（Native Sandbox Execution），讓長時間自主執行的 AI 代理有更嚴格的權限隔離。',
		],
		perspectives: [
			{
				text: 'The Verge 明確定性此次更新是「直接瞄準 Claude Code」，顯示 OpenAI 已將 Anthropic 視為在開發者生態的主要競爭對手，而非泛泛的 AI 競爭。',
				sources: [
					{ name: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence/913034/openai-codex-updates-use-macos' },
				],
			},
			{
				text: 'iThome 從技術角度強調 Computer Use 能力是此次最重要突破，讓 Codex 從「寫程式工具」進化成「能替你操作電腦的代理」，應用範疇大幅擴大。TechNews 則著重 Agent 背景運作將改變開發者日常工作流程。',
				sources: [
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175151' },
					{ name: 'TechNews 科技新報', url: 'https://technews.tw/2026/04/17/openai-releases-a-major-update-to-codex/' },
				],
			},
		],
		timeline: [
			{ date: '2026-04-13', date_iso: '2026-04-13', content: 'OpenAI 與 Cloudflare 宣布整合，企業可在 Agent Cloud 使用 GPT-5.4 和 Codex。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: 'OpenAI 發布 Agents SDK 下一個演進版本，加入沙箱執行機制。' },
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
				link: 'https://www.ithome.com.tw/news/175151',
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
		id: 's0000001-ai-news-0003',
		cluster_number: 3,
		unique_domains: 5,
		number_of_titles: 8,
		category: 'AI 動態',
		title: 'Google Gemini 全線擴張：AI Mode 進 Chrome、語音升級、機器人推理強化',
		short_summary:
			'Google 本週密集發布多項 Gemini 相關更新：AI Mode 正式整合進 Chrome 瀏覽器、Gemini 3.1 Flash TTS 語音模型提供細粒度音調控制、Gemini Robotics-ER 1.6 強化機器人空間推理能力，Gemini 應用程式也推出 Mac 原生版本並支援從 Google Photos 生成個人化圖片。各方解讀 Google 正全面打通 Gemini 的應用版圖，從瀏覽器到機器人一次佈局。',
		emoji: '🌐',
		did_you_know:
			'Gemini Robotics-ER 1.6 的名稱中 ER 代表「Embodied Reasoning（實體推理）」，這款模型的核心功能之一是讓機器人能自行判斷「任務是否已完成」，而不需等待人工確認——解決了過去工業機器人部署的主要痛點之一。',
		talking_points: [
			'AI Mode 進入 Chrome 後，用戶可在瀏覽網頁時即時提問、對當前頁面追問，並支援點擊來源連結側邊展開，不需切換分頁。',
			'Gemini 3.1 Flash TTS 推出細粒度音調標籤（Audio Tags），讓開發者可精確控制 AI 語音的情緒、速度與語氣，適用於有聲書、教育音頻等場景。',
			'Gemini Robotics-ER 1.6 改善空間推理與多視角理解，讓機器人能指認目標物體、判斷相對位置，並自主決定任務何時完成。',
			'Gemini Mac App 提供 Option+Space 浮動視窗，可分享當前視窗內容讓 Gemini 直接分析，競爭微軟 Copilot 在桌面端的地位。',
			'Google Personal Intelligence 更新：Gemini 可讀取 Google Photos 並用 Nano Banana 2 圖像模型生成個人化圖片。',
		],
		perspectives: [
			{
				text: 'iThome 分析 AI Mode 進 Chrome 是 Google 將 AI 從「搜尋結果頁」推向「瀏覽器核心場景」的戰略轉移，直接迎戰微軟在 Edge 中整合 Copilot 的策略。',
				sources: [
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175152' },
					{ name: 'Google Blog', url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/' },
				],
			},
			{
				text: 'The Verge 聚焦 Gemini 個人化圖片的隱私疑慮：Gemini 現在可以讀取用戶私人照片來生成圖片，個人資料的使用邊界正在擴大，Google 如何處理這類資料成為關注焦點。',
				sources: [
					{ name: 'The Verge', url: 'https://www.theverge.com/tech/913202/gemini-personal-intelligence-images-nano-banana' },
				],
			},
			{
				text: 'TechOrange 從機器人視角解讀：Gemini Robotics-ER 1.6 讓機器人從「服從指令」進化到「情境感知決策」，代表 Google 在通用機器人智慧上的技術積累已達到新里程碑。',
				sources: [
					{ name: 'TechOrange 科技報橘', url: 'https://techorange.com/2026/04/16/google-deepmind-gemini-robotics-er-1-6/' },
					{ name: 'Google DeepMind News', url: 'https://deepmind.google/blog/gemini-robotics-er-1-6/' },
				],
			},
		],
		timeline: [
			{ date: '2026-04-13', date_iso: '2026-04-13', content: 'Google DeepMind 發表 Gemini Robotics-ER 1.6，強化機器人實體推理能力。' },
			{ date: '2026-04-14', date_iso: '2026-04-14', content: 'Google AI 發布 Chrome Skills 功能，讓用戶可把常用 AI 提示存成一鍵工具。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: 'Google 發表 Gemini 3.1 Flash TTS 語音模型，推出 Gemini Mac App。' },
			{ date: '2026-04-16', date_iso: '2026-04-16', content: 'AI Mode 整合進 Chrome，Gemini 支援從 Google Photos 生成個人化圖片。' },
		],
		articles: [
			{
				title: 'A new way to explore the web with AI Mode in Chrome',
				link: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
				domain: 'blog.google',
				date: '2026-04-16',
			},
			{
				title: "Google's AI Mode update lets you open links without leaving the page",
				link: 'https://www.theverge.com/tech/913109/google-ai-mode-tabs-sources',
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
				link: 'https://www.ithome.com.tw/news/175152',
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
		id: 's0000002-ai-edu-0001',
		cluster_number: 1,
		unique_domains: 3,
		number_of_titles: 3,
		category: 'AI × 教育',
		title: 'MIT 人文學院院長：AI 時代更需要人文教育，而非取代它',
		short_summary:
			'MIT 人文、藝術與社會科學學院（SHASS）迎來 75 週年，院長 Agustín Rayo 直言 AI 重塑高等教育，但批判性思維、倫理推理與跨領域溝通能力的重要性反而更高，而非被邊緣化。與此同時，Google 本週也發布針對學生的 Gemini AI 工具更新，提供考試備考與作業輔助功能，EdSurge 研究則指出真正有效的 EdTech 共同特徵是貼近學生真實處境。三則訊息放在一起，折射出「AI 在教育中的正確位置」這個核心問題。',
		emoji: '📖',
		did_you_know:
			'MIT SHASS 是 MIT 歷史上建立的第一個學院，成立於 1950 年，最初設置的原因，正是工程師創辦人認為技術人才必須同時具備人文素養——這個初衷在 AI 時代顯得格外切題。',
		talking_points: [
			'MIT SHASS 院長 Agustín Rayo 表示，AI 時代讓「問出對的問題」比「執行答案」更重要，這正是人文社會科學訓練的核心能力。',
			'Rayo 指出，AI 擅長生成內容，但判斷這些內容是否符合倫理、是否有偏見、是否值得信任，仍然需要人文學科的訓練框架。',
			'Google 同期更新 Gemini 教育工具，支援考試備考、解題輔助與學習資源推薦，並整合 Google Classroom 生態，顯示 AI 輔助學習已從概念進入日常部署。',
			'EdSurge 研究顯示，「最有效的 EdTech」共同特徵是貼近學生真實處境，而非只拚功能多寡——即使 AI 工具再強，不符合學生使用脈絡就是無效的。',
		],
		quote: 'The question is not whether AI will change higher education — it will. The question is whether we shape that change or just react to it.',
		quote_author: 'Agustín Rayo',
		quote_attribution: 'MIT SHASS 院長，接受 MIT News 訪問，2026-04-14',
		quote_source_url: 'https://news.mit.edu/2026/qa-mit-shass-and-future-of-education-age-ai-0414',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: 'MIT 的學術立場：AI 讓人文學科不可或缺，因為 AI 工具本身的設計、使用與詮釋，都需要具備哲學、社會學與倫理訓練的人才來把關。',
				sources: [
					{ name: 'MIT News - Artificial intelligence', url: 'https://news.mit.edu/2026/qa-mit-shass-and-future-of-education-age-ai-0414' },
				],
			},
			{
				text: 'Google 的實務角色：持續更新面向學習者的 Gemini 工具（備考、作業輔助），試圖說服教育機構信任 AI 工具，反映科技公司在教育場域的積極佈局。',
				sources: [
					{ name: 'Learning & Education (Google Blog)', url: 'https://blog.google/products-and-platforms/products/education/ai-tools-programs-educators/' },
					{ name: 'Learning & Education (Google Blog)', url: 'https://blog.google/products-and-platforms/products/education/gemini-finals-study-tips/' },
				],
			},
			{
				text: 'EdSurge 研究者的現場提醒：技術再強的 EdTech 產品，若未能貼近學生的真實使用情境，終究無法發揮效果——導入 AI 工具前，先問「這符合我學生的需求嗎」。',
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
				title: 'From test prep to graduation, our latest AI tools support learners',
				link: 'https://blog.google/products-and-platforms/products/education/ai-tools-programs-educators/',
				domain: 'blog.google',
				date: '2026-04-13',
			},
			{
				title: 'What Makes Edtech Work for Students [Infographic]',
				link: 'https://www.edsurge.com/news/2026-04-15-what-makes-edtech-work-for-students-infographic',
				domain: 'edsurge.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
			{ name: 'blog.google' },
			{ name: 'edsurge.com' },
		],
	},
	{
		id: 's0000002-ai-edu-0002',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 3,
		category: 'AI × 教育',
		title: '美國數位無障礙新法截止，學校普遍未達標；教育不平等的結構問題再浮現',
		short_summary:
			'美國數位無障礙更新條款於本週正式生效，要求學校和教育科技廠商的數位內容必須符合 WCAG 2.1 AA 標準，但 EdSurge 調查指出多數學校尚未達標。同期，一位曾任教師的教育研究者在 EdSurge 撰文指出，教育「偉大平等化器」的形象始終是個神話：學生在教室外的生活條件，遠比課堂中使用什麼工具更能決定他們的學習成效。兩則訊息共同指向同一個問題：AI 工具的導入，能縮小教育落差，還是只會讓原本有資源的人如虎添翼？',
		emoji: '⚖️',
		did_you_know:
			'WCAG（Web Content Accessibility Guidelines）是全球通行的數位內容無障礙標準，AA 等級要求包含足夠的顏色對比、鍵盤可操作性、螢幕閱讀器相容等。許多主流 EdTech 平台至今仍未完全達到這個基準。',
		talking_points: [
			'美國新數位無障礙規範要求所有接受聯邦資助的學校，其使用的數位工具和線上內容必須符合 WCAG 2.1 AA 標準，涵蓋視覺、聽覺、認知與運動功能障礙的學生。',
			'EdSurge 指出多數學校和 EdTech 廠商尚未準備好，可能面臨法規違規風險，小型地方學區受衝擊尤大。',
			'EdSurge 研究者提醒，學生的家庭背景、社區資源與教室外的生活條件，對學習成效的影響遠超過課堂工具的選擇。',
			'這對 AI 工具導入提出尖銳問題：若連基本數位無障礙都做不到，AI 個人化學習工具能真正惠及所有學生嗎？',
		],
		perspectives: [
			{
				text: 'EdSurge 的政策角度：數位無障礙截止日是一個遲來的警鐘，提醒學校和廠商科技不能只服務「主流」學生，必須從設計源頭就考慮多元需求。',
				sources: [
					{ name: 'EdSurge Articles', url: 'https://www.edsurge.com/news/2026-04-16-the-digital-accessibility-deadline-is-here-schools-aren-t-ready' },
				],
			},
			{
				text: 'EdSurge 的教師視角：教育研究者從教學現場觀察指出，教育的「結構性不平等」無法靠任何單一工具解決，AI 工具若缺乏系統性支持，可能進一步擴大既有差距。',
				sources: [
					{ name: 'EdSurge Articles', url: 'https://www.edsurge.com/news/2026-04-15-teaching-showed-me-education-isn-t-the-great-equalizer' },
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
				title: 'More California 4-Year-Olds Are in Publicly Funded Preschool Than Ever',
				link: 'https://www.edsurge.com/news/2026-04-15-more-california-4-year-olds-are-in-publicly-funded-preschool-than-ever',
				domain: 'edsurge.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'edsurge.com' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 's0000003-tw-edu-0001',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 2,
		category: '台灣教育政策',
		title: '教師法修正三讀通過：代理教師停聘補償入法，工會肯定但盼保障更完整',
		short_summary:
			'立法院於 4 月 17 日三讀通過《教師法》第 25、53 條修正案，明定教師若因不實指控遭停聘調查，最終未受解聘者，學校須補發停聘期間薪資及學術研究加給。代理教師工會肯定此里程碑，但指出代理教師遭調查停聘時應有「專屬補償機制」，現行修正仍有不足；全國教育產業總工會則強調保障仍不夠完整，後續立法仍有空間。這是近年教師勞動權益保障的重要進展，影響全台數萬名正式與代理教師。',
		emoji: '🏫',
		did_you_know:
			'台灣目前有約 3 萬名代理教師，其中相當比例每學期面臨聘約不穩定的問題。此次修法聚焦停聘補償，但代理教師的整體勞動保障仍是教育工會持續倡議的核心議題。',
		talking_points: [
			'修正條文明定：教師遭停聘接受調查，若最終認定非屬解聘或終局停聘並回復聘任，學校須補發停聘期間本薪（年功薪）及學術研究加給。',
			'代理教師工會主張，代理師在遭調查停聘期間的補償應有專屬機制，不能套用正式教師規定，因代理師聘約屆期後補發執行方式不明確。',
			'全國教育產業總工會（全教產）肯定本次修法突破歷年難以進展的瓶頸，但強調整體教師保障仍不足，申訴程序與時程上有待改善。',
			'此修法補足了過去教師即使遭不實指控停聘、事後清白也拿不回薪水的制度漏洞，被工會視為基本勞動尊嚴的保障。',
		],
		perspectives: [
			{
				text: '代理教師工會肯定修法方向，但提出代理師的停聘補償應另立專屬條款，否則在實際執行時恐因聘約到期等問題而難以落實。',
				sources: [
					{ name: '自由時報 生活新聞', url: 'https://news.ltn.com.tw/news/life/breakingnews/5407371' },
				],
			},
			{
				text: '全國教育產業總工會立場：這是重要的第一步，但教師整體保障仍不完整，後續立法仍需關注申訴程序的公正性與效率。',
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
];

export const MOCK_STORIES_BY_CATEGORY: Record<string, Story[]> = {
	[AI_NEWS_UUID]: aiNewsStories,
	[AI_EDU_UUID]: aiEduStories,
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
