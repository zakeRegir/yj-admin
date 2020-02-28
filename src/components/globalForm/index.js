import createTag from './createTag'
const defaultWidth = '100px'
// 创建row函数
const createRow = createElement => {
  console.log(this)
  // 提取elRow数据(数据为el-row的props配置)以及每个col的数据
  const { columns = [], elRow } = this.props
  return createElement(
    // 渲染标签[String | Object | Function]
    'el-row',
    // 模板中属性对应的数据对象[Object]
    {
      props: elRow
    },
    // 子数据[String | Array]
    columns.map(column => createCol.call(this, createElement, column))
  )
}

// 创建Col函数
const createCol = (createElement, column) => {
  // 默认一列为整个屏幕长度
  let xs = { span: 24 }
  const { noWrap, model, formData, labelWidth } = this.props
  if (noWrap) {
    xs = {}
  }
  return createElement(
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
      createElement(
        'el-form-item',
        {
          props: {
            ...column,
            labelWidth:
              !column.label && !column.labelWidth
                ? '10px'
                : column.labelWidth || labelWidth
          }
        },
        [
          createTag.call(this, createElement, {
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
  name: 'gbFrom',
  props: {
    formData: Object,
    columns: Array,
    model: Object,
    elRow: Object,
    noWrap: Boolean
  },
  render(createElement, context) {
    console.log(context)
    if (context.props.formData) {
      context.data.attrs.model = context.props.formData
    }
    if (!context.data.attrs.labelWidth) {
      context.data.attrs.labelWidth = defaultWidth
    }
    return createElement('el-form', context.data, [createRow.call(context, createElement)])
  }
}
