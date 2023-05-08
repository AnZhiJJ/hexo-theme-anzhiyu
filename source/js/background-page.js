// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">

    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片"><a href="#图片" class="headerlink" title="图片"></a>图片</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.staticaly.com/gh/AnZhiJJ/Blog_Img@main/博客站点配图/RedPlanetDay_ZH-CN4913018041_UHD.6w4o5n3ijpc0.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.staticaly.com/gh/AnZhiJJ/Blog_Img@main/博客站点配图/RedPlanetDay_ZH-CN4913018041_UHD.6w4o5n3ijpc0.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/dd4aee16880411ebb6edd017c2d2eca2.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/dd4aee16880411ebb6edd017c2d2eca2.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/c9d3deb2880411ebb6edd017c2d2eca2.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/c9d3deb2880411ebb6edd017c2d2eca2.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/0d73ff1af5c149c2af78a4c7280c9ac9.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/0d73ff1af5c149c2af78a4c7280c9ac9.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/08206a3879f9467f93eb18e279dd2642.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/08206a3879f9467f93eb18e279dd2642.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/14d9904fe2ac4961b203c3eb2f2f467f.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/14d9904fe2ac4961b203c3eb2f2f467f.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/f048e9726518419fa15dd365902500c4.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/f048e9726518419fa15dd365902500c4.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/bab9141327ca48e39abef6229b79cf9c.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/bab9141327ca48e39abef6229b79cf9c.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/a26f66658e014e06aa70e2753742bef3.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/a26f66658e014e06aa70e2753742bef3.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/35d9316f450041b89232893f083a57f1.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/35d9316f450041b89232893f083a57f1.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/6143778327db4d17adbb63c0f6c0a8af.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/6143778327db4d17adbb63c0f6c0a8af.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/66a0f1473a0f4ae7850ac8607774eb03.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/66a0f1473a0f4ae7850ac8607774eb03.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.leonus.cn/img/058fe486bd784f28875a7a01f68d09de.webp)" class="imgbox" onclick="changeBg('url(https\://cdn.leonus.cn/img/058fe486bd784f28875a7a01f68d09de.webp)')"></a>
    </div>



    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="leonus.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))" onclick="leonus.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="leonus.changeBg('linear-gradient(to right, #ff4b1f, #1fddff)')"></a>
    </div>

    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
    </div>
`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}