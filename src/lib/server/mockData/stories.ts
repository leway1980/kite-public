import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-05-30 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'e324535a-8505-57ea-8a17-dc3169a33fcf',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'I/O 之後非工程師也能用 AI Studio 做測驗',
		short_summary: 'Google I/O 2026 後，Google 用 Google AI Studio 搭配 Antigravity coding agent 示範：非資深開發者也能用最新 Gemini 做出互動測驗。文中編輯型作者先整理公告與設計素材，讓 Gemini 生成提示詞，再在 AI Studio 反覆預覽修正，快速完成 I/O 2026 小測驗。這代表新聞或活動內容的轉化流程，可從傳統手工串接程式開發，轉成「提示詞＋人為抽查」的代理化作業。',
		emoji: '🤖',
		did_you_know: '作者明確表示自己是編輯、沒有程式背景，卻能做出測驗。關鍵順序是先用 Gemini 產生可執行 prompt，再交給 Google AI Studio 讓畫面快速成形，最後再人工微調。',
		talking_points: [
			'非工程師也能上線：作者自稱是編輯非開發者，仍在文章中完成測驗體驗，反映工具入口明顯下沉。',
			'素材導向設計：流程先上傳 I/O 公告與設計靈感，再讓 Gemini 產生提示詞，確保輸出符合主題與版型。',
			'迭代機制明確：在 AI Studio 先做預覽，再依結果回填修正文字與題目，建立可追蹤的快速試作回圈。',
			'代理技術落地：Antigravity coding agent 連接最新 Gemini，讓內容團隊能靠高階指令完成原型，不必全程手寫程式。',
			'時點與節奏：文章發佈於 2026-05-29，顯示大型產品公告可在短時間內轉為可互動資產。',
		],
		quote: 'With Google AI Studio, powered by the Antigravity coding agent, you can bring ideas to life with the latest Gemini models even if you’re not a seasoned developer.',
		quote_attribution: 'Google Blog, 2026-05-29',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從產品使用角度看，這個案例把生成式 AI 的價值落在「內容先行、程式可後置」：編輯可先接新聞素材與題目，再用工具快速交付互動版本，對發布節奏影響大。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/',
					},
				],
			},
			{
				text: '從治理與風險角度看，流程仍保留人工預覽與修訂，意味模型雖能加速產製，但答案品質、語意邏輯與品牌一致性仍須人為核決，適合被視為流程再造而非完全自動化。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'Google 發布 I/O 2026 相關公告並公開以 Google AI Studio 製作測驗的操作示範，顯示新聞宣告到可互動內容的快速轉換流程。',
			},
		],
		articles: [
			{
				title: 'Take our I/O 2026 quiz, vibe coded in Google AI Studio.',
				link: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/',
				domain: 'blog.google',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: '386d8ff6-7d0d-587d-a098-acf55fc880a5',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'Gemini Omni+3.5：影像與代理任務自動化',
		short_summary: 'Google 在 2026-05-29 以 9 則示範同時公布 Gemini Omni 與 Gemini 3.5 Flash，主打影片生成與代理式長任務可直接在模型端完成。Omni 支援影像、音訊、影片與文字多模態輸入，透過對話逐步編修；3.5 Flash 則主打速度與複雜代理任務表現，並用 Antigravity 處理資產整理流程。這不是單純功能加法，而是把過去大量手工剪接、串接與批次整理，轉向可追溯、可複用的 AI 工作流。',
		emoji: '🎬',
		did_you_know: '官方在同一組案例中示範，Omni 可先拿一段小提琴影片做多輪修改（場景、鏡位、角色隱化），再延續上下文繼續處理；3.5 Flash 配合 Antigravity 則示範非結構化檔案的命名與分類自動化。',
		talking_points: [
			'官宣訊號：Google 在 2026-05-29 宣佈 Gemini Omni 與 Gemini 3.5 Flash，並以同一主題展示影片生成、代理任務兩條產品線，標示這是同時推進的產品策略。',
			'影片可微調：Omni 的 demo 顯示可用自然語言分步修改內容，從換光線、加物件到調整鏡位都可串起，並保留角色一致性與場景連續性。',
			'多模態輸入端：Omni 支援圖片、音訊、影片與文字同時輸入，能直接輸出高品質影片，減少在不同工具間反覆轉檔與手動接軌的流程。',
			'長鏈任務：3.5 Flash 被定位可處理 long-horizon 任務，在代理與 coding 上追平大型旗艦模型，並保留 Flash 系列熟悉的回應速度。',
			'自動治理端：官方提到 3.5 Flash + Antigravity 可做非結構化資產重命名與分類，將原本人工整理的大量行政作業納入可控自動流程。',
		],
		quote: 'Gemini Omni is our new model that can create anything from any input, starting with video.',
		quote_attribution: 'Google Blog, 2026-05-29',
		quote_source_url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '產品端觀點在於將多模態生成與代理流程合併，提升單一模型在內容製作與工作流整合上的可用度；這對團隊效率是正向加速，但也把模型輸出審核責任集中到流程設計。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/',
					},
				],
			},
			{
				text: '實務端觀點則會關注 3.5 Flash 的成本-效益與風險：效率提升來自自動化長流程，但在資安與版本控管不成熟時，命名、分類、素材引用若缺稽核機制，仍可能擴大錯誤規模。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'Google 發表 I/O 後續消息，宣布 Gemini Omni 與 Gemini 3.5 家族，並公開 9 則示範呈現其影片生成與代理作業能力。',
			},
		],
		articles: [
			{
				title: '9 demos of Gemini Omni and Gemini 3.5 in action',
				link: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/',
				domain: 'blog.google',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'fe61ce41-cd34-5e7c-87c4-8447053ce0be',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: '波士頓兒童醫院建全院 AI 工作層',
		short_summary: '波士頓兒童醫院將 AI 從零散文件、翻譯等單點工具，轉為跨研究、臨床與行政共用的安全內部平台，並配套治理與監控。官方表示，至 2026-05-29 已協助確診超過 40 個先前未能釐清的罕見病，並節省超過 6 萬小時作業與 700 萬美元以上人力再配置，代表醫療機構可把 AI 從試驗性導入，變成可持續擴充的組織流程。',
		emoji: '🏥',
		did_you_know: '院方已建立 50+ 項作業自動化，涵蓋供應鏈、帳務與排程等高頻流程，並將工具以內部 ChatGPT 架構快速佈署，讓醫療團隊集中處理高價值診療任務。',
		talking_points: [
			'平台重組：醫院把零散試點整併成共用的企業 AI 入口，研究、臨床、行政同時沿同一基礎層發展，縮短多部門對接成本。',
			'稀有病突破：文中提到已協助診斷 40+ 曾無法釐清的罕見病案例，對應以往臨床資料斷裂與知識搜尋負擔過重的問題。',
			'效率驗證：官方量化 60,000 小時節省與 7M+ 人力可再分配，顯示 AI 導入先在行政端補齊效率，再反哺臨床照護能力。',
			'自動化規模：院內超過 50+ 自動化任務接上採購、帳務、排程流程，將原本手動重工轉為可追蹤的AI 輔助程序。',
			'上線速度：文章指出許多工具由原先長開發週期縮短到數天，讓文件整理、文獻整合、流程串接可快速迭代與複用。',
		],
		quote: 'The problem isn’t effort. It’s human cognitive limits.',
		quote_attribution: 'Boston Children’s, 2026-05-29',
		quote_source_url: 'https://openai.com/index/boston-childrens-hospital',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '策略面上，這不是單純採購模型，而是先把 AI 當組織基礎層來建。當研究、臨床與行政共用治理規則後，才能避免各科室各自接案造成的能力與安全落差。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/boston-childrens-hospital',
					},
				],
			},
			{
				text: '臨床面向更關注人機分工：罕見病不再被當成單一演算法判斷題，而是由 AI 補齊資料與文獻彙整，醫師負責最終核決，凸顯高風險領域先立規則再放權。',
				sources: [
					{
						name: 'Boston Children’s 官方公告',
						url: 'https://openai.com/index/boston-childrens-hospital',
					},
				],
			},
		],
		articles: [
			{
				title: 'Boston Children’s uses AI to unlock new diagnoses',
				link: 'https://openai.com/index/boston-childrens-hospital',
				domain: 'openai.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '655cab5e-f983-56b4-8248-dd71851c7a4b',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'Codex 讓客戶需求變預覽版',
		short_summary: 'OpenAI 於 2026-05-29 公佈 Braintrust 導入 Codex 的做法，顯示其團隊用代理流程縮短研發回路。過去客戶請求常先進入待辦排程再決定優先順序，現在可直接貼需求到 Codex，在沙盒與測試中快速產生可展示的預覽分支。報導稱約一個月內已有 50% 工程師轉用，代表組織層級的流程改造，不只是代碼變快，而是讓「需求—實作—回饋」更可即時共創。',
		emoji: '⚡',
		did_you_know: 'Braintrust 團隊中約 50% 的工程師在一個月內改用 Codex。創辦人兼執行長提到 Codex 能在 terminal 持續輸出更多文字而不降速，這被視為可連續做大量實驗的關鍵。',
		talking_points: [
			'需求流程倒轉：將客戶請求直接交給 Codex，不再只停留在待辦堆疊，進而快速回應實際工作場景。',
			'組織採用速度：該文稱約 50% 的 Braintrust 團隊於一個月內轉向 Codex，代表不是零星試用而是規模化導入。',
			'即時共編特性：需求可即刻建 preview branch 給客戶驗收，縮短從提案到可討論原型的時間。',
			'實驗方法轉換：工程師先寫重現問題的測試與沙盒，再讓 Codex 在受控環境反覆跑，降低人工微操控成本。',
			'速度成為方法論：文章指出 Codex 在終端機輸出可維持高速，適合大量程式片段產生與反覆調整。',
		],
		quote: 'The biggest gain is speed.',
		quote_attribution: 'OpenAI，2026-05-29',
		quote_source_url: 'https://openai.com/index/braintrust',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從產品開發觀點看，重點是縮短迭代循環：客訴不再只是需求文件，而是可立即轉成可展示原型，利於共識對齊與錯誤修正。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/braintrust',
					},
				],
			},
			{
				text: '從組織治理觀點看，核心改變是流程前置化：透過沙盒與測試先定義問題，將權限與人工投入集中在高價值的判斷上，而非逐步提示與手動接力。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/braintrust',
					},
				],
			},
		],
		articles: [
			{
				title: 'How Braintrust turns customer requests into code with Codex',
				link: 'https://openai.com/index/braintrust',
				domain: 'openai.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '2dc51703-ce69-50ca-b046-70b198c96c8a',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'Google 實驗坊讓學生共創可落地 AI 學習原型',
		short_summary: 'Google 資助並與滑鐵盧大學合作的 Futures Lab 每 8 週舉辦一次跨域密集工作坊，讓學生直接做出可測試的 AI 原型。近期展示的 Kanji Garden、SignFluent、MuscleMemory 分別利用生成故事、即時手語回饋與攝影機姿勢追蹤，顯示教學與職場工具可先在小規模原型周期內完成設計、測試與改版，降低從構想到可用工具的轉換成本，讓實作速度成為新競爭力。',
		emoji: '🧪',
		did_you_know: '導師指出團隊發現非技術能力（例如溝通與產品設計）會影響原型成果，代表原型開發已從「只會寫程式」轉向跨職能工作流程。',
		talking_points: [
			'8 週密訓：Futures Lab 每輪以 8 週工作坊做為節奏，讓跨系學生在短週期內完成 AI 與 UX 原型交付。',
			'日語新教材：Kanji Garden 使用 AI 生成故事與視覺素材，讓日語學習改走情境化場景，而非僅靠背誦。',
			'手語即時回饋：SignFluent 針對美國手語提供動作即時提醒，能在練習過程中直接校正手形與節奏。',
			'姿勢安全提示：MuscleMemory 透過 AI 攝影機追蹤發出即時語音建議，幫助使用者避免不當訓練姿勢。',
			'跨域共創價值：團隊成員來自電腦科學、商管與自然科，顯示未來教育原型更需要技術、設計、溝通能力同時並進。',
		],
		quote: 'These are working prototypes built by students in the Google-funded Futures Lab, a partnership with the University of Waterloo.',
		quote_attribution: 'Google Blog, 2026-05-29',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: 'Google 的做法將研究轉為可複製的學習流程：透過短週期工作坊輸出原型，代表 AI 能力不必先變成產品再教學，而是可在課堂情境裡就驗證價值。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/',
					},
				],
			},
			{
				text: '內容設計視角強調，三個案例跨語言、身障、健身場景，等於把「即時回饋」定義為共通能力模組，未來工具未必以精準度勝出，而是以回饋流程與可用性取勝。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'Google 發布 Futures Lab 與滑鐵盧大學成果，公開 Kanji Garden、SignFluent 與 MuscleMemory 三個原型案例。',
			},
		],
		articles: [
			{
				title: 'Check out real-life AI prototypes from the Futures Lab.',
				link: 'https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/',
				domain: 'blog.google',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'a79ca560-48b7-5d4c-8121-30a697a2a371',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'PromptLayer：用時間軸追蹤 AI 流程成本',
		short_summary: '當 AI 應用會橫跨多段 prompt、不同模型、外部工具與背景作業時，單看單筆 API 用量已難回溯真實代價。Product Hunt 中的 PromptLayer 被討論為以時間軸整合 workflow 請求與成本，直接回答哪條流程推高支出、延遲從何而來、哪一步失敗。這代表 AI 團隊可把治理焦點從零散監看，轉成可追蹤、可比較的流程決策。2026 年 5 月 29 日的討論提供了可借鏡的管理問題定義。',
		emoji: '🧭',
		did_you_know: '內容明確指出，在多模型、多工具且含 retries 的情境下，原本容易只看到單次模型呼叫，真正缺的是能連接整個流程事件的可回溯鏈路，否則一個使用者動作的代價與瓶頸難以定位。',
		talking_points: [
			'流程可視化：PromptLayer 著重把多個 prompt、模型、工具、重試與背景作業放到同一條 timeline，讓團隊不只看到零散呼叫。',
			'成本難題：問題核心是「Which workflow is driving costs」，意味著治理重點是流程級成本分攤，而非 call-level 統計。',
			'延遲診斷：在多段流程中，時間軸可協助找出延遲進入點，確認是模型回應、外部服務還是排程行為造成瓶頸。',
			'失敗歸因：文本提出「Which step failed」，把故障找原因從猜測改為事件鏈追查，對穩定性與除錯效率更直接。',
			'產品導向轉換：該案例顯示 AI 導入價值不在新工具本身，而在是否能把複雜工作流的成本、風險與責任關係抽象為可執行資料。',
		],
		quote: 'It\'s easy enough to see usage for individual model calls, but once a feature spans multiple prompts, models, tools, retries, and background jobs, I\'ve found it much harder to answer questions like: Which workflow is driving costs? Where is latency being introduced? Which step failed?',
		quote_attribution: 'Product Hunt, 2026-05-29',
		quote_source_url: 'https://www.producthunt.com/products/promptlayer-2',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '工程面向流程治理：內容聚焦 workflow 的代價與瓶頸，讓 AI 工程師可從單一請求監控，轉向跨步驟可回溯治理，這是高複雜度服務常見痛點。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/promptlayer-2',
					},
				],
			},
			{
				text: '導入策略面：同樣是產品平台文章，這則訊息與一般工具清單不同，重點在「如何知道誰在花錢、哪裡失敗」；對週報來說更像是可遷移的組織作法。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/promptlayer-2',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'Product Hunt 討論頁出現 PromptLayer 介紹與討論，聚焦以時間軸追蹤多步驟 AI 請求、成本、延遲與失敗定位。',
			},
		],
		articles: [
			{
				title: 'PromptLayer',
				link: 'https://www.producthunt.com/products/promptlayer-2',
				domain: 'producthunt.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'dc174dbe-6683-5ae6-8a4e-5d14c1d0012e',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'AI 秒畫設計圖，建屋提案從零散到可交付',
		short_summary: 'Product Hunt 的 Drafted 將住宅設計流程改為「輸入條件即生成」：使用者可一次設定房間清單、坪數、足跡與地界，立即得到平面圖、立面圖與3D草圖。對過去要反覆手繪與反覆討論的建築提案流程而言，這代表需求轉譯與視覺化可同步完成。更重要的是，產品方表示上個月就有超過12萬人到訪、累計產出32.5萬份設計，且成長動能主要來自社群分享與口碑，說明低門檻空間生成在實務上有明顯需求。',
		emoji: '🏠',
		did_you_know: '產品方揭露上月使用情況：來訪人數突破12萬、已生成設計超過32.5萬份，顯示住宅空間生成工具並非只吸引少數設計師，而是已形成明顯的需求外溢。',
		talking_points: [
			'條件導向建模：輸入「房間清單、坪數目標、足跡形狀、地界邊界」等結構化資訊後即可生成結果，對應現場常見的建築規劃輸入需求。',
			'秒級草案輸出：頁面主打可在數秒內產生平面圖、立面與3D家屋，將傳統先畫草圖再修修改改的時間拉短到同一輪討論。',
			'可直接進入製作流程：支援 CAD 與 PDF 匯出，產生檔可直接進入施工、會議與跨部門溝通，降低反覆轉檔與重製的成本。',
			'需求成長訊號：文章指出近一個月流量超過12萬人、共創造32.5萬組設計，證明「AI 先構想」的工作法正快速被非專業用戶採納。',
		],
		quote: 'We started experimenting with whether modern generative models could help.',
		quote_attribution: 'Product Hunt，2026-05-29',
		quote_source_url: 'https://www.producthunt.com/products/drafted-4',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品敘事聚焦流程重組：不只是漂亮樣圖，而是以結構化條件輸入取代人工逐步推敲，適合放進設計作業流程做可重複的草案生產。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/drafted-4',
					},
				],
			},
			{
				text: '使用者回饋則提醒落地成本：工具若在首頁即要求登入，可能降低第一次體驗率，表示AI能力之外，取得成本與導流設計仍是普及關鍵。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/drafted-4',
					},
				],
			},
		],
		articles: [
			{
				title: 'Drafted',
				link: 'https://www.producthunt.com/products/drafted-4',
				domain: 'producthunt.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aa423d60-20b6-51a2-84d5-fd35a5d29935',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Firecrawl /monitor：AI 收到關鍵變更',
		short_summary: 'Firecrawl 於 2026-05-28 在 Product Hunt 上線 /monitor，針對 AI 代理常見的手動網頁輪巡問題提供新做法：輸入網址與監控條件後，系統會自動定期抓取頁面版本並做差異比對，只有偵測到實質異動才會推播。公告強調可避免手動監看時出現「抓太多」或「抓不到新訊」兩難，並以 webhook/email 呈現可直接接進既有自動化流程，讓更新維運成本轉向事件驅動。',
		emoji: '🔔',
		did_you_know: '產品方表示，/monitor 在啟用前可先預估每月成本，異動通知可透過 signed webhook 或 email 發送，且每則差異都附有 permalink，可直接交由另一個代理繼續處理。',
		talking_points: [
			'痛點還原：不少團隊長期反覆抓取定價頁、文件與 changelog，人工重抓容易多抓沒變更頁面並耗掉大量時間與 token。',
			'流程設計：使用者用自然語言描述監控目標後，/monitor 會自動排程、抓取與比對版本，僅在偵測到有效變更時發出通知。',
			'成本成效：公告方主打可削減 AI 代理 token 使用量，最高可達 90%，並提供月費估算，讓啟用規模前可先控管預算。',
			'交付機制：每則異動都可由簽名 webhook 或 email 接收，同時帶有 diff permalink，較容易接進跨工具工作流與第二層判讀代理。',
			'技術補強：監控機制掛載 Firecrawl 原有 /scrape，對 JS-heavy 頁面仍能追蹤，比單純靜態抓頁更適合追蹤現代網站更新。',
		],
		quote: 'You can cut token usage by up to 90%.',
		quote_attribution: 'Product Hunt, 2026-05-28',
		quote_source_url: 'https://www.producthunt.com/products/extract-by-firecrawl',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '官方導向是把「定時重抓」改造成可控成本、可追蹤事件流程，特別針對 AI 代理在研究與文件維運上高頻抓取成本高的情境給出工程化解方。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/extract-by-firecrawl',
					},
				],
			},
			{
				text: '討論區回饋則聚焦下一步升級：若實體欄位缺漏，使用者希望 agent 能自動展開多步驟跨站搜尋與補全，代表目前仍偏「變更監控」，距離完整自動研究鏈還有差距。',
				sources: [
					{
						name: 'Product Hunt Discussion',
						url: 'https://www.producthunt.com/products/extract-by-firecrawl',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: 'Firecrawl 在 Product Hunt 發佈 /monitor，主張以排程差異比對與 webhook 通知協助 AI 代理追蹤網頁更新。',
			},
		],
		articles: [
			{
				title: 'monitor by Firecrawl',
				link: 'https://www.producthunt.com/products/extract-by-firecrawl',
				domain: 'producthunt.com',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '7122fdc5-29e1-5d16-804d-2082b6899120',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'GPS：以符號記憶延續 AI 代理規範',
		short_summary: 'Product Hunt 於 2026-05-28 推出 GPS，將 coding 代理在專案中的規則、過往決策與錯誤經驗，整理成綁定檔案與 symbols 的記憶層。新 session 開始前先回傳最相關紀錄，讓代理直接接手，不必反覆說明限制條件與測試流程。產品主打 local-first 與 CLI-first，並可搭配 Claude Code、Codex、Cursor、MCP 使用，意圖降低重複溝通與 token 消耗，對高頻程式維運與知識型工作流具有可遷移價值。',
		emoji: '🧠',
		did_you_know: 'GPS 的核心不是做一個巨型提示詞倉庫，而是把記憶掛到實際符號與檔案，代理在修改某段程式時才拿到該段最相關知識，避免把無關脈絡一起塞進上下文。',
		talking_points: [
			'上下文斷層補齊：GPS 把 repo 規則與踩雷紀錄掛在特定檔案/符號上，避免重要限制散佈在臨時對話裡遺失。',
			'減少重複對齊：創作者指出許多代理會反覆重複說明規則與測試方式，GPS 透過前置檢索直接帶出對應記憶，壓低往返溝通。',
			'錯誤可再利用：該工具強調代理可在任務中自行記錄失敗命令、邊界條件與修正結果，形成可繼續的工作資產。',
			'流程與工具銜接：敘述明確提到支援 Claude Code、Codex、Cursor、MCP，顯示設計上偏向跨工具協作，不只綁定單一介面。',
			'成本效益訊號：文中重複提到 fewer tokens 與更好 recall，對以 token 消耗為主要成本壓力的團隊，這是直接的治理與效率優勢。',
		],
		quote: 'Your coding agent forgets everything the second a session ends.',
		quote_attribution: 'Product Hunt，2026-05-28',
		quote_source_url: 'https://www.producthunt.com/products/gps-2',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品方把問題定義為跨 session 的規則遺失與重複提問，解法聚焦「上下文工程」：以可定位的記憶索引取代巨量 prompt，偏向實務流程優化。',
				sources: [
					{
						name: 'Product Hunt（產品頁）',
						url: 'https://www.producthunt.com/products/gps-2',
					},
				],
			},
			{
				text: '討論中出現跨模組規範映射疑慮，代表符號/路徑綁定雖可降噪，仍需驗證是否能妥善處理橫跨模組的共同政策，顯示可擴充性仍待觀察。',
				sources: [
					{
						name: 'Product Hunt（討論串）',
						url: 'https://www.producthunt.com/products/gps-2',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: 'Product Hunt 上架並推廣 GPS，主打以 repo 規則、過往修正與失敗記憶做為可重用上下文，協助代理延續任務。',
			},
		],
		articles: [
			{
				title: 'GPS',
				link: 'https://www.producthunt.com/products/gps-2',
				domain: 'producthunt.com',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '53b6a024-48f6-5060-8610-01b0183e1243',
		cluster_number: 6,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'Clipline 用 Telegram 90 秒產出短影音素材',
		short_summary: 'Product Hunt 上的 Clipline 於 2026-05-28 上線，主打 Telegram 機器人可直接接收 YouTube 連結或 MP4，約 90 秒自動完成切片、字幕與英文翻譯，並可加上自訂浮水印。產品主張以「分享即處理」取代傳統下載、複製貼上與重度後製，搭配 3 小時自動刪除與按分鐘付費，降低創作者與行銷單位在短影音製作上的時間、工具與成本門檻。',
		emoji: '🎬',
		did_you_know: '新用戶在傳送 /start 後可直接獲得 5 分鐘免費處理額度，後續則以 Telegram Stars 按分鐘付費，採「先用後付」與「先玩再決定」模式。',
		talking_points: [
			'90 秒切片引擎：Clipline 支援直接接收 YouTube 連結或 MP4，完成 AI 切片、字幕與轉譯可在約 90 秒內輸出，縮短長片改編流程。',
			'零摩擦啟動：使用者只要在 YouTube 點「Share」到 Telegram bot 即可啟動，不需複製貼上網址或開啟多個頁面，貼近行動場景。',
			'隱私與留存管理：產品宣稱處理完成後 3 小時自動刪除檔案，搭配自訂字幕、banner 浮水印，兼顧速成內容與品牌辨識。',
			'成本模型轉向：從傳統訂閱制改為 pay-as-you-go，透過 Telegram Stars 按分鐘計價，並提供首次 5 分鐘免費額度，讓嘗試成本更低。',
			'雙軌可控流程：AI 模式負責找「可爆點」片段，PRO 模式可手動挑 30 秒片段並加 Smart Remote 控制，兼顧效率與創作主權。',
		],
		quote: 'Just tap Share → Clipline — no copy‑paste.',
		quote_attribution: 'Product Hunt, 2026-05-28',
		quote_source_url: 'https://www.producthunt.com/products/clipline-2',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品方將 Telegram 當入口，將短影音工作流塞進熟悉的即時訊息體驗，主張即時分享比開啟網頁端更能提高創作節奏，重點放在流程摩擦成本。',
				sources: [
					{
						name: 'Product Hunt（產品介紹）',
						url: 'https://www.producthunt.com/products/clipline-2',
					},
				],
			},
			{
				text: '社群回饋則把焦點放在收費與信任機制，討論中對 hold & refund 與費率透明度有關切，反映工具化創作仍需在效率外證明服務可信度。',
				sources: [
					{
						name: 'Product Hunt（討論區回覆）',
						url: 'https://www.producthunt.com/products/clipline-2',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: 'Clipline 在 Product Hunt 公開發佈，標示可 90 秒完成長片到短影音的 Telegram bot 流程與無月費按量付費模式。',
			},
		],
		articles: [
			{
				title: 'Clipline',
				link: 'https://www.producthunt.com/products/clipline-2',
				domain: 'producthunt.com',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
];

const workMethodsStories: Story[] = [
	{
		id: 'e9ba023c-656c-5bd6-a2b8-141d068a8f0c',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '工作方法',
		title: 'Opus 4.8：AI 回報更慎重的實用升級',
		short_summary: 'Anthropic 於 2026 年 5 月 28 日推出 Claude Opus 4.8，並稱為「modest but tangible improvement」，核心是讓模型在不確定情境下更願意標示限制而非硬湊答案。系統卡與早期測試顯示其在錯誤率與程式代碼品質把關上優於前代，尤其較少讓缺陷悄悄通過，同時維持標準 5/25 美元定價、Fast mode 降至 10/50 美元，並新增對話中途可補 system 指令的機制，對可稽核的代理工作流有直接幫助。',
		emoji: '🛠️',
		did_you_know: '系統卡顯示 Opus 4.8 在六模型比較中錯誤率最低，且程式題未被提醒的缺陷通過率比 4.7 低約四倍；Fast mode 價格也由 30/150 降到 10/50 美元（每百萬 token）。',
		talking_points: [
			'版本脈絡：Anthropic 在 2026-05-28 發布 Opus 4.8，明確定義為「可感知且穩健」改版，不把此次更新描述為全面重整。',
			'不確定性管控：模型在早期測試中更常標示不確定，較少對無法支持的主張做武斷回答，等於把「過早下結論」的風險前置。',
			'品質指標：六模型比較裡 Opus 4.8 取得最低錯誤率，程式題中缺陷未被提醒就通過的情況比前代少約四倍。',
			'成本考量：標準輸入/輸出仍維持 5/25 美元，但 Fast mode 改為 10/50 美元，低於 4.6/4.7 的 30/150，有助控制長流程成本。',
			'流程優化：新增 mid-conversation system message 後，系統指令可在對話中段補入，不必重述完整提示，能保留前段快取並降低 token 浪費。',
		],
		quote: 'Users will find Opus 4.8 to be a modest but tangible improvement on its predecessor.',
		quote_attribution: 'Anthropic, 2026-05-28',
		quote_source_url: 'https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: 'Anthropic 的產品敘事直接把「誠實」放在第一順位，從回應不確定轉向降風險，對企業而言是對錯誤資訊治理的一種產品化處理，而非只追求亮眼功能。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-entries',
					},
				],
			},
			{
				text: '這篇彙整文以可驗證指標切入，重點在錯誤率與代碼缺陷通過率。對工作方法上，訊息價值比單純品牌宣傳更高，因為能直接對應到代理任務的「先檢查再進行」流程。',
				sources: [
					{
						name: 'simonnwillison.net',
						url: 'https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-entries',
					},
				],
			},
			{
				text: '新加入的 mid-conversation system message 代表提示工程從一次性設計轉為動態治理，但同時要求明確定義角色權限與審核節點，否則成本優化可能換來控制權散亂。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: 'Anthropic 發布 Claude Opus 4.8，官方稱其為相較前代「modest but tangible improvement」。',
			},
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: '同篇訊息指出 Opus 4.8 錯誤率下降、誠實回應機制更強，且 Fast mode 價格下降，新增對話中可補 system 指令功能。',
			},
		],
		articles: [
			{
				title: 'Claude Opus 4.8: a modest but tangible improvement',
				link: 'https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
	{
		id: '7e74d7c3-5c9e-5c05-9927-3c29c720957e',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '工作方法,代理管理',
		title: 'AI 企業定價轉向：API 成本成為核心競爭',
		short_summary: 'Anthropic 與 OpenAI 在 2026 年 4 月都將企業收費轉到 API 用量，顯示 AI 供應模式已從「帳號制」走向「使用量制」。Anthropic 的企業方案已改為每席 20 美元加 API 計價，OpenAI 亦在 4/2 與 4/23 將 ChatGPT Enterprise（含教育、醫療、政府、教師方案）改為 token 為主。同時文章指出作者 30 天內 Claude Code 與 Codex 的 token 花費達 2,180.16 美元，卻只付 200 美元訂閱費，透露企業導入 AI 時，真正的工作重點是流程控制與預算治理。',
		emoji: '💸',
		did_you_know: 'Anthropic 曾以「每席包含典型工作日用量」做為賣點，但消息指出其企業收費已改為每席 20 美元加 API 用量；OpenAI 同步在 4 月兩次把 Enterprise 全部改為 token 計價。',
		talking_points: [
			'價格改寫：Anthropic 由單純席位制轉為每席 20 美元/月加 API 用量，明確把組織內部代理與 API 耗能綁在可計算帳務上。',
			'OpenAI 节點：OpenAI 在 4/2 與 4/23 兩次把 ChatGPT Enterprise（含教育、醫療、政府、教師）改為 token 計價，企業採購口徑趨向統一。',
			'實際帳務：作者以 ccusage 推估 30 天 Anthropic 1199.79 美元、OpenAI 980.37 美元，總計 2,180.16 美元 token，僅搭配 200 美元訂閱。',
			'商用訊號：若公司開始抱怨 API 帳單，通常表示工具已深度嵌入工作流，不是試用期行為，而是可擴張的生產作業成本。',
			'工作方法：GPT-5.5（4/23）與 Opus 4.7（4/16）高於前代價格，導入端需先設代理權限、任務配額與回報審核節點才不致失控。',
			'投資判斷：Anthropic 傳聞 2026 年首季可獲利＋OpenAI 價格同步，對工作者而言是「先建評估迴圈」而非只看單次回報的訊號。',
		],
		quote: 'That’s $2,180.16 worth of tokens for $200—not bad at all!',
		quote_attribution: 'Simon Willison, 2026-05-27',
		quote_source_url: 'https://simonwillison.net/2026/May/27/product-market-fit/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '使用者角度把高額 API 消費視為效率成本，能快速感受到生產加速與支出飆升間的拉扯，促成以 token 監控為中心的工作節奏。',
				sources: [
					{
						name: 'Simon Willison',
						url: 'https://simonwillison.net/2026/May/27/product-market-fit/#atom-entries',
					},
				],
			},
			{
				text: '供應商角度把價格轉為按量計費，象徵其目標不再止於招募帳號，而是拉長使用深度；對組織而言這降低了採購起始門檻卻提高治理難度。',
				sources: [
					{
						name: 'Simon Willison',
						url: 'https://simonwillison.net/2026/May/27/product-market-fit/#atom-entries',
					},
				],
			},
			{
				text: '公共與教育場域被納入同等 Enterprise 計價後，顯示這不是單一商務部門議題，校務、行政與教學單位必須像企業一樣建立使用規範。',
				sources: [
					{
						name: 'Simon Willison',
						url: 'https://simonwillison.net/2026/May/27/product-market-fit/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-02',
				date_iso: '2026-04-02',
				content: 'OpenAI 更新 Codex 與 ChatGPT Enterprise 定價為 API token 口徑，企業用量成本開始明確化。',
			},
			{
				date: '2026-04-23',
				date_iso: '2026-04-23',
				content: 'OpenAI 再次延展到既有 Enterprise 套件並公布 GPT-5.5，進一步推高新模型與 API 成本差異。',
			},
			{
				date: '2026-05-27',
				date_iso: '2026-05-27',
				content: '文章發表，作者提出 Anthropic 及 OpenAI 已具備產品市場契合跡象，並以自身帳務算出 30 天 2180.16 美元 token 消費。',
			},
		],
		articles: [
			{
				title: 'I think Anthropic and OpenAI have found product-market fit',
				link: 'https://simonwillison.net/2026/May/27/product-market-fit/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-05-27',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: '2078791d-5f7c-5638-991f-a1221c32b6d9',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: 'AI 成為美國高校畢典核心議題',
		short_summary: '美國 2026 年高等學校畢業季接連出現 AI 議題爭議，部分主講人因讚美 AI 被學生抗議，另有校方出現主講人更替或取消安排。另一方面，哥倫布藝術設計學院與瓦薩學院也有演講人改以幽默與直接對話方式談 AI，顯示人工智慧已進入畢業典禮的公共對話中，不只影響教學內容，也逼近儀式溝通與校方治理邊界。',
		emoji: '🎓',
		did_you_know: '文章引用喬治城演講人敘述：他在 1982 年完成論文時，必須先在便攜式打字機上反覆打字訂正，再交由專人整版本，主委曾代付 200 英鎊，作為「pay it forward」案例鋪陳，與今日 AI 時代形成鮮明對照。',
		talking_points: [
			'衝突升溫：2026 年畢業季部分高校主講人因談 AI 被學生抗議，顯示 AI 已從課堂主題躍升為校園公眾情緒的高敏感議題。',
			'程序前置：有學校在爭議風險下改為更換或取消主講人，反映畢業典禮已必須把 AI 發言風險納入活動治理與流程規劃。',
			'應對策略：哥倫布藝術設計學院演講先以「2026 年致詞要提 AI」做玩笑切入，先降溫再進入主題，降低直接對立的情緒成本。',
			'內容聯結：瓦薩學院演講把 AI 與中東衝突放在同場討論，說明學術致詞開始把科技議題與倫理、國際事件與社會責任捆綁敘事。',
			'價值回歸：喬治城案例以 1980 年代論文撰寫方式對照，將 AI 討論拉回「學院如何扶持學生」的制度責任，而不只停留在工具使用效能。',
		],
		quote: 'Under a little-known federal law, every commencement speech during the year 2026 is required to contain the phrase ‘in an age of artificial intelligence.’',
		quote_attribution: 'Inside Higher Ed, 2026-05-29',
		quote_source_url: 'https://www.insidehighered.com/news/students/2026/05/29/highlights-2026-commencement-addresses',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '部分學校傾向把 AI 當作不可避免的公共對話起點，透過主持措辭與場域規範先穩住情緒，重點在保住典禮秩序與校方聲譽，而非回避爭議。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/students/2026/05/29/highlights-2026-commencement-addresses',
					},
				],
			},
			{
				text: '另一路徑則是把學生視為價值共識的主體，將對 AI 的抗議視為對未來治理與職涯道德的警訊，因此要求演講者與學校在敘事上更清楚界定支持與限制。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/students/2026/05/29/highlights-2026-commencement-addresses',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: '在喬治城大學研究所畢業典禮中，演講人引用 1982 年研究生論文作業經驗，延展至 AI 時代的學習支持與社群責任敘事。',
			},
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'Inside Higher Ed 發表 2026 年 5 月 29 日彙整，整理多所高校在畢業致詞中出現 AI 觀點衝突與應對案例。',
			},
		],
		articles: [
			{
				title: 'Graduation Speakers on Musicals, Humiliation and, Yes, AI',
				link: 'https://www.insidehighered.com/news/students/2026/05/29/highlights-2026-commencement-addresses',
				domain: 'insidehighered.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
	{
		id: '95457375-23ec-573f-82b5-c6669dd90598',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: '美國推動國家AI公平實驗室縮短教育鴻溝',
		short_summary: '《Inside Higher Ed》報導顯示，學者在 2026/5/29 提出成立「國家AI公平實驗室」，本週爭取資助將 AI 不平等風險納入治理。文中追溯其在賓州大學成立、2017 年轉往南加州大學的研究中心，並回溯1997 年 HBCU 與 Indiana University 的網路設備落差；同時指出 COVID-19 期間弱勢 K-12 與社區學校最受遠距學習衝擊，且已整合 400 多所機構與 Google、Microsoft 等企業合作，顯示美國 AI 教育議題正由個人倡議轉為制度化設計。',
		emoji: '⚖️',
		did_you_know: '文中提到其本科母校超過 80% 學生為黑人、70% 為 Pell Grant 持有人；IU 時期對照顯示不少學習者仍缺乏穩定網路與電腦設備，這些細節成為其推動公平實驗室的核心動力。',
		talking_points: [
			'啟動信號：5/29 文章明確宣告啟動「國家AI公平實驗室」募資，目的是預防 AI 擴散下的新型不平等。',
			'機構沿革：其研究中心先在賓州大學成立，15 年後於2017 轉到南加州大學，顯示跨校資源能被長期承接。',
			'落差證據：1997 年在 HBCU 接觸到的實際情形是 11 名同學仍難以穩定使用網路與信箱，形成早期 AI 政策關注的直接動機。',
			'跨域合作：文中提到與超過 400 所教育機構合作，並列出 Google、Microsoft、SAS、Zoom、Sify 等企業，凸顯聯盟資源體量。',
			'政策提醒：作者將 COVID-19 遠距教學視為檢驗點，指出弱勢 K-12 與社區學校因連線不穩而在學習成果與資源競爭上更落後。',
		],
		quote: 'I also recognize that new, potentially more catastrophic disparities will rapidly emerge in the absence of substantive equity-minded practices, partnerships and policies governing AI development and use.',
		quote_attribution: 'Inside Higher Ed, 2026-05-29',
		quote_source_url: 'https://www.insidehighered.com/opinion/columns/resident-scholar/2026/05/29/why-i-created-national-ai-equity-lab',
		quote_source_domain: 'insiderhighered.com',
		perspectives: [
			{
				text: '從公平治理觀點看，文本主張 AI 不能只談工具更新，而要先處理網路、設備與制度缺口，這種前置治理取向與一般工具導向報導有明顯差異。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/opinion/columns/resident-scholar/2026/05/29/why-i-created-national-ai-equity-lab',
					},
				],
			},
			{
				text: '從資源整合觀點看，文本強調 400 多家機構與多家企業的合作網絡，表示公平工作可透過跨機構協作放大，與只靠個別校務補助相比更具政策外溢效應。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/opinion/columns/resident-scholar/2026/05/29/why-i-created-national-ai-equity-lab',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: '專欄公布成立「國家AI公平實驗室」並爭取資助，主張以政策與治理方式限制 AI 可能擴大的不平等。',
			},
		],
		articles: [
			{
				title: 'Why I Created the National AI Equity Lab',
				link: 'https://www.insidehighered.com/opinion/columns/resident-scholar/2026/05/29/why-i-created-national-ai-equity-lab',
				domain: 'insiderhighered.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'insiderhighered.com' },
		],
	},
	{
		id: 'ce48c358-b3a9-5ce7-bc97-f183cf1a3b96',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: 'A4L 管線讓 AI 助教研究跨域可複用',
		short_summary: '此篇 2026 年 5 月於 arXiv 發表的研究（以 Georgia Tech 研究情境為主）提出「A4L」模組化資料架構，目標在於讓線上學習 AI 助教產生的學習互動資料可被同一套流程處理與分析。研究以三個不同 AI 助教應用情境做案例比較，沿用一致的統計分析模組，觀察到結果在不同資料結構下可重現。作者據此主張，此架構能讓教育 AI 研究與產品評估具備可重複、可擴充與跨域比較的基礎。',
		emoji: '📊',
		did_you_know: '研究指出 A4L 把異質學習資料抽象為可共用分析格式，可避免每次導入新 AI 助教時重作整套統計腳手架；注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：屬 arXiv 工作論文，採案例導向的分析架構驗證，核心是跨域可複作方法，非隨機對照試驗。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間、效果量與信賴區間；僅可確認三個研究情境皆來自 Georgia Tech，且跨域都用同一統計分析流程。',
			'資料流程：A4L 將蒐集、整合、分析模組化，讓不同 AI 助教輸出的互動紀錄可進入同一管線，減少因格式差異造成的重建。',
			'重複性：研究顯示在三個場景重複套用同一分析方法，仍可取得一致關鍵發現，顯示資料結構差異未必阻斷可比較性。',
			'治理意義：作者主張先建基礎設施再導入新工具，將未來新增助教的分析成本壓低；對應校務層級可加速跨團隊共用與研究複核。',
			'限制提醒：研究著重方法工具能力，未提供教學成效的因果估計；若要延伸到教師現場流程，仍需補上效果與學習成果的對照研究。',
		],
		quote: 'We describe the design principles and development process used to extend the pipeline\'s analytical capabilities while preserving flexibility across domains.',
		quote_attribution: 'arXiv, 2026-05-28',
		quote_source_url: 'https://arxiv.org/abs/2605.30303',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '該研究著重的是分析基礎建設，不是單一教學工具評比；其價值在於讓各研究團隊降低重複建置成本，但對學習成效是否改善未直接下結論。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30303',
					},
				],
			},
			{
				text: '結果來自單一機構三個案例，提供方法論延展性證據；延伸研究缺口仍在於缺少不同國家、不同學段與對照設計，以確認此架構在更多場域的泛化程度。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30303',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: '論文提交至 arXiv，提出 A4L 資料分析管線可跨域複用的研究設計與驗證結果。',
			},
		],
		articles: [
			{
				title: 'Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple Domains',
				link: 'https://arxiv.org/abs/2605.30303',
				domain: 'arxiv.org',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: '8bca1c48-c847-5d26-8317-9e94bf7310f4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: 'Aryabhata 2 以強化學習加速競賽 STEM 推理',
		short_summary: '這篇發表於 2026-05-29 的 arXiv 工作論文推出 Aryabhata 2。研究以 PhysicsWallah 內部題庫訓練 GPT-OSS-20B，採可驗證獎勵的強化學習與逐步放大 rollout group，並在 JEE Main、JEE Advanced、NEET 及 AIME、HMMT、MMLU-Pro、MMLU-Redux 2.0、GPQA 上測試，顯示競賽 STEM 多步推理效能提升且輸出 token 可減少最高 64%。摘要未揭露樣本數、追蹤期間與統計顯著指標，重點在部署效率與題庫場景可行性。',
		emoji: '🧠',
		did_you_know: '論文摘要列出多個高難度數據集表現，但未公布題目規模與效果量；注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：本研究為 arXiv 工作論文，採模型後訓練設計，以 GPT-OSS-20B 為基礎模型，加入可驗證獎勵的強化學習進行能力強化。',
			'數據佐證：評估集合含 JEE Main、JEE Advanced、NEET 與 AIME、HMMT、MMLU-Pro、MMLU-Redux 2.0、GPQA；但公開摘要未揭露樣本數、追蹤期間與效果量，無法直接回推誤差範圍。',
			'研究設計：使用 PhysicsWallah 內部高品質題庫建立競賽 STEM 訓練教材，並以較長時間強化學習與更大 rollout group 擴大探索，目標降低高難度題的推理失敗率。',
			'成效訊號：結果顯示相較 GPT-OSS-20B，Aryabhata 2 在多項競試與推理基準上有進步，且輸出 token 最多降到原本的 64%，對量化服務吞吐具直接助益。',
			'教育場景意涵：該成果偏向題庫推理代理與平台效能優化，對教師課堂流程、學生學習歷程與公平性仍未提供直接實證，需要另行做場景化研究。',
			'部署提示：報告主軸是高並發解題場景下降低延遲與成本，若用於正式教學或測驗建議搭配人工作答覆監督機制與題目品質稽核。',
		],
		quote: 'Using PhysicsWallah\'s internal question banks, we construct a high-quality training curriculum and post-train GPT-OSS-20B through reinforcement learning with verifiable rewards.',
		quote_attribution: 'arXiv 2026-05-29',
		quote_source_url: 'https://arxiv.org/abs/2605.28829',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '研究強調 RL 優化在高難度競賽考題的推理效率，能回答「如何讓模型更省 token」；但在教學實務上仍缺少教師可直接採用的課程設計證據。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.28829',
					},
				],
			},
			{
				text: '論文未說明跨國資料與台灣情境驗證，亦未揭露樣本數與統計檢定，導向技術可行性訊號明確，但對「學習成效是否因果提升」仍有延伸研究缺口。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.28829',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-10',
				date_iso: '2026-04-10',
				content: '論文頁面顯示本研究提交於 2026-04-10。',
			},
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'arXiv 公開 Aryabhata 2 的摘要資訊與評估基準。',
			},
		],
		articles: [
			{
				title: 'Aryabhata 2: Scaling Reinforcement Learning for Advanced STEM Reasoning',
				link: 'https://arxiv.org/abs/2605.28829',
				domain: 'arxiv.org',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: 'a7cf63e8-570a-597d-82a4-1082896021a2',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '歷史脈絡加入可改善學生對話模擬',
		short_summary: 'arXiv 於 2026-05-29 公布研究《Who Am I?》，主題是智慧教學對話中的學生模擬。研究提出「history-conditioned student simulation」，先讓模型提取學生過往學習歷程摘要，再預測下一回合學生回應；並將流程拆成歷史檔案生成器與模擬器兩個模組，由強化學習共同訓練。資料使用真實數學學習平台的對話與問答紀錄，作者指出這種設計較只看單次對話更貼近長期學習行為，但摘要未揭露樣本數、國家與效果量，屬方法可行性研究訊號。',
		emoji: '🧪',
		did_you_know: '研究主張先用學習歷史摘要再做模擬，可比只看單輪對話更還原學生行為，但目前仍未提供樣本規模、期間與統計量。注意：本研究為方法研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：方法型研究。透過LLM對話模擬工作流程，與無歷史基線比較，目標是提高學生發言預測的忠實度。',
			'數據佐證：使用首個真實世界數學平台學生問答與對話資料，但摘要未揭露樣本數、追蹤期間或效應量，因此無法量化結果幅度。',
			'方法設計：採兩段式架構，先產生學生歷史 Profile，再條件化生成下一個對話回合，補足傳統模擬忽略跨回合脈絡的缺口。',
			'訓練策略：兩模組都以強化學習微調，目的在提升模擬對話與真實學生行為的一致性，減少人工為每個情境逐段標註成本。',
			'應用訊號：若導入 tutoring 工具，可用於離線模擬測試與回合演練，先壓測常見提問情境後再導入實際班級導覽或教案評估。',
		],
		quote: 'We introduce the task of history-conditioned student simulation, where the goal is to accurately predict student dialogue turns by leveraging information in the student\'s learning history.',
		quote_attribution: 'arXiv, 2026-05-29',
		quote_source_url: 'https://arxiv.org/abs/2605.30051',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '該研究聚焦模型可用性與模擬品質，對教育科技開發有明顯工程價值；但若直接當作學習成效論證，仍缺乏學生成效指標與教學現場驗證。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30051',
					},
				],
			},
			{
				text: '延伸研究缺口：摘要未揭露樣本數、國家背景與統計區間，亦未交代多平台與多學段對比，未來需更多對照文獻與校園場域實作，才可轉為可復現規範。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30051',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: '論文標示提交於 28 May 2026，提出歷史條件化學生模擬任務並設計兩模組RL訓練架構。',
			},
		],
		articles: [
			{
				title: 'Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues',
				link: 'https://arxiv.org/abs/2605.30051',
				domain: 'arxiv.org',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'dd3a34f5-d0db-5e8f-88d7-7cb30ad80617',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '治理授權',
		title: '生成式 AI 教育治理轉向政策與指引並行',
		short_summary: '一篇開放取用研究指出，生成式 AI 在高等教育與 K-12 的治理，正從「只訂規則」走向政策與指引並行。文中以德菲法（Delphi）結合集體撰寫彙整全球專家意見，再加入開發中國家經驗，提醒政策不宜直接照搬異地模板。對台灣學校而言，這代表可把治理重心放在能持續修正的制度框架，而非一次到位的硬性禁令，較能兼顧創新與風險。',
		emoji: '🧭',
		did_you_know: '受訪者提到，若只把既有發達國家政策直接套用，常會在在地制度與資源條件上落空；研究因此強調「政策＋指引」的混合治理，目的是同時保留彈性與基本保障。',
		talking_points: [
			'共識型方法：研究以德菲法（Delphi）加集體撰寫進行多輪校準，先統整全球意見再定稿，定位為可供跨機構對話的治理參考。',
			'跨學段整合：主題明確覆蓋 K-12 與高等教育，避免只談單一學段，並突顯政策在學習內容、責任分配與風險控管上的共通底線。',
			'在地化提醒：多位受訪者指出直接複製他國規格會產生落差，研究因此把發展中國家情境納入討論，要求政策可因地制宜。',
			'混合模型主張：核心觀點是政策不是指引、指引不是政策；以二者並行為基礎，可在維持公平與可信度同時，保留教學創新空間。',
			'開放可及：研究以 open access 發表且可直接引用，降低學術與行政單位取得材料的門檻，利於校內討論會快速展開。',
			'實務價值轉譯：對教師社群而言，最直接意義在於知道制度不是一句禁令，而是可持續更新的治理邏輯，課室需求可納入校內政策討論。',
		],
		quote: 'Policies are not guidelines, and guidelines are not policies; a hybrid approach might support innovation while safeguarding integrity, fairness, and continuous change.',
		quote_attribution: 'AI Education Simplified, 2026-05-29',
		quote_source_url: 'https://aiedusimplified.substack.com/p/new-publication-governing-generative',
		quote_source_domain: 'aiedusimplified.substack.com',
		perspectives: [
			{
				text: '研究主張偏重治理制度設計，對行政端有直接參考價值：先定義政策邊界，再用指引補齊執行細節，較能避免現場只靠臨時口頭共識。',
				sources: [
					{
						name: 'AI Education Simplified',
						url: 'https://aiedusimplified.substack.com/p/new-publication-governing-generative',
					},
				],
			},
			{
				text: '從在地化觀點看，這篇內容提供了「全球共識不等於全域照搬」的提醒。台灣可借鏡其方法，但仍需加入本地課綱、法規與資源條件，否則難落地。',
				sources: [
					{
						name: 'International Journal of Educational Technology in Higher Education',
						url: 'https://aiedusimplified.substack.com/p/new-publication-governing-generative',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: '發表《New Publication: Governing generative AI in higher education》新聞訊息，公布一篇以德菲法與集體撰寫完成的治理研究，涵蓋 K-12 與高等教育情境。',
			},
		],
		articles: [
			{
				title: 'New Publication: Governing generative AI in higher education',
				link: 'https://aiedusimplified.substack.com/p/new-publication-governing-generative',
				domain: 'aiedusimplified.substack.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'aiedusimplified.substack.com' },
		],
	},
	{
		id: 'c93bb921-80bf-52cd-b6b9-0f34314b1924',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '家庭可直接用的 10 組 AI 提示詞',
		short_summary: 'ClassTechTips 在 2026-05-28 發表〈10 Ways Families Can Use AI Today〉，整理出 10 組可立即試用的家庭 AI 提示詞，並提供可下載 PDF 做為操作手冊。內容將實務情境切成晚餐對話、家庭外出規劃、孩子提問解說等日常場景，並可直接套用 Gemini、ChatGPT、Copilot 等工具。對教師與家長而言，這篇素材顯示 AI 可先從低門檻、可複製的家庭任務切入，先建立生成式 AI 的使用習慣。',
		emoji: '🧭',
		did_you_know: '文章不只列出方法，還附上可直接下載的 PDF 提示詞清單，建議先以親子日常場景試作，並可直接拿去修改後在不同 chatbot 上重複使用。',
		talking_points: [
			'低門檻起步：文章主軸是十種日常情境模板，目標是讓家庭能不需高階門檻就把生成式 AI 納入日常。每一則皆可直接複製到對話工具測試。',
			'家庭行程實作：其中一組提示詞要求輸入「兩小時車程內」與「免費或低成本」條件，用來產生當日出遊選項，提升行程規畫效率。',
			'親子溝通優化：文中給出「給 8–14 歲的晚餐題目」提示詞，可一次產出 10 個問題，作為固定家庭對話開場。',
			'跨平台可替換：作者示範可同時搭配 Gemini、ChatGPT、Copilot，教師可依場域設備與資源限制選擇，不需受限單一工具。',
			'先談界線：內容在實作前先處理 AI 隱私議題，明確區隔校內外使用情境，適合教師在家庭作業任務中納入風險提醒。',
			'可直接複製：每個場景都提供「可修改提示詞＋示例回應」結構，利於老師改寫為課前延伸活動或親職共學清單。',
		],
		quote: 'AI privacy concerns came up right away, and we spent time digging into what it means to use AI inside and outside of school.',
		quote_attribution: 'ClassTechTips, 2026-05-28',
		quote_source_url: 'https://classtechtips.com/2026/05/28/ai-prompts-for-families/',
		quote_source_domain: 'classtechtips.com',
		perspectives: [
			{
				text: '文章把 AI 學習從課堂延伸到家庭情境，重點不在硬體升級，而是讓孩子與家長用同一種提示詞語言協作，教師可直接接力成為家庭作業設計來源。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/05/28/ai-prompts-for-families/',
					},
				],
			},
			{
				text: '敘事上偏重流程與模板而非成效數據，適合做啟動教材，但若要導入教學改革，仍需教師再補上評量指標，例如家庭回饋次數、提問品質或完成率。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/05/28/ai-prompts-for-families/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: 'ClassTechTips 發表〈10 Ways Families Can Use AI Today〉，整理十組家庭可直接使用的 AI 提示詞並提供下載素材。',
			},
		],
		articles: [
			{
				title: '10 Ways Families Can Use AI Today',
				link: 'https://classtechtips.com/2026/05/28/ai-prompts-for-families/',
				domain: 'classtechtips.com',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
	{
		id: '9b3abbdb-22ff-55bb-946b-6b0765123532',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '跨學段可複製的 60 秒問題影片流程',
		short_summary: '這篇 2026-05-28 發表的文章介紹「60 Seconds Knowledge」這個 YouTube 頻道，指出其內容以 60 秒短片快速回答有趣問題，並建議老師播放後接一則短寫作題，讓學生立即延伸思考。對教師來說，這種「先看片段再寫作」的設計可在有限備課時間內快速啟動討論，形成可被重複套用的課堂節奏，但題目還是需要依學段與科目再做調整。',
		emoji: '🎬',
		did_you_know: '原文舉例：播放影片後可直接追問「某場戰役雖贏下戰鬥卻輸掉整體」，引導學生比較不同情境下的抉擇結果。',
		talking_points: [
			'微時間成本流程：原文主張影片長度為 60 秒，適合放在課前導入，老師可在不增加大量授課時間下，先建立學生注意力。',
			'觀看接寫作的節奏：建議教學動作為「播影片→短寫作題」，學生能立即輸出理解與反思，教師也可更快蒐集班級回饋。',
			'教材主題延展性：雖未限定學科，文中示例連到歷史題材，教師可依據課程改寫為歷史、語文、社會等不同主題。',
			'跨學段使用提示：文中未綁定小學或高中，需依學生程度拆解提問深度，才能避免單一學段直接套用造成理解落差。',
			'可直接試作門檻：內容以 YouTube 與一般紙筆寫作為主，對無大型預算的學校也是可嘗試的低門檻教學補充。',
		],
		quote: 'They create short videos providing the answers to intriguing questions.',
		quote_attribution: '教育部落格, 2026-05-28',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/28/60-seconds-knowledge-seems-like-a-pretty-useful-youtube-channel/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '這篇內容偏向教學流程素材建議，強調可直接套用的節奏。對偏重落地方法的教師有價值，但未提供正式評量指標，需自行補上觀察與回饋設計。',
				sources: [
					{
						name: '教育部落格',
						url: 'https://larryferlazzo.edublogs.org/2026/05/28/60-seconds-knowledge-seems-like-a-pretty-useful-youtube-channel/',
					},
				],
			},
			{
				text: '素材的主軸是提問式短影片，而非完整課程設計；同一做法可跨科調整，但若未改寫題幹，初學者在高年級與初階課綱中的難度對齊仍有風險。',
				sources: [
					{
						name: '教育部落格',
						url: 'https://larryferlazzo.edublogs.org/2026/05/28/60-seconds-knowledge-seems-like-a-pretty-useful-youtube-channel/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: '發布文章，介紹 60 秒短影片頻道，並建議教師在影片後接短寫作題做課堂延伸。',
			},
		],
		articles: [
			{
				title: '60 Seconds Knowledge Seems Like A Pretty Useful YouTube Channel',
				link: 'https://larryferlazzo.edublogs.org/2026/05/28/60-seconds-knowledge-seems-like-a-pretty-useful-youtube-channel/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: '15606902-9d16-5ad4-8802-4a26c05de11c',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '高中英文課把 AI 素養併入課綱',
		short_summary: '在課表與課綱都已排滿的情境下，AI 素養容易被擠去晨會或課後再補。AI for Education 指出，10、11 年級英文課可直接將生成式 AI 輸出納入閱讀與寫作流程，讓學生把它視為可批判文本，並直接觀察 Grammarly 對寫作聲音的干預。核心意義是：AI 素養不應一次性補課，而是透過科目情境持續建立責任與判斷能力。',
		emoji: '📚',
		did_you_know: '文章中的高中班級做法顯示，學生先把 chatbot 回應當作討論材料後，教師才逐步引導他們比較文本品質，進而討論倫理與自主權，操作上比先立規範更能看見差異。',
		talking_points: [
			'課綱內嵌是前提：文章指出，AI 素養不必另闢時段，直接放進既有英文課的閱讀、寫作任務，才能在滿課表下持續執行',
			'高中10、11年級可照抄的流程：教師將生成式 AI 回應與指定閱讀文本並排討論，再請學生逐段驗證，讓批判性在作業流程中被練出來',
			'聊天機器人當教材：讓學生把對話當文本閱讀，當發現內容「bizarre / disjointed」時，先追問證據再談工具限制，可具體化思辨訓練',
			'Grammarly的風險示警：該工具會調整學生文本語氣，課堂可用同題人機稿對照，明確談「協作」與「代筆」的界線',
			'課程取捨也成為新教材：案例說明整合 AI 時有學程銷量上的犧牲，但以主題融合可保留高關聯學科任務的深度',
		],
		quote: 'Evidence is mounting that AI literacy can\'t be a one-off experience.',
		quote_attribution: 'AI for Education, 2026-05-27',
		quote_source_url: 'https://www.aiforeducation.io/blog/where-does-ai-literacy-fit',
		quote_source_domain: 'aiforeducation.io',
		perspectives: [
			{
				text: 'AI for Education 的角度偏可行性導向：不是先談通通用工具清單，而是把 AI 素養綁進既有科目任務，才不會變成無法維持的額外加碼。',
				sources: [
					{
						name: 'AI for Education',
						url: 'https://www.aiforeducation.io/blog/where-does-ai-literacy-fit',
					},
				],
			},
			{
				text: '文章另引用 Brookings 與美國心理學會的建議，構成治理層觀點：比起暫停或放任，更可行的是情境式、跨課程地教會學生怎麼負責使用，與現場教師做法形成互補。',
				sources: [
					{
						name: 'Brookings / APA',
						url: 'https://www.aiforeducation.io/blog/where-does-ai-literacy-fit',
					},
					{
						name: 'The 74',
						url: 'https://www.aiforeducation.io/blog/where-does-ai-literacy-fit',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-27',
				date_iso: '2026-05-27',
				content: 'AI for Education 發表《Where Does AI Literacy Fit?》，以高中英文課做法支持將生成式 AI 素養納入既有課程流程。',
			},
		],
		articles: [
			{
				title: 'Where Does AI Literacy Fit?',
				link: 'https://www.aiforeducation.io/blog/where-does-ai-literacy-fit',
				domain: 'aiforeducation.io',
				date: '2026-05-27',
			},
		],
		domains: [
			{ name: 'aiforeducation.io' },
		],
	},
	{
		id: 'f8bcae88-3425-5d25-af7d-6909e315cc98',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '生成式AI素養教師專案四件事',
		short_summary: 'aiforeducation 在五月底舉行 Generative AI Literacy Trainer Essentials 的期末成果日，來自參與者的四類專案同時被公開：以學習可見化重設學術誠信、教師共建 AI 使用示例網站、區域推廣型 Fellowship、以及行政提詞管理流程。重點不在單一工具，而是把同一套觀點框架同時導入課堂、社群與行政，讓生成式 AI 素養能從短期工作坊，演變成可長期運作的校內流程。',
		emoji: '📚',
		did_you_know: '文章明確列出四件成果，並同步公告 6 月與 7 月有新一期徵選；同時說明這四件事都以同一套 SEE 觀點對位框架連結起來，代表推進重點已從零散試驗，轉為可持續擴散的制度化路徑。',
		talking_points: [
			'學段可複用：四件專案都共用 SEE 觀點對位框架，教師可先依框架對齊已有教學目標，快速完成第一輪 AI 活用定位。',
			'可直接試作：學術誠信微證照將評量改成作品、觀察紀錄與學生對談三角驗證，降低只靠字型比對抓出抄襲的失焦風險。',
			'可直接試作：行政提詞工作坊要求「先存提示、再用 SEE 過濾、最後稽核」，把高頻提問行為整理成可追蹤流程，減少重複問答時間。',
			'新出現做法：教師共建網站同步放入實際課堂使用案例，以人當主角的方式讓同儕參考，不再只靠教材文字講解。',
			'可直接試作：district-wide AI Fellowship 採 train-the-trainer（授帶教）結構，先訓練核心教師再向校內擴張，有利維持專案後續動能。',
		],
		quote: 'A co-built website anchoring AI usage conversations around the SEE Framework, with exemplars of teachers using AI through the SEE lenses, making teachers the hero of the AI story.',
		quote_attribution: 'aiforeducation.io, 2026-05-27',
		quote_source_url: 'https://www.aiforeducation.io/blog/ai-literacy-project-showcase',
		quote_source_domain: 'aiforeducation.io',
		perspectives: [
			{
				text: '第一種張力在於管理邏輯：文章把學術誠信的核心從「是否有作弊」轉為「學習是否可被看見」，讓教師把精力放在課程設計與證據收集，而非單純加強查核。',
				sources: [
					{
						name: 'aiforeducation.io',
						url: 'https://www.aiforeducation.io/blog/ai-literacy-project-showcase',
					},
				],
			},
			{
				text: '第二種張力在於角色分工：內容同時納入行政、教師、社群三端，暗示生成式 AI 素養不是個別老師新玩具，而是要靠校級流程配套，否則容易因人而異而難以持續。',
				sources: [
					{
						name: 'aiforeducation.io',
						url: 'https://www.aiforeducation.io/blog/ai-literacy-project-showcase',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-27',
				date_iso: '2026-05-27',
				content: 'Generative AI Literacy Trainer Essentials 課程結束日舉辦期末成果展示，發表四件以生成式 AI 素養為核心的教師實作案例。',
			},
		],
		articles: [
			{
				title: 'AI Literacy Project Showcase',
				link: 'https://www.aiforeducation.io/blog/ai-literacy-project-showcase',
				domain: 'aiforeducation.io',
				date: '2026-05-27',
			},
		],
		domains: [
			{ name: 'aiforeducation.io' },
		],
	},
];

const educationResearchStories: Story[] = [
	{
		id: 'b50b12e1-4bea-536d-91f6-cc4820175e06',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '政策評估',
		title: '田納西免學費社區學院政策成效',
		short_summary: 'NBER 工作論文以美國田納西州 Tennessee Promise 為研究場域，觀察此免學費社區學院補助自單縣試辦擴及全州後的成效。研究比較政策展開前後的學生教育路徑，摘要顯示19歲入學率提升5.4個百分點，21歲副學士比例提升2.9個百分點；24歲學士比率與21歲所得的提升則較弱。這類政策評估可作台灣檢驗「補助是否先帶動進入率」的參考，但摘要未揭露樣本數、追蹤母體規模與統計不確定度，不能直接外推到不同學段與制度。',
		emoji: '🎓',
		did_you_know: '研究摘要指出，19歲與21歲族群在入學與副學位結果上出現正向位移，但學位深化與所得改善未呈現穩定優勢；注意：本研究為觀察性政策評估工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文採自然實驗化政策評估，核心是政策擴及前後比較，非RCT，主要提供先導證據而非最終因果定論。',
			'數據佐證：摘要提供19歲入學率＋5.4個百分點、21歲副學士＋2.9個百分點；24歲學士及21歲所得僅弱化正向，且未公開樣本數、追蹤期間與信賴區間。',
			'老師下一步：把補助推動前後各班級的「新生人數、休學率、轉學率」做同一追蹤表，鎖定哪類學生最受補助影響，決定資源導向。',
			'老師下一步：每月用作業與到課資料做前測、後測追蹤，搭配學生訪談記錄經濟壓力與學習負荷，將高風險學生提早轉介輔導。',
			'政策實作提醒：建議先在小規模學校試辦、再擴大，並設「入學、銜接、畢業」三層儀表板；教育成效不是只看學歷數，更看持續率與學習進展。',
		],
		quote: 'Promise increased college enrollment by 5.4 percentage points among 19-year-olds.',
		quote_attribution: 'NBER, 2026-05-30',
		quote_source_url: 'https://www.nber.org/papers/w35226#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '對提升進入機會的政策者而言，研究顯示補助可推高入學與轉學動能，但對是否改善學位完成度仍僅有弱訊號，應聚焦前段銜接設計。',
				sources: [
					{
						name: 'NBER (National Bureau of Economic Research)',
						url: 'https://www.nber.org/papers/w35226#fromrss',
					},
				],
			},
			{
				text: '對台灣的類比而言，這是單一州政策實證，與本地入學制度、學費結構及社區學院生態不同，需補做跨校區對照研究後再設計外推決策。',
				sources: [
					{
						name: 'NBER (National Bureau of Economic Research)',
						url: 'https://www.nber.org/papers/w35226#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'A Promise Worth Keeping? Impacts of Free Community College on Degrees and Earnings',
				link: 'https://www.nber.org/papers/w35226#fromrss',
				domain: 'nber.org',
				date: '2026-05-30',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: '2c590943-8ba6-5586-b732-7588622b4291',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: 'AI 解析金融網絡可提升壓力監理精準度',
		short_summary: '本研究以非銀行金融中介持股網路（覆蓋近40兆美元）建構圖神經網路，利用資產與投資人潛在表示預測交易行為與危機期報酬。結果顯示，壓力情境下資產報酬斷面解釋力超越傳統方法逾十倍，機構層級系統性風險指標亦較佳，並在宏觀審慎最適政策模型中提升干預精準度。對台灣教師與政策課程而言，可作為「預測訊號如何轉為政策決策」的研究設計案例。',
		emoji: '📉',
		did_you_know: '研究發現模型在壓力事件中可更早辨識拋售脆弱度，且對未出現在訓練集的資產或投資人仍可做外推估計。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文採圖神經網路做量化方法研究，並將成果放入宏觀審慎政策最適化模型比較福利與干預精準度。',
			'數據佐證：摘要揭露資料涵蓋近40兆美元資產規模之非銀行中介持股網路；但未揭露機構數、追蹤期間、交叉驗證窗與信賴區間。',
			'核心機制：將資產與投資人編碼為潛在向量，從網絡結構捕捉拋售脆弱度，壓力時段下對資產報酬變異的解釋力高於傳統方法十倍以上。',
			'老師可怎麼教：可先安排學生用同一份模擬持股網路跑傳統風險指標，再加入圖模型預測，對比兩組「預警名單」命中率。',
			'成效檢核：上課可用「預測訊號是否改變政策選擇」作為觀察點，記錄假設變數、測試窗口、干預對象與結果差異，避免只看單次精準度。',
			'不宜誤讀：即使結果較佳，研究亦未證明所有市場皆可直接外推；台灣若要用於教學與行政參考，仍需加上在地資料與法規情境的補充驗證。',
		],
		quote: 'The architecture is fully inductive, producing informative estimates even when entire asset classes or investors are withheld from training.',
		quote_attribution: 'NBER, 2026-05-30',
		quote_source_url: 'https://www.nber.org/papers/w35227#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究價值在於把網絡化深度學習與宏觀審慎決策連結，對金融監理工具設計很有啟發；但目前僅為單篇工作論文，不能直接視為可套用共識。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35227#fromrss',
					},
				],
			},
			{
				text: '方法論上凸顯預測訊號與制度機制可互補；對台灣政策與課程而言，重點是如何把模型輸出轉為可追蹤、可審計的干預流程，而非只追求數值更高。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35227#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-30',
				date_iso: '2026-05-30',
				content: 'NBER 發表工作論文 w35227《The Optimal Use of AI in Financial Regulation》',
			},
		],
		articles: [
			{
				title: 'The Optimal Use of AI in Financial Regulation',
				link: 'https://www.nber.org/papers/w35227#fromrss',
				domain: 'nber.org',
				date: '2026-05-30',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'a14c4900-7a85-51a1-8e75-ad5980f4ba03',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '四項大規模實驗未見成長心態與歸屬感提昇成效',
		short_summary: '這份 NBER 工作論文在兩所加拿大大學進行四項大規模實驗，總樣本近 12,000 名大學生，檢驗成長思維與社會歸屬介入。研究使用實驗設計比對效果，並追蹤學生成績與升學持續性。結果是：無論即時成績或後續追蹤，皆未見明顯改善；再以問卷、行政資料進行機器學習異質性分析，也沒有發現明顯子群受益。對台灣學校而言，這提醒「看起來好用」的輕量心理介入，仍需在本地情境先驗證，再決定是否制度化。',
		emoji: '🧪',
		did_you_know: '本研究在加拿大兩所大學、約 12,000 名學生中設計四項實驗，結果未看到成績與留校率明顯提升；即使細分學生子群，資料仍未顯示可穩定受益者。注意：本研究為 RCT 工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：採四項大規模隨機對照實驗（RCT），並輔以問卷與行政資料，最後再用機器學習進行處置異質性分析。',
			'數據佐證：公開摘要揭露樣本近 12,000 人、橫跨兩所加拿大大學；但未揭露每組效果量、信賴區間、追蹤百分點差等完整量化結果。',
			'老師下一步可怎麼做：先設定基準值（成績、出席、續修率）與實施對照組，完成小規模試辦再逐步擴大，避免一次到位的大規模鋪陳。',
			'老師下一步可怎麼做：若要做歸屬感支持，先用具體行為流程替代口號，如固定同儕回饋、回顧日誌、任務承諾卡，並以學生可觀察產出追蹤。',
			'老師下一步可怎麼做：設定停損條件與檢核節奏，例如每四週檢查學習參與與作業完成率，未達門檻時立即調整方法而非堆砌更多同類活動。',
		],
		quote: 'we find no immediate or dynamic effects on student grades and no effect on persistence through university.',
		quote_attribution: 'NBER, 2026-05-30',
		quote_source_url: 'https://www.nber.org/papers/w35230#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '這份研究的重要性不在於推翻所有心態介入，而是提醒研究者：在有控制組、足夠樣本下，常見輕量方案不一定能改變成績或持續率，設計與情境才是關鍵。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35230#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口：目前僅有單篇工作論文，無法替代跨學段或跨國比較共識；政策面可視為「尚需再驗證」訊號，而非反對輔導介入本身的否定性結論。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35230#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'The (Lack of) Efficacy of Social Belonging and Growth Mindset Interventions Among College Students',
				link: 'https://www.nber.org/papers/w35230#fromrss',
				domain: 'nber.org',
				date: '2026-05-30',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: '1b079788-221a-5317-9a1b-67fa50faccc0',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '里約中學禁手機考績升0.06 SD',
		short_summary: 'NBER 工作論文分析巴西里約2023年的校內手機政策，採用準自然實驗設計：將本來已有嚴格手機規範的學校當作對照，與未有嚴格規範的學校比較政策前後差異。結果顯示，施政後受影響組的手機使用顯著下降，考試成績比對照組提升0.06個標準差。研究提供了政策執行可行性與效果方向的量化線索，對台灣校務決策有參考價值，但仍需以本地情境再驗證。',
		emoji: '📱',
		did_you_know: '研究顯示處理組與對照組在禁令前成績走勢接近，禁令後才出現0.06個標準差的相對提升。注意：本研究為準實驗政策評估設計，不宜直接推論普遍因果。',
		talking_points: [
			'證據類型：準實驗政策比較研究，將有與無既有嚴格校規的中學作對照，透過政策前後差異估計影響。',
			'數據佐證：公開摘要未揭露樣本規模與追蹤人數；但提到受干預校內手機使用下降，成績在2026研究中相對改善0.06個標準差。',
			'老師下一步可做：先建立手機用途清單與處理流程，試行前先做一週基線紀錄，避免直接全校硬推造成可行性偏差。',
			'老師下一步可做：課堂先規劃非手機的替代任務，要求學生每節課交回1項學習產出與1句反思，維持專注節奏並保留學習軌跡。',
			'老師下一步可做：回饋語可固定為「先完成任務，再回應訊息」，並以作業完成率、成績小幅變化、衝突事件、教師觀察日誌做四週量化追蹤。',
		],
		quote: 'test scores, which were trending similarly in the two groups prior to the ban, improved by 0.06 s.d. in treatment schools relative to control.',
		quote_attribution: 'NBER, 2026-05-30',
		quote_source_url: 'https://www.nber.org/papers/w35233#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '這是政策執行層面的實證訊號：只有在校內規範與落實一致時，才看見考績差異；對台灣可作為「先小規模試辦、再擴散」的政策判讀。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35233#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口在於外部效度：摘要未提供樣本規模與持續追蹤窗，研究結果可能受地方治理與教師執行力條件影響，須以本地對照資料再補強。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35233#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'The Educational Impacts of School Phone Bans: Evidence from Brazil',
				link: 'https://www.nber.org/papers/w35233#fromrss',
				domain: 'nber.org',
				date: '2026-05-30',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'da553be3-d71b-5557-90b3-5e9b942e9209',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '高品質公設辯護可縮小德州族群量刑差距',
		short_summary: '這篇 2026 年 NBER 工作論文，以美國德州某大型郡的法庭指定辯護案件為資料來源，採用近乎隨機分派法庭辯護員的準實驗設計，比較辯護品質差異對判決結果的影響。公開摘要未揭露原始樣本數與追蹤期間。研究顯示，辯護品質每提高 1 個標準差，黑人案件撤銷率上升約 7.1%，白人僅約 3.9%；前 10% 辯護品質可再帶來 12–17% 的撤銷率提升，並使入獄天數下降 13–22%。估算指出，若半數法庭指定辯護人達到前 10% 品質，黑人與白人入獄差距可縮小約 11%，顯示制度資源配置本身即可成為縮減司法歧視的實務抓手。',
		emoji: '⚖️',
		did_you_know: '研究指出，若半數法庭指定辯護人達到前 10% 品質，黑人與白人入獄判決差距可縮小約 11%，且高品質輔助可使黑人的撤銷率較白人高出近兩倍（7.1% 對 3.9%）。注意：本研究為準實驗，未必可直接推論全部地區的因果關係。',
		talking_points: [
			'證據類型：準實驗性觀察研究。研究利用德州某大郡案件中近似隨機分派的公設辯護人，形成可比較品質差異對結果影響的設計，較一般相關研究更接近因果辨識，但仍非完全隨機試驗。',
			'數據佐證：摘要提供可量化結果，但未揭露原始樣本數與完整追蹤窗；可直接引用的關鍵數據為：品質每增加 1 個標準差，黑人撤銷率較白人高出 7.1% 對 3.9%；前 10% 辯護品質可使撤銷率再提高 12–17%，入獄天數下降 13–22%。',
			'政策訊號：若要縮小差距，單純增加案件數不足，核心在於提升前段辯護品質的可及性；管理端可先建立最低品質門檻與派案機制，避免高品質人力長期偏向特定對象，讓制度面資源分配更公平。',
			'可操作建議：對學校法政或公權力教育課程可作案例引導，先建立「指派透明度」表單（案件特徵、辯護品質級別、結果），再以分群追蹤方式比較不同組合下的結果差異，讓學生理解制度設計會改變結果。',
			'風險提醒：研究僅來自單一郡，且摘要未交代樣本規模與追蹤期限；在不同法院、不同犯罪型態推動前，需先做本地小規模對照，避免將 11% 預估直接視為全域政策保證。',
			'教學對照：教師在課堂可用同一題幹的情境題：同一犯罪情境搭配不同資源分配策略，讓學生比較結果差異與公平性；同時加入方法素養，標記「準實驗」與「隨機控制」的不同邊界。',
		],
		quote: 'A one-standard-deviation increase in quality raises Black dismissal rates nearly twice that of Whites’ (7.1% versus 3.9%), and top-10% representation increases dismissals by 12–17% and reduces jail by 13-22% relative to Whites.',
		quote_attribution: 'NBER, 2026-05-30',
		quote_source_url: 'https://www.nber.org/papers/w35234#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究角度一：結果強調辯護品質本身就是公平性的關鍵變項，對台灣法務或校務管理有啟示，即便是在相近制度條件下，資源品質的分配不均也可能放大不平等，需將「品質標準」納入治理目標。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35234#fromrss',
					},
				],
			},
			{
				text: '研究角度二：方法層面仍有延伸需求。單縣資料對政策外推有限，且非全面 RCT；對政策決策者而言，應採「延伸研究缺口」框架，先用當地資料複證，再決定是否同步調整指派規則，而非直接照搬數字。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35234#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Attorney Value-Added and Racial Disparities in the Criminal Justice System',
				link: 'https://www.nber.org/papers/w35234#fromrss',
				domain: 'nber.org',
				date: '2026-05-30',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: '72906da8-32ac-5a00-a9a9-d57985c0ae64',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: 'SNAP縮減恐壓縮美國校餐免費名額',
		short_summary: '對台灣學校管理者來說，這則消息最重要的提醒是：當家庭主食補助端先縮水，學校端的免費供餐就會很快遇到供應與行政斷點，直接影響學童在校日常與學習投入。美國FRAC指出，受《One Big, Beautiful Bill》等政策影響，SNAP參與者一年已減少約330萬人，近74%學區已憂心該法令與Medicaid變動導致校餐資格認定受阻；又因2025-26學年逾80%學區反映食材與人力成本偏高，單靠調整行政流程難以快速補位。',
		emoji: '🥗',
		did_you_know: 'FRAC於2026-05-27的報告中顯示，34%的SNAP家庭有子女；在12個有可得資料州別，過去一年與SNAP相關的受助兒童人數已減少超過70萬人，直接影響校餐需求判定。',
		talking_points: [
			'風險識別：FRAC調查顯示74%學區已預期SNAP與Medicaid縮減會壓低免費供餐名額，且提高家庭資格證明與餐點認定行政負擔。',
			'家庭斷鏈：SNAP一年下降約330萬人，若以台灣觀點看，福利邊界縮小常先衝擊學生家庭生活穩定，再導致出勤與課堂專注度下滑。',
			'執行成本：報告指出，2025-26學年度受訪96個學區中超過80%回報食材與勞務成本偏高，短期難靠擴大報名參與來彌補預算缺口。',
			'長期趨勢：CBO估算OBB法案在2025-2034期間平均每月讓SNAP人數再降約240萬，2028-2034年兒童營養補助每月可能再少約96,000人。',
			'治理能力：USDA學童營養署已因重組裁撤近30%人力，若地方監督與專責人力同步流失，學校端就更難在第一時間處理認定、供餐與異常回報。',
		],
		quote: 'As a result, the cuts to SNAP risk increasing food insecurity for children both at home and in the classroom.',
		quote_attribution: 'FRAC, 2026-05-27',
		quote_source_url: 'https://www.k12dive.com/news/school-meal-participation-at-risk-from-snap-cuts-frac-reports/821547/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'FRAC視角強調的是學生福祉風險，認為SNAP縮減不只是補助比例調整，而是會形成家庭與校園間的營養缺口同時放大，需同步關注。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/school-meal-participation-at-risk-from-snap-cuts-frac-reports/821547/',
					},
				],
			},
			{
				text: 'CBO視角偏財政技術路徑，先落在可預測量化結果：人數與月份趨勢，給決策者的是長期壓力軌跡，而非現場即時行政處方。',
				sources: [
					{
						name: 'CBO',
						url: 'https://www.k12dive.com/news/school-meal-participation-at-risk-from-snap-cuts-frac-reports/821547/',
					},
				],
			},
			{
				text: '議會監督視角則聚焦執行治理，質疑USDA FNS重組及近30%人力減少是否會削弱地方監督與專業支援，這是台灣學校行政也可借鏡的治理風險。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/school-meal-participation-at-risk-from-snap-cuts-frac-reports/821547/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-27',
				date_iso: '2026-05-27',
				content: 'FRAC釋出調查與研究指出美國學區普遍擔心SNAP與Medicaid變動對校餐參與的衝擊。',
			},
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'K12DIVE發布《School meal participation at risk from SNAP cuts, FRAC reports》文章整理相關資料。',
			},
		],
		articles: [
			{
				title: 'School meal participation at risk from SNAP cuts, FRAC reports',
				link: 'https://www.k12dive.com/news/school-meal-participation-at-risk-from-snap-cuts-frac-reports/821547/',
				domain: 'k12dive.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'cace8221-bc61-5808-8732-ceb1fd472096',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '組織運作',
		title: '學位貸款封頂 先衝擊教育人力招募',
		short_summary: '美國教育部4月完成學生貸款規則，將教育學位排除出可列為「專業學位」的豁免，7月1日起受每年10萬美元上限；21州與哥倫比亞特區於5月19日提起訴訟。對台灣教師與學校經營者來說，這件事提醒：若師資進修資金不足，行政、輔導、教師等關鍵職務的人力接續會先受影響，學校留任與替代人力安排壓力會提早出現。',
		emoji: '⚠️',
		did_you_know: '該署仍以超過5年前資料為據，當時約90%教育研究生年度借款低於20,500美元；原文同時指出生活成本上升下，超過上限的人數可能再增加。',
		talking_points: [
			'門檻差異：4月規則把教育學位列為非專業學位，7月1日起仍受每年10萬美元學生貸款上限，新增借款缺口風險。',
			'學位回饋壓力：原文提到，負債與家庭支出同步上升時，進修後投入學校行政、教師、輔導等職軌跡的意願會被明顯壓低。',
			'數據風險：官方依據是5年多前資料，當時90%教育碩博士低於20,500美元；但研究者指出此比例在高生活成本時代可能不再成立。',
			'爭議延續：5月19日21州與D.C.提告，核心爭點包含護理等主要領域是否應被排除，顯示貸款規則具有可被司法重寫的風險。',
			'台灣可借鏡：若未來國內教師進修補助不足，可能出現「薪資改善慢、進修負擔重」的雙重缺人循環，需提前監看高風險職缺缺口。',
			'政策回應窗口：該規則出自美式聯邦體系與州政府關係，台灣可借鏡的做法是建立早期預警指標，而非只看年度一次性補助。',
		],
		quote: 'I can’t imagine the stress that students are feeling.',
		quote_attribution: 'K12 Dive, 2026-05-29',
		quote_source_url: 'https://www.k12dive.com/news/staffed-up-education-no-longer-professional-degree-ripple-effects/821412/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '倡議端認為最先受衝擊的是人才培育路徑：研究生階段若因負債擔憂退步，學校將先失去可接班的行政與輔導人力，而不是只剩薪資議題而已。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/staffed-up-education-no-longer-professional-degree-ripple-effects/821412/',
					},
				],
			},
			{
				text: '政策端則以制度定義為主軸，主張專業學位必須對應特定執照與職前實務，因此教育學位不符原條文；但此邏輯未直接回答人力供給與現場成本。',
				sources: [
					{
						name: '美國教育部（依據報導整理）',
						url: 'https://www.k12dive.com/news/staffed-up-education-no-longer-professional-degree-ripple-effects/821412/',
					},
				],
			},
			{
				text: '法源面向的衝突集中在定義是否過窄：21州與D.C.直接提告，將規則推向司法審查，代表學校應將「法規風險」納入人力規劃與預算情境。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/staffed-up-education-no-longer-professional-degree-ripple-effects/821412/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-19',
				date_iso: '2026-05-19',
				content: '21州與哥倫比亞特區聯合對美國教育部提告，質疑排除特定高風險專業與教育學位的貸款規則。',
			},
			{
				date: '2026-07-01',
				date_iso: '2026-07-01',
				content: '學生貸款規則生效，教育學位仍未納入享有20萬美元生涯上限的專業學位範圍。',
			},
		],
		articles: [
			{
				title: 'Education is no longer a ‘professional degree.’ What will the ripple effects be?',
				link: 'https://www.k12dive.com/news/staffed-up-education-no-longer-professional-degree-ripple-effects/821412/',
				domain: 'k12dive.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '0914453e-b782-56aa-893b-cc0286430147',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: 'K-12 週訊測驗：未用經費與教師會提案',
		short_summary: '這篇 2026-05-29 在 K12DIVE 發布的「過去一週 K-12 新聞測驗」把近期訊息整理成 5 題回顧，核心聚焦未用聯邦經費與美國教師聯盟（AFT）提案。對台灣教師與學校管理者而言，這類資訊整理提醒我國現場也要同步看資源帳面與政策變化：如果只看零散新聞，會錯過可追蹤的治理缺口；而以週期化清單比對，才能提早發現預算與提案衝突點。',
		emoji: '🧭',
		did_you_know: '文章內容只有一則 5 題測驗頁，但明確標示為「未用聯邦資金」與 AFT 提案的回顧主題，並邀請讀者以 #K12DivePopQuiz 分享分數。',
		talking_points: [
			'5 題快測：2026-05-29 這篇文章用 5 題設計，將近一週 K-12 事件濃縮為可快速盤點的問題。',
			'資源與提案並行：題目同時提到未用聯邦資金與 AFT 提案，顯示治理決策要同時考量財務與勞資政策兩端。',
			'台灣可借鏡：建議校務管理端採每週檢核機制，至少保留「補助結餘」與「現行提案」兩欄位做對齊。',
			'共讀方式：以 #K12DivePopQuiz 讓讀者回報分數，建立外部同儕校準，降低單位間對政策資訊的理解落差。',
			'訊息來源邊界：目前可見內容僅來自 k12dive.com，一次回顧未提供地方政府、學校或財務單位的原始文件連結。',
		],
		quote: 'From unspent federal funds to an American Federation of Teachers proposal, what did you learn from our recent stories?',
		quote_attribution: 'K12DIVE, 2026-05-29',
		quote_source_url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-29-2026/821410/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '閱讀策略視角上，本篇是“測驗化摘要”而非專題深描，先把事件變成可記憶清單，方便第一線工作者快速同步。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-29-2026/821410/',
					},
				],
			},
			{
				text: '治理視角上，將預算結餘與教師工會提案放在同一篇，反映教育政策風險來自財務留存與現場倡議兩方，對台灣也有對比參考。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-29-2026/821410/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: 'K12DIVE 發布每週 K-12 快訊測驗，聚焦未用聯邦資金與 AFT 提案等近週焦點。',
			},
		],
		articles: [
			{
				title: 'Test yourself on the past week’s K-12 news',
				link: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-29-2026/821410/',
				domain: 'k12dive.com',
				date: '2026-05-29',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '0b31caa1-91ea-50d4-96c0-56dd1954476b',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '組織運作',
		title: '匹茲堡12校關閉與2校啟用：校務重整不只關門',
		short_summary: '對台灣面對生源下滑與老舊校舍壓力的校務主管來說，重點在於把『縮編』與『服務均衡』一起做。匹茲堡公立學區於2026-05-27通過《Future Ready》方案，決議關閉12所學校、開設2所新校，並自2027-28學年起分階段調整學校與課程；官方估計2027年可省4百萬美元、2028年再省8百萬美元，並將節省空間轉入學術、藝術、體育與職涯課程擴充。',
		emoji: '🏫',
		did_you_know: '該區2012-13到2023-24學生每年約降2.7%，目前總學生人數為17,937人；校舍平均年齡約90年，預估未來7年可節省超過1億美元設施費，並投入1.03億美元做學習空間現代化。',
		talking_points: [
			'節流與增能並行：方案同時關閉12校、開2校，且將天才班與補救課程導回鄰校，意在避免只為省錢而犧牲學生服務。',
			'節約承諾明確：公告稱2027年可少支出4百萬美元、2028年再少8百萬美元，給台灣提供「每生每校」可追蹤的縮編財務節點參考。',
			'結構壓力嚴重：學校平均樓齡約90年，官方估計7年內節省超過1億美元設施費，並規劃投資1.03億美元更新教學空間。',
			'實作節奏要求高：重組將從2027-28學年起分階段推進，交通接續、年級銜接與社區說明若不同步，短期衝擊會先於節省效益顯現。',
			'前案警訊明顯：前年關閉9校提案曾遭董事多數否決，提醒台灣地方面對生源轉移時，替代學習空間與溝通節奏同等關鍵。',
		],
		quote: 'It is about creating equitable opportunities, strengthening academic experiences, and ensuring every student has access to learning environments that support success in college, career, and life.',
		quote_attribution: 'Pittsburgh Public Schools 總監, 2026-05-27',
		quote_source_url: 'https://www.k12dive.com/news/pittsburgh-public-schools-oks-plan-to-close-12-schools/821389/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '治理角度：此案把經費控制、學校整併與課程公平放同一方案中，代表地方體系可用「財務收斂＋服務保底」的框架，同步思考是否真的提升學生可近性。',
				sources: [
					{
						name: 'K12dive',
						url: 'https://www.k12dive.com/news/pittsburgh-public-schools-oks-plan-to-close-12-schools/821389/',
					},
				],
			},
			{
				text: '社區角度：上版9校關閉方案遭否決與反對的經驗，顯示台灣學校治理若只談效率難成立，關鍵是轉學安排、服務不中斷與社區信任是否能被制度化。',
				sources: [
					{
						name: 'K12dive',
						url: 'https://www.k12dive.com/news/pittsburgh-public-schools-oks-plan-to-close-12-schools/821389/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-27',
				date_iso: '2026-05-27',
				content: '匹茲堡公立學區董事會核准《Future Ready》計畫，決議關閉12所學校並開設2所新學校。',
			},
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: '公開報導指出方案規劃自2027-28學年度起分階段推進，並同步調整學校規模與課程服務。',
			},
		],
		articles: [
			{
				title: 'Pittsburgh Public Schools OKs plan to close 12 schools',
				link: 'https://www.k12dive.com/news/pittsburgh-public-schools-oks-plan-to-close-12-schools/821389/',
				domain: 'k12dive.com',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'a3f7e51b-f70b-5fe6-984d-35c1bb092ff4',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國眾議院兩法案鎖定校園性別與平權教材',
		short_summary: '美國眾議院5月末推進兩項教育法案：H.R.8705（CHARLIE）將聯邦補助的歷史與公民課程綁上「不得使用歧視性平權或性別意識形態」條件，H.R.2616則要求公校在更動學生性別資料或性別型配套前取得家長同意。對台灣學校而言，這提醒行政端不要只看見字眼爭論，而要先把教材授權、家長知情流程與學生權益邊界寫清，否則容易在爭議事件中被拖進治理風險。',
		emoji: '🏛️',
		did_you_know: 'ACLU前一年以12名在DoDEA的學生為起訴人，控訴執行命令14168、14185、14190造成書籍取消、活動停辦與課程調整，主張違反學生第一修正案權益。',
		talking_points: [
			'條文切入點：CHARLIE法案（H.R.8705）要求聯邦補助的歷史與公民課程不得使用「discriminatory equity ideology」或「gender ideology」作為教學材料依據。',
			'家長同意門檻：H.R.2616規定學校更動學生性別欄位、或調整性別相關措施前，需先取得家長同意，直接影響學校行政作業。',
			'法案節點：截至5月28日，H.R.2616已通過眾議院全體表決，H.R.8705先在教育與勞工委員會通過，兩案都未見參議院對應配套。',
			'政策訊號：白宮OMB上週記錄中明示若兩院通過即建議總統簽署，顯示執政端可讓學校規範化進程加速。',
			'訴訟制衡：ACLU以12名學生提告EO 14168/14185/14190，指涉書籍與活動調整，讓政策落地前就可能遇到司法停擺與修正壓力。',
		],
		quote: 'There are only two sexes: male and female. Sex is a biological fact, not an ideological whim.',
		quote_attribution: 'Burgess Owens，美國國會議員, 2026-05-20',
		quote_source_url: 'https://www.k12dive.com/news/gop-advances-legislation-barring-discriminatory-equity-or-gender-ideology/821248/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '來自立法推進脈絡的觀點認為，將爭議議題寫入聯邦補助條件與學校作業規範，可提升政策一致性並回應民眾對課程方向的要求。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/gop-advances-legislation-barring-discriminatory-equity-or-gender-ideology/821248/',
					},
				],
			},
			{
				text: '但民權觀點則警示，若以「意識形態」名義收緊教材與行政彈性，學生可及家長權益可能縮窄，特別是課程與性別身份認同的日常服務接觸。',
				sources: [
					{
						name: 'American Civil Liberties Union',
						url: 'https://www.k12dive.com/news/gop-advances-legislation-barring-discriminatory-equity-or-gender-ideology/821248/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: '提出者之一在聲明中重申性別議題立法重點，主張涉及學生性別更動與家長同意的規範化方向。',
			},
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: '報導指出美國眾議院已推進H.R.8705與H.R.2616兩案：前者為委員會通過，後者已過全院，兩案未見參議院配套。',
			},
		],
		articles: [
			{
				title: 'GOP advances legislation barring ‘discriminatory equity or gender ideology’',
				link: 'https://www.k12dive.com/news/gop-advances-legislation-barring-discriminatory-equity-or-gender-ideology/821248/',
				domain: 'k12dive.com',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
];

export const MOCK_STORIES_BY_CATEGORY: Record<string, Story[]> = {
	[AI_NEWS_UUID]: aiNewsStories,
	[AI_APPLICATIONS_UUID]: aiApplicationsStories,
	[WORK_METHODS_UUID]: workMethodsStories,
	[AI_EDU_UUID]: aiEduStories,
	[AI_CLASSROOM_UUID]: aiClassroomStories,
	[EDU_RESEARCH_UUID]: educationResearchStories,
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
