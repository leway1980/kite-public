import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-05-19 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: '91990bef-28dc-57a5-961a-097ef1a7fe4a',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'OpenAI 與戴爾攜手推進 Codex 企業混合雲部署',
		short_summary: 'OpenAI 與 Dell Technologies 宣布合作，將 Codex 延伸至混合雲與內部部署場景，讓 AI 代理可在企業既有資料、系統與工作流程中運作。根據公告，Codex 每週已有超過 400 萬名開發者使用，已由單一開發工具升格為可串接事件回應、測試與作業協作的企業級工作模式；合作關鍵在於把治理與部署權控留在企業基礎設施內，降低跨系統手動整合與資料外流風險。',
		emoji: '🔒',
		did_you_know: 'OpenAI 指出 Codex 每週用戶已逾 400 萬，並稱其為成長最快的企業產品；此次透過 Dell AI Data Platform 及 AI Factory 的整合，目的是把代理能力放到已具治理機制的企業環境。',
		talking_points: [
			'擴編訊號：OpenAI 提到 Codex 每週有超過 400 萬開發者在用，代表企業端需求已從試驗轉為可規模化部署的主力工具。 ',
			'上下文轉移：合作要把 Codex 推到混合雲與 on-premise，讓模型操作的資料、文件與流程留在企業內部，減少為 AI 建置新資料池的工時。 ',
			'工作面向擴大：新聞稿顯示 Codex 已從寫碼，延伸到回報彙整、產品回饋路由、lead 資料處理與跨系統協作，改變代理任務邊界。 ',
			'安全前提：合作聚焦在受控環境部署，透過 Dell AI Data Platform、AI Factory 連接系統紀錄與權限控制，讓擴充效率與風險管理同步進行。 ',
			'流程化路徑：OpenAI 訴求「實際、可擴展、可安全部署」，意義在於讓 AI 代理由部門工具過渡到可被複製的全域工作流程。 ',
		],
		quote: 'To scale that adoption, enterprises need Codex to work securely across the hybrid and on-premises environments where their data, systems, and workflows already live.',
		quote_attribution: 'OpenAI，2026-05-18',
		quote_source_url: 'https://openai.com/index/dell-codex-enterprise-partnership',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的觀點偏向產品採用率與能力擴展，將 Codex 從軟體開發代理轉為可支援報告、回應與協作流程的知識型工作節點，核心在快速擴編。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/dell-codex-enterprise-partnership',
					},
				],
			},
			{
				text: 'Dell 的立場更偏重基礎設施與治理，強調讓 Codex 與 AI Data Platform、AI Factory 對接，讓企業在既有流程中保留權限與合規控制，而非只做單次雲端試點。',
				sources: [
					{
						name: 'Dell Technologies',
						url: 'https://openai.com/index/dell-codex-enterprise-partnership',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'OpenAI 與 Dell Technologies 發表合作，宣布探索 Codex 與 Dell AI Data Platform、AI Factory 的整合，用於混合雲與內部部署情境。',
			},
		],
		articles: [
			{
				title: 'OpenAI and Dell partner to bring Codex to hybrid and on-premise enterprise environments',
				link: 'https://openai.com/index/dell-codex-enterprise-partnership',
				domain: 'openai.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'c0031873-a6dc-5588-98f1-091984e5582d',
		cluster_number: 1,
		unique_domains: 3,
		number_of_titles: 3,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用、資安信任、工作方法',
		title: '本地 AI Agent 可視化成形：三款開源工具',
		short_summary: '這組訊號集中在同一主軸：把 AI 代理的行為變成可追蹤、可稽核的工作流程。2026/5/18 的 Beacon 以開源方式在本機收集 Claude Code、Codex CLI 等代理活動，先本地化保留事件再轉送 Wazuh、Elastic、Splunk；vostride 的 Agent-QA 將測試流程用自然語言描述；Agnt 則主打可執行公共或 MIT 授權代理。對開發與 IT 團隊而言，這意味著可降低過去手工監控與測試重複執行的成本。',
		emoji: '🧭',
		did_you_know: 'Beacon 預設會把 Node.js 事件迴圈、V8 heap 與 CPU/記憶體等高噪音指標濾掉，只保留提示詞、工具呼叫與檔案活動；但可透過 include-runtime-metrics 再補回。',
		talking_points: [
			'本地端優先：Beacon 針對 Claude Code、Codex CLI、OpenCode 等代理程式做 endpoint telemetry，讓管理者不必把全部細節上雲。',
			'SIEM 可控：工具預設先輸出 JSONL 本地保存，再串接 Wazuh、Elastic、Splunk HEC 或客戶自建 SIEM，轉送規則由組織掌握。',
			'自然語言測試：Agent-QA 用可讀指令定義 steps 與 assertions，例如建立 issue、選擇 Team 與 Status，降低測試腳本門檻。',
			'跨裝置導向：該框架同時支援 web 與 mobile 的端到端測試，將同一套流程重複套用在不同介面。',
			'開源策略差異：Agnt 宣稱可執行任何 public 或 MIT-licensed 代理，讓團隊較不受單一供應商綁定。',
		],
		quote: 'Beacon is Asymptote\'s open-source endpoint agent for security and IT teams that need visibility into local AI agent activity.',
		quote_attribution: 'Asymptote-Labs, 2026-05-18',
		quote_source_url: 'https://github.com/Asymptote-Labs/agent-beacon',
		quote_source_domain: 'github.com',
		perspectives: [
			{
				text: 'Asymptote 的做法偏向資安治理，先把觀測放在端點與內部網路邊界，再視需求轉送 SIEM，重點是資料主權與稽核責任。',
				sources: [
					{
						name: 'Asymptote-Labs',
						url: 'https://github.com/Asymptote-Labs/agent-beacon',
					},
				],
			},
			{
				text: 'Show HN 社群對 Agent-QA 更關心測試可操作性：用自然語言定義流程可讓非工程人員參與端到端測試，與單純發布新工具不同。',
				sources: [
					{
						name: 'vostride.com',
						url: 'https://vostride.com',
					},
				],
			},
			{
				text: 'Agnt 的定位補上「可跑任何 public 或 MIT 代理 CLI」的開放性，對教育/研究單位有意義，因為可用同一規格驗證多個開源代理，減少工具斷裂。',
				sources: [
					{
						name: 'Hacker News',
						url: 'https://news.ycombinator.com/item?id=48170395',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-17',
				date_iso: '2026-05-17',
				content: 'Show HN 公佈 Agnt，主打免費開源 CLI，可執行任何 public 或 MIT 授權的 AI agent。',
			},
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'Show HN 公佈 Beacon，主張本地端 AI 代理可視化、資料保留與 SIEM 轉送。',
			},
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'Show HN 公佈 Agent-QA，提出以自然語言撰寫 web 與 mobile 端到端測試案例。',
			},
		],
		articles: [
			{
				title: 'Show HN: Beacon - The open-source layer for local AI agent visibility',
				link: 'https://github.com/Asymptote-Labs/agent-beacon',
				domain: 'github.com',
				date: '2026-05-18',
			},
			{
				title: 'Show HN: Agent-QA: Open-source AI end-to-end testing for web and mobile apps',
				link: 'https://vostride.com',
				domain: 'vostride.com',
				date: '2026-05-18',
			},
			{
				title: 'Show HN: Agnt – Free open-source CLI to run any public or MIT-licensed AI agent',
				link: 'https://news.ycombinator.com/item?id=48170395',
				domain: 'news.ycombinator.com',
				date: '2026-05-17',
			},
		],
		domains: [
			{ name: 'github.com' },
			{ name: 'vostride.com' },
			{ name: 'news.ycombinator.com' },
		],
	},
	{
		id: 'dc61f48c-091e-57ee-ac62-f59c43c9eae3',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'AnyFrame 打造代理沙盒「即開即用」流程',
		short_summary: 'Product Hunt 上的 AnyFrame 針對 AI 代理反覆重建環境與串接工具的高成本問題，推出早期版本控制平面。它主張先一次定義代理（含 repo、安裝指令、skills 與 MCP），再用快取 sandbox image 快速啟動 session，並可由同一條通道以 Web UI 或 Python SDK 操作。其重點是把原本分散在手工腳本的建置、接線與測試流程，改為可複用模板，對需要大量代理協作的團隊與教學研究場域具啟發。',
		emoji: '🧩',
		did_you_know: 'AnyFrame 在早期版本中即主打可接 Linear、Sentry、Google 等 MCP 連接器，並支援用 Claude OAuth token 或 Codex API key 登入試用，顯示入口與工具整合被放在同一控制面層。',
		talking_points: [
			'流程封裝：AnyFrame 提出「先定義代理」機制，將 repo、安裝指令、skills、MCP 一次填好，日後開啟 session 不必再從零開始重複建置。',
			'效能節點：產品核心是快取 sandbox image，讓每次啟動可重用先前環境，降低反覆重裝套件與重複接線的人工時間。',
			'雙端同步：同一個代理可透過網頁 UI 或 Python SDK 操作，且走同一溝通通道，有利降低人手切換工具造成的流程斷裂。',
			'跨場景用例：官方直接列舉三種情境，如 chat 即時部署代理、鎖定客戶 repo 的客服型代理，以及可實際跑程式的 PR 審查機器人。',
			'上線訊號：文章表示專案「過去兩週」完成原型並放出 beta，且採 free to try，門檻低，便於團隊先試水溫再決定導入深度。',
			'架構啟發：將 MCP 連接器集中到每個代理設定，不需每次都手工掛接，對教學或行政單位在 AI 工作流上最有價值的不是工具本身，而是可複製的建置紀律。',
		],
		quote: 'AnyFrame is the layer underneath. You define an agent once (repo, install cmd, skills, MCPs) and it bakes a cached sandbox image.',
		quote_attribution: 'Product Hunt, 2026-05-18',
		quote_source_url: 'https://www.producthunt.com/products/anyframe-2',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從產品方法論看，AnyFrame 的主張是把代理能力平台化，特別是把「建置與接線」這段工程黑箱化，對高頻調度 AI 代理的組織可直接縮短交付週期。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/anyframe-2',
					},
				],
			},
			{
				text: '從風險治理看，單一控制平面帶來作業一致性，也等於把權限與資料路徑集中到較高節點；若用在學術或行政流程，需再加上明確授權邊界與稽核規則。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/anyframe-2',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'Product Hunt 上刊登 AnyFrame 討論與產品頁，公開早期版本並提出以控制平面方式統一定義與啟動 AI 代理的做法。',
			},
		],
		articles: [
			{
				title: 'AnyFrame',
				link: 'https://www.producthunt.com/products/anyframe-2',
				domain: 'producthunt.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'a3dd7a5f-804f-5f05-b466-b1064d5f8528',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'Krea 2：用情緒版加速設計素材產製',
		short_summary: '來自 Product Hunt 的 Krea 2 評測顯示，使用者普遍把它當成可快速生成與放大的影像工具，尤其在 banner、封面等設計任務有明顯提速效果。評論也反覆提到 style control 與 moodboards 有助於在視覺方向上對齊，適合支援教學簡報、宣傳素材、知識作品等內容生成流程；但小幅調整與人物畫面品質仍不穩，代表它目前更像加速試作與重複試驗的流程工具，而非完全替代人工最終製作。',
		emoji: '🎨',
		did_you_know: '討論中最常被提到的是「速度、操作簡潔、可放大」三個感受，能直接減少設計前置時間；同時不少回饋把小修改精準度與人像穩定度列為主要風險。',
		talking_points: [
			'快速迭代：多位使用者指出 Krea 2 適合做大量前期試作，對 banner、封面等素材可短時間產出多版本，讓決策與修正更快。',
			'輸出加速：評論中特別稱讚 Enhance/Upscale，草稿可透過放大與優化變成可交付版本，降低重複外掛工具的切換成本。',
			'風格對齊：Krea 2 的 style control 與 moodboards 對齊品牌調性，能以較低學習成本把設計規格變成可重複指令。',
			'精準度限制：多數回饋提到小修圖、局部調整常不穩，人像品質尤其起伏，實務上仍需保留人工抽檢與二次修飾。',
			'流程控管：部分聲音提到作品庫整理與推廣溝通不夠順暢，導入後要補上版次管理、命名規範與發布節點，否則難以長期擴用。',
		],
		quote: 'Reviewers mostly see Krea as a strong AI image tool for fast generation, upscaling, and creative experiments, with particular praise for Enhance/Upscale.',
		quote_attribution: 'Product Hunt, 2026-05-18',
		quote_source_url: 'https://www.producthunt.com/products/krea',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '效率觀點認為 Krea 2 最有價值的是把反覆試作流程改為「大量生成、快篩選」的工作模式，對教學行政、研究簡報、社群經營可明顯縮短前期製作。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/krea',
					},
				],
			},
			{
				text: '品質觀點則提醒，工具仍受限於一致性與精細控制，人物與局部修圖易出現誤差，代表它更適合作為半自動化支援，而非完整代理化替代。',
				sources: [
					{
						name: 'Product Hunt（評論）',
						url: 'https://www.producthunt.com/products/krea',
					},
				],
			},
		],
		articles: [
			{
				title: 'Krea 2',
				link: 'https://www.producthunt.com/products/krea',
				domain: 'producthunt.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'c9e7ded6-fe98-535f-84b7-da9c2a752197',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Montage M1 讓 AI 代理 1 次呼叫就能產可持久介面',
		short_summary: 'Product Hunt 上的 Montage M1 將代理型服務中最耗時的「每回合重生 UI」流程改為：代理先輸出小型意圖結構，平台伺服端再編譯為可互動元件。官方主打每次介面建置可快 10 倍 hydration，並能把輸出 token 降到原本 1/50 到 1/100，降低推論成本與延遲。更關鍵的是，M1 可一次 API 交付可保存、可回訪、保留狀態的互動工件，同時保留品牌樣式，讓 AI 輸出從文字回覆轉為可直接使用的工作成果。',
		emoji: '🧩',
		did_you_know: 'M1 的敘事不只聚焦速度，還補上「可持久工件」與一次性可託管 UI，這意味著同一個代理輸出可在多個場景反覆使用。產品頁也同時開放 agent-builders 定價與說明文件，降低跨團隊導入門檻，適合教學支援、行政流程與研究知識工作流快速驗證。',
		talking_points: [
			'效率主張：傳統代理常在每輪對話都重建介面，Montage 改成先輸出意圖 schema，再由伺服端編譯，官方明確宣稱 hydration 可快 10 倍。',
			'成本壓縮：新模型主張可將 UI 相關輸出 token 降為原本 50 至 100 倍更少，對長對話、重複操作流程可有效削減推論開銷。',
			'持久交付：M1 以單次 API 生成互動工件，支援保存與回訪，使用者不必等到聊天關閉才失去成果，重點對齊實務可重用需求。',
			'互動範圍提升：產品文件提到已不只限於圖表、表格、看板、表單，且可產出更高品質互動視覺，符合需要實際操作而非只看報表的工作情境。',
			'品牌與整合：平台自稱模型與框架皆無關，並可套用品牌主題與樣式，讓客戶面向端到端客服或行政系統時維持一致體驗。',
		],
		quote: 'AI outputs are becoming software, not just text.',
		quote_attribution: 'Product Hunt, 2026-05-18',
		quote_source_url: 'https://www.producthunt.com/products/montage-3',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從開發效率觀點看，M1 的價值是把 UI 生成從模型回覆端抽離，讓代理流程更可控，解決速度慢、資源浪費的原始痛點。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/montage-3',
					},
				],
			},
			{
				text: '從工作流程觀點看，團隊需求已從「顯示結果」轉為「產出可持續使用的工件」；這提示代理應用在教學支援與行政溝通上，未來重點在成果交付而非對話表述。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/montage-3',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'Product Hunt 刊登 Montage M1，將「意圖 schema + server-side 編譯」作為核心差異，並提出 10 倍 hydration 及 50-100x 少 token 的效能主張。',
			},
		],
		articles: [
			{
				title: 'M1 by Montage',
				link: 'https://www.producthunt.com/products/montage-3',
				domain: 'producthunt.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
];

const workMethodsStories: Story[] = [
	{
		id: 'fe444115-ccad-54fc-a4e6-c35ee23d1b6b',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '代理管理',
		title: 'LLM coding agent 六個月：從偶修正到日常交付',
		short_summary: '這篇在 2026 年 5 月 19 日發布的回顧指出，2025 年 11 月起 LLM 進入關鍵轉折，六個月內模型封王在 Claude Sonnet 4.5、GPT-5.1、Gemini 3、GPT-5.1 Codex Max 到 Claude Opus 4.5 間快速更替。更關鍵是 OpenAI 與 Anthropic 的 coding agent 透過可驗證回饋強化後，已從「常常要大量修正」提升到可日常交付，直接影響工程團隊對代理可否進入核心流程的判斷。',
		emoji: '🧩',
		did_you_know: '作者用「鵜鶘騎腳踏車」測試比對模型，這是刻意選擇不易訓練的複合題；另外他以 micro-javascript 原型展示代理能力，將 JavaScript 以 Python 重建後直接在瀏覽器疊加 Pyodide 與 WebAssembly 運行。',
		talking_points: [
			'模型節點更替：2025/09/29 Claude Sonnet 4.5 先登頂，11 月後先後被 GPT-5.1、Gemini 3、GPT-5.1 Codex Max 與 Claude Opus 4.5 取代，顯示基準模型定位高度流動。',
			'品質門檻轉折：文中稱 2025 年 11 月後 coding agents 從「常需大量修正」躍升至「可日常駕馭」，核心差異在於錯誤率與可直接交付能力是否跨越。',
			'測試方法具體：以「鵜鶘騎腳踏車」作為主測試，因為畫生物與機具動作皆困難，且組合任務缺少現成訓練目標，能更快分辨不同模型的實務表現。',
			'流程管理訊號：2025/12 到 2026/01 假期期間大量工程師做快速專案時，文章提醒過度擴張目標會放大回饋壓力，需用固定審查點取代「看起來很厲害就繼續」的衝動。',
			'可複製原則：micro-javascript 專案把 Python 實作的 JS 跑進瀏覽器，透過 Pyodide、WASM、JavaScript 多層堆疊完成，說明跨工具鏈原型可在短周期驗證代理與流程是否可複用。',
		],
		quote: 'Coding agents went from often-work to mostly-work, crossing a quality barrier where you could use them as a daily-driver to get real work done.',
		quote_attribution: 'simonwillison.net, 2026-05-19',
		quote_source_url: 'https://simonwillison.net/2026/May/19/5-minute-llms/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '觀察點在於模型競賽：同一來源反覆提到領先模型快速輪替，意味採購與技術選型不再是一次到位決策，而是每季都要更新的治理事項。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/May/19/5-minute-llms/#atom-entries',
					},
				],
			},
			{
				text: '另一觀點聚焦工作流程：作者更重視代理是否進入「每日可用」狀態，關鍵在 RLVR 迴圈與人工審核機制，模型分數高低不等於立刻可用，組織需先建立權責與停損規範。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/May/19/5-minute-llms/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2025-09-29',
				date_iso: '2025-09-29',
				content: 'Claude Sonnet 4.5 在 9 月 29 日發布，文中提到其一度被認為是當時的「最佳」模型。',
			},
			{
				date: '2025-11-01',
				date_iso: '2025-11-01',
				content: '11 月被描述為 LLM 關鍵拐點，模型封王與 coding agent 能力均出現明顯提升。',
			},
			{
				date: '2026-05-19',
				date_iso: '2026-05-19',
				content: '作者整理出 5 分鐘亮點版本並發布於博客，總結過去六個月 LLM/agent 的實務進展。',
			},
		],
		articles: [
			{
				title: 'The last six months in LLMs in five minutes',
				link: 'https://simonwillison.net/2026/May/19/5-minute-llms/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: '5e4792cb-3545-5d78-9d4e-c89ae4d86682',
		cluster_number: 'gmail-notebooklm-教學',
		unique_domains: 3,
		number_of_titles: 3,
		category: 'AI 教育趨勢',
		editorial_lens: '平台導入',
		title: 'NotebookLM 教學：Classroom 整合升級',
		short_summary: '多家台灣媒體於 2026/5/13 同步關注 NotebookLM 的兩個方向：TechNews 指出 Google 已深度整合 NotebookLM 進 Classroom，讓 AI 回應落在課堂教材可控知識域以抑制幻覺；SOGI 與 T客邦補上實作訊號，指出它可自動做網頁簡報、YouTube 摘要與心智圖，且自 2026/3/2 起可用 10 種風格與提示詞控制圖表動線。這代表 AI 在教學場景不只提效，也開始進入教學設計與內容治理，但目前仍缺少台灣校院採用規模與成效驗證。',
		emoji: '🧠',
		did_you_know: 'Techbang 測試提到 2026/3/2 後，NotebookLM 可選 10 種圖表風格並支援提示詞輸入，使用者可指定視覺動線方向與語言（含中文繁體），讓同一份內容針對不同對象調整閱讀節奏。',
		talking_points: [
			'官方訊號：TechNews 報導 Google 將 NotebookLM 深度接回 Classroom，核心是把 AI 轉為課堂教材的可控知識服務。',
			'簡報自動化：SOGI 描述輸入網頁網址即可生成簡報草稿，含章節拆分與投影片標題，完成後可直接修改並下載。',
			'長片效率：SOGI 指出貼上 YouTube 後可輸出重點摘要與時間軸，縮短逐段觀看 20~40 分鐘教學影片的負擔。',
			'知識結構：SOGI 也提到心智圖可將多筆資料重組為主題與子題，協助整理研究資料、課程提綱與閱讀順序。',
			'視覺控制：T客邦盤點 3/2 更新後新增 10 種模板與可愛風、科學風、便當盒排版，並能用提示詞調整 F/Z/S 動線。',
		],
		quote: 'Google 將 NotebookLM 深度整合至 Classroom 體系，將 AI 從「什麼都敢講」的通才，轉成課堂教材的封閉域知識庫。',
		quote_attribution: 'TechNews 科技新報, 2026-05-13',
		quote_source_url: 'https://technews.tw/2026/05/13/google-expands-gemini-notebooklm-and-ai-tools-for-education/',
		quote_source_domain: 'technews.tw',
		perspectives: [
			{
				text: 'TechNews 的角度偏向治理與授權：重點在官方平台整合與幻覺風險管理，將 NotebookLM 定位為可驗證的教室知識來源，而非單純生產工具。',
				sources: [
					{
						name: 'TechNews 科技新報',
						url: 'https://technews.tw/2026/05/13/google-expands-gemini-notebooklm-and-ai-tools-for-education/',
					},
				],
			},
			{
				text: 'SOGI 的訊號偏向學習作業流程：關注網頁、影片到簡報與心智圖的一條龍自動化，強調節省學生與上班族整理與筆記時間，但較少提出制度層面的驗證。',
				sources: [
					{
						name: 'SOGI手機王',
						url: 'https://www.sogi.com.tw/articles/notebooklm/6268736',
					},
				],
			},
			{
				text: 'T客邦補齊設計層觀點：把焦點放在資訊圖表與簡報差異與視覺動線，顯示工具已從「會生成內容」轉向「協助建立可讀懂的認知流程」。',
				sources: [
					{
						name: 'T客邦',
						url: 'https://www.techbang.com/posts/128736-notebooklm-infographics-evolution',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-03-02',
				date_iso: '2026-03-02',
				content: 'NotebookLM 上線更新：新增 10 大資訊圖表風格選單與提示詞輸入，並加入更多視覺動線控制選項。',
			},
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: '3 家台灣媒體發布 NotebookLM 報導，指出其與 Classroom 的整合與生成效率、視覺輸出能力正在形成教學場景核心訊號。',
			},
		],
		articles: [
			{
				title: 'NotebookLM不只會整理筆記！學會這幾招效率直接翻倍',
				link: 'https://www.sogi.com.tw/articles/notebooklm/6268736',
				domain: 'sogi.com.tw',
				date: '2026-05-13',
			},
			{
				title: 'NotebookLM新功能實測！圖表風格、視覺動線這樣玩，讓你的筆記秒變專業簡報',
				link: 'https://www.techbang.com/posts/128736-notebooklm-infographics-evolution',
				domain: 'techbang.com',
				date: '2026-05-13',
			},
			{
				title: 'AI 幻覺有解了嗎？NotebookLM 把教室變成封閉域知識庫',
				link: 'https://technews.tw/2026/05/13/google-expands-gemini-notebooklm-and-ai-tools-for-education/',
				domain: 'technews.tw',
				date: '2026-05-13',
			},
		],
		domains: [
			{ name: 'sogi.com.tw' },
			{ name: 'techbang.com' },
			{ name: 'technews.tw' },
		],
	},
	{
		id: '779f0cf7-af58-545d-8c9c-1818aef0ea4e',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '新觀念',
		title: 'UMW 七月論壇：AI 不是替代，而是修補',
		short_summary: '這篇於 2026-05-18 發表的訪談指出，美國 UMW 七月研討會中的核心論點是：AI 與人文課堂不是非黑即白的替代關係，而是持續「修補」的張力實作。發言人認為，若缺乏在地參與與治理，AI 生成內容與資料中心建置都可能放大阿巴拉契亞邊緣社群的刻板化風險，提醒教育決策需把工具效能與社區責任綁在同一條軸線。',
		emoji: '🧩',
		did_you_know: '她提到成熟提示可協助產出接近真實的文本，但在作業完全外包時常出現「vapid rhetoric, no voice」；另有以 ChatGPT 先生成虛構阿巴拉契亞角色的案例，顯示偏見放大效應。',
		talking_points: [
			'會議訊號：5/18 專欄先行釋出 UMW 七月「Reimagining the Liberal Arts in the Age of AI」主軸，將 AI 與文科課程衝突轉為可教學的治理話題。',
			'成績判讀：對於學生寫作，受訪學者可藉用聲音與句式辨識是否「整段代寫」，認為完全靠 AI 常產生空泛修辭與缺席作者觀點。',
			'偏見警示：其討論引用 ChatGPT 生成虛構阿巴拉契亞人物的情境，指出模型容易複製既有刻板印象，不利邊緣社群在課堂中的真實呈現。',
			'社區治理：在資料中心議題中，阿巴拉契亞被描述為歷史上常被消耗的「國家犧牲區」，成效高低近乎取決於地方領導、居民參與與公共監督。',
			'教學角色：她否定 AI 絕對否決與全面擁抱兩端，主張在 7 月論壇脈絡中把人文課程視為批判、創意與去殖民想像力的場域，AI 可補齊弱勢書寫者表達力。',
		],
		quote: 'Whether they contribute positively or negatively to a community depends almost entirely on local leadership and civic participation.',
		quote_attribution: 'stefanbauschard.substack 專欄, 2026-05-18',
		quote_source_url: 'https://stefanbauschard.substack.com/p/what-still-pulls-us-toward-the-real',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '本文把焦點放在高等教育場域：AI 不是要替代學生，而是讓討論回到方法與責任。這與一般工具導向訊息形成張力，強調「有聲音」而非只追求自動產文速度。',
				sources: [
					{
						name: 'stefanbauschard.substack',
						url: 'https://stefanbauschard.substack.com/p/what-still-pulls-us-toward-the-real',
					},
				],
			},
			{
				text: '治理面向與課程面向被同時提起：環境正義與資料中心議題不只談電力與成本，而是關乎地方參與。相較於純教學工具分析，這裡更像是制度設計與在地治理訊號。',
				sources: [
					{
						name: 'stefanbauschard.substack',
						url: 'https://stefanbauschard.substack.com/p/what-still-pulls-us-toward-the-real',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: '專欄訪談全文發表，內容對應 UMW 七月研討會中 AI 與文科教育的核心主張。',
			},
		],
		articles: [
			{
				title: 'What Still Pulls Us Toward the Real: Conversation on AI, Appalachia, and Hope',
				link: 'https://stefanbauschard.substack.com/p/what-still-pulls-us-toward-the-real',
				domain: 'stefanbauschard.substack.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: 'c900445e-7ba9-5884-a737-b3fce54cabcd',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '組織運作',
		title: '學術圖書館 AI 時代：資源吃緊仍擴展服務',
		short_summary: 'Inside Higher Ed 引述 ITHAKA S+R 2025 年底對483位四年制非營利大學圖書館長的調查指出，81%認為財務與人力壓力是最大阻礙，超過三分之一則預估未來五年經費仍將縮水；同時88%主張圖書館要成為學生第三空間，72%要求提升AI素養，98%仍堅持研究與資訊判讀能力，還有78%預料下個授權週期會取消期刊方案。這代表圖書館在AI時代不是減少功能，而是被迫同時背負傳統教學支援與AI轉型任務。',
		emoji: '📚',
		did_you_know: '報導提到，Ithaka S+R去年底與58所學術圖書館合作推AI素養專案，今月又再新增21所，顯示圖書館導入AI已由試點擴展到制度性輔導。',
		talking_points: [
			'預算與人力同步吃緊：81%受訪館長點名財務吃緊與既有人力留不住，顯示導入AI前必先處理組織基本盤，不然新服務難以穩定落地。',
			'學術定位加速重畫：只有31%認為三年前策略未改，但88%都把館舍定位為學生第三空間，72%更要求提升AI素養，圖書館角色從藏書轉成學習中樞。',
			'經費預警即將具體化：32%預估未來五年營運預算會下降，78%預料會取消一項以上期刊套組，採購收縮與AI服務投入的衝突因此更尖銳。',
			'核心任務不放棄：超過90%仍將實體學習與合作空間列高重要，98%維持研究、批判分析與資訊素養作為核心任務，AI未取代教學支援本質。',
			'跨職能合作升級：Ithaka S+R過去一年支援58所圖書館做AI素養方案，本月再加21所研究行政流程導入，顯示AI應用正從單點工具試用轉向流程整合。',
		],
		quote: 'The survey shows that library budgets are still under pressure.',
		quote_attribution: 'Ithaka S+R，2026-05-18',
		quote_source_url: 'https://www.insidehighered.com/news/faculty/research/2026/05/18/libraries-face-hard-choices-amid-constraint',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '壓力端面向偏量化，81%財務困境與32%未來五年經費預降，直接讓管理者把AI規劃壓到可控範圍，顯示資源治理先於技術想像。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/research/2026/05/18/libraries-face-hard-choices-amid-constraint',
					},
				],
			},
			{
				text: '發展端面向則偏價值重設，88%要求成為學生社交與陪伴空間、72%要求AI素養培力，說明圖書館被重新定義為學生支持平台，不只負責資源出借。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/research/2026/05/18/libraries-face-hard-choices-amid-constraint',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'Inside Higher Ed 發布調查報導，整理 Ithaka S+R 對美國四年制非營利高教圖書館領導者的最新調查結果與 AI 應對方向。',
			},
		],
		articles: [
			{
				title: 'Libraries Are Adapting—and Stretched Thin',
				link: 'https://www.insidehighered.com/news/faculty/research/2026/05/18/libraries-face-hard-choices-amid-constraint',
				domain: 'insidehighered.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
	{
		id: '7f11774e-d863-5511-8a95-3a4ee0794342',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '西非 JHS/SHS 科學學習 AI 助教試點',
		short_summary: 'arXiv 收錄的可行性研究提出「Adesua」，以 WhatsApp 為介面整合西非科學教材與歷屆考題，讓西非 JHS、SHS 學生用自然對話取得科學答疑與自動批改。研究描述該方案於 2025 年進行 6 個月試辦，吸引 56 名加納學生與家長持續使用；問卷自評中 AI 回答有用性達 93.75%。在師生比高且缺師情境下，訊息入口可成為低成本擴散的個別化學習支援方向。',
		emoji: '📲',
		did_you_know: '試辦期中，學生可在聊天介面即時做題與查詢，家長也可同帳號參與陪伴，但公開摘要僅揭露 16 份可用回饋，資料量有限。注意：本研究為可行性觀察研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：研究為可行性試辦與問卷自陳評估，未採隨機對照，主要驗證「可用性」與使用意願，而非教學效益因果效果。',
			'數據佐證：2025 年在加納實施 6 個月，活躍使用者 56 人（含學生與家長）；有效評分樣本為 16 份，AI 回答有用性得分 93.75%。',
			'平台機制：系統整合課綱教材與 33 年全國考題，學習者可依主題或考試年度做限時／不限時作答，並即時取得對錯與詳細解析。',
			'適用脈絡：對象為 JHS 與 SHS，主打解決高師生比與教師不足，將補救教學放入 WhatsApp 流程，降低跨校導入門檻。',
			'實施限制：目前僅能證明試點可行與回饋正向，尚未揭露學習成效差異、成本效益或跨校擴散時的治理風險。',
		],
		quote: 'A 6-month feasibility deployment in 2025 had 56 active users in Ghana, including students and parents.',
		quote_attribution: 'arXiv, 2026-05-18',
		quote_source_url: 'https://arxiv.org/abs/2605.15376',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '此研究凸顯低資源地區可先做「可行性先行」：WhatsApp 入口降低使用門檻、可擴展性明確，但證據仍停在使用體驗，尚不足以判斷學習成效。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.15376',
					},
				],
			},
			{
				text: '對教育現場而言，重點在模型不是工具本身，而是教材與題庫整合與自動化回饋流程；延伸研究缺口在於需要對照文獻與長期追蹤，才能支持政策或校務層面的導入決策。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.15376',
					},
				],
			},
		],
		articles: [
			{
				title: 'Adesua: Development and Feasibility Study of an AI WhatsApp Bot for Science Learning in West Africa',
				link: 'https://arxiv.org/abs/2605.15376',
				domain: 'arxiv.org',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'fc1b0353-aff2-5ec1-a20c-014d61d286af',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '工作方法',
		title: '每週免費 AI 工具快覽：教師可直接試作',
		short_summary: '2026-05-18 的 Edublogs 每週專欄推出可免費使用的 AI 教學工具清單，列出 PageMaster、Pixley、WordFlippin、IQPrompt 等，對應故事式學習、短影音、詞彙與資料視覺化流程。文中也追蹤 NotebookLM 與 Amazon 的 AI Kindle Translate 消息，重點在縮短教師備課搜尋時間，並提醒作業題型需調整以降低 AI 代作風險。',
		emoji: '🧩',
		did_you_know: '文中確認 Pixley 可免費做 3 段動畫，並提出「教師最後會修改作業設計」的實務觀點，暗示關鍵不是禁止 AI，而是重塑任務流程與評量證據。',
		talking_points: [
			'本週重點：以「可免費」為第一關。Edublogs 每週整理讓教師先做工具比對，再決定是否納入備課流程，直接回應第一線時間不足的導入障礙。',
			'可直接試作：PageMaster 可做可選路徑故事，適合語文課把劇情任務接到討論題，降低教師一次設計整段情境的負擔。',
			'可直接試作：Pixley 可免費製作 3 段動畫，適合新知導入或流程示範，教師可先用小題目驗證學生注意力與理解成效。',
			'新出現做法：WordFlippin 與 IQPrompt 可分工負責詞彙練習與資料視覺化，讓單一作業兼顧文科與數據詮釋，降低重複出題成本。',
			'可直接試作：文中把 NotebookLM、Open-source AI 簡報生成器與 Google AI 教育系列放在同一脈絡，提示可由同一位教師在同一週完成素材蒐集、簡報製作到學生支援流程。',
		],
		quote: 'At least, for now, I’m going to make this a weekly feature which will highlight additions to THE BEST NEW – & FREE – ARTIFICIAL INTELLIGENCE TOOLS THAT COULD BE USED IN THE CLASSROOM',
		quote_attribution: 'Edublogs, 2026-05-18',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/18/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-152/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: 'Edublogs 立場偏教師實用主義：用每週快訊式方式先解決「可用什麼」與「在哪裡拿到」的問題，將採用門檻降到低，是一種先補齊工具鏈的策略。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/18/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-152/',
					},
				],
			},
			{
				text: '產品與社群訊息同時被納入，代表趨勢不是只談教材情境，而是從內容生產、翻譯到支援教學的整體工作流；其風險在於教師仍需自行把工具串接成學習證據。',
				sources: [
					{
						name: 'TechCrunch 與 Edublogs 引述來源',
						url: 'https://larryferlazzo.edublogs.org/2026/05/18/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-152/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2025-10-24',
				date_iso: '2025-10-24',
				content: '有教師社群張貼免費 GPTs 與 Gems 投影片，作為可試作的教學設計素材。',
			},
			{
				date: '2025-10-26',
				date_iso: '2025-10-26',
				content: '有推文提及 NotebookLM 應用於支援附加需求學生的支援流程。',
			},
			{
				date: '2025-11-04',
				date_iso: '2025-11-04',
				content: '源文再次提及 NotebookLM 對多語學習者的輔助應用。',
			},
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'Edublogs 發布每週免費 AI 教學工具整理，形成本篇 cluster 的核心匯整。',
			},
		],
		articles: [
			{
				title: 'This Week’s Free & Useful Artificial Intelligence Tools For The Classroom',
				link: 'https://larryferlazzo.edublogs.org/2026/05/18/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-152/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: '4a5de606-b208-55cb-b8aa-491fd325efe0',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '英語學習者課室：AI 要先會負責任',
		short_summary: '2026 年 5 月 17 日，Edublogs 平台上的《How to Use Artificial Intelligence With English Learners—According to Teachers》整理教師觀察，核心主張是生成式 AI 在教學中有價值，但前提必須是負責任使用。文中以「如何用對」為重點，而非只談工具本身，並要求教師先補上規則與監督流程，讓 AI 成為英語學習者的助手而非替代教學判斷。對想在下堂課就嘗試 AI 的老師來說，這是一則可直接轉為流程設計的提醒。',
		emoji: '🧠',
		did_you_know: '文中第一句就指出：AI 對英語學習者有效的核心條件，不是新模型有多新，而是教師是否先把使用邏輯規範好。缺少責任機制時，輔助效能難以穩定驗證。',
		talking_points: [
			'作者主軸：這篇 2026-05-17 文章由教師觀點出發，討論 AI 在英語學習中的可行角色，將焦點放在可落地的教學現場而非行銷式工具評比。',
			'安全啟動：核心判準是「負責任使用」，也就是先有規則、再讓 AI 介入作業與回饋，避免成效無法控管的情況。',
			'教師優先順序：文中強化教師決策權，AI 先做輔助，回饋品質、任務設計與監督節點仍由教師維持。',
			'可直接試作：在 1 件事先行最穩，建議英語課可先從寫作或口語練習的單元小步驗證，再視學生回饋擴大。',
			'資料範圍訊號：目前來自 1 則來源與 1 個 domain，題旨集中，適合教師快速抽象成自己的流程模板。',
		],
		quote: 'When used responsibly, AI can be a great ally for English learners.',
		quote_attribution: 'Edublogs, 2026-05-17',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/17/how-to-use-artificial-intelligence-with-english-learners-according-to-teachers/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '第一個角度是教師實務取向：這篇不是主張全面導入 AI，而是先把教學責任放在第一位，適合面對真實班級作業節奏的教師直接借鏡。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/17/how-to-use-artificial-intelligence-with-english-learners-according-to-teachers/',
					},
				],
			},
			{
				text: '第二個角度是採用順序張力：常見科技討論先談功能、效能，這篇卻先談規範與風險控制。對學校推動單位而言，這提醒AI導入不能只看效率，需先定義可監督流程。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/17/how-to-use-artificial-intelligence-with-english-learners-according-to-teachers/',
					},
				],
			},
			{
				text: '第三個角度是跨情境延展：文章未限定學段，反而提供可跨小學到高中共通的起點觀念；教師可先以英語學習任務做小規模試作，避免一次性全面改制。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/17/how-to-use-artificial-intelligence-with-english-learners-according-to-teachers/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-17',
				date_iso: '2026-05-17',
				content: 'Edublogs 發布《How to Use Artificial Intelligence With English Learners—According to Teachers》，以教師觀點整理 AI 在英語學習中的責任式使用原則。',
			},
		],
		articles: [
			{
				title: 'How to Use Artificial Intelligence With English Learners—According to Teachers',
				link: 'https://larryferlazzo.edublogs.org/2026/05/17/how-to-use-artificial-intelligence-with-english-learners-according-to-teachers/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-17',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
];

const educationResearchStories: Story[] = [
	{
		id: '0fd2e2f9-cf32-5e39-ba08-6e5cb8b8e552',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '目標導向投資組合的 AlphaPortfolio',
		short_summary: 'NBER 於 2026-05-19 刊載工作論文《AlphaPortfolio: Goal-Oriented Investment Management Through Deep Reinforcement Learning》，以注意力神經網路搭配深度強化學習，讓模型直接優化投資組合決策。研究關心的不只回報最大化，而是能同時納入多種管理目標，包含「不可直接時間加總」的指標，作為金融決策的目標化建模方向。因摘要未揭露樣本數、國家範圍、觀測期間與主要量化結果，該研究目前更適合拿來理解方法設計，而非直接推導政策成效。',
		emoji: '📈',
		did_you_know: '這篇來自 NBER 的 AlphaPortfolio 工作論文，強調用注意力式神經網路與深度強化學習直接處理目標導向的投資組合決策，並可納入難以直接時間加總的指標作為約束。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文，主軸是演算法設計與方法學研究，著重將注意力機制神經網路與強化學習整合為組合決策流程，非大規模多國實驗回報。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間、效果量、信賴區間與主要對照結果，無法量化列出百分點、Hedges g 或其他統計顯著性，僅可視為方法提案。',
			'課堂教學可行步驟：先把學生任務寫成多目標函數（如報酬、風險、資產流動性），再用小樣本資料比較規則式配置與模型輸出，最後讓學生用觀察表記錄權重與決策差異。',
			'實施做法與學生產出：建議用同一資料切分成訓練/驗證/回測，讓學生產出「目標清單、限制條件、權重變化、交易決策」四頁簡報，以檢查模型是否真的符合目標邏輯。',
			'成效觀察與回饋：教師可追蹤報酬、波動、風險指標、持倉集中度三種觀察軸，並以週期回顧討論資料外推、樣本偏誤與交易成本，避免只用單一成效指標作結論。',
			'不要誤讀提醒：文章偏重可行模型框架，未提供跨市場穩健性或因果驗證；在政策與教學轉化上應以機制理解為主，不宜將其視為可直接套用的決策定論。',
		],
		quote: 'We adapt attention-based neural networks and reinforcement learning to direct portfolio construction, allowing broader portfolio-management objectives (including non-time-additively separable ones).',
		quote_attribution: 'NBER，2026-05-19',
		quote_source_url: 'https://www.nber.org/papers/w35195#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '這份研究的核心是「目標先行」的決策框架，適合用在研究方法課，幫助學生討論單一指標不夠時，如何把多目標設計成可計算目標；但目前仍缺少可複核的外部量化結果。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35195#fromrss',
					},
				],
			},
			{
				text: '由於僅見一篇未揭露完整統計細節的工作論文，教師可標示為「延伸研究缺口」：未來若要採作政策判讀，需更多跨市場、跨期間、跨樣本對照研究來驗證目標導向強化學習在金融與課程情境的穩定性。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35195#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'AlphaPortfolio: Goal-Oriented Investment Management Through Deep Reinforcement Learning',
				link: 'https://www.nber.org/papers/w35195#fromrss',
				domain: 'nber.org',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'f26fd6b6-07c7-5e67-93e9-081ce1cc3a0d',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '職涯不同階段學習來源如何影響薪資',
		short_summary: '這篇來自 NBER 的工作論文以德國與美國資料，檢視勞動者在不同資歷時，內部學習與外部訓練如何影響薪資與人力資本累積。作者用理論模型與量化估計，將「同儕內部學習」與「在職訓練」作為兩個來源並估計其互動，結果是前者隨資歷增加而下降，後者在中段較高、後期回落。研究同時指出遠距工作會干擾早期同儕學習，壓抑起薪成長，對台灣教師與職涯課程的啟示是：前段重建學習社群，後段再接上制度化訓練。',
		emoji: '📈',
		did_you_know: '研究指出同儕內部學習效益會隨資歷下降，而外部在職訓練形成倒U形；在遠距工作情境下，新進職涯的薪資起步更可能受限。注意：本研究為工作論文，不宜直接推論因果',
		talking_points: [
			'證據類型：NBER 工作論文，採理論模型加量化估計，分析德國、 美國兩國勞動者在職學習來源與工資動態。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間與效果量；已揭露核心訊息是內部學習隨資歷下降、外部訓練為倒U形。',
			'教學操作：可先規畫新進階段同儕共學機制，如觀課紀錄、同儕提問清單、學習檢核表，建立初期工作知識吸收效率。',
			'教學操作：中後段再導入在職訓練模組（專案輪值、跨域任務、專家回饋），以補足同儕學習減弱後的後段技能遞進。',
			'實作追蹤：若採混成教學，建議加上即時導師巡迴、任務回饋與學習證據庫，降低遠距造成的早期學習斷點並比對薪資模擬成長。',
			'政策解讀：研究未揭露可直接外推的因果大小，應把結果視為發展順序訊號，先做小規模試行再擴及更多校務場域。',
		],
		quote: 'internal learning (from coworkers) decreases with experience, while external learning (on-the-job training) follows an inverted U-shape.',
		quote_attribution: 'NBER, 2026-05-19',
		quote_source_url: 'https://www.nber.org/papers/w35199#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '機制角度：研究將學習拆成同儕學習與外部訓練兩條供給，提示人才培育不應只加總課程時數，而是按資歷切換方法，這對職涯課程設計有直接啟發。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35199#fromrss',
					},
				],
			},
			{
				text: '證據角度：摘要未提供樣本規模與效果係數，難以量化跨產業泛化程度；研究結論目前仍偏趨勢與機制假說，需延伸對照文獻與政策介入研究。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35199#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'How do Workers Learn? Theory and Evidence on the Roots of Lifecycle Human Capital Accumulation',
				link: 'https://www.nber.org/papers/w35199#fromrss',
				domain: 'nber.org',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'da0df2a1-165e-51c8-ab0e-3e77d0206ef4',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '實驗策略不是越多路徑越好，對比才是關鍵',
		short_summary: '這篇2026年 NBER 工作論文以理論模型回答實驗該如何分配：在固定預算下，同時權衡「路徑數」與「路徑間對比度」。研究未披露 RCT、問卷或追蹤樣本，僅提供最適化推導。結果指出，當任務為既有可行方案的排序時，較高預算可支持較廣路徑；但若路徑共享同質可行性不確定、訊號相關，更多路徑會重複驗證、稀釋學習，削弱最強對比。對台灣學校與校務創新，代表先鎖定最有辨識力的對比，再決定是否擴展並行。',
		emoji: '🧩',
		did_you_know: '摘要明確指出，新增路徑可提高找出強方向機會，但也會讓學習資源變得稀薄、最強對比下降；尤其當新增路徑訊號高度相關時，效率會更差。注意：本研究為理論模型工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER工作論文屬理論推導模型，非RCT；公開摘要未揭露樣本數、追蹤期間與效果量，需視為機制建議而非成效定論。',
			'數據佐證：摘要可驗證的量化邏輯是「固定預算下路徑越多→訊號分散、對比度可能下降」，但未提供百分點、信賴區間或實際樣本統計。',
			'老師下一步：先建立兩個高對比方案組合（例如任務導向與探究導向），用同一學習目標測量結果，先確保比較可辨識，再考慮新增第三路徑。',
			'老師下一步：每輪只追蹤1～2組關鍵指標，如作答正確率、提交率、修正回饋次數，避免同時蒐集太多指標造成判讀困難。',
			'老師下一步：第一輪無明顯差異時，才新增新路徑並設明確新變因；若新增路徑與既有方法訊號高度重疊，應直接終止以免浪費教學時數。',
		],
		quote: 'Adding paths creates more chances to find a strong direction, but it also dilutes learning across paths and weakens the strongest feasible contrast.',
		quote_attribution: 'National Bureau of Economic Research, 2026-05-19',
		quote_source_url: 'https://www.nber.org/papers/w35207#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '這篇研究的核心張力在於「最適化邊界」：任務不同會改變路徑取捨；不是提倡一律精簡或一律擴張，而是看預算、路徑共變與比較目標。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35207#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口：目前屬單篇理論工作論文，未提供跨校或跨時段實證；台灣學校導入前仍需搭配校內實作資料，驗證在本土情境是否保持預測方向。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35207#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'More Paths or More Contrast? A Theory of Experimentation Breadth -- by Joshua S. Gans, Luca Gius',
				link: 'https://www.nber.org/papers/w35207#fromrss',
				domain: 'nber.org',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'ede203a5-ee31-5e18-9d31-9d74c0a65b39',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '金融信任反向推力：政府方案未必更安全退休',
		short_summary: '本篇 NBER 工作論文以美國「Health and Retirement Study」資料分析退休安全行為與信任關係，並搭配金融知識面向檢視機制。摘要指出，對金融機構的信任與支持退休安全的行為較為同步；而對政府退休方案的信任未顯示同向效益，且在少數族裔家庭中，政府方案信任與持股、資產累積呈反向關係。研究未揭露樣本數、追蹤時間與效果量，對台灣教師與校務決策可作為金融素養教學中的警訊與討論起點，但仍須保留因果判讀邊界。',
		emoji: '📈',
		did_you_know: '研究摘要提到少數族裔家庭中，對政府退休方案信任較高與較少持股、較低資產累積相關；注意：本研究為觀察性關聯研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文，使用美國《Health and Retirement Study》資料做量化關聯分析，聚焦退休金融行為。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間與效果量，故目前僅能判讀關係方向，不足以做精準推估。',
			'關鍵結果：金融機構信任度高者較常出現有利退休安全的行為；政府方案信任高者在少數族裔樣本中，持股與資產累積較不理想。',
			'教學做法：教師可引導學生先自填信任分數，再用模擬退休計畫比對不同訊息來源，觀察決策是否由制度信任牽動。',
			'回饋指標：以「是否寫下可行退休行動清單」「每月存款與資產分配紀錄」做形成性評量，比成績更能看到行為改變。',
			'延伸視角：討論結果不是政策成效總論，適合設計課堂反思：學生需分辨『我信任誰』『我依據何證據決策』兩件事。',
		],
		quote: 'Trust in Financial Institutions aligns with behaviors supportive of retirement security, while Trust in Government Programs does not.',
		quote_attribution: 'NBER, 2026-05-19',
		quote_source_url: 'https://www.nber.org/papers/w35220#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究顯示金融信任與政府信任方向不同，提示退休決策不是「越信任越好」的單軸問題；在教學上應強調資料來源與制度邏輯的可驗證性。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35220#fromrss',
					},
				],
			},
			{
				text: '這是單篇美國研究的延伸研究缺口，尚無法直接外推到台灣退休制度與家庭財務行為，需更多對照文獻與在地追蹤支持政策與課程設計。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35220#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-19',
				date_iso: '2026-05-19',
				content: 'NBER 發布工作論文《Trust, Financial Literacy, and Financial Behaviors: Shaping Retirement Security》。',
			},
		],
		articles: [
			{
				title: 'Trust, Financial Literacy, and Financial Behaviors: Shaping Retirement Security',
				link: 'https://www.nber.org/papers/w35220#fromrss',
				domain: 'nber.org',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: '507a0df6-4cf1-5c2b-ac88-ea6403ff5a10',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: 'MIT 25 年開放課程：2,500 門課觸及 5 億人',
		short_summary: 'MIT 從 2001 年把 OpenCourseWare 從 10 年試驗延展為長期開放政策，25 年後累積超過 2,500 門課，使用者逾 5 億人次。文章同時揭示 MIT Learn、官網與 YouTube（超過 600 萬訂閱）再搭配硬碟鏡像，讓弱網地區也能存取教材。這組資料顯示，台灣校務若要推進開放教材，重點應放在可持續授權、素材整備與備援通道，而非短期活動。',
		emoji: '🎓',
		did_you_know: 'OCW 不只放影片，每門課同時提供講義、題庫、考試題與影片，且以 YouTube（超過 600 萬訂閱）與硬碟鏡像雙通道補位，讓資源更能跨地區被拿來用。',
		talking_points: [
			'規模證據：MIT 的 OCW 從 2001 年啟動，已累積超過 2,500 門課，顯示開放方案可由試行走向長期制度。',
			'受益訊號：文中記錄超過 5 億人次使用，提供台灣制定開放教材成效時可參考的量化基準，尤其是成長軌跡。',
			'老師可行法：先擷取 1-2 門課章節，配合其講義、題庫、影片，做「預習導入、練習回饋、短成果匯整」三步驟。',
			'觀察指標：實施時追蹤學生上傳作業率、影片完播率與題目錯誤類型，才能判斷教材接軌班級目標是否有效。',
			'落地條件：Mirror Site Program 以硬碟鏡像提供課程，對弱網校務可先行試點，先解決資源可及性再談自有平台建置。',
		],
		quote: 'Knowledge is a public good.',
		quote_attribution: 'MIT News, 2026-05-18',
		quote_source_url: 'https://news.mit.edu/2026/bet-has-paid-500-million-times-over-0518',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: 'MIT 立場偏向制度設計：開放被視為公共基礎設施，重點在授權持續、資源標準化與維運，而非單門課程曝光，對台灣建立永續教材庫特別有參考性。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/bet-has-paid-500-million-times-over-0518',
					},
				],
			},
			{
				text: '教育生態觀點可讀到「示範—擴散」效應：文中提到 MIT 的做法被其他大學與國家策略採納，代表價值在於可複製的治理模型，而非單一校名品牌效應。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/bet-has-paid-500-million-times-over-0518',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-08',
				date_iso: '2026-04-08',
				content: 'MIT 舉辦 OpenCourseWare 25 年研討會，回顧開放課程全球影響並同步推出紀念性紀錄片。',
			},
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'MIT 發布「A bet that has paid off 500 million times over」，列出 2,500 門課與逾 5 億人次使用等關鍵數字。',
			},
		],
		articles: [
			{
				title: 'A bet that has paid off 500 million times over',
				link: 'https://news.mit.edu/2026/bet-has-paid-500-million-times-over-0518',
				domain: 'news.mit.edu',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: '1a9830e4-2139-59ad-bfd3-d5085dabb8b0',
		cluster_number: 'gmail-教育部-ai-數位學習',
		unique_domains: 5,
		number_of_titles: 8,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '本週「教育部 AI 數位學習」跨學段進展',
		short_summary: '對台灣教師與學校管理者而言，這批訊號顯示 AI 已同時落在兩端：5 月 13 日起教育部把樂齡與家庭端數位素養納入治理主軸，並搭配生成式AI適齡規範；同時高中、文化大學等校方也陸續推出 AI 課程與教學成果展示。訊號形成「政策倡議＋校務實作」並行格局，但目前仍缺少受益人數、學習成效與預算規模的公開追蹤。',
		emoji: '🧠',
		did_you_know: '摘要指出教育部不僅聚焦校內教學，也將生成式AI適齡使用規範與家庭數位、情緒素養同步推進，顯示AI治理正在從教室延伸到家長溝通與日常生活。',
		talking_points: [
			'政策與學習端並行：教育部訊號把5/13樂齡與家庭數位、情緒素養放在同一治理軌，顯示AI管控不只校內課程，也要兼顧家庭層級的風險防護。',
			'銀髮學習成為切入：5/13 教育部交流樂齡學習成果並強調55歲以上持續學習，對學校而言可作為推動社區與家長參與AI素養的可視參考。',
			'高中端培力示意：中興大學辦理AI工程素養認證輔導，課程標示由基礎到應用，代表高中學段已將AI技能納入升學與職涯競爭力的課程規劃。',
			'高教示範化：文化大學以高教深耕成果展公開AI數位教學與跨域學習作品，提供跨學科整合的可觀察實作樣態，但尚未顯示長期學習成效。',
			'跨域供給放大：韓國科學教育大學與勞動部推24門免費AI線上課，提供供給規模化經驗，但目前無法直接等同台灣政府投入、名單覆蓋與持續性。',
			'訊號整併重點：多數報導為政策發布與轉述延伸，真正可落地的新增價值是各端口開始同時發力，而非單一機關的分散宣傳。',
		],
		quote: '教育部積極鼓勵臺灣55歲以上民眾持續學習與參與AI學習。',
		quote_attribution: '教育部官網, 2026-05-13',
		quote_source_url: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=4FF393948BE76167',
		quote_source_domain: 'edu.tw',
		perspectives: [
			{
				text: '政策面關注治理與保護，教育部訊號偏向規範與家庭支援：反詐、情緒素養、適齡使用規範並列，先求行為安全與風險邊界，而非立即回報學習成效。',
				sources: [
					{
						name: '教育部',
						url: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=4FF393948BE76167',
					},
					{
						name: '自由時報',
						url: 'https://news.ltn.com.tw/news/life/breakingnews/5434154',
					},
				],
			},
			{
				text: '校園端報導更重視示範與可借鏡作法：高中輔導課與大學成果展提供了不同程度的實作參考，但多以個案展示為主，與官方政策對成效指標與覆蓋率的缺口形成對比。',
				sources: [
					{
						name: '國立臺南女子高級中學',
						url: 'https://www.tngs.tn.edu.tw/2026/05/12/%E5%9C%8B%E7%AB%8B%E4%B8%AD%E8%88%88%E5%A4%A7%E5%AD%B8%E8%BE%A6%E7%90%86%E3%80%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%B7%A5%E7%A8%8B%E7%B4%A0%E9%A4%8A%E8%AA%8D%E8%AD%89%E8%BC%94%E5%B0%8E%E3%80%8D-3/',
					},
					{
						name: '中央社訊息平台',
						url: 'https://www.cna.com.tw/postwrite/chi/433234',
					},
				],
			},
			{
				text: '國際訊號顯示AI教育可由跨部會合作推進；韓國以勞動部與大學端合作推廣24門免費線上課，為台灣提供治理模型對標，但是否可直接轉移至本地，仍需本地制度與預算驗證。',
				sources: [
					{
						name: 'scooptw',
						url: 'https://www.scooptw.com/marketersgo/473402/%E9%9F%93%E5%9C%8B%E7%A7%91%E5%AD%B8%E6%95%99%E8%82%B2%E5%A4%A7%E5%AD%B8%E8%81%AF%E6%89%8B%E5%8B%9E%E5%8B%95%E9%83%A8-%E6%8E%A824%E9%96%80%E5%85%A8%E6%B0%91ai%E5%85%8D%E8%B2%BB%E7%B7%9A%E4%B8%8A/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: '國立中興大學舉辦高中生AI工程素養認證輔導課，並公布課程從基礎到應用的教學規劃。',
			},
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: '韓國科學教育大學聯手勞動部推出24門全民AI免費線上課，作為公共AI終身學習供給的外部參照。',
			},
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: '教育部相關公告與訪談整理樂齡學習成效，凸顯55歲以上學習者參與AI數位學習與詐騙防範情境。',
			},
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: '文化大學在高教深耕成果展中展示AI數位教學與跨域學習成果，對外示範大學層面的教學轉化作法。',
			},
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: '自由時報轉載教育部家庭教育推動數位與情緒素養，並提及生成式AI適齡使用規範上路。',
			},
		],
		articles: [
			{
				title: '活到老學到老最佳典範！ 全球最年長程式設計師若宮正子拜訪教育部交流臺灣高齡教育成果',
				link: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=4FF393948BE76167',
				domain: 'edu.tw',
				date: '2026-05-13',
			},
			{
				title: '國立中興大學辦理「人工智慧工程素養認證輔導」課程 - 國立臺南女子高級中學',
				link: 'https://www.tngs.tn.edu.tw/2026/05/12/%E5%9C%8B%E7%AB%8B%E4%B8%AD%E8%88%88%E5%A4%A7%E5%AD%B8%E8%BE%A6%E7%90%86%E3%80%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%B7%A5%E7%A8%8B%E7%B4%A0%E9%A4%8A%E8%AA%8D%E8%AD%89%E8%BC%94%E5%B0%8E%E3%80%8D-3/',
				domain: 'tngs.tn.edu.tw',
				date: '2026-05-12',
			},
			{
				title: '文化大學高教深耕成果展AI數位教學縮短學生職涯距離| 中央社訊息平台',
				link: 'https://www.cna.com.tw/postwrite/chi/433234',
				domain: 'cna.com.tw',
				date: '2026-05-13',
			},
			{
				title: '兒少迷短影音教育部強化家庭教育數位與情緒素養- 生活 - 自由時報',
				link: 'https://news.ltn.com.tw/news/life/breakingnews/5434154',
				domain: 'news.ltn.com.tw',
				date: '2026-05-13',
			},
			{
				title: '韓國科學教育大學聯手勞動部推24門全民AI免費線上課 - 獨家報導',
				link: 'https://www.scooptw.com/marketersgo/473402/%E9%9F%93%E5%9C%8B%E7%A7%91%E5%AD%B8%E6%95%99%E8%82%B2%E5%A4%A7%E5%AD%B8%E8%81%AF%E6%89%8B%E5%8B%9E%E5%8B%95%E9%83%A8-%E6%8E%A824%E9%96%80%E5%85%A8%E6%B0%91ai%E5%85%8D%E8%B2%BB%E7%B7%9A%E4%B8%8A/',
				domain: 'scooptw.com',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'edu.tw' },
			{ name: 'tngs.tn.edu.tw' },
			{ name: 'cna.com.tw' },
			{ name: 'news.ltn.com.tw' },
			{ name: 'scooptw.com' },
		],
	},
	{
		id: 'aaf9d5be-2ed7-5529-b561-d90ae656d2dd',
		cluster_number: 'gmail-ai-融入教學-高中',
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '教學流程',
		title: '高中教師可借鏡：中原大學AI跨域推進案例',
		short_summary: '對台灣高中教師與校務主管來說，這則消息的關鍵在於「AI導入可否可複製」。台灣中原大學今獲NVIDIA全國認證教師人數第一，7位教師成為全國最多的校園大使，顯示學校若能以教師認證綁定制度化推進，AI落地比短期展示更有持續性。校方自111學年度起到113學年度三年投入2400萬推動AI課程、教材與跨域題目，也說明跨學院治理與長期預算配置，才是讓AI真正進入教學的前提。',
		emoji: '🎓',
		did_you_know: '中原大學在114學年度將AI明確結合UN SDGs，並於2026年3月連辦多場成果展，作為校內教學成果對外驗證的一環。',
		talking_points: [
			'認證規模訊號：中原大學目前有7位教師取得NVIDIA校園大使認證，且為全國人數最多，對校方推動AI教育能見度有明確證據。',
			'投入與節奏：自111學年度起至113學年度，三期規畫共投入2400萬元，顯示AI教學不是零散加值，而是以年度編列延續的制度安排。',
			'課程落地做法：土木工程導入機器學習進行材料行為預測與損傷辨識，讓AI在專業課程中可被驗證為實務能力工具。',
			'跨域與在地鏈結：校內結合設計、工程與文學、行銷等單位推動SDGs題材，並用AI生成與多模態轉譯做跨域專題，形成社群與產業接軌窗口。',
			'可借鏡但未充分揭露的缺口：文章未提供高中段落教師人力、學生成果指標與維運成本資料，政策端若要外推仍須補齊成效與負載衡量。',
			'綠色導向範圍：資訊工程系補充Green Edge AI模型最佳化，要求模型兼顧運算效率與能源消耗，提供了AI課程可同時兼顧效能與永續的設計方向。',
		],
		quote: '中原大學為全國取得「校園大使」認證人數最多之大學，共有7位教師獲得認證。',
		quote_attribution: '桃園電子報, 2026-05-13',
		quote_source_url: 'https://tyenews.com/2026/05/1357569/',
		quote_source_domain: 'tyenews.com',
		perspectives: [
			{
				text: '治理角度看，訊號核心是學校端能否把AI當作教學制度工程：校務規畫、跨院合作與年度預算同時到位，才較能形成可持續的教師能力基盤。',
				sources: [
					{
						name: '桃園電子報',
						url: 'https://tyenews.com/2026/05/1357569/',
					},
				],
			},
			{
				text: '作為高中的參考，報導的成功樣態仍偏大學場域，尚未回答高中是否有足夠教師研修機制、學生成果量化，以及不同科系條件下的可行門檻。',
				sources: [
					{
						name: '桃園電子報',
						url: 'https://tyenews.com/2026/05/1357569/',
					},
				],
			},
			{
				text: '從溝通層面看，校方敘事多強調成效與規模，缺少師生對AI素養提升的長期追蹤資料，提醒地方決策仍需將績效指標納入採購與補助機制。',
				sources: [
					{
						name: '桃園電子報',
						url: 'https://tyenews.com/2026/05/1357569/',
					},
				],
			},
		],
		articles: [
			{
				title: '中原大學深耕AI教學獲認證全國NVIDIA「校園大使」人數最多之大學 - 桃園電子報',
				link: 'https://tyenews.com/2026/05/1357569/',
				domain: 'tyenews.com',
				date: '2026-05-13',
			},
		],
		domains: [
			{ name: 'tyenews.com' },
		],
	},
	{
		id: '232861c9-cde3-583f-90bd-1ee4291121ea',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '學校員工可否以Title IX提告？',
		short_summary: '這起最高法院受理的 Title IX 案對台灣有借鏡價值：若美國11巡迴認定校園員工不能以 Title IX 私訴，學校人事爭議可被限定在既有就業法程序；若被推翻，學校將可能面臨更直接的性別歧視私人賠償風險。兩位喬治亞大學體系員工在2019與2021年遭解聘或不續約後提告，現在由最高法院判斷全國是否統一規則。',
		emoji: '⚖️',
		did_you_know: '兩位原告都先向美國平等就業機會委員會（EEOC）申訴，再到聯邦地院提起訴訟，顯示在此類案件中行政申訴與司法程序可同時展開。',
		talking_points: [
			'受理爭點：11巡迴見解與現況：2024年11th法院認定受聯邦補助學校員工不在Title IX私訴範圍，直接衝擊雇主風險邊界。',
			'事件起點：兩案不同學校：2019年喬治亞理工女籃主教練被解聘、2021年奧古斯塔藝術教授遭不續約，兩案後來合併審理。',
			'雙軌處理：行政與司法並行：兩位原告同時向EEOC申訴並在喬治亞北區聯邦法院起訴，顯示爭議可同時承受行政調查與民事訴訟壓力。',
			'法理分歧：八個巡迴法院vs11巡迴：至少有八個其他巡迴法院支持員工可提告，與11巡迴觀點相左，最高法院待統一全國標準。',
			'歷史前例：二十年前基礎：2005年Jackson v. Birmingham曾支持高中籃球教練依Title IX起訴，與本案核心爭點形成明顯衝突。',
		],
		quote: 'The case rose to the high court out of the 11th U.S. Court of Appeals, after that court decided in 2024 that Title IX\'s right to sue doesn\'t apply to employees.',
		quote_attribution: 'K-12 Dive, 2026-05-18',
		quote_source_url: 'https://www.k12dive.com/news/supreme-court-to-determine-if-school-employees-can-sue-under-title-ix/820544/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '管理者角度看，若最高法院維持11巡迴立場，學校可將員工就業歧視爭議主要放在既有就業法路徑處理，對校方內部制度設計是「縮短風險面」但不是消除風險。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/supreme-court-to-determine-if-school-employees-can-sue-under-title-ix/820544/',
					},
				],
			},
			{
				text: '勞工權益角度看，若最高法院改判，學校的人事決策與性別爭議將更容易進入高風險私人賠償訴訟，主管在解聘與內部調查時需兼顧證據留存與程序正義。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/supreme-court-to-determine-if-school-employees-can-sue-under-title-ix/820544/',
					},
				],
			},
			{
				text: '制度面角度看，現況是十餘年巡迴法院態度不一致；本文的論點重點在於高院是否要調和Jackson v. Birmingham與11巡迴的解讀落差，形成跨州可預期規則。',
				sources: [
					{
						name: '11th U.S. Court of Appeals',
						url: 'https://www.k12dive.com/news/supreme-court-to-determine-if-school-employees-can-sue-under-title-ix/820544/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Supreme Court to determine if school employees can sue under Title IX',
				link: 'https://www.k12dive.com/news/supreme-court-to-determine-if-school-employees-can-sue-under-title-ix/820544/',
				domain: 'k12dive.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '7b7eb9dc-c63a-5cb3-bf18-8e624db85aa8',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: 'DOL撤回加班門檻新規，回到2019年標準',
		short_summary: '美國勞工部在 2026-05-18 宣布撤銷拜登時期的新加班規則，將門檻回到2019年的每週684美元並準備生效。對台灣學校管理者而言，這是一則可借鏡訊息：加班豁免不只看薪資門檻，仍要一併檢查固定薪資制與主要職務性質，否則教職薪資與加班認定仍可能出現爭議。',
		emoji: '⚖️',
		did_you_know: '2024年的規則原先把門檻拉到每週844美元，並規劃2025-01-01起再到1128美元，還要每三年自動調整，這次撤回後已取消這條自動上調機制。',
		talking_points: [
			'門檻回歸：2019年每週684美元重新成為判斷起點，取代原本2024規則將門檻上調到844美元並準備再衍進1128美元的規劃。',
			'條件不簡化：法規仍採三件事並行判斷，除薪資門檻外還要符合固定薪資制、且主要工作為免加班職責，薪資超門檻並不自動免除。',
			'時程可見：2024 年底兩件德州案件被地方法院推翻，DOL放棄上訴後，第五巡迴法院維持判決，才在 2026-05-18 轉向撤回規則。',
			'行政可預期性：新規則取消三年一次自動上修，讓雇主端在編制人事成本時可控性較高，但也減少薪資保護隨通膨調整的機制。',
			'台灣借鏡：學校若有兼任/臨時人員超時爭議，不能只比照單一金額門檻，應把聘任條件、考核職務與工時核可流程一併文件化。',
		],
		quote: 'It is critical that each element of the section 13(a)(1) exemptions – duties, salary basis, and salary level requirements – be clearly framed.',
		quote_attribution: 'Wage and Hour Division, 2026-05-18',
		quote_source_url: 'https://www.k12dive.com/news/dol-rescinds-biden-era-overtime-rule-formalizing-return-to-2019-salary-thr/820513/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'WHD 的表述著重在制度清楚可執行，強調三件要件同時成立，目標是讓雇主與員工都能判斷規則邊界，偏向降低執法不確定性。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/dol-rescinds-biden-era-overtime-rule-formalizing-return-to-2019-salary-thr/820513/',
					},
				],
			},
			{
				text: '勞動法務觀點指出，門檻回到2019只處理薪資條件，若雇主只調整工資數字不改用人與職務設計，仍可能讓加班豁免失效，爭議仍會持續。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/dol-rescinds-biden-era-overtime-rule-formalizing-return-to-2019-salary-thr/820513/',
					},
				],
			},
			{
				text: '此議題也反映司法壓力可快速改寫政策節奏：兩起地方法院判決和巡迴上訴結果直接影響行政決策，地方學校人事制度需具備可追溯文件化。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/dol-rescinds-biden-era-overtime-rule-formalizing-return-to-2019-salary-thr/820513/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2024-07-01',
				date_iso: '2024-07-01',
				content: '2024年規則將加班例外門檻調高到每週844美元，取代原2019年684美元標準。',
			},
			{
				date: '2025-01-01',
				date_iso: '2025-01-01',
				content: '該規則原訂在1月1日再把門檻提升至每週1128美元，並規劃日後每三年自動調高。',
			},
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'DOL宣布撤銷2024年最終規則，回到2019門檻水準並準備在隔日生效。',
			},
		],
		articles: [
			{
				title: 'DOL rescinds Biden-era overtime rule, formalizing return to 2019 salary threshold',
				link: 'https://www.k12dive.com/news/dol-rescinds-biden-era-overtime-rule-formalizing-return-to-2019-salary-thr/820513/',
				domain: 'k12dive.com',
				date: '2026-05-18',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '1c0c0652-40c9-5d9c-a6de-59f44ca6fbcc',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '研究證據',
		title: '一人掌金流，校務舞弊最常見原因',
		short_summary: '對台灣校長、會計或班導來說，重點不在某個州制度，而在流程是否讓少數人同時掌握收款、開立收據、入帳與對帳。KEV 研究檢視 93 起美國學校與學區舞弊案例，97% 由校內受信任人員犯案，62% 與現金流失有關，常見發生在活動費、募款與售票款等日常款項。這代表即便金額看似零散，只要缺乏權責分離，長期下來會導致行政成本、信任成本遠高於直接挪用金額。',
		emoji: '🧾',
		did_you_know: '研究揭示 97% 的 K-12 舞弊來自校內人員，且 62% 是現金流失，常見於活動費、募款、票務等小額項目累積。',
		talking_points: [
			'成因框架：K12dive引用 fraud triangle 指出三要件並存才會發生，財務壓力與合理化之外，最關鍵是「機會」來自流程失衡。',
			'內部高風險：93 起個案有 97% 涉案者是受信任的校內人員，常見是行政人員、教師、志工等，顯示「外洩風險」多先發生在熟悉系統的環境。',
			'小額累積：62% 為現金被挪用，常發生在活動費、募款、門票或旅遊款這類高頻交易，日常看似瑣碎，卻可逐年累積為大額損失。',
			'制度代價高：研究指出實際代價不只被盜金額，還包含補辦稽核、軟體重建、補訓與人事調整；個案後續常比直接損失更高。',
			'台灣可借鏡：若同一位人員同時做收款、收據、入帳與核銷，最容易形成舞弊機會，至少要把收款與對帳分工並每月複核。',
		],
		quote: 'K-12 fraud is almost always an inside job. But it only happens when three factors are present.',
		quote_attribution: 'K12dive, 2026-05-18',
		quote_source_url: 'https://www.k12dive.com/spons/we-studied-93-cases-of-school-and-district-level-fraud-they-all-had-these/819988/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '研究角度強調「舞弊是流程設計問題」，不是個別人的道德缺失；在台灣校務治理，可優先建立權責隔離與交叉覆核，而非只加大懲罰。',
				sources: [
					{
						name: 'K12dive',
						url: 'https://www.k12dive.com/spons/we-studied-93-cases-of-school-and-district-level-fraud-they-all-had-these/819988/',
					},
				],
			},
			{
				text: '案例角度則提示，資安與金流治理需從日常小額交易切入；從校外教學費、募款到票務收款，都是缺少監控的高風險點。',
				sources: [
					{
						name: 'KEV Group',
						url: 'https://www.k12dive.com/spons/we-studied-93-cases-of-school-and-district-level-fraud-they-all-had-these/819988/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: 'K12dive 發表 KEV 報告分析 93 起學校與學區舞弊案例，總結 97% 為內部人士所為與 62% 以現金方式發生。',
			},
		],
		articles: [
			{
				title: 'We studied 93 cases of school- and district-level fraud. They all had these things in common.',
				link: 'https://www.k12dive.com/spons/we-studied-93-cases-of-school-and-district-level-fraud-they-all-had-these/819988/',
				domain: 'k12dive.com',
				date: '2026-05-18',
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
