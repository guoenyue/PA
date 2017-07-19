# singer ver.

## add xmas 2014 style
以下更改包括`master_2014_page`, `style_2014_page`, `index_2014`

1. 增加`xmas_2014.css`内的代码到各个文件下
	- `master_2014_page.css`
	- `style_2014_page.css`
	- `index_2014.css`
2. 在`head`头文件增加结构:

```html
		<div id="navBG">
			  <div><img src="images/2014_xmas_top.png" alt=""></div>
		</div>
```

3. 在`foot`页脚增加结构
```html
		<div id="foot">
			<div id="payIcon">
			</div>
			<div id="footBody">
			</div>
			<div id="xmas_2014">
			  <div id="xmas_2014_tree">
			   <img src="images/2014_xmas_foot_tree.png" alt="">
			  </div>
			</div>
		 </div>
```
4. 增加图片文件到目录
	- images 目录增加:
		`2014_xmas_foot_tree.png` 和 `2014_xmas_top.png`
	- css/images 目录增加:
		`2014_xmas_foot.png`

注意: `master_2014_page.css` 下请修改对应的背景目录,将`images/`修改为`HomeCss/images/`

## case 2361 style change
1. html change:
	- delete #contactUsBtn div
	- delete #textButton div
	- add `<div id="text_link_bar">...</div>`
			<div id="text_link_bar">
			  <ul>
				   <li>Gaming gear <br> <span>(154 offers) </span></li>
					 <li><a href="#">Software & Gaming CD KEYS</a> <br><span>(212 offers)</span></li>
					 <li>Steam <br><span>(Create new offer)</span></li>
					 <li>Game Codes <br><span>(212 offers)</span></li>
					 <li>Trading Cards <br><span>(212 offers)</span></li>
				</ul>
			</div>

2. css change:
	- delete about `#contactUsBtn` style
	- delete about `#textButton` style
	- add about `#text_link_bar` style
	```css
			/\* case 2361 change star to  here \*/
			\#text\_link\_bar {
			 background: #2a2a2a;
			 float: left;
			  width: 750px;
			  height: 39px;
			  margin-left: 9px;
			}
			\#text\_link\_bar ul {
			  width: 100%;
			  display: block;
			  color: #f9f9f9;
			  font-size: 12px;
			  padding: 6px 20px;
			}
			\#text\_link\_bar ul li {
			  float: left;
			  padding: 0 20px;
			  border-left: 1px solid #636363;
			  text-align: center;
			}
			\#text\_link\_bar ul li span {
			  font-size: 11px;
			  color: #BCBCBC;
			}
			\#text\_link\_bar ul li:first-child {
			  border: 0;
			}
			\#text\_link\_bar ul a:link {
			  color: #f9f9f9;
			}
			\#text\_link\_bar ul a:visited {
			 color: #f9f9f9;
			}
			\#text\_link\_bar ul a:hover {
			  color: #70b9ed;
			  text-decoration: none;
			}
			/\* delete #contactUsBtn style \*/
			/\* case 2361 change end to  here \*/
	```
3. Final…
