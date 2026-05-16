import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-05-16 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-1',
		cluster_number: 1,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		editorial_lens: '資安信任',
		title: 'Meta 將兒少帳號保護前置到預設設定',
		short_summary: 'Meta 5 月 15 日宣布，Instagram 青少年帳號以預設適齡保護為核心，並規劃與 Facebook、Messenger、Threads 同步啟用。18 歲以下帳號預設採最嚴格模式，家長可再加開「限制內容」，並搭配超過 60 分鐘提醒與晚間 22 點到 07 點靜音。未來數月該功能也將延伸到台灣 Facebook，並由衛福部、數位發展部、NCC、iWIN 合作宣導，顯示兒少監護從臨時稽核轉向平台預設權限設計，降低家庭端的手動監護成本。',
		emoji: '🛡️',
		did_you_know: 'Meta 指出 18 歲以下帳號會預設最嚴格，並僅開放適齡 13 歲以上內容；若家長再啟用「限制內容」，可再加一道內容篩選，屬於以系統規則取代家長逐則查核的做法。',
		talking_points: [
			'預設保護先行：18 歲以下用戶在 Meta 旗下帳號一律先套上最嚴格設定，將安全機制前置到登入流程。',
			'家長可加碼控管：Instagram 新增「限制內容」作為進階開關，未來數月同步擴及台灣 Facebook，保護條件更完整。',
			'時間管理也入場：超過 60 分鐘即提醒，晚間 22 點到 07 點進入睡眠模式，直接用時間規則減少夜間干擾。',
			'跨部會推廣：活動邀請衛生福利部、數位發展部、NCC、iWIN、台灣展翅協會，共同做家長認知與工具導向。',
			'禁令警戒邏輯：Meta 認為若只靠全面禁令，青少年可能轉向小型平台，監管與安全機制可能反而更薄弱。',
		],
		quote: '凡是 18 歲以下用戶，在 Meta 旗下平台的帳號設定會預設為最嚴格，提升家長的安心感與安全感，減少家長需直接干預的負擔。',
		quote_attribution: 'Meta 亞太區產品公共政策總經理，2026-05-15',
		quote_source_url: 'https://www.inside.com.tw/article/41306-meta-tightens-browsing-restrictions-for-instagram-teen-accounts-as-facebook-follows-suit',
		quote_source_domain: 'inside.com.tw',
		perspectives: [
			{
				text: 'INSIDE 的報導將焦點放在控制權移轉：從「家長手動守護」改成「平台預設與可選強化」，顯示平台正在把兒少治理抽象為可重複的產品設計流程。',
				sources: [
					{
						name: 'INSIDE',
						url: 'https://www.inside.com.tw/article/41306-meta-tightens-browsing-restrictions-for-instagram-teen-accounts-as-facebook-follows-suit',
					},
				],
			},
			{
				text: 'Technews 將延伸到台灣 Facebook 的時間點拉出來，顯示議題已不只是 IG 單平台更新，而是跨服務域的時程化佈署，對家庭監護可預期性更高。',
				sources: [
					{
						name: 'TechNews',
						url: 'https://technews.tw/2026/05/15/ig-implements-stricter-browsing-restrictions-teen-accounts-extending-facebook-taiwan/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'Meta 在台舉辦「適齡保護．安心探索：共同守護青少年網路安全」活動，宣布青少年帳號預設安全機制，並同步說明未來數月將把「限制內容」與相關功能延伸到台灣 Facebook。',
			},
		],
		articles: [
			{
				title: 'Meta 強化 IG 青少年帳號瀏覽限制，臉書同步跟上',
				link: 'https://www.inside.com.tw/article/41306-meta-tightens-browsing-restrictions-for-instagram-teen-accounts-as-facebook-follows-suit',
				domain: 'inside.com.tw',
				date: '2026-05-15',
			},
			{
				title: 'IG 青少年帳號祭更嚴格瀏覽限制，台灣擴及 Facebook',
				link: 'https://technews.tw/2026/05/15/ig-implements-stricter-browsing-restrictions-teen-accounts-extending-facebook-taiwan/',
				domain: 'technews.tw',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'inside.com.tw' },
			{ name: 'technews.tw' },
		],
	},
	{
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'OpenAI 開放 ChatGPT 個人財務預覽功能',
		short_summary: 'OpenAI 於 2026-05-15 在美國先對 ChatGPT Pro 用戶開放新版個人財務預覽，支援網頁與 iOS 串接帳務。用戶可透過 Plaid 連上 12,000 家以上金融機構，並新增目標與生活脈絡形成「財務記憶」，讓對話可直接對應支出、訂閱、到期付款與資產表現。若後續擴大到 Plus，個人理財將從多工具手動整併，轉為情境化、可持續的 AI 輔助工作流程。關鍵在於把資料匯集與追蹤成本壓低，但仍保留專業判斷邊界。',
		emoji: '💳',
		did_you_know: '原文指出每月逾 2 億名使用者會在 ChatGPT 詢問預算或投資問題；本次預覽把這類需求直接延伸到可連接金融帳務的情境化流程，先在高價值群體中試行。',
		talking_points: [
			'先行試行機制：OpenAI 先僅對美國 Pro 用戶開放金融整合，並在實際使用後再擴充到 Plus，表示高風險場景先做小規模驗證。',
			'金融連接規模：本次支援超過 12,000 家金融機構，並透過 Plaid 提供帳務同步，預期可一次整併卡片、投資、貸款與付款資料。',
			'情境化記憶功能：使用者可輸入「買車存款」等目標，系統將上下文保存於 Financial memories，後續詢問能直接沿用先前脈絡。',
			'儀表板化操作：連結完成後可集中查看資產表現、支出、訂閱、即將到期款項，將原本散在多來源的核對過程壓成單一對話工作台。',
			'人工授權前提：雖引入上下文代理能力，官方仍明示非專業理財建議取代品，負債與重大投資仍需人為最終確認。',
		],
		quote: 'We’re starting with a preview to a smaller group so we can learn from real-world use, improve the experience, and expand thoughtfully.',
		quote_attribution: 'OpenAI, 2026-05-15',
		quote_source_url: 'https://openai.com/index/personal-finance-chatgpt',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '產品面呈現「先試行、再擴張」而非全面上線，對金融與個資敏感工具而言更像風險可控的資安治理策略：先以高價值群體建立行為模型與回饋。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/personal-finance-chatgpt',
					},
				],
			},
			{
				text: '此功能的實際改變是流程化：從過去手動整理帳務轉為 AI 協作代理，使用者可把目標、情境和帳務綁在同一對話，顯著提高持續理財監控效率。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/personal-finance-chatgpt',
					},
				],
			},
			{
				text: 'OpenAI 強調非替代專業建議，突顯模型能力與人類責任的分工新版本：AI 負責整理與建議，關鍵決策仍維持人類最終授權，降低自動化誤判成本。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/personal-finance-chatgpt',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'OpenAI 於美國推出 ChatGPT 個人財務預覽版，先對 Pro 用戶開放，整合 12,000+ 金融機構並支援 web/iOS 操作。',
			},
		],
		articles: [
			{
				title: 'A new personal finance experience in ChatGPT',
				link: 'https://openai.com/index/personal-finance-chatgpt',
				domain: 'openai.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'GPT-5.5 讓 Databricks 文件代理更穩定',
		short_summary: 'OpenAI 公佈 Databricks 已將 GPT-5.5 上線到企業代理工作流。Databricks 用其 OfficeQA Pro 進行驗證，測試場景含掃描 PDF、legacy 舊檔與長文件，這類情境一旦欄位解析失準就會在後續步驟放大風險。GPT-5.5 成為首個在 OfficeQA Pro 破 50% 準確率的模型，且較 GPT-5.4 錯誤率下降 46%，讓企業可把原本高度依賴人工修正的文件流程，轉為較可控的代理化流程。',
		emoji: '🧭',
		did_you_know: 'Databricks 在 OfficeQA Pro 測到 GPT-5.5 首次突破 50% 準確率，且比 GPT-5.4 降低 46% 錯誤，改善的重點集中在掃描與舊式文件的解析品質。',
		talking_points: [
			'準確率門檻：Databricks 公開的 OfficeQA Pro 成績中，GPT-5.5 成為首個破過 50% 準確率的版本，顯示企業級代理任務可再往高難度自動化推進。',
			'錯誤率斬減：與 GPT-5.4 比較，GPT-5.5 在同一基準下錯誤下降 46%，等於原本在文件流程裡要補救的失誤更少。',
			'先修文件痛點：OfficeQA Pro 包含掃描 PDF、legacy 檔與長文脈案例，代表 GPT-5.5 先從最容易失敗的資料格式做起，降低後段任務連鎖風險。',
			'串接方式升級：模型透過 AI Unity Gateway 佈署，供 AgentBricks 與 Agent Supervisor API 使用，讓解析、檢索、執行可在同一代理鏈條裡協同。',
			'節點效率提升：Databricks 指出過去 GPT-5.4 常出現無謂搜尋繞路，5.5 在檢索與多步驟完成率改善後，代理行為更集中於必要步驟。',
		],
		quote: 'Compared to earlier models, GPT-5.5 was more reliable at retrieving relevant context and completing complex workflows without additional supervision.',
		quote_attribution: 'Databricks 發言人，2026-05-15',
		quote_source_url: 'https://openai.com/index/databricks',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'Databricks 的主軸是可維運性：企業文件代理只要一個欄位解析失誤就會累積影響，GPT-5.5 的穩定性提升可直接減少這種連鎖代價。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/databricks',
					},
				],
			},
			{
				text: 'OpenAI 的訊號偏向平台化：透過 AI Unity Gateway 對接 AgentBricks 與 Supervisor API，模型能力不只成為單一 API 呼叫，而是可被嵌入組織工作流。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/databricks',
					},
				],
			},
			{
				text: '對企業採行者來說，重點已不是『改一個模型』而是『怎麼設流程』；即便效能升級 46%，仍需維持人機覆核與權限治理避免代理越界。',
				sources: [
					{
						name: 'Databricks',
						url: 'https://openai.com/index/databricks',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'OpenAI 公告 Databricks 將 GPT-5.5 推向企業代理工作流，並以 OfficeQA Pro 展示解析、檢索與多步驟執行能力。',
			},
		],
		articles: [
			{
				title: 'Databricks brings GPT-5.5 to enterprise agent workflows',
				link: 'https://openai.com/index/databricks',
				domain: 'openai.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'Sea 以 Codex 改寫研發流程',
		short_summary: 'Sea 在 2026/5/14 的訪談中表示，工程組織已全面導入 Codex，週活躍率達 87%，顯示 AI 已從輔助工具轉為日常工作流程的一環。Sea 指出，關鍵不在輸入速度，而是讓 AI 幫助理解龐大微服務與舊系統脈絡，縮短跨服務判讀時間，並將工程師的認知資源拉回架構設計與產品決策。對高碎片化的亞太市場，這代表研發交付與維運韌性可更快回應市場變動。',
		emoji: '🤖',
		did_you_know: 'Sea 內部調查顯示，凡是給 Codex 打 4～5 分的開發者中，有 73% 願意推薦給同事。Sea 也將用法重心從純補全，轉到需求推理、跨服務脈絡理解與 CI/CD 併行作業，表示 AI 價值正從「輸入效率」轉向「流程決策」。',
		talking_points: [
			'導入規模：Sea 顯示 Codex 已推進到整個工程組織，週活躍率到 87%，代表不是小規模試點，而是進入持續運作的日常流程。',
			'認知瓶頸：Sea 認為大型微服務中的主要阻塞不是打字，而是追踪依賴與理解歷史邏輯，Codex 透過情境語意協助補齊上下文。',
			'角色轉移：受訪者指出，工程師使用 Codex 的改變在於「想得更好」，將更多心力從基礎編修轉向架構設計與產品創新。',
			'採用信號：在給 Codex 4～5 分的開發者裡，73% 願意向同事推薦，顯示組織內部有可持續的同儕擴散動能。',
			'流程代理化：Sea 透露 AI 已逐步進入 CI/CD 環節，參與需求推理、提案測試導向實作與回報，接近可追溯的半自動化工程鏈條。',
		],
		quote: 'The most profound shift is realizing our developers are using Codex to \'think better\', not just type faster.',
		quote_attribution: 'OpenAI, 2026-05-14',
		quote_source_url: 'https://openai.com/index/sea-david-chen',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的敘事將 Codex 放在流程方法學上，重點是把認知延展變成可重複執行的代理化作業，而不只是把寫程式當成輸入加速的競賽。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/sea-david-chen',
					},
				],
			},
			{
				text: 'Sea CPO 的觀點偏組織治理：若 AI 不能縮短跨服務脈絡理解時間，工程複雜度仍高；能否穩定成為知識引擎，直接影響亞太高碎片市場的交付速度與一致性。',
				sources: [
					{
						name: 'Sea（透過 OpenAI 專訪）',
						url: 'https://openai.com/index/sea-david-chen',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-14',
				date_iso: '2026-05-14',
				content: 'OpenAI 發布 Sea 訪談，Sea 對外闡明已在工程組織部署 Codex 並列出 87% 週活躍與代理化流程導入重點。',
			},
		],
		articles: [
			{
				title: 'Sea\'s View on the Future of the Future of the Agentic Software Development with Codex',
				link: 'https://openai.com/index/sea-david-chen',
				domain: 'openai.com',
				date: '2026-05-14',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'Codex 手機化預覽上線：遠端協作隨身接力',
		short_summary: 'OpenAI 宣佈將程式代理 Codex 以預覽版加入 ChatGPT 行動 App，使用者可在手機連到筆電、Mac mini 或遠端環境，隨時查看執行緒、測試結果與程式差異，並回覆問題、核准指令。這把原本必須回到電腦前才可接手的長任務改為跨裝置接力，對長時段自動化工作影響在於節奏從「一次下令」轉向「持續可裁決」，可降低任務中斷與返工成本。',
		emoji: '📱',
		did_you_know: 'OpenAI 提到 Codex 每週使用者已超過 400 萬人，並在手機端同步 screenshots、terminal output、diff 與 test results；同時以 secure relay 將受信任機器連上多設備而不把檔案與憑證直接外曝。',
		talking_points: [
			'隨身接棒：Codex 在手機載入遠端環境的 live state，工程師在通勤時仍能追蹤 thread、plugins 與 project context，不必完全回到電腦。',
			'快速裁決：當代理回報需要判斷時，使用者可即時回覆、改方向或核准，將長任務的等待斷點縮到最少。',
			'跨裝置範圍：支援連線到 laptop、Mac mini 與 managed remote environment，降低單一工作站宕機或不可用對任務進度的影響。',
			'安全邊界保留：文章指出檔案、憑證與本機設定留在原機器，手機端主要接收更新，並透過 relay 保持會話同步。',
			'工作模式轉折：從每次都要手動收尾改成即時監控，這個設計讓代理工具更像「持續陪跑者」，而不只是一個一次性自動化腳本。',
		],
		quote: 'With Codex in your pocket, now you can start investigating a bug while waiting for your coffee.',
		quote_attribution: 'OpenAI, 2026-05-14',
		quote_source_url: 'https://openai.com/index/work-with-codex-from-anywhere',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '產品訊號上，OpenAI 將 Codex 定義為可隨時接力的工作夥伴，從「下任務」轉向「隨時督導」，讓代理化流程更貼近軟體開發日常。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/work-with-codex-from-anywhere',
					},
				],
			},
			{
				text: '治理訊號上，採用 secure relay 將設備連上而不暴露本機，是對資安與可控授權的平衡：流程更即時，但權限主權仍留在原始運作環境。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/work-with-codex-from-anywhere',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-14',
				date_iso: '2026-05-14',
				content: 'OpenAI 發佈「Work with Codex from anywhere」，將 Codex 以預覽模式整合進 ChatGPT 行動 App，主打多設備即時監控與核准流程。',
			},
		],
		articles: [
			{
				title: 'Work with Codex from anywhere',
				link: 'https://openai.com/index/work-with-codex-from-anywhere',
				domain: 'openai.com',
				date: '2026-05-14',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'aiApplications-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Claude Code 驅動的開源 IT 平台',
		short_summary: 'OpenIT 於 2026-05-15 在 Product Hunt 上線，定位自己是「OpenSource alternative to ServiceNow」，並稱是以 Claude Code 為作業系統的 IT 平台，主打可依工作情境自我調整。雖然目前僅能看到產品頁文字與 44 位追蹤者資訊，未列明導入價格、效能和治理規格，但其核心在於以 LLM 代理重構流程控制邏輯，對 IT 運維、客服與行政單位是可借鏡的轉型線索：開源方案可在同樣需求下改採可掌控、可客製的作業路徑。',
		emoji: '🤖',
		did_you_know: 'Product Hunt 顯示 OpenIT 目前只有 44 位追蹤者，仍屬早期曝光期；但在首頁已直接用「OpenSource alternative to ServiceNow」與「runs on ClaudeCode」兩個核心定位標示其主張。',
		talking_points: [
			'上線訊號：Product Hunt 在 2026-05-15 標示 OpenIT 為「Launching today」，表示該工具目前屬公開曝光初期，但已進入可被持續追蹤的發布節奏。',
			'替代方向：頁面直接寫「OpenSource alternative to ServiceNow」，突顯其目標不是新增小工具，而是挑戰既有 ITSM 的封閉套件模式。',
			'核心技術：文案稱產品「runs on ClaudeCode」，代表流程設計可搭配 LLM 代理能力執行，延伸自動化邏輯不再侷限於傳統規則。',
			'自我建構：品牌句「building itself around you as you work」暗示系統會隨使用者行為更新流程，是重視工作情境配適而非單點導入。',
			'成熟度線索：目前可查到的僅有 44 followers，顯示社群關注在累積，但缺少正式案例與績效數字，驗證彈性仍是後續關鍵。',
		],
		quote: 'The very first software that uses Claude Code as its operating system, building itself around you as you work, and reinventing how IT runs.',
		quote_attribution: 'Product Hunt，2026-05-15',
		quote_source_url: 'https://www.producthunt.com/products/openit',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品敘事強調為 ServiceNow 提供開源替代，對中小團隊有吸引力；其價值在於打開「可自建流程」想像，能讓沒有大型 IT 部門的單位先行試做基礎自動化。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/openit',
					},
				],
			},
			{
				text: '同一訊息也顯示缺口：尚未提供治理、資安與維運成本資料。對企業實務而言，工具敘事再新，若無合規與導入邏輯，採用決策仍須等待更多證據。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/openit',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'OpenIT 在 Product Hunt 刊登並標註為 Launching today，並以 Claude Code 為作業系統定位。',
			},
		],
		articles: [
			{
				title: 'OpenIT',
				link: 'https://www.producthunt.com/products/openit',
				domain: 'producthunt.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Kimi WebBridge：AI 代理接上即時網路',
		short_summary: 'Product Hunt 討論頁在 2026-05-15 公開的 Kimi WebBridge 訊息，將其定位為連接 AI 代理與即時網頁的橋接機制。其訴求不只新增另一個工具，而是要讓模型回應可直接搭到最新外部資料來源，並以 Kimi Slides、Nano Banana Pro 試用訊息補強「可落地工作流」想像。對教育行政、研究與知識工作而言，這類設計可把原本人工逐站蒐整的流程改為可交付的代理任務鏈。',
		emoji: '🌐',
		did_you_know: '原文直接寫到 Nano Banana Pro 有 24 小時免費體驗，且宣告某段時間有 48 小時無上限使用，試點階段可低成本驗證功能是否符合團隊流程。',
		talking_points: [
			'即時鏈接定位：Kimi WebBridge 被主打為讓 AI 代理可接上 live web，對跨平台資料整併是明確改造方向。',
			'試用節點設計：訊息明示 24 小時免費與 48 小時無上限使用，供初期導入者快速驗證工作流成果。',
			'輸出導向轉型：Kimi Slides 強調可編輯化投影片功能，顯示工具不只回覆文字，也在提供可分享成果。',
			'宣傳語句特徵：文案含“It\'s editable Notebooklm Slides”式敘事，說明其在產出品質與操作門檻間試圖兼顧。',
			'上線型態啟示：透過 Product Hunt Discussion 並非傳統新聞稿，社群回饋可直接作用於功能調整節奏。',
		],
		quote: 'Try it FREE (unlimited for next 24 hours)',
		quote_attribution: 'Product Hunt, 2026-05-15',
		quote_source_url: 'https://www.producthunt.com/products/kimi-ai-assistant',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品方視角強調代理可及時抓取網路內容，將「資訊取得」與「任務輸出」前置打通，對中高頻查詢任務最有刺激。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/kimi-ai-assistant',
					},
				],
			},
			{
				text: '社群討論型發佈更重視使用者回饋與試用阻力，短期優惠與可用時窗凸顯擴散策略，導入者仍需自評隱私、治理與可控性。',
				sources: [
					{
						name: 'Product Hunt Discussion',
						url: 'https://www.producthunt.com/products/kimi-ai-assistant',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'Product Hunt 討論頁公開 Kimi WebBridge 相關訊息，並同步展示 Slides/ Nano Banana Pro 的試用條件與功能導向。',
			},
		],
		articles: [
			{
				title: 'Kimi WebBridge',
				link: 'https://www.producthunt.com/products/kimi-ai-assistant',
				domain: 'producthunt.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'Nimbus：AI 代理式瀏覽器整合網頁任務',
		short_summary: 'Product Hunt 在 2026-05-15 提到 Nimbus 是受 Claude Code 啟發的代理式瀏覽器，使用者用自然語言下達任務，代理可代替點擊、表單與多分頁操作，必要時再請示。它非擴充套件原生打造，支援 Claude、OpenAI、Gemini 等模型，首 500 名用戶永久免費。核心價值是把下載後再上傳、跨站切換等高重複機械流程，轉為可持續接力的代理任務。',
		emoji: '🧭',
		did_you_know: '作者明確點名「download in one tab，upload in another」最耗時，Nimbus 就以跨分頁任務代理解掉這段檔案來回流程，主軸是減少人工重複操作。',
		talking_points: [
			'任務驅動流程：使用者只要用自然語言下指令，代理接手點擊、填表與頁面切換，將瀏覽器操作抽象成可自動化任務節點。',
			'明確痛點對焦：原文把「下載一分頁後到另一分頁上傳」列為核心摩擦，凸顯這類行政與研究流程中的真實效率損耗。',
			'模型不綁死：開發者明言屬 model agnostic，並支援 Claude、OpenAI、Gemini 及 OpenAI 相容模型，降低單一模型廠商風險。',
			'上下文續航承諾：討論串回應稱中途中斷不會遺失脈絡，代表長時段多步驟任務有機會減少重啟成本。',
			'低門檻試用：首 500 名用戶可永久免費，對小團隊或個人先做流程實驗的門檻下降，容易快速驗證代理式瀏覽價值。',
		],
		quote: 'Built from the ground up, not an extension.',
		quote_attribution: 'Product Hunt，2026-05-15',
		quote_source_url: 'https://www.producthunt.com/products/nimbus-10',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '工具發想端把注意力放在工作流程，而非單一功能，這種「把瀏覽器當代理執行層」的設計，對跨站整理資料或行政文件流程最有啟發。',
				sources: [
					{
						name: 'Product Hunt 產品頁',
						url: 'https://www.producthunt.com/products/nimbus-10',
					},
				],
			},
			{
				text: '社群觀點更聚焦風險：使用者關心中長任務是否仍保有完整上下文，開發者回應可持續追蹤任務，若持續成立才有實務採用信心。',
				sources: [
					{
						name: 'Product Hunt 討論回應',
						url: 'https://www.producthunt.com/products/nimbus-10',
					},
				],
			},
			{
				text: '成本角度看，500 名免費名額形成明確試水溫機制；與傳統自建 Agent 不同，這種策略更偏向快速驗證可否整合到日常知識工作。',
				sources: [
					{
						name: 'Product Hunt 產品頁',
						url: 'https://www.producthunt.com/products/nimbus-10',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'Product Hunt 上線 Nimbus 介紹：標榜受 Claude Code UX 啟發的 agentic browser，並宣告首 500 名用戶永久免費。',
			},
		],
		articles: [
			{
				title: 'Nimbus',
				link: 'https://www.producthunt.com/products/nimbus-10',
				domain: 'producthunt.com',
				date: '2026-05-15',
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
		id: 'aiEducation-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: '六國跨學段AI政策實務：12個月導入路線',
		short_summary: 'Google 在 2026 年於巴西、印度、馬來西亞、墨西哥、西班牙與瑞典舉辦「AI Policy & Guidance Labs」，邀集基礎、國中及高等教育政策與校務領導人參與。會議不是只談概念，而是協助各方把願景轉成可執行方案，產出正式 Position Statements 與 12 個月導入藍圖，並把政策重點設計為平台中立，讓教師在校內仍保有 AI 使用主導權，降低工具更換與責任歸屬爭議。',
		emoji: '🧭',
		did_you_know: '六場政策工作坊同時涵蓋基礎、國中與高等教育視角，成果先以 Position Statements 並搭配 12 個月行動藍圖發布，且強調不綁定單一生成式 AI 平台，可供不同制度直接改寫。',
		talking_points: [
			'跨國設計樣版：六國工作坊將政策專家與學校領導人放在同桌討論，讓規範建立不只是口號，而是可落地的行政與教學決策節點，便於學校後續直接對接。',
			'12 個月導入路線：每場會議要求輸出可追蹤的年度執行路線，並搭配 Position Statements，目標是把討論轉成明確責任、時程與交付成果。',
			'術語橋接機制：文件指出技術術語與教學語言的落差是核心阻力，跨部門共用語彙後，IT、行政與第一線教師可在同一框架討論策略。',
			'平台中立設計：規劃強調不綁定單一產品，由外部專家參與制度化設計，使政策能被不同地區與既有資訊架構重用，降低轉換成本。',
			'教師主導權收斂：敘事核心是教師不是「監看員」，而是決定 AI 何時可用、何時不該用的主導者，確保 AI 被當作教學伴侶而非替代判斷。',
			'社群實務補位：Google 並同步推動跨教師社群（例如 Google Educator Group／Faculty Groups），提供全球同儕案例，解決各地在政策落地時缺乏可借鏡範本的問題。',
		],
		quote: 'One of the most significant hurdles in policy is the gap between technical terminology and pedagogical practice.',
		quote_attribution: 'Google Blog, 2026-05-15',
		quote_source_url: 'https://blog.google/products-and-platforms/products/education/ai-policy-guidance-labs/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '治理與制度視角：文稿將重點放在跨部門共識建構與共同語彙，顯示在教育 AI 佈局中，建立流程與角色邊界先於工具推廣，這有助政府與學校管理端降低政策落差。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/products-and-platforms/products/education/ai-policy-guidance-labs/',
					},
				],
			},
			{
				text: '教學主權視角：同一來源又突顯教師決策中心地位，主張教師需判斷 AI 的使用時機與禁用情境，但文章未提供量化成效指標，成效驗證仍仰賴各校自行補強。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/products-and-platforms/products/education/ai-policy-guidance-labs/',
					},
				],
			},
		],
		articles: [
			{
				title: 'From policy to practice: supporting the future of AI in education',
				link: 'https://blog.google/products-and-platforms/products/education/ai-policy-guidance-labs/',
				domain: 'blog.google',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '政策治理',
		title: '普林斯頓改榮譽制度：7月起考場全監考',
		short_summary: '2026 年 5 月，普林斯頓大學教授會通過決議，將全校實體課堂考試改為由授課人員監考，取代 133 年沿用的學生互監榮譽制度，並規劃 2026 年 7 月 1 日生效。校方與學生都認為生成式 AI 讓隱性作弊更難被察覺，報告同儕也可能引發排擠風險，顯示美國名校正在把以誠信倫理為核心的制度，轉向更可追溯的監督治理流程。',
		emoji: '⚖️',
		did_you_know: '普林斯頓的作法不是取消榮譽制，而是新增一條「授課人員現場見證與紀錄」的流程，疑似違規仍交由榮譽委員會由既有聽證與申訴機制處理，監考與既有程序並行。',
		talking_points: [
			'制度轉折：歷經 133 年、以學生自我監督與通報為核心的榮譽規範，改為課堂考試由授課人員在場監考，規模與作法同步擴大。',
			'AI壓力：文中指出 AI 被視為隱性作弊的轉捩點，學生與校方都認為同儕難以單靠目視辨識 AI 輔助作答。',
			'推動動能：消息稱學生主導要求此變革，學生會調查顯示多數人傾向或持中立態度，顯示校務決策不只來自行政端。',
			'作法設計：新規定規範監考人員「作為見證者」與紀錄人員，明確不直接干預考試進行，但可將可疑情況舉報給榮譽委員會。',
			'跨校脈絡：文章提到 2023 年斯坦福試行局部監考、2014 年 Middlebury 個別系先導，形成由分散先行走向全校制度化的軌跡。',
			'時間節奏：該政策於 2026-05-15 通過，計畫於 2026-07-01 上路，與開學前兩個月的課務整備期相呼應。',
		],
		quote: 'AI was the breaking point—where everyone thought that this introduced stealth cheating that was harder to detect without in-person supervision.',
		quote_attribution: 'Inside Higher Ed, 2026-05-15',
		quote_source_url: 'https://www.insidehighered.com/news/faculty/learning-assessment/2026/05/15/princeton-introduces-proctoring-changing-honor-code',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '從治理面看，這是一則從道德自治向可執行程序轉移的案例：校方保留榮譽委員會權責，但前段加入人力監考來降低制度落差與證據不足。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/learning-assessment/2026/05/15/princeton-introduces-proctoring-changing-honor-code',
					},
				],
			},
			{
				text: '從學生觀點看，監考不只是防作弊工具，也被描述為修補同儕通報機制的社會成本，特別是避免因舉報而引發羞辱、排擠或網路人身攻擊的顧慮。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/learning-assessment/2026/05/15/princeton-introduces-proctoring-changing-honor-code',
					},
				],
			},
			{
				text: '與其他名校相比，普林斯頓在時序上是「學生端先拉起改革」且採取全校導入；斯坦福則是先以部分試點切入，學界可觀察不同治理節奏對校園文化的影響。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/faculty/learning-assessment/2026/05/15/princeton-introduces-proctoring-changing-honor-code',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: '普林斯頓大學教授會通過修訂榮譽制度，決定實體考試全面導入監考。',
			},
			{
				date: '2026-07-01',
				date_iso: '2026-07-01',
				content: '新監考規定正式生效，課堂內考試由授課人員負責見證與紀錄。',
			},
		],
		articles: [
			{
				title: 'Princeton Introduces Proctoring, Changing Century-Old Honor Code',
				link: 'https://www.insidehighered.com/news/faculty/learning-assessment/2026/05/15/princeton-introduces-proctoring-changing-honor-code',
				domain: 'insidehighered.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
	{
		id: 'aiEducation-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: 'AI 對齊放大性別、族群與身障求職偏差',
		short_summary: '這篇 2026 年 5 月發表於 arXiv 的工作論文，以量化對應式測試法，在 27 種語言模型與 177 個職位條件中比對履歷，檢驗種族、性別與身心障礙資訊對招募結果的影響。研究指出，模型並未天然縮小偏見，反而在對齊後放大差異，女性與黑人候選人出現更高的加權優勢，身障候選人不利比例同步上升，等值約 6 至 12 個月學歷與經驗權重差距，意味 AI 招募模型的公平治理會影響實務上候選人的進入機會。',
		emoji: '⚖️',
		did_you_know: '模型對齊(Post-training alignment)後，女性與黑人候選人的加分可放大到約 3 倍以上，而身障候選人的不利效果上升 171%，代表差距在決策階段會被實質擴大。注意：本研究為量化對照研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：研究為量化對應式研究，直接以 27 個語言模型與 177 個職位做對照測試，觀察同條件履歷中人口特徵變化對招募排序的影響。',
			'數據佐證：公開摘要未揭露原始樣本數、追蹤期間與信賴區間；但有量化數據顯示女性與黑人優勢放大為 325% 與 330%，身障候選人不利放大 171%。',
			'偏差來源：摘要明確指出後訓練對齊是主因，該機制高於僅比較預訓練模型時的差距，代表微調流程本身可能重寫公平性邊界。',
			'學力效果轉換：結果將偏差換算為 6 個月到 1 年學歷/經歷加權差，數值不只統計現象，而是足以改變初篩機會的可操作影響。',
			'對教育場域啟示：若學校或企業用 AI 做第一關履歷篩選，模型對齊過程需納入偏差壓力測試，否則弱勢群體可能在入口處被系統性放大排除。',
			'研究侷限：摘要未提供國家與資料集來源細節，難以直接推估台灣市場條件，需再以本地資料做再現驗證。',
		],
		quote: 'Post-training alignment is the primary driver: relative to matched pre-trained models, alignment amplifies advantages for female and Black candidates by 325% and 330%, and disadvantages for disabled candidates by 171%.',
		quote_attribution: 'arXiv，2026-05-02',
		quote_source_url: 'https://arxiv.org/abs/2605.13866',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '這篇研究把重點放在模型工程流程：偏差不只是「資料裡有偏見」的延伸，而是對齊步驟本身可放大特定群體優勢與劣勢。對教育與人資 AI 導入端，代表治理第一道不是只看準確率，而是稽核 alignment 參數與目標函式。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.13866',
					},
				],
			},
			{
				text: '延伸研究缺口：摘要只揭露核心效應與模型規模，但未提供樣本量、國家與語境；若想轉化為台灣教育或在地企業政策參考，仍需對照文獻與本地資料，確認效應方向是否穩定。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.13866',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: 'arXiv 顯示研究投稿日期為 2 May 2026，題為 AI alignment 與 hiring discrimination 的跨模型實驗。',
			},
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: '本研究摘要納入本次聚類資訊作為新聞源，集中呈現 race、gender、disability 在對齊模型招募決策中的放大效應。',
			},
		],
		articles: [
			{
				title: 'AI Alignment Amplifies the Role of Race, Gender, and Disability in Hiring Decisions',
				link: 'https://arxiv.org/abs/2605.13866',
				domain: 'arxiv.org',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: 'aiEducation-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '教師多智能體教學流程有三條設計路徑',
		short_summary: '本篇學術研究以 2026-05-15 在 arXiv 公布的論文為核心，分析61位教師在多智能體教學工作流設計中的行為紀錄，透過叢集分析與馬可夫模型萃取三類教師型態。研究再以15件教學作品與12位教師訪談補強，指出AI-TPACK 的落地並非只靠工具知識，而是系統思維、教學信念與自我效能交互作用，對教師能否持續設計可行的AI流程影響較大。',
		emoji: '🤖',
		did_you_know: '研究摘要可直接對照三類行為模式：系統化優化者、創作者與被動觀察者，且其學習/設計差異出現在行為軌跡上而非僅工具使用。注意：本研究為觀察性混合方法工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：本研究以行為日誌資料為主體，搭配61位教師樣本的叢集與Markov轉移分析，再用15件成果作品與12位訪談做三角驗證，屬觀察性混合方法。',
			'數據佐證：公開摘要揭露樣本為61位教師行為紀錄、15件作品、12位訪談；但未揭露追蹤期間、效果量或信賴區間，主要是類型差異描述。',
			'三類原型：識別出Systematic Optimizers（系統化優化者）、Prolific Creators（高產能創作者）與Passive Observers（被動觀察者），分別對應複雜架構反覆修正、快速原型實作與低介入觀察策略。',
			'AI-TPACK機制：研究指出整合結果不只是知識項目累積，而是系統思維、教學信念與自我效能三者共同驅動，對教師採用AI流程的成敗具解釋力。',
			'設計差異：三型教師在多智能體流程中展現不同節奏與風險承擔，支持情境化支援比一套統一模板更能落地，尤其對跨學段教師培訓更具參考價值。',
		],
		quote: 'These findings call for differentiated scaffolding responsive to teachers cognitive-behavioral diversity.',
		quote_attribution: 'arXiv, 2026-05-13',
		quote_source_url: 'https://arxiv.org/abs/2605.13906',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '觀點上看，本研究將教師AI採用還原為設計行為譜系，對教學流程研究有啟發，但摘要未提供學生成效資料，無法直接評估哪一類型對學習結果最佳。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.13906',
					},
				],
			},
			{
				text: '延伸研究缺口：多為行為分類與認知機制探討，對教育現場最關鍵的政策層面（如工具授權、資安與流程治理）未展開，後續研究需補上跨校與跨制度比較。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.13906',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: '論文在 arXiv 平台紀錄提交日，摘要同步揭露以教師行為日誌做多智能體設計流程叢集與Markov分析。',
			},
		],
		articles: [
			{
				title: 'Modeling AI-TPACK in Practice: Insights from Teachers\' Multi-Agent Workflow Design',
				link: 'https://arxiv.org/abs/2605.13906',
				domain: 'arxiv.org',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: 'aiEducation-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '五天AI Agent工作坊讓93名前高中生CT躍升',
		short_summary: '這篇混合方法研究追蹤93位前高中生，在5天AI agent創作工作坊（使用無程式平台CocoFlow）中，以前後測、行為紀錄與訪談交叉驗證計算思維成長。摘要顯示抽象思維與演算法思維皆有明顯進步，效應值約0.71與0.70；層級迴歸指出反覆測試投入度能預測自我效能提升（β=0.20，p=0.05），且中等起點學生反而進步最大，形成「最佳發展區」現象（eta squared=0.55），支持課程需分層支撐。研究未揭露場域國家資訊。',
		emoji: '🧠',
		did_you_know: '公開摘要可直接確認兩項效應值：抽象思維d=0.71、演算法思維d=0.70，並有迭代測試參與度與自我效能之beta=0.20、p=0.05關係。注意：本研究為混合方法研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：混合方法研究，設計包含前後測、行為紀錄與訪談，樣本為93名前高中生，實驗流程為5天AI agent創作工作坊。',
			'數據佐證：公開摘要揭示抽象思維d=0.71、演算法思維d=0.70；階層迴歸顯示迭代測試參與度對自我效能提升有beta=0.20（p=0.05）。',
			'研究發現：中等起點學生的進步幅度最大，研究將其描述為最佳發展區，eta squared=0.55，顯示學習成效不隨初始高低線性增加。',
			'行為機制：學習者以CocoFlow為主要工具完成AI agent設計，系統化紀錄學習行為軌跡，可用來判斷過度工程化與任務拆解困難的具體點。',
			'延展訊號：高起點學生常出現過度工程化、低起點學生易卡在任務拆解，中段學生較能靈活修正，提示教學要以分層腳手架替代一刀切。',
		],
		quote: 'Results revealed significant improvements in abstract thinking (effect size d = 0.71) and algorithmic thinking (effect size d = 0.70).',
		quote_attribution: 'arXiv, 2026-05-15',
		quote_source_url: 'https://arxiv.org/abs/2605.14330',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '這份研究的關鍵訊號是「中等起點才最有效率」而非弱勢優先或精熟優先，對教師進行分層支援與任務難度調節有直接啟示。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.14330',
					},
				],
			},
			{
				text: '研究缺少國別、對照組與更長追蹤週期，對政策層面的可推廣性仍是延伸研究缺口；現階段只能當作場域設計與教材流程的參考線索。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.14330',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-14',
				date_iso: '2026-05-14',
				content: '論文於 arXiv 顯示提交時間，正式列出研究方法、樣本與初步成果指標。',
			},
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: '系統化更新來源為 2605.14330 版本，將該研究納入 AI 教育聚類素材。',
			},
		],
		articles: [
			{
				title: 'Computational Thinking Development in AI Agent Creation: A Mixed-Methods Study',
				link: 'https://arxiv.org/abs/2605.14330',
				domain: 'arxiv.org',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'aiClassroom-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '工作方法',
		title: '跨學段可抄：4 招讓教師 AI Chatbot 回覆更準',
		short_summary: '在 2026 年 5 月 13 日，ClassTechTips 發表《4 AI Chatbot Tips for Teachers to Go Beyond the Basics》，主張教師在使用 ChatGPT、Gemini、Copilot 時不只靠一次提問，而是先給足背景並搭配連續追問。文章以角色設定、內容背景、格式需求為核心，目的是把模型輸出從「還可以」拉近到可直接採用的教學素材。對需要高頻備課的教師而言，重點不在換工具，而在提示詞設計與對話節奏的工作流程。​',
		emoji: '🤖',
		did_you_know: '文中舉例「增加情境背景後再反覆追問」，可讓輸出從草稿階段進到「80～90%」可用區間，明顯降低教師在同一題目上重複微調的次數與耗時。',
		talking_points: [
			'先交代情境資訊：提示詞先寫明年級、學生需求與目標能力，能讓回應更貼近課堂情境，減少事後修訂的回合數。',
			'把 Chatbot 當協作夥伴：作者建議改為與 ChatGPT、Gemini、Copilot 進行多輪對話，而不是一次問到底，逐段調整到可用才停止。',
			'角色提示可控難度：例如要求「三年級閱讀專家」或指定特定學段，會改變問題詞彙與難度設計，老師可複製同一套方式套到不同班級。',
			'固定輸出規格：在 prompt 加上清單、作業單或題型格式，能直接拿來接續課程文件與課前流程，降低整併時間。',
			'重複熱點與新作法：核心是「上下文 + 追問」；新出現做法是把 prompt 當工作流，每輪補條件再修稿，快速建立可試作版本。',
		],
		quote: 'Instead of using a chatbot like a search engine, you treat it like a collaborative partner.',
		quote_attribution: 'ClassTechTips, 2026-05-13',
		quote_source_url: 'https://classtechtips.com/2026/05/13/ai-chatbot-tips-for-teachers/',
		quote_source_domain: 'classtechtips.com',
		perspectives: [
			{
				text: '文章重點放在教學實作流程：教師只要掌握提示詞節奏，就能把生成式輸出轉成可複用素材。對常態化備課而言，這是立即可行的效率補丁。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/05/13/ai-chatbot-tips-for-teachers/',
					},
				],
			},
			{
				text: '內容強調操作方法而非風險治理，對高需求課堂有幫助，但在作業批改、學生資料使用與著作權責任上仍有補強空間，須補教師人工審核。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/05/13/ai-chatbot-tips-for-teachers/',
					},
				],
			},
			{
				text: '文內示範從十年級到三年級的場景，但不僅對高中，核心在「角色、情境、格式」三欄位設計，顯示可跨學段建立共通模板再做微調。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/05/13/ai-chatbot-tips-for-teachers/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: 'ClassTechTips 發布《4 AI Chatbot Tips for Teachers to Go Beyond the Basics》，提出以角色、背景與多輪追問提升教師使用 AI Chatbot 的實務方法。',
			},
		],
		articles: [
			{
				title: '4 AI Chatbot Tips for Teachers to Go Beyond the Basics',
				link: 'https://classtechtips.com/2026/05/13/ai-chatbot-tips-for-teachers/',
				domain: 'classtechtips.com',
				date: '2026-05-13',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
];

const educationResearchStories: Story[] = [
	{
		id: 'educationResearch-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '智利建校衝擊顯示女性世代學習可逆轉',
		short_summary: '在智利1965至1966年間，政府在供給不足社區大量新建並配齡編制國小課室。NBER 的這份工作論文採準實驗設計，利用有無新建課室形成比較，並連結大型普查資料追到成年結果。研究指出受惠者在學歷與勞動市場表現較佳，女性學歷落差明顯縮小，且女性的受惠對下一代子女的按時升學與完成學校年限也產生正向外溢，但摘要未揭露完整樣本數與各項效果指標，需依據原文再行驗證。',
		emoji: '🏫',
		did_you_know: '研究指出，智利1965–1966年在供給不足社區新增「數千」間國小教室後，追蹤結果顯示成人與其子女都出現較佳的學習進程與完成年限，女性效益尤為明顯。注意：本研究為工作論文，研究設計不宜直接推論因果。',
		talking_points: [
			'證據類型：研究採自然實驗語境下的準實驗設計，以1965–1966智利建校政策作為外生衝擊，對照受惠與未受惠社區。',
			'數據佐證：摘要僅揭露「數千」間教室投入、跨世代追蹤設計與方向性結果，未揭露樣本數、追蹤樣本規模、效果量與信賴區間。',
			'關鍵機制：結論傾向於把基礎建設可及性轉為學習機會，先改善就學條件，進而牽動成人女性學歷與其子女的持續進修。',
			'老師下一步可以怎麼做：先盤點班級與里別的通學時間、教室密度、師資缺口，設定前測數據後再追蹤出席率、留級率、畢業年齡。',
			'課堂管理可借鏡：將基礎設施與學習品質連動，每季以「可及性改善前後」對照，記錄學生產出（作業完成率、考核通過率）與教師回饋。',
		],
		quote: 'The marginal value of public funds is 13, including direct effects on adults and intergenerational spillovers.',
		quote_attribution: 'NBER, 2026-05-16',
		quote_source_url: 'https://www.nber.org/papers/w35042#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究重點在於基礎設施投資與長期機會，提醒政策成效不只看短期升學率，而是看成人與子女的跨代結果；這提供校務決策較完整的成效窗口。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35042#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口：該結果來自單一國家單一時段，未能直接控制台灣偏鄉交通、社區經濟與教師留任差異，外推前須先做本地對照試算。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35042#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '1965-01-01',
				date_iso: '1965-01-01',
				content: '智利開始在供給不足社區大規模新建並編制教師的國小教室',
			},
			{
				date: '1966-12-31',
				date_iso: '1966-12-31',
				content: '該階段建校衝擊持續進行，形成可供後續長期追蹤的政策檢驗條件',
			},
			{
				date: '2026-05-16',
				date_iso: '2026-05-16',
				content: 'NBER 公佈工作論文 Working Paper 35042，提出跨世代溢出與性別差距縮小結果',
			},
		],
		articles: [
			{
				title: 'Building Opportunity: The Intergenerational Effects of Chilean School Construction',
				link: 'https://www.nber.org/papers/w35042#fromrss',
				domain: 'nber.org',
				date: '2026-05-16',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'educationResearch-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '大學權威角色分化學生性別觀',
		short_summary: '這篇 NBER 工作論文以中東一所精英大學新生為樣本，利用第一學期學生隨機分派導師的研究設計，並以校友問卷追蹤長達 24 年的態度變化。結果顯示，分派到女性導師的女性學生較傾向政治與工作上持平權觀，但男性學生則較保守；效應在宗教背景學生與男性主導 STEM 情境更明顯。對台灣教師與校務來說，研究提示「權威配置」會改變班級性別規範，可作制度設計參考，但因單校條件限制，需在地驗證後再外推。',
		emoji: '⚖️',
		did_you_know: '研究指出，女性導師影響不只在想法上，更可能牽動後續行為選擇；女性被分派女性導師的學生更常往女性教師或性別題材課程靠攏。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文，核心是新生第一學期隨機分派導師的自然實驗，再配合校友長期問卷，屬高於一般橫斷面報告的因果線索型證據。',
			'數據佐證：研究追蹤到 24 年後仍可觀察到性別態度差異，但摘要未揭露各組樣本數、效果量與信賴區間，無法直接量化影響幅度。',
			'老師下一步可做：優先檢視班級或導師制度中的權威佈局，建立穩定且可見的女性領導角色（課程帶領、評量建議、輔導流程），讓學生在日常互動中持續看到非傳統性別角色。',
			'老師下一步可做：每一週安排一題「誰適合領導/分工」討論任務，讓學生用具體事件回應，教師再用回饋句指出其中的性別假設，幫助其分辨性別化決策。',
			'老師下一步可做：實施前測與後測兩次，觀察學生對女性權威、職涯與分工語句的改變，搭配小組合作紀錄與匿名回饋單，持續修正教室規則與討論分工。',
		],
		quote: 'A simple framework combining belief updating and identity-based status threat helps explain these patterns of female empowerment and male backlash.',
		quote_attribution: 'NBER, 2026-05-16',
		quote_source_url: 'https://www.nber.org/papers/w35174#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究將差異歸因於權威角色本身，而非單純看到成功女性就能改變態度。對校方可借鏡的是長期制度設計，不是短暫活動宣傳。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35174#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口仍在：單一中東精英校無法對應台灣不同學段與文化情境，且未公開效果量。外推前需有跨校與不同年齡層的對照研究，否則外部效度不穩。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35174#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-16',
				date_iso: '2026-05-16',
				content: 'NBER 工作論文發表，使用第一學期導師隨機分派為識別方法，並追蹤校友長程性別態度變化。',
			},
		],
		articles: [
			{
				title: 'Authority Figures and the Polarization of Gender Norms',
				link: 'https://www.nber.org/papers/w35174#fromrss',
				domain: 'nber.org',
				date: '2026-05-16',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'educationResearch-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '美國五十年高教與婚育機會變化',
		short_summary: '這篇NBER 2026工作論文用美國五十年教育、婚姻與就業資料做跨世代、跨地區觀察分析，摘要未揭露完整樣本數。結果顯示大學男性比例下降後，女生婚姻率不降，反向配偶到高收入非學位男性；同時「高於全國薪資中位且未與大學女生結婚」的非學位男性供給降幅超過50%，使非學位女性的穩定婚育選擇空間大幅縮小。',
		emoji: '📊',
		did_you_know: '研究指出高於全國薪資中位且未與大學女生結婚的非學位男性，對非學位女性可選穩定伴侶的比例已下降超過五成。注意：本研究為觀察性工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER工作論文，使用美國觀察性資料，採跨世代與跨地區比較，核心在高教學歷、婚姻率與男性經濟結果的對應關係。',
			'數據佐證：摘要明確指出該供給比例對非學位女性下降超過50%，且大學女生婚姻率沒有同步下滑；但完整樣本數與模型估計未在公開摘要揭露。',
			'教學提醒：高中社會課可用本研究做資料閱讀入門，先定義變項（學歷、收入、婚姻狀態、失業率）再討論該研究的推論邊界。',
			'教學流程：老師可要求學生做「假設—資料—解讀」三步：繪製三個世代與三個地區趨勢圖，提出可驗證命題，並明確標記哪裡是關聯、哪裡未必是因果。',
			'成效觀測：學生提交一頁簡報需包含可追蹤指標（失業率、收入中位、非學位男性比例、未婚率）與限制條件，教師以回饋語提醒「你的主張是否能被其他地區資料反證」。',
		],
		quote: 'The share of non-college men who earn above the national median and are not married to college women has fallen by more than 50%.',
		quote_attribution: 'NBER, 2026-05-16',
		quote_source_url: 'https://www.nber.org/papers/w35179#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究把婚姻差距歸因於教育供給與男性經濟條件變動，提供的是機制線索而非單一政策處方，對教學上可作為結構性差異討論素材。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35179#fromrss',
					},
				],
			},
			{
				text: '同時也可視為研究缺口：結果需與台灣、跨社會制度資料對照，才能判斷是否存在同型變化；否則不宜將美國觀察結果直接轉為本地政策結論。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35179#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Bachelors Without Bachelor\'s: Gender Gaps in Education and Declining Marriage Rates',
				link: 'https://www.nber.org/papers/w35179#fromrss',
				domain: 'nber.org',
				date: '2026-05-16',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'educationResearch-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '美國校園禁機未見明顯心理效益',
		short_summary: '這篇 NBER 工作論文首次以美國 2016-2024 年《全國兒童健康調查》(NSCH)資料，透過合成差異中的差異（Synthetic DID）模型，估計校園智慧型手機禁令是否改善青少年心理健康與螢幕使用。結果顯示目前可用資料僅有1州兩段、2州一段的政策後觀察，且摘要未揭露完整樣本與效果量；在這樣的初步階段，並未觀察到螢幕時間明顯下降或心理福祉顯著提升。對台灣學校而言，這提醒禁機應以對照設計和連續追蹤代替一刀切的政策推論。',
		emoji: '📉',
		did_you_know: '摘要指出目前資料僅含1州兩段、2州一段的禁機後追蹤，且未公開完整樣本與統計效果量；注意：本研究為觀察性工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：採用觀察型工作論文設計，核心為合成差異中的差異（Synthetic DID）準實驗模型，用多期比較估計政策效應。',
			'數據佐證：研究資料為 NSCH 2016-2024 青少年樣本，當前僅有 1 州兩段、2 州一段禁機後追蹤；公開摘要未揭露樣本數與效果量、信賴區間。',
			'研究訊號：結果是「未見螢幕時間明顯下降、心理健康未顯著改善」的早期估計，屬目前可得的先行證據而非穩定結論。',
			'老師下一步：先試作單校流程，明訂上課手機用途、下課回收節奏與替代活動，避免只靠口號管理學生行為。',
			'老師下一步：同步記錄作業完成率、專注行為、學生情緒自評三項指標，8 週後與上學期同時段比對，才判斷是否調整禁機規則。',
		],
		quote: 'Overall, these early results provide no clear evidence that the school ban policy reduced screentime or improved psychological wellbeing.',
		quote_attribution: 'National Bureau of Economic Research (NBER), 2026-05-16',
		quote_source_url: 'https://www.nber.org/papers/w35181#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究目前是早期警訊而非定論：政策後資料州數與觀察期較少，難以說明跨校、跨學段的一致成效，台灣可先做校際對照再決定是否全面推行。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35181#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口在於政策可行條件差異：同樣禁機規範在不同學校因家長溝通、替代課堂設計、輔導資源而有不同結果，短期單一期資料不足以判斷規範是否為主要因子。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35181#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2016-01-01',
				date_iso: '2016-01-01',
				content: '研究所用全國兒童健康調查（NSCH）資料的起始年度，建立禁機前後比較基礎。',
			},
			{
				date: '2024-12-31',
				date_iso: '2024-12-31',
				content: '研究資料追到 2024 年，形成 2016-2024 的跨年度觀測窗口。',
			},
			{
				date: '2026-05-16',
				date_iso: '2026-05-16',
				content: 'NBER 公布工作論文摘要，指出目前屬早期結果，未見禁機政策帶來明確改善。',
			},
		],
		articles: [
			{
				title: 'Youth Mental Health and School Smartphone Bans: Early Evidence',
				link: 'https://www.nber.org/papers/w35181#fromrss',
				domain: 'nber.org',
				date: '2026-05-16',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'educationResearch-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '成績比較易失真：先採 eigengrades 修正',
		short_summary: '一篇題為《What Does A Grade Mean?》的NBER工作論文，以固定效果與譜分解方法推導可校準的「eigengrades」機制，檢視原始成績是否能跨課比較。摘要指出成績其實混入學生表現與課程條件；論文未揭露樣本國家、樣本數、追蹤期間與效果量，因此目前屬制度設計與可識別條件的理論研究。對台灣高教而言，先對課程難度與評分基準做校準，才能讓歷程資料在獎懲、晉級與進修決策上更有比較意義。',
		emoji: '📊',
		did_you_know: '原始分數未扣除課程條件與門檻差異時，跨課比較可能把課程難度誤判為學生能力；該摘要未公布樣本數與效果量等量化指標。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：採固定效果加上譜分解的理論模型，提出 eigengrades 作為課程調整分報告，不是RCT、問卷或實驗性干預研究，而是制度可識別性推導。',
			'數據佐證：公開摘要僅敘述機制與方法，未揭露樣本數、追蹤期間、效果量或信賴區間，無法直接據以做效應大小估算。',
			'錯誤比較機制：當課程效應足以反轉能力排序切點時，僅看單科 letter grade 會誤判，學生能力、課程難度與評分門檻被混成一個訊號。',
			'老師可做：在課前先公告評分規準與作答強度，建立共同參考標準後再回饋，讓學生理解「高分」不是同質比較，降低只挑易課的策略選修。',
			'校務可做：每學期並列原始分與課程校準分數，搭配課程重修率、選課分布與補修申請監測是否出現「避難課」集中現象，並據此調整輔導與評量監督。',
		],
		quote: 'A raw grade mixes student performance with course-specific conditions, so grade-only comparisons fail whenever course effects are large enough to reverse ability rankings at grade cutoffs.',
		quote_attribution: 'NBER, 2026-05-16',
		quote_source_url: 'https://www.nber.org/papers/w35183#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '制度視角認為，這不是要否定成績，而是提醒學校先建立跨課比較基準。若未校準課程條件，排名與政策訊號都可能偏離實際學習軌跡。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35183#fromrss',
					},
				],
			},
			{
				text: '教學與監督視角則可把此模型視為預警機制：學生選課若因易拿分而集中，未必代表動機提升，而可能是比較機制失真；研究尚待在校際資料上驗證。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35183#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-16',
				date_iso: '2026-05-16',
				content: 'NBER 公開《What Does A Grade Mean?》工作論文，提出 eigengrades 與課程條件校正觀點。',
			},
		],
		articles: [
			{
				title: 'What Does A Grade Mean? Informativeness and Strategic Manipulation of Grading Systems',
				link: 'https://www.nber.org/papers/w35183#fromrss',
				domain: 'nber.org',
				date: '2026-05-16',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'taiwanEduPolicy-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '研究證據',
		title: '高風險測驗縮減後，美國學業仍自2013起下滑',
		short_summary: '對台灣教師與學校管理者來說，關鍵在於別只看疫情前後短期波動就下結論，制度與評量訊號改變才是長期治理風險所在。哈佛與史丹佛研究指出，美國學區成績下降其實是2013年起的趨勢，與高風險測驗問責鬆綁及社群媒體普及同步；疫情後貧困區的回升主要來自聯邦補助，若無補助，2022水準難以突破。',
		emoji: '📉',
		did_you_know: '報告來源是哈佛大學教育政策研究中心與史丹佛大學 Educational Opportunity Project。研究估計，後疫情高貧困地區的成績改善，大幅受聯邦COVID援助影響，並未完全顯示教學品質本身已恢復。',
		talking_points: [
			'下滑起點：研究認為學區成績衰退在COVID後才暴露，但其實自2013年已開始，疫情更像放大既有下滑訊號。',
			'補助效應：成效研究估計，高貧困地區後疫情的進步多歸功於聯邦補助，若移除資金支援，平均成績多半難超過2022基準。',
			'問責轉向：NCLB時代將全美推行高風險測驗責任制，2012–2013年各州大量進入豁免序列，壓力訊號出現明顯降溫。',
			'群組落差：高收入與低收入地區後疫情回升較快，但中等收入地區改善最少，反映補救策略不能只看整體平均，需看分位分布。',
			'因果限制：同時在有與無NCLB豁免州皆見到類似下滑，報告因此不主張將衰退直接歸因於測驗問責退潮，而是視為多因素交互結果。',
		],
		quote: 'The drop in academic achievement experienced by districts in wake of COVID-19 was part of a decline that began in 2013.',
		quote_attribution: 'K12 Dive, 2026-05-15',
		quote_source_url: 'https://www.k12dive.com/news/achievement-dip-coincided-with-high-stakes-testing-breakdown-study-finds/820426/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '研究端觀點：學術成果需做長期縱向追蹤，2013年起的下滑不應被COVID期間短暫修復掩蓋。對台灣來說，這提醒評量結果要追跡跨年度趨勢，不只比較某次政策上線前後。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/achievement-dip-coincided-with-high-stakes-testing-breakdown-study-finds/820426/',
					},
				],
			},
			{
				text: '公平評量角度：文中轉述 FairTest 長期主張，高風險標準化考試壓縮課程與增加歧視風險。台灣可借鏡的問題是如何在保留可比資料的同時，避免只用單一測驗壓垮教學現場。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/achievement-dip-coincided-with-high-stakes-testing-breakdown-study-finds/820426/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Achievement dip coincided with high-stakes testing ‘breakdown,’ study finds',
				link: 'https://www.k12dive.com/news/achievement-dip-coincided-with-high-stakes-testing-breakdown-study-finds/820426/',
				domain: 'k12dive.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國取消EEO報表，台灣校務需自建監測',
		short_summary: '美國平權署（EEOC）在 2026-05-15 向白宮提案，提出撤銷 EEO-1 到 EEO-5 以及其他相關法規下雇主回報義務，其中 EEO-5 以前針對 100 人以上公立中小學系統每兩年回報員工族群與職務資料。對台灣教師與校務管理者而言，外部統計若減少，校內仍需保有自有人才與師生支援資料，才能持續做公平調度與風險治理。',
		emoji: '⚖️',
		did_you_know: 'EEO-5 為 Elementary-Secondary Staff Information Report，原本要求美國公立小學到高中系統中，達到 100 名以上員工門檻的學校每兩年提交族群、性別與職務分派資料。',
		talking_points: [
			'申報縮減：EEOC 提案主張撤掉 EEO-1 到 EEO-5 及 Title VII、ADA、GENA、孕婦公平法相關回報，直接縮小雇主與學區的人事揭露範圍。',
			'門檻條件：EEO-5 原規定 100 人以上公立中小學系統，每兩年回報種族、性別與職務分派資料，曾是學校人事治理常見合規工作。',
			'政治節點：提案 2026-05-15 送交白宮審閱，之後通常要列入《聯邦公報》草案並開放公眾意見，最終規則仍可能再調整。',
			'台灣可借鏡：若外部比較資料收斂，學校不能只靠法規要求；應保留本地化教師結構與異常警示資料，避免公平治理缺口。',
			'風險預警：EEOC 未及時回覆媒體詢問就刊登後，代表議題正值形成期，時程與內容仍可能變動，需避免把初稿視為最終結果。',
		],
		quote: 'The agency wants to get rid of EEO-1, EEO-2, EEO-3, EEO-4 and EEO-5 reporting requirements.',
		quote_attribution: 'K12dive, 2026-05-15',
		quote_source_url: 'https://www.k12dive.com/news/eeo-1-rescission-proposal-eeoc-2026/820420/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'EEOC 在提案中聚焦降低行政負擔與報表重複，但撤除後外部可比資料會變少，對學校治理而言是「節流」與「監督能力」的權衡題。台灣若遇類似情境，需先補足內部資料盤點機制。',
				sources: [
					{
						name: 'EEOC',
						url: 'https://www.k12dive.com/news/eeo-1-rescission-proposal-eeoc-2026/820420/',
					},
				],
			},
			{
				text: 'K12dive 的整理指出，此類政策與美國前述取消EEO-1薪資揭露的脈絡一致，帶出跨政權下治理資料可被視為可調整資源，提醒台灣讀者關注資料權限轉移帶來的權力變化。',
				sources: [
					{
						name: 'K12dive',
						url: 'https://www.k12dive.com/news/eeo-1-rescission-proposal-eeoc-2026/820420/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'EEOC 將撤除 EEO 系列報表及相關法律配套申報義務的提案送交白宮，後續進入聯邦公報草案與公眾意見流程。',
			},
		],
		articles: [
			{
				title: 'EEOC moves to axe EEO-5 reporting',
				link: 'https://www.k12dive.com/news/eeo-1-rescission-proposal-eeoc-2026/820420/',
				domain: 'k12dive.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: 'FAFSA提前完成率創新高，台灣可借鏡申辦前置',
		short_summary: '美國2026屆高中畢業生在5月1日前的FAFSA（高等教育補助申請）完成率已到54.7%，比2025年6月27日版本高0.8個百分點，NCAN也稱全美各州皆優於去年，阿拉斯加、亞利桑那、佛羅里達、紐墨西哥至少提升20%。對台灣校方和老師而言，重點是流程治理：若能在學期初前置申請、把規定寫入校務流程，並在客服與資料核對端持續修正，學生與行政在截止日前的壓力將可明顯下降。',
		emoji: '📈',
		did_you_know: 'FAFSA執行長表示目前申請人滿意度已超過90%，客服平均等待不到1分鐘；但2024年曾有近四成電話未接，顯示服務治理的修補過程並非一蹴可幾。',
		talking_points: [
			'完成率逆轉：NCAN 於5月1日報告2026屆高中生FAFSA完成率為54.7%，比2025屆6/27紀錄高0.8個百分點。',
			'縣市式（州級）共振：NCAN說明全美各州皆高於2025屆，阿拉斯加、亞利桑那、佛羅里達、紐墨西哥至少成長20%。',
			'前置政策誘因：9月提早開放申請，搭配9州要求畢業生完成FAFSA的規範，成為本波提早累積的關鍵。',
			'體驗修復量化：執行長稱目前申請者滿意度超過90%，客服等待時間可壓在1分鐘內，顯示流程重整帶來可驗證品質改善。',
			'治理風險提醒：GAO曾批評教育部新表上線時未妥善監督供應商與溝通，未來制度化推行仍需同步設計稽核機制。',
		],
		quote: 'The head start on completions this spring represents a "remarkable, encouraging turnaround," NCAN said.',
		quote_attribution: 'National College Attainment Network, 2026-05-15',
		quote_source_url: 'https://www.k12dive.com/news/fafsa-completion-rate-for-class-of-2026-highest-on-record/820365/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'NCAN的重點是治理修復可產生可量測成果，強調提早上線、流程簡化與州制度串聯，將結果定義為可擴散的行政管理模式。',
				sources: [
					{
						name: 'National College Attainment Network',
						url: 'https://www.k12dive.com/news/fafsa-completion-rate-for-class-of-2026-highest-on-record/820365/',
					},
				],
			},
			{
				text: 'GAO角度較為警覺，補充提到2023—2024之際新表導入期曾有重大監管與溝通缺失，數據回升仍需以問責機制與供應商稽核繼續追蹤。',
				sources: [
					{
						name: 'U.S. Government Accountability Office',
						url: 'https://www.k12dive.com/news/fafsa-completion-rate-for-class-of-2026-highest-on-record/820365/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-01',
				date_iso: '2026-05-01',
				content: 'NCAN資料顯示，2026屆高中生FAFSA完成率已在5月1日前達到54.7%，形成高於歷年同期的先發優勢。',
			},
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'K12DIVE轉述NCAN發表本次創高紀錄，並指出各州普遍超越2025屆、部分州成長達20%。',
			},
		],
		articles: [
			{
				title: 'FAFSA completion rate for class of 2026 highest on record',
				link: 'https://www.k12dive.com/news/fafsa-completion-rate-for-class-of-2026-highest-on-record/820365/',
				domain: 'k12dive.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '資安信任',
		title: 'K-12 近週新聞測驗：經費與資安都要關注',
		short_summary: '對台灣的學校管理者與校務長官而言，這則 K-12 教育快訊值得留意的是其訊號設計：文章以五題檢測方式，回顧近一週新聞，內容同時出現經費公告與 cyberattacks，代表行政治理不能只盯預算，也要即時追蹤資安事件。它提供的是「每週快速盤點」的切入框架，能提醒一線學校在台灣落地時，同步建立經費監看與風險警示的固定流程。',
		emoji: '🔐',
		did_you_know: '原文並非完整政策報導，而是每週快測文章；文中只有 5 題題目作為回顧主題，並邀請讀者上傳成績，用 #K12DivePopQuiz 作為追蹤標記。',
		talking_points: [
			'五題快測設計：此篇內容以 5 題題目壓縮周訊息，讓學校可把每週重點先做「是否看過」的快速盤點。',
			'雙軸治理訊號：主題標記含 funding announcements 與 cyberattacks，顯示資源與資安已成為同等重要的學校治理觀測點。',
			'可視為警訊清單：文章是週度回顧，不列政策全文，適合當作校長會議的第一層掃描，但不能替代正式法規與在地研議。',
			'時間起跑點明確：文本日誌標示為 2026-05-15，台灣學校可參考此週期節奏，每週或每雙週做一次新聞風險回顧。',
			'追蹤互動機制：文章用 #K12DivePopQuiz 促使讀者回報分數，顯示教育訊息已朝「可量化參與」轉型，便於衡量關注度。',
		],
		quote: 'From funding announcements to cyberattacks, what did you learn from our recent stories?',
		quote_attribution: 'K12 Dive, 2026-05-15',
		quote_source_url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-15-2026/820298/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '第一種讀法把政策與事件當成測驗主題，重點在提升決策者的近期警覺度；對台灣來說可借鏡每週快速警訊彙整，但需再接上內部風險登錄機制，避免只靠閱讀印象。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-15-2026/820298/',
					},
				],
			},
			{
				text: '第二種讀法強調資安與經費並舉，將治理核心從「錢」拓展到「系統安全」；這對台灣學校值得參考，但缺少政策條文與單位尺度，仍要與 MOE 或地方教材與資訊安全指引做交叉對照。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-15-2026/820298/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-15',
				date_iso: '2026-05-15',
				content: 'K12 Dive 發布「Pop Quiz」頁面，整理近週 K-12 新聞為五題互動測驗，並標示與資安、資助等主題相關訊號。',
			},
		],
		articles: [
			{
				title: 'Test yourself on the past week’s K-12 news',
				link: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-15-2026/820298/',
				domain: 'k12dive.com',
				date: '2026-05-15',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '研究證據',
		title: '最年輕世代畢業生入職意向轉向樂觀',
		short_summary: '美國K12DIVE整理NSHSS調查指出，11,443位Gen Z學生中有94%對畢業後職涯有信心，79%規劃在畢業前或六個月內就業；84%也認為自己能在職場有所作為。台灣學校可由此理解，生涯輔導不該只盯升學率，還要同步追蹤學生就業準備、家庭參與與價值取向，避免最後才臨時補救。',
		emoji: '🧑‍🎓',
		did_you_know: 'NSHSS同時顯示84%受訪Gen Z相信自己能產生影響，且人權、醫療可近性與飢餓是其最在意議題之一；報導也提到部分學生會帶家長一同參與求職面談，顯示職涯啟動階段具家庭共識需求。',
		talking_points: [
			'信心基準：NSHSS抽樣11,443位Gen Z，94%表態對未來充滿不同程度信心，提供台灣可比對的基準值。',
			'就業節奏：79%計畫在畢業前或畢業後6個月內就業，建議學校將職涯輔導與升學準備同步到同一時間軸。',
			'價值取向：84%受訪者認為能改變世界，關注人權、醫療可近性與飢餓，顯示學生重視職涯中的公共價值匹配。',
			'家庭連動：報導提到部分受訪者會讓父母陪同求職面談，行政端可考慮把家庭參與納入生涯轉銜機制。',
			'資料解讀：文章提到2022年先前研究中超過半數Gen Z較焦慮，顯示同一世代心態可變動，需建立年度追蹤而非一次性結論。',
		],
		quote: '84% told the organization they believe they can make a difference.',
		quote_attribution: 'K12DIVE，2026-05-15',
		quote_source_url: 'https://www.k12dive.com/news/high-school-grad-jobs-outlook-2026-workforce-optimism/820282/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'NSHSS與HR Dive的敘事重點在於Gen Z心態正在從焦慮回溫，政策意涵偏向「以職涯支持與實務體驗補齊信心」而非僅做警戒式勸導。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/high-school-grad-jobs-outlook-2026-workforce-optimism/820282/',
					},
				],
			},
			{
				text: '文內的2022 LHH舊資料形成反差，提醒台灣可借鏡的不是單向樂觀，而是時間趨勢本身：同類群體的情緒與需求可在短期內反轉。',
				sources: [
					{
						name: 'K12DIVE（引述LHH研究）',
						url: 'https://www.k12dive.com/news/high-school-grad-jobs-outlook-2026-workforce-optimism/820282/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Heading into the workforce, the youngest Gen Zers seem cautiously optimistic',
				link: 'https://www.k12dive.com/news/high-school-grad-jobs-outlook-2026-workforce-optimism/820282/',
				domain: 'k12dive.com',
				date: '2026-05-15',
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
