import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-05-13 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'Codex 讓財務月報從人工拼接轉成可複查初稿',
		short_summary: 'OpenAI 於 2026-05-12 發布《How finance teams use Codex》，將財務關帳流程設計為可代理化的上下文流程。文章指出，團隊可用關帳活頁簿、預測更新、儀表板與 owner notes 直接生成含 variance、風險與 CFO 問題的月報初稿。重點在於把大量手動彙整與排版時間移走，讓人力回到資料判讀、公式檢核與決策準備，改變財務報表的作業節奏。',
		emoji: '📊',
		did_you_know: 'OpenAI 提供可複用 prompt，並建議接上 Google Drive、SharePoint、Box、Spreadsheets、Presentations、Documents、Slack、Teams、Gmail、Outlook Email 等外掛，將既有工具鏈納入同一個生成流程。',
		talking_points: [
			'自動敘事：OpenAI 指出以關帳活頁簿、儀表板與預測更新為 context，可直接輸出 CFO-review 的月報初稿，縮短人工整編時間。',
			'關鍵欄位：案例要求同時列出 variance、較預測差異、風險與 CFO 準備問題，並要求數字可追溯到來源，提升報告可稽核性。',
			'流程分流：以 April Close Workbook、March MBR Deck 等具名檔名建立提示詞，並可指定 4/22–4/30 的 close 時間窗，加速版本化更新。',
			'治理檢核：在模型可靠性章節，作者主張先檢查公式、結構、hardcodes、連結與來源，最後輸出嚴重度排序的 QA memo。',
			'工具落地：建議跨 Google Drive、SharePoint、Box 等存儲到 Slack、Teams、Gmail、Outlook 的外掛流程，方便財務把生成、審核、發送串成一線。',
		],
		quote: 'Use it to spend less time assembling the first pass and more time shaping the story, checking the numbers, and preparing for the decisions ahead.',
		quote_attribution: 'OpenAI, 2026-05-12',
		quote_source_url: 'https://openai.com/academy/how-finance-teams-use-codex',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '角度一：平台端主張在不新增大量工程成本下，先用既有財務文件建立代理工作流，直接解決月報首稿製作耗時與格式斷層。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/academy/how-finance-teams-use-codex',
					},
				],
			},
			{
				text: '角度二：同時保留監控責任，文章要求明確註明缺口與假設，透過 QA memo 讓高風險報表仍由財務人員回看，強調「自動化不等於放權」。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/academy/how-finance-teams-use-codex',
					},
				],
			},
			{
				text: '角度三：對非科技背景部門而言，範例重點在流程工程，而非模型研發，顯示未來辦公場景可先用 prompt + 外掛打底，逐步擴展到更高風險決策。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/academy/how-finance-teams-use-codex',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'OpenAI 發表《How finance teams use Codex》，提出以上下文驅動方式，將財務關帳、報告與模型檢核導入代理式流程。',
			},
		],
		articles: [
			{
				title: 'How finance teams use Codex',
				link: 'https://openai.com/academy/how-finance-teams-use-codex',
				domain: 'openai.com',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用、工作方法',
		title: 'NVIDIA 用 Codex 重塑研發與研究流程',
		short_summary: 'OpenAI 報導稱，NVIDIA 已有約 4 萬名工程師與研究人員在生產環境使用搭載 GPT-5.5 的 Codex，並將其作為複雜工程與研究工作預設工具。該架構可讓研究從題目發想、腳本撰寫到遠端實驗執行一條龍處理，實驗速度可達原本約十倍，關鍵意義在於把先前大量手動串接與反覆修正的工作，改為可持續追踪的代理化流程。',
		emoji: '🚀',
		did_you_know: '在隱私限制較嚴格的情境下，NVIDIA 團隊利用 Codex desktop 與電腦互動能力，在幾小時內建置並測試一套類似 Riverside 的播客錄製應用，原本可能需數週採購與整合。',
		talking_points: [
			'十倍提速：OpenAI 指出，NVIDIA 使用 Codex 後，端到端機器學習實驗流程的速度可提升約 10 倍，原因是模型可長時間維持上下文並主動調用工具。',
			'四萬規模採用：報導提到約 40,000 名 NVIDIA 成員可使用 Codex，顯示這是跨團隊的生產力基礎設施，而非單點試驗。',
			'MVP 進化上線：NVIDIA 團隊透過 Codex 將內部平台從 MVP 拉到 production，補齊可擴充性與穩定性等原本上線門檻。',
			'跨場景共用：工程與研究團隊都以 Codex 協作，從論文相關資料挖掘、實驗腳本撰寫到執行驗證，都可在同一代理框架內銜接。',
			'短時間交付：在保密受限環境中，團隊仍能用 Codex 在短時間完成錄影與錄音應用建置與測試，展現代理化流程對組織時程的壓縮力。',
		],
		quote: 'Codex 在執行實驗上有 10 倍的速度提升，因為它能處理完整的端對端機器學習研究流程。',
		quote_attribution: 'OpenAI 2026-05-12',
		quote_source_url: 'https://openai.com/index/nvidia',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從營運觀點看，重點不在模型本身，而在組織把 Codex 當作預設作業代理，讓複雜工程任務從「大量手工接手」變成可控流程，直接改寫人力配置。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/nvidia',
					},
				],
			},
			{
				text: '從研究觀點看，GPT-5.5 的角色是延長研究者注意力與實驗連續性，能追蹤證據鏈並補齊步驟，意味研究迴圈變成「人機共作」而非單純機器輔助寫程式。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/nvidia',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'OpenAI 發布 NVIDIA 以 GPT-5.5 驅動的 Codex 應用案例，強調其在工程與研究流程中的十倍實驗提速成效。',
			},
		],
		articles: [
			{
				title: 'How NVIDIA engineers and researchers build with Codex',
				link: 'https://openai.com/index/nvidia',
				domain: 'openai.com',
				date: '2026-05-12',
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
		title: 'Parameter Golf 打開 AI 研究新流程',
		short_summary: 'OpenAI 在《Parameter Golf》回顧中指出，這場以 FineWeb 留一測試為標準、並限定 16MB artifact 與 8×H100、10 分鐘訓練的競賽，八週內吸引超過 1,000 位參與者、2,000 多件提交。文章顯示 AI coding agents 降低了實驗成本、擴大參與率，也改變了研究節奏；同時主辦方同步加強提交重現與歸因審核。其意義不在單一模型突破，而在於將「代理輔助＋標準化流程」變成可擴張的研究生產模式。',
		emoji: '🤖',
		did_you_know: 'OpenAI 在 record-track 上逐筆重現提交，確認當下是否為破紀錄；同時把非記錄軌也保留下來作為大量創意輸入，顯示競賽價值不只等同榜首名單。',
		talking_points: [
			'參與規模：八週內湧入超過 1,000 名參與者與 2,000 多件提交，顯示 16MB 限制並未壓垮創意，反而讓更多研究者能參與。',
			'資源邊界：每件作品需符合 16MB artifact、8×H100 與 10 分鐘訓練上限，迫使參賽者更重視可驗證且成本可控的實驗設計。',
			'代理加速：OpenAI 指出 AI coding agents 降低實驗成本與門檻，讓提交節奏由少量人力手動試錯，轉為高頻率迭代。',
			'技術焦點：亮點作品集中在優化器調校、量化、低秩技巧與測試策略，九件代表作顯示非全新架構也能靠方法組合拿到關鍵增益。',
			'治理壓力：主辦方需重複驗證 record-track 成果並處理歸因、規則邊界問題，代表代理時代的研究治理負荷也同步上升。',
		],
		quote: 'Agents helped lower the cost of experimentation, made it easier for more people to participate, and changed the pace of the competition.',
		quote_attribution: 'OpenAI, 2026-05-12',
		quote_source_url: 'https://openai.com/index/what-parameter-golf-taught-us',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 明確將競賽當作研究方法驗證：在公開 baseline、資料與評測腳本下，重點不是個別大神的玄學技巧，而是誰能在嚴格限制中建立可複現流程。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/what-parameter-golf-taught-us',
					},
				],
			},
			{
				text: '另一種視角是治理端張力：AI 代理讓投入速度大幅提高，但同時提高了提交歸因與規則邊界檢核難度，代表未來研究自動化必須同步設計可稽核機制。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/what-parameter-golf-taught-us',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'OpenAI 公開 Parameter Golf 成果與觀察，整理八週競賽、兩大規模指標與重點提交案例。',
			},
		],
		articles: [
			{
				title: 'What Parameter Golf taught us about AI-assisted research',
				link: 'https://openai.com/index/what-parameter-golf-taught-us',
				domain: 'openai.com',
				date: '2026-05-12',
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
		title: 'AutoScout24 以 AI 代理提效 10 倍',
		short_summary: 'OpenAI 公開 AutoScout24 的導入案例。這家跨歐洲與加拿大的二手車平台在約 2,000 名員工中先推行 ChatGPT 讓全體能用，再讓 1,000 名 builder 深入導入 Codex。導入後開發週期由數週縮短到數天，提升約 10 倍，並透過 AI Champions 的跨部門回饋機制，把 AI 能力變成可維持的工作流程，顯示企業可把代理工具從單點試玩轉為組織級交付模式。',
		emoji: '🚀',
		did_you_know: '案例中指出，AutoScout24 不只開啟對話式 AI，而是同步讓 1,000 名建置人員使用 Codex；開發流程上則明確納入 PR 自動審閱、技術文件與事故後分析，藉由 AI 代理處理重複工序。',
		talking_points: [
			'雙軌導入：先行把 ChatGPT 先開給 2,000 名員工做全員 AI 基礎能力，再鎖定 1,000 名 builder 深度串接 Codex，分層推進速度與品質。',
			'時間躍升：文章量化結果顯示，開發週期由「數週」縮短為「數天」，約 10 倍效率成效，可直接轉化為版本交付節奏。',
			'選型準則：Codex 經過三個月跨團隊試點，驗證主軸是可用性、流程相容性與生產力、程式品質指標，而非只看一次性示範。',
			'治理設計：建立 AI Champions 網絡，讓中央決策與各隊經驗形成回饋回路，降低工具落地時的認知落差與流程斷層。',
			'實務場景：PR 自動 review、規模化重構、技術文件撰寫、事故後分析都被放進日常流程，將高頻人工任務外包給代理降低維運負擔。',
		],
		quote: 'AI is changing how we build, but more importantly, it’s changing what we can deliver to our users and dealer partners.',
		quote_attribution: 'OpenAI，2026-05-12',
		quote_source_url: 'https://openai.com/index/autoscout24',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的敘事主軸偏向方法可複製性，透過 2,000 員工與 1,000 builder 的規模對照，主張代理工具可成為企業交付效率標準化手段。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/autoscout24',
					},
				],
			},
			{
				text: 'AutoScout24 案例隱含更務實的一面：單點效能不夠，真正關鍵是 AI Champions 與跨部門回饋路徑，否則同一工具在團隊間仍可能只是零散實驗。',
				sources: [
					{
						name: 'AutoScout24 Group',
						url: 'https://openai.com/index/autoscout24',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'OpenAI 公開 AutoScout24 的 AI 導入案例，對外宣布以 ChatGPT 與 Codex 進行 2,000 人規模賦能與 10 倍開發加速。',
			},
		],
		articles: [
			{
				title: 'AutoScout24 scales engineering with AI-powered workflows',
				link: 'https://openai.com/index/autoscout24',
				domain: 'openai.com',
				date: '2026-05-12',
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
		title: 'ChatGPT Q1 普及擴張：主力外延到更多年齡與國家',
		short_summary: 'OpenAI 顯示，2026 年第一季 ChatGPT 在消費者方案（Free、Go、Plus、Pro）訊息量持續上升，使用者群已從單一族群擴大。可推斷女性代稱用戶已佔過半，35 歲以上訊息占比也明顯增加；同時中美洲、亞太與非洲等市場在使用排名上升最快。除工作與非工作需求比例仍維持平衡外，工作端也從單純文字影像創作，轉向更專門的紀錄與檢索任務，代表 AI 正從早期工具走向可持續併入日常流程的生產力基礎。',
		emoji: '📈',
		did_you_know: 'OpenAI 指出，工作用途雖仍以文字與視覺素材製作為主，但健康文件整理、資訊搜尋等任務增速更快，顯示 AI 已進入可反覆執行的事務化流程；而這份數據並不含 Codex、企業版與教育版，因此職場與教學場域的總使用量仍有被低估空間。',
		talking_points: [
			'成長擴張：OpenAI 追蹤到 2026Q1 ChatGPT 訊息量持續上升，且不只侷限在既有核心用戶。',
			'女性使用者回補：可推斷性別中，女性名稱使用者在本季已達半數以上，表示性別結構更平衡。',
			'高齡用戶抬頭：35 歲以上用戶訊息占比在 Q1 上升，說明非年輕族群也正在形成穩定使用習慣。',
			'新地區躍升：在訊息與人口排名追蹤中，拉丁美洲及非洲的成長速度名列前段。',
			'任務重心轉變：工作用途逐步從文字影像製作轉向健康文件、資訊檢索等更專業、可重複的任務。',
			'統計範圍提醒：研究僅含 ChatGPT 消費者方案訊息，故排除 Codex 與企業、教育產品，可能低估職場與校園實際規模。',
		],
		quote: 'Overall, 2026Q1 data suggests ChatGPT is becoming a more mainstream tool: used by a broader mix of people, in more countries, and for increasingly recurring tasks.',
		quote_attribution: 'OpenAI Signals，2026-05-11',
		quote_source_url: 'https://openai.com/signals/research/2026q1-update',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '官方視角將 Q1 視為普及化轉折，重點在族群與國家外延；然而排除企業與教育版使其更偏向「個人端採用指標」，不宜直接外推成組織端主力指標。',
				sources: [
					{
						name: 'OpenAI Signals',
						url: 'https://openai.com/signals/research/2026q1-update',
					},
				],
			},
			{
				text: '另一角度是任務品質變化：當文本影像比重下降、專門任務上升，代表 AI 的新可能在於可承接流程化事務，從一次性問答走向可標準化輸出，對產線接軌更有用。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/signals/research/2026q1-update',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: 'OpenAI 發布 2026Q1 ChatGPT 采用率更新報告，揭露使用者族群與任務面向出現擴張與轉移。',
			},
		],
		articles: [
			{
				title: 'How ChatGPT adoption broadened in early 2026',
				link: 'https://openai.com/signals/research/2026q1-update',
				domain: 'openai.com',
				date: '2026-05-11',
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
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'AI 代理本地預測式記憶崛起',
		short_summary: '5 月 11 日到 12 日，兩則來自 Product Hunt 與 GitHub 的訊號顯示，AI 代理記憶正在從「先存再檢索」走向可持續維護的本地預測式結構。GitHub 的 YantrikDB 提供單檔嵌入式資料庫，主打可離線、可推理與衝突偵測；Product Hunt 的 Khaos Brain 則以 Git 版控卡片與 Sleep/Dream/Architect 維護流程，讓任務經驗與偏好可回溯。對教育與行政工作而言，這代表代理人記憶正在轉變為可治理、可稽核的作業資產，而非黑箱式外掛。',
		emoji: '🧠',
		did_you_know: 'YantrikDB 的說明將傳統做法斷句為「Store everything → Embed → Retrieve top-k → Inject into context」，並指出在 500 筆與 5,000 筆資料時，傳統 context window 容量會失效而失去效率。',
		talking_points: [
			'上手門檻：YantrikDB 僅需 pip install 即可接到 MCP，並能直接呼叫 record/recall 起步，不需要先裝一堆前置模型。',
			'內建效能：預設嵌入器使用 potion-base-2M，約 7MB；升級時可改用 8M/32M，或改接自備 sentence-transformers。',
			'規模壓力：文中指出 500 筆記憶已超過 32K context，5,000 筆更難塞入 200K，並提出查詢保持約 70 tokens 的目標。',
			'架構取向：YantrikDB 採 embedded、single-file 設計，無需獨立 server 程序，偏向 local-first 的離線與同步需求。',
			'治理流程：Khaos Brain 將任務經驗與偏好轉為可視化、可版控卡片，透過 Sleep/Dream/Architect 保持記憶可讀、可維護。',
		],
		quote: 'Current AI memory is: Store everything → Embed → Retrieve top-k → Inject into context → Hope it helps. That\'s not memory.',
		quote_attribution: 'GitHub, 2026-05-12',
		quote_source_url: 'https://github.com/yantrikos/yantrikdb',
		quote_source_domain: 'github.com',
		perspectives: [
			{
				text: 'GitHub 立足工具層面，把記憶視為可執行的本地基礎建設；單檔與離線、可追溯的設計，強調的是工程端可控性與資料主權。',
				sources: [
					{
						name: 'GitHub',
						url: 'https://github.com/yantrikos/yantrikdb',
					},
				],
			},
			{
				text: 'Product Hunt 的敘事則偏向作業流程管理，將代理人記憶包裝成卡片化工作記錄，重點在可視化與維運節奏，而非僅提升查詢速度。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/khaos-brain',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: 'Product Hunt 以「Khaos Brain」上線介紹，主打本地預測式 AI 代理記憶，並提出 Sleep/Dream/Architect 的維護流程。',
			},
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'GitHub 在 Show HN 發布 YantrikDB，聲稱以單檔本地資料庫與 recall/relate/think 流程，解決傳統 context window 的擴充瓶頸。',
			},
		],
		articles: [
			{
				title: 'Show HN: YantrikDB – persistent memory for AI agents',
				link: 'https://github.com/yantrikos/yantrikdb',
				domain: 'github.com',
				date: '2026-05-12',
			},
			{
				title: 'Khaos Brain',
				link: 'https://www.producthunt.com/products/khaos-brain',
				domain: 'producthunt.com',
				date: '2026-05-11',
			},
		],
		domains: [
			{ name: 'github.com' },
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'MiniCPM-V 4.6 讓視覺 AI 跑進手機',
		short_summary: 'MiniCPM-V 4.6 是 MiniCPM 系列 1.3B 開源視覺語言模型，主打可在手機與消費級硬體進行影像、影片理解。產品提到混合 4x/16x 視覺 token 壓縮、BitCPM 量化版本，並同時支援 iOS、Android、HarmonyOS 及 vLLM、SGLang、llama.cpp、Ollama。這意味原本依賴高階雲端資源的視覺 AI 流程，可轉成邊緣端可持續運作。',
		emoji: '📱',
		did_you_know: '原文指出 MiniCPM-V 4.6 是該系列目前最小版本，且以 1.3B 規模搭配 4x/16x 視覺 token 壓縮，目標是降低高解析影像與影片輸入對硬體的負擔。',
		talking_points: [
			'小模型即主軸：MiniCPM-V 4.6 只有 1.3B 參數，定位手機與一般硬體可跑的視覺任務。',
			'壓縮降低成本：混合 4x/16x 視覺 token 壓縮直接對應影像、影片高解析輸入的算力需求下降。',
			'跨裝置示範：iOS、Android、HarmonyOS 都有 demo，讓測試與導入流程可同步推進。',
			'整合多框架：支援 vLLM、SGLang、llama.cpp、Ollama，可接到既有推理服務與作業流程。',
			'開源可再造：Apache-2.0 權重與 BitCPM 量化版本並存，降低私有化部署與二次開發門檻。',
		],
		quote: 'MiniCPM-V 4.6 is an open MLLM for image and video understanding on phones and consumer hardware.',
		quote_attribution: 'Product Hunt, 2026-05-12',
		quote_source_url: 'https://www.producthunt.com/products/minicpm-4-0',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品文本強調模型可在手機與消費級硬體跑，核心訊息是降低邊緣端門檻，讓資源有限的組織也能導入影像 AI。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/minicpm-4-0',
					},
				],
			},
			{
				text: '討論與規格討論點放在記憶體與部署細節上，顯示實務價值不只模型能力，而是長期維運成本與可整合性是否成立。',
				sources: [
					{
						name: 'Product Hunt Discussion',
						url: 'https://www.producthunt.com/products/minicpm-4-0',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'Product Hunt 發布 MiniCPM-V 4.6 產品介紹，聚焦 1.3B 行動端視覺語言模型與跨框架、跨平台導入特性。',
			},
		],
		articles: [
			{
				title: 'MiniCPM-V 4.6',
				link: 'https://www.producthunt.com/products/minicpm-4-0',
				domain: 'producthunt.com',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: '用 AI 保留原聲的寫作流程：Bouquin & Ink',
		short_summary: 'Product Hunt 顯示 Bouquin & Ink 已於 2026-05-12 上線，主打「Write in your own voice with a muse to inspire you」。產品頁面提出聲音保留、寫作連續性追蹤、沉浸式主題、聲紋驗證 provenance 等能力，主張維持作者原有文風，同時降低重複修辭與人工校稿負擔。雖目前僅有 32 位追蹤者，但對需要大量文字輸出的內容生產與知識工作者來說，關鍵是流程是否能把版本維護與風格一致化交給可重複運作的 AI 助理。',
		emoji: '🖊️',
		did_you_know: '產品頁同時列出聲音保存（voice preservation）、連續性追蹤（continuity tracking）與聲紋驗證 provenance；若在教育內容編修中導入，這組合可把「逐段修文」轉成可追溯、可版本回溯的文字製作流程。',
		talking_points: [
			'發布時點：頁面標示 Launching today，對應 2026-05-12 的上線訊息，屬近期 AI 寫作工具的新增案例。',
			'核心承諾：副標「Write in your own voice with a muse to inspire you」將工具定位為保留作者個人文風的靈感協作，而非完全代筆。',
			'流程可視化：continuity tracking 功能說明工具會協助追蹤寫作進度與版本脈絡，降低長文中段落偏題與重複修訂成本。',
			'品質稽核：加入 voice verification provenance，屬於輸出可信度機制，能支援文本版本的來源與一致性檢核。',
			'早期信號：目前僅記錄 32 followers，代表工具尚在起步期，接下來是否擴散取決於實際協作成效與口碑驗證。',
		],
		quote: 'Write in your own voice with a muse to inspire you',
		quote_attribution: 'Product Hunt, 2026-05-12',
		quote_source_url: 'https://www.producthunt.com/products/bouquin-ink',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從創作效率角度，這個案例顯示 AI 不只在創意輸出，還可承接版本追蹤與風格維持的體力活，對教師備課、研究筆記整理、學生作業回饋都可做流程移植。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/bouquin-ink',
					},
				],
			},
			{
				text: '從內容治理角度，產品把聲音保留與 provenance 放在前端，代表工具市場正從「能否生成」轉向「生成結果是否可追溯、可驗證」，這是教育與知識生產場景先天需要面對的新治理項目。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/bouquin-ink',
					},
				],
			},
		],
		articles: [
			{
				title: 'Bouquin & Ink',
				link: 'https://www.producthunt.com/products/bouquin-ink',
				domain: 'producthunt.com',
				date: '2026-05-12',
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
		editorial_lens: '新工作模式',
		title: 'Whisper Island 1.2.0 單窗多專案',
		short_summary: '2026-05-11，Product Hunt 揭示 Coddo 的 Whisper Island 進入 1.2.0，將多個專案集中在側欄並以一鍵切換取代頻繁開窗。產品把任務改為依狀態（待辦、進行中、檢閱）與對話線管理，並加入順序執行、任務佇列與看板柱狀圖。這表示 AI 工作流正往「單畫面即可追案、切換、重排與調整」的低程式碼模式收斂，對需要同時管理多人任務的團隊具示範價值。',
		emoji: '🗂️',
		did_you_know: '版本為 1.2.0，除了側欄多專案與任務重排，還加入了直接任務順序執行機制，避免同一分支同時跑兩個任務，並且側欄即時顯示任務佇列號碼。',
		talking_points: [
			'單窗即切換：Whisper Island 將專案集中於側欄，1.2.0 強化為 one-click 切換，將多個專案管理從開新視窗回到同一工作畫面。',
			'任務可讀性：待辦、進行中、檢閱三種狀態以 thread 呈列，搭配可拖曳排序，讓專案進度與優先順序一眼可見。',
			'任務節奏控管：直接任務改為 sequential execution，新增規則是同一 branch 不可同時跑兩件事，降低代理流程衝突與回退成本。',
			'效能可視化：1.2.0 新增 Kanban 柱狀圖與側欄佇列號碼，可直接量化每欄任務數，快速辨識阻塞點與等待瓶頸。',
		],
		quote: 'Sequential execution for direct tasks (no more two tasks on the same branch)',
		quote_attribution: 'Product Hunt, 2026-05-11',
		quote_source_url: 'https://www.producthunt.com/products/coddo',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品管理觀點：這次更新更像在修訂工作方法，而非純加新功能。側欄整併與一鍵切換，降低視覺與行為層級的干擾，是提升「專案密集使用者」日常效率的核心。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/coddo',
					},
				],
			},
			{
				text: '流程治理觀點：加入直接任務順序執行限制，代表對 AI 代理或自動化任務的安全性更重視。這類設計對教學助理、行政支援團隊也具啟發：先做可控的可追蹤流程，再追求高併行。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/coddo',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: 'Whisper Island（Coddo）公布 1.2.0 更新，加入單視窗多專案、任務順序執行、看板任務量統計與側欄整合操作。',
			},
		],
		articles: [
			{
				title: 'Whisper Island by Coddo',
				link: 'https://www.producthunt.com/products/coddo',
				domain: 'producthunt.com',
				date: '2026-05-11',
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
		editorial_lens: '工作方法',
		title: 'knooth：Mac 錄影剪輯一體化升級',
		short_summary: 'Product Hunt 於 2026-05-11 上線 knooth，把 macOS 螢幕錄製與剪輯整合為一體，並加上 AI 字幕、游標自動縮放、冗詞移除、音訊清理。產品可同時擷取螢幕、攝影機、麥克風與 iPhone/iPad 畫面，並稱全程在 Mac 本機運作、不上傳雲端。對需要高頻產出教學或會議影音的人而言，重點是將手工拼接壓縮成可複製流程。',
		emoji: '🎬',
		did_you_know: 'knooth 的時間軸可放入影片、音訊、文字、圖片、形狀五種圖層，並結合動畫、轉場與 AI 清理工具，做到「一個介面先完成初剪」。',
		talking_points: [
			'在地隱私優先：knooth 宣告「Everything runs locally on your Mac」，且「No cloud uploads」，對敏感教學素材可維持校內資料主控。',
			'跨來源同軌錄製：同時支援螢幕、攝影機、麥克風與 iPhone/iPad 畫面，能避免多軌素材反覆匯入造成的時間浪費。',
			'AI 助力削工序：內建 AI 字幕、游標自動縮放、冗詞移除與音訊清理，將逐段修剪變成可批次套用的設定流程。',
			'可複製的輸出節奏：產品頁列出快速匯出與動畫、轉場編排，對一週多支影片需求的團隊有明顯作業縮時效果。',
			'早期訊號參考：Product Hunt 顯示 67 followers，屬可觀察的初期接受度，未來成長仍取決於穩定性與授權與匯出能力。',
		],
		quote: 'Everything runs locally on your Mac. No cloud uploads.',
		quote_attribution: 'Product Hunt，2026-05-11',
		quote_source_url: 'https://www.producthunt.com/products/knooth',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品敘事聚焦功能與隱私承諾，能快速看見產品方向，但目前未提供編輯耗時、系統資源占用與穩定性數據，採用時仍需自行驗證。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/knooth',
					},
				],
			},
			{
				text: '從教育實務看，價值不只在 AI 幫忙剪片，而是把錄影、整理、輸出都壓進單一流程，能降低新手教師或行政助理的工具門檻與轉檔成本。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/knooth',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: 'knooth 在 Product Hunt 公告上線，定位為 macOS 螢幕錄影與 AI 編輯工具，主打本機運作與雲端零上傳。',
			},
		],
		articles: [
			{
				title: 'knooth',
				link: 'https://www.producthunt.com/products/knooth',
				domain: 'producthunt.com',
				date: '2026-05-11',
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
		id: 'aiEducation-gmail-notebooklm-教學',
		cluster_number: 'gmail-notebooklm-教學',
		unique_domains: 4,
		number_of_titles: 4,
		category: 'AI 教育趨勢',
		editorial_lens: '平台導入',
		title: '本週「NotebookLM 教學」焦點：校園與職訓同步擴散',
		short_summary: '台灣 Google 在 2026/05/11 啟動「數位人才探索計畫」，AI 職場通識、數位行銷、Google Cloud 三學程都加入 Gemini 與 NotebookLM，完成 12～20 小時自學並通過直播測驗後才可領證。美國喬治亞理工於 5/8 宣布把兩款工具納入全校教職員服務，並同步規劃 AI 政策與安全審查。兩端都在擴展工具導入，但目前仍未揭露教師與學生實際成效、採用比例與預算規模。',
		emoji: '🎓',
		did_you_know: '喬治亞理工規定教職員以校方標準憑證使用 Gemini 與 NotebookLM；處理敏感研究資料者需先查「機構 AI 登記冊」，顯示授權、資料邊界是導入條件，而非無條件放開。',
		talking_points: [
			'職訓進度設計清楚：Google 計畫將報名、提交認證到領證切成 12/16/20 小時學習＋8/10～10/30 的時間節點，讓 AI 學習可被行事曆化推進。',
			'職場場景也能上手工具：AI Boost Bites、Workspace with Gemini 與 Google Cloud 路徑，將 Gemini、NotebookLM 明確放進企劃、文件、資料整合與雲端技能流程。',
			'校園導入重點是風險控管：喬治亞理工在宣布導入前即提到第三方安全、資料隱私與合規審查，且預告首份 AI 政策在近期上線。',
			'授權對象分層明確：該校針對敏感研究資料人員要求先參照機構 AI 登記冊，其他教職與研究人員則以校方憑證管理，學生與臨時人員走有限名額申請。',
			'產品訊號與治理訊號不同：SOGI 顯示 NotebookLM 與 Gemini 整合免費開放，屬工具可得性資訊；學校導入則補上規範、流程與責任邊界。',
		],
		quote: '所有人工智慧工具在獲得批准前，都需經過全面的審查程序。',
		quote_attribution: '喬治亞理工學院資訊科技辦公室（2026-05-08）',
		quote_source_url: 'https://sunmedia.tw/news/technology/1778110348-%E5%96%AC%E6%B2%BA%E4%BA%9E%E7%90%86%E5%B7%A5%E5%AD%B8%E9%99%A2%E5%95%9F%E7%94%A8%20Gemini%E3%80%81NotebookLM%E3%80%80%E5%8A%A0%E9%80%9F%E6%95%99%E5%AD%B8%E7%A0%94%E7%A9%B6AI%E6%95%B4%E5%90%88',
		quote_source_domain: 'sunmedia.tw',
		perspectives: [
			{
				text: '台灣端偏向以訓練與證照推動使用情境，目標是把 Gemini、NotebookLM 變成職能能力工具；其實際價值主要落在職場流程改造，尚未提供完整教學現場成效。',
				sources: [
					{
						name: '數位時代',
						url: 'https://fc.bnext.com.tw/articles/view/4603',
					},
				],
			},
			{
				text: '喬治亞理工訊號則是先治理後擴張，先定義授權邊界與安全評估，再談可用範圍，反映學術機構的重點不是快速上架，而是先建立可負責的規則與流程。',
				sources: [
					{
						name: '蕃新聞',
						url: 'https://n.yam.com/Article/20260507742636',
					},
				],
			},
			{
				text: '媒體轉載快速放大主軸，但除少數提及功能整合與免費開放外，沒有新增教學成效資料；對教育場景而言，仍需持續觀察制度落地與使用成果才能判斷是否形成長期趨勢。',
				sources: [
					{
						name: 'SOGI手機王',
						url: 'https://www.sogi.com.tw/articles/gemini/6268707',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-06',
				date_iso: '2026-05-06',
				content: 'SOGI 報導 NotebookLM 與 Gemini 整合，並強調筆記本功能免費開放，形成工具端訊號擴散。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '喬治亞理工宣布將 Gemini 與 NotebookLM 納入全校教職員服務，並同步規劃 AI 政策與安全審查流程。',
			},
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: 'Google 台灣公布「數位人才探索計畫」三學程細節，明定自學時數、直播測驗與結業認證流程。',
			},
		],
		articles: [
			{
				title: 'Google 數位人才探索計畫正式開跑！Gemini、NotebookLM、GA4 免費學，完課可領官方證書',
				link: 'https://fc.bnext.com.tw/articles/view/4603',
				domain: 'fc.bnext.com.tw',
				date: '2026-05-11',
			},
			{
				title: '喬治亞理工學院啟用Gemini、NotebookLM 加速教學研究AI整合 - 蕃新聞',
				link: 'https://n.yam.com/Article/20260507742636',
				domain: 'n.yam.com',
				date: '2026-05-08',
			},
			{
				title: 'NotebookLM整合進Gemini！筆記本功能全面開放用戶免費使用 - SOGI手機王',
				link: 'https://www.sogi.com.tw/articles/gemini/6268707',
				domain: 'sogi.com.tw',
				date: '2026-05-06',
			},
		],
		domains: [
			{ name: 'fc.bnext.com.tw' },
			{ name: 'sunmedia.tw' },
			{ name: 'n.yam.com' },
			{ name: 'sogi.com.tw' },
		],
	},
	{
		id: 'aiEducation-15',
		cluster_number: 15,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 教育趨勢',
		editorial_lens: '新觀念,組織運作',
		title: '跨學段啟示：高教不能再把AI當成作弊工具',
		short_summary: '5 月 11 日的一則播客指出，高教仍常把 AI 當作作弊風險處理，卻忽略它已改變學生學習、工作與競爭規則。內容以 Lone Star College 約 90,000 名學生為背景，並提到其 AI 策略可服務 97,000 名學習者。若課程任務仍停留在可被外包的作業設計，學生難以建立判斷與創造力，且 K-12 到職場之間的 AI 素養銜接將出現斷裂。',
		emoji: '🎙️',
		did_you_know: '有受訪者從運動生理背景轉向 AI 推動者，並在高等教育場域主導可服務 97,000 名學生的策略部署，顯示 AI 能力建置未必受學系背景限制，關鍵在於制度設計。',
		talking_points: [
			'反作弊≠全面解方：高教若只談防舞弊規範，學生會傾向把 AI 當代做工具，而不是用來驗證觀點與推進解題。',
			'九萬級校務壓力：Lone Star College 擁有約 90,000 學生，規模一大就要求跨課程一致規範，不能靠零散封禁補救。',
			'九萬七千人案例：文中揭示 97,000 名學習者導入 AI 流程的經驗，說明管理可做規模化，但前提是任務設計與結果可追蹤。',
			'AI 素養斷層：K-12 已開始接觸 AI，雇主也要求能力，但高教若不改變教學邏輯，將成為升學到職涯的斷點。',
			'教師角色再定義：受訪者認為 AI 先暴露的是教學品質，而非先取代好老師；核心在於設計真實問題、核對資訊與判斷流程。',
		],
		quote: 'AI is not coming for education someday. It is already here, and the schools that keep pretending otherwise are not protecting students.',
		quote_attribution: 'Substack，2026-05-11',
		quote_source_url: 'https://stefanbauschard.substack.com/p/may-11-podcast-tim-mousel-lone-star',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '治理視角主張先修補安全漏洞；轉錄內容則明確回到學術設計：課題、評量與任務若未轉型，AI 只會放大作答外包，難以建構學習能力。',
				sources: [
					{
						name: 'Substack',
						url: 'https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9zdGVmYW5iYXVzY2hhcmQuc3Vic3RhY2suY29tL3N1YnNjcmliZT91dG1fc291cmNlPWVtYWlsJnV0bV9jYW1wYWlnbj1lbWFpbC1zdWJzY3JpYmUmcj04OGpqcm4mbmV4dD1odHRwcyUzQSUyRiUyRnN0ZWZhbmJhdXNjaGFyZC5zdWJzdGFjay5jb20lMkZwJTJGbWF5LTExLXBvZGNhc3QtdGltLW1vdXNlbC1sb25lLXN0YXIiLCJwIjoxOTcyMzcxODIsInMiOjE2NzM3MjgsImYiOnRydWUsInUiOjQ5ODA3ODQxOSwiaWF0IjoxNzc4NTIwMjUxLCJleHAiOjIwOTQwOTYyNTEsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.PxVUWq4CE9mRPjY9Spir38mG9wZly3K0xgIJNgMzMk0?',
					},
				],
			},
			{
				text: '從學段面向來看，內容同時提到 K-12 與雇主已在推高 AI 素養需求，對比高教反應較慢的現象，形成明確斷層訊號：高教若不及早對應，學生的在學到就業能力轉移會受阻。',
				sources: [
					{
						name: 'Stefan Bauschard Substack',
						url: 'https://stefanbauschard.substack.com/p/may-11-podcast-tim-mousel-lone-star',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: '以 Tim Mousel 對談為核心的 Podcast 指出高校需由防作弊框架轉向任務型教學與 AI 判斷力設計。',
			},
		],
		articles: [
			{
				title: 'May 11 Podcast: Tim Mousel, Lone Star College',
				link: 'https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9zdGVmYW5iYXVzY2hhcmQuc3Vic3RhY2suY29tL3N1YnNjcmliZT91dG1fc291cmNlPWVtYWlsJnV0bV9jYW1wYWlnbj1lbWFpbC1zdWJzY3JpYmUmcj04OGpqcm4mbmV4dD1odHRwcyUzQSUyRiUyRnN0ZWZhbmJhdXNjaGFyZC5zdWJzdGFjay5jb20lMkZwJTJGbWF5LTExLXBvZGNhc3QtdGltLW1vdXNlbC1sb25lLXN0YXIiLCJwIjoxOTcyMzcxODIsInMiOjE2NzM3MjgsImYiOnRydWUsInUiOjQ5ODA3ODQxOSwiaWF0IjoxNzc4NTIwMjUxLCJleHAiOjIwOTQwOTYyNTEsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.PxVUWq4CE9mRPjY9Spir38mG9wZly3K0xgIJNgMzMk0?',
				domain: 'substack.com',
				date: '2026-05-11',
			},
			{
				title: 'May 11 Podcast: Tim Mousel, Lone Star College',
				link: 'https://stefanbauschard.substack.com/p/may-11-podcast-tim-mousel-lone-star',
				domain: 'stefanbauschard.substack.com',
				date: '2026-05-11',
			},
		],
		domains: [
			{ name: 'substack.com' },
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: 'aiEducation-17',
		cluster_number: 17,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: '跨學段預算與政策卡位：AI教學也先看資源',
		short_summary: '美國教育場域在5月同時出現一致訊號：高教端Colorado State在州補助停滯下縮減兩校區預算，穆迪同步把哥倫比亞大學展望下修為負向；K-12端雖多數學區已全面推動1:1設備，仍面臨法規與經費壓力，且有38%教育科技主管預期預算縮水。資源與治理壓力正在同步抬高AI與數位方案的落地門檻，管理端已先做優先順序調整。',
		emoji: '📉',
		did_you_know: 'Higher Ed Dive指出科羅拉多州立大學在州預算凍結情境下，福特柯林斯與普韋布洛校區同時刪減數百萬美元，並同步升級水資源節流與灌溉系統。',
		talking_points: [
			'預算收縮先到位：科羅拉多州立大學為應對州方資源停滯，兩個校區同時縮編預算，顯示教育機構在缺口壓力下會先壓行政與配套開支。',
			'評等訊號影響戰略：穆迪將哥倫比亞大學展望下修為負向，核心指標含聯邦政策壓力與國際生源不確定，將牽動長期AI、人力與研究投資預算。',
			'設備普及不等於穩定：K-12調查顯示多數學區已導入1:1設備，但38%科技主管預估預算將縮減，導入節奏和維運能量都面臨回收風險。',
			'治理先行壓倒功能：法官明言2025年ICE政策調整未改變執法權限，學校行政仍需先兼顧法規邊界，再決定AI與數位工具的推廣節奏。',
			'跨階段共通訊號：高教在資金與風險管理重整，K-12在法規與預算壓力博弈，兩者都在要求「先有治理框架再談工具採購」。',
		],
		quote: 'Most districts now have 1:1 device programs.',
		quote_attribution: 'K-12 Dive, 2026-05-12',
		quote_source_url: 'https://link.k12dive.com/view/69f985b55f3be2f7a30c0c61r6ne0.wl7/23f4de57',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'Higher Ed Dive的觀點偏向財務結構與外部信評壓力：當州補助停滯與外部稽核加重，院校先做精簡與資本調整，AI相關建設被迫退回預算審視。',
				sources: [
					{
						name: 'Higher Ed Dive',
						url: 'https://link.highereddive.com/view/69f985b55f3be2f7a30c0c61r6ndz.1fao/cf288894',
					},
				],
			},
			{
				text: 'K-12 Dive則將焦點放在制度落地面：硬體覆蓋率看似成熟，但設備是否持續運轉，取決於法規穩定度與年度資源；在不確定氛圍下，AI與數位專案更易被放在後排。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://link.k12dive.com/view/69f985b55f3be2f7a30c0c61r6ne0.wl7/23f4de57',
					},
				],
			},
		],
		articles: [
			{
				title: 'Colorado State hit with layoffs | Moody’s lowers Columbia’s outlook',
				link: 'https://link.highereddive.com/view/69f985b55f3be2f7a30c0c61r6ndz.1fao/cf288894',
				domain: 'highereddive.com',
				date: '2026-05-12',
			},
			{
				title: 'Judge won’t pause ICE policy | The state of 1:1 device programs',
				link: 'https://link.k12dive.com/view/69f985b55f3be2f7a30c0c61r6ne0.wl7/23f4de57',
				domain: 'k12dive.com',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'highereddive.com' },
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'aiEducation-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '平台導入',
		title: 'MIT 推出 Universal AI：全民都能上手的 AI 路徑',
		short_summary: 'MIT Open Learning 於 2026-05-12 公布 Universal AI 線上自學方案，以五門核心課銜接產業應用模組，並將第一門《程式與機器學習基礎》免費開放。MIT 指出美國超過五成成年人已使用生成式 AI、每日工作情境使用率 12%，且組織 AI 整合率上升至 88%，顯示 AI 素養已從加分項變成全民職涯與組織運作的基本能力。這次推出強調讓非技術者也能接續學習，對縮小 AI 能力落差具參考價值。',
		emoji: '🧠',
		did_you_know: 'MIT 先公布 5 門核心課，再配套 6 門產業課，包含醫療、創業、永續能源等主題；同時保留對全球學習者免費進場的第一課，作為降低入門門檻的起點。',
		talking_points: [
			'基礎到應用鏈：課程以五門核心課為主軸，從程式、機器學習、LLM 到決策與倫理，由理論延伸到可上手的產業案例。',
			'首門免費起點：第一門《Fundamentals of Programming and Machine Learning》免費開放，降低成人再學習的學費與入門阻力。',
			'產業模組化：現有 6 門產業課包含醫療、永續、創業、交通等，學員可依工作場域挑選高關聯模組。',
			'非技術優先設計：專案強調面向非技術人群，配合 AI 個人化輔助調整學習節奏，降低對背景門檻的依賴。',
			'需求證據明確：文章引用美國逾 50% 成人已用生成式 AI、12% 每日於工作使用，與 88% 組織整合率，說明推出時機與市場壓力都很明確。',
		],
		quote: 'Artificial intelligence is not just for computer scientists anymore; it’s going to permeate every aspect of our lives and influence every business.',
		quote_attribution: 'MIT News, 2026-05-12',
		quote_source_url: 'https://news.mit.edu/2026/universal-ai-pathway-to-ai-fluency-accessible-to-anyone-0512',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: 'MIT 官方訊息把重點放在「全民可及」與非技術族群，與常見新工具上線報導不同，核心訴求是培養普適的 AI 思維基礎，對台灣政策端的在職再訓練有參考性。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/universal-ai-pathway-to-ai-fluency-accessible-to-anyone-0512',
					},
				],
			},
			{
				text: 'MIT Open Learning 的說法更偏教學設計，將五門核心課與 6 門產業課並列，強調可解釋性與倫理與決策能力，顯示其不是只做工具導入，而是嘗試建立跨域的能力架構。',
				sources: [
					{
						name: 'MIT Open Learning',
						url: 'https://news.mit.edu/2026/universal-ai-pathway-to-ai-fluency-accessible-to-anyone-0512',
					},
				],
			},
			{
				text: '免費第一課搭配進階付費模組的做法，透露出「先降低進場門檻、再以模組化進階」的商業與教學策略，台灣機構可作為未來線上課程授權與導流的試行模型。',
				sources: [
					{
						name: 'MIT Open Learning',
						url: 'https://news.mit.edu/2026/universal-ai-pathway-to-ai-fluency-accessible-to-anyone-0512',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'MIT Open Learning 發表 Universal AI 計畫，公布五門核心課與 6 門產業課，並將第一門課開放免費。',
			},
		],
		articles: [
			{
				title: 'Universal AI is “a pathway to AI fluency that’s accessible and approachable to anyone, anywhere”',
				link: 'https://news.mit.edu/2026/universal-ai-pathway-to-ai-fluency-accessible-to-anyone-0512',
				domain: 'news.mit.edu',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
		],
	},
	{
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '資安信任、組織運作',
		title: '高教CTO警訊：AI落地下人才與資安壓力同步上升',
		short_summary: '美國高等教育機構在 Inside Higher Ed 與 Hanover Research 的《2026 校園 CTO 調查》中顯示，近五成受訪 CTO 指出在缺乏新增資源下，科技變化速度已難以維持；且幾乎所有機構預期未來兩年 IT 成本仍會上升。調查再把 2030 年主要風險鎖定為 IT 人才招募與留任不足（62%）、資安威脅（59%）與成本失控（56%）。在此脈絡下，AI 與 LMS 的導入不只是教學升級，而是牽動全校治理與預算可持續性的關鍵壓力。',
		emoji: '🛡️',
		did_you_know: '部分院校已開始實驗替代既有 LMS 的方案，且調查由 T-Mobile for Education、Jenzabar、Modo 贊助。報導同時安排 6 月 10 日（美東下午 2 點）線上免費研討，供業界針對調查結果交叉辯論。',
		talking_points: [
			'資源缺口先行：調查中近五成（49%）CTO 說未增資源即難承受科技轉型速度，代表 AI、資安、平台更新先受預算與人力限制。',
			'兩年費用壓力：幾乎所有受訪機構都預估未來兩年 IT 成本上升，將直接影響 AI 導入速度與防護機制投資時程。',
			'風險結構明確：2030 年最怕的是 IT 人才招募與留任不足（62%）、資安威脅（59%）及成本不斷上升（56%），顯示治理風險高於技術失靈本身。',
			'AI價值與疑慮並行：機構同時看重 AI 應用，卻指出價值、學術誠信與資安仍需並行驗證，不是「先上線再談風險」。',
			'平台轉向初現：有學校正在測試 LMS 替代方案，透露基礎建設可能進入重整期，將影響教材、教務與學習歷程資料的資料治理架構。',
		],
		quote: 'Nearly half of surveyed CTOs (49 percent) indicate that the current pace of technology-driven change is unsustainable without new resources.',
		quote_attribution: 'Inside Higher Ed, 2026-05-12',
		quote_source_url: 'https://www.insidehighered.com/news/quick-takes/2026/05/12/survey-ctos-cybersecurity-ai-the-lms-and-more',
		quote_source_domain: 'insidehighered.com',
		perspectives: [],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'Inside Higher Ed 發布 2026 校園 CTO 調查，聚焦 AI、資安、LMS 與預算趨勢。',
			},
			{
				date: '2026-06-10',
				date_iso: '2026-06-10',
				content: '在美東 2 點舉行免費網路研討會，由 Inside Higher Ed 召開，討論調查結果與學校科技治理責任。',
			},
		],
		articles: [],
		domains: [
			{ name: 'insidehighered.com' },
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
		title: '高教可借鏡：GenAI 與 OER 的教材更新路徑',
		short_summary: '2026-05-12，AI Educ Simplified 轉載並導讀刊於 EDUCAUSE Review 的《Expanding OER with GenAI》。文章主張以 Adopt、Adapt、Build 框架協助教師逐步使用生成式 AI 建置開放式教材，並指出作者與 OER 的討論歷程已累積約 15 年，顯示這波整合不是短期熱潮，而是高教教材從高成本封閉資源，轉為可共享、可再設計的長期轉型，對課程設計與學生教材可得性具有關鍵意義。',
		emoji: '📘',
		did_you_know: '原文提到 OER 在實務上可降低學生因教材費造成的落差，並讓學生更有彈性取用課程內容，讓 AI 導入的目標不只效率，還是縮小資源不平等。',
		talking_points: [
			'發布脈絡：2026-05-12 這篇文章轉載自 aiedusimplified，並回應 EDUCAUSE Review 同期發文，凸顯高教端已正式把 GenAI＋OER 當作教材改革議題。',
			'教學框架：核心方法明確寫為 Adopt、Adapt、Build，建議教師先採用既有教材，再改編，最後重建，讓導入生成式 AI 具體且可重複執行。',
			'長期驗證：文中提及與 OER 的討論逾 15 年，表示高教社群對 Open Educational Resources 的推進早有基礎，本次是自然延展而非突發潮流。',
			'跨校實證：文中稱 2024 年曾在 UMass Lowell、Framingham State、Northern Essex Community College 接連推動 AI/OER 講座與工作坊，顯示此議題已被多校同步測試。',
			'採用原則：作者強調 OER 對降低教材成本、改善學生接觸彈性的重要性，提醒教師在設計 GenAI 流程時先以可及性與公平性為評估優先序。',
		],
		quote: 'Expanding OER with GenAI in EDUCAUSE Review dropped this week and we’re excited to share it with the world!',
		quote_attribution: 'AI Educ Simplified，2026-05-12',
		quote_source_url: 'https://aiedusimplified.substack.com/p/new-publicaton-expanding-oer-with',
		quote_source_domain: 'aiedusimplified.substack.com',
		perspectives: [
			{
				text: '實務角度把重心放在流程設計，認為可先用 Adopt、Adapt、Build 進行教材「小步快跑」驗證，不急著一次性改造整門課程。',
				sources: [
					{
						name: 'AI Educ Simplified',
						url: 'https://aiedusimplified.substack.com/p/new-publicaton-expanding-oer-with',
					},
				],
			},
			{
				text: '策略角度則將焦點放在治理與倫理，將 AI 融入 OER 不只談技術可行，而要檢視授權、法律及可持續共編機制是否同步跟上。',
				sources: [
					{
						name: 'EDUCAUSE Review',
						url: 'https://aiedusimplified.substack.com/p/new-publicaton-expanding-oer-with',
					},
				],
			},
		],
		articles: [
			{
				title: 'New Publicaton: Expanding OER with GenAI',
				link: 'https://aiedusimplified.substack.com/p/new-publicaton-expanding-oer-with',
				domain: 'aiedusimplified.substack.com',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'aiedusimplified.substack.com' },
		],
	},
	{
		id: 'aiClassroom-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '暑假第一天可複製的 AI 教室活動清單',
		short_summary: '2026 年 5 月 12 日，Easy EdTech Podcast 的第 370 期整理出 9 項暑假第一天教室活動，提供可直接帶入備課的節目素材，內容結合音樂、故事敘事、AI 圖像生成與虛擬旅遊。節目強調先用低門檻工具啟動學生參與，再用目標設定與反思活動收斂成果，讓暑前接軌課程更快上手。對教師而言，這組做法的價值在於降低臨近開學準備負擔，並提供跨學段可改寫的活動骨架。',
		emoji: '🧑‍🏫',
		did_you_know: '第 370 期明確放出 9 項暑假第一天活動，除了 AI 圖像與虛擬旅遊，還搭配 Mentimeter、Padlet、Canva、Adobe Firefly 等工具，並提供可直接引用的課前腳本。',
		talking_points: [
			'開場熱身：節目建議在暑假第一天用音樂與故事引導開場，這一流程可快速提氣氛，先聚焦參與而非直接進入複雜講授。',
			'可複製工具鏈：提到 Mentimeter、Padlet、Canva、Adobe Firefly、Google Arts & Culture 等 5 類工具，教師可先從 1~2 個工具建立最小可行流程。',
			'AI 生成作法：AI 圖像與簡報設計被放入同一活動中，能讓學生在 45 分鐘內完成題材建置、上傳與分享。',
			'虛擬與目標：有 1 組「虛擬旅遊」加「暑期目標設定」組合，時間軸為探索→立目標→回顧，適合接續升級為學期導入。',
			'商業訊號辨識：內文含 QRG、書籍與平台導流，教師可視為補充資源，不宜直接當作課程成效證據，需先過濾再採用。',
		],
		quote: 'Use music, storytelling, and AI tools to bring summer themes into your lessons.',
		quote_attribution: 'Easy EdTech, 2026-05-12',
		quote_source_url: 'https://classtechtips.com/2026/05/12/first-day-of-summer-activities-for-classroom-370/',
		quote_source_domain: 'classtechtips.com',
		perspectives: [
			{
				text: '從教學實作觀點看，這一則資訊偏重可行模板而非理論研究，價值在於降低備課摩擦，讓教師在開學前短時間內就能組成一套活動流程。',
				sources: [
					{
						name: 'Easy EdTech',
						url: 'https://classtechtips.com/2026/05/12/first-day-of-summer-activities-for-classroom-370/',
					},
				],
			},
			{
				text: '從治理與採購觀點看，節目同時包含資源導流與贊助提示，雖提供工具方向，但教師若直接照搬可能把教學判斷淪為產品路徑，需以學習目標為唯一篩選條件。',
				sources: [
					{
						name: 'Easy EdTech',
						url: 'https://classtechtips.com/2026/05/12/first-day-of-summer-activities-for-classroom-370/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'Easy EdTech 發布 Podcast 第 370 期，公布 9 項暑假第一天可用的教室活動與工具組合。',
			},
		],
		articles: [
			{
				title: '9 EdTech Activities to Celebrate the First Day of Summer – Easy EdTech Podcast 370',
				link: 'https://classtechtips.com/2026/05/12/first-day-of-summer-activities-for-classroom-370/',
				domain: 'classtechtips.com',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
	{
		id: 'aiClassroom-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '工作方法',
		title: '每週免費教學 AI 工具盤點',
		short_summary: '2026-05-12，作者宣布改為每週發布，整理可免費直接拿來在教室使用的 AI 工具，並同步收錄 Story Terra、Flint、Brisk、ESL 個人化教學等案例。文章未只談新功能，也納入學生 AI 使用指引與 AI 防抄襲作業建議。對教師而言，價值在於同時給出工具可得性、應用方向與課堂治理的參考框架，縮短從「看到新工具」到「能在課堂落地」的落差。',
		emoji: '🧭',
		did_you_know: '文中將 Story Terra 當作可用示例，表示它可在 AI 地球儀上標示超過 100,000 本書的發生地，讓教材可直接切入地理與文學情境。',
		talking_points: [
			'每週更新：從 5/12 起改為固定每週專欄，目標是只推可免費、可直接在課堂採用的 AI 工具與流程。',
			'地圖應用：Story Terra 可展示 100,000 多本書籍的故事地點，給閱讀或跨學科課程提供地理脈絡化素材。',
			'教師定位：文章引用〈Why Using AI Is Fine for Teachers but Not for Students〉的觀點，清楚把教師助教與學生自主學習界線分開。',
			'行政效率：Brisk 被列為處理教學重活工具，對大量備課、行政任務有立即可借鏡的流程端節省意義。',
			'治理並行：除推薦工具外，也同步提供 Flint 及 AI-resistant assignment 方向，提示導入時要同步設計任務與誠信規範。',
		],
		quote: 'AI should be your assistant. You shouldn’t be AI’s assistant.',
		quote_attribution: 'Edublogs, 2026-05-12',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/12/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-151/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: 'Edutopia 式資源偏向教學效率，強調 AI 幫教師做繁重工；該文將這條路徑放在前段，回應一線教師先找得懂好用工具的需求。',
				sources: [
					{
						name: 'Edutopia（原文轉述）',
						url: 'https://larryferlazzo.edublogs.org/2026/05/12/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-151/',
					},
				],
			},
			{
				text: 'ELT Cafe 類建議偏向語文課程個人化設計，與文中重複出現的教師流程優化訊息形成互補：不是只要工具，而是工具對應特定教學任務。',
				sources: [
					{
						name: 'ELT Cafe（原文轉述）',
						url: 'https://larryferlazzo.edublogs.org/2026/05/12/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-151/',
					},
				],
			},
			{
				text: 'Wired 的 Alpha School 案例偏市場與信任議題，與文章最後加入作業倫理、學生規範形成對照：市場熱點可借鏡，但仍需回到學校教學治理。',
				sources: [
					{
						name: 'Wired（原文轉述）',
						url: 'https://larryferlazzo.edublogs.org/2026/05/12/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-151/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: '發文宣告每週固定更新免費教室 AI 工具專欄，並整合 Story Terra、Flint、Brisk 等可參考案例。',
			},
		],
		articles: [
			{
				title: 'This Week’s Free & Useful Artificial Intelligence Tools For The Classroom',
				link: 'https://larryferlazzo.edublogs.org/2026/05/12/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-151/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-12',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: 'aiClassroom-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '跨學段可借鏡：AI 時代歸納式寫作流程',
		short_summary: '這篇 2026 年 5 月 10 日發佈的教師觀察文章整理出一位學生的研究寫作實務：先建立總體論點、再以主題分類段落，再針對每個主題蒐集素材並用顏色標記第一手證據，最後才補寫主題句。作者將此歸納式流程放入 AI 時代「AI-resistant assignments」清單，重點在於讓寫作結構由研究與修正過程逐步生成，避免只靠一開始的固定大綱，對教師調整作業設計更有參考價值。',
		emoji: '✍️',
		did_you_know: '受訪學生會先決定論文方向再分段研究，並以主題分區、色碼證據與邊欄分析筆記並行，研究過程中可反覆回看證據來源，最後再補主題句。',
		talking_points: [
			'先定總論點後分段：受訪者先建立整體論證方向，再依段落主題做分類，讓文章架構在研究補充後自然浮現。',
			'證據色碼與邊欄筆記：學生會將 primary source 逐一色碼化，並在邊欄保留「為何取用」的分析註記，為後續檢核提供追蹤依據。',
			'主題句後補：流程最後才寫 topic sentences，寫作順序被作者形容為「極端反覆」，說明結構不是先寫定、而是由證據驅動。',
			'可直接試作的作業流程：在研究型任務中，教師可先要求學生列出總論點與段落分類，再用蒐證筆記逐步補齊，較符合 AI 時代可檢視的作業要求。',
			'納入 AI 抗性策略：該方法被放進「AI-resistant assignments」名單，核心是讓學生提交可追溯的思考路徑，而非只測試工具使用對錯。',
		],
		quote: 'It\'s extremely iterative.',
		quote_attribution: 'Edublogs, 2026-05-10',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/10/inductive-teaching-has-always-been-an-effective-strategy-perhaps-even-more-so-in-the-ai-era/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '觀察來自作者與學生實作的流程，挑戰傳統「先出大綱」的慣例，改成以研究發展結構；這對擅長套模板授課的課堂設計是明顯的轉向。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/10/inductive-teaching-has-always-been-an-effective-strategy-perhaps-even-more-so-in-the-ai-era/',
					},
				],
			},
			{
				text: '與單純提醒「勿用 AI」的作法不同，本文主張把作業焦點放在證據與流程追溯；在 AI 教育趨勢裡，這是「工具使用」與「寫作能力」判準取捨的另一側。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/10/inductive-teaching-has-always-been-an-effective-strategy-perhaps-even-more-so-in-the-ai-era/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-10',
				date_iso: '2026-05-10',
				content: '文章發表並整理學生訪談，提出從總論點到主題分類、逐步研究、再補題句的歸納式寫作流程。',
			},
		],
		articles: [
			{
				title: 'Inductive Teaching Has Always Been An Effective Strategy, Perhaps Even More So In The AI Era',
				link: 'https://larryferlazzo.edublogs.org/2026/05/10/inductive-teaching-has-always-been-an-effective-strategy-perhaps-even-more-so-in-the-ai-era/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-10',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
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
		title: '智利建校補齊：代間學歷與就業同步上升',
		short_summary: '研究以1965～1966年智利在供給受限社區大規模新增並完備小學教室為準自然實驗，採準實驗設計，結合大量人口普查資料追蹤長期結果。結果顯示，童年曾受這波建校與配師政策影響者，成年後學歷與勞動市場表現皆提高，女性的歷史學歷落差明顯縮小；更重要的是，女性受惠者所生子女有較高機率準時升學且完成更多學歷。研究顯示基礎建設投入可能同時形成當代與跨代人力資本效益。',
		emoji: '🏫',
		did_you_know: '摘要指出，女性受惠者的子女在升學時序與完成程度上有明顯正向差異，且研究稱公共資金邊際價值為13，含成人直接效果與跨代外溢效應。注意：本研究為準實驗研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：本文為 NBER 工作論文，使用準實驗（quasi-experimental）設計，結合大量人口普查資料，比對建校暴露與未暴露群體的成年結果。',
			'數據佐證：摘要未揭露完整樣本數、追蹤期間的精準效果量與信賴區間；目前可確認資訊為 1965–1966 年建校政策與「公共資金邊際價值 13」等核心結果。',
			'時間介面：政策在 1965–1966 年於供給不足社區同步推行，具可識別起訖時點，研究可藉此建立受影響與非受影響人群的長期差異比較。',
			'性別外溢：研究發現女性受惠後，不僅自身學歷改善，且其子女的升學時序與學歷完成也同步提昇，女性學歷落差明顯收斂。',
			'政策意涵：若以「建校供給衝擊」理解教育投入，本研究提示教育支出可帶來跨世代回報，但在缺乏完整數據揭露下，實務決策仍需搭配補強證據。',
			'研究侷限：研究未補齊樣本規模與誤差估計，且僅來自單一國家歷史情境，不能直接視為所有地區都可複製的一刀切政策論證。',
		],
		quote: 'The marginal value of public funds is 13, including direct effects on adults and intergenerational spillovers.',
		quote_attribution: 'NBER, 2026-05-13',
		quote_source_url: 'https://www.nber.org/papers/w35042#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '一個可讀取的重點是，研究將建校供應擴張視為可量測政策工具，將關注點從短期入學率轉到成年與下一代軌跡，對傳統只看年度考核的政策評估是補強。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35042#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口在於結果仍缺少可驗證的效應精準度（樣本數、區間估計未揭露）。單篇研究已顯示方向性，未來仍需更多國家、不同學制與不同世代設定來檢驗外部效度。',
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
				content: '智利在供給不足社區推動新建大量小學教室並補齊師資配置，擴張基礎建設供給。',
			},
			{
				date: '1966-12-31',
				date_iso: '1966-12-31',
				content: '該補齊與配備政策持續到1966年，形成可清楚界定的暴露窗口，供研究進行準實驗比較。',
			},
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: 'NBER 發布工作論文 W35042，回顧該政策對成年與跨代結果的長期影響。',
			},
		],
		articles: [
			{
				title: 'Building Opportunity: The Intergenerational Effects of Chilean School Construction',
				link: 'https://www.nber.org/papers/w35042#fromrss',
				domain: 'nber.org',
				date: '2026-05-13',
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
		title: '大學女性權威導師對學生性別觀的長期影響',
		short_summary: '這份 NBER 工作論文以中東某所精英大學第一學年學生為樣本，利用新生被隨機分派到導師的安排作為準實驗設計，並結合學校行政資料與長達24年的校友問卷追蹤，研究高階權威角色對性別規範的長期作用。主要發現是：女性受試者若被分派女性導師，政治與職場平等態度更偏向開放；男性則出現更保守傾向；在宗教背景學生與男生居多的STEM領域更為明顯。研究指出，並非單純接觸成功女性同儕，而是來自具權威、貢獻高的女性導師，且研究摘要未公開樣本數與效果量。',
		emoji: '⚖️',
		did_you_know: '摘要指出，受試者接受女性權威導師後，女性更可能選修性別主題課程或偏好女性授課者，顯示態度變化可能透過課程與師資選擇被延續。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：研究採用第一學年導師隨機分派，搭配行政紀錄與24年追蹤校友問卷，屬準實驗長期設計。',
			'數據佐證：公開摘要未揭露樣本數、效果量與信賴區間；可確認追蹤期為24年，以及性別態度有可觀察方向差異。',
			'主要結果：女性受試者若分派到女性導師，政治與職場平等觀更高；男性受試者則較保守，反映權威身分改變兩性反應方向。',
			'效應條件：宗教背景學生與男生比例較高的 STEM 科系裡，女性導師對性別規範的影響更明顯。',
			'機制線索：研究認為影響非來自一般接觸成功女性同儕，而是來自高階、高價值加值的女性權威，同時伴隨女性學生課程/師資偏好調整。',
			'進一步含義：作者提出「進步悖論」：女性權威增加能擴大女性機會，但亦可能在男性中引發更強保守回應。',
		],
		quote: 'More broadly, our findings reveal a progress paradox whereby gains in female representation in elite authority expand opportunities for women while intensifying backlash among men, thereby deepening gender polarization.',
		quote_attribution: 'NBER Working Paper 35174, 2026-05-13',
		quote_source_url: 'https://www.nber.org/papers/w35174#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '延伸研究缺口：目前樣本來自單一精英大學，結果有利於檢驗機制，但未能直接推廣到非精英高教體系或其他國家。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35174#fromrss',
					},
				],
			},
			{
				text: '張力在於政策含義：研究揭示女性權威可形成正向激勵，但同時又加劇男性保守化，代表同一制度調整可能同時產生授權與反撥。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35174#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Authority Figures and the Polarization of Gender Norms',
				link: 'https://www.nber.org/papers/w35174#fromrss',
				domain: 'nber.org',
				date: '2026-05-13',
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
		title: '四年制大學女性化推升非大學男性婚姻壓力',
		short_summary: '這份 2026 年刊於 NBER 的工作論文，以美國為研究場域，比對半個世紀四年制大學入學結構與婚姻結果，採用跨世代與跨地區的觀察性設計。研究指出，四年制大學由男性占多數轉為女性為主後，學歷較高女性婚姻率未明顯下降，反而轉向與高收入非大學男性配偶。此同時搭配非大學男性整體經濟地位下滑，導致未取得大學學位女性在婚配上受限。摘要未揭露樣本數、追蹤期間與精準模型。',
		emoji: '📉',
		did_you_know: '研究估計，未婚且未與大學女性配偶、同時具備「高於全國收入中位數」條件的非大學男性比例已經下降超過 50%，使非大學女性可婚配的穩定男性更少。注意：本研究為觀察性工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：採觀察性研究，使用美國跨世代與跨地區教育、婚姻資料做關聯估計，未執行 RCT 或隨機干預設計。',
			'數據佐證：摘要明列美國四十年來大學生源性別轉換，以及「非大學高收入且未婚對象不含大學女性」比例下降超過 50%，但未公開樣本數與效果量。',
			'婚姻市場張力：當大學男性供給變少時，學歷女性婚姻率仍可維持，主要因其轉向與高收入非大學男性形成婚配。',
			'結構性衝擊：論文主張非大學男性經濟地位同步走弱，放大了非大學女性婚姻選擇受限，這是婚姻率差距的關鍵傳導鏈。',
			'地區比較發現：非大學男性失業與入獄率較低的地區，教育差距在婚姻結果上的落差較小，地方經濟條件具明顯調節效果。',
		],
		quote: 'As college men have become increasingly scarce, college women have maintained stable marriage rates by marrying high-earning non-college men.',
		quote_attribution: 'NBER, 2026-05-13',
		quote_source_url: 'https://www.nber.org/papers/w35179#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '延伸結構解釋：研究將差距歸因於大學男性供需失衡與非大學男性經濟衰退重疊，但未同時納入家庭價值觀轉變，仍有政策與社會規範層面的解釋空間。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35179#fromrss',
					},
				],
			},
			{
				text: '研究缺口：只有美國情境的工作論文，無法直接對台灣或其他地區推論；若要比較，需加上本地長期追蹤資料及婚姻行為對照文獻。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35179#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-13',
				date_iso: '2026-05-13',
				content: 'NBER 發布《Bachelors Without Bachelor\'s: Gender Gaps in Education and Declining Marriage Rates》工作論文。',
			},
		],
		articles: [
			{
				title: 'Bachelors Without Bachelor\'s: Gender Gaps in Education and Declining Marriage Rates',
				link: 'https://www.nber.org/papers/w35179#fromrss',
				domain: 'nber.org',
				date: '2026-05-13',
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
		title: '美國學校禁機政策：青年心理效應仍未明朗',
		short_summary: '本研究是NBER 2026年工作論文，首次以美國資料檢驗學校禁用智慧型手機是否改善青少年心理健康。研究採用2016至2024年NSCH問卷資料，搭配合成差異中的差異(Synthetic DID)模型，追蹤1州有兩個禁令後觀測期、2州有一個禁令後觀測期的樣本。公開摘要未揭露精確樣本數與效果量，結果僅顯示並未看到螢幕時間下降或心理福祉明顯提升，結論仍屬早期、較保守的政策線索。',
		emoji: '📱',
		did_you_know: '該研究在公開摘要中只提到以NSCH 2016–2024資料、少數州別的政策變動進行估計，尚無法直接判定禁機必然改善心理健康；注意：本研究為準實驗觀察研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：使用合成差異中的差異模型，結合美國NSCH(2016–2024)問卷資料，屬準實驗量化研究框架，目標是追蹤政策衝擊。',
			'數據佐證：公開摘要未揭露樣本數與效果量；可確認觀測期為2016至2024，且僅1州有兩段後禁令觀測、2州有一段。',
			'核心結果：早期估計未發現「禁機」帶來螢幕時間明顯下降，心理福祉也未呈現穩定正向改善。',
			'研究解讀：作者將結果稱為初步證據，表示目前資料不足以支持「禁機必然有效」的政策宣稱。',
			'外推限制：樣本州別與觀測窗口有限，尚未能排除州際政策實施差異、同時代外部事件等因素。',
		],
		quote: 'Overall, these early results provide no clear evidence that the school ban policy reduced screentime or improved psychological wellbeing.',
		quote_attribution: 'NBER, 2026-05-13',
		quote_source_url: 'https://www.nber.org/papers/w35181#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究以因果識別取向進行，但因觀測州別與暴露時段有限，仍偏向早期探索結果，對全美政策成效外推仍不足。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35181#fromrss',
					},
				],
			},
			{
				text: '可延伸研究缺口是缺少學段、州別與執行型態分層，至少目前看不出禁機本身就是「唯一」或「主要」改善心理健康的證據。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35181#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Youth Mental Health and School Smartphone Bans: Early Evidence',
				link: 'https://www.nber.org/papers/w35181#fromrss',
				domain: 'nber.org',
				date: '2026-05-13',
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
		title: '未錨定成績制會扭曲大學能力比較',
		short_summary: 'NBER 2026 年工作論文指出，大學原始成績常混入課程難度與授課標準，直接比較學生時可能扭曲排名。研究以理論推導與固定效果模型為主，結合完整成績單與跨課修課重疊估計可比訊號，稱為 eigengrades。結果顯示在加性框架下，row-mean、affinity-spectral、graph-Laplacian 三種方法可收斂到同一調整結果；未設外部錨定時，字母等第無法純粹分離課程難度與標準。作者同時指出，精確校正難度可降低學生為衝高成績而改修易課的誘因。',
		emoji: '🎓',
		did_you_know: '研究將可比性定義為「將課程條件剝離後的學生訊號」，不是單科成績直接排序；注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：研究為 NBER 工作論文，採理論模型與固定效果識別法，未描述 RCT、實驗或問卷，主要提供方法論可重複性檢驗。',
			'數據佐證：摘要提到以完整成績單與跨課重疊進行估計，但公開摘要未揭露樣本數、追蹤期間或效果量，無法補算信賴區間。',
			'方法結論：在 scalar additive 基礎下，row-mean、affinity-spectral、graph-Laplacian 三種算法皆可導出相同 eigengrades，對應固定效果調整表示。',
			'制度風險：若成績制度未錨定，共通字母等第會混進課程難度與評分標準，單看 GPA 對學生能力跨課比較易失真。',
			'治理含意：作者推論，精確難度校正可移除選更容易課以抬高中位數的明顯誘因，但仍可能保有其他策略操作與治理邊際。',
		],
		quote: 'Exact difficulty adjustment removes the direct report-mediated incentive to choose easier courses and eliminates a competitive enrollment channel behind grade inflation, while leaving other strategic and governance margins intact.',
		quote_attribution: 'NBER, 2026-05-13',
		quote_source_url: 'https://www.nber.org/papers/w35183#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '本研究目前提供的是方法架構與識別條件，未交付跨校實證或時序政策實驗；延伸研究缺口在於要以真實學生資料驗證 eigengrades 對入學、錄取與獎學金決策的效果。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35183#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'What Does A Grade Mean? Informativeness and Strategic Manipulation of Grading Systems',
				link: 'https://www.nber.org/papers/w35183#fromrss',
				domain: 'nber.org',
				date: '2026-05-13',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'taiwanEduPolicy-gmail-教育部-ai-數位學習',
		cluster_number: 'gmail-教育部-ai-數位學習',
		unique_domains: 17,
		number_of_titles: 24,
		category: '教育政策與治理',
		editorial_lens: '教學流程、治理授權',
		title: '本週『教育部 AI 數位學習』焦點：政策到校的多點擴展',
		short_summary: '「AI Di+實驗方案」延展成為教育部最新主軸：16所大學與185校展開國中小AI學伴合作，並結合偏鄉師資培育與《館館有AI》資源平權試辦。台南跨校交流與澎湖教務徵稿顯示地方端已有實作端訊號，但目前仍缺少各案預算金額、時程達標與成效指標的公開驗證。',
		emoji: '🤖',
		did_you_know: '台南安定國中跨校交流有4位教師入班示範、26位嘉義數位團教師到場觀摩，並使用AI古人聊天室與Padlet進行文本與文法分組學習。',
		talking_points: [
			'試點外延：AI Di+由16所大學聯手185校推進國中小實驗，重點放在數位教學工具與AI學伴陪伴，顯示政策先做規模化部署。',
			'師資轉譯：教育部與國立台北教育大學簽署MOU，主張公私協力與實作導向，將偏鄉師資培育納入AI教學改革主軸。',
			'現場證據：台南安定國中跨校交流共4位授課教師、26位觀摩教師，並在課堂中實測AI古人聊天室與Padlet，較明確反映一線做法。',
			'資源平權：教育部《館館有AI》規畫2026年第四季於3間圖書館試辦，民眾持借書證可免費使用ChatGPT、Gemini，落點指向服務入口。',
			'地方擴散：澎湖教育處公告徵稿列出「AI開放教育學習環境」與AI數位課程教學設計，代表政策開始進入地方行政題目清單。',
			'報導節奏：台北報導與影響力案例除政策訊號外，亦出現學藝展、學涯營等跨場域試作，反映AI導入正在由單一方案轉為多域實驗。',
		],
		quote: '用AI和古人聊天很有趣，可以自己思考問題，也可以和同學一起討論。',
		quote_attribution: '自由時報電子報, 2026-05-11',
		quote_source_url: 'https://news.ltn.com.tw/news/life/breakingnews/5433075',
		quote_source_domain: 'news.ltn.com.tw',
		perspectives: [
			{
				text: '官方訊號偏重制度與資源編排，媒體在一線學校、圖書館與跨校交流看到的是課室操作、工具使用與教學回饋，兩者差別是「規劃與落地」並行但未同步公開同一套成果指標。',
				sources: [
					{
						name: '教育部',
						url: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=73A09C2753775ABF',
					},
					{
						name: '自由時報電子報',
						url: 'https://news.ltn.com.tw/news/life/breakingnews/5433075',
					},
				],
			},
			{
				text: '中心政策的「AI Di+」與「館館有AI」偏向資源配置，地方回饋則聚焦教師備課、觀課機制與具體工具（AI古人聊天室、Padlet），顯示執行端更關心能否日常化。',
				sources: [
					{
						name: 'TCNEWS',
						url: 'https://www.tcnews.com.tw/education/item/29292.html',
					},
					{
						name: '台南市教育局/安定國中報導',
						url: 'https://news.ltn.com.tw/news/life/breakingnews/5433075',
					},
				],
			},
			{
				text: '部會與基金會合作的高職高中實作訊號（如學涯營、AI × 學習力）顯示政策不是只侷限於學術試點，也在職涯、活動與校務數位轉型中擴散，但仍缺少與中央方案的正式串接路徑描述。',
				sources: [
					{
						name: 'TCPT',
						url: 'https://www.tcpttw.com/other/other_life/2026/05/11/272234/',
					},
					{
						name: '聯合新聞網',
						url: 'https://udn.com/news/story/6885/9493278',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-06',
				date_iso: '2026-05-06',
				content: '教育部公布AI Di+實驗式合作，列出16所大學攜手185校推進國中小AI學伴教學。',
			},
			{
				date: '2026-05-07',
				date_iso: '2026-05-07',
				content: '多家媒體重述AI Di+與AI學伴主軸，並將中央訊息轉向家長及學校可讀的新聞報導。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '教育部與國立臺北教育大學簽署MOU、推動偏鄉師資新模式；同時宣布《館館有AI》在3間圖書館試辦，提供ChatGPT與Gemini免費使用。',
			},
			{
				date: '2026-05-10',
				date_iso: '2026-05-10',
				content: '地方與學校場域持續出現AI導入案例，包含新北市夏令營與國文、英語文法相關跨校教學實作。',
			},
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: '台南安定國中舉辦跨校數位學習交流，教師與觀摩人數、教學工具操作被明確記錄；澎湖教育處同步對外列出AI教案與課程設計徵稿主軸。',
			},
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: '台中教育學術平台與新聞再度刊載AI學伴研究基地徵件資訊，顯示政策補件與機制設計進一步落在申件與執行準備流程。',
			},
		],
		articles: [
			{
				title: '教育部115-116年教師適性教學輔助平臺生成式AI學伴研究基地學校徵件須知',
				link: 'https://www.tngs.tn.edu.tw/2026/05/12/%E6%95%99%E8%82%B2%E9%83%A8115-116%E5%B9%B4%E6%95%99%E5%B8%AB%E9%81%A9%E6%80%A7%E6%95%99%E5%AD%B8%E8%BC%94%E5%8A%A9%E5%B9%B3%E8%87%BA%E7%94%9F%E6%88%90%E5%BC%8Fai%E5%AD%B8%E4%BC%B4%E7%A0%94%E7%A9%B6/',
				domain: 'tngs.tn.edu.tw',
				date: '2026-05-12',
			},
			{
				title: 'AI古人聊天室、重點整理英語文法台南安定國中數位學習跨校交流',
				link: 'https://news.ltn.com.tw/news/life/breakingnews/5433075',
				domain: 'news.ltn.com.tw',
				date: '2026-05-12',
			},
			{
				title: '韓國科學教育大學聯手勞動部推24門全民AI免費線上課',
				link: 'https://www.scooptw.com/marketersgo/473402/%E9%9F%93%E5%9C%8B%E7%A7%91%E5%AD%B8%E6%95%99%E8%82%B2%E5%A4%A7%E5%AD%B8%E8%81%AF%E6%89%8B%E5%8B%9E%E5%8B%95%E9%83%A8-%E6%8E%A824%E9%96%80%E5%85%A8%E6%B0%91ai%E5%85%8D%E8%B2%BB%E7%B7%9A%E4%B8%8A/',
				domain: 'scooptw.com',
				date: '2026-05-12',
			},
			{
				title: '最新消息-澎湖縣政府教育處',
				link: 'https://www.penghu.gov.tw/edu/home.jsp?id=93&act=view&dataserno=202605110005',
				domain: 'penghu.gov.tw',
				date: '2026-05-11',
			},
			{
				title: '不只學AI，更學怎麼學！影響力教育基金會攜手高中導入「AI × 學習力」',
				link: 'https://www.tcpttw.com/other/other_life/2026/05/11/272234/',
				domain: 'tcpttw.com',
				date: '2026-05-11',
			},
			{
				title: '盛源PERSONA以AI互動科技走進慈文國小嘉年華展現智慧顯示與數位藝術教育新體驗',
				link: 'https://www.cna.com.tw/business/chinese/433072',
				domain: 'cna.com.tw',
				date: '2026-05-11',
			},
			{
				title: '不只學AI，更學怎麼學！影響力教育基金會攜手高中導入「AI × 學習力」',
				link: 'https://tw.news.yahoo.com/%E4%B8%8D%E5%8F%AA%E5%AD%B8ai-%E6%9B%B4%E5%AD%B8%E6%80%8E%E9%BA%BC%E5%AD%B8-%E5%BD%B1%E9%9F%BF%E5%8A%9B%E6%95%99%E8%82%B2%E5%9F%BA%E9%87%91%E6%9C%83%E6%94%9C%E6%89%8B%E9%AB%98%E4%B8%AD%E5%B0%8E%E5%85%A5-ai-%E5%AD%B8%E7%BF%92%E5%8A%9B-084920178.html',
				domain: 'tw.news.yahoo.com',
				date: '2026-05-10',
			},
			{
				title: '南韓擴建69處AI數位學習中心推動全民AI生活圈',
				link: 'https://more-news.tw/611008/',
				domain: 'more-news.tw',
				date: '2026-05-10',
			},
			{
				title: 'AI時代不迷航新北「學涯領航員」夏令營開跑從興趣出發找到方向',
				link: 'https://udn.com/news/story/6885/9493278',
				domain: 'udn.com',
				date: '2026-05-10',
			},
			{
				title: '公私協力打造偏鄉師資培育新典範推動AI及教學實作導向創新師培模式',
				link: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=73A09C2753775ABF',
				domain: 'edu.tw',
				date: '2026-05-08',
			},
			{
				title: '教育部「館館有AI」：拿借書證ChatGPT、Gemini免費用！資格與啟動時間？',
				link: 'https://www.gvm.com.tw/article/129951',
				domain: 'gvm.com.tw',
				date: '2026-05-08',
			},
			{
				title: '若環境影響有限，政府教育補助政策應如何轉型？',
				link: 'https://technews.tw/ai-agent/dna-decide-the-social-status/7458/',
				domain: 'technews.tw',
				date: '2026-05-08',
			},
			{
				title: '教育部推AI Di+實驗方案AI學伴助培育自主學習力',
				link: 'https://www.msn.com/zh-tw/news/living/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8ai-di-%E5%AF%A6%E9%A9%97%E6%96%B9%E6%A1%88-ai%E5%AD%B8%E4%BC%B4%E5%8A%A9%E5%9F%B9%E8%82%B2%E8%87%AA%E4%B8%BB%E5%AD%B8%E7%BF%92%E5%8A%9B/ar-AA22kKPM',
				domain: 'msn.com',
				date: '2026-05-07',
			},
			{
				title: '守護個資教育部啟動教育機構個資行政檢查',
				link: 'https://money.udn.com/money/story/5612/9485601?from=udnamp-referralnews_ch1001artbottom',
				domain: 'money.udn.com',
				date: '2026-05-07',
			},
			{
				title: '南台灣AI生態鏈成形！數位經濟國際攜手產學資本打造「營收導向AI新時代」',
				link: 'https://n.yam.com/Article/20260506443324',
				domain: 'n.yam.com',
				date: '2026-05-07',
			},
			{
				title: 'AI進入教室！教育部推AI學伴16所大學攜手185校實驗教學',
				link: 'https://www.tcnews.com.tw/education/item/29292.html',
				domain: 'tcnews.com.tw',
				date: '2026-05-06',
			},
		],
		domains: [
			{ name: 'tngs.tn.edu.tw' },
			{ name: 'news.ltn.com.tw' },
			{ name: 'scooptw.com' },
			{ name: 'penghu.gov.tw' },
			{ name: 'tcpttw.com' },
			{ name: 'cna.com.tw' },
			{ name: 'tw.news.yahoo.com' },
			{ name: 'tw.stock.yahoo.com' },
			{ name: 'more-news.tw' },
			{ name: 'udn.com' },
			{ name: 'edu.tw' },
			{ name: 'gvm.com.tw' },
			{ name: 'technews.tw' },
			{ name: 'msn.com' },
			{ name: 'money.udn.com' },
			{ name: 'n.yam.com' },
			{ name: 'tcnews.com.tw' },
		],
	},
	{
		id: 'taiwanEduPolicy-gmail-ai-融入教學-高中',
		cluster_number: 'gmail-ai-融入教學-高中',
		unique_domains: 3,
		number_of_titles: 3,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '本週「AI 融入教學 高中」焦點：跨段校務與治理爭點',
		short_summary: '本次快訊聚合顯示，AI融入教學正出現「地方示範」與「學術治理」兩條訊號：新北市5月8日辦理114學年度STEAM頒獎，公布27組教案、30組作品與122位師生，顯示校務層級已開始落地整合；南大論壇5月8日至9日則把AI倫理、數位公平與治理放入主軸，討論其影響教育權益的制度層面。台灣側重可複製教學設計與研討交流，但仍缺少推廣預算、師資訓練強度與成效追蹤的明確數據。',
		emoji: '🧠',
		did_you_know: '新北市將本次STEAM頒獎的教案與作品同步公告到國民教育地方輔導團及STEAM大聯盟平台，讓其他學校可直接借鏡參考，並延伸跨校資源共享。',
		talking_points: [
			'落地示範：新北於5月8日在民安國小辦理114學年度STEAM頒獎，正式披露27組教案、30組學生作品與122位獲獎師生，顯示AI教學在校務中已有可量化成果。',
			'課程工具化：新北聲稱完成112學年度全國首本可操作STEAM課例手冊，內容強調AI與美感設計、跨域整合，目標讓教師能直接改寫教案流程。',
			'資源擴散：獲獎成果不只列入表揚名單，而是透過國民教育地方輔導團與STEAM大聯盟平台公開，提供其他校方可複製的具體參考。',
			'治理辯論：南大論壇在5月8日至9日舉辦，聚焦生成式AI、數位不平等、教育公平與教師地位，顯示AI議題已進入教育治理與權利分配層次。',
			'觀點差異：文匯網則強調AI賦能資優教育與學生潛能發展，但未搭配可驗證的台灣校務推廣規模或時程指標，形成政策期待與落地實務的訊號落差。',
		],
		quote: 'AI技術融入教育的倫理反思、數位不平等、教育治理是本次論壇關注的核心。',
		quote_attribution: '南大教育學院, 2026-05-09',
		quote_source_url: 'https://www.cna.com.tw/postwrite/chi/433004',
		quote_source_domain: 'cna.com.tw',
		perspectives: [
			{
				text: '新北訊號是行政端的實務推進：以比賽、平台與手冊建立教師可直接採用的路徑，優先聚焦可操作教材而非先定義新制規範。',
				sources: [
					{
						name: 'n.yam.com',
						url: 'https://n.yam.com/Article/20260508818614',
					},
				],
			},
			{
				text: '南大訊號是治理層面：討論重點不在個別教案，而在AI落地後的公平、倫理與制度責任，試圖把高教與政策對話接回K-12影響。',
				sources: [
					{
						name: '中華新聞',
						url: 'https://www.cna.com.tw/postwrite/chi/433004',
					},
				],
			},
			{
				text: '文匯網訊號偏向政策藍圖與人才導向，聚焦資優教育與社會需求回應，但尚未提供與台灣地方試辦同樣可追蹤的推動指標。',
				sources: [
					{
						name: 'wenweipo.com',
						url: 'https://www.wenweipo.com/a/202605/06/AP69fa4f02e4b0b49ad1b9aa84.html',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-06',
				date_iso: '2026-05-06',
				content: '文匯網報導AI賦能資優教育的做法，並提及結合初中服務學習與高中價值教育課程的設計方向。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '新北市於民安國小辦理114學年度STEAM教案與作品頒獎，列示27組教案、30組作品及122位師生參與。',
			},
			{
				date: '2026-05-09',
				date_iso: '2026-05-09',
				content: '南大論壇續辦至5月9日，主軸為社會轉型下教育社會學，納入生成式AI、數位治理與教育公平討論。',
			},
		],
		articles: [
			{
				title: '新北STEAM教案與作品徵選揭曉獲獎作品展現AI跨域學習成果',
				link: 'https://n.yam.com/Article/20260508818614',
				domain: 'n.yam.com',
				date: '2026-05-09',
			},
			{
				title: '臺灣教育社會學論壇於南大登場多國學者共探數位時代教育新議題',
				link: 'https://www.cna.com.tw/postwrite/chi/433004',
				domain: 'cna.com.tw',
				date: '2026-05-09',
			},
			{
				title: '【數教新知】AI賦能資優教育充分發揮學生潛能- 香港文匯網 - 文匯報',
				link: 'https://www.wenweipo.com/a/202605/06/AP69fa4f02e4b0b49ad1b9aa84.html',
				domain: 'wenweipo.com',
				date: '2026-05-06',
			},
		],
		domains: [
			{ name: 'n.yam.com' },
			{ name: 'cna.com.tw' },
			{ name: 'wenweipo.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-4',
		cluster_number: 4,
		unique_domains: 3,
		number_of_titles: 3,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '跨學段校園治理：聯邦授權與經費壓力',
		short_summary: '5/11 到 5/12 美國校園題材連續爆發。聯邦法官認定川普政府 2025 年政策變動未改寫 ICE 在學校地面的執法權限，學校安全程序仍需依聯邦框架設計。同時高等教育端也出現財務壓力擴大：科羅拉多州立大學系統削減多所校舍預算，哥倫比亞大學則遭穆迪展望轉為 negative，K-12 亦有 38% 教育科技主管憂心經費下修衝擊 1:1，顯示政策權責與資源持續性正在同步重塑校務決策。',
		emoji: '⚖️',
		did_you_know: 'CoSN 調查顯示，38% 的 K-12 教育科技領導人預期預算縮減會直接衝擊 1:1 設備專案，對已大量推行「每人一機」的學區是明確的更新與維運風險。',
		talking_points: [
			'權限定調：法官認定川普政府 2025 年 ICE 政策變動未改寫學校地面執法授權，學校安全程序仍需以聯邦框架為上。',
			'高教壓力：科羅拉多州立大學系統在 Fort Collins 與 Pueblo 兩校刪減數百萬美元級預算，顯示州方補助停滯下的營運緊縮。',
			'信號轉弱：穆迪將哥倫比亞大學展望調降為 negative，將聯邦壓力與國際生招生不確定列入主要風險。',
			'科技與經費：雖多數學區已推行 1:1，38% 專責仍預料經費下修會衝擊採購、維修與更新節奏。',
			'資源調整：部分高教單位因乾旱壓力升級用水管理與灌溉機制，顯示資源治理同時影響營運與教學支持。',
		],
		quote: 'The Trump administration\'s 2025 policy change didn\'t alter the agency\'s authority to pursue such actions.',
		quote_attribution: 'K-12 Dive, 2026-05-11',
		quote_source_url: 'https://www.k12dive.com/news/judge-denies-pause-on-ice-enforcement-on-school-grounds/819907/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '高等教育報導把焦點放在財務結構風險，州補助停滯、信評調降與設施節流合在一起，讓「能不能持續經營」成為治理主軸而非單純教學議題。',
				sources: [
					{
						name: 'Higher Ed Dive',
						url: 'https://link.highereddive.com/view/69f985b55f3be2f7a30c0c61r6ndz.1fao/cf288894',
					},
				],
			},
			{
				text: 'K-12 端則先解決法定權責邊界：法院判決使學區在校園安全與移民執法接觸上需先確定程序合規，同時再向經費現況檢視 1:1 與資源配置。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/judge-denies-pause-on-ice-enforcement-on-school-grounds/819907/',
					},
				],
			},
			{
				text: '兩類來源共同指向同一趨勢：不同學段不再能各自獨立，聯邦授權決定底線，經費能力決定可行上限，校園治理正在被權力與資源同步重寫。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://link.k12dive.com/view/69f985b55f3be2f7a30c0c61r6ne0.wl7/23f4de57',
					},
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/judge-denies-pause-on-ice-enforcement-on-school-grounds/819907/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-11',
				date_iso: '2026-05-11',
				content: '聯邦法官裁定不停止 ICE 在學校地面的執法，維持其權限框架，影響學區安全與法遵流程。',
			},
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: '高等教育消息指出科羅拉多州立大學系統進行預算刪減，並提及穆迪將哥倫比亞大學展望下調為 negative。',
			},
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'K-12 政策與科技報導整理出 CoSN 調查結果：38% 教育科技主管預估預算縮減將影響 1:1 計畫。',
			},
		],
		articles: [
			{
				title: 'Colorado State hit with layoffs | Moody’s lowers Columbia’s outlook',
				link: 'https://link.highereddive.com/view/69f985b55f3be2f7a30c0c61r6ndz.1fao/cf288894',
				domain: 'link.highereddive.com',
				date: '2026-05-12',
			},
			{
				title: 'Judge won’t pause ICE policy | The state of 1:1 device programs',
				link: 'https://link.k12dive.com/view/69f985b55f3be2f7a30c0c61r6ne0.wl7/23f4de57',
				domain: 'link.k12dive.com',
				date: '2026-05-12',
			},
			{
				title: 'Judge denies pause on ICE enforcement on school grounds',
				link: 'https://www.k12dive.com/news/judge-denies-pause-on-ice-enforcement-on-school-grounds/819907/',
				domain: 'k12dive.com',
				date: '2026-05-11',
			},
		],
		domains: [
			{ name: 'link.highereddive.com' },
			{ name: 'link.k12dive.com' },
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-7',
		cluster_number: 7,
		unique_domains: 2,
		number_of_titles: 2,
		category: '教育政策與治理',
		editorial_lens: '資安信任',
		title: '跨學段警訊：平台資安與高教裁員',
		short_summary: '2026/05/09，教育產業同步拋出兩則高風險訊號：K-12 平台 Instructure 已對外確認資安事件；而 Kent State University 也宣布擬裁撤最多 45 名員工。兩則消息都源自 Industry Dive 家族的 Weekender 摘要，顯示從 K-12 到高教都面臨「技術供應鏈」與「人事組織」的治理壓力。這意味著教育機構不只要有資安通報與回應流程，也要同步檢視人力編制韌性，否則在風險與缺工夾擊下，服務穩定性都會受衝擊。',
		emoji: '⚠️',
		did_you_know: '兩篇來源都標示 2026-05-09，皆為 Industry Dive 的 Weekender 週報；一篇指向 Instructure 資安事件，另一篇揭示 Kent State 擬裁至多 45 名員工，能直接比較同日不同學段的治理壓力。',
		talking_points: [
			'資安揭露：Instructure 在 2026/05/09 的標題中已確認發生資安事件，顯示平台運作風險在校務流程中可能直接中斷教學服務連續性。',
			'裁員訊號：Kent State University 被報導「最多裁員 45 名」，這個上限數字代表高教院校在年度預算壓力下傾向快速壓縮人力成本。',
			'雙面向衝擊：消息同時出現在 K-12 與高教兩個教育層級，從技術事故到行政裁員，皆指向組織治理能力不足或未跟上變局。',
			'時間一致性：兩則都在同週 2026-05-09 發佈，適合作為風險週報交叉比對，判斷業界是否正在進入資安與人事同時緊縮的周期。',
			'匿名整理可行：原訊息中未以作者姓名提供核心立場，保留職稱與媒體資訊即可重構事件脈絡，符合站內匿名出版原則。',
		],
		quote: 'Kent State University to lay off up to 45 staffers',
		quote_attribution: 'Higher Ed Dive，2026-05-09',
		quote_source_url: 'https://link.highereddive.com/click/45635003.68810/aHR0cDovL3d3dy5oaWdoZXJlZGRpdmUuY29tL3NpZ251cC8/69f985b55f3be2f7a30c0c61B0d58b2b4',
		quote_source_domain: 'highereddive.com',
		perspectives: [
			{
				text: 'K-12 Dive 的焦點落在教學平台端的資安事件確認，將風險定位為服務供應鏈與系統穩定問題，重心偏向「平台可信任度」。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://link.k12dive.com/click/45635002.46058/aHR0cDovL3d3dy5rMTJkaXZlLmNvbS9zaWdudXAv/69f985b55f3be2f7a30c0c61B0e4e198e',
					},
				],
			},
			{
				text: 'Higher Ed Dive 則把高教機構裁員放在同一視角，透過「最多 45 名」這個明確數字凸顯組織重整與治理授權壓力，偏重行政決策層面的可持續性。',
				sources: [
					{
						name: 'Higher Ed Dive',
						url: 'https://link.highereddive.com/click/45635003.68810/aHR0cDovL3d3dy5oaWdoZXJlZGRpdmUuY29tL3NpZ251cC8/69f985b55f3be2f7a30c0c61B0d58b2b4',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-09',
				date_iso: '2026-05-09',
				content: 'K-12 Dive 發布 Weekender 內容，標題顯示 Instructure 確認發生資安事件。',
			},
			{
				date: '2026-05-09',
				date_iso: '2026-05-09',
				content: 'Higher Ed Dive 發布 Weekender 內容，指出 Kent State University 擬裁撤最多 45 名員工。',
			},
		],
		articles: [
			{
				title: 'Weekender: Instructure confirms cybersecurity incident',
				link: 'https://link.k12dive.com/click/45635002.46058/aHR0cDovL3d3dy5rMTJkaXZlLmNvbS9zaWdudXAv/69f985b55f3be2f7a30c0c61B0e4e198e',
				domain: 'k12dive.com',
				date: '2026-05-09',
			},
			{
				title: 'Weekender: Kent State University to lay off up to 45 staffers',
				link: 'https://link.highereddive.com/click/45635003.68810/aHR0cDovL3d3dy5oaWdoZXJlZGRpdmUuY29tL3NpZ251cC8/69f985b55f3be2f7a30c0c61B0d58b2b4',
				domain: 'highereddive.com',
				date: '2026-05-09',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
			{ name: 'highereddive.com' },
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
