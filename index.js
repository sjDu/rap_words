const tfidf = require('./tfidf.js')
require('./scripts/main.js');
 
dict1 = require('./scripts/data/dictionary.js');
dict2 = require('./scripts/data/dict_custom.js');

// var Segment = require('segment');
// // 创建实例
// var segment = new Segment();
// // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
// segment.useDefault();


// console.log(tfidf.tfidf("American", `
// Superman is a fictional superhero appearing in American comic books published by DC Comics. Created by writer Jerry Siegel and artist Joe Shuster, the character first appeared in Action Comics #1 on April 18, 1938.[1] Superman regularly appears in comic books published by DC Comics and has been adapted to radio shows, newspaper strips, television shows, movies, and video games.

// Superman was born on the planet Krypton and named Kal-El. As a baby, he was sent to Earth in a small spaceship by his scientist father Jor-El moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside; he was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark displayed various superhuman abilities, such as incredible strength and impervious skin. His foster parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime as a vigilante. To protect his privacy, he changes into a colorful costume and uses the alias "Superman" when fighting crime. Clark Kent resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet. Superman's love interest is his fellow journalist Lois Lane, and his classic arch-enemy is the genius inventor Lex Luthor. He is a friend of many other superheroes in the DC Universe, such as Batman and Wonder Woman.

// Although Superman was not the first superhero character, he popularized the superhero genre and defined its conventions. Superman is still one of the most lucrative superhero franchises.[2]
// `))

const splitedLyric = `
Yeah 這是 麻吉 你 知道 的 我的 頑童 在哪 LET'S GET IT 當 08 第一天 走跳 (SOUTH SIDE) (RAIN CITY)
NAH NAH THEY DON'T UNDERSTAND I GOTTA SHOW OUT
(SOUTH SIDE)
當 08 第一天 走跳
(SOUTH SIDE) (RAIN CITY)
WUUUUUUU MAN I GOTTA SHOW OUT
(SOUTH SIDE)

NOW HOLD UP
別 跟我 開玩笑 這 遊戲 SHOW NO MERCY
給我 一點 樂子 這裡 沒有人 能匹敵
一身銅臭味 髒得沒有人在清理
你不喜歡我也不喜歡你 快滾 沒有人在逼你
恁爸來就是欲殺 一定愛改
天是棺材蓋 你哪個公司派來 說實在 是多壞
他說我性底壞 還嗆他 I WILL SEE YOU OUTSIDE
是哦是哦 LIL BITCH SO THE FUCK WHAT

我可以吃虧也不怕被人佔便宜
下次加倍奉還 這價格 YOU NEED TO CUT IT
先下手為強 別傻傻在那等人整你
禍不單行 我請你先擔心你自己 沒出息的生意
十年見多成敗不見怪
時機不對的好貨也被人賤賣
派對像個明星 我們都是醉漢
昨天發生什麼事 我記憶只有片段

當08第一天走跳
(SOUTH SIDE) (RAIN CITY)
NAH NAH THEY DON'T UNDERSTAND I GOTTA SHOW OUT
(SOUTH SIDE)
當08第一天走跳
(SOUTH SIDE) (RAIN CITY)
WUUUUUUU MAN I GOTTA SHOW OUT
(SOUTH SIDE)

跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳

儘管老子一身傲氣 還得學會謙卑
吞下交際喝的酒 已不下千杯
彎下身軀低頭看這世界還能頂天
看著自視甚高 小鬼還能夠快活幾年
他們剛開始出來?迌 幻想站在頂樓
泉整堆 自己多勇 全是無中生有
出來展 要懂先後 吃相別太過醜陋
面對我臉皮別太薄 看你能值幾兩重
更多更詳盡歌詞 在 ※ Mojim.com　魔鏡歌詞網 
別再想著借酒裝瘋 記住那天的糗
人不犯我 我不犯人 依然低調喝著酒
敵不動 我不動 心裡讓人猜不透
上好放予尊重會比較好過 莫來共我恐
沒在信道 別當我是病貓 你儘早
想想這盤棋子該要怎麼和我下
今朝 下起冰雹 戴上笠帽
關在無聲的所在 薑還是老的辣

當08第一天走跳
(SOUTH SIDE) (RAIN CITY)
NAH NAH THEY DON'T UNDERSTAND I GOTTA SHOW OUT
(SOUTH SIDE)
當08第一天走跳
(SOUTH SIDE) (RAIN CITY)
WUUUUUUU MAN I GOTTA SHOW OUT
(SOUTH SIDE)

走跳10年沒有後悔問心無愧
他們還在意當年誤會是對還是不對
如果視野只剩下愛與和平的世界
也不會有人在意你當年是否要出櫃

少裝腔作勢 你們裝ㄎㄧㄤ說故事
我曾經也像你們ㄧ樣 想趨炎附勢
能得到名利物質 我變得沒有素質
他讓我吃得太好 不信你們看我肚子

我將存款數字 不停複製貼上
誰說我忘本 我依然混在那條街上
每逢中秋 我們辦趴在堤防邊上
歡迎我所有的老鄉ㄧ起過來法大

見過世面 在社會看過各種事件
我知道哪些是朋友 哪些只會見ㄧ次面
就是又有人拿我們的照片招搖撞騙
蛤 我們是朋友嗎 路上別被我撞見

當08第一天走跳

跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK

當08第一天走跳

跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳
跳 MOTHER FUCK 跳 MOTHER FUCK 跳

當08第一天走跳
`

const lyric = `
阿嶽)
這樣太危險 飛太遠
對你做鬼臉 我們飛太遠
衝上雲端 天空沒有極限
他們知道我們來自哪裡
已經鐵了心 不掉頭回去
離開地表 展開雙翼飛行
WE GRINDING 黃金級的 SKY TEAM
到處都是小清新 小確幸 你要小心
街頭的兄弟很餓 殺出程咬金
現在多了我們兄弟本色
五個小小兵 五個忍者 天時地利人和
就是不矯情 就是不鳥你 做自己
路遙知馬力 我們的觸角早就不知伸到哪去
胚到全世界 飛航模式
沒日夜非常忙到沒時間
背上饒舌歌手的夢
我現在全實現 從玩票變全職業
我們先馳得點 兄弟們請你再堅持著點
已經混了十年 現在準備幹票大的
什麼都沒在怕的 HOLLA
我睡都還沒睡醒 準備來趕飛零機
飛往下個城市 躲不掉眾家媒體攝影機
王者起程往高峰 黃金海等我掏空
馬子為我暴動 富少崇拜著誓死效忠
不曾尖叫的開了口 抱著女友的鬆了手
全場歡聲像獅子吼安可不夠多觀眾攏美送
HUSTLING EVERYDAY I HUSTLING
GOYARD GUCCI VERSACE
我就像是奢侈品 締造歷史傳奇
遍地踏下足跡 直奔華語界的甲子園
與我兄弟 BACK TO BACK
HOME RUN 砲火 BACK TO BACK
最高層級地平線 感官炸裂新體驗
小子心裡面想成為我 肖想我的GOLD CHAIN
這樣太危險 飛太遠
對你做鬼臉 我們飛太遠
衝上雲端 天空沒有極限
他們知道我們來自哪裡
已經鐵了心 不掉頭回去
離開地表 展開雙翼飛行
WE GRINDING 黃金級的 SKY TEAM
收拾好我的行李 等等我就要飛行
家人放在心裡 兄弟讓我來挺你
以小博大的刺激 賺到大把的資金
不講資歷 講實力 繼續PUNCH我的詞句
下飛機我眼睛睜開
我知道所有人都站在舞台下等待
就是有這本領HOLD 住著全場的能耐
背負著所有老鄉心中的期待
就快踏遍全世界 高樓矮房放進我視線
每場演出對我來說都是場試煉
ㄧ直RACKS ON RACKS我事業
誰是你最愛的老鄉不用自薦
多自戀到世界各地看他熱度有多熾燄
大把鈔票花在刀口上
每一個字都是黃金場子留給高手唱
飛了這麼遠還不打算要歇腳
我花了越多賺的越多 I BALL LIKE JAY CHOU
管他誰的主場 他們當我流氓
我搶了他的市場 傷到自尊心想找我求償
我教你怎麼當個男子漢 敢擋子彈
誰管你喜歡還是不喜歡 都別來點我讚
一堆小清新 唱歌夾著小雞雞 我呸
一秒帶走你的馬子今晚跟我睡
你不是我的朋友不要跟我聊忠誠
我沒有風度 只有態度像是姚中仁
(阿嶽)
這樣太危險 飛太遠
對你做鬼臉 我們飛太遠
衝上雲端 天空沒有極限
(E-SO + 阿嶽)
他們知道我們來自哪裡
已經鐵了心 不掉頭回去
離開地表 展開雙翼飛行
WE GRINDING 黃金級的 SKY TEAM
(兄弟本色)
我們準備要飛
沒有翅膀 那我們造飛機
讓其他人跟在我們後面追
油門一直催
不只逆風 我們逆天
我們造飛機 造飛機 現在準備起飛
沒有翅膀 那我們造飛機
讓其他人跟在我們後面追
油門一直催
不只逆風 我們逆天
我們造飛機 造飛機 我們準備要飛
`

// // console.log(segment.doSegment(lyric, {simple:true}));
// const result = tfidf.analysis(segment.doSegment(splitedLyric, {simple:true}).join(" "))
// console.log('show key words', result.slice(0, 30))

// node_jieba_parsing([dict1, dict2], lyric, function (_result) {
//     // console.log(_result.join(" "));
//     // console.log(_result);
//     result = tfidf.analysis(_result.join(" "))
//     console.log('show key words', result.slice(0, 30))
// });



function doAnalysis(lyric) {

    return new Promise((res, rej) => {
        node_jieba_parsing([dict1, dict2], lyric, function (_result) {
            console.log(dict1, _result.join(" "));
            const r = tfidf.analysis(_result.join(" "))
            res(r)
        });
    })
}

module.exports = {
    doAnalysis,
    lyric,
}


