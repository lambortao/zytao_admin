// 定制Edit页面的结构
const thinkEdit = {
  // 基础信息，如标题，分类等
  basis: {
    title: {
      field: 'title',
      label: '标题',
      rules: '表单验证规则',
      libs: '模块名'
    }
  },
  // 主要信息，如富文本编辑器，上传图片等
  body: {

  },
  // 配置信息，如阅读权限，排序，发表和重置按钮等
  config: {

  }
}

// 定制基础的页面结构
const thinkBasic = {
  menu: {
    name: '话痨',
    icon: 'images/1.png',
    url: 'think'
  },
  list: {
    title: '全是话痨',
    funBottom: ['add', ['select', 'thinkSelectData'], 'reload', 'batchDel'],
    viewData: {
      showField: ['id', 'title', 'tmb', 'time'],
      tools: ['modify', 'read', 'up', 'del', 'order'],
      orderby: 'id desc'
    }
  },
  edit: {
    title: '话痨',
    structure: thinkEdit
  }
}

export default thinkBasic;