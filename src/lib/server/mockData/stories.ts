import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-05-25 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'f265345d-9290-5c23-b2eb-65065126e717',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'I/O 對話舞台示範 AI 代理化工作流程',
		short_summary: 'Google I/O 2026 的 Dialogues 舞台，將 AI 快訊從單向發表，改成跨角色共創流程示範。Sundar Pichai、Josh Woodward、Demis Hassabis 等人分別代表產品、代理技術與科學創新，討論 AI 如何主動接管任務前置與整合。對企業與教育組織而言，這代表過去需大量人工銜接的規劃、測試與內容串接，可能改以可控代理先完成初始組裝，再由人類核決。',
		emoji: '🤖',
		did_you_know: '同一場 Google I/O 對話中，同時包含 AI 代理、量子 AI、具身機器人與影像創作四大場景，顯示 Google 的示範重點是跨部門流程整合，而非單一功能亮點。',
		talking_points: [
			'跨部門對話鏈：Sundar Pichai 與 Future Forward 創辦人 Matt Berman 同場說明，將企業策略、產品路線與未來應用先後放同一討論框架，便利後續流程對齊。',
			'AI 代理主軸：Josh Woodward、Koray Kavukcuoglu、Liz Reid、Jeff Dean 對談主動式 AI agents，核心在把「可接任務啟動」前移，減少人工逐步觸發。',
			'研究加速路徑：Demis Hassabis 透過對談推進 AI 在複雜科學問題中的角色，顯示研究前期可由代理先做候選假設與試算。',
			'量子交叉應用：Hartmut Neven 與 James Manyika 將量子與 AI 接軌，象徵運算規劃與研發實驗可同步化，縮短跨組跨系統溝通時間。',
			'創作與實體雙軌：Doug Liman、30 Ninjas 與 Google 團隊聚焦劇本流程， Boston Dynamics 的討論延伸到實體機器人，AI 代理可深入到前置設計與流程測試兩端。',
		],
		quote: 'The Dialogues stage brought together Google leaders, scientific minds and creative visionaries on the technological breakthroughs helping to shape society and our future.',
		quote_attribution: 'Google 官方部落格, 2026-05-22',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: 'Google 官方視角偏向產品採行路徑：Dialogues 被當作展示平台，將 AI 代理從單一應用工具，轉為可嵌入作業流程的共通模組，核心是降低企業內部的整合摩擦。',
				sources: [
					{
						name: 'Google 官方部落格',
						url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/',
					},
				],
			},
			{
				text: '研究與創作參與者視角更強調邊界與可信任：AI 可先行假設生成、素材試作與機器人試驗，但最終仍需人類決策，工作方法重心轉到誰審核、誰授權。',
				sources: [
					{
						name: 'Google DeepMind',
						url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: 'Google 發布 I/O 2026 Dialogues 回顧，先後整理 CEO 對談、AI 代理、量子與 AI、科學研究、具身 AI 與影像創作等主題。',
			},
		],
		articles: [
			{
				title: 'Catch up on the Dialogues stage at Google I/O 2026.',
				link: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/',
				domain: 'blog.google',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: '19c1162b-08d1-55b1-ba72-00ad9f021e23',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'SignalLEMO 將外場接觸流程變流程化',
		short_summary: 'SignalLEMO 被介紹為鎖定低壓電承包商與系統整合商的 AI 業務外展工具，主打先由系統完成名單初審（pre-vetted pipeline）再進行分數化 outreach，企圖替代傳統高人工成本的初階接案流程。該頁面另揭示行動版表現僅 65/100、LCP 9.3 秒，代表轉換成效不只看模型能力，還要先解決導流入口的速度瓶頸。',
		emoji: '⚡',
		did_you_know: '產品頁文字顯示行動介面評分只有 65/100，且 LCP 達 9.3 秒；同時又聲稱採用預先審核名單＋分數排序 outreach，說明 AI 工具仍可能被前段 UX 壓制。',
		talking_points: [
			'利基場域切入：工具聚焦 low-voltage contractors（低壓電承包商）與 system integrators（系統整合商），以 AI 幫這類高報價 B2B 流程化前置接案，對照一般泛用銷售外展具有可借鏡的垂直化方向。',
			'名單先行過濾：標示 pre-vetted lead pipelines，表示產品先做名單初審與條件篩選，再啟動外展，這可降低人工逐筆判讀與重複追蹤時間。',
			'分數驅動外展：文件提到 scored outreach campaigns，將接觸資源以分數排序，讓少量業務在多名單情境下也能先處理高機率客戶，降低溝通資源浪費。',
			'效能反噬風險：同一來源指出 mobile interface 65/100、LCP 9.3 秒，若入口載入慢，名單自動化再完整，也可能在訪客轉化環節出現大量流失。',
			'可遷移思路：將可重複、標準化的商機判讀步驟交給 AI，保留人員在高價值溝通的決策，對行政、顧問、社群經營等非教育教學情境同樣具有操作樣板價值。',
		],
		quote: 'your platform’s mobile interface scores 65/100, driven by a 9.3-second Largest Contentful Paint (LCP) latency.',
		quote_attribution: 'Product Hunt, 2026-05-23',
		quote_source_url: 'https://www.producthunt.com/products/signallemo-ai-outreach-made-simple',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '工具本身傳達的是流程外包思維：把外展前段交給 AI，降低對資深銷售人力的初步判斷負擔，特別有助於中小型服務業在未擴編前維持接案速度。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/signallemo-ai-outreach-made-simple',
					},
				],
			},
			{
				text: '同一訊號卻同步警示技術門檻：當 mobile LCP 達 9.3 秒時，精準導客邏輯未必能轉成實際成效，AI 方案必須和前端效能一起被當作一整體基礎建設管理。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/signallemo-ai-outreach-made-simple',
					},
				],
			},
		],
		articles: [
			{
				title: 'SignalLEMO - Ai Outreach Made Simple',
				link: 'https://www.producthunt.com/products/signallemo-ai-outreach-made-simple',
				domain: 'producthunt.com',
				date: '2026-05-23',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '83e9d8c6-3329-5ea0-9938-0e70a84352e1',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '組織運作',
		title: 'Cohere 是企業 AI 的穩定工作馬',
		short_summary: 'Product Hunt 對 Cohere 的 Command A+ 討論顯示，它在企業 AI 工具選型上被形容為「安靜但可靠」的長跑型方案。雖然支持聲音多來自 Liveblocks、Stack Overflow、CustomGPT 等產品創辦人，但一般使用者回饋僅見 1 則，提到在指令密集流程與高量 prompting 場景維持穩定輸出。對管理者而言，這代表關鍵價值在可預期穩定度與吞吐量，而非瞬間話題。',
		emoji: '⚙️',
		did_you_know: '這則討論裡一般使用者評論只有 1 則，但創辦人型背書來自 3 組產品開發者；在沒有實作細節的前提下，口碑訊號的性質反而更偏「小樣本偏好」。',
		talking_points: [
			'穩定優先：評論將 Cohere 形容為安靜可靠而非炫目熱門，表示企業端更看重日常可維護性。',
			'使用者樣本：目前可確認的一般使用者回饋僅 1 則，卻聚焦到 instruction-heavy 與高量 prompting 的實際場景。',
			'背書來源：正向觀點包含 Liveblocks、Stack Overflow、CustomGPT 的創辦人，來源集中但未提供導入細節。',
			'實作侷限：多為肯定語彙，缺少流程圖、成本、延遲或整合方式，難以直接當成可複製 SOP。',
			'採購提醒：產品被標示為工作馬後，導向建議是先做內部 PoC、效能壓測與資安檢核再決策。',
		],
		quote: 'The lone user review calls it an underrated workhorse, especially strong for instruction-heavy workflows and high-volume prompting.',
		quote_attribution: 'Product Hunt, 2026-05-22',
		quote_source_url: 'https://www.producthunt.com/products/cohere-2',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '一方認為 Cohere 能補齊高量指令式流程的穩定空間，適合做為基礎模型工作流；另一方則提醒缺乏落地資料會放大導入風險。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cohere-2',
					},
				],
			},
			{
				text: '創辦人聲音對工具的正向評價強而集中，偏向策略與商業決策參考；一般使用者回饋雖少，但若與前者一致，能補強「穩定」而非「炫砲」的觀測價值。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cohere-2',
					},
				],
			},
			{
				text: '資料密度不足形成三方張力：若只看好評標籤容易過度樂觀；但能看見的核心訊號只剩 1 則使用者評論與寥寥描述，採購上需自行補證據。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cohere-2',
					},
				],
			},
		],
		articles: [
			{
				title: 'Command A+',
				link: 'https://www.producthunt.com/products/cohere-2',
				domain: 'producthunt.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'a2d11c11-069b-529c-b8df-ed4b3de16cc2',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'Nota 打通語音與掃描筆記成稿流程',
		short_summary: 'Product Hunt 在 2026-05-22 公布的「Nota: AI Notes & Voice」主打在 iPhone、iPad、Mac 與 Apple Watch 間整合筆記流程，支援語音、掃描、手寫與文字同時擷取，再在筆記內直接做 AI 編修。它標示可用 45 種語言逐字稿，並提供 OpenAI、Claude、Gemini、Grok 等模型選項；免費版支援無限本機筆記，Pro 再開放同步與協作。對教育與行政而言，原本要跨多工具完成的輸入、轉錄、整理與初稿修正，可能被壓縮為單一低門檻流程。這種「先記錄、再精修」模式更像可複製的工作流，而非單純新增一個聊天工具。',
		emoji: '🎙️',
		did_you_know: '該產品特別描繪可在 Apple Watch 於跑步或行走中錄音並同步到手機的情境；白板、收據、名片等掃描文字可快速回填到筆記，並透過 Cleanup、Expand、Professional、Genius、Summarize 等 Quick Action 快速整理。',
		talking_points: [
			'跨端同步輸入：Nota 支援 iPhone、iPad、Mac、Apple Watch 四端，可用語音、掃描、手寫、文字在同一篇筆記中建檔，減少在 Notion、雲端文件與 ChatGPT 之間來回切換的流程。',
			'45 種語言逐字：產品主打 45 種語言轉錄，適合國際會議、跨校交流或多語教師社群，能先保留原始語音再整理，降低人工重聽重寫時間。',
			'掃描即上鏈接：功能主張直接掃描頁面、白板或名片並入筆記，不走「先傳圖到外部對話系統」的路徑，對敏感紀錄可縮短資料外流接觸面。',
			'段落級 AI 協作：在筆記內選字串即可啟動 Edit，輸出可 append 或 replace，強調 AI 只在指定區塊起作用，較易保留內容主控權並避免整段重寫。',
			'收費分級導入：免費版提供無限本機筆記，Pro 僅在要同步、協作、匯出與更高階模型時才升級，符合先以個人場域驗證效能，再擴散到團隊的導入節奏。',
		],
		quote: 'Nota is not a chatbot. It starts with your words.',
		quote_attribution: 'Product Hunt, 2026-05-22',
		quote_source_url: 'https://www.producthunt.com/products/nota-ai-notes-voice',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品設計角度看，重點不是再多一個 AI 助手，而是把 AI 置入筆記本體，讓使用者先收斂素材再精修，特別符合備課、訪談、行政會議這類高流量筆記場景。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/nota-ai-notes-voice',
					},
				],
			},
			{
				text: '治理實務角度看，本機先行降低初始外部依賴，但 Pro 版本的同步與協作代表資料會進入團隊共享層，機關導入前仍需先確認存取權與審計規範，以免流程效率換來治理缺口。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/nota-ai-notes-voice',
					},
				],
			},
			{
				text: '整體可遷移性角度看，工具目前偏向 Apple 生態，全鏈條以 iOS 裝置為核心，若學校或研究團隊有 Android 或網頁端比例高，導入效益可能先受設備覆蓋限制。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/nota-ai-notes-voice',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: 'Product Hunt 列出 Nota 新訊：以語音、掃描、手寫、文字整合筆記輸入，並加入 AI 輔助編修與 45 種語言轉錄能力。',
			},
		],
		articles: [
			{
				title: 'Nota: AI Notes & Voice',
				link: 'https://www.producthunt.com/products/nota-ai-notes-voice',
				domain: 'producthunt.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '8f4ad789-c387-59f9-ad94-ce34ce19ddf8',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'menu bar 一鍵控管 MCP，降低 Claude 上下文負擔',
		short_summary: 'Product Hunt 的討論指出，Claude 生態中的 MCP 有個關鍵瓶頸：只要某個 MCP server 被啟用，它的工具定義就會在每則訊息都被注入上下文，即使本次任務未使用。Vibedock 以 macOS 選單列介面提供一鍵切換，並在變更後自動關閉與重啟 Claude 會話，讓使用者可快速縮減可見工具。對教學行政與研究工作者而言，這代表 AI 代理流程可由「預設全開」改為「情境即開即關」，減少上下文雜訊、加快回應效率。',
		emoji: '🧠',
		did_you_know: '原文提到作者平常一直開啟全部 MCP，結果發現上下文常常膨脹。更具體的是，單一 MCP 在任務只需少量工具時，仍可能注入 20+ 工具定義，成為 token 浪費與訊息噪音來源。',
		talking_points: [
			'上下文膨脹原因：每個啟用的 MCP server 都會在 Claude 每則訊息時注入完整工具清單，未使用並不會被跳過。',
			'控管入口設計：Vibedock 直接放在 macOS 選單列，使用者可一鍵開關 MCP，快速調整本階段可用工具。',
			'切換生效機制：工具狀態異動後會自動 kill 並 relaunch Claude session，讓上下文設定立刻更新。',
			'重點成本提醒：當只需 2～3 個工具卻載入 20+ 定義時，實際會放大 token 消耗並拖慢工作節奏。',
			'治理與精準度缺口：目前是 server 級開關，無法只保留 MCP 內 2～3 個常用工具，工具級控管仍待補強。',
		],
		quote: 'Every MCP server you have configured injects its tool definitions into your context window on every single message — whether you use it that session or not.',
		quote_attribution: 'Product Hunt, 2026-05-22',
		quote_source_url: 'https://www.producthunt.com/products/vibedock',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品視角偏向工程效率：在無感操作中快速關掉整站服務即可降低上下文負載，適合高頻開發與多任務切換情境。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/vibedock',
					},
				],
			},
			{
				text: '治理視角會把焦點放在風險邊界：既然整台伺服器都會一次注入大量工具，真正的最小權限控制仍需推進到工具層級。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/vibedock',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: 'Vibedock 在 Product Hunt 討論中被提出，主張透過 menu bar 一鍵切換 MCP server，並透過重啟 Claude 會話套用設定變更。',
			},
		],
		articles: [
			{
				title: 'Vibedock',
				link: 'https://www.producthunt.com/products/vibedock',
				domain: 'producthunt.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '63e53a41-5ecc-5f16-aa24-3383080e7249',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Slack 裡的虛擬同事：Faby 端到端任務代理',
		short_summary: 'Product Hunt 顯示的 Faby 被描述為「住在 Slack 的虛擬同事」，具備獨立電腦、瀏覽器與程式環境，可直接接入公司系統，讓任務從接收、執行到成果輸出走在同一工作流裡。此模式把傳統需要人工轉接、跨工具切換的流程集中成可代理的操作鏈，對行政作業、輔導支援與知識工作有啟發；目前頁面僅提供 31 名追蹤者，仍屬早期觀測訊號，但已揭示可複製的組織化工作方式。',
		emoji: '🤖',
		did_you_know: 'Faby 的賣點在於「自己的電腦、瀏覽器與 coding environment」整合在 Slack 入口，企業可在既有工作區內嘗試代理式執行，而非先重建一套全新平台。',
		talking_points: [
			'端到端任務：產品頁指出 Faby 能完成從 Slack 任務到成果的整體流程，核心在減少多人手動交接與工具切換。',
			'虛擬工作站：文章明確寫出其具備個人電腦、瀏覽器與 coding environment，等於讓同事代理可直接操作網頁與程式。',
			'導入方式：宣稱可 plug into company stack，重點是接到企業既有系統與授權環境，而非只做聊天插件。',
			'早期指標：僅 31 followers，代表市場驗證仍在起步，但對想追蹤代理工作流趨勢的組織仍有參考價值。',
			'可遷移觀察：教育場域若借鏡，建議先在高重複度行政任務（資料整理、流程分派）做試點，避免先上到教學核心。',
		],
		quote: 'Your virtual coworker with its own computer, browser, and coding environment.',
		quote_attribution: 'Product Hunt, 2026-05-22',
		quote_source_url: 'https://www.producthunt.com/products/faby',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品介紹站多著重使用情境與快速試用價值，對資安控管、稽核責任與長期維運成本著墨很少；導入端要自行補齊治理邏輯。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/faby',
					},
				],
			},
			{
				text: '對教育行政而言，價值不在於工具本身是否流行，而在代理模型是否能壓低重複工時。若可落在流程化作業，即便早期產品未成熟，仍有啟發。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/faby',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: 'Product Hunt 平台上線 Faby 產品頁，標示其為可接入 Slack 的虛擬同事並完成端到端任務。',
			},
		],
		articles: [
			{
				title: 'Faby',
				link: 'https://www.producthunt.com/products/faby',
				domain: 'producthunt.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
];

const workMethodsStories: Story[] = [
	{
		id: '96ffed08-a8fa-5864-9583-1e9dd005bb65',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '代理管理',
		title: 'AI代理可擴張，整合仍是單線瓶頸',
		short_summary: '這篇文章指出，AI 代理雖可快速加人力，但真正完成任務的關鍵仍在少數人類能做的整合判斷。作者用 Google I/O 討論的素材說明「越忙不代表越有效」，指出啟動代理非常便宜，卻需要大量時間去驗證、比對與合併輸出。文中以 Python 的 GIL 及 Amdahl 定律做比喻，提醒只要流程中有不可並行的核心段落，就存在固定上限，教會我們導入工具前先規劃治理與 review 循環。',
		emoji: '🧠',
		did_you_know: '文章中把「orchestration tax」描述為一種架構代價：代理可大量平行啟動，但收斂與判斷階段仍是少數人類集中處理，這一段本身就決定了真正的交付速度。',
		talking_points: [
			'啟動成本低：一句提示可快速開出新代理，但不能把「啟動易」誤認為「產能已擴張」，因為瓶頸常在後續整併。',
			'關鍵成本在收斂：每個代理回報都需人工核對正確性、衝突與語意一致性，這條單線流程未必會縮短。',
			'忙碌不等於產能：文中點出可同時開 20 個代理，但若只疊上訊息與草稿，決策者仍可能感到反而更忙。',
			'GIL 類比：像 Python 執行緒受 GIL 限制，只能同時間一人握住鎖，架構判斷與合併衝突亦非全自動可替代。',
			'Amdahl 公式下限：只要有一段核心任務必須序列化，即便代理更多也會被硬上限卡住，提升有限。',
			'設計應先於擴編：比起堆 agent 數量，更需要把「誰能批准、怎麼回饋、何時收斂」寫成流程規則。',
		],
		quote: 'The Orchestration Tax is You',
		quote_attribution: 'addyosmani.com, 2026-05-24',
		quote_source_url: 'https://addyosmani.com/blog/orchestration-tax/',
		quote_source_domain: 'addyosmani.com',
		perspectives: [
			{
				text: '工程效率觀點認為，多代理適合並行產出底稿與候選方案，但若未定義審核節點，負責人會被迫承擔更高複雜度的整併工作。',
				sources: [
					{
						name: 'addyosmani.com',
						url: 'https://addyosmani.com/blog/orchestration-tax/',
					},
				],
			},
			{
				text: '組織治理角度則把「orchestration tax」視為管理責任轉移：工具越多，必須越早設定權責與品質欄位，否則錯誤會在最後才集中爆炸。',
				sources: [
					{
						name: 'addyosmani.com',
						url: 'https://addyosmani.com/blog/orchestration-tax/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-24',
				date_iso: '2026-05-24',
				content: '刊登《The Orchestration Tax is You》，整理 Google I/O 討論重點：多代理可平行運作，但整合決策仍由單一人腦承擔。',
			},
		],
		articles: [
			{
				title: 'The Orchestration Tax is You',
				link: 'https://addyosmani.com/blog/orchestration-tax/',
				domain: 'addyosmani.com',
				date: '2026-05-24',
			},
		],
		domains: [
			{ name: 'addyosmani.com' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: '52d1c92b-9d67-5817-b013-c90ad9b1a1a0',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '新觀念',
		title: '畢業典禮反擊 AI：校方改造教學與治理',
		short_summary: '2026-05-22 的專欄整理中佛羅里達大學、田納西州中部大學、亞利桑那大學三場畢業演講，均在談及 AI 時遭到學生抗議。這些回應被解讀為青年對未來職涯與社會秩序不確定感的同步訊號。文中則引用企業與教育改革者觀點，主張學校領導需停止只圍繞 AI 做管理，改以重塑課程與生涯準備能力，回應知識型工作被快速重寫的趨勢。',
		emoji: '🎓',
		did_you_know: '同一篇報導顯示，三所美國大學在短時間內都出現了 AI 議題當場抗議，而且演講者明確承認學生的恐懼具合理性，象徵 AI 已從技術爭議變成校園治理與職涯安全感的核心議題。',
		talking_points: [
			'抗議直接起手：5 月上旬中佛羅里達大學畢業演講裡，講者一句「AI 是下一個工業革命」就引發起哄，顯示學生對議題高度敏感。',
			'跨校時間鏈：文中提到在接下來幾天，田納西州中部大學與亞利桑那大學同樣在演講現場出現 AI 抗議，跨區域持續發生。',
			'恐懼被承認：前 Google 執行長在亞利桑那場演講中指出，青年對工作消失、氣候惡化與政治撕裂的恐懼是合理反應。',
			'改革警示：一位美國教育改革者預言 AI 將壓倒大多數知識型工作，學校仍舊只訓練可被自動化任務，將放大學生未來失配。',
			'領導訊號轉向：專欄重點不是工具選擇，而是要求校方改變治理邏輯，將學校目標放在學生的判斷、韌性與職涯轉型能力。',
		],
		quote: 'There is a fear in your generation that the future has already been written, that the machines are coming, that the jobs are evaporating, that the climate is breaking, that politics are fractured.',
		quote_attribution: '前 Google 執行長（引述）,2026-05-22',
		quote_source_url: 'https://stefanbauschard.substack.com/p/gavin-newsom-on-ai-its-time-to-change',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '學生面向把抗議視為自我保護：他們將 AI 話題拉回到未來是否有穩定工作與社會秩序的疑問，對傳統畢業致辭模式形成直接挑戰。',
				sources: [
					{
						name: 'Substack 專欄（校園事件整理）',
						url: 'https://stefanbauschard.substack.com/p/gavin-newsom-on-ai-its-time-to-change',
					},
				],
			},
			{
				text: '企業與管理面向較像改革訊號：領域內倡議者認為抗議反映制度落差，主張不斷擴大 AI 相關內容，而是重新規畫學校的教學目標與治理節奏。',
				sources: [
					{
						name: 'Substack 專欄（企業領導引述）',
						url: 'https://stefanbauschard.substack.com/p/gavin-newsom-on-ai-its-time-to-change',
					},
				],
			},
			{
				text: '教育改革面向更進一步主張課程本體必須改造：若繼續依賴可被演算法複製的知識型任務，未來學位對職涯的支撐力將持續削弱，學生準備不足。',
				sources: [
					{
						name: 'Substack 專欄（教育改革觀點）',
						url: 'https://stefanbauschard.substack.com/p/gavin-newsom-on-ai-its-time-to-change',
					},
				],
			},
		],
		articles: [
			{
				title: 'Gavin Newsom on AI: It\'s Time to Change How We Learn, Work, and Govern -- Now',
				link: 'https://stefanbauschard.substack.com/p/gavin-newsom-on-ai-its-time-to-change',
				domain: 'stefanbauschard.substack.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: '024ce7bc-b743-56f1-b7a6-007f7a4bf598',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權,研究證據',
		title: 'arXiv 對 AI 生成投稿啟動一年禁制',
		short_summary: 'arXiv 在 2026 年宣布，若投稿中出現可確認的 AI 生成問題（如幻覺參考文獻或殘留 meta-comment 等），將直接遭一年停權，且停權後再投稿前須先通過受同儕審查的刊物。此舉在 2026 年3月三大學科投稿首次逾3萬件、較2020年1.5萬與2015年5千的高速成長背景下推出，核心是壓住 paper mill 與劣質投稿，維護預印本資料可信度。',
		emoji: '🛑',
		did_you_know: '文章指出 2026 年3月 math/physics/computing 投稿破三萬件，遠高於 2020 年 15,000 與 2015 年 5,000，且部分學術會議預印本文出現 paper mill 販售，說明「投稿—曝光—交易」鏈條已從邊緣化問題變成治理對象。',
		talking_points: [
			'停權條件明確：投稿若有可確認 AI 影響，例如幻覺參考文獻或 LLM 留下的 meta-comment，直接列入一年禁傳。此舉將責任落回提交者自查。',
			'雙重門檻機制：第一輪停權後，作者若要回來投稿，必須先有受同儕審查機制接收的學術刊物成果，降低低質內容再進入率。',
			'量能失衡壓力：arXiv 提到 2026 年3月數學、物理、計算學科預印本投稿首次破 3 萬件，較 2020 年 15,000 件和 2015 年 5,000 件大幅提高。',
			'政策主軸鎖定紙廠：研究完整性倡議者認為規範是針對 paper mill 與大量低質稿件，不是針對一般正當作者，並保留申訴空間。',
			'引用生態監管上升：文中提及有研究顯示部分 preprint 先被會議稿件接收，又出現在 paper mill 交易路徑中，威脅學術引用品質。',
		],
		quote: 'If a submission contains incontrovertible evidence that the authors did not check the results of LLM generation, this means we can’t trust anything in the paper.',
		quote_attribution: 'arXiv, 2026-05-22',
		quote_source_url: 'https://www.insidehighered.com/news/faculty/books-publishing/2026/05/22/ban-authors-who-submit-ai-content-welcome-unenforceable',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '平台治理視角看重可執行性，故以「不可否認證據」定義違規，搭配一年的停權與後續投稿門檻，以降低人工審查成本與風險外溢。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/books-publishing/2026/05/22/ban-authors-who-submit-ai-content-welcome-unenforceable',
					},
				],
			},
			{
				text: '研究完整性觀點較重視研究品質鏈，認為規則主要應打擊 paper mill 與高風險投稿，但也擔心條文落地仍受限於實務執法與證據蒐證能力。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/books-publishing/2026/05/22/ban-authors-who-submit-ai-content-welcome-unenforceable',
					},
				],
			},
			{
				text: '學術出版者觀點可能更關心參考文獻與可重複性，特別是投稿量快速擴張時，預印本治理從事後罰則轉向前置門檻，能維持資料庫可信任度。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/books-publishing/2026/05/22/ban-authors-who-submit-ai-content-welcome-unenforceable',
					},
				],
			},
		],
		timeline: [
			{
				date: '2015-01-01',
				date_iso: '2015-01-01',
				content: '數學、物理、計算預印本投稿約為5,000件，為後續成長提供長期比較基準。',
			},
			{
				date: '2020-01-01',
				date_iso: '2020-01-01',
				content: '同類投稿數據上升到約15,000件，顯示短短五年間量能增加。',
			},
			{
				date: '2026-03-01',
				date_iso: '2026-03-01',
				content: '2026年3月投稿破30,000件，三大學科首次突破歷史門檻，成為政策收緊的重要背景。',
			},
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: 'arXiv 宣佈對含可確認 AI 問題內容的投稿一律一歲停權並提高後續投稿門檻。',
			},
		],
		articles: [
			{
				title: 'Ban for Authors Submitting AI Content ‘Welcome but Unenforceable’',
				link: 'https://www.insidehighered.com/news/faculty/books-publishing/2026/05/22/ban-authors-who-submit-ai-content-welcome-unenforceable',
				domain: 'insidehighered.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
	{
		id: '3f40c139-f4b1-5724-8bbd-6ebc8dfc8c2c',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '職涯判斷',
		title: '美大學、企業同步抬高 AI 能力，畢業生求職門檻飆升',
		short_summary: '根據 3 月對全美近 500 所學校、1,248 名學士班畢業生的調查，AI 使用率由原先平均落差擴大到約 85%，且逾三分之一學生每天使用。美國州立大學系統（SUNY）與維吉尼亞大學同步建立 AI 政策與通識識能機制，企業端也將 AI 要求寫進職缺；在實習職缺中超過 10% 提及 AI，全職職缺提及比去年幾乎翻倍到 4.2%。對新鮮人而言，AI 能力正從加分項升成必備入口。',
		emoji: '🎓',
		did_you_know: '職場面向不只科技業拉高需求，金融職缺 AI 提及率也達 7%，媒體與行銷接近 5.5%，政府、醫療、教育職缺也從接近零上升到各約 3%，顯示 AI 能力需求已跨域外溢。',
		talking_points: [
			'入門市場明顯轉折：調查顯示大學畢業生中 AI 採用率達 85%，比兩年前高 31 個百分點，超過三分之一學生每日使用，顯示基礎技能轉為共識化。',
			'制度先行治理：SUNY 在 64 校區導入全校 AI 政策，明訂責任使用訓練、通識課程補位與研究學習機制，將 AI 進入學習與服務流程。',
			'雇主條件抬頭：文章指出活躍實習職缺中有超過 10% 提到 AI 技能，且全職職缺 AI 提及占比接近翻倍至 4.2%，入門職位門檻明顯提高。',
			'產業擴散速度快：科技職缺近三分之一提到 AI，金融職缺超過 7%，媒體與行銷約 5.5%，顯示 AI 要求正從科技邊緣向主流產業擴散。',
			'資料主權成關鍵：SUNY 資訊安全主管指出，學生個資與學術紀錄不能外流到未受契約限制的外部模型，政策目標是讓 AI 受控增益而非放大風險。',
		],
		quote: '“One of our major concerns is making sure that SUNY data—including students’ personal information and academic records—is protected.”',
		quote_attribution: 'SUNY 資訊安全長官，2026-05-22',
		quote_source_url: 'https://www.insidehighered.com/news/student-success/life-after-college/2026/05/22/3-takeaways-ai-and-entry-level-jobs',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '高教端觀點是「先治理後創新」：學校把 AI 納入制度化教務與風險框架，因應學生已普遍使用 AI，但又必須處理資料保密、學術誠信與支援服務設計，顯示入口先進行規範。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/student-success/life-after-college/2026/05/22/3-takeaways-ai-and-entry-level-jobs',
					},
				],
			},
			{
				text: '用人端觀點則是「先拉標準再補養分」：企業把 AI 能力寫進更多職缺，導致畢業生就業門檻上移，反推學校在學位階段就要把 AI 工作技能當作職涯基本件。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/student-success/life-after-college/2026/05/22/3-takeaways-ai-and-entry-level-jobs',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: 'Inside Higher Ed 發表《3 Takeaways on AI and Entry-Level Jobs》，彙整3月畢業生調查、SUNY 新政策與職缺 AI 提及趨勢，指出入門職場門檻同步上升。',
			},
		],
		articles: [
			{
				title: '3 Takeaways on AI and Entry-Level Jobs',
				link: 'https://www.insidehighered.com/news/student-success/life-after-college/2026/05/22/3-takeaways-ai-and-entry-level-jobs',
				domain: 'insidehighered.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
];

const aiClassroomStories: Story[] = [];

const educationResearchStories: Story[] = [
	{
		id: '4a5a381b-26eb-5a90-aa01-b5187bdba333',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究回顧',
		title: 'MIT開放課程25年：高教資源如何走向全球',
		short_summary: 'MIT於 2026/5/22 發佈短片《The Courage to Be Open: MIT OpenCourseWare and the Democratization of Knowledge》，回顧其在 2001 年率先推出 MIT OpenCourseWare 並開啟大規模免費共享的方向。影片指出這不只是內容開放，而是把高等教育知識流通從校內邊界改寫為全球公共資源。對台灣教師與校務決策來說，重點在於把公開資源轉化為可驗證、可對位課綱與在地支持的學習流程，而非視為直接取代現有課程的捷徑。',
		emoji: '🎓',
		did_you_know: '該影片由 MIT Open Learning 製作，片長 15 分 22 秒，重點敘述 MIT OpenCourseWare 在 2001 年首度推行後，如何持續影響全球知識共享與高教資源流通。',
		talking_points: [
			'起點重述：2001 年 MIT 將 OpenCourseWare 轉為對外免費資源，影片認為其關鍵意義在於把課程可得性從校內資源升級為全球可取用能力。',
			'演進訊號：影片題名《The Courage to Be Open》聚焦 25 年歷程，核心不是單一課程，而是高教系統如何把資源分享制度化並持續擴散。',
			'老師可做法：先挑 1-2 個與班級目標對位的主題，安排 15 分鐘精選片段觀看，再讓學生輸出「重點摘要＋延伸提問」，降低陌生主題進場門檻。',
			'教師回饋語：可用三句式追問「你學到的主張是什麼？是怎麼證明？還缺哪些證據？」，搭配 1 次口頭回報與 1 次小結，觀察學生理解深度。',
			'實施檢核：建立觀看完成率、摘要正確率、問題品質三指標，先在小班試行再擴展；影片本身未提供台灣學生成效統計，避免直接推斷成效。',
			'觀點提醒：不要把公開課程當成即時替代方案，影片主要是制度史敘事，真正能否提升學習，仍需搭配課綱對位、學習支援與在地化教學設計。',
		],
		quote: 'The film captures both the vision behind this work and the lasting impact it has had on expanding access to learning at scale.',
		quote_attribution: 'MIT News, 2026-05-22',
		quote_source_url: 'https://news.mit.edu/2026/featured-video-mit-teachings-free-to-the-world-0522',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: '資源治理角度：MIT 強調從 2001 年起建立可全球取用的課程供應鏈，將知識分享視為制度建設，而非一段式品牌行銷。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/featured-video-mit-teachings-free-to-the-world-0522',
					},
				],
			},
			{
				text: '教學落地角度：台灣情境可從其做法借鏡「流程化導入」：先對位課綱再補充素材。它提醒我們，開放素材是否有效，取決於校內課程設計與輔助評量。',
				sources: [
					{
						name: 'MIT Open Learning',
						url: 'https://news.mit.edu/2026/featured-video-mit-teachings-free-to-the-world-0522',
					},
				],
			},
		],
		timeline: [
			{
				date: '2001-01-01',
				date_iso: '2001-01-01',
				content: 'MIT 開始推動 MIT OpenCourseWare，標誌著高等教育課程資源對外免費開放的重要歷史起點。',
			},
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: 'MIT News 發佈短片《The Courage to Be Open: MIT OpenCourseWare and the Democratization of Knowledge》，回顧其 25 年影響。',
			},
		],
		articles: [
			{
				title: 'Featured video: MIT teachings, free to the world',
				link: 'https://news.mit.edu/2026/featured-video-mit-teachings-free-to-the-world-0522',
				domain: 'news.mit.edu',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: '2911e901-bfc2-5cdf-9858-caaaac061798',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美研費近3億未撥發 台灣可借鏡校務流程',
		short_summary: '美國教育部被K-12與大學團體、兩黨參議員施壓，要求在9月30日前釋出IES未撥的近3億美元（約2.9億美金），否則這筆研究經費將失效。對台灣老師和校務管理者而言，重點是：研究預算若卡在撥款節點，最先受損的是教學改進、弱勢學生支援與校務決策證據，更提醒每一案要先訂年度結案時程與責任窗。',
		emoji: '🧾',
		did_you_know: 'IES同時管理全國性學習成效資料與研究補助。文中提到的數字顯示，FY25與FY26累計各有7.93億與7.896億美元來源，仍有約2.9億美元未及時配置。',
		talking_points: [
			'時程卡位：IES FY25未撥約2.9億美元若過9月30未放，可能作廢，研究案就會被迫延後或中斷。',
			'立法施壓：5月11日有19位參議員跨黨聯名，要求美國教育部補強IES經費配發，避免科研基礎斷鏈。',
			'執行瓶頸：新聞指出兩大研究中心大量FY25提案被關帳，過去一年幾乎沒有新獎勵案推出。',
			'研究影響：文中提到NCSER曾支援閱讀、數學與自閉症焦慮相關研究，缺口延續會降低政策可採證據。',
			'台灣提醒：現場若有研究經費池，應加入到期前告警、審核回饋與補助補件機制，避免行政節點拖到現場失效。',
		],
		quote: 'committed to using appropriated funds to meet our statutory obligations while supporting high-quality research.',
		quote_attribution: '美國教育部發言人, 2026-05-22',
		quote_source_url: 'https://www.k12dive.com/news/Pressure-mounts-for-Ed-Dept-to-release-research-funds/820956/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '倡議與監督視角認為未撥款本身就是政策風險，特殊教育與高需求學習研究停擺，將削弱學校與州政府改善服務的直接證據。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/Pressure-mounts-for-Ed-Dept-to-release-research-funds/820956/',
					},
				],
			},
			{
				text: '部會視角強調依法執行與高品質研究並行，需兼顧預算規範與程序義務；訊號是行政可用空間有限，但不代表可放棄撥款義務。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/Pressure-mounts-for-Ed-Dept-to-release-research-funds/820956/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: '19位跨黨參議員聯名敦促釋出IES經費，指向FY25餘額與過往FY25計畫停擺問題。',
			},
			{
				date: '2026-05-18',
				date_iso: '2026-05-18',
				content: '97個K-12與高教倡議組織再度致函，要求於9月30日前釋放剩餘研究經費。',
			},
			{
				date: '2026-09-30',
				date_iso: '2026-09-30',
				content: '若未及時分配，IES FY25未使用款項將逾期失效，未撥出的資金風險被再次點明。',
			},
		],
		articles: [
			{
				title: 'Pressure mounts for Ed Dept to release research funds',
				link: 'https://www.k12dive.com/news/Pressure-mounts-for-Ed-Dept-to-release-research-funds/820956/',
				domain: 'k12dive.com',
				date: '2026-05-22',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '9c70a253-f3d9-564c-90bc-8842180f7694',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國K-12快訊5題：整併與補助豁免',
		short_summary: '這篇發佈於 2026-05-22 的 K-12 週回顧，用 5 題快測整理近期新聞，核心是邁阿密戴德縣的學校整併構想，以及另一州爭取到 K-12 維持經費要求的聯邦豁免。對台灣教師與學校管理者來說，重點不在名詞，而是提醒：制度調整往往同時衝擊學生服務可及性、教師工時與行政流程，先做現場影響盤點才能避免只看到帳面效率。',
		emoji: '🧭',
		did_you_know: '原文不是完整政策報導，而是用過去一週為主軸的「小考」形式，將 Miami-Dade 的整併討論與某州聯邦豁免兩件事包成題目，讓讀者先檢視自己是否追上新聞重點。',
		talking_points: [
			'快測結構：文章以「過去一週」為時間軸，設 5 題問答，先幫讀者過濾雜訊再聚焦政策訊號。',
			'學區整併：案例點名 Miami-Dade County，顯示地方可能透過整併學校調整資源分配與行政成本。',
			'補助規範：另一則是某州取得 K-12 補助要求的聯邦豁免，暗示法規門檻可在特定情境暫時放寬。',
			'治理對照：同文同時出現「整併」與「豁免」兩條線，代表台灣未來也會面臨效率化與彈性化間的平衡困境。',
			'台灣啟發：若要借鏡，應先量化學生接續性、家長通學負擔與行政人力成本，再決定是否調整方案。',
			'資料限制：因為是新聞快訊式整理，缺少條文細節與影響數據，現場決策仍要回到原始法規與在地資料驗證。',
		],
		quote: 'From Miami-Dade County’s school consolidation proposal to another state’s federal waiver for K-12 funding requirements, what did you learn from our recent stories?',
		quote_attribution: 'K12Dive, 2026-05-22',
		quote_source_url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-18-2026/820896/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '此篇偏向新聞匯整與測驗體驗，優點是快速幫管理者建立本週政策警覺，缺點是缺少條文與數據背景，無法直接作為行政決策依據。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-18-2026/820896/',
					},
				],
			},
			{
				text: '同篇文章同時提到學校整併與聯邦豁免，形成治理兩端：一端追求資源效率，一端追求規範彈性；對台灣管理者可作為制度風險對照。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-18-2026/820896/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Test yourself on the past week’s K-12 news',
				link: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-18-2026/820896/',
				domain: 'k12dive.com',
				date: '2026-05-22',
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
