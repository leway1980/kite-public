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
		title: 'OpenAI×PwC 以 AI 代理人重塑企業財務長職能',
		short_summary: '全球四大會計師事務所之一 PwC 與 OpenAI 正式合作，以 AI 代理人自動化企業財務流程，涵蓋預測分析、內控強化與報表現代化。對台灣高中教師而言，這代表「會計師」「財務分析師」等傳統白領職業正面臨 AI 系統性取代；學生的職涯選擇與所需技能組合，恐在短短數年內大幅位移，值得及早納入職涯教育與課程討論。',
		emoji: '💼',
		did_you_know: 'PwC 在全球 151 個國家擁有超過 36 萬名員工，是規模最大的專業服務機構之一。此次與 OpenAI 合作，標誌著 AI 代理人從「輔助工具」正式邁向「系統性職能替代」，是繼法律、醫療後，AI 全面滲透高規範化白領專業的又一里程碑。',
		talking_points: [
			'OpenAI 與 PwC（全球四大會計師事務所之一）宣布合作，以 AI 代理人自動化企業財務長辦公室工作流程',
			'應用範圍涵蓋財務預測、內部控制強化、法規遵循報告及 CFO 職能現代化',
			'PwC 將把 OpenAI 技術整合至其企業諮詢服務，協助大型客戶大規模部署 AI 財務代理人',
			'此合作案例顯示：即使是高度專業的知識密集型白領職位，也已開始遭受 AI 代理人系統性取代',
			'台灣商管、主計、財務規劃等公私部門職位的技能需求，預計將加速轉型',
		],
		quote: 'OpenAI and PwC are partnering to help enterprises use AI agents to automate finance workflows, improve forecasting, strengthen controls, and modernize the CFO function.',
		quote_attribution: 'OpenAI, 2026-05-04',
		quote_source_url: 'https://openai.com/index/openai-pwc-finance-collaboration',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '樂觀派（科技業觀點）：AI 代理人能替代繁瑣的資料彙整與報表作業，讓財務專業人員聚焦高價值決策分析，是生產力革命而非裁員危機。PwC×OpenAI 的合作模式，有望成為其他專業服務業導入 AI 的示範樣板。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
			{
				text: '謹慎派（勞動市場觀點）：財務流程自動化將衝擊中階財務分析師與會計人員的職缺數量。AI 代理人更可能直接取代大量重複性白領工作，而非單純「協助人類決策」，加劇技術性失業問題。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
			{
				text: '教育視角：此案例警示台灣商管與會計職涯教育若不即時調整課程內容，學生可能在進入職場前就面臨結構性就業困境；高中階段的職涯探索課程應提前納入 AI 衝擊討論。',
				sources: [
					{
						name: 'OpenAI',
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
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Gemini API 推出 Webhook 事件通知，長時任務不再卡等',
		short_summary: 'Google 宣布 Gemini API 支援 Webhook 機制，開發者無需持續輪詢即可得知長時任務完成狀態。批次摘要、大量文件分析等耗時工作過去容易因逾時失敗，Webhook 採事件驅動架構，任務完成後主動回呼，大幅降低延遲與系統負擔。對台灣高中教師而言，這代表未來 AI 批改作文、自動生成教材等工具將更穩定，整班規模的作業不再因逾時中斷，有助大規模教學自動化落地。',
		emoji: '🔔',
		did_you_know: 'Webhook 又稱「反向 API」：傳統 API 是你主動問伺服器「好了嗎？」，Webhook 則是伺服器主動通知你「完成了！」。這種設計早在 GitHub、Stripe 等平台普及，如今進入 AI API 領域，代表 AI 長時推論任務已成常態需求。',
		talking_points: [
			'Google 於 2026-05-04 在 Gemini API 正式推出 Webhook 事件通知支援',
			'事件驅動架構取代輪詢模式，任務完成後主動回呼開發者指定 URL，減少無效 API 呼叫',
			'主要受益場景：批次文件摘要、大規模內容生成、多輪複雜推論等長時工作',
			'降低延遲與系統負擔，對資源有限的教育科技開發者與新創特別友好',
			'可支撐整班（30–50 份）作文同步上傳、非同步批改、完成後通知教師的完整流程',
		],
		quote: 'Reduce friction and latency for long-running jobs with Webhooks in Gemini API',
		quote_attribution: 'Google Blog, 2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從開發者工具角度看，Webhook 機制讓 Gemini API 更接近 GitHub、Stripe 等生產級基礎設施標準。台灣教育科技新創無需自建輪詢佇列，可用更低成本打造不中斷的 AI 批次服務。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
			{
				text: '從教育應用落地角度看，長時任務穩定性一直是 AI 輔助評量的瓶頸。Webhook 若整合進教學平台，能實現「AI 批改完成後主動通知教師」的非同步流程，讓 AI 真正扮演助教角色，而非讓師生在等待畫面前空轉。',
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
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Google 4 月 AI 更新：水下影片生成與行動裝置模擬介面亮相',
		short_summary: 'Google 於 2026 年 4 月集中發布多項 AI 新功能，涵蓋能生成水下真實感場景的 mp4 影片輸出，以及行動裝置 AI 影片模擬介面展示。對台灣高中教師而言，此波更新代表 AI 影片生成工具的使用門檻持續降低——學生可能已在用類似工具製作高擬真影像內容。教師有必要掌握這類技術的能耐與侷限，在課堂引導媒體識讀討論，協助學生辨別 AI 生成影像與真實紀錄的差異，避免錯誤資訊藉由視覺內容散布。',
		emoji: '🎬',
		did_you_know: 'AI 影片生成技術現已能模擬水下光線折射、氣泡物理效果等複雜場景，而這類特效在數年前需耗費大量製作成本。如今透過文字提示即可生成，正深刻改變影視製作與教育素材的生產方式。',
		talking_points: [
			'Google 於 2026 年 4 月集中揭露多項 AI 新功能，涵蓋影片生成與行動裝置介面兩大方向',
			'AI 影片生成已可輸出包含水下場景的 mp4 檔案，展示物理模擬與視覺真實感的新里程碑',
			'行動裝置 AI 影片模擬介面正式亮相，顯示 Google 正將進階影片生成工具推向一般消費者',
			'此類工具可應用於教育素材製作，但同步帶來假影片辨識的媒體素養新挑戰',
			'Google 連續數月集中發布 AI 更新，反映大型科技公司加速 AI 產品落地的競爭態勢',
		],
		quote: 'The latest AI news we announced in April 2026',
		quote_attribution: 'Google Blog, 2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從技術普及角度，Google 持續壓低 AI 影片生成門檻，行動裝置介面的出現意味學生無需專業設備即可生成高擬真影片，教育素材製作與學習展示的空間大幅擴展，值得教師主動探索應用場景。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
					},
				],
			},
			{
				text: '從媒體素養角度，AI 生成的水下場景影片與真實紀錄幾乎難以區分，對高中社會、自然科課程中引用影像資料的可信度構成挑戰，教師需重新思考如何引導學生驗證影像來源與辨識生成痕跡。',
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
		id: 'aiNews-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 重構語音 AI 基礎架構，低延遲即時對話規模化落地',
		short_summary: 'OpenAI 揭露如何從底層重建 WebRTC 技術堆疊，讓即時語音 AI 達到毫秒級低延遲並支援全球規模部署。對台灣高中教師而言，這代表 AI 語音對話工具（如英語口說練習、即時問答）的技術瓶頸正快速消解。當系統延遲低到感知不出，學生與 AI 的語音互動將趨近真人對話體驗，可望大幅提升口說輔助工具在課堂的實用可行性。',
		emoji: '🎙️',
		did_you_know: 'WebRTC 原為視訊通話設計的開放標準，OpenAI 將其從頭改造用於語音 AI。最大挑戰是「換手（turn-taking）」邏輯——讓 AI 精確判斷說話者何時停頓、何時接話，而非沿用傳統「按鍵說話」或固定靜音門檻，這才是自然對話體驗的技術核心。',
		talking_points: [
			'OpenAI 從底層重建 WebRTC 技術堆疊，核心目標是將語音往返延遲壓至人耳不易察覺的範圍',
			'關鍵突破在「對話換手（turn-taking）」機制——AI 能自然判斷說話者停頓並即時接話，不再依賴固定靜音偵測門檻',
			'架構支援全球規模同時部署，開發者可直接呼叫 API 打造低延遲語音應用，無需自建基礎設施',
			'英語口說練習、口頭問答輔助等教育場景技術門檻大幅降低，即時語音回饋首度具備課堂落地可行性',
		],
		quote: 'We rebuilt our WebRTC stack from the ground up to support real-time Voice AI with low latency, global scale, and seamless conversational turn-taking.',
		quote_attribution: 'OpenAI 官方部落格，2026-05-04',
		quote_source_url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '技術賦能角度：OpenAI 工程團隊認為底層重建是語音 AI 規模化不可迴避的路徑。透過自建 WebRTC 堆疊，延遲與換手邏輯得以針對 AI 對話場景深度優化，而非沿用視訊會議的通用架構設計。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
			{
				text: '基礎設施集中化隱憂：此架構意味第三方應用高度依賴 OpenAI 語音基礎設施。對教育機構而言，若服務中斷或定價調整，課堂語音 AI 工具的穩定性與成本可預測性將面臨挑戰，自主性存疑。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
			{
				text: '教師實務角度：低延遲語音 AI 最直接的意義是「即時回饋」成為可能——學生說完一句英文，AI 在不到一秒內給出發音或語意回饋，體驗接近真人家教，改變過去語音 AI 在課堂令人尷尬的長時停頓。',
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
		id: 'aiEducation-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: 'NBER 百年美國租金數列：BLS 官方通膨指標低估住宅成本？',
		short_summary: '美國國家經濟研究局（NBER）工作論文重建美國 1914–2006 年主要住宅租金（RoPR）歷史時間序列，屬跨世紀量化歷史計量研究，以原始房租記錄校驗 BLS 官方消費者物價指數（CPI）方法論。BLS 官方數列顯示名目租金年均僅漲 2.6%，但研究者質疑其統計設計可能系統性低估實際住宅成本壓力。台灣高中社會科與統計素養課討論通膨指標時，「官方統計 vs. 學術獨立重建數列」的方法論張力，是帶領學生批判性閱讀數據、理解指標設計如何影響政策結論的絕佳真實案例。',
		emoji: '🏠',
		did_you_know: '消費者物價指數（CPI）中「住宅」項目的計算方式在各國差異懸殊：美國 BLS 採「業主等值租金」估算自有住宅成本，而非實際市場售價，導致房市泡沫期間 CPI 可能嚴重失真。這類指標設計選擇，直接影響薪資調整基準與社福給付水準。注意：本研究為工作論文（歷史量化研究），不宜直接推論現代租金漲幅之因果關係。',
		talking_points: [
			'證據類型：NBER 工作論文（歷史量化研究，非 RCT），重建美國 1914–2006 年跨世紀住宅租金時間序列，以原始記錄資料校驗官方統計',
			'BLS 官方 RoPR 數列顯示美國名目租金 1914–2006 年年均僅漲 2.6%，研究者對此提出系統性方法論質疑',
			'研究核心爭點：CPI 住宅分項的抽樣框架與調查設計，是否導致官方數列長期低報租金真實漲幅，進而誤導生活成本政策評估',
			'教育現場應用：統計素養課可用此案例帶學生思考「誰定義通膨？」、「指標設計選擇背後的價值判斷是什麼？」',
			'此類百年歷史重建研究為評估長期薪資購買力趨勢、貧富不均演變提供關鍵基準，是經濟史與公民教育的優質實證素材',
		],
		quote: 'nominal rental prices increased by just 2.6% per year from 1914 to 2006',
		quote_attribution: 'NBER Working Paper, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35124#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '從統計方法論角度：BLS 官方租金指數的設計選擇（抽樣框架、調查週期、業主等值租金計算方式）可能在不同歷史時期造成系統性偏差，學術獨立重建數列提供了檢驗官方統計可信度的重要對照，也凸顯「官方數字」並非中立客觀的事實。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35124#fromrss',
					},
				],
			},
			{
				text: '從分配正義與政策意涵角度：若官方生活成本指數長期低估住宅負擔，以此為基礎的薪資調整、社福給付、退休金計算，可能系統性地對低收入與租屋族群不利——這是高中公民課討論分配正義、數據政治時值得引入課堂的真實爭議。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35124#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Rental Prices and the Cost of Living in the United States, 1914–2006',
				link: 'https://www.nber.org/papers/w35124#fromrss',
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
		title: '本週 NotebookLM 教學熱：Gemini 整合功能全面開放',
		short_summary: 'Google 於 2026 年 4 月 Gemini Drop 更新中，將 NotebookLM 進階功能（Audio Overview、Mind Map、Quiz）開放所有用戶免費使用，並正式整合至 Gemini 介面。台灣多家科技媒體同步推出教學報導。對高中教師而言，此工具「只根據上傳資料回答、自動附引文」的設計可大幅降低 AI 幻覺風險，適合導入閱讀理解與自主備考場景，且免費門檻已大幅降低，學生無需付費即可完整使用核心功能。',
		emoji: '📓',
		did_you_know: 'NotebookLM 採「封閉式 RAG（檢索增強生成）」架構，AI 只從你上傳的來源中擷取答案並標注引文，不混入外部網路資訊，是目前市面上少數可即時驗證回答出處的 AI 筆記工具，特別適合需要引用可靠依據的學術與教學場景。',
		talking_points: [
			'2026 年 4 月 Gemini Drop 更新：NotebookLM 的 Audio Overview（AI 雙人語音播客摘要）等進階功能正式向免費用戶全面開放',
			'NotebookLM 已整合進 Gemini 主介面，用戶可在單一平台完成資料上傳、筆記彙整與 AI 問答，無需切換工具',
			'台灣 YouTube 頻道示範「費曼學習法 × NotebookLM」備考流程，主打免費取代付費補習班課程',
			'鏈新聞 ABMedia 推出 2026 完整教學，涵蓋 Audio/Video Overview、Mind Map、Quiz 等五大功能模組與定價說明',
			'電腦王阿達指出免費與付費（Gemini Advanced）方案仍有功能配額差異，高用量學習場景需留意上限',
		],
		quote: '特色是「只用你上傳的資料回答」、附引文不編造',
		quote_attribution: '鏈新聞 ABMedia，2026-04-28',
		quote_source_url: 'https://abmedia.io/notebooklm-complete-guide-2026',
		quote_source_domain: 'abmedia.io',
		perspectives: [
			{
				text: '功能普及化視角：電腦王阿達與 SOGI 手機王聚焦 Gemini Drop 帶來的免費開放政策，強調 NotebookLM 進入「零門檻」時代，Gemini 整合讓工具更易上手，有利推廣至一般教師與學生，整體基調偏樂觀正面。',
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
				text: '自主學習應用視角：YouTube 頻道與 ABMedia 教學著重個人學習場景，以費曼學習法搭配 NotebookLM 拆解考照教材，強調 AI 工具可取代付費課程；但此路徑預設使用者高度自律，課堂集體導入仍需額外規劃與數位素養培訓。',
				sources: [
					{
						name: 'YouTube（GoodJobAI 頻道）',
						url: 'https://www.youtube.com/watch?v=h7Uvr4LF9b4',
					},
					{
						name: '鏈新聞 ABMedia',
						url: 'https://abmedia.io/notebooklm-complete-guide-2026',
					},
				],
			},
			{
				text: '資料隱私灰色地帶：Gemini 整合讓操作介面更流暢，但學生將個人筆記、試卷或教材上傳至 Google 伺服器，涉及資料儲存與隱私政策；在校園場景中屬待釐清的議題，相關媒體報導對此普遍著墨不多，值得教師自行評估。',
				sources: [
					{
						name: 'LINE TODAY（手機王）',
						url: 'https://today.line.me/tw/v3/article/pekKRBe',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: 'SOGI 手機王、鏈新聞 ABMedia、LINE TODAY 同步報導 Gemini Drop 更新與 NotebookLM 整合使用教學',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: 'YouTube 頻道發布「費曼學習法 × NotebookLM 備考」影音教學',
			},
			{
				date: '2026-04-30',
				date_iso: '2026-04-30',
				content: 'NotebookLM 官方宣布進階功能向所有用戶開放（電腦王阿達引述官方推文）',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '電腦王阿達發文彙整 Gemini 最聰明 NotebookLM 功能全面開放消息',
			},
		],
		articles: [
			{
				title: 'Google 將Gemini 最聰明的NotebookLM 功能開放所有人使用',
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
				title: 'Google Gemini筆記本怎麼用？整合NotebookLM使用教學一次看懂',
				link: 'https://today.line.me/tw/v3/article/pekKRBe',
				domain: 'today.line.me',
				date: '2026-04-28',
			},
			{
				title: '2026年4月Gemini Drop更新！6項最新功能整理一次看',
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
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '文化規範的黏滯性：AI 教育改革為何常遭隱性阻力',
		short_summary: '美國國家經濟研究局（NBER）工作論文綜述文化規範起源、延續與演化，研究方法為跨時代歷史比較分析，涵蓋多國案例（非單一 RCT）。對台灣高中教師而言，此研究揭示：課堂規範（填鴨教學、師生權威關係）本身即是受歷史塑造的文化產物，具極強黏滯性。AI 輔助教學若忽略此背景，推行阻力便難以解釋，更難以化解。',
		emoji: '🏛️',
		did_you_know: '文化規範的黏滯性有具體實驗證據支撐：移民到異文化社會後，第二代子女仍部分保留祖籍地行為模式——這是研究文化傳遞機制的重要自然實驗。這代表規範傳遞並非制度強制，而是家庭與日常互動的隱性再生產。注意：本研究為文獻綜述（survey paper），整合多國歷史比較研究，不宜直接推論單一因果。',
		talking_points: [
			'證據類型：NBER 工作論文（文獻綜述），整合多國歷史比較與移民自然實驗研究，非單一 RCT 或問卷',
			'文化規範由深層歷史力量塑造（農耕制度、宗教傳播、殖民歷史），一旦形成便具跨代延續性，難以政策短期逆轉',
			'演化機制：規範在重大外部衝擊（戰爭、大規模移民、科技革命）下才加速演化；日常環境下趨向穩定自我複製',
			'台灣教育脈絡：108 課綱推動素養導向，但若教師評量文化規範未同步演化，AI 差異化教學工具的實際效益將大打折扣',
			'行動建議：教師可先識別自身課堂中哪些慣習屬於文化規範（非個人選擇），再針對性設計改變契機，而非全面推倒',
		],
		quote: 'I begin by examining the deep historical forces that shape the formation of cultural norms',
		quote_attribution: 'NBER（美國國家經濟研究局）, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35125#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '文化決定論角度：文化規範由遠古歷史條件奠定，現代政策干預空間有限。若此成立，台灣教育改革必須等待文化代際自然更替，短期 AI 工具介入難以撼動根本，政策制定者應降低對「工具換代即改變文化」的期待。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35125#fromrss',
					},
				],
			},
			{
				text: '漸進演化角度：文化規範雖黏滯，但在足夠強度的外部衝擊（如 COVID-19 遠距教學普及、生成式 AI 滲透日常）下仍會加速演化。教師作為規範傳遞節點，可主動選擇成為演化推手，而非被動等待世代更替。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35125#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Sticky Traditions: Origin, Persistence, and Evolution of Cultural Norms',
				link: 'https://www.nber.org/papers/w35125#fromrss',
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
		title: '逾 2.5 萬份問卷揭示：家庭如何感知央行利率政策並做出行為反應',
		short_summary: '美國國家經濟研究局（NBER）2026 年工作論文，以超過 25,000 份美國家庭問卷為樣本，透過大規模量化問卷結合計量識別策略，分析一般民眾對貨幣政策傳導機制的主觀感知與後續消費、儲蓄、借貸決策的關聯。對台灣高中經濟科教師而言，此研究提供實證基礎：民眾對升降息的理解往往系統性偏離央行預期，且感知偏差直接驅動行為。這對「如何引導學生讀懂央行政策新聞、辨別金融資訊可信度」具有直接的課程設計啟發。',
		emoji: '📊',
		did_you_know: '研究發現家庭感知貨幣政策的管道（利率、信貸、資產價格）因社經背景差異顯著，顯示金融素養教育不能只傳授「教科書定義」，還需橋接學生的日常生活感知框架，才能真正縮小認知落差。注意：本研究為大規模橫斷面問卷調查，不宜直接推論政策干預的因果效果。',
		talking_points: [
			'【證據類型：大規模橫斷面問卷調查＋計量識別策略】樣本逾 25,000 份美國家庭問卷，NBER 工作論文形式發布，尚未完成正式同儕審查',
			'研究核心發現「感知落差」：一般家庭對央行升息傳導路徑的理解，與總體經濟學標準模型描述存在系統性差距',
			'行為層面：家庭消費、儲蓄與借貸決策受主觀感知驅動的程度，可能超越客觀名目利率水準本身的直接影響',
			'方法亮點：論文採「識別策略」（identified）試圖分離感知效果與其他混淆因素，在問卷研究中屬較嚴謹設計',
			'台灣課堂啟示：高中「經濟學」與「理財規劃」課程可借鑒此框架，設計破除「升息一定讓房價跌」等常見迷思的引導式討論活動',
		],
		quote: 'This paper studies how households perceive the transmission of monetary policy and how these perceptions affect their decisions.',
		quote_attribution: 'NBER Working Paper, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35127#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '總體政策視角：若家庭的感知系統性偏離理性預期假設，央行溝通策略的效力將受到根本質疑。政策制定者應將「感知管理」與「預期引導」納入工具箱，而非只依賴利率數字本身。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35127#fromrss',
					},
				],
			},
			{
				text: '金融教育介入視角：感知落差的存在，正是學校課程的切入點。若學生在高中階段建立正確的利率傳導心智模型，即可作為未來家庭決策者時縮小此類認知偏差，具有長期社會效益。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35127#fromrss',
					},
				],
			},
			{
				text: '研究侷限視角：橫斷面問卷難以完全排除選擇偏誤與自陳偏差（social desirability bias）；識別策略的有效性取決於工具變數假設是否成立，讀者應待正式發表後再評估結論穩健性。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35127#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Monetary Policy According to Households: Perceptions, Reactions and Channels',
				link: 'https://www.nber.org/papers/w35127#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'aiEducation-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '危機下農業補貼最適設計：金融摩擦如何放大政策失效',
		short_summary: 'NBER 工作論文（#35126，2026）以動態最適化理論模型為核心分析工具，研究政府在「政策工具不足」條件下，如何為兼具生產者與消費者雙重角色的農村家戶設計肥料補貼。研究方法屬理論建模搭配開發中國家農村觀察性資料，非 RCT 實驗。台灣高中社會科教師講授「市場失靈與政府干預」單元時，可引用此研究說明補貼政策的時機、制度侷限與時間一致性困境，作為政策分析思維訓練的延伸案例。',
		emoji: '🌾',
		did_you_know: '肥料補貼是全球規模最大的農業補貼項目之一，在撒哈拉以南非洲尤為普遍。「時間一致性」困境在教育補貼政策中同樣存在：若政府無法可信承諾長期補助，家戶的教育或生產投資行為將系統性扭曲，補貼效果反而倒退。注意：本研究為理論模型搭配觀察性資料，不宜直接推論因果。',
		talking_points: [
			'【證據類型】NBER 工作論文（理論模型 + 開發中國家農村觀察性資料），非 RCT 實驗，結論需謹慎推論因果關係',
			'研究核心：政府政策工具有限（limited instruments）時，如何設計肥料補貼使其在危機期間達到時間一致的最適效果',
			'關鍵機制：金融摩擦（financial frictions）使農戶無法及時取得信貸購買生產投入品，大幅削弱補貼的實際效益',
			'肥料補貼是全球農業支出中規模最大的補貼類別之一，危機時期若政策設計忽略流動性限制，即使補貼金額充足也難以發揮效果',
			'政策含義：有效危機補貼需同步解決農村金融可及性問題，單純壓低農資售價往往無法觸及真正最需要補貼的家戶',
		],
		quote: 'We study time-consistent optimal policy when undiversified owner-operators face financial frictions and a planner with limited instruments.',
		quote_attribution: 'NBER Working Paper #35126, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35126#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '【政策設計視角】研究指出「工具不足」是開發中國家政府的常態困境：即使知道最佳政策為何，可用的政策槓桿往往不足以同時修正所有市場失靈。肥料補貼案例提醒政策制訂者：在資源有限時，干預的優先順序與時機設計比補貼金額本身更關鍵，此邏輯同樣適用於教育補貼政策的設計。',
				sources: [
					{
						name: 'NBER Working Paper',
						url: 'https://www.nber.org/papers/w35126#fromrss',
					},
				],
			},
			{
				text: '【農村金融視角】研究強調金融摩擦是補貼政策失效的結構性根源：農戶缺乏信貸管道，即使名義補貼存在，也無力在危機初期及時購買生產要素。此障礙使農業補貼政策的設計必須將金融可及性（financial inclusion）納為前提條件，而非事後補救措施。',
				sources: [
					{
						name: 'NBER Working Paper',
						url: 'https://www.nber.org/papers/w35126#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Industrial Policy with Development Characteristics: Fertilizer Policy in Times of Crisis',
				link: 'https://www.nber.org/papers/w35126#fromrss',
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
		title: 'JAMA評論：滿足HIV兒童基本需求才是改善健康結果的關鍵',
		short_summary: '《JAMA Pediatrics》2026年5月刊載敘事性評論，聚焦全球數百萬罹患HIV的兒童與青少年照護議題。評論未揭示新收案樣本，屬文獻綜述性質，主張抗病毒藥物之外，穩定住所、充足營養與心理治療等「基本需求」同樣決定健康結果。對台灣高中教師而言，此框架呼應校園特殊生支持政策的核心辯題：當學生的生理病況背後隱藏社會性需求缺口，單靠醫療或學科補救往往不足，需要跨系統的整合支持，方能縮短健康與學習落差。',
		emoji: '🏥',
		did_you_know: '全球15歲以下感染HIV的兒童逾150萬人，九成以上集中於撒哈拉以南非洲。即使抗病毒藥物可及，缺乏穩定住所與食物的兒童治療依從率仍顯著偏低，顯示「基本需求」是藥物效果的天花板。注意：本研究為敘事性評論（Commentary），不宜直接推論因果。',
		talking_points: [
			'證據類型：《JAMA Pediatrics》敘事性評論，非RCT或系統性回顧，結論來自既有文獻綜述，無新收案資料或樣本統計',
			'核心主張：HIV兒童健康結果由雙引擎驅動——抗病毒藥物創新，以及住所、營養、心理治療等基本需求的滿足，兩者缺一不可',
			'評論引用「兒童是我們送往未來的訊息」隱喻，強調社會對兒童健康長期投資的道德義務與政策回報',
			'政策呼籲：研究界與政策制定者應將「健康社會決定因素」（Social Determinants of Health）正式納入HIV兒童照護架構，超越純醫療介入思維',
		],
		quote: '"Children [and adolescents] are the living messages we send to a time we will not see"',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848574',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '醫療創新優先論：評論肯定藥物研發與科學進步是突破HIV兒童困境不可或缺的要素，主張透過持續創新縮短全球治療可及性差距，技術突破仍是政策投資的首要優先。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848574',
					},
				],
			},
			{
				text: '社會決定論：單靠藥物無法消除健康不平等，若穩定居所、食物供給、心理照護等基本需求持續缺位，再精準的抗病毒療程也難以發揮效用——此觀點直接挑戰「醫療萬能」的政策假設。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848574',
					},
				],
			},
		],
		articles: [
			{
				title: 'Examining Childhood HIV Outcomes—Meeting Basic Needs Matters',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848574',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
		],
	},
	{
		id: 'gmail-ai-融入教學-高中',
		cluster_number: 'gmail-ai-融入教學-高中',
		unique_domains: 5,
		number_of_titles: 5,
		category: '教育政策',
		title: '本週「AI融入教學高中」焦點：台南開研習、曼哈頓喊停，各地方向分歧',
		short_summary: '本週「AI融入教學高中」話題橫跨台、港、中、美四地。台南中崙高中辦理線上研習，開放十二年國教高優前導學校教師報名，協助課堂導入AI自主學習策略；東華大學觀遊系則由教師帶領，將生成式AI實際用於景點語音導覽製作。與此同時，紐約曼哈頓原訂設立的AI專門高中因家長強烈反對而正式叫停，BBC亦報導中國家長擔憂孩子因過度依賴AI淪為「科舉被廢後的秀才」。正反案例同步浮現，台灣高中教師不能只等政策，應主動理解融入方式與潛在風險。',
		emoji: '🤖',
		did_you_know: '「科舉被廢後的秀才」比喻來自中國家長群體——科舉廢除後，熟背八股的人才一夕失去競爭力；現在有家長擔憂，若AI全面代勞思考，孩子也可能成為下一批「沒有用武之地的舊式人才」。這個比喻在華人家長圈引發廣泛共鳴，反映出對AI融入教育的深層焦慮。',
		talking_points: [
			'台南中崙高中於 2026-04-29 辦理「AI融入自主學習教學」線上研習，課程代碼 5567461，對象為114學年度十二年國教高優前導學校及有興趣之全國高中教師',
			'東華大學觀遊系配合教學卓越中心「生成式AI融入專業課程」計畫，將 AI 實際導入馬太鞍濕地語音導覽內容生產，屬大學端示範案例',
			'紐約曼哈頓 AI 專門高中計劃遭社區強烈反對後叫停，市教育總監公開表示理解家長對 AI 的擔憂，校方原初衷為培養學生科技倫理',
			'BBC 報導中國部分學校已將兩三百人大課拆為幾十人小組，將 AI 作為「小組協作的一員」，強調人際交流優先',
			'香港大角嘴天主教小學早在電腦科課程中融入 AI 基礎概念，顯示 AI 融入教學已從高中向下延伸至小學階段',
		],
		quote: '以前兩三百人的大課，現在拆成幾十人的小組，強調人與人之間的交流碰撞，同時把AI作為小組協作的一員融入進來。',
		quote_attribution: 'BBC News 中文，2026-04-30',
		quote_source_url: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
		quote_source_domain: 'bbc.com',
		perspectives: [
			{
				text: '實踐推進派（台灣、香港）：台灣教育現場以研習、實作課為主要推動形式，中崙高中辦線上研習開放全國報名，東華大學直接將生成式AI嵌入專業課程產出；香港個案也顯示學校主動在常規科目中納入AI概念，整體傾向「先跑先學、邊做邊修正」。',
				sources: [
					{
						name: '台南女中附設高中（tngs.tn.edu.tw）',
						url: 'https://www.tngs.tn.edu.tw/2026/04/28/%E6%95%99%E5%B8%AB%E8%B3%87%E8%A8%8A-%E4%B8%AD%E5%B4%99%E9%AB%98%E4%B8%AD-%E8%BE%A6%E7%90%86%E3%80%8Cai%E8%9E%8D%E5%85%A5%E8%87%AA%E4%B8%BB%E5%AD%B8%E6%95%99%E5%AD%B8%E3%80%8D%E7%B7%9A/',
					},
					{
						name: '中央社',
						url: 'https://www.cna.com.tw/postwrite/chi/432240',
					},
				],
			},
			{
				text: '社會反彈派（美國家長、中國家長）：曼哈頓家長以「對人工智能的擔憂」為由成功叫停 AI 高中計畫；中國家長群體則以「科舉廢後的秀才」比喻，質疑若孩子依賴 AI 思考，未來競爭力將大打折扣。兩者均反映：在政策落地前，家長的信任基礎尚未建立。',
				sources: [
					{
						name: '星島日報（美國版）',
						url: 'https://www.singtaousa.com/2026/04/28/news/usa/manhattan-ai-high-school-canceled/',
					},
					{
						name: 'BBC News 中文',
						url: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '中崙高中公告辦理「AI融入自主學習教學」線上研習，開放全國高中教師報名',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '星島日報報導紐約曼哈頓 AI 專門高中計劃因反對聲浪正式叫停',
			},
			{
				date: '2026-04-30',
				date_iso: '2026-04-30',
				content: 'BBC 中文報導中國家長對 AI 衝擊教育的憂慮，引發華人社群廣泛討論',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '中央社報導東華大學觀遊系生成式AI融入景點語音導覽實作課成果',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '香港媒體報導大角嘴天主教小學 AI 融入教學多元模式',
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
				title: '中崙高中辦理「AI融入自主學習教學」線上研習',
				link: 'https://www.tngs.tn.edu.tw/2026/04/28/%E6%95%99%E5%B8%AB%E8%B3%87%E8%A8%8A-%E4%B8%AD%E5%B4%99%E9%AB%98%E4%B8%AD-%E8%BE%A6%E7%90%86%E3%80%8Cai%E8%9E%8D%E5%85%A5%E8%87%AA%E4%B8%BB%E5%AD%B8%E6%95%99%E5%AD%B8%E3%80%8D%E7%B7%9A/',
				domain: 'tngs.tn.edu.tw',
				date: '2026-04-29',
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
		id: 'taiwanEduPolicy-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '父親早逝對幼童發展的衝擊：美國喬治亞州世代研究',
		short_summary: '《JAMA Pediatrics》刊登一項觀察性世代研究，以美國喬治亞州 2017–2022 年行政登錄資料為基礎，追蹤 5 歲以下幼童的父親死亡率、死亡原因及其對家庭的潛在後續影響。台灣高中教師雖面對的是青少年，但了解幼年喪父的長期發展軌跡有實務意義：失去父親的學生進入高中時，可能已累積多年的依附創傷、經濟壓力與情緒調節困難。研究提醒教育現場需建立跨階段家庭危機辨識機制，而非等問題浮現才介入。',
		emoji: '👨‍👧',
		did_you_know: '喪親事件對兒童的影響因年齡、性別及社會支持網絡而有顯著差異。喬治亞州資料顯示意外事故與慢性疾病是主要死因，但台灣脈絡下自殺與職業傷害比重可能不同，不宜直接套用政策數字。注意：本研究為觀察性世代研究，不宜直接推論因果。',
		talking_points: [
			'【證據類型】觀察性世代研究（cohort study），使用美國喬治亞州 2017–2022 年行政資料，非隨機對照實驗，結果反映相關性而非因果關係',
			'研究聚焦 5 歲以下幼童的父親死亡率與死因分布（含意外、慢性病等多類原因），為兒童福利資源配置提供量化基礎',
			'父親在孩童最早期發展階段（0–5 歲）死亡，對情緒、認知與社會化發展可能造成長達十年以上的連鎖影響',
			'台灣若能在學籍資料中標注「幼年喪親」，可協助高中教師提前識別高風險學生，主動啟動輔導資源而非等待轉介',
			'本研究可作為倡議「喪親支持服務應延伸至學齡期」的國際參照，供台灣社會局與教育局跨部門政策對話使用',
		],
		quote: 'This cohort study examines the rates, causes, and implications of the death of fathers of children 5 years or younger in the state of Georgia from 2017 to 2022.',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '公共衛生視角：研究以死亡率與死因為核心指標，強調系統性監測的政策價值。透過量化父親死亡的規模與型態，有助於政府優先分配喪親家庭支持資源，並針對高風險死因（如意外、藥物過量）制定預防政策，將問題界定為可介入的公衛議題。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
			{
				text: '教育福祉視角：同一份數據若從「幼童後續發展」切入詮釋，聚焦點轉向喪父事件對學習行為與心理健康的長期軌跡。此觀點要求學校系統建立跨年級的喪親學生追蹤機制，而非僅在事件發生當下提供一次性輔導，強調教師作為早期預警者的角色。',
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
		id: 'taiwanEduPolicy-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '重度自閉症青少年照顧需求調查：多數家庭面臨未獲滿足的支持缺口',
		short_summary: '《JAMA Pediatrics》2026 年 5 月發表橫斷面研究，以「重度自閉症」（profound autism）分類標準，分析自閉症青少年及其照顧者的未滿足支持需求，並評估家庭對監護式住宅的預期需求。對台灣高中教師而言，台灣 12 年國教已納入身心障礙學生，但重度自閉症的診斷分類與轉銜規劃尚未與國際同步接軌；理解照顧者在青少年階段面臨的支持缺口，有助於教師在 IEP 會議中更具體評估家庭資源與後學校安置需求。',
		emoji: '🧩',
		did_you_know: '「重度自閉症」（profound autism）是近年研究社群提出的分類概念，特指具嚴重認知障礙或極低口語能力的自閉症者，屬當前特殊教育討論中支持需求最高的族群。台灣特殊教育法目前尚無對應的正式分類名稱。注意：本研究為橫斷面觀察性研究，不宜直接推論因果關係。',
		talking_points: [
			'證據類型：美國橫斷面觀察性研究（cross-sectional study），刊登於 JAMA Pediatrics（2026-05-04），屬單一時間點描述性分析，僅能呈現相關性，無法建立因果推論',
			'研究以「重度自閉症」診斷標準作為分層依據，比較符合與不符合標準的自閉症青少年，在未滿足支持需求上的顯著差異',
			'研究同步調查照顧者自身的未滿足需求，以及家庭對畢業後監護式住宅安置的預期，揭示青少年轉銜後的生活規劃困境',
			'此研究結果對 IEP 轉銜計畫具參考意義：符合重度自閉症標準的學生，其家庭在後學校階段的照顧負擔與支持缺口顯著更高',
			'台灣高中身心障礙學生的轉銜計畫（含職訓、日照、住宿安排）應提前連結社政與衛政體系，避免畢業後出現服務斷層',
		],
		quote: 'Profound autism criteria are associated with unmet support needs of autistic adolescents and their caregivers and the anticipated need for supervised housing.',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848573',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '從醫學研究角度，「重度自閉症」分類有助於精準識別最高需求族群，使政策資源能集中分配給照顧負擔最重的家庭，避免「一刀切」支持方案無法觸及真正高需求者。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848573',
					},
				],
			},
			{
				text: '從自閉症倡議社群角度，「重度自閉症」分類具爭議性——部分倡議者擔心功能性標籤強化污名，可能導致資源從其他自閉症者身上移走，且未必能改善當事人的實際生活品質。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848573',
					},
				],
			},
			{
				text: '從教育轉銜政策角度，研究揭示青少年階段的支持缺口與畢業後住宿需求密切相關，意味著若學校端轉銜計畫未與社政、衛政體系整合，家庭在後學校階段將承擔更大風險。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848573',
					},
				],
			},
		],
		articles: [
			{
				title: 'Profound Autism and Unmet Needs Among Autistic Adolescents and Their Caregivers',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848573',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-gmail-教育部-ai-數位學習',
		cluster_number: 'gmail-教育部-ai-數位學習',
		unique_domains: 16,
		number_of_titles: 16,
		category: '教育政策',
		title: '教育部館館有AI上路，AI Di+以慢制快育自主力',
		short_summary: '高中教師應留意：教育部同步推進兩大AI教育計畫。「館館有AI」預計2026年第四季起，讓全國47所大學圖書館免費提供付費版GPT、Claude等AI工具，目標縮減城鄉數位落差；「AI Di+實驗方案」則以「慢AI」精神，由大學生一對一陪伴國中小生培養自主學習能力。台南市四年投入逾24億元、南投完成生生有平板全面覆蓋，地方基礎建設逐步到位，AI融入教學的政策壓力將從硬體建置蔓延至課堂設計層次。',
		emoji: '🤖',
		did_you_know: '「慢AI」概念呼應「慢食運動」哲學：AI Di+實驗方案刻意放緩AI工具介入節奏，讓大學生陪伴者與學生的人際互動先行，避免學生跳過思考過程直接依賴AI產出答案。',
		talking_points: [
			'「館館有AI」計畫預計2026年第四季起，每間國立圖書館提供5台電腦，讓民眾免費使用付費版ChatGPT、Claude，並擴及教育部所屬47所大學圖書館',
			'「AI Di+實驗方案」以「慢AI」為核心精神，由大學生陪伴國中小生學習，強調人際互動優先於AI工具操作，5月4日舉辦全國工作會議',
			'台南市過去四年投入逾24億元推動數位學習，南投縣「生生有平板」已全面達標，地方數位基礎建設持續深化',
			'教育部推出「115年推動教育AI及數位學習績優徵選」，設優良教案等獎項，委由國立臺中教育大學AI人才方舟計畫推動執行',
			'新竹縣百名教師取得Gemini AI認證，研習涵蓋SEL社會情緒學習、機器人編程、學習診斷、學習評量等多元主題',
		],
		quote: 'AI教育是重大公共政策，涉及學生學習權益、數位平權與國家人才培育，不應淪為「雜誌治國」，教育部應儘速補足計畫內容、預算依據與監督機制',
		quote_attribution: 'Yahoo新聞, 2026-05-01',
		quote_source_url: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
		quote_source_domain: 'tw.news.yahoo.com',
		perspectives: [
			{
				text: '教育部與地方政府積極投資AI教育：中央以「館館有AI」和「AI Di+」雙軌並進，台南市四年砸逾24億元，官方立場認為這是縮短數位落差、培育下世代AI競爭力的必要公共建設，顯示各層級政府高度共識。',
				sources: [
					{
						name: '中央社',
						url: 'https://www.cna.com.tw/news/ahel/202605040165.aspx',
					},
					{
						name: 'ETtoday',
						url: 'https://www.ettoday.net/news/20260503/3159111.htm',
					},
					{
						name: '台南市政府',
						url: 'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8811104',
					},
				],
			},
			{
				text: '立委監督角度則提醒，「館館有AI」不能流於政策宣示：須補足預算依據與監督機制，確保學生學習權益真正落實，避免空有政策標題卻缺乏執行細節的「雜誌治國」風險，監督聲音與政策推動形成張力。',
				sources: [
					{
						name: 'Yahoo新聞',
						url: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
					},
					{
						name: '國立教育廣播電台',
						url: 'https://www.ner.gov.tw/CultureNews/Content/?id=26043011570447028',
					},
				],
			},
			{
				text: '各縣市落實節奏不一：新竹縣強調教師AI認證與多元研習（百名教師取得Gemini認證），南投聚焦硬體平板全面覆蓋，反映地方在「人才培育」與「器材建置」之間各有側重，AI融入教學的準備度存在明顯差異。',
				sources: [
					{
						name: '勁報',
						url: 'https://twpowernews.com/news_pagein.php?n_id=290729',
					},
					{
						name: '是新聞YesMedia',
						url: 'https://www.yesmedia.com.tw/%E5%8D%97%E6%8A%95%E3%80%8C%E7%94%9F%E7%94%9F%E6%9C%89%E5%B9%B3%E6%9D%BF%E3%80%8D%E5%85%A8%E9%9D%A2%E9%81%94%E6%A8%99%E3%80%80%E4%B8%89%E5%B9%B4%E6%89%93%E9%80%A0%E6%99%BA%E6%85%A7%E6%A0%A1%E5%9C%92/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: '遠見雜誌報導文藻外語大學入列教育部WISE智慧社會跨領域人才培力計畫補助名單',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '台南市政府於市政會議報告四年投入逾24億元推動數位學習；南投縣「生生有平板」宣布全面達標',
			},
			{
				date: '2026-05-01',
				date_iso: '2026-05-01',
				content: '立委倡議「館館有AI」延伸至各大專院校圖書館，教育部部長允諾研議專案補助',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '教育部U-start創新創業計畫提案破350組，AI技術成亮點；新北市推人權法治列車強化AI時代數位法治素養',
			},
			{
				date: '2026-05-03',
				date_iso: '2026-05-03',
				content: '教育部正式宣布「館館有AI」計畫，47所大學圖書館第四季起免費開放付費AI工具；新竹縣百名教師獲Gemini AI認證',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '教育部辦「AI Di+實驗方案」全國工作會議，正式推動「慢AI」自主學習計畫；公告AI及數位學習績優徵選，由臺中教育大學執行',
			},
		],
		articles: [
			{
				title: 'AI夥伴輔助數位樂學教育部AI Di+實驗方案全國工作會議',
				link: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=9444E403EA03FB57',
				domain: 'edu.tw',
				date: '2026-05-04',
			},
			{
				title: '教育部推AI Di+實驗方案AI學伴助培育自主學習力',
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
				title: '「慢AI」提升學生自主學習力教育部推「AI Di+實驗方案」',
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
				title: '迎向AI新浪潮竹縣百名教師獲Gemini AI認證打造智慧教育典範',
				link: 'https://twpowernews.com/news_pagein.php?n_id=290729',
				domain: 'twpowernews.com',
				date: '2026-05-03',
			},
			{
				title: '迎向AI新浪潮竹縣百名教師獲Gemini AI認證打造智慧教育典範',
				link: 'https://news.pchome.com.tw/living/twpowernews/20260502/index-17777260469091247009.html',
				domain: 'news.pchome.com.tw',
				date: '2026-05-03',
			},
			{
				title: '教育部推「館館有AI」計畫全國圖書館與47所大學將免費開放付費版AI工具',
				link: 'https://www.bigmedia.com.tw/article/1777763719176',
				domain: 'bigmedia.com.tw',
				date: '2026-05-03',
			},
			{
				title: '青年AI新創力U-start用AI助攻百業轉型',
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
				title: '青年創新創業計畫提案破350組結合AI成亮點',
				link: 'https://www.chinesedaily.com/article/detail-687496.html',
				domain: 'chinesedaily.com',
				date: '2026-05-02',
			},
			{
				title: '教育部推「館館有AI」從直屬圖書館起跑葛如鈞：讓學生公平取得AI工具、消弭數位落差',
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
				title: '台南推動AI教育投入逾24億打造智慧學習環境',
				link: 'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8811104',
				domain: 'tainan.gov.tw',
				date: '2026-04-29',
			},
			{
				title: '南投「生生有平板」全面達標三年打造智慧校園新里程',
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
