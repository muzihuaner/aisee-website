    	function search(sender) {
     		var o = document.getElementById("kw");
	     	switch(sender.id){
	     		case 'google':
	     			window.open('https://www.google.com/search?q=' + o.value);
				break;
				case 'baidu':
	     			window.open('http://www.baidu.com/s?wd=' + o.value);
	     		break;
				case 'sogou':
	     			window.open('http://www.sogou.com/web?query=' + o.value)
	     		break;
				case 'bing':
	     			window.open('http://www.bing.com/search?q=' + o.value);
	     		break;	
				case 'mijisou':
	     			window.open('https://mijisou.com/?q=' + o.value);
	     		break;
				case 'yahoo':
	     			window.open('http://search.yahoo.com/search?p=' + o.value);
	     		break;	
				case 'ask':
	     			window.open('https://www.ask.com/web?q=' + o.value);
	     		break;	
				case 'duckduckgo':
	     			window.open('https://duckduckgo.com/?q=' + o.value);
	     		break;	
				case 'yandex':
	     			window.open('https://yandex.com/search/?text=' + o.value);
	     		break;	
				case 'wolframalpha':
	     			window.open('http://www.wolframalpha.com/input/?i=' + o.value);
	     		break;	
					
					
				case 'calendar':
	     			window.open('https://calendar.google.com/calendar/r');
				break;	
				case 'keep':
	     			window.open('https://keep.google.com/u/0/');
	     		break;		
				case 'mail':
	     			window.open('https://mail.google.com/mail/u/0/?tab=cm');
	     		break;		
				case 'docs':
	     			window.open('https://docs.google.com/document/u/0/');
	     		break;		
				case 'sheets':
	     			window.open('https://docs.google.com/spreadsheets/u/0/');
	     		break;		
				case 'ppt':
	     			window.open('https://docs.google.com/presentation/u/0/');
	     		break;		
				case 'drive':
	     			window.open('https://drive.google.com/drive/my-drive');
	     		break;		
				case 'news':
	     			window.open('https://news.google.com/?tab=on&hl=zh-CN&gl=CN&ceid=CN:zh-Hans');
	     		break;									
				case 'photos':
	     			window.open('https://photos.google.com/?pageId=none');
	     		break;		
				case 'maps':
	     			window.open('https://www.google.com/maps/');
	     		break;	
				case 'earth':
	     			window.open('https://earth.google.com/web/');
	     		break;	
					
					
				case 'torrentkitty':
	     			window.open('https://cn.torrentkitty.tv/search/' + o.value);
	     		break;	
				case 'cilimao':
	     			window.open('https://www.cilimao.news/search?word=' + o.value);
	     		break;		
				case 'zhongzifuli':
	     			window.open('http://zhongzifuli.biz/fuli/' + o.value +'/1-0-0/' );
	     		break;		
				case 'bt':
	     			window.open('https://bt.xiandan.in/search?source=种子搜&k=' + o.value);
	     		break;		
				case 'quzhuanpan':
	     			window.open('https://www.quzhuanpan.com/');
	     		break;				
				case 'panc':
	     			window.open('https://www.panc.cc/');
	     		break;				
				case 'panduoduo':
	     			window.open('http://www.panduoduo.net/');
	     		break;				
				case 'cupfox':
	     			window.open('https://www.cupfox.com/?type=video&key=' + o.value);
	     		break;				
				case '80s':
	     			window.open('http://www.80s.la');
	     		break;				
				case 'btdy':
	     			window.open('http://www.btbtdy.me');
	     		break;		
					
					
				case 'readfree':
	     			window.open('http://www.woyushu.com/');
	     		break;				
				case 'jiumo':
	     			window.open('https://www.jiumodiary.com/');
	     		break;				
				case 'shuge':
	     			window.open('https://www.shuge.org/');
	     		break;		
				case 'kugua':
	     			window.open('https://www.kgbook.com/');
	     		break;				
				case 'sobooks':
	     			window.open('https://sobooks.cc/');
	     		break;		
				case 'shuban':
	     			window.open('https://bookfere.com/');
	     		break;				
				case 'epubee':
	     			window.open('http://cn.epubee.com/books/');
	     		break;		
				case 'mebook':
	     			window.open('http://www.mebook.cc');
	     		break;		
				case 'xingke':
	     			window.open('http://www.xkreading.com');
	     		break;
				case 'epubw':
	     			window.open('https://epubw.com/');
	     		break;
				case 'lorefree':
	     			window.open('https://ebook.lorefree.com/');
	     		break;
				
					
				case 'cnki':
	     			window.open('https://www.cnki.net/');
	     		break;		
				case 'idate':
	     			window.open('https://www.cn-ki.net/');
	     		break;				
				case 'rrzxw':
	     			window.open('http://www.rrzxw.net/index.html');
	     		break;		
				case '51zxw':
	     			window.open('https://www.51zxw.net/');
	     		break;				
				case '163class':
	     			window.open('https://open.163.com/');
	     		break;		
				case 'mooc':
	     			window.open('https://www.icourse163.org/');
	     		break;				
				case 'cnmooc':
	     			window.open('https://www.cnmooc.org/home/index.mooc');
	     		break;		
				case 'qqke':
	     			window.open('https://ke.qq.com/');
	     		break;				
				case '163study':
	     			window.open('https://study.163.com/');
	     		break;		
				case 'ted':
	     			window.open('https://www.ted.com/#/');
	     		break;				
				case 'zhihu':
	     			window.open('https://www.zhihu.com');
	     		break;		
				case 'quora':
	     			window.open('https://www.quora.com/');
	     		break;				
				case 'zt':
	     			window.open('http://zjisa.zjlib.cn//home/zy_home.jsp?libCode=zjlib');
	     		break;		
				case 'asx':
	     			window.open('http://m.aisixiang.com/?type=latest');
	     		break;	
				case 'xinli001':
	     			window.open('https://www.xinli001.com/');
	     		break;
				case 'rrdscpjl':
	     			window.open('http://www.woshipm.com/');
	     		break;	
						
					
				case 'sjdh':
	     			window.open('http://hao.shejidaren.com/index.html#nogo');
	     		break;				
				case 'txsj':
	     			window.open('https://idesign.qq.com/#!index/feed');
	     		break;		
				case 'zcool':
	     			window.open('https://www.zcool.com.cn/');
	     		break;	
				case 'huaban':
	     			window.open('https://huaban.com/');
	     		break;	
				case 'dribbble':
	     			window.open('https://dribbble.com/');
	     		break;	
				case 'behance':
	     			window.open('https://www.behance.net/');
	     		break;		
				case 'pinterest':
	     			window.open('https://www.pinterest.com/');
	     		break;	
				case 'tuyi':
	     			window.open('http://www.tuyiyi.com/hao/');
	     		break;	
				case 'tuchong':
	     			window.open('https://tuchong.com/');
	     		break;	
				case 'zgs':
	     			window.open('http://zhongguose.com');
	     		break;		
				case 'rbs':
	     			window.open('http://nipponcolors.com/#murasaki');
	     		break;	
				case 'shijueme':
	     			window.open('http://shijue.me/');
	     		break;	
				case 'xueui':
	     			window.open('http://www.xueui.cn/');
	     		break;	
				case 'cnd':
	     			window.open('http://www.cndesign.com/');
	     		break;		
				case 'chuangyiren':
	     			window.open('http://chuangyiren.cn/');
	     		break;	
				case 'niice':
	     			window.open('https://niice.co/search');
	     		break;	
				case 'eeff':
	     			window.open('http://www.eeff.net/');
	     		break;	
				case 'ziticq':
	     			window.open('http://hao.ziticq.com/');
	     		break;	
				case 'sjzj':
	     			window.open('http://www.sj33.cn/');
	     		break;		
				case '90sheji':
	     			window.open('http://90sheji.com/');
	     		break;	
				case 'miyuansu':
	     			window.open('http://www.51yuansu.com/');
	     		break;		
				case 'zhu7jie':
	     			window.open('http://www.zhu7jie.cn/');
	     		break;		
				case 'pslm':
	     			window.open('https://www.68ps.com/');
	     		break;	
				case 'psxx':
	     			window.open('http://www.ps-xxw.cn/');
	     		break;	
				case 'ckt':
	     			window.open('https://www.chuangkit.com/designtools/startdesign');
	     		break;
				case 'canva':
	     			window.open('https://www.canva.cn/');
	     		break;
					
					
					
					
				case 'facebook':
	     			window.open('https://www.facebook.com/');
	     		break;	
				case 'twitter':
	     			window.open('https://twitter.com/');
	     		break;		
				case 'ins':
	     			window.open('https://www.instagram.com/');
	     		break;	
				case 'tumblr':
	     			window.open('https://www.tumblr.com/dashboard');
	     		break;	
				case 'weibo':
	     			window.open('https://www.weibo.com');
	     		break;	
				case 'pixiv':
	     			window.open('https://www.pixiv.net/');
	     		break;
					
					
				case 'iqiyi':
	     			window.open('https://www.iqiyi.com/');
	     		break;		
				case 'bilibili':
	     			window.open('https://www.bilibili.com/');
	     		break;	
				case 'youtube':
	     			window.open('https://www.youtube.com/');
	     		break;	
				case 'youku':
	     			window.open('https://www.youku.com/');
	     		break;	
				case 'tudou':
	     			window.open('https://category.tudou.com/');
	     		break;		
					
					
				case 'csdn':
	     			window.open('https://www.csdn.net/');
	     		break;	
				case 'chongbuluo':
	     			window.open('https://www.chongbuluo.com/forum.php');
	     		break;	
				case 'github':
	     			window.open('https://github.com/');
	     		break;	
				case 'dfg':
	     			window.open('https://www.52dfg.com/');
	     		break;	
				case 'jishuqq':
	     			window.open('https://www.jishuqq.com/');
	     		break;		
				case 'zhiyoo':
	     			window.open('http://bbs.zhiyoo.com/');
	     		break;	
				case 'dsqn':
	     			window.open('https://www.dsqnw.cc/');
	     		break;	
				case 'yishimei':
	     			window.open('http://www.yishimei.cn/');
	     		break;	
				case 'gfan':
	     			window.open('http://bbs.gfan.com/');
	     		break;
				case 'xda':
	     			window.open('https://www.xda-developers.com/');
	     		break;	
					
				
				case 'miku':
	     			window.open('https://miku.tools/');
	     		break;
				case 'dnqia':
	     			window.open('http://dnqia.cn/');
	     		break;
				case 'ttjx':
	     			window.open('https://www.downloadtwittervideo.com/zh-cn/');
	     		break;		
				case 'atool':
	     			window.open('http://www.atool9.com/');
	     		break;	
				case 'zhibo':
	     			window.open('http://bddn.cn/zb.htm');
	     		break;		
				case 'bangong':
	     			window.open('https://www.bangongziyuan.com/');
	     		break;		
				case 'zzsc':
	     			window.open('http://sc.chinaz.com/');
	     		break;
					
					
				case 'iplaysoft':
	     			window.open('https://www.iplaysoft.com/category/crack');
	     		break;	
				case 'shaoshupai':
	     			window.open('https://sspai.com/');
	     		break;	
				case 'appinn':
	     			window.open('https://www.appinn.com/');
	     		break;
				case 'dayanzai':
	     			window.open('http://www.dayanzai.me/');
	     		break;		
				case 'apkpure':
	     			window.open('https://apkpure.com/cn/');
	     		break;	
				case 'yx':
	     			window.open('http://yx.bsh.me/');
	     		break;
					
					
				case 'lusongsong':
	     			window.open('https://lusongsong.com/');
	     		break;
				case 'yhzdbm':
	     			window.open('https://2heng.xin/');
	     		break;	
				case 'fcj':
	     			window.open('https://withdewhua.space/');
	     		break;
				case 'yyxwz':
	     			window.open('http://www.depression.edu.hk/gb/home.html');
	     		break;
				case 'businiao':
	     			window.open('https://hao.su/');
	     		break;
					
					
					
				case 'blzysy':
	     			window.open('http://news.4399.com/blzysy/');
	     		break;	
				case 'hlsg':
	     			window.open('http://play.ziyuantun.com/#');
	     		break;
				case 'yhhyh':
	     			window.open('http://www.sketchswap.com/');
	     		break;
				case 'ald':
	     			window.open('https://cn.akinator.com/');
	     		break;
				case 'neave':
	     			window.open('https://neave.com/');
	     		break;
				case 'geektyper':
	     			window.open('http://geektyper.com/');
	     		break;
				case 'i8home':
	     			window.open('http://h5.pinpinhu.com/');
	     		break;
					
					
				case 'onedrive':
	     			window.open('https://onedrive.live.com');
	     		break;
				case 'lanzou':
	     			window.open('https://www.lanzou.com/u');
	     		break;	
				case 'jianguoyun':
	     			window.open('https://www.jianguoyun.com/#/');
	     		break;
				case 'icloud':
	     			window.open('https://www.icloud.com/');
	     		break;	
				case 'dropbox':
	     			window.open('https://www.dropbox.com/home');
	     		break;
				case 'bitqiu':
	     			window.open('https://pan.bitqiu.com/index');
	     		break;	
				case 'feemoo':
	     			window.open('https://www.feemoo.com/');
	     		break;
				case 'ctfilecn':
	     			window.open('https://home.ctfile.com/#item-files');
	     		break;	
				case 'ctfile':
	     			window.open('https://home.ctfile.net/#item-files');
	     		break;
					
					
				case 'taobao':
	     			window.open('https://www.taobao.com/');
	     		break;	
				case 'jd':
	     			window.open('https://www.jd.com');
	     		break;
				case 'weixingzpt':
	     			window.open('https://mp.weixin.qq.com');
	     		break;	
				case 'buluoqq':
	     			window.open('https://buluo.qq.com/buluoadmin/index.html');
	     		break;
				case 'chadan':
	     			window.open('http://www.chadan.wang/index');
	     		break;	
				case 'hytx':
	     			window.open('http://www.sjpif.net/');
	     		break;
				case 'szsjpf':
	     			window.open('http://www.159shouji.com/');
	     		break;	
				case 'lysm':
	     			window.open('http://m.sz-3c.com/');
	     		break;		
				case '1688':
	     			window.open('https://www.1688.com/');
	     		break;
				case 'alipay':
	     			window.open('https://mrchportalweb.alipay.com/user/home.htm#/');
	     		break;
				case 'chsi':
	     			window.open('https://www.chsi.com.cn/');
	     		break;
					
				
				case 'chongbuluo':
	     			window.open('https://search.chongbuluo.com/');
	     		break;
				case 'lerso':
	     			window.open('https://www.lerso.cn/');
	     		break;	
				case 'geekji':
	     			window.open('https://web.geekji.cn/');
	     		break;
				case 'workdh':
	     			window.open('https://www.9178.work/index.html');
	     		break;	
				case 'workxs':
	     			window.open('https://xueshu.9178.work/');
	     		break;
				case 'workcp':
	     			window.open('https://chanpin.9178.work/');
	     		break;
				case 'workcj':
	     			window.open('https://caijing.9178.work/');
	     		break;
				case 'seeseed':
	     			window.open('https://www.seeseed.com/');
	     		break;
				case 'psefan':
	     			window.open('http://hao.psefan.com/');
	     		break;
				case 'chuangzaoshi':
	     			window.open('http://chuangzaoshi.com/');
	     		break;
				case 'hippter':
	     			window.open('http://www.hippter.com/');
	     		break;
				case 'wxbbx':
	     			window.open('http://wxbbx.jh1z.com/');
	     		break;
				case 'guozhi':
	     			window.open('http://guozhivip.com/nav/');
	     		break;
		
	     	}		
 		}