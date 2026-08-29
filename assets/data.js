/* SECTION: site-data */
window.SITE = {
  avatar: "https://workspace-cdn.uzone.com/7241fe09abda42d49fcb936afcbafda0%2Fo%2F1788010264792-c.png?auth_key=1790602265-0-0-812ad4460d61aa525c1889b81a5929ad",
  scholar: "https://scholar.google.com/citations?user=HuLDoXUAAAAJ&hl=en",
  email: "zinkluan@zju.edu.cn",
  phone: "(+86) 138-5184-1986",
  news: [
    { date: "2025-09", zh: "第一作者论文发表于《Chemical Geology》（中科院一区，IF 4.8+），提出基于机器学习的冈底斯地体隆升研究新框架。", en: "First-author paper published in Chemical Geology (CAS Q1, IF 4.8+), proposing a machine-learning framework for the uplift history of the Gangdese terrane." },
    { date: "2025-08", zh: "合作论文发表于《National Science Review》，揭示冥古宙地壳由汇聚板块构造作用形成。", en: "Co-authored paper published in National Science Review, revealing that Earth's Hadean crust formed via operation of convergent tectonics." },
    { date: "2025-07", zh: "参加 Goldschmidt 2025 大会（布拉格）并作张贴报告。", en: "Poster presentation at Goldschmidt 2025 (Prague)." },
    { date: "2025-06", zh: "荣获比亚迪奖学金（2025）。", en: "Awarded the BYD Scholarship (2025)." },
    { date: "2025-01", zh: "合作论文发表于《Geochemistry, Geophysics, Geosystems》，建立评估 TTG 熔融压力条件的机器学习模型。", en: "Co-authored paper published in Geochemistry, Geophysics, Geosystems, building a machine-learning model for assessing melting pressure conditions of TTG genesis." },
    { date: "2024-12", zh: "合作论文发表于《Geology》，实现洋中脊玄武岩 CO2 含量的机器学习预测。", en: "Co-authored paper published in Geology on machine-learning prediction of CO2 content in mid-ocean ridge basalts." },
    { date: "2024-04", zh: "参加 EGU 2024 大会（维也纳）并作口头报告。", en: "Oral presentation at EGU 2024 (Vienna)." },
    { date: "2024-11", zh: "参加中国地球科学联合学术年会（厦门）并作口头报告。", en: "Oral presentation at the Joint Annual Meeting of Earth Sciences of China (Xiamen)." },
    { date: "2023-04", zh: "参加第 18 届中国矿物岩石地球化学学会学术年会（合肥）并作口头报告。", en: "Oral presentation at the 18th CSMPG Annual Meeting (Hefei)." },
    { date: "2022-07", zh: "参加 Goldschmidt 2022 大会（夏威夷）并作口头报告。", en: "Oral presentation at Goldschmidt 2022 (Hawaii)." },
    { date: "2022-12", zh: "合作论文发表于《Nature Communications》；同年于第二届全国地学研究生论坛作口头报告并获优秀报告奖。", en: "Co-authored paper published in Nature Communications; received the Outstanding Presentation Award at the 2nd National Geoscience Graduate Forum." },
    { date: "2021-12", zh: "合作论文发表于《Nature Communications》，揭示太古宙大型水平板块运动。", en: "Co-authored paper published in Nature Communications, demonstrating large Archean horizontal plate motions." }
  ],
  pubs: [
    {
      year: 2025, tag: "Chemical Geology", first: true,
      title: "The protracted role of India-Eurasia collision in the uplift of the Gangdese terrane revealed by machine learning",
      authors: [["Z. Luan", true], ["J. Liu", false], ["Y. Hao", false], ["J. ZhangZhou", false], ["Q. Xia", false], ["C. Su", false], ["E. Hanski", false], ["J. Zhou", false], ["T. Lei", false]],
      venue: "Chemical Geology, 123022",
      noteZh: "第一作者 · 中科院一区", noteEn: "First author · CAS Q1",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0009254125004127",
      doi: "10.1016/j.chemgeo.2025.123022",
      bib: "@article{luan2025protracted,\n  title={The protracted role of India-Eurasia collision in the uplift of the Gangdese terrane revealed by machine learning},\n  author={Luan, Zhikang and Liu, Jia and Hao, Yantao and ZhangZhou, J. and Xia, Qunke and Su, Chan and Hanski, Eero and Zhou, J. and Lei, T.},\n  journal={Chemical Geology},\n  pages={123022},\n  year={2025},\n  publisher={Elsevier}\n}"
    },
    {
      year: 2025, tag: "Natl. Sci. Rev.", first: false,
      title: "Earth's Hadean crust formed via operation of convergent tectonics",
      authors: [["D. Lu", false], ["J. Liu", false], ["Q. Xia", false], ["Z. Luan", true], ["et al.", false]],
      venue: "National Science Review, 12(8), nwaf230",
      noteZh: "合作 · 顶级期刊", noteEn: "Co-authored · top journal",
      link: "https://doi.org/10.1093/nsr/nwaf230",
      doi: "10.1093/nsr/nwaf230",
      bib: "@article{lu2025hadean,\n  title={Earth's Hadean crust formed via operation of convergent tectonics},\n  author={Lu, D. and Liu, J. and Xia, Q. and Luan, Zhikang and others},\n  journal={National Science Review},\n  volume={12},\n  number={8},\n  pages={nwaf230},\n  year={2025}\n}"
    },
    {
      year: 2025, tag: "G3", first: false,
      title: "Machine Learning Model for Assessing Melting Pressure Conditions of the TTG Genesis: Implications for the Timing of the Onset of Global Plate Tectonics",
      authors: [["D. Lu", false], ["J. Liu", false], ["Q. Xia", false], ["Z. Luan", true], ["et al.", false]],
      venue: "Geochemistry, Geophysics, Geosystems, 26(11), e2025GC012503",
      noteZh: "合作", noteEn: "Co-authored",
      link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GC012503",
      doi: "10.1029/2025GC012503",
      bib: "@article{lu2025ttg,\n  title={Machine Learning Model for Assessing Melting Pressure Conditions of the TTG Genesis},\n  author={Lu, D. and Liu, J. and Xia, Q. and Luan, Zhikang and others},\n  journal={Geochemistry, Geophysics, Geosystems},\n  volume={26},\n  number={11},\n  pages={e2025GC012503},\n  year={2025}\n}"
    },
    {
      year: 2024, tag: "Geology", first: false,
      title: "Prediction of CO2 content in mid-ocean ridge basalts via a machine learning approach",
      authors: [["T.-T. Lei", false], ["J. Liu", false], ["Q.-K. Xia", false], ["J.-J. Zhou", false], ["Z.-K. Luan", true]],
      venue: "Geology, 52(12), 901-905",
      noteZh: "合作", noteEn: "Co-authored",
      link: "https://doi.org/10.1130/G52513.1",
      doi: "10.1130/G52513.1",
      bib: "@article{lei2024co2,\n  title={Prediction of CO2 content in mid-ocean ridge basalts via a machine learning approach},\n  author={Lei, Ting-Ting and Liu, Jia and Xia, Qun-Ke and Zhou, Jin-Jia and Luan, Zhi-Kang},\n  journal={Geology},\n  volume={52},\n  number={12},\n  pages={901--905},\n  year={2024}\n}"
    },
    {
      year: 2022, tag: "Nat. Commun.", first: false,
      title: "Emergence of passive margins in accreting archipelagos signals continental stability and creation of pre-GOE oxygen oases",
      authors: [["Y. Peng", false], ["T. Kusky", false], ["L. Wang", false], ["Z. Luan", true], ["et al.", false]],
      venue: "Nature Communications, 13, 7821",
      noteZh: "合作 · 顶级期刊", noteEn: "Co-authored · top journal",
      link: "https://www.nature.com/articles/s41467-022-34826-0",
      doi: "10.1038/s41467-022-34826-0",
      bib: "@article{peng2022passive,\n  title={Emergence of passive margins in accreting archipelagos signals continental stability and creation of pre-GOE oxygen oases},\n  author={Peng, Y. and Kusky, T. and Wang, L. and Luan, Zhikang and others},\n  journal={Nature Communications},\n  volume={13},\n  pages={7821},\n  year={2022}\n}"
    },
    {
      year: 2021, tag: "Nat. Commun.", first: false,
      title: "Alpine-style nappes thrust over ancient North China continental margin demonstrate large Archean horizontal plate motions",
      authors: [["Y. Zhong", false], ["T. Kusky", false], ["L. Wang", false], ["A. Polat", false], ["X. Liu", false], ["Y. Peng", false], ["Z. Luan", true], ["et al.", false]],
      venue: "Nature Communications, 12, 6172",
      noteZh: "合作 · 顶级期刊", noteEn: "Co-authored · top journal",
      link: "https://www.nature.com/articles/s41467-021-26395-5",
      doi: "10.1038/s41467-021-26395-5",
      bib: "@article{zhong2021alpine,\n  title={Alpine-style nappes thrust over ancient North China continental margin demonstrate large Archean horizontal plate motions},\n  author={Zhong, Y. and Kusky, T. and Wang, L. and Polat, A. and Liu, X. and Peng, Y. and Luan, Zhikang and others},\n  journal={Nature Communications},\n  volume={12},\n  pages={6172},\n  year={2021}\n}"
    }
  ],
  research: [
    {
      periodZh: "2021 – 2025", periodEn: "2021 – 2025",
      zhTitle: "全球造山带地壳厚度变化历史：基于机器学习的研究",
      enTitle: "Crustal Thickness Evolution of Global Orogens: A Machine Learning Study",
      zhDesc: "基于 XGBoost 构建多源地质数据融合预测模型，整合岩石地球化学、地震层析成像与热年代学数据，筛选 12 个关键指标并完成 5 折交叉验证，模型 R² 达 0.87，较传统方法提升 25%；重建环太平洋、特提斯等 6 个主要造山带 26 亿年地壳厚度演化序列。成果发表于《Chemical Geology》。",
      enDesc: "Built an XGBoost-based multi-source fusion model integrating geochemical, seismic tomographic and thermochronological data; screened 12 key features with 5-fold cross-validation, reaching R² = 0.87 (25% over traditional methods). Reconstructed 2.6 Gyr crustal thickness histories of six major orogens. Published in Chemical Geology."
    },
    {
      periodZh: "2023 – 至今", periodEn: "2023 – present",
      zhTitle: "基于机器学习定量恢复古俯冲带参数",
      enTitle: "Quantitative Restoration of Paleo-Subduction Parameters via Machine Learning",
      zhDesc: "设计并实现基于 CNN 与 CatBoost 的俯冲板片参数恢复模型，处理俯冲角度、板片深度、汇聚速率等高维结构化变量，参数恢复准确率达 89%；成功恢复西太平洋、安第斯等 4 个典型俯冲带自中生代以来的构造参数演化序列。",
      enDesc: "Designed CNN + CatBoost models to restore subduction angle, slab depth and convergence rate from high-dimensional structured variables, achieving 89% accuracy; recovered Mesozoic-to-present parameter evolution for four typical subduction zones (West Pacific, Andes, etc.)."
    },
    {
      periodZh: "2019 – 2021", periodEn: "2019 – 2021",
      zhTitle: "华北克拉通中部造山带 25 亿年被动陆源碎屑锆石研究",
      enTitle: "Detrital Zircon Study of the 2.5 Ga Passive Margin, Central North China Craton",
      zhDesc: "系统采集并分析 800 余颗碎屑锆石 U-Pb 年龄与 Hf 同位素组成（LA-ICP-MS），识别太古宙与古元古代两组年龄峰值，构建古元古代被动陆缘沉积-构造演化模型。成果合作发表于《Nature Communications》。",
      enDesc: "Analyzed U-Pb ages and Hf isotopes of 800+ detrital zircons (LA-ICP-MS), identifying Archean and Paleoproterozoic age peaks and building a depositional-tectonic evolution model for the Paleoproterozoic passive margin. Co-published in Nature Communications."
    }
  ]
};
