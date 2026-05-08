// 园区学区房详细数据（来源：灏灏提供的资料，2026年4月）
// 坐标来源：高德地图 API（GCJ-02 坐标系）
const SCHOOL_DISTRICT_DATA = [
  {
    name: "星海学区",
    tier: 1,
    primary: "星海小学",
    middle: "星海实验中学",
    tags: ["最强学区", "家长卷", "牛娃多"],
    note: "园区No.1，择校要求最严，1-6年级全优全三好，课外竞赛获奖优先",
    minPrice: 290,
    priceRange: "290-600万",
    avgPrice: 35000,
    communities: [
      { name: "师惠花苑", price: 290, area: "73-105㎡", built: "2002", note: "门槛房", lat: 31.312335, lng: 120.669122 },
      { name: "加城花园", price: 320, area: "85-110㎡", built: "2004", note: "", lat: 31.308314, lng: 120.673784 },
      { name: "星海国际广场", price: 420, area: "90-130㎡", built: "2008", note: "品质好", lat: 31.318793, lng: 120.670896 },
      { name: "湖左岸", price: 380, area: "100-130㎡", built: "2010", note: "", lat: 31.311560, lng: 120.677707 },
    ],
    schoolLat: 31.309236, schoolLng: 120.664579,
    color: "#e74c3c"
  },
  {
    name: "星湾学区",
    tier: 1,
    primary: "星湾小学",
    middle: "星湾学校",
    tags: ["九年制", "性价比", "一梯队双学区"],
    note: "小学+初中都是一梯队，九年一贯制省心，学习氛围好，老师负责有耐心",
    minPrice: 188,
    priceRange: "188-500万",
    avgPrice: 30000,
    communities: [
      { name: "沁苑", price: 250, area: "90-110㎡", built: "2006", note: "", lat: 31.324623, lng: 120.682141 },
      { name: "玲珑湾花园", price: 300, area: "100-130㎡", built: "2008", note: "大社区", lat: 31.326506, lng: 120.696954 },
      { name: "中海湖滨一号", price: 380, area: "110-140㎡", built: "2012", note: "品质", lat: 31.327682, lng: 120.704354 },
      { name: "和风雅致", price: 280, area: "90-120㎡", built: "2008", note: "", lat: 31.327491, lng: 120.708270 },
    ],
    schoolLat: 31.327442, schoolLng: 120.701252,
    color: "#f39c12"
  },
  {
    name: "景城学区",
    tier: 1,
    primary: "景城小学",
    middle: "景城学校",
    tags: ["九年制", "性价比王", "不太卷"],
    note: "双一梯队，社团活动丰富，相对没那么卷，老师负责，门槛最低的一梯队",
    minPrice: 128,
    priceRange: "128-400万",
    avgPrice: 25000,
    communities: [
      { name: "乐嘉大厦", price: 128, area: "50-60㎡", built: "2010", note: "门槛房", lat: 31.324568, lng: 120.719302 },
      { name: "海尚壹品", price: 200, area: "70-100㎡", built: "2011", note: "", lat: 31.329166, lng: 120.716483 },
      { name: "中海星湖国际", price: 280, area: "90-120㎡", built: "2013", note: "", lat: 31.326643, lng: 120.716121 },
      { name: "中央景城", price: 300, area: "100-130㎡", built: "2009", note: "大社区", lat: 31.329841, lng: 120.723211 },
      { name: "紫荆苑", price: 260, area: "90-110㎡", built: "2007", note: "", lat: 31.331832, lng: 120.728163 },
      { name: "翡翠国际", price: 350, area: "110-140㎡", built: "2012", note: "品质", lat: 31.327555, lng: 120.731382 },
    ],
    schoolLat: 31.327110, schoolLng: 120.722370,
    color: "#27ae60"
  },
  {
    name: "西附学区（二实小）",
    tier: 1,
    primary: "园区二实小",
    middle: "西附初中",
    tags: ["初中强", "偏贵"],
    note: "初中一梯队（西附），小学一梯队（二实小），门槛较高",
    minPrice: 308,
    priceRange: "308-550万",
    avgPrice: 32000,
    communities: [
      { name: "东湖春之韵", price: 308, area: "85-110㎡", built: "2009", note: "门槛房", lat: 31.316816, lng: 120.730042 },
      { name: "东湖大郡", price: 380, area: "100-140㎡", built: "2010", note: "", lat: 31.312180, lng: 120.728727 },
      { name: "伊顿小镇", price: 350, area: "100-130㎡", built: "2009", note: "", lat: 31.306692, lng: 120.730263 },
      { name: "湖畔天城", price: 400, area: "110-140㎡", built: "2011", note: "", lat: 31.317625, lng: 120.738231 },
    ],
    schoolLat: 31.314342, schoolLng: 120.734750,
    color: "#3498db"
  },
  {
    name: "西附学区（星洲）",
    tier: 2,
    primary: "星洲小学",
    middle: "西附初中",
    tags: ["初中强", "小学二梯队", "省钱方案"],
    note: "初中一梯队但小学二梯队，门槛极低，适合预算有限追求初中质量的家庭",
    primaryTier: 2,
    middleTier: 1,
    minPrice: 156,
    priceRange: "156-350万",
    avgPrice: 22000,
    communities: [
      { name: "第五元素", price: 250, area: "80-110㎡", built: "2007", note: "", lat: 31.310666, lng: 120.739227 },
      { name: "湖畔天城", price: 300, area: "100-130㎡", built: "2011", note: "", lat: 31.317625, lng: 120.738231 },
    ],
    schoolLat: 31.321025, schoolLng: 120.741977,
    color: "#8e44ad"
  },
  {
    name: "金鸡湖学区",
    tier: 1,
    primary: "金鸡湖学校",
    middle: "金鸡湖学校",
    tags: ["九年制", "重视语文", "偏贵"],
    note: "九年一贯制，两个校区，重视语文教育",
    minPrice: 300,
    priceRange: "300-600万",
    avgPrice: 33000,
    communities: [
      { name: "湖左岸", price: 400, area: "100-130㎡", built: "2010", note: "", lat: 31.311560, lng: 120.677707 },
    ],
    schoolLat: 31.304070, schoolLng: 120.676467,
    color: "#e67e22"
  },
  {
    name: "星港学区",
    tier: 2,
    primary: "星港学校",
    middle: "星港学校",
    tags: ["门槛低", "二梯队初中"],
    note: "九年制，门槛低，小学不错但初中是二梯队",
    minPrice: 85,
    priceRange: "85-300万",
    avgPrice: 20000,
    communities: [
      { name: "东城世纪广场", price: 118, area: "60-80㎡", built: "2005", note: "", lat: 31.289711, lng: 120.656401 },
    ],
    schoolLat: 31.314463, schoolLng: 120.654328,
    color: "#95a5a6"
  },
  {
    name: "东沙湖学区",
    tier: 2,
    primary: "东沙湖小学",
    middle: "东沙湖中学",
    tags: ["门槛最低", "新校"],
    note: "小学初中都是二梯队，但门槛极低，适合纯刚需",
    minPrice: 90,
    priceRange: "90-250万",
    avgPrice: 18000,
    communities: [
      { name: "九龙仓风华里", price: 90, area: "60-80㎡", built: "2015", note: "门槛房", lat: 31.330133, lng: 120.750165 },
    ],
    schoolLat: 31.331396, schoolLng: 120.758053,
    color: "#bdc3c7"
  },
  {
    name: "人大附中学区",
    tier: 1,
    primary: "人大附中小学部",
    middle: "人大附中苏州校区",
    tags: ["一梯队", "绿城品质", "新房", "高端"],
    note: "中国人民大学附属中学苏州校区，全套学区（小学+初中），绿城沁百合是对口新盘，均价约5万/㎡，总价700-1250万，品质高端",
    minPrice: 700,
    priceRange: "700-1250万",
    avgPrice: 50000,
    communities: [
      { name: "绿城沁百合(153㎡)", price: 730, area: "153.93㎡", built: "2027", note: "4室", lat: 31.2940, lng: 120.7548 },
      { name: "绿城沁百合(169㎡)", price: 805, area: "169.39㎡", built: "2027", note: "4室", lat: 31.2942, lng: 120.7552 },
      { name: "绿城沁百合(178㎡)", price: 850, area: "178.37㎡", built: "2027", note: "4室", lat: 31.2938, lng: 120.7556 },
      { name: "绿城沁百合(181㎡)", price: 890, area: "181.57㎡", built: "2027", note: "4室", lat: 31.2944, lng: 120.7560 },
      { name: "绿城沁百合(183㎡)", price: 850, area: "183.19㎡", built: "2027", note: "4室", lat: 31.2936, lng: 120.7545 },
      { name: "绿城沁百合(232㎡)", price: 1170, area: "232.75㎡", built: "2027", note: "大平层", lat: 31.2946, lng: 120.7565 },
    ],
    schoolLat: 31.293781, schoolLng: 120.755361,
    color: "#1abc9c"
  }
];

if (typeof module !== 'undefined') module.exports = SCHOOL_DISTRICT_DATA;
