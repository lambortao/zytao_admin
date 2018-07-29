# zytaoAdmin - 个人站点的简易后台系统

### 需要配置的地方
#### config
- index.js文件为所有配置文件的母文件
- 同级目录有一个views文件夹，里面是每个版块对应配置

#### 配置文件的结构：
- views中的每个文件都有两个对象
- Edit结尾的对象为该板块的edit页面的配置信息
- Basic结尾的对象为该板块的基础信息

#### Basic结尾的对象有三个子对象，分别定义

菜单->必选：
```
menu: {
  name: '版块的名字，会在左侧菜单显示',
  icon: '版块的icon，默认目录为assets，icon大小为25*25，建议上传高倍图',
  url: '版块的路由，为一级路由',
  children: '如果当前版块有子版块，可以定义在这里，目录结构同上，最多只允许有两级目录叠加'
}
```

列表->必选：
```
list: {
  title: '当前版块的名称，会显示在页面最上面',
  funBotton: ['add', ['select', 'selectData']],列表页顶部的操作按钮，add为新增按钮，select为筛选按钮，selectData为筛选的数据
  viewData: {
    列表上需要显示的字段 -> 最后一栏默认是快捷操作按钮
    showField: ['id', 'title', 'tmb', 'time'],
    快捷操作按钮 -> 默认的五个：修改、查看、置顶、删除、排序
    tools: ['modify', 'look', 'up', 'del', 'order'],
    orderby: '列表的排序规则'
  }
}
```

内页->可选：
```
edit: {
  title: '当前版块的名称，会显示在页面最上面',
  structure: '引入同页面的Edit结尾的文件'
}
```
  
  
  
  
