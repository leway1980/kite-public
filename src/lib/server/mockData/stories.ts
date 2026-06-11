import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-06-11 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: '33e1ca7d-c9e8-5c80-8899-ef03c0be6660',
		cluster_number: 4,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		editorial_lens: '資安信任',
		title: 'Fable 5 可用但受控，Anthropic 定義新式模型上線方式',
		short_summary: 'Anthropic 於 2026-06-09 同步推出 Claude Fable 5 與 Mythos 5，Fable 5 轉為可一般上線，Mythos 5 則先以 Project Glasswing 給政府與關鍵資安合作方。公司同時加上高風險題目轉接與安全抑制，並規定 30 天資料保留，讓能力擴張與風險控管同步進場；定價也降到每百萬輸入 10 美元、輸出 50 美元，顯示模型已由「只更強」轉向「可治理」的新工作模式。',
		emoji: '🛡️',
		did_you_know: 'Anthropic 說高風險擋流在平均情況低於 5% 會被觸發；Latent.space 則指出 Fable 5 在 FrontierCode Diamond 上由 13.4% 提升到 29.3%，顯示前沿測試場景仍有明顯躍升。',
		talking_points: [
			'一般版與受控版：Fable 5 對一般市場開放，Mythos 5 則先交給政府與關鍵基礎設施的 Project Glasswing，形成不同授權層級。',
			'安全轉接機制：Anthropic 表示部分高風險主題會改由 Opus 4.8 回應，原文估計觸發少於 5% 工作階段，避免全面封鎖。',
			'資料治理條款：Mythos 類要求所有流量保存 30 天，且不作為訓練用途，並提出人員存取紀錄與刪除機制。',
			'能力與績效：Latent.space 報導 FrontierCode Diamond 成績從 13.4% 跃升到 29.3%，代表長任務推進與複雜推理仍持續放大。',
			'成本變化：Fable 5、Mythos 5 價格定為每百萬輸入 10 美元、輸出 50 美元，低於 Mythos Preview 之後可加速長鏈工作試點。',
		],
		quote: 'queries on some topics will instead receive a response from our next-most-capable model, Claude Opus 4.8.',
		quote_attribution: 'Anthropic, 2026-06-09',
		quote_source_url: 'https://www.anthropic.com/news/claude-fable-5-mythos-5',
		quote_source_domain: 'anthropic.com',
		perspectives: [
			{
				text: 'Anthropic 的敘事偏向「可控擴張」：先上線高能力模型，但以分流、限制與授權分層壓低風險，重點是把治理條件寫進產品規格而非後續補丁。',
				sources: [
					{
						name: 'anthropic.com',
						url: 'https://www.anthropic.com/news/claude-fable-5-mythos-5',
					},
				],
			},
			{
				text: 'latent.space 觀察到的是「模型可用＋條款爭議」並存的張力：能力與權限同時擴大時，社群會更關注資料保留與 RSI 抑制如何影響二次開發與可攜性。',
				sources: [
					{
						name: 'latent.space',
						url: 'https://www.latent.space/p/ainews-anthropic-claude-fable-5-mythos',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: 'Anthropic 官方發佈 Claude Fable 5 與 Claude Mythos 5，宣告 Fable 5 可公開可用，Mythos 5 先限量走 Project Glasswing。',
			},
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: 'latent.space 發佈 AINews 評論，追蹤到 launch 附帶爭議條款，包括資料保留與 RSI 抑制機制，並記錄社群觀感。',
			},
		],
		articles: [
			{
				title: '[AINews] Anthropic Claude Fable 5 — Mythos but Safe, with Controversial Terms',
				link: 'https://www.latent.space/p/ainews-anthropic-claude-fable-5-mythos',
				domain: 'latent.space',
				date: '2026-06-10',
			},
			{
				title: 'Claude Fable 5 and Claude Mythos 5',
				link: 'https://www.anthropic.com/news/claude-fable-5-mythos-5',
				domain: 'anthropic.com',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'latent.space' },
			{ name: 'anthropic.com' },
		],
	},
	{
		id: 'c3da9e74-7ed5-5310-99e5-067b4ed6af6b',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'Codex 重做黑洞電漿模擬',
		short_summary: 'OpenAI 報導亞利桑那大學研究員與 Steward Observatory 團隊，使用 Codex 改善黑洞模擬流程。傳統把高溫稀薄電漿視為流體的做法在低碰撞區會失真，追蹤電子與離子的軌道後可更精準還原事件視界外的發光訊號。EHT 自 2019 年取得首張黑洞影像後正轉向拍攝超大質量黑洞影片，演算法精度直接決定觀測與理論比對的速度與可信度。',
		emoji: '🕳️',
		did_you_know: 'EHT 2019 年的首張黑洞影像後，研究重心已轉向拍攝超大質量黑洞影片，這篇案例把模擬精度問題鎖定在事件視界附近的稀薄等離子體區域。',
		talking_points: [
			'觀測邊界定位：事件視界外才有可觀測光訊號，研究者只能由此反推黑洞周邊動力學，因此模擬精度直接關係到科學解讀。',
			'模型限制打掉：把電漿視為傳統流體可省時，但在高溫、低碰撞區域會低估電子與離子的磁場纏繞行為，結果偏離實際。',
			'流程新模式：文章顯示 Codex 被拿來協作修正模擬算法與測試，研究可把大量重複排錯交給工具，將人力留給物理假設驗證。',
			'長期合作鏈：研究者來自 University of Arizona 與 Steward Observatory，並參與 EHT，與 2019 年影像成果形成同一資料—模擬閉環。',
			'可擴展價值：從追蹤個別粒子軌道到持續影片化研究，代表天文計算正從單次實驗轉為可版本化、可回溯的人機共同流程。',
		],
		quote: 'It’s a surface of no return.',
		quote_attribution: 'OpenAI, 2026-06-11',
		quote_source_url: 'https://openai.com/index/using-codex-to-simulate-black-holes',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '本文重心在工具導入層面：LLM 不直接替代研究判斷，而是讓天文模擬的維護與測試更流程化，降低長時間反覆除錯成本。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/using-codex-to-simulate-black-holes',
					},
				],
			},
			{
				text: '同文內也可看到觀測端壓力：從 2019 年靜態影像到影片目標，真正的轉變在於資料需求升級，逼出更精準的黑洞邊界等離子體描述。',
				sources: [
					{
						name: 'Event Horizon Telescope',
						url: 'https://openai.com/index/using-codex-to-simulate-black-holes',
					},
				],
			},
		],
		timeline: [
			{
				date: '2019-01-01',
				date_iso: '2019-01-01',
				content: 'EHT 發布首張黑洞影像，開啟團隊從影像解讀轉向長時間序列觀測的研究階段。',
			},
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: 'OpenAI 發表使用 Codex 改進黑洞電漿模擬的案例，凸顯從靜態估算到更精細粒子軌道模擬的轉向。',
			},
		],
		articles: [
			{
				title: 'How an astrophysicist uses Codex to help simulate black holes',
				link: 'https://openai.com/index/using-codex-to-simulate-black-holes',
				domain: 'openai.com',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '05fe5832-5242-5f6c-aa2a-be585fcf9404',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '資安信任、新工作模式',
		title: 'OpenAI 透過 OCI 讓既有雲承諾可買模型',
		short_summary: 'OpenAI 與 Oracle 在 2026 年 6 月 10 日宣布，未來數週內 OCI 客戶可用既有 Oracle Cloud Universal Credits（UCM）申請 OpenAI 模型與 Codex。這讓企業無須另闢採購與授權流程即可導入先進模型，並可直接嵌入既有雲端治理與安全決策框架，加速把 AI 試點轉為可維護的實際作業模式。',
		emoji: '☁️',
		did_you_know: '公告直接指出上線時間為「coming weeks」，表示這不是長期構想，而是近期可執行的採購與工具整合窗口。',
		talking_points: [
			'入口收斂：Oracle 用戶可把既有 UCM 點數直接對應 OpenAI 模型與 Codex，避免再開新採購管道，降低前置行政摩擦。',
			'治理對接：合作重點放在現有採購流程與治理框架上，讓模型導入沿既有資安、權限與審核節點執行。',
			'時間窗口：文內明確寫明「coming weeks」後開始可用，對企業資源排程與導入里程碑是近期可落點。',
			'作業重心轉變：公告將 OpenAI 視為可建置應用、分析複雜資訊與流程自動化的生產工具，非僅概念展示。',
			'成本與責任歸位：透過 OCI 入口納入 Oracle 雲承諾，企業可把 AI 併入既有採購與稽核責任，支援可維護運作。',
			'新可能來源：先前需跨供應商與採購單位協調的阻力，改為在既有雲服務組織內完成，適合中大型企業先行擴展。',
		],
		quote: 'In the coming weeks, Oracle customers will be able to apply eligible Oracle Cloud Universal Credits (UCM) toward OpenAI models and Codex through OCI.',
		quote_attribution: 'OpenAI 2026-06-10',
		quote_source_url: 'https://openai.com/index/openai-on-oracle-cloud',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從 OpenAI 角度是可用性策略：把先進模型接到 Oracle 現有承諾與採購管道，目標是把企業導入 AI 的第一道阻力從流程成本降到最低。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-on-oracle-cloud',
					},
				],
			},
			{
				text: '從企業採用觀點看，這不是買斷式工具上線，而是將模型納入既有雲治理的資安信任模型；真正的關鍵在於可否持續監控權限與風險。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-on-oracle-cloud',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: 'OpenAI 與 Oracle 發表合作公告，未來數週開放 Oracle 客戶以既有 UCM 向 OCI 申請 OpenAI 模型與 Codex。',
			},
		],
		articles: [
			{
				title: 'Access OpenAI models and Codex through your Oracle cloud commitment',
				link: 'https://openai.com/index/openai-on-oracle-cloud',
				domain: 'openai.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'c55b9874-d02e-5851-9a3e-e148135baf2c',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '資安信任',
		title: 'OpenAI揭露兩組AI輿論干預測試',
		short_summary: 'OpenAI 於 2026-06-10 公布報告，揭露兩組疑似中國來源的 ChatGPT 帳號群：Data Center Bandwagon 與 Tech and Tariffs。第一組主打「AI 資料中心抬高家庭電價」敘事，第二組則推「關稅壓制」與 OpenAI 外洩謠言，並透過大量留言、圖像滲入美國 AI 政策討論。OpenAI 指出未見明顯外溢，但事件顯示生成式內容可被系統化拿來測試對民主政策辯論的干預路徑。',
		emoji: '🛡️',
		did_you_know: 'OpenAI 將兩個可疑群組命名為 Data Center Bandwagon 與 Tech and Tariffs；第二組提示特意要求內容不要出現中國最高領導人姓名，只出現「川普」，顯示其輸出具明確導向控制。',
		talking_points: [
			'雙群命名：OpenAI 指出兩組帳號群分別稱為 Data Center Bandwagon 與 Tech and Tariffs，前者集中攻擊資料中心與家庭電價，後者聚焦關稅與科技競爭敘事。',
			'主題切入：兩組都鎖定美國社會討論點，將 AI 建設、能源負擔與關稅議題做組合，明顯利用高關注公共議題提高訊息擴散效率。',
			'指令控制：Tech and Tariffs 群組有明確生成要求，指定輸出不含中國領導人姓名、只保留川普，顯示可用 prompt 對政治話語框架做精準塑形。',
			'串聯攻擊：該群組同時附帶 OpenAI 用戶資料外洩假訊息，讓受眾在單一政策爭議中同時接觸安全危機，降低個體辨識真假訊息的門檻。',
			'治理關鍵：OpenAI 先封鎖相關帳號後再發報告，暗示在資安治理上可先做即時阻斷，再用群組特徵、工具輸出模式做跨機制情資回傳。',
		],
		quote: 'We found no evidence of meaningful breakout beyond its own activity.',
		quote_attribution: 'OpenAI, 2026-06-10',
		quote_source_url: 'https://openai.com/index/prc-linked-influence-operations-ai-debates',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的觀點是這類行動重點在維持民主討論完整性，因此採取「封鎖＋揭露」雙軌；先控制內容外溢風險，再把可重用特徵交給產業與政府。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/prc-linked-influence-operations-ai-debates',
					},
				],
			},
			{
				text: '政策與媒體治理角度看，這種操作不是先改變觀念，而是先卡在辯論框架：只要命中電價、在地建設與關稅爭議，就能把討論從證據判讀拉向對立情緒。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/prc-linked-influence-operations-ai-debates',
					},
				],
			},
			{
				text: '資安實務面可見新可能：若僅靠人工巡檢貼文，很難看穿群組化生成節奏；模型輸出參數、帳號群關係與時間順序同步監控，才有機會提早阻斷。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/prc-linked-influence-operations-ai-debates',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: 'OpenAI 發佈報告並揭露兩組疑似中國來源的 ChatGPT 帳號群，在美國 AI 輿論中推播能源與關稅議題後遭封鎖。',
			},
		],
		articles: [
			{
				title: 'PRC-linked influence operations are targeting AI debates in the US',
				link: 'https://openai.com/index/prc-linked-influence-operations-ai-debates',
				domain: 'openai.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'ee163227-ed76-54f5-abc4-0d31beed9c46',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '資安信任',
		title: 'LSEG 用 OpenAI 將產品週期壓到2週',
		short_summary: '倫敦證交所集團 LSEG 導入 OpenAI 與 ChatGPT Enterprise 後，將產品發布周期由約6個月縮短到2週，客戶需求到生產上線亦降為4週；同時同時透過模型評估、人機覆核與隱私安全機制管理風險。透過這種「先治理後擴散」的做法，4,000 名員工可在全球同步使用 AI，顯示金融企業可在不降低信任前提下重寫研發與決策節奏。',
		emoji: '⚡',
		did_you_know: 'LSEG 覆蓋超過 40,000 家客戶與 400,000 名終端使用者，分布於約190個市場，組織規模加速導入 AI 時的治理難度與放大風險都更高。',
		talking_points: [
			'速度重塑：產品發布周期從約6個月縮到2週，讓金融服務在需求波動下可快速驗證與推進新功能。',
			'交付上線：從客戶請求到正式上線可壓到4週，顯示產研節奏從傳統長週期轉為短回圈。',
			'規模導入：LSEG 在短時間內讓4,000名員工導入 ChatGPT Enterprise 與 OpenAI API，涵蓋產品、研發、研究與營運。',
			'治理前置：部署同時搭配模型評估框架與人工覆核，將模型輸出直接拿來決策前先過安全與品質關卡。',
			'工作流程變化：分析師用模型彙整大量市場資訊與草擬報告，將重工蒐整轉成可重複的決策支援流程。',
		],
		quote: 'The real transformation comes when we rethink how we solve problems—not just how we execute them.',
		quote_attribution: 'OpenAI，2026-06-10',
		quote_source_url: 'https://openai.com/index/lseg',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '第一個觀點是「流程先行再擴張」：LSEG 並未只做試點，而是先把治理、權限與覆核機制固定為基礎設施，讓AI可在全組織穩定擴散。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/lseg',
					},
				],
			},
			{
				text: '第二個觀點是金融場域可行性驗證：在監管壓力高的產業，產品速度提升若無合規設計很容易失敗；LSEG 將6個月到2週的壓縮與安全控管綁在一起，才是關鍵訊息。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/lseg',
					},
				],
			},
		],
		articles: [
			{
				title: 'From data to decisions: how LSEG is scaling trusted AI',
				link: 'https://openai.com/index/lseg',
				domain: 'openai.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'b7122732-d299-547a-9138-cb132a356e14',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Hero 一拍即上架：AI 接手賣場流程',
		short_summary: 'Product Hunt 於 2026-06-10 發表 Hero Studio Photos，主張只要一張商品照片即可完成辨識、估價、文案與多角度圖片生成，並可同步刊登到 eBay、Facebook Marketplace 與 Hero Shop。更新同時上線 iOS 與 Android（美國、加拿大、澳洲），並開放 API、MCP 供 AI 代理或開發者整合。對賣家來說，原本要跨多工具手動完成的拍照修圖、定價、文案、上傳流程，被壓縮成可自動化服務流，核心是縮短上架前置時間。',
		emoji: '📸',
		did_you_know: '展示案例提到對 YETI 水杯、搖椅與貓咪玩具的處理，系統會在保留品牌標誌與表面痕跡的同時優化背景與光源，降低「照片不專業」造成的流量流失。',
		talking_points: [
			'端到端自動化：Hero 將拍照、辨識、估價、寫文案、生成影像與上架打包到同一條流程，賣家不必逐步切換多個工具。',
			'多用途影像：單張原圖可輸出多角度照片，服飾可加上模特與吊掛式示意，電子與居家品項則導向清晰背景與打光。',
			'上架同步：完成後可一鍵同步到 eBay、Facebook Marketplace、Hero Shop，減少重複填欄位與格式轉換的人工作業。',
			'跨平台與區域：新版本同步支援 iOS 與 Android，上線市場明示為美國、加拿大與澳洲，顯示先以北美與大洋洲賣場驗證流程。',
			'開發者接軌：提供 API 與 MCP，讓識別、定價、寫文案、產圖能力能嵌入既有電商系統與 AI 代理工作流。',
		],
		quote: 'Snap one photo, get listing-ready shots from every angle',
		quote_attribution: 'Product Hunt, 2026-06-10',
		quote_source_url: 'https://www.producthunt.com/products/hero-9',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從賣家效率看，重點是縮短上架起始成本：AI 接手拍攝修圖、文字與刊登後，能讓少量人力也維持較高上架量。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/hero-9',
					},
				],
			},
			{
				text: '從平台生態看，Hero 不只是一支 App，而是把估價、文案與素材生成包裝成可呼叫服務，藉 API/MCP 讓第三方代理工具承接後段流程。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/hero-9',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: 'Product Hunt 發布 Hero Studio Photos，宣稱可由單張照片自動產生多角度商品照並一鍵上架，同步公布 Android 上線、API 與 MCP 入口。',
			},
		],
		articles: [
			{
				title: 'Hero Studio Photos',
				link: 'https://www.producthunt.com/products/hero-9',
				domain: 'producthunt.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'd6b3e133-86f2-5147-bdec-23eef354ccb6',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '資安信任',
		title: 'Timmy-TUI：本機安全工作區域代理控制台',
		short_summary: 'Product Hunt 於 2026-06-10 推出 Timmy-TUI，定位為「本機優先」的終端代理信任主控台。它整合 OpenRouter 模型選擇、MCP→CLI 證據封包、cmux 啟動、Browser Companion 鏡像、local logs，並以 local workspace 為核心再加上含 manifest hashes 的 sealed TIMMY receipts。產品標示為免費互動版本並已累積 94 位追蹤，核心意義是把 AI 代理的模型、指令與稽核證據收斂在可追溯流程，對教育行政、研究與知識工作有借鏡價值。',
		emoji: '🛡️',
		did_you_know: 'Timmy-TUI 在初始版本即支持 sealed TIMMY receipts（含 manifest hashes）與 local logs，顯示其設計先重視可追蹤性；官方同步預告將加入 Cloudflare-backed receipts、memory 與 deployment workflows，屬於「先把信任鏈補齊，再擴展治理能力」的路線。',
		talking_points: [
			'本機優先防線：Timmy-TUI 將代理工作置於 local workspace 與 local filesystem，讓模型輸出與日誌更可控，適合重視資料邊界與稽核需求的工作場景。',
			'流程整併：產品把 OpenRouter 選模、MCP→CLI evidence bundle、cmux launch 放在一個控制台，較傳統分散式工具減少操作斷點，降低代理流程的轉接成本。',
			'證據鏈設計：它同時提供 Browser Companion mirroring、local logs 與 sealed TIMMY receipts（manifest hashes），有助於把「代理有做了什麼」具體化為可比對紀錄。',
			'採用訊號顯示：Product Hunt 頁面載明 94 followers，且標記 Interactive 與 Free，顯示開源工具社群對這種可驗證代理工作台有初步關注。',
			'持續演進：頁面提到 Cloudflare-backed receipts、memory、deployment workflows 為「next」，代表未來仍會把憑證管理、上下文記憶與部署編排納入同一套治理流程。',
		],
		quote: 'Timmy-TUI is a local-first terminal agent trust console for builders.',
		quote_attribution: 'Product Hunt, 2026-06-10',
		quote_source_url: 'https://www.producthunt.com/products/timmy-tui',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從開發工具觀點看，Product Hunt 的資訊聚焦的是「本機信任」而非雲端便利，主張先解決模型選擇、指令執行與可追溯證據的基礎構件。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/timmy-tui',
					},
				],
			},
			{
				text: '對教育與行政實務而言，此類設計在概念上可借鏡，但落地需跨出產品外層：還要自行補齊權限控管、教育資安政策對接與人員操作規範，否則僅有工具層面的好處不足。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/timmy-tui',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: 'Product Hunt 上線 Timmy-TUI，定位為 local-first 的代理信任主控台，並列出 OpenRouter、MCP→CLI、local logs 與 sealed TIMMY receipts 等功能設計。',
			},
		],
		articles: [
			{
				title: 'Timmy-TUI',
				link: 'https://www.producthunt.com/products/timmy-tui',
				domain: 'producthunt.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'f23d0e30-5b5c-536d-8856-752a41ed8266',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'Axol：實體工作自動化的新模型',
		short_summary: 'Product Hunt 於 2026-06-09 公開 Almond 的 Axol，定位是「以強力機器自動化實體工作」。討論串指出先前機器人常因資料蒐集困難、載重與動作空間受限、線材組件易損等，難以長期在現場穩定運作。Axol 被設計成要在實體作業流程中直接替代人工重複勞務，而不是只做技術展示。對想導入 AI 的組織來說，這類產品示範的是：AI 已從軟體功能，逐步走向可維運的「現場流程架構」。',
		emoji: '🤖',
		did_you_know: '討論中提到，任務訓練常以 2 支手腕攝影機＋1 支頭部攝影機配置為核心，且 Axol 機體重 19.5kg（42磅），代表其硬體策略傾向在中小場域中平衡靈活度與可承載工作量。',
		talking_points: [
			'定位轉向：產品標語明確聚焦「實體工作自動化」，與過去僅作展示用途的商用機械臂形成區別，核心是現場可持續作業。',
			'真實場景：創辦敘述提到傳統機械手臂常遇到資料蒐集、載重與空間運動限制，這正是推動 Axol 重構設計的根據。',
			'追蹤訊號：產品在 Product Hunt 上線頁已見 178 位追蹤者，反映市場短時間關注度高，對實體 AI 的投入意願轉為可觀。',
			'導入門檻：討論聚焦「攝影機數量、桌機/筆電連線、獨立運算盒」等問題，顯示機器人成本不是唯一議題，工具整合成本同等關鍵。',
			'可擴充策略：社群反覆詢問可否提供任務策略與 CLI/MCP 接口，說明真正可複用的不是單次示範，而是可切換的工作流程模組。',
		],
		quote: 'We realized most robots we used were built for demos, not real work.',
		quote_attribution: 'Product Hunt, 2026-06-09',
		quote_source_url: 'https://www.producthunt.com/products/axol',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品方角度把問題定義為「工程可用性」而非體驗炫耀，主張機器人要先過實際作業驗證再談擴張，與過往偏展示導向的 AI 機械觀念衝突。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/axol',
					},
				],
			},
			{
				text: '早期採用者角度關注攝影機配置、遠端控制與策略庫，重點不只是買到哪台機器，而是能否低門檻組好「可重用」任務模組，反映導入決策由規格比對轉到流程設計。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/axol',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: 'Product Hunt 發布 Axol 產品頁並啟動討論，產品標語明確聚焦於實體工作自動化。',
			},
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: '創辦人回應社群提問，補充感測器佈局、運算連線方式與任務策略可拓展性的討論重點。',
			},
		],
		articles: [
			{
				title: 'Axol',
				link: 'https://www.producthunt.com/products/axol',
				domain: 'producthunt.com',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '9dfbe3ec-fa9f-548a-8425-88eccf3dfb2a',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'Zingle 用情境句重作 AI 單字複習',
		short_summary: 'Product Hunt 在 2026-06-09 討論的 Zingle 強調「情境先行」的單字學習機制，而非只列出詞彙與解釋。產品將閱讀中遇到的詞保存為可回顧卡片，並以原句、回想、複習與 SRS 評分串起流程；回顧階段再補上詞義、例句與同義反義。此設計對跨語言閱讀、研究彙整與個人知識工作者的重要性，在於可把零散閱讀筆記轉成可持續記憶的工作流。',
		emoji: '🧠',
		did_you_know: '團隊解釋 Word Review 流程為「儲存單字→原句→回想→答案與細節→SRS 評分」，這個節點設計讓學習者先回到語境再回想，較能避免單字脫離使用情境而遺忘。',
		talking_points: [
			'情境先行：Zingle 的核心做法不是只記住詞義，而是先保存原句情境，再以原句作為回顧起點，避免學到詞後不知從何處讀到。',
			'流程可追蹤：平台回應的複習路徑是「儲存單字→原句→回想→答案與細節→SRS 評分」，和間隔重複法相容，較適合長期累積。',
			'資訊更完整：每個詞條可查到定義、sense、範例、同義/反義、搭配與發音，將閱讀標記直接延展為可重複使用的知識卡。',
			'導入門檻低：團隊指出 Zingle 是 Web App，使用者可貼上內容後即時找詞並建立卡片，不需外掛環境也不需高工程整合。',
			'抗壓設計：團隊回應稱不想走「刷 streak」路線，而是把目標放在 context first 與記憶穩定，反映教學工具從競賽化改向可持續學習。',
		],
		quote: 'For Word Review, Zingle uses an SRS review system, similar to Anki.',
		quote_attribution: 'Product Hunt, 2026-06-09',
		quote_source_url: 'https://www.producthunt.com/products/zingle-2',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品方視角將複習重心放在閱讀脈絡重建而非字卡孤立呈現，主張學習流程應對應「工作流再利用」，而非短期記憶刺激。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/zingle-2',
					},
				],
			},
			{
				text: '使用者回饋從「我想要個人化題目」切入，顯示這類工具的價值不只是功能完整，還取決於能否直接連結自有原文句子產生更精準回顧。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/zingle-2',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: 'Product Hunt 討論頁出現 Zingle 條目，並以回覆說明其以原句為主軸的 SRS 單字複習與回顧流程。',
			},
		],
		articles: [
			{
				title: 'Zingle',
				link: 'https://www.producthunt.com/products/zingle-2',
				domain: 'producthunt.com',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '58296783-12d5-57b9-9127-284c2db6cf7c',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'Claude 5 Fable 讓長流程工作可交接',
		short_summary: 'OneUsefulThing 初測 Claude 5 Fable 時指出，這款 Mythos 系列模型在多數任務上顯著超過作者以往常用的公開模型。重點不只在輸出品質，而是其可承接「長流程」的特性：從多頁規格、論文草稿到遊戲原型，往往只要單次指令加少量追問即可持續迭代，作者有案例提到可接近十二小時不中斷處理較複雜工作。對知識工作與教育場域而言，這代表把原本拆段、反覆手動修補的流程，轉成可監督的提示鏈式代理作業。',
		emoji: '🚀',
		did_you_know: '文章提到作者只用少量追問，例如「make it better」，就能把初版成果持續推到可用狀態，顯示操作成本不在學會新介面，而在設計提示節奏。',
		talking_points: [
			'效能躍升：作者以多組公開模型實測指出，Claude 5 Fable 在多項實作上明顯優於以往模型，並非單點表現，而是跨題型都看得見差距。',
			'超長任務耐力：原文描述其能持續處理多頁規格與複雜需求，曾出現長達約 12 小時仍在運作的情況，降低長工時人工盯工。',
			'少量提示迭代：單次主提示後再加 1～2 次簡短回饋，Fable 即可完成學術論文草稿、遊戲雛形等成果，降低指令複雜度門檻。',
			'低素材門檻創作：文章強調 Fable 無法直接產生圖片，但仍可透過數學與程式邏輯產生可互動內容，將素材蒐集前置步驟縮減。',
			'安全邊界先行：作者提到 Mythos 的防護機制會阻擋部分資安用途，顯示高效模型仍需先建立可上線/不可上線清單。',
			'工作情緒轉折：作者形容使用體驗介於「好用到令人開心」與「不安」，突顯可控性與責任機制成為新流程關鍵。',
		],
		quote: 'It was delightful because I just asked for something at it happened. And also unnerving because I just asked for something and it happened.',
		quote_attribution: 'OneUsefulThing, 2026-06-09',
		quote_source_url: 'https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos',
		quote_source_domain: 'oneusefulthing.org',
		perspectives: [
			{
				text: '效率導向觀點認為，AI 已不只加速單次輸出，而是可接管長時段、重複修正的工作段。這對教學設計、行政文件彙整與研究草稿特別有啟發。',
				sources: [
					{
						name: 'OneUsefulThing',
						url: 'https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos',
					},
				],
			},
			{
				text: '風險治理觀點則指出，雖然效能顯著上升，但資安防護限制同步存在，說明模型能力提升後，治理必須先於規模化導入，先分出可放行與禁止情境。',
				sources: [
					{
						name: 'OneUsefulThing',
						url: 'https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: 'OneUsefulThing 發表作者早期測試《What it feels like to work with Mythos》文章，提出 Claude 5 Fable 在多種複雜任務中的長流程可行性。',
			},
		],
		articles: [
			{
				title: 'What it feels like to work with Mythos',
				link: 'https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos',
				domain: 'oneusefulthing.org',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'oneusefulthing.org' },
		],
	},
];

const workMethodsStories: Story[] = [
	{
		id: 'fd06a3b9-5b28-5faa-b918-2123ed4ffc5d',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '代理管理',
		title: 'Fable 5 首發與高成本模型分流',
		short_summary: 'Anthropic 於 2026-06-09 同日推出 Claude Fable 5 與 Mythos 5。Fable 5 對外宣稱與 Mythos 5 保持近似能力，但加入更嚴格安全機制，並在被擋時提供回饋與可自動切換模型。其規格為 1,000,000 token 上下文與 128,000 token 輸出，知識截止到 2026-01；價格則是輸入 10 美元、輸出 50 美元／百萬 token，這將高效能與高成本並存。對工作團隊而言，重點不是只看能力，而是先建立任務分級與治理分流。',
		emoji: '🧩',
		did_you_know: 'Fable 5 與 Mythos 5 都主打 1,000,000 token context 與 128,000 token output，但只有 Fable 5 被設定更嚴格安全分類器；同時在攔截時可主動回報，並搭配自動 fallback 流程。',
		talking_points: [
			'5.5 小時壓測判準：作者未先行存取權，改以上線後連續 5.5 小時試用，先測出穩定性再決定是否納入正式代理流程。',
			'能力定位差異：Anthropic 明確說明 Fable 5 與 Mythos 5 近似效能，但把安全檢查前置，讓模型選型從「速度」轉為「效率加治理」取捨。',
			'安全回授機制：當輸入被拒，API 會有回報機制，且可設自動 fallback 到其他模型，適合把人手從被動除錯改為監控決策。',
			'成本壓力上升：輸入／輸出皆為前代 Opus 4.x 的兩倍，10 美元與 50 美元每百萬 token 使長上下文任務的預算控管成為主決策依據。',
			'時效與長文處理：1 百萬 token 的上下文有助整合大段材料，但知識截止日是 2026-01，對即時資訊仍需額外資料驗證步驟。',
		],
		quote: 'Anthropic claim that Claude Fable 5 offers the same performance as Claude Mythos 5, except with much more strict guardrails in place to prevent it being used for harmful things.',
		quote_attribution: 'simonwillison.net, 2026-06-09',
		quote_source_url: 'https://simonwillison.net/2026/Jun/9/claude-fable-5/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '企業端可看到 Anthropic 的訊息是「同效能但可控」，代表模型評估從是否夠聰明，轉為是否能被風險管理制度接住，尤其是對外輸出型服務較有操作價值。',
				sources: [
					{
						name: 'Anthropic 官方主張（轉載）',
						url: 'https://simonwillison.net/2026/Jun/9/claude-fable-5/#atom-entries',
					},
				],
			},
			{
				text: '實測作者關注點在「找不出做不到的任務」，這顯示高階模型仍常見於擴大既有能力，而非創造新任務，工作上應先訂定可否節省人工判斷時間的關鍵工步。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/Jun/9/claude-fable-5/#atom-entries',
					},
				],
			},
			{
				text: '從流程視角看，價格是最大阻力之一：若沒有任務分級，fallback 與安全攔截再完整，也可能因高 token 成本失去正向回報，管理者需先定義『高價任務清單』。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/Jun/9/claude-fable-5/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: 'Anthropic 同日推出 Claude Fable 5 與 Mythos 5，並在官方訊息中強調 Fable 5 的更嚴格安全分類器與同檔效能定位。',
			},
		],
		articles: [
			{
				title: 'Initial impressions of Claude Fable 5',
				link: 'https://simonwillison.net/2026/Jun/9/claude-fable-5/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: '7268f5ae-53e9-5169-9f5e-be6977bff8d0',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: '高教AI不能全禁：DeepMind建議以學習科學為本',
		short_summary: 'Inside Higher Ed 於 2026-06-10 報導，Google DeepMind 的學習倡議負責人指出，AI 在高教不必取代教學，而應在既有教學法上補強學習流程。她警示「全或無」禁用會讓學校錯過檢討課程與評量的關鍵窗口，教師與學生也更難在倫理、關係與學習設計上形成長期共識，因而主張先以學習科學與治理規則定義 AI 的角色。',
		emoji: '🧠',
		did_you_know: '該專家在文中明確比喻：若未經教學訓練直接把 LLM 放進教室，就像請一位陌生人上課；這個比喻凸顯「先設計學習邏輯、再導入模型」才是高教可持續的關鍵。',
		talking_points: [
			'全禁副作用：專家認為「all or nothing」校內政策會讓高教失去修正評量與教學流程的對話空間，創新討論因此被延宕。',
			'定位界線：訊息核心是 AI 不必改變教學，而是補強既有教學，焦點轉向教師與學生關係、動機與反思，非單純工具競速。',
			'落地範例：Google 將 Gemini 的 guided learning 學習模式與 LearnLM 串接，並對應 Google Classroom 的「study mode」防誤用情境。',
			'設計原則：他們主張先把學習視作科學再建模，若直接讓 LLM 成為老師，將難以對齊知識建構、回饋與學習目標。',
			'國際訊號：文章刊於 2026-06-10，並延伸自上月 World Education Forum 討論，顯示高教治理論述正從禁用轉為設計治理。',
		],
		quote: 'AI does not have to change pedagogy, but can reinforce it.',
		quote_attribution: 'Inside Higher Ed, 2026-06-10',
		quote_source_url: 'https://www.insidehighered.com/news/tech-innovation/teaching-learning/2026/06/10/all-or-nothing-approach-ai-risks-shutting-down',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '高教治理層面正出現張力：部分單位仍傾向全面禁用以控風險，但本報導主張這樣會壓縮政策與教學的實驗空間，阻礙制度化治理。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/tech-innovation/teaching-learning/2026/06/10/all-or-nothing-approach-ai-risks-shutting-down',
					},
				],
			},
			{
				text: '平台導入層面亦有拉扯：科技端提供 Gemini、Classroom 等功能化工具，但訊息強調工具不應先行，而要由學習科學驅動設計，否則容易回到禁用與失序的對抗循環。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/tech-innovation/teaching-learning/2026/06/10/all-or-nothing-approach-ai-risks-shutting-down',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: 'Inside Higher Ed 發表《All or Nothing》專訪，提出全面禁用 AI 可能抑制高教面對教學改革與治理問題的討論。',
			},
		],
		articles: [
			{
				title: '\'All or Nothing\' Approach to AI \'Risks Shutting Down Innovation\'',
				link: 'https://www.insidehighered.com/news/tech-innovation/teaching-learning/2026/06/10/all-or-nothing-approach-ai-risks-shutting-down',
				domain: 'insidehighered.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
	{
		id: '4b24fd99-4eab-5750-aa6e-b9fa3c350c5f',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '對話 AI 問答可揭露線上課程知識缺口',
		short_summary: '本研究以一門研究生線上 AI 課程為場域，分析 164 名學生在對話式 AI 教學助理留下的 1,340 則問題。研究先用 few-shot 文本分類器將提問映射到 43 類（42 個課綱主題＋unknown），再以 GPT-4 擷取的課程先修概念圖校正標註，並與 28 主題的期中自陳難度問卷做關聯驗證，發現提問量與難度關係為 rho=0.491、p=0.008，顯示題目流可作課綱層級知識缺口的診斷訊號。',
		emoji: '📊',
		did_you_know: '題目分類準確率達 80.0%，有助於快速找出學生反覆詢問的薄弱環節；注意：本研究為觀察性研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：工作論文採觀察式設計，從 1,340 則 AI 提問事件與 164 名學生對話紀錄中擷取知識缺口訊號，評估可否做課程診斷。',
			'數據佐證：模型分成 43 個類別（42 個課程主題＋unknown），並接續 28 題期中自陳難度問卷資料進行驗證。',
			'數據佐證：題目層級提問量與自陳難度相關係數 rho=0.491，p=0.008，n=28 主題，達顯著關聯。',
			'方法訊號：先由 GPT-4 建構課程先修知識圖譜，再用 few-shot 文本分類器把問題對齊到主題節點，降低標註歧義。',
			'重點發現：分類器在 43 類標註任務上的準確率為 80.0%，可協助教師抓出提問熱點並調整補強順序。',
		],
		quote: 'Topic-level question volume correlates significantly with student self-reported difficulty from an independent mid-semester survey (rho = 0.491, p = 0.008, n = 28 topics), providing convergent evidence that the classified question stream reflects genuine topic difficulty.',
		quote_attribution: 'arXiv, 2026-06-09',
		quote_source_url: 'https://arxiv.org/abs/2606.10736',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '單一場景觀察：研究只取樣 164 名學生的同一門 AI 研究生課程，證據有助於課程內部優化，但未能直接代表多班級、多學段的教學真實。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.10736',
					},
				],
			},
			{
				text: '延伸研究缺口：結果顯示題目流與難度相關，但研究未提供對照組或跨校追蹤；可疑似的成效提升仍需下一步的實驗與多場域再驗證。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.10736',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: '論文於 2026 年 6 月 9 日提交於 arXiv，提出以先修概念圖標註對話式 AI 提問以偵測知識缺口的方法。',
			},
		],
		articles: [
			{
				title: 'Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs',
				link: 'https://arxiv.org/abs/2606.10736',
				domain: 'arxiv.org',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: '6858d417-cf75-54de-b845-d9f6c39ab7c4',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: 'LLM 翻譯數學題卻壓縮文化差異',
		short_summary: 'arXiv 研究比較 Claude Opus 4、GPT-4.1、Gemini 2.5 Pro 將 60 則英語數學題改編為 7 種語系，並人工標註 6,489 筆實體轉換。結果顯示轉換類型共識僅 62.5%，具體替換一致度更低至 33.5%，且 21 組模型組合皆出現文化多樣性收斂。研究顯示 AI 題目本地化在提高改寫效率的同時，可能系統性壓縮學生可接觸的文化脈絡，對跨語言教材品質控管有直接影響。',
		emoji: '🧪',
		did_you_know: '同題在三模型比較中，只有 33.5% 的具體符號替換一致，顯示表面看似通順的版本仍可能出現系統性文化偏差；注意：本研究為工作論文，不宜直接推論因果',
		talking_points: [
			'證據類型：觀察性比較研究。研究以 60 則英語題目為母體，交由三款大型語言模型改寫到 7 種語系，並針對 6,489 個名稱、食物、地點等實體做人工標註比對。',
			'數據佐證：轉換類型一致度僅 62.5%，而精確替換一致度僅 33.5%；追蹤期間與效果量未在公開摘要揭露，只能解讀為跨模型輸出差異，不足以直接外推到教學成效。',
			'模型行為：21 組模型組合都呈現 entropy collapse，表明改編傾向收斂為有限文化樣式，而非放大各語系原本應有的文化廣度。',
			'實務風險：研究記錄出現將「復活節找蛋」轉為「開齋節」活動的跨文化污染，與將印度學生情境誤設為孟加拉幣單位，反映區域上下文常被錯配。',
			'治理意涵：研究指出，單一題目可能難以看出問題；只有跨題目大量比對才會顯現偏誤模式，顯示大型語言模型教材工具需要加入可審核的抽樣稽核機制。',
		],
		quote: 'All 21 language-model combinations show entropy collapse, with adaptation compressing rather than expanding cultural diversity.',
		quote_attribution: 'arXiv, 2026-06-10',
		quote_source_url: 'https://arxiv.org/abs/2606.11009',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '此研究揭露可讀性與文化一致性張力：模型可產出順暢題幹，但同題在不同模型與語系下可能對關鍵文化符號做出不同替換，教育內容審稿不能只靠「看起來正常」判斷。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.11009',
					},
				],
			},
			{
				text: '論文聚焦輸出品質偏差，尚未追蹤學生學習結果。若以課綱配適或教材採購作決策，需補上對照組與學習成果資料；目前仍是方法學指標而非因果評估。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.11009',
					},
				],
			},
			{
				text: '研究涵蓋低資源語言如 Sindhi、Sicilian 的案例，對跨文化教學有警訊價值，但作為單篇 preprint，仍缺少與其他研究的可複核整合，延伸研究缺口仍在對照文獻與再現性。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.11009',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: '論文提交至 arXiv，題為跨語言文化翻譯審核的數學題適配研究。',
			},
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: '研究列入前瞻聚類訊號，納入 AI 教育趨勢類新聞彙整。',
			},
		],
		articles: [
			{
				title: 'Who Brought Easter Eggs to Eid? Auditing Cultural Translation of Math Word Problems Across Diverse Languages and Regions',
				link: 'https://arxiv.org/abs/2606.11009',
				domain: 'arxiv.org',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: '7cd71f98-b60a-5d92-ac9a-d801129edbff',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '生成式AI成效以蒙地卡羅量化',
		short_summary: 'arXiv 的這篇研究以 PRISMA 流程在 Scopus 盤點 2023 至 2025 年生成式 AI 與學生知覺相關的實證文獻，最後鎖定 19 篇並進行統一彙整，但僅 6 篇提供可直接建模的項目平均數與標準差。研究者選用 10 題 5 點李克特可用性量表資料，透過反變異數加權做 10,000 次蒙地卡羅模擬，推算學生知覺式成功指標；結果指出「系統效率」與「學習負擔」對綜合分數權重最高。研究未公開各原始研究的國別與受試樣本數細節，但提供可重複、可稽核的量化方法線。',
		emoji: '🧪',
		did_you_know: '研究先用可公開的文獻項目統計資料，再以蒙地卡羅合成 10,000 筆樣本，比較權重對結果的影響。注意：本研究為文獻整合加機率模擬，不宜直接推論因果。',
		talking_points: [
			'證據類型：採 PRISMA 指引的系統性文獻檢索為基礎，從 Scopus 取得 19 篇 2023-2025 實證研究，再挑 6 篇有項目層級平均數與標準差可建模的資料進行統計推估。',
			'數據佐證：公開摘要未揭露原始研究樣本數與國別；研究改以 10 題、5 點李克特題項，以反變異數加權建置蒙地卡羅模型，模擬 10,000 筆觀測，並估計綜合分數權重。',
			'權重結果：模擬顯示 System Efficiency 與 Learning Burden 兩大構面權重最高，對綜合得分影響最大，說明學生對生成式 AI 的成功感知更受效能與負荷感受牽動。',
			'可重複性：研究將結構化文獻搜尋、項目統計摘要、機率建模三步驟串為一條流程，目的是讓後續研究能複製執行，並降低直接使用個資的資料風險。',
			'落地含義：這套架構偏重方法驗證與情境模擬，從論文版本沿 2025-06-30 到 2026-06-09 持續修訂，呈現學術界正嘗試用統計模型替代單次調查作比較。',
			'版本脈絡：文章有 v1 到 v4 的多次修訂，最後在 2026-06-09 更新到 v4，顯示方法假設與權重設定仍在再校正中，並未停止於單次發佈。',
		],
		quote: 'The study offers a transparent, reproducible, and privacy-preserving proof-of-concept framework linking structured literature search, item-level summary statistics, and probabilistic modelling.',
		quote_attribution: 'arXiv, 2026-06-09',
		quote_source_url: 'https://arxiv.org/abs/2507.01062',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '此研究價值在於提供可被複用的量化流程：把分散文獻結果轉為同質化尺度並做權重模擬，有助高教單位建立「AI 成果監測」的首輪儀表模型，不必先蒐集完整原始個資。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2507.01062',
					},
				],
			},
			{
				text: '延伸研究缺口在於證據層級：公開摘要未揭露原始受試樣本與分布、國別，亦未進行RCT或對照追蹤，故目前可視為方法學證據，而非可直接外推到學生學習成效因果結論。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2507.01062',
					},
				],
			},
		],
		timeline: [
			{
				date: '2025-06-30',
				date_iso: '2025-06-30',
				content: '論文初版於 arXiv 提交，採取基於 Scopus 的 PRISMA 文獻檢索設計。',
			},
			{
				date: '2025-09-22',
				date_iso: '2025-09-22',
				content: '論文更新為 v2，持續修訂研究流程與方法描述。',
			},
			{
				date: '2026-03-19',
				date_iso: '2026-03-19',
				content: '論文更新為 v3，進一步調整方法與結果敘述。',
			},
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: '論文更新為 v4，新增最新修訂版本，聚焦在可重複與隱私保護的模擬方法。',
			},
		],
		articles: [
			{
				title: 'Quantifying Perception-Based Student Success with Generative AI: An Exploratory Monte Carlo Simulation',
				link: 'https://arxiv.org/abs/2507.01062',
				domain: 'arxiv.org',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: '96b7d14c-9998-5b53-b717-9920d1a21cad',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '高教 AI 素養五階段：從工具使用到改善',
		short_summary: 'arXiv 於 2026-06-03 修訂版本提出高等教育 AI 素養五階段模型（未參與、未批判使用、知情使用、批判評估、改善），用來補齊既有框架在起點診斷與進階路徑上的不足。研究在美國北卡羅來納州立大學自 2024 秋到 2026 春，透過學分課與密集工作坊，觀察超過 330 位學習者的行為變化；設計導向的結果顯示，短期介入較能改善知情使用，長期跨課程情境則較能培養批判評估與改進取向。此模型有助高教單位重整 AI 素養教學分層。',
		emoji: '🎓',
		did_you_know: '研究在 2024 年秋到 2026 年春追蹤 330 餘名參與者，主要描述行為轉移與階段進展，未提供可直接比較的效果量或信賴區間。注意：本研究為觀察性研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：以設計導向實作研究為主軸，透過課程與工作坊過程觀察學習者行為改變，非隨機對照試驗。',
			'數據佐證：樣本為超過 330 名學習者，場域橫跨 2024 年秋至 2026 年春，但摘要未揭露效應量、百分點差與信賴區間。',
			'模型主軸：核心為五階段連續體，將學習狀態分為未參與、未批判使用、知情使用、批判評估、改善，對齊診斷與評量。',
			'實務訊號：研究同時包含學分課與短期工作坊，指出短介入有利推進「未批判」到「知情」的轉換，但批判與改善仍仰賴持續嵌入。',
			'國際脈絡：作者將模型與 UNESCO、OECD 框架對齊，主張提供可直接用於課程設計與實作評量的操作化結構。',
		],
		quote: 'We propose a five-stage AI Literacy Continuum for higher education consisting of Not Yet Engaged, Uncritical Use, Informed Use, Critical Evaluation, and Improvement.',
		quote_attribution: 'arXiv, 2026-06-03',
		quote_source_url: 'https://arxiv.org/abs/2606.00038',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '文本主張透過五階段模型補足既有理論空白，讓高教現場可依學習者起點制訂行動，尤其對分層課程與教學診斷有直接操作價值。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.00038',
					},
				],
			},
			{
				text: '同時，研究強調仍是觀察性設計，僅能回報行為軌跡而非因果關係；延伸研究缺口為跨校、跨國的對照研究，才能降低場域與文化偏差。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2606.00038',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: '文章最初提交 arXiv（v1）。',
			},
			{
				date: '2026-06-03',
				date_iso: '2026-06-03',
				content: '提交版本更新為 v2，摘要與方法說明持續補充研究設計與階段模型脈絡。',
			},
		],
		articles: [
			{
				title: 'Beyond Tool Adoption: A Practical Five-Stage Developmental Continuum for AI Literacy in Higher Education',
				link: 'https://arxiv.org/abs/2606.00038',
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
		id: 'c836e4cc-530c-5418-af61-2703ca750cfa',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '職涯判斷',
		title: '高等教育的高賭注提問',
		short_summary: '《The Audacious Ask of Higher Education》指出，生成式 AI 時代下，高等教育仍要求學生投入數萬到十幾萬美元、時間與人生資本，但並無保證學生一定能畢業、就業或順利還清學貸。作者以逾四十年學術經歷觀察到，真正的問題不是學生不想學，而是制度要求與快速變動的就業市場產生落差，讓學生在入學前就承擔高度不確定性。',
		emoji: '🎓',
		did_you_know: '文章來自 AI Education Simplified 的專欄系列，作者在延續前段思考後指出，生成式 AI 讓高等教育的價值承諾更不穩，重點不只在教學本身，而是學生從入學到畢業、進入職場整條路徑上的承諾是否對等。',
		talking_points: [
			'高額投入：文章提到高教常要求學生投入「數萬到十幾萬美元」與大量時間，卻沒有對應的畢業、就業或薪資回收保證，風險先於學習開始。',
			'職涯不確定：作者明確拆解三層風險，完成學位不保證好工作，拿到工作不保證能還清債務，進一步壓縮學生的生涯彈性。',
			'AI改變市場：文章認為生成式 AI 正在重組甚至淘汰大量工作職能，學生所學技能在就業時可能已非市場主流，學習報酬難被預估。',
			'受影響群像：文中點名 18 歲學生、重返校園成年人、帶著家庭責任者及打工者都承擔同一制度風險，顯示資源需求與生活條件不對稱。',
			'可直接試作：教師可在課程開始前加入「投入與回收表」，要求學生估算學費、工時、家庭負擔與 AI 替代風險，先讓班級討論實際承擔能力與替代方案。',
		],
		quote: 'Higher education asks students to invest money, time, attention, energy, hope, identity, and often a very real amount of risk into this thing called a college education.',
		quote_attribution: 'AI Education Simplified, 2026-06-10',
		quote_source_url: 'https://aiedusimplified.substack.com/p/the-audacious-ask-of-higher-education',
		quote_source_domain: 'aiedusimplified.substack.com',
		perspectives: [
			{
				text: '一端是制度價值論：高等教育被視為塑造生命與思考能力的公共工程；文章同時認為只靠抽象理想不足以支撐，需對學生承擔的金錢與人生代價做出明確說明。',
				sources: [
					{
						name: 'AI Education Simplified',
						url: 'https://aiedusimplified.substack.com/p/the-audacious-ask-of-higher-education',
					},
				],
			},
			{
				text: '另一端是政策與市場視角：即使完成學業，學生仍可能面臨職缺不足、薪資壓力與債務負擔，文章因此把焦點從學術品質轉向「高教是否在收取未定價的風險」這個制度問題。',
				sources: [
					{
						name: 'AI Education Simplified',
						url: 'https://aiedusimplified.substack.com/p/the-audacious-ask-of-higher-education',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: 'AI Education Simplified 發佈〈The Audacious Ask of Higher Education〉，聚焦生成式 AI 時代高等教育對學生要求與回報失衡的結構性問題。',
			},
		],
		articles: [
			{
				title: 'The Audacious Ask of Higher Education',
				link: 'https://aiedusimplified.substack.com/p/the-audacious-ask-of-higher-education',
				domain: 'aiedusimplified.substack.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'aiedusimplified.substack.com' },
		],
	},
	{
		id: 'ae408dfe-d9df-5bad-aedb-c3ffa6c54478',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '教師可用的 4 招聊天機器人工作法',
		short_summary: 'ClassTechTips 於 2026-06-09 發布 Easy EdTech Podcast 第 374 集，提出四項教師使用生成式 AI 的作法：先定義學段、目標與輸出格式，再用追問精修，接著用提問引導補足想法，最後透過上傳既有素材快速轉為新教材。對有時間壓力的老師而言，這提供可持續複用的備課流程，核心在於把 AI 從一次輸出改成可反覆調整的教學工具。',
		emoji: '🤖',
		did_you_know: '文章同步標示 Pollzy 贊助，示範 7 年級生命科學情境可直接要求出 5 題複習＋暖場題，並主張可在 30 秒內建立可用的互動提問流程，將工具體驗與課堂需求綁在同一入口。',
		talking_points: [
			'情境化提示：先交代學段、目標與輸出格式，能讓 AI 回應更貼近真實教學需求，避免模糊指令造成大量重複修改。',
			'草稿先行、逐輪修正：作者建議把第一版結果當草稿，透過後續追問再精簡與改稿，降低一次指令就失敗的風險。',
			'反向提問法：採用先讓 AI 提問的流程，讓教師先梳理教學重點，再決定補充條件，最終得到更可操作的內容方向。',
			'素材重用：把既有教材上傳後轉出新格式，可直接延伸為題庫、作業或簡報，適合多班級、跨時段反覆使用。',
			'平台導向線索：文內以 7 年級單元與 30 秒建題流程作示範，搭配贊助代碼與免費試用，顯示工具流程正在走「內容加導流」模式。',
		],
		quote: 'You’ll also hear how to assign a role, refine responses through conversation, use the ask me questions technique, and transform existing materials with file uploads.',
		quote_attribution: 'ClassTechTips, 2026-06-09',
		quote_source_url: 'https://classtechtips.com/2026/06/09/chatbot-strategies-for-teachers-374/',
		quote_source_domain: 'classtechtips.com',
		perspectives: [
			{
				text: '這則內容的價值在於把聊天機器人的運用還原為日常備課流程，教師可直接照做，尤其是多輪追問與素材轉檔的設計，提升了可執行性。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/06/09/chatbot-strategies-for-teachers-374/',
					},
				],
			},
			{
				text: '同時可看到明顯的商業化訊號：教學方法旁即植入平台導流邏輯，使用者若未設定邊界，容易把教學效率提升綁定到特定工具。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/06/09/chatbot-strategies-for-teachers-374/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: 'ClassTechTips 發布 Easy EdTech Podcast 第 374 集，整理出教師可用的四步聊天機器人教學策略。',
			},
		],
		articles: [
			{
				title: '4 Chatbot Strategies for Teachers Who Want Better Results from AI – Easy EdTech Podcast 374',
				link: 'https://classtechtips.com/2026/06/09/chatbot-strategies-for-teachers-374/',
				domain: 'classtechtips.com',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
	{
		id: '4312e0d5-2768-5585-be1b-34cedff5fd96',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: 'NHD作業流程：作文防AI可直接借鏡',
		short_summary: '這篇 2026/06/09 的文章指出，國家歷史日（NHD）在作文競賽中導入「process paper、註釋書目與訪談」三件式提交流程，藉由可追溯學習歷程抑制 AI 代寫。作者提到，這套原本非為防 AI 而設的機制，反而在生成式 AI 時代提升了作品可信度與評量品質，對高中教師可直接轉化為課堂作業與研究寫作流程參考。',
		emoji: '🧩',
		did_you_know: 'NHD 的做法不靠加一層 AI 檢測，而是把「過程紙＋註釋書目＋訪談」列為固定繳件，讓作品驗證從「結果」轉為「研究歷程」。',
		talking_points: [
			'流程即防線：NHD 規定學生需提交 process paper、註釋書目與訪談紀錄，三件式文件可重建研究想法來源與進度，降低成稿可疑空間。',
			'課堂可借鏡：作者仍主張學生作業盡量在課堂完成，將「過程可見」與監看式教學前置，可在不仰賴複雜工具的情況下抑制代寫。',
			'跨層級可行：文中強調這是競賽規則而非通用教學法，但其證據鏈邏輯可搬到歷史、專題、研究報告等多種作業型態。',
			'資源整合路徑：作者建議同時參考 Stephen Fitzpatrick 的比賽制度整理、NHD 專案文件與學生 AI 指引，能快速找到可行的制度化設計版本。',
			'教師價值：新流程不僅防弊，還強迫學生先做研究架構與資料註釋，間接提升文獻處理能力與說明能力，對作文素養也有加乘效果。',
		],
		quote: 'NHD built something practical – a process paper, an annotated bibliography, and an interview – a pedagogical methodology that was never designed for AI but turned out to be perfectly suited to it.',
		quote_attribution: 'larryferlazzo.edublogs.org, 2026-06-09',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/06/09/i-like-these-strategies-for-dealing-with-ai-when-students-are-writing-essays/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '一個觀點偏向流程監督：把寫作活動放回可觀察的課堂脈絡，重點是讓學習歷程成為證據，而非只檢查最後成績，能降低教師判讀負擔與爭議。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/06/09/i-like-these-strategies-for-dealing-with-ai-when-students-are-writing-essays/',
					},
				],
			},
			{
				text: '另一個觀點聚焦競賽制度可移植性：NHD 的既有規則在沒有額外投入的前提下，已形成高可信度的提交鏈條，提示學校可先改流程再談工具控管。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/06/09/i-like-these-strategies-for-dealing-with-ai-when-students-are-writing-essays/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: '發文整理 National History Day 的 AI 因應作法，提出以 process paper、annotated bibliography 與 interview 作為作文投稿與學習歷程驗證機制。',
			},
		],
		articles: [
			{
				title: 'I Like These Strategies For Dealing With AI When Students Are Writing Essays',
				link: 'https://larryferlazzo.edublogs.org/2026/06/09/i-like-these-strategies-for-dealing-with-ai-when-students-are-writing-essays/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-06-09',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
];

const educationResearchStories: Story[] = [
	{
		id: '624d0ad5-03fa-5a41-9d40-b5422516a801',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '提醒電話比金錢補助更能讓校長落實政策',
		short_summary: '這份2026年NBER研究在多明尼加全國推進既有RCT證明有效的校務方案，檢驗是否能放大成制度層級效果。公開摘要指出採隨機對照介入設計，但未揭露樣本數與追蹤時程。結果顯示：部會命令下僅37%學校有驗證落實，遠低於原始RCT的83%；研究證據、金錢誘因及協助支援皆未明顯提升，但提醒式通話可再提高約20個百分點，且在第二個不同專案重測也成立。這意味政策落地瓶頸常在行政注意力而非單純資源與資訊供給。',
		emoji: '📈',
		did_you_know: '提醒通話可使落實率平均提高約20個百分點，但摘要未揭露樣本數與信賴區間，研究精準度需保留空間。注意：本研究為RCT，不宜直接推論因果到所有政策場域。',
		talking_points: [
			'證據類型：全國教育方案落實機制採隨機對照介入試驗；摘要未揭露樣本數與追蹤月數，只能先判讀設計方向。',
			'數據佐證：控制情境下僅37%學校能驗證落實，與原始RCT83%相比，落差46個百分點，問題主要在擴散階段。',
			'主要發現：研究證據回饋、金錢誘因與實作協助都沒有明顯提高落實率，顯示資源補充未必先解決行政瓶頸。',
			'實務流程：以「提醒電話＋截止日回報＋未達標原因記錄」做出固定節奏，可在既有行政系統內低成本導入、持續追蹤。',
			'複驗訊息：第二個不同必辦方案同樣出現提醒效果明顯、監測訊息較小；不過外推前仍需檢核不同學段與學校條件下是否一致。',
		],
		quote: 'Only 37% of control schools verifiably implemented the intervention when ordered to by the Ministry of Education, compared with 83% in the original trial.',
		quote_attribution: 'NBER, 2026-06-11',
		quote_source_url: 'https://www.nber.org/papers/w35291#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究暗示政策擴散的阻力來自行政注意力不足，先設計可追蹤的提醒節點，可能比加碼補助更快改善執行率。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35291#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口在於未揭露樣本規模與分層條件，難以判斷不同規模學校、學段是否同等反應；需更多對照文獻確認外推性。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35291#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Incentives, Evidence, and Reminders for Bureaucrats: Overcoming Barriers to Policy Scale Up',
				link: 'https://www.nber.org/papers/w35291#fromrss',
				domain: 'nber.org',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'df8d7612-698c-5229-9972-2eb1f5144a35',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: 'GLP-1 治療可縮小美國健康落差',
		short_summary: '研究以美國全國代表性成年人口的微擬真模型，搭配 Shapley 值分解，估算 GLP-1 治療對壽命、糖尿病風險與生命品質等終身效益。公開摘要未揭露實際樣本數與追蹤期間，無法直接回推個體資料，但結果顯示效益有明顯族群差異：低於高中學歷者、黑人、西班牙裔與女性獲益較高。對台灣校務與健康教育而言，這提供了「同一干預是否對弱勢族群更有價值」的討論框架，尤其適合放入學生健康政策素養課程討論。',
		emoji: '🧪',
		did_you_know: '研究指出低於高中學歷族群的淨社會價值增加約高於全體14%，GRASA-QALY提高16–17%，壽命延長可比平均高20%。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：本研究為 NBER 工作論文，核心方法是美國成人人口代表性微擬真模型與 Shapley 值分解，非臨床 RCT。',
			'數據佐證：公開摘要未揭露樣本數與追蹤期間；但有量化結果，低於高中學歷族群淨社會價值高14%、GRASA-QALY高16–17%、壽命延長高20%。',
			'教學設計：教師可用同一健康政策案例，帶學生建立「族群分層」表格，輸入教育程度、族裔、性別三欄比較差異與分配優先順序。',
			'課堂操作：先做「研究問題假設」(誰受益最多)、再做「反證檢核」(是否因可近性造成偏誤)，最後用可觀察指標追蹤學習成效與討論品質。',
			'施政啟示：模型結果支持先關注行為體重控制困難者，但研究未提供因果機制與實務條件，校方可先做試點政策而非全面主張。',
		],
		quote: 'GLP-1 therapies for obesity promise substantial health improvements, but little is known about how their benefits vary across socioeconomic and demographic groups.',
		quote_attribution: 'NBER, 2026-06-11',
		quote_source_url: 'https://www.nber.org/papers/w35296#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '延伸研究缺口：單篇工作論文的模型情境仍缺跨設計複驗證；要將「高估益於弱勢」的推論落地，需有實務資料驗證可近性、用藥遵循與長期追蹤。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35296#fromrss',
					},
				],
			},
			{
				text: '政策評讀角度：此研究提供的是再分配訊號，而非單一族群因果主張；若台灣學校要轉用，宜結合在地醫療可近性與社經脈絡，避免把模型效益直接視為現場必然結果。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35296#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: 'NBER 發表工作論文 W35296，提出 GLP-1 治療在不同社經與人口族群間的健康效益可能不均。',
			},
		],
		articles: [
			{
				title: 'GLP-1 Therapy and the Reshaping of Socioeconomic Gradients in Health',
				link: 'https://www.nber.org/papers/w35296#fromrss',
				domain: 'nber.org',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'd66aaa3b-8c43-57ea-9d19-1a723860ba64',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '跨20國RCT顯示家長遠距參與效應偏小但穩定',
		short_summary: '本研究為 NBER 工作論文，整合 82 項隨機對照試驗與 20 餘國資料，觀察以簡訊、電話、App 推動的低成本家長參與。作者將已發表與未發表研究同時納入聯合機率模型，修正發表偏差後估得效應：成績 0.05 SD、成績單 0.07 SD、出席 0.05 SD、入學 0.03 SD。對台灣學校而言，家長參與可作為可加分作法，但效應屬小幅、異質，需以試點資料再驗證，再決定是否擴大。',
		emoji: '🧪',
		did_you_know: '研究模型顯示，部分情境下不顯著結果仍有高機率被寫作出版，若只看正向發表結果，容易高估家長介入成效；注意：本研究為統合型 meta-analysis，不宜直接推論因果。',
		talking_points: [
			'證據類型：此為工作論文型的 RCT 統合研究，整併 82 則隨機對照試驗，並加入未出版試驗清冊，採聯合機率模型同時計算發表機率與效果分布，降低選擇偏誤。',
			'數據佐證：校正後效應為成績 0.05 SD、成績單 0.07 SD、出席 0.05 SD、入學 0.03 SD；摘要未揭露每個試驗的個別樣本數、追蹤週期與變項標準差。',
			'可行做法：原文聚焦低成本遠距工具，教師可先從每週固定 1 則簡訊+1 次電話或 App 回報開始，與家長共同訂「作業回傳、出席提醒、學習節奏」三個最小目標。',
			'老師下一步怎麼教：可用小規模AB方案，班級 A 每週 2 次訊息、班級 B 每週 1 次訊息，持續紀錄出席率、作業回收、月考變化，三週後以校內指標比對成效與可持續性。',
			'不要誤讀：研究指出部分不顯著結果仍會被出版，且較大樣本反而估到較小潛在效應，故不能把 0.05 SD 當作立刻可見巨大成效；導入前先保留完整資料流程，避免只看表面增益。',
		],
		quote: 'Bias-corrected effects are 0.05 SD for test scores, 0.07 SD for grades, 0.05 SD for attendance, and 0.03 SD for enrollment.',
		quote_attribution: 'NBER, 2026-06-11',
		quote_source_url: 'https://www.nber.org/papers/w35299#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '該研究的核心價值不是放大單筆顯著性，而是把未公開研究納入模型，看出發表偏差對平均效果的影響。對校務決策端，這可當作導入前先做風險盤點，而非直接下達硬性指標。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35299#fromrss',
					},
				],
			},
			{
				text: '因僅有單篇研究，不能據此形成跨情境共識；摘要顯示仍有不顯著結果高機率被發表與樣本規模影響估值，延伸研究缺口在於不同年齡層、家庭型態與教材情境下的異質效果。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35299#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: 'NBER 公布 Working Paper 35299，提出家長遠距介入研究的發表偏差校正結果。',
			},
		],
		articles: [
			{
				title: 'Characterizing the File Drawer: Evidence from a Meta-Analysis of Parent-Interventions Around the World',
				link: 'https://www.nber.org/papers/w35299#fromrss',
				domain: 'nber.org',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'caa7a352-f959-5a72-a296-4dd443b31744',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '美國 SSDI 申請率回落：低中技能男性工作意願上升',
		short_summary: '本研究以美國社會安全殘障保險（SSDI）行政資料為基礎，透過量化分解與補充因果分析，追查 1990 年代成長後 2013 年起的入保轉弱現象。研究比較申請率、核准率、人口特徵、資格條件與退出機制，指出整體下滑主要受申請率下降驅動，且以低到中技能男性最明顯。公開摘要未揭露樣本數與效果量，但提示「可就業性改善」可能是行為轉換的關鍵背景，對教學可用來訓練學生判讀社會制度資料。',
		emoji: '📉',
		did_you_know: '研究指出，2013 年後 SSDI 總體下降可先由申請率下降解釋，且效應集中於低中技能男性群體；注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文採量化行政資料分解，並搭配因果辨識分析，主要比較申請率、核准率與人口組別。',
			'數據佐證：公開摘要未揭露樣本數與效果量；目前僅能確認 2013 年後 SSDI 入保下降，主成分為申請率下滑。',
			'跨群組訊號：低到中技能男性在 2010 年代後明顯拉低整體 SSDI 入保，該群體同時顯示較高就業參與。',
			'下一步教學1：在公民與社會議題課程，用表格列出「政策口號—可觀察數據—行為結果」，讓學生練習拆解制度效果。',
			'下一步教學2：安排一個 4 週任務，要求學生用同一指標做前後對照，記錄申請率、就業率與保險領取率，寫出兩種可能機制。',
		],
		quote: 'We use detailed administrative data to quantify the contributions of various factors to trends in SSDI enrollment, focusing especially on the decline in the 2010s.',
		quote_attribution: 'NBER, 2026-06-11',
		quote_source_url: 'https://www.nber.org/papers/w35300#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '訊息指向行為面：低中技能男性改變申請決策，可能連動勞動市場改善與生計替代路徑，適合放在政策評估課中的制度互動案例。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35300#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口：目前僅見單篇工作論文，尚缺跨來源複驗。台灣課室可先作方法示範，不可直接將結論外推為因果真相。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35300#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Explaining the Historical Rise and Recent Decline in Social Security Disability Insurance Enrollment',
				link: 'https://www.nber.org/papers/w35300#fromrss',
				domain: 'nber.org',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: '49b51b45-0794-52ac-a515-c2d4e09216d3',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: 'AI 聲學分析揭密寄養家庭親子語言與幼兒發展',
		short_summary: 'NBER 工作論文 W35302 以芝加哥兩場家訪實驗為核心，整合超過 600 小時家長-幼兒對談錄音與評量資料，運用 AI 聲學訊號模型萃取可量化的親職語音特徵，檢驗其對幼兒語言與社會情緒發展的關聯。研究透過實驗分派與自然變異，檢視兩條因果路徑及社經調節機制，結果顯示介入可提升家長對話品質與幼兒語言成果，第二場另見社會情緒進步，但成效在不同家庭條件下不一致。此設計對台灣學前家庭支持值得參考，因為它把「家長溝通」轉成可追蹤指標，便於比較不同資源情境的服務方案。',
		emoji: '🧪',
		did_you_know: '摘要指出介入與語音特徵改善同時出現在語言與社會情緒指標，但未揭露家庭數與效果量。注意：本研究為田野干預研究，不宜直接推論因果',
		talking_points: [
			'證據類型：結合 AI 聲學訊號模型與兩場芝加哥家訪田野實驗，並搭配實驗分派與自然變異，屬準實驗與機器學習交叉研究。',
			'數據佐證：資料整合超過 600 小時家長互動錄音與兩項家庭追蹤；公開摘要未揭露家庭數、追蹤期間、效果量與信賴區間。',
			'老師下一步：建立每週「對話回合」流程，要求家長回報 5-10 分鐘錄音，教師以提問次數與回應比例做初步介入指標。',
			'老師下一步：先示範提問-等待-追問的互動腳本，再觀察孩子是否主動回應與重述重點，逐步回饋給家長可調整句型。',
			'老師下一步：每月對照前後語言與情緒表現，並同步記錄家庭壓力與學習資源可近性，避免將進步僅歸因於家長語音訓練本身。',
		],
		quote: 'Further, we find that it also increases children’s language skills in both experiments, as well as socioemotional skills in the second experiment.',
		quote_attribution: 'NBER, 2026-06-11',
		quote_source_url: 'https://www.nber.org/papers/w35302#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: 'AI 讓親職語言可量化，對教育機構有監測管理價值；但研究同時提醒社經背景會改變機制，代表同一做法在不同家庭未必有同等效果。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35302#fromrss',
					},
				],
			},
			{
				text: '目前僅一篇場域研究，難以成為政策因果結論；對台灣決策者而言應先當作延伸研究缺口，需補做本地對照與效應量揭露後再考慮制度化。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35302#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: 'NBER 發布 W35302，報告以 AI 聲學模型分析家長語音並結合兩場芝加哥家訪實驗，驗證家庭語言介入與幼兒發展關係。',
			},
		],
		articles: [
			{
				title: 'Leveraging Artificial Intelligence and Field Experiments to Explore Novel Features of Parental Speech and Foster Child Development',
				link: 'https://www.nber.org/papers/w35302#fromrss',
				domain: 'nber.org',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'b3bcd317-5432-5dc1-a5ad-ba61aab0e9de',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國6/10撥款案：教育部砍710億與弱勢資源先後',
		short_summary: '對台灣學校管理者而言，美國這則預算爭議提醒：先決定預算刪減順序，會直接影響前線學生支援與行政安排。美國眾院撥款委員會建議2027財政年度教育部編列71 billion美元，低於前一年79 billion美元，且在弱勢學校Title I補助（16.5 billion）大幅下修前提下，先把風險推到低收家庭學校。面對裁減時，台灣也要先想清楚哪些服務是制度安全網而非可議價項目。',
		emoji: '💸',
		did_you_know: '同案中，特朗普行政團隊要求刪除並整併的若干IDEA計畫未被完全採納，部分特教相關資源仍保留，顯示預算縮編不等於全面撤除，重點在「刪誰」而非是否全砍。',
		talking_points: [
			'總量先下修：教育部建議經費從79 billion降到71 billion美元，幅度約10%，先壓總量後再精算各項補助。',
			'弱勢補助受壓：Title I建議16.5 billion美元，較去年少近2 billion美元，DeLauro推估可能少30,000名教師需求。',
			'特教仍保底：IDEA特教補助改為15.5 billion美元，外加4600萬美元增加，低於同檔案中低收族群補助的縮水幅度。',
			'英語支援被切：Office of English Language Acquisition前一年有890 million美元，本次建議直接歸零，顯示語言支援最先被視為可壓縮。',
			'資源重排而非一刀切：特許學校增500 million美元，職訓補助加10 million美元，閱讀創新再加10 million美元，21世紀社區學習中心維持1.3 billion美元。',
		],
		quote: 'These cuts are an attempt to undo the progress we have made, to cut off access to these opportunities.',
		quote_attribution: 'K12 Dive, 2026-06-10',
		quote_source_url: 'https://www.k12dive.com/news/house-committee-advances-fy27-plan-to-cut-ed-dept-by-10/822462/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '委員會主席Aderholt將焦點放在債務壓力與財政紀律，認為在高槓桿環境下先減少自由支出是必要治理，並主張保住最低程度學生支持。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/house-committee-advances-fy27-plan-to-cut-ed-dept-by-10/822462/',
					},
				],
			},
			{
				text: 'DeLauro則反擊說：縮減標的集中在低收入學校Title I，會讓弱勢學生較難取得補助與人力，等於把公共教育已累積的可近性成果往後退。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/house-committee-advances-fy27-plan-to-cut-ed-dept-by-10/822462/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: '美國眾院撥款委員會在6月10日通過FY27教育部預算建議版，將建議編列下修至71 billion美元。',
			},
		],
		articles: [
			{
				title: 'Ed Dept would see 10% budget cut under House committee plan',
				link: 'https://www.k12dive.com/news/house-committee-advances-fy27-plan-to-cut-ed-dept-by-10/822462/',
				domain: 'k12dive.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'e6c3909f-2211-5a27-b666-c11c437f1cc5',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '國會聽證聚焦學區性別政策與家長權益',
		short_summary: '美國眾議院於 2026-06-10 開啟三小時聽證，邀請芝加哥、維吉尼亞 Loudoun 與舊金山三位學區主管，核心爭點是學生代名詞與跨性別轉換政策是否剝奪家長參與與學生隱私保障。對台灣學校管理者而言，這件事的提醒是：當校務議題走向政治化，真正能守住校園穩定的不是口號，而是依法制定、可被查核的溝通與申訴機制。',
		emoji: '⚖️',
		did_you_know: '此場聽證由美國眾議院教育與勞動委員會主辦，持續三小時，主題為「Breaking Trust: Attacks on Parental Rights, Inappropriate Content, and Legal Abuses in America’s Schools」，但議題焦點仍集中在學生代名詞、性別轉換與夜宿安排政策。',
		talking_points: [
			'議題失焦警訊：聽證表面關注閱讀與數學、學校安全，但程序時間仍大量投入代名詞與性別政策討論，顯示校務議題可因政治框架被重寫。',
			'三方受訪者：芝加哥、Loudoun County、舊金山三位學區主管皆說明政策依法執行並保留家長申訴，證明家長議題可透過法制程序而非只靠價值辯論處理。',
			'外部稽核壓力：文章指出特朗普政府已對三區展開 Title IX / Title VI 稽核，意味外部檢視可能與國會質詢並行，地方學校需要同時準備法規與執行證據。',
			'夜宿規範爭點：議員追問夜宿安排時關鍵轉向到「生理男性」與「生理女性」同寢疑慮，學區回應採轉換學生逐案與資格審查，程序設計成為防爭議關鍵。',
			'台灣可借鏡：若政策牽涉學生身分與權益，學校應先定義決策授權、家長通知時點與申訴期限，否則衝突上升時最易被政治化而非專業化管理。',
			'制度穩定需求：三位主管皆提及「依法與地方規範」，代表學校面對敏感議題時，程序可預見性比口頭共識更能降低長期風險，亦有助維持教師執行力。',
		],
		quote: 'When classrooms become vehicles for political or ideological agendas, rather than places of learning, Congress has a responsibility to ask questions.',
		quote_attribution: 'K12DIVE, 2026-06-10',
		quote_source_url: 'https://www.k12dive.com/news/school-culture-wars-come-to-capitol-hill/822560/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '偏保守觀點將聽證定調為對學校文化戰的矯正，核心在於家長權益與課堂價值導向，關切重心在政策是否『排除家長』與突破傳統隱私邊界。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/school-culture-wars-come-to-capitol-hill/822560/',
					},
				],
			},
			{
				text: '偏民主院觀點則要求議程回到閱讀、數學成效與校園安全，認為若在議事中過度放大身分政治，將消耗學校治理資源並擾動改革與監督節奏。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/school-culture-wars-come-to-capitol-hill/822560/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: '美國國會教育與勞動委員會舉行三小時聽證，邀請芝加哥、Loudoun 與舊金山學區主管，就學生代名詞、跨性別轉換與夜宿政策回答質詢。',
			},
		],
		articles: [
			{
				title: 'School culture wars come to Capitol Hill',
				link: 'https://www.k12dive.com/news/school-culture-wars-come-to-capitol-hill/822560/',
				domain: 'k12dive.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'f550af36-1ab8-5af0-9bff-396492aa1fda',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '教學流程',
		title: '跨學段減螢幕：手寫與動手課可借鏡',
		short_summary: '對台灣校長與教務主管而言，美國兩所學校在 2026 年做了可借鏡的管理實驗：先縮減課堂螢幕時間，再重設作業與評量流程。McPherson 中學1月起改收回 Chromebook，僅保留作業與專題借用；Floyd M. Jewett 小學2月後也大幅移除 Chromebook 與 iPad，轉回書本、閱讀與手作活動。這樣的做法不在於全面禁科技，而是用校務流程守住學習專注與學生心理健康，供台灣學校在同樣面對注意力、閱讀與福祉壓力時參考。',
		emoji: '🧠',
		did_you_know: 'McPherson 英文課曾有約半數學生在可手打可手寫兩擇一時改選手寫論文；而 Floyd M. Jewett 所在學區表示，該校 2024-25 年3到5年級在州英語能力測驗中有超過65%不是熟練，之後就轉向撤除大部分平板與 Chromebook。',
		talking_points: [
			'政策起點：McPherson 在1月起要求學生上課前繳回 Chromebook，課堂改採保留但可借用的模式，降低即時線上依賴。',
			'評量修正：兩校都由資深教師主導重設作業規則，改看「能展現深度理解」的任務，不再把每日小任務全部放到線上。',
			'成效訊號：McPherson 英文課半數學生選擇手寫論文，教師回報課堂更專注，且線上溝通衍生的負向互動有下降傾向。',
			'學段修補：Floyd M. Jewett 指出3到5年級超過65%學生在ELA測驗非熟練後，2月開始撤除大多數平板與iPad，回復朗讀與觸覺教材。',
			'治理示警：兩校都沒有硬性禁止科技，而是將設備權限從『日常預設』改為『作業工具』，對台灣學校是可落地的設備治理模型。',
		],
		quote: 'They’re developing systems of, what are the assignments that demonstrate deeper knowledge? And giving grades on those, rather than all of the small, daily assignments.',
		quote_attribution: 'K12DIVE, 2026-06-10',
		quote_source_url: 'https://www.k12dive.com/news/how-2-schools-are-dialing-back-screen-time/822466/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '第一個取向是教務治理順序：先改設施使用規範與評量機制，再談替代教學作法；這讓老師可接續既有教材與行政流程，而非在政策一出台時才臨時補位。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/how-2-schools-are-dialing-back-screen-time/822466/',
					},
				],
			},
			{
				text: '第二個取向是識字優先：Floyd M. Jewett 以3到5年級識字結果為啟動條件，先把螢幕時間讓給閱讀與老師帶讀；這是以資料導向做跨學段調整，而非對所有年段一律壓縮。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/how-2-schools-are-dialing-back-screen-time/822466/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-01-01',
				date_iso: '2026-01-01',
				content: 'McPherson Middle School 開始調整課室作法，將學生於學期內繳回 Chromebook，改以可借用模式配合作業與專案需求。',
			},
			{
				date: '2026-02-01',
				date_iso: '2026-02-01',
				content: 'Floyd M. Jewett 小學自2月起將課堂裡 Chromebook 與 iPad 大幅撤出，改回書本、朗讀與其他實體教材教學。',
			},
		],
		articles: [
			{
				title: 'How 2 schools are dialing back screen time',
				link: 'https://www.k12dive.com/news/how-2-schools-are-dialing-back-screen-time/822466/',
				domain: 'k12dive.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '9d1fce70-d19a-5278-a659-6bdb45e7d576',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '研究證據',
		title: '作業治理先改品質，別被10分鐘規則綁住',
		short_summary: '美國研究整理指出，學校在訂定作業規範時，核心問題不是壓多久，而是作業是否能對應學習目標並提升參與。文章認為「每年級每晚10分鐘」缺乏穩健證據支撐，對台灣學校管理者而言，這件事可直接轉成治理提醒：作業政策不必只比對時間長短，而應用可操作指標檢核作業目的、指導清楚度與差異化設計，否則學生動機與完成率反而可能下降。',
		emoji: '📝',
		did_you_know: '文中提到的「每年級每夜10分鐘」多數是延伸推估，非直接研究結論；較被支持的是高中生每日總量約60至90分鐘、低年級約30至90分鐘以內。',
		talking_points: [
			'品質先行：多位研究者認為作業是否有效，不在數量，而在任務是否對齊學習目標、指示是否清楚與可執行，才能提升投入。',
			'10分鐘規則存疑：所謂每年級每夜10分鐘主要被視為推估值，並非有力研究共識，不宜直接立為一刀切政策。',
			'高中上限參考：研究建議高中生日常作業總量可參考60至90分鐘，或每科20至30分鐘，亦非每科每天必有。',
			'低學段彈性：低年級學童建議總量約30至60分鐘，重點是理解性與可獨立完成，而非硬灌更多題量。',
			'台灣可監測：學校若要評估作業治理，可改用完成率、回饋使用率、學生是否覺得有幫助等指標，而非只追求表面工時。',
		],
		quote: 'The point is not about the “right number of minutes,”',
		quote_attribution: 'K12dive, 2026-06-10',
		quote_source_url: 'https://www.k12dive.com/news/the-homework-conundrum-quality-or-quantity/822469/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '政策面可讀到的是治理難題：硬性時數便於量化，但容易掩蓋不同年齡與課目差異；改為品質指標有助行政與教師共同協作。',
				sources: [
					{
						name: 'K12dive',
						url: 'https://www.k12dive.com/news/the-homework-conundrum-quality-or-quantity/822469/',
					},
				],
			},
			{
				text: '研究面提醒要守住證據邊界：以高三研究外推到其他年段會有誤差，台灣若要制定作業規範，應先確認對象與限制條件。',
				sources: [
					{
						name: 'K12dive',
						url: 'https://www.k12dive.com/news/the-homework-conundrum-quality-or-quantity/822469/',
					},
				],
			},
			{
				text: '學習現場角度更著重激勵：卡關學生常因覺得作業無意義而停做，品質設計不好會放大作業流失風險，治理需兼顧公平與支持需求。',
				sources: [
					{
						name: 'K12dive',
						url: 'https://www.k12dive.com/news/the-homework-conundrum-quality-or-quantity/822469/',
					},
				],
			},
		],
		articles: [
			{
				title: 'The homework conundrum: Quality or quantity?',
				link: 'https://www.k12dive.com/news/the-homework-conundrum-quality-or-quantity/822469/',
				domain: 'k12dive.com',
				date: '2026-06-10',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'd373872d-06e3-5b62-aae1-84bc61d2f366',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國補助金新規：E-Verify列入查核條件',
		short_summary: '美國白宮行政管理暨預算局提出新規，要求聯邦補助金受款機構與再受款方在聘用員工、承包商時加入E-Verify身份查核，作為既有就業資格要求的補強；規則於5月29日公布，並規定7月13日截止意見。對台灣教師與學校行政而言，重點不是工具本身，而是補助管理要提前設計人事、承攬與稽核紀錄流程，否則在審核期才補資料會失去主動權。',
		emoji: '🧾',
		did_you_know: '提案文件特別說明不改動DHS既有例外與限制；另外，E-Verify結果通常3到5秒內就能回報，但並不等於不會被再稽核。',
		talking_points: [
			'時程窗口：草案5/29公布、7/13截止意見，政策轉向只給約6週回應期，台灣機構面對補助規定改變時也需先行做程序備援。',
			'受管範圍：規則不只鎖定主申請單位，也包含sub-recipients再受款方，學校外包與服務供應鏈都可能被一併納入查核。',
			'查核條件：草案將受僱員工與承包商資格驗證納入聯邦獎助執行流程，讓人事資料與補助履行條件綁在同一條件序列。',
			'制度邊界：文件重複強調不改變DHS既有例外與法律限制，實務爭點可能集中在身份狀態變動與資料留存紀錄。',
			'執行提醒：文章提及有企業參與E-Verify仍遭執法機構查核，顯示台灣若導入類似機制，關鍵仍在可追蹤流程與異常時點警示。',
			'學校借鏡：若台灣未來補助條件也要求身份與聘僱稽核，校務端須先定義誰有更新權、多久複查、如何留存證據才不延誤。',
			'資料風險：E-Verify原則上強化前端查驗，但未必涵蓋所有法規責任，缺少可稽核證據鏈時仍可能在審查或稽核時加碼問責。',
		],
		quote: 'The rule would provide an “additional safeguard” to existing employment eligibility requirements.',
		quote_attribution: 'White House Office of Management and Budget, 2026-05-29',
		quote_source_url: 'https://www.k12dive.com/news/feds-propose-mandatory-e-verify-participation-federal-grant-recipients/822384/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'OMB的治理邏輯是把身份合規放到補助授權前端，降低政府認列款項時的不確定性，對台灣也提示「補助核銷」可同步檢核人事風險。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/feds-propose-mandatory-e-verify-participation-federal-grant-recipients/822384/',
					},
				],
			},
			{
				text: '執行與法務端提醒：雖有3到5秒即時回覆，但E-Verify未改變稽核本質，未來爭議常來自身份狀態異動與資料保存，而非僅查一次。這是對「只要導入工具就萬無一失」的反張力。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/feds-propose-mandatory-e-verify-participation-federal-grant-recipients/822384/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: '多個美國聯邦機關在聯邦公報公布提案，擬將E-Verify納入聯邦補助金與相關獎助受款人名單管理。',
			},
			{
				date: '2026-07-13',
				date_iso: '2026-07-13',
				content: '該提案草案的公眾意見徵詢截止日，啟動後續規則定稿流程。',
			},
		],
		articles: [
			{
				title: 'Federal agencies propose mandatory E-Verify participation for federal grant recipients',
				link: 'https://www.k12dive.com/news/feds-propose-mandatory-e-verify-participation-federal-grant-recipients/822384/',
				domain: 'k12dive.com',
				date: '2026-06-10',
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
