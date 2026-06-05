import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-06-05 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: '129af00b-6ae4-5ac4-b629-a90ce64ef566',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'Endava 以 AI 代理重構軟體交付',
		short_summary: 'Endava 將 OpenAI 企業平臺導入日常作業，讓 ChatGPT Enterprise 與 Codex 參與從會議準備到部署的完整流程。文章指出，組織在導入 AI 後，交付瓶頸已由純工程輸出轉向需求盤點、規劃與跨部門協作；因此以 DavaFlow 重設方法論，將 AI 代理嵌入每個環節，形成可持續的流程化作業，而不只是開發端加速。',
		emoji: '🤖',
		did_you_know: 'Endava 發現原有開發模式下，真正拖慢速度的是需求與協作步驟，因此將 AI 代理直接放進會議、規劃、文件與專案彙報中，讓流程起點就開始被 AI 影響。',
		talking_points: [
			'平台先行：Endava 將 OpenAI 當企業平台推廣到全體人員，使 ChatGPT Enterprise 與 Codex 成為日常流程的一部分，而不只是開發工具。',
			'瓶頸重心轉移：CTO 指出，真正限制已由工程輸出改為需求蒐集、商業分析與利害關係人對齊，導向以流程改造優先。',
			'DavaFlow 一體化：會前會後、產品發掘、工程實作到部署都導入 AI 工具，目標是減少多工轉接與人工重複操作。',
			'跨部門代理化：法務、專案管理、商務均開始用 AI 生成文件、治理摘要與定價應用，AI 能力從技術端擴展到營運端。',
			'文化轉換邏輯：其實作模式是「先用 AI 思考問題再行動」，讓 AI 先行成為組織工作習慣，提升回應速度與對齊效率。',
		],
		quote: 'If I don’t have an agent running in the background, I somehow think I’m wasting my time.',
		quote_attribution: 'OpenAI, 2026-06-04',
		quote_source_url: 'https://openai.com/index/endava-frontiers',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '這則案例呈現企業轉型的真義：AI 不是再加一個工具，而是先重寫需求與協作節奏，否則交付速度仍會卡在非工程流程。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/endava-frontiers',
					},
				],
			},
			{
				text: '從法務、專案、商務同步導入看，AI 代理的邊界從工程擴到治理與商務流程，預示組織職能分工將由「誰會寫程式」轉為「誰能設計可驗證的人機流程」。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/endava-frontiers',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'OpenAI 發表 Endava 以 AI 代理重構軟體交付的做法，說明 DavaFlow 方法從需求到部署全面整合 OpenAI 技術。',
			},
		],
		articles: [
			{
				title: 'How Endava is redesigning software delivery around AI agents',
				link: 'https://openai.com/index/endava-frontiers',
				domain: 'openai.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'c0dc6270-49d5-56af-b2ff-599b2fb9e865',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'ChatGPT 改用 Dreaming 記憶，對話脈絡更持續',
		short_summary: 'OpenAI 於 2026 年 6 月 4 日表示，ChatGPT 的記憶機制升級為以 Dreaming 為核心的新架構，從「只在對話中手動寫入」改為背景整合多輪聊天內容，解決舊記憶易過時與失準問題。此舉配合可見可編輯的記憶摘要，讓跨會話與長期專案可維持一致上下文，減少使用者反覆補充背景的時間成本，對代理式作業、長期研究與複雜流程設計具實際效率影響。',
		emoji: '🧠',
		did_you_know: 'OpenAI 指出，新架構在 2026 年面向美國 Plus/Pro 先行推出，並規劃未來幾週逐步擴及更多國家與 Free、Go 方案。',
		talking_points: [
			'背景化記憶：舊機制常需使用者明確下指示才能記住資訊，新的 Dreaming 可在背景自動整理聊天歷史，降低反覆補述需求。',
			'過時偏差修正：saved memories 過去會隨時間變舊，OpenAI 將新系統定位為提升記憶新鮮度與相關性，直接回應長期使用下的正確性風險。',
			'人機可審閱：記憶摘要頁會展示系統整理結果，使用者可加註、修正與設定提醒主題，維持最終話語權與可控性。',
			'產品演進軌跡：自 2024 年推出 saved memories、2025 年加上第一版 Dreaming，到 2026 年再以可擴展架構加持，顯示記憶正在變成核心底層能力。',
			'分階段上線：本輪先供美國 Plus/Pro 使用，未來數週再擴大到更多國家與 Free、Go，用戶可預期可用性按區域與方案分階段解鎖。',
		],
		quote: 'Dreaming leverages a background process that allows ChatGPT to learn from many conversations and synthesize ChatGPT’s memory state in order to always provide the freshest, most relevant context to your conversations.',
		quote_attribution: 'OpenAI, 2026-06-04',
		quote_source_url: 'https://openai.com/index/chatgpt-memory-dreaming',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '產品端看是對長期對話生產力的工程化升級，將零碎會話轉為可重用的工作脈絡，對代理工具接續任務特別有利。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/chatgpt-memory-dreaming',
					},
				],
			},
			{
				text: '治理端則是信任邊界的測試：主動生成記憶能否仍維持可審核性，OpenAI 用可見摘要與使用者更新機制來降低自動化記憶帶來的誤判風險。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/chatgpt-memory-dreaming',
					},
				],
			},
		],
		timeline: [
			{
				date: '2024-04-01',
				date_iso: '2024-04-01',
				content: 'ChatGPT 引入 saved memories，允許使用者要求模型記住偏好與資料並延續到未來對話。',
			},
			{
				date: '2025-04-01',
				date_iso: '2025-04-01',
				content: 'OpenAI 推出第一版 Dreaming，改為參考聊天歷史自動整理記憶，補強舊有 saved memories。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'OpenAI 發佈更具計算效率且可擴展的新記憶架構，並先在美國對 Plus 與 Pro 用戶開放。',
			},
		],
		articles: [
			{
				title: 'Dreaming: Better memory for a more helpful ChatGPT',
				link: 'https://openai.com/index/chatgpt-memory-dreaming',
				domain: 'openai.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'e1881607-f44b-5d6a-8587-564759ada274',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '治理授權',
		title: 'OpenAI 擬定 AI 生物防衛新作戰流程',
		short_summary: 'OpenAI 在 2026 年 4 月推出 GPT‑Rosalind，5 月隨即推出 Rosalind Biodefense，並於 6 月 4 日發布《Biodefense in the Intelligence Age》草案，主張以可信任開發者為中心建置 AI 生物防衛能力。這一做法讓生物安全從單點研究嘗試，轉向「模型＋流程＋權限」的可維運框架，重點不再只是加速分析，而是讓危機偵測、對策研發與回應節點更可持續、可追責。',
		emoji: '🧬',
		did_you_know: 'OpenAI 的新構想不是只上新模型，而是三步並進：先在 4 月、5 月導入 Rosalind 系列能力，6 月再補上全域行動藍圖，並要求能力部署同時具備 safeguards、證據與治理條件。',
		talking_points: [
			'模型鋪設：4 月 GPT‑Rosalind 先把生物、藥物發現與轉譯醫學能力前置化，目標是縮短研究推進週期。',
			'防衛延伸：5 月開放 Rosalind Biodefense，聚焦可信任開發者，補齊防疫準備與生物威脅研判的實作場景。',
			'安全邏輯：OpenAI 明確把 safeguards、證據、治理放在能力擴張條件，讓授權而非單純開放成為部署核心。',
			'產業新模式：從 4 月到 6 月的發表節奏顯示，生物安全正朝可量測、可維護的流程化導入，而非單次技術公告。',
			'組織變化：計畫將 AI 能力定位為可與危機應變整合的「工具化能力」，意味未來防禦工作鏈可透過標準化權限和人機覆核協同。',
		],
		quote: 'The best way to strengthen biological security is to equip trusted developers with advanced capabilities while developing the safeguards, evidence, and governance needed for their safe deployment.',
		quote_attribution: 'OpenAI, 2026-06-04',
		quote_source_url: 'https://openai.com/index/biodefense-in-the-intelligence-age',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的角度偏向治理導向，認為關鍵不是模型本身，而是誰被授權、以何種流程使用。這讓生物 AI 的風險控管從道德宣告，轉為可追蹤的組織運作邏輯。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/biodefense-in-the-intelligence-age',
					},
				],
			},
			{
				text: '在實務上，這組合仍有張力：能力快速擴張可加速威脅偵測，但若授權與稽核落差大，可能讓工具可得性提升卻未同步壓低誤用風險，治理品質會變成決勝點。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/biodefense-in-the-intelligence-age',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-01',
				date_iso: '2026-04-01',
				content: 'OpenAI 提出 GPT‑Rosalind，定位為支援生物、藥物發現與轉譯醫學研究的 frontier reasoning 模型。',
			},
			{
				date: '2026-05-01',
				date_iso: '2026-05-01',
				content: 'OpenAI 宣布 Rosalind Biodefense，讓可信任開發者可建置新穎生物防禦與疫情準備能力。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'OpenAI 發表《Biodefense in the Intelligence Age》，提出 AI 生物韌性行動藍圖與能力治理架構。',
			},
		],
		articles: [
			{
				title: 'Biodefense in the Intelligence Age',
				link: 'https://openai.com/index/biodefense-in-the-intelligence-age',
				domain: 'openai.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'baa51e9a-c92a-50a3-8dc1-54a8f87183a3',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'GPT-Rosalind 推進生醫研發工作流自動化',
		short_summary: 'OpenAI 於 2026-06-03 公佈 GPT-Rosalind 升級版本，將 GPT-5.5 的代理式程式撰寫與工具調用能力延伸到藥物研發核心流程。新模型加強醫藥化學、基因體分析與 wet lab 疑難排除，並以 LifeSciBench 的六大生命科學工作流程持續驗證。此舉把研究現場從人工切割資料、反覆串接工具的舊方式，推向可重複、可追蹤的流程導向，現階段仍以 research preview 針對合格機構先行開放。',
		emoji: '🧬',
		did_you_know: 'LifeSciBench 採外部專家判分，不只看單一題目，而是覆蓋 evidence handling、analysis、design and optimization、scientific reasoning、validation and operations、translation and communication 六個生命科學工作環節。',
		talking_points: [
			'流程替代：GPT-Rosalind 結合 GPT-5.5 的代理編碼與工具使用，目標是縮短從研究問題到實驗建議的轉譯時間。',
			'能力加值：更新明確加強 medicinal chemistry 與 genomics，不再只做一般對話補助，而是針對研發專業任務給出可落地回應。',
			'作法轉折：從單點任務轉成跨流程支援，包含證據萃取、分析、設計最佳化到驗證與溝通，對應研究團隊常態日常。',
			'品質驗證：引入 LifeSciBench 作為對齊實務需求的端到端測試框架，用工作流結果替代只測局部能力的傳統 benchmark。',
			'落地條件：新版本目前僅研究預覽、以 trusted-access 供全球合格組織存取，代表可及性受治理與資格門檻影響。',
		],
		quote: 'GPT-Rosalind is now available in research preview to eligible organizations globally through our trusted-access deployment structure.',
		quote_attribution: 'OpenAI, 2026-06-03',
		quote_source_url: 'https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的定位是以研究導向更新先行，透過 preview 與受控名單快速讓大型機構試跑；這讓能力驗證提速，但也讓一般中小研究單位短期難以直接享有新流程紅利。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind',
					},
				],
			},
			{
				text: '採 LifeSciBench 量測可提升跨模組可信度，但它仍是模型能力進步的參考依據；實驗室最終仍需保留人工審核與法規流程，才能讓模型輸出變成可簽核決策。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-03',
				date_iso: '2026-06-03',
				content: 'OpenAI 發布 GPT-Rosalind 新版本公告，宣布結合 GPT-5.5 代理能力並推出 LifeSciBench 工作流程導向評測。',
			},
		],
		articles: [
			{
				title: 'Introducing new capabilities to GPT-Rosalind',
				link: 'https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind',
				domain: 'openai.com',
				date: '2026-06-03',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '1b3804b4-f07d-5d1c-b245-d33ae4d9e890',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'AI 搜尋讓二手採購可流程化',
		short_summary: 'Google 於 2026-06-03 發表二手與復古購物指引，將 AI Mode、Lens、Circle to Search 與 Virtual Try-On 串成可重複執行的採購流程：先規劃店點與行程，再以影像比對做價量盤點，最後接續試穿與估值。文章重點不只是介紹新功能，而是把「人工巡店＋反覆比價」的舊限制，壓縮成一條可維護的工作鏈，讓高需求二手選物或轉售決策更快接近決斷。',
		emoji: '🛍️',
		did_you_know: '文章示範 2026 年可直接在手機與 Google 生態內完成：查詢店點、拍照辨識、圓形搜尋相似款、虛擬試穿，最後再問「可否轉賣」與收購通路，形成買賣閉環。',
		talking_points: [
			'熱度證明需求：文中指出今年「vintage」與「how to thrift」搜尋量達到年度新高，代表二手市場已成為可被搜尋化治理的主力需求。',
			'AI Mode 一鍵規畫：可同時輸入品項與條件，例如找「90 年代球衣」並加上「附近可無麩質早午餐」條件，將採購與行前安排併在一次查詢。',
			'Lens 先驗證價值：透過拍照可查商品設計師與年代，並對應線上售價與同類供給數，快速判斷是珍稀單品還是常見貨。',
			'Circle to Search 追蹤同款：在安卓手機圈選畫面即可搜集相似款與售價，讓靈感、比較與下單路徑少一層手動輸入。',
			'虛擬試穿兼顧轉售：先用「try it on」先驗證風格是否適合，再可繼續詢問轉售價值與收購店家，縮短從採購到再流通的時間。',
		],
		quote: 'Your next favorite find is just a search, snap or circle away.',
		quote_attribution: 'Google 官方部落格，2026-06-03',
		quote_source_url: 'https://blog.google/products-and-platforms/products/search/thrifting-tips/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '對一般消費者而言，核心在於流程化代理化：搜尋、辨識、比價、試穿與估值合併為一條路徑，縮短人工判斷的碎片作業，較像是提升個人採購作業效率。',
				sources: [
					{
						name: 'Google 官方部落格',
						url: 'https://blog.google/products-and-platforms/products/search/thrifting-tips/',
					},
				],
			},
			{
				text: '對平台觀點是流量與黏著度策略：Google 將多個工具入口放進同一場景，導向從「資訊擷取」變成「商品決策流程」留存，屬於垂直場景的生態鎖定。',
				sources: [
					{
						name: 'Google 官方部落格',
						url: 'https://blog.google/products-and-platforms/products/search/thrifting-tips/',
					},
				],
			},
			{
				text: '對轉售與資源再利用端，文章呈現了「買入即能倒賣」的工作起點，但未涵蓋退貨、品質損毀與價格透明度治理，實務上仍需額外人工覆核。',
				sources: [
					{
						name: 'Google 官方部落格',
						url: 'https://blog.google/products-and-platforms/products/search/thrifting-tips/',
					},
				],
			},
		],
		articles: [
			{
				title: '5 ways Google Search can level up your thrift and vintage shopping',
				link: 'https://blog.google/products-and-platforms/products/search/thrifting-tips/',
				domain: 'blog.google',
				date: '2026-06-03',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'dda2b2a9-73a9-5dd3-bc0b-f64ed920a29d',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'AI 進入高自主代理時代',
		short_summary: '這篇文章以作者在《Co-Intelligence》後續觀察為線索，指出 AI 從人類主導、聊天機器人輔助的共作關係，快速走向可自行執行任務的自主代理。文中引用研究與 Anthropic 觀察，顯示 coding agent 已讓程式撰寫量明顯放大，Anthropic 甚至主張 AI 目前撰寫 80% 程式碼，且每位開發者交付量可到 8 倍。對教育、行政與研究工作者而言，這代表價值不再是「怎麼用工具」，而是設計可授權、可追蹤、可校正的工作流程。',
		emoji: '🤖',
		did_you_know: '作者提到，在新書《Co-Existence》的撰寫過程中，他不是全程依賴 AI，而是以「人類定調、AI 協作」為主，原因之一是 AI 在長篇敘事上仍常有明顯寫作痕跡。',
		talking_points: [
			'效率槓桿：研究顯示 coding agent 上線後，軟體撰碼量曾增加到原本的17倍，改變原本人工排程與分工。',
			'效率再量化：Anthropic 版本主張 AI 目前負責 80% 代碼產生，並讓每位開發者交付量可提高到 8 倍。',
			'角色回歸：作者指出 AI 並非全面超越人類，而是「偶爾更強」，最關鍵是人要承擔最後決策與判斷責任。',
			'品質警訊：他認為 AI 不擅長長篇故事敘述，內容容易出現明顯文本痕跡，對教學教材與政策說明仍需人工把關。',
			'流程重設：他建議的新書寫作做法是先訂目標、再用 AI 加速補充，最後由作者進行結構與語氣修整。',
		],
		quote: 'humans were at the center, chatbots were your helpers.',
		quote_attribution: 'One Useful Thing, 2026-06-04',
		quote_source_url: 'https://www.oneusefulthing.org/p/co-existence-and-the-end-of-co-intelligence',
		quote_source_domain: 'oneusefulthing.org',
		perspectives: [
			{
				text: '此觀點聚焦知識工作角色轉移，主張 AI 不是取代作者，而是讓人類把精力放在判斷、結構與真實觀點輸出，特別符合校內外知識生產場景。',
				sources: [
					{
						name: 'One Useful Thing',
						url: 'https://www.oneusefulthing.org/p/co-existence-and-the-end-of-co-intelligence',
					},
				],
			},
			{
				text: 'Anthropic 的敘事偏向效率 KPI，將焦點放在 80% 程式碼與 8 倍交付，與文章提到的品質與可讀性風險形成張力，代表導入重點在風險治理。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://www.anthropic.com',
					},
				],
			},
			{
				text: 'OpenAI 的高自主系統願景提供制度背景，但文中仍保留一條底線：即便技術可自動化，工作上也要維持人為責任鏈，否則效率成長未必等於品質提升。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: '發布《Co-Existence and the End of Co-Intelligence》一文，作者回顧 AI 從協作助手走向高自主代理的轉折。',
			},
		],
		articles: [
			{
				title: 'Co-Existence and the End of Co-Intelligence',
				link: 'https://www.oneusefulthing.org/p/co-existence-and-the-end-of-co-intelligence',
				domain: 'oneusefulthing.org',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'oneusefulthing.org' },
		],
	},
	{
		id: 'c2a7928e-860c-56be-b3f0-93a9b940c5b3',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Intelligent Terminal 啟動原生 AI 代理終端機',
		short_summary: 'Product Hunt 顯示微軟釋出的 Intelligent Terminal 是 Windows Terminal 的開源實驗分支，加入原生 AI 代理整合，支援狀態列、情境感知面板、錯誤自動偵測、工作階段管理與命令面板。它預設對接 GitHub Copilot CLI 並可串接其他 ACP 代理，使用者可直接在終端機中操作代理回覆。產品以獨立應用發佈，反映未來工作流正從「手動複製貼上錯誤訊息」轉向「代理即時回饋」，對程式開發、研究和行政流程可形成可複製的端側自動化模式。',
		emoji: '🖥️',
		did_you_know: '在討論中提到該版本預設整合 GitHub Copilot CLI，但有實驗者已連接 Gemini，顯示 ACP 兼容設計讓代理供應商可靈活替換，降低工具綁定風險。',
		talking_points: [
			'原生整合而非外掛：Intelligent Terminal 作為 Windows Terminal 的實驗版分支，將 AI 代理放進主終端機流程，不再只靠外部窗口回傳結果。',
			'流程自動化：新增代理狀態列、情境感知面板、錯誤自動偵測、session 管理與命令面板，讓終端機指令與代理行為形成同一工作迴圈。',
			'工具選擇彈性：預設對接 GitHub Copilot CLI，同時支援 ACP-compatible 代理；社群實測也可接入 Gemini，降低供應商依賴。',
			'設計策略轉向獨立應用：此專案採「完全獨立應用」發佈，非直接併入主終端機，對於要保留穩定線與實驗隔離的團隊可降低導入摩擦。',
			'可遷移的知識工作觀：使用者可直接讓代理讀取 shell 輸出並回應錯誤，減少在多視窗間複製貼上，提升除錯與教學示範效率。',
		],
		quote: 'Your agent reads the shell output directly, removing the need to copy and paste errors back and forth.',
		quote_attribution: 'Product Hunt，2026-06-04',
		quote_source_url: 'https://www.producthunt.com/products/microsoft-terminal',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品敘述主軸在於把代理能力嵌入終端機核心，將原本依賴獨立 CLI 的工作方式，改為可在同一界面完成感知、回應與 session 管理。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/microsoft-terminal',
					},
				],
			},
			{
				text: '社群觀點更偏實務治理：外部留言集中質疑跨 Session 的視窗狀態與持久性，暗示獨立應用是否真能進入既有團隊流程，仍需解決可追蹤與一致性問題。',
				sources: [
					{
						name: 'Product Hunt 社群留言',
						url: 'https://www.producthunt.com/products/microsoft-terminal',
					},
				],
			},
		],
		timeline: [
			{
				date: '2019-06-21',
				date_iso: '2019-06-21',
				content: 'Windows Terminal 開放原始碼並在 Microsoft Store 發布預覽版，成為後續 Intelligent Terminal 分支的歷史基礎。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'Product Hunt 記錄 Intelligent Terminal 上線並採原生 AI 代理整合的實驗分支。',
			},
		],
		articles: [
			{
				title: 'Intelligent Terminal',
				link: 'https://www.producthunt.com/products/microsoft-terminal',
				domain: 'producthunt.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'b8dd2551-1414-536d-b531-88a73ba24578',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Boxes.dev：Claude/Codex 代理上雲端',
		short_summary: 'Product Hunt 上的 Boxes.dev 公開「雲端專用代理開發環境」，主打讓每個 Claude Code 或 Codex 代理都有專屬雲端電腦，不再綁在本機硬體上。開發團隊指出，這能解決多人平行開發時需同時維持多份環境與測試資源的問題，並提供新用戶 10 個免費 box-hours。其意義不只在於新增工具，而是把原先分散、手動、耗資源的代理作業，轉成可複製的雲端流程。',
		emoji: '☁️',
		did_you_know: '原文說每個 thread 可從「模板盒」複製出獨立 VM，並可直接由 template 快速開出新環境，主打開箱即用、跨裝置可接入。',
		talking_points: [
			'獨立雲端機台：每個 Claude Code / Codex 線程都可綁定一台專屬 Linux VM，並與其他線程隔離，避免資源互相競爭。',
			'平行作業降成本：官方示意可讓多個線程同時跑 app 與 Chromium 測試，而不必把本機資源拆成多份 git worktree 與瀏覽器實例。',
			'新用戶試用權：首次使用可直接取得 10 個免費 box-hours，降低團隊先行導入代理雲端環境的門檻。',
			'移植流程簡化：產品可掃描本機開發環境後上雲，thread 直接由模板盒快照複製，因此環境建置時間不必每次從頭重整。',
			'社群反應指標：在 Product Hunt 首波曝光即顯示 125 位追蹤者，對「雲端 agentic 開發」模式已有明顯需求。',
			'整合工作流程：網站提到支援排程自動化與 Slack 整合，能把代理任務接入既有團隊通報與管理節奏。',
		],
		quote: 'If it works on your laptop via the codex/claude CLI, it will almost certainly work on boxes.dev.',
		quote_attribution: 'Product Hunt, 2026-06-04',
		quote_source_url: 'https://www.producthunt.com/products/boxes-dev',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品方將焦點放在「基礎設施可擴張」：把本機端代理工作轉到雲端機房，讓多人平行測試與工具整合可持續運作，核心是降低工程摩擦。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/boxes-dev',
					},
				],
			},
			{
				text: '使用者回應把痛點落在資源爭奪與可管理性：同時開多個 thread 和 Chromium 在本機容易失速，新的獨立 VM 架構是否普遍有效，取決於團隊對雲端資源成本與治理需求的取捨。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/boxes-dev',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'Boxes.dev 在 Product Hunt 上上線與介紹，主打為 Claude Code 與 Codex 提供「每代理一台雲端電腦」的開發環境。',
			},
		],
		articles: [
			{
				title: 'Boxes.dev',
				link: 'https://www.producthunt.com/products/boxes-dev',
				domain: 'producthunt.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'dcefabf3-1f23-5f6e-84d4-22c7b771f022',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'ChatGPT 對話清理流程一鍵化',
		short_summary: 'ChatPilot 於 2026-06-03 在 Product Hunt 上架，主打為 ChatGPT 對話提供批次刪除、封存與時間戳標記功能。這表示重點不在新模型能力，而是把長期累積的 AI 對話整理從「逐則操作」改成可編排流程的任務，對研究、行政、客服、教學支援等產生大量對話歷史的場域，尤其有助降低清理摩擦、提升追溯效率與知識管理品質。',
		emoji: '🧹',
		did_you_know: '產品頁摘要直接稱為「Bulk delete, archive & timestamp your ChatGPT conversations」，並明示可「Select multiple conversations」，核心在於對話治理與管理可追溯，而非新增生成能力。',
		talking_points: [
			'流程再造：可多選對話一次進行刪除或封存，少掉逐則打開聊天再處理的人工重複步驟，顯著降低操作成本。',
			'時間治理：加入 timestamp 後，對話查核可回到明確時間軸，研究紀錄與跨人員交接時更容易追溯提問脈絡。',
			'工具載體：作為 Chrome 擴充，不需重建後端平台即可試用，符合缺工程資源但對話量高的日常工作情境。',
			'可遷移價值：研究助理、課務支援或客服團隊常面對大量歷史訊息，批次封存能保留關鍵脈絡、壓低搜尋噪音。',
			'市場訊號：Product Hunt 頁面顯示 61 followers，屬早期關注與需求提示，企業導入前可用來做需求熱度參考。',
		],
		quote: 'Select multiple conversations and delete or archive them in bulk—no more clicking through chats one by one.',
		quote_attribution: 'Product Hunt, 2026-06-03',
		quote_source_url: 'https://www.producthunt.com/products/chatpilot-2',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '作為個人知識工作方法，這類工具重點是把雜亂對話轉成可維護的資產邏輯，而非提升生成品質，對忙碌使用者直接減少維持紀錄的認知負荷。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/chatpilot-2',
					},
				],
			},
			{
				text: '從組織治理角度，批次封存與時間戳有助稽核，但若要納入機敏內容流程，仍需補上權限控管與留存政策，否則治理只是工具功能到資料流程之間仍有落差。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/chatpilot-2',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-03',
				date_iso: '2026-06-03',
				content: 'Product Hunt 標示 ChatPilot 上線，聚焦「Bulk delete, archive & timestamp your ChatGPT conversations」，定位對話管理工具。',
			},
		],
		articles: [
			{
				title: 'ChatPilot',
				link: 'https://www.producthunt.com/products/chatpilot-2',
				domain: 'producthunt.com',
				date: '2026-06-03',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'e7820f93-29d2-5a9a-abd0-610413503809',
		cluster_number: 6,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Cignara 用 AI Agent 重塑客服關鍵節點',
		short_summary: 'Product Hunt 的 Cignara 被定位為可用於 Fortune 500 等級客戶支援的 AI Agent。其創辦人指出，顧客在 IVR 受阻、等待過久、被死板客服機器人卡住，或收到缺乏上下文的標準化回覆時，企業即會流失營收。文章將客服重新定義為可以同時影響留存、銷售與再加值的高價值流程，顯示客服自動化不只是省工，而是改變服務收斂與價值捕捉方式。',
		emoji: '🤖',
		did_you_know: '原文直接將流失與機會鏈結起來：抱怨並非只關係體驗，還是留存失分點；詢問是銷售起點；客服通話同時蘊含加值推進空間。',
		talking_points: [
			'價值定位：Cignara 主打 Fortune 500 等級客服場景，核心目標是把高風險的支援斷點改造成可控流程，而非只改善單次回應速度。',
			'流失條件：原文點名 IVR 卡關、等待過久、機器人阻塞與無脈絡回覆四類情境，這些都會同步放大顧客流失機率。',
			'流程重設：該案例將客服拆成留存、詢問、加值三段節點，利於未來用代理模型做分流與優先權排序，減少每次都從零開始接手。',
			'制度觀測：若轉用於學校行政支援，建議先交由 AI Agent 先處理常見 FAQ 與初步分派，再把高複雜工單回傳人工，縮短首線等待。',
			'跨域借鏡：從「節點導向」角度看，客服不只售後，而是營收漏斗的一部分；教育、政府服務可用同樣邏輯把工單轉成可追蹤服務流程。',
		],
		quote: 'Companies lose revenue every time a customer is stuck in IVR, waits too long for help, gets blocked by a dumb chatbot, or receives a generic answer from an agent without the right context.',
		quote_attribution: 'Product Hunt, 2026-06-03',
		quote_source_url: 'https://www.producthunt.com/products/cignara',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品敘事將客服視為價值節點管理，而非成本抑制工具；若採用者只追求節省人力，可能忽略了流程設計才是差異化來源。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cignara',
					},
				],
			},
			{
				text: '對外部服務主管而言，該主張可補齊「投訴處理」與「商機回收」的斷裂空間，但目前仍缺乏公開效能指標，需用組織實測驗證是否真能降損失。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cignara',
					},
				],
			},
			{
				text: '在教育行政場景，這種代理化分流可先處理高頻問題、保留人力處理個別判斷，但若缺少上下文管理機制，仍可能重複把「效率」換成「同質化回覆」。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cignara',
					},
				],
			},
		],
		articles: [
			{
				title: 'Cignara',
				link: 'https://www.producthunt.com/products/cignara',
				domain: 'producthunt.com',
				date: '2026-06-03',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
];

const workMethodsStories: Story[] = [];

const aiEduStories: Story[] = [
	{
		id: '5ee62e0b-2216-54d6-8c98-aba2c9132ef0',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: 'AI自我增能加速：Anthropic與OpenAI同日警訊',
		short_summary: '2026-06-04，Anthropic 與 OpenAI 在同日都把焦點放在遞迴式自我改進。Anthropic 指出其自有系統已超過 80% 程式碼由 AI 生成；OpenAI 則預估未來 6 個月在數學與科學將再有突破，並將 AI 用於訓練 AI。這顯示 AI 已不只是會回答問題的工具，而是可能直接接管設計與決策流程，學校、企業與政府因此面臨較早到來的授權與治理壓力。',
		emoji: '🧠',
		did_you_know: 'Anthropic 指出其內部 AI 產品已有超過 80% 的程式碼來自 AI，已成為 RSI（遞迴式自我改進）在產線層面可量測的證據，並非只存在於未來願景。',
		talking_points: [
			'RSI 進入主流：Anthropic 將模型可設計並建造下一代模型定義為可實作路徑，顯示人類已逐步退出部份研發回路。',
			'關鍵數字：該文提到 Anthropic 產品超過 80% 的程式碼由 AI 生成，直接對應到開發作業快速被自動化。',
			'同日信號：Anthropic 強調 RSI 可能很快到來；OpenAI 也在同一天提到半年內數學與科學可能有新突破。',
			'影響面向：事件不再侷限於寫作或客服，而是涵蓋醫療、法律、物流、設計、戰爭、教育與陪伴等多領域。',
			'制度落差：作者指出多數人仍停在會提問的操作層次，這與 AI 可先行代辦決策的事實形成治理落差。',
		],
		quote: 'we’ll turn this on AI itself',
		quote_attribution: 'OpenAI, 2026-06-04',
		quote_source_url: 'https://stefanbauschard.substack.com/p/what-we-owe-each-other-when-the-machines',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: 'Anthropic 的訊息更偏警示：RSI 接近且不可逆擴張成為核心風險，提醒制度要先補足授權邊界與可追溯監控，而非只談速度。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://stefanbauschard.substack.com/p/what-we-owe-each-other-when-the-machines',
					},
				],
			},
			{
				text: 'OpenAI 的訊息則較偏工程動能：以「六個月後」作為進展節點，主張由 AI 自身驅動下一輪學術突破，風險治理討論被壓後置。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://stefanbauschard.substack.com/p/what-we-owe-each-other-when-the-machines',
					},
				],
			},
			{
				text: '跨觀點綜合看出張力：同一時間軸下，一方著眼防火牆，一方著眼加速器。對教育現場而言，是否先談授權框架將決定導入速度與安全。',
				sources: [
					{
						name: 'Substack 摘要',
						url: 'https://stefanbauschard.substack.com/p/what-we-owe-each-other-when-the-machines',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'Anthropic 公開說明 RSI 方向，並提及其系統超過 80% 程式碼由 AI 產生。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'OpenAI 團隊發言人在同日提出六個月內數學與科學可望有更多突破，並主張讓 AI 用來訓練 AI。',
			},
		],
		articles: [
			{
				title: 'What We Owe Each Other When the Machines (Soon) Build Themselves and Act on Our Behalf',
				link: 'https://stefanbauschard.substack.com/p/what-we-owe-each-other-when-the-machines',
				domain: 'stefanbauschard.substack.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: '58c2242c-a14f-5270-bdc0-06a2f92a1dae',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '平台導入、治理授權',
		title: '猶他州全 K-12 導入 Gemini for Education',
		short_summary: 'Google 與 Utah State Board of Education 宣布，從 2026-2027 學年起，猶他州全州 K-12 學校將可免費使用 Gemini for Education。此舉直接鎖定約 708,000 名學生與 28,000 名教師，並配套行政支援、教師培訓與職涯認證，目標是以州級方式降低導入落差，讓 AI 成為可控、可規劃的日常教學與管理基礎設施。',
		emoji: '🎓',
		did_you_know: '除核心工具外，文章同時要求提供 AI literacy 與數位公民素養訓練，並為 9-12 年級學生、教師與行政人員提供免費 Google Career Certificates，使用期限延伸到 2027 年 12 月。',
		talking_points: [
			'規模設計：合作覆蓋全州 K-12 學校，直接對齊 708,000 名學生與 28,000 名教師，避免僅以試點校做局部推廣。',
			'導入節奏：2026-2027 學年開始推進，並以州級 webinar 協助教師與學校同步對齊使用規格與管理方式。',
			'教師作業：Gemini 擬用於產生作業、評量規準與討論摘要，聚焦縮短教師行政與備課時間，補回可指導學生的教學時段。',
			'學習支援：Guided Learning 主打分步導引學習，輔助學生面對複雜概念與專題創作，強化理解而非只找快答案。',
			'職涯銜接：Google Career Certificates 與 AI 訓練免費提供到 2027 年底，聚焦資安與資料分析等就業導向技能。',
			'資料治理：文件重申內容與對話不拿來訓練模型，並由學校保有行政控制權，針對全州部署的隱私與責任邊界給出前提。',
		],
		quote: 'Starting in the 2026-2027 school year, this partnership will provide secure AI tools, training and Google Career Certificates to over 708,000 students and educators at no cost.',
		quote_attribution: 'Google Blog, 2026-06-04',
		quote_source_url: 'https://blog.google/products-and-platforms/products/education/utah-state-education-partnership/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '官方訊號偏向政策化導入：工具、培訓、認證一次打包，強調全州一致性，代表 AI 的核心不是單校實驗，而是制度化推廣。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/products-and-platforms/products/education/utah-state-education-partnership/',
					},
				],
			},
			{
				text: '教學與行政面向的張力在於成效衡量：文件明示可節省備課與行政作業，卻未直接量化學習品質提升，需要學校後續建立指標追蹤。',
				sources: [
					{
						name: 'Google for Education',
						url: 'https://blog.google/products-and-platforms/products/education/utah-state-education-partnership/',
					},
				],
			},
			{
				text: '資料治理角度是本案關鍵：內容與對話不訓練模型、學校仍掌控行政權，讓大規模導入在資安與責任歸屬上先行把關。',
				sources: [
					{
						name: 'Utah State Board of Education',
						url: 'https://blog.google/products-and-platforms/products/education/utah-state-education-partnership/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'Google 公布與 Utah State Board of Education 的合作，宣告提供 Gemini for Education 給全州 K-12 學校。',
			},
			{
				date: '2027-12-31',
				date_iso: '2027-12-31',
				content: '文章規定 Google Career Certificates 與 AI 培訓對 9-12 年級學生、教師與員工免費到 2027 年 12 月，形成到期性支持窗口。',
			},
		],
		articles: [
			{
				title: 'Utah State brings Gemini for Education to all K-12 schools',
				link: 'https://blog.google/products-and-platforms/products/education/utah-state-education-partnership/',
				domain: 'blog.google',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: '2f702662-7edf-5736-b72d-cf9e1e621a42',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '產業動態',
		title: 'PATH 打造 AI 產業人才管道：MIT 與 GSU 合作',
		short_summary: 'MIT 與喬治亞州立大學宣布擴大 PATH（Pathways for AI Training and Hiring）方案，將研究大學、社區學院、州內雇主與政府串成同一訓練鏈，按各州產業需求共同設計課程。計畫補足師資進修並提供可共享的模組教材，讓不同校院能快速複製與在地化。首波已於麻州與喬州推進，GSU 端已有逾 1,000 名學生修讀 PATH，代表 AI 人才培育正從零散教學轉向可量化的職涯入口模型。',
		emoji: '🏫',
		did_you_know: 'PATH 的作法不是大量純線上授課，而是強調實體協作學習，學生以真實企業題目進行團隊專案，並搭配溝通、判斷與倫理面向訓練。',
		talking_points: [
			'州級 HUB 佈局：PATH 以研究型大學與社區學院為核心，在各州建立樞紐，並邀請地方雇主共同參與課綱設計，以對應在地產業需求。',
			'重點對象擴大：課程同時面向初入職場者與在職工作者，目標不只補科目知識，而是提供可直接進入 AI 相關職位的職涯路徑。',
			'GSU 參與規模：喬治亞州的 PATH HUB 已有超過 1,000 名 GSU 學生參與，顯示社區學院路徑在招生與學習續航上有明顯接受度。',
			'實務導向課綱：PATH 課程涵蓋 AI 基礎、資料科學、深度學習與 agentic AI，並要求學生以團隊方式解決企業實際問題。',
			'資源共用機制：PATH 開放模組教材並提供教師進修，協助各機構降低重複開發成本，縮短跨校推廣時間並提升課程一致性。',
		],
		quote: 'In the era of AI, economic opportunity and mobility will increasingly depend on whether people can develop practical, industry-relevant AI skill sets and mindsets, not just familiarity with tools.',
		quote_attribution: 'MIT News，2026-06-04',
		quote_source_url: 'https://news.mit.edu/2026/mit-raise-georgia-state-university-announce-path-0604',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: 'MIT 的訊息重心在治理與鏈結：透過大學、社區學院、雇主與政府共編課程，將 AI 教育從單一校園課程轉成州級人力養成基礎建設。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/mit-raise-georgia-state-university-announce-path-0604',
					},
				],
			},
			{
				text: '喬州執行端則更看重成效痕跡，逾 1,000 名學生的參與量化了 PATH 不只停留在政策宣告，而是開始形成可追蹤的教育供給量。',
				sources: [
					{
						name: 'Georgia State University',
						url: 'https://news.mit.edu/2026/mit-raise-georgia-state-university-announce-path-0604',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'MIT 與喬治亞州立大學公布 PATH 擴展規劃，連動州際樞紐與產業需求，並延續早前在麻州、喬州啟動的 HUB 進展。',
			},
		],
		articles: [
			{
				title: 'PATH to boost AI training and career opportunities for industry-aligned jobs',
				link: 'https://news.mit.edu/2026/mit-raise-georgia-state-university-announce-path-0604',
				domain: 'news.mit.edu',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
		],
	},
	{
		id: '83ec2d67-2adf-5368-8d9e-2e254c82eb5a',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: 'AI進入法務創意與金融 工作核心重寫',
		short_summary: 'AI 已由研究試水溫轉為可實際承接專業作業，滲入法務、數學、藝術與金融分析。5/28 Anthropic 推出 Claude Opus 4.8，6/2 微軟在 Build 2026 發表 MAI 7 款模型，6/1 NVIDIA 在 GTC Taipei 公布 Nemotron 3 Ultra，顯示更新速度正加快。社會對資料中心耗電、用水與社區承載的關切同步上升，配合美國總統行政命令偏向創新與公共持股構想的政策分歧，學校端必須更快調整人機分工與課程治理邏輯。',
		emoji: '⚖️',
		did_you_know: 'Anthropic Opus 4.8 在 SWE-Bench Pro 得 69.2%，在 OSWorld-Verified 達 83.4%，並記錄 1890 的 GDPval-AA 表現，但文內同時提到在終端編碼任務仍由 GPT-5.5 占優。',
		talking_points: [
			'更新節奏：Anthropic 於 5/28 僅隔六週推出 Opus 4.8，SWE-Bench Pro 69.2%、OSWorld-Verified 83.4%，代表模型發佈正從年更退化到更短周期。',
			'專業入場：文本明確提到法務草擬、數學推演、藝術創作與金融分析都已可被模型接手，直接衝擊學校對「高階專業」能力的教學定位。',
			'平台戰略：6/2 微軟在 Build 2026 一次推出 MAI 七款模型，核心 MAI-Thinking-1 有 350 億參數，並延伸到影像、語音與 43 種語言轉寫，意圖建立更完整自有模型棧。',
			'開放賽局：6/1 NVIDIA 在 GTC Taipei 公布 Nemotron 3 Ultra（約 550B 參數）並採開放權重，AI Intelligence Index 標到 48，形成對手可直接比較的公開基準。',
			'政策拉扯：文章呈現美國總統行政命令重創新、弱預設監管；另有方案主張以一次性股票稅讓公眾持有 AI 大型企業 50% 股權，治理方向截然相反。',
		],
		quote: 'The monthly update regime of the rat race',
		quote_attribution: 'Substack, 2026-06-04',
		quote_source_url: 'https://stefanbauschard.substack.com/p/when-machines-can-do-the-work-the',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '科技與產業面強調競爭優先，Anthropic、微軟與 NVIDIA 的連續上新被視為關鍵訊號；若照此速度發展，課程設計需要預留 AI 版本更迭與工具更新的接軌機制。',
				sources: [
					{
						name: 'Substack 產業觀點',
						url: 'https://stefanbauschard.substack.com/p/when-machines-can-do-the-work-the',
					},
				],
			},
			{
				text: '社會與治理面則更在意落地成本，文章凸顯公眾已把討論重心轉向資料中心耗電、用水與社區承載，這讓學校若推廣 AI，不只是挑工具，而是要同步處理在地治理可行性。',
				sources: [
					{
						name: 'Substack 社會監理觀點',
						url: 'https://stefanbauschard.substack.com/p/when-machines-can-do-the-work-the',
					},
				],
			},
			{
				text: '政策框架產生分流：一端是總統行政命令偏向創新優先，另一端是強調公共持股與權益回饋的主張，兩者都會影響學校在 AI 相關課程與人才規劃上的長期約束條件。',
				sources: [
					{
						name: 'Substack 政策對照',
						url: 'https://stefanbauschard.substack.com/p/when-machines-can-do-the-work-the',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: 'Anthropic 發佈 Claude Opus 4.8，較 4.7 再次升級。',
			},
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: 'NVIDIA 在 GTC Taipei 宣佈 Nemotron 3 Ultra，主打約 550B 參數開放權重。',
			},
			{
				date: '2026-06-02',
				date_iso: '2026-06-02',
				content: '微軟在 Build 2026 釋出 MAI 7 款模型，含 MAI-Thinking-1 與多模態能力。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'Substack 文章發布「The Professions Push Back」更新，整合上述模型發展與政策張力。',
			},
		],
		articles: [
			{
				title: 'When Machines Can Do the Work: The Professions Push Back (June 4 Podcast Update)',
				link: 'https://stefanbauschard.substack.com/p/when-machines-can-do-the-work-the',
				domain: 'stefanbauschard.substack.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: '3f74f5c7-3cd7-5de8-88a5-f66029416a8d',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '從聊天機器人到代理式 AI：學習不能被自動化替代',
		short_summary: '2026 年 6 月 arXiv 公布《Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning》一文，屬工作論文型文獻整合，未披露樣本與量化實證設計。文章指出 AI 在教育場景正從被動聊天工具轉為可主動啟動任務的代理式互動，並以先備知識、合作學習、問題導向、形成性評量、鷹架與後設認知六項教學原則做概念映射。結論聚焦：若缺少有意摩擦與教師監督，個人化與效率優勢仍可能侵蝕學習者主動思考。',
		emoji: '🤖',
		did_you_know: '摘要指出研究將六項教學原則對應到代理式 AI，但未揭露樣本數、追蹤期間、效果量或信賴區間，主要提供方法論與設計框架，而非可直接換算的成效數據。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：採用工作論文＋文獻整合方式，焦點放在「六項教學原則」與代理式 AI 的概念對位，非 RCT 或長期追蹤設計。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間、效果量或主要量化結果，因此無法提供可比效果；僅有 2026-06-03 投稿與理論脈絡資訊可核對。',
			'核心轉向：摘要明確提出 AI 從被動對答的聊天機器人，向可主動發起目標導向互動的代理式模式轉型，延伸個別化教學可能性。',
			'張力提醒：文中強調自動化若過度擴張，會壓縮學習者主體性與認知負荷管理，造成「效率上升但深度下降」的學習風險。',
			'治理建議：作者建議保留有意摩擦、動態支架、human-in-the-loop 監督與節制導向使用，讓 AI 作為支持工具而非替代學習判斷者。',
		],
		quote: 'We discuss the tension between automation and learning, proposing design recommendations that prioritise intentional friction, dynamic scaffolding, human-in-the-loop oversight, and considered AI utilisation to ensure AI supports rather than supplants human learning.',
		quote_attribution: 'arXiv，2026-06-03',
		quote_source_url: 'https://arxiv.org/abs/2606.04543',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '該論文把代理式 AI 視為提高個別化效率的關鍵動能，但同時把重點放在學習者主體性與認知努力，反映自動化與教學品質之間的張力。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.04543',
					},
				],
			},
			{
				text: '目前仍屬原則層整合，尚未提供跨學段或跨情境的實證對照，對政策與校務導入者而言是一份設計訊號，亦是一個延伸研究缺口。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.04543',
					},
				],
			},
		],
		articles: [
			{
				title: 'Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning',
				link: 'https://arxiv.org/abs/2606.04543',
				domain: 'arxiv.org',
				date: '2026-06-03',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: '1a18b585-eae1-5dbb-aec5-d1f383842a04',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '五月新增 12 則 Gemini 教學素材',
		short_summary: 'Control Alt Achieve 於 2026-06-04 發布「12 New EduGems from May 2026」，整理出 12 個可直接複製的 Gemini 教學提示素材，內容涵蓋職涯情境、CRA 數學活動、LETRS 四天 ELA 課程、寫作延展、評量成功準則等。文章同時揭示 edugems.ai 目前累積 145 件 Gems，且每月持續新增，代表這不是零散靈感分享，而是可反覆擷取、跨學科使用的教材資源化趨勢。對教師來說，重點在於快速把課前設計時間縮短為可重複複製的流程。',
		emoji: '🧩',
		did_you_know: 'edugems.ai 目前已累積 145 個 Gems，而五月份又新增 12 件。作者將每則列為可複製素材，顯示這個站的核心是按月維持可落地的教學提示資產庫。',
		talking_points: [
			'月更資源脈絡：文章明確標示為「May 2026」更新，並列出 12 個新 Gem，顯示資源供應採每月節奏而非一次性內容輸出。',
			'可複製資產化：每則介紹的 Gem 都可直接取用與複製，對忙碌教師有助於縮短單元備課時間，尤其可快速產生活動任務與素材。',
			'題材不只活動：清單同時含職涯提問、數學情境、表單與班級封面、聽覺與文字學習支援，能支撐課前準備到學習流程的多個環節。',
			'流程轉向課程設計：像 LETRS 四天 ELA 課程、Single Point Success Criteria、Sorting Activity 等，直接可對應進入教學設計與評量設定。',
			'明天可試用路徑：教師可先用 Google Classroom Header、Google Forms Header 快速建立教學入口，搭配 Study Coach Gem Creator 做閱讀單元導讀任務。',
		],
		quote: 'Each month I add new Gems to the site.',
		quote_attribution: 'Control Alt Achieve, 2026-06-04',
		quote_source_url: 'https://www.controlaltachieve.com/2026/06/gems-2026-05.html',
		quote_source_domain: 'controlaltachieve.com',
		perspectives: [
			{
				text: '從工具供應者觀點，內容重點不在於單次創新，而是建立「可反覆複製」的備課模板庫，讓教師在有限時間內先取得可用版本，再依班級情境微調。',
				sources: [
					{
						name: 'Control Alt Achieve',
						url: 'https://www.controlaltachieve.com/2026/06/gems-2026-05.html',
					},
				],
			},
			{
				text: '從教師端觀點，這類素材庫能降低教案啟動成本，但若直接照搬會降低課程在地化品質，關鍵仍在是否做過學習目標對齊與評量驗證。',
				sources: [
					{
						name: 'Control Alt Achieve',
						url: 'https://www.controlaltachieve.com/2026/06/gems-2026-05.html',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'Control Alt Achieve 發布「12 New EduGems from May 2026」，列出 12 項新的 Gemini Gem 教學素材。',
			},
		],
		articles: [
			{
				title: '12 New EduGems from May 2026',
				link: 'https://www.controlaltachieve.com/2026/06/gems-2026-05.html',
				domain: 'controlaltachieve.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'controlaltachieve.com' },
		],
	},
	{
		id: '6f07b542-b57a-50b0-b68f-28bd673e8931',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '英語學習者教師可直接試用的免費 AI 資源庫',
		short_summary: '2026 年 6 月 2 日，該文整理出「My AI Toolkit: Studio」，把提供給英語學習者（ELL）教師的多個免費生成式 AI 小工具集中在同一入口，並補上「AI Tools For ELT」延伸清單作為延伸資源。文章同時將其列入「使用 AI 與 ELL 的最佳文章」清單，意義在於讓教師可先從可複製的工具起手點做導入，降低課前準備的搜集成本與啟用門檻。',
		emoji: '🧰',
		did_you_know: '原文沒有單一新工具宣傳，而是將既有資源做整併：既有免費工具集中成「My AI Toolkit: Studio」，又保留「AI Tools For ELT」作為同系統的補充入口，重點在於工具取用順序與可持續更新。',
		talking_points: [
			'重複熱點：My AI Toolkit: Studio 將多個免費教學工具放在同一頁面，ELL 相關課程可先在這裡確認可用工具，直接縮短找工具與試作流程。',
			'跨入口串接：文章再連到 AI Tools For ELT，教師可先用 Studio 做第一輪篩選，再以 ELT 清單補充用途，兩個入口適合做每日備課對照。',
			'內容持續化：作者提到可搭配其既有的 ELL AI 相關貼文一起閱讀，顯示這不是一次性清單，而是跨貼文累積的實務知識鏈。',
			'新出現做法：故事主軸從「選工具」轉為「先建工具庫」，把導入流程前置化，讓教師先有可複製的起點再逐步做課程設計。',
			'可直接試作：文中資訊適合明天直接落地，建議先挑 1～2 個工具做試教；若可行再逐步擴張，整體以免費資源為主可先降低試行成本。',
		],
		quote: 'She has brought a few of her best free AI tools for teachers together in one place, called My AI Toolkit: Studio.',
		quote_attribution: 'edublogs 教育部落格, 2026-06-02',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/06/02/my-ai-toolkit-studio-is-an-exceptional-resource-for-ell-teachers/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '個人教學者視角偏重快速可用性：透過免費工具清單先降低入門摩擦，讓缺少技術資源的教師也能立刻開始嘗試；但缺少情境對照，成效仍需各校自我驗證。',
				sources: [
					{
						name: 'edublogs 教育部落格',
						url: 'https://larryferlazzo.edublogs.org/2026/06/02/my-ai-toolkit-studio-is-an-exceptional-resource-for-ell-teachers/',
					},
				],
			},
			{
				text: '同題材的校方或平台型文章常先談採購與系統整合，但此文的重心在「教師可複製資源庫」，更像推動微型工作流的起步模型，適合先做試點後再連動制度。',
				sources: [
					{
						name: 'edublogs 教育部落格',
						url: 'https://larryferlazzo.edublogs.org/2026/06/02/my-ai-toolkit-studio-is-an-exceptional-resource-for-ell-teachers/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-02',
				date_iso: '2026-06-02',
				content: '文章發表並導入 My AI Toolkit: Studio，將可免費使用的 ELL 教學 AI 小工具集中列出，同時補充 AI Tools For ELT 入口。',
			},
		],
		articles: [
			{
				title: '“My AI Toolkit: Studio” Is An Exceptional Resource For ELL Teachers',
				link: 'https://larryferlazzo.edublogs.org/2026/06/02/my-ai-toolkit-studio-is-an-exceptional-resource-for-ell-teachers/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: '5c2aab8c-fc15-5e12-a3f1-8963ea706b30',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '播客聚焦：教師可複製的 AI 教學三步法',
		short_summary: '2026-06-02，SupportAlt Achieve 發表《Podcast Spotlight》專訪，聚焦學校在生成式 AI 時代的教學與回饋作法。節目列出學校最常見的 AI 誤區、學生必備工具觀念、Guided Grading 流程與 Wrestle／Wrap／Reflect 架構，並同步提供 EduGems 等可直接導入素材。這則訊號的重要性在於把政策討論與可行工具集中在同一支 40 分鐘內容，減少教師查找成本。',
		emoji: '🎙️',
		did_you_know: '文中不只放對談摘要，還公開 12 分鐘與 1 小時兩段補充影片、EdgGems 提示庫與 AI 回饋資源連結，教師可直接做下週試做素材，落地時間壓縮很多。',
		talking_points: [
			'精華主軸：這篇 2026-06-02 的 40 分鐘播客，將學校對 AI 的對錯、三項學生必備工具與教學框架放在同一篇專訪裡，資訊壓縮度高。',
			'可直接取用資源：文內提供 EduGems 提示庫（edugems.ai）與 Gemini Gems 文件（bit.ly/curts-gems）連結，另附 12 分鐘與 1 小時影片，能快速轉成教師備課流程。',
			'評量工作流：提出「Guided Grading with AI（AI 輔助回饋）」做法，目標是讓作業批改有一致節奏，縮短教師逐件回饋的認知負荷。',
			'教學框架：節目用 Wrestle、Wrap、Reflect 建立「先挑戰、再整理、最後反思」流程，教師可直接改寫為討論課或專題課的課堂骨架。',
			'再使用性設計：同時上架 Spotify、Apple Podcasts 與 YouTube 並搭配資源短連結（如 bit.ly/curts-aigrading），支持教師以 40 分鐘切片方式反覆複盤。',
		],
		quote: 'On a mission to speak with global education experts on how we can revolutionize the education system, especially in the dawn of AI.',
		quote_attribution: 'SupportEd Learning, 2026-06-02',
		quote_source_url: 'https://www.controlaltachieve.com/2026/06/supported-learning.html',
		quote_source_domain: 'controlaltachieve.com',
		perspectives: [
			{
				text: '第一個角度是對話導向敘事，專注把教育專家觀點快速輸出給第一線教師，適合快速喚起學校改革議題，但缺少台灣情境中的比較資料。',
				sources: [
					{
						name: 'Control Alt Achieve',
						url: 'https://www.controlaltachieve.com/2026/06/supported-learning.html',
					},
				],
			},
			{
				text: '第二個角度偏流程導入，將工具、評量、框架與連結整合，利於教師直接落地，但若未加校內試行機制，仍可能變成看起來完整卻難長期維持的教學模式。',
				sources: [
					{
						name: 'SupportEd Learning',
						url: 'https://www.controlaltachieve.com/2026/06/supported-learning.html',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-02',
				date_iso: '2026-06-02',
				content: 'Control Alt Achieve 發布《Podcast Spotlight》專訪，聚焦 SupportEd Learning 的 AI 教學資源與工具流程，並提供 40 分鐘節目內容與補充連結。',
			},
		],
		articles: [
			{
				title: 'Podcast Spotlight - SupportED Learning',
				link: 'https://www.controlaltachieve.com/2026/06/supported-learning.html',
				domain: 'controlaltachieve.com',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'controlaltachieve.com' },
		],
	},
];

const educationResearchStories: Story[] = [
	{
		id: 'ec28bd9c-ace2-5893-82d6-eb8f81200db9',
		cluster_number: 6,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '中國大學加分政策：AA劑量變動影響入學與長期成效',
		short_summary: '這篇 NBER 工作論文以中國中央式大學入學分發制度為場景，分析少數族群可得加分 AA 在不同劑量下的效果。研究利用各考季入學考分數分佈波動形成的準自然實驗，將 CEE 成績資料接到入學後 10–23 年的消費紀錄，追蹤學術與人生軌跡。結果顯示 AA 劑量提高可提升錄取機會，但未必同步改善學術排名、主修品質與滿意度，且文中未公開樣本數。',
		emoji: '⚖️',
		did_you_know: '研究顯示 AA 劑量效應並非線性：低劑量與高劑量在長期消費上的方向分別為 +19% 與 −25%。注意：本研究為觀察性研究，不宜直接推論因果',
		talking_points: [
			'證據類型：觀察性研究＋準自然實驗，透過中國各考季入學考分數分佈波動形成的 AA 劑量差，觀察政策強度變化對學生結果的影響。',
			'數據佐證：摘要未揭露樣本數；但有將 CEE 成績與 10–23 年後卡片消費資料連結的長追蹤。主要量化結果是低 AA 劑量長期消費上升 19%，高劑量下降 25%。',
			'政策張力：AA 劑量提高可增加進入一般及精英大學機率，但同時可能拉低學術排名、使學生轉向較低報酬科系，顯示機會擴大與績效成長不必然同步。',
			'老師下一步可以怎麼做：在生涯輔導或學習補救設計中，先做學歷底盤與家庭支持分層，不要只看錄取率；對高風險學生同步加入學術鞏固與主修探索活動。',
			'老師下一步可以怎麼做：建立可追蹤學習歷程表，納入「課程進度、作業回饋、主修選修決策、滿意度回報」，讓政策補助不成為單一成效指標。',
		],
		quote: 'higher AA doses increase recipients\' admissions to colleges and elite colleges, but lower their academic rankings, shift them toward lower-earning majors, and reduce their satisfaction with college life.',
		quote_attribution: 'NBER, 2026-06-05',
		quote_source_url: 'https://www.nber.org/papers/w35281#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究將 AA 從「開關型」政策改寫為「劑量型」，主張同一補償機制要在不同強度下分別監測，而非只問有沒有政策可行。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35281#fromrss',
					},
				],
			},
			{
				text: '但目前僅為單篇研究且未披露樣本量與完整置信區間，對台灣制度能否外推仍有缺口，需先行對照本地資料再做政策化決策。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35281#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-05',
				date_iso: '2026-06-05',
				content: 'NBER 發表《College Affirmative Action and Students\' Outcomes: A Matter of the Dose》工作論文，分析中國高教入學加分政策的劑量效應。',
			},
		],
		articles: [
			{
				title: 'College Affirmative Action and Students\' Outcomes: A Matter of the Dose',
				link: 'https://www.nber.org/papers/w35281#fromrss',
				domain: 'nber.org',
				date: '2026-06-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'f66b8a0e-d6e6-5750-90e0-1e338faccdf0',
		cluster_number: 7,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '退伍軍人家庭中女性就業與政治動員關聯',
		short_summary: 'NBER 的這篇美國歷史研究採用工作論文設計，將聯邦陸軍入伍與退伍紀錄與 1860、1870 年人口普查連結，追蹤傷殘退伍軍人家庭中妻子與女兒的勞動參與，並比對 1873-74 年 Temperance Crusade 行動資料。摘要顯示，受家庭負擔壓力的女性進入勞動市場，較高機率與地方抗議活動同時升溫，且報紙資訊與鄰近城鎮傳播可放大這種動員效應。研究採工具變量策略提升因果詮釋力，但樣本總數、CI 與完整效果量未於摘要公開。對台灣政策與教學研判，這代表「經濟參與」可成為弱勢群體政治能見度的條件，但需與制度與社區資源共同討論。',
		emoji: '📚',
		did_you_know: '研究以退伍軍人家庭為切入，將傷殘率、女性勞動參與與 1873-74 年禁酒抗爭連動檢驗，指出社會壓力與社區訊息可放大行動。注意：本研究為觀察性工作論文，工具變量分析不宜直接推論因果。',
		talking_points: [
			'證據類型：歷史觀察設計搭配工具變量（IV）架構，核心是用退伍軍人傷殘狀態作為外生衝擊，推估女性勞動參與對政治動員的影響。',
			'數據佐證：公開摘要未揭露樣本數、追蹤樣本規模與效果量；可確認的是 1860、1870 年普查結合 1873-74 年行動紀錄構成主要觀測序列。',
			'核心發現：在傷殘退伍軍人家庭中，妻女進入勞動市場的機率上升，且與 Temperance Crusade 的城鎮抗議動能具有同步趨勢。',
			'老師下一步：課堂可做「家庭資料＋社區行動」學習鏈結，先交付學生比較 1860 與 1870 的家庭勞動變化，再討論政治參與的轉換路徑。',
			'老師下一步：設計反事實討論：同時要求學生列出「有同樣負擔但未上工」的城鎮或家庭，當作替代解釋，避免將關聯直接誤讀為單一路徑因果。',
			'老師下一步：教學觀察指標可聚焦三項：學生是否能說明工具變量邏輯、是否能辨識共同變項（報紙訊息、社區網絡）、是否能提出可驗證反例。',
			'實施提醒：教案可加入「資料空白管理」步驟，明確標示哪些數字在原始摘要未揭露，訓練學生在研究判讀時先報告證據缺口。',
		],
		quote: 'Our results suggest that labor force participation can be an important enabling factor for the political mobilization of underrepresented groups.',
		quote_attribution: 'NBER, 2026-06-05',
		quote_source_url: 'https://www.nber.org/papers/w35287#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '本研究提示「經濟參與」是政治動員的開關，但不宜解讀為唯一原因；社區資訊流與城鎮鄰近效應在模型裡具有放大作用，對教學可轉為條件式機制。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35287#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口在於缺少可直接比對的台灣情境樣本：歷史時段、社會福利與媒體生態不同，政策含義只能作為機制參考，不能直接外推。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35287#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '1860-01-01',
				date_iso: '1860-01-01',
				content: '研究以 1860 年人口普查作為戰前參考點，建立退伍軍人家庭勞動與家庭背景基準。',
			},
			{
				date: '1870-01-01',
				date_iso: '1870-01-01',
				content: '配對 1870 年人口普查追蹤妻子、女兒是否有較高機率加入勞動市場。',
			},
			{
				date: '1873-01-01',
				date_iso: '1874-01-01',
				content: '聚焦 1873-74 年 Temperance Crusade 城鎮活動強度，檢驗女性勞動參與與政治動員是否同向變化。',
			},
		],
		articles: [
			{
				title: 'The U.S. Civil War\'s Impact on Women\'s Work and Political Participation',
				link: 'https://www.nber.org/papers/w35287#fromrss',
				domain: 'nber.org',
				date: '2026-06-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'a4d773f1-563a-5963-b0b7-41b19930d223',
		cluster_number: 8,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: 'AI 基礎設施安全能否用形式驗證？RAND 提醒治理順序',
		short_summary: 'RAND 在 2026 年初以 23 位跨域專家問卷與訪談，檢驗形式化驗證（formal methods）是否能降低前沿 AI 基礎設施風險。研究聚焦 AI 訓練與推論堆疊中可被證明行為的元件、可保證的安全性質、導入阻礙與 AI 輔助驗證未來轉向，並提出面向前沿實驗室、硬體供應鏈與政府的治理藍圖。研究未提供縣市或單一國家樣本成效、也未做因果性干預試驗，對台灣學校與教育行政更像是風險治理的優先順序參考，而非直接可套用的成效結論。',
		emoji: '🛡️',
		did_you_know: '研究揭示前沿 AI 不只受外部駭客威脅，還可能因模型行為缺陷繞過既有監控而自我外洩。報告發表於 RAND 於 2026-06-04，摘要未提供效果量或追蹤成效資料；注意：本研究為專家問卷研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：本研究為專家問卷與訪談取樣，23 位來自形式方法、AI、資安、軟體工程與硬體架構領域人士參與，重點在共識與可行性評估，不是 RCT 或長期追蹤。',
			'數據佐證：摘要只揭露樣本數（23 位）與研究方法框架，未提供效果量、信賴區間、追蹤期間，亦無公開「減少外洩或中斷」的量化變化。',
			'研究核心：報告主張把 AI 風險管理從單一防護工具，轉為訓練與推論堆疊的可驗證行為設計，先定義哪些元件可形式化驗證、可鎖住哪類安全性質。',
			'教師可做：AI 導入前先做「模型資產、權限、更新流程」清冊，將報告建議的安全邊界化為校內檢核項目，避免只在事故後補救。',
			'行政可做：每次模型或服務版本更新後紀錄變更、異常事件、監控規則通過率，將資安與教學科技小組共用同一份追蹤看板，方便跨學期比較。',
			'成效觀察：先以週期性稽核替代一次性驗收，建立「風險事件下降、權限越權次數、未授權模型外流警示」三指標，即使缺少因果證據也能追蹤治理成熟度。',
		],
		quote: 'The rapid advancement of frontier artificial intelligence systems has created an urgent need to secure the infrastructure on which these systems run.',
		quote_attribution: 'RAND, 2026-06-04',
		quote_source_url: 'https://www.rand.org/pubs/research_reports/RRA4881-1.html',
		quote_source_domain: 'rand.org',
		perspectives: [
			{
				text: '該研究將重點放在「基礎設施可驗證性」而非單一模型性能，等於把 AI 安全升級為工程治理與制度設計問題，特別適合前沿實驗室與採購端先行盤點。',
				sources: [
					{
						name: 'RAND',
						url: 'https://www.rand.org/pubs/research_reports/RRA4881-1.html',
					},
				],
			},
			{
				text: '延伸研究缺口：目前僅有專家意見路徑，未能直接回答台灣校務環境實施後是否降低維運風險，需更多跨學校試點與政策情境資料做外部驗證。',
				sources: [
					{
						name: 'RAND',
						url: 'https://www.rand.org/pubs/research_reports/RRA4881-1.html',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: 'RAND 發布《Verified Machine Learning Infrastructure》，提出以形式化驗證建構前沿 AI 基礎設施信任架構。',
			},
		],
		articles: [
			{
				title: 'Verified Machine Learning Infrastructure',
				link: 'https://www.rand.org/pubs/research_reports/RRA4881-1.html',
				domain: 'rand.org',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'rand.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'c18221f6-402a-50cf-b109-444f2f746017',
		cluster_number: 3,
		unique_domains: 2,
		number_of_titles: 2,
		category: '教育政策與治理',
		editorial_lens: '組織運作',
		title: '全國中高學段「看見花蓮」公益繪畫比賽開放徵件',
		short_summary: '熱愛生命文教基金會辦理的「2026看見洄瀾公益繪畫比賽」由台北市教育局同步轉知，活動向全國公私立國中小及高中職學生徵件，並載明自2026-04-20至2026-08-31接受作品。對台灣教師與校務行政而言，這類跨縣市公益比賽可直接納入校內美術與生命教育安排，但重點在於提前掌握徵件規則、聯絡窗口與時程，避免活動到臨近結束才匆忙補件。',
		emoji: '🎨',
		did_you_know: '主辦方公告可參考 DM 與甄選要點，並提供看見洄瀾專案小組電話 04-2253-2626，學校可憑此確認題材、時間與繳件規格細節，協調課務時程。',
		talking_points: [
			'雙學段設計：比賽對象列明全國公私立國中小及高中職學生，並非單一學段案例，適合做跨年級美術活動共學。',
			'四個月徵件窗：自4月20日到8月31日為明確窗口，約4個月時間，學校需提早安排課後社團與作品提報節點。',
			'花蓮主題導向：作品須以花蓮為核心並串連公益與文化創意，給學校提供地方文化教材化與跨科整合的素材。',
			'文件公開完整：公告搭配 DM、甄選要點與官方網站連結，對校方管理家長溝通與行政稽核很有助益。',
			'直接窗口為主：教育局屬轉知角色，最終規範與疑義確認仍以基金會專案小組為準，電話可直接對接降低訊息落差。',
		],
		quote: '全國公私立國民中小學及高中職學生，於115年4月20日至115年8月31日徵件，並將其作品結合社會公益及文化創意。',
		quote_attribution: '熱愛生命文教基金會, 2026-06-04',
		quote_source_url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1635505',
		quote_source_domain: 'tyc.edu.tw',
		perspectives: [
			{
				text: '主辦方公告突顯公益議題導向，將藝術創作與地方文化學習綁在同一軸線，對校方來說可作為美術課補充教材的可參考案例。',
				sources: [
					{
						name: 'tyc.edu.tw',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1635505',
					},
				],
			},
			{
				text: '台北市教局版本偏向轉知與導流，沒有新增補助或新規定，顯示其角色是促進訊息可及、維持公告可追溯，實務判準仍在主辦單位。',
				sources: [
					{
						name: 'doe.gov.taipei',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=419C2B76DD398B42',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-20',
				date_iso: '2026-04-20',
				content: '比賽公告規定的徵件開始日：開始接受全國國中小與高中職學生作品。',
			},
			{
				date: '2026-06-03',
				date_iso: '2026-06-03',
				content: '台北市教育局發布轉知，導流到熱愛生命文教基金會關於看見洄瀾公益繪畫比賽的官方訊息。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: '熱愛生命文教基金會於官網發布正式比賽介紹與聯繫資訊。',
			},
			{
				date: '2026-08-31',
				date_iso: '2026-08-31',
				content: '比賽徵件截止日，作品提交與審核流程進入收件收攤時段。',
			},
		],
		articles: [
			{
				title: '【轉知】財團法人熱愛生命文教基金會辦理看見洄瀾 2026公益繪畫比賽',
				link: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1635505',
				domain: 'tyc.edu.tw',
				date: '2026-06-04',
			},
			{
				title: '轉知 財團法人熱愛生命文教基金會「2026年看見洄瀾公益繪畫比賽」資訊',
				link: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=419C2B76DD398B42',
				domain: 'doe.gov.taipei',
				date: '2026-06-03',
			},
		],
		domains: [
			{ name: 'tyc.edu.tw' },
			{ name: 'doe.gov.taipei' },
		],
	},
	{
		id: '087ea0ef-3b23-5de3-81b1-309389246767',
		cluster_number: 4,
		unique_domains: 2,
		number_of_titles: 2,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '臺東原民語人力同步認證與甄選',
		short_summary: '臺東縣近來在國民中小學母語政策上同步推兩件事：依5/29函文啟辦114學年度閩南語、客語及原住民族語教學支援工作人員認證，研習期間訂在7/1到7/5；另公布115學年度專職原住民族語教師甄選並列出布農語名額。對台灣學校行政來說，重點不是新聞事件本身，而是「可上課的人」與「有資格的人」要同時到位，這決定了下一學期課程是否斷檔。',
		emoji: '🧭',
		did_you_know: '甄選公告要求6/5在臺東市更生北路726號南王國民小學受理，分9:00–12:00與14:00–16:00兩段；同時對布農語名額保留「備取」機制，顯示人力缺口管理採彈性銜接。',
		talking_points: [
			'先後順序：一先一後：先有7/1–7/5五天認證，再辦115學年度專職教師甄選，讓學校能同時規劃人力到位與資格門檻。',
			'明確名額：甄選公告載明布農族郡群布農語1名，並保留「視需要另備取若干名」，對特定語別缺工有即時接續空間。',
			'時間透明：6/5甄選受理指定上午9–12點及下午14–16點，地點也明列南王國民小學，行政流程可直接對齊學校端行程安排。',
			'治理邏輯：認證針對閩南語、客語及原住民語文教學支援人員，重點在提升執行能力；甄試則補齊正式授課職位，兩者缺一不可。',
			'學年度交接：文件分別落在114與115學年度，表示語言教育政策在地方實務上常以「能力建置先行、正式補編後續」方式推進。',
		],
		quote: '研習時間：115年7月1日（星期三）至7月5日（星期日），計5天。',
		quote_attribution: '臺北市政府教育局，2026-06-02',
		quote_source_url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=E8E9041438879957',
		quote_source_domain: 'doe.gov.taipei',
		perspectives: [
			{
				text: '臺東縣教育網版本偏重即時補足缺口，先針對專職教師甄選公告名額與時間，核心是讓班級有可上課人力，行政衝擊低但也要持續追蹤到課品質。',
				sources: [
					{
						name: '臺東縣教育局',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1635254',
					},
				],
			},
			{
				text: '臺北市府教育局版本偏重能力入口，先用研習認證建置支援體系，重點是把閩南語、客語與原住民語教學的最低能力門檻先定清楚，再談到位後的正式運作。',
				sources: [
					{
						name: '臺北市政府教育局',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=E8E9041438879957',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: '臺東縣原住民族語老師甄委會第1次會議紀錄形成甄選依據，作為後續專職教師公告前的準備。',
			},
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: '依府教課字第1150118624號函文，啟動114學年度本土教育推動方案中的教學支援工作人員認證研習。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: '臺東縣發布115學年度專職原住民族語教師甄選簡章，公告甄選族別、名額與辦理方式。',
			},
			{
				date: '2026-06-05',
				date_iso: '2026-06-05',
				content: '甄選受理與甄試流程在臺東市更生北路726號南王國民小學辦理。',
			},
			{
				date: '2026-07-01',
				date_iso: '2026-07-01',
				content: '啟動為期五日的教學支援工作人員認證研習。',
			},
			{
				date: '2026-07-05',
				date_iso: '2026-07-05',
				content: '教學支援工作人員認證研習結束。',
			},
		],
		articles: [
			{
				title: '轉知臺東縣政府115學年度國民中小學專職原住民族語老師聯合甄選簡章',
				link: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1635254',
				domain: 'tyc.edu.tw',
				date: '2026-06-04',
			},
			{
				title: '【轉知】臺東縣政府辦理114學年度國民中小學本土教育整體推動方案—「國民中小學閩南語、客語及原住民語文教學支援工作人員培訓認證」',
				link: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=E8E9041438879957',
				domain: 'doe.gov.taipei',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'tyc.edu.tw' },
			{ name: 'doe.gov.taipei' },
		],
	},
	{
		id: '10a89d7d-7749-52a3-8bf6-ae3b7e18ffa0',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: 'OELA關停後誰來接英語學習責任',
		short_summary: '美國參議院最新質詢教育部，要求說明《英語學習與習得辦公室》（OELA）關閉後，超過五百萬名英語學習者與移民學生的服務責任怎麼銜接。OELA原本是對應語言學習資源與多語支持的專責窗口，雖由教育部改由多單位接手，但法定線是否仍清楚仍待釋明。對台灣而言，校本端在做語言扶助與學生服務整併時，也要先釐清「誰負責、誰給預算、誰考核」，否則最先受影響的是基層學校與弱勢學生。',
		emoji: '🧭',
		did_you_know: 'OELA在 FY2026 管理的 Title III 資金約 8.9 億美元，原由該辦公室支援專業發展與學習資源；重組後這些管道被分散到其他單位。',
		talking_points: [
			'法規扣問點：參議院援引1979年《部會組織法》、ESEA Title III-A與Title VI，主張教育部即使改組仍須保有英語學習者服務責任。',
			'影響人數：原信稱全美逾500萬英語學習與移民學生受牽動，任一窗口更換若未公布承接機制，服務斷點最先出現在學校現場。',
			'時間節點：教育部在2/13函文說明擬將OELA職能轉移，距今到6/4參議院追問前，外界仍不清楚轉換實際落地成效。',
			'職能分流：Title III-A formula grant改到State Support與Accountability部門，原住民及專業發展相關方案也改由不同單位承接。',
			'台灣可借鏡：任何跨學段或跨據點整併，先做「職能對照表」與移轉SOP，並以跨機關績效指標追蹤，不然補助與申訴都會失焦。',
			'預算與風險：FY2026約8.9億美元補助額成為關鍵試金石，若未明示新負責單位與審核流程，難證明資源仍能對準學習者。',
		],
		quote: 'The decision "will have devastating and lasting consequences for the education of more than five million English learner students nationwide."',
		quote_attribution: 'K12Dive, 2026-06-04',
		quote_source_url: 'https://www.k12dive.com/news/senators-demand-answers-over-closed-office-of-english-language-acquisition/821943/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '參議院視角偏向問責：以法律義務為核心，認為移除專責機構後若沒有明確銜接設計，學區與州在英語學習與反歧視服務上將缺少可追究窗口。',
				sources: [
					{
						name: 'K12Dive（美國參議院來函轉述）',
						url: 'https://www.k12dive.com/news/senators-demand-answers-over-closed-office-of-english-language-acquisition/821943/',
					},
				],
			},
			{
				text: '教育部立場偏行政效率：主張搬到OESE有助整併與對齊，但在重組文件中對跨單位監督責任、預算承接流程與服務持續性仍未給出細節。',
				sources: [
					{
						name: '美國教育部',
						url: 'https://www.k12dive.com/news/senators-demand-answers-over-closed-office-of-english-language-acquisition/821943/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-02-13',
				date_iso: '2026-02-13',
				content: '美國教育部對國會說明，擬將OELA職能移轉到OESE及其他單位，理由為內部專案對齊與行政效率。',
			},
			{
				date: '2026-06-04',
				date_iso: '2026-06-04',
				content: '美國參議院向教育部長聯名發函追問，要求就OELA關閉後對英語學習學生服務的責任與影響提出說明。',
			},
		],
		articles: [
			{
				title: 'Senators demand answers over closed Office of English Language Acquisition',
				link: 'https://www.k12dive.com/news/senators-demand-answers-over-closed-office-of-english-language-acquisition/821943/',
				domain: 'k12dive.com',
				date: '2026-06-04',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'e212b646-4060-5673-9cbe-20aeb7cd8749',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '研究證據',
		title: '31州慢性缺席降到23%仍有1成學生常缺課',
		short_summary: '對台灣學校管理者而言，重點不只在「缺席率有降」，而是能否持續追到真正影響教學連續性的學生。美國31州資料顯示，慢性缺席（缺席或停學達10%以上）在2024-25仍約1成學生受累；「極端」缺席校占比從2021-22的41%降到23%，但仍高於2017-18疫情前的15%。這代表治理成效有進展，但高風險學校仍未被問題消化。',
		emoji: '📉',
		did_you_know: '報告指出「高」缺席（20%到29.9%）比例在2024-25為23%，幾乎與2021-22的22%持平；也就是學校總體變好，但卡在中高風險群仍是主要矛盾。',
		talking_points: [
			'先定義再治理：慢性缺席以「缺席10%以上」納入曠課、請假或停學計算，2024-25仍有約1/5學生落在門檻內，顯示行政端先有統一口徑才有辦法追蹤。',
			'極端缺席下降可見：31州中，超過30%學生常態缺課的學校比例從2021-22的41%降到2024-25的23%，是疫情後可量化的改善訊號。',
			'未改善區塊仍大：高缺席（20%至29.9%）比例2024-25仍有23%，比2021-22的22%只微幅差異，代表中高風險學校治理仍卡點。',
			'弱勢脆弱性持續：被引述研究指出，社經弱勢學生占比高的學校裡高與極端缺席幾乎沒有同步下降，改善效益未能均衡擴散。',
			'治理手段提示：報告主張以社區夥伴協作並搭配量化＋質化資料評估，台灣學校可用來辨識是否為「紀律」問題還是結構性障礙。',
		],
		quote: 'The share of “extreme” levels of chronic absenteeism has declined from 41% in 2021-22 to 23% in 2024-25.',
		quote_attribution: 'Attendance Works / Everyone Graduates Center, 2026-06-04',
		quote_source_url: 'https://www.k12dive.com/news/1-in-5-students-are-still-chronically-absent/821771/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '指標治理觀點：Attendance Works與約翰霍普金斯團隊將結果表述為可比數據，認為極端缺席大幅下降顯示政策壓力可轉為可追蹤成效，對台灣可借鏡於建立州/縣年度監測閉環。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/1-in-5-students-are-still-chronically-absent/821771/',
					},
				],
			},
			{
				text: '結構性風險觀點：同報導又指出高缺席比例仍停滯，且弱勢為主的學校改善有限。這形成台灣可參考的反思：平均數下降不等於風險族群下降，政策需鎖定資源未進到位的地點。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/1-in-5-students-are-still-chronically-absent/821771/',
					},
				],
			},
		],
		articles: [
			{
				title: '1 in 5 students are chronically absent, analysis finds',
				link: 'https://www.k12dive.com/news/1-in-5-students-are-still-chronically-absent/821771/',
				domain: 'k12dive.com',
				date: '2026-06-04',
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
