import createTag from './createTag'
const defaultWidth = '100px'
// 创建row函数(不能使用箭头函数)
const createRow = function(h) {
  // 提取elRow数据(数据为el-row的props配置)以及每个col的数据
  const { columns = [], elRow } = this.props
  return h(
    // 渲染标签[String | Object | Function]
    'el-row',
    // 模板中属性对应的数据对象[Object]
    {
      props: elRow,
      style: elRow ? elRow.style : null
    },
    // 子数据[String | Array]
    columns.map(column => createCol.call(this, h, column))
  )
}

// 创建Col函数
const createCol = function(h, column) {
  // 默认一列为整个屏幕长度
  let xs = { span: 24 }
  const { noWrap, model, formData, labelWidth } = this.props
  if (noWrap) {
    xs = {}
  }
  return h(
    'el-col',
    {
      props: {
        span: 11, // 默认占据11
        xs,
        ...column
      },
      key: column.prop
    },
    [
      h(
        'el-form-item',
        {
          props: {
            ...column,
            labelWidth:
              !column.label && !column.labelWidth
                ? '10px'
                : column.labelWidth || labelWidth
          },
          style: column.style,
          slot: column.itemSlot
        },
        [
          createTag.call(this, h, {
            column,
            row: model || formData
          })
        ]
      )
    ]
  )
}

export default {
  functional: true,
  name: 'gbForm',
  props: {
    formData: Object,
    columns: Array,
    model: Object,
    elRow: Object,
    noWrap: Boolean
  },
  render(h, context) {
    // context: https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1
    if (context.props.formData) {
      // 设置表单域对象,即el-form中的model属性
      context.data.attrs.model = context.props.formData
    }
    if (!context.data.attrs.labelWidth) {
      // 设置表单域标签的宽度,即el-form中的label-width属性
      context.data.attrs.labelWidth = defaultWidth
    }
    // 通过渲染函数渲染组件
    return h('el-form', context.data, [
      createRow.call(context, h)
    ])
  }
}
