# style\_2014\_page.css change

## ver.1.2.1 (2014-12-16) PT 2264
1. add two page html
	- `error.html`
	- `error_thankyou.html`
2. add two image to `public/images`
	- `public/images/banner_error_thankyou.jpg`
	- `public/images/error-boom.png`
3. add one icon to `public/style/images`
	- `public/style/images/icon_correct.png`
4. add error html style
		/**\* error page star case 2264 star **\*/
		...
		...
		/**\* error page star case 2264 end **\*/

_about The font_
	> Design use `Myriad Pro`字体，在没有此字体的系统里无法正常显示，我试用其他字体，但是Size都不正确，所以只有暂时先沿用设计稿上字体

_about `select` and `textarea`_
	> 这两个标签在IE下的显示比较难看，但是这两个标签只能给最起码的高宽和背景，无法正常调试样式。可以试用JS模拟，因为以前都是不用JS去模拟的，所以这次如果需要，我再做！

## ver.1.2.1 (2014-12-16) PT 2362
### sidebar change
1. 无添加任何图片
2. 样式更改为添加样式，添加部分为:
		''/* PT 2362 sidebar添加部分 Start */
		''...
		''...
		''/* PT 2362 sidebar添加部分 end */　
3. 结构有更改:
	- 原`listUl`改为`listUl-2` 
	- 其他详细样式见HTML
4. js部分在`xpa.js`内添加了　
```javascript
		/\* new sidebar slideup and slidedown \*/
		jQuery(document).ready(function($) {
		  $(".side-vertical-items > div").css({'display': 'none'})
		  $(".side-vertical-items h1").click(function(){
		    var $nextDiv = $(this).next('div');
		    var $listStyle = $nextDiv.css('display');
		    var $icon = $(this)
		    if ($listStyle == 'none') {
		      $nextDiv.show();
		      $icon.removeClass('close').addClass('open')
		    }else if($listStyle == 'block'){
		      $nextDiv.hide()
		      $icon.removeClass('open').addClass('close')
		    }
		  });
		});
		
```
	如无需要添加请告知删除！

## ver.1.2.1 (2014-12-16) tabBar style
1. 更改了五张背景图片
	- `public/style/images/list_icon_acctount.png`
	- `public/style/images/list_icon_PowerLeveling.png`
	- `public/style/images/list_icon_gold.png`
	- `public/style/images/list_icon_Guides.png`
	- `public/style/images/list_icon_Items.png`
2. 添加了一张背景图片
	- `public/style/images/list_icon_cdkey.png`
3. 更改了部分style
```css
		.productBox .tabBar li.selected a {
		   color: #f9f9f9 !important;
		 }
		 .productBox .tabBar #gold div, .productBox .tabBar #account div, .productBox .tabBar #powerleveling div, .productBox .tabBar #cdkey div, .productBox .tabBar #items div, .productBox .tabBar #guides div {
		   height: 31px;
		   padding: 10px;
		 }
		 .productBox .tabBar #gold div p, .productBox .tabBar #account div p, .productBox .tabBar #powerleveling div p, .productBox .tabBar #cdkey div p, .productBox .tabBar #items div p, .productBox .tabBar #guides div p {
		   padding-left: 30px;
		 }
		 .productBox .tabBar #gold div {
		   background: url(images/list\_icon\_gold.png) no-repeat 0px 5px;
		 }
		 .productBox .tabBar #account div {
		   background: url(images/list\_icon\_acctount.png) no-repeat 0px 5px;
		 }
		 .productBox .tabBar #powerleveling div {
		   background: url(images/list\_icon\_PowerLeveling.png) no-repeat 0px 5px;
		 }
		 .productBox .tabBar #items div {
		   background: url(images/list\_icon\_Items.png) no-repeat 0px 5px;
		 }
		 .productBox .tabBar #cdkey div {
		   background: url(images/list\_icon\_cdkey.png) no-repeat 0px 5px;
		 }
		 .productBox .tabBar #guides div {
		   background: url(images/list\_icon\_Guides.png) no-repeat 0px 5px;
		 }
```
4. 更改了部分结构，增加了一个`<li>...</li>`, 详情参看HTML页面。
	**以`offer_account_Acc_v30.html`为基准制作**


## ver 1.2.2 (2014-12-17) PT 2349

1. add images 
	- `public/images/homepage_popup_logo.png`
	- `public/images/homepage_popup_close.png`

2. add style
		\* PT 2364 homepage pop style \*/
		...
		…
		\* PT 2364 homepage pop style end \*/
3. add html
```html
	<div class="middleMain">
	  <div id="homepage-pop">
	  ...
	  </div>
	...
	...
	</div>
```
4. 由于上一个版本的问题，造成`#text_link_bar`和`#advSearch`调整了一下宽度。所以这次css文件还需要对这两个地方进行修改！然后需要跟`Eddy`说一下让他去修改`#text_link_bar`的宽度控制。

**PS: 请添加style进css文件的时候，按位置添加，不要都加在末尾处！**
