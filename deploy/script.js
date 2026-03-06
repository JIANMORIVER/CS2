// 多语言配置
const i18n = {
    zh: {
        title: '情绪色彩调研',
        // Group Selection
        groupSelect: '请选择您所在的组',
        groupCN: '中国 (China)',
        groupUK: '英国 (UK)',
        groupUS: '美国 (US)',
        groupBW: '博茨瓦纳 (Botswana)',

        // Consent
        consentTitle: '知情同意书',
        consentContent: '本实验旨在研究文化背景对情绪色彩联想的影响。我们将严格保密您的个人信息和实验数据，结果仅用于学术研究。整个过程大约需要 5-10 分钟。实验过程中请根据您的真实感受进行选择。',
        consentCheck: '我已知晓以上信息并同意参与',

        // Color Blindness
        cbTitle: '视觉测试',
        cbDesc: '请辨认下图中的数字，并在输入框中填写。',
        cbError: '非常抱歉，根据测试结果，我们暂时无法邀请您继续参与本实验。感谢您的关注！',
        cbPlaceholder: '输入数字',

        // User Info (New)
        userInfo: '基本信息',
        infoDesc: '请填写以下信息。',
        detectedInfo: '检测到的设备信息',
        monitorModel: '显示器型号 (例如: Dell U2419H, MacBook Pro 14, iPhone 15)',
        monitorPlaceholder: '如果知道，请填写您的显示设备型号',
        birthYear: '出生年份',
        birthMonth: '出生月份',
        nationality: '国籍',
        residence: '现居住国家',
        residenceDuration: '在现居地居住时长 (年)',
        nativeLang: '母语',
        secondLang: '第二语言',
        isDesigner: '是否从事艺术/设计相关行业？',
        yes: '是',
        no: '否',
        gender: '性别',
        male: '男',
        female: '女',
        other: '其他',
        select: '请选择',

        // Common
        start: '下一步',
        start: '下一步',
        next: '下一步',
        back: '上一步',
        submit: '提交结果',
        submitting: '正在提交...',
        thankYou: '🎉 感谢您的参与！',
        thankYouDesc: '您的选择已成功记录。',
        home: '返回首页',

        // Errors
        errorRequired: '请填写此项',
        errorAge: '请输入有效的年份',
        errorConsent: '请勾选同意选项',
        errorSubmit: '提交失败，请重试',
        errorNetwork: '网络错误',

        // Color Picker
        hue: '色相 (Hue)',
        sat: '饱和度 (Saturation)',
        light: '亮度 (Lightness)',
        hueHint: '请滑动色相条',
        emotions: {
            '感兴趣': '感兴趣', '欢愉': '欢愉', '自豪': '自豪', '欢乐': '欢乐', '愉快': '愉快',
            '满足': '满足', '赞赏': '赞赏', '爱': '爱', '如释重负': '如释重负', '同情': '同情',
            '悲伤': '悲伤', '内疚': '内疚', '后悔': '后悔', '羞愧': '羞愧', '失望': '失望',
            '恐惧': '恐惧', '厌恶': '厌恶', '轻视': '轻视', '憎恨': '憎恨', '忿怒': '忿怒'
        },
        emotionInstruction: (emotion) => `请先滑动下方色相条设定主色，然后在下方调色板中点选最能代表“${emotion}”的颜色。`,

        // GEW Experiment
        phase2Title: '第二阶段：词汇联想',
        phase2Desc: '在接下来的实验中，您将看到一系列表示颜色的词汇。请使用“日内瓦情绪轮”选出您认为该颜色最能代表的情绪。',
        phase2Note: '圆圈越小代表情绪越弱，越大代表情绪越强。可多选。',
        gewStart: '开始第二阶段',
        gewNext: '下一个',
        gewSubmit: '提交所有结果',
        gewInstruction: (colorBlock) => `当您看到 ${colorBlock} 时，您会联想到什么情绪？`,
        gewEmotions: {
            'interest': '感兴趣', 'amusement': '欢愉', 'pride': '自豪', 'joy': '欢乐', 'pleasure': '愉快',
            'contentment': '满足', 'love': '爱', 'admiration': '赞赏', 'relief': '如释重负', 'compassion': '同情',
            'sadness': '悲伤', 'guilt': '内疚', 'regret': '后悔', 'shame': '羞愧', 'disappointment': '失望',
            'fear': '恐惧', 'disgust': '厌恶', 'contempt': '轻视', 'hate': '憎恨', 'anger': '忿怒'
        },
        gewWords: {
            'Red': '红色', 'Orange': '橙色', 'Yellow': '黄色', 'Green': '绿色', 'Blue': '蓝色',
            'Lilac': '浅紫', 'Purple': '紫色', 'Pink': '粉色', 'Brown': '棕色', 'White': '白色',
            'Grey': '灰色', 'Black': '黑色', 'Light Blue': '浅蓝'
        },
        // GEW Design
        noEmotion: '没有情绪',
        differentEmotion: '其他情绪',
        enterEmotion: '请输入情绪名称'
    },
    en: {
        title: 'Color Emotion Survey',
        // Group Selection
        groupSelect: 'Select Your Group',
        groupCN: 'China',
        groupUK: 'UK',
        groupUS: 'US',
        groupBW: 'Botswana',

        // Consent
        consentTitle: 'Informed Consent',
        consentContent: 'This study investigates the influence of cultural background on color-emotion associations. Your personal information and data will be kept strictly confidential and used for academic research only. The session takes about 5-10 minutes. Please answer based on your true feelings.',
        consentCheck: 'I have read and agree to participate',

        // Color Blindness
        cbTitle: 'Vision Test',
        cbDesc: 'Please identify the number in the image below.',
        cbError: 'Based on the test result, we are unable to proceed with the survey. Thank you for your interest.',
        cbPlaceholder: 'Enter number',

        // User Info (New)
        userInfo: 'Basic Information',
        infoDesc: 'Please fill in the following details.',
        detectedInfo: 'Detected Device Info',
        monitorModel: 'Monitor Model (e.g., Dell U2419H, MacBook Pro 14)',
        monitorPlaceholder: 'Please enter your display model if known',
        birthYear: 'Year of Birth',
        birthMonth: 'Month of Birth',
        nationality: 'Nationality',
        residence: 'Country of Residence',
        residenceDuration: 'Years in Residence',
        nativeLang: 'Native Language',
        secondLang: 'Second Language',
        isDesigner: 'Do you work in Art/Design?',
        yes: 'Yes',
        no: 'No',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        other: 'Other',
        select: 'Select',

        // Common
        start: 'Next',
        start: 'Next',
        next: 'Next',
        back: 'Back',
        submit: 'Submit',
        submitting: 'Submitting...',
        thankYou: '🎉 Thank you!',
        thankYouDesc: 'Your response has been recorded.',
        home: 'Back to Home',

        // Errors
        errorRequired: 'Required',
        errorAge: 'Invalid year',
        errorConsent: 'Please verify consent',
        errorSubmit: 'Submission failed',
        errorNetwork: 'Network error',

        // Color Picker
        hue: 'Hue',
        sat: 'Saturation',
        light: 'Lightness',
        hueHint: 'Please slide the hue bar first',
        emotions: {
            '感兴趣': 'Interest', '欢愉': 'Amusement', '自豪': 'Pride', '欢乐': 'Joy', '愉快': 'Pleasure',
            '满足': 'Contentment', '赞赏': 'Admiration', '爱': 'Love', '如释重负': 'Relief', '同情': 'Compassion',
            '悲伤': 'Sadness', '内疚': 'Guilt', '后悔': 'Regret', '羞愧': 'Shame', '失望': 'Disappointment',
            '恐惧': 'Fear', '厌恶': 'Disgust', '轻视': 'Contempt', '憎恨': 'Hate', '忿怒': 'Anger'
        },
        emotionInstruction: (emotion) => `Please slide the hue bar to set the main color, then pick the exact color in the palette that best represents "${emotion}".`,

        // GEW Experiment
        phase2Title: 'Phase 2: Word Association',
        phase2Desc: 'In this phase, you will see a series of color words. Please use the Geneva Emotion Wheel to indicate which emotion(s) the color represents to you.',
        phase2Note: 'Smaller circles = weaker emotion, Larger circles = stronger emotion. Multiple selections allowed.',
        gewStart: 'Start Phase 2',
        gewNext: 'Next',
        gewSubmit: 'Submit All Results',
        gewInstruction: (colorBlock) => `What emotion(s) do you associate with ${colorBlock}?`,
        gewEmotions: {
            'interest': 'Interest', 'amusement': 'Amusement', 'pride': 'Pride', 'joy': 'Joy', 'pleasure': 'Pleasure',
            'contentment': 'Contentment', 'love': 'Love', 'admiration': 'Admiration', 'relief': 'Relief', 'compassion': 'Compassion',
            'sadness': 'Sadness', 'guilt': 'Guilt', 'regret': 'Regret', 'shame': 'Shame', 'disappointment': 'Disappointment',
            'fear': 'Fear', 'disgust': 'Disgust', 'contempt': 'Contempt', 'hate': 'Hate', 'anger': 'Anger'
        },
        gewWords: {
            'Red': 'Red', 'Orange': 'Orange', 'Yellow': 'Yellow', 'Green': 'Green', 'Blue': 'Blue',
            'Lilac': 'Lilac', 'Purple': 'Purple', 'Pink': 'Pink', 'Brown': 'Brown', 'White': 'White',
            'Grey': 'Grey', 'Black': 'Black', 'Light Blue': 'Light Blue'
        },
        // GEW Design
        noEmotion: 'No emotion',
        differentEmotion: 'Different emotion',
        enterEmotion: 'Please specify emotion'
    }
};

const EMOTION_KEYS = [
    '感兴趣', '欢愉', '自豪', '欢乐', '愉快',
    '满足', '赞赏', '爱', '如释重负', '同情',
    '悲伤', '内疚', '后悔', '羞愧', '失望',
    '恐惧', '厌恶', '轻视', '憎恨', '忿怒'
];
// GEW Constants: Standard 20 Order
// Top-Right: Int...Pleasure
// Bottom-Right: Contentment...Compassion
// Bottom-Left: Sadness...Disappointment
// Top-Left: Fear...Anger
const GEW_EMOTION_KEYS = [
    'interest', 'amusement', 'pride', 'joy', 'pleasure',
    'contentment', 'love', 'admiration', 'relief', 'compassion',
    'sadness', 'guilt', 'regret', 'shame', 'disappointment',
    'fear', 'disgust', 'contempt', 'hate', 'anger'
];
const WORD_KEYS = [
    'Red', 'Orange', 'Yellow', 'Green', 'Blue',
    'Lilac', 'Purple', 'Pink', 'Brown', 'White',
    'Grey', 'Black', 'Light Blue'
];

const WORD_COLORS = {
    'Red': 'rgb(188, 33, 52)',
    'Orange': 'rgb(219, 126, 21)',
    'Yellow': 'rgb(237, 201, 0)',
    'Green': 'rgb(224, 61, 77)',
    'Blue': 'rgb(35, 159, 215)',
    'Lilac': 'rgb(190, 167, 207)',
    'Purple': 'rgb(126, 78, 148)',
    'Pink': 'rgb(242, 147, 182)',
    'Brown': 'rgb(128, 90, 33)',
    'White': 'rgb(244, 244, 244)',
    'Grey': 'rgb(149, 149, 149)',
    'Black': 'rgb(39, 39, 39)',
    'Light Blue': 'rgb(224, 230, 240)'
};

let currentStep = -3; // -3: Group, -2: Consent, -1: ColorBlind, 0: Info, 1+: Survey
let userInfo = {};
let colorData = {};
let currentLang = 'en';
let startTime = 0;
let hasHueInteracted = false;
let currentGroup = '';
let displayInfo = {};
let isColorBlind = false;

// Collect display info on load
const getDisplayInfo = () => {
    // Detect Color Gamut
    let gamut = 'srgb';
    if (window.matchMedia('(color-gamut: rec2020)').matches) gamut = 'rec2020';
    else if (window.matchMedia('(color-gamut: p3)').matches) gamut = 'p3';

    // Detect Touch
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return {
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        pixelRatio: window.devicePixelRatio || 1,
        colorGamut: gamut,
        touchSupport: touchSupport,
        userAgent: navigator.userAgent
    };
};
displayInfo = getDisplayInfo();

// Constants
const COUNTRIES = [
    { value: 'CN', label: 'China 中国' },
    { value: 'US', label: 'United States 美国' },
    { value: 'GB', label: 'United Kingdom 英国' },
    { value: 'BW', label: 'Botswana 博茨瓦纳' },
    { value: 'AF', label: 'Afghanistan 阿富汗' },
    { value: 'AL', label: 'Albania 阿尔巴尼亚' },
    { value: 'DZ', label: 'Algeria 阿尔及利亚' },
    { value: 'AD', label: 'Andorra 安道尔' },
    { value: 'AO', label: 'Angola 安哥拉' },
    { value: 'AR', label: 'Argentina 阿根廷' },
    { value: 'AM', label: 'Armenia 亚美尼亚' },
    { value: 'AU', label: 'Australia 澳大利亚' },
    { value: 'AT', label: 'Austria 奥地利' },
    { value: 'AZ', label: 'Azerbaijan 阿塞拜疆' },
    { value: 'BS', label: 'Bahamas 巴哈马' },
    { value: 'BH', label: 'Bahrain 巴林' },
    { value: 'BD', label: 'Bangladesh 孟加拉国' },
    { value: 'BB', label: 'Barbados 巴巴多斯' },
    { value: 'BY', label: 'Belarus 白俄罗斯' },
    { value: 'BE', label: 'Belgium 比利时' },
    { value: 'BZ', label: 'Belize 伯利兹' },
    { value: 'BJ', label: 'Benin 贝宁' },
    { value: 'BT', label: 'Bhutan 不丹' },
    { value: 'BO', label: 'Bolivia 玻利维亚' },
    { value: 'BA', label: 'Bosnia and Herzegovina 波斯尼亚和黑塞哥维那' },
    { value: 'BR', label: 'Brazil 巴西' },
    { value: 'BN', label: 'Brunei 文莱' },
    { value: 'BG', label: 'Bulgaria 保加利亚' },
    { value: 'BF', label: 'Burkina Faso 布基纳法索' },
    { value: 'BI', label: 'Burundi 布隆迪' },
    { value: 'KH', label: 'Cambodia 柬埔寨' },
    { value: 'CM', label: 'Cameroon 喀麦隆' },
    { value: 'CA', label: 'Canada 加拿大' },
    { value: 'CV', label: 'Cape Verde 佛得角' },
    { value: 'CF', label: 'Central African Republic 中非共和国' },
    { value: 'TD', label: 'Chad 乍得' },
    { value: 'CL', label: 'Chile 智利' },
    { value: 'CO', label: 'Colombia 哥伦比亚' },
    { value: 'KM', label: 'Comoros 科摩罗' },
    { value: 'CG', label: 'Congo (Republic) 刚果(布)' },
    { value: 'CD', label: 'Congo (Democratic Republic) 刚果(金)' },
    { value: 'CR', label: 'Costa Rica 哥斯达黎加' },
    { value: 'HR', label: 'Croatia 克罗地亚' },
    { value: 'CU', label: 'Cuba 古巴' },
    { value: 'CY', label: 'Cyprus 塞浦路斯' },
    { value: 'CZ', label: 'Czech Republic 捷克' },
    { value: 'DK', label: 'Denmark 丹麦' },
    { value: 'DJ', label: 'Djibouti 吉布提' },
    { value: 'DM', label: 'Dominica 多米尼克' },
    { value: 'DO', label: 'Dominican Republic 多米尼加' },
    { value: 'EC', label: 'Ecuador 厄瓜多尔' },
    { value: 'EG', label: 'Egypt 埃及' },
    { value: 'SV', label: 'El Salvador 萨尔瓦多' },
    { value: 'GQ', label: 'Equatorial Guinea 赤道几内亚' },
    { value: 'ER', label: 'Eritrea 厄立特里亚' },
    { value: 'EE', label: 'Estonia 爱沙尼亚' },
    { value: 'ET', label: 'Ethiopia 埃塞俄比亚' },
    { value: 'FJ', label: 'Fiji 斐济' },
    { value: 'FI', label: 'Finland 芬兰' },
    { value: 'FR', label: 'France 法国' },
    { value: 'GA', label: 'Gabon 加蓬' },
    { value: 'GM', label: 'Gambia 冈比亚' },
    { value: 'GE', label: 'Georgia 格鲁吉亚' },
    { value: 'DE', label: 'Germany 德国' },
    { value: 'GH', label: 'Ghana 加纳' },
    { value: 'GR', label: 'Greece 希腊' },
    { value: 'GD', label: 'Grenada 格林纳达' },
    { value: 'GT', label: 'Guatemala 危地马拉' },
    { value: 'GN', label: 'Guinea 几内亚' },
    { value: 'GW', label: 'Guinea-Bissau 几内亚比绍' },
    { value: 'GY', label: 'Guyana 圭亚那' },
    { value: 'HT', label: 'Haiti 海地' },
    { value: 'HN', label: 'Honduras 洪都拉斯' },
    { value: 'HU', label: 'Hungary 匈牙利' },
    { value: 'IS', label: 'Iceland 冰岛' },
    { value: 'IN', label: 'India 印度' },
    { value: 'ID', label: 'Indonesia 印度尼西亚' },
    { value: 'IR', label: 'Iran 伊朗' },
    { value: 'IQ', label: 'Iraq 伊拉克' },
    { value: 'IE', label: 'Ireland 爱尔兰' },
    { value: 'IL', label: 'Israel 以色列' },
    { value: 'IT', label: 'Italy 意大利' },
    { value: 'JM', label: 'Jamaica 牙买加' },
    { value: 'JP', label: 'Japan 日本' },
    { value: 'JO', label: 'Jordan 约旦' },
    { value: 'KZ', label: 'Kazakhstan 哈萨克斯坦' },
    { value: 'KE', label: 'Kenya 肯尼亚' },
    { value: 'KI', label: 'Kiribati 基里巴斯' },
    { value: 'KP', label: 'North Korea 朝鲜' },
    { value: 'KR', label: 'South Korea 韩国' },
    { value: 'KW', label: 'Kuwait 科威特' },
    { value: 'KG', label: 'Kyrgyzstan 吉尔吉斯斯坦' },
    { value: 'LA', label: 'Laos 老挝' },
    { value: 'LV', label: 'Latvia 拉脱维亚' },
    { value: 'LB', label: 'Lebanon 黎巴嫩' },
    { value: 'LS', label: 'Lesotho 莱索托' },
    { value: 'LR', label: 'Liberia 利比里亚' },
    { value: 'LY', label: 'Libya 利比亚' },
    { value: 'LI', label: 'Liechtenstein 列支敦士登' },
    { value: 'LT', label: 'Lithuania 立陶宛' },
    { value: 'LU', label: 'Luxembourg 卢森堡' },
    { value: 'MK', label: 'North Macedonia 北马其顿' },
    { value: 'MG', label: 'Madagascar 马达加斯加' },
    { value: 'MW', label: 'Malawi 马拉维' },
    { value: 'MY', label: 'Malaysia 马来西亚' },
    { value: 'MV', label: 'Maldives 马尔代夫' },
    { value: 'ML', label: 'Mali 马里' },
    { value: 'MT', label: 'Malta 马耳他' },
    { value: 'MH', label: 'Marshall Islands 马绍尔群岛' },
    { value: 'MR', label: 'Mauritania 毛里塔尼亚' },
    { value: 'MU', label: 'Mauritius 毛里求斯' },
    { value: 'MX', label: 'Mexico 墨西哥' },
    { value: 'FM', label: 'Micronesia 密克罗尼西亚' },
    { value: 'MD', label: 'Moldova 摩尔多瓦' },
    { value: 'MC', label: 'Monaco 摩纳哥' },
    { value: 'MN', label: 'Mongolia 蒙古' },
    { value: 'ME', label: 'Montenegro 黑山' },
    { value: 'MA', label: 'Morocco 摩洛哥' },
    { value: 'MZ', label: 'Mozambique 莫桑比克' },
    { value: 'MM', label: 'Myanmar 缅甸' },
    { value: 'NA', label: 'Namibia 纳米比亚' },
    { value: 'NR', label: 'Nauru 瑙鲁' },
    { value: 'NP', label: 'Nepal 尼泊尔' },
    { value: 'NL', label: 'Netherlands 荷兰' },
    { value: 'NZ', label: 'New Zealand 新西兰' },
    { value: 'NI', label: 'Nicaragua 尼加拉瓜' },
    { value: 'NE', label: 'Niger 尼日尔' },
    { value: 'NG', label: 'Nigeria 尼日利亚' },
    { value: 'NO', label: 'Norway 挪威' },
    { value: 'OM', label: 'Oman 阿曼' },
    { value: 'PK', label: 'Pakistan 巴基斯坦' },
    { value: 'PW', label: 'Palau 帕劳' },
    { value: 'PA', label: 'Panama 巴拿马' },
    { value: 'PG', label: 'Papua New Guinea 巴布亚新几内亚' },
    { value: 'PY', label: 'Paraguay 巴拉圭' },
    { value: 'PE', label: 'Peru 秘鲁' },
    { value: 'PH', label: 'Philippines 菲律宾' },
    { value: 'PL', label: 'Poland 波兰' },
    { value: 'PT', label: 'Portugal 葡萄牙' },
    { value: 'QA', label: 'Qatar 卡塔尔' },
    { value: 'RO', label: 'Romania 罗马尼亚' },
    { value: 'RU', label: 'Russia 俄罗斯' },
    { value: 'RW', label: 'Rwanda 卢旺达' },
    { value: 'KN', label: 'Saint Kitts and Nevis 圣基茨和尼维斯' },
    { value: 'LC', label: 'Saint Lucia 圣卢西亚' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines 圣文森特和格林纳丁斯' },
    { value: 'WS', label: 'Samoa 萨摩亚' },
    { value: 'SM', label: 'San Marino 圣马力诺' },
    { value: 'ST', label: 'Sao Tome and Principe 圣多美和普林西比' },
    { value: 'SA', label: 'Saudi Arabia 沙特阿拉伯' },
    { value: 'SN', label: 'Senegal 塞内加尔' },
    { value: 'RS', label: 'Serbia 塞尔维亚' },
    { value: 'SC', label: 'Seychelles 塞舌尔' },
    { value: 'SL', label: 'Sierra Leone 塞拉利昂' },
    { value: 'SG', label: 'Singapore 新加坡' },
    { value: 'SK', label: 'Slovakia 斯洛伐克' },
    { value: 'SI', label: 'Slovenia 斯洛文尼亚' },
    { value: 'SB', label: 'Solomon Islands 所罗门群岛' },
    { value: 'SO', label: 'Somalia 索马里' },
    { value: 'ZA', label: 'South Africa 南非' },
    { value: 'SS', label: 'South Sudan 南苏丹' },
    { value: 'ES', label: 'Spain 西班牙' },
    { value: 'LK', label: 'Sri Lanka 斯里兰卡' },
    { value: 'SD', label: 'Sudan 苏丹' },
    { value: 'SR', label: 'Suriname 苏里南' },
    { value: 'SE', label: 'Sweden 瑞典' },
    { value: 'CH', label: 'Switzerland 瑞士' },
    { value: 'SY', label: 'Syria 叙利亚' },
    { value: 'TJ', label: 'Tajikistan 塔吉克斯坦' },
    { value: 'TZ', label: 'Tanzania 坦桑尼亚' },
    { value: 'TH', label: 'Thailand 泰国' },
    { value: 'TL', label: 'Timor-Leste 东帝汶' },
    { value: 'TG', label: 'Togo 多哥' },
    { value: 'TO', label: 'Tonga 汤加' },
    { value: 'TT', label: 'Trinidad and Tobago 特立尼达和多巴哥' },
    { value: 'TN', label: 'Tunisia 突尼斯' },
    { value: 'TR', label: 'Turkey 土耳其' },
    { value: 'TM', label: 'Turkmenistan 土库曼斯坦' },
    { value: 'TV', label: 'Tuvalu 图瓦卢' },
    { value: 'UG', label: 'Uganda 乌干达' },
    { value: 'UA', label: 'Ukraine 乌克兰' },
    { value: 'AE', label: 'United Arab Emirates 阿联酋' },
    { value: 'UY', label: 'Uruguay 乌拉圭' },
    { value: 'UZ', label: 'Uzbekistan 乌兹别克斯坦' },
    { value: 'VU', label: 'Vanuatu 瓦努阿图' },
    { value: 'VA', label: 'Vatican City 梵蒂冈' },
    { value: 'VE', label: 'Venezuela 委内瑞拉' },
    { value: 'VN', label: 'Vietnam 越南' },
    { value: 'YE', label: 'Yemen 也门' },
    { value: 'ZM', label: 'Zambia 赞比亚' },
    { value: 'ZW', label: 'Zimbabwe 津巴布韦' },
    { value: 'Other', label: 'Other 其他' }
];

const LANGUAGES = [
    { value: 'zh', label: 'Chinese 中文' },
    { value: 'en', label: 'English 英语' },
    { value: 'tn', label: 'Setswana 茨瓦纳语' },
    { value: 'es', label: 'Spanish 西班牙语' },
    { value: 'fr', label: 'French 法语' },
    { value: 'ar', label: 'Arabic 阿拉伯语' },
    { value: 'ru', label: 'Russian 俄语' },
    { value: 'de', label: 'German 德语' },
    { value: 'ja', label: 'Japanese 日语' },
    { value: 'ko', label: 'Korean 韩语' },
    { value: 'pt', label: 'Portuguese 葡萄牙语' },
    { value: 'hi', label: 'Hindi 印地语' },
    { value: 'it', label: 'Italian 意大利语' },
    { value: 'tr', label: 'Turkish 土耳其语' },
    { value: 'vi', label: 'Vietnamese 越南语' },
    { value: 'pl', label: 'Polish 波兰语' },
    { value: 'nl', label: 'Dutch 荷兰语' },
    { value: 'th', label: 'Thai 泰语' },
    { value: 'fa', label: 'Persian 波斯语' },
    { value: 'he', label: 'Hebrew 希伯来语' },
    { value: 'sv', label: 'Swedish 瑞典语' },
    { value: 'id', label: 'Indonesian 印尼语' },
    { value: 'ms', label: 'Malay 马来语' },
    { value: 'other', label: 'Other 其他' },
    { value: 'none', label: 'None 无' }
];

const progressText = document.getElementById('progressText');
const mainContent = document.getElementById('mainContent');
const langBtn = document.getElementById('langBtn');
const appTitle = document.getElementById('appTitle');

let currentHSL = { h: 180, s: 50, l: 50 };

// Phase 2 State
let colorPickerObjectId = null; // Stores ID from Phase 1 for update
let wordData = {};


document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('admin-body')) return;
    langBtn.addEventListener('click', toggleLanguage);
    updateStaticText(); // Sync title on load
    renderStep();
});

function toggleLanguage(e) {
    if (e) e.preventDefault();
    currentLang = currentLang === 'zh' ? 'en' : 'zh';

    // Update footer text: Show both, bold the active one
    if (currentLang === 'zh') {
        langBtn.innerHTML = '<b>中文</b> | English';
    } else {
        langBtn.innerHTML = '中文 | <b>English</b>';
    }

    updateStaticText();
    renderStep();
}

function updateStaticText() {
    const t = i18n[currentLang];
    if (appTitle) {
        appTitle.textContent = t.title;
        // Adjust size based on language
        if (currentLang === 'en') {
            appTitle.style.fontSize = 'clamp(0.9rem, 2.5vw, 1.1rem)'; // ~60% of original
        } else {
            appTitle.style.fontSize = 'clamp(1.2rem, 4vw, 1.8rem)';
        }
    }
    document.title = t.title;
}

function renderStep() {
    // Reset interaction
    if (currentStep > 0 && currentStep <= EMOTION_KEYS.length) {
        hasHueInteracted = false;
    }

    // Toggle Header Visibility
    const header = document.getElementById('mainHeader');
    if (header) {
        header.style.display = currentStep > 0 ? 'none' : 'flex';
    }

    updateProgress();
    const t = i18n[currentLang];

    const PHASE1_END = EMOTION_KEYS.length;
    const PHASE2_START = PHASE1_END + 1; // Intro
    const PHASE2_TRIALS_START = PHASE2_START + 1;
    const PHASE2_END = PHASE2_TRIALS_START + WORD_KEYS.length - 1;

    if (currentStep === -3) {
        renderGroupSelection(t);
    } else if (currentStep === -2) {
        renderConsent(t);
    } else if (currentStep === -1) {
        renderColorBlindTest(t);
    } else if (currentStep === 0) {
        renderUserInfoForm(t);
    } else if (currentStep > 0 && currentStep <= PHASE1_END) {
        requestAnimationFrame(() => {
            renderColorPicker(EMOTION_KEYS[currentStep - 1], t);
        });
    } else if (currentStep === PHASE2_START) {
        renderGEWIntro(t);
    } else if (currentStep >= PHASE2_TRIALS_START && currentStep <= PHASE2_END) {
        const wordIndex = currentStep - PHASE2_TRIALS_START;
        renderGEWTrial(WORD_KEYS[wordIndex], t);
    } else {
        renderThankYou(t);
    }
}

function updateProgress() {
    const PHASE1_END = EMOTION_KEYS.length;
    const PHASE2_TRIALS_START = PHASE1_END + 2;
    const TOTAL = PHASE1_END + WORD_KEYS.length;

    if (currentStep > 0 && currentStep <= PHASE1_END) {
        progressText.textContent = `Part 1: ${currentStep}/${PHASE1_END}`;
        progressText.style.display = 'block';
    } else if (currentStep >= PHASE2_TRIALS_START && currentStep < TOTAL + 2) { // +2 roughly
        progressText.textContent = `Part 2: ${currentStep - PHASE2_TRIALS_START + 1}/${WORD_KEYS.length}`;
        progressText.style.display = 'block';
    } else {
        progressText.style.display = 'none';
    }
}

function renderGroupSelection(t) {
    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.groupSelect}</h2>
            <div class="form-group">
                 <button class="btn secondary-btn" style="margin-bottom:1rem" onclick="selectGroup('CN')">${t.groupCN}</button>
                 <button class="btn secondary-btn" style="margin-bottom:1rem" onclick="selectGroup('UK')">${t.groupUK}</button>
                 <button class="btn secondary-btn" style="margin-bottom:1rem" onclick="selectGroup('US')">${t.groupUS}</button>
                 <button class="btn secondary-btn" onclick="selectGroup('BW')">${t.groupBW}</button>
            </div>
        </div>
    `;
}

window.selectGroup = (group) => {
    currentGroup = group;
    currentStep++;
    renderStep();
};

function renderConsent(t) {
    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.consentTitle}</h2>
            <p style="margin-bottom: 2rem; line-height: 1.8;">${t.consentContent}</p>
            <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="consentCheck" style="width: auto;">
                <label for="consentCheck" style="margin:0; cursor:pointer;">${t.consentCheck}</label>
            </div>
            <button id="consentBtn" class="btn primary-btn" disabled>${t.next}</button>
        </div>
    `;

    const check = document.getElementById('consentCheck');
    const btn = document.getElementById('consentBtn');

    check.addEventListener('change', () => {
        btn.disabled = !check.checked;
        btn.style.opacity = check.checked ? '1' : '0.5';
    });

    btn.addEventListener('click', () => {
        if (check.checked) {
            currentStep++;
            renderStep();
        } else {
            alert(t.errorConsent);
        }
    });
}

function renderColorBlindTest(t) {
    // Randomly pick one of the plates: 12, 74, 6
    // Correct answers: 12, 74, 6
    const plates = [
        { src: 'ishihara_12.png', answer: '12' },
        { src: 'ishihara_74.png', answer: '74' },
        { src: 'ishihara_6.png', answer: '6' },
    ];
    const plate = plates[Math.floor(Math.random() * plates.length)];

    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.cbTitle}</h2>
            <p style="margin-bottom: 1rem;">${t.cbDesc}</p>
            <div style="text-align: center; margin-bottom: 2rem;">
                <img src="${plate.src}" alt="Color Blind Test" style="max-width: 250px; border-radius: 8px;">
            </div>
            <div class="form-group">
                <input type="number" id="cbInput" placeholder="${t.cbPlaceholder}" style="text-align:center;">
            </div>
            <button id="cbBtn" class="btn primary-btn">${t.next}</button>
        </div>
    `;

    document.getElementById('cbBtn').addEventListener('click', () => {
        const input = document.getElementById('cbInput').value.trim();
        if (input === plate.answer) {
            isColorBlind = false;
            currentStep++;
            renderStep();
        } else {
            isColorBlind = true;
            alert(t.cbError);
            location.reload(); // Stop
        }
    });
}

function renderUserInfoForm(t) {
    const countryOptions = `<option value="">${t.select}</option>` +
        COUNTRIES.map(c => `<option value="${c.value}">${c.label}</option>`).join('');

    // Filter 'none' for native language (must have one)
    const langOptions = `<option value="">${t.select}</option>` +
        LANGUAGES.filter(l => l.value !== 'none').map(l => `<option value="${l.value}">${l.label}</option>`).join('');

    const secondLangOptions = `<option value="">${t.select}</option>` +
        LANGUAGES.map(l => `<option value="${l.value}">${l.label}</option>`).join('');

    const detectedStr = `${t.detectedInfo}: ${displayInfo.userAgent.includes('Mobile') ? 'Mobile/Tablet' : 'Desktop'}, Gamut: ${displayInfo.colorGamut.toUpperCase()}`;

    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.userInfo}</h2>
            <p style="margin-bottom: 20px; color: #666;">${t.infoDesc}</p>
            
            <div style="background:#f0f0f0; padding:10px; margin-bottom:20px; border:1px solid #ccc; font-size:0.9rem;">
                ${detectedStr}
            </div>

            <form id="infoForm">
                <!-- Monitor Model -->
                <div class="form-group">
                    <label for="monitorModel">${t.monitorModel}</label>
                    <input type="text" id="monitorModel" placeholder="${t.monitorPlaceholder}">
                </div>

                <!-- Birth Date -->
                <div class="form-group" style="display:flex; gap:1rem;">
                    <div style="flex:1;">
                        <label for="birthYear">${t.birthYear}</label>
                        <input type="number" id="birthYear" required min="1900" max="2025" placeholder="YYYY">
                    </div>
                    <div style="flex:1;">
                        <label for="birthMonth">${t.birthMonth}</label>
                        <select id="birthMonth" required>
                            <option value="">${t.select}</option>
                            ${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="gender">${t.gender}</label>
                    <select id="gender" required>
                        <option value="">${t.select}</option>
                        <option value="male" ${userInfo.gender === 'male' ? 'selected' : ''}>${t.male}</option>
                        <option value="female" ${userInfo.gender === 'female' ? 'selected' : ''}>${t.female}</option>
                        <option value="other" ${userInfo.gender === 'other' ? 'selected' : ''}>${t.other}</option>
                    </select>
                </div>

                <!-- Nationality & Residence -->
                <div class="form-group">
                    <label for="nationality">${t.nationality}</label>
                    <select id="nationality" required>${countryOptions}</select>
                    <input type="text" id="nationalityOther" class="other-input" style="display:none; margin-top:0.5rem;" placeholder="Please specify / 请注明">
                </div>

                <div class="form-group">
                    <label for="residence">${t.residence}</label>
                    <select id="residence" required>${countryOptions}</select>
                    <input type="text" id="residenceOther" class="other-input" style="display:none; margin-top:0.5rem;" placeholder="Please specify / 请注明">
                </div>

                <div class="form-group">
                    <label for="residenceDuration">${t.residenceDuration}</label>
                    <input type="number" id="residenceDuration" required min="0" step="0.5">
                </div>

                <!-- Language -->
                <div class="form-group">
                    <label for="nativeLang">${t.nativeLang}</label>
                    <select id="nativeLang" required>${langOptions}</select>
                    <input type="text" id="nativeLangOther" class="other-input" style="display:none; margin-top:0.5rem;" placeholder="Please specify / 请注明">
                </div>
                 <div class="form-group">
                    <label for="secondLang">${t.secondLang}</label>
                    <select id="secondLang" required>${secondLangOptions}</select>
                    <input type="text" id="secondLangOther" class="other-input" style="display:none; margin-top:0.5rem;" placeholder="Please specify / 请注明">
                </div>

                <!-- Profession -->
                <div class="form-group">
                    <label>${t.isDesigner}</label>
                    <select id="isDesigner" required>
                        <option value="">${t.select}</option>
                        <option value="yes">${t.yes}</option>
                        <option value="no">${t.no}</option>
                    </select>
                </div>

                <button type="submit" class="btn primary-btn">${t.start}</button>
            </form>
        </div>
    `;

    // Helper to toggle other input
    const setupOtherToggle = (selectId, inputId) => {
        const select = document.getElementById(selectId);
        const input = document.getElementById(inputId);
        select.addEventListener('change', () => {
            const isOther = select.value === 'Other' || select.value === 'other';
            input.style.display = isOther ? 'block' : 'none';
            input.required = isOther;
        });
    };

    setupOtherToggle('nationality', 'nationalityOther');
    setupOtherToggle('residence', 'residenceOther');
    setupOtherToggle('nativeLang', 'nativeLangOther');
    setupOtherToggle('secondLang', 'secondLangOther');

    document.getElementById('infoForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const birthYear = document.getElementById('birthYear').value;
        if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
            alert(t.errorAge);
            return;
        }

        const getValue = (id, otherId) => {
            const val = document.getElementById(id).value;
            if (val === 'Other' || val === 'other') {
                return document.getElementById(otherId).value;
            }
            return val;
        };

        userInfo = {
            birth_year: birthYear,
            birth_month: document.getElementById('birthMonth').value,
            gender: document.getElementById('gender').value,
            nationality: getValue('nationality', 'nationalityOther'),
            residence: getValue('residence', 'residenceOther'),
            residence_duration: document.getElementById('residenceDuration').value,
            native_lang: getValue('nativeLang', 'nativeLangOther'),
            second_lang: getValue('secondLang', 'secondLangOther'),
            is_designer: document.getElementById('isDesigner').value === 'yes',
            monitor_model: document.getElementById('monitorModel').value || 'Unknown'
        };

        startTime = Date.now();
        currentStep++;
        renderStep();
    });
}

function renderColorPicker(emotionKey, t) {
    let emotionDisplay = t.emotions[emotionKey] || emotionKey;

    // Dual Language for CN Group
    if (currentGroup === 'CN') {
        const en = i18n.en.emotions[emotionKey] || emotionKey;
        const zh = i18n.zh.emotions[emotionKey] || emotionKey;
        // avoid duplication if key itself is the value or missing
        emotionDisplay = `${en} (${zh})`;
    }

    // Initial display is hidden/placeholder
    // Phase 4: Logic to hide preview/palette until hue move

    mainContent.innerHTML = `
        <div class="card">
            <h2 style="text-align: center;">${emotionDisplay}</h2>
            
            <div id="previewContainer" style="display: flex; justify-content: center; margin-bottom: 1rem; visibility: hidden;">
                <div id="colorPreview" class="color-preview-box" style="width: 80px; height: 80px; background-color: hsl(${currentHSL.h}, ${currentHSL.s}%, ${currentHSL.l}%);"></div>
            </div>

            <p style="text-align: center; margin-bottom: 1.5rem; color: #64748b;">${t.emotionInstruction(emotionDisplay)}</p>
            
            <div class="color-picker-wrapper">
                <div class="hue-slider-container" style="width: 100%">
                    <input type="range" id="hueSlider" min="0" max="360" value="${currentHSL.h}">
                </div>
                
                <div id="hueHintBox" class="guide-hint">${t.hueHint}</div>

                <div class="palette-area hidden" id="paletteArea">
                    <canvas id="paletteCanvas"></canvas>
                    <div id="paletteCursor" class="palette-cursor"></div>
                </div>

                <div class="preview-bar hidden" id="valuesBar" style="justify-content: center;">
                    <div style="font-size: 0.9rem; color: #666; display: flex; gap: 1rem;">
                       <span>H: <span id="hueVal">${currentHSL.h}</span></span>
                       <span>S: <span id="satVal">${currentHSL.s}%</span></span>
                       <span>L: <span id="lightVal">${currentHSL.l}%</span></span>
                    </div>
                </div>
            </div>

            <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem;">
                <button id="prevBtn" class="btn secondary-btn ${currentStep === 1 ? 'hidden' : ''}">${t.back || 'Back'}</button>
                <button id="nextBtn" class="btn primary-btn hidden">
                    ${currentStep === EMOTION_KEYS.length ? t.submit : t.next}
                </button>
            </div>
        </div>
    `;

    const hueSlider = document.getElementById('hueSlider');
    const canvas = document.getElementById('paletteCanvas');
    const cursor = document.getElementById('paletteCursor');
    const preview = document.getElementById('colorPreview');
    const hueVal = document.getElementById('hueVal');
    const satVal = document.getElementById('satVal');
    const lightVal = document.getElementById('lightVal');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const paletteArea = document.getElementById('paletteArea');
    const hueHintBox = document.getElementById('hueHintBox');
    const valuesBar = document.getElementById('valuesBar');
    const previewContainer = document.getElementById('previewContainer');

    // ... (context init)

    // Add Prev Listener
    prevBtn.addEventListener('click', () => {
        currentStep--;
        renderStep();
    });

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        if (paletteArea.classList.contains('hidden')) return; // Don't resize if hidden
        canvas.width = paletteArea.offsetWidth;
        canvas.height = paletteArea.offsetHeight;
        drawPalette();
        updateCursorPosition(); // Just refresh based on state
    }

    function revealTools() {
        if (hasHueInteracted) return;
        hasHueInteracted = true;

        hueHintBox.classList.add('hidden');
        paletteArea.classList.remove('hidden');
        valuesBar.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        previewContainer.style.visibility = 'visible';

        resizeCanvas();
        // Reset X/Y to center
        lastX = canvas.width / 2;
        lastY = canvas.height / 2;
        updateHSLFromPosition(lastX, lastY);
    }

    function drawPalette() {
        const width = canvas.width;
        const height = canvas.height;
        const h = currentHSL.h;

        ctx.clearRect(0, 0, width, height);

        const gradH = ctx.createLinearGradient(0, 0, width, 0);
        gradH.addColorStop(0, '#fff');
        gradH.addColorStop(1, `hsl(${h}, 100%, 50%)`);
        ctx.fillStyle = gradH;
        ctx.fillRect(0, 0, width, height);

        const gradV = ctx.createLinearGradient(0, 0, 0, height);
        gradV.addColorStop(0, 'rgba(0,0,0,0)');
        gradV.addColorStop(1, '#000');
        ctx.fillStyle = gradV;
        ctx.fillRect(0, 0, width, height);
    }

    function updateColorFromSlider() {
        if (!hasHueInteracted) revealTools();

        currentHSL.h = parseInt(hueSlider.value);
        drawPalette();
        // Keep S/L consistent? No, re-evaluate from last pos?
        // Actually, changing hue shouldn't change S/V position, so HSL should update based on lastX, lastY
        updateHSLFromPosition(lastX, lastY);
    }

    let lastX = 0;
    let lastY = 0;

    function updateHSLFromPosition(x, y) {
        lastX = x;
        lastY = y;

        const rect = canvas.getBoundingClientRect();
        const width = rect.width || 1;
        const height = rect.height || 1;

        const safeX = Math.max(0, Math.min(x, width));
        const safeY = Math.max(0, Math.min(y, height));

        const s_hsv = safeX / width;
        const v_hsv = 1 - (safeY / height);
        const h = parseInt(hueSlider.value);

        let l = v_hsv * (1 - s_hsv / 2);
        let s_hsl = 0;
        if (l > 0 && l < 1) {
            s_hsl = (v_hsv - l) / Math.min(l, 1 - l);
        }

        currentHSL.h = h;
        currentHSL.s = Math.round(s_hsl * 100);
        currentHSL.l = Math.round(l * 100);

        updateUI();
    }

    function updateUI() {
        const { h, s, l } = currentHSL;
        const colorString = `hsl(${h}, ${s}%, ${l}%)`;
        preview.style.backgroundColor = colorString;
        hueVal.textContent = h;
        satVal.textContent = `${s}%`;
        lightVal.textContent = `${l}%`;

        cursor.style.left = `${lastX}px`;
        cursor.style.top = `${lastY}px`;
        cursor.style.backgroundColor = colorString;
    }

    function updateCursorPosition() {
        updateUI();
    }

    window.addEventListener('resize', () => {
        if (!paletteArea.classList.contains('hidden')) {
            resizeCanvas();
            // Restore visual position from currentHSL
            // We need to re-calculate lastX/lastY from HSL because resize changes width/height
            // Reverse HSL -> HSV -> XY
            const { h, s, l } = currentHSL;
            const s_hsl = s / 100;
            const l_val = l / 100;

            const v_hsv = l_val + s_hsl * Math.min(l_val, 1 - l_val);
            const s_hsv = v_hsv === 0 ? 0 : 2 * (1 - l_val / v_hsv);

            lastX = s_hsv * canvas.width;
            lastY = (1 - v_hsv) * canvas.height;
            updateCursorPosition();
        }
    });

    // Check for existing data
    // Check for existing data
    if (colorData[emotionKey]) {
        const saved = colorData[emotionKey];

        // Manual Reveal to avoid destructive reset logic in revealTools()
        if (!hasHueInteracted) {
            hasHueInteracted = true;
            hueHintBox.classList.add('hidden');
            paletteArea.classList.remove('hidden');
            valuesBar.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            previewContainer.style.visibility = 'visible';
        }

        // Restore State
        currentHSL = { h: saved.h, s: saved.s, l: saved.l };
        hueSlider.value = saved.h;

        // Draw Palette with restored Hue
        // We must call this AFTER setting hueSlider/currentHSL so it draws the correct hue gradient
        resizeCanvas();

        // Calculate XY
        const s_hsl = saved.s / 100;
        const l_val = saved.l / 100;
        const v_hsv = l_val + s_hsl * Math.min(l_val, 1 - l_val);
        const s_hsv = v_hsv === 0 ? 0 : 2 * (1 - l_val / v_hsv);

        lastX = s_hsv * canvas.width;
        lastY = (1 - v_hsv) * canvas.height;

        updateUI();
    }

    hueSlider.addEventListener('input', updateColorFromSlider);

    let isDragging = false;

    const handleStart = (e) => {
        isDragging = true;
        handleMove(e);
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        // Prevent scrolling ONLY when dragging
        if (e.cancelable) e.preventDefault();

        const rect = canvas.getBoundingClientRect();
        let clientX = e.clientX;
        let clientY = e.clientY;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }

        updateHSLFromPosition(clientX - rect.left, clientY - rect.top);
    };

    const handleEnd = () => {
        isDragging = false;
    };

    paletteArea.addEventListener('mousedown', handleStart);
    // Attach move/end to window to handle drag-out
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    paletteArea.addEventListener('touchstart', handleStart);
    // Allow page scroll unless dragging palette
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    nextBtn.addEventListener('click', () => {
        colorData[emotionKey] = {
            ...currentHSL,
            hex: hslToHex(currentHSL.h, currentHSL.s, currentHSL.l)
        };
        currentHSL = { h: 180, s: 50, l: 50 };

        if (currentStep === EMOTION_KEYS.length) {
            submitPhase1(t);
        } else {
            currentStep++;
            renderStep();
        }
    });


}

function renderGEWIntro(t) {
    mainContent.innerHTML = `
        <div class="card" style="text-align: center;">
            <h2>${t.phase2Title}</h2>
            <p style="margin: 20px 0; line-height: 1.6;">${t.phase2Desc}</p>
            <p style="margin-bottom: 20px; font-weight: bold;">${t.phase2Note}</p>
            <button class="btn primary-btn" onclick="startPhase2()">${t.gewStart}</button>
        </div>
    `;
}

window.startPhase2 = () => {
    currentStep++;
    renderStep();
};

let currentGEWSelection = {}; // Store selection for current word: { 'anger': 5, 'joy': 2 }

function renderGEWTrial(word, t) {
    currentGEWSelection = {}; // Reset for new word

    // Restore if exists
    if (wordData[word]) {
        wordData[word].forEach(item => {
            if (item.emotion === 'None') {
                currentGEWSelection['NO_EMOTION'] = 0;
            } else if (item.emotion === 'Other') {
                currentGEWSelection['OTHER'] = item.note;
            } else {
                currentGEWSelection[item.emotion] = item.intensity;
            }
        });
    }

    const colorBlock = `<span style="display:inline-block; width: 36px; height: 36px; border-radius: 50%; background-color: ${WORD_COLORS[word]}; vertical-align: middle; margin: 0 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border: 1px solid #ccc;"></span>`;

    mainContent.innerHTML = `
        <div class="card" style="text-align: center; max-width: 800px;">
            <h2 style="margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;">${t.gewInstruction(colorBlock)}</h2>
            
            <div id="gew-container" style="margin: 0 auto; position: relative;">
                <!-- SVG Wrapper -->
            </div>

            <div style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
                <button id="gewBackBtn" class="btn secondary-btn">${t.back || 'Back'}</button>
                <button id="gewNextBtn" class="btn primary-btn">${t.gewNext}</button>
            </div>
        </div>
    `;

    // Render the Wheel
    renderGEWChart(t);

    document.getElementById('gewBackBtn').addEventListener('click', () => {
        currentStep--;
        renderStep();
    });

    document.getElementById('gewNextBtn').addEventListener('click', () => {
        // Validation: Must select at least one emotion
        if (Object.keys(currentGEWSelection).length === 0) {
            alert(t.errorRequired || 'Please make a selection');
            return;
        }

        // Collect Data
        // Collect Data
        // Convert selection map to array
        const selectionList = Object.entries(currentGEWSelection).map(([e, i]) => {
            if (e === 'OTHER') {
                return { emotion: 'Other', intensity: 0, note: i }; // i is string value
            }
            if (e === 'NO_EMOTION') {
                return { emotion: 'None', intensity: 0 };
            }
            return { emotion: e, intensity: i };
        });

        wordData[word] = selectionList;

        const PHASE2_END = EMOTION_KEYS.length + 1 + WORD_KEYS.length;
        if (currentStep >= PHASE2_END) {
            submitPhase2(t);
        } else {
            currentStep++;
            renderStep();
        }
    });
}

// Draw the Geneva Emotion Wheel with SVG
function renderGEWChart(t) {
    const container = document.getElementById('gew-container');
    const size = Math.min(window.innerWidth - 40, 600);
    const center = size / 2;
    // Layout Config
    // Layout Config
    const innerRadius = 70; // Larger for center buttons
    const outerRadius = size / 2 - 55; // Reduced from 40 to 55 to give more space for text

    // Create UI Structure
    container.innerHTML = ''; // Clear

    // SVG Layer
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.style.userSelect = 'none';

    // 20 Emotions Distributed Evenly
    // Interest (#0) is Top-Right First. 
    // 12 o'clock is -90 degrees.
    // We want the gap to be at 12 o'clock.
    // 360 / 20 = 18 degrees per sector.
    // Sector 0 center should be at -90 + 9 = -81 degrees.
    const angleStep = 360 / GEW_EMOTION_KEYS.length;

    GEW_EMOTION_KEYS.forEach((key, index) => {
        // emotionName preparation moved to inside label logic
        const angle = -90 + 9 + (index * angleStep);
        const radian = (angle * Math.PI) / 180;

        // Draw 5 circles
        for (let i = 1; i <= 5; i++) {
            // Distance distribution
            // Linear from inner + spacing to outer
            const stepSize = (outerRadius - innerRadius) / 5;
            const dist = innerRadius + (i - 0.5) * stepSize; // Center of circle

            const cx = center + dist * Math.cos(radian);
            const cy = center + dist * Math.sin(radian);
            // Sizes: 4, 6, 8, 10, 12 roughly
            const circleRadius = 3 + i * 1.8;

            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttribute("cx", cx);
            circle.setAttribute("cy", cy);
            circle.setAttribute("r", circleRadius);
            circle.setAttribute("fill", "white"); // Default
            circle.setAttribute("stroke", "black");
            circle.setAttribute("stroke-width", "1.5");
            circle.style.cursor = "pointer";
            circle.dataset.emotion = key;
            circle.dataset.intensity = i;

            // Touch/Click
            const handler = (e) => {
                e.preventDefault();
                toggleGEWSelection(key, i, svg);
            };
            circle.addEventListener('mousedown', handler);
            circle.addEventListener('touchstart', handler);

            svg.appendChild(circle);
        }

        // Labels
        const labelDist = outerRadius + 25; // Slightly pushed out
        const lx = center + labelDist * Math.cos(radian);
        const ly = center + labelDist * Math.sin(radian);

        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", lx);
        text.setAttribute("y", ly);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "11");
        text.setAttribute("font-weight", "500");

        if (currentGroup === 'CN') {
            const en = i18n.en.gewEmotions[key];
            const zh = i18n.zh.gewEmotions[key];

            // Allow vertical centering behavior roughly
            text.setAttribute("dominant-baseline", "middle");

            // Create tspans
            const tspanEn = document.createElementNS(svgNS, "tspan");
            tspanEn.textContent = en;
            tspanEn.setAttribute("x", lx);
            tspanEn.setAttribute("dy", "-0.5em"); // Move up half line

            const tspanZh = document.createElementNS(svgNS, "tspan");
            tspanZh.textContent = zh;
            tspanZh.setAttribute("x", lx);
            tspanZh.setAttribute("dy", "1.2em"); // Move down a line relative to prev

            text.appendChild(tspanEn);
            text.appendChild(tspanZh);
        } else {
            text.setAttribute("dominant-baseline", "middle");
            text.textContent = t.gewEmotions[key];
        }

        svg.appendChild(text);
    });

    container.appendChild(svg);

    // Add Central Buttons (HTML Overlay for better styling)
    const centerDiv = document.createElement('div');
    centerDiv.style.position = 'absolute';
    centerDiv.style.top = '50%';
    centerDiv.style.left = '50%';
    centerDiv.style.transform = 'translate(-50%, -50%)';
    centerDiv.style.width = `${innerRadius * 1.6}px`;
    centerDiv.style.height = `${innerRadius * 1.6}px`; // Square-ish fits in circle? 
    // Actually standard GEW has a square hub.
    centerDiv.style.display = 'flex';
    centerDiv.style.flexDirection = 'column';
    centerDiv.style.justifyContent = 'center';
    centerDiv.style.alignItems = 'center';
    centerDiv.style.gap = '8px';
    centerDiv.style.zIndex = '10';

    // Button 1: No Emotion
    const btnNo = document.createElement('button');
    btnNo.textContent = t.noEmotion;
    btnNo.style.fontSize = '12px';
    btnNo.style.padding = '4px 8px';
    btnNo.style.cursor = 'pointer';
    btnNo.style.background = '#f0f0f0';
    btnNo.style.border = '1px solid #999';
    btnNo.style.borderRadius = '4px';
    btnNo.onclick = () => {
        currentGEWSelection = { 'NO_EMOTION': 0 };
        updateGEWVisuals(svg, centerDiv);
    };

    // Button 2: Different Emotion
    const btnOther = document.createElement('button');
    btnOther.textContent = t.differentEmotion;
    btnOther.style.fontSize = '12px';
    btnOther.style.padding = '4px 8px';
    btnOther.style.cursor = 'pointer';
    btnOther.style.background = '#f0f0f0';
    btnOther.style.border = '1px solid #999';
    btnOther.style.borderRadius = '4px';
    btnOther.onclick = () => {
        const input = prompt(t.enterEmotion);
        if (input && input.trim()) {
            currentGEWSelection = {}; // Clear others? Usually implied strict choice if manually entering.
            // Or maybe add as a special key. 
            // Let's replace selection with special entry.
            currentGEWSelection['OTHER'] = input.trim();
            updateGEWVisuals(svg, centerDiv);
        }
    };

    centerDiv.appendChild(btnNo);
    centerDiv.appendChild(btnOther);
    container.appendChild(centerDiv);

    // Initial Visual Update
    updateGEWVisuals(svg, centerDiv);
}

function toggleGEWSelection(emotion, intensity, svg) {
    // If 'OTHER' was selected, clear it.
    if (currentGEWSelection['OTHER']) {
        delete currentGEWSelection['OTHER'];
    }
    if (currentGEWSelection['NO_EMOTION'] !== undefined) {
        delete currentGEWSelection['NO_EMOTION'];
    }

    if (currentGEWSelection[emotion] === intensity) {
        delete currentGEWSelection[emotion];
    } else {
        currentGEWSelection[emotion] = intensity;
    }
    // Re-render
    const centerDiv = document.getElementById('gew-container').querySelector('div'); // Hack to find center div
    updateGEWVisuals(svg, centerDiv);
}

function updateGEWVisuals(svg, centerDiv) {
    const circles = svg.querySelectorAll('circle[data-emotion]');
    circles.forEach(c => {
        const e = c.dataset.emotion;
        const i = parseInt(c.dataset.intensity);

        if (currentGEWSelection[e] === i) {
            c.setAttribute('fill', 'black'); // Selected
        } else {
            c.setAttribute('fill', 'white'); // Unselected
        }
    });

    // Update Different Emotion styling if active
    if (centerDiv) {
        const btns = centerDiv.querySelectorAll('button');
        const btnNo = btns[0];
        const btnOther = btns[1];

        if (currentGEWSelection['NO_EMOTION'] !== undefined) {
            btnNo.style.backgroundColor = '#333';
            btnNo.style.color = 'white';
        } else {
            btnNo.style.backgroundColor = '#f0f0f0';
            btnNo.style.color = 'black';
        }

        if (currentGEWSelection['OTHER']) {
            btnOther.style.backgroundColor = '#333';
            btnOther.style.color = 'white';
            btnOther.textContent = currentGEWSelection['OTHER']; // Show text
        } else {
            btnOther.style.backgroundColor = '#f0f0f0';
            btnOther.style.color = 'black';
            // Need to recover label text from i18n... a bit complex to pass t here.
            // Assume simplified approach: don't reset text or keep simple. 
            // Ideally we pass 't' or store original text.
            // Simplification: Not changing text back, just style.
            // Actually, let's reset text if possible.
            // check global i18n
            const t = i18n[currentLang];
            btnOther.textContent = t.differentEmotion;
        }
    }
}


async function submitPhase1(t) {
    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);

    mainContent.innerHTML = `<div class="card" style="text-align:center;"><p>${t.submitting}</p></div>`;

    try {
        let className = 'SurveyResponse';
        if (currentGroup && ['CN', 'UK', 'US', 'BW'].includes(currentGroup)) {
            className = `SurveyResponse_${currentGroup}`;
        }

        const SurveyResponse = AV.Object.extend(className);
        const response = new SurveyResponse();

        response.set('user_info', userInfo);
        response.set('color_data', colorData);
        response.set('duration', duration);
        response.set('group', currentGroup);
        response.set('display_info', displayInfo);
        // Mark as incomplete initially
        response.set('completed_phase2', false);

        const saved = await response.save();
        colorPickerObjectId = saved.id; // Store ID for Phase 2

        // Proceed to Phase 2
        currentStep++;
        renderStep();
    } catch (e) {
        console.error(e);
        alert(t.errorSubmit + ': ' + (e.message || t.errorNetwork));
        location.reload();
    }
}

async function submitPhase2(t) {
    mainContent.innerHTML = `<div class="card" style="text-align:center;"><p>${t.submitting}</p></div>`;

    try {
        if (!colorPickerObjectId) {
            throw new Error("Missing Phase 1 ID");
        }

        let className = 'SurveyResponse';
        if (currentGroup && ['CN', 'UK', 'US', 'BW'].includes(currentGroup)) {
            className = `SurveyResponse_${currentGroup}`;
        }

        // Update existing object
        const response = AV.Object.createWithoutData(className, colorPickerObjectId);
        response.set('word_data', wordData);
        response.set('completed_phase2', true);

        await response.save();

        // Finish
        currentStep++; // Should be renderThankYou
        renderStep();
    } catch (e) {
        console.error(e);
        // Even if update fails, we have Phase 1. Just show Thank You or Error.
        // Showing Thank You is better UX, maybe log error.
        alert(t.errorSubmit + ' (Phase 2): ' + (e.message || t.errorNetwork));
        // Force thank you access
        currentStep = 999;
        renderThankYou(t);
    }
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function renderThankYou(t) {
    mainContent.innerHTML = `
        <div class="card" style="text-align: center;">
            <h2>${t.thankYou}</h2>
            <p>${t.thankYouDesc}</p>
            <button onclick="location.reload()" class="btn secondary-btn" style="margin-top: 1rem;">${t.home}</button>
        </div>
    `;
}
