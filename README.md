# NBA-Search


### 如何使用
> 步驟 1: git clone https://github.com/LOTINGYI/NBA-search.git<br> 
> 步驟 2: cd nba-search <br>
> 步驟 3: npm install <br>
> 步驟 4: npm start <br>
> 去 http://localhost:3000 觀看結果

### 操做示意圖
![image](https://github.com/LOTINGYI/NBA-search/blob/master/src/images/Demo1.png)

### 搜尋方式
1. 搜尋相同隊伍的球員
2. 依據部分名字來做搜尋

### 分頁功能
1. 以15筆資料唯一頁
2. 上述有提到搜尋隊伍，搜尋隊伍列表會根據該頁有哪些隊伍並提供選項，不會提供全部隊伍
3. 當以隊伍做搜尋時，分頁也會因為資料量做出變化

### 球員詳細資料
1. 這邊有設定Router，當使用者點選Detail會跳轉到/:slug頁面
2. 當要回到搜尋頁面點選左上交Logo就可以回到主頁
3. 用卡片的方式去呈現資料

### 跳出視窗
1. 視窗上主要用的是全部的球員資料，計算小於15人隊伍所佔的比例，並用圓餅圖作呈現



