// 苏州学区数据库
// 数据来源：百度搜索聚合、家长口碑、升学数据（2025-2026）
// 灏灏可以随时让 Miumiu 更新

const SCHOOL_DB = {
  // ========== 高中 ==========
  highSchools: [
    // 第一梯队（录取分 680+）
    { name: "苏州中学", district: "姑苏", tier: 1, lat: 31.3018, lng: 120.6295, type: "高中", note: "苏州第一，江苏顶级，本一率98%+", score: "690+" },
    { name: "苏州中学园区校", district: "园区", tier: 1, lat: 31.3100, lng: 120.7200, type: "高中", note: "苏中分校，681分，园区最强", score: "681" },
    { name: "星海实验中学（苏茜路）", district: "园区", tier: 1, lat: 31.3020, lng: 120.7150, type: "高中", note: "园区顶级，四星率90%+", score: "680+" },
    { name: "昆山中学", district: "昆山", tier: 1, lat: 31.3850, lng: 120.9580, type: "高中", note: "昆山第一", score: "678" },
    { name: "新区实验中学（本部）", district: "新区", tier: 1, lat: 31.3100, lng: 120.5900, type: "高中", note: "高新区最强", score: "675+" },

    // 第二梯队（录取分 650-680）
    { name: "苏州实验中学", district: "新区", tier: 2, lat: 31.3000, lng: 120.5750, type: "高中", note: "四星级，高新区优质", score: "665" },
    { name: "苏大附中", district: "园区", tier: 2, lat: 31.2950, lng: 120.7350, type: "高中", note: "近年上升明显，黑马", score: "660+" },
    { name: "星海实验中学（沈浒路）", district: "园区", tier: 2, lat: 31.3150, lng: 120.7300, type: "高中", note: "星海第二校区", score: "660" },
    { name: "西附方洲路校区", district: "园区", tier: 2, lat: 31.3050, lng: 120.7400, type: "高中", note: "园区四星", score: "655" },
    { name: "木渎高级中学", district: "吴中", tier: 2, lat: 31.2600, lng: 120.5800, type: "高中", note: "培东班很强，吴中最好", score: "655" },

    // 第三梯队（610-650）
    { name: "苏州市三中", district: "姑苏", tier: 3, lat: 31.3050, lng: 120.6200, type: "高中", note: "姑苏老牌", score: "630" },
    { name: "苏州十中", district: "姑苏", tier: 3, lat: 31.2950, lng: 120.6250, type: "高中", note: "百年名校", score: "625" },
    { name: "吴县中学", district: "吴中", tier: 3, lat: 31.2700, lng: 120.6300, type: "高中", note: "排名上升明显", score: "620" },
    { name: "相城中学", district: "相城", tier: 3, lat: 31.3700, lng: 120.6400, type: "高中", note: "相城区最好", score: "615" },
    { name: "南航苏州附中", district: "园区", tier: 3, lat: 31.2800, lng: 120.7500, type: "高中", note: "唯亭校区", score: "615" },
    { name: "吴江中学", district: "吴江", tier: 3, lat: 31.1700, lng: 120.6350, type: "高中", note: "吴江区最好", score: "610" },
  ],

  // ========== 初中 ==========
  middleSchools: [
    // 五星级（顶级）
    { name: "振华中学", district: "姑苏", tier: 1, lat: 31.3000, lng: 120.6280, type: "初中", note: "苏州初中No.1，对口善耕/平江", pairWith: "苏州中学" },
    { name: "立达中学", district: "姑苏", tier: 1, lat: 31.3030, lng: 120.6150, type: "初中", note: "姑苏顶级", pairWith: "苏州中学" },
    { name: "星海实验初中", district: "园区", tier: 1, lat: 31.3040, lng: 120.7150, type: "初中", note: "园区No.1，四星率90%", pairWith: "星海高中" },
    { name: "星湾学校", district: "园区", tier: 1, lat: 31.3120, lng: 120.7380, type: "初中", note: "九年制，湖东强校", pairWith: "星海/苏中园区" },
    { name: "苏州中学伟长实验部", district: "姑苏", tier: 1, lat: 31.3015, lng: 120.6290, type: "初中", note: "苏中初中部，需考试", pairWith: "苏州中学" },
    { name: "西附初中", district: "园区", tier: 1, lat: 31.3060, lng: 120.7400, type: "初中", note: "园区热门", pairWith: "西附高中" },
    { name: "新区实验初中（金山路）", district: "新区", tier: 1, lat: 31.3080, lng: 120.5850, type: "初中", note: "高新区No.1", pairWith: "新区实验高中" },

    // 四星级（优质）
    { name: "草桥中学", district: "姑苏", tier: 2, lat: 31.2980, lng: 120.6200, type: "初中", note: "姑苏优质", pairWith: "" },
    { name: "景城学校", district: "园区", tier: 2, lat: 31.3100, lng: 120.7350, type: "初中", note: "九年制，湖东", pairWith: "" },
    { name: "金鸡湖学校", district: "园区", tier: 2, lat: 31.3050, lng: 120.7300, type: "初中", note: "园区优质", pairWith: "" },
    { name: "新区实验初中（马运路）", district: "新区", tier: 2, lat: 31.3150, lng: 120.5800, type: "初中", note: "新区二校区", pairWith: "" },
    { name: "苏州科技城外国语学校", district: "新区", tier: 2, lat: 31.2900, lng: 120.5400, type: "初中", note: "民办，口碑好", pairWith: "" },
    { name: "苏州外国语学校", district: "新区", tier: 2, lat: 31.3050, lng: 120.5600, type: "初中", note: "民办名校", pairWith: "" },
    { name: "沧浪中学", district: "姑苏", tier: 2, lat: 31.2930, lng: 120.6180, type: "初中", note: "姑苏老牌", pairWith: "" },
    { name: "景范中学", district: "姑苏", tier: 2, lat: 31.3100, lng: 120.6250, type: "初中", note: "姑苏优质", pairWith: "" },

    // 三星级（中坚）
    { name: "相城实验中学", district: "相城", tier: 3, lat: 31.3700, lng: 120.6350, type: "初中", note: "相城最好", pairWith: "" },
    { name: "木渎实验中学", district: "吴中", tier: 3, lat: 31.2620, lng: 120.5850, type: "初中", note: "培东班强", pairWith: "木渎高中" },
    { name: "苏苑中学", district: "吴中", tier: 3, lat: 31.2680, lng: 120.6350, type: "初中", note: "文科最好班全员一本", pairWith: "" },
    { name: "吴江小伟长", district: "吴江", tier: 3, lat: 31.1750, lng: 120.6400, type: "初中", note: "吴江优质", pairWith: "" },
  ],

  // ========== 小学 ==========
  primarySchools: [
    // 园区
    { name: "星海小学", district: "园区", tier: 1, lat: 31.3040, lng: 120.7140, type: "小学", note: "园区No.1，生源最优，家长卷", pairMiddle: "星海实验初中" },
    { name: "星湾小学", district: "园区", tier: 1, lat: 31.3120, lng: 120.7380, type: "小学", note: "九年制，295+学生多", pairMiddle: "星湾学校" },
    { name: "星港学校（小学）", district: "园区", tier: 1, lat: 31.3050, lng: 120.7450, type: "小学", note: "九年制，金鸡湖畔", pairMiddle: "星港学校" },
    { name: "园区二实小", district: "园区", tier: 2, lat: 31.3000, lng: 120.7250, type: "小学", note: "园区优质", pairMiddle: "" },
    { name: "景城学校（小学）", district: "园区", tier: 2, lat: 31.3100, lng: 120.7350, type: "小学", note: "湖东九年制", pairMiddle: "景城学校" },
    { name: "金鸡湖学校（小学）", district: "园区", tier: 2, lat: 31.3050, lng: 120.7300, type: "小学", note: "园区优质", pairMiddle: "金鸡湖学校" },
    { name: "唯亭实验小学", district: "园区", tier: 3, lat: 31.2850, lng: 120.7600, type: "小学", note: "唯亭板块", pairMiddle: "" },

    // 姑苏
    { name: "苏州市实验小学", district: "姑苏", tier: 1, lat: 31.3010, lng: 120.6250, type: "小学", note: "苏州小学No.1，百年名校", pairMiddle: "立达/振华" },
    { name: "善耕实验小学", district: "姑苏", tier: 1, lat: 31.3080, lng: 120.6300, type: "小学", note: "对口振华中学，百年老校", pairMiddle: "振华中学" },
    { name: "平江实验学校（小学）", district: "姑苏", tier: 1, lat: 31.3100, lng: 120.6350, type: "小学", note: "姑苏名校", pairMiddle: "平江中学/振华" },
    { name: "新苏师范附小", district: "姑苏", tier: 1, lat: 31.2970, lng: 120.6200, type: "小学", note: "姑苏顶级", pairMiddle: "" },
    { name: "沧浪实验小学", district: "姑苏", tier: 1, lat: 31.2940, lng: 120.6180, type: "小学", note: "姑苏一梯队", pairMiddle: "" },
    { name: "敬文实验小学", district: "姑苏", tier: 2, lat: 31.3050, lng: 120.6220, type: "小学", note: "竹辉路分校，热门", pairMiddle: "" },
    { name: "金阊实验小学", district: "姑苏", tier: 2, lat: 31.3100, lng: 120.6100, type: "小学", note: "金阊板块", pairMiddle: "" },
    { name: "平直实验小学", district: "姑苏", tier: 2, lat: 31.2960, lng: 120.6300, type: "小学", note: "姑苏老牌", pairMiddle: "" },

    // 高新区
    { name: "新区实验小学", district: "新区", tier: 1, lat: 31.3100, lng: 120.5850, type: "小学", note: "高新区No.1", pairMiddle: "新区实验初中" },
    { name: "狮山实验小学", district: "新区", tier: 1, lat: 31.3200, lng: 120.5700, type: "小学", note: "狮山板块，配套好", pairMiddle: "" },
    { name: "苏州科技城实验小学", district: "新区", tier: 2, lat: 31.2900, lng: 120.5450, type: "小学", note: "科技城新校", pairMiddle: "" },
    { name: "苏州外国语小学", district: "新区", tier: 1, lat: 31.3050, lng: 120.5600, type: "小学", note: "民办名校", pairMiddle: "苏外初中" },

    // 吴中
    { name: "苏苑实验小学", district: "吴中", tier: 1, lat: 31.2700, lng: 120.6350, type: "小学", note: "吴中No.1", pairMiddle: "苏苑中学" },
    { name: "宝带实验小学", district: "吴中", tier: 1, lat: 31.2720, lng: 120.6400, type: "小学", note: "吴中优质", pairMiddle: "" },
    { name: "木渎实验小学", district: "吴中", tier: 2, lat: 31.2610, lng: 120.5830, type: "小学", note: "木渎板块", pairMiddle: "木渎实验中学" },
    { name: "吴中实验小学", district: "吴中", tier: 2, lat: 31.2650, lng: 120.6300, type: "小学", note: "城区老牌", pairMiddle: "" },

    // 相城
    { name: "相城实验小学", district: "相城", tier: 2, lat: 31.3700, lng: 120.6300, type: "小学", note: "相城最好", pairMiddle: "相城实验中学" },
    { name: "高铁新城实验小学", district: "相城", tier: 3, lat: 31.3900, lng: 120.6500, type: "小学", note: "新校，在建设中", pairMiddle: "" },

    // 吴江
    { name: "鲈乡实验小学", district: "吴江", tier: 2, lat: 31.1750, lng: 120.6380, type: "小学", note: "吴江最好", pairMiddle: "" },
    { name: "太湖新城实验小学", district: "吴江", tier: 3, lat: 31.1700, lng: 120.6400, type: "小学", note: "新校区", pairMiddle: "" },
  ],

  // ========== 学区链（小学→初中→高中 最优升学路径） ==========
  chains: [
    { name: "园区星海链", primary: "星海小学", middle: "星海实验初中", high: "星海高中/苏中园区", district: "园区", tier: 1, note: "苏州最热学区链，房价最贵", priceRange: "3.5-5万" },
    { name: "园区星湾链", primary: "星湾小学", middle: "星湾学校", high: "星海/苏中园区", district: "园区", tier: 1, note: "九年一贯制，省心", priceRange: "3-4万" },
    { name: "园区星港链", primary: "星港学校", middle: "星港学校", high: "星海/西附", district: "园区", tier: 1, note: "金鸡湖畔，九年制", priceRange: "3.5-4.5万" },
    { name: "姑苏善耕-振华链", primary: "善耕实验小学", middle: "振华中学", high: "苏州中学", district: "姑苏", tier: 1, note: "传统最强链，直通苏中", priceRange: "3-4.8万" },
    { name: "姑苏实小-立达链", primary: "苏州市实验小学", middle: "立达中学", high: "苏州中学", district: "姑苏", tier: 1, note: "姑苏经典链", priceRange: "3-4万" },
    { name: "新区实验链", primary: "新区实验小学", middle: "新区实验初中", high: "新区实验高中", district: "新区", tier: 1, note: "高新区最稳链", priceRange: "2-3.5万" },
    { name: "新区狮山链", primary: "狮山实验小学", middle: "新区实验初中", high: "新区实验高中/苏实验", district: "新区", tier: 2, note: "狮山配套好", priceRange: "2.5-3.5万" },
    { name: "吴中苏苑链", primary: "苏苑实验小学", middle: "苏苑中学", high: "木渎高中", district: "吴中", tier: 2, note: "吴中最优链", priceRange: "1.8-2.8万" },
    { name: "吴中木渎链", primary: "木渎实验小学", middle: "木渎实验中学", high: "木渎高中（培东班）", district: "吴中", tier: 2, note: "培东班很强", priceRange: "1.5-2.5万" },
    { name: "相城链", primary: "相城实验小学", middle: "相城实验中学", high: "相城中学", district: "相城", tier: 3, note: "相城整体较弱，在提升", priceRange: "1.5-2.2万" },
    { name: "吴江链", primary: "鲈乡实验小学", middle: "吴江小伟长", high: "吴江中学", district: "吴江", tier: 3, note: "吴江最好组合", priceRange: "1.2-1.8万" },
  ]
};

if (typeof module !== 'undefined') module.exports = SCHOOL_DB;
