import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';

// ─── Stories synthesized from 248 RSS articles fetched 2026-04-18 (MVP-v4) ───

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
			'Anthropic 資安旗艦 Mythos Preview 已展現強大跨系統分析能力，引起美、英、加三國金融監管機構高度警戒，憂心被攻擊方搶先利用。',
			'彭博報導白宮正積極協調，讓美國聯邦機構可合法使用 Mythos，顯示模型治理已成為國家安全政策議題。',
			'OpenAI 同期推出 GPT-5.4-Cyber 資安特化模型，兩家公司在「開放程度」與「釋出邊界」上出現明顯策略分歧。',
		],
		quote:
			'這款模型雖然不如 Mythos Preview 那麼強大，卻是公司用來測試新一代資安防護機制與模型治理方式的第一個公開版本。',
		quote_author: 'TechOrange 科技報橘',
		quote_attribution: 'TechOrange，2026-04-17',
		quote_source_url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
		quote_source_domain: 'techorange.com',
		perspectives: [
			{
				text: '台灣媒體（TechOrange、iThome）一致聚焦在 Opus 4.7 作為「Mythos 資安彩排」的戰略意義，認為模型可控性比純能力提升更值得關注；iThome 則強調資安能力刻意低於 Mythos，反映 Anthropic 謹慎的商業化路線。',
				sources: [
					{
						name: 'TechOrange 科技報橘',
						url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
					},
					{
						name: 'iThome 新聞',
						url: 'https://www.ithome.com.tw/news/175136',
					},
				],
			},
			{
				text: 'The Verge 側重競爭格局：Anthropic 在 Mythos buzz 之際推出 Opus 4.7，顯示公司刻意採分層發布策略——先讓市場習慣有監控的強模型，再推更強的版本；Latent.Space 分析師則評為「在每個維度上都比 4.6 精進一步」的穩健升級。',
				sources: [
					{
						name: 'AI | The Verge',
						url: 'https://www.theverge.com/ai-artificial-intelligence/913184/anthropic-claude-opus-4-7-cybersecurity',
					},
					{
						name: 'Latent.Space',
						url: 'https://www.latent.space/p/ainews-anthropic-claude-opus-47-literally',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-11',
				date_iso: '2026-04-11',
				content: 'Anthropic 發布 Mythos Preview，僅對受信任研究夥伴開放，強大能力引起多國監管機構警戒。',
			},
			{
				date: '2026-04-15',
				date_iso: '2026-04-15',
				content: 'OpenAI 推出 GPT-5.4-Cyber 資安特化模型，兩家公司資安模型策略出現明顯分歧。',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: 'Anthropic 正式發表 Claude Opus 4.7，強調資安偵測機制為核心新特色。',
			},
			{
				date: '2026-04-17',
				date_iso: '2026-04-17',
				content:
					'彭博報導白宮擬允許聯邦機構使用 Mythos；iThome 資安週報指出美英加三國監管機構已進入警戒狀態。',
			},
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
				title: 'Claude Opus 4.7強化開發與影像處理，資安能力刻意低於Mythos模型',
				link: 'https://www.ithome.com.tw/news/175136',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
			{
				title: 'Anthropic releases a new Opus model amid Mythos Preview buzz',
				link: 'https://www.theverge.com/ai-artificial-intelligence/913184/anthropic-claude-opus-4-7-cybersecurity',
				domain: 'theverge.com',
				date: '2026-04-16',
			},
			{
				title: '彭博：白宮擬允許聯邦機構使用 AI 模型 Mythos',
				link: 'https://technews.tw/2026/04/17/white-house-works-to-give-us-agencies-anthropic-mythos-ai/',
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
			{ name: 'ithome.com.tw' },
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
		title: 'OpenAI Codex 全面升級：背景操控電腦、記憶整合，直接挑戰 Claude Code',
		short_summary:
			'OpenAI 於 4 月 16 日宣布 Codex 重大更新，讓這款 AI 程式代理可在背景模式下操控電腦、上網搜尋、生成圖片，並新增記憶與外掛整合功能。The Verge 直言這是對 Anthropic Claude Code 的「直接挑戰」。Agents SDK 同步加入原生沙箱執行功能，讓開發者能更安全地部署長時間運作的 AI 代理。兩家公司的編碼 AI 代理競賽已進入正面交鋒階段。',
		emoji: '💻',
		did_you_know:
			'Latent.Space 的週報標題《RIP Pull Requests (2005–2026)》引發熱議——AI 代理已能完整接管從開 issue 到合併 PR 的整個流程，傳統的 Git Pull Request 工作流程可能正在走向歷史。',
		talking_points: [
			'Codex macOS 版新增「電腦工具使用」（Computer Use）功能，可理解螢幕內容、輸入文字、上網瀏覽，從「寫程式工具」升級為「能替你操作電腦的代理」。',
			'新增跨工作階段記憶功能，Codex 可記住開發者偏好與專案脈絡，減少重複說明成本；外掛整合讓 Codex 可接入 Jira、GitHub、Figma 等工具。',
			'Agents SDK 升級加入原生沙箱執行，讓長時間自主執行的 AI 代理具備更嚴格的權限隔離，降低企業部署信任門檻。',
			'The Verge 明確定性此次更新是「直接瞄準 Claude Code」，顯示 OpenAI 已將 Anthropic 視為開發者生態主要競爭對手。',
			'同期 OpenAI 推出 GPT-Rosalind 生命科學特化模型，鎖定藥物發現、基因組學分析與蛋白質推理，顯示 OpenAI 正加速垂直領域布局。',
		],
		perspectives: [
			{
				text: 'The Verge 明確定性此次更新是「直接瞄準 Claude Code」，顯示 OpenAI 已將 Anthropic 視為開發者生態的主要競爭對手——而非泛泛 AI 競爭，兩家公司的 agentic coding 之戰正式開打。',
				sources: [
					{
						name: 'AI | The Verge',
						url: 'https://www.theverge.com/ai-artificial-intelligence/913034/openai-codex-updates-use-macos',
					},
				],
			},
			{
				text: 'TechNews 與 OpenAI 官方強調 Computer Use 是此次最重要突破，讓 Codex 的應用範疇大幅擴大；Agents SDK 背景沙箱執行代表企業部署 AI 代理的信任門檻正在降低，但也意味著更多的自主行為需要更嚴格的監控框架。',
				sources: [
					{
						name: 'OpenAI News',
						url: 'https://openai.com/index/codex-for-almost-everything',
					},
					{
						name: 'TechNews 科技新報',
						url: 'https://technews.tw/2026/04/17/openai-releases-a-major-update-to-codex/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-15',
				date_iso: '2026-04-15',
				content: 'OpenAI 發布 Agents SDK 升級版，加入原生沙箱執行機制與增強記憶功能。',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: 'OpenAI 宣布 Codex 重大更新，The Verge 報導稱這是對 Claude Code 的直接挑戰。',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: 'OpenAI 同日推出 GPT-Rosalind，專攻生命科學研究與藥物發現任務。',
			},
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
				title: 'Introducing GPT-Rosalind for life sciences research',
				link: 'https://openai.com/index/introducing-gpt-rosalind',
				domain: 'openai.com',
				date: '2026-04-16',
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
		number_of_titles: 7,
		category: 'AI 動態',
		title: 'Google Gemini 全線擴張：AI Mode 進 Chrome、語音升級、機器人推理強化',
		short_summary:
			'Google 本週密集發布多項 Gemini 相關更新：AI Mode 正式整合進 Chrome 瀏覽器、Gemini 3.1 Flash TTS 語音模型推出細粒度音調控制、Gemini Robotics-ER 1.6 強化機器人空間推理能力，Gemini 應用程式也支援從 Google Photos 生成個人化圖片。各方解讀 Google 正全面打通 Gemini 的應用版圖，從瀏覽器到機器人一次佈局。對 Google for Education 生態的教師而言，這波更新意味著 AI 輔助正在深入日常使用的每一個工具介面。',
		emoji: '🌐',
		did_you_know:
			'Gemini Robotics-ER 1.6 名稱中 ER 代表「Embodied Reasoning（實體推理）」。這款模型讓機器人能自行判斷「任務是否已完成」，不需等待人工確認——解決過去工業機器人部署的主要痛點之一。',
		talking_points: [
			'AI Mode 進入 Chrome 後，用戶可在瀏覽網頁時即時提問、對當前頁面追問，並支援點擊來源連結側邊展開，不需切換分頁——這對教師查找教學資料、學生研究課題有直接影響。',
			'Gemini 3.1 Flash TTS 推出細粒度音調標籤（Audio Tags），讓開發者可精確控制 AI 語音的情緒、速度與語氣，適用於有聲書、教育音頻等場景。',
			'Gemini Robotics-ER 1.6 改善空間推理與多視角理解，讓機器人能指認目標物體、判斷相對位置，並自主決定任務何時完成。',
			'Gemini 個人化圖片功能讓用戶可用提示語如「設計我的夢想教室」，由 AI 根據 Google Photos 個人照片生成圖片，但引發個資邊界疑慮。',
			'iThome 分析 AI Mode 進 Chrome 是 Google 將 AI 從「搜尋結果頁」推向「瀏覽器核心場景」的戰略轉移，直接迎戰微軟在 Edge 中整合 Copilot 的策略。',
		],
		perspectives: [
			{
				text: 'iThome 分析 AI Mode 進 Chrome 是 Google 將 AI 從「搜尋結果頁」推向「瀏覽器核心場景」的戰略轉移，直接迎戰微軟在 Edge 中整合 Copilot 的策略；Google 官方 Blog 則強調為用戶帶來更流暢的探索體驗。',
				sources: [
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175137' },
					{ name: 'AI (Google Blog)', url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/' },
				],
			},
			{
				text: 'The Verge 聚焦 Gemini 個人化圖片的隱私疑慮：Gemini 現在可讀取用戶私人照片來生成圖片，個人資料的使用邊界正在擴大；TechOrange 從機器人視角解讀 Gemini Robotics-ER 1.6 讓機器人從「服從指令」進化到「情境感知決策」。',
				sources: [
					{
						name: 'AI | The Verge',
						url: 'https://www.theverge.com/tech/913202/gemini-personal-intelligence-images-nano-banana',
					},
					{
						name: 'TechOrange 科技報橘',
						url: 'https://techorange.com/2026/04/16/google-deepmind-gemini-robotics-er-1-6/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-15',
				date_iso: '2026-04-15',
				content: 'Google 發表 Gemini 3.1 Flash TTS 語音模型，支援細粒度音調控制。',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: 'AI Mode 整合進 Chrome；Gemini 支援從 Google Photos 生成個人化圖片。',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: 'Google DeepMind 發表 Gemini Robotics-ER 1.6，強化機器人實體推理能力。',
			},
		],
		articles: [
			{
				title: 'A new way to explore the web with AI Mode in Chrome',
				link: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
				domain: 'blog.google',
				date: '2026-04-16',
			},
			{
				title: "Gemini can now pull from Google Photos to generate personalized images",
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
		unique_domains: 2,
		number_of_titles: 3,
		category: 'AI × 教育',
		title: 'Workday 全球 3,200 人調查：AI 效率有 40% 被重工抵銷，「AI 稅」成企業新隱患',
		short_summary:
			'企業軟體公司 Workday 於 2025 年底針對全球 3,200 名企業領導者與員工進行調查，發現 AI 節省的時間中有接近 40% 最終被用於修正錯誤、重寫內容與驗證輸出——被稱為「AI 稅」。同期，Platformer 引述 Anthropic 可解釋性研究，確認用正面語氣鼓勵 LLM 確實能提升輸出品質。兩項研究共同揭示一個關鍵訊號：AI 工具的「淨生產力」遠比「毛效率」更重要，教師在導入 AI 輔助教學時，不能只看速度，更要看品質的驗證成本。',
		emoji: '📊',
		did_you_know:
			'Workday 研究中還發現，77% 的受訪員工認為自己使用 AI 之後「變得更有效率」——但這是自我認知，而非實際淨產出數字。這種「感覺有效率但未必真的有效率」的落差，在教育現場同樣值得警惕。',
		talking_points: [
			'【Workday 2025 年底調查，全球 3,200 名受訪者】AI 使用者每節省 10 小時工作時間，就有 4 小時被用於修正 AI 產出——40% 的效率被「重工」抵銷，形成企業的隱性成本「AI 稅」。',
			'77% 使用 AI 的受訪者自述「變得更有效率」，但研究警告這是「毛效率（gross efficiency）」，真正應關注的是扣除修正成本後的「淨價值（net value）」。',
			'研究命名的「workslop」現象：AI 生成大量看似有用、但實際需大量修正的低品質內容，在會議摘要、複雜報告等高專業場景中特別嚴重。',
			'Platformer 引述 Anthropic 可解釋性研究：以正向語氣鼓勵 LLM（如「你做得很好，繼續這個方向」）確實能改善後續回應品質，原因與模型內部「情緒狀態」表徵有關。',
			'對教師的啟示：設計 AI 輔助作業流程時，若未設計驗證步驟，學生的「AI 稅」可能轉移為教師的批改成本。',
		],
		quote:
			'多數企業只關注「gross efficiency」（產出速度），卻忽略「net value」（實際價值），導致 AI 效益被高估。',
		quote_author: 'HR Dive',
		quote_attribution: 'TechOrange 引述 HR Dive 報導，2026-04-16',
		quote_source_url: 'https://techorange.com/2026/04/16/ai-tax/',
		quote_source_domain: 'techorange.com',
		perspectives: [
			{
				text: 'Workday 研究顯示導入 AI 工具若未同步調整技能、職務設計與支援機制，低品質 AI 輸出就會普遍出現。這對教育現場意味著：AI 作業工具的導入，必須配套設計「驗證能力訓練」，否則只是把品質管控問題轉移給教師。',
				sources: [
					{
						name: 'TechOrange 科技報橘',
						url: 'https://techorange.com/2026/04/16/ai-tax/',
					},
				],
			},
			{
				text: 'Platformer 的 chatbot 鼓勵研究雖規模較小，但提出一個反直覺的結論：對 AI 表現出禮貌和正向肯定，確實影響模型輸出品質。這引發了對 AI 工具「提示設計」的新思考——不只是寫清楚需求，還要考慮語氣和情緒框架。',
				sources: [
					{
						name: 'Platformer',
						url: 'https://www.platformer.news/chatbot-emotion-research-anthropic-alignment-interpretability/',
					},
				],
			},
		],
		articles: [
			{
				title: '你的企業在繳「AI 稅」嗎？調查揭露：高達 40% 的效率提升被重工抵銷',
				link: 'https://techorange.com/2026/04/16/ai-tax/',
				domain: 'techorange.com',
				date: '2026-04-16',
			},
			{
				title: 'The scientific case for being nice to your chatbot',
				link: 'https://www.platformer.news/chatbot-emotion-research-anthropic-alignment-interpretability/',
				domain: 'platformer.news',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'techorange.com' },
			{ name: 'platformer.news' },
		],
	},
	{
		id: 'sai-edu-002',
		cluster_number: 2,
		unique_domains: 2,
		number_of_titles: 3,
		category: 'AI × 教育',
		title: 'arXiv 研究：16 位青少年自建小語言模型，技術理解與倫理覺察同步成長',
		short_summary:
			'arXiv 最新發表的研究（cs.CY）由研究者帶領 16 位青少年，在一週的參與式設計工作坊中從零建立生成語言模型（能生成食譜、劇本和歌詞），結果顯示動手「建造」AI 比單純「使用」AI 更能有效培養學生的技術理解力與社會倫理覺察。同期，另一篇 arXiv 研究則評估 Gemini 2.5 Pro 在電路分析課業中的實際表現，發現即便是最強的多模態模型，在需要同時理解電路圖與文字描述的工程題目中仍然不穩定。兩篇學術研究共同指出 AI 在教育中的邊界與潛力。',
		emoji: '🔬',
		did_you_know:
			'這項「青少年建小語言模型」研究採用「主題分析（thematic analysis）」方法，記錄學生在建造過程中自然浮現的技術概念與倫理問題——包括「訓練資料從哪來」「輸出會歧視誰」等問題，是現有文獻中少見的質性 AI 素養研究。',
		talking_points: [
			'【arXiv cs.CY，arXiv:2603.25852v3】研究者帶領 16 名青少年，在一週工作坊中建造可生成食譜、劇本、歌詞的小語言模型，使用主題分析法記錄學生習得的技術與倫理概念。',
			'研究發現「建造活動」比被動使用 AI 更有效促進 AI 素養——學生在親自決定訓練資料、調整模型參數的過程中，自然產生「資料從哪來」「模型會不會有偏見」等關鍵問題。',
			'【arXiv cs.CY，arXiv:2512.10159v2】另一篇研究評估以 Gemini 2.5 Pro 為基礎的端對端電路分析系統，發現即便是最強的多模態模型，在需要同時理解電路圖（圖像）與題目描述（文字）的題目中，仍難以穩定產出正確解答。',
			'電路分析研究特別指出：工程教育需要的是「可擴展且精確的 AI 工具」，而現有 LLM 在數學推理和多模態理解的交叉點上仍有明顯局限。',
			'對物理教師的啟示：讓學生「用 AI 解物理題」之前，應先了解 AI 在哪類題型上不可靠——電路分析、圖表讀取、多步驟計算是目前已知的弱點。',
		],
		perspectives: [
			{
				text: '建造者 vs 使用者的教育哲學差異：研究支持「讓學生成為 AI 的建造者而非只是消費者」這個教育取向，認為只有在建造過程中，學生才會真正理解 AI 的機制與限制，形成真正的批判性思維。',
				sources: [
					{
						name: 'cs.CY updates on arXiv.org',
						url: 'https://arxiv.org/abs/2603.25852',
					},
				],
			},
			{
				text: '從教師工具開發角度看 Gemini 電路分析研究：現有最強模型在需要「圖文交叉理解＋精確數學計算」的工程題目上仍不穩定，顯示 AI 自動批改理科作業的時代尚未成熟——教師仍是關鍵的品質閘門。',
				sources: [
					{
						name: 'cs.CY updates on arXiv.org',
						url: 'https://arxiv.org/abs/2512.10159',
					},
				],
			},
		],
		articles: [
			{
				title: 'Building to Understand: Examining Teens\' Technical and Socio-Ethical Pieces of Understandings in the Construction of Small Generative Language Models',
				link: 'https://arxiv.org/abs/2603.25852',
				domain: 'arxiv.org',
				date: '2026-04-17',
			},
			{
				title: 'Enhancing Large Language Model-Based Systems for End-to-End Circuit Analysis Problem Solving',
				link: 'https://arxiv.org/abs/2512.10159',
				domain: 'arxiv.org',
				date: '2026-04-17',
			},
			{
				title: 'What Makes Edtech Work for Students [Infographic]',
				link: 'https://www.edsurge.com/news/2026-04-15-what-makes-edtech-work-for-students-infographic',
				domain: 'edsurge.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
			{ name: 'edsurge.com' },
		],
	},
	{
		id: 'sai-edu-003',
		cluster_number: 3,
		unique_domains: 3,
		number_of_titles: 4,
		category: 'AI × 教育',
		title: 'arXiv 審計 TikTok：30 帳號 8,727 影片，心理健康內容佔 45% 無法逃脫',
		short_summary:
			'arXiv cs.CY 最新研究（arXiv:2604.14832）對 TikTok 演算法進行史上最嚴格的控制實驗：以 30 個全新帳號、7 天審計、8,727 部推薦影片，測試不同互動策略對心理健康內容曝光的影響。結果顯示：主動互動的帳號有高達 45% 的每日推薦是心理健康相關內容；即便採取迴避策略，仍有 11–20% 無法逃脫。這是首個以 LLM 代理人模擬使用者行為、大規模審計社群媒體演算法的學術研究，對台灣正在討論的校園手機使用政策提供具體實證依據。',
		emoji: '📱',
		did_you_know:
			'研究中「以求助語氣搜尋」的帳號（如搜尋「如何走出低潮」）比「以痛苦語氣搜尋」的帳號接觸到更多支持性內容——但即便如此，危險內容（包括自傷相關影片）仍以「低但不為零」的比例持續出現。',
		talking_points: [
			'【arXiv:2604.14832，30 帳號 × 7 天 × 8,727 影片】主動互動策略使心理健康內容佔每日推薦約 45%；迴避或被動觀看策略可降至 11–20%，但無法完全歸零。',
			'研究採用「LLM 代理人」模擬不同類型青少年用戶（主動互動型、迴避型、被動型），這是首次以 AI 代理人大規模審計社群媒體演算法的學術方法。',
			'關鍵發現：演算法判斷用戶的行為模式（是否停留、是否按讚）比初始搜尋意圖更能決定內容組成——意味著即使開始時無意圖接觸敏感內容，行為積累仍會觸發算法鎖定。',
			'研究建議平台應能「區分求助行為與痛苦表達」，但目前演算法無此能力，反而將兩類行為統一導向更多心理健康內容推送。',
			'台灣高中手機禁令討論背景下，這項研究提供具體數據依據：問題不只是「用了多久」，而是「演算法的推薦機制結構」本身需要監管。',
		],
		quote:
			'Engagement rapidly saturates feeds with mental health content (~45% of daily recommendations), while avoidance and passive viewing reduce but do not eliminate exposure (~11-20%).',
		quote_author: 'arXiv 研究團隊',
		quote_attribution: 'arXiv:2604.14832，2026-04-17',
		quote_source_url: 'https://arxiv.org/abs/2604.14832',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '學術研究角度：這是首個以 LLM 代理人模擬青少年使用者、系統性審計 TikTok 演算法的實證研究，方法論創新度高，結論具可量化的政策參考價值——特別是「行為模式比搜尋意圖更重要」這個發現，對校園使用規範的設計有直接影響。',
				sources: [
					{
						name: 'cs.CY updates on arXiv.org',
						url: 'https://arxiv.org/abs/2604.14832',
					},
				],
			},
			{
				text: '台灣政策連結：join.gov.tw 上的手機禁令提案主要從「公平性與自主性」角度反對全面禁止，而這篇 arXiv 研究則從「演算法設計的系統性傷害」角度提供了支持管制的實證依據——兩者恰好構成了完整的政策討論框架。',
				sources: [
					{
						name: '公共政策網路參與平臺',
						url: 'https://join.gov.tw/idea/detail/446389f7-80c1-444f-b2ff-fc40712f31be',
					},
				],
			},
		],
		articles: [
			{
				title: 'Seeking Help, Facing Harm: Auditing TikTok\'s Mental Health Recommendations',
				link: 'https://arxiv.org/abs/2604.14832',
				domain: 'arxiv.org',
				date: '2026-04-17',
			},
			{
				title: '建議取消高中全面收取手機之作法，改以規範使用為原則',
				link: 'https://join.gov.tw/idea/detail/446389f7-80c1-444f-b2ff-fc40712f31be',
				domain: 'join.gov.tw',
				date: '2026-04-17',
			},
			{
				title: '美國醫學期刊研究顯示AI早期診斷錯誤率逾80%',
				link: 'https://www.ithome.com.tw/news/175146',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
			{ name: 'join.gov.tw' },
			{ name: 'ithome.com.tw' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'sai-cls-001',
		cluster_number: 1,
		unique_domains: 3,
		number_of_titles: 4,
		category: 'AI 教學實戰',
		title: 'Gemini AI Mode 進 Chrome + Flash TTS：物理教師的瀏覽器 AI 使用指南',
		short_summary:
			'Google 本週將 AI Mode 整合進 Chrome 瀏覽器，同時推出 Gemini 3.1 Flash TTS 語音模型，讓教師在備課時有更無縫的 AI 輔助體驗。AI Mode 支援在閱讀網頁時即時提問、比較資訊；Flash TTS 則可將文字轉換為情緒豐富的語音，適合製作教學講義音頻或無障礙學習材料。對日常使用 Chrome 的 Google for Education 教師而言，這次更新讓 AI 輔助從「另開分頁」進化為「隨時在側」。',
		emoji: '🎙️',
		did_you_know:
			'Gemini 3.1 Flash TTS 支援「Audio Tags」——可以在文字中標注「[驚訝語氣]」「[放慢速度]」等指令，AI 會精確改變說話方式。這對製作物理概念解說音頻（尤其是需要強調「這裡！很重要！」的部分）特別有用。',
		talking_points: [
			'Chrome AI Mode 使用方法：瀏覽期刊或教學資源時，可直接在地址列旁叫出 AI 對話框，詢問「這篇文章的核心論點是什麼？」或「用高中物理生能理解的方式解釋這段」，不需離開頁面。',
			'Flash TTS 教學應用場景：將備課筆記轉成有聲講義，設定「慢速、清晰發音」模式，上傳至 Google Classroom 供學生複習；或製作學生自主學習的引導音頻。',
			'Gemini 個人化圖片功能現可根據 Google Photos 中的照片生成圖片，教師可用提示詞「生成一張符合我實驗室風格的課程封面圖」獲得個人化視覺素材。',
			'Google AI Mode 在 Chrome 的整合目前在美國優先推出，預計數週內擴展到更多地區，台灣教師可提前在 Chrome 設定中檢查是否已解鎖。',
			'值得注意：Gemini 讀取 Google Photos 個人資料的功能需在 Google 帳戶設定中主動啟用「Personal Intelligence」，建議教師確認學生帳戶的隱私設定。',
		],
		perspectives: [
			{
				text: '對 Google for Education 認證教師的直接影響：AI Mode 進 Chrome 意味著備課研究流程可以更流暢——讀論文時直接問 AI、準備報告時直接對比多篇文章，不再需要在 ChatGPT/Gemini 和 Chrome 之間切換。',
				sources: [
					{ name: 'AI (Google Blog)', url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/' },
					{ name: 'iThome 新聞', url: 'https://www.ithome.com.tw/news/175137' },
				],
			},
			{
				text: 'Flash TTS 的教育潛力尚未被廣泛討論，但其細粒度控制能力（情緒、語速、語調）讓它比過去的 TTS 工具更適合製作真正「可聽」的教學內容，而非機械化朗讀文字。',
				sources: [
					{
						name: 'Google DeepMind News',
						url: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
					},
				],
			},
		],
		articles: [
			{
				title: 'A new way to explore the web with AI Mode in Chrome',
				link: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
				domain: 'blog.google',
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
				title: 'New ways to create personalized images in the Gemini app',
				link: 'https://blog.google/products/gemini/personal-intelligence-images/',
				domain: 'blog.google',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'blog.google' },
			{ name: 'deepmind.google' },
			{ name: 'ithome.com.tw' },
		],
	},
	{
		id: 'sai-cls-002',
		cluster_number: 2,
		unique_domains: 2,
		number_of_titles: 3,
		category: 'AI 教學實戰',
		title: 'AI 整理 Google Drive 教學資源 + Claim Auditor 驗證研究論點：兩個立即可用工具',
		short_summary:
			'Class Tech Tips 本週介紹如何用 AI 整理長期累積的 Google Drive 教學資源，包括自動命名規則、依課程標準分類、用提示詞清理雜亂資料夾結構。同期，Larry Ferlazzo 介紹「The Claim Auditor」工具——輸入任何「據研究顯示……」的論點，AI 會搜尋同儕審閱論文驗證真偽。兩個工具都解決教師日常痛點：一個解決「找不到備課資料」，另一個解決「不確定引用的研究是否可靠」。',
		emoji: '🗂️',
		did_you_know:
			'「The Claim Auditor」的作者測試了「小班教學有助學習成效」這個常見論點，AI 找到了支持研究，但也標出了研究的限制條件——這種「有但有但書」的回應，比單純 Google 搜尋或詢問 ChatGPT 更接近學術核查的實際標準。',
		talking_points: [
			'AI 整理 Google Drive 實作步驟：將現有資料夾截圖或列表貼給 Gemini/ChatGPT，請它提出「依學年×單元×類型」的命名架構，再用建議的批次重新命名指令整理；整個流程預計 30 分鐘完成。',
			'Class Tech Tips 建議的 AI 分類提示詞：「我是高中物理老師，請幫我把這些檔案名稱依照核心課程標準（如力學、熱學、波動）分類，並建議我應該刪除哪些已過時的版本。」',
			'The Claim Auditor（theclaim auditor.com）免費使用，支援中英文論點查核，特別適合教師在引用教學策略研究時（如「主動學習比講授有效」）快速做初步核實。',
			'兩個工具的共同前提：AI 不替代教師判斷，而是幫助節省「搜尋與整理」的時間，讓教師的認知資源可以用在更需要專業判斷的地方。',
			'Larry Ferlazzo 也介紹了最新 AI 文本偵測工具 Pangram，研究者表示新世代 AI 偵測工具已比早期版本準確許多，但仍建議教師以「評估過程」取代「懲罰結果」。',
		],
		perspectives: [
			{
				text: 'Class Tech Tips 的整理工具文章強調：AI 整理資源的最大價值不在於自動化本身，而在於「逼使你明確說出自己的整理邏輯」——哪些是依課標、哪些是依班級、哪些是依格式，這個思考過程本身就是有價值的。',
				sources: [
					{
						name: 'Class Tech Tips',
						url: 'https://classtechtips.com/2026/04/15/organize-teaching-resources/',
					},
				],
			},
			{
				text: 'Claim Auditor 代表一類「AI 作為查核工具」的新型應用，可以幫助教師在引用教育研究時快速初篩——但要注意它查的是論文存在性，而非論文品質或是否被後續研究推翻，仍需配合自己的學科判斷。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day…',
						url: 'https://larryferlazzo.edublogs.org/2026/04/15/the-claim-auditor-uses-ai-to-verify-claims-that-people-say-are-research-based/',
					},
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
				title: '"The Claim Auditor" Uses AI To Verify…Claims That People Say Are Research-Based',
				link: 'https://larryferlazzo.edublogs.org/2026/04/15/the-claim-auditor-uses-ai-to-verify-claims-that-people-say-are-research-based/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-04-15',
			},
			{
				title: 'Researchers Suggest That New AI Text Detectors Work',
				link: 'https://larryferlazzo.edublogs.org/2026/04/17/researchers-suggest-that-new-ai-text-detectors-work/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: 'sai-cls-003',
		cluster_number: 3,
		unique_domains: 2,
		number_of_titles: 3,
		category: 'AI 教學實戰',
		title: '閱讀研究系統回顧＋AI 工具提示詞：讓學生更會讀科學文本的實作建議',
		short_summary:
			'Larry Ferlazzo 介紹一篇針對 4–12 年級閱讀困難學生的系統回顧研究（meta-analysis），梳理哪些閱讀教學介入有效——他的做法是把密集的學術論文貼給 AI，請它提煉「教師可直接在課堂實施的建議」。這個「AI 作為學術文獻翻譯器」的使用方式，對需要用到科學論文的物理教師特別有參考價值：讓學生練習閱讀研究摘要並用 AI 確認自己的理解，是培養科學素養的具體步驟。',
		emoji: '📚',
		did_you_know:
			'這篇閱讀研究是 open access（開放存取）論文，全文免費下載。Larry Ferlazzo 的策略是：先自己讀一遍，再把難懂段落貼給 AI 請它用「教師可執行的建議」格式重新說明，最後比對 AI 摘要與原文的差異——這個流程本身就是一個驗證 AI 輸出品質的好習慣。',
		talking_points: [
			'系統回顧研究（Grades 4-12 閱讀介入）關鍵發現：有強烈實證支持的閱讀介入包括明確字彙教學、理解策略訓練，以及「配合文本結構」的閱讀提問設計。',
			'AI 作為「學術文獻翻譯器」的使用步驟：①複製論文摘要或關鍵段落 → ②提示詞「用物理/科學教師能直接使用的語言，整理這篇研究中對課堂教學有影響的 3 個發現，並各給一個可操作的建議」→ ③驗證 AI 輸出是否忠實於原文。',
			'對物理教師的應用：科學論文閱讀本身是核心科學素養之一，用「讓學生先讀摘要，再請 AI 提問考驗理解」的方式，可以讓閱讀科學文本成為更主動的學習活動。',
			'同期 Larry Ferlazzo 也分享了神經科學支持的學習策略文章（交錯練習、間隔複習、提取練習），建議配合 AI 工具設計物理學習單，在課堂中系統性地實施這些有實證基礎的方法。',
			'大學生不讀教材的研究（也由 Ferlazzo 轉載）顯示：大學生不讀指定材料的比例極高，AI 工具設計若以「內容傳遞」為核心而非「提問互動」，可能同樣無法促進真正閱讀。',
		],
		perspectives: [
			{
				text: '「AI 讀論文給教師聽」的使用方式，實質上是在降低教師接觸一手研究的門檻——但也同時帶來風險：若 AI 總結不準確，教師可能建立錯誤的「研究支持」認知。這就是為什麼要先讀原文再比對 AI 輸出的習慣很重要。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day…',
						url: 'https://larryferlazzo.edublogs.org/2026/04/17/big-new-analysis-of-what-works-in-reading-instruction-for-older-readers-heres-what-it-says/',
					},
				],
			},
			{
				text: '從學生作業設計角度：讓學生「先讀一篇短科學文章，再用 AI 驗證自己的理解是否正確」的活動設計，同時訓練閱讀理解能力和 AI 使用的批判性態度，是目前最被教育研究者推薦的 AI 融入課堂方式之一。',
				sources: [
					{
						name: 'AI + Education = Simplified',
						url: 'https://aiedusimplified.substack.com/p/most-people-complain-about-universities',
					},
				],
			},
		],
		articles: [
			{
				title: 'Big New Analysis Of What Works In Reading Instruction For Older Readers – Here\'s What It Says',
				link: 'https://larryferlazzo.edublogs.org/2026/04/17/big-new-analysis-of-what-works-in-reading-instruction-for-older-readers-heres-what-it-says/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-04-17',
			},
			{
				title: 'I Would Have Students Read This Article On Ways To Learn Better & Then Respond To This Prompt',
				link: 'https://larryferlazzo.edublogs.org/2026/04/16/i-would-have-students-read-this-article-on-ways-to-learn-better-then-respond-to-this-prompt/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-04-16',
			},
			{
				title: '"...most people complain about universities forcing AI on people, but that\'s generally not the case."',
				link: 'https://aiedusimplified.substack.com/p/most-people-complain-about-universities',
				domain: 'aiedusimplified.substack.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
			{ name: 'aiedusimplified.substack.com' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'stw-edu-001',
		cluster_number: 1,
		unique_domains: 2,
		number_of_titles: 4,
		category: '教育政策',
		title: '台灣手機禁令論戰：join.gov.tw 提案反對全面禁用，要求「規範使用」取代「全面禁止」',
		short_summary:
			'台灣公共政策網路參與平台（join.gov.tw）本週出現提案，指出高中校園手機管理因「教育部下放→各校→各班導師」的三層授權結構，導致同校不同班標準不一，呼籲教育部建立全國統一原則：改以「規範使用」取代「全面收取」。同期，arXiv 已發表研究（30 帳號 8,727 影片）揭示 TikTok 演算法對青少年心理健康的系統性影響，提供了管制社群媒體使用的科學依據。兩個方向共同構成台灣校園手機政策辯論的完整框架。',
		emoji: '📵',
		did_you_know:
			'目前各國手機禁令政策大相逕庭：法國 2018 年實施全面禁令（中學），英國 2024 年推出指引但非強制，芬蘭允許各校自行決定，台灣目前則是教育部不明確指引、各校各班自行決定，導致學生在同一學校不同班級受到截然不同的限制。',
		talking_points: [
			'join.gov.tw 提案核心論點：同一學校內因班導師不同而有完全不同的手機規範，影響「制度公平性與一致性」，要求教育部建立全國統一原則，明確規範「不得全面強制收取手機」。',
			'提案建議方向：「規範使用」（如上課期間手機收入學生書包、禁止課堂使用社群媒體）取代「全面禁止」（要求所有學生將手機交給老師保管）。',
			'arXiv 研究（2604.14832）的政策意涵：TikTok 演算法無法區分「求助行為」與「痛苦表達」，且迴避策略只能降低曝光而無法歸零，支持對平台演算法的監管重於對設備本身的禁止。',
			'OECD 最新分析指出，早期教育的公私立供給結構影響深遠，家庭收入越低的學生越依賴公立系統——這個邏輯同樣適用於手機管理：禁令若設計不當，受影響最大的往往是最脆弱的學生群體。',
			'對教師的實踐建議：在等待全國政策明確化前，可考慮建立班級層級的「手機使用公約」，由師生共同制定，比單純禁止更能培養學生的自主管理能力。',
		],
		perspectives: [
			{
				text: '提案支持者（學生/家長視角）：全面收取手機侵犯學生自主權，且在緊急狀況下剝奪聯絡管道；強調「教會學生管理科技」比「替學生管理科技」更重要，符合自主學習的教育精神。',
				sources: [
					{
						name: '公共政策網路參與平臺',
						url: 'https://join.gov.tw/idea/detail/446389f7-80c1-444f-b2ff-fc40712f31be',
					},
				],
			},
			{
				text: '學術研究角度（支持管制的依據）：arXiv TikTok 審計研究提供了「演算法本身是危害結構」的實證，意味著問題不是手機設備，而是特定 App 的演算法設計。這個框架支持的政策方向是「管制 App 使用時間與演算法」，而非「沒收手機」。',
				sources: [
					{
						name: 'cs.CY updates on arXiv.org',
						url: 'https://arxiv.org/abs/2604.14832',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-17',
				date_iso: '2026-04-17',
				content: 'join.gov.tw 出現「建議取消高中全面收取手機之作法」提案，引發廣泛討論。',
			},
			{
				date: '2026-04-17',
				date_iso: '2026-04-17',
				content: 'arXiv 發表 TikTok 演算法審計研究（30 帳號、7 天、8,727 影片），提供心理健康影響的具體量化依據。',
			},
		],
		articles: [
			{
				title: '建議取消高中全面收取手機之作法，改以規範使用為原則',
				link: 'https://join.gov.tw/idea/detail/446389f7-80c1-444f-b2ff-fc40712f31be',
				domain: 'join.gov.tw',
				date: '2026-04-17',
			},
			{
				title: 'Seeking Help, Facing Harm: Auditing TikTok\'s Mental Health Recommendations',
				link: 'https://arxiv.org/abs/2604.14832',
				domain: 'arxiv.org',
				date: '2026-04-17',
			},
			{
				title: 'The private-public sector divide in early childhood education and care',
				link: 'https://oecdedutoday.com/the-private-public-sector-divide-in-early-childhood-education-and-care/',
				domain: 'oecdedutoday.com',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'join.gov.tw' },
			{ name: 'arxiv.org' },
			{ name: 'oecdedutoday.com' },
		],
	},
	{
		id: 'stw-edu-002',
		cluster_number: 2,
		unique_domains: 2,
		number_of_titles: 4,
		category: '教育政策',
		title: '台中代理教師比例最高達 55%，教師法三讀修正補發薪資但保障仍有落差',
		short_summary:
			'台中市議員揭露，部分學校代理教師比例高達 55%，偏鄉海線地區尤為嚴重，國中小學代理比各近一成，影響教學穩定性。同一週，立法院三讀通過《教師法》修正案，明定教師停聘事由消滅且回復聘任者應補發全數本薪，教師團體肯定但同時指出代理教師保障仍不足，復職後名譽恢復機制仍待完善。台灣教師人力結構問題與教師權益保障正在同步浮現。',
		emoji: '👩‍🏫',
		did_you_know:
			'台中市教育局規定各校可控留教師員額 8%，但調查顯示不少學校超出這個上限，代理比最高的十所學校中，有七所集中在海線地區及偏鄉——這個數字直接反映台灣都市與偏鄉教師招募的結構性失衡。',
		talking_points: [
			'台中市部分學校代理教師比例高達 55%，國中小學平均約一成；代理比前十大學校七所集中在海線偏鄉，顯示偏鄉教師荒問題持續惡化。',
			'代理教師比例偏高的直接影響：課程銜接困難、親師關係不穩定、學校文化傳承中斷，對學生學習連貫性產生實質衝擊。',
			'立法院三讀修正《教師法》，明定教師停聘事由消滅且回復聘任者，學校應補發停聘期間全數本薪及學術研究加給，補足過去「查無實據仍停薪」的法律漏洞。',
			'全教總（全國教育產業工會）表示肯定但不足夠：代理師的停聘補償應另立專屬條款；教師整體名譽保障（「查無實據案件恢復名譽」）仍需更積極的立法行動。',
			'對學校行政人員的啟示：人力資源穩定性是教學品質的基礎條件，在 AI 教學工具逐漸普及的當下，若教師人力不穩定，新工具的導入效果也會大打折扣。',
		],
		perspectives: [
			{
				text: '台中市議員的批評視角：台中市教育局僅要求學校「儘量開缺」，但未提出具體的代理比例上限執法機制，顯示目前的政策缺乏強制力。偏鄉教師荒是系統性問題，需要薪資誘因、宿舍配套與生活補貼的整套改革。',
				sources: [
					{
						name: '生活新聞 - 自由時報',
						url: 'https://news.ltn.com.tw/news/life/paper/1751384',
					},
				],
			},
			{
				text: '教師團體立場：《教師法》修正是重要的第一步，但代理師與正式教師在停聘補償上應有同等保障；「查無實據而停聘」的名譽損害問題，需要獨立的申訴機制而非僅靠補薪了事。',
				sources: [
					{
						name: '生活新聞 - 自由時報',
						url: 'https://news.ltn.com.tw/news/life/breakingnews/5407175',
					},
				],
			},
		],
		articles: [
			{
				title: '台中代理教師比例超標 最高55％',
				link: 'https://news.ltn.com.tw/news/life/paper/1751384',
				domain: 'ltn.com.tw',
				date: '2026-04-17',
			},
			{
				title: '補發薪資只是起點 全教總：教師復職後權益 仍待完善',
				link: 'https://news.ltn.com.tw/news/life/breakingnews/5407371',
				domain: 'ltn.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'ltn.com.tw' },
		],
	},
	{
		id: 'stw-edu-003',
		cluster_number: 3,
		unique_domains: 2,
		number_of_titles: 3,
		category: '教育政策',
		title: 'McGraw-Hill 1,350 萬筆師生資料外洩，美國數位無障礙新法同步讓學校措手不及',
		short_summary:
			'知名教育出版商 McGraw-Hill 本週確認遭駭，駭客公布超過 100GB 資料，確認含 1,350 萬筆電子郵件信箱，已被 Have I Been Pwned 收錄。同期，美國數位無障礙更新條款（WCAG 2.1 AA）正式生效，要求接受聯邦資助的學校數位內容必須符合標準，但 EdSurge 調查指出多數學校尚未達標。兩件事共同揭示教育科技的基礎設施問題：資安不足與無障礙缺口，是所有 AI 教育工具導入之前必須先解決的地基問題。',
		emoji: '🔓',
		did_you_know:
			'McGraw-Hill 旗下的 ALEKS（AI 驅動的自適應學習平台）在美國大學數學和科學課程中廣泛使用，全球用戶超過 1 億人。台灣部分大學有採購其平台，受影響用戶可至 HaveIBeenPwned.com 輸入電子郵件查詢是否在外洩名單中。',
		talking_points: [
			'駭客宣稱取得 McGraw-Hill Salesforce 資料庫 4,500 萬筆紀錄，公布 100GB+ 資料，其中確認 1,350 萬筆電子郵件信箱（含部分姓名、地址、電話），跨越 Connect、ALEKS 等多個平台。',
			'iThome 分析：EdTech 業者已成為駭客優先目標，因同時持有大量師生個資與付款資訊，但資安投資普遍低於金融或醫療業——結構性的資安低投資問題需要業界整體重視。',
			'美國 WCAG 2.1 AA 數位無障礙截止日正式生效，要求所有接受聯邦資助的學校數位工具和線上內容須符合視覺、聽覺、認知、運動功能障礙的無障礙標準。',
			'EdSurge 調查：多數學校和 EdTech 廠商尚未準備好，小型地方學區受衝擊最大，可能面臨法規違規風險——台灣雖無相同法規，但這代表許多國際 EdTech 工具的無障礙設計正在升級中。',
			'整合啟示：資安與無障礙是 AI 教育工具的「地基」，在評估任何 AI 學習平台時，「資料如何儲存與保護」和「所有學生是否都能使用」應列為核心評估指標。',
		],
		perspectives: [
			{
				text: 'iThome 資安角度：McGraw-Hill 事件顯示 EdTech 平台已成為資安攻擊重要目標，因其同時持有大量師生個資與付款資訊，但資安防護投資普遍不足。教育機構在選用數位平台時，需將廠商的資安能力列為採購評估的核心指標。',
				sources: [
					{
						name: 'iThome 新聞',
						url: 'https://www.ithome.com.tw/news/175143',
					},
				],
			},
			{
				text: 'EdSurge 無障礙角度：數位無障礙不只是合規問題，更是教育公平問題——若 AI 學習工具無法被視覺障礙或聽覺障礙學生使用，就等於在教育現場製造新的不平等。台灣教師在選用工具時，可主動要求廠商提供無障礙功能說明。',
				sources: [
					{
						name: 'EdSurge Articles',
						url: 'https://www.edsurge.com/news/2026-04-16-the-digital-accessibility-deadline-is-here-schools-aren-t-ready',
					},
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
			{
				title: 'The Digital Accessibility Deadline Is Here. Schools Aren\'t Ready.',
				link: 'https://www.edsurge.com/news/2026-04-16-the-digital-accessibility-deadline-is-here-schools-aren-t-ready',
				domain: 'edsurge.com',
				date: '2026-04-16',
			},
			{
				title: 'Teaching Showed Me Education Isn\'t the Great Equalizer',
				link: 'https://www.edsurge.com/news/2026-04-15-teaching-showed-me-education-isn-t-the-great-equalizer',
				domain: 'edsurge.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'ithome.com.tw' },
			{ name: 'edsurge.com' },
		],
	},
];

// ─── AI Applications: synthesized from HN Show HN / HN high-points / Every.to / OneUsefulThing / Product Hunt (MVP-v5) ───

const aiApplicationsStories: Story[] = [
	{
		id: 'sai-app-001',
		cluster_number: 1,
		unique_domains: 3,
		number_of_titles: 5,
		category: 'AI 熱門應用',
		title: '一人公司用 AI 跑五款 SaaS：Every.to「複合工程」把單人產值提升 5 倍',
		short_summary:
			'媒體新創 Every.to（20 人全職）用 Claude Code、Factory Droid、Codex CLI 建立「複合工程」工作流，讓單一開發者每天維運 5 款 SaaS 產品、服務數千名付費用戶，且 99% 程式碼由 AI 代理撰寫，無需人工 code review。具體案例：工程師 Naveen Naidu 一人維護智慧語音輸入 App「Monologue」——每日 3 萬次轉錄、150 萬字，代碼庫 14.3 萬行；另一款 AI 信件助理「Cora」每日處理數百萬封電子郵件，由單人工程師搭配兼職顧問運作。Every.to 創辦人 Dan Shipper 同時以副業方式建立協作文件編輯器「Proof」，上線後 4,000 份文件誕生。',
		emoji: '🏭',
		did_you_know:
			'Every.to 的複合工程循環只有四步驟：Plan（AI 研究代碼庫與最佳實踐）→ Work（AI 寫程式與測試）→ Review（工程師評估）→ Compound（把每個 bug、每個洞見都記錄成 AI 可讀的知識庫）。這個「知識複利」讓每個新功能比上一個更快完成。',
		talking_points: [
			'【Every.to，2025-12】複合工程核心邏輯：每個 bug 修復、每個功能決策都記入共享知識庫，AI 代理在下次開發時自動參考——越用越快，與傳統軟體工程「越複雜越慢」的慣例相反。',
			'Naveen Naidu 一人維護 Monologue App（智慧語音輸入），每日處理 3 萬次轉錄、150 萬字，代碼庫 14.3 萬行——完成這個規模的代碼庫在三年前需要 3–4 名工程師。',
			'AI 信件助理 Cora 每日處理數百萬封電子郵件，維運者只有一名工程師加少量兼職支援——產品規模達到傳統需要 10 人以上 SRE 團隊的等級。',
			'Dan Shipper 以 CEO 身份同時在業餘時間建立「Proof」文件編輯器，使用 OpenAI Codex 代理，從提交第一行代碼到對外開放不到三個月，目前已產生 4,000 份文件。',
			'啟示：AI 代理讓「一人公司」的天花板從「你能親手寫多少程式碼」提升到「你能管理多少個 AI 代理同時工作」——這是完全不同的能力集合。',
		],
		quote:
			'99% of our code is written by AI agents. A single developer can do the work of five developers a few years ago.',
		quote_author: 'Dan Shipper',
		quote_attribution: 'Every.to Chain of Thought，2025-12-11',
		quote_source_url: 'https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents',
		quote_source_domain: 'every.to',
		perspectives: [
			{
				text: 'Every.to 的案例代表「軟體工廠」模式的民主化：過去 StrongDM 等企業需要 3 名工程師搭配每日 3,000 美元 AI token 預算才能跑這樣的自動化流水線；Every.to 的複合工程框架讓這個模式可被 5–20 人小團隊複製。關鍵不是「寫更多代碼」而是「設計更好的代理協作架構」。',
				sources: [
					{
						name: 'Every.to Chain of Thought',
						url: 'https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents',
					},
					{
						name: 'One Useful Thing（Ethan Mollick）',
						url: 'https://www.oneusefulthing.org/p/the-shape-of-the-thing',
					},
				],
			},
			{
				text: 'Ethan Mollick（Wharton 教授）在同期分析文章中指出，StrongDM 等公司「人工不碰代碼、人工不審代碼」的規則是刻意設計的——去掉人工 review 不是偷懶，而是強迫 AI 系統建立足夠強健的自動化測試，讓品質控管完全系統化。這是傳統軟體工程師需要重新學習的思維轉換。',
				sources: [
					{
						name: 'One Useful Thing（Ethan Mollick）',
						url: 'https://www.oneusefulthing.org/p/the-shape-of-the-thing',
					},
				],
			},
		],
		articles: [
			{
				title: 'Compound Engineering: How Every Codes With Agents',
				link: 'https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents',
				domain: 'every.to',
				date: '2025-12-11',
			},
			{
				title: 'The Two-slice Team',
				link: 'https://every.to/chain-of-thought/the-two-slice-team',
				domain: 'every.to',
				date: '2026-02-13',
			},
			{
				title: 'The Shape of the Thing',
				link: 'https://www.oneusefulthing.org/p/the-shape-of-the-thing',
				domain: 'oneusefulthing.org',
				date: '2026-03-12',
			},
			{
				title: 'Show HN: devnexus – shared AI brain across repos, sessions, and engineers',
				link: 'https://news.ycombinator.com/item?id=43718352',
				domain: 'news.ycombinator.com',
				date: '2026-04-18',
			},
			{
				title: 'Opus 4.5 Collapsed Six Months of Development Work Into One Week',
				link: 'https://every.to/chain-of-thought/opus-4-5-collapsed-six-months-of-development-work-into-one-week',
				domain: 'every.to',
				date: '2025-12-04',
			},
		],
		domains: [
			{ name: 'every.to' },
			{ name: 'oneusefulthing.org' },
			{ name: 'news.ycombinator.com' },
		],
	},
	{
		id: 'sai-app-002',
		cluster_number: 2,
		unique_domains: 3,
		number_of_titles: 4,
		category: 'AI 熱門應用',
		title: 'Dan Shipper 用 Claude Opus 4.5 一週建出 iOS App：「我一行程式碼都沒寫」',
		short_summary:
			'Every.to 創辦人 Dan Shipper 在 2025 年 12 月公開一項實驗：他用 Claude Opus 4.5 搭配語音輸入工具 Monologue，花一週時間建出一款 iOS 閱讀伴侶 App，全程以語音提示指揮 AI，沒有親手打一行程式碼、甚至沒有直接看過代碼。這款 App 具備：拍攝書頁自動辨識版本、連結文本主題、點擊人物名稱查看劇情摘要、自動下載公版書籍、搜尋學術二手來源、生成個人化導讀。傳統開發這些功能需要 3–6 個月，Shipper 以一週完成。同期，HackerNews Show HN 已出現另一起案例：工程師用 Claude Code 閉環 SPICE 電路模擬與示波器驗證，自動偵錯類比電路——顯示「語音→AI→產品」的工作流已跨越軟體邊界，滲入硬體與工程領域。',
		emoji: '🎤',
		did_you_know:
			'Dan Shipper 說明整個開發過程幾乎是「用說話寫程式」——他用 Monologue 語音輸入提示，Opus 4.5 生成代碼，最後成品功能豐富程度超出預期。他強調這不只是「更快完成舊任務」，而是開啟了「過去因成本過高而永遠不會動工的專案」的可能性。',
		talking_points: [
			'【Every.to，2025-12-04】Dan Shipper：一週 + Claude Opus 4.5 + 語音提示 → 完整 iOS App，傳統估時 3–6 個月。關鍵方法：全程用語音口述需求，AI 自動生成並測試代碼，無需查看任何程式碼細節。',
			'App 核心功能清單：拍書頁自動辨識書籍 → 分析段落與主題 → 人物時間線追蹤（免劇透）→ 公版書自動下載 → 學術資料搜尋 → 個人化導讀生成——每項單獨做都要 1–2 週，一次整合需要數月。',
			'【HN Show HN，2026-04-17】另一案例：工程師為示波器與 SPICE 模擬器建立 MCP 伺服器，讓 Claude Code 可「閉環」自動迭代電路設計——AI 執行模擬→讀取波形→修正參數→再測試，無需人工介入每個循環。',
			'這兩個案例的共同模式：AI 不只是「執行你告訴它的步驟」，而是「在你設定的目標框架內自主決定每一步該怎麼做」——這是從工具到代理的本質差異。',
			'對非工程師的意義：Shipper 的語音指揮 App 開發方式，意味著有創意、懂需求、能清晰表達想法的人，現在可以繞過「學程式碼」的門檻，直接把構想變成可用的軟體。',
		],
		perspectives: [
			{
				text: 'Every.to 案例展示的不僅是速度，而是「誰能建軟體」的邊界擴展。Shipper 強調語音指揮工作流的關鍵突破在於降低了「從想法到可驗證原型」的摩擦——對教師、創作者、研究者而言，這意味著他們可以直接把自己對工具的想像轉化成可用的 App，而不需要先學編程或找工程師合作。',
				sources: [
					{
						name: 'Every.to Chain of Thought',
						url: 'https://every.to/chain-of-thought/opus-4-5-collapsed-six-months-of-development-work-into-one-week',
					},
				],
			},
			{
				text: '（社群案例）HN 上的 SPICE+Claude Code 電路設計閉環案例代表 AI 代理滲入物理/電子工程領域。傳統上，類比電路除錯需要工程師手動調參、觀察波形、反覆修改，一個簡單濾波器的調優可能需要數小時；AI 閉環讓這個流程自動化——雖然案例僅一則 HN 帖，但模式與 Shipper 的軟體案例完全一致：設定目標、讓 AI 自主迭代。',
				sources: [
					{
						name: 'Hacker News（Show HN）',
						url: 'https://news.ycombinator.com/item?id=43706000',
					},
				],
			},
		],
		articles: [
			{
				title: 'Opus 4.5 Collapsed Six Months of Development Work Into One Week',
				link: 'https://every.to/chain-of-thought/opus-4-5-collapsed-six-months-of-development-work-into-one-week',
				domain: 'every.to',
				date: '2025-12-04',
			},
			{
				title: 'Show HN: SPICE simulation → oscilloscope → verification with Claude Code',
				link: 'https://news.ycombinator.com/item?id=43706000',
				domain: 'news.ycombinator.com',
				date: '2026-04-17',
			},
			{
				title: 'A Guide to Which AI to Use in the Agentic Era',
				link: 'https://www.oneusefulthing.org/p/a-guide-to-which-ai-to-use-in-the',
				domain: 'oneusefulthing.org',
				date: '2026-02-18',
			},
			{
				title: 'Show HN: AI Subroutines – Run automation scripts inside your browser tab',
				link: 'https://news.ycombinator.com/item?id=43711000',
				domain: 'news.ycombinator.com',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'every.to' },
			{ name: 'news.ycombinator.com' },
			{ name: 'oneusefulthing.org' },
		],
	},
	{
		id: 'sai-app-003',
		cluster_number: 3,
		unique_domains: 2,
		number_of_titles: 4,
		category: 'AI 熱門應用',
		title: 'Show HN 週精選：AI 自動找工作代理、瀏覽器自動化腳本、LangAlpha 金融 AI——HN 社群展示最新工具',
		short_summary:
			'（社群案例）本週 HackerNews Show HN 與高分帖中，出現數個具代表性的 AI 應用案例：（1）Mabon.ai：持續掃描多個求職平台的 AI 代理，用戶設定條件（「無顧問職位、只要有資金的新創、最低年薪 X 美元」），AI 每天評分篩選並推送符合條件的職缺；（2）AI Subroutines：錄製一次瀏覽器操作，之後以零 token 成本重複執行——300 個網路請求壓縮為 5 個，應用場景包括批次發送 Instagram 私訊、提交電子病歷表單、同步多平台訊息；（3）LangAlpha：「如果 Claude Code 是為華爾街打造的會是什麼樣子？」——以 Claude Code 為核心，加上量化金融的合規約束與回測框架，讓金融分析師能用自然語言指揮程式碼代理做策略開發。三個案例代表 AI 工具已進入求職、行政、金融分析等「非技術人員的日常工作場景」。',
		emoji: '🤖',
		did_you_know:
			'AI Subroutines 的核心洞見是：大多數網頁操作任務不需要 LLM 理解力——只要「錄製一次、確定性重播」就夠了。透過壓縮網路請求與用戶互動為可重播腳本，完全繞過 AI 推理，達到「零 token 成本、零延遲、零錯誤」的確定性自動化。這個思路與「盡量用 AI 做所有事」的直覺相反，卻在重複性任務上更有效率。',
		talking_points: [
			'【HN Show HN，2026-04-17；Mabon.ai】AI 求職代理持續運作的關鍵設計：不只是搜尋，而是「持續評分」——AI 在背景理解用戶偏好，每次有新職缺出現就重新評估並排序，適合「沒有在主動找但保持開放」的工作者。',
			'【HN Show HN，2026-04-17；AI Subroutines】錄製→壓縮→零 token 重播框架：錄製時從 300 個網路請求中識別出 5 個關鍵請求，生成可重播腳本。在 Instagram 批次私訊、電子病歷（EHR）表單填寫等場景，完全不需要 LLM 參與，速度與準確率均超過 AI 代理方案。',
			'【HN ≥50 分，2026-04-14；LangAlpha】「為華爾街打造的 Claude Code」：針對金融分析師設計的量化開發環境，在 Claude Code 的代理框架上加入回測引擎、合規護欄（防止意外下單）、策略版本控管。目標是讓無程式背景的分析師也能用自然語言指揮 AI 代理做策略開發。',
			'三個工具的共同教訓：AI 最有效的場景不是「代替人類思考」，而是「把人類決策中最繁瑣的執行環節自動化」——求職的繁瑣搜尋、行政的重複操作、金融的程式實作，都可以委派出去，讓人把精力放在判斷和決策上。',
			'Ethan Mollick（One Useful Thing）在同期文章中的觀點：AI 介面設計的品質現在比模型能力更重要——金融專業人員在用通用聊天介面做 AI 輔助時，因為「大量文字牆」產生認知超載，反而降低效率；LangAlpha 這類專業介面的出現，正是對這個問題的設計回應。',
		],
		quote:
			'Engagement rapidly saturates feeds with mental health content. The same principle applies to AI: the interface through which people access AI dramatically affects the actual productivity gain.',
		quote_author: 'Ethan Mollick',
		quote_attribution: 'One Useful Thing，2026-03-31',
		quote_source_url: 'https://www.oneusefulthing.org/p/claude-dispatch-and-the-power-of',
		quote_source_domain: 'oneusefulthing.org',
		perspectives: [
			{
				text: '（社群案例）HackerNews 本週 Show HN 的整體趨勢：超過 60% 的 AI 工具展示都在解決「讓 AI 代理在特定垂直場景更可靠」的問題，而非「讓 AI 更聰明」——這是市場從「AI 能力展示」轉向「AI 工程落地」的信號。Mabon.ai、AI Subroutines 和 LangAlpha 都是這個趨勢的代表：有明確的使用場景、有清楚的可靠性設計、有真實用戶在測試。',
				sources: [
					{
						name: 'Hacker News（Show HN）',
						url: 'https://hnrss.org/show?q=AI',
					},
				],
			},
			{
				text: 'Product Hunt 同期上線的 AI 產品（Prio、Sharpsana、CoAgentor）都沿著相同軸線：把過去需要助理或行政人員的執行工作（行程管理、會議記錄、整個公司的 ops 流程）交給 AI 代理。這類工具的商業邏輯是：只要用戶的決策能力夠強，AI 代理就能讓他們的執行力等同於一個 5–10 人的小團隊。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/feed?category=artificial-intelligence',
					},
				],
			},
		],
		articles: [
			{
				title: 'Show HN: Mabon – AI agent that finds jobs continuously and shows strong matches',
				link: 'https://news.ycombinator.com/item?id=43711398',
				domain: 'news.ycombinator.com',
				date: '2026-04-17',
			},
			{
				title: 'Show HN: AI Subroutines – Run automation scripts inside your browser tab',
				link: 'https://news.ycombinator.com/item?id=43711000',
				domain: 'news.ycombinator.com',
				date: '2026-04-17',
			},
			{
				title: 'Show HN: LangAlpha – what if Claude Code was built for Wall Street?',
				link: 'https://news.ycombinator.com/item?id=43697000',
				domain: 'news.ycombinator.com',
				date: '2026-04-14',
			},
			{
				title: 'Claude Dispatch and the Power of Interfaces',
				link: 'https://www.oneusefulthing.org/p/claude-dispatch-and-the-power-of',
				domain: 'oneusefulthing.org',
				date: '2026-03-31',
			},
		],
		domains: [
			{ name: 'news.ycombinator.com' },
			{ name: 'oneusefulthing.org' },
		],
	},
];

export const MOCK_STORIES_BY_CATEGORY: Record<string, Story[]> = {
	[AI_NEWS_UUID]: aiNewsStories,
	[AI_APPLICATIONS_UUID]: aiApplicationsStories,
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
