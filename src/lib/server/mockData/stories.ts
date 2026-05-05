import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';

// ─── Stories synthesized 2026-05-05 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 攜手 PwC 推 AI 代理人，重塑企業財務長職能',
		short_summary: '全球四大會計師事務所之一的 PwC 與 OpenAI 宣布合作，將 AI 代理人導入企業財務部門，自動化預測、稽核控制與報表流程，目標是「現代化 CFO 辦公室」。對台灣高中教師而言，這個案例具體示範了 AI 取代的不是低技能工作，而是高度仰賴數字判斷的專業財務職位——這對正在思考「AI 時代學生要學什麼」的教師，是極具說服力的課堂素材。',
		emoji: '💼',
		did_you_know: 'CFO（財務長）職位通常需要 10 年以上的財會與管理經驗，年薪動輒數百萬元。PwC 此次合作意味著即便是高薪專業職，也正面臨 AI 代理人的系統性滲透——AI 的影響範圍已超越過去預想的「白領安全區」。',
		talking_points: [
			'OpenAI 與全球四大會計師事務所 PwC 達成企業級 AI 代理人合作，目標用戶為大型企業財務部門',
			'合作核心功能涵蓋：財務預測自動化、內部控制強化、報表流程重構，全面針對 CFO 辦公室',
			'此案例顯示 AI 代理人已從「輔助工具」升級為可端對端處理複雜財務決策的自主系統',
			'PwC 在全球擁有超過 36 萬名員工，與 OpenAI 合作將影響其向企業客戶提供服務的方式',
			'台灣企業與教育界可觀察此模式：財會、審計相關科系學生的職涯規劃將因此受到結構性衝擊',
		],
		quote: 'Together, we\'re helping enterprises harness AI agents to automate finance workflows, improve forecasting, and modernize the CFO function.',
		quote_attribution: 'OpenAI 官方部落格，2026-05-04',
		quote_source_url: 'https://openai.com/index/openai-pwc-finance-collaboration',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '技術樂觀視角：AI 代理人接手重複性財務作業，能讓 CFO 團隊聚焦高價值策略決策，提升企業整體競爭力。PwC 選擇與 OpenAI 深度合作，也代表頂尖專業服務業認可 AI 在複雜判斷場景的成熟度。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
			{
				text: '勞動衝擊視角：財務分析師、初階會計師等職位若被 AI 代理人大量取代，職場入門門檻將大幅提高，年輕人進入財務業的機會可能被壓縮，加劇專業人才斷層與就業不平等。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
			{
				text: '教育政策視角：若連四大會計師事務所都在系統性導入 AI 取代傳統財會工作，台灣商管、財會相關科系的課程設計是否仍符合產業需求，值得教育主管機關與高中職端提前因應。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
		],
		articles: [
			{
				title: 'OpenAI and PwC collaborate to reimagine the office of the CFO',
				link: 'https://openai.com/index/openai-pwc-finance-collaboration',
				domain: 'openai.com',
				date: '2026-05-04',
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
		title: 'Google 四月 AI 新功能：行動端 AI 影片生成能力亮相',
		short_summary: 'Google 於 2026 年 4 月發布多項 AI 更新，亮點之一是展示以 AI 生成水下場景的 mp4 影片，以及行動裝置上的 AI 影片製作模擬介面。台灣高中教師應留意此趨勢：AI 影片生成工具正快速走向行動化與普及化，學生未來可能以手機直接製作高度擬真的 AI 影片。這對媒體素養教育、視覺藝術課程及數位倫理討論皆帶來新挑戰，教師需提前建立辨別 AI 生成影像的能力，並規劃相應的課堂引導策略。',
		emoji: '🎬',
		did_you_know: 'AI 影片生成已能模擬水下光線折射與粒子流動等複雜物理現象，這類場景過去需要專業攝影潛水設備與後製團隊，現在透過 AI 模型即可在幾分鐘內生成，製作門檻大幅降低。',
		talking_points: [
			'Google 在 2026 年 4 月集中發布多項 AI 功能更新，顯示其在生成式 AI 的產品化節奏持續加速',
			'AI 影片生成能力已可處理水下場景等高難度視覺題材，呈現物理細節的擬真度持續提升',
			'行動裝置端的 AI 影片介面模擬，預示 AI 影片工具將從桌機專業軟體延伸至一般消費者的手機',
			'教育現場需因應 AI 生成影片普及，加強學生辨別真實影片與 AI 生成內容的媒體識讀能力',
			'課程設計者可考慮將 AI 影片工具納入數位創作或跨科專題，同時建立明確的倫理使用規範',
		],
		quote: 'Featuring an underwater video and a mobile AI video mockup.',
		quote_attribution: 'Google Blog, 2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從 AI 技術發展角度看，Google 持續在生成式 AI 領域快速迭代，水下場景影片生成顯示模型對複雜物理環境的理解與渲染能力已達新里程碑，行動端整合更代表 AI 影片創作將成為人人可用的日常工具。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
					},
				],
			},
			{
				text: '從教育與媒體素養角度看，AI 影片生成工具普及化後，教師面臨的挑戰不只是如何教學生使用這些工具，更是如何培養學生對所有影像資料的批判性思維——包括辨識 AI 生成內容、評估資訊可信度，以及理解 AI 創作的著作權與倫理邊界。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
					},
				],
			},
		],
		articles: [
			{
				title: 'The latest AI news we announced in April 2026',
				link: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
				domain: 'blog.google',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Gemini API 推出 Webhook，長時間 AI 任務可主動回呼免輪詢',
		short_summary: 'Google 於 2026 年 5 月正式為 Gemini API 加入 Webhook（事件驅動通知）支援，讓開發者處理耗時任務（如大型影片分析、批次文件摘要）時，不必反覆查詢狀態，系統完成後主動發送通知。對台灣高中教師而言，這項底層技術進步意味著未來基於 Gemini 的教育 AI 工具——例如自動批改作文、分析學習歷程——將更即時穩定，開發教育應用的技術門檻也隨之降低，有助於推動 AI 融入課堂的實際落地。',
		emoji: '🔔',
		did_you_know: 'Webhook 並非新概念，但 AI 長任務特別需要它：一個 30 分鐘的影片分析若每秒輪詢一次，會產生 1800 次無效 API 請求；改用 Webhook 只需一次回呼，效率差距極大，也直接反映在 API 使用費用上。',
		talking_points: [
			'Google 於 2026 年 5 月 4 日透過官方開發者部落格正式宣布 Gemini API Webhook 功能上線',
			'Webhook 採事件驅動架構，任務完成後系統主動通知，取代傳統「輪詢（polling）」模式，顯著降低延遲',
			'長時間任務如批次影片理解、大型文件摘要，使用 Webhook 可大幅減少無效 API 呼叫次數與成本',
			'有助於教育科技團隊打造更穩定的 AI 批改作業、自動生成學習報告等教育應用',
			'此功能標誌 Gemini API 向企業級（production-grade）應用邁進的重要基礎建設升級',
		],
		quote: 'Reduce friction and latency for long-running jobs with Webhooks in Gemini API',
		quote_attribution: 'Google Blog（開發者工具）, 2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從開發者角度看，Webhook 是 API 成熟度的里程碑：過去 Gemini 長任務需自行實作輪詢邏輯，容易出錯且耗費資源；官方提供標準化回呼機制後，中小型開發團隊（包含台灣 EdTech 新創）得以用更低成本建構穩定的 AI 應用。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
			{
				text: '從教育應用角度看，批次 AI 任務（如全班作文同時送審）過去因輪詢延遲而難以規模化；Webhook 若被 EdTech 平台採用，「AI 即時回饋」才能真正落地到台灣高中課堂，而非停留在示範性概念。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Reduce friction and latency for long-running jobs with Webhooks in Gemini API',
				link: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
				domain: 'blog.google',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 重建 WebRTC 架構，全球即時語音 AI 低延遲上線',
		short_summary: 'OpenAI 透過自建 WebRTC 媒體伺服器與全球多節點部署，大幅降低即時語音 AI 的回應延遲，並實現自然的對話輪流換句。對台灣高中教師而言，這代表以 AI 進行口說練習、即時問答的工具門檻正在快速下降——學生未來可與 AI 進行接近真人節奏的英語口說或跨科討論，教師需提前思考如何在課堂設計中善用或規範此類工具。',
		emoji: '🎙️',
		did_you_know: 'WebRTC（Web Real-Time Communication）原為 Google 開源的瀏覽器即時通訊協定，廣泛用於視訊通話。OpenAI 選擇自建而非沿用第三方 WebRTC 服務，意味著它能針對 AI 對話特有的「偵測說話結束時機」需求進行深度最佳化，這在傳統電話或視訊情境中幾乎不需要處理。',
		talking_points: [
			'OpenAI 放棄第三方 WebRTC 方案，自建媒體伺服器，部署於全球多個區域節點以壓低延遲',
			'核心突破在於「conversational turn-taking」——AI 能精準偵測使用者說話結束，無縫接棒回應，接近真人對話節奏',
			'低延遲語音 AI 直接衝擊教育市場：英語口說練習 App、AI 家教即時解題等應用可望在技術層面大幅提升體驗',
			'高並發場景下的語音品質穩定性獲改善，意味著同時有大量學生使用時服務不易降品質',
			'此架構變動為 OpenAI Realtime API 生態系奠基，第三方開發者可在此之上打造教育工具',
		],
		quote: 'OpenAI rebuilt its WebRTC stack to power real-time Voice AI with low latency, global scale, and seamless conversational turn-taking.',
		quote_attribution: 'OpenAI, 2026-05-04',
		quote_source_url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '技術樂觀視角：語音 AI 延遲大幅降低，意味著 AI 口說練習工具將更接近真實對話體驗。台灣英語教學長期受限於師資不足與練習機會稀少，即時語音 AI 有潛力讓每位學生在課外獲得高品質的口說練習夥伴，教師角色也可從「糾錯者」轉向「任務設計者」。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
			{
				text: '教育風險視角：過於流暢的 AI 語音對話可能讓學生習慣與機器溝通，反而迴避真實人際互動的不確定性與情感張力。尤其對高中生而言，口說能力的養成不只是技術流暢度，更涉及即興應變與社交閱讀，這些面向目前語音 AI 仍難以完整模擬。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
		],
		articles: [
			{
				title: 'How OpenAI delivers low-latency voice AI at scale',
				link: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
				domain: 'openai.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
];

const aiApplicationsStories: Story[] = [];

const aiEduStories: Story[] = [
	{
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '函授學校作為傳統教育替代路徑的百年歷史實證',
		short_summary: '美國國家經濟研究局（NBER）工作論文以新數位化的「國際函授學校」（ICS）歷史學籍紀錄為基礎，採量化歷史方法，分析二十世紀初美國函授教育對個人職涯與技能習得的實際影響。研究對象為當時大量無法就讀實體學校的成年工人，透過郵寄課程取得學歷與技能。對台灣高中教師的啟示在於：當代 AI 驅動的個人化線上學習正重演百年前的函授革命，歷史數據提供了評估「彈性學習路徑」長期效果的難得基準，值得作為政策討論的參照。',
		emoji: '📬',
		did_you_know: '「國際函授學校」（ICS）成立於 1891 年，巔峰時期在籍學員逾百萬人，被視為史上規模最大的非正規教育機構之一，其課程主打礦業、工程與商業技能，商業模式與今日 MOOC 平台驚人相似。注意：本研究為 NBER 工作論文（觀察性研究），尚未通過同儕審查，不宜直接推論因果。',
		talking_points: [
			'【證據類型】NBER 工作論文（觀察性歷史研究），利用新數位化的 ICS 行政紀錄與人口普查資料串接進行量化分析，尚未經同儕審查',
			'研究以 ICS——二十世紀初全美最大函授學校——的學籍紀錄為核心樣本，重建學員的教育與職業軌跡',
			'數位化歷史行政紀錄（newly digitized records）的方法，讓研究得以追蹤百年前函授學員的長期職涯結果，是教育史研究的方法突破',
			'研究發現函授教育對無法進入傳統學校的工人群體提供了具意義的替代路徑，顯示非正規管道的職涯流動效果',
			'此歷史實證可作為評估當代 AI 線上教育長期效果的基準，協助台灣政策討論「多元學習路徑認可」的實質依據',
		],
		quote: 'Using newly digitized records from the International Correspondence Schools—the largest correspondence school in early 20th-century America—this paper examines correspondence education as an alternative educational pathway.',
		quote_attribution: 'NBER, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35147#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '樂觀詮釋：函授教育歷史案例顯示，非傳統學習路徑確能彌補正規學校覆蓋缺口，為邊緣群體創造真實職涯機會。此觀點支持當代 AI 個人化學習與非同步遠距教育政策的擴展，歷史有其先例。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
			{
				text: '謹慎詮釋：觀察性歷史研究難以排除選擇偏誤——主動報名函授者本就動機較強，效果可能遭高估。直接類比至 AI 線上教育，須考量現代學習動機結構、數位落差與課程品質管控等根本差異。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Learning by Mail: The Impact of Correspondence Schools in Early 20th Century America',
				link: 'https://www.nber.org/papers/w35147#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'aiEducation-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '美國全國研究：可鎖手機袋禁令對校園事件的實際效果',
		short_summary: '美國 NBER 工作論文以「可鎖手機袋」（lockable pouches）為介入措施，結合全國大規模問卷調查與學校行政資料，評估整學日手機禁令對校園事件通報、學生行為的平均影響。研究樣本涵蓋全美學校，採量化觀察設計，並按學期分析效果變化。台灣高中近年積極推行手機管理政策，此全國規模研究提供跨國量化佐證，協助教師判斷「整學期全時封機」相對於「課堂局部收機」是否真能有效降低問題行為，並了解政策效果的適用條件與限制。',
		emoji: '📵',
		did_you_know: '「可鎖手機袋」是美國校園手機禁令的主流執行工具之一：學生進校時將手機鎖入磁扣袋，放學才解鎖，讓教師無須每堂課反覆收繳。此方案已在全美數千所學校試行，但缺乏全國規模的學術評估——此論文是目前規模最大的系統性研究之一。注意：本研究為觀察性量化研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文，量化觀察研究，結合全國大規模問卷調查（surveys）與學校行政資料',
			'介入措施為「整學日可鎖手機袋」，限制學生在校期間全程使用手機，不同於僅限課堂的局部禁令',
			'研究分析手機禁令對校園事件（incidents）通報率的平均效果（average effect），並拆解不同學期（term）的效果持續性',
			'關鍵詞 reduces 顯示禁令與某類校園問題行為的減少相關，但效果大小與學校情境高度相關',
			'台灣教師可參照此研究評估「整學期全時封機」政策，並思考哪類校園環境最可能從中受益',
		],
		quote: 'Schools across the U.S. have sharply restricted student use of phones during the school day.',
		quote_attribution: 'NBER Working Paper, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35132#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '政策支持者認為：全國性量化資料顯示可鎖手機袋能有效減少校園事件通報，相較於依賴教師個別執行的課堂禁機，標準化鎖袋機制更具一致性與可擴展性，為政策制定者提供明確的佐證。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
			{
				text: '謹慎派則指出：本研究為觀察性設計而非隨機對照試驗，「可鎖袋」在各校的執行力度與落實方式差異顯著，平均效果可能掩蓋校際異質性，不宜直接作為全面強制封機的依據，需搭配質性研究深入了解機制。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'The Effects of School Phone Bans: National Evidence from Lockable Pouches',
				link: 'https://www.nber.org/papers/w35132#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'aiEducation-gmail-notebooklm-教學',
		cluster_number: 'gmail-notebooklm-教學',
		unique_domains: 5,
		number_of_titles: 5,
		category: 'AI × 教育',
		title: '本週『NotebookLM 教學』焦點：Google 免費全開，費曼學習法新應用',
		short_summary: 'Google 在 2026 年 4 月 Gemini Drop 更新中，將 NotebookLM 整合至 Gemini 並免費開放進階功能，讓台灣高中教師無需付費即可使用這款「只用上傳資料回答、附引文不捏造」的 AI 研究助理。工具支援 Audio Overview、Mind Map、Quiz 等多元輸出格式，適合整理課程素材與製作形成性評量。同期有教學者示範以費曼學習法搭配 NotebookLM 備考，顯示學生自主學習潛力，教師值得評估導入課堂應用。',
		emoji: '📓',
		did_you_know: '費曼學習法要求學習者用最簡單的語言重新解釋概念，藉此暴露理解盲點。NotebookLM 的 Quiz 功能可自動從上傳文件生成測驗，正好模擬「自我檢測」環節，讓數十年前的傳統學習法與最新 AI 工具形成互補，成本為零。',
		talking_points: [
			'2026 年 4 月 Gemini Drop 更新：NotebookLM 正式整合至 Gemini，免費用戶可使用個人化智慧與進階功能，付費限制大幅鬆綁',
			'核心設計「只用上傳資料回答＋附引文」，大幅降低 AI 幻覺風險，教師可安心用於製作可驗證的教材摘要',
			'支援 Audio Overview、Video Overview、Mind Map、Quiz 等 5 種以上輸出格式，單份資料可轉化為多元教學素材',
			'YouTube 教學者示範「費曼學習法 × NotebookLM」備考流程，強調完全免費且效率優於付費課程，引發學習者討論',
			'免費版與付費版（NotebookLM Plus）仍有使用配額差異，大量上傳資料的教師需留意每日限額',
		],
		quote: 'NotebookLM 是 Google 推出的 AI 研究助理，由 Gemini 驅動，特色是「只用你上傳的資料回答」、附引文不編造。',
		quote_attribution: '鏈新聞 ABMedia，2026-04-28',
		quote_source_url: 'https://abmedia.io/notebooklm-complete-guide-2026',
		quote_source_domain: 'abmedia.io',
		perspectives: [
			{
				text: '技術媒體（電腦王阿達、SOGI 手機王）聚焦 Google 的生態系佈局，將免費開放解讀為 Gemini 擴大用戶黏著度的商業策略，詳列功能清單，適合教師快速掌握工具更新動態。',
				sources: [
					{
						name: '電腦王阿達',
						url: 'https://www.koc.com.tw/archives/641484',
					},
					{
						name: 'SOGI 手機王',
						url: 'https://www.sogi.com.tw/articles/gemini/6268641',
					},
				],
			},
			{
				text: '教學實踐者（YouTube 頻道）以「考證照」具體場景切入，示範費曼學習法與 NotebookLM 結合的逐步操作，強調免費可取代付費課程，視角更貼近學生與自學者需求，而非工具本身功能介紹。',
				sources: [
					{
						name: 'YouTube 教學頻道',
						url: 'https://www.youtube.com/watch?v=h7Uvr4LF9b4',
					},
				],
			},
			{
				text: '入門導引媒體（鏈新聞 ABMedia、手機王 LINE TODAY）著重完整功能解析與操作流程，補充定價比較與使用場景，定位為首次接觸 NotebookLM 教師的參考指南，介於技術報導與實戰指引之間。',
				sources: [
					{
						name: '鏈新聞 ABMedia',
						url: 'https://abmedia.io/notebooklm-complete-guide-2026',
					},
					{
						name: '手機王 LINE TODAY',
						url: 'https://today.line.me/tw/v3/article/pekKRBe',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: '鏈新聞 ABMedia、手機王等媒體同日刊出 NotebookLM 完整教學與 Gemini 整合操作說明',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: 'YouTube 創作者發布「費曼學習法 × NotebookLM」備考實戰教學影片',
			},
			{
				date: '2026-04-30',
				date_iso: '2026-04-30',
				content: 'NotebookLM 官方宣布免費開放所有用戶使用進階功能',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '電腦王阿達報導 Google 正式將 NotebookLM 最聰明功能向所有人開放，確認免費方案細節',
			},
		],
		articles: [
			{
				title: 'Google 將 Gemini 最聰明的 NotebookLM 功能開放所有人使用',
				link: 'https://www.koc.com.tw/archives/641484',
				domain: 'koc.com.tw',
				date: '2026-05-04',
			},
			{
				title: '考證照還在花錢報課？NotebookLM 費曼學習法，免費又高效！',
				link: 'https://www.youtube.com/watch?v=h7Uvr4LF9b4',
				domain: 'youtube.com',
				date: '2026-04-29',
			},
			{
				title: 'NotebookLM 是什麼？2026 完整教學：功能、定價、用法',
				link: 'https://abmedia.io/notebooklm-complete-guide-2026',
				domain: 'abmedia.io',
				date: '2026-04-28',
			},
			{
				title: 'Google Gemini 筆記本怎麼用？整合 NotebookLM 使用教學一次看懂',
				link: 'https://today.line.me/tw/v3/article/pekKRBe',
				domain: 'today.line.me',
				date: '2026-04-28',
			},
			{
				title: '2026 年 4 月 Gemini Drop 更新！6 項最新功能整理一次看',
				link: 'https://www.sogi.com.tw/articles/gemini/6268641',
				domain: 'sogi.com.tw',
				date: '2026-04-28',
			},
		],
		domains: [
			{ name: 'koc.com.tw' },
			{ name: 'youtube.com' },
			{ name: 'abmedia.io' },
			{ name: 'today.line.me' },
			{ name: 'sogi.com.tw' },
		],
	},
	{
		id: 'aiEducation-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '認知頻寬不足扭曲親子投資決策：NBER 早期童年介入新模型',
		short_summary: '美國國家經濟研究局（NBER）工作論文 w35150 提出理論模型，解釋為何「認知頻寬受限」的家長會系統性地低估親子互動回報，進而減少早期教育投資。研究採理論建模結合實證分析，聚焦低資源家庭樣本，核心發現是：家長的信念扭曲與注意力分配，才是投資不足的關鍵中介機制，而非單純的收入限制。台灣高中教師應關注：學生入學前的發展落差，可能源自家長認知頻寬問題，單純宣導「多陪伴」的親職策略若不同時校正信念，效果有限。',
		emoji: '🧠',
		did_you_know: '「頻寬稅」（bandwidth tax）概念源自行為經濟學——資源匱乏本身會占用心理頻寬，使人在長期投資（如親子互動）上做出次優決策。這一機制可解釋為何低資源家庭的親職介入計畫常遭遇「知道但做不到」的困境。注意：本研究為工作論文，尚未完成同儕審查，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文（w35150），理論模型加實證分析，尚未同儕審查，結論需審慎解讀',
			'核心機制：家長頻寬不足時，對「親子互動的發展回報」產生信念扭曲，導致投資量低於最優水準',
			'介入切入點：當家長「實際能力低於自身期望」時，校正信念的介入效果最顯著，可作為篩選高效介入對象的指標',
			'政策設計啟示：補貼資金或提供資訊的政策若未同步降低家長決策的認知負荷，介入效益將大打折扣',
			'台灣應用：弱勢家庭親職教育若只強調「多互動」，可能忽略家長的頻寬限制，需重新設計為低認知負荷的操作性指引',
		],
		quote: 'bandwidth-constrained parents hold distorted beliefs about the returns to responsive interaction',
		quote_attribution: 'NBER Working Paper w35150, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35150#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '行為經濟學觀點：家長投資不足的根源是「信念扭曲」而非單純資源匱乏。這意味著金錢補貼政策若不搭配認知介入，無法有效提升親子互動品質，需要重新設計介入框架。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35150#fromrss',
					},
				],
			},
			{
				text: '教育公平觀點：頻寬限制主要衝擊高壓、低資源家庭，其子女入學前早已累積發展落差。台灣現行親職教育計畫多以「資訊傳遞」為主，是否觸及「信念校正」層次，仍有待系統性評估。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35150#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Beliefs, Attention, and Investments in Early Childhood',
				link: 'https://www.nber.org/papers/w35150#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'aiEducation-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '功績主義再思考：回顧型 vs 前瞻型影響教育評量正義',
		short_summary: 'NBER 工作論文（Working Paper #35151）提出「回顧型」與「前瞻型」功績主義的理論框架：前者以個人過去成就靜態評量，後者著眼未來潛能與環境條件。本研究屬純理論分析，無特定樣本或國家，為概念框架建構。台灣高中教師身處升學評量第一線，此框架有助反思現行學測／學習歷程制度是否強化社經優勢，以及 AI 評量工具的設計邏輯究竟更靠近哪種功績觀，選才標準的哲學基礎值得重新檢視。',
		emoji: '⚖️',
		did_you_know: '「功績主義」（meritocracy）一詞由英國社會學家 Michael Young 於 1958 年帶著諷刺意圖創造，原意是警告「以才取人」可能製造新型不平等，而非歌頌它。108 課綱的學習歷程檔案正是試圖引入前瞻型邏輯，但審查能力與資源分配不均仍是落差所在。注意：本研究為理論分析工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 理論分析工作論文（#35151），屬概念框架建構，非 RCT、問卷或觀察性實驗，結論尚待同儕審查',
			'核心區分：「回顧型功績主義」以靜態過去成就評量個人；「前瞻型功績主義」考量未來貢獻潛力及所處環境條件',
			'公平性張力：回顧型標準可能將社經背景優勢自然化為個人才能；前瞻型標準在操作層面面臨預測效度與評審偏見挑戰',
			'AI 工具設計意涵：以歷史成績訓練的 AI 評量系統強化回顧型邏輯；納入學習軌跡與成長幅度的系統趨近前瞻型，兩者結果對學生公平性影響截然不同',
			'台灣脈絡：108 課綱學習歷程檔案引入前瞻型要素，但大學端審查能量與高中資源不均，使制度理想與現實存在落差',
		],
		quote: 'Retrospective meritocracy is static or backwards-looking: Merit is based on an individual\'s past contributions or achievements.',
		quote_attribution: 'NBER Working Paper #35151, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35151#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '從教育公平倡議角度：回顧型功績主義表面客觀，實則將社經結構優勢「自然化」為個人才能。高社經家庭子女在補習、資訊與文化資本上的先天優勢，在靜態分數評量中被系統性隱蔽，製造「公平競爭」的假象，不利弱勢學生。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
			{
				text: '從教育系統效率與可操作性角度：前瞻型功績主義理想上能發掘潛力人才、促進社會流動，但「未來貢獻」的預測充滿不確定性，可能引入評審者主觀偏見，反而製造新的不透明，在大規模招生情境下尤難落實。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
			{
				text: '從 AI 輔助評量工具設計角度：此理論框架提供教師一組實用視角，用以判斷市面上 AI 評量產品究竟在複製過去成績排名（回顧型），還是真正追蹤學習成長與潛能（前瞻型），有助教師做出更有意識的工具選擇。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Retrospective Versus Prospective Meritocracy',
				link: 'https://www.nber.org/papers/w35151#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
];

const aiClassroomStories: Story[] = [];

const twEduStories: Story[] = [
	{
		id: 'taiwanEduPolicy-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '父親幼年早逝的發生率與影響：美國喬治亞州世代研究',
		short_summary: '美國《JAMA Pediatrics》2026年發表喬治亞州世代追蹤研究（2017–2022），以5歲以下幼兒為樣本群體，系統調查父親死亡的發生率、主要死因及對子女發展的後續影響，採州政府行政資料連結方法進行量化分析。對台灣高中教師而言，班上可能有學生在學齡前即經歷喪父，此類逆境往往與青春期的學習動機低落、情緒調節困難及社交退縮高度相關。掌握父親早逝的流行病學規模，有助於教師在輔導高風險學生時採取更主動的逆境知情（trauma-informed）姿態，而非將行為問題單純歸因於品行不端。',
		emoji: '👨‍👧',
		did_you_know: '幼年喪父屬於「童年逆境經驗」（ACEs）之一，研究顯示累積ACEs愈多，青少年輟學風險及成年後慢性病比率愈高。台灣國教署已將「創傷知情校園」列為輔導推展方向，了解國際實證有助於接軌政策。注意：本研究為觀察性世代研究（cohort study），不宜直接推論因果關係。',
		talking_points: [
			'證據類型：觀察性世代研究（cohort study），以美國喬治亞州2017–2022年行政資料為基礎，追蹤5歲以下幼兒的父親死亡事件，方法為量化統計分析',
			'研究聚焦三大面向：父親死亡發生率（rates）、主要死因分類（causes）、對家庭與幼兒的後續影響（implications）',
			'父親在幼兒期死亡導致家庭經濟穩定性下降、主要照顧者角色驟變，子女可用的社會情感支持資源同步減少',
			'台灣教育現場啟示：輔導系統應建立「幼年喪親學生」長期追蹤機制，高中階段仍需關注早期喪父的累積影響，避免以行為管教取代輔導介入',
			'《JAMA Pediatrics》為全球兒科醫學頂尖期刊，此類研究為教育部推動「全校性多層次支持系統」（MTSS）提供國際實證基礎',
		],
		quote: 'This cohort study examines the rates, causes, and implications of the death of fathers of children 5 years or younger in the state of Georgia from 2017 to 2022.',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '公共衛生角度：父親死亡是具有預防潛力的兒童健康危機，喬治亞州數據可望揭示特定族群（如低收入、特定種族）的父親死亡率是否顯著偏高，呼籲政策應對高風險家庭提供預防性介入，而非僅在喪父後才啟動補救服務。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
			{
				text: '教育福祉角度：從學校實務看，父親幼年期死亡意味著學生在進入高中前已累積多年逆境經驗，若教師未受過逆境知情教學訓練，易將學生的情緒爆發或疏離行為誤判為品行問題，而忽略其背後的創傷反應本質。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
		],
		articles: [
			{
				title: 'Paternal Mortality During Early Childhood',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-gmail-ai-融入教學-高中',
		cluster_number: 'gmail-ai-融入教學-高中',
		unique_domains: 5,
		number_of_titles: 5,
		category: '教育政策',
		title: '本週「AI 融入教學」焦點：台灣研習開辦，紐約 AI 高中計劃喊停',
		short_summary: '台灣高中教師正面臨 AI 融入教學的關鍵節點：台南中崙高中針對高優前導學校教師辦理線上研習，政策與學校端同步推進。與此同時，紐約市曼哈頓 AI 專門高中因社會強烈反彈遭叫停，顯示 AI 教育推進若缺乏家長溝通前置，阻力將超越技術門檻。BBC 報導中國家長憂慮孩子成「科舉廢後的秀才」，折射出東亞共同的學習焦慮。本週這組新聞提供推進與踩煞車的雙面參照，值得台灣高中教師留意。',
		emoji: '🤖',
		did_you_know: '紐約市曼哈頓 AI 高中原本立意是將 AI 融入教學並培養科技倫理，校方表示已收到廣泛支持，但因社會輿論強烈反彈最終喊停。這顯示 AI 教育政策的成敗，家長信任與社區溝通往往比技術準備度更關鍵。',
		talking_points: [
			'台南中崙高中針對 114 學年度高優前導學校及有興趣的高中教師，開辦「AI 融入自主學習教學」線上研習，課程代碼 5567461，可至全國教師在職進修資訊網報名',
			'東華大學配合教學卓越中心「生成式AI融入專業課程」計畫，旅遊課程學生以 AI 製作馬太鞍濕地語音導覽，示範跨域實作模式',
			'紐約市曼哈頓 AI 專門高中計劃因社會強烈反對遭市教育總監叫停，校方初衷為培養學生科技倫理，卻在溝通不足下敗於輿論',
			'BBC 報導中國課堂轉型：大課拆成小組、強調人際交流，並將 AI 作為小組協作成員融入，是對「學生喪失深度思考力」疑慮的直接回應',
			'香港大角嘴天主教小學早在電腦科課程融入 AI 基礎概念，以因材施教模式應對 AI 浪潮，代表亞洲基礎教育的提前布局',
		],
		quote: '以前兩三百人的大課，現在拆成幾十人的小組，強調人與人之間的交流碰撞，同時把AI作為小組協作的一員融入進來。',
		quote_attribution: 'BBC News 中文，2026-04-30',
		quote_source_url: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
		quote_source_domain: 'bbc.com',
		perspectives: [
			{
				text: '台灣教育體制正積極推進：中崙高中與東華大學分別在高中教師研習與大學專業課程中落地 AI 融入，顯示政策層面（高優前導學校計畫）與學校端執行力雙軌同步，台灣高中教師有明確進修管道可接軌。',
				sources: [
					{
						name: '中央社',
						url: 'https://www.cna.com.tw/postwrite/chi/432240',
					},
				],
			},
			{
				text: '社會反彈力量不容低估：紐約 AI 高中遭叫停的案例顯示，即便校方立意良善，家長的不信任仍能推翻政策。AI 教育推進若缺乏家長溝通前置，阻力將大幅超越技術或資源門檻，這對台灣正在推動 AI 課程的學校是重要警示。',
				sources: [
					{
						name: '星島日報（美國版）',
						url: 'https://www.singtaousa.com/2026/04/28/news/usa/manhattan-ai-high-school-canceled/',
					},
				],
			},
			{
				text: 'AI 時代學習焦慮是跨國現象：BBC 揭示中國家長擔心孩子「有才無用」，香港學校則以因材施教積極因應，兩者形成對照。底層的焦慮高度一致，但各地應對策略差異顯著，台灣高中可從中萃取課堂設計的參考框架。',
				sources: [
					{
						name: 'BBC News 中文',
						url: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
					},
					{
						name: '荷花（eugenebaby.com）',
						url: 'https://www.eugenebaby.com/articleList/%E5%8D%87%E5%AD%B8%E6%95%99%E8%82%B2/%E5%A4%A7%E8%A7%92%E5%98%B4%E5%A4%A9%E4%B8%BB%E6%95%99%E5%B0%8F%E5%AD%B8-1',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '台南中崙高中公告「AI融入自主學習教學」線上研習，面向高優前導學校高中教師開放報名',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '紐約市曼哈頓 AI 專門高中計劃因社會反對宣告叫停',
			},
			{
				date: '2026-04-30',
				date_iso: '2026-04-30',
				content: 'BBC 中文報導中國家長對 AI 時代孩子競爭力的憂慮及課堂轉型現象',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '東華大學生成式 AI 融入旅遊課程、製作馬太鞍語音導覽成果見諸中央社報導',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '香港大角嘴天主教小學 AI 輔助教學模式獲媒體報導',
			},
		],
		articles: [
			{
				title: '大角嘴天主教小學因材施教全人發展多元化學習模式結合AI輔助教學',
				link: 'https://www.eugenebaby.com/articleList/%E5%8D%87%E5%AD%B8%E6%95%99%E8%82%B2/%E5%A4%A7%E8%A7%92%E5%98%B4%E5%A4%A9%E4%B8%BB%E6%95%99%E5%B0%8F%E5%AD%B8-1',
				domain: 'eugenebaby.com',
				date: '2026-05-02',
			},
			{
				title: '東華大學觀遊系導入生成式AI走進馬太鞍學習自由行語音導覽',
				link: 'https://www.cna.com.tw/postwrite/chi/432240',
				domain: 'cna.com.tw',
				date: '2026-05-02',
			},
			{
				title: 'AI衝擊教育：中國家長怕孩子成了「科舉被廢後的秀才」',
				link: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
				domain: 'bbc.com',
				date: '2026-04-30',
			},
			{
				title: '曼哈頓AI高中計劃叫停',
				link: 'https://www.singtaousa.com/2026/04/28/news/usa/manhattan-ai-high-school-canceled/',
				domain: 'singtaousa.com',
				date: '2026-04-29',
			},
		],
		domains: [
			{ name: 'eugenebaby.com' },
			{ name: 'cna.com.tw' },
			{ name: 'bbc.com' },
			{ name: 'tngs.tn.edu.tw' },
			{ name: 'singtaousa.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-gmail-教育部-ai-數位學習',
		cluster_number: 'gmail-教育部-ai-數位學習',
		unique_domains: 16,
		number_of_titles: 16,
		category: '教育政策',
		title: '本週「教育部AI數位學習」焦點：館館有AI、AI Di+雙箭齊發',
		short_summary: '教育部本週密集推出兩大AI教育政策：「館館有AI」計畫將在全國國立圖書館及47所大學提供付費版ChatGPT、Claude免費使用，今年第四季起跑；「AI Di+實驗方案」則導入大學生擔任AI學伴，以「慢AI」精神協助國中小生培養自主學習力。對高中教師而言，這波政策浪潮意味著AI融入教學的資源門檻正在降低；但立委同步要求教育部提出完整預算依據與監督機制，政策落地仍有配套挑戰。',
		emoji: '🤖',
		did_you_know: '「館館有AI」命名呼應教育部2022年起推動的「生生用平板」政策——後者已在南投縣三年全面達標。「慢AI」（Slow AI）概念則借鑑歐洲「慢食運動」精神，主張讓學生先建立自主學習能力，再以AI輔助，避免過度依賴工具而削弱獨立思考。',
		talking_points: [
			'「館館有AI」：教育部預計今年Q4在全國國立圖書館各設5台電腦，提供付費版ChatGPT、Claude等AI工具免費使用，目標擴及47所大學圖書館',
			'「AI Di+實驗方案」：大學生擔任AI學伴，輔助國中小生培養自主學習力，核心理念為「慢AI」——讓學生先學會學習，再導入AI工具',
			'台南市過去四年AI教育投入逾24億元；南投縣「生生有平板」三年全面達標，地方政府自主加碼數位轉型',
			'新竹縣百名教師取得Gemini AI認證，課程涵蓋社會情緒學習（SEL）、機器人編程、學習診斷等多元主題',
			'U-start青年創業計畫今年提案破350組，AI結合特殊教育學習系統、即時支付等應用成最大亮點',
		],
		quote: 'AI教育是重大公共政策，涉及學生學習權益、數位平權與國家人才培育，不應淪為『雜誌治國』，教育部應儘速補足計畫內容、預算依據與監督機制。',
		quote_attribution: 'Yahoo新聞（立委說法），2026-05-01',
		quote_source_url: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
		quote_source_domain: 'tw.news.yahoo.com',
		perspectives: [
			{
				text: '教育部積極布局：同步推進「館館有AI」、「AI Di+實驗方案」、績優徵選三項計畫，並由直屬圖書館先行示範，展現系統性AI教育政策意圖，強調「慢AI」精神以避免學生過度依賴工具。',
				sources: [
					{
						name: '教育部官網',
						url: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=9444E403EA03FB57',
					},
					{
						name: '中央社',
						url: 'https://www.cna.com.tw/news/ahel/202605040165.aspx',
					},
					{
						name: '國語電台',
						url: 'https://www.ner.gov.tw/CultureNews/Content/?id=26043011570447028',
					},
				],
			},
			{
				text: '立法院問責視角：立委要求教育部在推動「館館有AI」前，必須補足具體預算依據與監督機制，不能僅靠媒體風向驅動政策，需確保AI教育落實數位平權而非製造新的資源不均。',
				sources: [
					{
						name: 'Yahoo新聞',
						url: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
					},
				],
			},
			{
				text: '地方政府自主行動：台南砸逾24億、南投平板三年全面達標、新竹縣百名教師取得Gemini認證，顯示各縣市不等中央政策，已各自啟動AI教育佈局，但城鄉投入規模差距仍大。',
				sources: [
					{
						name: '台南市政府',
						url: 'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8811104',
					},
					{
						name: '是新聞YesMedia',
						url: 'https://www.yesmedia.com.tw/%E5%8D%97%E6%8A%95%E3%80%8C%E7%94%9F%E7%94%9F%E6%9C%89%E5%B9%B3%E6%9D%BF%E3%80%8D%E5%85%A8%E9%9D%A2%E9%81%94%E6%A8%99%E3%80%80%E4%B8%89%E5%B9%B4%E6%89%93%E9%80%A0%E6%99%BA%E6%85%A7%E6%A0%A1%E5%9C%92/',
					},
					{
						name: '勁報',
						url: 'https://twpowernews.com/news_pagein.php?n_id=290729',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: '遠見雜誌報導文藻外語大學以外語底蘊培育AI跨域人才，獲教育部WISE計畫補助',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '台南市政府公布AI教育四年投入逾24億元；南投縣「生生有平板」三年全面達標',
			},
			{
				date: '2026-05-01',
				date_iso: '2026-05-01',
				content: '立委公開倡議「館館有AI」，教育部所屬3所圖書館今年起率先試行；立委同步要求教育部補足預算與監督機制',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: 'U-start青年創業計畫今年提案破350組，AI應用成主流；新北市結合檢察官推動AI時代數位法治素養',
			},
			{
				date: '2026-05-03',
				date_iso: '2026-05-03',
				content: '教育部正式宣布「館館有AI」擴及47所大學，Q4起提供付費版AI工具免費使用；新竹縣公布百名教師取得Gemini AI認證',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '教育部召開「AI Di+實驗方案」全國工作會議，同步公告115年教育AI及數位學習績優徵選',
			},
		],
		articles: [
			{
				title: 'AI夥伴輔助數位樂學 教育部AI Di+實驗方案全國工作會議',
				link: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=9444E403EA03FB57',
				domain: 'edu.tw',
				date: '2026-05-04',
			},
			{
				title: '教育部推AI Di+實驗方案 AI學伴助培育自主學習力',
				link: 'https://www.cna.com.tw/news/ahel/202605040165.aspx',
				domain: 'cna.com.tw',
				date: '2026-05-04',
			},
			{
				title: '教育部辦理「教育部115年推動教育AI及數位學習績優徵選」',
				link: 'https://www.tngs.tn.edu.tw/2026/05/04/%E6%95%99%E8%82%B2%E9%83%A8%E8%BE%A6%E7%90%86%E3%80%8C%E6%95%99%E8%82%B2%E9%83%A8115%E5%B9%B4%E6%8E%A8%E5%8B%95%E6%95%99%E8%82%B2ai%E5%8F%8A%E6%95%B8%E4%BD%8D%E5%AD%B8%E7%BF%92%E7%B8%BE%E5%84%AA/',
				domain: 'tngs.tn.edu.tw',
				date: '2026-05-04',
			},
			{
				title: '「慢AI」提升學生自主學習力 教育部推「AI Di+實驗方案」',
				link: 'https://news.ltn.com.tw/news/life/breakingnews/5424812',
				domain: 'news.ltn.com.tw',
				date: '2026-05-04',
			},
			{
				title: '圖書館GPT、Claude免費用！教育部加碼推47所大學「館館有AI」',
				link: 'https://www.ettoday.net/news/20260503/3159111.htm',
				domain: 'ettoday.net',
				date: '2026-05-03',
			},
			{
				title: '迎向AI新浪潮 竹縣百名教師獲Gemini AI認證打造智慧教育典範',
				link: 'https://twpowernews.com/news_pagein.php?n_id=290729',
				domain: 'twpowernews.com',
				date: '2026-05-03',
			},
			{
				title: '迎向AI新浪潮 竹縣百名教師獲Gemini AI認證打造智慧教育典範',
				link: 'https://news.pchome.com.tw/living/twpowernews/20260502/index-17777260469091247009.html',
				domain: 'news.pchome.com.tw',
				date: '2026-05-03',
			},
			{
				title: '教育部推「館館有AI」計畫 全國圖書館與47所大學將免費開放付費版AI工具',
				link: 'https://www.bigmedia.com.tw/article/1777763719176',
				domain: 'bigmedia.com.tw',
				date: '2026-05-03',
			},
			{
				title: '青年AI新創力 U-start用AI助攻百業轉型',
				link: 'https://www.tcnews.com.tw/education/item/29268.html',
				domain: 'tcnews.com.tw',
				date: '2026-05-02',
			},
			{
				title: '新北「人權法治列車」攜手檢察官強化AI時代數位法治素養',
				link: 'https://today.line.me/tw/v3/article/zNwPGOj',
				domain: 'today.line.me',
				date: '2026-05-02',
			},
			{
				title: '青年創新創業計畫提案破350組 結合AI成亮點',
				link: 'https://www.chinesedaily.com/article/detail-687496.html',
				domain: 'chinesedaily.com',
				date: '2026-05-02',
			},
			{
				title: '教育部推「館館有AI」從直屬圖書館起跑 葛如鈞：讓學生公平取得AI工具、消弭數位落差',
				link: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
				domain: 'tw.news.yahoo.com',
				date: '2026-05-01',
			},
			{
				title: '立委倡議「館館有AI」教育部所屬3圖書館今年可搶先體驗',
				link: 'https://www.ner.gov.tw/CultureNews/Content/?id=26043011570447028',
				domain: 'ner.gov.tw',
				date: '2026-05-01',
			},
			{
				title: '台南推動AI教育 投入逾24億打造智慧學習環境',
				link: 'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8811104',
				domain: 'tainan.gov.tw',
				date: '2026-04-29',
			},
			{
				title: '南投「生生有平板」全面達標 三年打造智慧校園新里程',
				link: 'https://www.yesmedia.com.tw/%E5%8D%97%E6%8A%95%E3%80%8C%E7%94%9F%E7%94%9F%E6%9C%89%E5%B9%B3%E6%9D%BF%E3%80%8D%E5%85%A8%E9%9D%A2%E9%81%94%E6%A8%99%E3%80%80%E4%B8%89%E5%B9%B4%E6%89%93%E9%80%A0%E6%99%BA%E6%85%A7%E6%A0%A1%E5%9C%92/',
				domain: 'yesmedia.com.tw',
				date: '2026-04-29',
			},
			{
				title: '跳脫技術迷思，文藻以外語底蘊培育AI跨域人才',
				link: 'https://www.gvm.com.tw/article/129544',
				domain: 'gvm.com.tw',
				date: '2026-04-28',
			},
		],
		domains: [
			{ name: 'edu.tw' },
			{ name: 'cna.com.tw' },
			{ name: 'tngs.tn.edu.tw' },
			{ name: 'news.ltn.com.tw' },
			{ name: 'ettoday.net' },
			{ name: 'twpowernews.com' },
			{ name: 'news.pchome.com.tw' },
			{ name: 'bigmedia.com.tw' },
			{ name: 'tcnews.com.tw' },
			{ name: 'today.line.me' },
			{ name: 'chinesedaily.com' },
			{ name: 'tw.news.yahoo.com' },
			{ name: 'ner.gov.tw' },
			{ name: 'tainan.gov.tw' },
			{ name: 'yesmedia.com.tw' },
			{ name: 'gvm.com.tw' },
		],
	},
	{
		id: 'taiwanEduPolicy-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '機器學習預測兒童術後住院天數 有助學生返校銜接規劃',
		short_summary: '《JAMA Pediatrics》2026 年 5 月刊載一項前瞻性觀察性研究，由 Berry 等研究團隊探討將機器學習術後住院天數（LOS）預測模型整合進外科排程系統的實作效果，對象為接受擇期手術的兒童病患，採行事曆工具驗證模型輸出與臨床決策的對齊程度。對台灣高中教師而言，此類 AI 工具若推廣至醫院端，學校可提前掌握學生返校時間，調整補課、特教與段考安排，避免「突然復課」造成的學習斷層，也為教育主管機關思考醫教資訊銜接機制提供新視角。',
		emoji: '🏥',
		did_you_know: '住院天數預測模型的準確率若能提升一天，就可能讓學齡兒童趕上期末考或重要升學節點。台灣現行請假制度以家長自主通報為主，尚無醫療端主動預測返校時間的配套，AI 介入後的資料共享與隱私設計將是教育政策的新挑戰。注意：本研究為前瞻性觀察性研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：前瞻性觀察性研究，以行事曆工具將機器學習 LOS 模型整合進兒童擇期手術排程，驗證「決策對齊評估」框架',
			'研究發表於《JAMA Pediatrics》（2026-05-04），聚焦兒童術後住院天數預測，強調模型輸出須直接對應臨床排程決策而非僅追求統計準確率',
			'模型以「Decision-Aligned Evaluation」框架評估，區別於傳統 RMSE／MAE 指標，改以是否影響床位排程決策為核心標準',
			'若台灣醫院引入類似工具，學校端可提前 1-2 週獲知學生預計出院日，有利啟動返校輔導計畫、安排補考與特教資源',
			'此研究提示：AI 預測工具的「對齊設計」思維（讓輸出直接驅動決策）可移植至教育數據應用，如出席率預測或資源分配模型',
		],
		quote: 'integrating a machine-learning postoperative length-of-stay (LOS) model into elective surgical scheduling, through a prospective calendar tool',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '臨床效率角度：研究核心是讓 AI 預測輸出直接對應手術排程決策，而非僅優化統計指標。此「決策對齊」思維意味著模型設計從一開始就必須理解終端使用者（排程人員）的決策邏輯，是醫療 AI 落地的關鍵設計原則。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
					},
				],
			},
			{
				text: '教育政策銜接角度：台灣現行學生請假與返校機制高度依賴家長自主通報，醫療端缺乏主動預測並通知學校的制度誘因。若未來引入類似 AI 工具，資料共享授權、學生隱私保護與跨部會（衛福部、教育部）協作框架，將是教育政策必須預先設計的配套。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
					},
				],
			},
		],
		articles: [
			{
				title: 'Decision-Aligned Evaluation for Length-of-Stay Forecasting',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '自閉症青少年日常技能差距：早期預測因子研究',
		short_summary: '《JAMA Pediatrics》2026 年 5 月發表跨組比較研究，分析自閉症青少年、其他發展障礙青少年與一般族群在日常生活技能（ADL）上的表現剖面差異，並回溯童年早期可預測獨立生活能力的因子。台灣高中特教教師若掌握這些預測指標，可在 IEP 轉銜計畫中更早啟動 ADL 評估，避免學生升上高中才發現技能嚴重落後、卻已錯失早期介入黃金期。',
		emoji: '🧩',
		did_you_know: '自閉症青少年常出現「認知能力接近同齡、但日常技能顯著落後」的剪刀差現象，例如能解題卻不會搭公車。這種落差在升學壓力下往往被家長與教師忽略，直到準備離校轉銜時才浮現危機。注意：本研究為觀察性比較設計，不宜直接推論因果。',
		talking_points: [
			'證據類型：觀察性跨組比較研究，刊登於同儕審查期刊《JAMA Pediatrics》（2026-05-04），比較自閉症、其他發展障礙、一般族群三組青少年的日常生活技能剖面',
			'研究核心：辨識童年早期哪些因子能預測青少年期日常生活獨立程度，為特教轉銜計畫提供量化預測框架',
			'台灣特教連結：《特殊教育法》施行細則要求高中階段完成個別化轉銜計畫（ITP），本研究的預測因子架構可強化 ITP 中 ADL 評估的啟動時機，從高中前移至國小甚至學前階段',
			'跨障礙比較設計：將自閉症與其他發展障礙分組對照，有助於釐清哪些 ADL 落差為自閉症特有、哪些屬發展障礙共通現象，避免「診斷標籤代替技能評估」的偷懶做法',
			'政策意涵：研究支持早期療育→學前特教→國小特教縱貫追蹤的連續性，與台灣現行「0-6 歲早療整合」政策方向一致，提供跨階段追蹤的實證基礎',
		],
		quote: 'Identifying early childhood predictors of daily living skill independence in adolescents with autism and developmental disabilities may inform earlier and more targeted intervention planning.',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '從特教實務角度：研究將 ADL 表現與診斷類別並列分析，提醒教師不能以診斷標籤代替個別技能評估。台灣 IEP 實務中，ADL 項目常流於形式勾選，本研究的技能剖面方法論可提供更細緻的評估框架。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
					},
				],
			},
			{
				text: '從公共衛生角度：早期童年即可辨識的預測因子，意味著 ADL 落差在學齡前便已埋下，這挑戰了「等到青少年再處理轉銜」的慣性，呼籲幼教與早療體系更主動整合 ADL 培養目標，而非等待學校特教系統接手。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
					},
				],
			},
		],
		articles: [
			{
				title: 'Daily Living Skill Profiles in Adolescents With Autism and Developmental Disabilities',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
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
