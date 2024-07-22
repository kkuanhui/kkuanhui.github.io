# YDKJS Scope & Closures



### JS 的「compiler」

雖然 JS 使用上不需要像 C/C++、Java 一樣執行之前需要手動 compile，
但它並不是 interpreted language。
JS 是compile language，
JS 會在執行之前及時地 compile 生成機器語言交由 engine 執行。

### Scope 是什麼？

1. 記錄變數 container 的表單。
2. 更生動一點：變數活動的範圍。

Scope 的工作是提供 compiler 與 engine 查找變數資訊的地方。
當Compiler 發現 Scope 某個變數還沒被宣告，會要求 Scope 新增。
當 Engine 在 Scope 找不到程式需要的變數值，則會向Scope外層的Scope 尋找，直到 root 為止。

### JS 的 